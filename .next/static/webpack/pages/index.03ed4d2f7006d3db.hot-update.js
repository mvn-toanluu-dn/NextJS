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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Popular(param) {\n    var products = param.products;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"section-popular\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                        className: \"section-sub-title\",\n                        children: \"The Best Choice\"\n                    }, void 0, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"section-title\",\n                        children: \"Popular Courses\"\n                    }, void 0, false, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"product-list\",\n                children: products.map(function(product, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"product-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"product-image\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: product.image,\n                                    width: 100,\n                                    height: 100\n                                }, void 0, false, {\n                                    fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"product-name\",\n                                children: product.productName\n                            }, void 0, false, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"product-price \".concat(product.salePrice && \"old-price\"),\n                                children: [\n                                    \"\\xa3\\xa0\",\n                                    product.normalPrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, _this),\n                            product.salePrice && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"product-sale\",\n                                children: [\n                                    \"\\xa3\\xa0\",\n                                    product.salePrice\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 39\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 15\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/toan.luu/Desktop/Study/NextJS/NextJS/components/Features/Home/Popular/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Popular;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Popular);\nvar _c;\n$RefreshReg$(_c, \"Popular\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVzL0hvbWUvUG9wdWxhci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQXlCO0FBQ0s7QUFNOUIsU0FBU0UsT0FBTyxDQUFDLEtBQXVCLEVBQUU7UUFBekIsUUFBUyxHQUFULEtBQXVCLENBQXRCQyxRQUFROztJQUV4QixxQkFDRSw4REFBQ0MsU0FBTztRQUFDQyxTQUFTLEVBQUMsaUJBQWlCOzswQkFDaEMsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxXQUFXOztrQ0FDdEIsOERBQUNFLElBQUU7d0JBQUNGLFNBQVMsRUFBQyxtQkFBbUI7a0NBQUMsaUJBQWU7Ozs7OzRCQUFLO2tDQUN0RCw4REFBQ0csSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLGVBQWU7a0NBQUMsaUJBQWU7Ozs7OzRCQUFLOzs7Ozs7b0JBQ2hEOzBCQUNOLDhEQUFDSSxJQUFFO2dCQUFDSixTQUFTLEVBQUMsY0FBYzswQkFDekJGLFFBQVEsQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLE9BQWdCLEVBQUNDLEtBQVksRUFBSztvQkFDL0MscUJBQ0UsOERBQUNDLElBQUU7d0JBQUNSLFNBQVMsRUFBQyxjQUFjOzswQ0FDMUIsOERBQUNDLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyxlQUFlOzBDQUM1Qiw0RUFBQ0osbURBQUs7b0NBQUNhLEdBQUcsRUFBRUgsT0FBTyxDQUFDSSxLQUFLO29DQUFHQyxLQUFLLEVBQUUsR0FBRztvQ0FBRUMsTUFBTSxFQUFFLEdBQUc7Ozs7O3lDQUFHOzs7OztxQ0FDbEQ7MENBQ04sOERBQUNDLElBQUU7Z0NBQUNiLFNBQVMsRUFBQyxjQUFjOzBDQUFFTSxPQUFPLENBQUNRLFdBQVc7Ozs7O3FDQUFNOzBDQUN2RCw4REFBQ0MsTUFBSTtnQ0FBQ2YsU0FBUyxFQUFFLGdCQUFlLENBQW1DLE9BQWpDTSxPQUFPLENBQUNVLFNBQVMsSUFBSyxXQUFTLENBQUc7O29DQUFFLFVBQU87b0NBQUNWLE9BQU8sQ0FBQ1csV0FBVzs7Ozs7O3FDQUFROzRCQUN4R1gsT0FBTyxDQUFDVSxTQUFTLGtCQUFJLDhEQUFDRCxNQUFJO2dDQUFDZixTQUFTLEVBQUMsY0FBYzs7b0NBQUMsVUFBTztvQ0FBQ00sT0FBTyxDQUFDVSxTQUFTOzs7Ozs7cUNBQVE7O3VCQU50RFQsS0FBSzs7Ozs2QkFPbEMsQ0FDTjtpQkFDRixDQUFDOzs7OztvQkFDQzs7Ozs7O1lBQ0MsQ0FFWDtDQUNGO0FBekJRVixLQUFBQSxPQUFPO0FBMEJoQiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZlYXR1cmVzL0hvbWUvUG9wdWxhci9pbmRleC50c3g/ZmQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBlL3R5cGUnO1xudHlwZSBQb3B1bGFyUHJvcHMgPSB7XG4gIHByb2R1Y3RzOiBQcm9kdWN0W10sXG59XG5cbmZ1bmN0aW9uIFBvcHVsYXIoe3Byb2R1Y3RzfTpQb3B1bGFyUHJvcHMpIHtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nc2VjdGlvbi1wb3B1bGFyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdzZWN0aW9uLXN1Yi10aXRsZSc+VGhlIEJlc3QgQ2hvaWNlPC9oNj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPlBvcHVsYXIgQ291cnNlczwvaDI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdwcm9kdWN0LWxpc3QnPlxuICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3Q6IFByb2R1Y3QsaW5kZXg6bnVtYmVyKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdwcm9kdWN0LWl0ZW0nIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9kdWN0LWltYWdlJz5cbiAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2V9ICB3aWR0aD17MTAwfSBoZWlnaHQ9ezEwMH0vPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3Byb2R1Y3QtbmFtZSc+e3Byb2R1Y3QucHJvZHVjdE5hbWV9PC9oNT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Bwcm9kdWN0LXByaWNlICR7cHJvZHVjdC5zYWxlUHJpY2UgJiYgYG9sZC1wcmljZWB9YH0+wqMmbmJzcDt7cHJvZHVjdC5ub3JtYWxQcmljZX08L3NwYW4+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3Quc2FsZVByaWNlICYmIDxzcGFuIGNsYXNzTmFtZT0ncHJvZHVjdC1zYWxlJz7CoyZuYnNwO3twcm9kdWN0LnNhbGVQcmljZX08L3NwYW4+fVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cblxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQb3B1bGFyXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiUG9wdWxhciIsInByb2R1Y3RzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImg2IiwiaDIiLCJ1bCIsIm1hcCIsInByb2R1Y3QiLCJpbmRleCIsImxpIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsImg1IiwicHJvZHVjdE5hbWUiLCJzcGFuIiwic2FsZVByaWNlIiwibm9ybWFsUHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Features/Home/Popular/index.tsx\n"));

/***/ })

});