import { h, Component } from 'preact'
import style from './Comment.css'
import render from 'preact-render-to-string'
import Replylist from './Replylist'

function clike(e) {
  var name = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  name = name.children[0].children[0].innerHTML;
  var content = event.target.parentElement.parentElement.parentElement.parentElement;
  content = content.children[0].innerHTML;
  var fiel = event.target.parentElement;
  if (fiel.children[1] == null) {
    fiel = event.target;
  }

  fiel = fiel.children[1];

  fetch('https://www.portal.allawaken.com/api/commentlike', {
    method: 'post',
    body: name + "//" + content
  }).then(function(response) {
    return response.text().then(function(text) {
      if (text == "liked") {
        var more = parseInt(fiel.innerHTML) + 1;
        fiel.innerHTML = more;
      }
      else {
        var more = parseInt(fiel.innerHTML) - 1;
        fiel.innerHTML = more;
      }
    });
  });
}

function showreply(e) {
  var reply = event.target.parentElement.parentElement.nextSibling.nextSibling;
  var replies = event.target.parentElement.parentElement.nextSibling.nextSibling.nextSibling;
  if (reply.style.display == "none") {
    reply.style.display = "block";
    replies.style.display = "block";
  }
  else {
    reply.style.display = "none";
    replies.style.display = "none";
  }
}

function showreplies(e) {
  var replies = event.target.parentElement.nextSibling.nextSibling;
  if (replies.style.display == "none") {
    replies.style.display = "block";
  }
  else if (replies.style.display == "") {
    replies.style.display = "block";
  }
  else {
    replies.style.display = "none";
  }
}

export default class Comment extends Component {
  state = {disp: "" }

  constructor(props) {
    super(props)
    this.addreply = this.addreply.bind(this)
    this.deletereply = this.deletereply.bind(this)
  }

  deletereply(event) {
    var ct = event.target.closest('div').parentElement.parentElement.children[2].children[0].innerHTML;
    var name = event.target.closest('div').parentElement.previousSibling.children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletereply', {
      method: 'post',
      body: ct + "//" + name
    });
    this.roo.setState({roo: true});
  }

  updaterr(event) {
    var rr = event.target.closest('div').parentElement.parentElement.previousSibling.children[0];
    var name = this.props.name;
    var content = this.props.content;

    fetch(`https://www.portal.allawaken.com/api/rr`, {
      method: 'post',
      body: name + "//" + content
    }).then(function(response) {
      return response.text().then(function(text) {
        var z = "View " + text + " replies";
        rr.innerHTML = z;
      });
    });
  }

  addreply(event) {
    var newcontent = event.target.parentElement.previousSibling.children[1].children[0];
    var name = this.props.name;
    var content = this.props.content;

    if (newcontent.value !== "") {
      fetch('https://www.portal.allawaken.com/api/addreply', {
        method: 'post',
        body: name + "//" + content + "//" + newcontent.value
      });
      this.updaterr(event);
      this.roo.setState({roo: true});
    }
    else {
      this.updaterr(event);
      this.roo.setState({roo: true});
    }

    newcontent.value = "";
    this.roo.setState({roo: true});
  }

  componentDidMount() {
    var tg = document.getElementById("inxp");
    tg.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("repl").click();
      }
    });
  }

  render() {
    if (this.props.matz == "yes") {
      this.state.disp = "display: flex;"
    }
    else if (this.props.repp == "All Awaken") {
      this.state.disp = "display: flex;"
    }
    else {
      this.state.disp = "display: none;"
    }

    return (
      <div className={style.cp}>
        <a href={`/profile/${this.props.name}`}><img className={style.cp_image} src={this.props.imge} alt={"Image for comment writer: " + this.props.name} /></a>
        <div className={style.cp_name}>
          <a href={`/profile/${this.props.name}`}>
            <h4>{this.props.name}</h4>
          </a>
          <div className={style.menu}>
            <div onClick={this.props.del} style={this.state.disp} className={style.del_button}><i className="material-icons">delete</i></div>
          </div>
          <div className={style.cc}>
            <p className="icontent">{this.props.content}</p>
            <div className={style.cc_metas}>
              <div className={style.cc_meta}>
                <i class="material-icons">update</i>
                <p>{this.props.commenton}</p>
              </div>
              <div className={style.cc_meta}>
                <a onClick={clike} className={style.cc_like}>
                  <i class="material-icons">thumb_up</i>
                  <p>{this.props.likes}</p>
                </a>
              </div>
              <div className={style.cc_meta}>
                <div onClick={showreply} className={style.cc_reply}>Reply</div>
              </div>
            </div>
            <div className={style.cc_replies}>
              <div onClick={showreplies} className={style.cc_reply}>View {this.props.rr} replies</div>
            </div>
            <div className={style.addreply} style="display: none;">
              <div className={style.ac}>
                <img className={style.ccp_image} src={this.props.imgg} alt={"Profile image"}/>
                <div className={style.ac_holder} id="ac">
                  <input id="inxp" placeholder="Reply ... "/>
                </div>
              </div>
              <div className={style.ac_actions}>
                <div id="repl" onClick={this.addreply} className={style.ca_button} style="background: #777;">Reply</div>
              </div>
            </div>
            <div className={style.replies}>
              <Replylist ref={roo => this.roo = roo} name={this.props.name} content={this.props.content} mat={this.props.repp} dele={this.deletereply} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
