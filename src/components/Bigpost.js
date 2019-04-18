import { h, Component } from 'preact';
import style from './Bigpost.css'
import CommentList from './CommentList'
import render from 'preact-render-to-string'
import Bloplist from './Bloplist'
import MetaTags from 'react-meta-tags'
import ShareButton from 'react-social-share-buttons'
import JsonLd from 'react-jsonld';

function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function hidecomments(e) {
  var comments = event.target.parentElement;
  if (comments == null) {
    comments = event.target.parentElement.parentElement;
  }

  comments.style.display = "none";
}

function like(e) {
  var like = event.target.parentElement.children[1];
  var title = event.target.parentElement.parentElement.previousSibling.children[1].children[0];
  if (like.innerHTML.length != 10) {
    like = event.target.children[1];
  }
  if (like == null) {
    like = event.target.nextSibling;
    title = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0]
  }
  if (like == null) {
    like = event.target;
    title = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0];
  }

  fetch('https://www.portal.allawaken.com/api/postlike', {
    method: 'post',
    body: title.innerHTML
  }).then(function(response) {
    return response.text().then(function(text) {
      if (text == "liked") {
        var more = parseInt(like.innerHTML) + 1;
        like.innerHTML = more;
      }
      else {
        var more = parseInt(like.innerHTML) - 1;
        like.innerHTML = more;
      }
    });
  });
}

function showcomments(e) {
  var comments = event.target.parentElement.parentElement.nextSibling;
  if (comments == null) {
    comments = event.target.parentElement.parentElement.parentElement.nextSibling;
  }
  if (comments.style.display == "") {
    comments.style.display = "block";
  }
  else if (comments.style.display == "none") {
    comments.style.display = "block";
  }
  else {
    comments.style.display = "none";
  }

}

function addcomment(e) {
  //var title = event.target.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  //if (title == null) {
  //  title = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  //}
  //title = title.children[1].children[0].innerHTML;
  var title = document.getElementById("pst_title")

  var content = document.getElementById("inpc")
  //event.target.parentElement.previousSibling;
  //if (content == null) {
  //  content = event.target.parentElement.parentElement.previousSibling;
  //}
  //.children[1].children[0]

  if (content.value !== "") {
    fetch('https://www.portal.allawaken.com/api/addcomment', {
      method: 'post',
      body: title.innerHTML + "//" + content.value
    });
  }

  content.value = "";
}

class Bigpost extends Component {
  state = { element: [], somse: [], rposts: [] }

  constructor(props) {
      super(props);
      this.deletecomment = this.deletecomment.bind(this)
  }

  triggerFoo() {
   addcomment(event);
   this.foo.setState({foo: true});
  }

  deletecomment(event) {
    var content = event.target.closest('div').parentElement.parentElement.children[2].children[0].innerHTML;
    var name = event.target.closest('div').parentElement.previousSibling.children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletecomment', {
      method: 'post',
      body: content + "//" + name
    });
    this.foo.setState({foo: true});
  }

  componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/isimage', {
      method: 'get'
    }).then(response => response.json())
    .then(element => this.setState({ element }));

    fetch(`https://www.portal.allawaken.com/api/post/${this.props.tid}`, {
      method: 'get'
    }).then(response => response.json())
    .then(somse => this.setState({ somse }));
    this.foo.setState({foo: true});

    fetch(`https://www.portal.allawaken.com/api/randomposts`, {
      method: 'post',
      body: this.props.tid
    }).then(response => response.json())
    .then(rposts => this.setState({ rposts }));

    var mcon = document.getElementById('mcont');
    mcon.addEventListener("click", function(event) {
      event.preventDefault();
      if (event.target.tagName.toLowerCase() === 'a') {
        var formate = event.target.href.split('post/')[1];
        var formati = "https://" + formate;
        console.log(formati);
        window.open(formati, '_blank');
      }
    });

    this.myElement.addEventListener('DOMSubtreeModified', () => {
      var arrz = mcon.getElementsByTagName('iframe');
      for (var i = 0; i < arrz.length; i++) {
        var orig = mcon.getElementsByTagName('iframe')[i];
        var midl = "https://" + orig.src.split('post/')[1];
        orig.src = midl;
      }

      var arrc = mcon.getElementsByTagName('img');
      for (var i = 0; i < mcon.getElementsByTagName('img').length; i++) {
        mcon.getElementsByTagName('img')[i].src = "https://" + mcon.getElementsByTagName('img')[i].src.split('post/')[1];
      }
    });

    var zz = document.getElementById("inpc");
    zz.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        console.log("I Work");
        document.getElementById("commmm").click();
      }
    });
  }

  render() {
    this.props.comments = this.state.somse["cc"];
    this.props.imge = this.state.somse["imgUrl"];
    this.props.likes = this.state.somse["likes"];
    this.props.title = this.state.somse["title"];
    this.props.content= this.state.somse["content"];
    this.props.ccontent= this.state.somse["ccontent"];
    this.props.postby= this.state.somse["postby"];
    this.props.poston= this.state.somse["poston"]
    this.props.profa= "https://www.portal.allawaken.com/profile/" + this.state.somse["postby"];
    this.props.profimg= this.state.somse["profimg"];
    this.props.desc = this.state.somse["description"]
    this.props.color = "#1e88e5";
    this.props.liink = "https://www.portal.allawaken.com/post/" + this.state.somse["title"];

    const rp = this.state.rposts
    var elements = [];
    for (var i = 0; i < rp.length; i++) {
      if (rp[i]["title"] != null) {
        elements.push(<a href={"https://portal.allawaken.com/portal/" + rp[i]["title"]} style="margin-bottom: 20px; padding-bottom: 10px; display:flex; flex-direction: column; text-decoration:none; color:rgba(0,0,0,.84); font-weight: 600; line-height:22px; letter-spacing:0; border-bottom: 1px solid rgba(0,0,0,.15);"><img style="height: 100px; width: 140px; margin-bottom: 8px;" src={rp[i]["imgUrl"]}></img><p style="font-size: 16px;">{rp[i]["title"]}</p></a>)
      }
    }

    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${this.props.liink}`
      },
      "author": `${this.props.postby}`,
      "datePublished": `${this.props.poston}`,
      "dateModified": `${this.props.poston}`,
      "headline": `${this.props.title}`,
      "articleSection" : `${this.props.desc}`,
      "backstory": "Revealing the truth",
      "articleBody": `${this.props.ccontent}`,
      "about": `${this.props.desc}`,
      "keywords": "How the world works, Economics, Politics, Media, Education",
      "commentCount": `${this.props.comments}`,
      "image": {
      "@type": "imageObject",
      "url": `${this.props.imge}`
      },
      "publisher": {
        "@type": "Organization",
        "name": "All Awaken",
        "logo": {
          "@type": "imageObject",
          "url": "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549100793/portal/logo.webp"
          }
       }
    };

    return (
      <div className={style.shell2}>
        <MetaTags>
            <title>{this.props.title}</title>
            <meta name="description" content={this.props.desc} />

            <meta property="og:description" content={this.props.desc} />
						<meta property="og:title" content={this.props.title} />
						<meta property="og:type" content="article" />
						<meta property="og:url" content={this.props.liink} />
						<meta property="og:image" content={this.props.imge} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@All_Awaken" />
            <meta name="twitter:creator" content="@All_Awaken" />
            <meta name="twitter:title" content={this.props.title} />
            <meta name="twitter:description" content={this.props.desc} />
            <meta name="twitter:image" content={this.props.imge} />

            <JsonLd data={data} />
        </MetaTags>
        <div className={style.posst_wrapper}>
          <div className={style.posst}>
            <div className={style.posst_head}>
              <div className={style.posst_content}>
                <div className={style.head_divider}>
                  <div className={style.headline_holder}>
                    <h2 id="pst_title" className={style.posst_title}>{this.props.title}</h2>
                    <p>{this.props.desc}</p>
                    <div className={style.team}>
                      <img src={this.props.profimg} alt={"Image for post author: " + this.props.postby}/>
                      <div style="height: 100%; align-self: center;">
                        <a target="_blank" href={this.props.profa}>{this.props.postby}</a>
                        <p>{this.props.poston}</p>
                      </div>
                    </div>
                  </div>
                  <div className={style.posst_image} style={{ backgroundImage : `url(${this.props.imge})` }}></div>
                </div>
                <div className={style.ct_holder}>
                  <div className={style.related}>
                    <h4 className="home_title" style="padding-top: 0;">Related Posts</h4>
                    {elements}
                  </div>
                  <div id="mcont" className={style.posst_realcontent} dangerouslySetInnerHTML={{__html: this.props.content}} ref={myElement => this.myElement = myElement}>
                  </div>
                  <p>{this.props.ccontent}</p>
                </div>
              </div>
            </div>
            <div className={style.divider}>
              <div className={style.dot}></div>
              <div className={style.dot}></div>
              <div className={style.dot}></div>
            </div>
            <div className={style.posst_actions}>
              <div className={style.social}>
                <ShareButton
                     compact
                     socialMedia={'facebook'}
                     url={`${this.props.liink.replace(/ /g,"-")}`}
                 />
                 <ShareButton
                      compact
                      socialMedia={'twitter'}
		      url={`${this.props.liink.replace(/ /g,"-")}`}
                      text={`${this.props.liink.replace(/ /g,"-")}`}
                  />
              </div>
              <div className={style.ca}>
                <div className={style.ca_button} onClick={showcomments} style={{ background: `${this.props.color}` }}>
                    <i className="material-icons">comment</i>
                    <p>{this.props.comments}</p>
                </div>
                <div className={style.ca_button} onClick={like} style={{ background: `${this.props.color}` }}>
                  <i className="material-icons">thumb_up</i>
                  <p>{this.props.likes}</p>
                </div>
              </div>
            </div>
            <div id="comments" className={style.comments} >
              <h2>Comments</h2>
              <div className={style.addcomment}>
                <div className={style.ac}>
                  <img className={style.cp_image} src={this.state.element["imageUrl"]} alt={"My profile image"}/>
                  <div className={style.ac_holder} id="ac">
                    <input id="inpc" placeholder="Add comment ... "/>
                  </div>
                </div>
                <div className={style.ac_actions}>
                  <div id="commmm" onClick={this.triggerFoo.bind(this)} className={style.ca_button} style={{ background: `${this.props.color}` }}>
                    Comment
                  </div>
                </div>
              </div>
              <CommentList ref={foo => this.foo = foo} del={this.deletecomment} title={this.props.tid} imggg={this.state.element["imageUrl"]}/>
              <div className={style.ca_button} onClick={hidecomments} style={{ background: `${this.props.color}` }}>Hide comments</div>
            </div>
          </div>
          <div className={style.sidebar}>
            <h2 className="home_title">Popular</h2>
            <Bloplist lid="https://www.portal.allawaken.com/api/topblops"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Bigpost
