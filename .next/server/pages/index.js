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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRecipes\", function() { return getRecipes; });\nasync function getRecipes() {\n  const res = await fetch('https://internship-recipe-api.ckpd.co/recipes', {\n    headers: {\n      'X-Api-Key': process.env.API_KEY\n    }\n  });\n  const recipes = await res.json(); // console.log(recipes);\n\n  return recipes;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcmVjaXBlLnRzP2YxMzciXSwibmFtZXMiOlsiZ2V0UmVjaXBlcyIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJBUElfS0VZIiwicmVjaXBlcyIsImpzb24iXSwibWFwcGluZ3MiOiJBQXFDQTtBQUFBO0FBQU8sZUFBZUEsVUFBZixHQUErQztBQUNsRCxRQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLCtDQUFELEVBQWtEO0FBQ3pFQyxXQUFPLEVBQUU7QUFBRSxtQkFBYUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBQTNCO0FBRGdFLEdBQWxELENBQXZCO0FBR0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1OLEdBQUcsQ0FBQ08sSUFBSixFQUF0QixDQUprRCxDQUtsRDs7QUFDQSxTQUFPRCxPQUFQO0FBQ0giLCJmaWxlIjoiLi9saWIvcmVjaXBlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgUmVjaXBlID0ge1xuICAgIC8vIOODrOOCt+ODlElEXG4gICAgaWQ6IG51bWJlcjtcblxuICAgIC8vIOODrOOCt+ODlOWQjVxuICAgIHRpdGxlOiBzdHJpbmc7XG5cbiAgICAvLyDjg6zjgrfjg5TmpoLopoFcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuXG4gICAgLy8g44Os44K344OU55S75YOP44CC55S75YOP44GM44Gq44GE5aC05ZCI44GvIG51bGzjgIJcbiAgICBpbWFnZV91cmw6IHN0cmluZyB8IG51bGw7XG5cbiAgICAvLyDjg6zjgrfjg5TkvZzogIVcbiAgICBhdXRob3I6IHtcbiAgICAgICAgdXNlcl9uYW1lOiBzdHJpbmc7XG4gICAgfTtcblxuICAgIC8vIOODrOOCt+ODlOOCkuWFrOmWi+OBl+OBn+aXpeaZguOAgklTTyA4NjAxXG4gICAgcHVibGlzaGVkX2F0OiBzdHJpbmc7XG5cbiAgICAvLyDjg6zjgrfjg5Tjga7miYvpoIZcbiAgICBzdGVwczogc3RyaW5nW107XG5cbiAgICAvLyDjg6zjgrfjg5Tjga7mnZDmlplcbiAgICBpbmdyZWRpZW50czoge1xuICAgICAgICAvLyDmnZDmlpnlkI1cbiAgICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgICAvLyDliIbph4/vvIgxMDBnIOOBquOBqe+8iVxuICAgICAgICBxdWFudGl0eTogc3RyaW5nO1xuICAgIH1bXTtcblxuICAgIC8vIOmWoumAo+OBmeOCi+ODrOOCt+ODlOOBrklE44GM5pyA5aSnNeOBpOWFpeOBo+OBpuOBhOOCi+OAglBvc3RlciBWaWV3IOOBquOBqeOCkuWun+ijheOBmeOCi+OBruOBq+S9v+OBhuOAglxuICAgIC8vIOOBquOBiuOAgemWoumAo+ODrOOCt+ODlOOBrueul+WHuuOCouODq+OCtOODquOCuuODoOOBruOBp+OBjeOBjOaCquOBhOOBn+OCgemWoumAo+aAp+OBjOS9juOBhOWPr+iDveaAp+OBjOOBguOCi+eCueOBq+azqOaEj+OAglxuICAgIHJlbGF0ZWRfcmVjaXBlczogbnVtYmVyW107XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmVjaXBlcygpOiBQcm9taXNlPFJlY2lwZVtdPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaW50ZXJuc2hpcC1yZWNpcGUtYXBpLmNrcGQuY28vcmVjaXBlcycsIHtcbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi5BUElfS0VZIH1cbiAgICB9KTtcbiAgICBjb25zdCByZWNpcGVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZyhyZWNpcGVzKTtcbiAgICByZXR1cm4gcmVjaXBlcyBhcyBSZWNpcGVbXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/recipe.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_recipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/recipe */ \"./lib/recipe.ts\");\n\nvar _jsxFileName = \"/Users/nimurarikuto/Desktop/workspace/Git/spring-internship-2021-recipe-site/pages/index.tsx\";\n\nconst getStaticProps = async () => {\n  const recipes = await Object(_lib_recipe__WEBPACK_IMPORTED_MODULE_1__[\"getRecipes\"])();\n  console.log(recipes);\n  return {\n    props: {\n      recipes: recipes\n    }\n  };\n};\n\nconst TopPage = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: \"Hello Next!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 12\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInJlY2lwZXMiLCJnZXRSZWNpcGVzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwiVG9wUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBRU8sTUFBTUEsY0FBYyxHQUFHLFlBQVk7QUFDdEMsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLDhEQUFVLEVBQWhDO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0EsU0FBTztBQUNISSxTQUFLLEVBQUU7QUFDUEosYUFBTyxFQUFFQTtBQURGO0FBREosR0FBUDtBQUtILENBUk07O0FBV1AsTUFBTUssT0FBVyxHQUFHLE1BQU07QUFDdEIsc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNILENBRkQ7O0FBSWVBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFJlY2lwZXMgfSBmcm9tIFwiLi4vbGliL3JlY2lwZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVjaXBlcyA9IGF3YWl0IGdldFJlY2lwZXMoKTtcbiAgICBjb25zb2xlLmxvZyhyZWNpcGVzKVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgIHJlY2lwZXM6IHJlY2lwZXMsXG4gICAgICAgIH0sXG4gICAgfTtcbn07XG5cblxuY29uc3QgVG9wUGFnZTogRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuIDxoMT5IZWxsbyBOZXh0ITwvaDE+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wUGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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