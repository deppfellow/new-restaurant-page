/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/novecento_webfont.woff2 */ "./src/asset/font/novecento_webfont.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./asset/font/novecento_webfont.woff */ "./src/asset/font/novecento_webfont.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* "Noto Sans" */

@font-face {
	font-family: 'Novecento';
	src:
		url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format('woff2'),
		url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format('woff');
	font-style: normal;
	font-weight: normal;
}

:root {
	font-size: 16px;
	font-family: 'Novecento';
	color: #000;
	scrollbar-width: thin;
	scrollbar-color: #2d528f #1e1e24;

	--bg-primary: #cad3d7;
	--text-primary: #1b2539;
	--text-primary-lighter: #2d528f;
}

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}

body {
	/* background-color: #000; */
	background-color: whitesmoke;
}

/* NAVIGATION STYLE */
#navbar {
	position: fixed;
	width: 12rem;
	height: 100vh;
	background-color: var(--bg-primary);
}

.title {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto 2rem;
	font-weight: bold;
	font-size: 1.2rem;
}

.title > img {
	margin: 1rem auto 0.5rem;
}

.nav-wrapper {
	display: flex;
	flex-direction: column;
	list-style: none;
}

.nav-item {
	width: 100%;
}

.nav-item:last-child {
	margin-top: auto;
}

.nav-link {
	color: var(--text-primary);
	height: 3rem;
	text-decoration: none;
	font-weight: 600;
	display: flex;
	align-items: center;
}

.nav-link:hover {
	background-color: var(--text-primary-lighter);
	color: var(--bg-primary);
}

.nav-link img {
	width: 2rem;
	min-width: 2rem;
	margin: 0 1.5rem;
}

/* CONTENT STYLE */
#content {
	margin-left: 12rem;
}

.menu-content {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	gap: 2rem;
}

.menu-item {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1rem;
}

.menu-wrapper {
	display: flex;
	justify-content: center;
	flex-grow: 1;
}

.menu-description p:nth-child(2) {
	font-weight: 600;
}

.menu-description p:nth-child(3) {
	margin-top: 0.5rem;
}

.menu-action {
	display: flex;
	gap: 0.5rem;
}

.menu-action button {
	flex-grow: 1;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAgH,gBAAgB;;AAEhI;CACC,wBAAwB;CACxB;;wDAE0D;CAC1D,kBAAkB;CAClB,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,wBAAwB;CACxB,WAAW;CACX,qBAAqB;CACrB,gCAAgC;;CAEhC,qBAAqB;CACrB,uBAAuB;CACvB,+BAA+B;AAChC;;AAEA;CACC,UAAU;CACV,SAAS;CACT,sBAAsB;AACvB;;AAEA;CACC,4BAA4B;CAC5B,4BAA4B;AAC7B;;AAEA,qBAAqB;AACrB;CACC,eAAe;CACf,YAAY;CACZ,aAAa;CACb,mCAAmC;AACpC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,mBAAmB;CACnB,iBAAiB;CACjB,iBAAiB;AAClB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;AACjB;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;CAC1B,YAAY;CACZ,qBAAqB;CACrB,gBAAgB;CAChB,aAAa;CACb,mBAAmB;AACpB;;AAEA;CACC,6CAA6C;CAC7C,wBAAwB;AACzB;;AAEA;CACC,WAAW;CACX,eAAe;CACf,gBAAgB;AACjB;;AAEA,kBAAkB;AAClB;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,4DAA4D;CAC5D,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,WAAW;CACX,aAAa;AACd;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,WAAW;AACZ;;AAEA;CACC,YAAY;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap'); /* \"Noto Sans\" */\r\n\r\n@font-face {\r\n\tfont-family: 'Novecento';\r\n\tsrc:\r\n\t\turl('./asset/font/novecento_webfont.woff2') format('woff2'),\r\n\t\turl('./asset/font/novecento_webfont.woff') format('woff');\r\n\tfont-style: normal;\r\n\tfont-weight: normal;\r\n}\r\n\r\n:root {\r\n\tfont-size: 16px;\r\n\tfont-family: 'Novecento';\r\n\tcolor: #000;\r\n\tscrollbar-width: thin;\r\n\tscrollbar-color: #2d528f #1e1e24;\r\n\r\n\t--bg-primary: #cad3d7;\r\n\t--text-primary: #1b2539;\r\n\t--text-primary-lighter: #2d528f;\r\n}\r\n\r\n* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\t/* background-color: #000; */\r\n\tbackground-color: whitesmoke;\r\n}\r\n\r\n/* NAVIGATION STYLE */\r\n#navbar {\r\n\tposition: fixed;\r\n\twidth: 12rem;\r\n\theight: 100vh;\r\n\tbackground-color: var(--bg-primary);\r\n}\r\n\r\n.title {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\tmargin: 0 auto 2rem;\r\n\tfont-weight: bold;\r\n\tfont-size: 1.2rem;\r\n}\r\n\r\n.title > img {\r\n\tmargin: 1rem auto 0.5rem;\r\n}\r\n\r\n.nav-wrapper {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tlist-style: none;\r\n}\r\n\r\n.nav-item {\r\n\twidth: 100%;\r\n}\r\n\r\n.nav-item:last-child {\r\n\tmargin-top: auto;\r\n}\r\n\r\n.nav-link {\r\n\tcolor: var(--text-primary);\r\n\theight: 3rem;\r\n\ttext-decoration: none;\r\n\tfont-weight: 600;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n\r\n.nav-link:hover {\r\n\tbackground-color: var(--text-primary-lighter);\r\n\tcolor: var(--bg-primary);\r\n}\r\n\r\n.nav-link img {\r\n\twidth: 2rem;\r\n\tmin-width: 2rem;\r\n\tmargin: 0 1.5rem;\r\n}\r\n\r\n/* CONTENT STYLE */\r\n#content {\r\n\tmargin-left: 12rem;\r\n}\r\n\r\n.menu-content {\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));\r\n\tgap: 2rem;\r\n}\r\n\r\n.menu-item {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tgap: 0.5rem;\r\n\tpadding: 1rem;\r\n}\r\n\r\n.menu-wrapper {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tflex-grow: 1;\r\n}\r\n\r\n.menu-description p:nth-child(2) {\r\n\tfont-weight: 600;\r\n}\r\n\r\n.menu-description p:nth-child(3) {\r\n\tmargin-top: 0.5rem;\r\n}\r\n\r\n.menu-action {\r\n\tdisplay: flex;\r\n\tgap: 0.5rem;\r\n}\r\n\r\n.menu-action button {\r\n\tflex-grow: 1;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/menu/createMenu.js":
/*!********************************!*\
  !*** ./src/menu/createMenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((menu) => {
	// Creating the image of each menu
	const menuImage = new Image();
	menuImage.src = menu.itemSource;
	menuImage.alt = menu.itemName;

	const menuWrapper = document.createElement('div');
	menuWrapper.classList.add('menu-wrapper');
	menuWrapper.appendChild(menuImage);

	// Creating the description of each menu
	const menuDescription = document.createElement('div');
	menuDescription.classList.add('menu-description');
	menuDescription.innerHTML = `
        <p class="menu-name">Menu name:</p>
        <p class="menu-name">${menu.itemName}</p>
        <P class="menu-price">Menu price: ${menu.itemPrice}</P>
    `;

	// Creating the action button of each menu
	const menuAction = document.createElement('div');
	menuAction.classList.add('menu-action');
	menuAction.innerHTML = `
        <button>Buy</button>
        <button>Wishlist</button>
    `;

	const menuItem = document.createElement('div');
	menuItem.classList.add('menu-item');
	menuItem.append(menuWrapper, menuDescription, menuAction);

	return menuItem;
});


/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuData */ "./src/menu/menuData.js");
/* harmony import */ var _createMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenu */ "./src/menu/createMenu.js");



const menuContent = document.createElement('div');
menuContent.classList.add('menu-content');

for (const item of _menuData__WEBPACK_IMPORTED_MODULE_0__["default"]) {
	// console.log(`Name: ${item.itemName}, price: ${item.itemPrice}`);

	const menuItem = (0,_createMenu__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
	menuContent.append(menuItem);
	// console.log(menuItem);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);


/***/ }),

/***/ "./src/menu/menuData.js":
/*!******************************!*\
  !*** ./src/menu/menuData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_img_barrens_tequila_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/barrens-tequila.png */ "./src/asset/img/barrens-tequila.png");
/* harmony import */ var _asset_img_beagle_cookie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/img/beagle-cookie.png */ "./src/asset/img/beagle-cookie.png");
/* harmony import */ var _asset_img_captain_morgans_wine_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/img/captain-morgans-wine.png */ "./src/asset/img/captain-morgans-wine.png");
/* harmony import */ var _asset_img_caravan_boxed_meal_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/img/caravan-boxed-meal.png */ "./src/asset/img/caravan-boxed-meal.png");
/* harmony import */ var _asset_img_charred_meat_skewer_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../asset/img/charred-meat-skewer.png */ "./src/asset/img/charred-meat-skewer.png");
/* harmony import */ var _asset_img_compressed_sugar_cube_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../asset/img/compressed-sugar-cube.png */ "./src/asset/img/compressed-sugar-cube.png");
/* harmony import */ var _asset_img_dried_cactus_chips_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../asset/img/dried-cactus-chips.png */ "./src/asset/img/dried-cactus-chips.png");
/* harmony import */ var _asset_img_dried_yucca_fruit_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../asset/img/dried-yucca-fruit.png */ "./src/asset/img/dried-yucca-fruit.png");
/* harmony import */ var _asset_img_forte_energy_drink_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../asset/img/forte-energy-drink.png */ "./src/asset/img/forte-energy-drink.png");
/* harmony import */ var _asset_img_half_can_of_sandworms_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asset/img/half-can-of-sandworms.png */ "./src/asset/img/half-can-of-sandworms.png");
/* harmony import */ var _asset_img_hibiscus_healthy_meal_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../asset/img/hibiscus-healthy-meal.png */ "./src/asset/img/hibiscus-healthy-meal.png");
/* harmony import */ var _asset_img_hot_water_kettle_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../asset/img/hot-water-kettle.png */ "./src/asset/img/hot-water-kettle.png");
/* harmony import */ var _asset_img_royal_liqueur_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../asset/img/royal-liqueur.png */ "./src/asset/img/royal-liqueur.png");
/* harmony import */ var _asset_img_ursus_big_bread_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../asset/img/ursus-big-bread.png */ "./src/asset/img/ursus-big-bread.png");
/* harmony import */ var _asset_img_vanilla_soda_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../asset/img/vanilla-soda.png */ "./src/asset/img/vanilla-soda.png");
/* harmony import */ var _asset_img_victorian_rations_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../asset/img/victorian-rations.png */ "./src/asset/img/victorian-rations.png");
/* harmony import */ var _asset_img_water_of_life_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../asset/img/water-of-life.png */ "./src/asset/img/water-of-life.png");


















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
	{
		itemName: 'Barrens Tequila',
		itemPrice: 24.87,
		itemSource: _asset_img_barrens_tequila_png__WEBPACK_IMPORTED_MODULE_0__,
	},
	{
		itemName: "Beagle's Cookie",
		itemPrice: 12.0,
		itemSource: _asset_img_beagle_cookie_png__WEBPACK_IMPORTED_MODULE_1__,
	},
	{
		itemName: "Captain Morgan's Wine",
		itemPrice: 15.0,
		itemSource: _asset_img_captain_morgans_wine_png__WEBPACK_IMPORTED_MODULE_2__,
	},
	{
		itemName: 'Caravan Boxed Meal',
		itemPrice: 10.0,
		itemSource: _asset_img_caravan_boxed_meal_png__WEBPACK_IMPORTED_MODULE_3__,
	},
	{
		itemName: 'Charred Meat Skewer',
		itemPrice: 8.0,
		itemSource: _asset_img_charred_meat_skewer_png__WEBPACK_IMPORTED_MODULE_4__,
	},
	{
		itemName: 'Compressed Sugar Cube',
		itemPrice: 5.0,
		itemSource: _asset_img_compressed_sugar_cube_png__WEBPACK_IMPORTED_MODULE_5__,
	},
	{
		itemName: 'Dried Cactus Chips',
		itemPrice: 3.0,
		itemSource: _asset_img_dried_cactus_chips_png__WEBPACK_IMPORTED_MODULE_6__,
	},
	{
		itemName: 'Dried Yucca Fruit',
		itemPrice: 2.0,
		itemSource: _asset_img_dried_yucca_fruit_png__WEBPACK_IMPORTED_MODULE_7__,
	},
	{
		itemName: 'Forte Energy Drink',
		itemPrice: 6.0,
		itemSource: _asset_img_forte_energy_drink_png__WEBPACK_IMPORTED_MODULE_8__,
	},
	{
		itemName: 'Half Can of Sandworms',
		itemPrice: 7.0,
		itemSource: _asset_img_half_can_of_sandworms_png__WEBPACK_IMPORTED_MODULE_9__,
	},
	{
		itemName: 'Hibiscus Healthy Meal',
		itemPrice: 9.0,
		itemSource: _asset_img_hibiscus_healthy_meal_png__WEBPACK_IMPORTED_MODULE_10__,
	},
	{
		itemName: 'Hot Water Kettle',
		itemPrice: 4.0,
		itemSource: _asset_img_hot_water_kettle_png__WEBPACK_IMPORTED_MODULE_11__,
	},
	{
		itemName: 'Royal Liqueur',
		itemPrice: 11.0,
		itemSource: _asset_img_royal_liqueur_png__WEBPACK_IMPORTED_MODULE_12__,
	},
	{
		itemName: 'Ursus Big Bread',
		itemPrice: 13.0,
		itemSource: _asset_img_ursus_big_bread_png__WEBPACK_IMPORTED_MODULE_13__,
	},
	{
		itemName: 'Vanilla Soda',
		itemPrice: 14.0,
		itemSource: _asset_img_vanilla_soda_png__WEBPACK_IMPORTED_MODULE_14__,
	},
	{
		itemName: 'Victorian Rations',
		itemPrice: 16.0,
		itemSource: _asset_img_victorian_rations_png__WEBPACK_IMPORTED_MODULE_15__,
	},
	{
		itemName: 'Water of Life',
		itemPrice: 17.0,
		itemSource: _asset_img_water_of_life_png__WEBPACK_IMPORTED_MODULE_16__,
	},
]);


/***/ }),

/***/ "./src/nav/nav.js":
/*!************************!*\
  !*** ./src/nav/nav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_img_rhode_island_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/rhode-island-logo.png */ "./src/asset/img/rhode-island-logo.png");
/* harmony import */ var _navIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navIcons */ "./src/nav/navIcons.js");



const navbar = document.getElementById('navbar');

// Main logo
const mainWrapper = document.createElement('div');
mainWrapper.classList.add('title');

const mainLogo = new Image();
mainLogo.src = _asset_img_rhode_island_logo_png__WEBPACK_IMPORTED_MODULE_0__;
mainLogo.alt = 'Rhode Island Logo';
mainLogo.style.width = '5rem';

const mainTitle = document.createElement('span');
mainTitle.textContent = "Terra's Cuisine";

mainWrapper.append(mainLogo, mainTitle);
navbar.appendChild(mainWrapper);

// Navbar component
const navWrapper = document.createElement('ul');
navWrapper.classList.add('nav-wrapper');

for (const item of _navIcons__WEBPACK_IMPORTED_MODULE_1__["default"]) {
	const navItem = document.createElement('li');
	navItem.classList.add('nav-item');
	navItem.innerHTML = `
        <a href="#" class="nav-link">
            <img src="${item.iconSource}" alt="${item.name}"></img>
            <span class="nav-text">${item.name}</span>
        </a>
    `;

	navWrapper.append(navItem);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navWrapper);


/***/ }),

/***/ "./src/nav/navIcons.js":
/*!*****************************!*\
  !*** ./src/nav/navIcons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _asset_img_house_solid_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../asset/img/house-solid.svg */ "./src/asset/img/house-solid.svg");
/* harmony import */ var _asset_img_mug_saucer_solid_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../asset/img/mug-saucer-solid.svg */ "./src/asset/img/mug-saucer-solid.svg");
/* harmony import */ var _asset_img_circle_info_solid_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../asset/img/circle-info-solid.svg */ "./src/asset/img/circle-info-solid.svg");
/* harmony import */ var _asset_img_gears_solid_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asset/img/gears-solid.svg */ "./src/asset/img/gears-solid.svg");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
	{ name: 'Home', iconSource: _asset_img_house_solid_svg__WEBPACK_IMPORTED_MODULE_0__ },
	{ name: 'Menu', iconSource: _asset_img_mug_saucer_solid_svg__WEBPACK_IMPORTED_MODULE_1__ },
	{ name: 'About', iconSource: _asset_img_circle_info_solid_svg__WEBPACK_IMPORTED_MODULE_2__ },
	{ name: 'Settings', iconSource: _asset_img_gears_solid_svg__WEBPACK_IMPORTED_MODULE_3__ },
]);


/***/ }),

/***/ "./src/asset/font/novecento_webfont.woff":
/*!***********************************************!*\
  !*** ./src/asset/font/novecento_webfont.woff ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/9a33a526161b895c942c.woff";

/***/ }),

/***/ "./src/asset/font/novecento_webfont.woff2":
/*!************************************************!*\
  !*** ./src/asset/font/novecento_webfont.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/5874184c325d5eef8975.woff2";

/***/ }),

/***/ "./src/asset/img/barrens-tequila.png":
/*!*******************************************!*\
  !*** ./src/asset/img/barrens-tequila.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/e946a6e962270c3b42cd.png";

/***/ }),

/***/ "./src/asset/img/beagle-cookie.png":
/*!*****************************************!*\
  !*** ./src/asset/img/beagle-cookie.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/bc90ca8e22f7298f3960.png";

/***/ }),

/***/ "./src/asset/img/captain-morgans-wine.png":
/*!************************************************!*\
  !*** ./src/asset/img/captain-morgans-wine.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/634791509a0d42d4bc1c.png";

/***/ }),

/***/ "./src/asset/img/caravan-boxed-meal.png":
/*!**********************************************!*\
  !*** ./src/asset/img/caravan-boxed-meal.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/d1cbd6e1e6bac0193686.png";

/***/ }),

/***/ "./src/asset/img/charred-meat-skewer.png":
/*!***********************************************!*\
  !*** ./src/asset/img/charred-meat-skewer.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/7c4104213175bb1cc078.png";

/***/ }),

/***/ "./src/asset/img/circle-info-solid.svg":
/*!*********************************************!*\
  !*** ./src/asset/img/circle-info-solid.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/41c7f5711e5b565ae7b4.svg";

/***/ }),

/***/ "./src/asset/img/compressed-sugar-cube.png":
/*!*************************************************!*\
  !*** ./src/asset/img/compressed-sugar-cube.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/8c88c21cb1818cc61e9a.png";

/***/ }),

/***/ "./src/asset/img/dried-cactus-chips.png":
/*!**********************************************!*\
  !*** ./src/asset/img/dried-cactus-chips.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/6b9ae54632d656cc700e.png";

/***/ }),

/***/ "./src/asset/img/dried-yucca-fruit.png":
/*!*********************************************!*\
  !*** ./src/asset/img/dried-yucca-fruit.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/0c6f4bfe34d925a1f6f9.png";

/***/ }),

/***/ "./src/asset/img/forte-energy-drink.png":
/*!**********************************************!*\
  !*** ./src/asset/img/forte-energy-drink.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/609ab7e1db7d199714c5.png";

/***/ }),

/***/ "./src/asset/img/gears-solid.svg":
/*!***************************************!*\
  !*** ./src/asset/img/gears-solid.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/c35c0d4e81c0fb7cf4ed.svg";

/***/ }),

/***/ "./src/asset/img/half-can-of-sandworms.png":
/*!*************************************************!*\
  !*** ./src/asset/img/half-can-of-sandworms.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/a5c186a3fda9c08d47a9.png";

/***/ }),

/***/ "./src/asset/img/hibiscus-healthy-meal.png":
/*!*************************************************!*\
  !*** ./src/asset/img/hibiscus-healthy-meal.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/84f9f09849f0e915ec89.png";

/***/ }),

/***/ "./src/asset/img/hot-water-kettle.png":
/*!********************************************!*\
  !*** ./src/asset/img/hot-water-kettle.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/be20e01317894ab767c8.png";

/***/ }),

/***/ "./src/asset/img/house-solid.svg":
/*!***************************************!*\
  !*** ./src/asset/img/house-solid.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/8c9f551ff5ea0d8c2b05.svg";

/***/ }),

/***/ "./src/asset/img/mug-saucer-solid.svg":
/*!********************************************!*\
  !*** ./src/asset/img/mug-saucer-solid.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/2073caaf24fa68506511.svg";

/***/ }),

/***/ "./src/asset/img/rhode-island-logo.png":
/*!*********************************************!*\
  !*** ./src/asset/img/rhode-island-logo.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/4a5d6bebc50b6cd2c0e9.png";

/***/ }),

/***/ "./src/asset/img/royal-liqueur.png":
/*!*****************************************!*\
  !*** ./src/asset/img/royal-liqueur.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/a2bfc644debe9f35c284.png";

/***/ }),

/***/ "./src/asset/img/ursus-big-bread.png":
/*!*******************************************!*\
  !*** ./src/asset/img/ursus-big-bread.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/9be8aa43fa7f24025055.png";

/***/ }),

/***/ "./src/asset/img/vanilla-soda.png":
/*!****************************************!*\
  !*** ./src/asset/img/vanilla-soda.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/b55c96d39cf3a9721330.png";

/***/ }),

/***/ "./src/asset/img/victorian-rations.png":
/*!*********************************************!*\
  !*** ./src/asset/img/victorian-rations.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/b8c5a8bed1d627c2e688.png";

/***/ }),

/***/ "./src/asset/img/water-of-life.png":
/*!*****************************************!*\
  !*** ./src/asset/img/water-of-life.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "asset/22c69f411ecf7a33f3c4.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");
/* harmony import */ var _nav_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav */ "./src/nav/nav.js");




// Navigation
const navbar = document.getElementById('navbar');
navbar.appendChild(_nav_nav__WEBPACK_IMPORTED_MODULE_2__["default"]);

// Content
const main = document.getElementById('content');
main.appendChild(_menu_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);

console.log('All set!');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvY3JlYXRlTWVudS5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvbWVudS5qcyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUvbWVudURhdGEuanMiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYvbmF2LmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2L25hdkljb25zLmpzIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uZXctcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ldy1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9mb250L25vdmVjZW50b193ZWJmb250LndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldC9mb250L25vdmVjZW50b193ZWJmb250LndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FuczppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBcIk5vdG8gU2Fuc1wiICovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogJ05vdmVjZW50byc7XHJcblx0c3JjOlxyXG5cdFx0dXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdCgnd29mZjInKSxcclxuXHRcdHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBmb3JtYXQoJ3dvZmYnKTtcclxuXHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuOnJvb3Qge1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LWZhbWlseTogJ05vdmVjZW50byc7XHJcblx0Y29sb3I6ICMwMDA7XHJcblx0c2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG5cdHNjcm9sbGJhci1jb2xvcjogIzJkNTI4ZiAjMWUxZTI0O1xyXG5cclxuXHQtLWJnLXByaW1hcnk6ICNjYWQzZDc7XHJcblx0LS10ZXh0LXByaW1hcnk6ICMxYjI1Mzk7XHJcblx0LS10ZXh0LXByaW1hcnktbGlnaHRlcjogIzJkNTI4ZjtcclxufVxyXG5cclxuKiB7XHJcblx0cGFkZGluZzogMDtcclxuXHRtYXJnaW46IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0LyogYmFja2dyb3VuZC1jb2xvcjogIzAwMDsgKi9cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG4vKiBOQVZJR0FUSU9OIFNUWUxFICovXHJcbiNuYXZiYXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTJyZW07XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRtYXJnaW46IDAgYXV0byAycmVtO1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4udGl0bGUgPiBpbWcge1xyXG5cdG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbTtcclxufVxyXG5cclxuLm5hdi13cmFwcGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xyXG5cdG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcblx0Y29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcblx0aGVpZ2h0OiAzcmVtO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktbGlnaHRlcik7XHJcblx0Y29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xyXG59XHJcblxyXG4ubmF2LWxpbmsgaW1nIHtcclxuXHR3aWR0aDogMnJlbTtcclxuXHRtaW4td2lkdGg6IDJyZW07XHJcblx0bWFyZ2luOiAwIDEuNXJlbTtcclxufVxyXG5cclxuLyogQ09OVEVOVCBTVFlMRSAqL1xyXG4jY29udGVudCB7XHJcblx0bWFyZ2luLWxlZnQ6IDEycmVtO1xyXG59XHJcblxyXG4ubWVudS1jb250ZW50IHtcclxuXHRkaXNwbGF5OiBncmlkO1xyXG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDEycmVtLCAxZnIpKTtcclxuXHRnYXA6IDJyZW07XHJcbn1cclxuXHJcbi5tZW51LWl0ZW0ge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRnYXA6IDAuNXJlbTtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4ubWVudS13cmFwcGVyIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLm1lbnUtZGVzY3JpcHRpb24gcDpudGgtY2hpbGQoMikge1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5tZW51LWRlc2NyaXB0aW9uIHA6bnRoLWNoaWxkKDMpIHtcclxuXHRtYXJnaW4tdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5tZW51LWFjdGlvbiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuLm1lbnUtYWN0aW9uIGJ1dHRvbiB7XHJcblx0ZmxleC1ncm93OiAxO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBZ0gsZ0JBQWdCOztBQUVoSTtDQUNDLHdCQUF3QjtDQUN4Qjs7d0RBRTBEO0NBQzFELGtCQUFrQjtDQUNsQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLFdBQVc7Q0FDWCxxQkFBcUI7Q0FDckIsZ0NBQWdDOztDQUVoQyxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsNEJBQTRCO0NBQzVCLDRCQUE0QjtBQUM3Qjs7QUFFQSxxQkFBcUI7QUFDckI7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGFBQWE7Q0FDYixtQ0FBbUM7QUFDcEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixZQUFZO0NBQ1oscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsNkNBQTZDO0NBQzdDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw0REFBNEQ7Q0FDNUQsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsV0FBVztBQUNaOztBQUVBO0NBQ0MsWUFBWTtBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FuczppdGFsLHdnaHRAMCwxMDAuLjkwMDsxLDEwMC4uOTAwJmRpc3BsYXk9c3dhcCcpOyAvKiBcXFwiTm90byBTYW5zXFxcIiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm92ZWNlbnRvJztcXHJcXG5cXHRzcmM6XFxyXFxuXFx0XFx0dXJsKCcuL2Fzc2V0L2ZvbnQvbm92ZWNlbnRvX3dlYmZvbnQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxyXFxuXFx0XFx0dXJsKCcuL2Fzc2V0L2ZvbnQvbm92ZWNlbnRvX3dlYmZvbnQud29mZicpIGZvcm1hdCgnd29mZicpO1xcclxcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG5cXHRmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdGZvbnQtZmFtaWx5OiAnTm92ZWNlbnRvJztcXHJcXG5cXHRjb2xvcjogIzAwMDtcXHJcXG5cXHRzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxyXFxuXFx0c2Nyb2xsYmFyLWNvbG9yOiAjMmQ1MjhmICMxZTFlMjQ7XFxyXFxuXFxyXFxuXFx0LS1iZy1wcmltYXJ5OiAjY2FkM2Q3O1xcclxcblxcdC0tdGV4dC1wcmltYXJ5OiAjMWIyNTM5O1xcclxcblxcdC0tdGV4dC1wcmltYXJ5LWxpZ2h0ZXI6ICMyZDUyOGY7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdC8qIGJhY2tncm91bmQtY29sb3I6ICMwMDA7ICovXFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWSUdBVElPTiBTVFlMRSAqL1xcclxcbiNuYXZiYXIge1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR3aWR0aDogMTJyZW07XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRtYXJnaW46IDAgYXV0byAycmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUgPiBpbWcge1xcclxcblxcdG1hcmdpbjogMXJlbSBhdXRvIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi13cmFwcGVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG5cXHR3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmxhc3QtY2hpbGQge1xcclxcblxcdG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XFxyXFxuXFx0aGVpZ2h0OiAzcmVtO1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rOmhvdmVyIHtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktbGlnaHRlcik7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWJnLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgaW1nIHtcXHJcXG5cXHR3aWR0aDogMnJlbTtcXHJcXG5cXHRtaW4td2lkdGg6IDJyZW07XFxyXFxuXFx0bWFyZ2luOiAwIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ09OVEVOVCBTVFlMRSAqL1xcclxcbiNjb250ZW50IHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRlbnQge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTJyZW0sIDFmcikpO1xcclxcblxcdGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcblxcdHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LXdyYXBwZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0ZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1kZXNjcmlwdGlvbiBwOm50aC1jaGlsZCgyKSB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtZGVzY3JpcHRpb24gcDpudGgtY2hpbGQoMykge1xcclxcblxcdG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtYWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hY3Rpb24gYnV0dG9uIHtcXHJcXG5cXHRmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IChtZW51KSA9PiB7XHJcblx0Ly8gQ3JlYXRpbmcgdGhlIGltYWdlIG9mIGVhY2ggbWVudVxyXG5cdGNvbnN0IG1lbnVJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cdG1lbnVJbWFnZS5zcmMgPSBtZW51Lml0ZW1Tb3VyY2U7XHJcblx0bWVudUltYWdlLmFsdCA9IG1lbnUuaXRlbU5hbWU7XHJcblxyXG5cdGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS13cmFwcGVyJyk7XHJcblx0bWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQobWVudUltYWdlKTtcclxuXHJcblx0Ly8gQ3JlYXRpbmcgdGhlIGRlc2NyaXB0aW9uIG9mIGVhY2ggbWVudVxyXG5cdGNvbnN0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnVEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWRlc2NyaXB0aW9uJyk7XHJcblx0bWVudURlc2NyaXB0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8cCBjbGFzcz1cIm1lbnUtbmFtZVwiPk1lbnUgbmFtZTo8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJtZW51LW5hbWVcIj4ke21lbnUuaXRlbU5hbWV9PC9wPlxyXG4gICAgICAgIDxQIGNsYXNzPVwibWVudS1wcmljZVwiPk1lbnUgcHJpY2U6ICR7bWVudS5pdGVtUHJpY2V9PC9QPlxyXG4gICAgYDtcclxuXHJcblx0Ly8gQ3JlYXRpbmcgdGhlIGFjdGlvbiBidXR0b24gb2YgZWFjaCBtZW51XHJcblx0Y29uc3QgbWVudUFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnVBY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1hY3Rpb24nKTtcclxuXHRtZW51QWN0aW9uLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8YnV0dG9uPkJ1eTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24+V2lzaGxpc3Q8L2J1dHRvbj5cclxuICAgIGA7XHJcblxyXG5cdGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XHJcblx0bWVudUl0ZW0uYXBwZW5kKG1lbnVXcmFwcGVyLCBtZW51RGVzY3JpcHRpb24sIG1lbnVBY3Rpb24pO1xyXG5cclxuXHRyZXR1cm4gbWVudUl0ZW07XHJcbn07XHJcbiIsImltcG9ydCBtZW51RGF0YSBmcm9tICcuL21lbnVEYXRhJztcclxuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9jcmVhdGVNZW51JztcclxuXHJcbmNvbnN0IG1lbnVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGVudCcpO1xyXG5cclxuZm9yIChjb25zdCBpdGVtIG9mIG1lbnVEYXRhKSB7XHJcblx0Ly8gY29uc29sZS5sb2coYE5hbWU6ICR7aXRlbS5pdGVtTmFtZX0sIHByaWNlOiAke2l0ZW0uaXRlbVByaWNlfWApO1xyXG5cclxuXHRjb25zdCBtZW51SXRlbSA9IGNyZWF0ZU1lbnUoaXRlbSk7XHJcblx0bWVudUNvbnRlbnQuYXBwZW5kKG1lbnVJdGVtKTtcclxuXHQvLyBjb25zb2xlLmxvZyhtZW51SXRlbSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250ZW50O1xyXG4iLCJpbXBvcnQgYmFycmVuc1RlcXVpbGEgZnJvbSAnLi4vYXNzZXQvaW1nL2JhcnJlbnMtdGVxdWlsYS5wbmcnO1xyXG5pbXBvcnQgYmVhZ2xlQ29va2llIGZyb20gJy4uL2Fzc2V0L2ltZy9iZWFnbGUtY29va2llLnBuZyc7XHJcbmltcG9ydCBjYXB0YWluTW9yZ2Fuc1dpbmUgZnJvbSAnLi4vYXNzZXQvaW1nL2NhcHRhaW4tbW9yZ2Fucy13aW5lLnBuZyc7XHJcbmltcG9ydCBjYXJhdmFuQm94ZWRNZWFsIGZyb20gJy4uL2Fzc2V0L2ltZy9jYXJhdmFuLWJveGVkLW1lYWwucG5nJztcclxuaW1wb3J0IGNoYXJyZWRNZWF0U2tld2VyIGZyb20gJy4uL2Fzc2V0L2ltZy9jaGFycmVkLW1lYXQtc2tld2VyLnBuZyc7XHJcbmltcG9ydCBjb21wcmVzc2VkU3VnYXJDdWJlIGZyb20gJy4uL2Fzc2V0L2ltZy9jb21wcmVzc2VkLXN1Z2FyLWN1YmUucG5nJztcclxuaW1wb3J0IGRyaWVkQ2FjdHVzQ2hpcHMgZnJvbSAnLi4vYXNzZXQvaW1nL2RyaWVkLWNhY3R1cy1jaGlwcy5wbmcnO1xyXG5pbXBvcnQgZHJpZWRZdWNjYUZydWl0IGZyb20gJy4uL2Fzc2V0L2ltZy9kcmllZC15dWNjYS1mcnVpdC5wbmcnO1xyXG5pbXBvcnQgZm9ydGVFbmVyZ3lEcmluayBmcm9tICcuLi9hc3NldC9pbWcvZm9ydGUtZW5lcmd5LWRyaW5rLnBuZyc7XHJcbmltcG9ydCBoYWxmQ2FuT2ZTYW5kd29ybXMgZnJvbSAnLi4vYXNzZXQvaW1nL2hhbGYtY2FuLW9mLXNhbmR3b3Jtcy5wbmcnO1xyXG5pbXBvcnQgaGliaXNjdXNIZWFsdGh5TWVhbCBmcm9tICcuLi9hc3NldC9pbWcvaGliaXNjdXMtaGVhbHRoeS1tZWFsLnBuZyc7XHJcbmltcG9ydCBob3RXYXRlcktldHRsZSBmcm9tICcuLi9hc3NldC9pbWcvaG90LXdhdGVyLWtldHRsZS5wbmcnO1xyXG5pbXBvcnQgcm95YWxMaXF1ZXVyIGZyb20gJy4uL2Fzc2V0L2ltZy9yb3lhbC1saXF1ZXVyLnBuZyc7XHJcbmltcG9ydCB1cnN1c0JpZ0JyZWFkIGZyb20gJy4uL2Fzc2V0L2ltZy91cnN1cy1iaWctYnJlYWQucG5nJztcclxuaW1wb3J0IHZhbmlsbGFTb2RhIGZyb20gJy4uL2Fzc2V0L2ltZy92YW5pbGxhLXNvZGEucG5nJztcclxuaW1wb3J0IHZpY3RvcmlhblJhdGlvbnMgZnJvbSAnLi4vYXNzZXQvaW1nL3ZpY3Rvcmlhbi1yYXRpb25zLnBuZyc7XHJcbmltcG9ydCB3YXRlck9mTGlmZSBmcm9tICcuLi9hc3NldC9pbWcvd2F0ZXItb2YtbGlmZS5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdHtcclxuXHRcdGl0ZW1OYW1lOiAnQmFycmVucyBUZXF1aWxhJyxcclxuXHRcdGl0ZW1QcmljZTogMjQuODcsXHJcblx0XHRpdGVtU291cmNlOiBiYXJyZW5zVGVxdWlsYSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGl0ZW1OYW1lOiBcIkJlYWdsZSdzIENvb2tpZVwiLFxyXG5cdFx0aXRlbVByaWNlOiAxMi4wLFxyXG5cdFx0aXRlbVNvdXJjZTogYmVhZ2xlQ29va2llLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aXRlbU5hbWU6IFwiQ2FwdGFpbiBNb3JnYW4ncyBXaW5lXCIsXHJcblx0XHRpdGVtUHJpY2U6IDE1LjAsXHJcblx0XHRpdGVtU291cmNlOiBjYXB0YWluTW9yZ2Fuc1dpbmUsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0NhcmF2YW4gQm94ZWQgTWVhbCcsXHJcblx0XHRpdGVtUHJpY2U6IDEwLjAsXHJcblx0XHRpdGVtU291cmNlOiBjYXJhdmFuQm94ZWRNZWFsLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aXRlbU5hbWU6ICdDaGFycmVkIE1lYXQgU2tld2VyJyxcclxuXHRcdGl0ZW1QcmljZTogOC4wLFxyXG5cdFx0aXRlbVNvdXJjZTogY2hhcnJlZE1lYXRTa2V3ZXIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0NvbXByZXNzZWQgU3VnYXIgQ3ViZScsXHJcblx0XHRpdGVtUHJpY2U6IDUuMCxcclxuXHRcdGl0ZW1Tb3VyY2U6IGNvbXByZXNzZWRTdWdhckN1YmUsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0RyaWVkIENhY3R1cyBDaGlwcycsXHJcblx0XHRpdGVtUHJpY2U6IDMuMCxcclxuXHRcdGl0ZW1Tb3VyY2U6IGRyaWVkQ2FjdHVzQ2hpcHMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0RyaWVkIFl1Y2NhIEZydWl0JyxcclxuXHRcdGl0ZW1QcmljZTogMi4wLFxyXG5cdFx0aXRlbVNvdXJjZTogZHJpZWRZdWNjYUZydWl0LFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aXRlbU5hbWU6ICdGb3J0ZSBFbmVyZ3kgRHJpbmsnLFxyXG5cdFx0aXRlbVByaWNlOiA2LjAsXHJcblx0XHRpdGVtU291cmNlOiBmb3J0ZUVuZXJneURyaW5rLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aXRlbU5hbWU6ICdIYWxmIENhbiBvZiBTYW5kd29ybXMnLFxyXG5cdFx0aXRlbVByaWNlOiA3LjAsXHJcblx0XHRpdGVtU291cmNlOiBoYWxmQ2FuT2ZTYW5kd29ybXMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0hpYmlzY3VzIEhlYWx0aHkgTWVhbCcsXHJcblx0XHRpdGVtUHJpY2U6IDkuMCxcclxuXHRcdGl0ZW1Tb3VyY2U6IGhpYmlzY3VzSGVhbHRoeU1lYWwsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ0hvdCBXYXRlciBLZXR0bGUnLFxyXG5cdFx0aXRlbVByaWNlOiA0LjAsXHJcblx0XHRpdGVtU291cmNlOiBob3RXYXRlcktldHRsZSxcclxuXHR9LFxyXG5cdHtcclxuXHRcdGl0ZW1OYW1lOiAnUm95YWwgTGlxdWV1cicsXHJcblx0XHRpdGVtUHJpY2U6IDExLjAsXHJcblx0XHRpdGVtU291cmNlOiByb3lhbExpcXVldXIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ1Vyc3VzIEJpZyBCcmVhZCcsXHJcblx0XHRpdGVtUHJpY2U6IDEzLjAsXHJcblx0XHRpdGVtU291cmNlOiB1cnN1c0JpZ0JyZWFkLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0aXRlbU5hbWU6ICdWYW5pbGxhIFNvZGEnLFxyXG5cdFx0aXRlbVByaWNlOiAxNC4wLFxyXG5cdFx0aXRlbVNvdXJjZTogdmFuaWxsYVNvZGEsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ1ZpY3RvcmlhbiBSYXRpb25zJyxcclxuXHRcdGl0ZW1QcmljZTogMTYuMCxcclxuXHRcdGl0ZW1Tb3VyY2U6IHZpY3RvcmlhblJhdGlvbnMsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpdGVtTmFtZTogJ1dhdGVyIG9mIExpZmUnLFxyXG5cdFx0aXRlbVByaWNlOiAxNy4wLFxyXG5cdFx0aXRlbVNvdXJjZTogd2F0ZXJPZkxpZmUsXHJcblx0fSxcclxuXTtcclxuIiwiaW1wb3J0IExvZ28gZnJvbSAnLi4vYXNzZXQvaW1nL3Job2RlLWlzbGFuZC1sb2dvLnBuZyc7XHJcbmltcG9ydCBuYXZJY29uIGZyb20gJy4vbmF2SWNvbnMnO1xyXG5cclxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xyXG5cclxuLy8gTWFpbiBsb2dvXHJcbmNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbm1haW5XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcblxyXG5jb25zdCBtYWluTG9nbyA9IG5ldyBJbWFnZSgpO1xyXG5tYWluTG9nby5zcmMgPSBMb2dvO1xyXG5tYWluTG9nby5hbHQgPSAnUmhvZGUgSXNsYW5kIExvZ28nO1xyXG5tYWluTG9nby5zdHlsZS53aWR0aCA9ICc1cmVtJztcclxuXHJcbmNvbnN0IG1haW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxubWFpblRpdGxlLnRleHRDb250ZW50ID0gXCJUZXJyYSdzIEN1aXNpbmVcIjtcclxuXHJcbm1haW5XcmFwcGVyLmFwcGVuZChtYWluTG9nbywgbWFpblRpdGxlKTtcclxubmF2YmFyLmFwcGVuZENoaWxkKG1haW5XcmFwcGVyKTtcclxuXHJcbi8vIE5hdmJhciBjb21wb25lbnRcclxuY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbm5hdldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbmF2LXdyYXBwZXInKTtcclxuXHJcbmZvciAoY29uc3QgaXRlbSBvZiBuYXZJY29uKSB7XHJcblx0Y29uc3QgbmF2SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblx0bmF2SXRlbS5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpO1xyXG5cdG5hdkl0ZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXYtbGlua1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7aXRlbS5pY29uU291cmNlfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiPjwvaW1nPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdi10ZXh0XCI+JHtpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgIGA7XHJcblxyXG5cdG5hdldyYXBwZXIuYXBwZW5kKG5hdkl0ZW0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuYXZXcmFwcGVyO1xyXG4iLCJpbXBvcnQgaG91c2VTb2xpZCBmcm9tICcuLi9hc3NldC9pbWcvaG91c2Utc29saWQuc3ZnJztcclxuaW1wb3J0IG11Z1NhdWNlclNvbGlkIGZyb20gJy4uL2Fzc2V0L2ltZy9tdWctc2F1Y2VyLXNvbGlkLnN2Zyc7XHJcbmltcG9ydCBjaXJjbGVJbmZvU29saWQgZnJvbSAnLi4vYXNzZXQvaW1nL2NpcmNsZS1pbmZvLXNvbGlkLnN2Zyc7XHJcbmltcG9ydCBnZWFyc1NvbGlkIGZyb20gJy4uL2Fzc2V0L2ltZy9nZWFycy1zb2xpZC5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG5cdHsgbmFtZTogJ0hvbWUnLCBpY29uU291cmNlOiBob3VzZVNvbGlkIH0sXHJcblx0eyBuYW1lOiAnTWVudScsIGljb25Tb3VyY2U6IG11Z1NhdWNlclNvbGlkIH0sXHJcblx0eyBuYW1lOiAnQWJvdXQnLCBpY29uU291cmNlOiBjaXJjbGVJbmZvU29saWQgfSxcclxuXHR7IG5hbWU6ICdTZXR0aW5ncycsIGljb25Tb3VyY2U6IGdlYXJzU29saWQgfSxcclxuXTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgbWVudUNyZWF0aW9uIGZyb20gJy4vbWVudS9tZW51JztcclxuaW1wb3J0IG5hdmlnYXRpb24gZnJvbSAnLi9uYXYvbmF2JztcclxuXHJcbi8vIE5hdmlnYXRpb25cclxuY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmJhcicpO1xyXG5uYXZiYXIuYXBwZW5kQ2hpbGQobmF2aWdhdGlvbik7XHJcblxyXG4vLyBDb250ZW50XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5tYWluLmFwcGVuZENoaWxkKG1lbnVDcmVhdGlvbik7XHJcblxyXG5jb25zb2xlLmxvZygnQWxsIHNldCEnKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9