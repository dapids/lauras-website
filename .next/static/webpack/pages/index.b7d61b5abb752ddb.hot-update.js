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

/***/ "./components/Footer/index.tsx":
/*!*************************************!*\
  !*** ./components/Footer/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ \"./components/Link/index.ts\");\n/* harmony import */ var components_Typography_Caption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Typography/Caption */ \"./components/Typography/Caption/index.ts\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Footer__Wrapper\",\n    componentId: \"sc-b761521f-0\"\n})([\n    \"border-top:2px dashed #e6e6e6;margin-top:32px;padding:32px 48px 16px;text-align:center;\"\n]);\n_c = Wrapper;\nconst Footer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Typography_Caption__WEBPACK_IMPORTED_MODULE_2__.Caption, {\n            as: \"span\",\n            weight: \"400\",\n            children: [\n                \"This website was backed with ❤️ by\",\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Link__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                    href: \"//davidsorrentino.com\",\n                    children: \"Dapids\"\n                }, void 0, false, {\n                    fileName: \"/Users/dapids/Dev/personal/lauras-website/components/Footer/index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                \".\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dapids/Dev/personal/lauras-website/components/Footer/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dapids/Dev/personal/lauras-website/components/Footer/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzQztBQUNpQjtBQUNqQjtBQUV0QyxNQUFNRyxVQUFVRCw2REFBVTs7Ozs7O0tBQXBCQztBQU9DLE1BQU1FLFNBQVMsa0JBQ3BCLDhEQUFDRjtrQkFDQyw0RUFBQ0Ysa0VBQU9BO1lBQUNLLElBQUc7WUFBT0MsUUFBTzs7Z0JBQU07Z0JBRTdCOzhCQUNELDhEQUFDUCxpREFBSUE7b0JBQUNRLE1BQUs7OEJBQXdCOzs7Ozs7Z0JBQWE7Ozs7Ozs7Ozs7O2tCQUlyRDtNQVRZSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3g/YjUyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgQ2FwdGlvbiB9IGZyb20gJ2NvbXBvbmVudHMvVHlwb2dyYXBoeS9DYXB0aW9uJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2U2ZTZlNjtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgcGFkZGluZzogMzJweCA0OHB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmBcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPFdyYXBwZXI+XG4gICAgPENhcHRpb24gYXM9XCJzcGFuXCIgd2VpZ2h0PVwiNDAwXCI+XG4gICAgICBUaGlzIHdlYnNpdGUgd2FzIGJhY2tlZCB3aXRoIOKdpO+4jyBieVxuICAgICAgeycgJ31cbiAgICAgIDxMaW5rIGhyZWY9Jy8vZGF2aWRzb3JyZW50aW5vLmNvbSc+RGFwaWRzPC9MaW5rPlxuICAgICAgLlxuICAgIDwvQ2FwdGlvbj5cbiAgPC9XcmFwcGVyPlxuKVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJDYXB0aW9uIiwic3R5bGVkIiwiV3JhcHBlciIsImRpdiIsIkZvb3RlciIsImFzIiwid2VpZ2h0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Footer/index.tsx\n"));

/***/ })

});