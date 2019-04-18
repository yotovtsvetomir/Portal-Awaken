import { h, Component } from 'preact'
import style from './Profilehead.css'
import render from 'preact-render-to-string'
import { Link } from 'preact-router'


export default class Myprofile extends Component {
  componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function(response) {
      return response.text().then(function(text) {
          var profile = JSON.parse(text);
          var name = document.getElementById("naame");
          var subtitle = document.getElementById("subtitle");
          var pimg = document.getElementById("profimg");
          var bimg = document.getElementById("backimg");

          pimg.src = profile["profileimg"];
          bimg.src = profile["backimg"];
          name.innerHTML = profile["name"];
          subtitle.innerHTML = profile["subtitle"];

          fetch('https://www.portal.allawaken.com/api/checkconnections', {
            method: 'get'
          }).then(function(response) {
            return response.text().then(function(text) {
              if (Number(text) == 1) {
                document.getElementById("connections").innerHTML = text + " Connection"
              }
              else {
                document.getElementById("connections").innerHTML = text + " Connections"
              }
            });
          });
      });
    });
  }

  componentDidUpdate() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function(response) {
      return response.text().then(function(text) {
          var profile = JSON.parse(text);
          var name = document.getElementById("naame");
          var subtitle = document.getElementById("subtitle");
          var pimg = document.getElementById("profimg");
          var bimg = document.getElementById("backimg");

          pimg.src = profile["profileimg"];
          bimg.src = profile["backimg"];
          name.innerHTML = profile["name"];
          subtitle.innerHTML = profile["subtitle"];

          fetch('https://www.portal.allawaken.com/api/checkconnections', {
            method: 'get'
          }).then(function(response) {
            return response.text().then(function(text) {
              if (Number(text) == 1) {
                document.getElementById("connections").innerHTML = text + " Connection"
              }
              else {
                document.getElementById("connections").innerHTML = text + " Connections"
              }
            });
          });
      });
    });
  }

  render() {
    return (
      <div className={style.profile_head}>
        <div className={style.profile_bigimg}>
          <img id="backimg" className={style.profile_backimg} alt="My Profile background image"></img>
          <div className={style.profile_head_holder}>
            <img id="profimg" className={style.profile_smallimg} alt="My Profile image"></img>
            <div className={style.profile_headline}>
              <h2 id="naame">Error</h2>
              <h3 id="subtitle">Error</h3>
            </div>
            <div className={style.profile_connections}>
              <p id="connections">0 Connections</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
