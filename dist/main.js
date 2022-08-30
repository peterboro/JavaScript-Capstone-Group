/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("//import './style.css';\n\nconst MAIN_URL = ' https://api.tvmaze.com/shows ';\n\n\n\nconst getMovies = (url) => {\n  fetch(url).then(res => res.json()).then(data => {\n    showMovies(data.results);\n  })\n}\n\ngetMovies(MAIN_URL);\n\n// const getMovies = async () => {\n//   const showMovies = await fetch('https://api.tvmaze.com/shows?page=1');\n//   const data = await showMovies.json();\n//   return data;\n// }\n\nconst showMovies = (data) => {\n  data.forEach(movie => {\n    const movieEl = document.querySelector('.movie-info'); \n    movieEl.innerHTML = `\n    <img src=\"\" alt=\"image\">\n    <div class=\"movie-info\">\n      <h3> Movie Titlees</h3>\n    </div>\n    `\n    \n  });\n}\n\n\n//# sourceURL=webpack://javascript-capstone-group/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;