exports.ids = [5];
exports.modules = {

/***/ "4I5O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/Partners.css
var Partners = __webpack_require__("n0cM");
var Partners_default = /*#__PURE__*/__webpack_require__.n(Partners);

// EXTERNAL MODULE: ./components/Partner.css
var components_Partner = __webpack_require__("ePR2");
var Partner_default = /*#__PURE__*/__webpack_require__.n(components_Partner);

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// CONCATENATED MODULE: ./components/Partner.js





var _ref2 = Object(preact_min["h"])(
  'h3',
  null,
  'Vision'
);

var Partner_Partner = function Partner(_ref) {
  var color = _ref.color,
      name = _ref.name,
      causes = _ref.causes,
      vision = _ref.vision,
      desc = _ref.desc,
      adres = _ref.adres,
      imgg = _ref.imgg;
  return Object(preact_min["h"])(
    'div',
    { className: Partner_default.a.partner },
    Object(preact_min["h"])(
      'div',
      { className: Partner_default.a.partner_inner },
      Object(preact_min["h"])(
        'div',
        { className: Partner_default.a.partner_container },
        Object(preact_min["h"])('img', { className: Partner_default.a.partner_image, src: imgg, alt: "Image for partner: " + name }),
        Object(preact_min["h"])(
          'h2',
          null,
          name
        ),
        Object(preact_min["h"])(
          'div',
          { className: Partner_default.a.partner_content },
          _ref2,
          Object(preact_min["h"])('div', { className: Partner_default.a.decor1, style: { background: '' + color } }),
          Object(preact_min["h"])('div', { className: Partner_default.a.decor2, style: { background: '' + color } }),
          Object(preact_min["h"])(
            'p',
            null,
            vision
          )
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: Partner_default.a.desc, style: { background: '' + color } },
        Object(preact_min["h"])(
          'div',
          { className: Partner_default.a.desc_holder },
          Object(preact_min["h"])(
            'p',
            { className: Partner_default.a.label },
            'Causes'
          ),
          Object(preact_min["h"])(
            'p',
            null,
            causes
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Partner_default.a.desc_holder },
          Object(preact_min["h"])(
            'p',
            { className: Partner_default.a.label },
            'Description'
          ),
          Object(preact_min["h"])(
            'p',
            null,
            desc
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Partner_default.a.desc_holder },
          Object(preact_min["h"])(
            'p',
            { className: Partner_default.a.label },
            'More info at'
          ),
          Object(preact_min["h"])(
            'p',
            null,
            adres
          )
        )
      )
    )
  );
};

/* harmony default export */ var components_Partner_0 = (Partner_Partner);
// EXTERNAL MODULE: ../node_modules/preact-render-to-string/dist/index.mjs
var dist = __webpack_require__("TGCi");

// CONCATENATED MODULE: ./components/Partnerlist.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var primaryRed = "#e53935";
var primaryBlue = "#1e88e5";
var primaryGreen = "#43a047";
var primaryYellow = "#fbc02d";

var Partnerlist_Partnerlist = function (_Component) {
  _inherits(Partnerlist, _Component);

  function Partnerlist() {
    var _temp, _this, _ret;

    _classCallCheck(this, Partnerlist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [] }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Partnerlist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/partners', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });
  };

  Partnerlist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (x == 5) {
        x = 1;
      }
      if (x == 1) {
        elements.push(Object(preact_min["h"])(components_Partner_0, { name: par[i]["name"], causes: par[i]["causes"], vision: par[i]["vision"], desc: par[i]["desc"], adres: par[i]["link"], imgg: par[i]["img"], color: primaryBlue }));
        x++;
      } else if (x == 2) {
        elements.push(Object(preact_min["h"])(components_Partner_0, { name: par[i]["name"], causes: par[i]["causes"], vision: par[i]["vision"], desc: par[i]["desc"], adres: par[i]["link"], imgg: par[i]["img"], color: primaryRed }));
        x++;
      } else if (x == 3) {
        elements.push(Object(preact_min["h"])(components_Partner_0, { name: par[i]["name"], causes: par[i]["causes"], vision: par[i]["vision"], desc: par[i]["desc"], adres: par[i]["link"], imgg: par[i]["img"], color: primaryYellow }));
        x++;
      } else if (x == 4) {
        elements.push(Object(preact_min["h"])(components_Partner_0, { name: par[i]["name"], causes: par[i]["causes"], vision: par[i]["vision"], desc: par[i]["desc"], adres: par[i]["link"], imgg: par[i]["img"], color: primaryGreen }));
        x++;
      }
    };

    return Object(preact_min["h"])(
      'div',
      { className: 'partners' },
      elements
    );
  };

  return Partnerlist;
}(preact_min["Component"]);

/* harmony default export */ var components_Partnerlist = (Partnerlist_Partnerlist);
// CONCATENATED MODULE: ./components/Partners.js





var Partners_primaryRed = "#e53935";
var Partners_primaryBlue = "#1e88e5";
var Partners_primaryGreen = "#43a047";
var Partners_primaryYellow = "#fbc02d";

var Partners__ref = Object(preact_min["h"])(
  'h1',
  null,
  'Partners'
);

var Partners__ref2 = Object(preact_min["h"])(components_Partnerlist, null);

var Partners_Parners = function Parners() {
  return Object(preact_min["h"])(
    'div',
    { className: 'shell' },
    Object(preact_min["h"])(
      'div',
      { className: Partners_default.a.phead },
      Object(preact_min["h"])(
        'div',
        { className: Partners_default.a.phead_content },
        Partners__ref
      )
    ),
    Object(preact_min["h"])(
      'div',
      { className: Partners_default.a.p_body },
      Partners__ref2
    )
  );
};

/* harmony default export */ var components_Partners = __webpack_exports__["default"] = (Partners_Parners);

/***/ }),

/***/ "ePR2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"partner":"partner__2p4Hv","partner_inner":"partner_inner__2eVGv","partner_container":"partner_container__1yK0T","partner_image":"partner_image__2wCxP","partner_content":"partner_content__1Gvhw","decor1":"decor1__28y-f","decor2":"decor2__XKaAY","desc":"desc__SsO6n","desc_holder":"desc_holder__1iK4_","label":"label__2X7s1"};

/***/ }),

/***/ "n0cM":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"phead":"phead__1Zo8a"};

/***/ })

};;