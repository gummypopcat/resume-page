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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar Cube = function() {\n    _s();\n    var cube = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(function() {\n        cube.current.rotation.x += 0.01;\n        cube.current.rotation.y += 0.015;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        position: [\n            1,\n            1,\n            -16\n        ],\n        ref: cube,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"torusGeometry\", {\n                args: [\n                    10,\n                    3,\n                    16,\n                    100\n                ]\n            }, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 10\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meshStandardMaterial\", {\n                color: \"#ffaa22\"\n            }, void 0, false, {\n                fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 10\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/modules/graphics/Cube/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 7\n    }, _this);\n};\n_s(Cube, \"YkLFuyecDwjSJ7VnkUqlCnRKAg8=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame\n    ];\n});\n_c = Cube;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Cube);\nvar _c;\n$RefreshReg$(_c, \"Cube\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9ncmFwaGljcy9DdWJlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDK0I7QUFDZTs7QUFFOUMsSUFBTUUsSUFBSSxHQUFhLFdBQU07O0lBQzFCLElBQU1DLElBQUksR0FBR0gsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFFekJDLDREQUFRLENBQUMsV0FBTTtRQUNaRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxDQUFDLElBQUksSUFBSSxDQUFDO1FBQ2hDSCxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRSxDQUFDLElBQUksS0FBSyxDQUFDO0tBQ25DLENBQUMsQ0FBQztJQUVILHFCQUNHLDhEQUFDQyxNQUFJO1FBQUNDLFFBQVEsRUFBRTtBQUFDLGFBQUM7QUFBRSxhQUFDO1lBQUUsQ0FBQyxFQUFFO1NBQUM7UUFBRUMsR0FBRyxFQUFFUCxJQUFJOzswQkFDbkMsOERBQUNRLGVBQWE7Z0JBQUNDLElBQUksRUFBRTtBQUFDLHNCQUFFO0FBQUUscUJBQUM7QUFBRSxzQkFBRTtBQUFFLHVCQUFHO2lCQUFDOzs7OztxQkFBSTswQkFDekMsOERBQUNDLHNCQUFvQjtnQkFBQ0MsS0FBSyxFQUFDLFNBQVM7Ozs7O3FCQUFHOzs7Ozs7YUFDcEMsQ0FDUjtDQUNKO0dBZEtaLElBQUk7O1FBR1BELHdEQUFROzs7QUFITEMsS0FBQUEsSUFBSTtBQWdCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9tb2R1bGVzL2dyYXBoaWNzL0N1YmUvaW5kZXgudHN4Pzc3ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZyYW1lIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcblxuY29uc3QgQ3ViZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICBjb25zdCBjdWJlID0gdXNlUmVmKG51bGwpO1xuXG4gICB1c2VGcmFtZSgoKSA9PiB7XG4gICAgICBjdWJlLmN1cnJlbnQucm90YXRpb24ueCArPSAwLjAxO1xuICAgICAgY3ViZS5jdXJyZW50LnJvdGF0aW9uLnkgKz0gMC4wMTU7XG4gICB9KTtcblxuICAgcmV0dXJuIChcbiAgICAgIDxtZXNoIHBvc2l0aW9uPXtbMSwgMSwgLTE2XX0gcmVmPXtjdWJlfSA+XG4gICAgICAgICA8dG9ydXNHZW9tZXRyeSBhcmdzPXtbMTAsIDMsIDE2LCAxMDBdfSAvPlxuICAgICAgICAgPG1lc2hTdGFuZGFyZE1hdGVyaWFsIGNvbG9yPScjZmZhYTIyJyAvPlxuICAgICAgPC9tZXNoPlxuICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1YmU7XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlRnJhbWUiLCJDdWJlIiwiY3ViZSIsImN1cnJlbnQiLCJyb3RhdGlvbiIsIngiLCJ5IiwibWVzaCIsInBvc2l0aW9uIiwicmVmIiwidG9ydXNHZW9tZXRyeSIsImFyZ3MiLCJtZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/graphics/Cube/index.tsx\n"));

/***/ })

});