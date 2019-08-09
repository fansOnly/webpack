(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "3EPd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8trv":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ZViL":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "i9FS":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "p2bk":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "pYmE":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qTiH":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tjUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__("/MKj");

// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__("ANjH");

// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__("1mXj");

// EXTERNAL MODULE: ./node_modules/redux-thunk/es/index.js
var redux_thunk_es = __webpack_require__("sINF");

// EXTERNAL MODULE: ./node_modules/redux-devtools-extension/index.js
var redux_devtools_extension = __webpack_require__("5HXA");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__("MVZn");
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./src/redux/reducers/user.js

// Actions
var types = {
  SIGNIN: 'signin',
  UPDATE: 'getuser',
  SINGNOUT: 'signout'
};
var initialState = {
  user: {},
  authed: false
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case types.SIGNIN:
      return objectSpread_default()({}, state, {
        user: action.data,
        authed: true
      });

    case types.SINGNOUT:
      return objectSpread_default()({}, state, {
        user: {},
        authed: false
      });

    default:
      return state;
  }
} // Action Creators
// 这样定义而不是每个action都export，目的是简化代码，import时不需要把所有action都列出来。
// export function singnin() {
// 	return { type: types.SIGNIN };
// }

var userActions = {
  singnin: function singnin(data) {
    return {
      type: types.SIGNIN,
      data: data
    };
  },
  signout: function signout() {
    return {
      type: types.SINGNOUT
    };
  }
};
// CONCATENATED MODULE: ./src/redux/reducers/index.js


/* harmony default export */ var reducers = (Object(redux["combineReducers"])({
  user: reducer
}));
// CONCATENATED MODULE: ./src/redux/store.js
/**
 * createStore：方法创建Redux Store
 * applyMiddleware：生成中间件
 */
 // 一个很便捷的 middleware，用来打印 action 日志

 //允许我们异步处理Action middleware

 // 浏览器redux-devtools-extension的可视化工具。



var loggerMiddleware = Object(redux_logger["createLogger"])({
  collapsed: true
});
var store = Object(redux["createStore"])(reducers, Object(redux_devtools_extension["composeWithDevTools"])(), Object(redux["applyMiddleware"])(loggerMiddleware, redux_thunk_es["a" /* default */]));
/* harmony default export */ var redux_store = (store);
// EXTERNAL MODULE: ./src/index.css
var src = __webpack_require__("p2bk");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__("55Ip");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__("Ty5D");

// CONCATENATED MODULE: ./src/router/renderRoutes.js




var renderRoutes_renderRoutes = function renderRoutes(routes) {
  var authPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/login';
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var switchProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  return routes ? react_default.a.createElement(react_router["d" /* Switch */], switchProps, routes.map(function (route, i) {
    return react_default.a.createElement(react_router["b" /* Route */], {
      key: route.key || i,
      path: route.path,
      exact: route.exact,
      strict: route.strict,
      render: function render(props) {
        if (!route.requiresAuth || localStorage.getItem('token') || route.path === authPath) {
          return react_default.a.createElement(route.component, extends_default()({}, props, extraProps, {
            route: route
          }));
        }

        return react_default.a.createElement(react_router["a" /* Redirect */], {
          to: {
            pathname: authPath,
            state: {
              from: props.location
            }
          }
        });
      }
    });
  })) : null;
};

/* harmony default export */ var router_renderRoutes = (renderRoutes_renderRoutes);
// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/style/css.js + 2 modules
var css = __webpack_require__("zIJu");

// EXTERNAL MODULE: ./node_modules/antd/es/breadcrumb/index.js + 7 modules
var breadcrumb = __webpack_require__("bE4q");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/style/css.js
var style_css = __webpack_require__("2oDE");

// EXTERNAL MODULE: ./node_modules/antd/es/icon/index.js + 4 modules
var icon = __webpack_require__("CtXQ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("PJYZ");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/antd/es/layout/style/css.js
var layout_style_css = __webpack_require__("M7k7");

// EXTERNAL MODULE: ./node_modules/antd/es/layout/index.js
var layout = __webpack_require__("Ol7k");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/style/css.js + 1 modules
var menu_style_css = __webpack_require__("2WkQ");

// EXTERNAL MODULE: ./node_modules/antd/es/menu/index.js + 22 modules
var menu = __webpack_require__("BvKs");

// EXTERNAL MODULE: ./src/pages/pageA/index.css
var pageA = __webpack_require__("ZViL");

// CONCATENATED MODULE: ./src/pages/pageA/index.js









var pageA_PageA =
/*#__PURE__*/
function (_Component) {
  inherits_default()(PageA, _Component);

  function PageA() {
    classCallCheck_default()(this, PageA);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PageA).apply(this, arguments));
  }

  createClass_default()(PageA, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement("div", null, react_default.a.createElement("div", null, "this is page A...")));
    }
  }]);

  return PageA;
}(react["Component"]);

/* harmony default export */ var pages_pageA = (pageA_PageA);
// EXTERNAL MODULE: ./src/pages/pageB/index.css
var pageB = __webpack_require__("8trv");

// CONCATENATED MODULE: ./src/pages/pageB/index.js









var pageB_PageB =
/*#__PURE__*/
function (_Component) {
  inherits_default()(PageB, _Component);

  function PageB() {
    classCallCheck_default()(this, PageB);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PageB).apply(this, arguments));
  }

  createClass_default()(PageB, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement("div", null, react_default.a.createElement("div", null, "this is page B...")));
    }
  }]);

  return PageB;
}(react["Component"]);

/* harmony default export */ var pages_pageB = (pageB_PageB);
// EXTERNAL MODULE: ./src/pages/admin/index.css
var admin = __webpack_require__("3EPd");

// CONCATENATED MODULE: ./src/pages/admin/index.js




















var SubMenu = menu["b" /* default */].SubMenu;
var Header = layout["a" /* default */].Header,
    Content = layout["a" /* default */].Content,
    Sider = layout["a" /* default */].Sider;

var admin_HomePage =
/*#__PURE__*/
function (_Component) {
  inherits_default()(HomePage, _Component);

  function HomePage() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, HomePage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(HomePage)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {});

    return _this;
  }

  createClass_default()(HomePage, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement(layout["a" /* default */], null, react_default.a.createElement(Header, {
        className: "header"
      }, react_default.a.createElement("div", {
        className: "logo"
      }), react_default.a.createElement(menu["b" /* default */], {
        theme: "dark",
        mode: "horizontal",
        defaultSelectedKeys: ['2'],
        style: {
          lineHeight: '64px'
        }
      }, react_default.a.createElement(menu["b" /* default */].Item, {
        key: "1"
      }, "nav 1"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "2"
      }, "nav 2"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "3"
      }, "nav 3"))), react_default.a.createElement(layout["a" /* default */], null, react_default.a.createElement(Sider, {
        width: 200,
        style: {
          background: '#fff'
        }
      }, react_default.a.createElement(menu["b" /* default */], {
        mode: "inline",
        defaultSelectedKeys: ['1'],
        defaultOpenKeys: ['sub1'],
        style: {
          height: '100%',
          borderRight: 0
        }
      }, react_default.a.createElement(SubMenu, {
        key: "sub1",
        title: react_default.a.createElement("span", null, react_default.a.createElement(icon["a" /* default */], {
          type: "user"
        }), "subnav 1")
      }, react_default.a.createElement(menu["b" /* default */].Item, {
        key: "1"
      }, react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "/pageA"
      }, "PageA")), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "2"
      }, react_default.a.createElement(react_router_dom["b" /* Link */], {
        to: "/pageB"
      }, "PageB")), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "3"
      }, "option3"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "4"
      }, "option4")), react_default.a.createElement(SubMenu, {
        key: "sub2",
        title: react_default.a.createElement("span", null, react_default.a.createElement(icon["a" /* default */], {
          type: "laptop"
        }), "subnav 2")
      }, react_default.a.createElement(menu["b" /* default */].Item, {
        key: "5"
      }, "option5"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "6"
      }, "option6"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "7"
      }, "option7"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "8"
      }, "option8")), react_default.a.createElement(SubMenu, {
        key: "sub3",
        title: react_default.a.createElement("span", null, react_default.a.createElement(icon["a" /* default */], {
          type: "notification"
        }), "subnav 3")
      }, react_default.a.createElement(menu["b" /* default */].Item, {
        key: "9"
      }, "option9"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "10"
      }, "option10"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "11"
      }, "option11"), react_default.a.createElement(menu["b" /* default */].Item, {
        key: "12"
      }, "option12")))), react_default.a.createElement(layout["a" /* default */], {
        style: {
          padding: '0 24px 24px'
        }
      }, react_default.a.createElement(breadcrumb["a" /* default */], {
        style: {
          margin: '16px 0'
        }
      }, react_default.a.createElement(breadcrumb["a" /* default */].Item, null, "Home"), react_default.a.createElement(breadcrumb["a" /* default */].Item, null, "List"), react_default.a.createElement(breadcrumb["a" /* default */].Item, null, "App")), react_default.a.createElement(Content, {
        style: {
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280
        }
      }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
        to: "/pageA",
        component: pages_pageA
      }), react_default.a.createElement(react_router["b" /* Route */], {
        to: "/pageB",
        component: pages_pageB
      })))))));
    }
  }]);

  return HomePage;
}(react["Component"]);

/* harmony default export */ var pages_admin = (admin_HomePage);
// EXTERNAL MODULE: ./src/pages/login/index.css
var login = __webpack_require__("i9FS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("yXPU");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/service/user.js



 // export async function loginApi() {
// 	return dispatch => {
// 		console.log('dispatch', dispatch);
// 		dispatch(userActions.singnin({id: 1, name: 'test0000'}))
// 		// return request('getconfigbase.php')
// 		// .then(res => {
// 		// 	console.log('loginApi', res);
// 		// 	dispatch(userActions.singnin(res))
// 		// })
// 	};
// }

var loginApi =
/*#__PURE__*/
function () {
  var _ref = asyncToGenerator_default()(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(dispatch, data) {
    var status;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return user_login(data);

          case 2:
            status = _context.sent;

            if (status) {
              console.log('singin success...'); // request('getconfigbase.php')

              localStorage.setItem('user', JSON.stringify(getUser()));
              localStorage.setItem('token', setToken());
              dispatch(userActions.singnin(getUser()));
            } else {
              console.log('singin 帐号密码错误.');
            }

            return _context.abrupt("return", status);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginApi(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var user_login = function login(_ref2) {
  var username = _ref2.username,
      password = _ref2.password;
  return username === 'test' && password === '123';
};

var getUser = function getUser() {
  return {
    id: 1,
    name: 'test',
    gender: 1,
    age: 11
  };
};

var setToken = function setToken() {
  return 'asdasdas1234133123';
};
// CONCATENATED MODULE: ./src/pages/login/index.js













var login_Login =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      username: '',
      password: ''
    });

    return _this;
  }

  createClass_default()(Login, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "inputTyping",
    value: function inputTyping(e) {
      this.setState(defineProperty_default()({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this2 = this;

      e.preventDefault();
      var _this$state = this.state,
          username = _this$state.username,
          password = _this$state.password;
      var dispatch = this.props.dispatch;
      loginApi(dispatch, {
        username: username,
        password: password
      }).then(function (res) {
        if (res) {
          // console.log(this.props)
          var _ref = _this2.props.location.state || {
            from: {
              pathname: '/'
            }
          },
              from = _ref.from;

          _this2.props.history.push(from.pathname);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state2 = this.state,
          username = _this$state2.username,
          password = _this$state2.password;
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement("h3", {
        className: "ss"
      }, "this is a login page."), react_default.a.createElement("form", {
        onSubmit: this.handleSubmit.bind(this)
      }, react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "label"
      }, "\u7528\u6237\u540D"), react_default.a.createElement("input", {
        type: "text",
        name: "username",
        id: "username",
        value: username,
        onChange: this.inputTyping.bind(this)
      })), react_default.a.createElement("div", null, react_default.a.createElement("div", {
        className: "label"
      }, "\u5BC6\u7801"), react_default.a.createElement("input", {
        type: "text",
        name: "password",
        id: "password",
        value: password,
        onChange: function onChange(e) {
          return _this3.inputTyping(e);
        }
      })), react_default.a.createElement("div", null, "username: test, password: 123"), react_default.a.createElement("button", {
        type: "submit"
      }, "\u767B\u5F55")));
    }
  }]);

  return Login;
}(react["Component"]);

/* harmony default export */ var pages_login = (Object(es["b" /* connect */])()(login_Login));
// CONCATENATED MODULE: ./src/pages/exception/404.js


var _404_NoFoundPage = function NoFoundPage() {
  return react_default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      textAlign: 'center'
    }
  }, react_default.a.createElement("img", {
    src: "https://gw.alipayobjects.com/zos/antfincdn/wsE2Pw%243%26L/noFound.svg",
    alt: "404"
  }), react_default.a.createElement("br", null), react_default.a.createElement("br", null), react_default.a.createElement("h1", null, "404"), react_default.a.createElement("p", null, "Sorry, the page you visited does not exist."));
};

/* harmony default export */ var _404 = (_404_NoFoundPage);
// EXTERNAL MODULE: ./src/pages/PageB/index.css
var pages_PageB = __webpack_require__("qTiH");

// CONCATENATED MODULE: ./src/pages/PageB/index.js









var PageB_PageB =
/*#__PURE__*/
function (_Component) {
  inherits_default()(PageB, _Component);

  function PageB() {
    classCallCheck_default()(this, PageB);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(PageB).apply(this, arguments));
  }

  createClass_default()(PageB, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, react_default.a.createElement("div", null, react_default.a.createElement("div", null, "this is page B...")));
    }
  }]);

  return PageB;
}(react["Component"]);

/* harmony default export */ var src_pages_PageB = (PageB_PageB);
// CONCATENATED MODULE: ./src/router/router.js





var router_routes = [{
  path: '/',
  exact: true,
  component: pages_admin,
  requiresAuth: true,
  routes: [{
    path: '/pageA',
    name: 'pageA',
    component: pages_pageA
  }, {
    path: '/pageA',
    name: 'pageB',
    component: src_pages_PageB
  }]
}, {
  path: '/login',
  component: pages_login
}, {
  path: '*',
  component: _404
}];
/* harmony default export */ var router = (router_routes);
// EXTERNAL MODULE: ./src/app.css
var app = __webpack_require__("pYmE");

// CONCATENATED MODULE: ./src/App.js











var App_App =
/*#__PURE__*/
function (_Component) {
  inherits_default()(App, _Component);

  function App() {
    classCallCheck_default()(this, App);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(App).apply(this, arguments));
  }

  createClass_default()(App, [{
    key: "render",
    value: function render() {
      return react_default.a.createElement(react_router_dom["a" /* BrowserRouter */], null, router_renderRoutes(router));
    }
  }]);

  return App;
}(react["Component"]);


// CONCATENATED MODULE: ./src/index.js

 // import { BrowserRouter } from 'react-router-dom'






var src_renderApp = function renderApp() {
  return Object(react_dom["render"])(react_default.a.createElement(es["a" /* Provider */], {
    store: redux_store
  }, react_default.a.createElement(App_App, null)), document.getElementById('root'));
}; // eslint-disable-next-line no-undef


if (false) {}

src_renderApp(); // ReactDOM.render(
// 	<BrowserRouter>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</BrowserRouter>
// 	, document.getElementById('root')
// );

/***/ })

},[["tjUo",1,2]]]);
//# sourceMappingURL=main.a788f8a7.chunk.js.map