import { h } from 'preact'
import style from './Login.css'
import { Link } from 'preact-router'

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

function recover() {
  var x = document.getElementById("mail").value;
  var email_field = document.getElementById("mail");
  var lblmail = document.getElementById("lbl_mail");
  var p = document.getElementById("forg");

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  if (x == "") {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email can't be empty.";
    lblmail.style.color = "#e53935";
  }
  else if (validateEmail(x) == false) {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email Address is not valid.";
    lblmail.style.color = "#e53935";
  }
  else {
    fetch('https://www.portal.allawaken.com/api/recover', {
      method: 'post',
      body: x
    }).then(function(response) {
      return response.text().then(function(text) {
        if (text == "Success") {
          p.innerHTML = "Your current password has been sent to: " + x;
          p.style.background = "#43a047";
          p.style.color = "#fff";
        }
        else {
          p.innerHTML = "Account with this email does not exists.";
          p.style.background = "#e53935";
          p.style.color = "#fff";
        }
      });
    });
  }
}

const Forgetpass = () => (
  <div className="shell">
    <div className={style.login_wrapper}>
      <div className={style.login}>
        <h2 id="title" className={style.login_title}>Password recovery</h2>
        <form className={style.login_form}>
          <div className={style.login_holder}>
            <input onBlur={chekMail} onFocus={focmail} id="mail" type="email" name="username" autocomplete="username" />
            <label id="lbl_mail" for="email">Email Address</label>
          </div>
          <Link className={style.login_button} onClick={recover}>Reset password</Link>
          <p id="forg" className={style.forg_text}>Your password will be sent to your email.</p>
        </form>
      </div>
    </div>
  </div>
);

export default Forgetpass;
