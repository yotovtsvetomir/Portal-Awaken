import { h, Component } from 'preact'
import style from './Myprofile.css'
import render from 'preact-render-to-string'
import { Link } from 'preact-router'
import Promenu from './Promenu'
import Profilehead from './Profilehead'
import Postlist from './Postlist'

export default class Mycomments extends Component {
  componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function(response) {
      return response.text().then(function(text) {
          var profile = JSON.parse(text);
          var name = document.getElementById("naame");
          var subtitle = document.getElementById("subtitle");
          var causes = document.getElementById("ccauses");
          var interests = document.getElementById("iinterests");
          var profession = document.getElementById("pprofession");
          var aboutme = document.getElementById("aaboutme");

          name.innerHTML = profile["name"];
          subtitle.innerHTML = profile["subtitle"];
          causes.innerHTML = profile["causes"];
          interests.innerHTML = profile["interests"];
          profession.innerHTML = profile["profession"];
          aboutme.innerHTML = profile["aboutme"];
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
          var causes = document.getElementById("ccauses");
          var interests = document.getElementById("iinterests");
          var profession = document.getElementById("pprofession");
          var aboutme = document.getElementById("aaboutme");

          name.innerHTML = profile["name"];
          subtitle.innerHTML = profile["subtitle"];
          causes.innerHTML = profile["causes"];
          interests.innerHTML = profile["interests"];
          profession.innerHTML = profile["profession"];
          aboutme.innerHTML = profile["aboutme"];
      });
    });
  }

  render() {
    return (
      <div className="shell">
        <div className="profile">
          <Profilehead />
          <div className="profile_body">
            <Promenu />
            <div className="profile_content">
              <div id="pi" className={style.profile_form}>
                <h2 className={style.prof_title}>Info</h2>
                <div className={style.profile_holder}>
                  <span>Causes</span>
                  <p id="ccauses">Error</p>
                </div>
                <div className={style.profile_holder}>
                  <span>Interests</span>
                  <p id="iinterests">Error</p>
                </div>
                <div className={style.profile_holder}>
                  <span>Profession</span>
                  <p id="pprofession">Error</p>
                </div>
                <div className={style.profile_holder}>
                  <span>About me</span>
                  <p id="aaboutme">Error</p>
                </div>
              </div>

              <div id="pf" className={style.profile_follow}>
                <h2 className={style.prof_title}>My Comments</h2>
                <Postlist link="https://www.portal.allawaken.com/api/mycomments" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
