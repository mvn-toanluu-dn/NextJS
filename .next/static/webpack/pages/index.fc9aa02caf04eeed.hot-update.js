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

/***/ "./Features/Home/index.tsx":
/*!*********************************!*\
  !*** ./Features/Home/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Intro_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Intro/index */ \"./Features/Home/Intro/index.tsx\");\n/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/index */ \"./Features/Home/services/index.tsx\");\n/* harmony import */ var _Popular_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popular/index */ \"./Features/Home/Popular/index.tsx\");\n\n\n\n\n\nfunction HomePage(param) {\n    var products = param.products;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"page-home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Intro_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/Features/Home/index.tsx\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_services_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/Features/Home/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Popular_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                products: products\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/Features/Home/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/Features/Home/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9GZWF0dXJlcy9Ib21lL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ1M7QUFDTTtBQUNGO0FBR3ZCLFNBQVNJLFFBQVEsQ0FBQyxLQUFvQixFQUFjO1FBQWxDLFFBQVMsR0FBVCxLQUFvQixDQUFuQkMsUUFBUTtJQUN4QyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3RCLDhEQUFDTixvREFBSzs7OztvQkFBRzswQkFDVCw4REFBQ0MsdURBQVE7Ozs7b0JBQUc7MEJBQ1osOERBQUNDLHNEQUFPO2dCQUFDRSxRQUFRLEVBQUVBLFFBQVE7Ozs7O29CQUFJOzs7Ozs7WUFDN0IsQ0FDUDtDQUNGO0FBUnVCRCxLQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0ZlYXR1cmVzL0hvbWUvaW5kZXgudHN4PzUwN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEludHJvIGZyb20gJy4vSW50cm8vaW5kZXgnO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IFBvcHVsYXIgZnJvbSAnLi9Qb3B1bGFyL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi90eXBlL3R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7cHJvZHVjdHN9OkhvbWVQcm9wcyk6SlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlLWhvbWUnPlxuICAgICAgICA8SW50cm8gLz5cbiAgICAgICAgPFNlcnZpY2VzIC8+XG4gICAgICAgIDxQb3B1bGFyIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnRybyIsIlNlcnZpY2VzIiwiUG9wdWxhciIsIkhvbWVQYWdlIiwicHJvZHVjdHMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Features/Home/index.tsx\n"));

/***/ })

});