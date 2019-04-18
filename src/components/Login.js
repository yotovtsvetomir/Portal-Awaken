import { h, Component } from 'preact'
import style from './Login.css'
import GoogleLogin from 'react-google-login';
import MetaTags from 'react-meta-tags'
import Fingerprint2 from 'fingerprintjs2'

const google = require('./images/google.png');

function responseGoogle(response) {
	var user = response["profileObj"];
  	fetch('https://www.portal.allawaken.com/api/validate_google', {
    		method: 'post',
    		body: user["name"] + "//" + user["email"] + "//" + "GoogleLogged"  +  "//" + user["imageUrl"]
  	}).then(function(response) { return response.text().then(function(text) {
      		if (text == "Success") {
        		window.location.assign("https://www.portal.allawaken.com/myprofile");
      		}
      		else {
        		var p = "FAIL";
      		}
    	});
      });
}

function validate() {
  Fingerprint2.get(function (components) {
      var x = document.getElementById("mail").value;
      var y = document.getElementById("password").value;
      var p = document.getElementById("title");
      fetch('https://www.portal.allawaken.com/api/validate', {
        method: 'post',
        body: x + "//" + y + "//" + JSON.stringify(components)
      }).then(function(response) {
        return response.text().then(function(text) {
          if (text == "Success") {
            p.innerHTML = "SUCCESS";
	    window.location.assign("https://www.portal.allawaken.com/myprofile");
          }
          else {
            p.style.borderRadius = "3px";
            p.style.color = "#fff";
            p.style.background = "#e53935";
            p.innerHTML = "Username or Password is incorrect.";
          }
        });
      });
    });
}

function focmail() {
  var mail = document.getElementById("mail");
  var lblmail = document.getElementById("lbl_mail");
  mail.style.borderColor = "#1e88e5";
  lblmail.innerHTML = "Email Address";
  lblmail.style.color = "#1e88e5";
  lblmail.style.left = "15px";
  lblmail.style.top = "-10px";
  lblmail.style.fontSize = "14px";
}

function focpass() {
  var password = document.getElementById("password");
  var lblpassword = document.getElementById("lbl_password");
  password.style.borderColor = "#1e88e5";
  lblpassword.innerHTML = "Password";
  lblpassword.style.color = "#1e88e5";
  lblpassword.style.left = "15px";
  lblpassword.style.top = "-10px";
  lblpassword.style.fontSize = "14px";
}

function chekMail() {
  var mai = document.getElementById("mail");
  var mail = document.getElementById("mail").value;
  var lblmail = document.getElementById("lbl_mail");

  if (mail !== "") {
    mai.style.borderColor = "rgba(0, 0, 0, .2)";
    lblmail.style.color = "rgba(0, 0, 0, .8)";
    lblmail.style.left = "15px";
    lblmail.style.top = "-10px";
    lblmail.style.background = "#fff"
    lblmail.style.fontSize = "14px";
  }
  else {
    mai.style.borderColor = "rgba(0, 0, 0, .2)";
    lblmail.style.color = "rgba(0, 0, 0, .8)";
    lblmail.style.left = "13px";
    lblmail.style.top = "18px";
    lblmail.style.fontSize = "16px";
  }
}

function chekPass() {
  var pass = document.getElementById("password");
  var password = document.getElementById("password").value;
  var lblpassword = document.getElementById("lbl_password");

  if (password !== "") {
    pass.style.borderColor = "rgba(0, 0, 0, .2)";
    lblpassword.style.color = "rgba(0, 0, 0, .8)";
    lblpassword.style.left = "15px";
    lblpassword.style.top = "-10px";
    lblpassword.style.background = "#fff"
    lblpassword.style.fontSize = "14px";
  }
  else {
    pass.style.borderColor = "rgba(0, 0, 0, .2)";
    lblpassword.style.color = "rgba(0, 0, 0, .8)";
    lblpassword.style.left = "13px";
    lblpassword.style.top = "18px";
    lblpassword.style.fontSize = "16px";
  }
}


export default class Login extends Component {
  componentDidMount() {
    document.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("login").click();
      }
    });
  }

  render() {
    return (
      <div className="shell">
        <MetaTags>
            <title>All Awaken Portal: Time to wake up!</title>
            <meta name="description" content="Sign in" />
            <meta property="og:title" content="All Awaken Portal: Time to wake up!" />
            <meta property="og:description" content="Sign in" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.portal.allawaken.com/login" />
            <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1547905379/4795.jpg" />
            <meta property="fb:app_id" content="1118435171656958"/>
         </MetaTags>
        <div className={style.login_wrapper}>
          <div className={style.login}>
            <h2 id="title" className={style.login_title}>Sign In</h2>
            <form className={style.login_form}>
              <div className={style.login_holder}>
                <input onBlur={chekMail} onFocus={focmail} id="mail" type="email" name="username" autocomplete="username" />
                <label id="lbl_mail" for="email">Email Address</label>
              </div>
              <div className={style.login_holder}>
                <input onBlur={chekPass} onFocus={focpass} id="password" type="password" name="password" autocomplete="current-password" />
                <label id="lbl_password" for="password">Password</label>
              </div>
              <a id="login" className={style.login_button} onClick={validate}>Sign In</a>
              <GoogleLogin
                id="glog"
                clientId="8366053971-i40f7iblgdan3oug4v112bsut05koppj.apps.googleusercontent.com"
                buttonText="Log in with Google"
                render={renderProps => (
                  <button className={style.login_google} onClick={renderProps.onClick}><div className={style.logo} style={{ backgroundImage : `url(${google})` }}></div>Sign in with Google</button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
            </form>
            <a href="/forgotpassword" className={style.login_forget}>Forgot password?</a>
          </div>
          <p className={style.login_signup_text}>Don't have an account? <a href="/register" className={style.login_signup}>Sign up!</a></p>
        </div>
      </div>
    );
  }
}
