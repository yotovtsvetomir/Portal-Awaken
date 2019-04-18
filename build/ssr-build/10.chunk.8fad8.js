exports.ids = [10];
exports.modules = {

/***/ "GmNw":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"ps":"ps__1OAwO","ps_form":"ps_form__2Jm9_","ps_holder":"ps_holder__15F2G","ps_action":"ps_action__2dtdc","button_save":"button_save__3_l2j","ps_pictures_wrapper":"ps_pictures_wrapper__1l_W-","ps_pictures":"ps_pictures__1GDDX","imin":"imin__3HlFH","ps_smallpic":"ps_smallpic__3rDgc","ps_smpic":"ps_smpic__DJGEd","ps_bigpic":"ps_bigpic__1jV0_","ps_bgpic":"ps_bgpic__1R0MA","ps_password_wrapper":"ps_password_wrapper__CSE2x","ps_password":"ps_password__3bM79","last_holder":"last_holder__1Bolt","button_cp":"button_cp__3Rh6w"};

/***/ }),

/***/ "gzkd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Settings_css__ = __webpack_require__("GmNw");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Settings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Settings_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Promenu__ = __webpack_require__("pbXG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Profilehead__ = __webpack_require__("upel");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








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
  }).then(function (response) {
    return response.text().then(function (text) {
      window.location.assign("https://www.portal.allawaken.com/myprofile");
    });
  });
}

function previewFile() {
  var preview = document.getElementById('sprofimg');
  var file = document.getElementById('in1').files[0];
  var reader = new FileReader();

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
  }).then(function (response) {
    return response.json().then(function (resp) {
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
  var file = document.getElementById('in2').files[0];
  var reader = new FileReader();

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
  }).then(function (response) {
    return response.json().then(function (resp) {
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
  } else if (new_password_field.value == "") {
    new_password_field.style.borderColor = "#e53935";
    new_lblpass.innerHTML = "New Password can't be empty.";
    new_lblpass.style.color = "#e53935";
  } else if (new_password_field.value !== rep_password_field.value) {
    new_password_field.style.borderColor = "#e53935";
    new_lblpass.innerHTML = "Passwords don't match.";
    new_lblpass.style.color = "#e53935";
  } else if (validatePassword(new_password_field.value) == false) {
    new_password_field.style.borderColor = "#e53935";
    new_lblpass.innerHTML = "The new password must be at least 8 characters, containing 1 number and 1 special character.";
    new_lblpass.style.color = "#e53935";
  } else {
    fetch('https://www.portal.allawaken.com/api/changepassword', {
      method: 'post',
      body: password_field.value + "///" + new_password_field.value
    }).then(function (response) {
      return response.text().then(function (text) {
        if (text == "ok") {
          button.style.background = "#43a047";
          button.innerHTML = "Password changed successfully!";
          password_field.value = "";
          new_password_field.value = "";
          rep_password_field.value = "";
        } else {
          button.innerHTML = "Password is not correct.";
        }
      });
    });
  }
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__Profilehead__["a" /* default */], null);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Promenu__["a" /* default */], null);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Settings'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_mail', 'for': 'email' },
  'Email Address'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'mail', type: 'email', disabled: true });

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_name', 'for': 'name' },
  'Display Name'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'nname', type: 'name' });

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_subtitle', 'for': 'subtitle' },
  'Display Subtitle'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'ssubtitle', type: 'email' });

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_causes', 'for': 'causes' },
  'Causes'
);

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'causes', type: 'text' });

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_interests', 'for': 'interests' },
  'Interests'
);

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'interests', type: 'text' });

var _ref14 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_profession', 'for': 'profession' },
  'Profession'
);

var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'profession', type: 'text' });

var _ref16 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_about', 'for': 'about' },
  'About me'
);

var _ref17 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'aboutme', type: 'text' });

var _ref18 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Pictures'
);

var _ref19 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Change profile image'
  )
);

var _ref20 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Change background image'
  )
);

var _ref21 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Password'
);

var _ref22 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'username', autocomplete: 'username', type: 'text', style: 'display: none' });

var _ref23 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_password', 'for': 'password' },
  'Current password'
);

var _ref24 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'password', autocomplete: 'current-password', type: 'password' });

var _ref25 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_new_password', 'for': 'new_password' },
  'New password'
);

var _ref26 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'new_password', autocomplete: 'new-password', type: 'password' });

var _ref27 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_rep_password', 'for': 'rep_password' },
  'Repeat new password'
);

var _ref28 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'rep_password', autocomplete: 'new-password', type: 'password' });

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings() {
    _classCallCheck(this, Settings);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Settings.prototype.componentDidMount = function componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function (response) {
      return response.text().then(function (text) {
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
  };

  Settings.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'shell' },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'profile' },
        _ref,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'profile_body' },
          _ref2,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: 'profile_content' },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { id: 'ps', className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps },
              _ref3,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_form_wrapper },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_form },
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref4,
                    _ref5
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref6,
                    _ref7
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref8,
                    _ref9
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref10,
                    _ref11
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref12,
                    _ref13
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref14,
                    _ref15
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref16,
                    _ref17
                  )
                ),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_action },
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
                    { onClick: save, className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.button_save },
                    'Save'
                  )
                )
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_pictures_wrapper },
                _ref18,
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_pictures },
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_smallpic },
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'sprofimg', className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_smpic, alt: 'Image placeholder' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'in1', onChange: previewFile, className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.imin, type: 'file' }),
                    _ref19
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_bigpic },
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'sbackimg', className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_bgpic, alt: 'Image placeholder' }),
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'in2', onChange: previewFile2, className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.imin, type: 'file' }),
                    _ref20
                  )
                )
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_password_wrapper },
                _ref21,
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'form',
                  { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_password },
                  _ref22,
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref23,
                    _ref24
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref25,
                    _ref26
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.ps_holder },
                    _ref27,
                    _ref28
                  ),
                  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                    'div',
                    { className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.last_holder },
                    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                      __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
                      { id: 'passbutton', onClick: changepass, className: __WEBPACK_IMPORTED_MODULE_1__Settings_css___default.a.button_cp },
                      'Change Password'
                    )
                  )
                )
              )
            )
          )
        )
      )
    );
  };

  return Settings;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ })

};;