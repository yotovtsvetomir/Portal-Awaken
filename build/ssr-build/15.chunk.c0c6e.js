exports.ids = [15];
exports.modules = {

/***/ "lgQn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Myprofile_css__ = __webpack_require__("2lna");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Myprofile_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Postlist__ = __webpack_require__("Byva");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







function addcon() {
  var nname = document.getElementById("naame").innerHTML;
  var texxt = document.getElementById("texxt").value;
  if (texxt == "") {
    texxt = "I would like to connect with you.";
  }
  fetch('https://www.portal.allawaken.com/api/ispostlog', {
    method: 'get'
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text != "Out") {
        var user = JSON.parse(text);
        var mname = user["name"];
        var conn = document.getElementById("connect");
        fetch('https://www.portal.allawaken.com/api/connectionrequest', {
          method: 'post',
          body: mname + "//" + nname + "//" + texxt
        }).then(function (response) {
          return response.text().then(function (text) {
            var but = document.getElementById("connect");
            if (text == "Success") {
              document.getElementById("conmod").style.display = "none";
              but.style.pointerEvents = 'none';
              but.innerHTML = "Already sent";
            } else {
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
  } else if (document.getElementById("conmod").style.display == "") {
    document.getElementById("conmod").style.display = "flex";
  } else {
    document.getElementById("conmod").style.display = "none";
  }
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  { id: 'naame' },
  'Error'
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h3',
  { id: 'subtitle' },
  'Error'
);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'connections' },
  '0 Connections'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Connect with'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: '2img', alt: 'My Profile image' });

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h3', { id: '2name' });

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('h5', { id: '2subtitle' });

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('textarea', { id: 'texxt', placeholder: 'I would like to connect with you.' });

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Causes'
);

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'ccauses' },
  'Error'
);

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Interests'
);

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'iinterests' },
  'Error'
);

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Profession'
);

var _ref14 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'pprofession' },
  'Error'
);

var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'About me'
);

var _ref16 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'aaboutme' },
  'Error'
);

var Profile = function (_Component) {
  _inherits(Profile, _Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Profile.prototype.componentDidMount = function componentDidMount() {
    var pname = this.props.pname;

    fetch('https://www.portal.allawaken.com/api/profile/' + pname, {
      method: 'get'
    }).then(function (response) {
      return response.text().then(function (text) {
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
    }).then(function (response) {
      return response.text().then(function (text) {
        if (Number(text) == 1) {
          document.getElementById("connections").innerHTML = text + " Connection";
        } else {
          document.getElementById("connections").innerHTML = text + " Connections";
        }
      });
    });
  };

  Profile.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'shell' },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_head },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_bigimg },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'backimg', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_backimg, alt: 'Profile background image' }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_head_holder },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'profimg', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_smallimg, alt: 'Profile image' }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_headline },
                _ref,
                _ref2
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_connections },
                _ref3
              )
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.message },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
            { id: 'connect', onClick: showmod, className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.ms_link },
            'Connect'
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { id: 'conmod', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.conmodal },
          _ref4,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.conwrap },
            _ref5,
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.cp_info },
              _ref6,
              _ref7
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.conform },
            _ref8
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.conactions },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
              { onClick: addcon, className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.button_save },
              'Send request'
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              __WEBPACK_IMPORTED_MODULE_3_preact_router__["a" /* Link */],
              { onClick: showmod, className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.button_save },
              'Cancel'
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_body },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_content, style: 'width: 100%;' },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { id: 'pi', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_form, style: 'margin-left: 0;' },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.prof_title },
                'Info'
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref9,
                _ref10
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref11,
                _ref12
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref13,
                _ref14
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref15,
                _ref16
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { id: 'pf', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_follow, style: 'margin-left: 0;' },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.prof_title },
                'Activity'
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Postlist__["a" /* default */], { name: this.props.pname, link: 'https://www.portal.allawaken.com/api/activity' })
            )
          )
        )
      )
    );
  };

  return Profile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ })

};;