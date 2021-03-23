module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/recipe.ts":
/*!***********************!*\
  !*** ./lib/recipe.ts ***!
  \***********************/
/*! exports provided: getRecipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecipes\", function() { return getRecipes; });\nasync function getRecipes() {\n  const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {\n    headers: {\n      'X-Api-Key': process.env.API_KEY\n    }\n  });\n  const recipes = await res.json();\n  return recipes.recipes;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVjaXBlLnRzP2YxMzciXSwibmFtZXMiOlsiZ2V0UmVjaXBlcyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwicmVjaXBlcyIsImpzb24iXSwibWFwcGluZ3MiOiJBQXFDQTtBQUFBO0FBQU8sZUFBZUEsVUFBZixHQUErQztBQUNsRCxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLCtDQUFELEVBQWtEO0FBQ3pFQyxXQUFPLEVBQUU7QUFBRSxtQkFBYUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQTNCO0FBRGdFLEdBQWxELENBQXZCO0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLEdBQUcsQ0FBQ08sSUFBSixFQUF0QjtBQUNBLFNBQU9ELE9BQU8sQ0FBQ0EsT0FBZjtBQUNIIiwiZmlsZSI6Ii4vbGliL3JlY2lwZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFJlY2lwZSA9IHtcbiAgICAvLyDjg6zjgrfjg5RJRFxuICAgIGlkOiBudW1iZXI7XG5cbiAgICAvLyDjg6zjgrfjg5TlkI1cbiAgICB0aXRsZTogc3RyaW5nO1xuXG4gICAgLy8g44Os44K344OU5qaC6KaBXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIC8vIOODrOOCt+ODlOeUu+WDj+OAgueUu+WDj+OBjOOBquOBhOWgtOWQiOOBryBudWxs44CCXG4gICAgaW1hZ2VfdXJsOiBzdHJpbmcgfCBudWxsO1xuXG4gICAgLy8g44Os44K344OU5L2c6ICFXG4gICAgYXV0aG9yOiB7XG4gICAgICAgIHVzZXJfbmFtZTogc3RyaW5nO1xuICAgIH07XG5cbiAgICAvLyDjg6zjgrfjg5TjgpLlhazplovjgZfjgZ/ml6XmmYLjgIJJU08gODYwMVxuICAgIHB1Ymxpc2hlZF9hdDogc3RyaW5nO1xuXG4gICAgLy8g44Os44K344OU44Gu5omL6aCGXG4gICAgc3RlcHM6IHN0cmluZ1tdO1xuXG4gICAgLy8g44Os44K344OU44Gu5p2Q5paZXG4gICAgaW5ncmVkaWVudHM6IHtcbiAgICAgICAgLy8g5p2Q5paZ5ZCNXG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgLy8g5YiG6YeP77yIMTAwZyDjgarjganvvIlcbiAgICAgICAgcXVhbnRpdHk6IHN0cmluZztcbiAgICB9W107XG5cbiAgICAvLyDplqLpgKPjgZnjgovjg6zjgrfjg5Tjga5JROOBjOacgOWkpzXjgaTlhaXjgaPjgabjgYTjgovjgIJQb3N0ZXIgVmlldyDjgarjganjgpLlrp/oo4XjgZnjgovjga7jgavkvb/jgYbjgIJcbiAgICAvLyDjgarjgYrjgIHplqLpgKPjg6zjgrfjg5Tjga7nrpflh7rjgqLjg6vjgrTjg6rjgrrjg6Djga7jgafjgY3jgYzmgqrjgYTjgZ/jgoHplqLpgKPmgKfjgYzkvY7jgYTlj6/og73mgKfjgYzjgYLjgovngrnjgavms6jmhI/jgIJcbiAgICByZWxhdGVkX3JlY2lwZXM6IG51bWJlcltdO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2lwZXMoKTogUHJvbWlzZTxSZWNpcGVbXT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2ludGVybnNoaXAtcmVjaXBlLWFwaS5ja3BkLmNvL3JlY2lwZXMnLCB7XG4gICAgaGVhZGVyczogeyAnWC1BcGktS2V5JzogcHJvY2Vzcy5lbnYuQVBJX0tFWSBhcyBzdHJpbmcgfVxuICAgIH0pO1xuICAgIGNvbnN0IHJlY2lwZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiByZWNpcGVzLnJlY2lwZXMgYXMgUmVjaXBlW107XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/recipe.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/recipe */ \"./lib/recipe.ts\");\n\nvar _jsxFileName = \"/Users/nimurarikuto/Desktop/workspace/Git/spring-internship-2021-recipe-site/pages/index.tsx\";\n\n\nconst TopPage = props => {\n  const {\n    recipes\n  } = props;\n  console.log(recipes);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"\\u30EC\\u30B7\\u30D4\\u30B5\\u30A4\\u30C8\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: recipes.map((recipe, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: recipe.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: recipe.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, undefined)]\n      }, index, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, undefined);\n};\n\nconst getStaticProps = async () => {\n  const recipes = await Object(_lib_recipe__WEBPACK_IMPORTED_MODULE_1__[\"getRecipes\"])();\n  console.log(recipes);\n  return {\n    props: {\n      recipes: recipes\n    }\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJUb3BQYWdlIiwicHJvcHMiLCJyZWNpcGVzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInJlY2lwZSIsImluZGV4IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldFN0YXRpY1Byb3BzIiwiZ2V0UmVjaXBlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQU9BLE1BQU1BLE9BQWtCLEdBQUlDLEtBQUQsSUFBVztBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBY0QsS0FBcEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFDQ0EsT0FBTyxDQUFDRyxHQUFSLENBQVksQ0FBQ0MsTUFBRCxFQUFRQyxLQUFSLGtCQUNUO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBS0QsTUFBTSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG9CQUFJRixNQUFNLENBQUNHO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBLFNBQVNGLEtBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESDtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFhSCxDQWhCRDs7QUFrQk8sTUFBTUcsY0FBYyxHQUFHLFlBQVk7QUFDdEMsUUFBTVIsT0FBTyxHQUFHLE1BQU1TLDhEQUFVLEVBQWhDO0FBQ0FSLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0EsU0FBTztBQUNIRCxTQUFLLEVBQUU7QUFDUEMsYUFBTyxFQUFFQTtBQURGO0FBREosR0FBUDtBQUtILENBUk07QUFVUUYsc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ2V0UmVjaXBlcyB9IGZyb20gJy4uL2xpYi9yZWNpcGUnO1xuaW1wb3J0IHR5cGUgeyBSZWNpcGUgfSBmcm9tICcuLi9saWIvcmVjaXBlJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIHJlY2lwZXM6IFJlY2lwZVtdO1xufVxuXG5jb25zdCBUb3BQYWdlOiBGQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHJlY2lwZXMgfSA9IHByb3BzO1xuICAgIGNvbnNvbGUubG9nKHJlY2lwZXMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT7jg6zjgrfjg5TjgrXjgqTjg4g8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3JlY2lwZXMubWFwKChyZWNpcGUsaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj57cmVjaXBlLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyZWNpcGUuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgZ2V0UmVjaXBlcygpO1xuICAgIGNvbnNvbGUubG9nKHJlY2lwZXMpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgcmVjaXBlczogcmVjaXBlcyxcbiAgICAgICAgfSxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });