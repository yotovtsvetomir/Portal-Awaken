exports.ids = [11];
exports.modules = {

/***/ "4N6L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Login_css__ = __webpack_require__("MeBn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_router__ = __webpack_require__("/QC5");





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
    lblmail.style.background = "#fff";
    lblmail.style.fontSize = "14px";
  } else {
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
  } else if (validateEmail(x) == false) {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email Address is not valid.";
    lblmail.style.color = "#e53935";
  } else {
    fetch('https://www.portal.allawaken.com/api/recover', {
      method: 'post',
      body: x
    }).then(function (response) {
      return response.text().then(function (text) {
        if (text == "Success") {
          p.innerHTML = "Your current password has been sent to: " + x;
          p.style.background = "#43a047";
          p.style.color = "#fff";
        } else {
          p.innerHTML = "Account with this email does not exists.";
          p.style.background = "#e53935";
          p.style.color = "#fff";
        }
      });
    });
  }
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { onBlur: chekMail, onFocus: focmail, id: 'mail', type: 'email', name: 'username', autocomplete: 'username' });

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_mail', 'for': 'email' },
  'Email Address'
);

var Forgetpass = function Forgetpass() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: 'shell' },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login_wrapper },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'h2',
          { id: 'title', className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login_title },
          'Password recovery'
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'form',
          { className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login_form },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login_holder },
            _ref,
            _ref2
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            __WEBPACK_IMPORTED_MODULE_2_preact_router__["a" /* Link */],
            { className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.login_button, onClick: recover },
            'Reset password'
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'p',
            { id: 'forg', className: __WEBPACK_IMPORTED_MODULE_1__Login_css___default.a.forg_text },
            'Your password will be sent to your email.'
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Forgetpass);

/***/ }),

/***/ "MeBn":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"login_wrapper":"login_wrapper__2M2uq","login":"login__3F1gH","login_title":"login_title__1268W","login_holder":"login_holder__3qCyD","login_button":"login_button__2j74n","login_google":"login_google__E9Mdz","logo":"logo__14iLS","login_forget":"login_forget__1kYTD","login_signup_text":"login_signup_text__2Y5qR","login_signup":"login_signup__3ZsP0","forg_text":"forg_text__32GJG"};

/***/ })

};;