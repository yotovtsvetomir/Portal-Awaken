exports.ids = [2];
exports.modules = {

/***/ "K4+O":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"conwrap":"conwrap__3Nlvq","cp_info":"cp_info__27QfY","cp_content":"cp_content__2ps91","cp_actions":"cp_actions__z18JD","button_save":"button_save__2V9g1"};

/***/ }),

/***/ "YMQ4":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"conwrap":"conwrap__QJmMd","cp_info":"cp_info__Z4PeT","cp_actions":"cp_actions__1sILE","button_save":"button_save__2kxTy","newmess":"newmess__2KNyA"};

/***/ }),

/***/ "ZPQX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/Connections.css
var components_Connections = __webpack_require__("oaqC");
var Connections_default = /*#__PURE__*/__webpack_require__.n(components_Connections);

// EXTERNAL MODULE: ../node_modules/preact-render-to-string/dist/index.mjs
var dist = __webpack_require__("TGCi");

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ./components/Promenu.js
var Promenu = __webpack_require__("pbXG");

// EXTERNAL MODULE: ./components/Profilehead.js
var Profilehead = __webpack_require__("upel");

// EXTERNAL MODULE: ./components/Conprof.css
var components_Conprof = __webpack_require__("K4+O");
var Conprof_default = /*#__PURE__*/__webpack_require__.n(components_Conprof);

// CONCATENATED MODULE: ./components/Conprof.js





function addcon() {
  var name = document.getElementById('nnname');
  fetch('https://www.portal.allawaken.com/api/addconnection', {
    method: 'post',
    body: name.innerHTML
  }).then(function (response) {
    return response.text().then(function (text) {
      window.location.assign("http://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

function deletereq() {
  var name = document.getElementById('nnname');
  fetch('https://www.portal.allawaken.com/api/deleterequest', {
    method: 'post',
    body: name.innerHTML
  }).then(function (response) {
    return response.text().then(function (text) {
      window.location.assign("http://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

var Conprof_Conprof = function Conprof(_ref) {
  var name = _ref.name,
      subtitle = _ref.subtitle,
      texxt = _ref.texxt,
      imge = _ref.imge;
  return Object(preact_min["h"])(
    'div',
    { className: 'conprof' },
    Object(preact_min["h"])(
      preact_router_es["a" /* Link */],
      { href: '/profile/' + name, className: Conprof_default.a.conwrap },
      Object(preact_min["h"])('img', { src: imge, alt: "Image for profile: " + name }),
      Object(preact_min["h"])(
        'div',
        { className: Conprof_default.a.cp_info },
        Object(preact_min["h"])(
          'h3',
          { id: 'nnname' },
          name
        ),
        Object(preact_min["h"])(
          'h5',
          null,
          subtitle
        )
      )
    ),
    Object(preact_min["h"])(
      'div',
      { className: Conprof_default.a.cp_content },
      Object(preact_min["h"])(
        'p',
        null,
        texxt
      )
    ),
    Object(preact_min["h"])(
      'div',
      { className: Conprof_default.a.cp_actions },
      Object(preact_min["h"])(
        preact_router_es["a" /* Link */],
        { onClick: addcon, className: Conprof_default.a.button_save },
        'Accept'
      ),
      Object(preact_min["h"])(
        preact_router_es["a" /* Link */],
        { onClick: deletereq, className: Conprof_default.a.button_save },
        'Decline'
      )
    )
  );
};

/* harmony default export */ var components_Conprof_0 = (Conprof_Conprof);
// CONCATENATED MODULE: ./components/Conproflist.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Conproflist__ref = Object(preact_min["h"])(
  'div',
  { className: 'empt' },
  Object(preact_min["h"])(
    'p',
    null,
    'No pending requests'
  )
);

var Conproflist_Conproflist = function (_Component) {
  _inherits(Conproflist, _Component);

  function Conproflist() {
    var _temp, _this, _ret;

    _classCallCheck(this, Conproflist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [], ttt: [], foo: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Conproflist.prototype.toggle = function toggle() {
    this.setState({
      foo: true
    });
  };

  Conproflist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/loadrequests', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });

    fetch('https://www.portal.allawaken.com/api/loadreqtext', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (ttt) {
      return _this2.setState({ ttt: ttt });
    });
  };

  Conproflist.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.foo == true) {
      this.state.foo = false;
    }
  };

  Conproflist.prototype.render = function render() {
    var par = this.state.element;
    var tekst = this.state.ttt;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      elements.push(Object(preact_min["h"])(components_Conprof_0, { texxt: tekst[i]["text"], imge: par[i]["profileimg"], name: par[i]["name"], subtitle: par[i]["subtitle"] }));
    };

    if (elements.length == 0) {
      return Conproflist__ref;
    } else {
      return Object(preact_min["h"])(
        'div',
        { className: 'notifications' },
        elements
      );
    }
  };

  return Conproflist;
}(preact_min["Component"]);

/* harmony default export */ var components_Conproflist = (Conproflist_Conproflist);
// EXTERNAL MODULE: ./components/Smallprof.css
var components_Smallprof = __webpack_require__("YMQ4");
var Smallprof_default = /*#__PURE__*/__webpack_require__.n(components_Smallprof);

// CONCATENATED MODULE: ./components/Smallprof.js





function deletecon() {
  var name = document.getElementById('mmname');
  fetch('https://www.portal.allawaken.com/api/deleteconnection', {
    method: 'post',
    body: name.innerHTML
  }).then(function (response) {
    return response.text().then(function (text) {
      window.location.assign("https://www.portal.allawaken.com/myprofile/connections");
    });
  });
}

var Smallprof_Smallprof = function Smallprof(_ref) {
  var name = _ref.name,
      subtitle = _ref.subtitle,
      imge = _ref.imge;
  return Object(preact_min["h"])(
    'div',
    { className: 'conprof' },
    Object(preact_min["h"])(
      preact_router_es["a" /* Link */],
      { href: '/profile/' + name, className: Smallprof_default.a.conwrap },
      Object(preact_min["h"])('img', { src: imge, alt: "Image for profile: " + name }),
      Object(preact_min["h"])(
        'div',
        { className: Smallprof_default.a.cp_info },
        Object(preact_min["h"])(
          'h3',
          { id: 'mmname' },
          name
        ),
        Object(preact_min["h"])(
          'h5',
          null,
          subtitle
        )
      )
    ),
    Object(preact_min["h"])(
      'div',
      { className: Smallprof_default.a.cp_actions },
      Object(preact_min["h"])(
        preact_router_es["a" /* Link */],
        { onClick: deletecon, className: Smallprof_default.a.button_save },
        'Delete'
      )
    )
  );
};

/* harmony default export */ var components_Smallprof_0 = (Smallprof_Smallprof);
// CONCATENATED MODULE: ./components/Smallproflist.js


function Smallproflist__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Smallproflist__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Smallproflist__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Smallproflist__ref = Object(preact_min["h"])(
  'div',
  { className: 'empt' },
  Object(preact_min["h"])(
    'p',
    null,
    'No connections yet'
  )
);

var Smallproflist_Smallproflist = function (_Component) {
  Smallproflist__inherits(Smallproflist, _Component);

  function Smallproflist() {
    var _temp, _this, _ret;

    Smallproflist__classCallCheck(this, Smallproflist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Smallproflist__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [], foo: false }, _temp), Smallproflist__possibleConstructorReturn(_this, _ret);
  }

  Smallproflist.prototype.toggle = function toggle() {
    this.setState({
      foo: true
    });
  };

  Smallproflist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/loadconnections', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });
  };

  Smallproflist.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.foo == true) {
      this.state.foo = false;
    }
  };

  Smallproflist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      elements.push(Object(preact_min["h"])(components_Smallprof_0, { imge: par[i]["profileimg"], name: par[i]["name"], subtitle: par[i]["subtitle"] }));
    };

    if (elements.length == 0) {
      return Smallproflist__ref;
    } else {
      return Object(preact_min["h"])(
        'div',
        { className: 'conlist' },
        elements
      );
    }
  };

  return Smallproflist;
}(preact_min["Component"]);

/* harmony default export */ var components_Smallproflist = (Smallproflist_Smallproflist);
// CONCATENATED MODULE: ./components/Connections.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Connections_Connections; });


function Connections__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Connections__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Connections__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Connections__ref = Object(preact_min["h"])(Profilehead["a" /* default */], null);

var _ref2 = Object(preact_min["h"])(Promenu["a" /* default */], null);

var _ref3 = Object(preact_min["h"])(
  'h2',
  null,
  'Requests'
);

var _ref4 = Object(preact_min["h"])(components_Conproflist, null);

var _ref5 = Object(preact_min["h"])(
  'h2',
  { style: 'background: #43a047;' },
  'My connections'
);

var _ref6 = Object(preact_min["h"])(components_Smallproflist, null);

var Connections_Connections = function (_Component) {
  Connections__inherits(Connections, _Component);

  function Connections() {
    Connections__classCallCheck(this, Connections);

    return Connections__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Connections.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { className: 'shell' },
      Object(preact_min["h"])(
        'div',
        { className: 'profile' },
        Connections__ref,
        Object(preact_min["h"])(
          'div',
          { className: 'profile_body' },
          _ref2,
          Object(preact_min["h"])(
            'div',
            { className: 'profile_content' },
            Object(preact_min["h"])(
              'div',
              { className: Connections_default.a.connections },
              _ref3,
              _ref4,
              _ref5,
              _ref6
            )
          )
        )
      )
    );
  };

  return Connections;
}(preact_min["Component"]);



/***/ }),

/***/ "oaqC":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"connections":"connections__3SVji","conprof":"conprof__3BTGP","conwrap":"conwrap__30VWw","cp_info":"cp_info__rHQQe","cp_content":"cp_content__29QhS","cp_actions":"cp_actions__2DrPW","button_save":"button_save__30NGD","conlist":"conlist__10nrN"};

/***/ })

};;