exports.ids = [6];
exports.modules = {

/***/ "8pRp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"lp":"lp__3qxH8","lp_image":"lp_image__8TH4x","lp_content":"lp_content__2-n5f"};

/***/ }),

/***/ "g9M9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Landingpage__ = __webpack_require__("rjem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Blop__ = __webpack_require__("fiS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Postlist__ = __webpack_require__("Byva");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bloplist__ = __webpack_require__("lZYv");







var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'div',
  { className: 'home' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: 'shell' },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'main' },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: 'content', style: 'width: 100%; display: flex; justify-content: space-between;' },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'posts' },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'h2',
            { className: 'section_title', style: 'padding-top: 90px;' },
            'Top Stories'
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__Postlist__["a" /* default */], { link: 'https://www.portal.allawaken.com/api/topposts' })
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: 'blopss', style: 'width: 19%; padding-top: 145px;' },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Bloplist__["a" /* default */], { lid: 'https://www.portal.allawaken.com/api/topblops' })
        )
      )
    )
  )
);

var Topstories = function Topstories() {
  return _ref;
};

/* harmony default export */ __webpack_exports__["default"] = (Topstories);

/***/ }),

/***/ "rjem":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Landingpage_css__ = __webpack_require__("8pRp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Landingpage_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Landingpage_css__);




var fp = "https://res.cloudinary.com/awaken/image/upload/w_1800,h_386,f_auto/v1549100793/portal/theone.jpg";

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h1',
  null,
  'Time to wake up!'
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'Here we connect. We will work together in order to build strong community where everyone will be heard.'
);

var Landingpage = function Landingpage() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__Landingpage_css___default.a.lp },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: __WEBPACK_IMPORTED_MODULE_1__Landingpage_css___default.a.lp_image, style: { backgroundImage: 'url(' + fp + ')' } }),
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Landingpage_css___default.a.lp_content },
      _ref,
      _ref2
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Landingpage);

/***/ })

};;