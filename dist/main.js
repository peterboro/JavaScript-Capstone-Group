/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --primary-color: #22254b;\\r\\n  --secondary-color: #373b69;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: var(--primary-color);\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  padding: 1rem;\\r\\n  display: flex;\\r\\n\\r\\n  /* justify-content: flex-end; */\\r\\n  background-color: var(--secondary-color);\\r\\n}\\r\\n\\r\\n.main {\\r\\n  display: flex;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  border-radius: 0.2px 4px 5px;\\r\\n  background-color: var(--secondary-color);\\r\\n  position: relative;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n.movie img {\\r\\n  width: 100%;\\r\\n  height: 80%;\\r\\n  border-radius: 7px 7px 0 0;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  width: 100%;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(4, 1fr);\\r\\n  padding: 5rem;\\r\\n  letter-spacing: 0.5px;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  margin: 1rem;\\r\\n  background-color: var(--primary-color);\\r\\n  width: 85%;\\r\\n  height: 90%;\\r\\n  border-radius: 7px;\\r\\n}\\r\\n\\r\\n.movie .movie-header {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.movie-info h3 {\\r\\n  margin-top: 0;\\r\\n  color: #fff;\\r\\n  font-size: 90%;\\r\\n}\\r\\n\\r\\n.movie .movie-header i {\\r\\n  margin-top: -1.2rem;\\r\\n  color: rgba(197, 0, 0, 0.411);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btns {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 100%;\\r\\n  z-index: 10;\\r\\n  padding: 0 0.5rem;\\r\\n}\\r\\n\\r\\n.movie button {\\r\\n  background-color: rgba(105, 92, 92, 0.74);\\r\\n  border: none;\\r\\n  padding: 0.2rem 0.5rem;\\r\\n  color: #fff;\\r\\n  border-radius: 7px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  font-size: 80%;\\r\\n  padding: 0.1rem 1rem;\\r\\n  background-color: var(--secondary-color);\\r\\n  color: #fff;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\nfooter span {\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n@media (max-width: 620px) {\\r\\n  .movies {\\r\\n    width: 100%;\\r\\n    border-radius: 0.2px 4px 5px;\\r\\n    background-color: var(--secondary-color);\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n  }\\r\\n\\r\\n  .movie-info {\\r\\n    margin: 1rem;\\r\\n    padding: 0;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    letter-spacing: 0.5px;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .movie {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: var(--primary-color);\\r\\n    width: 90%;\\r\\n    height: 10%;\\r\\n    border-radius: 7px;\\r\\n    margin-bottom: 2rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.comment-popup {\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgba(112, 114, 118, 0.7);\\r\\n\\r\\n  /* background-color: var(--secondary-color); */\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  padding: 20px;\\r\\n  background: rgb(238, 226, 226);\\r\\n\\r\\n  /* background: var(--secondary-color); */\\r\\n  margin: 80px 50px;\\r\\n  border-radius: 10px;\\r\\n}\\r\\n\\r\\n.fa {\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n#close {\\r\\n  float: right;\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\n.display {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  width: 40%;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  gap: 50px;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  width: 85%;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.submit-btn {\\r\\n  width: auto;\\r\\n  font-size: 16px;\\r\\n  letter-spacing: 2px;\\r\\n  font-weight: 400 !important;\\r\\n  background-color: var(--secondary-color);\\r\\n  color: #fff;\\r\\n  padding: 10px;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  list-style: none;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  margin-left: -40px;\\r\\n  padding: 5px 0;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-capstone-group/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_getMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMovies.js */ \"./src/modules/getMovies.js\");\n\n\n\n\n\nconst MAIN_URL = 'https://api.tvmaze.com/shows';\n\n(0,_modules_getMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MAIN_URL);\n\ndocument.addEventListener('click', (e) => {\n  if (e.target.matches('.comment')) {\n    (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_1__.showCommentPopup)(e.target.id);\n  }\n});\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCounter\": () => (/* binding */ getCounter),\n/* harmony export */   \"showCommentPopup\": () => (/* binding */ showCommentPopup)\n/* harmony export */ });\nconst getCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');\n\nconst commentsApiKey = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XAL29eekekrMc3kTORyS/comments';\nconst getComment = async (movieId) => {\n  const response = await fetch(`${commentsApiKey}?item_id=${movieId}`);\n  return response.json();\n};\n\nconst commentPopup = document.querySelector('.comment-popup');\nconst getAllComments = async (movieId) => {\n  const result = await getComment(movieId)\n    .then((comment) => (!comment.error ? comment.length : 0))\n    .catch(() => 0);\n  return result;\n};\n\nconst updateCounter = (movieId) => {\n  getAllComments(movieId).then((totalComment) => {\n    commentPopup.querySelector('.total-comments').innerHTML = totalComment;\n  });\n};\n\nconst commentApiEndpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/XAL29eekekrMc3kTORyS/comments';\nconst movieApi = 'https://api.tvmaze.com/shows';\n\nconst get = (url) => fetch(url)\n  .then((res) => res.json())\n  .then((data) => data)\n  .catch((error) => error);\n\nconst post = (url, params = {}) => fetch(url, {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify(params),\n}).then((res) => res.text())\n  .then((data) => (data.error\n    ? { error: true, info: data }\n    : { error: false, info: data }))\n  .catch((error) => ({ error: true, info: error }));\n\nconst addComment = async (params) => {\n  const response = await post(commentApiEndpoint, params);\n  return response;\n};\n\nconst getMovieData = async (movieId) => {\n  const response = await get(`${movieApi}/${movieId}`);\n  return response;\n};\n\nconst displayComments = (data) => {\n  commentPopup.querySelector('.comments').innerHTML = data;\n};\n\nconst showComments = (movieId) => {\n  getComment(movieId).then((data) => {\n    if (!data.error) {\n      let comments = '';\n      data.forEach((comment) => {\n        comments += `<li class=\"comments-list\">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;\n      });\n      displayComments(comments);\n    } else {\n      displayComments('No comment posted yet.');\n    }\n  });\n};\n\nconst closePopup = () => {\n  document.querySelector('#close').addEventListener('click', () => {\n    commentPopup.style.display = 'none';\n    commentPopup.innerHTML = '';\n    document.body.style.overflow = 'visible';\n  });\n};\n\nconst showCommentPopup = async (movieId) => {\n  await getMovieData(movieId).then((data) => {\n    commentPopup.innerHTML = `<div class=\"popup\">\n    <button id=\"close\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></button>\n    <div class=\"container\">\n        <div class=\"display\">\n          <div class=\"description\">\n            <img src=${data.image.medium} alt=\"Movie image\">\n            <h3 class=\"movie-title\">${data.name}</h3>\n          </div>\n          <div class=\"display-detail\">\n           <ul>\n             <li>${data.summary}</li> \n             <li><strong>Date of Release:</strong> ${data.premiered}</li>\n             <li><strong>Genres:</strong> ${data.genres}</li>                 \n             <li><strong>Rating:</strong> ${data.rating.average}</li>                 \n           </ul>  \n          </div>\n        </div>\n      <div class=\"comment-container\">\n        <div class=\"comment-display\">\n          <h3 class='counter'>Comments(<span class=\"total-comments\">0</span>)</h3>\n          <ul class=\"comments\">\n          </ul>\n        </div>\n        <div class=\"comment\">\n        <div class=\"add-comment\">\n          <h3>Add Comment</h3>\n        </div>\n        <form class=\"form\">\n          <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Provide your Name Please!\" required>\n          <textarea name=\"description\" id=\"description\" cols=\"30\" rows=\"10\"\n              placeholder=\"We'd LOVE to know what you think of the Movie!\" required></textarea>\n          <button id=${movieId} type=\"submit\" class=\"submit-btn\">Comment</button>\n        </form>\n      </div>\n      </div>\n    </div>\n  </div>`;\n    showComments(movieId);\n\n    const form = commentPopup.querySelector('.form');\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      const user = form.elements.name.value;\n      const description = form.elements.description.value;\n      addComment({\n        item_id: movieId,\n        username: user,\n        comment: description,\n      }).then(() => {\n        showComments(movieId);\n        updateCounter(movieId);\n        form.reset();\n      });\n    });\n  });\n  commentPopup.style.display = 'block';\n  closePopup();\n};\n\ndocument.addEventListener('click', async (e) => {\n  if (e.target.matches('.comment')) {\n    showCommentPopup(e.target.id);\n    const comment = await getComment(e.target.id);\n    getCounter(comment);\n    updateCounter(e.target.id);\n  }\n});\n\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst showMovies = (data) => {\n  data.forEach((m) => {\n    const movieEl = document.querySelector('.movie-info');\n    const html = `\n      <div class=\"movie\">\n        <img src='${m.image.medium}' alt=\"image\">\n        <div class=\"movie-header\">\n            <h3>${m.name}</h3>\n            <i class=\"fa-solid fa-heart\"></i>\n        </div>\n        <div class=\"btns\"> \n            <button id=\"${m.id}\" class=\"comment\">Comment</button>\n            <button class=\"reservaton\">Reservation</button>\n        </div>       \n      </div> \n      `;\n    movieEl.insertAdjacentHTML('afterbegin', html);\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);\n\n//# sourceURL=webpack://javascript-capstone-group/./src/modules/displayMovies.js?");

/***/ }),

/***/ "./src/modules/getMovies.js":
/*!**********************************!*\
  !*** ./src/modules/getMovies.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _displayMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMovies.js */ \"./src/modules/displayMovies.js\");\n\n\nconst getMovies = (url) => {\n  fetch(url)\n    .then((response) => response.json())\n    .then((json) => (0,_displayMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(json.filter((movie) => movie.id <= 30)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovies);\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/modules/getMovies.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;