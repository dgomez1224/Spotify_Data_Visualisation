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
exports.id = "pages/api/stats";
exports.ids = ["pages/api/stats"];
exports.modules = {

/***/ "(api)/./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"topTracks\": () => (/* binding */ topTracks)\n/* harmony export */ });\nconst getAccessToken = async ()=>{\n    const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;\n    const response = await fetch(\"https://accounts.spotify.com/api/token\", {\n        method: \"POST\",\n        headers: {\n            Authorization: `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString(\"base64\")}`,\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        },\n        body: new URLSearchParams({\n            grant_type: \"refresh_token\",\n            refresh_token\n        })\n    });\n    return response.json();\n};\nconst topTracks = async ()=>{\n    const { access_token  } = await getAccessToken();\n    return fetch(\"https://api.spotify.com/v1/me/tracks\", {\n        headers: {\n            Authorization: `Bearer ${access_token}`\n        }\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc3BvdGlmeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ0EsTUFBTUEsaUJBQWlCLFVBQVk7SUFDL0IsTUFBTUMsZ0JBQWdCQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtJQUV2RCxNQUFNQyxXQUFXLE1BQU1DLE1BQU0sMENBQTBDO1FBQ3JFQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE1BQU0sRUFBRUMsT0FBT0MsSUFBSSxDQUNqQyxDQUFDLEVBQUVULFFBQVFDLEdBQUcsQ0FBQ1MsaUJBQWlCLENBQUMsQ0FBQyxFQUFFVixRQUFRQyxHQUFHLENBQUNVLHFCQUFxQixDQUFDLENBQUMsRUFDdkVDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDdEIsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU0sSUFBSUMsZ0JBQWdCO1lBQ3hCQyxZQUFZO1lBQ1poQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPSSxTQUFTYSxJQUFJO0FBQ3RCO0FBRU8sTUFBTUMsWUFBWSxVQUFZO0lBQ25DLE1BQU0sRUFBRUMsYUFBWSxFQUFFLEdBQUcsTUFBTXBCO0lBRS9CLE9BQU9NLE1BQU0sd0NBQXdDO1FBQ25ERSxTQUFTO1lBQ1BDLGVBQWUsQ0FBQyxPQUFPLEVBQUVXLGFBQWEsQ0FBQztRQUN6QztJQUNGO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnlfZGF0YV92aXN1YWxpc2F0aW9uLy4vbGliL3Nwb3RpZnkuanM/OWRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGdldEFjY2Vzc1Rva2VuID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlZnJlc2hfdG9rZW4gPSBwcm9jZXNzLmVudi5TUE9USUZZX1JFRlJFU0hfVE9LRU47XG4gIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2FjY291bnRzLnNwb3RpZnkuY29tL2FwaS90b2tlblwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtCdWZmZXIuZnJvbShcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9JRH06JHtwcm9jZXNzLmVudi5TUE9USUZZX0NMSUVOVF9TRUNSRVR9YFxuICAgICAgICApLnRvU3RyaW5nKFwiYmFzZTY0XCIpfWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XG4gICAgICAgIGdyYW50X3R5cGU6IFwicmVmcmVzaF90b2tlblwiLFxuICAgICAgICByZWZyZXNoX3Rva2VuLFxuICAgICAgfSksXG4gICAgfSk7XG4gIFxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH07XG5cbiAgZXhwb3J0IGNvbnN0IHRvcFRyYWNrcyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGFjY2Vzc190b2tlbiB9ID0gYXdhaXQgZ2V0QWNjZXNzVG9rZW4oKTtcbiAgXG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvdHJhY2tzXCIsIHtcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfTsiXSwibmFtZXMiOlsiZ2V0QWNjZXNzVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkJ1ZmZlciIsImZyb20iLCJTUE9USUZZX0NMSUVOVF9JRCIsIlNQT1RJRllfQ0xJRU5UX1NFQ1JFVCIsInRvU3RyaW5nIiwiYm9keSIsIlVSTFNlYXJjaFBhcmFtcyIsImdyYW50X3R5cGUiLCJqc29uIiwidG9wVHJhY2tzIiwiYWNjZXNzX3Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/spotify.js\n");

/***/ }),

/***/ "(api)/./pages/api/stats.js":
/*!****************************!*\
  !*** ./pages/api/stats.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/spotify */ \"(api)/./lib/spotify.js\");\n\nasync function handler(req, res) {\n    const response = await (0,_lib_spotify__WEBPACK_IMPORTED_MODULE_0__.topTracks)();\n    const { items  } = await response.json();\n    console.log(items.slice(0, 5));\n    const tracks = items.slice(0, 5).map((track)=>({\n            title: track.track.name,\n            artist: track.track.artists.map((_artist)=>_artist.name).join(\", \"),\n            url: track.track.external_urls.spotify,\n            coverImage: track.track.album.images[1]\n        }));\n    console.log(tracks);\n    res.setHeader(\"Cache-Control\", \"public, s-maxage=86400, stale-while-revalidate=43200\");\n    return res.status(200).json(tracks);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFL0IsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUMsV0FBVyxNQUFNSix1REFBU0E7SUFDaEMsTUFBTSxFQUFFSyxNQUFLLEVBQUUsR0FBRyxNQUFNRCxTQUFTRSxJQUFJO0lBQ3JDQyxRQUFRQyxHQUFHLENBQUNILE1BQU1JLEtBQUssQ0FBQyxHQUFFO0lBRTFCLE1BQU1DLFNBQVNMLE1BQU1JLEtBQUssQ0FBQyxHQUFHLEdBQUdFLEdBQUcsQ0FBQyxDQUFDQyxRQUFXO1lBRy9DQyxPQUFPRCxNQUFNQSxLQUFLLENBQUNFLElBQUk7WUFDdkJDLFFBQVFILE1BQU1BLEtBQUssQ0FBQ0ksT0FBTyxDQUFDTCxHQUFHLENBQUMsQ0FBQ00sVUFBWUEsUUFBUUgsSUFBSSxFQUFFSSxJQUFJLENBQUM7WUFDaEVDLEtBQUtQLE1BQU1BLEtBQUssQ0FBQ1EsYUFBYSxDQUFDQyxPQUFPO1lBQ3RDQyxZQUFZVixNQUFNQSxLQUFLLENBQUNXLEtBQUssQ0FBQ0MsTUFBTSxDQUFDLEVBQUU7UUFDekM7SUFFQWpCLFFBQVFDLEdBQUcsQ0FBQ0U7SUFDWlAsSUFBSXNCLFNBQVMsQ0FDWCxpQkFDQTtJQUdGLE9BQU90QixJQUFJdUIsTUFBTSxDQUFDLEtBQUtwQixJQUFJLENBQUNJO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5X2RhdGFfdmlzdWFsaXNhdGlvbi8uL3BhZ2VzL2FwaS9zdGF0cy5qcz84NGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvcFRyYWNrcyB9IGZyb20gXCIuLi8uLi9saWIvc3BvdGlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdG9wVHJhY2tzKCk7XG4gIGNvbnN0IHsgaXRlbXMgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc29sZS5sb2coaXRlbXMuc2xpY2UoMCw1KSkgIFxuXG4gIGNvbnN0IHRyYWNrcyA9IGl0ZW1zLnNsaWNlKDAsIDUpLm1hcCgodHJhY2spID0+ICh7XG4gICBcbiAgIFxuICAgIHRpdGxlOiB0cmFjay50cmFjay5uYW1lLFxuICAgIGFydGlzdDogdHJhY2sudHJhY2suYXJ0aXN0cy5tYXAoKF9hcnRpc3QpID0+IF9hcnRpc3QubmFtZSkuam9pbihcIiwgXCIpLFxuICAgIHVybDogdHJhY2sudHJhY2suZXh0ZXJuYWxfdXJscy5zcG90aWZ5LFxuICAgIGNvdmVySW1hZ2U6IHRyYWNrLnRyYWNrLmFsYnVtLmltYWdlc1sxXSxcbiAgfSkpO1xuXG4gIGNvbnNvbGUubG9nKHRyYWNrcylcbiAgcmVzLnNldEhlYWRlcihcbiAgICBcIkNhY2hlLUNvbnRyb2xcIixcbiAgICBcInB1YmxpYywgcy1tYXhhZ2U9ODY0MDAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGU9NDMyMDBcIlxuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih0cmFja3MpO1xufSJdLCJuYW1lcyI6WyJ0b3BUcmFja3MiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJpdGVtcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJ0cmFja3MiLCJtYXAiLCJ0cmFjayIsInRpdGxlIiwibmFtZSIsImFydGlzdCIsImFydGlzdHMiLCJfYXJ0aXN0Iiwiam9pbiIsInVybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwiY292ZXJJbWFnZSIsImFsYnVtIiwiaW1hZ2VzIiwic2V0SGVhZGVyIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/stats.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stats.js"));
module.exports = __webpack_exports__;

})();