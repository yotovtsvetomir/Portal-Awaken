import { h, Component } from 'preact';
import render from 'preact-render-to-string'
import { a } from 'preact-router'
import style from './Header.css'
import { SocialIcon } from 'react-social-icons'
import Fingerprint2 from 'fingerprintjs2'

const logo = "https://res.cloudinary.com/awaken/image/upload/w_47,h_47,f_auto/v1549100793/portal/logo.webp";

function mobilemenu() {
  var x = document.getElementById("nav");
  var y = document.getElementById("ham");
  y.classList.toggle("change");
  if (x.style.display == "") {
    x.style.display = "block";
  }
  else if (x.style.display == "none") {
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
  }
}

function show() {
  event.stopPropagation();
  if (document.getElementById("awa_profile").style.display == "none") {
    document.getElementById("awa_profile").style.display = "flex";
  }
  else if (document.getElementById("awa_profile").style.display == "") {
    document.getElementById("awa_profile").style.display = "flex";
  }
  else {
    document.getElementById("awa_profile").style.display = "none";
  }
}

function logout() {
  fetch('https://www.portal.allawaken.com/api/logout', {
    method: 'get'
  }).then(function(response) {
    return response.text().then(function(text) {
      if (text == "LoggedOut") {
        window.location.assign("https://www.portal.allawaken.com");
      }
    });
  });
}

export default class Header extends Component {
  componentDidMount() {
    Fingerprint2.get(function (components) {
      fetch('https://www.portal.allawaken.com/api/islog', {
        method: 'post',
        body: JSON.stringify(components)
      }).then(function(response) {
        return response.text().then(function(text) {
          var txt = JSON.parse(text)
          if (txt != "Out") {
            var x = document.getElementById("sign");
            x.style.display = "none";
            var z = document.getElementById("awa_signed");
            z.style.display = "block";
            var user = JSON.parse(text)
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            name.innerHTML = user["name"];
            email.innerHTML = user["email"];
            document.getElementById("prof_img").src = user["imageUrl"];
            document.getElementById("profile_img").src = user["imageUrl"];

            fetch('https://www.portal.allawaken.com/api/notifications', {
              method: 'post',
              body: user["name"]
            }).then(function(response) {
              return response.text().then(function(text) {
                var res = text.split('//');
                var sbor = Number(res[0]) + Number(res[1])
                if (Number(sbor) == 0) {
                  document.getElementById("notifs").style.display = "none";
                  document.getElementById("notif_conn").style.display = "none";
                  document.getElementById("notif_mess").style.display = "none";
                }
                else {
                  document.getElementById("notifs").innerHTML = sbor;
                }

                if (Number(res[0]) == 0) {
                  document.getElementById("notif_conn").style.display = "none";
                }
                else {
                  document.getElementById("notif_conn").innerHTML = res[0];
                }

                if (Number(res[1]) == 0) {
                  document.getElementById("notif_mess").style.display = "none";
                }
                else {
                  document.getElementById("notif_mess").innerHTML = res[1];
                }
              });
            });
          }
        });
      });
    });


    window.onclick = function(event) {
      if (event.target != document.getElementById("awa_profile")) {
        document.getElementById("awa_profile").style.display = "none";
      }
    }
  }

  render()
  {
    return (
      <header className={style.header}>
        <div className="shell">
          <div className={style.header_container}>
            <div class={style.divlogo} style="display: flex;">
              <a href="https://www.portal.allawaken.com" className={style.logo} style={{ backgroundImage : `url(${logo})` }}></a>
            </div>
            <div className={style.nav}>
              <ul>
                <li>
                  <a href="/topstories">Top stories</a>
                </li>
                <li>
                  <a href="/partners">Partners</a>
                </li>
                <li>
                  <a href="/community">Community</a>
                </li>
                <li>
                  <a href="https://www.allawaken.com/awaken">Codex</a>
                </li>
                <li>
                  <a href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
            <div className={style.social}>
              <SocialIcon className={style.social_icon} url="https://www.facebook.com/All.Awaken.Official/" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
              <SocialIcon className={style.social_icon} url="https://www.instagram.com/allawaken" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
	      <SocialIcon className={style.social_icon} url="https://twitter.com/all_awaken" style={{ height: 30, width: 30 }} fgColor="#fff" bgColor="#202124" />
            </div>
            <div className={style.lognav}>
              <div id="ham" class={style.container} onClick={mobilemenu}>
                <div class={style.bar1}></div>
                <div class={style.bar2}></div>
                <div class={style.bar3}></div>
              </div>
              <a id="sign" class={style.sign} href="/login">SIGN IN</a>
              <a id="awa_signed" class={style.awa_signed} onClick={show}>
                <img id="prof_img" className={style.prof_img} alt="Profile image" />
                <div id="notifs" className={style.notif}>0</div>
              </a>
              <div id="awa_profile" className="awa_profile">
                <div className={style.awa_profile_head}>
                  <img id="profile_img" className={style.awa_profile_img} alt="Profile image" />
                  <div>
                    <h3 id="name">Name</h3>
                    <p id="email">email</p>
                  </div>
                </div>
                <div className={style.awa_profile_body}>
                  <a onClick={show} href="/myprofile"><i className="material-icons">account_box</i> <p>My Profile</p></a>
                  <a onClick={show} href="/myprofile/connections">
                    <i className="material-icons">person_add</i>
                    <div id="notif_conn" className={style.notifs}>1</div>
                    <p>Connections</p>
                  </a>
                  <a onClick={show} href="/myprofile/chat">
                    <i className="material-icons">mail</i>
                    <div id="notif_mess" className={style.notifs}>1</div>
                    <p>Chat</p>
                  </a>
                  <a onClick={show} href="/myprofile/posts"><i className="material-icons">comment</i> <p>Posts</p></a>
                  <a onClick={show} href="/myprofile/comments"><i className="material-icons">question_answer</i> <p>Comments</p></a>
                  <a onClick={show} href="/myprofile/settings"><i className="material-icons">settings_applications</i> <p>Settings</p></a>
                  <a onClick={logout}><i className="material-icons">exit_to_app</i> <p>Logout</p></a>
                </div>
              </div>
            </div>
            <div id="nav" className={style.nav2}>
              <ul>
                <li>
                  <a onClick={mobilemenu} href="/topstories">Top stories</a>
                </li>
                <li>
                  <a onClick={mobilemenu} href="/partners">Partners</a>
                </li>
                <li>
                  <a onClick={mobilemenu} href="/community">Community</a>
                </li>
                <li>
                  <a onClick={mobilemenu} href="/codex">Codex</a>
                </li>
                <li>
                  <a onClick={mobilemenu} href="/contact">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
