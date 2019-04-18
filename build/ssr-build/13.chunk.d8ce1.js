exports.ids = [13];
exports.modules = {

/***/ "2RYv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"posst_wrapper":"posst_wrapper__3LCSq","posst":"posst__2Kmux","posst_meta":"posst_meta__1264t","meta":"meta__XI7bz","posst_decor":"posst_decor__LHqAj","posst_head":"posst_head__29tNH","posst_title":"posst_title__1MQHj","posst_content":"posst_content__hnnRu","posst_image":"posst_image__3nRYo","posst_actions":"posst_actions__3vzYA","nc_actions":"nc_actions__1ojT4","social":"social__SsgMd","sc_button":"sc_button__Key0n","ca":"ca__3kk33","ca_button":"ca_button__11on6","comments":"comments__sKEFc","addcomment":"addcomment__GCOQn","cp_image":"cp_image__1_5Om","ac":"ac__3RIQl","ac_holder":"ac_holder__a_qNs","ac_actions":"ac_actions__EQ_du","posst_realcontent":"posst_realcontent__2tDk3","sidebar":"sidebar__1wMVt"};

/***/ }),

/***/ "RonP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bigpost_css__ = __webpack_require__("2RYv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Bigpost_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CommentList__ = __webpack_require__("rH6Z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Bloplist__ = __webpack_require__("lZYv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_meta_tags__ = __webpack_require__("UD6h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_meta_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_meta_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_social_share_buttons__ = __webpack_require__("lC4N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_social_share_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_social_share_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_jsonld__ = __webpack_require__("/PU8");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










function insertAfter(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function hidecomments(e) {
  var comments = event.target.parentElement;
  if (comments == null) {
    comments = event.target.parentElement.parentElement;
  }

  comments.style.display = "none";
}

function like(e) {
  var like = event.target.parentElement.children[1];
  var title = event.target.parentElement.parentElement.previousSibling.children[1].children[0];
  if (like.innerHTML.length != 10) {
    like = event.target.children[1];
  }
  if (like == null) {
    like = event.target.nextSibling;
    title = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0];
  }
  if (like == null) {
    like = event.target;
    title = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0];
  }

  fetch('https://www.portal.allawaken.com/api/postlike', {
    method: 'post',
    body: title.innerHTML
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text == "liked") {
        var more = parseInt(like.innerHTML) + 1;
        like.innerHTML = more;
      } else {
        var more = parseInt(like.innerHTML) - 1;
        like.innerHTML = more;
      }
    });
  });
}

function showcomments(e) {
  var comments = event.target.parentElement.parentElement.nextSibling;
  if (comments == null) {
    comments = event.target.parentElement.parentElement.parentElement.nextSibling;
  }
  if (comments.style.display == "none") {
    comments.style.display = "block";
  } else {
    comments.style.display = "none";
  }
}

function addcomment(e) {
  var title = event.target.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  if (title == null) {
    title = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  }
  title = title.children[1].children[0].innerHTML;

  var content = event.target.parentElement.previousSibling;
  if (content == null) {
    content = event.target.parentElement.parentElement.previousSibling;
  }

  if (content.children[1].children[0].value !== "") {
    fetch('https://www.portal.allawaken.com/api/addcomment', {
      method: 'post',
      body: title + "//" + content.children[1].children[0].value
    });
  }

  content.children[1].children[0].value = "";
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:type', content: 'article' });

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:card', content: 'summary' });

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:site', content: '@All_Awaken' });

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:creator', content: '@All_Awaken' });

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'update'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'comment'
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'thumb_up'
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Comments'
);

var _ref9 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'inpc', placeholder: 'Add comment ... ' });

var _ref10 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_4__Bloplist__["a" /* default */], { lid: 'https://www.portal.allawaken.com/api/topblops' });

var Bigpost = function (_Component) {
  _inherits(Bigpost, _Component);

  function Bigpost(props) {
    _classCallCheck(this, Bigpost);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { element: [], somse: [] };

    _this.deletecomment = _this.deletecomment.bind(_this);
    return _this;
  }

  Bigpost.prototype.triggerFoo = function triggerFoo() {
    addcomment(event);
    this.foo.setState({ foo: true });
  };

  Bigpost.prototype.deletecomment = function deletecomment(event) {
    var content = event.target.closest('div').parentElement.parentElement.children[2].children[0].innerHTML;
    var name = event.target.closest('div').parentElement.previousSibling.children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletecomment', {
      method: 'post',
      body: content + "//" + name
    });
    this.foo.setState({ foo: true });
  };

  Bigpost.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/isimage', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });

    fetch('https://www.portal.allawaken.com/api/post/' + this.props.tid, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (somse) {
      return _this2.setState({ somse: somse });
    });
    this.foo.setState({ foo: true });

    var mcon = document.getElementById('mcont');
    mcon.addEventListener("click", function (event) {
      event.preventDefault();
      if (event.target.tagName.toLowerCase() === 'a') {
        var formate = event.target.href.split('post/')[1];
        var formati = "https://" + formate;
        console.log(formati);
        window.open(formati, '_blank');
      }
    });

    this.myElement.addEventListener('DOMSubtreeModified', function () {
      var arrz = mcon.getElementsByTagName('iframe');
      for (var i = 0; i < arrz.length; i++) {
        var orig = mcon.getElementsByTagName('iframe')[i];
        var midl = "https://" + orig.src.split('post/')[1];
        orig.src = midl;
      }

      var arrc = mcon.getElementsByTagName('img');
      for (var i = 0; i < mcon.getElementsByTagName('img').length; i++) {
        mcon.getElementsByTagName('img')[i].src = "https://" + mcon.getElementsByTagName('img')[i].src.split('post/')[1];
      }
    });

    var zz = document.getElementById("inpc");
    zz.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        console.log("I Work");
        document.getElementById("commmm").click();
      }
    });
  };

  Bigpost.prototype.render = function render() {
    var _this3 = this;

    this.props.comments = this.state.somse["cc"];
    this.props.imge = this.state.somse["imgUrl"];
    this.props.likes = this.state.somse["likes"];
    this.props.title = this.state.somse["title"];
    this.props.content = this.state.somse["content"];
    this.props.ccontent = this.state.somse["ccontent"];
    this.props.postby = this.state.somse["postby"];
    this.props.poston = this.state.somse["poston"];
    this.props.profa = "https://www.portal.allawaken.com/profile/" + this.state.somse["postby"];
    this.props.profimg = this.state.somse["profimg"];
    this.props.desc = this.state.somse["description"];
    this.props.color = "#1e88e5";
    this.props.liink = "https://www.portal.allawaken.com/post/" + this.state.somse["title"];

    var data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": '' + this.props.liink
      },
      "author": '' + this.props.postby,
      "datePublished": '' + this.props.poston,
      "dateModified": '' + this.props.poston,
      "headline": '' + this.props.title,
      "articleSection": '' + this.props.desc,
      "backstory": "Revealing the truth",
      "articleBody": '' + this.props.ccontent,
      "about": '' + this.props.desc,
      "keywords": "How the world works, Economics, Politics, Media, Education",
      "commentCount": '' + this.props.comments,
      "image": {
        "@type": "imageObject",
        "url": '' + this.props.imge
      },
      "publisher": {
        "@type": "Organization",
        "name": "All Awaken",
        "logo": {
          "@type": "imageObject",
          "url": "https://res.cloudinary.com/awaken/image/upload/f_auto/v1549100793/portal/logo.webp"
        }
      }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: 'shell' },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        __WEBPACK_IMPORTED_MODULE_5_react_meta_tags___default.a,
        null,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'title',
          null,
          this.props.title
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'description', content: this.props.desc }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:description', content: this.props.desc }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:title', content: this.props.title }),
        _ref,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:url', content: this.props.liink }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { property: 'og:image', content: this.props.imge }),
        _ref2,
        _ref3,
        _ref4,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:title', content: this.props.title }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:description', content: this.props.desc }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'twitter:image', content: this.props.imge }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_7_react_jsonld__["a" /* default */], { data: data })
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_wrapper },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_meta },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.meta },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: this.props.profimg, alt: "Image for post author: " + this.props.postby }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'a',
                { target: '_blank', href: this.props.profa },
                this.props.postby
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.meta },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_decor, style: { background: '' + this.props.color } })
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.meta },
              _ref5,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'p',
                null,
                this.props.poston
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_head },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_image, src: this.props.imge, alt: "Image for post: " + this.props.title }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_content },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'h2',
                { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_title },
                this.props.title
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { id: 'mcont', className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_realcontent, dangerouslySetInnerHTML: { __html: this.props.content }, ref: function ref(myElement) {
                  return _this3.myElement = myElement;
                } }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'p',
                null,
                this.props.ccontent
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.posst_actions },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.social },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6_react_social_share_buttons___default.a, {
                compact: true,
                socialMedia: 'facebook',
                url: '' + this.props.liink.replace(/ /g, "-")
              }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6_react_social_share_buttons___default.a, {
                compact: true,
                socialMedia: 'twitter',
                url: '' + this.props.liink.replace(/ /g, "-"),
                text: '' + this.props.liink.replace(/ /g, "-")
              })
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ca },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ca_button, onClick: showcomments, style: { background: '' + this.props.color } },
                _ref6,
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'p',
                  null,
                  this.props.comments
                )
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ca_button, onClick: like, style: { background: '' + this.props.color } },
                _ref7,
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'p',
                  null,
                  this.props.likes
                )
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { id: 'comments', className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.comments },
            _ref8,
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.addcomment },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ac },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.cp_image, src: this.state.element["imageUrl"], alt: "My profile image" }),
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'div',
                  { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ac_holder, id: 'ac' },
                  _ref9
                )
              ),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ac_actions },
                Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                  'div',
                  { id: 'commmm', onClick: this.triggerFoo.bind(this), className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ca_button, style: { background: '' + this.props.color } },
                  'Comment'
                )
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_2__CommentList__["a" /* default */], { ref: function ref(foo) {
                return _this3.foo = foo;
              }, del: this.deletecomment, title: this.props.tid, imggg: this.state.element["imageUrl"] }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.ca_button, onClick: hidecomments, style: { background: '' + this.props.color } },
              'Hide comments'
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Bigpost_css___default.a.sidebar },
          _ref10
        )
      )
    );
  };

  return Bigpost;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Bigpost);

/***/ })

};;