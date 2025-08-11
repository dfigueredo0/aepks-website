var Ic = { exports: {} }, ge = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function R1() {
  if (Fv) return ge;
  Fv = 1;
  var z = Symbol.for("react.transitional.element"), X = Symbol.for("react.fragment");
  function j(r, ul, W) {
    var F = null;
    if (W !== void 0 && (F = "" + W), ul.key !== void 0 && (F = "" + ul.key), "key" in ul) {
      W = {};
      for (var sl in ul)
        sl !== "key" && (W[sl] = ul[sl]);
    } else W = ul;
    return ul = W.ref, {
      $$typeof: z,
      type: r,
      key: F,
      ref: ul !== void 0 ? ul : null,
      props: W
    };
  }
  return ge.Fragment = X, ge.jsx = j, ge.jsxs = j, ge;
}
var Iv;
function N1() {
  return Iv || (Iv = 1, Ic.exports = R1()), Ic.exports;
}
var Nl = N1(), Pc = { exports: {} }, Se = {}, li = { exports: {} }, ti = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pv;
function H1() {
  return Pv || (Pv = 1, function(z) {
    function X(g, _) {
      var H = g.length;
      g.push(_);
      l: for (; 0 < H; ) {
        var P = H - 1 >>> 1, s = g[P];
        if (0 < ul(s, _))
          g[P] = _, g[H] = s, H = P;
        else break l;
      }
    }
    function j(g) {
      return g.length === 0 ? null : g[0];
    }
    function r(g) {
      if (g.length === 0) return null;
      var _ = g[0], H = g.pop();
      if (H !== _) {
        g[0] = H;
        l: for (var P = 0, s = g.length, A = s >>> 1; P < A; ) {
          var M = 2 * (P + 1) - 1, O = g[M], q = M + 1, J = g[q];
          if (0 > ul(O, H))
            q < s && 0 > ul(J, O) ? (g[P] = J, g[q] = H, P = q) : (g[P] = O, g[M] = H, P = M);
          else if (q < s && 0 > ul(J, H))
            g[P] = J, g[q] = H, P = q;
          else break l;
        }
      }
      return _;
    }
    function ul(g, _) {
      var H = g.sortIndex - _.sortIndex;
      return H !== 0 ? H : g.id - _.id;
    }
    if (z.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var W = performance;
      z.unstable_now = function() {
        return W.now();
      };
    } else {
      var F = Date, sl = F.now();
      z.unstable_now = function() {
        return F.now() - sl;
      };
    }
    var R = [], E = [], N = 1, fl = null, $ = 3, Hl = !1, ql = !1, vl = !1, I = !1, hl = typeof setTimeout == "function" ? setTimeout : null, Vl = typeof clearTimeout == "function" ? clearTimeout : null, ol = typeof setImmediate < "u" ? setImmediate : null;
    function Il(g) {
      for (var _ = j(E); _ !== null; ) {
        if (_.callback === null) r(E);
        else if (_.startTime <= g)
          r(E), _.sortIndex = _.expirationTime, X(R, _);
        else break;
        _ = j(E);
      }
    }
    function L(g) {
      if (vl = !1, Il(g), !ql)
        if (j(R) !== null)
          ql = !0, Ll || (Ll = !0, Sl());
        else {
          var _ = j(E);
          _ !== null && bl(L, _.startTime - g);
        }
    }
    var Ll = !1, xl = -1, Xl = 5, Jl = -1;
    function Ut() {
      return I ? !0 : !(z.unstable_now() - Jl < Xl);
    }
    function St() {
      if (I = !1, Ll) {
        var g = z.unstable_now();
        Jl = g;
        var _ = !0;
        try {
          l: {
            ql = !1, vl && (vl = !1, Vl(xl), xl = -1), Hl = !0;
            var H = $;
            try {
              t: {
                for (Il(g), fl = j(R); fl !== null && !(fl.expirationTime > g && Ut()); ) {
                  var P = fl.callback;
                  if (typeof P == "function") {
                    fl.callback = null, $ = fl.priorityLevel;
                    var s = P(
                      fl.expirationTime <= g
                    );
                    if (g = z.unstable_now(), typeof s == "function") {
                      fl.callback = s, Il(g), _ = !0;
                      break t;
                    }
                    fl === j(R) && r(R), Il(g);
                  } else r(R);
                  fl = j(R);
                }
                if (fl !== null) _ = !0;
                else {
                  var A = j(E);
                  A !== null && bl(
                    L,
                    A.startTime - g
                  ), _ = !1;
                }
              }
              break l;
            } finally {
              fl = null, $ = H, Hl = !1;
            }
            _ = void 0;
          }
        } finally {
          _ ? Sl() : Ll = !1;
        }
      }
    }
    var Sl;
    if (typeof ol == "function")
      Sl = function() {
        ol(St);
      };
    else if (typeof MessageChannel < "u") {
      var Ql = new MessageChannel(), Yl = Ql.port2;
      Ql.port1.onmessage = St, Sl = function() {
        Yl.postMessage(null);
      };
    } else
      Sl = function() {
        hl(St, 0);
      };
    function bl(g, _) {
      xl = hl(function() {
        g(z.unstable_now());
      }, _);
    }
    z.unstable_IdlePriority = 5, z.unstable_ImmediatePriority = 1, z.unstable_LowPriority = 4, z.unstable_NormalPriority = 3, z.unstable_Profiling = null, z.unstable_UserBlockingPriority = 2, z.unstable_cancelCallback = function(g) {
      g.callback = null;
    }, z.unstable_forceFrameRate = function(g) {
      0 > g || 125 < g ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < g ? Math.floor(1e3 / g) : 5;
    }, z.unstable_getCurrentPriorityLevel = function() {
      return $;
    }, z.unstable_next = function(g) {
      switch ($) {
        case 1:
        case 2:
        case 3:
          var _ = 3;
          break;
        default:
          _ = $;
      }
      var H = $;
      $ = _;
      try {
        return g();
      } finally {
        $ = H;
      }
    }, z.unstable_requestPaint = function() {
      I = !0;
    }, z.unstable_runWithPriority = function(g, _) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var H = $;
      $ = g;
      try {
        return _();
      } finally {
        $ = H;
      }
    }, z.unstable_scheduleCallback = function(g, _, H) {
      var P = z.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? P + H : P) : H = P, g) {
        case 1:
          var s = -1;
          break;
        case 2:
          s = 250;
          break;
        case 5:
          s = 1073741823;
          break;
        case 4:
          s = 1e4;
          break;
        default:
          s = 5e3;
      }
      return s = H + s, g = {
        id: N++,
        callback: _,
        priorityLevel: g,
        startTime: H,
        expirationTime: s,
        sortIndex: -1
      }, H > P ? (g.sortIndex = H, X(E, g), j(R) === null && g === j(E) && (vl ? (Vl(xl), xl = -1) : vl = !0, bl(L, H - P))) : (g.sortIndex = s, X(R, g), ql || Hl || (ql = !0, Ll || (Ll = !0, Sl()))), g;
    }, z.unstable_shouldYield = Ut, z.unstable_wrapCallback = function(g) {
      var _ = $;
      return function() {
        var H = $;
        $ = _;
        try {
          return g.apply(this, arguments);
        } finally {
          $ = H;
        }
      };
    };
  }(ti)), ti;
}
var ly;
function q1() {
  return ly || (ly = 1, li.exports = H1()), li.exports;
}
var ui = { exports: {} }, x = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ty;
function Y1() {
  if (ty) return x;
  ty = 1;
  var z = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), ul = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), F = Symbol.for("react.context"), sl = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), E = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), fl = Symbol.iterator;
  function $(s) {
    return s === null || typeof s != "object" ? null : (s = fl && s[fl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Hl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ql = Object.assign, vl = {};
  function I(s, A, M) {
    this.props = s, this.context = A, this.refs = vl, this.updater = M || Hl;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(s, A) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, A, "setState");
  }, I.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function hl() {
  }
  hl.prototype = I.prototype;
  function Vl(s, A, M) {
    this.props = s, this.context = A, this.refs = vl, this.updater = M || Hl;
  }
  var ol = Vl.prototype = new hl();
  ol.constructor = Vl, ql(ol, I.prototype), ol.isPureReactComponent = !0;
  var Il = Array.isArray, L = { H: null, A: null, T: null, S: null, V: null }, Ll = Object.prototype.hasOwnProperty;
  function xl(s, A, M, O, q, J) {
    return M = J.ref, {
      $$typeof: z,
      type: s,
      key: A,
      ref: M !== void 0 ? M : null,
      props: J
    };
  }
  function Xl(s, A) {
    return xl(
      s.type,
      A,
      void 0,
      void 0,
      void 0,
      s.props
    );
  }
  function Jl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === z;
  }
  function Ut(s) {
    var A = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(M) {
      return A[M];
    });
  }
  var St = /\/+/g;
  function Sl(s, A) {
    return typeof s == "object" && s !== null && s.key != null ? Ut("" + s.key) : A.toString(36);
  }
  function Ql() {
  }
  function Yl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Ql, Ql) : (s.status = "pending", s.then(
          function(A) {
            s.status === "pending" && (s.status = "fulfilled", s.value = A);
          },
          function(A) {
            s.status === "pending" && (s.status = "rejected", s.reason = A);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function bl(s, A, M, O, q) {
    var J = typeof s;
    (J === "undefined" || J === "boolean") && (s = null);
    var G = !1;
    if (s === null) G = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case z:
            case X:
              G = !0;
              break;
            case N:
              return G = s._init, bl(
                G(s._payload),
                A,
                M,
                O,
                q
              );
          }
      }
    if (G)
      return q = q(s), G = O === "" ? "." + Sl(s, 0) : O, Il(q) ? (M = "", G != null && (M = G.replace(St, "$&/") + "/"), bl(q, A, M, "", function(Lt) {
        return Lt;
      })) : q != null && (Jl(q) && (q = Xl(
        q,
        M + (q.key == null || s && s.key === q.key ? "" : ("" + q.key).replace(
          St,
          "$&/"
        ) + "/") + G
      )), A.push(q)), 1;
    G = 0;
    var Pl = O === "" ? "." : O + ":";
    if (Il(s))
      for (var yl = 0; yl < s.length; yl++)
        O = s[yl], J = Pl + Sl(O, yl), G += bl(
          O,
          A,
          M,
          J,
          q
        );
    else if (yl = $(s), typeof yl == "function")
      for (s = yl.call(s), yl = 0; !(O = s.next()).done; )
        O = O.value, J = Pl + Sl(O, yl++), G += bl(
          O,
          A,
          M,
          J,
          q
        );
    else if (J === "object") {
      if (typeof s.then == "function")
        return bl(
          Yl(s),
          A,
          M,
          O,
          q
        );
      throw A = String(s), Error(
        "Objects are not valid as a React child (found: " + (A === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : A) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return G;
  }
  function g(s, A, M) {
    if (s == null) return s;
    var O = [], q = 0;
    return bl(s, O, "", "", function(J) {
      return A.call(M, J, q++);
    }), O;
  }
  function _(s) {
    if (s._status === -1) {
      var A = s._result;
      A = A(), A.then(
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = M);
        },
        function(M) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = M);
        }
      ), s._status === -1 && (s._status = 0, s._result = A);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var H = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var A = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(A)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function P() {
  }
  return x.Children = {
    map: g,
    forEach: function(s, A, M) {
      g(
        s,
        function() {
          A.apply(this, arguments);
        },
        M
      );
    },
    count: function(s) {
      var A = 0;
      return g(s, function() {
        A++;
      }), A;
    },
    toArray: function(s) {
      return g(s, function(A) {
        return A;
      }) || [];
    },
    only: function(s) {
      if (!Jl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  }, x.Component = I, x.Fragment = j, x.Profiler = ul, x.PureComponent = Vl, x.StrictMode = r, x.Suspense = R, x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L, x.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return L.H.useMemoCache(s);
    }
  }, x.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, x.cloneElement = function(s, A, M) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var O = ql({}, s.props), q = s.key, J = void 0;
    if (A != null)
      for (G in A.ref !== void 0 && (J = void 0), A.key !== void 0 && (q = "" + A.key), A)
        !Ll.call(A, G) || G === "key" || G === "__self" || G === "__source" || G === "ref" && A.ref === void 0 || (O[G] = A[G]);
    var G = arguments.length - 2;
    if (G === 1) O.children = M;
    else if (1 < G) {
      for (var Pl = Array(G), yl = 0; yl < G; yl++)
        Pl[yl] = arguments[yl + 2];
      O.children = Pl;
    }
    return xl(s.type, q, void 0, void 0, J, O);
  }, x.createContext = function(s) {
    return s = {
      $$typeof: F,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: W,
      _context: s
    }, s;
  }, x.createElement = function(s, A, M) {
    var O, q = {}, J = null;
    if (A != null)
      for (O in A.key !== void 0 && (J = "" + A.key), A)
        Ll.call(A, O) && O !== "key" && O !== "__self" && O !== "__source" && (q[O] = A[O]);
    var G = arguments.length - 2;
    if (G === 1) q.children = M;
    else if (1 < G) {
      for (var Pl = Array(G), yl = 0; yl < G; yl++)
        Pl[yl] = arguments[yl + 2];
      q.children = Pl;
    }
    if (s && s.defaultProps)
      for (O in G = s.defaultProps, G)
        q[O] === void 0 && (q[O] = G[O]);
    return xl(s, J, void 0, void 0, null, q);
  }, x.createRef = function() {
    return { current: null };
  }, x.forwardRef = function(s) {
    return { $$typeof: sl, render: s };
  }, x.isValidElement = Jl, x.lazy = function(s) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: s },
      _init: _
    };
  }, x.memo = function(s, A) {
    return {
      $$typeof: E,
      type: s,
      compare: A === void 0 ? null : A
    };
  }, x.startTransition = function(s) {
    var A = L.T, M = {};
    L.T = M;
    try {
      var O = s(), q = L.S;
      q !== null && q(M, O), typeof O == "object" && O !== null && typeof O.then == "function" && O.then(P, H);
    } catch (J) {
      H(J);
    } finally {
      L.T = A;
    }
  }, x.unstable_useCacheRefresh = function() {
    return L.H.useCacheRefresh();
  }, x.use = function(s) {
    return L.H.use(s);
  }, x.useActionState = function(s, A, M) {
    return L.H.useActionState(s, A, M);
  }, x.useCallback = function(s, A) {
    return L.H.useCallback(s, A);
  }, x.useContext = function(s) {
    return L.H.useContext(s);
  }, x.useDebugValue = function() {
  }, x.useDeferredValue = function(s, A) {
    return L.H.useDeferredValue(s, A);
  }, x.useEffect = function(s, A, M) {
    var O = L.H;
    if (typeof M == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return O.useEffect(s, A);
  }, x.useId = function() {
    return L.H.useId();
  }, x.useImperativeHandle = function(s, A, M) {
    return L.H.useImperativeHandle(s, A, M);
  }, x.useInsertionEffect = function(s, A) {
    return L.H.useInsertionEffect(s, A);
  }, x.useLayoutEffect = function(s, A) {
    return L.H.useLayoutEffect(s, A);
  }, x.useMemo = function(s, A) {
    return L.H.useMemo(s, A);
  }, x.useOptimistic = function(s, A) {
    return L.H.useOptimistic(s, A);
  }, x.useReducer = function(s, A, M) {
    return L.H.useReducer(s, A, M);
  }, x.useRef = function(s) {
    return L.H.useRef(s);
  }, x.useState = function(s) {
    return L.H.useState(s);
  }, x.useSyncExternalStore = function(s, A, M) {
    return L.H.useSyncExternalStore(
      s,
      A,
      M
    );
  }, x.useTransition = function() {
    return L.H.useTransition();
  }, x.version = "19.1.1", x;
}
var uy;
function ei() {
  return uy || (uy = 1, ui.exports = Y1()), ui.exports;
}
var ai = { exports: {} }, Cl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ay;
function B1() {
  if (ay) return Cl;
  ay = 1;
  var z = ei();
  function X(R) {
    var E = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var N = 2; N < arguments.length; N++)
        E += "&args[]=" + encodeURIComponent(arguments[N]);
    }
    return "Minified React error #" + R + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function j() {
  }
  var r = {
    d: {
      f: j,
      r: function() {
        throw Error(X(522));
      },
      D: j,
      C: j,
      L: j,
      m: j,
      X: j,
      S: j,
      M: j
    },
    p: 0,
    findDOMNode: null
  }, ul = Symbol.for("react.portal");
  function W(R, E, N) {
    var fl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ul,
      key: fl == null ? null : "" + fl,
      children: R,
      containerInfo: E,
      implementation: N
    };
  }
  var F = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function sl(R, E) {
    if (R === "font") return "";
    if (typeof E == "string")
      return E === "use-credentials" ? E : "";
  }
  return Cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Cl.createPortal = function(R, E) {
    var N = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
      throw Error(X(299));
    return W(R, E, null, N);
  }, Cl.flushSync = function(R) {
    var E = F.T, N = r.p;
    try {
      if (F.T = null, r.p = 2, R) return R();
    } finally {
      F.T = E, r.p = N, r.d.f();
    }
  }, Cl.preconnect = function(R, E) {
    typeof R == "string" && (E ? (E = E.crossOrigin, E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null, r.d.C(R, E));
  }, Cl.prefetchDNS = function(R) {
    typeof R == "string" && r.d.D(R);
  }, Cl.preinit = function(R, E) {
    if (typeof R == "string" && E && typeof E.as == "string") {
      var N = E.as, fl = sl(N, E.crossOrigin), $ = typeof E.integrity == "string" ? E.integrity : void 0, Hl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
      N === "style" ? r.d.S(
        R,
        typeof E.precedence == "string" ? E.precedence : void 0,
        {
          crossOrigin: fl,
          integrity: $,
          fetchPriority: Hl
        }
      ) : N === "script" && r.d.X(R, {
        crossOrigin: fl,
        integrity: $,
        fetchPriority: Hl,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0
      });
    }
  }, Cl.preinitModule = function(R, E) {
    if (typeof R == "string")
      if (typeof E == "object" && E !== null) {
        if (E.as == null || E.as === "script") {
          var N = sl(
            E.as,
            E.crossOrigin
          );
          r.d.M(R, {
            crossOrigin: N,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
            nonce: typeof E.nonce == "string" ? E.nonce : void 0
          });
        }
      } else E == null && r.d.M(R);
  }, Cl.preload = function(R, E) {
    if (typeof R == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
      var N = E.as, fl = sl(N, E.crossOrigin);
      r.d.L(R, N, {
        crossOrigin: fl,
        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
        nonce: typeof E.nonce == "string" ? E.nonce : void 0,
        type: typeof E.type == "string" ? E.type : void 0,
        fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
        referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
        imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
        imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
        media: typeof E.media == "string" ? E.media : void 0
      });
    }
  }, Cl.preloadModule = function(R, E) {
    if (typeof R == "string")
      if (E) {
        var N = sl(E.as, E.crossOrigin);
        r.d.m(R, {
          as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
          crossOrigin: N,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0
        });
      } else r.d.m(R);
  }, Cl.requestFormReset = function(R) {
    r.d.r(R);
  }, Cl.unstable_batchedUpdates = function(R, E) {
    return R(E);
  }, Cl.useFormState = function(R, E, N) {
    return F.H.useFormState(R, E, N);
  }, Cl.useFormStatus = function() {
    return F.H.useHostTransitionStatus();
  }, Cl.version = "19.1.1", Cl;
}
var ey;
function p1() {
  if (ey) return ai.exports;
  ey = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (X) {
        console.error(X);
      }
  }
  return z(), ai.exports = B1(), ai.exports;
}
var ny;
function G1() {
  if (ny) return Se;
  ny = 1;
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var z = q1(), X = ei(), j = p1();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ul(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function W(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function F(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function sl(l) {
    if (W(l) !== l)
      throw Error(r(188));
  }
  function R(l) {
    var t = l.alternate;
    if (!t) {
      if (t = W(l), t === null) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return sl(e), l;
          if (n === a) return sl(e), t;
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (u.alternate !== a) throw Error(r(190));
    }
    if (u.tag !== 3) throw Error(r(188));
    return u.stateNode.current === u ? l : t;
  }
  function E(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = E(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var N = Object.assign, fl = Symbol.for("react.element"), $ = Symbol.for("react.transitional.element"), Hl = Symbol.for("react.portal"), ql = Symbol.for("react.fragment"), vl = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), hl = Symbol.for("react.provider"), Vl = Symbol.for("react.consumer"), ol = Symbol.for("react.context"), Il = Symbol.for("react.forward_ref"), L = Symbol.for("react.suspense"), Ll = Symbol.for("react.suspense_list"), xl = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), Jl = Symbol.for("react.activity"), Ut = Symbol.for("react.memo_cache_sentinel"), St = Symbol.iterator;
  function Sl(l) {
    return l === null || typeof l != "object" ? null : (l = St && l[St] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Ql = Symbol.for("react.client.reference");
  function Yl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ql ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case I:
        return "Profiler";
      case vl:
        return "StrictMode";
      case L:
        return "Suspense";
      case Ll:
        return "SuspenseList";
      case Jl:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Hl:
          return "Portal";
        case ol:
          return (l.displayName || "Context") + ".Provider";
        case Vl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Il:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case xl:
          return t = l.displayName || null, t !== null ? t : Yl(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return Yl(l(t));
          } catch {
          }
      }
    return null;
  }
  var bl = Array.isArray, g = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _ = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, P = [], s = -1;
  function A(l) {
    return { current: l };
  }
  function M(l) {
    0 > s || (l.current = P[s], P[s] = null, s--);
  }
  function O(l, t) {
    s++, P[s] = l.current, l.current = t;
  }
  var q = A(null), J = A(null), G = A(null), Pl = A(null);
  function yl(l, t) {
    switch (O(G, t), O(J, l), O(q, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Ov(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = Ov(t), l = Mv(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    M(q), O(q, l);
  }
  function Lt() {
    M(q), M(J), M(G);
  }
  function Gn(l) {
    l.memoizedState !== null && O(Pl, l);
    var t = q.current, u = Mv(t, l.type);
    t !== u && (O(J, l), O(q, u));
  }
  function be(l) {
    J.current === l && (M(q), M(J)), Pl.current === l && (M(Pl), de._currentValue = H);
  }
  var xn = Object.prototype.hasOwnProperty, Xn = z.unstable_scheduleCallback, Qn = z.unstable_cancelCallback, cy = z.unstable_shouldYield, iy = z.unstable_requestPaint, At = z.unstable_now, sy = z.unstable_getCurrentPriorityLevel, ni = z.unstable_ImmediatePriority, fi = z.unstable_UserBlockingPriority, Te = z.unstable_NormalPriority, vy = z.unstable_LowPriority, ci = z.unstable_IdlePriority, yy = z.log, dy = z.unstable_setDisableYieldValue, Ta = null, lt = null;
  function Kt(l) {
    if (typeof yy == "function" && dy(l), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(Ta, l);
      } catch {
      }
  }
  var tt = Math.clz32 ? Math.clz32 : my, hy = Math.log, oy = Math.LN2;
  function my(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (hy(l) / oy | 0) | 0;
  }
  var Ee = 256, Ae = 4194304;
  function ru(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ze(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = ru(a) : (f &= c, f !== 0 ? e = ru(f) : u || (u = c & ~l, u !== 0 && (e = ru(u))))) : (c = a & ~n, c !== 0 ? e = ru(c) : f !== 0 ? e = ru(f) : u || (u = a & ~l, u !== 0 && (e = ru(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ea(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function ry(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ii() {
    var l = Ee;
    return Ee <<= 1, (Ee & 4194048) === 0 && (Ee = 256), l;
  }
  function si() {
    var l = Ae;
    return Ae <<= 1, (Ae & 62914560) === 0 && (Ae = 4194304), l;
  }
  function jn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function Aa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function gy(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - tt(u), T = 1 << S;
      c[S] = 0, i[S] = -1;
      var o = h[S];
      if (o !== null)
        for (h[S] = null, S = 0; S < o.length; S++) {
          var m = o[S];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && vi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function vi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - tt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 4194090;
  }
  function yi(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - tt(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Zn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Cn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function di() {
    var l = _.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Kv(l.type));
  }
  function Sy(l, t) {
    var u = _.p;
    try {
      return _.p = l, t();
    } finally {
      _.p = u;
    }
  }
  var Jt = Math.random().toString(36).slice(2), jl = "__reactFiber$" + Jt, wl = "__reactProps$" + Jt, Bu = "__reactContainer$" + Jt, Vn = "__reactEvents$" + Jt, by = "__reactListeners$" + Jt, Ty = "__reactHandles$" + Jt, hi = "__reactResources$" + Jt, za = "__reactMarker$" + Jt;
  function Ln(l) {
    delete l[jl], delete l[wl], delete l[Vn], delete l[by], delete l[Ty];
  }
  function pu(l) {
    var t = l[jl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[Bu] || u[jl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Nv(l); l !== null; ) {
            if (u = l[jl]) return u;
            l = Nv(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Gu(l) {
    if (l = l[jl] || l[Bu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function _a(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function xu(l) {
    var t = l[hi];
    return t || (t = l[hi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ml(l) {
    l[za] = !0;
  }
  var oi = /* @__PURE__ */ new Set(), mi = {};
  function gu(l, t) {
    Xu(l, t), Xu(l + "Capture", t);
  }
  function Xu(l, t) {
    for (mi[l] = t, l = 0; l < t.length; l++)
      oi.add(t[l]);
  }
  var Ey = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ri = {}, gi = {};
  function Ay(l) {
    return xn.call(gi, l) ? !0 : xn.call(ri, l) ? !1 : Ey.test(l) ? gi[l] = !0 : (ri[l] = !0, !1);
  }
  function _e(l, t, u) {
    if (Ay(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Oe(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Rt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  var Kn, Si;
  function Qu(l) {
    if (Kn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Kn = t && t[1] || "", Si = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Kn + l + Si;
  }
  var Jn = !1;
  function wn(l, t) {
    if (!l || Jn) return "";
    Jn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (m) {
                  var o = m;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (m) {
                  o = m;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                o = m;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (m) {
            if (m && o && typeof m.stack == "string")
              return [m.stack, o.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), h = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < h.length && !h[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === h.length)
          for (a = i.length - 1, e = h.length - 1; 1 <= a && 0 <= e && i[a] !== h[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== h[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== h[e]) {
                  var S = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      Jn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Qu(u) : "";
  }
  function zy(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Qu(l.type);
      case 16:
        return Qu("Lazy");
      case 13:
        return Qu("Suspense");
      case 19:
        return Qu("SuspenseList");
      case 0:
      case 15:
        return wn(l.type, !1);
      case 11:
        return wn(l.type.render, !1);
      case 1:
        return wn(l.type, !0);
      case 31:
        return Qu("Activity");
      default:
        return "";
    }
  }
  function bi(l) {
    try {
      var t = "";
      do
        t += zy(l), l = l.return;
      while (l);
      return t;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function st(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Ti(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function _y(l) {
    var t = Ti(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    ), a = "" + l[t];
    if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          a = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(f) {
          a = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = _y(l));
  }
  function Ei(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = Ti(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function De(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Oy = /[\n"\\]/g;
  function vt(l) {
    return l.replace(
      Oy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? $n(l, f, st(t)) : u != null ? $n(l, f, st(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + st(c) : l.removeAttribute("name");
  }
  function Ai(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null))
        return;
      u = u != null ? "" + st(u) : "", t = t != null ? "" + st(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function $n(l, t, u) {
    t === "number" && De(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function ju(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + st(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zi(l, t, u) {
    if (t != null && (t = "" + st(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + st(u) : "";
  }
  function _i(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(r(92));
        if (bl(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = st(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a);
  }
  function Zu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var My = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Oi(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || My.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Mi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(r(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Oi(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Oi(l, n, t[n]);
  }
  function kn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Dy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Uy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ue(l) {
    return Uy.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Fn = null;
  function In(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Cu = null, Vu = null;
  function Di(l) {
    var t = Gu(l);
    if (t && (l = t.stateNode)) {
      var u = l[wl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Wn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + vt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[wl] || null;
                if (!e) throw Error(r(90));
                Wn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ei(a);
          }
          break l;
        case "textarea":
          zi(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && ju(l, !!u.multiple, t, !1);
      }
    }
  }
  var Pn = !1;
  function Ui(l, t, u) {
    if (Pn) return l(t, u);
    Pn = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (Pn = !1, (Cu !== null || Vu !== null) && (on(), Cu && (t = Cu, l = Vu, Vu = Cu = null, Di(t), l)))
        for (t = 0; t < l.length; t++) Di(l[t]);
    }
  }
  function Oa(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[wl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        r(231, t, typeof u)
      );
    return u;
  }
  var Nt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), lf = !1;
  if (Nt)
    try {
      var Ma = {};
      Object.defineProperty(Ma, "passive", {
        get: function() {
          lf = !0;
        }
      }), window.addEventListener("test", Ma, Ma), window.removeEventListener("test", Ma, Ma);
    } catch {
      lf = !1;
    }
  var wt = null, tf = null, Re = null;
  function Ri() {
    if (Re) return Re;
    var l, t = tf, u = t.length, a, e = "value" in wt ? wt.value : wt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return Re = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Ne(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function He() {
    return !0;
  }
  function Ni() {
    return !1;
  }
  function Wl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : Ni, this.isPropagationStopped = Ni, this;
    }
    return N(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = He);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = He);
      },
      persist: function() {
      },
      isPersistent: He
    }), t;
  }
  var Su = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, qe = Wl(Su), Da = N({}, Su, { view: 0, detail: 0 }), Ry = Wl(Da), uf, af, Ua, Ye = N({}, Da, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ua && (Ua && l.type === "mousemove" ? (uf = l.screenX - Ua.screenX, af = l.screenY - Ua.screenY) : af = uf = 0, Ua = l), uf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : af;
    }
  }), Hi = Wl(Ye), Ny = N({}, Ye, { dataTransfer: 0 }), Hy = Wl(Ny), qy = N({}, Da, { relatedTarget: 0 }), ef = Wl(qy), Yy = N({}, Su, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), By = Wl(Yy), py = N({}, Su, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Gy = Wl(py), xy = N({}, Su, { data: 0 }), qi = Wl(xy), Xy = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Qy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, jy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Zy(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = jy[l]) ? !!t[l] : !1;
  }
  function nf() {
    return Zy;
  }
  var Cy = N({}, Da, {
    key: function(l) {
      if (l.key) {
        var t = Xy[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Ne(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Qy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nf,
    charCode: function(l) {
      return l.type === "keypress" ? Ne(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ne(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Vy = Wl(Cy), Ly = N({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Yi = Wl(Ly), Ky = N({}, Da, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf
  }), Jy = Wl(Ky), wy = N({}, Su, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wy = Wl(wy), $y = N({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ky = Wl($y), Fy = N({}, Su, {
    newState: 0,
    oldState: 0
  }), Iy = Wl(Fy), Py = [9, 13, 27, 32], ff = Nt && "CompositionEvent" in window, Ra = null;
  Nt && "documentMode" in document && (Ra = document.documentMode);
  var ld = Nt && "TextEvent" in window && !Ra, Bi = Nt && (!ff || Ra && 8 < Ra && 11 >= Ra), pi = " ", Gi = !1;
  function xi(l, t) {
    switch (l) {
      case "keyup":
        return Py.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lu = !1;
  function td(l, t) {
    switch (l) {
      case "compositionend":
        return Xi(t);
      case "keypress":
        return t.which !== 32 ? null : (Gi = !0, pi);
      case "textInput":
        return l = t.data, l === pi && Gi ? null : l;
      default:
        return null;
    }
  }
  function ud(l, t) {
    if (Lu)
      return l === "compositionend" || !ff && xi(l, t) ? (l = Ri(), Re = tf = wt = null, Lu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Bi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ad = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Qi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ad[l.type] : t === "textarea";
  }
  function ji(l, t, u, a) {
    Cu ? Vu ? Vu.push(a) : Vu = [a] : Cu = a, t = Tn(t, "onChange"), 0 < t.length && (u = new qe(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var Na = null, Ha = null;
  function ed(l) {
    Tv(l, 0);
  }
  function Be(l) {
    var t = _a(l);
    if (Ei(t)) return l;
  }
  function Zi(l, t) {
    if (l === "change") return t;
  }
  var Ci = !1;
  if (Nt) {
    var cf;
    if (Nt) {
      var sf = "oninput" in document;
      if (!sf) {
        var Vi = document.createElement("div");
        Vi.setAttribute("oninput", "return;"), sf = typeof Vi.oninput == "function";
      }
      cf = sf;
    } else cf = !1;
    Ci = cf && (!document.documentMode || 9 < document.documentMode);
  }
  function Li() {
    Na && (Na.detachEvent("onpropertychange", Ki), Ha = Na = null);
  }
  function Ki(l) {
    if (l.propertyName === "value" && Be(Ha)) {
      var t = [];
      ji(
        t,
        Ha,
        l,
        In(l)
      ), Ui(ed, t);
    }
  }
  function nd(l, t, u) {
    l === "focusin" ? (Li(), Na = t, Ha = u, Na.attachEvent("onpropertychange", Ki)) : l === "focusout" && Li();
  }
  function fd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Ha);
  }
  function cd(l, t) {
    if (l === "click") return Be(t);
  }
  function id(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function sd(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var ut = typeof Object.is == "function" ? Object.is : sd;
  function qa(l, t) {
    if (ut(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!xn.call(t, e) || !ut(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function Ji(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function wi(l, t) {
    var u = Ji(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Ji(u);
    }
  }
  function Wi(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Wi(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function $i(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = De(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = De(l.document);
    }
    return t;
  }
  function vf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var vd = Nt && "documentMode" in document && 11 >= document.documentMode, Ku = null, yf = null, Ya = null, df = !1;
  function ki(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    df || Ku == null || Ku !== De(a) || (a = Ku, "selectionStart" in a && vf(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ya && qa(Ya, a) || (Ya = a, a = Tn(yf, "onSelect"), 0 < a.length && (t = new qe(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Ku)));
  }
  function bu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Ju = {
    animationend: bu("Animation", "AnimationEnd"),
    animationiteration: bu("Animation", "AnimationIteration"),
    animationstart: bu("Animation", "AnimationStart"),
    transitionrun: bu("Transition", "TransitionRun"),
    transitionstart: bu("Transition", "TransitionStart"),
    transitioncancel: bu("Transition", "TransitionCancel"),
    transitionend: bu("Transition", "TransitionEnd")
  }, hf = {}, Fi = {};
  Nt && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete Ju.animationend.animation, delete Ju.animationiteration.animation, delete Ju.animationstart.animation), "TransitionEvent" in window || delete Ju.transitionend.transition);
  function Tu(l) {
    if (hf[l]) return hf[l];
    if (!Ju[l]) return l;
    var t = Ju[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in Fi)
        return hf[l] = t[u];
    return l;
  }
  var Ii = Tu("animationend"), Pi = Tu("animationiteration"), l0 = Tu("animationstart"), yd = Tu("transitionrun"), dd = Tu("transitionstart"), hd = Tu("transitioncancel"), t0 = Tu("transitionend"), u0 = /* @__PURE__ */ new Map(), of = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  of.push("scrollEnd");
  function bt(l, t) {
    u0.set(l, t), gu(t, [l]);
  }
  var a0 = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = a0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: bi(t)
      }, a0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: bi(t)
    };
  }
  var dt = [], wu = 0, mf = 0;
  function pe() {
    for (var l = wu, t = mf = wu = 0; t < l; ) {
      var u = dt[t];
      dt[t++] = null;
      var a = dt[t];
      dt[t++] = null;
      var e = dt[t];
      dt[t++] = null;
      var n = dt[t];
      if (dt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && e0(u, e, n);
    }
  }
  function Ge(l, t, u, a) {
    dt[wu++] = l, dt[wu++] = t, dt[wu++] = u, dt[wu++] = a, mf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function rf(l, t, u, a) {
    return Ge(l, t, u, a), xe(l);
  }
  function Wu(l, t) {
    return Ge(l, null, null, t), xe(l);
  }
  function e0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - tt(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function xe(l) {
    if (50 < ee)
      throw ee = 0, Ac = null, Error(r(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $u = {};
  function od(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(l, t, u, a) {
    return new od(l, t, u, a);
  }
  function gf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ht(l, t) {
    var u = l.alternate;
    return u === null ? (u = at(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function n0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Xe(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") gf(l) && (f = 1);
    else if (typeof l == "string")
      f = r1(
        l,
        u,
        q.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Jl:
          return l = at(31, u, t, e), l.elementType = Jl, l.lanes = n, l;
        case ql:
          return Eu(u.children, e, n, t);
        case vl:
          f = 8, e |= 24;
          break;
        case I:
          return l = at(12, u, t, e | 2), l.elementType = I, l.lanes = n, l;
        case L:
          return l = at(13, u, t, e), l.elementType = L, l.lanes = n, l;
        case Ll:
          return l = at(19, u, t, e), l.elementType = Ll, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case hl:
              case ol:
                f = 10;
                break l;
              case Vl:
                f = 9;
                break l;
              case Il:
                f = 11;
                break l;
              case xl:
                f = 14;
                break l;
              case Xl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            r(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = at(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function Eu(l, t, u, a) {
    return l = at(7, l, a, t), l.lanes = u, l;
  }
  function Sf(l, t, u) {
    return l = at(6, l, null, t), l.lanes = u, l;
  }
  function bf(l, t, u) {
    return t = at(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var ku = [], Fu = 0, Qe = null, je = 0, ht = [], ot = 0, Au = null, qt = 1, Yt = "";
  function zu(l, t) {
    ku[Fu++] = je, ku[Fu++] = Qe, Qe = l, je = t;
  }
  function f0(l, t, u) {
    ht[ot++] = qt, ht[ot++] = Yt, ht[ot++] = Au, Au = l;
    var a = qt;
    l = Yt;
    var e = 32 - tt(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - tt(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, qt = 1 << 32 - tt(t) + e | u << e | a, Yt = n + l;
    } else
      qt = 1 << n | u << e | a, Yt = l;
  }
  function Tf(l) {
    l.return !== null && (zu(l, 1), f0(l, 1, 0));
  }
  function Ef(l) {
    for (; l === Qe; )
      Qe = ku[--Fu], ku[Fu] = null, je = ku[--Fu], ku[Fu] = null;
    for (; l === Au; )
      Au = ht[--ot], ht[ot] = null, Yt = ht[--ot], ht[ot] = null, qt = ht[--ot], ht[ot] = null;
  }
  var Kl = null, rl = null, k = !1, _u = null, zt = !1, Af = Error(r(519));
  function Ou(l) {
    var t = Error(r(418, ""));
    throw Ga(yt(t, l)), Af;
  }
  function c0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[jl] = l, t[wl] = a, u) {
      case "dialog":
        V("cancel", t), V("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        V("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < fe.length; u++)
          V(fe[u], t);
        break;
      case "source":
        V("error", t);
        break;
      case "img":
      case "image":
      case "link":
        V("error", t), V("load", t);
        break;
      case "details":
        V("toggle", t);
        break;
      case "input":
        V("invalid", t), Ai(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        ), Me(t);
        break;
      case "select":
        V("invalid", t);
        break;
      case "textarea":
        V("invalid", t), _i(t, a.value, a.defaultValue, a.children), Me(t);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || _v(t.textContent, u) ? (a.popover != null && (V("beforetoggle", t), V("toggle", t)), a.onScroll != null && V("scroll", t), a.onScrollEnd != null && V("scrollend", t), a.onClick != null && (t.onclick = En), t = !0) : t = !1, t || Ou(l);
  }
  function i0(l) {
    for (Kl = l.return; Kl; )
      switch (Kl.tag) {
        case 5:
        case 13:
          zt = !1;
          return;
        case 27:
        case 3:
          zt = !0;
          return;
        default:
          Kl = Kl.return;
      }
  }
  function Ba(l) {
    if (l !== Kl) return !1;
    if (!k) return i0(l), k = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Xc(l.type, l.memoizedProps)), u = !u), u && rl && Ou(l), i0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(r(317));
      l: {
        for (l = l.nextSibling, t = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (t === 0) {
                rl = Et(l.nextSibling);
                break l;
              }
              t--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || t++;
          l = l.nextSibling;
        }
        rl = null;
      }
    } else
      t === 27 ? (t = rl, su(l.type) ? (l = Cc, Cc = null, rl = l) : rl = t) : rl = Kl ? Et(l.stateNode.nextSibling) : null;
    return !0;
  }
  function pa() {
    rl = Kl = null, k = !1;
  }
  function s0() {
    var l = _u;
    return l !== null && (Fl === null ? Fl = l : Fl.push.apply(
      Fl,
      l
    ), _u = null), l;
  }
  function Ga(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var zf = A(null), Mu = null, Bt = null;
  function Wt(l, t, u) {
    O(zf, t._currentValue), t._currentValue = u;
  }
  function pt(l) {
    l._currentValue = zf.current, M(zf);
  }
  function _f(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Of(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), _f(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(r(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), _f(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function xa(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          ut(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === Pl.current) {
        if (f = e.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(de) : l = [de]);
      }
      e = e.return;
    }
    l !== null && Of(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ut(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Du(l) {
    Mu = l, Bt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return v0(Mu, l);
  }
  function Ce(l, t) {
    return Mu === null && Du(l), v0(l, t);
  }
  function v0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Bt === null) {
      if (l === null) throw Error(r(308));
      Bt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Bt = Bt.next = t;
    return u;
  }
  var md = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, rd = z.unstable_scheduleCallback, gd = z.unstable_NormalPriority, _l = {
    $$typeof: ol,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mf() {
    return {
      controller: new md(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Xa(l) {
    l.refCount--, l.refCount === 0 && rd(gd, function() {
      l.controller.abort();
    });
  }
  var Qa = null, Df = 0, Iu = 0, Pu = null;
  function Sd(l, t) {
    if (Qa === null) {
      var u = Qa = [];
      Df = 0, Iu = Rc(), Pu = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return Df++, t.then(y0, y0), t;
  }
  function y0() {
    if (--Df === 0 && Qa !== null) {
      Pu !== null && (Pu.status = "fulfilled");
      var l = Qa;
      Qa = null, Iu = 0, Pu = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function bd(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var d0 = g.S;
  g.S = function(l, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && Sd(l, t), d0 !== null && d0(l, t);
  };
  var Uu = A(null);
  function Uf() {
    var l = Uu.current;
    return l !== null ? l : il.pooledCache;
  }
  function Ve(l, t) {
    t === null ? O(Uu, Uu.current) : O(Uu, t.pool);
  }
  function h0() {
    var l = Uf();
    return l === null ? null : { parent: _l._currentValue, pool: l };
  }
  var ja = Error(r(460)), o0 = Error(r(474)), Le = Error(r(542)), Rf = { then: function() {
  } };
  function m0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ke() {
  }
  function r0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ke, Ke), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, S0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ke, Ke);
        else {
          if (l = il, l !== null && 100 < l.shellSuspendCounter)
            throw Error(r(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, S0(l), l;
        }
        throw Za = t, ja;
    }
  }
  var Za = null;
  function g0() {
    if (Za === null) throw Error(r(459));
    var l = Za;
    return Za = null, l;
  }
  function S0(l) {
    if (l === ja || l === Le)
      throw Error(r(483));
  }
  var $t = !1;
  function Nf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function kt(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ft(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ll & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = xe(l), e0(l, null, u), t;
    }
    return Ge(l, a, t, u), xe(l);
  }
  function Ca(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  function qf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Yf = !1;
  function Va() {
    if (Yf) {
      var l = Pu;
      if (l !== null) throw l;
    }
  }
  function La(l, t, u, a) {
    Yf = !1;
    var e = l.updateQueue;
    $t = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, h = i.next;
      i.next = null, f === null ? n = h : f.next = h, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = h : c.next = h, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, S = h = i = null, c = n;
      do {
        var o = c.lane & -536870913, m = o !== c.lane;
        if (m ? (K & o) === o : (a & o) === o) {
          o !== 0 && o === Iu && (Yf = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var p = l, Y = c;
            o = t;
            var nl = u;
            switch (Y.tag) {
              case 1:
                if (p = Y.payload, typeof p == "function") {
                  T = p.call(nl, T, o);
                  break l;
                }
                T = p;
                break l;
              case 3:
                p.flags = p.flags & -65537 | 128;
              case 0:
                if (p = Y.payload, o = typeof p == "function" ? p.call(nl, T, o) : p, o == null) break l;
                T = N({}, T, o);
                break l;
              case 2:
                $t = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [o] : m.push(o));
        } else
          m = {
            lane: o,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (h = S = m, i = T) : S = S.next = m, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = T), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), nu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function b0(l, t) {
    if (typeof l != "function")
      throw Error(r(191, l));
    l.call(t);
  }
  function T0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        b0(u[l], t);
  }
  var la = A(null), Je = A(0);
  function E0(l, t) {
    l = Ct, O(Je, l), O(la, t), Ct = l | t.baseLanes;
  }
  function Bf() {
    O(Je, Ct), O(la, la.current);
  }
  function pf() {
    Ct = Je.current, M(la), M(Je);
  }
  var It = 0, Q = null, al = null, Al = null, we = !1, ta = !1, Ru = !1, We = 0, Ka = 0, ua = null, Td = 0;
  function Tl() {
    throw Error(r(321));
  }
  function Gf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!ut(l[u], t[u])) return !1;
    return !0;
  }
  function xf(l, t, u, a, e, n) {
    return It = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, g.H = l === null || l.memoizedState === null ? es : ns, Ru = !1, n = u(a, e), Ru = !1, ta && (n = z0(
      t,
      u,
      a,
      e
    )), A0(l), n;
  }
  function A0(l) {
    g.H = ln;
    var t = al !== null && al.next !== null;
    if (It = 0, Al = al = Q = null, we = !1, Ka = 0, ua = null, t) throw Error(r(300));
    l === null || Dl || (l = l.dependencies, l !== null && Ze(l) && (Dl = !0));
  }
  function z0(l, t, u, a) {
    Q = l;
    var e = 0;
    do {
      if (ta && (ua = null), Ka = 0, ta = !1, 25 <= e) throw Error(r(301));
      if (e += 1, Al = al = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      g.H = Dd, n = t(u, a);
    } while (ta);
    return n;
  }
  function Ed() {
    var l = g.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Ja(t) : t, l = l.useState()[0], (al !== null ? al.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Xf() {
    var l = We !== 0;
    return We = 0, l;
  }
  function Qf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function jf(l) {
    if (we) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      we = !1;
    }
    It = 0, Al = al = Q = null, ta = !1, Ka = We = 0, ua = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? Q.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function zl() {
    if (al === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = al.next;
    var t = Al === null ? Q.memoizedState : Al.next;
    if (t !== null)
      Al = t, al = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(r(467)) : Error(r(310));
      al = l, l = {
        memoizedState: al.memoizedState,
        baseState: al.baseState,
        baseQueue: al.baseQueue,
        queue: al.queue,
        next: null
      }, Al === null ? Q.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function Zf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ja(l) {
    var t = Ka;
    return Ka += 1, ua === null && (ua = []), l = r0(ua, l, t), t = Q, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, g.H = t === null || t.memoizedState === null ? es : ns), l;
  }
  function $e(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Ja(l);
      if (l.$$typeof === ol) return Zl(l);
    }
    throw Error(r(438, String(l)));
  }
  function Cf(l) {
    var t = null, u = Q.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = Q.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = Zf(), Q.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Ut;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function ke(l) {
    var t = zl();
    return Vf(t, al, l);
  }
  function Vf(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, h = t, S = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (K & T) === T : (It & T) === T) {
          var o = h.revertLane;
          if (o === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), T === Iu && (S = !0);
          else if ((It & o) === o) {
            h = h.next, o === Iu && (S = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: h.revertLane,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, Q.lanes |= o, nu |= o;
          T = h.action, Ru && u(n, T), n = h.hasEagerState ? h.eagerState : u(n, T);
        } else
          o = {
            lane: T,
            revertLane: h.revertLane,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, Q.lanes |= T, nu |= T;
        h = h.next;
      } while (h !== null && h !== t);
      if (i === null ? f = n : i.next = c, !ut(n, l.memoizedState) && (Dl = !0, S && (u = Pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Lf(l) {
    var t = zl(), u = t.queue;
    if (u === null) throw Error(r(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      ut(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function _0(l, t, u) {
    var a = Q, e = zl(), n = k;
    if (n) {
      if (u === void 0) throw Error(r(407));
      u = u();
    } else u = t();
    var f = !ut(
      (al || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, Dl = !0), e = e.queue;
    var c = D0.bind(null, a, e, l);
    if (wa(2048, 8, c, [l]), e.getSnapshot !== t || f || Al !== null && Al.memoizedState.tag & 1) {
      if (a.flags |= 2048, aa(
        9,
        Fe(),
        M0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), il === null) throw Error(r(349));
      n || (It & 124) !== 0 || O0(a, t, u);
    }
    return u;
  }
  function O0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = Q.updateQueue, t === null ? (t = Zf(), Q.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function M0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, U0(t) && R0(l);
  }
  function D0(l, t, u) {
    return u(function() {
      U0(t) && R0(l);
    });
  }
  function U0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !ut(l, u);
    } catch {
      return !0;
    }
  }
  function R0(l) {
    var t = Wu(l, 2);
    t !== null && it(t, l, 2);
  }
  function Kf(l) {
    var t = $l();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ru) {
        Kt(!0);
        try {
          u();
        } finally {
          Kt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function N0(l, t, u, a) {
    return l.baseState = u, Vf(
      l,
      al,
      typeof a == "function" ? a : Gt
    );
  }
  function Ad(l, t, u, a, e) {
    if (Pe(l)) throw Error(r(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      g.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, H0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function H0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = g.T, f = {};
      g.T = f;
      try {
        var c = u(e, a), i = g.S;
        i !== null && i(f, c), q0(l, t, c);
      } catch (h) {
        Jf(l, t, h);
      } finally {
        g.T = n;
      }
    } else
      try {
        n = u(e, a), q0(l, t, n);
      } catch (h) {
        Jf(l, t, h);
      }
  }
  function q0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        Y0(l, t, a);
      },
      function(a) {
        return Jf(l, t, a);
      }
    ) : Y0(l, t, u);
  }
  function Y0(l, t, u) {
    t.status = "fulfilled", t.value = u, B0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, H0(l, u)));
  }
  function Jf(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, B0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function B0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function p0(l, t) {
    return t;
  }
  function G0(l, t) {
    if (k) {
      var u = il.formState;
      if (u !== null) {
        l: {
          var a = Q;
          if (k) {
            if (rl) {
              t: {
                for (var e = rl, n = zt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = Et(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                rl = Et(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            Ou(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = $l(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: p0,
      lastRenderedState: t
    }, u.queue = a, u = ts.bind(
      null,
      Q,
      a
    ), a.dispatch = u, a = Kf(!1), n = Ff.bind(
      null,
      Q,
      !1,
      a.queue
    ), a = $l(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Ad.bind(
      null,
      Q,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function x0(l) {
    var t = zl();
    return X0(t, al, l);
  }
  function X0(l, t, u) {
    if (t = Vf(
      l,
      t,
      p0
    )[0], l = ke(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ja(t);
      } catch (f) {
        throw f === ja ? Le : f;
      }
    else a = t;
    t = zl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (Q.flags |= 2048, aa(
      9,
      Fe(),
      zd.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function zd(l, t) {
    l.action = t;
  }
  function Q0(l) {
    var t = zl(), u = al;
    if (u !== null)
      return X0(t, u, l);
    zl(), t = t.memoizedState, u = zl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function aa(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Zf(), Q.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Fe() {
    return { destroy: void 0, resource: void 0 };
  }
  function j0() {
    return zl().memoizedState;
  }
  function Ie(l, t, u, a) {
    var e = $l();
    a = a === void 0 ? null : a, Q.flags |= l, e.memoizedState = aa(
      1 | t,
      Fe(),
      u,
      a
    );
  }
  function wa(l, t, u, a) {
    var e = zl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    al !== null && a !== null && Gf(a, al.memoizedState.deps) ? e.memoizedState = aa(t, n, u, a) : (Q.flags |= l, e.memoizedState = aa(
      1 | t,
      n,
      u,
      a
    ));
  }
  function Z0(l, t) {
    Ie(8390656, 8, l, t);
  }
  function C0(l, t) {
    wa(2048, 8, l, t);
  }
  function V0(l, t) {
    return wa(4, 2, l, t);
  }
  function L0(l, t) {
    return wa(4, 4, l, t);
  }
  function K0(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function J0(l, t, u) {
    u = u != null ? u.concat([l]) : null, wa(4, 4, K0.bind(null, t, l), u);
  }
  function wf() {
  }
  function w0(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Gf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function W0(l, t) {
    var u = zl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Gf(t, a[1]))
      return a[0];
    if (a = l(), Ru) {
      Kt(!0);
      try {
        l();
      } finally {
        Kt(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function Wf(l, t, u) {
    return u === void 0 || (It & 1073741824) !== 0 ? l.memoizedState = t : (l.memoizedState = u, l = Fs(), Q.lanes |= l, nu |= l, u);
  }
  function $0(l, t, u, a) {
    return ut(u, t) ? u : la.current !== null ? (l = Wf(l, u, a), ut(l, t) || (Dl = !0), l) : (It & 42) === 0 ? (Dl = !0, l.memoizedState = u) : (l = Fs(), Q.lanes |= l, nu |= l, t);
  }
  function k0(l, t, u, a, e) {
    var n = _.p;
    _.p = n !== 0 && 8 > n ? n : 8;
    var f = g.T, c = {};
    g.T = c, Ff(l, !1, t, u);
    try {
      var i = e(), h = g.S;
      if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = bd(
          i,
          a
        );
        Wa(
          l,
          t,
          S,
          ct(l)
        );
      } else
        Wa(
          l,
          t,
          a,
          ct(l)
        );
    } catch (T) {
      Wa(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        ct()
      );
    } finally {
      _.p = n, g.T = f;
    }
  }
  function _d() {
  }
  function $f(l, t, u, a) {
    if (l.tag !== 5) throw Error(r(476));
    var e = F0(l).queue;
    k0(
      l,
      e,
      t,
      H,
      u === null ? _d : function() {
        return I0(l), u(a);
      }
    );
  }
  function F0(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: H
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function I0(l) {
    var t = F0(l).next.queue;
    Wa(l, t, {}, ct());
  }
  function kf() {
    return Zl(de);
  }
  function P0() {
    return zl().memoizedState;
  }
  function ls() {
    return zl().memoizedState;
  }
  function Od(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = ct();
          l = kt(u);
          var a = Ft(t, l, u);
          a !== null && (it(a, t, u), Ca(a, t, u)), t = { cache: Mf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Md(l, t, u) {
    var a = ct();
    u = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l) ? us(t, u) : (u = rf(l, t, u, a), u !== null && (it(u, l, a), as(u, t, a)));
  }
  function ts(l, t, u) {
    var a = ct();
    Wa(l, t, u, a);
  }
  function Wa(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Pe(l)) us(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, ut(c, f))
            return Ge(l, t, e, 0), il === null && pe(), !1;
        } catch {
        } finally {
        }
      if (u = rf(l, t, e, a), u !== null)
        return it(u, l, a), as(u, t, a), !0;
    }
    return !1;
  }
  function Ff(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Rc(),
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Pe(l)) {
      if (t) throw Error(r(479));
    } else
      t = rf(
        l,
        u,
        a,
        2
      ), t !== null && it(t, l, 2);
  }
  function Pe(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function us(l, t) {
    ta = we = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function as(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, yi(l, u);
    }
  }
  var ln = {
    readContext: Zl,
    use: $e,
    useCallback: Tl,
    useContext: Tl,
    useEffect: Tl,
    useImperativeHandle: Tl,
    useLayoutEffect: Tl,
    useInsertionEffect: Tl,
    useMemo: Tl,
    useReducer: Tl,
    useRef: Tl,
    useState: Tl,
    useDebugValue: Tl,
    useDeferredValue: Tl,
    useTransition: Tl,
    useSyncExternalStore: Tl,
    useId: Tl,
    useHostTransitionStatus: Tl,
    useFormState: Tl,
    useActionState: Tl,
    useOptimistic: Tl,
    useMemoCache: Tl,
    useCacheRefresh: Tl
  }, es = {
    readContext: Zl,
    use: $e,
    useCallback: function(l, t) {
      return $l().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Zl,
    useEffect: Z0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, Ie(
        4194308,
        4,
        K0.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return Ie(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Ie(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = $l();
      t = t === void 0 ? null : t;
      var a = l();
      if (Ru) {
        Kt(!0);
        try {
          l();
        } finally {
          Kt(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = $l();
      if (u !== void 0) {
        var e = u(t);
        if (Ru) {
          Kt(!0);
          try {
            u(t);
          } finally {
            Kt(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Md.bind(
        null,
        Q,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = $l();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Kf(l);
      var t = l.queue, u = ts.bind(null, Q, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var u = $l();
      return Wf(u, l, t);
    },
    useTransition: function() {
      var l = Kf(!1);
      return l = k0.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = Q, e = $l();
      if (k) {
        if (u === void 0)
          throw Error(r(407));
        u = u();
      } else {
        if (u = t(), il === null)
          throw Error(r(349));
        (K & 124) !== 0 || O0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, Z0(D0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, aa(
        9,
        Fe(),
        M0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = $l(), t = il.identifierPrefix;
      if (k) {
        var u = Yt, a = qt;
        u = (a & ~(1 << 32 - tt(a) - 1)).toString(32) + u, t = "«" + t + "R" + u, u = We++, 0 < u && (t += "H" + u.toString(32)), t += "»";
      } else
        u = Td++, t = "«" + t + "r" + u.toString(32) + "»";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: kf,
    useFormState: G0,
    useActionState: G0,
    useOptimistic: function(l) {
      var t = $l();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = Ff.bind(
        null,
        Q,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Cf,
    useCacheRefresh: function() {
      return $l().memoizedState = Od.bind(
        null,
        Q
      );
    }
  }, ns = {
    readContext: Zl,
    use: $e,
    useCallback: w0,
    useContext: Zl,
    useEffect: C0,
    useImperativeHandle: J0,
    useInsertionEffect: V0,
    useLayoutEffect: L0,
    useMemo: W0,
    useReducer: ke,
    useRef: j0,
    useState: function() {
      return ke(Gt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return $0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = ke(Gt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: _0,
    useId: P0,
    useHostTransitionStatus: kf,
    useFormState: x0,
    useActionState: x0,
    useOptimistic: function(l, t) {
      var u = zl();
      return N0(u, al, l, t);
    },
    useMemoCache: Cf,
    useCacheRefresh: ls
  }, Dd = {
    readContext: Zl,
    use: $e,
    useCallback: w0,
    useContext: Zl,
    useEffect: C0,
    useImperativeHandle: J0,
    useInsertionEffect: V0,
    useLayoutEffect: L0,
    useMemo: W0,
    useReducer: Lf,
    useRef: j0,
    useState: function() {
      return Lf(Gt);
    },
    useDebugValue: wf,
    useDeferredValue: function(l, t) {
      var u = zl();
      return al === null ? Wf(u, l, t) : $0(
        u,
        al.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Lf(Gt)[0], t = zl().memoizedState;
      return [
        typeof l == "boolean" ? l : Ja(l),
        t
      ];
    },
    useSyncExternalStore: _0,
    useId: P0,
    useHostTransitionStatus: kf,
    useFormState: Q0,
    useActionState: Q0,
    useOptimistic: function(l, t) {
      var u = zl();
      return al !== null ? N0(u, al, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Cf,
    useCacheRefresh: ls
  }, ea = null, $a = 0;
  function tn(l) {
    var t = $a;
    return $a += 1, ea === null && (ea = []), r0(ea, l, t);
  }
  function ka(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function un(l, t) {
    throw t.$$typeof === fl ? Error(r(525)) : (l = Object.prototype.toString.call(t), Error(
      r(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function fs(l) {
    var t = l._init;
    return t(l._payload);
  }
  function cs(l) {
    function t(y, v) {
      if (l) {
        var d = y.deletions;
        d === null ? (y.deletions = [v], y.flags |= 16) : d.push(v);
      }
    }
    function u(y, v) {
      if (!l) return null;
      for (; v !== null; )
        t(y, v), v = v.sibling;
      return null;
    }
    function a(y) {
      for (var v = /* @__PURE__ */ new Map(); y !== null; )
        y.key !== null ? v.set(y.key, y) : v.set(y.index, y), y = y.sibling;
      return v;
    }
    function e(y, v) {
      return y = Ht(y, v), y.index = 0, y.sibling = null, y;
    }
    function n(y, v, d) {
      return y.index = d, l ? (d = y.alternate, d !== null ? (d = d.index, d < v ? (y.flags |= 67108866, v) : d) : (y.flags |= 67108866, v)) : (y.flags |= 1048576, v);
    }
    function f(y) {
      return l && y.alternate === null && (y.flags |= 67108866), y;
    }
    function c(y, v, d, b) {
      return v === null || v.tag !== 6 ? (v = Sf(d, y.mode, b), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function i(y, v, d, b) {
      var D = d.type;
      return D === ql ? S(
        y,
        v,
        d.props.children,
        b,
        d.key
      ) : v !== null && (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Xl && fs(D) === v.type) ? (v = e(v, d.props), ka(v, d), v.return = y, v) : (v = Xe(
        d.type,
        d.key,
        d.props,
        null,
        y.mode,
        b
      ), ka(v, d), v.return = y, v);
    }
    function h(y, v, d, b) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== d.containerInfo || v.stateNode.implementation !== d.implementation ? (v = bf(d, y.mode, b), v.return = y, v) : (v = e(v, d.children || []), v.return = y, v);
    }
    function S(y, v, d, b, D) {
      return v === null || v.tag !== 7 ? (v = Eu(
        d,
        y.mode,
        b,
        D
      ), v.return = y, v) : (v = e(v, d), v.return = y, v);
    }
    function T(y, v, d) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = Sf(
          "" + v,
          y.mode,
          d
        ), v.return = y, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case $:
            return d = Xe(
              v.type,
              v.key,
              v.props,
              null,
              y.mode,
              d
            ), ka(d, v), d.return = y, d;
          case Hl:
            return v = bf(
              v,
              y.mode,
              d
            ), v.return = y, v;
          case Xl:
            var b = v._init;
            return v = b(v._payload), T(y, v, d);
        }
        if (bl(v) || Sl(v))
          return v = Eu(
            v,
            y.mode,
            d,
            null
          ), v.return = y, v;
        if (typeof v.then == "function")
          return T(y, tn(v), d);
        if (v.$$typeof === ol)
          return T(
            y,
            Ce(y, v),
            d
          );
        un(y, v);
      }
      return null;
    }
    function o(y, v, d, b) {
      var D = v !== null ? v.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return D !== null ? null : c(y, v, "" + d, b);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case $:
            return d.key === D ? i(y, v, d, b) : null;
          case Hl:
            return d.key === D ? h(y, v, d, b) : null;
          case Xl:
            return D = d._init, d = D(d._payload), o(y, v, d, b);
        }
        if (bl(d) || Sl(d))
          return D !== null ? null : S(y, v, d, b, null);
        if (typeof d.then == "function")
          return o(
            y,
            v,
            tn(d),
            b
          );
        if (d.$$typeof === ol)
          return o(
            y,
            v,
            Ce(y, d),
            b
          );
        un(y, d);
      }
      return null;
    }
    function m(y, v, d, b, D) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return y = y.get(d) || null, c(v, y, "" + b, D);
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case $:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, i(v, y, b, D);
          case Hl:
            return y = y.get(
              b.key === null ? d : b.key
            ) || null, h(v, y, b, D);
          case Xl:
            var Z = b._init;
            return b = Z(b._payload), m(
              y,
              v,
              d,
              b,
              D
            );
        }
        if (bl(b) || Sl(b))
          return y = y.get(d) || null, S(v, y, b, D, null);
        if (typeof b.then == "function")
          return m(
            y,
            v,
            d,
            tn(b),
            D
          );
        if (b.$$typeof === ol)
          return m(
            y,
            v,
            d,
            Ce(v, b),
            D
          );
        un(v, b);
      }
      return null;
    }
    function p(y, v, d, b) {
      for (var D = null, Z = null, U = v, B = v = 0, Rl = null; U !== null && B < d.length; B++) {
        U.index > B ? (Rl = U, U = null) : Rl = U.sibling;
        var w = o(
          y,
          U,
          d[B],
          b
        );
        if (w === null) {
          U === null && (U = Rl);
          break;
        }
        l && U && w.alternate === null && t(y, U), v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w, U = Rl;
      }
      if (B === d.length)
        return u(y, U), k && zu(y, B), D;
      if (U === null) {
        for (; B < d.length; B++)
          U = T(y, d[B], b), U !== null && (v = n(
            U,
            v,
            B
          ), Z === null ? D = U : Z.sibling = U, Z = U);
        return k && zu(y, B), D;
      }
      for (U = a(U); B < d.length; B++)
        Rl = m(
          U,
          y,
          B,
          d[B],
          b
        ), Rl !== null && (l && Rl.alternate !== null && U.delete(
          Rl.key === null ? B : Rl.key
        ), v = n(
          Rl,
          v,
          B
        ), Z === null ? D = Rl : Z.sibling = Rl, Z = Rl);
      return l && U.forEach(function(ou) {
        return t(y, ou);
      }), k && zu(y, B), D;
    }
    function Y(y, v, d, b) {
      if (d == null) throw Error(r(151));
      for (var D = null, Z = null, U = v, B = v = 0, Rl = null, w = d.next(); U !== null && !w.done; B++, w = d.next()) {
        U.index > B ? (Rl = U, U = null) : Rl = U.sibling;
        var ou = o(y, U, w.value, b);
        if (ou === null) {
          U === null && (U = Rl);
          break;
        }
        l && U && ou.alternate === null && t(y, U), v = n(ou, v, B), Z === null ? D = ou : Z.sibling = ou, Z = ou, U = Rl;
      }
      if (w.done)
        return u(y, U), k && zu(y, B), D;
      if (U === null) {
        for (; !w.done; B++, w = d.next())
          w = T(y, w.value, b), w !== null && (v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w);
        return k && zu(y, B), D;
      }
      for (U = a(U); !w.done; B++, w = d.next())
        w = m(U, y, B, w.value, b), w !== null && (l && w.alternate !== null && U.delete(w.key === null ? B : w.key), v = n(w, v, B), Z === null ? D = w : Z.sibling = w, Z = w);
      return l && U.forEach(function(U1) {
        return t(y, U1);
      }), k && zu(y, B), D;
    }
    function nl(y, v, d, b) {
      if (typeof d == "object" && d !== null && d.type === ql && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case $:
            l: {
              for (var D = d.key; v !== null; ) {
                if (v.key === D) {
                  if (D = d.type, D === ql) {
                    if (v.tag === 7) {
                      u(
                        y,
                        v.sibling
                      ), b = e(
                        v,
                        d.props.children
                      ), b.return = y, y = b;
                      break l;
                    }
                  } else if (v.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Xl && fs(D) === v.type) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.props), ka(b, d), b.return = y, y = b;
                    break l;
                  }
                  u(y, v);
                  break;
                } else t(y, v);
                v = v.sibling;
              }
              d.type === ql ? (b = Eu(
                d.props.children,
                y.mode,
                b,
                d.key
              ), b.return = y, y = b) : (b = Xe(
                d.type,
                d.key,
                d.props,
                null,
                y.mode,
                b
              ), ka(b, d), b.return = y, y = b);
            }
            return f(y);
          case Hl:
            l: {
              for (D = d.key; v !== null; ) {
                if (v.key === D)
                  if (v.tag === 4 && v.stateNode.containerInfo === d.containerInfo && v.stateNode.implementation === d.implementation) {
                    u(
                      y,
                      v.sibling
                    ), b = e(v, d.children || []), b.return = y, y = b;
                    break l;
                  } else {
                    u(y, v);
                    break;
                  }
                else t(y, v);
                v = v.sibling;
              }
              b = bf(d, y.mode, b), b.return = y, y = b;
            }
            return f(y);
          case Xl:
            return D = d._init, d = D(d._payload), nl(
              y,
              v,
              d,
              b
            );
        }
        if (bl(d))
          return p(
            y,
            v,
            d,
            b
          );
        if (Sl(d)) {
          if (D = Sl(d), typeof D != "function") throw Error(r(150));
          return d = D.call(d), Y(
            y,
            v,
            d,
            b
          );
        }
        if (typeof d.then == "function")
          return nl(
            y,
            v,
            tn(d),
            b
          );
        if (d.$$typeof === ol)
          return nl(
            y,
            v,
            Ce(y, d),
            b
          );
        un(y, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint" ? (d = "" + d, v !== null && v.tag === 6 ? (u(y, v.sibling), b = e(v, d), b.return = y, y = b) : (u(y, v), b = Sf(d, y.mode, b), b.return = y, y = b), f(y)) : u(y, v);
    }
    return function(y, v, d, b) {
      try {
        $a = 0;
        var D = nl(
          y,
          v,
          d,
          b
        );
        return ea = null, D;
      } catch (U) {
        if (U === ja || U === Le) throw U;
        var Z = at(29, U, null, y.mode);
        return Z.lanes = b, Z.return = y, Z;
      } finally {
      }
    };
  }
  var na = cs(!0), is = cs(!1), mt = A(null), _t = null;
  function Pt(l) {
    var t = l.alternate;
    O(Ol, Ol.current & 1), O(mt, l), _t === null && (t === null || la.current !== null || t.memoizedState !== null) && (_t = l);
  }
  function ss(l) {
    if (l.tag === 22) {
      if (O(Ol, Ol.current), O(mt, l), _t === null) {
        var t = l.alternate;
        t !== null && t.memoizedState !== null && (_t = l);
      }
    } else lu();
  }
  function lu() {
    O(Ol, Ol.current), O(mt, mt.current);
  }
  function xt(l) {
    M(mt), _t === l && (_t = null), M(Ol);
  }
  var Ol = A(0);
  function an(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Zc(u)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function If(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : N({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Pf = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = ct(), e = kt(a);
      e.payload = t, u != null && (e.callback = u), t = Ft(l, e, a), t !== null && (it(t, l, a), Ca(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = ct(), e = kt(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = Ft(l, e, a), t !== null && (it(t, l, a), Ca(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = ct(), a = kt(u);
      a.tag = 2, t != null && (a.callback = t), t = Ft(l, a, u), t !== null && (it(t, l, u), Ca(t, l, u));
    }
  };
  function vs(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !qa(u, a) || !qa(e, n) : !0;
  }
  function ys(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && Pf.enqueueReplaceState(t, t.state, null);
  }
  function Nu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = N({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var en = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function ds(l) {
    en(l);
  }
  function hs(l) {
    console.error(l);
  }
  function os(l) {
    en(l);
  }
  function nn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ms(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function lc(l, t, u) {
    return u = kt(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      nn(l, t);
    }, u;
  }
  function rs(l) {
    return l = kt(l), l.tag = 3, l;
  }
  function gs(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        ms(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      ms(t, u, a), typeof e != "function" && (fu === null ? fu = /* @__PURE__ */ new Set([this]) : fu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Ud(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && xa(
        t,
        u,
        e,
        !0
      ), u = mt.current, u !== null) {
        switch (u.tag) {
          case 13:
            return _t === null ? _c() : u.alternate === null && gl === 0 && (gl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === Rf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Mc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === Rf ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), Mc(l, a, e)), !1;
        }
        throw Error(r(435, u.tag));
      }
      return Mc(l, a, e), _c(), !1;
    }
    if (k)
      return t = mt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Af && (l = Error(r(422), { cause: a }), Ga(yt(l, u)))) : (a !== Af && (t = Error(r(423), {
        cause: a
      }), Ga(
        yt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = yt(a, u), e = lc(
        l.stateNode,
        a,
        e
      ), qf(l, e), gl !== 4 && (gl = 2)), !1;
    var n = Error(r(520), { cause: a });
    if (n = yt(n, u), ae === null ? ae = [n] : ae.push(n), gl !== 4 && (gl = 2), t === null) return !0;
    a = yt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = lc(u.stateNode, a, l), qf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (fu === null || !fu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = rs(e), gs(
              e,
              l,
              u,
              a
            ), qf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var Ss = Error(r(461)), Dl = !1;
  function Bl(l, t, u, a) {
    t.child = l === null ? is(t, null, u, a) : na(
      t,
      l.child,
      u,
      a
    );
  }
  function bs(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Du(t), a = xf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Xf(), l !== null && !Dl ? (Qf(l, t, e), Xt(l, t, e)) : (k && c && Tf(t), t.flags |= 1, Bl(l, t, a, e), t.child);
  }
  function Ts(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !gf(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Es(
        l,
        t,
        n,
        a,
        e
      )) : (l = Xe(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !ic(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : qa, u(f, a) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = Ht(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Es(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (qa(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, ic(l, e))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return tc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function As(l, t, u) {
    var a = t.pendingProps, e = a.children, n = l !== null ? l.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (a = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = t.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          t.childLanes = n & ~a;
        } else t.childLanes = 0, t.child = null;
        return zs(
          l,
          t,
          a,
          u
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ve(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? E0(t, n) : Bf(), ss(t);
      else
        return t.lanes = t.childLanes = 536870912, zs(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (Ve(t, n.cachePool), E0(t, n), lu(), t.memoizedState = null) : (l !== null && Ve(t, null), Bf(), lu());
    return Bl(l, t, e, u), t.child;
  }
  function zs(l, t, u, a) {
    var e = Uf();
    return e = e === null ? null : { parent: _l._currentValue, pool: e }, t.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && Ve(t, null), Bf(), ss(t), l !== null && xa(l, t, a, !0), null;
  }
  function fn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(r(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function tc(l, t, u, a, e) {
    return Du(t), u = xf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Xf(), l !== null && !Dl ? (Qf(l, t, e), Xt(l, t, e)) : (k && a && Tf(t), t.flags |= 1, Bl(l, t, u, e), t.child);
  }
  function _s(l, t, u, a, e, n) {
    return Du(t), t.updateQueue = null, u = z0(
      t,
      a,
      u,
      e
    ), A0(l), a = Xf(), l !== null && !Dl ? (Qf(l, t, n), Xt(l, t, n)) : (k && a && Tf(t), t.flags |= 1, Bl(l, t, u, n), t.child);
  }
  function Os(l, t, u, a, e) {
    if (Du(t), t.stateNode === null) {
      var n = $u, f = u.contextType;
      typeof f == "object" && f !== null && (n = Zl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Pf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Nf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? Zl(f) : $u, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (If(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Pf.enqueueReplaceState(n, n.state, null), La(t, a, n, e), Va(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Nu(u, c);
      n.props = i;
      var h = n.context, S = u.contextType;
      f = $u, typeof S == "object" && S !== null && (f = Zl(S));
      var T = u.getDerivedStateFromProps;
      S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && ys(
        t,
        n,
        a,
        f
      ), $t = !1;
      var o = t.memoizedState;
      n.state = o, La(t, a, n, e), Va(), h = t.memoizedState, c || o !== h || $t ? (typeof T == "function" && (If(
        t,
        u,
        T,
        a
      ), h = t.memoizedState), (i = $t || vs(
        t,
        u,
        i,
        a,
        o,
        h,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Hf(l, t), f = t.memoizedProps, S = Nu(u, f), n.props = S, T = t.pendingProps, o = n.context, h = u.contextType, i = $u, typeof h == "object" && h !== null && (i = Zl(h)), c = u.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || o !== i) && ys(
        t,
        n,
        a,
        i
      ), $t = !1, o = t.memoizedState, n.state = o, La(t, a, n, e), Va();
      var m = t.memoizedState;
      f !== T || o !== m || $t || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof c == "function" && (If(
        t,
        u,
        c,
        a
      ), m = t.memoizedState), (S = $t || vs(
        t,
        u,
        S,
        a,
        o,
        m,
        i
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = i, a = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, fn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = na(
      t,
      l.child,
      null,
      e
    ), t.child = na(
      t,
      null,
      u,
      e
    )) : Bl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function Ms(l, t, u, a) {
    return pa(), t.flags |= 256, Bl(l, t, u, a), t.child;
  }
  var uc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ac(l) {
    return { baseLanes: l, cachePool: h0() };
  }
  function ec(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= rt), l;
  }
  function Ds(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (Ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (k) {
        if (e ? Pt(t) : lu(), k) {
          var c = rl, i;
          if (i = c) {
            l: {
              for (i = c, c = zt; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = Et(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (t.memoizedState = {
              dehydrated: c,
              treeContext: Au !== null ? { id: qt, overflow: Yt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = at(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = t, t.child = i, Kl = t, rl = null, i = !0) : i = !1;
          }
          i || Ou(t);
        }
        if (c = t.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Zc(c) ? t.lanes = 32 : t.lanes = 536870912, null;
        xt(t);
      }
      return c = a.children, a = a.fallback, e ? (lu(), e = t.mode, c = cn(
        { mode: "hidden", children: c },
        e
      ), a = Eu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, e = t.child, e.memoizedState = ac(u), e.childLanes = ec(
        l,
        f,
        u
      ), t.memoizedState = uc, a) : (Pt(t), nc(t, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (Pt(t), t.flags &= -257, t = fc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (lu(), t.child = l.child, t.flags |= 128, t = null) : (lu(), e = a.fallback, c = t.mode, a = cn(
          { mode: "visible", children: a.children },
          c
        ), e = Eu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, a.return = t, e.return = t, a.sibling = e, t.child = a, na(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = ac(u), a.childLanes = ec(
          l,
          f,
          u
        ), t.memoizedState = uc, t = e);
      else if (Pt(t), Zc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var h = f.dgst;
        f = h, a = Error(r(419)), a.stack = "", a.digest = f, Ga({ value: a, source: null, stack: null }), t = fc(
          l,
          t,
          u
        );
      } else if (Dl || xa(l, t, u, !1), f = (u & l.childLanes) !== 0, Dl || f) {
        if (f = il, f !== null && (a = u & -u, a = (a & 42) !== 0 ? 1 : Zn(a), a = (a & (f.suspendedLanes | u)) !== 0 ? 0 : a, a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Wu(l, a), it(f, l, a), Ss;
        c.data === "$?" || _c(), t = fc(
          l,
          t,
          u
        );
      } else
        c.data === "$?" ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, rl = Et(
          c.nextSibling
        ), Kl = t, k = !0, _u = null, zt = !1, l !== null && (ht[ot++] = qt, ht[ot++] = Yt, ht[ot++] = Au, qt = l.id, Yt = l.overflow, Au = t), t = nc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (lu(), e = a.fallback, c = t.mode, i = l.child, h = i.sibling, a = Ht(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? e = Ht(h, e) : (e = Eu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = t, a.return = t, a.sibling = e, t.child = a, a = e, e = t.child, c = l.child.memoizedState, c === null ? c = ac(u) : (i = c.cachePool, i !== null ? (h = _l._currentValue, i = i.parent !== h ? { parent: h, pool: h } : i) : i = h0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = ec(
      l,
      f,
      u
    ), t.memoizedState = uc, a) : (Pt(t), u = l.child, l = u.sibling, u = Ht(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function nc(l, t) {
    return t = cn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function cn(l, t) {
    return l = at(22, l, null, t), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function fc(l, t, u) {
    return na(t, l.child, null, u), l = nc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Us(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), _f(l.return, t, u);
  }
  function cc(l, t, u, a, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e
    } : (n.isBackwards = t, n.rendering = null, n.renderingStartTime = 0, n.last = a, n.tail = u, n.tailMode = e);
  }
  function Rs(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    if (Bl(l, t, a.children, u), a = Ol.current, (a & 2) !== 0)
      a = a & 1 | 2, t.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = t.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Us(l, u, t);
          else if (l.tag === 19)
            Us(l, u, t);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === t) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      a &= 1;
    }
    switch (O(Ol, a), e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && an(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), cc(
          t,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && an(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        cc(
          t,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        cc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), nu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (xa(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(r(153));
    if (t.child !== null) {
      for (l = t.child, u = Ht(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ht(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function ic(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function Rd(l, t, u) {
    switch (t.tag) {
      case 3:
        yl(t, t.stateNode.containerInfo), Wt(t, _l, l.memoizedState.cache), pa();
        break;
      case 27:
      case 5:
        Gn(t);
        break;
      case 4:
        yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        Wt(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Pt(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Ds(l, t, u) : (Pt(t), l = Xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        Pt(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (xa(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return Rs(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(Ol, Ol.current), a) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, As(l, t, u);
      case 24:
        Wt(t, _l, l.memoizedState.cache);
    }
    return Xt(l, t, u);
  }
  function Ns(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!ic(l, u) && (t.flags & 128) === 0)
          return Dl = !1, Rd(
            l,
            t,
            u
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, k && (t.flags & 1048576) !== 0 && f0(t, je, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          l = t.pendingProps;
          var a = t.elementType, e = a._init;
          if (a = e(a._payload), t.type = a, typeof a == "function")
            gf(a) ? (l = Nu(a, l), t.tag = 1, t = Os(
              null,
              t,
              a,
              l,
              u
            )) : (t.tag = 0, t = tc(
              null,
              t,
              a,
              l,
              u
            ));
          else {
            if (a != null) {
              if (e = a.$$typeof, e === Il) {
                t.tag = 11, t = bs(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              } else if (e === xl) {
                t.tag = 14, t = Ts(
                  null,
                  t,
                  a,
                  l,
                  u
                );
                break l;
              }
            }
            throw t = Yl(a) || a, Error(r(306, t, ""));
          }
        }
        return t;
      case 0:
        return tc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Nu(
          a,
          t.pendingProps
        ), Os(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(r(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, Hf(l, t), La(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, Wt(t, _l, a), a !== n.cache && Of(
            t,
            [_l],
            u,
            !0
          ), Va(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Ms(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = yt(
                Error(r(424)),
                t
              ), Ga(e), t = Ms(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (rl = Et(l.firstChild), Kl = t, k = !0, _u = null, zt = !0, u = is(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (pa(), a === e) {
              t = Xt(
                l,
                t,
                u
              );
              break l;
            }
            Bl(
              l,
              t,
              a,
              u
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return fn(l, t), l === null ? (u = Bv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : k || (u = t.type, l = t.pendingProps, a = An(
          G.current
        ).createElement(u), a[jl] = t, a[wl] = l, Gl(a, u, l), Ml(a), t.stateNode = a) : t.memoizedState = Bv(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Gn(t), l === null && k && (a = t.stateNode = Hv(
          t.type,
          t.pendingProps,
          G.current
        ), Kl = t, zt = !0, e = rl, su(t.type) ? (Cc = e, rl = Et(
          a.firstChild
        )) : rl = e), Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), fn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && k && ((e = a = rl) && (a = a1(
          a,
          t.type,
          t.pendingProps,
          zt
        ), a !== null ? (t.stateNode = a, Kl = t, rl = Et(
          a.firstChild
        ), zt = !1, e = !0) : e = !1), e || Ou(t)), Gn(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Xc(e, n) ? a = null : f !== null && Xc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = xf(
          l,
          t,
          Ed,
          null,
          null,
          u
        ), de._currentValue = e), fn(l, t), Bl(l, t, a, u), t.child;
      case 6:
        return l === null && k && ((l = u = rl) && (u = e1(
          u,
          t.pendingProps,
          zt
        ), u !== null ? (t.stateNode = u, Kl = t, rl = null, l = !0) : l = !1), l || Ou(t)), null;
      case 13:
        return Ds(l, t, u);
      case 4:
        return yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = na(
          t,
          null,
          a,
          u
        ) : Bl(
          l,
          t,
          a,
          u
        ), t.child;
      case 11:
        return bs(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Bl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, Wt(t, t.type, a.value), Bl(
          l,
          t,
          a.children,
          u
        ), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Du(t), e = Zl(e), a = a(e), t.flags |= 1, Bl(l, t, a, u), t.child;
      case 14:
        return Ts(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Es(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return Rs(l, t, u);
      case 31:
        return a = t.pendingProps, u = t.mode, a = {
          mode: a.mode,
          children: a.children
        }, l === null ? (u = cn(
          a,
          u
        ), u.ref = t.ref, t.child = u, u.return = t, t = u) : (u = Ht(l.child, a), u.ref = t.ref, t.child = u, u.return = t, t = u), t;
      case 22:
        return As(l, t, u);
      case 24:
        return Du(t), a = Zl(_l), l === null ? (e = Uf(), e === null && (e = il, n = Mf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = {
          parent: a,
          cache: e
        }, Nf(t), Wt(t, _l, e)) : ((l.lanes & u) !== 0 && (Hf(l, t), La(t, null, null, u), Va()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), Wt(t, _l, a)) : (a = n.cache, Wt(t, _l, a), a !== e.cache && Of(
          t,
          [_l],
          u,
          !0
        ))), Bl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function Hs(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Qv(t)) {
      if (t = mt.current, t !== null && ((K & 4194048) === K ? _t !== null : (K & 62914560) !== K && (K & 536870912) === 0 || t !== _t))
        throw Za = Rf, o0;
      l.flags |= 8192;
    }
  }
  function sn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? si() : 536870912, l.lanes |= t, sa |= t);
  }
  function Fa(l, t) {
    if (!k)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function ml(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function Nd(l, t, u) {
    var a = t.pendingProps;
    switch (Ef(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ml(t), null;
      case 1:
        return ml(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), pt(_l), Lt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ba(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, s0())), ml(t), null;
      case 26:
        return u = t.memoizedState, l === null ? (Qt(t), u !== null ? (ml(t), Hs(t, u)) : (ml(t), t.flags &= -16777217)) : u ? u !== l.memoizedState ? (Qt(t), ml(t), Hs(t, u)) : (ml(t), t.flags &= -16777217) : (l.memoizedProps !== a && Qt(t), ml(t), t.flags &= -16777217), null;
      case 27:
        be(t), u = G.current;
        var e = t.type;
        if (l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return ml(t), null;
          }
          l = q.current, Ba(t) ? c0(t) : (l = Hv(e, a, u), t.stateNode = l, Qt(t));
        }
        return ml(t), null;
      case 5:
        if (be(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(r(166));
            return ml(t), null;
          }
          if (l = q.current, Ba(t))
            c0(t);
          else {
            switch (e = An(
              G.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof a.is == "string" ? e.createElement("select", { is: a.is }) : e.createElement("select"), a.multiple ? l.multiple = !0 : a.size && (l.size = a.size);
                    break;
                  default:
                    l = typeof a.is == "string" ? e.createElement(u, { is: a.is }) : e.createElement(u);
                }
            }
            l[jl] = t, l[wl] = a;
            l: for (e = t.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === t) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            t.stateNode = l;
            l: switch (Gl(l, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!a.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Qt(t);
          }
        }
        return ml(t), t.flags &= -16777217, null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(r(166));
          if (l = G.current, Ba(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Kl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[jl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || _v(l.nodeValue, u)), l || Ou(t);
          } else
            l = An(l).createTextNode(
              a
            ), l[jl] = t, t.stateNode = l;
        }
        return ml(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
              e[jl] = t;
            } else
              pa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            ml(t), e = !1;
          } else
            e = s0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (xt(t), t) : (xt(t), null);
        }
        if (xt(t), (t.flags & 128) !== 0)
          return t.lanes = u, t;
        if (u = a !== null, l = l !== null && l.memoizedState !== null, u) {
          a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool);
          var n = null;
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048);
        }
        return u !== l && u && (t.child.flags |= 8192), sn(t, t.updateQueue), ml(t), null;
      case 4:
        return Lt(), l === null && Yc(t.stateNode.containerInfo), ml(t), null;
      case 10:
        return pt(t.type), ml(t), null;
      case 19:
        if (M(Ol), e = t.memoizedState, e === null) return ml(t), null;
        if (a = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (a) Fa(e, !1);
          else {
            if (gl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = an(l), n !== null) {
                  for (t.flags |= 128, Fa(e, !1), l = n.updateQueue, t.updateQueue = l, sn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    n0(u, l), u = u.sibling;
                  return O(
                    Ol,
                    Ol.current & 1 | 2
                  ), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && At() > dn && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (l = an(n), l !== null) {
              if (t.flags |= 128, a = !0, l = l.updateQueue, t.updateQueue = l, sn(t, l), Fa(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !k)
                return ml(t), null;
            } else
              2 * At() - e.renderingStartTime > dn && u !== 536870912 && (t.flags |= 128, a = !0, Fa(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        return e.tail !== null ? (t = e.tail, e.rendering = t, e.tail = t.sibling, e.renderingStartTime = At(), t.sibling = null, l = Ol.current, O(Ol, a ? l & 1 | 2 : l & 1), t) : (ml(t), null);
      case 22:
      case 23:
        return xt(t), pf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (ml(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ml(t), u = t.updateQueue, u !== null && sn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && M(Uu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), pt(_l), ml(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function Hd(l, t) {
    switch (Ef(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return pt(_l), Lt(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return be(t), null;
      case 13:
        if (xt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(r(340));
          pa();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return M(Ol), null;
      case 4:
        return Lt(), null;
      case 10:
        return pt(t.type), null;
      case 22:
      case 23:
        return xt(t), pf(), l !== null && M(Uu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return pt(_l), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function qs(l, t) {
    switch (Ef(t), t.tag) {
      case 3:
        pt(_l), Lt();
        break;
      case 26:
      case 27:
      case 5:
        be(t);
        break;
      case 4:
        Lt();
        break;
      case 13:
        xt(t);
        break;
      case 19:
        M(Ol);
        break;
      case 10:
        pt(t.type);
        break;
      case 22:
      case 23:
        xt(t), pf(), l !== null && M(Uu);
        break;
      case 24:
        pt(_l);
    }
  }
  function Ia(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      cl(t, t.return, c);
    }
  }
  function tu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, h = c;
              try {
                h();
              } catch (S) {
                cl(
                  e,
                  i,
                  S
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (S) {
      cl(t, t.return, S);
    }
  }
  function Ys(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        T0(t, u);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function Bs(l, t, u) {
    u.props = Nu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      cl(l, t, a);
    }
  }
  function Pa(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      cl(l, t, e);
    }
  }
  function Ot(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          cl(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          cl(l, t, e);
        }
      else u.current = null;
  }
  function ps(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function sc(l, t, u) {
    try {
      var a = l.stateNode;
      Id(a, l.type, u, t), a[wl] = t;
    } catch (e) {
      cl(l, l.return, e);
    }
  }
  function Gs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && su(l.type) || l.tag === 4;
  }
  function vc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && su(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function yc(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = En));
    else if (a !== 4 && (a === 27 && su(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (yc(l, t, u), l = l.sibling; l !== null; )
        yc(l, t, u), l = l.sibling;
  }
  function vn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && su(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (vn(l, t, u), l = l.sibling; l !== null; )
        vn(l, t, u), l = l.sibling;
  }
  function xs(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Gl(t, a, u), t[jl] = l, t[wl] = u;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var jt = !1, El = !1, dc = !1, Xs = typeof WeakSet == "function" ? WeakSet : Set, Ul = null;
  function qd(l, t) {
    if (l = l.containerInfo, Gc = Un, l = $i(l), vf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, h = 0, S = 0, T = l, o = null;
            t: for (; ; ) {
              for (var m; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (m = T.firstChild) !== null; )
                o = T, T = m;
              for (; ; ) {
                if (T === l) break t;
                if (o === u && ++h === e && (c = f), o === n && ++S === a && (i = f), (m = T.nextSibling) !== null) break;
                T = o, o = T.parentNode;
              }
              T = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (xc = { focusedElem: l, selectionRange: u }, Un = !1, Ul = t; Ul !== null; )
      if (t = Ul, l = t.child, (t.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = t, Ul = l;
      else
        for (; Ul !== null; ) {
          switch (t = Ul, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var p = Nu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = a.getSnapshotBeforeUpdate(
                    p,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Y) {
                  cl(
                    u,
                    u.return,
                    Y
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  jc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      jc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ul = l;
            break;
          }
          Ul = t.return;
        }
  }
  function Qs(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        uu(l, u), a & 4 && Ia(5, u);
        break;
      case 1:
        if (uu(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              cl(u, u.return, f);
            }
          else {
            var e = Nu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              cl(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Ys(u), a & 512 && Pa(u, u.return);
        break;
      case 3:
        if (uu(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            T0(l, t);
          } catch (f) {
            cl(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && xs(u);
      case 26:
      case 5:
        uu(l, u), t === null && a & 4 && ps(u), a & 512 && Pa(u, u.return);
        break;
      case 12:
        uu(l, u);
        break;
      case 13:
        uu(l, u), a & 4 && Cs(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Zd.bind(
          null,
          u
        ), n1(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || jt, !a) {
          t = t !== null && t.memoizedState !== null || El, e = jt;
          var n = El;
          jt = a, (El = t) && !n ? au(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : uu(l, u), jt = e, El = n;
        }
        break;
      case 30:
        break;
      default:
        uu(l, u);
    }
  }
  function js(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, js(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && Ln(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var dl = null, kl = !1;
  function Zt(l, t, u) {
    for (u = u.child; u !== null; )
      Zs(l, t, u), u = u.sibling;
  }
  function Zs(l, t, u) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Ta, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        El || Ot(u, t), Zt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        El || Ot(u, t);
        var a = dl, e = kl;
        su(u.type) && (dl = u.stateNode, kl = !1), Zt(
          l,
          t,
          u
        ), ie(u.stateNode), dl = a, kl = e;
        break;
      case 5:
        El || Ot(u, t);
      case 6:
        if (a = dl, e = kl, dl = null, Zt(
          l,
          t,
          u
        ), dl = a, kl = e, dl !== null)
          if (kl)
            try {
              (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(u.stateNode);
            } catch (n) {
              cl(
                u,
                t,
                n
              );
            }
          else
            try {
              dl.removeChild(u.stateNode);
            } catch (n) {
              cl(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        dl !== null && (kl ? (l = dl, Rv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), re(l)) : Rv(dl, u.stateNode));
        break;
      case 4:
        a = dl, e = kl, dl = u.stateNode.containerInfo, kl = !0, Zt(
          l,
          t,
          u
        ), dl = a, kl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        El || tu(2, u, t), El || tu(4, u, t), Zt(
          l,
          t,
          u
        );
        break;
      case 1:
        El || (Ot(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && Bs(
          u,
          t,
          a
        )), Zt(
          l,
          t,
          u
        );
        break;
      case 21:
        Zt(
          l,
          t,
          u
        );
        break;
      case 22:
        El = (a = El) || u.memoizedState !== null, Zt(
          l,
          t,
          u
        ), El = a;
        break;
      default:
        Zt(
          l,
          t,
          u
        );
    }
  }
  function Cs(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        re(l);
      } catch (u) {
        cl(t, t.return, u);
      }
  }
  function Yd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Xs()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Xs()), t;
      default:
        throw Error(r(435, l.tag));
    }
  }
  function hc(l, t) {
    var u = Yd(l);
    t.forEach(function(a) {
      var e = Cd.bind(null, l, a);
      u.has(a) || (u.add(a), a.then(e, e));
    });
  }
  function et(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (su(c.type)) {
                dl = c.stateNode, kl = !1;
                break l;
              }
              break;
            case 5:
              dl = c.stateNode, kl = !1;
              break l;
            case 3:
            case 4:
              dl = c.stateNode.containerInfo, kl = !0;
              break l;
          }
          c = c.return;
        }
        if (dl === null) throw Error(r(160));
        Zs(n, f, e), dl = null, kl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Vs(t, l), t = t.sibling;
  }
  var Tt = null;
  function Vs(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        et(t, l), nt(l), a & 4 && (tu(3, l, l.return), Ia(3, l), tu(5, l, l.return));
        break;
      case 1:
        et(t, l), nt(l), a & 512 && (El || u === null || Ot(u, u.return)), a & 64 && jt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = Tt;
        if (et(t, l), nt(l), a & 512 && (El || u === null || Ot(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[za] || n[jl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Gl(n, a, u), n[jl] = l, Ml(n), a = n;
                      break l;
                    case "link":
                      var f = xv(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Gl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = xv(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Gl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  n[jl] = l, Ml(n), a = n;
                }
                l.stateNode = a;
              } else
                Xv(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Gv(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Xv(
              e,
              l.type,
              l.stateNode
            ) : Gv(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && sc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        et(t, l), nt(l), a & 512 && (El || u === null || Ot(u, u.return)), u !== null && a & 4 && sc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (et(t, l), nt(l), a & 512 && (El || u === null || Ot(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Zu(e, "");
          } catch (m) {
            cl(l, l.return, m);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, sc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (dc = !0);
        break;
      case 6:
        if (et(t, l), nt(l), a & 4) {
          if (l.stateNode === null)
            throw Error(r(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (m) {
            cl(l, l.return, m);
          }
        }
        break;
      case 3:
        if (On = null, e = Tt, Tt = zn(t.containerInfo), et(t, l), Tt = e, nt(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            re(t.containerInfo);
          } catch (m) {
            cl(l, l.return, m);
          }
        dc && (dc = !1, Ls(l));
        break;
      case 4:
        a = Tt, Tt = zn(
          l.stateNode.containerInfo
        ), et(t, l), nt(l), Tt = a;
        break;
      case 12:
        et(t, l), nt(l);
        break;
      case 13:
        et(t, l), nt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (bc = At()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, h = jt, S = El;
        if (jt = h || e, El = S || i, et(t, l), El = S, jt = h, nt(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || jt || El || Hu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, o = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (m) {
                  cl(i, i.return, m);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  cl(i, i.return, m);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, hc(l, u))));
        break;
      case 19:
        et(t, l), nt(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, hc(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        et(t, l), nt(l);
    }
  }
  function nt(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Gs(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(r(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = vc(l);
            vn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Zu(f, ""), u.flags &= -33);
            var c = vc(l);
            vn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, h = vc(l);
            yc(
              l,
              h,
              i
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (S) {
        cl(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Ls(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Ls(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function uu(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qs(l, t.alternate, t), t = t.sibling;
  }
  function Hu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          tu(4, t, t.return), Hu(t);
          break;
        case 1:
          Ot(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && Bs(
            t,
            t.return,
            u
          ), Hu(t);
          break;
        case 27:
          ie(t.stateNode);
        case 26:
        case 5:
          Ot(t, t.return), Hu(t);
          break;
        case 22:
          t.memoizedState === null && Hu(t);
          break;
        case 30:
          Hu(t);
          break;
        default:
          Hu(t);
      }
      l = l.sibling;
    }
  }
  function au(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          au(
            e,
            n,
            u
          ), Ia(4, n);
          break;
        case 1:
          if (au(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (h) {
              cl(a, a.return, h);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  b0(i[e], c);
            } catch (h) {
              cl(a, a.return, h);
            }
          }
          u && f & 64 && Ys(n), Pa(n, n.return);
          break;
        case 27:
          xs(n);
        case 26:
        case 5:
          au(
            e,
            n,
            u
          ), u && a === null && f & 4 && ps(n), Pa(n, n.return);
          break;
        case 12:
          au(
            e,
            n,
            u
          );
          break;
        case 13:
          au(
            e,
            n,
            u
          ), u && f & 4 && Cs(e, n);
          break;
        case 22:
          n.memoizedState === null && au(
            e,
            n,
            u
          ), Pa(n, n.return);
          break;
        case 30:
          break;
        default:
          au(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function oc(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Xa(u));
  }
  function mc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l));
  }
  function Mt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ks(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function Ks(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Mt(
          l,
          t,
          u,
          a
        ), e & 2048 && Ia(9, t);
        break;
      case 1:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Mt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Xa(l)));
        break;
      case 12:
        if (e & 2048) {
          Mt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            cl(t, t.return, i);
          }
        } else
          Mt(
            l,
            t,
            u,
            a
          );
        break;
      case 13:
        Mt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : le(l, t) : n._visibility & 2 ? Mt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, fa(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0
        )), e & 2048 && oc(f, t);
        break;
      case 24:
        Mt(
          l,
          t,
          u,
          a
        ), e & 2048 && mc(t.alternate, t);
        break;
      default:
        Mt(
          l,
          t,
          u,
          a
        );
    }
  }
  function fa(l, t, u, a, e) {
    for (e = e && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, h = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            n,
            f,
            c,
            i,
            e
          ), Ia(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? fa(
            n,
            f,
            c,
            i,
            e
          ) : le(
            n,
            f
          ) : (S._visibility |= 2, fa(
            n,
            f,
            c,
            i,
            e
          )), e && h & 2048 && oc(
            f.alternate,
            f
          );
          break;
        case 24:
          fa(
            n,
            f,
            c,
            i,
            e
          ), e && h & 2048 && mc(f.alternate, f);
          break;
        default:
          fa(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function le(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            le(u, a), e & 2048 && oc(
              a.alternate,
              a
            );
            break;
          case 24:
            le(u, a), e & 2048 && mc(a.alternate, a);
            break;
          default:
            le(u, a);
        }
        t = t.sibling;
      }
  }
  var te = 8192;
  function ca(l) {
    if (l.subtreeFlags & te)
      for (l = l.child; l !== null; )
        Js(l), l = l.sibling;
  }
  function Js(l) {
    switch (l.tag) {
      case 26:
        ca(l), l.flags & te && l.memoizedState !== null && S1(
          Tt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ca(l);
        break;
      case 3:
      case 4:
        var t = Tt;
        Tt = zn(l.stateNode.containerInfo), ca(l), Tt = t;
        break;
      case 22:
        l.memoizedState === null && (t = l.alternate, t !== null && t.memoizedState !== null ? (t = te, te = 16777216, ca(l), te = t) : ca(l));
        break;
      default:
        ca(l);
    }
  }
  function ws(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function ue(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, $s(
            a,
            l
          );
        }
      ws(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Ws(l), l = l.sibling;
  }
  function Ws(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ue(l), l.flags & 2048 && tu(9, l, l.return);
        break;
      case 3:
        ue(l);
        break;
      case 12:
        ue(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, yn(l)) : ue(l);
        break;
      default:
        ue(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ul = a, $s(
            a,
            l
          );
        }
      ws(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          tu(8, t, t.return), yn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, yn(t));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function $s(l, t) {
    for (; Ul !== null; ) {
      var u = Ul;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          tu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Xa(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ul = a;
      else
        l: for (u = l; Ul !== null; ) {
          a = Ul;
          var e = a.sibling, n = a.return;
          if (js(a), a === u) {
            Ul = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ul = e;
            break l;
          }
          Ul = n;
        }
    }
  }
  var Bd = {
    getCacheForType: function(l) {
      var t = Zl(_l), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    }
  }, pd = typeof WeakMap == "function" ? WeakMap : Map, ll = 0, il = null, C = null, K = 0, tl = 0, ft = null, eu = !1, ia = !1, rc = !1, Ct = 0, gl = 0, nu = 0, qu = 0, gc = 0, rt = 0, sa = 0, ae = null, Fl = null, Sc = !1, bc = 0, dn = 1 / 0, hn = null, fu = null, pl = 0, cu = null, va = null, ya = 0, Tc = 0, Ec = null, ks = null, ee = 0, Ac = null;
  function ct() {
    if ((ll & 2) !== 0 && K !== 0)
      return K & -K;
    if (g.T !== null) {
      var l = Iu;
      return l !== 0 ? l : Rc();
    }
    return di();
  }
  function Fs() {
    rt === 0 && (rt = (K & 536870912) === 0 || k ? ii() : 536870912);
    var l = mt.current;
    return l !== null && (l.flags |= 32), rt;
  }
  function it(l, t, u) {
    (l === il && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null) && (da(l, 0), iu(
      l,
      K,
      rt,
      !1
    )), Aa(l, u), ((ll & 2) === 0 || l !== il) && (l === il && ((ll & 2) === 0 && (qu |= u), gl === 4 && iu(
      l,
      K,
      rt,
      !1
    )), Dt(l));
  }
  function Is(l, t, u) {
    if ((ll & 6) !== 0) throw Error(r(327));
    var a = !u && (t & 124) === 0 && (t & l.expiredLanes) === 0 || Ea(l, t), e = a ? Xd(l, t) : Oc(l, t, !0), n = a;
    do {
      if (e === 0) {
        ia && !a && iu(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Gd(u)) {
          e = Oc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ae;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (da(c, f).flags |= 256), f = Oc(
                c,
                f,
                !1
              ), f !== 2) {
                if (rc && !i) {
                  c.errorRecoveryDisabledLanes |= n, qu |= n, e = 4;
                  break l;
                }
                n = Fl, Fl = e, n !== null && (Fl === null ? Fl = n : Fl.push.apply(
                  Fl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          da(l, 0), iu(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              iu(
                a,
                t,
                rt,
                !eu
              );
              break l;
            case 2:
              Fl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && (e = bc + 300 - At(), 10 < e)) {
            if (iu(
              a,
              t,
              rt,
              !eu
            ), ze(a, 0, !0) !== 0) break l;
            a.timeoutHandle = Dv(
              Ps.bind(
                null,
                a,
                u,
                Fl,
                hn,
                Sc,
                t,
                rt,
                qu,
                sa,
                eu,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          Ps(
            a,
            u,
            Fl,
            hn,
            Sc,
            t,
            rt,
            qu,
            sa,
            eu,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function Ps(l, t, u, a, e, n, f, c, i, h, S, T, o, m) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, (T & 8192 || (T & 16785408) === 16785408) && (ye = { stylesheets: null, count: 0, unsuspend: g1 }, Js(t), T = b1(), T !== null)) {
      l.cancelPendingCommit = T(
        fv.bind(
          null,
          l,
          t,
          n,
          u,
          a,
          e,
          f,
          c,
          i,
          S,
          1,
          o,
          m
        )
      ), iu(l, n, f, !h);
      return;
    }
    fv(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function Gd(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!ut(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function iu(l, t, u, a) {
    t &= ~gc, t &= ~qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - tt(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && vi(l, u, t);
  }
  function on() {
    return (ll & 6) === 0 ? (ne(0), !1) : !0;
  }
  function zc() {
    if (C !== null) {
      if (tl === 0)
        var l = C.return;
      else
        l = C, Bt = Mu = null, jf(l), ea = null, $a = 0, l = C;
      for (; l !== null; )
        qs(l.alternate, l), l = l.return;
      C = null;
    }
  }
  function da(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, l1(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), zc(), il = l, C = u = Ht(l.current, null), K = t, tl = 0, ft = null, eu = !1, ia = Ea(l, t), rc = !1, sa = rt = gc = qu = nu = gl = 0, Fl = ae = null, Sc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - tt(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Ct = t, pe(), u;
  }
  function lv(l, t) {
    Q = null, g.H = ln, t === ja || t === Le ? (t = g0(), tl = 3) : t === o0 ? (t = g0(), tl = 4) : tl = t === Ss ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ft = t, C === null && (gl = 1, nn(
      l,
      yt(t, l.current)
    ));
  }
  function tv() {
    var l = g.H;
    return g.H = ln, l === null ? ln : l;
  }
  function uv() {
    var l = g.A;
    return g.A = Bd, l;
  }
  function _c() {
    gl = 4, eu || (K & 4194048) !== K && mt.current !== null || (ia = !0), (nu & 134217727) === 0 && (qu & 134217727) === 0 || il === null || iu(
      il,
      K,
      rt,
      !1
    );
  }
  function Oc(l, t, u) {
    var a = ll;
    ll |= 2;
    var e = tv(), n = uv();
    (il !== l || K !== t) && (hn = null, da(l, t)), t = !1;
    var f = gl;
    l: do
      try {
        if (tl !== 0 && C !== null) {
          var c = C, i = ft;
          switch (tl) {
            case 8:
              zc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              mt.current === null && (t = !0);
              var h = tl;
              if (tl = 0, ft = null, ha(l, c, i, h), u && ia) {
                f = 0;
                break l;
              }
              break;
            default:
              h = tl, tl = 0, ft = null, ha(l, c, i, h);
          }
        }
        xd(), f = gl;
        break;
      } catch (S) {
        lv(l, S);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Bt = Mu = null, ll = a, g.H = e, g.A = n, C === null && (il = null, K = 0, pe()), f;
  }
  function xd() {
    for (; C !== null; ) av(C);
  }
  function Xd(l, t) {
    var u = ll;
    ll |= 2;
    var a = tv(), e = uv();
    il !== l || K !== t ? (hn = null, dn = At() + 500, da(l, t)) : ia = Ea(
      l,
      t
    );
    l: do
      try {
        if (tl !== 0 && C !== null) {
          t = C;
          var n = ft;
          t: switch (tl) {
            case 1:
              tl = 0, ft = null, ha(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (m0(n)) {
                tl = 0, ft = null, ev(t);
                break;
              }
              t = function() {
                tl !== 2 && tl !== 9 || il !== l || (tl = 7), Dt(l);
              }, n.then(t, t);
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              m0(n) ? (tl = 0, ft = null, ev(t)) : (tl = 0, ft = null, ha(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (C.tag) {
                case 26:
                  f = C.memoizedState;
                case 5:
                case 27:
                  var c = C;
                  if (!f || Qv(f)) {
                    tl = 0, ft = null;
                    var i = c.sibling;
                    if (i !== null) C = i;
                    else {
                      var h = c.return;
                      h !== null ? (C = h, mn(h)) : C = null;
                    }
                    break t;
                  }
              }
              tl = 0, ft = null, ha(l, t, n, 5);
              break;
            case 6:
              tl = 0, ft = null, ha(l, t, n, 6);
              break;
            case 8:
              zc(), gl = 6;
              break l;
            default:
              throw Error(r(462));
          }
        }
        Qd();
        break;
      } catch (S) {
        lv(l, S);
      }
    while (!0);
    return Bt = Mu = null, g.H = a, g.A = e, ll = u, C !== null ? 0 : (il = null, K = 0, pe(), gl);
  }
  function Qd() {
    for (; C !== null && !cy(); )
      av(C);
  }
  function av(l) {
    var t = Ns(l.alternate, l, Ct);
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : C = t;
  }
  function ev(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _s(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          K
        );
        break;
      case 11:
        t = _s(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          K
        );
        break;
      case 5:
        jf(t);
      default:
        qs(u, t), t = C = n0(t, Ct), t = Ns(u, t, Ct);
    }
    l.memoizedProps = l.pendingProps, t === null ? mn(l) : C = t;
  }
  function ha(l, t, u, a) {
    Bt = Mu = null, jf(t), ea = null, $a = 0;
    var e = t.return;
    try {
      if (Ud(
        l,
        e,
        t,
        u,
        K
      )) {
        gl = 1, nn(
          l,
          yt(u, l.current)
        ), C = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw C = e, n;
      gl = 1, nn(
        l,
        yt(u, l.current)
      ), C = null;
      return;
    }
    t.flags & 32768 ? (k || a === 1 ? l = !0 : ia || (K & 536870912) !== 0 ? l = !1 : (eu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = mt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nv(t, l)) : mn(t);
  }
  function mn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        nv(
          t,
          eu
        );
        return;
      }
      l = t.return;
      var u = Nd(
        t.alternate,
        t,
        Ct
      );
      if (u !== null) {
        C = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        C = t;
        return;
      }
      C = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function nv(l, t) {
    do {
      var u = Hd(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, C = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        C = l;
        return;
      }
      C = l = u;
    } while (l !== null);
    gl = 6, C = null;
  }
  function fv(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      rn();
    while (pl !== 0);
    if ((ll & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (n = t.lanes | t.childLanes, n |= mf, gy(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === il && (C = il = null, K = 0), va = t, cu = l, ya = u, Tc = n, Ec = e, ks = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Vd(Te, function() {
        return yv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = g.T, g.T = null, e = _.p, _.p = 2, f = ll, ll |= 4;
        try {
          qd(l, t, u);
        } finally {
          ll = f, _.p = e, g.T = a;
        }
      }
      pl = 1, cv(), iv(), sv();
    }
  }
  function cv() {
    if (pl === 1) {
      pl = 0;
      var l = cu, t = va, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Vs(t, l);
          var n = xc, f = $i(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Wi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && vf(c)) {
              var h = i.start, S = i.end;
              if (S === void 0 && (S = h), "selectionStart" in c)
                c.selectionStart = h, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, o = T && T.defaultView || window;
                if (o.getSelection) {
                  var m = o.getSelection(), p = c.textContent.length, Y = Math.min(i.start, p), nl = i.end === void 0 ? Y : Math.min(i.end, p);
                  !m.extend && Y > nl && (f = nl, nl = Y, Y = f);
                  var y = wi(
                    c,
                    Y
                  ), v = wi(
                    c,
                    nl
                  );
                  if (y && v && (m.rangeCount !== 1 || m.anchorNode !== y.node || m.anchorOffset !== y.offset || m.focusNode !== v.node || m.focusOffset !== v.offset)) {
                    var d = T.createRange();
                    d.setStart(y.node, y.offset), m.removeAllRanges(), Y > nl ? (m.addRange(d), m.extend(v.node, v.offset)) : (d.setEnd(v.node, v.offset), m.addRange(d));
                  }
                }
              }
            }
            for (T = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && T.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var b = T[c];
              b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
            }
          }
          Un = !!Gc, xc = Gc = null;
        } finally {
          ll = e, _.p = a, g.T = u;
        }
      }
      l.current = t, pl = 2;
    }
  }
  function iv() {
    if (pl === 2) {
      pl = 0;
      var l = cu, t = va, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = g.T, g.T = null;
        var a = _.p;
        _.p = 2;
        var e = ll;
        ll |= 4;
        try {
          Qs(l, t.alternate, t);
        } finally {
          ll = e, _.p = a, g.T = u;
        }
      }
      pl = 3;
    }
  }
  function sv() {
    if (pl === 4 || pl === 3) {
      pl = 0, iy();
      var l = cu, t = va, u = ya, a = ks;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pl = 5 : (pl = 0, va = cu = null, vv(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (fu = null), Cn(u), t = t.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            Ta,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = g.T, e = _.p, _.p = 2, g.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          g.T = t, _.p = e;
        }
      }
      (ya & 3) !== 0 && rn(), Dt(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === Ac ? ee++ : (ee = 0, Ac = l) : ee = 0, ne(0);
    }
  }
  function vv(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Xa(t)));
  }
  function rn(l) {
    return cv(), iv(), sv(), yv();
  }
  function yv() {
    if (pl !== 5) return !1;
    var l = cu, t = Tc;
    Tc = 0;
    var u = Cn(ya), a = g.T, e = _.p;
    try {
      _.p = 32 > u ? 32 : u, g.T = null, u = Ec, Ec = null;
      var n = cu, f = ya;
      if (pl = 0, va = cu = null, ya = 0, (ll & 6) !== 0) throw Error(r(331));
      var c = ll;
      if (ll |= 4, Ws(n.current), Ks(
        n,
        n.current,
        f,
        u
      ), ll = c, ne(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(Ta, n);
        } catch {
        }
      return !0;
    } finally {
      _.p = e, g.T = a, vv(l, t);
    }
  }
  function dv(l, t, u) {
    t = yt(u, t), t = lc(l.stateNode, t, 2), l = Ft(l, t, 2), l !== null && (Aa(l, 2), Dt(l));
  }
  function cl(l, t, u) {
    if (l.tag === 3)
      dv(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          dv(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (fu === null || !fu.has(a))) {
            l = yt(u, l), u = rs(2), a = Ft(t, u, 2), a !== null && (gs(
              u,
              a,
              t,
              l
            ), Aa(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new pd();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (rc = !0, e.add(u), l = jd.bind(null, l, t, u), t.then(l, l));
  }
  function jd(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, il === l && (K & u) === u && (gl === 4 || gl === 3 && (K & 62914560) === K && 300 > At() - bc ? (ll & 2) === 0 && da(l, 0) : gc |= u, sa === K && (sa = 0)), Dt(l);
  }
  function hv(l, t) {
    t === 0 && (t = si()), l = Wu(l, t), l !== null && (Aa(l, t), Dt(l));
  }
  function Zd(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), hv(l, u);
  }
  function Cd(l, t) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(t), hv(l, u);
  }
  function Vd(l, t) {
    return Xn(l, t);
  }
  var gn = null, oa = null, Dc = !1, Sn = !1, Uc = !1, Yu = 0;
  function Dt(l) {
    l !== oa && l.next === null && (oa === null ? gn = oa = l : oa = oa.next = l), Sn = !0, Dc || (Dc = !0, Kd());
  }
  function ne(l, t) {
    if (!Uc && Sn) {
      Uc = !0;
      do
        for (var u = !1, a = gn; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - tt(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, gv(a, n));
          } else
            n = K, n = ze(
              a,
              a === il ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ea(a, n) || (u = !0, gv(a, n));
          a = a.next;
        }
      while (u);
      Uc = !1;
    }
  }
  function Ld() {
    ov();
  }
  function ov() {
    Sn = Dc = !1;
    var l = 0;
    Yu !== 0 && (Pd() && (l = Yu), Yu = 0);
    for (var t = At(), u = null, a = gn; a !== null; ) {
      var e = a.next, n = mv(a, t);
      n === 0 ? (a.next = null, u === null ? gn = e : u.next = e, e === null && (oa = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (Sn = !0)), a = e;
    }
    ne(l);
  }
  function mv(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - tt(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = ry(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = il, u = K, u = ze(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (tl === 2 || tl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Qn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ea(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Qn(a), Cn(u)) {
        case 2:
        case 8:
          u = fi;
          break;
        case 32:
          u = Te;
          break;
        case 268435456:
          u = ci;
          break;
        default:
          u = Te;
      }
      return a = rv.bind(null, l), u = Xn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Qn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rv(l, t) {
    if (pl !== 0 && pl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rn() && l.callbackNode !== u)
      return null;
    var a = K;
    return a = ze(
      l,
      l === il ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Is(l, a, t), mv(l, At()), l.callbackNode != null && l.callbackNode === u ? rv.bind(null, l) : null);
  }
  function gv(l, t) {
    if (rn()) return null;
    Is(l, t, !0);
  }
  function Kd() {
    t1(function() {
      (ll & 6) !== 0 ? Xn(
        ni,
        Ld
      ) : ov();
    });
  }
  function Rc() {
    return Yu === 0 && (Yu = ii()), Yu;
  }
  function Sv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ue("" + l);
  }
  function bv(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Jd(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = Sv(
        (e[wl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[wl] || null) ? Sv(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new qe(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Yu !== 0) {
                  var i = f ? bv(e, f) : new FormData(e);
                  $f(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? bv(e, f) : new FormData(e), $f(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Nc = 0; Nc < of.length; Nc++) {
    var Hc = of[Nc], wd = Hc.toLowerCase(), Wd = Hc[0].toUpperCase() + Hc.slice(1);
    bt(
      wd,
      "on" + Wd
    );
  }
  bt(Ii, "onAnimationEnd"), bt(Pi, "onAnimationIteration"), bt(l0, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(yd, "onTransitionRun"), bt(dd, "onTransitionStart"), bt(hd, "onTransitionCancel"), bt(t0, "onTransitionEnd"), Xu("onMouseEnter", ["mouseout", "mouseover"]), Xu("onMouseLeave", ["mouseout", "mouseover"]), Xu("onPointerEnter", ["pointerout", "pointerover"]), Xu("onPointerLeave", ["pointerout", "pointerover"]), gu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), gu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), gu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), gu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), gu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), gu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var fe = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), $d = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fe)
  );
  function Tv(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, h = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              en(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function V(l, t) {
    var u = t[Vn];
    u === void 0 && (u = t[Vn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Ev(t, l, 2, !1), u.add(a));
  }
  function qc(l, t, u) {
    var a = 0;
    t && (a |= 4), Ev(
      u,
      l,
      a,
      t
    );
  }
  var bn = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(l) {
    if (!l[bn]) {
      l[bn] = !0, oi.forEach(function(u) {
        u !== "selectionchange" && ($d.has(u) || qc(u, !1, l), qc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[bn] || (t[bn] = !0, qc("selectionchange", !1, t));
    }
  }
  function Ev(l, t, u, a) {
    switch (Kv(t)) {
      case 2:
        var e = A1;
        break;
      case 8:
        e = z1;
        break;
      default:
        e = wc;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !lf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Bc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = pu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    Ui(function() {
      var h = n, S = In(u), T = [];
      l: {
        var o = u0.get(l);
        if (o !== void 0) {
          var m = qe, p = l;
          switch (l) {
            case "keypress":
              if (Ne(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = Vy;
              break;
            case "focusin":
              p = "focus", m = ef;
              break;
            case "focusout":
              p = "blur", m = ef;
              break;
            case "beforeblur":
            case "afterblur":
              m = ef;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Hi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = Hy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Jy;
              break;
            case Ii:
            case Pi:
            case l0:
              m = By;
              break;
            case t0:
              m = Wy;
              break;
            case "scroll":
            case "scrollend":
              m = Ry;
              break;
            case "wheel":
              m = ky;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Gy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Yi;
              break;
            case "toggle":
            case "beforetoggle":
              m = Iy;
          }
          var Y = (t & 4) !== 0, nl = !Y && (l === "scroll" || l === "scrollend"), y = Y ? o !== null ? o + "Capture" : null : o;
          Y = [];
          for (var v = h, d; v !== null; ) {
            var b = v;
            if (d = b.stateNode, b = b.tag, b !== 5 && b !== 26 && b !== 27 || d === null || y === null || (b = Oa(v, y), b != null && Y.push(
              ce(v, b, d)
            )), nl) break;
            v = v.return;
          }
          0 < Y.length && (o = new m(
            o,
            p,
            null,
            u,
            S
          ), T.push({ event: o, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", o && u !== Fn && (p = u.relatedTarget || u.fromElement) && (pu(p) || p[Bu]))
            break l;
          if ((m || o) && (o = S.window === S ? S : (o = S.ownerDocument) ? o.defaultView || o.parentWindow : window, m ? (p = u.relatedTarget || u.toElement, m = h, p = p ? pu(p) : null, p !== null && (nl = W(p), Y = p.tag, p !== nl || Y !== 5 && Y !== 27 && Y !== 6) && (p = null)) : (m = null, p = h), m !== p)) {
            if (Y = Hi, b = "onMouseLeave", y = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (Y = Yi, b = "onPointerLeave", y = "onPointerEnter", v = "pointer"), nl = m == null ? o : _a(m), d = p == null ? o : _a(p), o = new Y(
              b,
              v + "leave",
              m,
              u,
              S
            ), o.target = nl, o.relatedTarget = d, b = null, pu(S) === h && (Y = new Y(
              y,
              v + "enter",
              p,
              u,
              S
            ), Y.target = d, Y.relatedTarget = nl, b = Y), nl = b, m && p)
              t: {
                for (Y = m, y = p, v = 0, d = Y; d; d = ma(d))
                  v++;
                for (d = 0, b = y; b; b = ma(b))
                  d++;
                for (; 0 < v - d; )
                  Y = ma(Y), v--;
                for (; 0 < d - v; )
                  y = ma(y), d--;
                for (; v--; ) {
                  if (Y === y || y !== null && Y === y.alternate)
                    break t;
                  Y = ma(Y), y = ma(y);
                }
                Y = null;
              }
            else Y = null;
            m !== null && Av(
              T,
              o,
              m,
              Y,
              !1
            ), p !== null && nl !== null && Av(
              T,
              nl,
              p,
              Y,
              !0
            );
          }
        }
        l: {
          if (o = h ? _a(h) : window, m = o.nodeName && o.nodeName.toLowerCase(), m === "select" || m === "input" && o.type === "file")
            var D = Zi;
          else if (Qi(o))
            if (Ci)
              D = id;
            else {
              D = fd;
              var Z = nd;
            }
          else
            m = o.nodeName, !m || m.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? h && kn(h.elementType) && (D = Zi) : D = cd;
          if (D && (D = D(l, h))) {
            ji(
              T,
              D,
              u,
              S
            );
            break l;
          }
          Z && Z(l, o, h), l === "focusout" && h && o.type === "number" && h.memoizedProps.value != null && $n(o, "number", o.value);
        }
        switch (Z = h ? _a(h) : window, l) {
          case "focusin":
            (Qi(Z) || Z.contentEditable === "true") && (Ku = Z, yf = h, Ya = null);
            break;
          case "focusout":
            Ya = yf = Ku = null;
            break;
          case "mousedown":
            df = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            df = !1, ki(T, u, S);
            break;
          case "selectionchange":
            if (vd) break;
          case "keydown":
          case "keyup":
            ki(T, u, S);
        }
        var U;
        if (ff)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Lu ? xi(l, u) && (B = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (B = "onCompositionStart");
        B && (Bi && u.locale !== "ko" && (Lu || B !== "onCompositionStart" ? B === "onCompositionEnd" && Lu && (U = Ri()) : (wt = S, tf = "value" in wt ? wt.value : wt.textContent, Lu = !0)), Z = Tn(h, B), 0 < Z.length && (B = new qi(
          B,
          l,
          null,
          u,
          S
        ), T.push({ event: B, listeners: Z }), U ? B.data = U : (U = Xi(u), U !== null && (B.data = U)))), (U = ld ? td(l, u) : ud(l, u)) && (B = Tn(h, "onBeforeInput"), 0 < B.length && (Z = new qi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), T.push({
          event: Z,
          listeners: B
        }), Z.data = U)), Jd(
          T,
          l,
          h,
          u,
          S
        );
      }
      Tv(T, t);
    });
  }
  function ce(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function Tn(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Oa(l, u), e != null && a.unshift(
        ce(l, e, n)
      ), e = Oa(l, t), e != null && a.push(
        ce(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ma(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Av(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, h = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = Oa(u, n), h != null && f.unshift(
        ce(u, h, i)
      )) : e || (h = Oa(u, n), h != null && f.push(
        ce(u, h, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var kd = /\r\n?/g, Fd = /\u0000|\uFFFD/g;
  function zv(l) {
    return (typeof l == "string" ? l : "" + l).replace(kd, `
`).replace(Fd, "");
  }
  function _v(l, t) {
    return t = zv(t), zv(l) === t;
  }
  function En() {
  }
  function el(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Zu(l, "" + a);
        break;
      case "className":
        Oe(l, "class", a);
        break;
      case "tabIndex":
        Oe(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Oe(l, u, a);
        break;
      case "style":
        Mi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Oe(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && el(l, t, "name", e.name, e, null), el(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), el(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), el(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (el(l, t, "encType", e.encType, e, null), el(l, t, "method", e.method, e, null), el(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ue("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = En);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ue("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        V("beforetoggle", l), V("toggle", l), _e(l, "popover", a);
        break;
      case "xlinkActuate":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Rt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Rt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        _e(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Dy.get(u) || u, _e(l, u, a));
    }
  }
  function pc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Mi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(r(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Zu(l, a) : (typeof a == "number" || typeof a == "bigint") && Zu(l, "" + a);
        break;
      case "onScroll":
        a != null && V("scroll", l);
        break;
      case "onScrollEnd":
        a != null && V("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = En);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[wl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : _e(l, u, a);
          }
    }
  }
  function Gl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        V("error", l), V("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  el(l, t, n, f, u, null);
              }
          }
        e && el(l, t, "srcSet", u.srcSet, u, null), a && el(l, t, "src", u.src, u, null);
        return;
      case "input":
        V("invalid", l);
        var c = n = f = e = null, i = null, h = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var S = u[a];
            if (S != null)
              switch (a) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  h = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(r(137, t));
                  break;
                default:
                  el(l, t, a, S, u, null);
              }
          }
        Ai(
          l,
          n,
          c,
          i,
          h,
          f,
          e,
          !1
        ), Me(l);
        return;
      case "select":
        V("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                el(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? ju(l, !!a, t, !1) : u != null && ju(l, !!a, u, !0);
        return;
      case "textarea":
        V("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                el(l, t, f, c, u, null);
            }
        _i(l, a, e, n), Me(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                el(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        V("beforetoggle", l), V("toggle", l), V("cancel", l), V("close", l);
        break;
      case "iframe":
      case "object":
        V("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < fe.length; a++)
          V(fe[a], l);
        break;
      case "image":
        V("error", l), V("load", l);
        break;
      case "details":
        V("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        V("error", l), V("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in u)
          if (u.hasOwnProperty(h) && (a = u[h], a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                el(l, t, h, a, u, null);
            }
        return;
      default:
        if (kn(t)) {
          for (S in u)
            u.hasOwnProperty(S) && (a = u[S], a !== void 0 && pc(
              l,
              t,
              S,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && el(l, t, c, a, u, null));
  }
  function Id(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, h = null, S = null;
        for (m in u) {
          var T = u[m];
          if (u.hasOwnProperty(m) && T != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(m) || el(l, t, m, null, a, T);
            }
        }
        for (var o in a) {
          var m = a[o];
          if (T = u[o], a.hasOwnProperty(o) && (m != null || T != null))
            switch (o) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                h = m;
                break;
              case "defaultChecked":
                S = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(r(137, t));
                break;
              default:
                m !== T && el(
                  l,
                  t,
                  o,
                  m,
                  a,
                  T
                );
            }
        }
        Wn(
          l,
          f,
          c,
          i,
          h,
          S,
          n,
          e
        );
        return;
      case "select":
        m = f = c = o = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                a.hasOwnProperty(n) || el(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && el(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = m, o != null ? ju(l, !!u, o, !1) : !!a != !!u && (t != null ? ju(l, !!u, t, !0) : ju(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = o = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                el(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(r(91));
                break;
              default:
                e !== n && el(l, t, f, e, a, n);
            }
        zi(l, o, m);
        return;
      case "option":
        for (var p in u)
          if (o = u[p], u.hasOwnProperty(p) && o != null && !a.hasOwnProperty(p))
            switch (p) {
              case "selected":
                l.selected = !1;
                break;
              default:
                el(
                  l,
                  t,
                  p,
                  null,
                  a,
                  o
                );
            }
        for (i in a)
          if (o = a[i], m = u[i], a.hasOwnProperty(i) && o !== m && (o != null || m != null))
            switch (i) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                el(
                  l,
                  t,
                  i,
                  o,
                  a,
                  m
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Y in u)
          o = u[Y], u.hasOwnProperty(Y) && o != null && !a.hasOwnProperty(Y) && el(l, t, Y, null, a, o);
        for (h in a)
          if (o = a[h], m = u[h], a.hasOwnProperty(h) && o !== m && (o != null || m != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(r(137, t));
                break;
              default:
                el(
                  l,
                  t,
                  h,
                  o,
                  a,
                  m
                );
            }
        return;
      default:
        if (kn(t)) {
          for (var nl in u)
            o = u[nl], u.hasOwnProperty(nl) && o !== void 0 && !a.hasOwnProperty(nl) && pc(
              l,
              t,
              nl,
              void 0,
              a,
              o
            );
          for (S in a)
            o = a[S], m = u[S], !a.hasOwnProperty(S) || o === m || o === void 0 && m === void 0 || pc(
              l,
              t,
              S,
              o,
              a,
              m
            );
          return;
        }
    }
    for (var y in u)
      o = u[y], u.hasOwnProperty(y) && o != null && !a.hasOwnProperty(y) && el(l, t, y, null, a, o);
    for (T in a)
      o = a[T], m = u[T], !a.hasOwnProperty(T) || o === m || o == null && m == null || el(l, t, T, o, a, m);
  }
  var Gc = null, xc = null;
  function An(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Ov(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mv(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Xc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Qc = null;
  function Pd() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Qc ? !1 : (Qc = l, !0) : (Qc = null, !1);
  }
  var Dv = typeof setTimeout == "function" ? setTimeout : void 0, l1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Uv = typeof Promise == "function" ? Promise : void 0, t1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Uv < "u" ? function(l) {
    return Uv.resolve(null).then(l).catch(u1);
  } : Dv;
  function u1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function su(l) {
    return l === "head";
  }
  function Rv(l, t) {
    var u = t, a = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < a && 8 > a) {
            u = a;
            var f = l.ownerDocument;
            if (u & 1 && ie(f.documentElement), u & 2 && ie(f.body), u & 4)
              for (u = f.head, ie(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[za] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), re(t);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : a = u.charCodeAt(0) - 48;
      else a = 0;
      u = n;
    } while (u);
    re(t);
  }
  function jc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          jc(u), Ln(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function a1(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[za])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Et(l.nextSibling), l === null) break;
    }
    return null;
  }
  function e1(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Et(l.nextSibling), l === null)) return null;
    return l;
  }
  function Zc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function n1(l, t) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Et(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return l;
  }
  var Cc = null;
  function Nv(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (t === 0) return l;
          t--;
        } else u === "/$" && t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Hv(l, t, u) {
    switch (t = An(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(r(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(r(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function ie(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    Ln(l);
  }
  var gt = /* @__PURE__ */ new Map(), qv = /* @__PURE__ */ new Set();
  function zn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Vt = _.d;
  _.d = {
    f: f1,
    r: c1,
    D: i1,
    C: s1,
    L: v1,
    m: y1,
    X: h1,
    S: d1,
    M: o1
  };
  function f1() {
    var l = Vt.f(), t = on();
    return l || t;
  }
  function c1(l) {
    var t = Gu(l);
    t !== null && t.tag === 5 && t.type === "form" ? I0(t) : Vt.r(l);
  }
  var ra = typeof document > "u" ? null : document;
  function Yv(l, t, u) {
    var a = ra;
    if (a && typeof t == "string" && t) {
      var e = vt(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), qv.has(e) || (qv.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Gl(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function i1(l) {
    Vt.D(l), Yv("dns-prefetch", l, null);
  }
  function s1(l, t) {
    Vt.C(l, t), Yv("preconnect", l, t);
  }
  function v1(l, t, u) {
    Vt.L(l, t, u);
    var a = ra;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + vt(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + vt(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + vt(
        u.imageSizes
      ) + '"]')) : e += '[href="' + vt(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = ga(l);
          break;
        case "script":
          n = Sa(l);
      }
      gt.has(n) || (l = N(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), gt.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(se(n)) || t === "script" && a.querySelector(ve(n)) || (t = a.createElement("link"), Gl(t, "link", l), Ml(t), a.head.appendChild(t)));
    }
  }
  function y1(l, t) {
    Vt.m(l, t);
    var u = ra;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Sa(l);
      }
      if (!gt.has(n) && (l = N({ rel: "modulepreload", href: l }, t), gt.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ve(n)))
              return;
        }
        a = u.createElement("link"), Gl(a, "link", l), Ml(a), u.head.appendChild(a);
      }
    }
  }
  function d1(l, t, u) {
    Vt.S(l, t, u);
    var a = ra;
    if (a && l) {
      var e = xu(a).hoistableStyles, n = ga(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          se(n)
        ))
          c.loading = 5;
        else {
          l = N(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = gt.get(n)) && Vc(l, u);
          var i = f = a.createElement("link");
          Ml(i), Gl(i, "link", l), i._p = new Promise(function(h, S) {
            i.onload = h, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, _n(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function h1(l, t) {
    Vt.X(l, t);
    var u = ra;
    if (u && l) {
      var a = xu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(ve(e)), n || (l = N({ src: l, async: !0 }, t), (t = gt.get(e)) && Lc(l, t), n = u.createElement("script"), Ml(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function o1(l, t) {
    Vt.M(l, t);
    var u = ra;
    if (u && l) {
      var a = xu(u).hoistableScripts, e = Sa(l), n = a.get(e);
      n || (n = u.querySelector(ve(e)), n || (l = N({ src: l, async: !0, type: "module" }, t), (t = gt.get(e)) && Lc(l, t), n = u.createElement("script"), Ml(n), Gl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Bv(l, t, u, a) {
    var e = (e = G.current) ? zn(e) : null;
    if (!e) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = ga(u.href), u = xu(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ga(u.href);
          var n = xu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            se(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), gt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, gt.set(l, u), n || m1(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Sa(u), u = xu(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, l));
    }
  }
  function ga(l) {
    return 'href="' + vt(l) + '"';
  }
  function se(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function pv(l) {
    return N({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function m1(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Gl(t, "link", u), Ml(t), l.head.appendChild(t));
  }
  function Sa(l) {
    return '[src="' + vt(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function Gv(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + vt(u.href) + '"]'
          );
          if (a)
            return t.instance = a, Ml(a), a;
          var e = N({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Ml(a), Gl(a, "style", e), _n(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = ga(u.href);
          var n = l.querySelector(
            se(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Ml(n), n;
          a = pv(u), (e = gt.get(e)) && Vc(a, e), n = (l.ownerDocument || l).createElement("link"), Ml(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Gl(n, "link", a), t.state.loading |= 4, _n(n, u.precedence, l), t.instance = n;
        case "script":
          return n = Sa(u.src), (e = l.querySelector(
            ve(n)
          )) ? (t.instance = e, Ml(e), e) : (a = u, (e = gt.get(n)) && (a = N({}, u), Lc(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), Ml(e), Gl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, _n(a, u.precedence, l));
    return t.instance;
  }
  function _n(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function Vc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Lc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var On = null;
  function xv(l, t, u) {
    if (On === null) {
      var a = /* @__PURE__ */ new Map(), e = On = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = On, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[za] || n[jl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Xv(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function r1(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Qv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ye = null;
  function g1() {
  }
  function S1(l, t, u) {
    if (ye === null) throw Error(r(475));
    var a = ye;
    if (t.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var e = ga(u.href), n = l.querySelector(
          se(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (a.count++, a = Mn.bind(a), l.then(a, a)), t.state.loading |= 4, t.instance = n, Ml(n);
          return;
        }
        n = l.ownerDocument || l, u = pv(u), (e = gt.get(e)) && Vc(u, e), n = n.createElement("link"), Ml(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Gl(n, "link", u), t.instance = n;
      }
      a.stylesheets === null && (a.stylesheets = /* @__PURE__ */ new Map()), a.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (a.count++, t = Mn.bind(a), l.addEventListener("load", t), l.addEventListener("error", t));
    }
  }
  function b1() {
    if (ye === null) throw Error(r(475));
    var l = ye;
    return l.stylesheets && l.count === 0 && Kc(l, l.stylesheets), 0 < l.count ? function(t) {
      var u = setTimeout(function() {
        if (l.stylesheets && Kc(l, l.stylesheets), l.unsuspend) {
          var a = l.unsuspend;
          l.unsuspend = null, a();
        }
      }, 6e4);
      return l.unsuspend = t, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Mn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Kc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Dn = null;
  function Kc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Dn = /* @__PURE__ */ new Map(), t.forEach(T1, l), Dn = null, Mn.call(l));
  }
  function T1(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Dn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Dn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Mn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var de = {
    $$typeof: ol,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function E1(l, t, u, a, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = jn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jn(0), this.hiddenUpdates = jn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jv(l, t, u, a, e, n, f, c, i, h, S, T) {
    return l = new E1(
      l,
      t,
      u,
      f,
      c,
      i,
      h,
      T
    ), t = 1, n === !0 && (t |= 24), n = at(3, null, null, t), l.current = n, n.stateNode = l, t = Mf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Nf(n), l;
  }
  function Zv(l) {
    return l ? (l = $u, l) : $u;
  }
  function Cv(l, t, u, a, e, n) {
    e = Zv(e), a.context === null ? a.context = e : a.pendingContext = e, a = kt(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = Ft(l, a, t), u !== null && (it(u, l, t), Ca(u, l, t));
  }
  function Vv(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function Jc(l, t) {
    Vv(l, t), (l = l.alternate) && Vv(l, t);
  }
  function Lv(l) {
    if (l.tag === 13) {
      var t = Wu(l, 67108864);
      t !== null && it(t, l, 67108864), Jc(l, 67108864);
    }
  }
  var Un = !0;
  function A1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 2, wc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function z1(l, t, u, a) {
    var e = g.T;
    g.T = null;
    var n = _.p;
    try {
      _.p = 8, wc(l, t, u, a);
    } finally {
      _.p = n, g.T = e;
    }
  }
  function wc(l, t, u, a) {
    if (Un) {
      var e = Wc(a);
      if (e === null)
        Bc(
          l,
          t,
          a,
          Rn,
          u
        ), Jv(l, a);
      else if (O1(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (Jv(l, a), t & 4 && -1 < _1.indexOf(l)) {
        for (; e !== null; ) {
          var n = Gu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = ru(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - tt(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Dt(n), (ll & 6) === 0 && (dn = At() + 500, ne(0));
                  }
                }
                break;
              case 13:
                c = Wu(n, 2), c !== null && it(c, n, 2), on(), Jc(n, 2);
            }
          if (n = Wc(a), n === null && Bc(
            l,
            t,
            a,
            Rn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Bc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function Wc(l) {
    return l = In(l), $c(l);
  }
  var Rn = null;
  function $c(l) {
    if (Rn = null, l = pu(l), l !== null) {
      var t = W(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = F(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rn = l, null;
  }
  function Kv(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (sy()) {
          case ni:
            return 2;
          case fi:
            return 8;
          case Te:
          case vy:
            return 32;
          case ci:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1, vu = null, yu = null, du = null, he = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), hu = [], _1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jv(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        vu = null;
        break;
      case "dragenter":
      case "dragleave":
        yu = null;
        break;
      case "mouseover":
      case "mouseout":
        du = null;
        break;
      case "pointerover":
      case "pointerout":
        he.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        oe.delete(t.pointerId);
    }
  }
  function me(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Gu(t), t !== null && Lv(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function O1(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return vu = me(
          vu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return yu = me(
          yu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return du = me(
          du,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return he.set(
          n,
          me(
            he.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, oe.set(
          n,
          me(
            oe.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function wv(l) {
    var t = pu(l.target);
    if (t !== null) {
      var u = W(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = F(u), t !== null) {
            l.blockedOn = t, Sy(l.priority, function() {
              if (u.tag === 13) {
                var a = ct();
                a = Zn(a);
                var e = Wu(u, a);
                e !== null && it(e, u, a), Jc(u, a);
              }
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Nn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = Wc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        Fn = a, u.target.dispatchEvent(a), Fn = null;
      } else
        return t = Gu(u), t !== null && Lv(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function Wv(l, t, u) {
    Nn(l) && u.delete(t);
  }
  function M1() {
    kc = !1, vu !== null && Nn(vu) && (vu = null), yu !== null && Nn(yu) && (yu = null), du !== null && Nn(du) && (du = null), he.forEach(Wv), oe.forEach(Wv);
  }
  function Hn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, kc || (kc = !0, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      M1
    )));
  }
  var qn = null;
  function $v(l) {
    qn !== l && (qn = l, z.unstable_scheduleCallback(
      z.unstable_NormalPriority,
      function() {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if ($c(a || u) === null)
              continue;
            break;
          }
          var n = Gu(u);
          n !== null && (l.splice(t, 3), t -= 3, $f(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function re(l) {
    function t(i) {
      return Hn(i, l);
    }
    vu !== null && Hn(vu, l), yu !== null && Hn(yu, l), du !== null && Hn(du, l), he.forEach(t), oe.forEach(t);
    for (var u = 0; u < hu.length; u++) {
      var a = hu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < hu.length && (u = hu[0], u.blockedOn === null); )
      wv(u), u.blockedOn === null && hu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[wl] || null;
        if (typeof n == "function")
          f || $v(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[wl] || null)
              c = f.formAction;
            else if ($c(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), $v(u);
        }
      }
  }
  function Fc(l) {
    this._internalRoot = l;
  }
  Yn.prototype.render = Fc.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(r(409));
    var u = t.current, a = ct();
    Cv(u, a, l, t, null, null);
  }, Yn.prototype.unmount = Fc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Cv(l.current, 2, null, l, null, null), on(), t[Bu] = null;
    }
  };
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = di();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < hu.length && t !== 0 && t < hu[u].priority; u++) ;
      hu.splice(u, 0, l), u === 0 && wv(l);
    }
  };
  var kv = X.version;
  if (kv !== "19.1.1")
    throw Error(
      r(
        527,
        kv,
        "19.1.1"
      )
    );
  _.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(r(188)) : (l = Object.keys(l).join(","), Error(r(268, l)));
    return l = R(t), l = l !== null ? E(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var D1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: g,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        Ta = Bn.inject(
          D1
        ), lt = Bn;
      } catch {
      }
  }
  return Se.createRoot = function(l, t) {
    if (!ul(l)) throw Error(r(299));
    var u = !1, a = "", e = ds, n = hs, f = os, c = null;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (c = t.unstable_transitionCallbacks)), t = jv(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      e,
      n,
      f,
      c,
      null
    ), l[Bu] = t.current, Yc(l), new Fc(t);
  }, Se.hydrateRoot = function(l, t, u) {
    if (!ul(l)) throw Error(r(299));
    var a = !1, e = "", n = ds, f = hs, c = os, i = null, h = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (h = u.formState)), t = jv(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      n,
      f,
      c,
      i,
      h
    ), t.context = Zv(null), u = t.current, a = ct(), a = Zn(a), e = kt(a), e.callback = null, Ft(u, e, a), u = a, t.current.lanes = u, Aa(t, u), Dt(t), l[Bu] = t.current, Yc(l), new Yn(t);
  }, Se.version = "19.1.1", Se;
}
var fy;
function x1() {
  if (fy) return Pc.exports;
  fy = 1;
  function z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(z);
      } catch (X) {
        console.error(X);
      }
  }
  return z(), Pc.exports = G1(), Pc.exports;
}
var X1 = x1(), mu = ei();
async function Q1({ lat: z, lon: X }) {
  try {
    const j = `https://api.open-meteo.com/v1/forecast?latitude=${z}&longitude=${X}&current=temperature_2m,weather_code`, ul = await (await fetch(j)).json(), W = Math.round(ul?.current?.temperature_2m ?? NaN), F = Number.isFinite(W) ? W >= 85 ? "hot" : W >= 65 ? "warm" : W >= 45 ? "cool" : "cold" : "fair";
    return Number.isFinite(W) ? `${F} (${W}°)` : F;
  } catch {
    return "fair";
  }
}
function j1({
  events: z = [],
  // [{ id, name, description, location, dateTime, type, minigame }]
  sprites: X = {
    sky: "/assets/recruitment/sprites/sky.png",
    grass: "/assets/recruitment/sprites/grass.png",
    ground: "/assets/recruitment/sprites/ground.png",
    river: "/assets/recruitment/sprites/river.png",
    wagon: "/assets/recruitment/sprites/wagon.png",
    ox: "/assets/recruitment/sprites/ox.png"
  },
  lat: j = null,
  lon: r = null,
  dateText: ul
  // optional override like "April 4, 1848"
}) {
  const W = mu.useRef(null), [F, sl] = mu.useState(0), [R, E] = mu.useState("…"), [N, fl] = mu.useState(!1);
  mu.useEffect(() => {
    const vl = Object.values(X).map((Vl) => {
      const ol = new Image();
      return ol.src = Vl, ol.onload = hl, ol.onerror = hl, ol;
    });
    let I = 0;
    function hl() {
      ++I >= vl.length && fl(!0);
    }
  }, [JSON.stringify(X)]), mu.useEffect(() => {
    j != null && r != null ? Q1({ lat: j, lon: r }).then(E) : E("fair");
  }, [j, r]), mu.useEffect(() => {
    if (!N) return;
    const vl = W.current;
    if (!vl) return;
    const I = vl.getContext("2d");
    if (!I) return;
    const hl = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function Vl() {
      vl.width = Math.floor(window.innerWidth * hl), vl.height = Math.floor(window.innerHeight * hl), vl.style.width = "100%", vl.style.height = "100%";
    }
    Vl(), window.addEventListener("resize", Vl);
    const ol = ba(X.sky), Il = ba(X.grass), L = ba(X.ground), Ll = ba(X.river), xl = ba(X.wagon), Xl = ba(X.ox);
    let Jl;
    function Ut(St = 0) {
      const Sl = St / 1e3, Ql = vl.width, Yl = vl.height;
      I.fillStyle = "#7ec0ff", I.fillRect(0, 0, Ql, Yl), pn(I, ol, Ql, Yl * 0.45, 0, Sl * 5), pn(I, Ll, Ql, Yl * 0.15, Yl * 0.45, Sl * 40), pn(I, Il, Ql, Yl * 0.15, Yl * 0.45 - 10 * hl, Sl * 20), pn(I, L, Ql, Yl * 0.25, Yl * 0.6, Sl * 60);
      const bl = Math.max(1, Math.min(3, Ql / hl / 600)), g = 64 * hl * bl, _ = 48 * hl * bl, H = 96 * hl * bl, P = 64 * hl * bl, s = Yl * 0.6 - 8 * hl;
      I.imageSmoothingEnabled = !1, Xl && I.drawImage(Xl, Ql * 0.35, s - _, g, _), xl && I.drawImage(xl, Ql * 0.35 + g + 8 * hl, s - P, H, P), Jl = requestAnimationFrame(Ut);
    }
    return Jl = requestAnimationFrame(Ut), () => {
      cancelAnimationFrame(Jl), window.removeEventListener("resize", Vl);
    };
  }, [N, X]), mu.useEffect(() => {
    function vl(I) {
      I.code === "Space" && (I.preventDefault(), F < z.length - 1 && sl((hl) => hl + 1));
    }
    return window.addEventListener("keydown", vl), () => window.removeEventListener("keydown", vl);
  }, [F, z.length]);
  const $ = z[F] || {}, Hl = z[F + 1]?.name || "—", ql = ul || (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" });
  return /* @__PURE__ */ Nl.jsxs("div", { className: "fullscreen retro", children: [
    /* @__PURE__ */ Nl.jsx("canvas", { ref: W, className: "w-full h-full block" }),
    /* @__PURE__ */ Nl.jsx("button", { className: "btn", onClick: () => F < z.length - 1 && sl(F + 1), children: "▶ Continue" }),
    /* @__PURE__ */ Nl.jsxs("div", { className: "hud", children: [
      /* @__PURE__ */ Nl.jsx("div", { className: "title", children: $.name || "Event" }),
      /* @__PURE__ */ Nl.jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ Nl.jsxs("div", { children: [
          /* @__PURE__ */ Nl.jsx("strong", { children: "Date:" }),
          " ",
          ql
        ] }),
        /* @__PURE__ */ Nl.jsxs("div", { children: [
          /* @__PURE__ */ Nl.jsx("strong", { children: "Weather:" }),
          " ",
          R
        ] }),
        /* @__PURE__ */ Nl.jsxs("div", { children: [
          /* @__PURE__ */ Nl.jsx("strong", { children: "Where:" }),
          " ",
          $.location || "TBD"
        ] }),
        /* @__PURE__ */ Nl.jsxs("div", { children: [
          /* @__PURE__ */ Nl.jsx("strong", { children: "Next landmark:" }),
          " ",
          Hl
        ] })
      ] }),
      $.description ? /* @__PURE__ */ Nl.jsx("div", { style: { marginTop: 8 }, children: $.description }) : null,
      /* @__PURE__ */ Nl.jsxs("div", { style: { textAlign: "center", marginTop: 10 }, children: [
        "Press ",
        /* @__PURE__ */ Nl.jsx("strong", { children: "SPACE" }),
        " to continue"
      ] })
    ] })
  ] });
}
function ba(z) {
  if (!z) return null;
  const X = new Image();
  return X.src = z, X;
}
function pn(z, X, j, r, ul = 0, W = 0) {
  if (!X || !X.width) {
    z.fillStyle = "#3aa13a", z.fillRect(0, ul, j, r);
    return;
  }
  const F = r, sl = X.width * (F / X.height), R = -(W % sl + sl) % sl;
  for (let E = R; E < j + sl; E += sl)
    z.drawImage(X, E, ul, sl, F);
}
function Z1(z, X = {}) {
  const j = X1.createRoot(z);
  return j.render(/* @__PURE__ */ Nl.jsx(j1, { ...X })), () => j.unmount();
}
export {
  Z1 as mount
};
