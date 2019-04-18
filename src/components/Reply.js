import { h, Component } from 'preact'
import { Link } from 'preact-router'
import style from './Comment.css'
import render from 'preact-render-to-string'

const pimage = require('./images/post.jpg');

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

  fetch('https://www.portal.allawaken.com/api/replylike', {
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

export default class Reply extends Component {
  state = {dispp: "" }

  render() {
    if (this.props.jj == "yes") {
      this.state.dispp = "display: flex;"
    }

    return (
      <div className={style.cp} style="width: 100%; margin-left: 0;">
        <Link href={`/profile/${this.props.name}`}><img className={style.cp_image} src={this.props.imge} alt="My profile image" /></Link>
        <div className={style.cp_name}>
          <Link href={`/profile/${this.props.name}`}><h4>{this.props.name}</h4></Link>
          <div className={style.menu}>
            <div onClick={this.props.dellee} style={this.state.dispp} className={style.del_button}><i className="material-icons">delete</i></div>
          </div>
          <div className={style.cc}>
            <p>{this.props.content}</p>
            <div className={style.cc_metas}>
              <div className={style.cc_meta}>
                <i class="material-icons">update</i>
                <p>{this.props.commenton}</p>
              </div>
              <div className={style.cc_meta}>
                <Link onClick={clike} className={style.cc_like}>
                  <i class="material-icons">thumb_up</i>
                  <p>{this.props.likes}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
