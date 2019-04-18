import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './Posst.css'
import CommentList from './CommentList'
import render from 'preact-render-to-string'
import ShareButton from 'react-social-share-buttons'
import JsonLd from 'react-jsonld'
import MetaTags from 'react-meta-tags'

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
  if (comments.style.display == "none") {
    comments.style.display = "block";
  }
  else {
    comments.style.display = "none";
  }

}

function addcomment(e) {
  var title = event.target.closest("div").parentElement.parentElement.parentElement.previousSibling.previousSibling.children[1].children[0];

  var content = event.target.closest("div").parentElement.previousSibling;

  if (content.children[1].children[0].value != "") {
    fetch('https://www.portal.allawaken.com/api/addcomment', {
      method: 'post',
      body: title.innerHTML + "//" + content.children[1].children[0].value
    });
  }
  content.children[1].children[0].value = "";
}

function updatenum(e) {
  var title = event.target.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  if (title == null) {
    title = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  }
  title = title.children[1].children[0].innerHTML;

  var cc = event.target.parentElement.parentElement.parentElement.previousSibling;
  if (cc.innerHTML == "Comments") {
    cc = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.children[1].children[0].children[1];
  }
  else {
    cc = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0].children[1];
  }

  fetch(`https://www.portal.allawaken.com/api/cc`, {
    method: 'post',
    body: title
  }).then(function(response) {
    return response.text().then(function(text) {
      cc.innerHTML = text;
    });
  });
}


class Posst extends Component {
  state = { element: [], useer: [], dissp: "", upd: ""}

  constructor(props) {
    super(props)
    this.deletecomment = this.deletecomment.bind(this)
  }

  triggerFoo() {
   addcomment(event);
   updatenum(event);
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

  deletecompost(event) {
    var title = event.target.closest('div').parentElement.parentElement.parentElement.nextSibling.children[1].children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletecompost', {
      method: 'post',
      body: title
    }).then(window.location.assign("https://www.portal.allawaken.com"));
    this.foo.setState({foo: true});
  }

  componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/isimage', {
      method: 'get'
    }).then(response => response.json())
    .then(element => this.setState({ element }));

    var zz = document.getElementById("inp");
    zz.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("comm").click();
      }
    });
  }

  render() {
    if (this.props.ussr == this.props.postby) {
      this.state.dissp = "display: flex;"
    }
    if (this.props.ussr == "All Awaken") {
      this.state.dissp = "display: flex;"
    }

    const data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${this.props.link}`
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
      <div className={style.posst_wrapper}>
        <MetaTags>
            <JsonLd data={data} />
        </MetaTags>
        <div className={style.posst}>
          <div className={style.posst_meta}>
            <div className={style.meta}>
              <img src={this.props.profimg} alt={"Image for post author: " + this.props.postby}/>
              <div>
                <a target="_blank" href={this.props.proflink}>{this.props.postby}</a>
                <p>{this.props.poston}</p>
              </div>
            </div>
            <div className={style.meta}>
              <div className={style.posst_decor}>
                <i className="material-icons" style={{ color: `${this.props.color}` }}>public</i>
              </div>
            </div>
            <div className={style.del}>
              <div onClick={this.deletecompost} style={this.state.dissp} className={style.buttondel}><i className="material-icons">delete</i></div>
            </div>
          </div>
          <a href={this.props.link} className={style.posst_head}>
            <div className={style.posst_image} style={{ backgroundImage : `url(${this.props.imge})` }}></div>
            <div className={style.posst_content}>
              <h2 id="posst_title" className={style.posst_title}>{this.props.title}</h2>
              <p>{this.props.desc}</p>
            </div>
          </a>
          <div className={style.posst_actions}>
            <div style="display:none;" className={style.social}>
              <ShareButton
                   compact
                   socialMedia={'facebook'}
                   url={`${this.props.link}`}
               />
               <ShareButton
                    compact
                    socialMedia={'twitter'}
		                url={`${this.props.link}`}
                    text={`${this.props.link}`}
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
          <div style={{ display: 'none' }} id="comments" className={style.comments} >
            <h2>Comments</h2>
            <div className={style.addcomment}>
              <div className={style.ac}>
                <img className={style.cp_image} src={this.state.element["imageUrl"]} alt="Profile image" />
                <div className={style.ac_holder} id="ac">
                  <input id="inp" placeholder="Comment ... "/>
                </div>
              </div>
              <div className={style.ac_actions}>
                <div id="comm" onClick={this.triggerFoo.bind(this)} className={style.ca_button} style={{ background: `${this.props.color}` }}>
                  Comment
                </div>
              </div>
            </div>
            <CommentList ref={foo => this.foo = foo} del={this.deletecomment} title={this.props.title} imggg={this.state.element["imageUrl"]} />
            <div className={style.ca_button} onClick={hidecomments} style={{ background: `${this.props.color}` }}>Hide comments</div>
          </div>
        </div>
	<MetaTags>
            <meta name="google-site-verification" content="FyBmKGOdF_OUH0_qh67NdHEF_Yj-HiBI81cwKXyM1pE" />
    	</MetaTags>
      </div>
    );
  }
}

export default Posst
