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

/***/ "./components/Features/Home/Popular/index.tsx":
/*!****************************************************!*\
  !*** ./components/Features/Home/Popular/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_ProductItem_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../modules/ProductItem/index */ \"./components/modules/ProductItem/index.tsx\");\n\n\n\nfunction Popular(param) {\n    var products = param.products;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section-popular\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                    className: \"section-sub-title\",\n                    children: \"The Best Choice\"\n                }, void 0, false, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"section-title\",\n                    children: \"Popular Courses\"\n                }, void 0, false, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"product-list\",\n                    children: products.map(function(product, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_ProductItem_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, index, false, {\n                            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Popular;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popular);\nvar _c;\n$RefreshReg$(_c, \"Popular\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVzL0hvbWUvUG9wdWxhci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBMEI7QUFHa0M7QUFLNUQsU0FBU0UsT0FBTyxDQUFDLEtBQTBCLEVBQUU7UUFBNUIsUUFBVSxHQUFWLEtBQTBCLENBQXhCQyxRQUFROztJQUN6QixxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsaUJBQWlCO2tCQUNsQyw0RUFBQ0MsS0FBRztZQUFDRCxTQUFTLEVBQUMsV0FBVzs7OEJBQ3hCLDhEQUFDRSxJQUFFO29CQUFDRixTQUFTLEVBQUMsbUJBQW1COzhCQUFDLGlCQUFlOzs7Ozt3QkFBSzs4QkFDdEQsOERBQUNHLElBQUU7b0JBQUNILFNBQVMsRUFBQyxlQUFlOzhCQUFDLGlCQUFlOzs7Ozt3QkFBSzs4QkFDbEQsOERBQUNJLElBQUU7b0JBQUNKLFNBQVMsRUFBQyxjQUFjOzhCQUN6QkYsUUFBUSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLLEVBQUs7d0JBQ2hDLHFCQUNFLDhEQUFDWCxrRUFBVyxNQUFNVyxLQUFLOzs7O2lDQUFJLENBQzNCO3FCQUNILENBQUM7Ozs7O3dCQUNDOzs7Ozs7Z0JBQ0Q7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBaEJRVixLQUFBQSxPQUFPO0FBaUJoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRmVhdHVyZXMvSG9tZS9Qb3B1bGFyL2luZGV4LnRzeD9mZDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi8uLi90eXBlL3R5cGVcIjtcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlcy9Qcm9kdWN0SXRlbS9pbmRleFwiXG50eXBlIFBvcHVsYXJQcm9wcyA9IHtcbiAgcHJvZHVjdHM6IFByb2R1Y3RbXTtcbn07XG5cbmZ1bmN0aW9uIFBvcHVsYXIoeyBwcm9kdWN0cyB9OiBQb3B1bGFyUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzZWN0aW9uLXBvcHVsYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJzZWN0aW9uLXN1Yi10aXRsZVwiPlRoZSBCZXN0IENob2ljZTwvaDY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+UG9wdWxhciBDb3Vyc2VzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInByb2R1Y3QtbGlzdFwiPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdEl0ZW0ga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvZHVjdEl0ZW0iLCJQb3B1bGFyIiwicHJvZHVjdHMiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDYiLCJoMiIsInVsIiwibWFwIiwicHJvZHVjdCIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Features/Home/Popular/index.tsx\n"));

/***/ })

});