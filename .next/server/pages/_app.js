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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/WalletConnectProvider.js":
/*!*********************************************!*\
  !*** ./components/WalletConnectProvider.js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WalletConnectProvider: () => (/* binding */ WalletConnectProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__, _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst WalletConnectProvider = ({ children })=>{\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet;\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{\n        if (network === _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet) {\n            return \"https://solana-mainnet.g.alchemy.com/v2/KPO6GQWdZB7fJBsdzfLpfeLcRGR9Ot63\";\n        }\n        return (0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_6__.clusterApiUrl)(network);\n    }, [\n        network\n    ]);\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_4__.PhantomWalletAdapter\n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_2__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletModalProvider, {\n                children: children\n            }, void 0, false, {\n                fileName: \"/workspaces/sparkathon_workshop/components/WalletConnectProvider.js\",\n                lineNumber: 24,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/workspaces/sparkathon_workshop/components/WalletConnectProvider.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspaces/sparkathon_workshop/components/WalletConnectProvider.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dhbGxldENvbm5lY3RQcm92aWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDdUM7QUFDZjtBQUM4QjtBQUMzQjtBQUN0QjtBQUV6QyxNQUFNVSx3QkFBd0IsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFFOUMsTUFBTUMsVUFBVVAsNkVBQW9CQSxDQUFDUSxNQUFNO0lBRTNDLE1BQU1DLFdBQVdaLDhDQUFPQSxDQUFDO1FBQ3JCLElBQUlVLFlBQVlQLDZFQUFvQkEsQ0FBQ1EsTUFBTSxFQUFDO1lBQzVDLE9BQU87UUFDWDtRQUNBLE9BQU9KLDhEQUFhQSxDQUFDRztJQUNyQixHQUFHO1FBQUNBO0tBQVE7SUFFWixNQUFNRyxVQUFVYiw4Q0FBT0EsQ0FBQyxJQUFNO1lBQUMsSUFBSUksZ0ZBQW9CQTtTQUFDLEVBQUU7UUFBQ007S0FBUTtJQUVuRSxxQkFDSSw4REFBQ1QsNEVBQWtCQTtRQUFDVyxVQUFVQTtrQkFDMUIsNEVBQUNWLHdFQUFjQTtZQUFDVyxTQUFTQTtZQUFTQyxXQUFXO3NCQUN6Qyw0RUFBQ1IsZ0ZBQW1CQTswQkFBRUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmtzaG9wLy4vY29tcG9uZW50cy9XYWxsZXRDb25uZWN0UHJvdmlkZXIuanM/MTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbm5lY3Rpb25Qcm92aWRlciwgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcclxuaW1wb3J0IHsgV2FsbGV0QWRhcHRlck5ldHdvcmsgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLWJhc2UnO1xyXG5pbXBvcnQgeyBQaGFudG9tV2FsbGV0QWRhcHRlciwgVW5zYWZlQnVybmVyV2FsbGV0QWRhcHRlciB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItd2FsbGV0cyc7XHJcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcclxuaW1wb3J0IHsgY2x1c3RlckFwaVVybCB9IGZyb20gJ0Bzb2xhbmEvd2ViMy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgV2FsbGV0Q29ubmVjdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBuZXR3b3JrID0gV2FsbGV0QWRhcHRlck5ldHdvcmsuRGV2bmV0O1xyXG5cclxuICAgIGNvbnN0IGVuZHBvaW50ID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5ldHdvcmsgPT09IFdhbGxldEFkYXB0ZXJOZXR3b3JrLkRldm5ldCl7XHJcbiAgICAgICAgcmV0dXJuIFwiaHR0cHM6Ly9zb2xhbmEtbWFpbm5ldC5nLmFsY2hlbXkuY29tL3YyL0tQTzZHUVdkWkI3ZkpCc2R6ZkxwZmVMY1JHUjlPdDYzXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2x1c3RlckFwaVVybChuZXR3b3JrKTtcclxuICAgIH0sIFtuZXR3b3JrXSk7XHJcblxyXG4gICAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oKCkgPT4gW25ldyBQaGFudG9tV2FsbGV0QWRhcHRlcl0sIFtuZXR3b3JrXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29ubmVjdGlvblByb3ZpZGVyIGVuZHBvaW50PXtlbmRwb2ludH0+XHJcbiAgICAgICAgICAgIDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD5cclxuICAgICAgICAgICAgICAgIDxXYWxsZXRNb2RhbFByb3ZpZGVyPntjaGlsZHJlbn08L1dhbGxldE1vZGFsUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDwvV2FsbGV0UHJvdmlkZXI+XHJcbiAgICAgICAgPC9Db25uZWN0aW9uUHJvdmlkZXI+XHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiRkMiLCJ1c2VNZW1vIiwiQ29ubmVjdGlvblByb3ZpZGVyIiwiV2FsbGV0UHJvdmlkZXIiLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsIlBoYW50b21XYWxsZXRBZGFwdGVyIiwiVW5zYWZlQnVybmVyV2FsbGV0QWRhcHRlciIsIldhbGxldE1vZGFsUHJvdmlkZXIiLCJjbHVzdGVyQXBpVXJsIiwiV2FsbGV0Q29ubmVjdFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJuZXR3b3JrIiwiRGV2bmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiYXV0b0Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WalletConnectProvider.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n/* harmony import */ var _solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_wallet_adapter_react_ui_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_WalletConnectProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/WalletConnectProvider */ \"./components/WalletConnectProvider.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_WalletConnectProvider__WEBPACK_IMPORTED_MODULE_4__]);\n_components_WalletConnectProvider__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WalletConnectProvider__WEBPACK_IMPORTED_MODULE_4__.WalletConnectProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/workspaces/sparkathon_workshop/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspaces/sparkathon_workshop/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDc0I7QUFFdUI7QUFFM0QsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFBTyw4REFBQ0gsb0ZBQXFCQTtrQkFDM0IsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFFNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3Jrc2hvcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aS9zdHlsZXMuY3NzJ1xyXG5cclxuaW1wb3J0IHsgV2FsbGV0Q29ubmVjdFByb3ZpZGVyIH0gZnJvbSAnQC9jb21wb25lbnRzL1dhbGxldENvbm5lY3RQcm92aWRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gPFdhbGxldENvbm5lY3RQcm92aWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L1dhbGxldENvbm5lY3RQcm92aWRlcj5cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@solana"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();