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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Box = function() {\n    _s();\n    var cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function(state, delta) {\n        cube.current.rotation.x += 0.01;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: cube,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"boxGeometry\", {\n                args: [\n                    2,\n                    2,\n                    2\n                ]\n            }, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {}, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, _this);\n};\n_s(Box, \"YkLFuyecDwjSJ7VnkUqlCnRKAg8=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Box;\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().canvas),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.Canvas, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.1\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    color: \"red\",\n                    position: [\n                        0,\n                        0,\n                        5\n                    ]\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Box, {}, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 7\n    }, _this);\n};\n_c1 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c, _c1;\n$RefreshReg$(_c, \"Box\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQ3NEO0FBQ1A7QUFDaEI7O0FBRS9CLElBQU1JLEdBQUcsR0FBYSxXQUFNOztJQUN6QixJQUFNQyxJQUFJLEdBQUdGLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRXpCRiw0REFBUSxDQUFDLFNBQUNLLEtBQUssRUFBRUMsS0FBSyxFQUFLO1FBQ3hCRixJQUFJLENBQUNHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQ2xDLENBQUMsQ0FBQztJQUVILHFCQUNHLDhEQUFDQyxNQUFJO1FBQUNDLEdBQUcsRUFBRVAsSUFBSTs7MEJBQ1osOERBQUNRLGFBQVc7Z0JBQUNDLElBQUksRUFBRTtBQUFDLHFCQUFDO0FBQUUscUJBQUM7QUFBRSxxQkFBQztpQkFBQzs7Ozs7cUJBQUk7MEJBQ2hDLDhEQUFDQyxzQkFBb0I7Ozs7cUJBQUc7Ozs7OzthQUNwQixDQUNSO0NBQ0o7R0FiS1gsR0FBRzs7UUFHTkgsd0RBQVE7OztBQUhMRyxLQUFBQSxHQUFHO0FBZVQsSUFBTVksSUFBSSxHQUFhLFdBQU07SUFFMUIscUJBQ0csOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFaEIsd0VBQWE7a0JBQzFCLDRFQUFDRixzREFBTTs7OEJBQ0osOERBQUNvQixjQUFZO29CQUFDQyxTQUFTLEVBQUUsR0FBRzs7Ozs7eUJBQUk7OEJBQ2hDLDhEQUFDQyxrQkFBZ0I7b0JBQUNDLEtBQUssRUFBQyxLQUFLO29CQUFDQyxRQUFRLEVBQUU7QUFBQyx5QkFBQztBQUFFLHlCQUFDO0FBQUUseUJBQUM7cUJBQUM7Ozs7O3lCQUFJOzhCQUNyRCw4REFBQ3BCLEdBQUc7Ozs7eUJBQUc7Ozs7OztpQkFDRDs7Ozs7YUFDTixDQUNQO0NBQ0o7QUFYS1ksTUFBQUEsSUFBSTtBQWFWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBDYW52YXMsIHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJveDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICBjb25zdCBjdWJlID0gdXNlUmVmKG51bGwpO1xuXG4gICB1c2VGcmFtZSgoc3RhdGUsIGRlbHRhKSA9PiB7XG4gICAgICBjdWJlLmN1cnJlbnQucm90YXRpb24ueCArPSAwLjAxO1xuICAgfSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8bWVzaCByZWY9e2N1YmV9ID5cbiAgICAgICAgIDxib3hHZW9tZXRyeSBhcmdzPXtbMiwgMiwgMl19IC8+XG4gICAgICAgICA8bWVzaFN0YW5kYXJkTWF0ZXJpYWwgLz5cbiAgICAgIDwvbWVzaD5cbiAgICk7XG59O1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblxuICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzfT5cbiAgICAgICAgIDxDYW52YXM+XG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC4xfSAvPlxuICAgICAgICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgY29sb3I9J3JlZCcgcG9zaXRpb249e1swLCAwLCA1XX0gLz5cbiAgICAgICAgICAgIDxCb3ggLz5cbiAgICAgICAgIDwvQ2FudmFzPlxuICAgICAgPC9kaXY+XG4gICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJDYW52YXMiLCJ1c2VGcmFtZSIsInN0eWxlcyIsInVzZVJlZiIsIkJveCIsImN1YmUiLCJzdGF0ZSIsImRlbHRhIiwiY3VycmVudCIsInJvdGF0aW9uIiwieCIsIm1lc2giLCJyZWYiLCJib3hHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsIkhvbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJjYW52YXMiLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY29sb3IiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});