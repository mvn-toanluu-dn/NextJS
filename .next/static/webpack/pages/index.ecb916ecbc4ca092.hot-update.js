"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modules/CountUp/index.tsx":
/*!**********************************************!*\
  !*** ./components/modules/CountUp/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar CountUpItem = function(countup) {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var valueDisplays = document.querySelectorAll(\".intro-count-number-up\");\n        var interval = 2000;\n        valueDisplays.forEach(function(valueDisplays) {\n            var startValue = 0;\n            var endValue = parseInt(valueDisplays.getAttribute(\"data-val\"));\n            var duration = Math.floor(interval / endValue);\n            var counter = setInterval(function() {\n                startValue += 1;\n                valueDisplays.textContent = startValue;\n                if (startValue == endValue) {\n                    clearInterval(counter);\n                }\n            }, duration);\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"choice-count-up flex col-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"choice-count-number\",\n                children: countup.countNumber\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/modules/CountUp/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"choice-count-title\",\n                children: countup.title\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/modules/CountUp/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/modules/CountUp/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_s(CountUpItem, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = CountUpItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountUpItem);\nvar _c;\n$RefreshReg$(_c, \"CountUpItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZHVsZXMvQ291bnRVcC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQXlDO0FBRXpDLElBQU1FLFdBQVcsR0FBRyxTQUFDQyxPQUFnQixFQUFLOztJQUN0Q0YsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1osSUFBSUcsYUFBYSxHQUFRQyxRQUFRLENBQUNDLGdCQUFnQixDQUNoRCx3QkFBd0IsQ0FDekI7UUFDRCxJQUFJQyxRQUFRLEdBQUcsSUFBSTtRQUVuQkgsYUFBYSxDQUFDSSxPQUFPLENBQ25CLFNBQUNKLGFBR0EsRUFBSztZQUNKLElBQUlLLFVBQVUsR0FBRyxDQUFDO1lBQ2xCLElBQUlDLFFBQVEsR0FBR0MsUUFBUSxDQUFDUCxhQUFhLENBQUNRLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMvRCxJQUFJQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDUixRQUFRLEdBQUdHLFFBQVEsQ0FBQztZQUM5QyxJQUFJTSxPQUFPLEdBQUdDLFdBQVcsQ0FBQyxXQUFZO2dCQUNwQ1IsVUFBVSxJQUFJLENBQUMsQ0FBQztnQkFDaEJMLGFBQWEsQ0FBQ2MsV0FBVyxHQUFHVCxVQUFVLENBQUM7Z0JBQ3ZDLElBQUlBLFVBQVUsSUFBSUMsUUFBUSxFQUFFO29CQUMxQlMsYUFBYSxDQUFDSCxPQUFPLENBQUMsQ0FBQztpQkFDeEI7YUFDRixFQUFFSCxRQUFRLENBQUM7U0FDYixDQUNGLENBQUM7S0FDSCxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ08sSUFBRTtRQUFDQyxTQUFTLEVBQUMsNEJBQTRCOzswQkFDeEMsOERBQUNDLE1BQUk7Z0JBQUNELFNBQVMsRUFBQyxxQkFBcUI7MEJBQUVsQixPQUFPLENBQUNvQixXQUFXOzs7OztxQkFBUTswQkFDbEUsOERBQUNDLElBQUU7Z0JBQUNILFNBQVMsRUFBQyxvQkFBb0I7MEJBQUVsQixPQUFPLENBQUNzQixLQUFLOzs7OztxQkFBTTs7Ozs7O2FBQ3BELENBQ0w7Q0FDSDtHQS9CS3ZCLFdBQVc7QUFBWEEsS0FBQUEsV0FBVztBQWlDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZHVsZXMvQ291bnRVcC9pbmRleC50c3g/NDRlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb3VudFVwIH0gZnJvbSBcIi4uLy4uLy4uL3R5cGUvdHlwZVwiO1xuY29uc3QgQ291bnRVcEl0ZW0gPSAoY291bnR1cDogQ291bnRVcCkgPT4ge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCB2YWx1ZURpc3BsYXlzOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgIFwiLmludHJvLWNvdW50LW51bWJlci11cFwiXG4gICAgICAgICk7XG4gICAgICAgIGxldCBpbnRlcnZhbCA9IDIwMDA7XG4gICAgXG4gICAgICAgIHZhbHVlRGlzcGxheXMuZm9yRWFjaChcbiAgICAgICAgICAodmFsdWVEaXNwbGF5czoge1xuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IG51bWJlcjtcbiAgICAgICAgICAgIGdldEF0dHJpYnV0ZTogKGFyZzA6IHN0cmluZykgPT4gc3RyaW5nO1xuICAgICAgICAgIH0pID0+IHtcbiAgICAgICAgICAgIGxldCBzdGFydFZhbHVlID0gMDtcbiAgICAgICAgICAgIGxldCBlbmRWYWx1ZSA9IHBhcnNlSW50KHZhbHVlRGlzcGxheXMuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWxcIikpO1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIGVuZFZhbHVlKTtcbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBzdGFydFZhbHVlICs9IDE7XG4gICAgICAgICAgICAgIHZhbHVlRGlzcGxheXMudGV4dENvbnRlbnQgPSBzdGFydFZhbHVlO1xuICAgICAgICAgICAgICBpZiAoc3RhcnRWYWx1ZSA9PSBlbmRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY291bnRlcik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPVwiY2hvaWNlLWNvdW50LXVwIGZsZXggY29sLTRcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNob2ljZS1jb3VudC1udW1iZXJcIj57Y291bnR1cC5jb3VudE51bWJlcn08L3NwYW4+XG4gICAgICA8aDQgY2xhc3NOYW1lPVwiY2hvaWNlLWNvdW50LXRpdGxlXCI+e2NvdW50dXAudGl0bGV9PC9oND5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ291bnRVcEl0ZW07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJDb3VudFVwSXRlbSIsImNvdW50dXAiLCJ2YWx1ZURpc3BsYXlzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW50ZXJ2YWwiLCJmb3JFYWNoIiwic3RhcnRWYWx1ZSIsImVuZFZhbHVlIiwicGFyc2VJbnQiLCJnZXRBdHRyaWJ1dGUiLCJkdXJhdGlvbiIsIk1hdGgiLCJmbG9vciIsImNvdW50ZXIiLCJzZXRJbnRlcnZhbCIsInRleHRDb250ZW50IiwiY2xlYXJJbnRlcnZhbCIsImxpIiwiY2xhc3NOYW1lIiwic3BhbiIsImNvdW50TnVtYmVyIiwiaDQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/modules/CountUp/index.tsx\n"));

/***/ })

});