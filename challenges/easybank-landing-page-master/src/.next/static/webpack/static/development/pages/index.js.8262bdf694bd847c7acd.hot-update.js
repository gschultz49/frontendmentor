webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/body-container.tsx":
/*!***************************************!*\
  !*** ./components/body-container.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/gschultz49/Desktop/Projects/frontendmentor.io/easybank-landing-page-master/src-ts/components/body-container.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BodyContainer = function BodyContainer(Component) {
  return function (_ref) {
    var id = _ref.id;
    return __jsx("section", {
      id: id,
      className: "body-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }, __jsx(Component, {
      id: id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }
    }));
  };
};

/* harmony default export */ __webpack_exports__["default"] = (BodyContainer);

/***/ }),

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/gschultz49/Desktop/Projects/frontendmentor.io/easybank-landing-page-master/src-ts/components/button.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function Button(_ref) {
  var label = _ref.label,
      _ref$py = _ref.py,
      py = _ref$py === void 0 ? 3 : _ref$py,
      _ref$px = _ref.px,
      px = _ref$px === void 0 ? 8 : _ref$px;
  var classGenerated = "text-white hover:opacity-75 duration-300 py-".concat(py, " px-").concat(px, " rounded-full gradient-shift");
  return __jsx("button", {
    className: classGenerated,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 10
    }
  }, label);
}

/***/ }),

/***/ "./components/navigation.tsx":
/*!***********************************!*\
  !*** ./components/navigation.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/button.tsx");
/* harmony import */ var _body_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body-container */ "./components/body-container.tsx");
var _this = undefined,
    _jsxFileName = "/Users/gschultz49/Desktop/Projects/frontendmentor.io/easybank-landing-page-master/src-ts/components/navigation.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Navigation = function Navigation(props) {
  return __jsx("div", {
    className: "flex items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "flex-1 py-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: "/images/logo.svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "flex-1 text-center px-4 py-2 m-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("section", {
    id: "sub-navigation",
    className: "flex justify-between",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "py-3",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Home"), __jsx("a", {
    className: "py-3",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "About"), __jsx("a", {
    className: "py-3",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Contact"), __jsx("a", {
    className: "py-3",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Blog"), __jsx("a", {
    className: "py-3",
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, "Careers"))), __jsx("div", {
    className: "flex-1 px-4 py-3 m-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("section", {
    className: "flex justify-end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Request Invite",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_body_container__WEBPACK_IMPORTED_MODULE_2__["default"])(Navigation));

/***/ }),

/***/ "./components/splash.tsx":
/*!*******************************!*\
  !*** ./components/splash.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _body_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body-container */ "./components/body-container.tsx");
var _this = undefined,
    _jsxFileName = "/Users/gschultz49/Desktop/Projects/frontendmentor.io/easybank-landing-page-master/src-ts/components/splash.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Splash = function Splash(props) {
  return __jsx("section", {
    id: "splash-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("section", {
    id: "splash",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, " Next Generation Digital Banking")));
};

var SplashContainer = Object(_body_container__WEBPACK_IMPORTED_MODULE_1__["default"])(Splash);
/* harmony default export */ __webpack_exports__["default"] = (SplashContainer);

/***/ }),

/***/ "./components/whyChoose.tsx":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.tsx");
/* harmony import */ var _components_splash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/splash */ "./components/splash.tsx");
var _this = undefined,
    _jsxFileName = "/Users/gschultz49/Desktop/Projects/frontendmentor.io/easybank-landing-page-master/src-ts/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App() {
  return (// this syntax is React fragments, enables a function to return multiple JSX elements
    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      id: "navigation-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }), __jsx(_components_splash__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "navgiation-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.8262bdf694bd847c7acd.hot-update.js.map