import { h, Component } from 'preact'
import style from './Promenu.css'
import render from 'preact-render-to-string'

function logout() {
  fetch('https://www.portal.allawaken.com/api/logout', {
    method: 'get'
  }).then(function(response) {
    return response.text().then(function(text) {
      console.log(text);
      if (text == "LoggedOut") {
        window.location.assign("https://www.portal.allawaken.com");
      }
    });
  });
}

const Promenu = ({title, desc, color}) => (
  <div className={style.profile_sidebar}>
      <div className={style.profile_sidemenu}>
        <a href="/myprofile"><i className="material-icons">account_box</i> <p>My Profile</p></a>
        <a href="/myprofile/posts"><i className="material-icons">comment</i> <p>Posts</p></a>
        <a href="/myprofile/comments"><i className="material-icons">question_answer</i> <p>Comments</p></a>
        <a href="/myprofile/connections"><i className="material-icons">people</i> <p>Connections</p></a>
        <a href="/myprofile/chat"><i className="material-icons">mail</i> <p>Chat</p></a>
        <a href="/myprofile/settings"><i className="material-icons">settings_applications</i> <p>Settings</p></a>
        <a onClick={logout}><i className="material-icons">exit_to_app</i> <p>Logout</p></a>
      </div>
  </div>
);

export default Promenu
