"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            authorization: \"https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private\",\n            clientId: process.env.SPOTIFY_CLIENT_ID,\n            clientSecret: process.env.SPOTIFY_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async jwt ({ token , account  }) {\n            if (account) {\n                token.accessToken = account.refresh_token;\n            }\n            return token;\n        },\n        async session (session, user) {\n            session.user = user;\n            return session;\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3lCO0FBRTFELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkUsV0FBVztRQUNURCxrRUFBZUEsQ0FBQztZQUNkRSxlQUNFO1lBQ0ZDLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO1lBQ3ZDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLHFCQUFxQjtRQUNqRDtLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUNDLE1BQUssRUFBRUMsUUFBTyxFQUFDLEVBQUU7WUFDMUIsSUFBSUEsU0FBUztnQkFDWEQsTUFBTUUsV0FBVyxHQUFHRCxRQUFRRSxhQUFhO1lBQzNDLENBQUM7WUFDRCxPQUFPSDtRQUNUO1FBQ0EsTUFBTUksU0FBUUEsT0FBTyxFQUFFQyxJQUFJLEVBQUU7WUFDM0JELFFBQVFDLElBQUksR0FBR0E7WUFDZixPQUFPRDtRQUNUO0lBQ0Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5X2RhdGFfdmlzdWFsaXNhdGlvbi8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBTcG90aWZ5UHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9zcG90aWZ5JztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICBwcm92aWRlcnM6IFtcbiAgICBTcG90aWZ5UHJvdmlkZXIoe1xuICAgICAgYXV0aG9yaXphdGlvbjpcbiAgICAgICAgJ2h0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXV0aG9yaXplP3Njb3BlPXVzZXItcmVhZC1lbWFpbCxwbGF5bGlzdC1yZWFkLXByaXZhdGUnLFxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LlNQT1RJRllfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7dG9rZW4sIGFjY291bnR9KSB7XG4gICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQucmVmcmVzaF90b2tlbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbiwgdXNlcikge1xuICAgICAgc2Vzc2lvbi51c2VyID0gdXNlcjtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59KTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTcG90aWZ5UHJvdmlkZXIiLCJwcm92aWRlcnMiLCJhdXRob3JpemF0aW9uIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiU1BPVElGWV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJTUE9USUZZX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJzZXNzaW9uIiwidXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();