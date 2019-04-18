exports.ids = [12];
exports.modules = {

/***/ "BOH7":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"contact_head":"contact_head__1oxuh","contact_body":"contact_body__VcWFi","contact_form":"contact_form__1sdd8","cf_holder":"cf_holder__1ICnJ","button_save":"button_save__blk5I","contact_info":"contact_info__RNSdo","contact_block":"contact_block__18Vy1","social_icon":"social_icon__2uW3_"};

/***/ }),

/***/ "TfZS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Contact_css__ = __webpack_require__("BOH7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Contact_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Contact_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_social_icons__ = __webpack_require__("ly3p");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_social_icons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_social_icons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags__ = __webpack_require__("UD6h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_meta_tags__);







var bimage = "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549100792/portal/contact.jpg";

function sendmail() {
  var mail = document.getElementById('mail');
  var name = document.getElementById('usname');
  var txt = document.getElementById('message');
  var button = document.getElementById('ssend');

  if (mail.value == "") {
    mail.style.borderColor = "red";
  } else if (name.value == "") {
    name.style.borderColor = "red";
  } else if (txt.value == "") {
    txt.style.borderColor = "red";
  } else {
    fetch('https://www.portal.allawaken.com/api/sendmail', {
      method: 'post',
      body: mail.value + "//" + name.value + "//" + txt.value
    }).then(function (response) {
      mail.value = "";
      name.value = "";
      txt.value = "";
    });
    button.innerHTML = "Your message has been sent.";
    button.style.pointerEvents = "none";
    button.style.background = "#2e7d32";
  }
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_4_react_meta_tags___default.a,
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'title',
    null,
    'All Awaken Portal - Contact us'
  ),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'description', content: 'You can contact us directly through our form or by email.' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:title', content: 'All Awaken Portal - Contact us' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:description', content: 'You can contact us directly through our form or by email.' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:type', content: 'website' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:url', content: 'https://www.portal.allawaken.com/contact' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:image', content: 'https://res.cloudinary.com/awaken/image/upload/v1547905379/4795.jpg' }),
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'fb:app_id', content: '1118435171656958' })
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: bimage, alt: 'Contacts page image' });

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h1',
  null,
  'Contact'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Form'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'mail', type: 'email', placeholder: 'Email Address' });

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'usname', type: 'text', placeholder: 'Name' });

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('textarea', { id: 'message', type: 'text', placeholder: 'Message' });

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Info'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'p',
  null,
  'contact@allawaken.com'
);

var Contact = function Contact() {
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: 'shell' },
    _ref,
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_head },
        _ref2,
        _ref3
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_body },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_form },
          _ref4,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.cf_holder },
            _ref5
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.cf_holder },
            _ref6
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.cf_holder },
            _ref7
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.cf_action },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              __WEBPACK_IMPORTED_MODULE_2_preact_router__["a" /* Link */],
              { id: 'ssend', onClick: sendmail, className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.button_save },
              'Send'
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_info },
          _ref8,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_block },
            _ref9
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.contact_block },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_react_social_icons__["SocialIcon"], { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.social_icon, url: 'http://facebook.com/All.Awaken.Official/', style: { height: 70, width: 70 }, fgColor: '#fff', bgColor: '#202124' }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_react_social_icons__["SocialIcon"], { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.social_icon, url: 'http://instagram.com/allawaken', style: { height: 70, width: 70 }, fgColor: '#fff', bgColor: '#202124' }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3_react_social_icons__["SocialIcon"], { className: __WEBPACK_IMPORTED_MODULE_1__Contact_css___default.a.social_icon, url: 'http://twitter.com/all_awaken', style: { height: 70, width: 70 }, fgColor: '#fff', bgColor: '#202124' })
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

};;