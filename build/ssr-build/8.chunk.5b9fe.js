exports.ids = [8];
exports.modules = {

/***/ "1zHT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Community_css__ = __webpack_require__("L3Xe");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Community_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Community_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Compostlist__ = __webpack_require__("HSh/");





var bimage = __webpack_require__("xIf2");

function showcp() {
  if (document.getElementById('createpost').style.display == "block") {
    document.getElementById('createpost').style.display = "none";
  } else if (document.getElementById('createpost').style.display == "") {
    document.getElementById('createpost').style.display = "block";
  } else {
    document.getElementById('createpost').style.display = "block";
  }
}

function createpost() {
  var title = document.getElementById('title');
  var desc = document.getElementById('desc');
  var content = document.getElementById('content');

  var file = document.getElementById('in1').files[0];

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
      fetch('https://www.portal.allawaken.com/api/createcompost', {
        method: 'post',
        body: title.value + "//" + desc.value + "//" + content.value + "//" + x
      }).then(function (response) {
        return response.text().then(function (text) {
          window.location.assign("http://www.portal.allawaken.com/community");
        });
      });
    });
  });
}

function previewImg() {
  var preview = document.getElementById('sprofimg');
  var file = document.getElementById('in1').files[0];
  var reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h1',
  null,
  'Awaken Community'
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'public'
);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Create Post'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'device_hub'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Most relevant Posts'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'group'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Most popular Posts'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'share'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Find Post'
);

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Create Post'
);

var _ref11 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_title', 'for': 'title' },
  'Title'
);

var _ref12 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'title', type: 'text' });

var _ref13 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_desc', 'for': 'desc' },
  'Description'
);

var _ref14 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'desc', type: 'text' });

var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Front Image'
  )
);

var _ref16 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'label',
  { id: 'lbl_content', 'for': 'content' },
  'Content'
);

var _ref17 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('textarea', { id: 'content', type: 'text' });

var _ref18 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__Compostlist__["a" /* default */], { link: 'https://www.portal.allawaken.com/api/topcomposts' });

var Commp = function Commp() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: 'shell' },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.community },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_head },
        _ref,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_intro },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { onClick: showcp, className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_block },
            _ref2,
            _ref3
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'a',
            { href: '/community', className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_block },
            _ref4,
            _ref5
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'a',
            { href: '/community/mostpopular', className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_block },
            _ref6,
            _ref7
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_block },
            _ref8,
            _ref9
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { id: 'createpost', className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.createpost },
          _ref10,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.cp_form },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.cp_holder },
              _ref11,
              _ref12
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.cp_holder },
              _ref13,
              _ref14
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.ps_smallpic },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'sprofimg', className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.ps_smpic, src: bimage, alt: 'Image placeholder' }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'in1', onChange: previewImg, className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.imin, type: 'file' }),
              _ref15
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.cp_holder },
              _ref16,
              _ref17
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.ps_action },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'a',
                { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.button_save },
                'Cancel'
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'a',
                { onClick: createpost, className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.button_save },
                'Submit'
              )
            )
          )
        )
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_body },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Community_css___default.a.c_posts },
          _ref18
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Commp);

/***/ }),

/***/ "HSh/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Posst__ = __webpack_require__("k99P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var primaryRed = "#e53935";
var primaryBlue = "#1e88e5";
var primaryGreen = "#43a047";
var primaryYellow = "#fbc02d";

var Postlist = function (_Component) {
  _inherits(Postlist, _Component);

  function Postlist(props) {
    _classCallCheck(this, Postlist);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { element: [], useer: [] };
    return _this;
  }

  Postlist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch(this.props.link, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });

    fetch('https://www.portal.allawaken.com/api/ispostlog', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (useer) {
      return _this2.setState({ useer: useer });
    });
  };

  Postlist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (x == 5) {
        x = 1;
      }
      if (x == 1) {
        var _h;

        var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h['imge'] = par[i]["imgUrl"], _h.postby = par[i]["postby"], _h.poston = par[i]["poston"], _h.color = primaryBlue, _h)));
        x++;
      } else if (x == 2) {
        var _h2;

        var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h2 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h2['imge'] = par[i]["imgUrl"], _h2.postby = par[i]["postby"], _h2.poston = par[i]["poston"], _h2.color = primaryRed, _h2)));
        x++;
      } else if (x == 3) {
        var _h3;

        var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h3 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h3['imge'] = par[i]["imgUrl"], _h3.postby = par[i]["postby"], _h3.poston = par[i]["poston"], _h3.color = primaryYellow, _h3)));
        x++;
      } else if (x == 4) {
        var _h4;

        var profli = "https://www.portal.allawaken.com/profile/" + par[i]["postby"];
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h4 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h4['imge'] = par[i]["imgUrl"], _h4.postby = par[i]["postby"], _h4.poston = par[i]["poston"], _h4.color = primaryGreen, _h4)));
        x++;
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      null,
      elements
    );
  };

  return Postlist;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Postlist);

/***/ }),

/***/ "L3Xe":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"c_head":"c_head__3h_nX","c_intro":"c_intro__2wQjT","c_block":"c_block__2jCY-","createpost":"createpost__3JXb8","cp_form":"cp_form__2KcfS","cp_holder":"cp_holder__1_wpO","ps_smallpic":"ps_smallpic__lT898","ps_smpic":"ps_smpic__-9Fjs","imin":"imin__2-17D","ps_action":"ps_action__rM6op","button_save":"button_save__WvqLL","c_body":"c_body__1Rcul","c_posts":"c_posts__247Z-","c_blops":"c_blops__1mJ5M"};

/***/ })

};;