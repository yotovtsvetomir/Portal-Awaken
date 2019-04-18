import { h, Component } from 'preact'
import style from './Settings.css'
import render from 'preact-render-to-string'
import { Link } from 'preact-router'
import Promenu from './Promenu'
import Profilehead from './Profilehead'

function save() {
  var name = document.getElementById("nname");
  var subtitle = document.getElementById("ssubtitle");
  var causes = document.getElementById("causes");
  var interests = document.getElementById("interests");
  var profession = document.getElementById("profession");
  var aboutme = document.getElementById("aboutme");

  if (name.value == "") {
    name.value = name.placeholder;
  }
  if (subtitle.value == "") {
    subtitle.value = subtitle.placeholder;
  }
  if (causes.value == "") {
    causes.value = causes.placeholder;
  }
  if (interests.value == "") {
    interests.value = interests.placeholder;
  }
  if (profession.value == "") {
    profession.value = profession.placeholder;
  }
  if (aboutme.value == "") {
    aboutme.value = aboutme.placeholder;
  }

  fetch('https://www.portal.allawaken.com/api/setprofile', {
    method: 'post',
    body: name.value + "//" + subtitle.value + "//" + causes.value + "//" + interests.value + "//" + profession.value + "//" + aboutme.value
  }).then(function(response) {
    return response.text().then(function(text) {
      window.location.assign("https://www.portal.allawaken.com/myprofile");
    });
  });
}

function previewFile() {
  var preview = document.getElementById('sprofimg');
  var file    = document.getElementById('in1').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  if (file.size >= 300000) {
    alert("The Maximum Image size is 300kb, please upload smaller image.");
    return false;
  }

  var fd = new FormData();
  fd.append('upload_preset', 'awaken');
  fd.append('tags', 'browser_upload');
  fd.append('file', file);

  fetch('https://api.cloudinary.com/v1_1/awaken/upload', {
    method: 'post',
    body: fd
  }).then(function(response) {
    return response.json().then(function(resp) {
      var x = resp["secure_url"];
      var y = resp["public_id"];
      fetch('https://www.portal.allawaken.com/api/setprofimage', {
        method: 'post',
        body: x + "///" + y
      });
      window.location.assign("https://www.portal.allawaken.com/myprofile");
    });
  });
}

function previewFile2() {
  var preview = document.getElementById('sbackimg');
  var file    = document.getElementById('in2').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  if (file.size >= 300000) {
    alert("The Maximum Image size is 300kb, please upload smaller image.");
    return false;
  }

  var fd = new FormData();
  fd.append('upload_preset', 'awaken');
  fd.append('tags', 'browser_upload');
  fd.append('file', file);

  fetch('https://api.cloudinary.com/v1_1/awaken/upload', {
    method: 'post',
    body: fd
  }).then(function(response) {
    return response.json().then(function(resp) {
      var x = resp["secure_url"];
      var y = resp["public_id"];
      fetch('https://www.portal.allawaken.com/api/setbackimage', {
        method: 'post',
        body: x + "///" + y
      });
      window.location.assign("https://www.portal.allawaken.com/myprofile");
    });
  });
}

function changepass() {
  var password_field = document.getElementById("password");
  var lblpass = document.getElementById("lbl_password");
  var new_password_field = document.getElementById("new_password");
  var new_lblpass = document.getElementById("lbl_new_password");
  var rep_password_field = document.getElementById("rep_password");
  var button = document.getElementById("passbutton");

  function validatePassword(password) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }

  if (password_field.value == "") {
    password_field.style.borderColor = "#e53935";
    lblpass.innerHTML = "Password can't be empty.";
    lblpass.style.color = "#e53935";
  }
  else if (new_password_field.value == "") {
    new_password_field.style.borderColor = "#e53935"
    new_lblpass.innerHTML = "New Password can't be empty.";
    new_lblpass.style.color = "#e53935";
  }
  else if (new_password_field.value !== rep_password_field.value){
    new_password_field.style.borderColor = "#e53935"
    new_lblpass.innerHTML = "Passwords don't match.";
    new_lblpass.style.color = "#e53935";
  }
  else if (validatePassword(new_password_field.value) == false) {
    new_password_field.style.borderColor = "#e53935";
    new_lblpass.innerHTML = "The new password must be at least 8 characters, containing 1 number and 1 special character.";
    new_lblpass.style.color = "#e53935";
  }
  else {
    fetch('https://www.portal.allawaken.com/api/changepassword', {
      method: 'post',
      body: password_field.value + "///" + new_password_field.value
    }).then(function(response) {
      return response.text().then(function(text) {
        if (text == "ok") {
          button.style.background = "#43a047";
          button.innerHTML = "Password changed successfully!"
          password_field.value = "";
          new_password_field.value = "";
          rep_password_field.value = "";
        }
        else {
          button.innerHTML = "Password is not correct."
        }
      });
    });
  }
}

export default class Settings extends Component {
  componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function(response) {
      return response.text().then(function(text) {
          var profile = JSON.parse(text);
          var spimg = document.getElementById("sprofimg");
          var sbimg = document.getElementById("sbackimg");
          var ee = document.getElementById("mail");
          var nn = document.getElementById("nname");
          var ss = document.getElementById("ssubtitle");
          var cc = document.getElementById("causes");
          var ii = document.getElementById("interests");
          var pp = document.getElementById("profession");
          var aa = document.getElementById("aboutme");

          spimg.src = profile["profileimg"];
          sbimg.src = profile["backimg"];
          ee.value = profile["email"];
          nn.placeholder = profile["name"];
          ss.placeholder = profile["subtitle"];
          cc.placeholder = profile["causes"];
          ii.placeholder = profile["interests"];
          pp.placeholder = profile["profession"];
          aa.placeholder = profile["aboutme"];
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
              <div id="ps" className={style.ps}>
                <h2>Settings</h2>
                <div className={style.ps_form_wrapper}>
                  <div className={style.ps_form}>
                    <div className={style.ps_holder}>
                      <label id="lbl_mail" for="email">Email Address</label>
                      <input id="mail" type="email" disabled/>
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_name" for="name">Display Name</label>
                      <input id="nname" type="name" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_subtitle" for="subtitle">Display Subtitle</label>
                      <input id="ssubtitle" type="email" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_causes" for="causes">Causes</label>
                      <input id="causes" type="text" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_interests" for="interests">Interests</label>
                      <input id="interests" type="text" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_profession" for="profession">Profession</label>
                      <input id="profession" type="text" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_about" for="about">About me</label>
                      <input id="aboutme" type="text" />
                    </div>
                  </div>
                  <div className={style.ps_action}>
                    <Link onClick={save} className={style.button_save}>Save</Link>
                  </div>
                </div>

                <div className={style.ps_pictures_wrapper}>
                  <h2>Pictures</h2>
                  <div className={style.ps_pictures}>
                    <div className={style.ps_smallpic}>
                      <img id="sprofimg" className={style.ps_smpic} alt="Image placeholder"></img>
                      <input id="in1" onChange={previewFile} className={style.imin} type="file" />
                      <Link><p>Change profile image</p></Link>
                    </div>
                    <div className={style.ps_bigpic}>
                      <img id="sbackimg" className={style.ps_bgpic} alt="Image placeholder"></img>
                      <input id="in2" onChange={previewFile2} className={style.imin} type="file" />
                      <Link><p>Change background image</p></Link>
                    </div>
                  </div>
                </div>

                <div className={style.ps_password_wrapper}>
                  <h2>Password</h2>
                  <form className={style.ps_password}>
                    <input id="username" autocomplete="username" type="text" style="display: none" />
                    <div className={style.ps_holder}>
                      <label id="lbl_password" for="password">Current password</label>
                      <input id="password" autocomplete="current-password" type="password" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_new_password" for="new_password">New password</label>
                      <input id="new_password" autocomplete="new-password" type="password" />
                    </div>
                    <div className={style.ps_holder}>
                      <label id="lbl_rep_password" for="rep_password">Repeat new password</label>
                      <input id="rep_password" autocomplete="new-password" type="password" />
                    </div>
                    <div className={style.last_holder}>
                      <Link id="passbutton" onClick={changepass} className={style.button_cp}>Change Password</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
