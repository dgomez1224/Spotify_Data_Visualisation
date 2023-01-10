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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [listTracks, setListTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const getMyPlaylists = async ()=>{\n        const res = await fetch(\"/api/playlists\");\n        const { items  } = await res.json();\n        setList(items);\n    };\n    const getMyTracks = async ()=>{\n        const res = await fetch(\"/api/tracks\");\n        const { items  } = await res.json();\n        setListTracks(items);\n    };\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session?.token?.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                    lineNumber: 25,\n                    columnNumber: 46\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>getMyPlaylists(),\n                    children: \"Get all my playlists\"\n                }, void 0, false, {\n                    fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>getMyTracks(),\n                    children: \"Get all my tracks\"\n                }, void 0, false, {\n                    fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this),\n                list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.images[0]?.url,\n                                width: \"100\"\n                            }, void 0, false, {\n                                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, item.id, true, {\n                        fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)),\n                listTracks.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: track.track.name\n                            }, void 0, false, {\n                                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: track.track.images[0]?.url,\n                                width: \"100\"\n                            }, void 0, false, {\n                                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, track.track.name, true, {\n                        fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this))\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                lineNumber: 47,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/david1/Desktop/Github/Spotify_Data_Visualisation/spotify_data_visualisation/pages/index.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"y337eqwpoo7BeXTMNBfNRasx4+w=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQTREO0FBQzdCO0FBRWhCLFNBQVNJLE9BQU87O0lBQzdCLE1BQU0sRUFBQ0MsTUFBTUMsUUFBTyxFQUFDLEdBQUdOLDJEQUFVQTtJQUNsQyxNQUFNLENBQUNPLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNNLFlBQVlDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUUvQyxNQUFNUSxpQkFBaUIsVUFBWTtRQUNqQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDeEIsTUFBTSxFQUFDQyxNQUFLLEVBQUMsR0FBRyxNQUFNRixJQUFJRyxJQUFJO1FBQzlCUCxRQUFRTTtJQUNWO0lBRUEsTUFBTUUsY0FBYyxVQUFZO1FBQzlCLE1BQU1KLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixNQUFNLEVBQUNDLE1BQUssRUFBQyxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFDOUJMLGNBQWNJO0lBQ2hCO0lBR0EsSUFBSVIsU0FBUztRQUNYLHFCQUNFOztnQkFBRTtnQkFDY0EsU0FBU1csT0FBT0M7Z0JBQU07OEJBQUMsOERBQUNDOzs7Ozs4QkFDdEMsOERBQUNDO29CQUFPQyxTQUFTLElBQU1uQix3REFBT0E7OEJBQUk7Ozs7Ozs4QkFDbEMsOERBQUNvQjs7Ozs7OEJBQ0QsOERBQUNGO29CQUFPQyxTQUFTLElBQU1WOzhCQUFrQjs7Ozs7OzhCQUN6Qyw4REFBQ1M7b0JBQU9DLFNBQVMsSUFBTUw7OEJBQWU7Ozs7OztnQkFDckNULEtBQUtnQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUlGLEtBQUtHLElBQUk7Ozs7OzswQ0FDZCw4REFBQ0M7Z0NBQUlDLEtBQUtMLEtBQUtNLE1BQU0sQ0FBQyxFQUFFLEVBQUVDO2dDQUFLQyxPQUFNOzs7Ozs7O3VCQUY3QlIsS0FBS1MsRUFBRTs7Ozs7Z0JBS2xCeEIsV0FBV2MsR0FBRyxDQUFDLENBQUNDLHFCQUNmLDhEQUFDQzs7MENBQ0MsOERBQUNDOzBDQUFJUSxNQUFNQSxLQUFLLENBQUNQLElBQUk7Ozs7OzswQ0FDckIsOERBQUNDO2dDQUFJQyxLQUFLSyxNQUFNQSxLQUFLLENBQUNKLE1BQU0sQ0FBQyxFQUFFLEVBQUVDO2dDQUFLQyxPQUFNOzs7Ozs7O3VCQUZwQ0UsTUFBTUEsS0FBSyxDQUFDUCxJQUFJOzs7Ozs7O0lBT2xDLENBQUM7SUFDRCxxQkFDRTs7WUFBRTswQkFDYyw4REFBQ1I7Ozs7OzBCQUNmLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNcEIsdURBQU1BOzBCQUFJOzs7Ozs7OztBQUd2QyxDQUFDO0dBL0N1Qkc7O1FBQ0VKLHVEQUFVQTs7O0tBRFpJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTZXNzaW9uLCBzaWduSW4sIHNpZ25PdXR9IGZyb20gJ25leHQtYXV0aC9yZWFjdCc7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtkYXRhOiBzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbGlzdFRyYWNrcywgc2V0TGlzdFRyYWNrc10gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBnZXRNeVBsYXlsaXN0cyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbGF5bGlzdHMnKTtcbiAgICBjb25zdCB7aXRlbXN9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRMaXN0KGl0ZW1zKTtcbiAgfTtcblxuICBjb25zdCBnZXRNeVRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90cmFja3MnKTtcbiAgICBjb25zdCB7aXRlbXN9ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBzZXRMaXN0VHJhY2tzKGl0ZW1zKTtcbiAgfTtcblxuXG4gIGlmIChzZXNzaW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIFNpZ25lZCBpbiBhcyB7c2Vzc2lvbj8udG9rZW4/LmVtYWlsfSA8YnIgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XG4gICAgICAgIDxociAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGdldE15UGxheWxpc3RzKCl9PkdldCBhbGwgbXkgcGxheWxpc3RzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZ2V0TXlUcmFja3MoKX0+R2V0IGFsbCBteSB0cmFja3M8L2J1dHRvbj5cbiAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgPGgxPntpdGVtLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltYWdlc1swXT8udXJsfSB3aWR0aD1cIjEwMFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgICB7bGlzdFRyYWNrcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17dHJhY2sudHJhY2submFtZX0+XG4gICAgICAgICAgICA8aDE+e3RyYWNrLnRyYWNrLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0cmFjay50cmFjay5pbWFnZXNbMF0/LnVybH0gd2lkdGg9XCIxMDBcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlNpZ24gaW48L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJkYXRhIiwic2Vzc2lvbiIsImxpc3QiLCJzZXRMaXN0IiwibGlzdFRyYWNrcyIsInNldExpc3RUcmFja3MiLCJnZXRNeVBsYXlsaXN0cyIsInJlcyIsImZldGNoIiwiaXRlbXMiLCJqc29uIiwiZ2V0TXlUcmFja3MiLCJ0b2tlbiIsImVtYWlsIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiaHIiLCJtYXAiLCJpdGVtIiwiZGl2IiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VzIiwidXJsIiwid2lkdGgiLCJpZCIsInRyYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});