exports.ids = [17];
exports.modules = {

/***/ "8Gqw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Myposts; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Myprofile_css__ = __webpack_require__("2lna");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Myprofile_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Promenu__ = __webpack_require__("pbXG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Profilehead__ = __webpack_require__("upel");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Postlist__ = __webpack_require__("Byva");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5__Profilehead__["a" /* default */], null);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Promenu__["a" /* default */], null);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Causes'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'ccauses' },
  'Error'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Interests'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'iinterests' },
  'Error'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'Profession'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'pprofession' },
  'Error'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'span',
  null,
  'About me'
);

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  { id: 'aaboutme' },
  'Error'
);

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6__Postlist__["a" /* default */], { link: 'https://www.portal.allawaken.com/api/myposts' });

var Myposts = function (_Component) {
  _inherits(Myposts, _Component);

  function Myposts() {
    _classCallCheck(this, Myposts);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Myposts.prototype.componentDidMount = function componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
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

        name.innerHTML = profile["name"];
        subtitle.innerHTML = profile["subtitle"];
        causes.innerHTML = profile["causes"];
        interests.innerHTML = profile["interests"];
        profession.innerHTML = profile["profession"];
        aboutme.innerHTML = profile["aboutme"];
      });
    });
  };

  Myposts.prototype.componentDidUpdate = function componentDidUpdate() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
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

        name.innerHTML = profile["name"];
        subtitle.innerHTML = profile["subtitle"];
        causes.innerHTML = profile["causes"];
        interests.innerHTML = profile["interests"];
        profession.innerHTML = profile["profession"];
        aboutme.innerHTML = profile["aboutme"];
      });
    });
  };

  Myposts.prototype.render = function render() {
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
              { id: 'pi', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_form },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.prof_title },
                'Info'
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref3,
                _ref4
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref5,
                _ref6
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref7,
                _ref8
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_holder },
                _ref9,
                _ref10
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { id: 'pf', className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.profile_follow },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_1__Myprofile_css___default.a.prof_title },
                'My Posts'
              ),
              _ref11
            )
          )
        )
      )
    );
  };

  return Myposts;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ })

};;