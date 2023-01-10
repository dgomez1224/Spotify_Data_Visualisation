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
exports.id = "pages/api/tracks";
exports.ids = ["pages/api/tracks"];
exports.modules = {

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "(api)/./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsersPlaylists\": () => (/* binding */ getUsersPlaylists),\n/* harmony export */   \"getUsersTracks\": () => (/* binding */ getUsersTracks)\n/* harmony export */ });\nconst client_id = process.env.SPOTIFY_CLIENT_ID;\nconst client_secret = process.env.SPOTIFY_CLIENT_SECRET;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString(\"base64\");\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\nconst PLAYLISTS_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nconst TRACKS_ENDPOINT = \"https://api.spotify.com/v1/me/tracks\";\nconst getAccessToken = async (refresh_token)=>{\n    const response = await fetch(TOKEN_ENDPOINT, {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${basic}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"refresh_token\",\n            refresh_token\n        })\n    });\n    return response.json();\n};\nconst getUsersPlaylists = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(PLAYLISTS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\nconst getUsersTracks = async (refresh_token)=>{\n    const { access_token  } = await getAccessToken(refresh_token);\n    return fetch(TRACKS_ENDPOINT, {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsaUJBQWlCO0FBQy9DLE1BQU1DLGdCQUFnQkgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7QUFDdkQsTUFBTUMsUUFBUUMsT0FBT0MsSUFBSSxDQUFDLENBQUMsRUFBRVIsVUFBVSxDQUFDLEVBQUVJLGNBQWMsQ0FBQyxFQUFFSyxRQUFRLENBQUM7QUFDcEUsTUFBTUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUM7QUFDL0QsTUFBTUMscUJBQXFCO0FBQzNCLE1BQU1DLGtCQUFrQjtBQUV4QixNQUFNQyxpQkFBaUIsT0FBT0MsZ0JBQWtCO0lBQzVDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTU4sZ0JBQWdCO1FBQzNDTyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE1BQU0sRUFBRWIsTUFBTSxDQUFDO1lBQy9CLGdCQUFnQjtRQUNsQjtRQUNBYyxNQUFNLElBQUlDLGdCQUFnQjtZQUN4QkMsWUFBWTtZQUNaUjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQyxTQUFTUSxJQUFJO0FBQ3RCO0FBRU8sTUFBTUMsb0JBQW9CLE9BQU9WLGdCQUFrQjtJQUMxRCxNQUFNLEVBQUNXLGFBQVksRUFBQyxHQUFHLE1BQU1aLGVBQWVDO0lBQzVDLE9BQU9FLE1BQU1MLG9CQUFvQjtRQUMvQk8sU0FBUztZQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFTSxhQUFhLENBQUM7UUFDekM7SUFDRjtBQUNGLEVBQUU7QUFFSyxNQUFNQyxpQkFBaUIsT0FBT1osZ0JBQWtCO0lBQ25ELE1BQU0sRUFBQ1csYUFBWSxFQUFDLEdBQUcsTUFBTVosZUFBZUM7SUFDNUMsT0FBT0UsTUFBTUosaUJBQWlCO1FBQzlCTSxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVNLGFBQWEsQ0FBQztRQUN6QztJQUNGO0FBQ0YsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlfZGF0YV92aXN1YWxpc2F0aW9uLy4vbGliL3Nwb3RpZnkuanM/OWRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGllbnRfaWQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRDtcbmNvbnN0IGNsaWVudF9zZWNyZXQgPSBwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVQ7XG5jb25zdCBiYXNpYyA9IEJ1ZmZlci5mcm9tKGAke2NsaWVudF9pZH06JHtjbGllbnRfc2VjcmV0fWApLnRvU3RyaW5nKCdiYXNlNjQnKTtcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcbmNvbnN0IFBMQVlMSVNUU19FTkRQT0lOVCA9ICdodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHMnO1xuY29uc3QgVFJBQ0tTX0VORFBPSU5UID0gJ2h0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL21lL3RyYWNrcydcblxuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAocmVmcmVzaF90b2tlbikgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICB9LFxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGdyYW50X3R5cGU6ICdyZWZyZXNoX3Rva2VuJyxcbiAgICAgICAgcmVmcmVzaF90b2tlbixcbiAgICAgIH0pLFxuICAgIH0pO1xuICBcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9O1xuXG4gIGV4cG9ydCBjb25zdCBnZXRVc2Vyc1BsYXlsaXN0cyA9IGFzeW5jIChyZWZyZXNoX3Rva2VuKSA9PiB7XG4gIGNvbnN0IHthY2Nlc3NfdG9rZW59ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVmcmVzaF90b2tlbik7XG4gIHJldHVybiBmZXRjaChQTEFZTElTVFNfRU5EUE9JTlQsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YWNjZXNzX3Rva2VufWAsXG4gICAgfSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnNUcmFja3MgPSBhc3luYyAocmVmcmVzaF90b2tlbikgPT4ge1xuICAgIGNvbnN0IHthY2Nlc3NfdG9rZW59ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4ocmVmcmVzaF90b2tlbik7XG4gICAgcmV0dXJuIGZldGNoKFRSQUNLU19FTkRQT0lOVCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICB9LFxuICB9KTtcbn0iXSwibmFtZXMiOlsiY2xpZW50X2lkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50X3NlY3JldCIsIlNQT1RJRllfQ0xJRU5UX1NFQ1JFVCIsImJhc2ljIiwiQnVmZmVyIiwiZnJvbSIsInRvU3RyaW5nIiwiVE9LRU5fRU5EUE9JTlQiLCJQTEFZTElTVFNfRU5EUE9JTlQiLCJUUkFDS1NfRU5EUE9JTlQiLCJnZXRBY2Nlc3NUb2tlbiIsInJlZnJlc2hfdG9rZW4iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3JhbnRfdHlwZSIsImpzb24iLCJnZXRVc2Vyc1BsYXlsaXN0cyIsImFjY2Vzc190b2tlbiIsImdldFVzZXJzVHJhY2tzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.js\n");

/***/ }),

/***/ "(api)/./pages/api/tracks.js":
/*!*****************************!*\
  !*** ./pages/api/tracks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/spotify */ \"(api)/./lib/spotify.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = async (req, res)=>{\n    const { token: { accessToken  }  } = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n        req\n    });\n    const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.getUsersTracks)(accessToken);\n    const { items  } = await response.json();\n    return res.status(200).json({\n        items\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhY2tzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDTjtBQUUzQyxNQUFNRSxVQUFVLE9BQU9DLEtBQUtDLE1BQVE7SUFDbEMsTUFBTSxFQUNKQyxPQUFPLEVBQUNDLFlBQVcsRUFBQyxHQUNyQixHQUFHLE1BQU1MLDJEQUFVQSxDQUFDO1FBQUNFO0lBQUc7SUFDekIsTUFBTUksV0FBVyxNQUFNUCw0REFBY0EsQ0FBQ007SUFDdEMsTUFBTSxFQUFDRSxNQUFLLEVBQUMsR0FBRyxNQUFNRCxTQUFTRSxJQUFJO0lBRW5DLE9BQU9MLElBQUlNLE1BQU0sQ0FBQyxLQUFLRCxJQUFJLENBQUM7UUFBQ0Q7SUFBSztBQUNwQztBQUVBLGlFQUFlTixPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeV9kYXRhX3Zpc3VhbGlzYXRpb24vLi9wYWdlcy9hcGkvdHJhY2tzLmpzP2NkNmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRVc2Vyc1RyYWNrc30gZnJvbSAnLi4vLi4vbGliL3Nwb3RpZnknO1xuaW1wb3J0IHtnZXRTZXNzaW9ufSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0b2tlbjoge2FjY2Vzc1Rva2VufSxcbiAgfSA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFVzZXJzVHJhY2tzKGFjY2Vzc1Rva2VuKTtcbiAgY29uc3Qge2l0ZW1zfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe2l0ZW1zfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyOyJdLCJuYW1lcyI6WyJnZXRVc2Vyc1RyYWNrcyIsImdldFNlc3Npb24iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJhY2Nlc3NUb2tlbiIsInJlc3BvbnNlIiwiaXRlbXMiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/tracks.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tracks.js"));
module.exports = __webpack_exports__;

})();