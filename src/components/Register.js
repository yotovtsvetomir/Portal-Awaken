import { h } from 'preact';
import { Link } from 'preact-router'
import style from './Register.css'
import GoogleLogin from 'react-google-login'
import MetaTags from 'react-meta-tags'

const google = require('./images/google.png');

const responseGoogle = (response) => {
  var user = response["profileObj"];
  fetch('https://www.portal.allawaken.com/api/validate_google', {
    method: 'post',
    body: user["name"] + "//" + user["email"] + "//" + user["imageUrl"]
  }).then(function(response) {
    return response.text().then(function(text) {
      if (text == "Success") {
        window.location.assign("https://www.portal.allawaken.com");
      }
      else {
        var p = "FAIL";
      }
    });
  });
}

function register() {
  var mail = document.getElementById("mail").value;
  var password = document.getElementById("password").value;
  var uname = document.getElementById("uname").value;
  var email_field = document.getElementById("mail");
  var password_field = document.getElementById("password");
  var name_field = document.getElementById("uname");
  var lblname = document.getElementById("lbl_name");
  var lblmail = document.getElementById("lbl_mail");
  var lblpassword = document.getElementById("lbl_password");
  var term = document.getElementById("terms_check");
  var lblterm = document.getElementById("lbl_term");
  var but = document.getElementById("regbutton");
  var sign_text = document.getElementById("sign_text");
  var sign_anim = document.getElementById("sign_anim");
  var esq = "";

  but.style.pointerEvents = 'none';
  sign_text.style.display = 'none';
  sign_anim.style.display = 'inline-block';

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function validatePassword(password) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(password);
  }

  if (uname == "") {
    name_field.style.borderColor = "#e53935";
    lblname.innerHTML = "Nickname can't be empty.";
    lblname.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (uname.length < 4 ) {
    name_field.style.borderColor = "#e53935";
    lblname.innerHTML = "Nickname must be at least 4 characters.";
    lblname.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (mail == "") {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email can't be empty.";
    lblmail.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (validateEmail(mail) == false) {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email Address is not valid.";
    lblmail.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (password == "") {
    password_field.style.borderColor = "#e53935";
    lblpassword.innerHTML = "Password can't be empty.";
    lblpassword.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (validatePassword(password) == false) {
    password_field.style.borderColor = "#e53935";
    lblpassword.innerHTML = "Password must be at least 8 characters, containing 1 number and 1 special character.";
    lblpassword.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else if (term.innerHTML == "check_box_outline_blank") {
    term.style.color = "#e53935";
    lblterm.style.color = "#e53935";
    lbl_term.innerHTML = "You must agree to Terms & Conditions";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  }
  else {
    var title = document.getElementById("title");
    fetch('https://www.portal.allawaken.com/api/register', {
      method: 'post',
      body: uname + "//" + mail + "//" + password
    }).then(function(response) {
      return response.text().then(function(text) {
        if (text == "Success") {
          title.innerHTML = "Success";
          title.style.background = "#43a047";
          title.style.color = "#fff";
          but.style.pointerEvents = 'auto';
          sign_text.style.display = 'block';
          sign_anim.style.display = 'none';
        }
        else if (text == "Exists") {
          email_field.style.borderColor = "#e53935";
          lblmail.innerHTML = "Email Address already exists.";
          lblmail.style.color = "#e53935";
          sign_text.style.display = 'block';
          sign_anim.style.display = 'none';
          but.style.pointerEvents = 'auto';
        }
        else {
          email_field.style.borderColor = "#e53935";
          lblmail.innerHTML = "Invalid Email Address";
          lblmail.style.color = "#e53935";
          sign_text.style.display = 'block';
          sign_anim.style.display = 'none';
          but.style.pointerEvents = 'auto';
        }
      });
    });
  }
}

function chekName() {
  var name = document.getElementById("uname");
  var uname = document.getElementById("uname").value;
  var lblname = document.getElementById("lbl_name");

  if (uname !== "") {
    name.style.borderColor = "rgba(0, 0, 0, .2)";
    lblname.style.color = "rgba(0, 0, 0, .8)";
    lblname.style.left = "15px";
    lblname.style.top = "-10px";
    lblname.style.background = "#fff"
    lblname.style.fontSize = "14px";
  }
  else {
    name.style.borderColor = "rgba(0, 0, 0, .2)";
    lblname.style.color = "rgba(0, 0, 0, .8)";
    lblname.style.left = "13px";
    lblname.style.top = "18px";
    lblname.style.fontSize = "16px";
  }
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

function focname() {
  var uname = document.getElementById("uname");
  var lblname = document.getElementById("lbl_name");
  uname.style.borderColor = "#1e88e5";
  lblname.innerHTML = "Nickname";
  lblname.style.color = "#1e88e5";
  lblname.style.left = "15px";
  lblname.style.top = "-10px";
  lblname.style.fontSize = "14px";
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

function changeTerms() {
  var term = document.getElementById("terms_check");
  var lblterm = document.getElementById("lbl_term");

  if (term.innerHTML == "check_box_outline_blank") {
    term.innerHTML = "check_box";
    term.style.color = "#202124";
    lbl_term.style.color = "#0069ff";
    lbl_term.innerHTML = "Terms & Conditions"
  }
  else {
    term.innerHTML = "check_box_outline_blank";
  }
}

function changeEmail() {
  var mail = document.getElementById("email_check");
  if (mail.innerHTML == "check_box_outline_blank") {
    mail.innerHTML = "check_box";
  }
  else {
    mail.innerHTML = "check_box_outline_blank";
  }
}

document.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("regbutton").click();
  }
});

const Register = () => (
  <div className="shell">
    <MetaTags>
        <title>All Awaken Portal: Time to wake up!</title>
        <meta name="description" content="Sign up" />
        <meta property="og:title" content="All Awaken Portal: Time to wake up!" />
        <meta property="og:description" content="Sign up" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.portal.allawaken.com/register" />
        <meta property="og:image" content="https://res.cloudinary.com/awaken/image/upload/v1547905379/4795.jpg" />
        <meta property="fb:app_id" content="1118435171656958"/>
     </MetaTags>
    <div className={style.register_wrapper}>
      <div className={style.register}>
        <h2 id="title" className={style.register_title}>Sign up</h2>
        <form id="form" className={style.register_form}>
          <div className={style.register_holder}>
            <input onBlur={chekName} onFocus={focname} id="uname" type="name" autocomplete="nickname" name="name"/>
            <label id="lbl_name" for="name">Nickname</label>
          </div>
          <div className={style.register_holder}>
            <input onBlur={chekMail} onFocus={focmail} id="mail" type="email" autocomplete="email" name="email" />
            <label id="lbl_mail" for="email">Email Address</label>
          </div>
          <div className={style.register_holder}>
            <input onBlur={chekPass} onFocus={focpass} id="password" type="password" autocomplete="new-password" name="password"/>
            <label id="lbl_password" for="password">Password</label>
          </div>
          <div className={style.register_check}>
            <i id="terms_check" onClick={changeTerms} className="material-icons">check_box</i>
            <Link style="text-decoration: none;" href="/terms" id="lbl_term">Terms & Conditions</Link>
          </div>
          <div className={style.register_check}>
            <i id="email_check" onClick={changeEmail} className="material-icons">check_box</i>
            <p>Agree to receive updates from All Awaken</p>
          </div>
          <Link id="regbutton" onClick={register} className={style.register_button}>
            <p id="sign_text">Sign up</p>
            <div id="sign_anim" class={style.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
          </Link>
          <GoogleLogin
            clientId="8366053971-i40f7iblgdan3oug4v112bsut05koppj.apps.googleusercontent.com"
            buttonText="Log in with Google"
            render={renderProps => (
              <button className={style.login_google} onClick={renderProps.onClick}><div className={style.logo} style={{ backgroundImage : `url(${google})` }}></div>Sign up with Google</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
        </form>
      </div>
    </div>
  </div>
);

export default Register;
