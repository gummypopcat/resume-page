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

/***/ "./src/modules/graphics/Cube/index.tsx":
/*!*********************************************!*\
  !*** ./src/modules/graphics/Cube/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Cube = function() {\n    _s();\n    var cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function(state, delta) {\n        cube.current.rotation.x += 0.01;\n        cube.current.rotation.y += 0.015;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        position: [\n            3,\n            0,\n            0\n        ],\n        ref: cube,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                args: [\n                    1,\n                    1,\n                    1\n                ]\n            }, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {}, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, _this);\n};\n_s(Cube, \"YkLFuyecDwjSJ7VnkUqlCnRKAg8=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ncmFwaGljcy9DdWJlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDK0I7QUFDZTs7QUFFOUMsSUFBTUUsSUFBSSxHQUFhLFdBQU07O0lBQzFCLElBQU1DLElBQUksR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFekJDLDREQUFRLENBQUMsU0FBQ0csS0FBSyxFQUFFQyxLQUFLLEVBQUs7UUFDeEJGLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxRQUFRLENBQUNDLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDaENMLElBQUksQ0FBQ0csT0FBTyxDQUFDQyxRQUFRLENBQUNFLENBQUMsSUFBSSxLQUFLLENBQUM7S0FDbkMsQ0FBQyxDQUFDO0lBRUgscUJBQ0csOERBQUNDLE1BQUk7UUFBQ0MsUUFBUSxFQUFFO0FBQUMsYUFBQztBQUFFLGFBQUM7QUFBRSxhQUFDO1NBQUM7UUFBRUMsR0FBRyxFQUFFVCxJQUFJOzswQkFDakMsOERBQUNVLGFBQVc7Z0JBQUNDLElBQUksRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQzs7Ozs7cUJBQUk7MEJBQ2hDLDhEQUFDQyxzQkFBb0I7Ozs7cUJBQUc7Ozs7OzthQUNwQixDQUNSO0NBQ0o7R0FkS2IsSUFBSTs7UUFHUEQsd0RBQVE7OztBQUhMQyxLQUFBQSxJQUFJO0FBZ0JWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21vZHVsZXMvZ3JhcGhpY3MvQ3ViZS9pbmRleC50c3g/NzdlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRnJhbWUgfSBmcm9tICdAcmVhY3QtdGhyZWUvZmliZXInO1xuXG5jb25zdCBDdWJlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgIGNvbnN0IGN1YmUgPSB1c2VSZWYobnVsbCk7XG5cbiAgIHVzZUZyYW1lKChzdGF0ZSwgZGVsdGEpID0+IHtcbiAgICAgIGN1YmUuY3VycmVudC5yb3RhdGlvbi54ICs9IDAuMDE7XG4gICAgICBjdWJlLmN1cnJlbnQucm90YXRpb24ueSArPSAwLjAxNTtcbiAgIH0pO1xuXG4gICByZXR1cm4gKFxuICAgICAgPG1lc2ggcG9zaXRpb249e1szLCAwLCAwXX0gcmVmPXtjdWJlfSA+XG4gICAgICAgICA8Ym94R2VvbWV0cnkgYXJncz17WzEsIDEsIDFdfSAvPlxuICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIC8+XG4gICAgICA8L21lc2g+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3ViZTtcbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VGcmFtZSIsIkN1YmUiLCJjdWJlIiwic3RhdGUiLCJkZWx0YSIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIngiLCJ5IiwibWVzaCIsInBvc2l0aW9uIiwicmVmIiwiYm94R2VvbWV0cnkiLCJhcmdzIiwibWVzaFN0YW5kYXJkTWF0ZXJpYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/graphics/Cube/index.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modules_graphics_Cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/graphics/Cube */ \"./src/modules/graphics/Cube/index.tsx\");\nvar _this = undefined;\n\n\n\n\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_2___default().canvas),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.Canvas, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.4\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    color: \"blue\",\n                    position: [\n                        1,\n                        3,\n                        1\n                    ]\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_graphics_Cube__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n            lineNumber: 9,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 7\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDNEM7QUFDRztBQUNKO0FBRTNDLElBQU1HLElBQUksR0FBYSxXQUFNO0lBQzFCLHFCQUNHLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRUosd0VBQWE7a0JBQzFCLDRFQUFDRCxzREFBTTs7OEJBQ0osOERBQUNPLGNBQVk7b0JBQUNDLFNBQVMsRUFBRSxHQUFHOzs7Ozt5QkFBSTs4QkFDaEMsOERBQUNDLGtCQUFnQjtvQkFBQ0MsS0FBSyxFQUFDLE1BQU07b0JBQUNDLFFBQVEsRUFBRTtBQUFDLHlCQUFDO0FBQUUseUJBQUM7QUFBRSx5QkFBQztxQkFBQzs7Ozs7eUJBQUk7OEJBQ3RELDhEQUFDVCw4REFBSTs7Ozt5QkFBRzs7Ozs7O2lCQUNGOzs7OzthQUNOLENBQ1A7Q0FDSjtBQVZLQyxLQUFBQSxJQUFJO0FBWVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IENhbnZhcyB9IGZyb20gJ0ByZWFjdC10aHJlZS9maWJlcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJ0Avc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEN1YmUgZnJvbSAnQC9tb2R1bGVzL2dyYXBoaWNzL0N1YmUnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc30+XG4gICAgICAgICA8Q2FudmFzPlxuICAgICAgICAgICAgPGFtYmllbnRMaWdodCBpbnRlbnNpdHk9ezAuNH0gLz5cbiAgICAgICAgICAgIDxkaXJlY3Rpb25hbExpZ2h0IGNvbG9yPSdibHVlJyBwb3NpdGlvbj17WzEsIDMsIDFdfSAvPlxuICAgICAgICAgICAgPEN1YmUgLz5cbiAgICAgICAgIDwvQ2FudmFzPlxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJzdHlsZXMiLCJDdWJlIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNhbnZhcyIsImFtYmllbnRMaWdodCIsImludGVuc2l0eSIsImRpcmVjdGlvbmFsTGlnaHQiLCJjb2xvciIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});