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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-three/fiber */ \"./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.scss */ \"./src/styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modules_graphics_Cube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/modules/graphics/Cube */ \"./src/modules/graphics/Cube/index.tsx\");\nvar _this = undefined;\n\n\n\n\n\nvar Home = function() {\n    var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().canvas),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_4__.Canvas, {\n            camera: camera,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {\n                    intensity: 0.4\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"directionalLight\", {\n                    color: \"blue\",\n                    position: [\n                        1,\n                        3,\n                        1\n                    ]\n                }, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_graphics_Cube__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n            lineNumber: 12,\n            columnNumber: 10\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/dandan/Projects/Web/profile/resume-page/src/pages/index.tsx\",\n        lineNumber: 11,\n        columnNumber: 7\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQzRDO0FBQ0Y7QUFDSztBQUNKO0FBRTNDLElBQU1JLElBQUksR0FBYSxXQUFNO0lBQzFCLElBQU1DLE1BQU0sR0FBRyxJQUFJSixvREFBaUIsQ0FBQyxFQUFFLEVBQUVLLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDO0lBRTNGLHFCQUNHLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRVIsd0VBQWE7a0JBQzFCLDRFQUFDRixzREFBTTtZQUFDSyxNQUFNLEVBQUVBLE1BQU07OzhCQUNuQiw4REFBQ08sY0FBWTtvQkFBQ0MsU0FBUyxFQUFFLEdBQUc7Ozs7O3lCQUFJOzhCQUNoQyw4REFBQ0Msa0JBQWdCO29CQUFDQyxLQUFLLEVBQUMsTUFBTTtvQkFBQ0MsUUFBUSxFQUFFO0FBQUMseUJBQUM7QUFBRSx5QkFBQztBQUFFLHlCQUFDO3FCQUFDOzs7Ozt5QkFBSTs4QkFDdEQsOERBQUNiLDhEQUFJOzs7O3lCQUFHOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ04sQ0FDUDtDQUNKO0FBWktDLEtBQUFBLElBQUk7QUFjViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSAnQHJlYWN0LXRocmVlL2ZpYmVyJztcbmltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhIH0gZnJvbSAndGhyZWUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJztcbmltcG9ydCBDdWJlIGZyb20gJ0AvbW9kdWxlcy9ncmFwaGljcy9DdWJlJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICBjb25zdCBjYW1lcmEgPSBuZXcgUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuXG4gICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXN9PlxuICAgICAgICAgPENhbnZhcyBjYW1lcmE9e2NhbWVyYX0+XG4gICAgICAgICAgICA8YW1iaWVudExpZ2h0IGludGVuc2l0eT17MC40fSAvPlxuICAgICAgICAgICAgPGRpcmVjdGlvbmFsTGlnaHQgY29sb3I9J2JsdWUnIHBvc2l0aW9uPXtbMSwgMywgMV19IC8+XG4gICAgICAgICAgICA8Q3ViZSAvPlxuICAgICAgICAgPC9DYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkNhbnZhcyIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic3R5bGVzIiwiQ3ViZSIsIkhvbWUiLCJjYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiLCJjYW52YXMiLCJhbWJpZW50TGlnaHQiLCJpbnRlbnNpdHkiLCJkaXJlY3Rpb25hbExpZ2h0IiwiY29sb3IiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});