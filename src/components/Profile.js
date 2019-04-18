import { h, Component } from 'preact'
import style from './Myprofile.css'
import render from 'preact-render-to-string'
import { Link } from 'preact-router'
import Postlist from './Postlist'

function addcon() {
  var nname = document.getElementById("naame").innerHTML;
  var texxt = document.getElementById("texxt").value;
  if (texxt == "") {
    texxt = "I would like to connect with you.";
  }
  fetch('https://www.portal.allawaken.com/api/ispostlog', {
    method: 'get'
  }).then(function(response) {
    return response.text().then(function(text) {
      if (text != "Out") {
        var user = JSON.parse(text)
        var mname = user["name"];
        var conn = document.getElementById("connect");
        fetch('https://www.portal.allawaken.com/api/connectionrequest', {
          method: 'post',
          body: mname + "//" + nname + "//" + texxt
        }).then(function(response) {
          return response.text().then(function(text) {
            var but = document.getElementById("connect");
            if (text == "Success") {
              document.getElementById("conmod").style.display = "none";
              but.style.pointerEvents = 'none';
              but.innerHTML = "Already sent";
            }
            else {
              document.getElementById("conmod").style.display = "none";
              but.style.pointerEvents = 'none';
              but.innerHTML = "Already sent";
            }
          });
        });
      }
    });
  });
}

function showmod() {
  if (document.getElementById("conmod").style.display == "none") {
    document.getElementById("conmod").style.display = "flex";
  }
  else if (document.getElementById("conmod").style.display == "") {
    document.getElementById("conmod").style.display = "flex";
  }
  else {
    document.getElementById("conmod").style.display = "none";
  }
}

export default class Profile extends Component {
  componentDidMount() {
    const pname = this.props.pname;

    fetch(`https://www.portal.allawaken.com/api/profile/${pname}`, {
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
          var pimg = document.getElementById("profimg");
          var bimg = document.getElementById("backimg");
          var spimg = document.getElementById("sprofimg");
          var sbimg = document.getElementById("sbackimg");
          var secimg = document.getElementById("2img");
          var secname = document.getElementById("2name");
          var secsubtitle = document.getElementById("2subtitle");

          pimg.src = profile["profileimg"];
          secimg.src = profile["profileimg"];
          bimg.src = profile["backimg"];
          name.innerHTML = profile["name"];
          secname.innerHTML = profile["name"];
          subtitle.innerHTML = profile["subtitle"];
          secsubtitle.innerHTML = profile["subtitle"];
          causes.innerHTML = profile["causes"];
          interests.innerHTML = profile["interests"];
          profession.innerHTML = profile["profession"];
          aboutme.innerHTML = profile["aboutme"];
      });
    });

    fetch('https://www.portal.allawaken.com/api/checkconn', {
      method: 'post',
      body: this.props.pname
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
  }

  render() {
    return (
      <div className="shell">
        <div className={style.profile}>
          <div className={style.profile_head}>
            <div className={style.profile_bigimg}>
              <img id="backimg" className={style.profile_backimg} alt="Profile background image" ></img>
              <div className={style.profile_head_holder}>
                <img id="profimg" className={style.profile_smallimg} alt="Profile image"></img>
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
          <div className={style.message}>
            <Link id="connect" onClick={showmod} className={style.ms_link}>Connect</Link>
          </div>

          <div id="conmod" className={style.conmodal}>
            <h2>Connect with</h2>
            <div className={style.conwrap}>
              <img id="2img" alt="My Profile image"/>
              <div className={style.cp_info}>
                <h3 id="2name"></h3>
                <h5 id="2subtitle"></h5>
              </div>
            </div>
            <div className={style.conform}>
              <textarea id="texxt" placeholder="I would like to connect with you." />
            </div>
            <div className={style.conactions}>
              <Link onClick={addcon} className={style.button_save}>Send request</Link>
              <Link onClick={showmod} className={style.button_save}>Cancel</Link>
            </div>
          </div>

          <div className={style.profile_body}>
            <div className={style.profile_content} style="width: 100%;">
              <div id="pi" className={style.profile_form} style="margin-left: 0;">
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

              <div id="pf" className={style.profile_follow} style="margin-left: 0;">
                <h2 className={style.prof_title}>Activity</h2>
                <Postlist name={this.props.pname} link="https://www.portal.allawaken.com/api/activity" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
