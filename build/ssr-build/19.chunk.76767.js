exports.ids = [19];
exports.modules = {

/***/ "1vSG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Confirm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_render_to_string__ = __webpack_require__("TGCi");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'div',
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'h3',
    { id: 'el', className: 'here' },
    'You have confirmed your account. Now you can login.'
  )
);

var Confirm = function (_Component) {
  _inherits(Confirm, _Component);

  function Confirm() {
    _classCallCheck(this, Confirm);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Confirm.prototype.componentDidMount = function componentDidMount() {
    var tok = this.props.token;
    fetch('https://www.portal.allawaken.com/api/confirm/' + tok, {
      method: 'get'
    }).then(function (response) {
      return response.text().then(function (text) {
        var el = document.getElementById("el");
        el.innerHTML = text;
      });
    });
  };

  Confirm.prototype.render = function render() {
    return _ref;
  };

  return Confirm;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ })

};;