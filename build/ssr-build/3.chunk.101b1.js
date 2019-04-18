exports.ids = [3];
exports.modules = {

/***/ "2DIG":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8a8750564e7b137088af03f0452bb449.png";

/***/ }),

/***/ "5dWZ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"register_wrapper":"register_wrapper__2JUje","register":"register__LJGsX","register_title":"register_title__3Pu3y","register_button":"register_button__2_hPA","register_forget":"register_forget__WNtFL","register_holder":"register_holder__2sMJ-","register_check":"register_check__3yZh2","login_google":"login_google__23TY7","logo":"logo__3gEAA","lds_ellipsis":"lds_ellipsis__118k0","lds-ellipsis1":"lds-ellipsis1__4L94i","lds-ellipsis2":"lds-ellipsis2__29hJc","lds-ellipsis3":"lds-ellipsis3__3qzWp"};

/***/ }),

/***/ "P+aA":
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

!function (e, t) {
   true ? module.exports = t(__webpack_require__("eW0v")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.GoogleLogin = t(require("react")) : e.GoogleLogin = t(e.react);
}("undefined" != typeof self ? self : this, function (e) {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;var r = n[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }var n = {};return t.m = e, t.c = n, t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
    }, t.t = function (e, n) {
      if (1 & n && (e = t(e)), 8 & n) return e;if (4 & n && "object" == typeof e && e && e.__esModule) return e;var o = Object.create(null);if (t.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & n && "string" != typeof e) for (var r in e) {
        t.d(o, r, function (t) {
          return e[t];
        }.bind(null, r));
      }return o;
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "", t(t.s = 4);
  }([function (t) {
    t.exports = e;
  }, function (e, t, n) {
    e.exports = n(2)();
  }, function (e, t, n) {
    "use strict";
    function o() {}var r = n(3);e.exports = function () {
      function e(e, t, n, o, i, a) {
        if (a !== r) {
          var c = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name = "Invariant Violation", c;
        }
      }function t() {
        return e;
      }var n = { array: e.isRequired = e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t };return n.checkPropTypes = o, n.PropTypes = n;
    };
  }, function (e) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function (e, t, n) {
    "use strict";
    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }function i(e) {
      return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function a(e, t) {
      return (a = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }function c(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
    }function s(e) {
      return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }function l(e) {
      return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      })(e);
    }function f(e, t) {
      return (f = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      })(e, t);
    }function p(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e;
    }n.r(t);var d = n(0),
        g = n.n(d),
        b = (n(1), function (e) {
      return g.a.createElement("div", { style: { marginRight: 10, background: e.active ? "#eee" : "#fff", padding: 10, borderRadius: 2 } }, g.a.createElement("svg", { width: "18", height: "18", xmlns: "http://www.w3.org/2000/svg" }, g.a.createElement("g", { fill: "#000", fillRule: "evenodd" }, g.a.createElement("path", { d: "M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z", fill: "#EA4335" }), g.a.createElement("path", { d: "M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z", fill: "#4285F4" }), g.a.createElement("path", { d: "M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z", fill: "#FBBC05" }), g.a.createElement("path", { d: "M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z", fill: "#34A853" }), g.a.createElement("path", { fill: "none", d: "M0 0h18v18H0z" }))));
    }),
        y = function y(e) {
      return g.a.createElement("span", { style: { paddingRight: 10, fontWeight: 500, paddingLeft: e.icon ? 0 : 10, paddingTop: 10, paddingBottom: 10 } }, e.children);
    },
        h = function () {
      function e(t) {
        var n, r;return function (t, n) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this), this, (n = !(r = i(e).call(this, t)) || "object" !== o(r) && "function" != typeof r ? c(this) : r).signIn = n.signIn.bind(c(c(n))), n.enableButton = n.enableButton.bind(c(c(n))), n.state = { disabled: !0, hovered: !1, active: !1 }, n;
      }var t, n;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && a(e, t);
      }(e, d.Component), t = e, (n = [{ key: "componentDidMount", value: function value() {
          var e,
              t,
              n,
              o = this,
              r = this.props,
              i = r.clientId,
              a = r.cookiePolicy,
              c = r.loginHint,
              s = r.hostedDomain,
              u = r.autoLoad,
              l = r.isSignedIn,
              f = r.fetchBasicProfile,
              p = r.redirectUri,
              d = r.discoveryDocs,
              g = r.onFailure,
              b = r.uxMode,
              y = r.scope,
              h = r.accessType,
              m = r.responseType,
              v = r.jsSrc;n = t = (e = document).getElementsByTagName("script")[0], (n = e.createElement("script")).id = "google-login", n.src = v, t && t.parentNode ? t.parentNode.insertBefore(n, t) : e.head.appendChild(n), n.onload = function () {
            var e = { client_id: i, cookie_policy: a, login_hint: c, hosted_domain: s, fetch_basic_profile: f, discoveryDocs: d, ux_mode: b, redirect_uri: p, scope: y, access_type: h };"code" === m && (e.access_type = "offline"), window.gapi.load("auth2", function () {
              o.enableButton(), window.gapi.auth2.getAuthInstance() || window.gapi.auth2.init(e).then(function (e) {
                l && e.isSignedIn.get() && o.handleSigninSuccess(e.currentUser.get());
              }, function (e) {
                return g(e);
              }), u && o.signIn();
            });
          };
        } }, { key: "componentWillUnmount", value: function value() {
          this.enableButton = function () {};
        } }, { key: "enableButton", value: function value() {
          this.setState({ disabled: !1 });
        } }, { key: "signIn", value: function value(e) {
          var t = this;if (e && e.preventDefault(), !this.state.disabled) {
            var n = window.gapi.auth2.getAuthInstance(),
                o = this.props,
                r = o.onSuccess,
                i = o.onFailure,
                a = o.responseType,
                c = { prompt: o.prompt };(0, o.onRequest)(), "code" === a ? n.grantOfflineAccess(c).then(function (e) {
              return r(e);
            }, function (e) {
              return i(e);
            }) : n.signIn(c).then(function (e) {
              return t.handleSigninSuccess(e);
            }, function (e) {
              return i(e);
            });
          }
        } }, { key: "handleSigninSuccess", value: function value(e) {
          var t = e.getBasicProfile(),
              n = e.getAuthResponse();e.googleId = t.getId(), e.tokenObj = n, e.tokenId = n.id_token, e.accessToken = n.access_token, e.profileObj = { googleId: t.getId(), imageUrl: t.getImageUrl(), email: t.getEmail(), name: t.getName(), givenName: t.getGivenName(), familyName: t.getFamilyName() }, this.props.onSuccess(e);
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.props,
              n = t.tag,
              o = t.type,
              r = t.className,
              i = t.disabledStyle,
              a = t.buttonText,
              c = t.children,
              s = t.render,
              u = t.theme,
              l = t.icon,
              f = this.state.disabled || this.props.disabled;if (s) return s({ onClick: this.signIn });var p = { backgroundColor: "dark" === u ? "rgb(66, 133, 244)" : "#fff", display: "inline-flex", alignItems: "center", color: "dark" === u ? "#fff" : "rgba(0, 0, 0, .54)", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)", padding: 0, borderRadius: 2, border: "1px solid transparent", fontSize: 14, fontWeight: "500", fontFamily: "Roboto, sans-serif" },
              d = { cursor: "pointer", backgroundColor: "dark" === u ? "#3367D6" : "#eee", color: "dark" === u ? "#fff" : "rgba(0, 0, 0, .54)", opacity: 1 },
              h = f ? _extends({}, p, i) : e.state.active ? _extends({}, p, d) : e.state.hovered ? _extends({}, p, { cursor: "pointer", opacity: .9 }) : p;return g.a.createElement(n, { onMouseEnter: function onMouseEnter() {
              return e.setState({ hovered: !0 });
            }, onMouseLeave: function onMouseLeave() {
              return e.setState({ hovered: !1, active: !1 });
            }, onMouseDown: function onMouseDown() {
              return e.setState({ active: !0 });
            }, onMouseUp: function onMouseUp() {
              return e.setState({ active: !1 });
            }, onClick: this.signIn, style: h, type: o, disabled: f, className: r }, [l && g.a.createElement(b, { key: 1, active: this.state.active }), g.a.createElement(y, { icon: l, key: 2 }, c || a)]);
        } }]) && r(t.prototype, n), e;
    }();h.defaultProps = { type: "button", tag: "button", buttonText: "Sign in with Google", scope: "profile email", accessType: "online", prompt: "", cookiePolicy: "single_host_origin", fetchBasicProfile: !0, isSignedIn: !1, uxMode: "popup", disabledStyle: { opacity: .6 }, icon: !0, theme: "light", onRequest: function onRequest() {}, jsSrc: "https://apis.google.com/js/client:platform.js" };var m = h,
        v = function () {
      function e(t) {
        var n, o;return function (t, n) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this), this, (n = !(o = l(e).call(this, t)) || "object" !== s(o) && "function" != typeof o ? p(this) : o).signOut = n.signOut.bind(p(p(n))), n.enableButton = n.enableButton.bind(p(p(n))), n.state = { disabled: !0, hovered: !1, active: !1 }, n;
      }var t, n;return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && f(e, t);
      }(e, d.Component), t = e, (n = [{ key: "componentDidMount", value: function value() {
          var e,
              t,
              n,
              o = this,
              r = this.props.jsSrc;n = t = (e = document).getElementsByTagName("script")[0], (n = e.createElement("script")).id = "google-login", n.src = r, t && t.parentNode ? t.parentNode.insertBefore(n, t) : e.head.appendChild(n), n.onload = function () {
            o.enableButton();
          };
        } }, { key: "componentWillUnmount", value: function value() {
          this.enableButton = function () {};
        } }, { key: "enableButton", value: function value() {
          this.setState({ disabled: !1 });
        } }, { key: "signOut", value: function value() {
          var e = window.gapi.auth2.getAuthInstance();null != e && e.signOut().then(this.props.onLogoutSuccess);
        } }, { key: "render", value: function value() {
          var e = this,
              t = this.props,
              n = t.tag,
              o = t.type,
              r = t.className,
              i = t.disabledStyle,
              a = t.buttonText,
              c = t.children,
              s = t.render,
              u = t.theme,
              l = t.icon;if (s) return s({ onClick: this.signOut });var f = this.state.disabled || this.props.disabled,
              p = { backgroundColor: "dark" === u ? "rgb(66, 133, 244)" : "#fff", display: "inline-flex", alignItems: "center", color: "dark" === u ? "#fff" : "rgba(0, 0, 0, .54)", boxShadow: "0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)", padding: 0, borderRadius: 2, border: "1px solid transparent", fontSize: 14, fontWeight: "500", fontFamily: "Roboto, sans-serif" },
              d = { cursor: "pointer", backgroundColor: "dark" === u ? "#3367D6" : "#eee", color: "dark" === u ? "#fff" : "rgba(0, 0, 0, .54)", opacity: 1 },
              h = f ? _extends({}, p, i) : e.state.active ? _extends({}, p, d) : e.state.hovered ? _extends({}, p, { cursor: "pointer", opacity: .9 }) : p;return g.a.createElement(n, { onMouseEnter: function onMouseEnter() {
              return e.setState({ hovered: !0 });
            }, onMouseLeave: function onMouseLeave() {
              return e.setState({ hovered: !1, active: !1 });
            }, onMouseDown: function onMouseDown() {
              return e.setState({ active: !0 });
            }, onMouseUp: function onMouseUp() {
              return e.setState({ active: !1 });
            }, onClick: this.signOut, style: h, type: o, disabled: f, className: r }, [l && g.a.createElement(b, { key: 1, active: this.state.active }), g.a.createElement(y, { icon: l, key: 2 }, c || a)]);
        } }]) && u(t.prototype, n), e;
    }();v.defaultProps = { type: "button", tag: "button", buttonText: "Logout of Google", disabledStyle: { opacity: .6 }, icon: !0, theme: "light", jsSrc: "https://apis.google.com/js/client:platform.js" };var S = v;n.d(t, "default", function () {
      return m;
    }), n.d(t, "GoogleLogin", function () {
      return m;
    }), n.d(t, "GoogleLogout", function () {
      return S;
    });
  }]);
});

/***/ }),

/***/ "wMTp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Register_css__ = __webpack_require__("5dWZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Register_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_login__ = __webpack_require__("P+aA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_google_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_google_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags__ = __webpack_require__("UD6h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_meta_tags__);







var google = __webpack_require__("2DIG");

var responseGoogle = function responseGoogle(response) {
  var user = response["profileObj"];
  fetch('https://www.portal.allawaken.com/api/validate_google', {
    method: 'post',
    body: user["name"] + "//" + user["email"] + "//" + user["imageUrl"]
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text == "Success") {
        window.location.assign("https://www.portal.allawaken.com");
      } else {
        var p = "FAIL";
      }
    });
  });
};

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
  } else if (uname.length < 4) {
    name_field.style.borderColor = "#e53935";
    lblname.innerHTML = "Nickname must be at least 4 characters.";
    lblname.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else if (mail == "") {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email can't be empty.";
    lblmail.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else if (validateEmail(mail) == false) {
    email_field.style.borderColor = "#e53935";
    lblmail.innerHTML = "Email Address is not valid.";
    lblmail.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else if (password == "") {
    password_field.style.borderColor = "#e53935";
    lblpassword.innerHTML = "Password can't be empty.";
    lblpassword.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else if (validatePassword(password) == false) {
    password_field.style.borderColor = "#e53935";
    lblpassword.innerHTML = "Password must be at least 8 characters, containing 1 number and 1 special character.";
    lblpassword.style.color = "#e53935";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else if (term.innerHTML == "check_box_outline_blank") {
    term.style.color = "#e53935";
    lblterm.style.color = "#e53935";
    lbl_term.innerHTML = "You must agree to Terms & Conditions";
    sign_text.style.display = 'block';
    sign_anim.style.display = 'none';
    but.style.pointerEvents = 'auto';
  } else {
    var title = document.getElementById("title");
    fetch('https://www.portal.allawaken.com/api/register', {
      method: 'post',
      body: uname + "//" + mail + "//" + password
    }).then(function (response) {
      return response.text().then(function (text) {
        if (text == "Success") {
          title.innerHTML = "Success";
          title.style.background = "#43a047";
          title.style.color = "#fff";
          but.style.pointerEvents = 'auto';
          sign_text.style.display = 'block';
          sign_anim.style.display = 'none';
        } else if (text == "Exists") {
          email_field.style.borderColor = "#e53935";
          lblmail.innerHTML = "Email Address already exists.";
          lblmail.style.color = "#e53935";
          sign_text.style.display = 'block';
          sign_anim.style.display = 'none';
          but.style.pointerEvents = 'auto';
        } else {
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
    lblname.style.background = "#fff";
    lblname.style.fontSize = "14px";
  } else {
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

function chekPass() {
  var pass = document.getElementById("password");
  var password = document.getElementById("password").value;
  var lblpassword = document.getElementById("lbl_password");

  if (password !== "") {
    pass.style.borderColor = "rgba(0, 0, 0, .2)";
    lblpassword.style.color = "rgba(0, 0, 0, .8)";
    lblpassword.style.left = "15px";
    lblpassword.style.top = "-10px";
    lblpassword.style.background = "#fff";
    lblpassword.style.fontSize = "14px";
  } else {
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
    lbl_term.innerHTML = "Terms & Conditions";
  } else {
    term.innerHTML = "check_box_outline_blank";
  }
}

function changeEmail() {
  var mail = document.getElementById("email_check");
  if (mail.innerHTML == "check_box_outline_blank") {
    mail.innerHTML = "check_box";
  } else {
    mail.innerHTML = "check_box_outline_blank";
  }
}

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("regbutton").click();
  }
});

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_4_react_meta_tags___default.a,
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'title',
    null,
    'All Awaken Portal: Time to wake up!'
  ),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'description', content: 'Sign up' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:title', content: 'All Awaken Portal: Time to wake up!' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:description', content: 'Sign up' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:type', content: 'website' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:url', content: 'https://www.portal.allawaken.com/register' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1547905379/4795.jpg' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { onBlur: chekName, onFocus: focname, id: 'uname', type: 'name', autocomplete: 'nickname', name: 'name' });

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_name', 'for': 'name' },
  'Nickname'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { onBlur: chekMail, onFocus: focmail, id: 'mail', type: 'email', autocomplete: 'email', name: 'email' });

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_mail', 'for': 'email' },
  'Email Address'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { onBlur: chekPass, onFocus: focpass, id: 'password', type: 'password', autocomplete: 'new-password', name: 'password' });

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_password', 'for': 'password' },
  'Password'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { id: 'terms_check', onClick: changeTerms, className: 'material-icons' },
  'check_box'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_1_preact_router__["a" /* Link */],
  { style: 'text-decoration: none;', href: '/terms', id: 'lbl_term' },
  'Terms & Conditions'
);

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { id: 'email_check', onClick: changeEmail, className: 'material-icons' },
  'check_box'
);

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Agree to receive updates from All Awaken'
);

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'sign_text' },
  'Sign up'
);

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', null);

var _ref14 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', null);

var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', null);

var _ref16 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', null);

var Register = function Register() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: 'shell' },
    _ref,
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_wrapper },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'h2',
          { id: 'title', className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_title },
          'Sign up'
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'form',
          { id: 'form', className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_form },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_holder },
            _ref2,
            _ref3
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_holder },
            _ref4,
            _ref5
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_holder },
            _ref6,
            _ref7
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_check },
            _ref8,
            _ref9
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_check },
            _ref10,
            _ref11
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            __WEBPACK_IMPORTED_MODULE_1_preact_router__["a" /* Link */],
            { id: 'regbutton', onClick: register, className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.register_button },
            _ref12,
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { id: 'sign_anim', 'class': __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.lds_ellipsis },
              _ref13,
              _ref14,
              _ref15,
              _ref16
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_react_google_login___default.a, {
            clientId: '8366053971-i40f7iblgdan3oug4v112bsut05koppj.apps.googleusercontent.com',
            buttonText: 'Log in with Google',
            render: function render(renderProps) {
              return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'button',
                { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.login_google, onClick: renderProps.onClick },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: __WEBPACK_IMPORTED_MODULE_2__Register_css___default.a.logo, style: { backgroundImage: 'url(' + google + ')' } }),
                'Sign up with Google'
              );
            },
            onSuccess: responseGoogle,
            onFailure: responseGoogle
          })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Register);

/***/ })

};;