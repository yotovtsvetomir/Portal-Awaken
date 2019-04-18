module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		21: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"6d9fc","1":"d7edb","2":"f874b","3":"101b1","4":"4af97","5":"b3317","6":"bc5fb","7":"27545","8":"5b9fe","9":"1d8bb","10":"8fad8","11":"bfde4","12":"6269f","13":"d8ce1","14":"72bf8","15":"c0c6e","16":"3a562","17":"86ce6","18":"d0d42","19":"76767","20":"3ff7e"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/PU8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JsonLd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("eW0v");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var JsonLd = function (_React$Component) {
  _inherits(JsonLd, _React$Component);

  function JsonLd(props) {
    _classCallCheck(this, JsonLd);

    return _possibleConstructorReturn(this, _React$Component.call(this, props));
  }

  JsonLd.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(this.props.data) }
    });
  };

  return JsonLd;
}(__WEBPACK_IMPORTED_MODULE_1_react__["default"].Component);



/***/ }),

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export subscribers */
/* unused harmony export getCurrentUrl */
/* unused harmony export route */
/* unused harmony export Router */
/* unused harmony export Route */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["b"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "1bWN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Special case for email icon to avoid duplicated code.  Both e-mail and mailto share
 * the same icon. This allows existing users to use 'email' as a icon, while enabling
 * the exisitng logic to use the email icon when "mailto:" is present in the url.
 */
var EMAIL_ICON = {
  icon: 'M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z',
  mask: 'M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z',
  color: '#7f7f7f'
};
var _default = {
  fivehundredpix: {
    icon: 'M42.9,27.6c-2.1,0-3.6,1-5.8,3.5c-1.9-2.5-3.8-3.5-5.8-3.5c-1.7,0-3.7,0.7-4.7,3.2 c-1-2-2.7-2.6-4.1-2.6c-1,0-2,0.2-2.9,1.1l0.6-3.3h6.2v-2.5h-8.4l-1.5,8v0.2h2.7c0.6-1,1.5-1.2,2.3-1.2c1.2,0,2.3,0.6,2.6,2.4v0.7 c-0.2,1.6-1.3,2.6-2.6,2.6c-1.1,0-2.3-0.6-2.4-2.2h-3v0.7c0,0.3,0.5,1.5,0.5,1.6c1.3,2.1,3.4,2.5,5,2.5c1.8,0,3.9-0.7,5.1-3.2 c1.1,2.4,3,3.1,4.8,3.1c2.1,0,3.5-0.9,5.7-3.3c1.9,2.3,3.7,3.3,5.7,3.3c3.4,0,5.1-2.6,5.1-5.6C48,30,46.2,27.6,42.9,27.6z  M34.7,33.7c-0.4,0.4-1,0.9-1.4,1.1c-0.7,0.4-1.3,0.6-1.9,0.6c-0.6,0-1.7-0.4-2.1-1.3c-0.1-0.2-0.2-0.6-0.2-0.7v-0.9 c0.3-1.5,1.1-2.1,2.2-2.1c0.1,0,0.6,0,0.9,0.1c0.4,0.1,0.7,0.3,1.1,0.6c0.4,0.3,2,1.6,2,1.8C35.3,33.2,34.9,33.5,34.7,33.7z  M42.9,35.5c-1.3,0-2.6-0.9-3.9-2.3c1.4-1.5,2.5-2.6,3.8-2.6c1.5,0,2.3,1.1,2.3,2.5C45.2,34.4,44.4,35.5,42.9,35.5z',
    mask: 'M33.3,31.3c-0.4-0.2-0.7-0.4-1.1-0.6c-0.3-0.1-0.8-0.1-0.9-0.1c-1.1,0-1.9,0.6-2.2,2.1v0.9c0,0.1,0.1,0.4,0.2,0.7 c0.3,0.9,1.4,1.3,2.1,1.3s1.2-0.2,1.9-0.6c0.5-0.3,1-0.7,1.4-1.1c0.2-0.2,0.5-0.5,0.5-0.6C35.3,32.8,33.7,31.6,33.3,31.3z  M42.8,30.6c-1.3,0-2.4,1-3.8,2.6c1.3,1.5,2.6,2.3,3.9,2.3c1.5,0,2.2-1.1,2.2-2.4C45.2,31.7,44.3,30.6,42.8,30.6z M0,0v64h64V0H0z  M42.9,38.5c-2,0-3.8-1-5.7-3.3c-2.2,2.4-3.7,3.3-5.7,3.3c-1.8,0-3.7-0.7-4.8-3.1c-1.2,2.5-3.3,3.2-5.1,3.2c-1.6,0-3.8-0.4-5-2.5 C16.5,36,16,34.8,16,34.5v-0.7h3c0.1,1.6,1.3,2.2,2.4,2.2c1.3,0,2.4-0.9,2.6-2.6v-0.7c-0.2-1.8-1.3-2.4-2.6-2.4 c-0.8,0-1.6,0.2-2.3,1.2h-2.7v-0.2l1.5-8h8.4v2.5h-6.2l-0.6,3.3c1-0.9,2-1.1,2.9-1.1c1.4,0,3.2,0.6,4.1,2.6c1-2.4,3-3.2,4.7-3.2 c2,0,3.9,1,5.8,3.5c2.1-2.6,3.7-3.5,5.8-3.5c3.3,0,5.1,2.4,5.1,5.4C48,35.9,46.2,38.5,42.9,38.5z',
    color: '#222222'
  },
  bandsintown: {
    icon: 'M25.8,39.3h13.4v1.1H24.7V18h-5.6v28h25.8V33.7h-19V39.3z M31.4,24.7h-5.6v7.8h5.6V24.7z M38.2,24.7h-5.6v7.8h5.6V24.7z M39.3,18v14.6h5.6V18H39.3z',
    mask: 'M0,0v64h64V0H0z M32.6,24.7h5.6v7.8h-5.6V24.7z M25.8,24.7h5.6v7.8h-5.6V24.7z M44.9,46H19.1V18h5.6v22.4h14.6 v-1.1H25.8v-5.6h19V46z M44.9,32.6h-5.6V18h5.6V32.6z',
    color: '#1B8793'
  },
  behance: {
    icon: 'M29.1,31c0.8-0.4,1.5-0.9,1.9-1.5c0.4-0.6,0.6-1.4,0.6-2.3c0-0.9-0.1-1.6-0.4-2.2 c-0.3-0.6-0.7-1.1-1.2-1.4c-0.5-0.4-1.1-0.6-1.9-0.8c-0.7-0.2-1.5-0.2-2.4-0.2H17v18.5h8.9c0.8,0,1.6-0.1,2.4-0.3 c0.8-0.2,1.5-0.5,2.1-1c0.6-0.4,1.1-1,1.5-1.7c0.4-0.7,0.5-1.5,0.5-2.4c0-1.2-0.3-2.1-0.8-3C31.1,31.9,30.2,31.3,29.1,31z  M21.1,25.7h3.8c0.4,0,0.7,0,1,0.1c0.3,0.1,0.6,0.2,0.9,0.3c0.3,0.2,0.5,0.4,0.6,0.6c0.2,0.3,0.2,0.6,0.2,1.1c0,0.8-0.2,1.3-0.7,1.7 c-0.5,0.3-1.1,0.5-1.8,0.5h-4.1V25.7z M28.2,36.7c-0.2,0.3-0.4,0.6-0.7,0.7c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.7,0.1-1.1,0.1h-4.3 v-5.1h4.4c0.9,0,1.6,0.2,2.1,0.6c0.5,0.4,0.8,1.1,0.8,2C28.4,36,28.3,36.4,28.2,36.7z M46.7,32.3c-0.2-0.9-0.6-1.8-1.2-2.5 C45,29,44.3,28.4,43.5,28c-0.8-0.4-1.8-0.7-3-0.7c-1,0-1.9,0.2-2.8,0.5c-0.8,0.4-1.6,0.9-2.2,1.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-0.3,0.9-0.5,1.8-0.5,2.8c0,1,0.2,2,0.5,2.8c0.3,0.9,0.8,1.6,1.4,2.2c0.6,0.6,1.3,1.1,2.2,1.4c0.9,0.3,1.8,0.5,2.9,0.5 c1.5,0,2.8-0.3,3.9-1c1.1-0.7,1.9-1.8,2.4-3.4h-3.2c-0.1,0.4-0.4,0.8-1,1.2c-0.5,0.4-1.2,0.6-1.9,0.6c-1,0-1.8-0.3-2.4-0.8 c-0.6-0.5-0.9-1.5-0.9-2.6H47C47,34.2,47,33.2,46.7,32.3z M37.3,32.9c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.6,0.5-0.9 c0.2-0.3,0.5-0.5,0.9-0.7c0.4-0.2,0.9-0.3,1.5-0.3c0.9,0,1.6,0.3,2.1,0.7c0.4,0.5,0.8,1.2,0.8,2.1H37.3z M44.1,23.8h-7.5v1.8h7.5 V23.8z',
    mask: 'M40.4,30.1c-0.6,0-1.1,0.1-1.5,0.3c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.2,0.6-0.2,0.9 h6c-0.1-0.9-0.4-1.6-0.8-2.1C42,30.3,41.3,30.1,40.4,30.1z M25.5,32.8h-4.4v5.1h4.3c0.4,0,0.8,0,1.1-0.1c0.4-0.1,0.7-0.2,1-0.4 c0.3-0.2,0.5-0.4,0.7-0.7c0.2-0.3,0.2-0.7,0.2-1.2c0-1-0.3-1.6-0.8-2C27.1,33,26.4,32.8,25.5,32.8z M27,29.5 c0.5-0.3,0.7-0.9,0.7-1.7c0-0.4-0.1-0.8-0.2-1.1c-0.2-0.3-0.4-0.5-0.6-0.6c-0.3-0.2-0.6-0.3-0.9-0.3c-0.3-0.1-0.7-0.1-1-0.1h-3.8 v4.3h4.1C25.9,30.1,26.5,29.9,27,29.5z M0,0v64h64V0H0z M36.6,23.8h7.5v1.8h-7.5V23.8z M31.9,38.1c-0.4,0.7-0.9,1.2-1.5,1.7 c-0.6,0.4-1.3,0.8-2.1,1c-0.8,0.2-1.6,0.3-2.4,0.3H17V22.6h8.7c0.9,0,1.7,0.1,2.4,0.2c0.7,0.2,1.3,0.4,1.9,0.8 c0.5,0.4,0.9,0.8,1.2,1.4c0.3,0.6,0.4,1.3,0.4,2.2c0,0.9-0.2,1.7-0.6,2.3c-0.4,0.6-1,1.1-1.9,1.5c1.1,0.3,2,0.9,2.5,1.7 c0.6,0.8,0.8,1.8,0.8,3C32.5,36.6,32.3,37.4,31.9,38.1z M47,35.3h-9.6c0,1.1,0.4,2.1,0.9,2.6c0.5,0.5,1.3,0.8,2.4,0.8 c0.7,0,1.4-0.2,1.9-0.6c0.5-0.4,0.9-0.8,1-1.2h3.2c-0.5,1.6-1.3,2.8-2.4,3.4c-1.1,0.7-2.4,1-3.9,1c-1.1,0-2-0.2-2.9-0.5 c-0.8-0.3-1.6-0.8-2.2-1.4c-0.6-0.6-1-1.4-1.4-2.2c-0.3-0.9-0.5-1.8-0.5-2.8c0-1,0.2-1.9,0.5-2.8c0.3-0.9,0.8-1.6,1.4-2.2 c0.6-0.6,1.3-1.1,2.2-1.5c0.8-0.4,1.8-0.5,2.8-0.5c1.1,0,2.1,0.2,3,0.7c0.8,0.4,1.5,1,2.1,1.8c0.5,0.7,0.9,1.6,1.2,2.5 C47,33.2,47,34.2,47,35.3z',
    color: '#007CFF'
  },
  codepen: {
    icon: 'M24.4,35l6.8,4.5v-4L27.4,33L24.4,35z M23.8,30.6v2.7l2.1-1.4L23.8,30.6z M31.2,28.5v-4L24.4,29 l3,2L31.2,28.5z M39.6,29l-6.8-4.5v4l3.7,2.5L39.6,29z M32,30l-3,2l3,2l3-2L32,30z M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C48,23.2,40.8,16,32,16z M41.9,35.1c0,0.3-0.1,0.6-0.4,0.7l-9.1,5.9c-0.3,0.2-0.6,0.2-0.9,0l-9.1-5.9 c-0.2-0.2-0.4-0.4-0.4-0.7v-6.2c0-0.3,0.1-0.6,0.4-0.7l9.1-5.9c0.3-0.2,0.6-0.2,0.9,0l9.1,5.9c0.2,0.2,0.4,0.4,0.4,0.7V35.1z  M32.8,35.5v4l6.8-4.5l-3-2L32.8,35.5z M40.2,33.4v-2.7L38.1,32L40.2,33.4z',
    mask: 'M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16s16,7.2,16,16C48,40.8,40.8,48,32,48z M32.5,22.3 c-0.3-0.2-0.6-0.2-0.9,0l-9.1,5.9c-0.2,0.2-0.4,0.4-0.4,0.7v6.2c0,0.3,0.1,0.6,0.4,0.7l9.1,5.9c0.3,0.2,0.6,0.2,0.9,0l9.1-5.9 c0.2-0.2,0.4-0.4,0.4-0.7v-6.2c0-0.3-0.1-0.6-0.4-0.7L32.5,22.3z M32.8,24.5l6.8,4.5l-3,2l-3.7-2.5V24.5z M31.2,24.5v4L27.4,31l-3-2 L31.2,24.5z M23.8,30.6l2.1,1.4l-2.1,1.4V30.6z M31.2,39.5L24.4,35l3-2l3.7,2.5V39.5z M32,34l-3-2l3-2l3,2L32,34z M32.8,39.5v-4 l3.7-2.5l3,2L32.8,39.5z M40.2,33.4L38.1,32l2.1-1.4V33.4z',
    color: '##151515'
  },
  dribbble: {
    icon: 'M32,48c-8.8,0-16-7.2-16-16s7.2-16,16-16 s16,7.2,16,16S40.8,48,32,48z M45.5,34.2C45,34,41.3,32.9,37,33.6c1.8,4.9,2.5,8.9,2.7,9.7C42.7,41.3,44.9,38,45.5,34.2z M37.3,44.6 c-0.2-1.2-1-5.4-2.9-10.4c0,0-0.1,0-0.1,0c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9C33.9,45.7,35.7,45.3,37.3,44.6z  M21.8,41.2c0.3-0.5,4.1-6.7,11.1-9c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9c0,0.1,0,0.3,0,0.4 C18.3,35.5,19.7,38.7,21.8,41.2z M18.6,29.2c0.6,0,6.2,0,12.6-1.7c-2.3-4-4.7-7.4-5.1-7.9C22.4,21.5,19.5,25,18.6,29.2z M28.8,18.7 c0.4,0.5,2.9,3.9,5.1,8c4.9-1.8,6.9-4.6,7.2-4.9c-2.4-2.1-5.6-3.4-9.1-3.4C30.9,18.4,29.8,18.5,28.8,18.7z M42.6,23.4 c-0.3,0.4-2.6,3.3-7.6,5.4c0.3,0.7,0.6,1.3,0.9,2c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4C45.6,28.7,44.5,25.7,42.6,23.4z',
    mask: 'M34.3,34.3c-7.7,2.7-10.5,8-10.7,8.5c2.3,1.8,5.2,2.9,8.4,2.9c1.9,0,3.7-0.4,5.3-1.1 C37.1,43.4,36.3,39.2,34.3,34.3C34.4,34.2,34.4,34.3,34.3,34.3z M31.3,27.6c-2.3-4-4.7-7.4-5.1-7.9c-3.8,1.8-6.7,5.3-7.6,9.6 C19.2,29.2,24.9,29.3,31.3,27.6z M33,32.1c0.2-0.1,0.4-0.1,0.5-0.2c-0.3-0.8-0.7-1.6-1.1-2.3c-6.8,2-13.4,2-14,1.9 c0,0.1,0,0.3,0,0.4c0,3.5,1.3,6.7,3.5,9.1C22.2,40.6,25.9,34.4,33,32.1z M41.1,21.8c-2.4-2.1-5.6-3.4-9.1-3.4 c-1.1,0-2.2,0.1-3.2,0.4c0.4,0.5,2.9,3.9,5.1,8C38.8,24.9,40.8,22.1,41.1,21.8z M34.9,28.8c0.3,0.7,0.6,1.3,0.9,2 c0.1,0.2,0.2,0.5,0.3,0.7c4.5-0.6,9.1,0.3,9.5,0.4c0-3.2-1.2-6.2-3.1-8.5C42.3,23.8,40,26.7,34.9,28.8z M37,33.6 c1.8,4.9,2.5,8.9,2.7,9.7c3.1-2.1,5.2-5.4,5.9-9.2C45,34,41.3,32.9,37,33.6z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z',
    color: '#ea4c89'
  },
  dropbox: {
    icon: 'M25.4,17.1L16,23.3l6.5,5.2l9.5-5.9L25.4,17.1z M16,33.7l9.4,6.1l6.6-5.5l-9.5-5.9L16,33.7z  M32,34.3l6.6,5.5l9.4-6.1l-6.5-5.2L32,34.3z M48,23.3l-9.4-6.1L32,22.6l9.5,5.9L48,23.3z M32,35.5L25.4,41l-2.8-1.8v2.1l9.4,5.7 l9.4-5.7v-2.1L38.6,41L32,35.5z',
    mask: 'M0,0v64h64V0H0z M41.5,41.2L32,46.9l-9.4-5.7v-2.1l2.8,1.8l6.6-5.5l6.6,5.5l2.8-1.8V41.2z M48,33.7l-9.4,6.1 L32,34.3l-6.6,5.5L16,33.7l6.5-5.2L16,23.3l9.4-6.1l6.6,5.5l6.6-5.5l9.4,6.1l-6.5,5.2L48,33.7z M22.5,28.5l9.5,5.9l9.5-5.9L32,22.6 L22.5,28.5z',
    color: '#1081DE'
  },
  email: EMAIL_ICON,
  facebook: {
    icon: 'M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z',
    mask: 'M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z',
    color: '#3b5998'
  },
  flickr: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16S40.8,16,32,16z M26,37c-2.8,0-5-2.2-5-5 s2.2-5,5-5s5,2.2,5,5S28.8,37,26,37z M38,37c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S40.8,37,38,37z',
    mask: 'M38,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S40.8,27,38,27z M0,0v64h64V0H0z M32,48c-8.8,0-16-7.2-16-16 s7.2-16,16-16s16,7.2,16,16S40.8,48,32,48z M26,27c-2.8,0-5,2.2-5,5s2.2,5,5,5s5-2.2,5-5S28.8,27,26,27z',
    color: '#0063db'
  },
  foursquare: {
    icon: 'M41.5,17c0,0-14.3,0-16.5,0c-2.3,0-3,1.7-3,2.8c0,1.1,0,26.3,0,26.3c0,1.2,0.7,1.7,1,1.8 c0.4,0.1,1.4,0.3,2-0.4c0,0,7.8-9.1,7.9-9.2c0.2-0.2,0.2-0.2,0.4-0.2c0.4,0,3.4,0,5.1,0c2.1,0,2.5-1.5,2.7-2.4 c0.2-0.7,2.3-11.3,2.9-14.7C44.6,18.4,43.9,17,41.5,17z M41.1,35.7c0.2-0.7,2.3-11.3,2.9-14.7 M40.5,21.5l-0.7,3.6 c-0.1,0.4-0.6,0.8-1,0.8c-0.5,0-6.4,0-6.4,0c-0.7,0-1.2,0.5-1.2,1.2v0.8c0,0.7,0.5,1.2,1.2,1.2c0,0,5,0,5.5,0c0.5,0,1,0.6,0.9,1.1 c-0.1,0.5-0.6,3.3-0.7,3.6c-0.1,0.3-0.4,0.8-1,0.8c-0.5,0-4.5,0-4.5,0c-0.8,0-1.1,0.1-1.6,0.8c-0.5,0.7-5.4,6.5-5.4,6.5 c0,0.1-0.1,0-0.1,0V21.4c0-0.5,0.4-1,1-1c0,0,12.8,0,13.3,0C40.2,20.4,40.6,20.9,40.5,21.5z',
    mask: 'M39.7,20.4c-0.5,0-13.3,0-13.3,0c-0.6,0-1,0.5-1,1v20.5c0,0.1,0,0.1,0.1,0c0,0,4.9-5.9,5.4-6.5 c0.5-0.7,0.8-0.8,1.6-0.8c0,0,3.9,0,4.5,0c0.6,0,1-0.5,1-0.8c0.1-0.3,0.6-3,0.7-3.6c0.1-0.5-0.4-1.1-0.9-1.1c-0.5,0-5.5,0-5.5,0 c-0.7,0-1.2-0.5-1.2-1.2v-0.8c0-0.7,0.5-1.2,1.2-1.2c0,0,6,0,6.4,0c0.5,0,0.9-0.4,1-0.8l0.7-3.6C40.6,20.9,40.2,20.4,39.7,20.4z  M0,0v64h64V0H0z M44,20.9l-1,5.2c-0.8,4.2-1.8,9-1.9,9.5c-0.2,0.9-0.6,2.4-2.7,2.4h-5.1c-0.2,0-0.2,0-0.4,0.2 c-0.1,0.1-7.9,9.2-7.9,9.2c-0.6,0.7-1.6,0.6-2,0.4c-0.4-0.1-1-0.6-1-1.8c0,0,0-25.2,0-26.3c0-1.1,0.7-2.8,3-2.8c2.3,0,16.5,0,16.5,0 C43.9,17,44.6,18.4,44,20.9z',
    color: '#0072b1'
  },
  github: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z',
    mask: 'M0,0v64h64V0H0z M37.1,47.2c-0.8,0.2-1.1-0.3-1.1-0.8c0-0.5,0-2.3,0-4.4c0-1.5-0.5-2.5-1.1-3 c3.6-0.4,7.3-1.7,7.3-7.9c0-1.7-0.6-3.2-1.6-4.3c0.2-0.4,0.7-2-0.2-4.2c0,0-1.3-0.4-4.4,1.6c-1.3-0.4-2.6-0.5-4-0.5 c-1.4,0-2.7,0.2-4,0.5c-3.1-2.1-4.4-1.6-4.4-1.6c-0.9,2.2-0.3,3.8-0.2,4.2c-1,1.1-1.6,2.5-1.6,4.3c0,6.1,3.7,7.5,7.3,7.9 c-0.5,0.4-0.9,1.1-1,2.1c-0.9,0.4-3.2,1.1-4.7-1.3c0,0-0.8-1.5-2.5-1.6c0,0-1.6,0-0.1,1c0,0,1,0.5,1.8,2.3c0,0,0.9,3.1,5.4,2.1 c0,1.3,0,2.3,0,2.7c0,0.4-0.3,0.9-1.1,0.8C20.6,45.1,16,39.1,16,32c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16 C48,39.1,43.4,45.1,37.1,47.2z',
    color: '#4183c4'
  },
  google_play: {
    icon: 'M24.4,45.6l16-8.8l-3.6-3.6L24.4,45.6z M22.2,18.5c-0.1,0.2-0.2,0.5-0.2,0.9v25.1 c0,0.4,0.1,0.6,0.2,0.9L35.6,32L22.2,18.5z M47.1,30.8L42.1,28L38.1,32l4,4l5-2.8C48.3,32.5,48.3,31.4,47.1,30.8z M40.4,27.1 l-15.9-8.8l12.3,12.3L40.4,27.1z',
    mask: 'M0,0v64h64V0H0z M40.4,27.1l-3.6,3.6L24.5,18.4L40.4,27.1z M22,44.5V19.4c0-0.4,0.1-0.7,0.2-0.9L35.6,32 L22.2,45.4C22.1,45.2,22,44.9,22,44.5z M24.4,45.6l12.4-12.4l3.6,3.6L24.4,45.6z M47.1,33.2l-5,2.8l-4-4l3.9-3.9l5.1,2.8 C48.3,31.4,48.3,32.5,47.1,33.2z',
    color: '#40BBC1'
  },
  google: {
    icon: 'M35.4,17h-8c-1.1,0-2.2,0.1-3.4,0.4 c-1.2,0.3-2.4,0.9-3.5,1.8c-1.7,1.6-2.5,3.4-2.5,5.4c0,1.6,0.6,3.1,1.8,4.3c1.1,1.3,2.7,2,4.9,2c0.4,0,0.8,0,1.3-0.1 c-0.1,0.2-0.2,0.4-0.2,0.7c-0.1,0.2-0.2,0.5-0.2,0.9c0,0.6,0.1,1.1,0.4,1.5c0.2,0.4,0.5,0.8,0.8,1.2c-0.9,0-2.1,0.1-3.5,0.4 c-1.4,0.2-2.8,0.7-4.1,1.5c-1.2,0.7-1.9,1.5-2.4,2.4c-0.5,0.9-0.7,1.7-0.7,2.5c0,1.5,0.7,2.8,2.1,3.9c1.4,1.2,3.5,1.8,6.3,1.8 c3.3-0.1,5.9-0.9,7.7-2.4c1.7-1.5,2.6-3.2,2.6-5.2c0-1.4-0.3-2.5-0.9-3.3c-0.6-0.8-1.4-1.6-2.2-2.3l-1.4-1.1 c-0.2-0.2-0.4-0.4-0.6-0.7c-0.2-0.3-0.4-0.6-0.4-1c0-0.4,0.1-0.8,0.4-1.1c0.2-0.3,0.4-0.6,0.7-0.8c0.4-0.4,0.8-0.7,1.2-1.1 c0.3-0.4,0.6-0.7,0.9-1.2c0.6-0.9,0.9-2,0.9-3.4c0-0.8-0.1-1.5-0.3-2.1c-0.2-0.6-0.5-1.1-0.7-1.5c-0.3-0.5-0.6-0.8-0.9-1.2 c-0.3-0.3-0.6-0.5-0.8-0.7H33L35.4,17z M31,38.9c0.7,0.8,1,1.6,1,2.7c0,1.3-0.5,2.3-1.5,3.1c-1,0.8-2.4,1.2-4.3,1.3 c-2.1,0-3.8-0.5-5-1.4c-1.3-0.9-1.9-2.1-1.9-3.5c0-0.7,0.1-1.3,0.4-1.8c0.3-0.5,0.6-0.9,0.9-1.2c0.4-0.3,0.8-0.6,1.1-0.7 c0.4-0.2,0.7-0.3,0.9-0.4c0.9-0.3,1.7-0.5,2.5-0.6c0.8-0.1,1.4-0.1,1.6-0.1c0.3,0,0.6,0,0.9,0C29.2,37.3,30.3,38.2,31,38.9z  M29.7,27.1c-0.1,0.5-0.3,1.1-0.7,1.6c-0.7,0.7-1.6,1.1-2.6,1.1c-0.8,0-1.6-0.3-2.2-0.8c-0.6-0.5-1.2-1.1-1.6-1.9 c-0.8-1.6-1.3-3.1-1.3-4.5c0-1.1,0.3-2.1,0.9-3c0.7-0.9,1.6-1.3,2.7-1.3c0.8,0,1.5,0.3,2.2,0.7c0.6,0.5,1.1,1.1,1.5,1.9 c0.8,1.6,1.2,3.2,1.2,4.8C29.8,26.1,29.8,26.5,29.7,27.1z M43.7,29.5v-4.3h-2.5v4.3H37V32h4.2v4.2h2.5V32H48v-2.5H43.7z',
    mask: 'M0,0v64h64V0H0z M31.3,19.1c0.3,0.3,0.6,0.7,0.9,1.2c0.3,0.4,0.5,0.9,0.7,1.5c0.2,0.6,0.3,1.3,0.3,2.1 c0,1.4-0.3,2.6-0.9,3.4c-0.3,0.4-0.6,0.8-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1.1c-0.2,0.2-0.5,0.5-0.7,0.8c-0.2,0.3-0.4,0.7-0.4,1.1 c0,0.4,0.1,0.8,0.4,1c0.2,0.3,0.4,0.5,0.6,0.7l1.4,1.1c0.8,0.7,1.6,1.5,2.2,2.3c0.6,0.8,0.9,2,0.9,3.3c0,1.9-0.9,3.7-2.6,5.2 c-1.8,1.6-4.3,2.4-7.7,2.4c-2.8,0-4.9-0.6-6.3-1.8c-1.4-1.1-2.1-2.4-2.1-3.9c0-0.7,0.2-1.6,0.7-2.5c0.4-0.9,1.2-1.7,2.4-2.4 c1.3-0.7,2.7-1.2,4.1-1.5c1.4-0.2,2.6-0.3,3.5-0.4c-0.3-0.4-0.5-0.8-0.8-1.2c-0.3-0.4-0.4-0.9-0.4-1.5c0-0.4,0-0.6,0.2-0.9 c0.1-0.2,0.2-0.5,0.2-0.7c-0.5,0.1-0.9,0.1-1.3,0.1c-2.1,0-3.8-0.7-4.9-2c-1.2-1.2-1.8-2.7-1.8-4.3c0-2,0.8-3.8,2.5-5.4 c1.1-0.9,2.3-1.6,3.5-1.8c1.2-0.2,2.3-0.4,3.4-0.4h8L33,18.4h-2.5C30.7,18.6,31,18.8,31.3,19.1z M48,32h-4.3v4.2h-2.5V32H37v-2.5 h4.2v-4.3h2.5v4.3H48V32z M27.1,19.1c-0.6-0.5-1.4-0.7-2.2-0.7c-1.1,0-2,0.5-2.7,1.3c-0.6,0.9-0.9,1.9-0.9,3c0,1.5,0.4,3,1.3,4.5 c0.4,0.7,0.9,1.4,1.6,1.9c0.6,0.5,1.4,0.8,2.2,0.8c1.1,0,1.9-0.4,2.6-1.1c0.3-0.5,0.6-1,0.7-1.6c0.1-0.5,0.1-1,0.1-1.4 c0-1.6-0.4-3.2-1.2-4.8C28.2,20.2,27.7,19.5,27.1,19.1z M26.9,36.2c-0.2,0-0.7,0-1.6,0.1c-0.8,0.1-1.7,0.3-2.5,0.6 c-0.2,0.1-0.5,0.2-0.9,0.4c-0.4,0.2-0.7,0.4-1.1,0.7c-0.4,0.3-0.7,0.7-0.9,1.2c-0.3,0.5-0.4,1.1-0.4,1.8c0,1.4,0.6,2.6,1.9,3.5 c1.2,0.9,2.9,1.4,5,1.4c1.9,0,3.3-0.4,4.3-1.3c1-0.8,1.5-1.8,1.5-3.1c0-1-0.3-1.9-1-2.7c-0.7-0.7-1.8-1.6-3.3-2.6 C27.5,36.2,27.2,36.2,26.9,36.2z',
    color: '#dd4b39'
  },
  instagram: {
    icon: 'M43.5,29.7h-2.6c0.2,0.7,0.3,1.5,0.3,2.3 c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2h20.8c0.6,0,1.2-0.5,1.2-1.2 V29.7z M43.5,21.6c0-0.6-0.5-1.2-1.2-1.2h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5c0.6,0,1.2-0.5,1.2-1.2V21.6z  M32,26.2c-3.2,0-5.8,2.6-5.8,5.8c0,3.2,2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8C37.8,28.8,35.2,26.2,32,26.2 M43.5,47H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5v23.1C47,45.4,45.5,47,43.5,47',
    mask: 'M41.2,32c0,5.1-4.1,9.2-9.2,9.2c-5.1,0-9.2-4.1-9.2-9.2c0-0.8,0.1-1.6,0.3-2.3h-2.6v12.7c0,0.6,0.5,1.2,1.2,1.2 h20.8c0.6,0,1.2-0.5,1.2-1.2V29.7h-2.6C41.1,30.4,41.2,31.2,41.2,32z M32,37.8c3.2,0,5.8-2.6,5.8-5.8c0-3.2-2.6-5.8-5.8-5.8 c-3.2,0-5.8,2.6-5.8,5.8C26.2,35.2,28.8,37.8,32,37.8z M42.4,20.5h-3.5c-0.6,0-1.2,0.5-1.2,1.2v3.5c0,0.6,0.5,1.2,1.2,1.2h3.5 c0.6,0,1.2-0.5,1.2-1.2v-3.5C43.5,21,43,20.5,42.4,20.5z M0,0v64h64V0H0z M47,43.5c0,1.9-1.5,3.5-3.5,3.5H20.5 c-1.9,0-3.5-1.6-3.5-3.5V20.5c0-1.9,1.5-3.5,3.5-3.5h23.1c1.9,0,3.5,1.5,3.5,3.5V43.5z',
    color: '#3f729b'
  },
  itunes: {
    icon: 'M41.1,17c-0.1,0-0.2,0-0.3,0l-14.7,3c-0.6,0.1-1.1,0.7-1.1,1.4v17.6c0,0.8-0.6,1.4-1.4,1.4 h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V27.4c0-0.4,0.3-0.8,0.7-0.9l12.1-2.4c0.1,0,0.1,0,0.2,0 c0.5,0,0.9,0.4,0.9,0.9v11c0,0.8-0.6,1.4-1.4,1.4h-2.8c-1.9,0-3.4,1.5-3.4,3.4c0,1.9,1.5,3.4,3.4,3.4h2c2.2,0,4-1.8,4-4V18.4 C42.5,17.6,41.9,17,41.1,17z',
    mask: 'M0,0v64h64V0H0z M42.5,40c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4s1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4 v-11c0-0.5-0.4-0.9-0.9-0.9c-0.1,0-0.1,0-0.2,0l-12.1,2.4c-0.4,0.1-0.7,0.4-0.7,0.9V43c0,2.2-1.8,4-4,4h-2c-1.9,0-3.4-1.5-3.4-3.4 c0-1.9,1.5-3.4,3.4-3.4h2.8c0.8,0,1.4-0.6,1.4-1.4V21.3c0-0.7,0.5-1.2,1.1-1.4l14.7-3c0.1,0,0.2,0,0.3,0c0.8,0,1.4,0.6,1.4,1.4V40z',
    color: '#E049D1'
  },
  linkedin: {
    icon: 'M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z',
    mask: 'M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z',
    color: '#007fb1'
  },
  mailto: EMAIL_ICON,
  medium: {
    icon: 'M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z',
    mask: 'M0,0v64h64V0H0z M47,23.7h-1.2c-0.4,0-0.9,0.6-0.9,1v14.7c0,0.4,0.5,1,0.9,1H47v3.4H36.4v-3.4h2.1V24.9h-0.1 l-5.3,18.9h-4.1l-5.2-18.9h-0.1v15.5H26v3.4h-9v-3.4h1.2c0.5,0,1-0.6,1-1V24.7c0-0.4-0.5-1-1-1H17v-3.6h11.3l3.7,13.8h0.1l3.7-13.8 H47V23.7z',
    color: '#333332'
  },
  meetup: {
    icon: 'M30.8,33.4c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4 c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4c0.2,0.8,0.6,2,0.1,2.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5 c-1.5-4.6-3.5-11.8-5.2-16.6c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8 c-1-1.4-3.1-4.8-4.1-6.9c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6 c-0.7-3.4-1.2-8-1.1-11.1c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4 C26.9,25.5,28.9,29.5,30.8,33.4z',
    mask: 'M0,0v64h64V0H0z M47.8,44.3c-0.4,0.2-2.5,0.9-3.9,1c-0.6,0.1-1.1-0.6-1.4-1.5c-1.5-4.6-3.5-11.8-5.2-16.6 c0,3.7-0.3,10.8-0.4,12c-0.1,1.7-0.4,3.7-1.8,3.9c-1.1,0.2-2.4,0.4-4,0.4c-1.3,0-1.8-0.9-2.4-1.8c-1-1.4-3.1-4.8-4.1-6.9 c0.3,2.3,0.7,4.7,0.9,5.8c0.1,0.8,0,1.5-0.6,1.9c-1,0.7-3.2,1.4-4.1,1.4c-0.8,0-1.5-0.8-1.6-1.6c-0.7-3.4-1.2-8-1.1-11.1 c0-2.8,0-5.9,0.2-8.3c0-0.7,0.3-1.1,0.9-1.4c1.2-0.5,3-0.6,4.7-0.3c0.8,0.1,1,0.8,1.4,1.4c1.7,2.8,3.8,6.7,5.7,10.6 c0-6.3,1.9-11.9,3.5-15.3c0.5-1.1,0.9-1.4,1.9-1.4c1.3,0,2.9,0.2,4.1,0.4c1.1,0.2,1.5,1.6,1.7,2.5c1.2,4.5,4.7,18.7,5.5,22.4 C47.8,42.8,48.3,44,47.8,44.3z',
    color: '#E51937'
  },
  pinterest: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z',
    mask: 'M0,0v64h64V0H0z M32,48c-1.6,0-3.1-0.2-4.5-0.7c0.6-1,1.3-2.2,1.6-3.4c0.2-0.7,1.1-4.4,1.1-4.4 c0.6,1.1,2.2,2,3.9,2c5.1,0,8.6-4.7,8.6-11c0-4.7-4-9.2-10.1-9.2c-7.6,0-11.4,5.5-11.4,10c0,2.8,1,5.2,3.3,6.1 c0.4,0.1,0.7,0,0.8-0.4c0.1-0.3,0.2-1,0.3-1.3c0.1-0.4,0.1-0.5-0.2-0.9c-0.6-0.8-1.1-1.7-1.1-3.1c0-4,3-7.7,7.9-7.7 c4.3,0,6.7,2.6,6.7,6.1c0,4.6-2,8.5-5.1,8.5c-1.7,0-2.9-1.4-2.5-3.1c0.5-2,1.4-4.2,1.4-5.7c0-1.3-0.7-2.4-2.2-2.4 c-1.7,0-3.1,1.8-3.1,4.1c0,1.5,0.5,2.5,0.5,2.5s-1.8,7.4-2.1,8.7c-0.3,1.2-0.3,2.6-0.3,3.7C19.9,44.2,16,38.6,16,32 c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z',
    color: '#cb2128'
  },
  rdio: {
    icon: 'M47.3,25.7c-3.2,0.1-7.1-2.4-8.7-3.4c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2-0.1-0.3-0.2-0.5-0.3v9.3h0 c0,0.8-0.2,1.7-0.8,2.6l0,0.1c-1.5,2.4-4.7,3.9-7.7,2.9c-2.9-1-3.7-3.8-2.1-6.3l0-0.1c1.5-2.4,4.7-3.9,7.7-2.9 c0.2,0.1,0.4,0.2,0.6,0.3v-6.8c-1.1-0.3-2.2-0.5-3.4-0.5c-6.9,0-12,5.2-12,11.6v0.1c0,6.4,5.1,11.5,12,11.5c6.9,0,12-5.2,12-11.6 v-0.1c0-0.5,0-1-0.1-1.5C47.5,29.5,49,25.8,47.3,25.7z',
    mask: 'M0,0v64h64V0H0z M43.9,30.5c0.1,0.5,0.1,1,0.1,1.5V32c0,6.4-5.1,11.6-12,11.6c-6.9,0-12-5.1-12-11.5V32 c0-6.4,5.1-11.6,12-11.6c1.2,0,2.3,0.2,3.4,0.5v6.8c-0.2-0.1-0.4-0.2-0.6-0.3c-3-1-6.2,0.4-7.7,2.9l0,0.1c-1.5,2.5-0.8,5.3,2.1,6.3 c3,1,6.2-0.4,7.7-2.9l0-0.1c0.5-0.8,0.8-1.7,0.8-2.6h0v-9.3c0.2,0.1,0.3,0.2,0.5,0.3c0.1,0.1,0.3,0.2,0.4,0.2c1.5,1,5.4,3.5,8.7,3.4 C49,25.8,47.5,29.5,43.9,30.5z',
    color: '#0475C5'
  },
  reddit: {
    icon: 'M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344',
    mask: 'M0,0v64h64V0H0z M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344',
    color: '#FF4500'
  },
  rss: {
    icon: 'M24,36c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4s4-1.8,4-4C28,37.8,26.2,36,24,36z M23,18 c-1.1,0-2,0.9-2,2s0.9,2,2,2c10.5,0,19,8.5,19,19c0,1.1,0.9,2,2,2s2-0.9,2-2C46,28.3,35.7,18,23,18z M23,27c-1.1,0-2,0.9-2,2 s0.9,2,2,2c5.5,0,10,4.5,10,10c0,1.1,0.9,2,2,2s2-0.9,2-2C37,33.3,30.7,27,23,27z',
    mask: 'M0,0v64h64V0H0z M24,44c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C28,42.2,26.2,44,24,44z M35,43 c-1.1,0-2-0.9-2-2c0-5.5-4.5-10-10-10c-1.1,0-2-0.9-2-2s0.9-2,2-2c7.7,0,14,6.3,14,14C37,42.1,36.1,43,35,43z M44,43 c-1.1,0-2-0.9-2-2c0-10.5-8.5-19-19-19c-1.1,0-2-0.9-2-2s0.9-2,2-2c12.7,0,23,10.3,23,23C46,42.1,45.1,43,44,43z',
    color: '#EF8733'
  },
  sharethis: {
    icon: 'M28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z',
    mask: 'M0,0L64,0L64,64L0,64L0,0ZM28.3875,32.0001C28.3875,32.0843 28.3683,32.1632 28.3633,32.2471L37.1647,36.6464C37.9182,36.0083 38.8823,35.61 39.9474,35.61C42.3418,35.6105 44.2821,37.5509 44.2821,39.945C44.2821,42.3418 42.3417,44.2821 39.9474,44.2821C37.551,44.2821 35.6127,42.3417 35.6127,39.945C35.6127,39.8587 35.6319,39.7816 35.6367,39.698L26.8353,35.2984C26.0795,35.9341 25.1177,36.3324 24.0526,36.3324C21.6584,36.3324 19.7179,34.3941 19.7179,32.0001C19.7179,29.6036 21.6584,27.6628 24.0526,27.6628C25.1176,27.6628 26.0798,28.0635 26.8353,28.6992L35.6367,24.2997C35.6319,24.2156 35.6127,24.1365 35.6127,24.0502C35.6127,21.6584 37.551,19.7179 39.9474,19.7179C42.3418,19.7179 44.2821,21.6584 44.2821,24.0502C44.2821,26.4466 42.3417,28.3875 39.9474,28.3875C38.88,28.3875 37.9178,27.9868 37.1647,27.3487L28.3633,31.7506C28.368,31.8347 28.3875,31.9138 28.3875,32.0001Z',
    color: '#00BF00'
  },
  smugmug: {
    icon: 'M25.4,22.9c2.8,0,4.1-1.7,3.9-3.1 c-0.1-1.2-1.3-2.4-3.6-2.4c-1.9,0-3.1,1.4-3.3,2.8C22.3,21.6,23.1,23,25.4,22.9z M39.2,22.6c2.6-0.1,3.8-1.5,3.8-2.8 c0-1.5-1.4-3-3.8-2.8c-1.9,0.2-3,1.5-3.2,2.8C35.9,21.3,36.9,22.7,39.2,22.6z M40.9,28.5c-6.6,0.7-6.9,0.7-19,1 c-5.1,0-4,17.5,6.9,17.5C39.2,47,51.7,27.4,40.9,28.5z M29,43.9c-9.5,0-8.2-11.3-6.6-11.4c11.1-0.4,13.9-0.9,17.8-0.9 C44.3,31.6,36.6,43.9,29,43.9z',
    mask: 'M0,0v64h64V0H0z M36.1,19.8c0.2-1.3,1.3-2.6,3.2-2.8c2.4-0.2,3.8,1.3,3.8,2.8c0,1.3-1.2,2.6-3.8,2.8 C36.9,22.7,35.9,21.3,36.1,19.8z M22.5,20.2c0.2-1.4,1.4-2.8,3.3-2.8c2.3,0,3.5,1.1,3.6,2.4c0.2,1.5-1.1,3.1-3.9,3.1 C23.1,23,22.3,21.6,22.5,20.2z M28.8,47c-10.9,0-12-17.5-6.9-17.5c12.1-0.3,12.5-0.3,19-1C51.7,27.4,39.2,47,28.8,47z M40.3,31.6 c-3.9,0-6.8,0.5-17.8,0.9c-1.6,0.1-2.9,11.4,6.6,11.4C36.6,43.9,44.3,31.6,40.3,31.6z',
    color: '#8cca1e'
  },
  snapchat: {
    icon: 'M32.309,15.962h-0.001c-0.028,0-0.054,0-0.078,0.001l0,0c0,0-0.513,0.005-0.554,0.005c-1.32,0-5.794,0.368-7.905,5.1c-0.71,1.592-0.54,4.296-0.403,6.469c0.016,0.256,0.033,0.522,0.048,0.779c-0.109,0.06-0.309,0.136-0.622,0.136c-0.419,0-0.914-0.132-1.472-0.394c-0.148-0.069-0.319-0.104-0.507-0.104c-0.653,0-1.434,0.43-1.555,1.07c-0.088,0.461,0.119,1.134,1.601,1.719c0.134,0.053,0.294,0.104,0.464,0.158c0.612,0.194,1.538,0.488,1.789,1.08c0.13,0.306,0.078,0.701-0.154,1.172c-0.005,0.011-0.01,0.021-0.015,0.032c-0.081,0.19-2.04,4.655-6.389,5.371c-0.334,0.055-0.573,0.353-0.555,0.692c0.006,0.101,0.03,0.201,0.071,0.298c0.326,0.763,1.703,1.322,4.21,1.711c0.084,0.113,0.171,0.514,0.224,0.758c0.052,0.241,0.106,0.489,0.183,0.751c0.076,0.257,0.272,0.565,0.776,0.565c0.204,0,0.444-0.047,0.723-0.102c0.418-0.082,0.99-0.193,1.706-0.193c0.397,0,0.809,0.035,1.223,0.103c0.809,0.135,1.496,0.621,2.292,1.183c1.14,0.806,2.431,1.718,4.393,1.718c0.054,0,0.108-0.002,0.162-0.006c0.064,0.003,0.146,0.006,0.234,0.006c1.963,0,3.253-0.913,4.392-1.718c0.798-0.563,1.484-1.049,2.293-1.184c0.414-0.069,0.825-0.103,1.222-0.103c0.683,0,1.223,0.087,1.706,0.181c0.302,0.059,0.545,0.089,0.723,0.089l0.019,0h0.018c0.373,0,0.636-0.197,0.74-0.554c0.076-0.256,0.13-0.498,0.183-0.743c0.053-0.243,0.14-0.642,0.223-0.754c2.508-0.389,3.884-0.948,4.21-1.707c0.042-0.097,0.066-0.198,0.072-0.3c0.019-0.339-0.22-0.636-0.554-0.691c-4.351-0.717-6.308-5.181-6.389-5.371c-0.005-0.011-0.01-0.022-0.015-0.032c-0.232-0.471-0.284-0.865-0.154-1.172c0.251-0.592,1.176-0.885,1.788-1.079c0.171-0.054,0.332-0.106,0.465-0.158c1.085-0.428,1.629-0.954,1.617-1.564c-0.009-0.478-0.382-0.905-0.974-1.117l-0.002-0.001c-0.199-0.083-0.436-0.128-0.667-0.128c-0.158,0-0.393,0.022-0.613,0.124c-0.516,0.242-0.98,0.373-1.379,0.391c-0.265-0.012-0.439-0.079-0.537-0.134c0.013-0.22,0.027-0.447,0.042-0.685l0.006-0.092c0.137-2.174,0.307-4.881-0.403-6.474C38.117,16.33,33.633,15.962,32.309,15.962L32.309,15.962z',
    mask: 'M0,0v64h64V0H0z M47.927,39.545c-0.326,0.76-1.702,1.318-4.21,1.707c-0.083,0.113-0.17,0.511-0.223,0.754c-0.054,0.245-0.108,0.487-0.183,0.743c-0.104,0.357-0.367,0.554-0.74,0.554h-0.018l-0.019,0c-0.177,0-0.421-0.03-0.723-0.089c-0.482-0.094-1.022-0.181-1.706-0.181c-0.397,0-0.809,0.034-1.222,0.103c-0.809,0.135-1.496,0.62-2.293,1.184c-1.139,0.805-2.43,1.718-4.392,1.718c-0.088,0-0.171-0.003-0.234-0.006c-0.054,0.004-0.108,0.006-0.162,0.006c-1.962,0-3.253-0.912-4.393-1.718c-0.796-0.562-1.483-1.048-2.292-1.183c-0.414-0.069-0.826-0.103-1.223-0.103c-0.716,0-1.288,0.112-1.706,0.193c-0.278,0.055-0.519,0.102-0.723,0.102c-0.505,0-0.701-0.308-0.776-0.565c-0.077-0.262-0.131-0.51-0.183-0.751c-0.053-0.244-0.14-0.644-0.224-0.758c-2.507-0.389-3.884-0.948-4.21-1.711c-0.041-0.097-0.065-0.197-0.071-0.298c-0.019-0.338,0.22-0.637,0.555-0.692c4.349-0.716,6.308-5.181,6.389-5.371c0.005-0.011,0.01-0.021,0.015-0.032c0.232-0.471,0.284-0.866,0.154-1.172c-0.251-0.592-1.177-0.885-1.789-1.08c-0.17-0.054-0.331-0.105-0.464-0.157c-1.482-0.585-1.688-1.258-1.601-1.719c0.122-0.64,0.903-1.07,1.555-1.07c0.189,0,0.359,0.035,0.507,0.104c0.557,0.261,1.053,0.394,1.472,0.394c0.314,0,0.513-0.075,0.622-0.136c-0.015-0.257-0.032-0.523-0.048-0.779c-0.136-2.173-0.307-4.877,0.403-6.469c2.111-4.732,6.585-5.1,7.905-5.1c0.041,0,0.554-0.005,0.554-0.005c0.025-0.001,0.051-0.001,0.078-0.001h0.001c1.324,0,5.807,0.368,7.919,5.103c0.711,1.593,0.54,4.299,0.403,6.474l-0.006,0.092c-0.015,0.237-0.029,0.464-0.042,0.685c0.099,0.055,0.272,0.121,0.537,0.134c0.4-0.018,0.863-0.149,1.379-0.391c0.219-0.103,0.454-0.124,0.613-0.124c0.232,0,0.468,0.045,0.667,0.128l0.002,0.001c0.592,0.212,0.965,0.638,0.974,1.117c0.011,0.609-0.533,1.135-1.617,1.564c-0.132,0.052-0.293,0.103-0.465,0.158c-0.612,0.194-1.538,0.488-1.788,1.079c-0.13,0.306-0.079,0.701,0.154,1.172c0.005,0.011,0.01,0.021,0.015,0.032c0.081,0.189,2.038,4.654,6.389,5.371c0.334,0.055,0.573,0.353,0.555,0.691C47.993,39.347,47.969,39.448,47.927,39.545z',
    color: '#FFC91B'
  },
  soundcloud: {
    icon: 'M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z',
    mask: 'M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z',
    color: '#FF5700'
  },
  spotify: {
    icon: 'M32,16c-8.8,0-16,7.2-16,16c0,8.8,7.2,16,16,16c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16 M39.3,39.1c-0.3,0.5-0.9,0.6-1.4,0.3c-3.8-2.3-8.5-2.8-14.1-1.5c-0.5,0.1-1.1-0.2-1.2-0.7c-0.1-0.5,0.2-1.1,0.8-1.2 c6.1-1.4,11.3-0.8,15.5,1.8C39.5,38,39.6,38.6,39.3,39.1 M41.3,34.7c-0.4,0.6-1.1,0.8-1.7,0.4c-4.3-2.6-10.9-3.4-15.9-1.9 c-0.7,0.2-1.4-0.2-1.6-0.8c-0.2-0.7,0.2-1.4,0.8-1.6c5.8-1.8,13-0.9,18,2.1C41.5,33.4,41.7,34.1,41.3,34.7 M41.5,30.2 c-5.2-3.1-13.7-3.3-18.6-1.9c-0.8,0.2-1.6-0.2-1.9-1c-0.2-0.8,0.2-1.6,1-1.9c5.7-1.7,15-1.4,21,2.1c0.7,0.4,0.9,1.3,0.5,2.1 C43.1,30.4,42.2,30.6,41.5,30.2',
    mask: 'M39,37.7c-4.2-2.6-9.4-3.2-15.5-1.8c-0.5,0.1-0.9,0.7-0.8,1.2c0.1,0.5,0.7,0.9,1.2,0.7c5.6-1.3,10.3-0.8,14.1,1.5 c0.5,0.3,1.1,0.1,1.4-0.3C39.6,38.6,39.5,38,39,37.7z M40.9,33c-4.9-3-12.2-3.9-18-2.1c-0.7,0.2-1,0.9-0.8,1.6 c0.2,0.7,0.9,1,1.6,0.8c5.1-1.5,11.6-0.8,15.9,1.9c0.6,0.4,1.4,0.2,1.7-0.4C41.7,34.1,41.5,33.4,40.9,33z M0,0v64h64V0H0z M32,48 c-8.8,0-16-7.2-16-16c0-8.8,7.2-16,16-16c8.8,0,16,7.2,16,16C48,40.8,40.8,48,32,48z M43,27.6c-5.9-3.5-15.3-3.9-21-2.1 c-0.8,0.2-1.2,1.1-1,1.9c0.2,0.8,1.1,1.2,1.9,1c4.9-1.5,13.4-1.2,18.6,1.9c0.7,0.4,1.6,0.2,2.1-0.5C43.9,29,43.7,28,43,27.6z',
    color: '#2EBD59'
  },
  squarespace: {
    icon: 'M46.2,27.6c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2c0.6,0.6,1.6,0.6,2.2,0 l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c1.2,1.2,1.2,3.2,0,4.4l-9.6,9.6c1.2,1.2,3.2,1.2,4.4,0l7.5-7.5C48.6,34,48.6,30,46.2,27.6z  M42.9,30.9c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-0.6-0.6-1.6-0.6-2.2,0c-0.6,0.6-0.6,1.6,0,2.2 c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C43.5,32.5,43.5,31.5,42.9,30.9z M39.6,21.1c-2.4-2.4-6.3-2.4-8.7,0l-9.8,9.8c-0.6,0.6-0.6,1.6,0,2.2 c0.6,0.6,1.6,0.6,2.2,0l9.8-9.8c1.2-1.2,3.2-1.2,4.4,0c0.6,0.6,1.6,0.6,2.2,0C40.2,22.7,40.2,21.7,39.6,21.1z M36.4,24.4 c-0.6-0.6-1.6-0.6-2.2,0l-9.8,9.8c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4l9.6-9.6c-1.2-1.2-3.2-1.2-4.4,0l-7.5,7.5 c-2.4,2.4-2.4,6.3,0,8.7c2.4,2.4,6.3,2.4,8.7,0l9.8-9.8C37,25.9,37,25,36.4,24.4z',
    mask: 'M0,0v64h64V0H0z M39.6,21.1c0.6,0.6,0.6,1.6,0,2.2c-0.6,0.6-1.6,0.6-2.2,0c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8 c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8C33.3,18.7,37.2,18.7,39.6,21.1z M17.8,36.4c-2.4-2.4-2.4-6.3,0-8.7l7.5-7.5 c1.2-1.2,3.2-1.2,4.4,0L20,29.8c-1.2,1.2-1.2,3.2,0,4.4c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2 l-9.8,9.8C24.1,38.8,20.2,38.8,17.8,36.4z M24.4,42.9c-0.6-0.6-0.6-1.6,0-2.2c0.6-0.6,1.6-0.6,2.2,0c1.2,1.2,3.2,1.2,4.4,0l9.8-9.8 c0.6-0.6,1.6-0.6,2.2,0c0.6,0.6,0.6,1.6,0,2.2l-9.8,9.8C30.7,45.3,26.8,45.3,24.4,42.9z M46.2,36.4l-7.5,7.5c-1.2,1.2-3.2,1.2-4.4,0 l9.6-9.6c1.2-1.2,1.2-3.2,0-4.4c-1.2-1.2-3.2-1.2-4.4,0l-9.8,9.8c-0.6,0.6-1.6,0.6-2.2,0c-0.6-0.6-0.6-1.6,0-2.2l9.8-9.8 c2.4-2.4,6.3-2.4,8.7,0C48.6,30,48.6,34,46.2,36.4z',
    color: '#1C1C1C'
  },
  tumblr: {
    icon: 'M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z',
    mask: 'M0,0v64h64V0H0z M35.4,47c-6.5,0.1-9-4.7-9-8v-9.8h-3v-3.9c4.6-1.6,5.6-5.7,5.9-8.1c0-0.2,0.1-0.2,0.2-0.2 c0.1,0,4.4,0,4.4,0v7.6h6v4.5h-6v9.3c0,1.3,0.5,3,2.9,3c0.8,0,1.9-0.3,2.4-0.5l1.4,4.3C40.1,46,37.6,47,35.4,47z',
    color: '#2c4762'
  },
  twitch: {
    icon: 'M40,25.6h-2.5v7.6H40V25.6z M33,25.6h-2.5v7.6H33V25.6z M20.9,18L19,23.1v20.4h7v3.8h3.8l3.8-3.8h5.7l7.6-7.6V18H20.9z M44.5,34.5L40,39h-7l-3.8,3.8V39h-5.7V20.5h21V34.5z',
    mask: 'M0,0v64h64V0H0z M47,35.8l-7.6,7.6h-5.7l-3.8,3.8H26v-3.8h-7V23.1l1.9-5.1H47V35.8z M29.2,42.8L33,39h7l4.5-4.5 v-14h-21V39h5.7V42.8z M37.5,25.6H40v7.6h-2.5V25.6z M30.5,25.6H33v7.6h-2.5V25.6z',
    color: '#6441A5'
  },
  twitter: {
    icon: 'M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z',
    mask: 'M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z',
    color: '#00aced'
  },
  vevo: {
    icon: 'M43,21c-4.5,0-5.4,2.7-6.8,4.6c0,0-3.7,5.6-5.1,7.7l-3-12.3H20l5.1,20.6c1.1,3.7,4.1,3.4,4.1,3.4 c2.1,0,3.6-1.1,5-3.1L48,21C48,21,43.2,21,43,21z',
    mask: 'M0,0v64h64V0H0z M34.2,41.9c-1.4,2.1-2.9,3.1-5,3.1c0,0-3,0.2-4.1-3.4L20,21h8.1l3,12.3c1.4-2.1,5.1-7.7,5.1-7.7 c1.4-1.9,2.2-4.6,6.8-4.6c0.2,0,5,0,5,0L34.2,41.9z',
    color: '#ED1A3B'
  },
  vimeo: {
    icon: 'M47,25c-0.1,2.9-2.2,6.9-6.1,12c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8 c-0.8-3-1.6-5.9-2.4-8.9c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7 c2.3-0.2,3.8,1.4,4.3,4.8c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5 c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5c1.5-4.8,4.3-7.2,8.4-7C45.7,19.1,47.2,21.1,47,25z',
    mask: 'M0,0v64h64V0H0z M40.9,37c-4.1,5.3-7.5,8-10.4,8c-1.7,0-3.2-1.6-4.4-4.8c-0.8-3-1.6-5.9-2.4-8.9 c-0.9-3.2-1.9-4.8-2.9-4.8c-0.2,0-1,0.5-2.4,1.4L17,26c1.5-1.3,2.9-2.6,4.4-3.9c2-1.7,3.5-2.6,4.4-2.7c2.3-0.2,3.8,1.4,4.3,4.8 c0.6,3.7,1,6,1.2,6.9c0.7,3.1,1.4,4.6,2.2,4.6c0.6,0,1.6-1,2.8-3c1.3-2,1.9-3.5,2-4.5c0.2-1.7-0.5-2.6-2-2.6c-0.7,0-1.5,0.2-2.2,0.5 c1.5-4.8,4.3-7.2,8.4-7c3.1,0.1,4.5,2.1,4.4,6C46.9,27.9,44.8,31.9,40.9,37z',
    color: '#1ab7ea'
  },
  vine: {
    icon: 'M45.2,31.9c-0.8,0.2-1.5,0.3-2.2,0.3c-3.8,0-6.7-2.6-6.7-7.2c0-2.3,0.9-3.4,2.1-3.4 c1.2,0,2,1.1,2,3.2c0,1.2-0.3,2.5-0.6,3.3c0,0,1.2,2,4.4,1.4c0.7-1.5,1-3.5,1-5.2c0-4.6-2.3-7.3-6.6-7.3c-4.4,0-7,3.4-7,7.9 c0,4.4,2.1,8.2,5.5,10c-1.4,2.9-3.3,5.4-5.2,7.3c-3.5-4.2-6.6-9.8-7.9-20.7h-5.1c2.4,18.1,9.4,23.9,11.2,25c1.1,0.6,2,0.6,2.9,0.1 c1.5-0.9,6-5.4,8.6-10.7c1.1,0,2.3-0.1,3.6-0.4V31.9z',
    mask: 'M0,0v64h64V0H0z M38.4,21.5c-1.2,0-2.1,1.2-2.1,3.4c0,4.6,2.9,7.2,6.7,7.2c0.7,0,1.4-0.1,2.2-0.3v3.6 c-1.3,0.3-2.5,0.4-3.6,0.4c-2.5,5.3-7,9.8-8.6,10.7c-1,0.5-1.9,0.6-2.9-0.1c-1.9-1.1-8.9-6.9-11.2-25H24c1.3,10.9,4.4,16.5,7.9,20.7 c1.9-1.9,3.7-4.4,5.2-7.3c-3.4-1.7-5.5-5.5-5.5-10c0-4.5,2.6-7.9,7-7.9c4.3,0,6.6,2.7,6.6,7.3c0,1.7-0.4,3.7-1,5.2 c-3.2,0.6-4.4-1.4-4.4-1.4c0.2-0.8,0.6-2.1,0.6-3.3C40.3,22.6,39.5,21.5,38.4,21.5z',
    color: '#00BF8F'
  },
  vk: {
    icon: 'M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    mask: 'M0,0v64h64V0H0z M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z',
    color: '#45668e'
  },
  vsco: {
    icon: 'M32,16c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,17.1,33.4,16,32,16z M18.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C20.9,30.6,19.8,29.5,18.5,29.5z M25.2,22.8c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.7,23.9,26.6,22.8,25.2,22.8z M38.7,27.6c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C36.2,26.5,37.3,27.6,38.7,27.6z M25.1,36.2c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C27.6,37.3,26.5,36.2,25.1,36.2z M31.9,34.4c1.4,0,2.5-1.1,2.5-2.5c0-1.4-1.1-2.5-2.5-2.5c-1.4,0-2.5,1.1-2.5,2.5 C29.5,33.3,30.6,34.4,31.9,34.4z M45.5,29.5c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C48,30.6,46.9,29.5,45.5,29.5z M32,43.1c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C34.5,44.2,33.4,43.1,32,43.1z M38.8,36.3c-1.4,0-2.5,1.1-2.5,2.5c0,1.4,1.1,2.5,2.5,2.5c1.4,0,2.5-1.1,2.5-2.5 C41.2,37.4,40.1,36.3,38.8,36.3z',
    mask: 'M0,0v64h64V0H0z M18.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C20.9,33.4,19.8,34.5,18.5,34.5z M25.1,41.1c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.6,40,26.5,41.1,25.1,41.1z M25.2,27.7c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C27.7,26.6,26.6,27.7,25.2,27.7z M32,48c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,46.9,33.4,48,32,48z M29.5,31.9c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5 C30.6,34.4,29.5,33.3,29.5,31.9z M32,20.9c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C34.5,19.8,33.4,20.9,32,20.9z M38.7,22.7c1.4,0,2.5,1.1,2.5,2.5c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5 C36.2,23.8,37.3,22.7,38.7,22.7z M38.8,41.2c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C41.2,40.1,40.1,41.2,38.8,41.2z M45.5,34.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5c1.4,0,2.5,1.1,2.5,2.5 C48,33.4,46.9,34.5,45.5,34.5z',
    color: '#83878A'
  },
  wechat: {
    icon: 'M48.769,46.072c2.85-2.068,4.672-5.121,4.672-8.518c0-6.219-6.053-11.262-13.518-11.262s-13.519,5.043-13.519,11.262 c0,6.221,6.054,11.266,13.519,11.266c1.541,0,3.031-0.219,4.412-0.617l0.396-0.061c0.262,0,0.494,0.08,0.717,0.209l2.963,1.709 l0.26,0.084c0.248,0,0.449-0.201,0.449-0.451l-0.074-0.328l-0.607-2.275l-0.047-0.285C48.392,46.5,48.54,46.232,48.769,46.072z M24.782,13.854c-8.959,0-16.222,6.053-16.222,13.519c0,4.072,2.185,7.74,5.604,10.219c0.274,0.193,0.455,0.514,0.455,0.879 l-0.057,0.344l-0.731,2.729l-0.088,0.395c0,0.299,0.243,0.541,0.541,0.541l0.313-0.102l3.551-2.051 c0.266-0.152,0.548-0.248,0.86-0.248l0.477,0.07c1.657,0.479,3.445,0.742,5.296,0.742l0.891-0.021 c-0.352-1.055-0.544-2.166-0.544-3.311c0-6.811,6.623-12.33,14.794-12.33l0.881,0.022C39.581,18.794,32.874,13.854,24.782,13.854z M35.415,35.754c-0.994,0-1.801-0.807-1.801-1.803s0.807-1.803,1.801-1.803c0.998,0,1.803,0.807,1.803,1.803 S36.413,35.754,35.415,35.754z M44.431,35.754c-0.998,0-1.805-0.807-1.805-1.803s0.807-1.803,1.805-1.803 c0.992,0,1.799,0.807,1.799,1.803S45.423,35.754,44.431,35.754z M19.375,25.21c-1.195,0-2.162-0.969-2.162-2.162 c0-1.194,0.967-2.163,2.162-2.163c1.194,0,2.163,0.969,2.163,2.163C21.538,24.241,20.569,25.21,19.375,25.21z M30.188,25.21 c-1.196,0-2.162-0.969-2.162-2.162c0-1.194,0.966-2.163,2.162-2.163c1.195,0,2.162,0.969,2.162,2.163 C32.351,24.241,31.384,25.21,30.188,25.21z',
    mask: 'M65.6,65.6H-1.6V-1.6H65.6V65.6z M49.738,46.043c2.846-2.061,4.662-5.107,4.662-8.498 c0-6.207-6.043-11.244-13.492-11.244c-7.453,0-13.494,5.037-13.494,11.244c0,6.213,6.041,11.246,13.494,11.246 c1.537,0,3.025-0.221,4.402-0.615l0.395-0.059c0.262,0,0.498,0.078,0.717,0.207l2.955,1.707l0.26,0.082 c0.252,0,0.451-0.203,0.451-0.449l-0.074-0.328l-0.605-2.271l-0.047-0.287C49.361,46.477,49.508,46.211,49.738,46.043L49.738,46.043 z M25.793,13.887C16.85,13.887,9.6,19.93,9.6,27.383c0,4.066,2.182,7.723,5.596,10.197c0.275,0.195,0.453,0.518,0.453,0.879 l-0.055,0.344l-0.732,2.725l-0.086,0.393c0,0.301,0.24,0.541,0.539,0.541l0.311-0.1l3.545-2.049c0.27-0.152,0.551-0.248,0.861-0.248 l0.475,0.068c1.654,0.479,3.439,0.742,5.287,0.742l0.891-0.021c-0.354-1.053-0.543-2.16-0.543-3.309 c0-6.793,6.611-12.305,14.768-12.305l0.879,0.021C40.564,18.818,33.871,13.887,25.793,13.887z M36.408,35.746 c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799s1.799,0.807,1.799,1.799 C38.207,34.941,37.404,35.746,36.408,35.746z M45.404,35.746c-0.996,0-1.799-0.805-1.799-1.799c0-0.992,0.803-1.799,1.799-1.799 s1.799,0.807,1.799,1.799C47.203,34.941,46.4,35.746,45.404,35.746z M20.395,25.221c-1.189,0-2.158-0.965-2.158-2.158 s0.969-2.158,2.158-2.158c1.193,0,2.162,0.965,2.162,2.158S21.588,25.221,20.395,25.221z M31.191,25.221 c-1.193,0-2.158-0.965-2.158-2.158s0.965-2.158,2.158-2.158s2.158,0.965,2.158,2.158S32.385,25.221,31.191,25.221z',
    color: '#00c80f'
  },
  whatsapp: {
    icon: 'M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688',
    mask: 'M0,0v64h64V0H0z M 48 31.589844 C 48 40.195312 40.96875 47.175781 32.289062 47.175781 C 29.535156 47.175781 26.949219 46.472656 24.695312 45.234375 L 16 48 L 18.835938 39.636719 C 17.40625 37.289062 16.582031 34.53125 16.582031 31.589844 C 16.582031 22.980469 23.613281 16 32.289062 16 C 40.96875 16 48 22.980469 48 31.589844 Z M 32.289062 18.484375 C 25.007812 18.484375 19.082031 24.363281 19.082031 31.589844 C 19.082031 34.457031 20.019531 37.109375 21.597656 39.269531 L 19.949219 44.136719 L 25.023438 42.527344 C 27.109375 43.894531 29.609375 44.691406 32.292969 44.691406 C 39.574219 44.691406 45.5 38.816406 45.5 31.589844 C 45.5 24.363281 39.574219 18.484375 32.289062 18.484375 Z M 40.222656 35.179688 C 40.125 35.019531 39.871094 34.921875 39.484375 34.730469 C 39.101562 34.542969 37.207031 33.617188 36.855469 33.488281 C 36.5 33.363281 36.242188 33.296875 35.988281 33.679688 C 35.730469 34.0625 34.992188 34.921875 34.769531 35.179688 C 34.542969 35.433594 34.320312 35.464844 33.933594 35.273438 C 33.546875 35.082031 32.308594 34.679688 30.835938 33.378906 C 29.691406 32.367188 28.917969 31.117188 28.695312 30.734375 C 28.472656 30.351562 28.671875 30.144531 28.863281 29.953125 C 29.039062 29.78125 29.25 29.507812 29.441406 29.285156 C 29.636719 29.0625 29.699219 28.902344 29.828125 28.648438 C 29.957031 28.390625 29.890625 28.167969 29.792969 27.976562 C 29.699219 27.785156 28.925781 25.90625 28.605469 25.140625 C 28.285156 24.375 27.964844 24.503906 27.742188 24.503906 C 27.515625 24.503906 27.257812 24.472656 27.003906 24.472656 C 26.746094 24.472656 26.328125 24.566406 25.976562 24.949219 C 25.621094 25.332031 24.628906 26.257812 24.628906 28.136719 C 24.628906 30.015625 26.007812 31.832031 26.199219 32.085938 C 26.394531 32.34375 28.863281 36.324219 32.777344 37.855469 C 36.691406 39.386719 36.691406 38.875 37.398438 38.8125 C 38.105469 38.746094 39.675781 37.886719 40 36.996094 C 40.320312 36.101562 40.320312 35.335938 40.222656 35.179688 Z M 40.222656 35.179688',
    color: '#25D366'
  },
  yelp: {
    icon: 'M29.5,35.7c0.5-0.1,0.9-0.6,0.9-1.2c0-0.6-0.3-1.2-0.8-1.4c0,0-1.5-0.6-1.5-0.6 c-5-2.1-5.2-2.1-5.5-2.1c-0.4,0-0.7,0.2-1,0.6c-0.5,0.8-0.7,3.3-0.5,5c0.1,0.6,0.2,1,0.3,1.3c0.2,0.4,0.5,0.6,0.9,0.6 c0.2,0,0.4,0,5.1-1.5C27.5,36.4,29.5,35.7,29.5,35.7z M32.2,37.6c-0.6-0.2-1.2-0.1-1.5,0.4c0,0-1,1.2-1,1.2 c-3.5,4.1-3.7,4.3-3.7,4.5c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0.1,0.4,0.3,0.6c0.8,1,4.7,2.4,6,2.2c0.4-0.1,0.7-0.3,0.9-0.7 C33,46.1,33,45.9,33,41c0,0,0-2.2,0-2.2C33.1,38.3,32.7,37.8,32.2,37.6z M32.3,16.8c-0.1-0.4-0.4-0.7-0.9-0.8 c-1.3-0.3-6.5,1.1-7.5,2.1c-0.3,0.3-0.4,0.7-0.3,1.1c0.2,0.3,6.5,10.4,6.5,10.4c0.9,1.5,1.7,1.3,2,1.2c0.3-0.1,1-0.3,0.9-2.1 C33,26.6,32.4,17.3,32.3,16.8z M36.9,33.4C36.9,33.4,36.8,33.5,36.9,33.4c0.2-0.1,0.7-0.2,1.5-0.4c5.3-1.3,5.5-1.3,5.7-1.5 c0.3-0.2,0.5-0.6,0.5-1c0,0,0,0,0,0c-0.1-1.3-2.4-4.7-3.5-5.2c-0.4-0.2-0.8-0.2-1.1,0c-0.2,0.1-0.4,0.3-3.2,4.2c0,0-1.3,1.7-1.3,1.8 c-0.3,0.4-0.3,1,0,1.5C35.8,33.3,36.3,33.6,36.9,33.4z M44.4,38.6c-0.2-0.1-0.3-0.2-5-1.7c0,0-2-0.7-2.1-0.7c-0.5-0.2-1.1,0-1.4,0.5 c-0.4,0.5-0.5,1.1-0.1,1.6l0.8,1.3c2.8,4.5,3,4.8,3.2,5c0.3,0.2,0.7,0.3,1.1,0.1c1.2-0.5,3.7-3.7,3.9-5 C44.8,39.2,44.7,38.8,44.4,38.6z',
    mask: 'M0,0v64h64V0H0z M22.4,37.9c-0.4,0-0.7-0.2-0.9-0.6c-0.1-0.3-0.2-0.7-0.3-1.3c-0.2-1.7,0-4.2,0.5-5 c0.2-0.4,0.6-0.6,1-0.6c0.3,0,0.5,0.1,5.5,2.1c0,0,1.5,0.6,1.5,0.6c0.5,0.2,0.9,0.7,0.8,1.4c0,0.6-0.4,1.1-0.9,1.2 c0,0-2.1,0.7-2.1,0.7C22.8,37.9,22.7,37.9,22.4,37.9z M33,41c0,4.9,0,5-0.1,5.3c-0.1,0.4-0.4,0.6-0.9,0.7c-1.2,0.2-5.1-1.2-6-2.2 c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0-0.3,0.1-0.4c0.1-0.2,0.2-0.4,3.7-4.5c0,0,1-1.2,1-1.2c0.3-0.4,1-0.6,1.5-0.4 c0.6,0.2,0.9,0.7,0.9,1.2C33,38.8,33,41,33,41z M32.2,30.8c-0.3,0.1-1,0.3-2-1.2c0,0-6.4-10.1-6.5-10.4c-0.1-0.3,0-0.7,0.3-1.1 c1-1,6.1-2.4,7.5-2.1c0.4,0.1,0.7,0.4,0.9,0.8c0.1,0.4,0.7,9.8,0.8,11.9C33.2,30.5,32.4,30.7,32.2,30.8z M35.4,31.3 c0,0,1.3-1.8,1.3-1.8c2.8-3.9,3-4.1,3.2-4.2c0.3-0.2,0.7-0.2,1.1,0c1.1,0.5,3.4,3.9,3.5,5.2c0,0,0,0,0,0c0,0.4-0.1,0.8-0.5,1 c-0.2,0.1-0.4,0.2-5.7,1.5c-0.8,0.2-1.3,0.3-1.6,0.4c0,0,0,0,0,0c-0.5,0.1-1.1-0.1-1.4-0.6C35.1,32.3,35.1,31.7,35.4,31.3z  M44.7,39.6c-0.2,1.3-2.7,4.5-3.9,5c-0.4,0.2-0.8,0.1-1.1-0.1c-0.2-0.2-0.4-0.5-3.2-5l-0.8-1.3c-0.3-0.5-0.3-1.1,0.1-1.6 c0.4-0.5,0.9-0.6,1.4-0.5c0,0,2.1,0.7,2.1,0.7c4.6,1.5,4.8,1.6,5,1.7C44.7,38.8,44.8,39.2,44.7,39.6z',
    color: '#B90C04'
  },
  youtube: {
    icon: 'M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z',
    mask: 'M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z',
    color: '#ff3333'
  }
};
exports.default = _default;

/***/ }),

/***/ "2XUi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _react = _interopRequireDefault(__webpack_require__("eW0v"));

var _networks = __webpack_require__("2kGA");

var _styles = __webpack_require__("nV3n");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function getStyle(_ref) {
  var bgColor = _ref.bgColor,
      networkKey = _ref.networkKey;
  return _objectSpread({}, _styles.socialSvgMask, {
    fill: bgColor || (0, _networks.colorFor)(networkKey)
  });
}

function Mask(_ref2) {
  var bgColor = _ref2.bgColor,
      networkKey = _ref2.networkKey,
      rest = _objectWithoutProperties(_ref2, ["bgColor", "networkKey"]);

  return _react.default.createElement("g", _extends({}, rest, {
    className: "social-svg-mask",
    style: getStyle({
      bgColor: bgColor,
      networkKey: networkKey
    })
  }), _react.default.createElement("path", {
    d: (0, _networks.maskFor)(networkKey)
  }));
}

Mask.propTypes = {
  bgColor: _propTypes.default.string,
  networkKey: _propTypes.default.string.isRequired
};
var _default = Mask;
exports.default = _default;

/***/ }),

/***/ "2kGA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconFor = iconFor;
exports.maskFor = maskFor;
exports.colorFor = colorFor;
exports.keyFor = keyFor;
exports.keysFor = keysFor;
exports.KEYS = void 0;

var _networksDb = _interopRequireDefault(__webpack_require__("1bWN"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var DEFAULT_KEY = 'sharethis';
var KEYS = Object.keys(_networksDb.default);
exports.KEYS = KEYS;
var KEYS_REGEX = new RegExp('(?:https?:\\/\\/(?:[a-z0-9]*.)?)?(' + KEYS.join('|') + ').*');

function iconFor(key) {
  return _networksDb.default[key] ? _networksDb.default[key].icon : null;
}

function maskFor(key) {
  return _networksDb.default[key] ? _networksDb.default[key].mask : null;
}

function colorFor(key) {
  return _networksDb.default[key] ? _networksDb.default[key].color : null;
}

function keyFor(url) {
  if (!url) {
    return DEFAULT_KEY;
  }

  var key = url.replace(KEYS_REGEX, '$1');
  return key === url ? DEFAULT_KEY : key;
}

function keysFor(urls) {
  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return [];
  }

  return urls.map(keyFor);
}

/***/ }),

/***/ "2lna":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile":"profile__1SYzb","profile_form":"profile_form__1SZ03","prof_title":"prof_title__2Rtmf","profile_holder":"profile_holder__1SYjC","profile_follow":"profile_follow__1k0ap","message":"message__2k8uH","ms_link":"ms_link__2nPLV","profile_body":"profile_body__3Mn-e","profile_content":"profile_content__fqC27","profile_head_holder":"profile_head_holder__1Yo8c","profile_smallimg":"profile_smallimg__3OI3P","profile_headline":"profile_headline__2ZL2E","profile_bigimg":"profile_bigimg__37OR1","profile_backimg":"profile_backimg__2mJw0","conmodal":"conmodal__8_Ef3","conwrap":"conwrap__2-Opc","cp_info":"cp_info__2vZq4","conform":"conform__1FO1g","conactions":"conactions__2VDh1","button_save":"button_save__cfTHj","profile_connections":"profile_connections__14oF4","profile_requests":"profile_requests__27ne8"};

/***/ }),

/***/ "3TAv":
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "5xwO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile_sidebar":"profile_sidebar__3TkKd","profile_sidemenu":"profile_sidemenu__2YwgC"};

/***/ }),

/***/ "8yyv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _react = _interopRequireDefault(__webpack_require__("eW0v"));

var _background = _interopRequireDefault(__webpack_require__("XDn1"));

var _icon = _interopRequireDefault(__webpack_require__("Fa4d"));

var _mask = _interopRequireDefault(__webpack_require__("2XUi"));

var _networks = __webpack_require__("2kGA");

var _styles = __webpack_require__("nV3n");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function getNetworkKey(props) {
  return props.network || (0, _networks.keyFor)(props.url);
}

function SocialIcon(props) {
  var url = props.url,
      network = props.network,
      bgColor = props.bgColor,
      fgColor = props.fgColor,
      className = props.className,
      label = props.label,
      rest = _objectWithoutProperties(props, ["url", "network", "bgColor", "fgColor", "className", "label"]);

  var networkKey = getNetworkKey({
    url: url,
    network: network
  });
  return _react.default.createElement("a", _extends({}, rest, {
    href: url,
    className: 'social-icon' + (!!className ? ' ' + className : ''),
    style: _objectSpread({}, _styles.socialIcon, props.style),
    "aria-label": label || networkKey
  }), _react.default.createElement("div", {
    className: "social-container",
    style: _styles.socialContainer
  }, _react.default.createElement("svg", {
    className: "social-svg",
    style: _styles.socialSvg,
    viewBox: "0 0 64 64"
  }, _react.default.createElement(_background.default, null), _react.default.createElement(_icon.default, {
    networkKey: networkKey,
    fgColor: fgColor
  }), _react.default.createElement(_mask.default, {
    networkKey: networkKey,
    bgColor: bgColor
  }))));
}

SocialIcon.propTypes = {
  className: _propTypes.default.string,
  bgColor: _propTypes.default.string,
  label: _propTypes.default.string,
  network: _propTypes.default.string,
  url: _propTypes.default.string
};
var _default = SocialIcon;
exports.default = _default;

/***/ }),

/***/ "97RM":
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "Axko":
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "B7Qj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileOverview Find scroll parent
 */

exports.default = function (node) {
  if (!(node instanceof HTMLElement)) {
    return document.documentElement;
  }

  var excludeStaticParent = node.style.position === 'absolute';
  var overflowRegex = /(scroll|auto)/;
  var parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    var style = window.getComputedStyle(parent);
    var position = style.position;
    var overflow = style.overflow;
    var overflowX = style['overflow-x'];
    var overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      parent = parent.parentNode;
      continue;
    }

    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return node.ownerDocument || node.documentElement || document.documentElement;
};

/***/ }),

/***/ "Bcfi":
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "Byva":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Posst__ = __webpack_require__("k99P");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_lazyload__ = __webpack_require__("J2+Q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_lazyload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags__ = __webpack_require__("UD6h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_meta_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_meta_tags__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fingerprintjs2__ = __webpack_require__("llUH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fingerprintjs2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fingerprintjs2__);


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

    _this.state = { element: [], useer: [], fing: [] };
    return _this;
  }

  Postlist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/ispostlog', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (useer) {
      return _this2.setState({ useer: useer });
    });

    if (this.props.link == "https://www.portal.allawaken.com/api/activity") {
      fetch(this.props.link, {
        method: 'post',
        body: this.props.name
      }).then(function (response) {
        return response.json();
      }).then(function (element) {
        return _this2.setState({ element: element });
      });
    } else {
      fetch(this.props.link, {
        method: 'get'
      }).then(function (response) {
        return response.json();
      }).then(function (element) {
        return _this2.setState({ element: element });
      });
    }
  };

  Postlist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (x == 5) {
        x = 1;
      }
      if (i == 0) {
        var uuurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        var title = par[i]["title"];
        var desc = par[i]["description"];
        var imge = par[i]["imgUrl"];
      }
      if (x == 1) {
        var _h;

        var profli = "https://www.allawaken.com";
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default.a,
          { once: true, height: '400', offset: 400 },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h['imge'] = par[i]["imgUrl"], _h.postby = par[i]["postby"], _h.poston = par[i]["poston"], _h.color = primaryBlue, _h))
        ));
        x++;
      } else if (x == 2) {
        var _h2;

        var profli = "https://www.allawaken.com";
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default.a,
          { once: true, height: '400', offset: 400 },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h2 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h2['imge'] = par[i]["imgUrl"], _h2.postby = par[i]["postby"], _h2.poston = par[i]["poston"], _h2.color = primaryRed, _h2))
        ));
        x++;
      } else if (x == 3) {
        var _h3;

        var profli = "https://www.allawaken.com";
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default.a,
          { once: true, height: '400', offset: 400 },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h3 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h3['imge'] = par[i]["imgUrl"], _h3.postby = par[i]["postby"], _h3.poston = par[i]["poston"], _h3.color = primaryYellow, _h3))
        ));
        x++;
      } else if (x == 4) {
        var _h4;

        var profli = "https://www.allawaken.com";
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"].replace(/ /g, "-");
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          __WEBPACK_IMPORTED_MODULE_3_react_lazyload___default.a,
          { once: true, height: '400', offset: 400 },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Posst__["a" /* default */], (_h4 = { ussr: this.state.useer["name"], proflink: profli, profimg: par[i]["profimg"], link: uurl, comments: par[i]["cc"], imge: par[i]["imgUrl"], likes: par[i]["likes"], title: par[i]["title"], desc: par[i]["description"] }, _h4['imge'] = par[i]["imgUrl"], _h4.postby = par[i]["postby"], _h4.poston = par[i]["poston"], _h4.color = primaryGreen, _h4))
        ));
        x++;
      }
    }

    if (this.props.link == "https://www.portal.allawaken.com/api/posts") {
      return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        null,
        elements
      );
    } else {
      return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        null,
        elements
      );
    }
  };

  return Postlist;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Postlist);

/***/ }),

/***/ "C3sY":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"profile_head_holder":"profile_head_holder__14DtT","profile_smallimg":"profile_smallimg__1ReRZ","profile_headline":"profile_headline__cBzSE","profile_bigimg":"profile_bigimg__28NWP","profile_backimg":"profile_backimg__2IzbQ","profile_connections":"profile_connections__3oWil","profile_requests":"profile_requests__1yTiQ","profile_messages":"profile_messages__38hqT"};

/***/ }),

/***/ "EO8c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
function on(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, opts);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback, opts);
  } else if (el.detachEvent) {
    el.detachEvent("on" + eventName, callback);
  }
}

/***/ }),

/***/ "F5z4":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory(__webpack_require__("KM04")) : typeof define === 'function' && define.amd ? define(['preact'], factory) : global['preact-async-route'] = factory(global.preact);
})(this, function (preact) {
	'use strict';

	var _extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}return target;
	};

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var AsyncRoute = function (_Component) {
		_inherits(AsyncRoute, _Component);

		function AsyncRoute() {
			_classCallCheck(this, AsyncRoute);

			var _this = _possibleConstructorReturn(this, _Component.call(this));

			_this.state = {
				componentData: null
			};
			return _this;
		}

		AsyncRoute.prototype.loadComponent = function loadComponent() {
			var _this2 = this;

			if (this.props.component) {
				return this.setState({
					componentData: this.props.component
				});
			}
			var componentData = this.props.getComponent(this.props.url, function (_ref) {
				var component = _ref.component;

				// Named param for making callback future proof
				if (component) {
					_this2.setState({
						componentData: component
					});
				}
			}, _extends({}, this.props, this.props.matches));

			// In case returned value was a promise
			if (componentData && componentData.then) {
				// IIFE to check if a later ending promise was creating a race condition
				// Check test case for more info
				(function (url) {
					componentData.then(function (component) {
						if (url !== _this2.props.url) {
							_this2.setState({ componentData: null }, function () {
								_this2.loadComponent();
							});
							return;
						}
						_this2.setState({
							componentData: component
						});
					});
				})(this.props.url);
			}
		};

		AsyncRoute.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
			var _this3 = this;

			if (this.props.path && this.props.path !== nextProps.path) {
				this.setState({
					componentData: null
				}, function () {
					_this3.loadComponent();
				});
			}
		};

		AsyncRoute.prototype.componentWillMount = function componentWillMount() {
			this.loadComponent();
		};

		AsyncRoute.prototype.render = function render() {
			if (this.state.componentData) {
				return preact.h(this.state.componentData, this.props);
			} else if (this.props.loading) {
				var loadingComponent = this.props.loading();
				return loadingComponent;
			}
			return null;
		};

		return AsyncRoute;
	}(preact.Component);

	return AsyncRoute;
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "Fa4d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _react = _interopRequireDefault(__webpack_require__("eW0v"));

var _networks = __webpack_require__("2kGA");

var _styles = __webpack_require__("nV3n");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function getStyle(_ref) {
  var fgColor = _ref.fgColor,
      networkKey = _ref.networkKey;
  return _objectSpread({}, _styles.socialSvgContent, {
    fill: fgColor || 'transparent'
  });
}

function Icon(_ref2) {
  var fgColor = _ref2.fgColor,
      networkKey = _ref2.networkKey,
      props = _objectWithoutProperties(_ref2, ["fgColor", "networkKey"]);

  return _react.default.createElement("g", _extends({}, props, {
    className: "social-svg-icon",
    style: getStyle({
      fgColor: fgColor
    })
  }), _react.default.createElement("path", {
    d: (0, _networks.iconFor)(networkKey)
  }));
}

Icon.propTypes = {
  fgColor: _propTypes.default.string,
  networkKey: _propTypes.default.string.isRequired
};
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ "FpCL":
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "Hvty":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "J2+Q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceCheck = exports.lazyload = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("eW0v");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _event = __webpack_require__("EO8c");

var _scrollParent = __webpack_require__("B7Qj");

var _scrollParent2 = _interopRequireDefault(_scrollParent);

var _debounce = __webpack_require__("n+ye");

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__("cT3y");

var _throttle2 = _interopRequireDefault(_throttle);

var _decorator = __webpack_require__("JNYO");

var _decorator2 = _interopRequireDefault(_decorator);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /**
   * react-lazyload
   */

var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
var LISTEN_FLAG = 'data-lazyload-listened';
var listeners = [];
var pending = [];

// try to handle passive events
var passiveEventSupported = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveEventSupported = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}
// if they are supported, setup the optional params
// IMPORTANT: FALSE doubles as the default CAPTURE value!
var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;

/**
 * Check if `component` is visible in overflow container `parent`
 * @param  {node} component React component
 * @param  {node} parent    component's scroll parent
 * @return {bool}
 */
var checkOverflowVisible = function checkOverflowVisible(component, parent) {
  var node = _reactDom2.default.findDOMNode(component);

  var parentTop = void 0;
  var parentHeight = void 0;

  try {
    var _parent$getBoundingCl = parent.getBoundingClientRect();

    parentTop = _parent$getBoundingCl.top;
    parentHeight = _parent$getBoundingCl.height;
  } catch (e) {
    parentTop = defaultBoundingClientRect.top;
    parentHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  // calculate top and height of the intersection of the element's scrollParent and viewport
  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height

  // check whether the element is visible in the intersection
  var top = void 0;
  var height = void 0;

  try {
    var _node$getBoundingClie = node.getBoundingClientRect();

    top = _node$getBoundingClie.top;
    height = _node$getBoundingClie.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    height = defaultBoundingClientRect.height;
  }

  var offsetTop = top - intersectionTop; // element's top relative to intersection

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0;
};

/**
 * Check if `component` is visible in document
 * @param  {node} component React component
 * @return {bool}
 */
var checkNormalVisible = function checkNormalVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);

  // If this element is hidden by css rules somehow, it's definitely invisible
  if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;

  var top = void 0;
  var elementHeight = void 0;

  try {
    var _node$getBoundingClie2 = node.getBoundingClientRect();

    top = _node$getBoundingClie2.top;
    elementHeight = _node$getBoundingClie2.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    elementHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
};

/**
 * Detect if element is visible in viewport, if so, set `visible` state to true.
 * If `once` prop is provided true, remove component as listener after checkVisible
 *
 * @param  {React} component   React component that respond to scroll and resize
 */
var checkVisible = function checkVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);
  if (!(node instanceof HTMLElement)) {
    return;
  }

  var parent = (0, _scrollParent2.default)(node);
  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
  if (visible) {
    // Avoid extra render if previously is visible
    if (!component.visible) {
      if (component.props.once) {
        pending.push(component);
      }

      component.visible = true;
      component.forceUpdate();
    }
  } else if (!(component.props.once && component.visible)) {
    component.visible = false;
    if (component.props.unmountIfInvisible) {
      component.forceUpdate();
    }
  }
};

var purgePending = function purgePending() {
  pending.forEach(function (component) {
    var index = listeners.indexOf(component);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  });

  pending = [];
};

var lazyLoadHandler = function lazyLoadHandler() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    checkVisible(listener);
  }
  // Remove `once` component in listeners
  purgePending();
};

// Depending on component's props
var delayType = void 0;
var finalLazyLoadHandler = null;

var isString = function isString(string) {
  return typeof string === 'string';
};

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.visible = false;
    return _this;
  }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // It's unlikely to change delay type on the fly, this is mainly
      // designed for tests
      var scrollport = window;
      var scrollContainer = this.props.scrollContainer;

      if (scrollContainer) {
        if (isString(scrollContainer)) {
          scrollport = scrollport.document.querySelector(scrollContainer);
        }
      }
      var needResetFinalLazyLoadHandler = this.props.debounce !== undefined && delayType === 'throttle' || delayType === 'debounce' && this.props.debounce === undefined;

      if (needResetFinalLazyLoadHandler) {
        (0, _event.off)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        finalLazyLoadHandler = null;
      }

      if (!finalLazyLoadHandler) {
        if (this.props.debounce !== undefined) {
          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
          delayType = 'debounce';
        } else if (this.props.throttle !== undefined) {
          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
          delayType = 'throttle';
        } else {
          finalLazyLoadHandler = lazyLoadHandler;
        }
      }

      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
          if (listenerCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
          }
          parent.setAttribute(LISTEN_FLAG, listenerCount);
        }
      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
        var _props = this.props,
            scroll = _props.scroll,
            resize = _props.resize;

        if (scroll) {
          (0, _event.on)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        }

        if (resize) {
          (0, _event.on)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        }
      }

      listeners.push(this);
      checkVisible(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
          if (listenerCount === 0) {
            parent.removeEventListener('scroll', finalLazyLoadHandler, passiveEvent);
            parent.removeAttribute(LISTEN_FLAG);
          } else {
            parent.setAttribute(LISTEN_FLAG, listenerCount);
          }
        }
      }

      var index = listeners.indexOf(this);
      if (index !== -1) {
        listeners.splice(index, 1);
      }

      if (listeners.length === 0) {
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  once: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  overflow: _propTypes2.default.bool,
  resize: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  placeholder: _propTypes2.default.node,
  scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  unmountIfInvisible: _propTypes2.default.bool
};

LazyLoad.defaultProps = {
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false
};

var lazyload = exports.lazyload = _decorator2.default;
exports.default = LazyLoad;
exports.forceCheck = lazyLoadHandler;

/***/ }),

/***/ "JNYO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__("J2+Q");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return function (_Component) {
      _inherits(LazyLoadDecorated, _Component);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        var _this = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));

        _this.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
        return _this;
      }

      _createClass(LazyLoadDecorated, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(_index2.default, options, _react2.default.createElement(WrappedComponent, this.props));
        }
      }]);

      return LazyLoadDecorated;
    }(_react.Component);
  };
};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./components/fonts.css
var fonts = __webpack_require__("Hvty");
var fonts_default = /*#__PURE__*/__webpack_require__.n(fonts);

// EXTERNAL MODULE: ./style/index.css
var style = __webpack_require__("rq4c");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-render-to-string/dist/index.mjs
var dist = __webpack_require__("TGCi");

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ../node_modules/preact-async-route/dist/index.js
var preact_async_route_dist = __webpack_require__("F5z4");
var dist_default = /*#__PURE__*/__webpack_require__.n(preact_async_route_dist);

// EXTERNAL MODULE: ./components/Header.css
var components_Header = __webpack_require__("gQt0");
var Header_default = /*#__PURE__*/__webpack_require__.n(components_Header);

// EXTERNAL MODULE: ../node_modules/react-social-icons/dist/react-social-icons.js
var react_social_icons = __webpack_require__("ly3p");
var react_social_icons_default = /*#__PURE__*/__webpack_require__.n(react_social_icons);

// EXTERNAL MODULE: ../node_modules/fingerprintjs2/fingerprint2.js
var fingerprint2 = __webpack_require__("llUH");
var fingerprint2_default = /*#__PURE__*/__webpack_require__.n(fingerprint2);

// CONCATENATED MODULE: ./components/Header.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var logo = "https://res.cloudinary.com/awaken/image/upload/w_47,h_47,f_auto/v1549100793/portal/logo.webp";

function mobilemenu() {
  var x = document.getElementById("nav");
  var y = document.getElementById("ham");
  y.classList.toggle("change");
  if (x.style.display == "") {
    x.style.display = "block";
  } else if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show() {
  event.stopPropagation();
  if (document.getElementById("awa_profile").style.display == "none") {
    document.getElementById("awa_profile").style.display = "flex";
  } else if (document.getElementById("awa_profile").style.display == "") {
    document.getElementById("awa_profile").style.display = "flex";
  } else {
    document.getElementById("awa_profile").style.display = "none";
  }
}

function logout() {
  fetch('https://www.portal.allawaken.com/api/logout', {
    method: 'get'
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text == "LoggedOut") {
        window.location.assign("https://www.portal.allawaken.com");
      }
    });
  });
}

var Header__ref = Object(preact_min["h"])(
  'ul',
  null,
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { href: '/topstories' },
      'Top stories'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { href: '/partners' },
      'Partners'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { href: '/community' },
      'Community'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { href: 'https://www.allawaken.com/awaken' },
      'Codex'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { href: '/contact' },
      'Contact us'
    )
  )
);

var Header__ref2 = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'h3',
    { id: 'name' },
    'Name'
  ),
  Object(preact_min["h"])(
    'p',
    { id: 'email' },
    'email'
  )
);

var Header__ref3 = Object(preact_min["h"])(
  'a',
  { onClick: show, href: '/myprofile' },
  Object(preact_min["h"])(
    'i',
    { className: 'material-icons' },
    'account_box'
  ),
  ' ',
  Object(preact_min["h"])(
    'p',
    null,
    'My Profile'
  )
);

var _ref4 = Object(preact_min["h"])(
  'i',
  { className: 'material-icons' },
  'person_add'
);

var _ref5 = Object(preact_min["h"])(
  'p',
  null,
  'Connections'
);

var _ref6 = Object(preact_min["h"])(
  'i',
  { className: 'material-icons' },
  'mail'
);

var _ref7 = Object(preact_min["h"])(
  'p',
  null,
  'Chat'
);

var _ref8 = Object(preact_min["h"])(
  'a',
  { onClick: show, href: '/myprofile/posts' },
  Object(preact_min["h"])(
    'i',
    { className: 'material-icons' },
    'comment'
  ),
  ' ',
  Object(preact_min["h"])(
    'p',
    null,
    'Posts'
  )
);

var _ref9 = Object(preact_min["h"])(
  'a',
  { onClick: show, href: '/myprofile/comments' },
  Object(preact_min["h"])(
    'i',
    { className: 'material-icons' },
    'question_answer'
  ),
  ' ',
  Object(preact_min["h"])(
    'p',
    null,
    'Comments'
  )
);

var _ref10 = Object(preact_min["h"])(
  'a',
  { onClick: show, href: '/myprofile/settings' },
  Object(preact_min["h"])(
    'i',
    { className: 'material-icons' },
    'settings_applications'
  ),
  ' ',
  Object(preact_min["h"])(
    'p',
    null,
    'Settings'
  )
);

var _ref11 = Object(preact_min["h"])(
  'a',
  { onClick: logout },
  Object(preact_min["h"])(
    'i',
    { className: 'material-icons' },
    'exit_to_app'
  ),
  ' ',
  Object(preact_min["h"])(
    'p',
    null,
    'Logout'
  )
);

var _ref12 = Object(preact_min["h"])(
  'ul',
  null,
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { onClick: mobilemenu, href: '/topstories' },
      'Top stories'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { onClick: mobilemenu, href: '/partners' },
      'Partners'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { onClick: mobilemenu, href: '/community' },
      'Community'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { onClick: mobilemenu, href: '/codex' },
      'Codex'
    )
  ),
  Object(preact_min["h"])(
    'li',
    null,
    Object(preact_min["h"])(
      'a',
      { onClick: mobilemenu, href: '/contact' },
      'Contact us'
    )
  )
);

var Header_Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Header.prototype.componentDidMount = function componentDidMount() {
    fingerprint2_default.a.get(function (components) {
      fetch('https://www.portal.allawaken.com/api/islog', {
        method: 'post',
        body: JSON.stringify(components)
      }).then(function (response) {
        return response.text().then(function (text) {
          var txt = JSON.parse(text);
          if (txt != "Out") {
            var x = document.getElementById("sign");
            x.style.display = "none";
            var z = document.getElementById("awa_signed");
            z.style.display = "block";
            var user = JSON.parse(text);
            var name = document.getElementById("name");
            var email = document.getElementById("email");
            name.innerHTML = user["name"];
            email.innerHTML = user["email"];
            document.getElementById("prof_img").src = user["imageUrl"];
            document.getElementById("profile_img").src = user["imageUrl"];

            fetch('https://www.portal.allawaken.com/api/notifications', {
              method: 'post',
              body: user["name"]
            }).then(function (response) {
              return response.text().then(function (text) {
                var res = text.split('//');
                var sbor = Number(res[0]) + Number(res[1]);
                if (Number(sbor) == 0) {
                  document.getElementById("notifs").style.display = "none";
                  document.getElementById("notif_conn").style.display = "none";
                  document.getElementById("notif_mess").style.display = "none";
                } else {
                  document.getElementById("notifs").innerHTML = sbor;
                }

                if (Number(res[0]) == 0) {
                  document.getElementById("notif_conn").style.display = "none";
                } else {
                  document.getElementById("notif_conn").innerHTML = res[0];
                }

                if (Number(res[1]) == 0) {
                  document.getElementById("notif_mess").style.display = "none";
                } else {
                  document.getElementById("notif_mess").innerHTML = res[1];
                }
              });
            });
          }
        });
      });
    });

    window.onclick = function (event) {
      if (event.target != document.getElementById("awa_profile")) {
        document.getElementById("awa_profile").style.display = "none";
      }
    };
  };

  Header.prototype.render = function render() {
    return Object(preact_min["h"])(
      'header',
      { className: Header_default.a.header },
      Object(preact_min["h"])(
        'div',
        { className: 'shell' },
        Object(preact_min["h"])(
          'div',
          { className: Header_default.a.header_container },
          Object(preact_min["h"])(
            'div',
            { style: 'display: flex;' },
            Object(preact_min["h"])('a', { href: 'https://www.allawaken.com', className: Header_default.a.logo, style: { backgroundImage: 'url(' + logo + ')' } }),
            Object(preact_min["h"])(
              'a',
              { href: '/', className: Header_default.a.header_title },
              'All Awaken Portal'
            )
          ),
          Object(preact_min["h"])(
            'div',
            { className: Header_default.a.nav },
            Header__ref
          ),
          Object(preact_min["h"])(
            'div',
            { className: Header_default.a.social },
            Object(preact_min["h"])(react_social_icons["SocialIcon"], { className: Header_default.a.social_icon, url: 'https://www.facebook.com/All.Awaken.Official/', style: { height: 30, width: 30 }, fgColor: '#fff', bgColor: '#202124' }),
            Object(preact_min["h"])(react_social_icons["SocialIcon"], { className: Header_default.a.social_icon, url: 'https://www.instagram.com/allawaken', style: { height: 30, width: 30 }, fgColor: '#fff', bgColor: '#202124' }),
            Object(preact_min["h"])(react_social_icons["SocialIcon"], { className: Header_default.a.social_icon, url: 'https://twitter.com/all_awaken', style: { height: 30, width: 30 }, fgColor: '#fff', bgColor: '#202124' })
          ),
          Object(preact_min["h"])(
            'div',
            { className: Header_default.a.lognav },
            Object(preact_min["h"])(
              'div',
              { id: 'ham', 'class': Header_default.a.container, onClick: mobilemenu },
              Object(preact_min["h"])('div', { 'class': Header_default.a.bar1 }),
              Object(preact_min["h"])('div', { 'class': Header_default.a.bar2 }),
              Object(preact_min["h"])('div', { 'class': Header_default.a.bar3 })
            ),
            Object(preact_min["h"])(
              'a',
              { id: 'sign', 'class': Header_default.a.sign, href: '/login' },
              'SIGN IN'
            ),
            Object(preact_min["h"])(
              'a',
              { id: 'awa_signed', 'class': Header_default.a.awa_signed, onClick: show },
              Object(preact_min["h"])('img', { id: 'prof_img', className: Header_default.a.prof_img, alt: 'Profile image' }),
              Object(preact_min["h"])(
                'div',
                { id: 'notifs', className: Header_default.a.notif },
                '0'
              )
            ),
            Object(preact_min["h"])(
              'div',
              { id: 'awa_profile', className: 'awa_profile' },
              Object(preact_min["h"])(
                'div',
                { className: Header_default.a.awa_profile_head },
                Object(preact_min["h"])('img', { id: 'profile_img', className: Header_default.a.awa_profile_img, alt: 'Profile image' }),
                Header__ref2
              ),
              Object(preact_min["h"])(
                'div',
                { className: Header_default.a.awa_profile_body },
                Header__ref3,
                Object(preact_min["h"])(
                  'a',
                  { onClick: show, href: '/myprofile/connections' },
                  _ref4,
                  Object(preact_min["h"])(
                    'div',
                    { id: 'notif_conn', className: Header_default.a.notifs },
                    '1'
                  ),
                  _ref5
                ),
                Object(preact_min["h"])(
                  'a',
                  { onClick: show, href: '/myprofile/chat' },
                  _ref6,
                  Object(preact_min["h"])(
                    'div',
                    { id: 'notif_mess', className: Header_default.a.notifs },
                    '1'
                  ),
                  _ref7
                ),
                _ref8,
                _ref9,
                _ref10,
                _ref11
              )
            )
          ),
          Object(preact_min["h"])(
            'div',
            { id: 'nav', className: Header_default.a.nav2 },
            _ref12
          )
        )
      )
    );
  };

  return Header;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/react-favicon/dist/react-favicon.js
var react_favicon = __webpack_require__("RFC2");
var react_favicon_default = /*#__PURE__*/__webpack_require__.n(react_favicon);

// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/mightBeEmail.js
// See if s could be an email address. We don't want to send personal data like email.
// https://support.google.com/analytics/answer/2795983?hl=en
function mightBeEmail(s) {
  // There's no point trying to validate rfc822 fully, just look for ...@...
  return (/[^@]+@[^@]+/.test(s)
  );
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/trim.js
// GA strings need to have leading/trailing whitespace trimmed, and not all
// browsers have String.prototoype.trim().
function trim(s) {
  return s.replace(/^\s+|\s+$/g, '');
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/toTitleCase.js
/**
 * To Title Case 2.1 - http://individed.com/code/to-title-case/
 * Copyright 2008-2013 David Gouch. Licensed under the MIT License.
 * https://github.com/gouch/to-title-case
 */

var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function toTitleCase(string) {
  return trim(string).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function (match, index, title) {
    if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ':' && (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') && title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/console/warn.js
function warn(s) {
  console.warn('[react-ga]', s);
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/format.js



var redacted = 'REDACTED (Potential Email Address)';
function format(s, titleCase) {
  if (mightBeEmail(s)) {
    warn('This arg looks like an email address, redacting.');
    return redacted;
  }

  if (titleCase) {
    return toTitleCase(s);
  }

  return s;
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js
function removeLeadingSlash(string) {
  if (string.substring(0, 1) === '/') {
    return string.substring(1);
  }

  return string;
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/loadGA.js
/* harmony default export */ var loadGA = (function (options) {
  var gaAddress = 'https://www.google-analytics.com/analytics.js';

  if (options && options.gaAddress) {
    gaAddress = options.gaAddress;
  } else if (options && options.debug) {
    gaAddress = 'https://www.google-analytics.com/analytics_debug.js';
  } // https://developers.google.com/analytics/devguides/collection/analyticsjs/

  /* eslint-disable */

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, 'script', gaAddress, 'ga');
  /* eslint-enable */
});
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/console/log.js
function log(s) {
  console.info('[react-ga]', s);
}
// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/utils/testModeAPI.js
var gaCalls = [];
/* harmony default export */ var testModeAPI = ({
  calls: gaCalls,
  ga: function ga() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    gaCalls.push(args.concat());
  },
  resetCalls: function resetCalls() {
    gaCalls.length = 0;
  }
});
// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/components/OutboundLink.js
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof(obj);
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function OutboundLink__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
}

function OutboundLink__possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };return _getPrototypeOf(o);
}

function OutboundLink__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;return o;
  };return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}




var NEWTAB = '_blank';
var MIDDLECLICK = 1;

var OutboundLink_OutboundLink =
/*#__PURE__*/
function (_Component) {
  OutboundLink__inherits(OutboundLink, _Component);

  function OutboundLink() {
    var _getPrototypeOf2;

    var _this;

    OutboundLink__classCallCheck(this, OutboundLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = OutboundLink__possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OutboundLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (event) {
      var _this$props = _this.props,
          target = _this$props.target,
          eventLabel = _this$props.eventLabel,
          to = _this$props.to,
          onClick = _this$props.onClick;
      var eventMeta = {
        label: eventLabel
      };
      var sameTarget = target !== NEWTAB;
      var normalClick = !(event.ctrlKey || event.shiftKey || event.metaKey || event.button === MIDDLECLICK);

      if (sameTarget && normalClick) {
        event.preventDefault();
        OutboundLink.trackLink(eventMeta, function () {
          window.location.href = to;
        });
      } else {
        OutboundLink.trackLink(eventMeta, function () {});
      }

      if (onClick) {
        onClick(event);
      }
    });

    return _this;
  }

  _createClass(OutboundLink, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          href = _this$props2.to,
          oldProps = _objectWithoutProperties(_this$props2, ["to"]);

      var props = _objectSpread({}, oldProps, {
        href: href,
        onClick: this.handleClick
      });

      if (this.props.target === NEWTAB) {
        props.rel = 'noopener noreferrer';
      }

      delete props.eventLabel;
      return preact_compat_es["default"].createElement('a', props);
    }
  }]);

  return OutboundLink;
}(preact_compat_es["Component"]);

_defineProperty(OutboundLink_OutboundLink, "trackLink", function () {
  warn('ga tracking not enabled');
});

_defineProperty(OutboundLink_OutboundLink, "propTypes", {
  eventLabel: prop_types_default.a.string.isRequired,
  target: prop_types_default.a.string,
  to: prop_types_default.a.string,
  onClick: prop_types_default.a.func
});

_defineProperty(OutboundLink_OutboundLink, "defaultProps", {
  target: null,
  to: null,
  onClick: null
});


// CONCATENATED MODULE: ../node_modules/react-ga/dist/esm/index.js
function esm__objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = esm__objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function esm__objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function esm__objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      esm__defineProperty(target, key, source[key]);
    });
  }return target;
}

function esm__defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function esm__typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    esm__typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    esm__typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return esm__typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

/**
 * React Google Analytics Module
 *
 * @package react-ga
 * @author  Adam Lofting <adam@mozillafoundation.org>
 *          Atul Varma <atul@mozillafoundation.org>
 */

/**
 * Utilities
 */








var _debug = false;
var _titleCase = true;
var _testMode = false;
var _alwaysSendToDefaultTracker = true;

var esm_internalGa = function internalGa() {
  var _window;

  if (_testMode) return testModeAPI.ga.apply(testModeAPI, arguments);
  if (typeof window === 'undefined') return false;
  if (!window.ga) return warn('ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually');
  return (_window = window).ga.apply(_window, arguments);
};

function _format(s) {
  return format(s, _titleCase);
}

function _gaCommand(trackerNames) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var command = args[0];

  if (typeof esm_internalGa === 'function') {
    if (typeof command !== 'string') {
      warn('ga command must be a string');
      return;
    }

    if (_alwaysSendToDefaultTracker || !Array.isArray(trackerNames)) esm_internalGa.apply(void 0, args);

    if (Array.isArray(trackerNames)) {
      trackerNames.forEach(function (name) {
        esm_internalGa.apply(void 0, _toConsumableArray(["".concat(name, ".").concat(command)].concat(args.slice(1))));
      });
    }
  }
}

function _initialize(gaTrackingID, options) {
  if (!gaTrackingID) {
    warn('gaTrackingID is required in initialize()');
    return;
  }

  if (options) {
    if (options.debug && options.debug === true) {
      _debug = true;
    }

    if (options.titleCase === false) {
      _titleCase = false;
    }
  }

  if (options && options.gaOptions) {
    esm_internalGa('create', gaTrackingID, options.gaOptions);
  } else {
    esm_internalGa('create', gaTrackingID, 'auto');
  }
}

function initialize(configsOrTrackingId, options) {
  if (options && options.testMode === true) {
    _testMode = true;
  } else {
    if (typeof window === 'undefined') {
      return false;
    }

    if (!options || options.standardImplementation !== true) loadGA(options);
  }

  _alwaysSendToDefaultTracker = options && typeof options.alwaysSendToDefaultTracker === 'boolean' ? options.alwaysSendToDefaultTracker : true;

  if (Array.isArray(configsOrTrackingId)) {
    configsOrTrackingId.forEach(function (config) {
      if (esm__typeof(config) !== 'object') {
        warn('All configs must be an object');
        return;
      }

      _initialize(config.trackingId, config);
    });
  } else {
    _initialize(configsOrTrackingId, options);
  }

  return true;
}
/**
 * ga:
 * Returns the original GA object.
 */

function ga() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (args.length > 0) {
    esm_internalGa.apply(void 0, args);

    if (_debug) {
      log('called ga(\'arguments\');');
      log("with arguments: ".concat(JSON.stringify(args)));
    }
  }

  return window.ga;
}
/**
 * set:
 * GA tracker set method
 * @param {Object} fieldsObject - a field/value pair or a group of field/value pairs on the tracker
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function set(fieldsObject, trackerNames) {
  if (!fieldsObject) {
    warn('`fieldsObject` is required in .set()');
    return;
  }

  if (esm__typeof(fieldsObject) !== 'object') {
    warn('Expected `fieldsObject` arg to be an Object');
    return;
  }

  if (Object.keys(fieldsObject).length === 0) {
    warn('empty `fieldsObject` given to .set()');
  }

  _gaCommand(trackerNames, 'set', fieldsObject);

  if (_debug) {
    log('called ga(\'set\', fieldsObject);');
    log("with fieldsObject: ".concat(JSON.stringify(fieldsObject)));
  }
}
/**
 * send:
 * Clone of the low level `ga.send` method
 * WARNING: No validations will be applied to this
 * @param  {Object} fieldObject - field object for tracking different analytics
 * @param  {Array} trackerNames - trackers to send the command to
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function send(fieldObject, trackerNames) {
  _gaCommand(trackerNames, 'send', fieldObject);

  if (_debug) {
    log('called ga(\'send\', fieldObject);');
    log("with fieldObject: ".concat(JSON.stringify(fieldObject)));
    log("with trackers: ".concat(JSON.stringify(trackerNames)));
  }
}
/**
 * pageview:
 * Basic GA pageview tracking
 * @param  {String} path - the current page page e.g. '/about'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 * @param {String} title - (optional) the page title e. g. 'My Website'
 */

function pageview(rawPath, trackerNames, title) {
  if (!rawPath) {
    warn('path is required in .pageview()');
    return;
  }

  var path = trim(rawPath);

  if (path === '') {
    warn('path cannot be an empty string in .pageview()');
    return;
  }

  var extraFields = {};

  if (title) {
    extraFields.title = title;
  }

  if (typeof ga === 'function') {
    _gaCommand(trackerNames, 'send', esm__objectSpread({
      hitType: 'pageview',
      page: path
    }, extraFields));

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      var extraLog = '';

      if (title) {
        extraLog = " and title: ".concat(title);
      }

      log("with path: ".concat(path).concat(extraLog));
    }
  }
}
/**
 * modalview:
 * a proxy to basic GA pageview tracking to consistently track
 * modal views that are an equivalent UX to a traditional pageview
 * @param  {String} modalName e.g. 'add-or-edit-club'
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function modalview(rawModalName, trackerNames) {
  if (!rawModalName) {
    warn('modalName is required in .modalview(modalName)');
    return;
  }

  var modalName = removeLeadingSlash(trim(rawModalName));

  if (modalName === '') {
    warn('modalName cannot be an empty string or a single / in .modalview()');
    return;
  }

  if (typeof ga === 'function') {
    var path = "/modal/".concat(modalName);

    _gaCommand(trackerNames, 'send', 'pageview', path);

    if (_debug) {
      log('called ga(\'send\', \'pageview\', path);');
      log("with path: ".concat(path));
    }
  }
}
/**
 * timing:
 * GA timing
 * @param args.category {String} required
 * @param args.variable {String} required
 * @param args.value  {Int}  required
 * @param args.label  {String} required
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function timing() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref.category,
      variable = _ref.variable,
      value = _ref.value,
      label = _ref.label;

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    if (!category || !variable || !value || typeof value !== 'number') {
      warn('args.category, args.variable ' + 'AND args.value are required in timing() ' + 'AND args.value has to be a number');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'timing',
      timingCategory: _format(category),
      timingVar: _format(variable),
      timingValue: value
    };

    if (label) {
      fieldObject.timingLabel = _format(label);
    }

    send(fieldObject, trackerNames);
  }
}
/**
 * event:
 * GA event tracking
 * @param args.category {String} required
 * @param args.action {String} required
 * @param args.label {String} optional
 * @param args.value {Int} optional
 * @param args.nonInteraction {boolean} optional
 * @param args.transport {string} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function esm_event() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      category = _ref2.category,
      action = _ref2.action,
      label = _ref2.label,
      value = _ref2.value,
      nonInteraction = _ref2.nonInteraction,
      transport = _ref2.transport,
      args = esm__objectWithoutProperties(_ref2, ["category", "action", "label", "value", "nonInteraction", "transport"]);

  var trackerNames = arguments.length > 1 ? arguments[1] : undefined;

  if (typeof ga === 'function') {
    // Simple Validation
    if (!category || !action) {
      warn('args.category AND args.action are required in event()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: _format(category),
      eventAction: _format(action)
    }; // Optional Fields

    if (label) {
      fieldObject.eventLabel = _format(label);
    }

    if (typeof value !== 'undefined') {
      if (typeof value !== 'number') {
        warn('Expected `args.value` arg to be a Number.');
      } else {
        fieldObject.eventValue = value;
      }
    }

    if (typeof nonInteraction !== 'undefined') {
      if (typeof nonInteraction !== 'boolean') {
        warn('`args.nonInteraction` must be a boolean.');
      } else {
        fieldObject.nonInteraction = nonInteraction;
      }
    }

    if (typeof transport !== 'undefined') {
      if (typeof transport !== 'string') {
        warn('`args.transport` must be a string.');
      } else {
        if (['beacon', 'xhr', 'image'].indexOf(transport) === -1) {
          warn('`args.transport` must be either one of these values: `beacon`, `xhr` or `image`');
        }

        fieldObject.transport = transport;
      }
    }

    Object.keys(args).filter(function (key) {
      return key.substr(0, 'dimension'.length) === 'dimension';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    });
    Object.keys(args).filter(function (key) {
      return key.substr(0, 'metric'.length) === 'metric';
    }).forEach(function (key) {
      fieldObject[key] = args[key];
    }); // Send to GA

    send(fieldObject, trackerNames);
  }
}
/**
 * exception:
 * GA exception tracking
 * @param args.description {String} optional
 * @param args.fatal {boolean} optional
 * @param {Array} trackerNames - (optional) a list of extra trackers to run the command on
 */

function exception(_ref3, trackerNames) {
  var description = _ref3.description,
      fatal = _ref3.fatal;

  if (typeof ga === 'function') {
    // Required Fields
    var fieldObject = {
      hitType: 'exception'
    }; // Optional Fields

    if (description) {
      fieldObject.exDescription = _format(description);
    }

    if (typeof fatal !== 'undefined') {
      if (typeof fatal !== 'boolean') {
        warn('`args.fatal` must be a boolean.');
      } else {
        fieldObject.exFatal = fatal;
      }
    } // Send to GA


    send(fieldObject, trackerNames);
  }
}
var esm_plugin = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   */
  require: function require(rawName, options) {
    if (typeof ga === 'function') {
      // Required Fields
      if (!rawName) {
        warn('`name` is required in .require()');
        return;
      }

      var name = trim(rawName);

      if (name === '') {
        warn('`name` cannot be an empty string in .require()');
        return;
      } // Optional Fields


      if (options) {
        if (esm__typeof(options) !== 'object') {
          warn('Expected `options` arg to be an Object');
          return;
        }

        if (Object.keys(options).length === 0) {
          warn('Empty `options` given to .require()');
        }

        ga('require', name, options);

        if (_debug) {
          log("called ga('require', '".concat(name, "', ").concat(JSON.stringify(options)));
        }
      } else {
        ga('require', name);

        if (_debug) {
          log("called ga('require', '".concat(name, "');"));
        }
      }
    }
  },

  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function execute(pluginName, action) {
    var payload;
    var actionType;

    if ((arguments.length <= 2 ? 0 : arguments.length - 2) === 1) {
      payload = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      actionType = arguments.length <= 2 ? undefined : arguments[2];
      payload = arguments.length <= 3 ? undefined : arguments[3];
    }

    if (typeof ga === 'function') {
      if (typeof pluginName !== 'string') {
        warn('Expected `pluginName` arg to be a String.');
      } else if (typeof action !== 'string') {
        warn('Expected `action` arg to be a String.');
      } else {
        var command = "".concat(pluginName, ":").concat(action);
        payload = payload || null;

        if (actionType && payload) {
          ga(command, actionType, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("actionType: \"".concat(actionType, "\" with payload: ").concat(JSON.stringify(payload)));
          }
        } else if (payload) {
          ga(command, payload);

          if (_debug) {
            log("called ga('".concat(command, "');"));
            log("with payload: ".concat(JSON.stringify(payload)));
          }
        } else {
          ga(command);

          if (_debug) {
            log("called ga('".concat(command, "');"));
          }
        }
      }
    }
  }
};
/**
 * outboundLink:
 * GA outboundLink tracking
 * @param args.label {String} e.g. url, or 'Create an Account'
 * @param {function} hitCallback - Called after processing a hit.
 */

function outboundLink(args, hitCallback, trackerNames) {
  if (typeof hitCallback !== 'function') {
    warn('hitCallback function is required');
    return;
  }

  if (typeof ga === 'function') {
    // Simple Validation
    if (!args || !args.label) {
      warn('args.label is required in outboundLink()');
      return;
    } // Required Fields


    var fieldObject = {
      hitType: 'event',
      eventCategory: 'Outbound',
      eventAction: 'Click',
      eventLabel: _format(args.label)
    };
    var safetyCallbackCalled = false;

    var safetyCallback = function safetyCallback() {
      // This prevents a delayed response from GA
      // causing hitCallback from being fired twice
      safetyCallbackCalled = true;
      hitCallback();
    }; // Using a timeout to ensure the execution of critical application code
    // in the case when the GA server might be down
    // or an ad blocker prevents sending the data
    // register safety net timeout:


    var t = setTimeout(safetyCallback, 250);

    var clearableCallbackForGA = function clearableCallbackForGA() {
      clearTimeout(t);

      if (!safetyCallbackCalled) {
        hitCallback();
      }
    };

    fieldObject.hitCallback = clearableCallbackForGA; // Send to GA

    send(fieldObject, trackerNames);
  } else {
    // if ga is not defined, return the callback so the application
    // continues to work as expected
    setTimeout(hitCallback, 0);
  }
}
OutboundLink_OutboundLink.origTrackLink = OutboundLink_OutboundLink.trackLink;
OutboundLink_OutboundLink.trackLink = outboundLink;
var esm_OutboundLink = OutboundLink_OutboundLink;
var esm_testModeAPI = testModeAPI;
/* harmony default export */ var esm = ({
  initialize: initialize,
  ga: ga,
  set: set,
  send: send,
  pageview: pageview,
  modalview: modalview,
  timing: timing,
  event: esm_event,
  exception: exception,
  plugin: esm_plugin,
  outboundLink: outboundLink,
  OutboundLink: esm_OutboundLink,
  testModeAPI: testModeAPI
});
// EXTERNAL MODULE: ../node_modules/react-meta-tags/lib/index.js
var lib = __webpack_require__("UD6h");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./components/app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var app__ref = Object(preact_min["h"])(react_favicon_default.a, { url: 'https://res.cloudinary.com/awaken/image/upload/v1549555378/portal/favicon.ico' });

var app__ref2 = Object(preact_min["h"])(Header_Header, null);

var app_App = function (_Component) {
	app__inherits(App, _Component);

	function App() {
		app__classCallCheck(this, App);

		return app__possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	App.prototype.componentDidMount = function componentDidMount() {
		esm.initialize('UA-122515839-2');
		esm.pageview('/homepage');
	};

	App.prototype.render = function render() {
		return Object(preact_min["h"])(
			'div',
			{ id: 'app' },
			app__ref,
			app__ref2,
			Object(preact_min["h"])(
				preact_router_es["b" /* default */],
				null,
				Object(preact_min["h"])(dist_default.a, {
					path: '/',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, "Jo5p")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/allawaken/allawaken/admin',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, "u3Uf")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/topstories',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, "g9M9")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/partners',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, "4I5O")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/community',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, "lidF")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/community/mostpopular',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(8).then(__webpack_require__.bind(null, "1zHT")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/contact',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(12).then(__webpack_require__.bind(null, "TfZS")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/login',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, "mDAM")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/register',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, "wMTp")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/forgotpassword',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(11).then(__webpack_require__.bind(null, "4N6L")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/confirm/:token',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(19).then(__webpack_require__.bind(null, "1vSG")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(16).then(__webpack_require__.bind(null, "62T9")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile/settings',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(10).then(__webpack_require__.bind(null, "gzkd")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile/chat',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, "hhDg")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile/posts',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(17).then(__webpack_require__.bind(null, "8Gqw")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile/comments',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(18).then(__webpack_require__.bind(null, "l4uH")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/myprofile/connections',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, "ZPQX")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/profile/:pname',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, "lgQn")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/post/:tid',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(13).then(__webpack_require__.bind(null, "RonP")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					path: '/terms',
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(9).then(__webpack_require__.bind(null, "9aAg")).then(function (module) {
							return module.default;
						});
					}
				}),
				Object(preact_min["h"])(dist_default.a, {
					'default': true,
					getComponent: function getComponent() {
						return __webpack_require__.e/* import() */(20).then(__webpack_require__.bind(null, "HGGQ")).then(function (module) {
							return module.default;
						});
					}
				})
			)
		);
	};

	return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js




/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "QPpz":
/***/ (function(module, exports) {

module.exports = require("net");

/***/ }),

/***/ "QcC3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"cp":"cp__2r90j","cp_name":"cp_name__YcEvt","menu":"menu__1pAK-","cp_image":"cp_image__2VvJ9","comment_image":"comment_image__2mZE1","cc_metas":"cc_metas__1qFH_","cc_meta":"cc_meta__JFEGK","cc_like":"cc_like__152EW","ccp_image":"ccp_image__3r8ur","ac":"ac__1W9-g","ac_holder":"ac_holder__3HMgT","ac_actions":"ac_actions__y18ol","ca_button":"ca_button__2yUVF","addreply":"addreply__1PBIz","ca":"ca__3R-Cl","cc_reply":"cc_reply__4pIDl","cc_replies":"cc_replies__1Iv81","replies":"replies__dxAlD","del_button":"del_button__3XRPW"};

/***/ }),

/***/ "RFC2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var React = __webpack_require__("eW0v");
var linkEl;

function drawIcon(src, num, cb) {
  var img = document.createElement('img');
  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, img.width, img.height);
    context.drawImage(img, 0, 0);

    var top = img.height - 9,
        left = img.width - 7 - 1,
        bottom = 16,
        right = 16,
        radius = 2;

    context.fillStyle = '#F03D25';
    context.strokeStyle = '#F03D25';
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(left + radius, top);
    context.quadraticCurveTo(left, top, left, top + radius);
    context.lineTo(left, bottom - radius);
    context.quadraticCurveTo(left, bottom, left + radius, bottom);
    context.lineTo(right - radius, bottom);
    context.quadraticCurveTo(right, bottom, right, bottom - radius);
    context.lineTo(right, top + radius);
    context.quadraticCurveTo(right, top, right - radius, top);
    context.closePath();
    context.fill();

    context.font = 'bold 10px arial';
    context.fillStyle = '#FFF';
    context.textAlign = 'right';
    context.textBaseline = 'top';
    context.fillText(num, 15, 6);

    cb(null, context.canvas.toDataURL());
  };
  img.src = src;
}

var Favicon = function (_React$Component) {
  _inherits(Favicon, _React$Component);

  function Favicon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Favicon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Favicon.__proto__ || Object.getPrototypeOf(Favicon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      animationIndex: 0,
      animationLoop: null,
      animationRunning: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Favicon, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      Favicon.mountedInstances.push(this);
      Favicon.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var activeInstance = Favicon.getActiveInstance();
      clearInterval(activeInstance.state.animationLoop);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.url === this.props.url && prevProps.animated === this.props.animated && prevProps.alertCount === this.props.alertCount && prevProps.keepIconLink === this.props.keepIconLink) return;

      Favicon.update();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'getActiveInstance',
    value: function getActiveInstance() {
      return Favicon.mountedInstances[Favicon.mountedInstances.length - 1];
    }
  }, {
    key: 'draw',
    value: function draw() {
      if (typeof document === 'undefined') return;

      var activeInstance = Favicon.getActiveInstance();
      if (typeof linkEl === 'undefined') {
        var head = document.getElementsByTagName('head')[0];
        linkEl = document.createElement('link');
        linkEl.type = 'image/x-icon';
        linkEl.rel = 'icon';

        // remove existing favicons
        var links = head.getElementsByTagName("link");
        for (var i = links.length; --i >= 0;) {
          if (/\bicon\b/i.test(links[i].getAttribute("rel")) && !activeInstance.props.keepIconLink(links[i])) {
            head.removeChild(links[i]);
          }
        }

        head.appendChild(linkEl);
      }

      var currentUrl;

      if (activeInstance.props.url instanceof Array) {
        currentUrl = activeInstance.props.url[activeInstance.state.animationIndex];
      } else {
        currentUrl = activeInstance.props.url;
      }

      if (activeInstance.props.alertCount) {
        drawIcon(currentUrl, activeInstance.props.alertCount, function (err, url) {
          linkEl.href = url;
        });
      } else {
        linkEl.href = currentUrl;
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (typeof document === 'undefined') return;

      var activeInstance = Favicon.getActiveInstance();
      var isAnimated = activeInstance.props.url instanceof Array && activeInstance.props.animated;

      // clear any running animations
      var intervalId = null;
      clearInterval(activeInstance.state.animationLoop);

      if (isAnimated) {
        var animateFavicon = function animateFavicon() {
          var nextAnimationIndex = (activeInstance.state.animationIndex + 1) % activeInstance.props.url.length;
          Favicon.draw();
          activeInstance.setState({ animationIndex: nextAnimationIndex });
        };
        intervalId = setInterval(animateFavicon, activeInstance.props.animationDelay);
        animateFavicon();
      } else {
        Favicon.draw();
      }

      activeInstance.setState({ animationLoop: intervalId });
    }
  }]);

  return Favicon;
}(React.Component);

Favicon.displayName = 'Favicon';
Favicon.defaultProps = {
  alertCount: null,
  animated: true,
  animationDelay: 500,
  keepIconLink: function keepIconLink() {
    return false;
  }
};
Favicon.mountedInstances = [];

module.exports = Favicon;

/***/ }),

/***/ "SE9O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("eW0v"));

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _meta_tags = _interopRequireDefault(__webpack_require__("w6fD"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }newObj.default = obj;return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;return o;
  };return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var ReactTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactTitle, _Component);

  function ReactTitle() {
    _classCallCheck(this, ReactTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactTitle).apply(this, arguments));
  }

  _createClass(ReactTitle, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_meta_tags.default, null, _react.default.createElement("title", null, this.props.title));
    }
  }]);

  return ReactTitle;
}(_react.Component);

_defineProperty(ReactTitle, "propTypes", {
  title: _propTypes.default.string
});

var _default = ReactTitle;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "TGCi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export render */
/* unused harmony export renderToString */
/* unused harmony export shallowRender */
var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,n=Object.keys||function(e){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(r);return n},r=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},t=function(e,n){return String(e).replace(/(\n+)/g,"$1"+(n||"\t"))},o=function(e,n,r){return String(e).length>(n||40)||!r&&-1!==String(e).indexOf("\n")||-1!==String(e).indexOf("<")},i={};function a(n){var r="";for(var t in n){var o=n[t];null!=o&&(r&&(r+=" "),r+=i[t]||(i[t]=t.replace(/([A-Z])/g,"-$1").toLowerCase()),r+=": ",r+=o,"number"==typeof o&&!1===e.test(t)&&(r+="px"),r+=";")}return r||void 0}function l(e,n){for(var r in n)e[r]=n[r];return e}var f={shallow:!0},c=[],u=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;p.render=p;var s=function(e,n){return p(e,n,f)};function p(e,i,f,s,d){if(null==e||"boolean"==typeof e)return"";var h=e.nodeName,v=e.attributes,g=!1;i=i||{};var m,x=(f=f||{}).pretty,b="string"==typeof x?x:"\t";if("object"!=typeof e&&!h)return r(e);if("function"==typeof h){if(g=!0,!f.shallow||!s&&!1!==f.renderRootComponent){var y,w=function(e){var n=l({},e.attributes);n.children=e.children;var r=e.nodeName.defaultProps;if(void 0!==r)for(var t in r)void 0===n[t]&&(n[t]=r[t]);return n}(e);if(h.prototype&&"function"==typeof h.prototype.render){var k=new h(w,i);k._disable=k.__x=!0,k.props=w,k.context=i,k.componentWillMount&&k.componentWillMount(),y=k.render(k.props,k.state,k.context),k.getChildContext&&(i=l(l({},i),k.getChildContext()))}else y=h(w,i);return p(y,i,f,!1!==f.shallowHighOrder)}h=(m=h).displayName||m!==Function&&m.name||function(e){var n=(Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!n){for(var r=-1,t=c.length;t--;)if(c[t]===e){r=t;break}r<0&&(r=c.push(e)-1),n="UnnamedComponent"+r}return n}(m)}var O,S="";if(v){var C=n(v);f&&!0===f.sortAttributes&&C.sort();for(var j=0;j<C.length;j++){var $=C[j],_=v[$];if("children"!==$&&(!$.match(/[\s\n\\/='"\0<>]/)&&(f&&f.allAttributes||"key"!==$&&"ref"!==$))){if("className"===$){if(v.class)continue;$="class"}else d&&$.match(/^xlink:?./)&&($=$.toLowerCase().replace(/^xlink:?/,"xlink:"));"style"===$&&_&&"object"==typeof _&&(_=a(_));var H=f.attributeHook&&f.attributeHook($,_,i,f,g);if(H||""===H)S+=H;else if("dangerouslySetInnerHTML"===$)O=_&&_.__html;else if((_||0===_||""===_)&&"function"!=typeof _){if(!(!0!==_&&""!==_||(_=$,f&&f.xml))){S+=" "+$;continue}S+=" "+$+'="'+r(_)+'"'}}}}var N=S.replace(/^\n\s*/," ");if(N===S||~N.indexOf("\n")?x&&~S.indexOf("\n")&&(S+="\n"):S=N,S="<"+h+S+">",String(h).match(/[\s\n\\/='"\0<>]/))throw S;var A=String(h).match(u);A&&(S=S.replace(/>$/," />"));var L=[];if(O)x&&o(O)&&(O="\n"+b+t(O,b)),S+=O;else if(e.children){for(var M=~S.indexOf("\n"),F=0;F<e.children.length;F++){var P=e.children[F];if(null!=P&&!1!==P){var R=p(P,i,f,!0,"svg"===h||"foreignObject"!==h&&d);!M&&x&&o(R)&&(M=!0),R&&L.push(R)}}if(x&&M)for(var W=L.length;W--;)L[W]="\n"+b+t(L[W],b)}if(L.length)S+=L.join("");else if(f&&f.xml)return S.substring(0,S.length-1)+" />";return A||(x&&~S.indexOf("\n")&&(S+="\n"),S+="</"+h+">"),S}p.shallowRender=s;/* unused harmony default export */ var _unused_webpack_default_export = (p);
//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "UD6h":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MetaTagsContext", {
  enumerable: true,
  get: function get() {
    return _meta_tags_context.default;
  }
});
Object.defineProperty(exports, "MetaTags", {
  enumerable: true,
  get: function get() {
    return _meta_tags.default;
  }
});
Object.defineProperty(exports, "ReactTitle", {
  enumerable: true,
  get: function get() {
    return _react_title.default;
  }
});
exports.default = void 0;

var _meta_tags_context = _interopRequireDefault(__webpack_require__("WFS4"));

var _meta_tags = _interopRequireDefault(__webpack_require__("w6fD"));

var _react_title = _interopRequireDefault(__webpack_require__("SE9O"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _default = _meta_tags.default;
exports.default = _default;

/***/ }),

/***/ "Vy1O":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "WFS4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__("eW0v");

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;return o;
  };return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

/** context class which passes extract fuunction to MetaTags Component **/
var MetaTagsContext =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaTagsContext, _Component);

  function MetaTagsContext() {
    _classCallCheck(this, MetaTagsContext);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaTagsContext).apply(this, arguments));
  }

  _createClass(MetaTagsContext, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        extract: this.props.extract
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return MetaTagsContext;
}(_react.Component);

_defineProperty(MetaTagsContext, "childContextTypes", {
  extract: _propTypes.default.func
});

var _default = MetaTagsContext;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "Wum3":
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),

/***/ "XDn1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("eW0v"));

var _styles = __webpack_require__("nV3n");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];
    }
  }return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];
  }return target;
}

function Background(_ref) {
  var networkKey = _ref.networkKey,
      props = _objectWithoutProperties(_ref, ["networkKey"]);

  return _react.default.createElement("g", _extends({}, props, {
    className: "social-svg-background",
    style: _styles.socialSvgContent
  }), _react.default.createElement("circle", {
    cx: "32",
    cy: "32",
    r: "31"
  }));
}

var _default = Background;
exports.default = _default;

/***/ }),

/***/ "XgVs":
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),

/***/ "a90S":
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "cT3y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;
/*eslint-disable */
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPortal", function() { return createPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_batchedUpdates", function() { return unstable_batchedUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);




var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = false;
try {
	DEV = "production" !== 'production';
} catch (e) {}

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = vnode.attributes == null ? {} : extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function Portal(props) {
	renderSubtreeIntoContainer(this, props.vnode, props.container);
}

function createPortal(vnode, container) {
	return Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(Portal, { vnode: vnode, container: container });
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && (component.base || component.nodeType === 1 && component) || null;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

function unstable_batchedUpdates(callback) {
	callback();
}

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createPortal: createPortal,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	unstable_batchedUpdates: unstable_batchedUpdates,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);

//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "epkN":
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),

/***/ "fiS2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Blop_css__ = __webpack_require__("tcE6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Blop_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Blop_css__);




var Blop = function Blop(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      imgg = _ref.imgg,
      color = _ref.color,
      llink = _ref.llink;
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'a',
    { href: llink, className: __WEBPACK_IMPORTED_MODULE_1__Blop_css___default.a.blop },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Blop_css___default.a.ribbon },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'span',
        { style: { background: '' + color } },
        'Hot'
      )
    ),
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: __WEBPACK_IMPORTED_MODULE_1__Blop_css___default.a.blop_image, style: { backgroundImage: 'url(' + imgg + ')' } }),
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Blop_css___default.a.blop_content },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'h3',
        null,
        title
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'p',
        null,
        desc
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Blop);

/***/ }),

/***/ "gHkb":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "gQt0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"header":"header__pvYcg","logo":"logo__ZoyRj","header_container":"header_container__wvBkG","header_title":"header_title__4ru12","header_title2":"header_title2__2Wcnh","nav2":"nav2__3w3nT","container":"container__LMgad","bar1":"bar1__1mr0M","bar2":"bar2__3gjc7","bar3":"bar3__3ysy8","change":"change__3Cewq","nav":"nav__mF6ai","lognav":"lognav__1RK-3","sign":"sign__3IeR4","awa_signed":"awa_signed__2Bk5V","notif":"notif__jcYHC","prof_img":"prof_img__2Pn88","awa_profile_head":"awa_profile_head__2LTsz","awa_profile_img":"awa_profile_img__2QSVs","awa_profile_body":"awa_profile_body__x9xJh","notifs":"notifs__13PPF","social":"social__1AeFX","social_icon":"social_icon__1Wz5-"};

/***/ }),

/***/ "k99P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact_router__ = __webpack_require__("/QC5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Posst_css__ = __webpack_require__("li1N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Posst_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Posst_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CommentList__ = __webpack_require__("rH6Z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_social_share_buttons__ = __webpack_require__("lC4N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_social_share_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_social_share_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_jsonld__ = __webpack_require__("/PU8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_meta_tags__ = __webpack_require__("UD6h");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_meta_tags___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_meta_tags__);


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
  var title = event.target.closest("div").parentElement.parentElement.parentElement.previousSibling.previousSibling.children[1].children[0];

  var content = event.target.closest("div").parentElement.previousSibling;

  if (content.children[1].children[0].value != "") {
    fetch('https://www.portal.allawaken.com/api/addcomment', {
      method: 'post',
      body: title.innerHTML + "//" + content.children[1].children[0].value
    });
  }
  content.children[1].children[0].value = "";
}

function updatenum(e) {
  var title = event.target.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  if (title == null) {
    title = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.previousSibling;
  }
  title = title.children[1].children[0].innerHTML;

  var cc = event.target.parentElement.parentElement.parentElement.previousSibling;
  if (cc.innerHTML == "Comments") {
    cc = event.target.parentElement.parentElement.parentElement.parentElement.previousSibling.children[1].children[0].children[1];
  } else {
    cc = event.target.parentElement.parentElement.parentElement.previousSibling.children[1].children[0].children[1];
  }

  fetch('https://www.portal.allawaken.com/api/cc', {
    method: 'post',
    body: title
  }).then(function (response) {
    return response.text().then(function (text) {
      cc.innerHTML = text;
    });
  });
}

var _ref = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'update'
);

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'delete'
);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'comment'
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'i',
  { className: 'material-icons' },
  'thumb_up'
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'h2',
  null,
  'Comments'
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('input', { id: 'inp', placeholder: 'Comment ... ' });

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  __WEBPACK_IMPORTED_MODULE_7_react_meta_tags___default.a,
  null,
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('meta', { name: 'google-site-verification', content: 'FyBmKGOdF_OUH0_qh67NdHEF_Yj-HiBI81cwKXyM1pE' })
);

var Posst = function (_Component) {
  _inherits(Posst, _Component);

  function Posst(props) {
    _classCallCheck(this, Posst);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { element: [], useer: [], dissp: "", upd: "" };

    _this.deletecomment = _this.deletecomment.bind(_this);
    return _this;
  }

  Posst.prototype.triggerFoo = function triggerFoo() {
    addcomment(event);
    updatenum(event);
    this.foo.setState({ foo: true });
  };

  Posst.prototype.deletecomment = function deletecomment(event) {
    var content = event.target.closest('div').parentElement.parentElement.children[2].children[0].innerHTML;
    var name = event.target.closest('div').parentElement.previousSibling.children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletecomment', {
      method: 'post',
      body: content + "//" + name
    });
    this.foo.setState({ foo: true });
  };

  Posst.prototype.deletecompost = function deletecompost(event) {
    var title = event.target.closest('div').parentElement.parentElement.parentElement.nextSibling.children[1].children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletecompost', {
      method: 'post',
      body: title
    }).then(window.location.assign("https://www.portal.allawaken.com"));
    this.foo.setState({ foo: true });
  };

  Posst.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/isimage', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });

    var zz = document.getElementById("inp");
    zz.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("comm").click();
      }
    });
  };

  Posst.prototype.render = function render() {
    var _this3 = this;

    if (this.props.ussr == this.props.postby) {
      this.state.dissp = "display: flex;";
    }
    if (this.props.ussr == "All Awaken") {
      this.state.dissp = "display: flex;";
    }

    var data = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": '' + this.props.link
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
      { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_wrapper },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        __WEBPACK_IMPORTED_MODULE_7_react_meta_tags___default.a,
        null,
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_6_react_jsonld__["a" /* default */], { data: data })
      ),
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_meta },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.meta },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { src: this.props.profimg, alt: "Image for post author: " + this.props.postby }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'a',
              { target: '_blank', href: this.props.proflink },
              this.props.postby
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.meta },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('div', { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_decor, style: { background: '' + this.props.color } })
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.meta },
            _ref,
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'p',
              null,
              this.props.poston
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.del },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { onClick: this.deletecompost, style: this.state.dissp, className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.buttondel },
                _ref2
              )
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'a',
          { href: this.props.link, className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_head },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_image, src: this.props.imge, alt: "Image for post: " + this.props.title }),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_content },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'h2',
              { id: 'posst_title', className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_title },
              this.props.title
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'p',
              null,
              this.props.desc
            )
          )
        ),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.posst_actions },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.social },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5_react_social_share_buttons___default.a, {
              compact: true,
              socialMedia: 'facebook',
              url: '' + this.props.link
            }),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_5_react_social_share_buttons___default.a, {
              compact: true,
              socialMedia: 'twitter',
              url: '' + this.props.link,
              text: '' + this.props.link
            })
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ca },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ca_button, onClick: showcomments, style: { background: '' + this.props.color } },
              _ref3,
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'p',
                null,
                this.props.comments
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ca_button, onClick: like, style: { background: '' + this.props.color } },
              _ref4,
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
          { style: { display: 'none' }, id: 'comments', className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.comments },
          _ref5,
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.addcomment },
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ac },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.cp_image, src: this.state.element["imageUrl"], alt: 'Profile image' }),
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ac_holder, id: 'ac' },
                _ref6
              )
            ),
            Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
              'div',
              { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ac_actions },
              Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
                'div',
                { id: 'comm', onClick: this.triggerFoo.bind(this), className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ca_button, style: { background: '' + this.props.color } },
                'Comment'
              )
            )
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_3__CommentList__["a" /* default */], { ref: function ref(foo) {
              return _this3.foo = foo;
            }, del: this.deletecomment, title: this.props.title, imggg: this.state.element["imageUrl"] }),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_2__Posst_css___default.a.ca_button, onClick: hidecomments, style: { background: '' + this.props.color } },
            'Hide comments'
          )
        )
      ),
      _ref7
    );
  };

  return Posst;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Posst);

/***/ }),

/***/ "lC4N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("eW0v");

var styles = { facebook: { icon: React.createElement("path", { d: "M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z" }), background: "#3B5998" }, "google-plus": { icon: React.createElement("path", { d: "M179.7 237.6L179.7 284.2 256.7 284.2C253.6 304.2 233.4 342.9 179.7 342.9 133.4 342.9 95.6 304.4 95.6 257 95.6 209.6 133.4 171.1 179.7 171.1 206.1 171.1 223.7 182.4 233.8 192.1L270.6 156.6C247 134.4 216.4 121 179.7 121 104.7 121 44 181.8 44 257 44 332.2 104.7 393 179.7 393 258 393 310 337.8 310 260.1 310 251.2 309 244.4 307.9 237.6L179.7 237.6 179.7 237.6ZM468 236.7L429.3 236.7 429.3 198 390.7 198 390.7 236.7 352 236.7 352 275.3 390.7 275.3 390.7 314 429.3 314 429.3 275.3 468 275.3" }), background: "#DB4437" }, twitter: { icon: React.createElement("path", { d: "M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z" }), background: "#1DA1F2" }, pinterest: { icon: React.createElement("path", { d: "M266.6 76.5c-100.2 0-150.7 71.8-150.7 131.7 0 36.3 13.7 68.5 43.2 80.6 4.8 2 9.2 0.1 10.6-5.3 1-3.7 3.3-13 4.3-16.9 1.4-5.3 0.9-7.1-3-11.8 -8.5-10-13.9-23-13.9-41.3 0-53.3 39.9-101 103.8-101 56.6 0 87.7 34.6 87.7 80.8 0 60.8-26.9 112.1-66.8 112.1 -22.1 0-38.6-18.2-33.3-40.6 6.3-26.7 18.6-55.5 18.6-74.8 0-17.3-9.3-31.7-28.4-31.7 -22.5 0-40.7 23.3-40.7 54.6 0 19.9 6.7 33.4 6.7 33.4s-23.1 97.8-27.1 114.9c-8.1 34.1-1.2 75.9-0.6 80.1 0.3 2.5 3.6 3.1 5 1.2 2.1-2.7 28.9-35.9 38.1-69 2.6-9.4 14.8-58 14.8-58 7.3 14 28.7 26.3 51.5 26.3 67.8 0 113.8-61.8 113.8-144.5C400.1 134.7 347.1 76.5 266.6 76.5z" }), background: "#BD081C" } };function getHref(a, b, c, d) {
  var e = encodeURI(b);return "facebook" === a ? "https://www.facebook.com/sharer/sharer.php?u=" + e : "google-plus" === a ? "https://plus.google.com/share?url=" + e : "twitter" === a ? "https://twitter.com/intent/tweet?url=" + e + "&text=" + c : "pinterest" === a ? "http://www.pinterest.com/pin/create/button/?url=" + e + "&media=" + d + "&description=" + c : void 0;
}function getButtonData(a, b, c, d) {
  var e = styles[a].background,
      f = getHref(a, b, c, d);return { background: e, href: f };
}function getIconPath(a) {
  return styles[a].icon || null;
}function getTextContent(a) {
  return "facebook" === a ? "Facebook" : "google-plus" === a ? "Google Plus" : "twitter" === a ? "Tweet" : "pinterest" === a ? "Pin it" : null;
}

function Icon(a) {
  var b = a.socialMedia;return React.createElement("svg", { viewBox: "0 0 512 512", style: { width: "24px", height: "24px", flex: "none", fill: "white", marginLeft: "auto", marginRight: "auto" } }, getIconPath(b));
}function Text(a) {
  var b = a.socialMedia;return React.createElement("div", { style: { flex: "none", fontSize: "18px", textAlign: "right", paddingRight: "10px", paddingLeft: "5px" } }, getTextContent(b));
}function Wrapper(a) {
  var b = a.children,
      c = a.socialMedia,
      d = a.url,
      e = a.text,
      f = a.media,
      g = getButtonData(c, d, e, f),
      h = g.background,
      i = g.href;return React.createElement("a", { style: { display: "flex", minWidth: "32px", height: "32px", width: "auto", alignItems: "center", background: h, color: "white", borderRadius: "5px", margin: "0 3px" }, target: "_blank", href: i }, b);
}function ShareButton(a) {
  var b = a.compact,
      c = a.media,
      d = a.text,
      e = a.url,
      f = a.socialMedia;return f ? React.createElement(Wrapper, { socialMedia: f, url: e, text: d, media: c }, React.createElement(Icon, { socialMedia: f }), !b && React.createElement(Text, { socialMedia: f })) : null;
}

module.exports = ShareButton;

/***/ }),

/***/ "lZYv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Blop__ = __webpack_require__("fiS2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var primaryRed = "#e53935";
var primaryBlue = "#1e88e5";
var primaryGreen = "#43a047";
var primaryYellow = "#fbc02d";

var Bloplist = function (_Component) {
  _inherits(Bloplist, _Component);

  function Bloplist() {
    var _temp, _this, _ret;

    _classCallCheck(this, Bloplist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [], zoo: false }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Bloplist.prototype.toggle = function toggle() {
    this.setState({
      zoo: true
    });
  };

  Bloplist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch(this.props.lid, {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });
  };

  Bloplist.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.state.zoo == true) {
      this.state.zoo = false;
    }
  };

  Bloplist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (x == 5) {
        x = 1;
      }
      if (x == 1) {
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Blop__["a" /* default */], { llink: uurl, imgg: par[i]["imgUrl"], title: par[i]["title"], desc: par[i]["description"], color: primaryBlue }));
        x++;
      } else if (x == 2) {
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Blop__["a" /* default */], { llink: uurl, imgg: par[i]["imgUrl"], title: par[i]["title"], desc: par[i]["description"], color: primaryRed }));
        x++;
      } else if (x == 3) {
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Blop__["a" /* default */], { llink: uurl, imgg: par[i]["imgUrl"], title: par[i]["title"], desc: par[i]["description"], color: primaryGreen }));
        x++;
      } else if (x == 4) {
        var uurl = "https://www.portal.allawaken.com/post/" + par[i]["title"];
        elements.push(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(__WEBPACK_IMPORTED_MODULE_1__Blop__["a" /* default */], { llink: uurl, imgg: par[i]["imgUrl"], title: par[i]["title"], desc: par[i]["description"], color: primaryYellow }));
        x++;
      }
    };

    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      null,
      elements
    );
  };

  return Bloplist;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Bloplist);

/***/ }),

/***/ "li1N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"posst":"posst__13jW1","posst_meta":"posst_meta__1IkvX","meta":"meta__1PP_7","posst_decor":"posst_decor__3cyOB","posst_head":"posst_head__3OjH-","posst_content":"posst_content__uLk8S","posst_title":"posst_title__3mqXI","posst_image":"posst_image__ZBjbu","posst_actions":"posst_actions__wp1te","nc_actions":"nc_actions__1uQwi","social":"social__3SJMu","sc_button":"sc_button__cW3lG","ca":"ca__13I2B","ca_button":"ca_button__noQEa","comments":"comments__34lUA","addcomment":"addcomment__2T3_E","cp_image":"cp_image__p2me5","ac":"ac__9oVkB","ac_holder":"ac_holder__3508p","ac_actions":"ac_actions__AVdXU","del":"del__3PYPz","buttondel":"buttondel__1Kzdw"};

/***/ }),

/***/ "llUH":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
* Fingerprintjs2 2.0.5 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
(function (name, context, definition) {
  'use strict';

  if (typeof window !== 'undefined' && "function" === 'function' && __webpack_require__("yNJ0")) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = definition();
  } else if (context.exports) {
    context.exports = definition();
  } else {
    context[name] = definition();
  }
})('Fingerprint2', this, function () {
  'use strict';

  /// MurmurHash3 related functions

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //

  var x64Add = function x64Add(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] + n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] + n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] + n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] + n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  };

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Multiply = function x64Multiply(m, n) {
    m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff];
    n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff];
    var o = [0, 0, 0, 0];
    o[3] += m[3] * n[3];
    o[2] += o[3] >>> 16;
    o[3] &= 0xffff;
    o[2] += m[2] * n[3];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[2] += m[3] * n[2];
    o[1] += o[2] >>> 16;
    o[2] &= 0xffff;
    o[1] += m[1] * n[3];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[2] * n[2];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[1] += m[3] * n[1];
    o[0] += o[1] >>> 16;
    o[1] &= 0xffff;
    o[0] += m[0] * n[3] + m[1] * n[2] + m[2] * n[1] + m[3] * n[0];
    o[0] &= 0xffff;
    return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
  };
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
  var x64Rotl = function x64Rotl(m, n) {
    n %= 64;
    if (n === 32) {
      return [m[1], m[0]];
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n | m[0] >>> 32 - n];
    } else {
      n -= 32;
      return [m[1] << n | m[0] >>> 32 - n, m[0] << n | m[1] >>> 32 - n];
    }
  };
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
  var x64LeftShift = function x64LeftShift(m, n) {
    n %= 64;
    if (n === 0) {
      return m;
    } else if (n < 32) {
      return [m[0] << n | m[1] >>> 32 - n, m[1] << n];
    } else {
      return [m[1] << n - 32, 0];
    }
  };
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
  var x64Xor = function x64Xor(m, n) {
    return [m[0] ^ n[0], m[1] ^ n[1]];
  };
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
  var x64Fmix = function x64Fmix(h) {
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xff51afd7, 0xed558ccd]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53]);
    h = x64Xor(h, [0, h[0] >>> 1]);
    return h;
  };

  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
  var x64hash128 = function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [0, seed];
    var h2 = [0, seed];
    var k1 = [0, 0];
    var k2 = [0, 0];
    var c1 = [0x87c37b91, 0x114253d5];
    var c2 = [0x4cf5ad43, 0x2745937f];
    for (var i = 0; i < bytes; i = i + 16) {
      k1 = [key.charCodeAt(i + 4) & 0xff | (key.charCodeAt(i + 5) & 0xff) << 8 | (key.charCodeAt(i + 6) & 0xff) << 16 | (key.charCodeAt(i + 7) & 0xff) << 24, key.charCodeAt(i) & 0xff | (key.charCodeAt(i + 1) & 0xff) << 8 | (key.charCodeAt(i + 2) & 0xff) << 16 | (key.charCodeAt(i + 3) & 0xff) << 24];
      k2 = [key.charCodeAt(i + 12) & 0xff | (key.charCodeAt(i + 13) & 0xff) << 8 | (key.charCodeAt(i + 14) & 0xff) << 16 | (key.charCodeAt(i + 15) & 0xff) << 24, key.charCodeAt(i + 8) & 0xff | (key.charCodeAt(i + 9) & 0xff) << 8 | (key.charCodeAt(i + 10) & 0xff) << 16 | (key.charCodeAt(i + 11) & 0xff) << 24];
      k1 = x64Multiply(k1, c1);
      k1 = x64Rotl(k1, 31);
      k1 = x64Multiply(k1, c2);
      h1 = x64Xor(h1, k1);
      h1 = x64Rotl(h1, 27);
      h1 = x64Add(h1, h2);
      h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729]);
      k2 = x64Multiply(k2, c2);
      k2 = x64Rotl(k2, 33);
      k2 = x64Multiply(k2, c1);
      h2 = x64Xor(h2, k2);
      h2 = x64Rotl(h2, 31);
      h2 = x64Add(h2, h1);
      h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5]);
    }
    k1 = [0, 0];
    k2 = [0, 0];
    switch (remainder) {
      case 15:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48));
      // fallthrough
      case 14:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40));
      // fallthrough
      case 13:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32));
      // fallthrough
      case 12:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24));
      // fallthrough
      case 11:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16));
      // fallthrough
      case 10:
        k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8));
      // fallthrough
      case 9:
        k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)]);
        k2 = x64Multiply(k2, c2);
        k2 = x64Rotl(k2, 33);
        k2 = x64Multiply(k2, c1);
        h2 = x64Xor(h2, k2);
      // fallthrough
      case 8:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56));
      // fallthrough
      case 7:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48));
      // fallthrough
      case 6:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40));
      // fallthrough
      case 5:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32));
      // fallthrough
      case 4:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24));
      // fallthrough
      case 3:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16));
      // fallthrough
      case 2:
        k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8));
      // fallthrough
      case 1:
        k1 = x64Xor(k1, [0, key.charCodeAt(i)]);
        k1 = x64Multiply(k1, c1);
        k1 = x64Rotl(k1, 31);
        k1 = x64Multiply(k1, c2);
        h1 = x64Xor(h1, k1);
      // fallthrough
    }
    h1 = x64Xor(h1, [0, key.length]);
    h2 = x64Xor(h2, [0, key.length]);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    h1 = x64Fmix(h1);
    h2 = x64Fmix(h2);
    h1 = x64Add(h1, h2);
    h2 = x64Add(h2, h1);
    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8);
  };

  var defaultOptions = {
    preprocessor: null,
    audio: {
      timeout: 1000,
      // On iOS 11, audio context can only be used in response to user interaction.
      // We require users to explicitly enable audio fingerprinting on iOS 11.
      // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      excludeIOS11: true
    },
    fonts: {
      swfContainerId: 'fingerprintjs2',
      swfPath: 'flash/compiled/FontList.swf',
      userDefinedFonts: [],
      extendedJsFonts: false
    },
    screen: {
      // To ensure consistent fingerprints when users rotate their mobile devices
      detectScreenOrientation: true
    },
    plugins: {
      sortPluginsFor: [/palemoon/i],
      excludeIE: false
    },
    extraComponents: [],
    excludes: {
      // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
      'enumerateDevices': true,
      // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
      'pixelRatio': true,
      // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
      'doNotTrack': true,
      // uses js fonts already
      'fontsFlash': true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
  };

  var each = function each(obj, iterator) {
    if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
      obj.forEach(iterator);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        iterator(obj[i], i, obj);
      }
    } else {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator(obj[key], key, obj);
        }
      }
    }
  };

  var map = function map(obj, iterator) {
    var results = [];
    // Not using strict equality so that this acts as a
    // shortcut to checking for `null` and `undefined`.
    if (obj == null) {
      return results;
    }
    if (Array.prototype.map && obj.map === Array.prototype.map) {
      return obj.map(iterator);
    }
    each(obj, function (value, index, list) {
      results.push(iterator(value, index, list));
    });
    return results;
  };

  var extendSoft = function extendSoft(target, source) {
    if (source == null) {
      return target;
    }
    var value;
    var key;
    for (key in source) {
      value = source[key];
      if (value != null && !Object.prototype.hasOwnProperty.call(target, key)) {
        target[key] = value;
      }
    }
    return target;
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
  var enumerateDevicesKey = function enumerateDevicesKey(done, options) {
    if (!isEnumerateDevicesSupported()) {
      return done(options.NOT_AVAILABLE);
    }
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
      done(devices.map(function (device) {
        return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label;
      }));
    }).catch(function (error) {
      done(error);
    });
  };

  var isEnumerateDevicesSupported = function isEnumerateDevicesSupported() {
    return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
  };
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
  var audioKey = function audioKey(done, options) {
    var audioOptions = options.audio;
    if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
      // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
      return done(options.EXCLUDED);
    }

    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

    if (AudioContext == null) {
      return done(options.NOT_AVAILABLE);
    }

    var context = new AudioContext(1, 44100, 44100);

    var oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(10000, context.currentTime);

    var compressor = context.createDynamicsCompressor();
    each([['threshold', -50], ['knee', 40], ['ratio', 12], ['reduction', -20], ['attack', 0], ['release', 0.25]], function (item) {
      if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
        compressor[item[0]].setValueAtTime(item[1], context.currentTime);
      }
    });

    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    context.startRendering();

    var audioTimeoutId = setTimeout(function () {
      console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".');
      context.oncomplete = function () {};
      context = null;
      return done('audioTimeout');
    }, audioOptions.timeout);

    context.oncomplete = function (event) {
      var fingerprint;
      try {
        clearTimeout(audioTimeoutId);
        fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function (acc, val) {
          return acc + Math.abs(val);
        }, 0).toString();
        oscillator.disconnect();
        compressor.disconnect();
      } catch (error) {
        done(error);
        return;
      }
      done(fingerprint);
    };
  };
  var UserAgent = function UserAgent(done) {
    done(navigator.userAgent);
  };
  var languageKey = function languageKey(done, options) {
    done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE);
  };
  var colorDepthKey = function colorDepthKey(done, options) {
    done(window.screen.colorDepth || options.NOT_AVAILABLE);
  };
  var deviceMemoryKey = function deviceMemoryKey(done, options) {
    done(navigator.deviceMemory || options.NOT_AVAILABLE);
  };
  var pixelRatioKey = function pixelRatioKey(done, options) {
    done(window.devicePixelRatio || options.NOT_AVAILABLE);
  };
  var screenResolutionKey = function screenResolutionKey(done, options) {
    done(getScreenResolution(options));
  };
  var getScreenResolution = function getScreenResolution(options) {
    var resolution = [window.screen.width, window.screen.height];
    if (options.screen.detectScreenOrientation) {
      resolution.sort().reverse();
    }
    return resolution;
  };
  var availableScreenResolutionKey = function availableScreenResolutionKey(done, options) {
    done(getAvailableScreenResolution(options));
  };
  var getAvailableScreenResolution = function getAvailableScreenResolution(options) {
    if (window.screen.availWidth && window.screen.availHeight) {
      var available = [window.screen.availHeight, window.screen.availWidth];
      if (options.screen.detectScreenOrientation) {
        available.sort().reverse();
      }
      return available;
    }
    // headless browsers
    return options.NOT_AVAILABLE;
  };
  var timezoneOffset = function timezoneOffset(done) {
    done(new Date().getTimezoneOffset());
  };
  var timezone = function timezone(done, options) {
    if (window.Intl && window.Intl.DateTimeFormat) {
      done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone);
      return;
    }
    done(options.NOT_AVAILABLE);
  };
  var sessionStorageKey = function sessionStorageKey(done, options) {
    done(hasSessionStorage(options));
  };
  var localStorageKey = function localStorageKey(done, options) {
    done(hasLocalStorage(options));
  };
  var indexedDbKey = function indexedDbKey(done, options) {
    done(hasIndexedDB(options));
  };
  var addBehaviorKey = function addBehaviorKey(done) {
    // body might not be defined at this point or removed programmatically
    done(!!(document.body && document.body.addBehavior));
  };
  var openDatabaseKey = function openDatabaseKey(done) {
    done(!!window.openDatabase);
  };
  var cpuClassKey = function cpuClassKey(done, options) {
    done(getNavigatorCpuClass(options));
  };
  var platformKey = function platformKey(done, options) {
    done(getNavigatorPlatform(options));
  };
  var doNotTrackKey = function doNotTrackKey(done, options) {
    done(getDoNotTrack(options));
  };
  var canvasKey = function canvasKey(done, options) {
    if (isCanvasSupported()) {
      done(getCanvasFp(options));
      return;
    }
    done(options.NOT_AVAILABLE);
  };
  var webglKey = function webglKey(done, options) {
    if (isWebGlSupported()) {
      done(getWebglFp());
      return;
    }
    done(options.NOT_AVAILABLE);
  };
  var webglVendorAndRendererKey = function webglVendorAndRendererKey(done) {
    if (isWebGlSupported()) {
      done(getWebglVendorAndRenderer());
      return;
    }
    done();
  };
  var adBlockKey = function adBlockKey(done) {
    done(getAdBlock());
  };
  var hasLiedLanguagesKey = function hasLiedLanguagesKey(done) {
    done(getHasLiedLanguages());
  };
  var hasLiedResolutionKey = function hasLiedResolutionKey(done) {
    done(getHasLiedResolution());
  };
  var hasLiedOsKey = function hasLiedOsKey(done) {
    done(getHasLiedOs());
  };
  var hasLiedBrowserKey = function hasLiedBrowserKey(done) {
    done(getHasLiedBrowser());
  };
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
  var flashFontsKey = function flashFontsKey(done, options) {
    // we do flash if swfobject is loaded
    if (!hasSwfObjectLoaded()) {
      return done('swf object not loaded');
    }
    if (!hasMinFlashInstalled()) {
      return done('flash not installed');
    }
    if (!options.fonts.swfPath) {
      return done('missing options.fonts.swfPath');
    }
    loadSwfAndDetectFonts(function (fonts) {
      done(fonts);
    }, options);
  };
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
  var jsFontsKey = function jsFontsKey(done, options) {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    var fontList = ['Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style', 'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New', 'Geneva', 'Georgia', 'Helvetica', 'Helvetica Neue', 'Impact', 'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode', 'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO', 'Palatino', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS', 'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'];

    if (options.fonts.extendedJsFonts) {
      var extendedFontList = ['Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter', 'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER', 'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville', 'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD', 'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed', 'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara', 'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer', 'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold', 'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark', 'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC', 'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte', 'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER', 'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT', 'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD', 'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV', 'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT', 'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN', 'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island', 'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic', 'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le', 'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti', 'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli', 'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN', 'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB', 'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla', 'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood', 'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket', 'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC', 'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold', 'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin', 'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF'];
      fontList = fontList.concat(extendedFontList);
    }

    fontList = fontList.concat(options.fonts.userDefinedFonts);

    // remove duplicate fonts
    fontList = fontList.filter(function (font, position) {
      return fontList.indexOf(font) === position;
    });

    // we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = 'mmmmmmmmmmlli';

    // we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName('body')[0];

    // div to load spans for the base fonts
    var baseFontsDiv = document.createElement('div');

    // div to load spans for the fonts to detect
    var fontsDiv = document.createElement('div');

    var defaultWidth = {};
    var defaultHeight = {};

    // creates a span where the fonts will be loaded
    var createSpan = function createSpan() {
      var s = document.createElement('span');
      /*
       * We need this css as in some weird browser this
       * span elements shows up for a microSec which creates a
       * bad user experience
       */
      s.style.position = 'absolute';
      s.style.left = '-9999px';
      s.style.fontSize = testSize;

      // css font reset to reset external styles
      s.style.fontStyle = 'normal';
      s.style.fontWeight = 'normal';
      s.style.letterSpacing = 'normal';
      s.style.lineBreak = 'auto';
      s.style.lineHeight = 'normal';
      s.style.textTransform = 'none';
      s.style.textAlign = 'left';
      s.style.textDecoration = 'none';
      s.style.textShadow = 'none';
      s.style.whiteSpace = 'normal';
      s.style.wordBreak = 'normal';
      s.style.wordSpacing = 'normal';

      s.innerHTML = testString;
      return s;
    };

    // creates a span and load the font to detect and a base font for fallback
    var createSpanWithFonts = function createSpanWithFonts(fontToDetect, baseFont) {
      var s = createSpan();
      s.style.fontFamily = "'" + fontToDetect + "'," + baseFont;
      return s;
    };

    // creates spans for the base fonts and adds them to baseFontsDiv
    var initializeBaseFontsSpans = function initializeBaseFontsSpans() {
      var spans = [];
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        var s = createSpan();
        s.style.fontFamily = baseFonts[index];
        baseFontsDiv.appendChild(s);
        spans.push(s);
      }
      return spans;
    };

    // creates spans for the fonts to detect and adds them to fontsDiv
    var initializeFontsSpans = function initializeFontsSpans() {
      var spans = {};
      for (var i = 0, l = fontList.length; i < l; i++) {
        var fontSpans = [];
        for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
          var s = createSpanWithFonts(fontList[i], baseFonts[j]);
          fontsDiv.appendChild(s);
          fontSpans.push(s);
        }
        spans[fontList[i]] = fontSpans; // Stores {fontName : [spans for that font]}
      }
      return spans;
    };

    // checks if a font is available
    var isFontAvailable = function isFontAvailable(fontSpans) {
      var detected = false;
      for (var i = 0; i < baseFonts.length; i++) {
        detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]];
        if (detected) {
          return detected;
        }
      }
      return detected;
    };

    // create spans for base fonts
    var baseFontsSpans = initializeBaseFontsSpans();

    // add the spans to the DOM
    h.appendChild(baseFontsDiv);

    // get the default width for the three base fonts
    for (var index = 0, length = baseFonts.length; index < length; index++) {
      defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth; // width for the default font
      defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight; // height for the default font
    }

    // create spans for fonts to detect
    var fontsSpans = initializeFontsSpans();

    // add all the spans to the DOM
    h.appendChild(fontsDiv);

    // check available fonts
    var available = [];
    for (var i = 0, l = fontList.length; i < l; i++) {
      if (isFontAvailable(fontsSpans[fontList[i]])) {
        available.push(fontList[i]);
      }
    }

    // remove spans from DOM
    h.removeChild(fontsDiv);
    h.removeChild(baseFontsDiv);
    done(available);
  };
  var pluginsComponent = function pluginsComponent(done, options) {
    if (isIE()) {
      if (!options.plugins.excludeIE) {
        done(getIEPlugins(options));
      } else {
        done(options.EXCLUDED);
      }
    } else {
      done(getRegularPlugins(options));
    }
  };
  var getRegularPlugins = function getRegularPlugins(options) {
    if (navigator.plugins == null) {
      return options.NOT_AVAILABLE;
    }

    var plugins = [];
    // plugins isn't defined in Node envs.
    for (var i = 0, l = navigator.plugins.length; i < l; i++) {
      if (navigator.plugins[i]) {
        plugins.push(navigator.plugins[i]);
      }
    }

    // sorting plugins only for those user agents, that we know randomize the plugins
    // every time we try to enumerate them
    if (pluginsShouldBeSorted(options)) {
      plugins = plugins.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
    }
    return map(plugins, function (p) {
      var mimeTypes = map(p, function (mt) {
        return [mt.type, mt.suffixes];
      });
      return [p.name, p.description, mimeTypes];
    });
  };
  var getIEPlugins = function getIEPlugins(options) {
    var result = [];
    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject') || 'ActiveXObject' in window) {
      var names = ['AcroPDF.PDF', // Adobe PDF reader 7+
      'Adodb.Stream', 'AgControl.AgControl', // Silverlight
      'DevalVRXCtrl.DevalVRXCtrl.1', 'MacromediaFlashPaper.MacromediaFlashPaper', 'Msxml2.DOMDocument', 'Msxml2.XMLHTTP', 'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
      'QuickTime.QuickTime', // QuickTime
      'QuickTimeCheckObject.QuickTimeCheck.1', 'RealPlayer', 'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)', 'RealVideo.RealVideo(tm) ActiveX Control (32-bit)', 'Scripting.Dictionary', 'SWCtl.SWCtl', // ShockWave player
      'Shell.UIHelper', 'ShockwaveFlash.ShockwaveFlash', // flash plugin
      'Skype.Detection', 'TDCCtl.TDCCtl', 'WMPlayer.OCX', // Windows media player
      'rmocx.RealPlayer G2 Control', 'rmocx.RealPlayer G2 Control.1'];
      // starting to detect plugins in IE
      result = map(names, function (name) {
        try {
          // eslint-disable-next-line no-new
          new window.ActiveXObject(name);
          return name;
        } catch (e) {
          return options.ERROR;
        }
      });
    } else {
      result.push(options.NOT_AVAILABLE);
    }
    if (navigator.plugins) {
      result = result.concat(getRegularPlugins(options));
    }
    return result;
  };
  var pluginsShouldBeSorted = function pluginsShouldBeSorted(options) {
    var should = false;
    for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
      var re = options.plugins.sortPluginsFor[i];
      if (navigator.userAgent.match(re)) {
        should = true;
        break;
      }
    }
    return should;
  };
  var touchSupportKey = function touchSupportKey(done) {
    done(getTouchSupport());
  };
  var hardwareConcurrencyKey = function hardwareConcurrencyKey(done, options) {
    done(getHardwareConcurrency(options));
  };
  var hasSessionStorage = function hasSessionStorage(options) {
    try {
      return !!window.sessionStorage;
    } catch (e) {
      return options.ERROR; // SecurityError when referencing it means it exists
    }
  };

  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
  var hasLocalStorage = function hasLocalStorage(options) {
    try {
      return !!window.localStorage;
    } catch (e) {
      return options.ERROR; // SecurityError when referencing it means it exists
    }
  };
  var hasIndexedDB = function hasIndexedDB(options) {
    try {
      return !!window.indexedDB;
    } catch (e) {
      return options.ERROR; // SecurityError when referencing it means it exists
    }
  };
  var getHardwareConcurrency = function getHardwareConcurrency(options) {
    if (navigator.hardwareConcurrency) {
      return navigator.hardwareConcurrency;
    }
    return options.NOT_AVAILABLE;
  };
  var getNavigatorCpuClass = function getNavigatorCpuClass(options) {
    return navigator.cpuClass || options.NOT_AVAILABLE;
  };
  var getNavigatorPlatform = function getNavigatorPlatform(options) {
    if (navigator.platform) {
      return navigator.platform;
    } else {
      return options.NOT_AVAILABLE;
    }
  };
  var getDoNotTrack = function getDoNotTrack(options) {
    if (navigator.doNotTrack) {
      return navigator.doNotTrack;
    } else if (navigator.msDoNotTrack) {
      return navigator.msDoNotTrack;
    } else if (window.doNotTrack) {
      return window.doNotTrack;
    } else {
      return options.NOT_AVAILABLE;
    }
  };
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property

  var getTouchSupport = function getTouchSupport() {
    var maxTouchPoints = 0;
    var touchEvent;
    if (typeof navigator.maxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.maxTouchPoints;
    } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
      maxTouchPoints = navigator.msMaxTouchPoints;
    }
    try {
      document.createEvent('TouchEvent');
      touchEvent = true;
    } catch (_) {
      touchEvent = false;
    }
    var touchStart = 'ontouchstart' in window;
    return [maxTouchPoints, touchEvent, touchStart];
  };
  // https://www.browserleaks.com/canvas#how-does-it-work

  var getCanvasFp = function getCanvasFp(options) {
    var result = [];
    // Very simple now, need to make it more complex (geo shapes etc)
    var canvas = document.createElement('canvas');
    canvas.width = 2000;
    canvas.height = 200;
    canvas.style.display = 'inline';
    var ctx = canvas.getContext('2d');
    // detect browser support of canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
    ctx.rect(0, 0, 10, 10);
    ctx.rect(2, 2, 6, 6);
    result.push('canvas winding:' + (ctx.isPointInPath(5, 5, 'evenodd') === false ? 'yes' : 'no'));

    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#f60';
    ctx.fillRect(125, 1, 62, 20);
    ctx.fillStyle = '#069';
    // https://github.com/Valve/fingerprintjs2/issues/66
    if (options.dontUseFakeFontInCanvas) {
      ctx.font = '11pt Arial';
    } else {
      ctx.font = '11pt no-real-font-123';
    }
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \uD83D\uDE03', 2, 15);
    ctx.fillStyle = 'rgba(102, 204, 0, 0.2)';
    ctx.font = '18pt Arial';
    ctx.fillText('Cwm fjordbank glyphs vext quiz, \uD83D\uDE03', 4, 45);

    // canvas blending
    // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
    // http://jsfiddle.net/NDYV8/16/
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = 'rgb(255,0,255)';
    ctx.beginPath();
    ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgb(0,255,255)';
    ctx.beginPath();
    ctx.arc(100, 50, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgb(255,255,0)';
    ctx.beginPath();
    ctx.arc(75, 100, 50, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = 'rgb(255,0,255)';
    // canvas winding
    // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
    // http://jsfiddle.net/NDYV8/19/
    ctx.arc(75, 75, 75, 0, Math.PI * 2, true);
    ctx.arc(75, 75, 25, 0, Math.PI * 2, true);
    ctx.fill('evenodd');

    if (canvas.toDataURL) {
      result.push('canvas fp:' + canvas.toDataURL());
    }
    return result;
  };
  var getWebglFp = function getWebglFp() {
    var gl;
    var fa2s = function fa2s(fa) {
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.enable(gl.DEPTH_TEST);
      gl.depthFunc(gl.LEQUAL);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      return '[' + fa[0] + ', ' + fa[1] + ']';
    };
    var maxAnisotropy = function maxAnisotropy(gl) {
      var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');
      if (ext) {
        var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
        if (anisotropy === 0) {
          anisotropy = 2;
        }
        return anisotropy;
      } else {
        return null;
      }
    };

    gl = getWebglCanvas();
    if (!gl) {
      return null;
    }
    // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
    // First it draws a gradient object with shaders and convers the image to the Base64 string.
    // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
    // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
    var result = [];
    var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
    var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
    vertexPosBuffer.itemSize = 3;
    vertexPosBuffer.numItems = 3;
    var program = gl.createProgram();
    var vshader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vshader, vShaderTemplate);
    gl.compileShader(vshader);
    var fshader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fshader, fShaderTemplate);
    gl.compileShader(fshader);
    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);
    gl.linkProgram(program);
    gl.useProgram(program);
    program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex');
    program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset');
    gl.enableVertexAttribArray(program.vertexPosArray);
    gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0);
    gl.uniform2f(program.offsetUniform, 1, 1);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems);
    try {
      result.push(gl.canvas.toDataURL());
    } catch (e) {
      /* .toDataURL may be absent or broken (blocked by extension) */
    }
    result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'));
    result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)));
    result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)));
    result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS));
    result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'));
    result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS));
    result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS));
    result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS));
    result.push('webgl max anisotropy:' + maxAnisotropy(gl));
    result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
    result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE));
    result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS));
    result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE));
    result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
    result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE));
    result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS));
    result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS));
    result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
    result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS));
    result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)));
    result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS));
    result.push('webgl renderer:' + gl.getParameter(gl.RENDERER));
    result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION));
    result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS));
    result.push('webgl vendor:' + gl.getParameter(gl.VENDOR));
    result.push('webgl version:' + gl.getParameter(gl.VERSION));

    try {
      // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
      var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (extensionDebugRendererInfo) {
        result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL));
        result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL));
      }
    } catch (e) {/* squelch */}

    if (!gl.getShaderPrecisionFormat) {
      return result;
    }

    each(['FLOAT', 'INT'], function (numType) {
      each(['VERTEX', 'FRAGMENT'], function (shader) {
        each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
          each(['precision', 'rangeMin', 'rangeMax'], function (key) {
            var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key];
            if (key !== 'precision') {
              key = 'precision ' + key;
            }
            var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('');
            result.push(line);
          });
        });
      });
    });
    return result;
  };
  var getWebglVendorAndRenderer = function getWebglVendorAndRenderer() {
    /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
    try {
      var glContext = getWebglCanvas();
      var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info');
      return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL);
    } catch (e) {
      return null;
    }
  };
  var getAdBlock = function getAdBlock() {
    var ads = document.createElement('div');
    ads.innerHTML = '&nbsp;';
    ads.className = 'adsbox';
    var result = false;
    try {
      // body may not exist, that's why we need try/catch
      document.body.appendChild(ads);
      result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0;
      document.body.removeChild(ads);
    } catch (e) {
      result = false;
    }
    return result;
  };
  var getHasLiedLanguages = function getHasLiedLanguages() {
    // We check if navigator.language is equal to the first language of navigator.languages
    if (typeof navigator.languages !== 'undefined') {
      try {
        var firstLanguages = navigator.languages[0].substr(0, 2);
        if (firstLanguages !== navigator.language.substr(0, 2)) {
          return true;
        }
      } catch (err) {
        return true;
      }
    }
    return false;
  };
  var getHasLiedResolution = function getHasLiedResolution() {
    return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
  };
  var getHasLiedOs = function getHasLiedOs() {
    var userAgent = navigator.userAgent.toLowerCase();
    var oscpu = navigator.oscpu;
    var platform = navigator.platform.toLowerCase();
    var os;
    // We extract the OS from the user agent (respect the order of the if else if statement)
    if (userAgent.indexOf('windows phone') >= 0) {
      os = 'Windows Phone';
    } else if (userAgent.indexOf('win') >= 0) {
      os = 'Windows';
    } else if (userAgent.indexOf('android') >= 0) {
      os = 'Android';
    } else if (userAgent.indexOf('linux') >= 0) {
      os = 'Linux';
    } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
      os = 'iOS';
    } else if (userAgent.indexOf('mac') >= 0) {
      os = 'Mac';
    } else {
      os = 'Other';
    }
    // We detect if the person uses a mobile device
    var mobileDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
      return true;
    }

    // We compare oscpu with the OS extracted from the UA
    if (typeof oscpu !== 'undefined') {
      oscpu = oscpu.toLowerCase();
      if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true;
      } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
        return true;
      } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
        return true;
      } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
        return true;
      }
    }

    // We compare platform with the OS extracted from the UA
    if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
      return true;
    } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
      return true;
    } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
      return true;
    } else if ((platform.indexOf('win') === -1 && platform.indexOf('linux') === -1 && platform.indexOf('mac') === -1) !== (os === 'Other')) {
      return true;
    }

    return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone';
  };
  var getHasLiedBrowser = function getHasLiedBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();
    var productSub = navigator.productSub;

    // we extract the browser from the user agent (respect the order of the tests)
    var browser;
    if (userAgent.indexOf('firefox') >= 0) {
      browser = 'Firefox';
    } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
      browser = 'Opera';
    } else if (userAgent.indexOf('chrome') >= 0) {
      browser = 'Chrome';
    } else if (userAgent.indexOf('safari') >= 0) {
      browser = 'Safari';
    } else if (userAgent.indexOf('trident') >= 0) {
      browser = 'Internet Explorer';
    } else {
      browser = 'Other';
    }

    if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
      return true;
    }

    // eslint-disable-next-line no-eval
    var tempRes = eval.toString().length;
    if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
      return true;
    } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
      return true;
    } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
      return true;
    }

    // We create an error to see how it is handled
    var errFirefox;
    try {
      // eslint-disable-next-line no-throw-literal
      throw 'a';
    } catch (err) {
      try {
        err.toSource();
        errFirefox = true;
      } catch (errOfErr) {
        errFirefox = false;
      }
    }
    return errFirefox && browser !== 'Firefox' && browser !== 'Other';
  };
  var isCanvasSupported = function isCanvasSupported() {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  };
  var isWebGlSupported = function isWebGlSupported() {
    // code taken from Modernizr
    if (!isCanvasSupported()) {
      return false;
    }

    var glContext = getWebglCanvas();
    return !!window.WebGLRenderingContext && !!glContext;
  };
  var isIE = function isIE() {
    if (navigator.appName === 'Microsoft Internet Explorer') {
      return true;
    } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) {
      // IE 11
      return true;
    }
    return false;
  };
  var hasSwfObjectLoaded = function hasSwfObjectLoaded() {
    return typeof window.swfobject !== 'undefined';
  };
  var hasMinFlashInstalled = function hasMinFlashInstalled() {
    return window.swfobject.hasFlashPlayerVersion('9.0.0');
  };
  var addFlashDivNode = function addFlashDivNode(options) {
    var node = document.createElement('div');
    node.setAttribute('id', options.fonts.swfContainerId);
    document.body.appendChild(node);
  };
  var loadSwfAndDetectFonts = function loadSwfAndDetectFonts(done, options) {
    var hiddenCallback = '___fp_swf_loaded';
    window[hiddenCallback] = function (fonts) {
      done(fonts);
    };
    var id = options.fonts.swfContainerId;
    addFlashDivNode();
    var flashvars = { onReady: hiddenCallback };
    var flashparams = { allowScriptAccess: 'always', menu: 'false' };
    window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {});
  };
  var getWebglCanvas = function getWebglCanvas() {
    var canvas = document.createElement('canvas');
    var gl = null;
    try {
      gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {/* squelch */}
    if (!gl) {
      gl = null;
    }
    return gl;
  };

  var components = [{ key: 'userAgent', getData: UserAgent }, { key: 'language', getData: languageKey }, { key: 'colorDepth', getData: colorDepthKey }, { key: 'deviceMemory', getData: deviceMemoryKey }, { key: 'pixelRatio', getData: pixelRatioKey }, { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey }, { key: 'screenResolution', getData: screenResolutionKey }, { key: 'availableScreenResolution', getData: availableScreenResolutionKey }, { key: 'timezoneOffset', getData: timezoneOffset }, { key: 'timezone', getData: timezone }, { key: 'sessionStorage', getData: sessionStorageKey }, { key: 'localStorage', getData: localStorageKey }, { key: 'indexedDb', getData: indexedDbKey }, { key: 'addBehavior', getData: addBehaviorKey }, { key: 'openDatabase', getData: openDatabaseKey }, { key: 'cpuClass', getData: cpuClassKey }, { key: 'platform', getData: platformKey }, { key: 'doNotTrack', getData: doNotTrackKey }, { key: 'plugins', getData: pluginsComponent }, { key: 'canvas', getData: canvasKey }, { key: 'webgl', getData: webglKey }, { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey }, { key: 'adBlock', getData: adBlockKey }, { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey }, { key: 'hasLiedResolution', getData: hasLiedResolutionKey }, { key: 'hasLiedOs', getData: hasLiedOsKey }, { key: 'hasLiedBrowser', getData: hasLiedBrowserKey }, { key: 'touchSupport', getData: touchSupportKey }, { key: 'fonts', getData: jsFontsKey, pauseBefore: true }, { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true }, { key: 'audio', getData: audioKey }, { key: 'enumerateDevices', getData: enumerateDevicesKey }];

  var Fingerprint2 = function Fingerprint2(options) {
    throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200");
  };

  Fingerprint2.get = function (options, callback) {
    if (!callback) {
      callback = options;
      options = {};
    } else if (!options) {
      options = {};
    }
    extendSoft(options, defaultOptions);
    options.components = options.extraComponents.concat(components);

    var keys = {
      data: [],
      addPreprocessedComponent: function addPreprocessedComponent(key, value) {
        if (typeof options.preprocessor === 'function') {
          value = options.preprocessor(key, value);
        }
        keys.data.push({ key: key, value: value });
      }
    };

    var i = -1;
    var chainComponents = function chainComponents(alreadyWaited) {
      i += 1;
      if (i >= options.components.length) {
        // on finish
        callback(keys.data);
        return;
      }
      var component = options.components[i];

      if (options.excludes[component.key]) {
        chainComponents(false); // skip
        return;
      }

      if (!alreadyWaited && component.pauseBefore) {
        i -= 1;
        setTimeout(function () {
          chainComponents(true);
        }, 1);
        return;
      }

      try {
        component.getData(function (value) {
          keys.addPreprocessedComponent(component.key, value);
          chainComponents(false);
        }, options);
      } catch (error) {
        // main body error
        keys.addPreprocessedComponent(component.key, String(error));
        chainComponents(false);
      }
    };

    chainComponents(false);
  };

  Fingerprint2.getPromise = function (options) {
    return new Promise(function (resolve, reject) {
      Fingerprint2.get(options, resolve);
    });
  };

  Fingerprint2.getV18 = function (options, callback) {
    if (callback == null) {
      callback = options;
      options = {};
    }
    return Fingerprint2.get(options, function (components) {
      var newComponents = [];
      for (var i = 0; i < components.length; i++) {
        var component = components[i];
        if (component.value === (options.NOT_AVAILABLE || 'not available')) {
          newComponents.push({ key: component.key, value: 'unknown' });
        } else if (component.key === 'plugins') {
          newComponents.push({ key: 'plugins',
            value: map(component.value, function (p) {
              var mimeTypes = map(p[2], function (mt) {
                if (mt.join) {
                  return mt.join('~');
                }
                return mt;
              }).join(',');
              return [p[0], p[1], mimeTypes].join('::');
            }) });
        } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
          newComponents.push({ key: component.key, value: component.value.join('~') });
        } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
          if (component.value) {
            newComponents.push({ key: component.key, value: 1 });
          } else {
            // skip
            continue;
          }
        } else {
          if (component.value) {
            newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component);
          } else {
            newComponents.push({ key: component.key, value: component.value });
          }
        }
      }
      var murmur = x64hash128(map(newComponents, function (component) {
        return component.value;
      }).join('~~~'), 31);
      callback(murmur, newComponents);
    });
  };

  Fingerprint2.x64hash128 = x64hash128;
  Fingerprint2.VERSION = '2.0.0';
  return Fingerprint2;
});

/***/ }),

/***/ "ly3p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialIcon = void 0;

var _socialIcon = _interopRequireDefault(__webpack_require__("8yyv"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SocialIcon = _socialIcon.default;
exports.SocialIcon = SocialIcon;

/***/ }),

/***/ "n+ye":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  var args = void 0;
  var context = void 0;
  var timestamp = void 0;
  var result = void 0;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}

/***/ }),

/***/ "nV3n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.socialSvgMask = exports.socialSvgContent = exports.socialSvg = exports.socialContainer = exports.socialIcon = void 0;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

var socialIcon = {
  display: 'inline-block',
  width: '50px',
  height: '50px',
  position: 'relative',
  overflow: 'hidden',
  verticalAlign: 'middle'
};
exports.socialIcon = socialIcon;
var socialContainer = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%'
};
exports.socialContainer = socialContainer;
var socialSvg = {
  borderRadius: '50%',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  fillRule: 'evenodd'
};
exports.socialSvg = socialSvg;
var socialSvgContent = {
  msTransition: 'fill 170ms ease-in-out',
  OTransition: 'fill 170ms ease-in-out',
  MozTransition: 'fill 170ms ease-in-out',
  WebkitTransition: 'fill 170ms ease-in-out',
  transition: 'fill 170ms ease-in-out',
  fill: 'transparent'
};
exports.socialSvgContent = socialSvgContent;

var socialSvgMask = _objectSpread({}, socialSvgContent, {
  fill: '#0f0b0b'
});

exports.socialSvgMask = socialSvgMask;

/***/ }),

/***/ "pbXG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Promenu_css__ = __webpack_require__("5xwO");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Promenu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Promenu_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");





function logout() {
  fetch('https://www.portal.allawaken.com/api/logout', {
    method: 'get'
  }).then(function (response) {
    return response.text().then(function (text) {
      console.log(text);
      if (text == "LoggedOut") {
        window.location.assign("https://www.portal.allawaken.com");
      }
    });
  });
}

var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'account_box'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'My Profile'
  )
);

var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile/posts' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'comment'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Posts'
  )
);

var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile/comments' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'question_answer'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Comments'
  )
);

var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile/connections' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'people'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Connections'
  )
);

var _ref6 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile/chat' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'mail'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Chat'
  )
);

var _ref7 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { href: '/myprofile/settings' },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'settings_applications'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Settings'
  )
);

var _ref8 = Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
  'a',
  { onClick: logout },
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'i',
    { className: 'material-icons' },
    'exit_to_app'
  ),
  ' ',
  Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'p',
    null,
    'Logout'
  )
);

var Promenu = function Promenu(_ref) {
  var title = _ref.title,
      desc = _ref.desc,
      color = _ref.color;
  return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
    'div',
    { className: __WEBPACK_IMPORTED_MODULE_1__Promenu_css___default.a.profile_sidebar },
    Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Promenu_css___default.a.profile_sidemenu },
      _ref2,
      _ref3,
      _ref4,
      _ref5,
      _ref6,
      _ref7,
      _ref8
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Promenu);

/***/ }),

/***/ "pgru":
/***/ (function(module, exports) {

module.exports = require("tls");

/***/ }),

/***/ "rH6Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./components/Comment.css
var components_Comment = __webpack_require__("QcC3");
var Comment_default = /*#__PURE__*/__webpack_require__.n(components_Comment);

// EXTERNAL MODULE: ../node_modules/preact-render-to-string/dist/index.mjs
var dist = __webpack_require__("TGCi");

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// CONCATENATED MODULE: ./components/Reply.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var pimage = __webpack_require__("xIf2");

function clike(e) {
  var name = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  name = name.children[0].children[0].innerHTML;
  var content = event.target.parentElement.parentElement.parentElement.parentElement;
  content = content.children[0].innerHTML;
  var fiel = event.target.parentElement;
  if (fiel.children[1] == null) {
    fiel = event.target;
  }

  fiel = fiel.children[1];

  fetch('https://www.portal.allawaken.com/api/replylike', {
    method: 'post',
    body: name + "//" + content
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text == "liked") {
        var more = parseInt(fiel.innerHTML) + 1;
        fiel.innerHTML = more;
      } else {
        var more = parseInt(fiel.innerHTML) - 1;
        fiel.innerHTML = more;
      }
    });
  });
}

var _ref = Object(preact_min["h"])(
  'i',
  { className: 'material-icons' },
  'delete'
);

var _ref2 = Object(preact_min["h"])(
  'i',
  { 'class': 'material-icons' },
  'update'
);

var _ref3 = Object(preact_min["h"])(
  'i',
  { 'class': 'material-icons' },
  'thumb_up'
);

var Reply_Reply = function (_Component) {
  _inherits(Reply, _Component);

  function Reply() {
    var _temp, _this, _ret;

    _classCallCheck(this, Reply);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { dispp: "" }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Reply.prototype.render = function render() {
    if (this.props.jj == "yes") {
      this.state.dispp = "display: flex;";
    }

    return Object(preact_min["h"])(
      'div',
      { className: Comment_default.a.cp, style: 'width: 100%; margin-left: 0;' },
      Object(preact_min["h"])(
        preact_router_es["a" /* Link */],
        { href: '/profile/' + this.props.name },
        Object(preact_min["h"])('img', { className: Comment_default.a.cp_image, src: this.props.imge, alt: 'My profile image' })
      ),
      Object(preact_min["h"])(
        'div',
        { className: Comment_default.a.cp_name },
        Object(preact_min["h"])(
          preact_router_es["a" /* Link */],
          { href: '/profile/' + this.props.name },
          Object(preact_min["h"])(
            'h4',
            null,
            this.props.name
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Comment_default.a.menu },
          Object(preact_min["h"])(
            'div',
            { onClick: this.props.dellee, style: this.state.dispp, className: Comment_default.a.del_button },
            _ref
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Comment_default.a.cc },
          Object(preact_min["h"])(
            'p',
            null,
            this.props.content
          ),
          Object(preact_min["h"])(
            'div',
            { className: Comment_default.a.cc_metas },
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.cc_meta },
              _ref2,
              Object(preact_min["h"])(
                'p',
                null,
                this.props.commenton
              )
            ),
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.cc_meta },
              Object(preact_min["h"])(
                preact_router_es["a" /* Link */],
                { onClick: clike, className: Comment_default.a.cc_like },
                _ref3,
                Object(preact_min["h"])(
                  'p',
                  null,
                  this.props.likes
                )
              )
            )
          )
        )
      )
    );
  };

  return Reply;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/Replylist.js


function Replylist__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Replylist__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Replylist__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Replylist_Replylist = function (_Component) {
  Replylist__inherits(Replylist, _Component);

  function Replylist() {
    var _temp, _this, _ret;

    Replylist__classCallCheck(this, Replylist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Replylist__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [], roo: false }, _temp), Replylist__possibleConstructorReturn(_this, _ret);
  }

  Replylist.prototype.toggle = function toggle() {
    this.setState({
      roo: true
    });
  };

  Replylist.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/upreplies', {
      method: 'get'
    });

    fetch('https://www.portal.allawaken.com/api/replies', {
      method: 'post',
      body: this.props.name + "//" + this.props.content
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });
  };

  Replylist.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this3 = this;

    if (this.state.roo == true) {
      fetch('https://www.portal.allawaken.com/api/upreplies', {
        method: 'get'
      });

      fetch('https://www.portal.allawaken.com/api/replies', {
        method: 'post',
        body: this.props.name + "//" + this.props.content
      }).then(function (response) {
        return response.json();
      }).then(function (element) {
        return _this3.setState({ element: element });
      });
      this.state.roo = false;
    }
  };

  Replylist.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (this.props.mat == par[i]["user"]) {
        elements.push(Object(preact_min["h"])(Reply_Reply, { dellee: this.props.dele, jj: 'yes', imge: par[i]["imge"], likes: par[i]["likes"], name: par[i]["user"], content: par[i]["content"], commenton: par[i]["commenton"] }));
      } else if (this.props.mat == "All Awaken") {
        elements.push(Object(preact_min["h"])(Reply_Reply, { dellee: this.props.dele, jj: 'yes', imge: par[i]["imge"], likes: par[i]["likes"], name: par[i]["user"], content: par[i]["content"], commenton: par[i]["commenton"] }));
      } else {
        elements.push(Object(preact_min["h"])(Reply_Reply, { dellee: this.props.dele, jj: 'no', imge: par[i]["imge"], likes: par[i]["likes"], name: par[i]["user"], content: par[i]["content"], commenton: par[i]["commenton"] }));
      }
    };

    return Object(preact_min["h"])(
      'div',
      null,
      elements
    );
  };

  return Replylist;
}(preact_min["Component"]);

/* harmony default export */ var components_Replylist = (Replylist_Replylist);
// CONCATENATED MODULE: ./components/Comment.js


function Comment__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Comment__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function Comment__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






function Comment_clike(e) {
  var name = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
  name = name.children[0].children[0].innerHTML;
  var content = event.target.parentElement.parentElement.parentElement.parentElement;
  content = content.children[0].innerHTML;
  var fiel = event.target.parentElement;
  if (fiel.children[1] == null) {
    fiel = event.target;
  }

  fiel = fiel.children[1];

  fetch('https://www.portal.allawaken.com/api/commentlike', {
    method: 'post',
    body: name + "//" + content
  }).then(function (response) {
    return response.text().then(function (text) {
      if (text == "liked") {
        var more = parseInt(fiel.innerHTML) + 1;
        fiel.innerHTML = more;
      } else {
        var more = parseInt(fiel.innerHTML) - 1;
        fiel.innerHTML = more;
      }
    });
  });
}

function showreply(e) {
  var reply = event.target.parentElement.parentElement.nextSibling.nextSibling;
  var replies = event.target.parentElement.parentElement.nextSibling.nextSibling.nextSibling;
  if (reply.style.display == "none") {
    reply.style.display = "block";
    replies.style.display = "block";
  } else {
    reply.style.display = "none";
    replies.style.display = "none";
  }
}

function showreplies(e) {
  var replies = event.target.parentElement.nextSibling.nextSibling;
  if (replies.style.display == "none") {
    replies.style.display = "block";
  } else if (replies.style.display == "") {
    replies.style.display = "block";
  } else {
    replies.style.display = "none";
  }
}

var Comment__ref = Object(preact_min["h"])(
  'i',
  { className: 'material-icons' },
  'delete'
);

var Comment__ref2 = Object(preact_min["h"])(
  'i',
  { 'class': 'material-icons' },
  'update'
);

var Comment__ref3 = Object(preact_min["h"])(
  'i',
  { 'class': 'material-icons' },
  'thumb_up'
);

var _ref4 = Object(preact_min["h"])('input', { id: 'inxp', placeholder: 'Reply ... ' });

var Comment_Comment = function (_Component) {
  Comment__inherits(Comment, _Component);

  function Comment(props) {
    Comment__classCallCheck(this, Comment);

    var _this = Comment__possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = { disp: "" };

    _this.addreply = _this.addreply.bind(_this);
    _this.deletereply = _this.deletereply.bind(_this);
    return _this;
  }

  Comment.prototype.deletereply = function deletereply(event) {
    var ct = event.target.closest('div').parentElement.parentElement.children[2].children[0].innerHTML;
    var name = event.target.closest('div').parentElement.previousSibling.children[0].innerHTML;
    fetch('https://www.portal.allawaken.com/api/deletereply', {
      method: 'post',
      body: ct + "//" + name
    });
    this.roo.setState({ roo: true });
  };

  Comment.prototype.updaterr = function updaterr(event) {
    var rr = event.target.closest('div').parentElement.parentElement.previousSibling.children[0];
    var name = this.props.name;
    var content = this.props.content;

    fetch('https://www.portal.allawaken.com/api/rr', {
      method: 'post',
      body: name + "//" + content
    }).then(function (response) {
      return response.text().then(function (text) {
        var z = "View " + text + " replies";
        rr.innerHTML = z;
      });
    });
  };

  Comment.prototype.addreply = function addreply(event) {
    var newcontent = event.target.parentElement.previousSibling.children[1].children[0];
    var name = this.props.name;
    var content = this.props.content;

    if (newcontent.value !== "") {
      fetch('https://www.portal.allawaken.com/api/addreply', {
        method: 'post',
        body: name + "//" + content + "//" + newcontent.value
      });
      this.updaterr(event);
      this.roo.setState({ roo: true });
    } else {
      this.updaterr(event);
      this.roo.setState({ roo: true });
    }

    newcontent.value = "";
    this.roo.setState({ roo: true });
  };

  Comment.prototype.componentDidMount = function componentDidMount() {
    var tg = document.getElementById("inxp");
    tg.addEventListener("keyup", function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("repl").click();
      }
    });
  };

  Comment.prototype.render = function render() {
    var _this2 = this;

    if (this.props.matz == "yes") {
      this.state.disp = "display: flex;";
    } else if (this.props.repp == "All Awaken") {
      this.state.disp = "display: flex;";
    } else {
      this.state.disp = "display: none;";
    }

    return Object(preact_min["h"])(
      'div',
      { className: Comment_default.a.cp },
      Object(preact_min["h"])(
        'a',
        { href: '/profile/' + this.props.name },
        Object(preact_min["h"])('img', { className: Comment_default.a.cp_image, src: this.props.imge, alt: "Image for comment writer: " + this.props.name })
      ),
      Object(preact_min["h"])(
        'div',
        { className: Comment_default.a.cp_name },
        Object(preact_min["h"])(
          'a',
          { href: '/profile/' + this.props.name },
          Object(preact_min["h"])(
            'h4',
            null,
            this.props.name
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Comment_default.a.menu },
          Object(preact_min["h"])(
            'div',
            { onClick: this.props.del, style: this.state.disp, className: Comment_default.a.del_button },
            Comment__ref
          )
        ),
        Object(preact_min["h"])(
          'div',
          { className: Comment_default.a.cc },
          Object(preact_min["h"])(
            'p',
            { className: 'icontent' },
            this.props.content
          ),
          Object(preact_min["h"])(
            'div',
            { className: Comment_default.a.cc_metas },
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.cc_meta },
              Comment__ref2,
              Object(preact_min["h"])(
                'p',
                null,
                this.props.commenton
              )
            ),
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.cc_meta },
              Object(preact_min["h"])(
                'a',
                { onClick: Comment_clike, className: Comment_default.a.cc_like },
                Comment__ref3,
                Object(preact_min["h"])(
                  'p',
                  null,
                  this.props.likes
                )
              )
            ),
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.cc_meta },
              Object(preact_min["h"])(
                'div',
                { onClick: showreply, className: Comment_default.a.cc_reply },
                'Reply'
              )
            )
          ),
          Object(preact_min["h"])(
            'div',
            { className: Comment_default.a.cc_replies },
            Object(preact_min["h"])(
              'div',
              { onClick: showreplies, className: Comment_default.a.cc_reply },
              'View ',
              this.props.rr,
              ' replies'
            )
          ),
          Object(preact_min["h"])(
            'div',
            { className: Comment_default.a.addreply, style: 'display: none;' },
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.ac },
              Object(preact_min["h"])('img', { className: Comment_default.a.ccp_image, src: this.props.imgg, alt: "Profile image" }),
              Object(preact_min["h"])(
                'div',
                { className: Comment_default.a.ac_holder, id: 'ac' },
                _ref4
              )
            ),
            Object(preact_min["h"])(
              'div',
              { className: Comment_default.a.ac_actions },
              Object(preact_min["h"])(
                'div',
                { id: 'repl', onClick: this.addreply, className: Comment_default.a.ca_button, style: 'background: #777;' },
                'Reply'
              )
            )
          ),
          Object(preact_min["h"])(
            'div',
            { className: Comment_default.a.replies },
            Object(preact_min["h"])(components_Replylist, { ref: function ref(roo) {
                return _this2.roo = roo;
              }, name: this.props.name, content: this.props.content, mat: this.props.repp, dele: this.deletereply })
          )
        )
      )
    );
  };

  return Comment;
}(preact_min["Component"]);


// EXTERNAL MODULE: ../node_modules/fingerprintjs2/fingerprint2.js
var fingerprint2 = __webpack_require__("llUH");
var fingerprint2_default = /*#__PURE__*/__webpack_require__.n(fingerprint2);

// CONCATENATED MODULE: ./components/CommentList.js


function CommentList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CommentList__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function CommentList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CommentList_CommentList = function (_Component) {
  CommentList__inherits(CommentList, _Component);

  function CommentList() {
    var _temp, _this, _ret;

    CommentList__classCallCheck(this, CommentList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = CommentList__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { element: [], foo: false, usr: [] }, _temp), CommentList__possibleConstructorReturn(_this, _ret);
  }

  CommentList.prototype.toggle = function toggle() {
    this.setState({
      foo: true
    });
  };

  CommentList.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    fetch('https://www.portal.allawaken.com/api/upcomments', {
      method: 'get'
    });

    fetch('https://www.portal.allawaken.com/api/ispostlog', {
      method: 'get'
    }).then(function (response) {
      return response.json();
    }).then(function (usr) {
      return _this2.setState({ usr: usr });
    });

    fetch('https://www.portal.allawaken.com/api/comments', {
      method: 'post',
      body: this.props.title
    }).then(function (response) {
      return response.json();
    }).then(function (element) {
      return _this2.setState({ element: element });
    });
  };

  CommentList.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this4 = this;

    if (this.state.foo == true) {
      fetch('https://www.portal.allawaken.com/api/upcomments', {
        method: 'get'
      });

      fingerprint2_default.a.get(function (components) {
        var _this3 = this;

        fetch('https://www.portal.allawaken.com/api/islog', {
          method: 'post',
          body: JSON.stringify(components)
        }).then(function (response) {
          return response.json();
        }).then(function (usr) {
          return _this3.setState({ usr: usr });
        });
      });

      fetch('https://www.portal.allawaken.com/api/comments', {
        method: 'post',
        body: this.props.title
      }).then(function (response) {
        return response.json();
      }).then(function (element) {
        return _this4.setState({ element: element });
      });

      this.state.foo = false;
    }
  };

  CommentList.prototype.render = function render() {
    var par = this.state.element;
    var elements = [];
    var x = 1;
    for (var i = 0; i < par.length; i++) {
      if (this.state.usr["name"] == par[i]["user"]) {
        elements.push(Object(preact_min["h"])(Comment_Comment, { matz: 'yes', repp: this.state.usr["name"], del: this.props.del, imgg: this.props.imggg, rr: par[i]["rr"], imge: par[i]["imge"], likes: par[i]["likes"], name: par[i]["user"], content: par[i]["content"], commenton: par[i]["commenton"] }));
      } else {
        elements.push(Object(preact_min["h"])(Comment_Comment, { matz: 'no', repp: this.state.usr["name"], del: this.props.del, imgg: this.props.imggg, rr: par[i]["rr"], imge: par[i]["imge"], likes: par[i]["likes"], name: par[i]["user"], content: par[i]["content"], commenton: par[i]["commenton"] }));
      }
    };

    return Object(preact_min["h"])(
      'div',
      null,
      elements
    );
  };

  return CommentList;
}(preact_min["Component"]);

/* harmony default export */ var components_CommentList = __webpack_exports__["a"] = (CommentList_CommentList);

/***/ }),

/***/ "rq4c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "tcE6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"blop":"blop__1tF0g","blop_image":"blop_image__UQqGh","ribbon":"ribbon__37Hnn"};

/***/ }),

/***/ "upel":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myprofile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Profilehead_css__ = __webpack_require__("C3sY");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Profilehead_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_preact_render_to_string__ = __webpack_require__("TGCi");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_preact_router__ = __webpack_require__("/QC5");


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






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

var Myprofile = function (_Component) {
  _inherits(Myprofile, _Component);

  function Myprofile() {
    _classCallCheck(this, Myprofile);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Myprofile.prototype.componentDidMount = function componentDidMount() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function (response) {
      return response.text().then(function (text) {
        var profile = JSON.parse(text);
        var name = document.getElementById("naame");
        var subtitle = document.getElementById("subtitle");
        var pimg = document.getElementById("profimg");
        var bimg = document.getElementById("backimg");

        pimg.src = profile["profileimg"];
        bimg.src = profile["backimg"];
        name.innerHTML = profile["name"];
        subtitle.innerHTML = profile["subtitle"];

        fetch('https://www.portal.allawaken.com/api/checkconnections', {
          method: 'get'
        }).then(function (response) {
          return response.text().then(function (text) {
            if (Number(text) == 1) {
              document.getElementById("connections").innerHTML = text + " Connection";
            } else {
              document.getElementById("connections").innerHTML = text + " Connections";
            }
          });
        });
      });
    });
  };

  Myprofile.prototype.componentDidUpdate = function componentDidUpdate() {
    fetch('https://www.portal.allawaken.com/api/myprofile', {
      method: 'get'
    }).then(function (response) {
      return response.text().then(function (text) {
        var profile = JSON.parse(text);
        var name = document.getElementById("naame");
        var subtitle = document.getElementById("subtitle");
        var pimg = document.getElementById("profimg");
        var bimg = document.getElementById("backimg");

        pimg.src = profile["profileimg"];
        bimg.src = profile["backimg"];
        name.innerHTML = profile["name"];
        subtitle.innerHTML = profile["subtitle"];

        fetch('https://www.portal.allawaken.com/api/checkconnections', {
          method: 'get'
        }).then(function (response) {
          return response.text().then(function (text) {
            if (Number(text) == 1) {
              document.getElementById("connections").innerHTML = text + " Connection";
            } else {
              document.getElementById("connections").innerHTML = text + " Connections";
            }
          });
        });
      });
    });
  };

  Myprofile.prototype.render = function render() {
    return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
      'div',
      { className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_head },
      Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_bigimg },
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'backimg', className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_backimg, alt: 'My Profile background image' }),
        Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
          'div',
          { className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_head_holder },
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('img', { id: 'profimg', className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_smallimg, alt: 'My Profile image' }),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_headline },
            _ref,
            _ref2
          ),
          Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(
            'div',
            { className: __WEBPACK_IMPORTED_MODULE_1__Profilehead_css___default.a.profile_connections },
            _ref3
          )
        )
      )
    );
  };

  return Myprofile;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);



/***/ }),

/***/ "vHs2":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "w6fD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("eW0v"));

var _propTypes = _interopRequireDefault(__webpack_require__("5D9O"));

var _reactDom = _interopRequireDefault(__webpack_require__("eW0v"));

var _utils = __webpack_require__("wT/P");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }newObj.default = obj;return newObj;
  }
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return self;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;return o;
  };return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

/** An wrapper component to wrap element which need to shifted to head **/
var MetaTags =
/*#__PURE__*/
function (_Component) {
  _inherits(MetaTags, _Component);

  function MetaTags() {
    _classCallCheck(this, MetaTags);

    return _possibleConstructorReturn(this, _getPrototypeOf(MetaTags).apply(this, arguments));
  }

  _createClass(MetaTags, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.temporaryElement = document.createElement('div');
      this.handleChildrens();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      if (oldProps.children !== this.props.children) {
        this.handleChildrens();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.temporaryElement) {
        _reactDom.default.unmountComponentAtNode(this.temporaryElement);
      }
    }
  }, {
    key: "extractChildren",
    value: function extractChildren() {
      var extract = this.context.extract;
      var children = this.props.children;

      if (!children) {
        return;
      }

      if (extract) {
        extract(children);
      }
    }
  }, {
    key: "handleChildrens",
    value: function handleChildrens() {
      var _this = this;

      var children = this.props.children;

      if (this.context.extract || !children) {
        return;
      }

      var headComponent = _react.default.createElement("div", {
        className: "react-head-temp"
      }, children);

      _reactDom.default.render(headComponent, this.temporaryElement, function () {
        var childStr = _this.temporaryElement.innerHTML; //if html is not changed return

        if (_this.lastChildStr === childStr) {
          return;
        }

        _this.lastChildStr = childStr;
        var childNodes = Array.prototype.slice.call(_this.temporaryElement.querySelector('.react-head-temp').children);
        var head = document.head;
        var headHtml = head.innerHTML; //filter children remove if children has not been changed

        childNodes = childNodes.filter(function (child) {
          return headHtml.indexOf(child.outerHTML) === -1;
        }); //create clone of childNodes

        childNodes = childNodes.map(function (child) {
          return child.cloneNode(true);
        }); //remove duplicate title and meta from head

        childNodes.forEach(function (child) {
          var tag = child.tagName.toLowerCase();

          if (tag === 'title') {
            var title = (0, _utils.getDuplicateTitle)();
            if (title) (0, _utils.removeChild)(head, title);
          } else if (tag === 'meta') {
            var meta = (0, _utils.getDuplicateMeta)(child);
            if (meta) (0, _utils.removeChild)(head, meta);
          } else if (tag === 'link' && child.rel === 'canonical') {
            var link = (0, _utils.getDuplicateCanonical)(child);
            if (link) (0, _utils.removeChild)(head, link);
          }
        });
        (0, _utils.appendChild)(document.head, childNodes);
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.extractChildren();
      return null;
    }
  }]);

  return MetaTags;
}(_react.Component);

_defineProperty(MetaTags, "contextTypes", {
  extract: _propTypes.default.func
});

var _default = MetaTags;
exports.default = _default;
module.exports = exports.default;

/***/ }),

/***/ "wT/P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterAndArrangeTags = filterAndArrangeTags;
exports.getDuplicateTitle = getDuplicateTitle;
exports.getDuplicateCanonical = getDuplicateCanonical;
exports.getDuplicateMeta = getDuplicateMeta;
exports.appendChild = appendChild;
exports.removeChild = removeChild;

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  }
}

var camelCaseProps = ['itemProp'];
var uniqueIdentifiersI = ['property', 'name', 'itemprop'];
var uniqueIdentifiers = uniqueIdentifiersI.concat(camelCaseProps); //case sensitive props is defined in case anyone defined the lowercase prop

var uniqueIdentifiersAll = uniqueIdentifiers.concat(['id']);
/**
  Note:
  1. In server side we will add meta tags and title at last after fitering
  2. In client we will match and replace meta tagString
  3. For now we will not support link and other tags properly, they can be added but we will not check for uniqueness and will not decide placement
**/

function filterOutMetaWithId(metas) {
  metas = Array.prototype.slice.call(metas || []);
  return metas.filter(function (meta) {
    return !meta.id;
  });
}

function filterAndArrangeTags(headElms) {
  var title = null,
      canonicalLink = null;
  var metas = [],
      rest = [];
  headElms.forEach(function (elm) {
    var type = elm.type,
        props = elm.props;

    if (type === 'title') {
      title = elm;
    } else if (type === 'link' && props.rel === 'canonical') {
      canonicalLink = elm;
    } else if (type === 'meta') {
      metas.push(elm);
    } else {
      rest.push(elm);
    }
  });
  return [title].concat(_toConsumableArray(removeDuplicateMetas(metas)), [canonicalLink], rest);
}

function removeDuplicateMetas(metas) {
  var addedMeta = {}; //initialize all the identifiers with empty array

  uniqueIdentifiersAll.forEach(function (identifier) {
    addedMeta[identifier] = [];
  });
  var filteredMetas = [];

  var _loop = function _loop(i) {
    var meta = metas[i];
    var id = meta.props.id;
    var addMeta = false; //if has id and element with id is not present than always add meta

    if (id) {
      addMeta = !addedMeta.id[id]; //for any other unique identifier check if meta already available with same identifier which doesn't have id
    } else {
      addMeta = uniqueIdentifiers.filter(function (identifier) {
        var identifierValue = meta.props[identifier];
        var existing = addedMeta[identifier][identifierValue];
        return existing && !existing.props.id;
      }).length === 0;
    }

    if (addMeta) {
      filteredMetas.unshift(meta); //add meta as added 

      uniqueIdentifiersAll.forEach(function (identifier) {
        var identifierValue = meta.props[identifier];
        if (identifierValue) addedMeta[identifier][identifierValue] = meta;
      });
    }
  };

  for (var i = metas.length - 1; i >= 0; i--) {
    _loop(i);
  }

  return filteredMetas;
}

function getDuplicateTitle() {
  return document.head.querySelectorAll('title');
}

function getDuplicateCanonical() {
  return document.head.querySelectorAll('link[rel="canonical"]');
}

function getDuplicateMeta(meta) {
  var head = document.head;
  var id = meta.id; //if has id and element with id is not present than return the element

  if (id) {
    return id && head.querySelector("#".concat(id));
  } //for any other unique identifier check if metas already available with same identifier which doesn't have id


  return uniqueIdentifiersI.reduce(function (duplicates, identifier) {
    var identifierValue = meta.getAttribute(identifier);
    return identifierValue ? duplicates.concat(filterOutMetaWithId(head.querySelectorAll("[".concat(identifier, " = \"").concat(identifierValue, "\"]")))) : duplicates;
  }, []);
} //function to append childrens on a parent


function appendChild(parent, childrens) {
  if (childrens.length === undefined) childrens = [childrens];
  var docFrag = document.createDocumentFragment(); //we used for loop instead of forEach because childrens can be array like object

  for (var i = 0, ln = childrens.length; i < ln; i++) {
    docFrag.appendChild(childrens[i]);
  }

  parent.appendChild(docFrag);
}

function removeChild(parent, childrens) {
  if (childrens.length === undefined) childrens = [childrens];

  for (var i = 0, ln = childrens.length; i < ln; i++) {
    parent.removeChild(childrens[i]);
  }
}

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__("Asjh");

function emptyFunction() {}

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "xIf2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d56c1d336b0196a7f736c36e9bcd48ba.jpg";

/***/ }),

/***/ "yNJ0":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

/******/ });