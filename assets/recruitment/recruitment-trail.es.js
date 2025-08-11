var Pc = { exports: {} }, Se = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Iv;
function N1() {
  if (Iv) return Se;
  Iv = 1;
  var _ = Symbol.for("react.transitional.element"), Q = Symbol.for("react.fragment");
  function Z(g, ll, cl) {
    var sl = null;
    if (cl !== void 0 && (sl = "" + cl), ll.key !== void 0 && (sl = "" + ll.key), "key" in ll) {
      cl = {};
      for (var k in ll)
        k !== "key" && (cl[k] = ll[k]);
    } else cl = ll;
    return ll = cl.ref, {
      $$typeof: _,
      type: g,
      key: sl,
      ref: ll !== void 0 ? ll : null,
      props: cl
    };
  }
  return Se.Fragment = Q, Se.jsx = Z, Se.jsxs = Z, Se;
}
var Pv;
function H1() {
  return Pv || (Pv = 1, Pc.exports = N1()), Pc.exports;
}
var Dl = H1(), li = { exports: {} }, be = {}, ti = { exports: {} }, ui = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly;
function q1() {
  return ly || (ly = 1, function(_) {
    function Q(S, O) {
      var q = S.length;
      S.push(O);
      l: for (; 0 < q; ) {
        var F = q - 1 >>> 1, v = S[F];
        if (0 < ll(v, O))
          S[F] = O, S[q] = v, q = F;
        else break l;
      }
    }
    function Z(S) {
      return S.length === 0 ? null : S[0];
    }
    function g(S) {
      if (S.length === 0) return null;
      var O = S[0], q = S.pop();
      if (q !== O) {
        S[0] = q;
        l: for (var F = 0, v = S.length, z = v >>> 1; F < z; ) {
          var D = 2 * (F + 1) - 1, M = S[D], Y = D + 1, w = S[Y];
          if (0 > ll(M, q))
            Y < v && 0 > ll(w, M) ? (S[F] = w, S[Y] = q, F = Y) : (S[F] = M, S[D] = q, F = D);
          else if (Y < v && 0 > ll(w, q))
            S[F] = w, S[Y] = q, F = Y;
          else break l;
        }
      }
      return O;
    }
    function ll(S, O) {
      var q = S.sortIndex - O.sortIndex;
      return q !== 0 ? q : S.id - O.id;
    }
    if (_.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var cl = performance;
      _.unstable_now = function() {
        return cl.now();
      };
    } else {
      var sl = Date, k = sl.now();
      _.unstable_now = function() {
        return sl.now() - k;
      };
    }
    var R = [], A = [], H = 1, tl = null, ul = 3, Al = !1, Bl = !1, Fl = !1, al = !1, ml = typeof setTimeout == "function" ? setTimeout : null, dl = typeof clearTimeout == "function" ? clearTimeout : null, gl = typeof setImmediate < "u" ? setImmediate : null;
    function Ul(S) {
      for (var O = Z(A); O !== null; ) {
        if (O.callback === null) g(A);
        else if (O.startTime <= S)
          g(A), O.sortIndex = O.expirationTime, Q(R, O);
        else break;
        O = Z(A);
      }
    }
    function K(S) {
      if (Fl = !1, Ul(S), !Bl)
        if (Z(R) !== null)
          Bl = !0, Vl || (Vl = !0, Rl());
        else {
          var O = Z(A);
          O !== null && vl(K, O.startTime - S);
        }
    }
    var Vl = !1, Ll = -1, Xl = 5, Il = -1;
    function zt() {
      return al ? !0 : !(_.unstable_now() - Il < Xl);
    }
    function st() {
      if (al = !1, Vl) {
        var S = _.unstable_now();
        Il = S;
        var O = !0;
        try {
          l: {
            Bl = !1, Fl && (Fl = !1, dl(Ll), Ll = -1), Al = !0;
            var q = ul;
            try {
              t: {
                for (Ul(S), tl = Z(R); tl !== null && !(tl.expirationTime > S && zt()); ) {
                  var F = tl.callback;
                  if (typeof F == "function") {
                    tl.callback = null, ul = tl.priorityLevel;
                    var v = F(
                      tl.expirationTime <= S
                    );
                    if (S = _.unstable_now(), typeof v == "function") {
                      tl.callback = v, Ul(S), O = !0;
                      break t;
                    }
                    tl === Z(R) && g(R), Ul(S);
                  } else g(R);
                  tl = Z(R);
                }
                if (tl !== null) O = !0;
                else {
                  var z = Z(A);
                  z !== null && vl(
                    K,
                    z.startTime - S
                  ), O = !1;
                }
              }
              break l;
            } finally {
              tl = null, ul = q, Al = !1;
            }
            O = void 0;
          }
        } finally {
          O ? Rl() : Vl = !1;
        }
      }
    }
    var Rl;
    if (typeof gl == "function")
      Rl = function() {
        gl(st);
      };
    else if (typeof MessageChannel < "u") {
      var vt = new MessageChannel(), Ql = vt.port2;
      vt.port1.onmessage = st, Rl = function() {
        Ql.postMessage(null);
      };
    } else
      Rl = function() {
        ml(st, 0);
      };
    function vl(S, O) {
      Ll = ml(function() {
        S(_.unstable_now());
      }, O);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, _.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < S ? Math.floor(1e3 / S) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return ul;
    }, _.unstable_next = function(S) {
      switch (ul) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = ul;
      }
      var q = ul;
      ul = O;
      try {
        return S();
      } finally {
        ul = q;
      }
    }, _.unstable_requestPaint = function() {
      al = !0;
    }, _.unstable_runWithPriority = function(S, O) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var q = ul;
      ul = S;
      try {
        return O();
      } finally {
        ul = q;
      }
    }, _.unstable_scheduleCallback = function(S, O, q) {
      var F = _.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? F + q : F) : q = F, S) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = q + v, S = {
        id: H++,
        callback: O,
        priorityLevel: S,
        startTime: q,
        expirationTime: v,
        sortIndex: -1
      }, q > F ? (S.sortIndex = q, Q(A, S), Z(R) === null && S === Z(A) && (Fl ? (dl(Ll), Ll = -1) : Fl = !0, vl(K, q - F))) : (S.sortIndex = v, Q(R, S), Bl || Al || (Bl = !0, Vl || (Vl = !0, Rl()))), S;
    }, _.unstable_shouldYield = zt, _.unstable_wrapCallback = function(S) {
      var O = ul;
      return function() {
        var q = ul;
        ul = O;
        try {
          return S.apply(this, arguments);
        } finally {
          ul = q;
        }
      };
    };
  }(ui)), ui;
}
var ty;
function Y1() {
  return ty || (ty = 1, ti.exports = q1()), ti.exports;
}
var ai = { exports: {} }, X = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uy;
function B1() {
  if (uy) return X;
  uy = 1;
  var _ = Symbol.for("react.transitional.element"), Q = Symbol.for("react.portal"), Z = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), ll = Symbol.for("react.profiler"), cl = Symbol.for("react.consumer"), sl = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), tl = Symbol.iterator;
  function ul(v) {
    return v === null || typeof v != "object" ? null : (v = tl && v[tl] || v["@@iterator"], typeof v == "function" ? v : null);
  }
  var Al = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Bl = Object.assign, Fl = {};
  function al(v, z, D) {
    this.props = v, this.context = z, this.refs = Fl, this.updater = D || Al;
  }
  al.prototype.isReactComponent = {}, al.prototype.setState = function(v, z) {
    if (typeof v != "object" && typeof v != "function" && v != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, v, z, "setState");
  }, al.prototype.forceUpdate = function(v) {
    this.updater.enqueueForceUpdate(this, v, "forceUpdate");
  };
  function ml() {
  }
  ml.prototype = al.prototype;
  function dl(v, z, D) {
    this.props = v, this.context = z, this.refs = Fl, this.updater = D || Al;
  }
  var gl = dl.prototype = new ml();
  gl.constructor = dl, Bl(gl, al.prototype), gl.isPureReactComponent = !0;
  var Ul = Array.isArray, K = { H: null, A: null, T: null, S: null, V: null }, Vl = Object.prototype.hasOwnProperty;
  function Ll(v, z, D, M, Y, w) {
    return D = w.ref, {
      $$typeof: _,
      type: v,
      key: z,
      ref: D !== void 0 ? D : null,
      props: w
    };
  }
  function Xl(v, z) {
    return Ll(
      v.type,
      z,
      void 0,
      void 0,
      void 0,
      v.props
    );
  }
  function Il(v) {
    return typeof v == "object" && v !== null && v.$$typeof === _;
  }
  function zt(v) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + v.replace(/[=:]/g, function(D) {
      return z[D];
    });
  }
  var st = /\/+/g;
  function Rl(v, z) {
    return typeof v == "object" && v !== null && v.key != null ? zt("" + v.key) : z.toString(36);
  }
  function vt() {
  }
  function Ql(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (typeof v.status == "string" ? v.then(vt, vt) : (v.status = "pending", v.then(
          function(z) {
            v.status === "pending" && (v.status = "fulfilled", v.value = z);
          },
          function(z) {
            v.status === "pending" && (v.status = "rejected", v.reason = z);
          }
        )), v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function vl(v, z, D, M, Y) {
    var w = typeof v;
    (w === "undefined" || w === "boolean") && (v = null);
    var x = !1;
    if (v === null) x = !0;
    else
      switch (w) {
        case "bigint":
        case "string":
        case "number":
          x = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case _:
            case Q:
              x = !0;
              break;
            case H:
              return x = v._init, vl(
                x(v._payload),
                z,
                D,
                M,
                Y
              );
          }
      }
    if (x)
      return Y = Y(v), x = M === "" ? "." + Rl(v, 0) : M, Ul(Y) ? (D = "", x != null && (D = x.replace(st, "$&/") + "/"), vl(Y, z, D, "", function(Kt) {
        return Kt;
      })) : Y != null && (Il(Y) && (Y = Xl(
        Y,
        D + (Y.key == null || v && v.key === Y.key ? "" : ("" + Y.key).replace(
          st,
          "$&/"
        ) + "/") + x
      )), z.push(Y)), 1;
    x = 0;
    var Pl = M === "" ? "." : M + ":";
    if (Ul(v))
      for (var hl = 0; hl < v.length; hl++)
        M = v[hl], w = Pl + Rl(M, hl), x += vl(
          M,
          z,
          D,
          w,
          Y
        );
    else if (hl = ul(v), typeof hl == "function")
      for (v = hl.call(v), hl = 0; !(M = v.next()).done; )
        M = M.value, w = Pl + Rl(M, hl++), x += vl(
          M,
          z,
          D,
          w,
          Y
        );
    else if (w === "object") {
      if (typeof v.then == "function")
        return vl(
          Ql(v),
          z,
          D,
          M,
          Y
        );
      throw z = String(v), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return x;
  }
  function S(v, z, D) {
    if (v == null) return v;
    var M = [], Y = 0;
    return vl(v, M, "", "", function(w) {
      return z.call(D, w, Y++);
    }), M;
  }
  function O(v) {
    if (v._status === -1) {
      var z = v._result;
      z = z(), z.then(
        function(D) {
          (v._status === 0 || v._status === -1) && (v._status = 1, v._result = D);
        },
        function(D) {
          (v._status === 0 || v._status === -1) && (v._status = 2, v._result = D);
        }
      ), v._status === -1 && (v._status = 0, v._result = z);
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var q = typeof reportError == "function" ? reportError : function(v) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
        error: v
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", v);
      return;
    }
    console.error(v);
  };
  function F() {
  }
  return X.Children = {
    map: S,
    forEach: function(v, z, D) {
      S(
        v,
        function() {
          z.apply(this, arguments);
        },
        D
      );
    },
    count: function(v) {
      var z = 0;
      return S(v, function() {
        z++;
      }), z;
    },
    toArray: function(v) {
      return S(v, function(z) {
        return z;
      }) || [];
    },
    only: function(v) {
      if (!Il(v))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return v;
    }
  }, X.Component = al, X.Fragment = Z, X.Profiler = ll, X.PureComponent = dl, X.StrictMode = g, X.Suspense = R, X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, X.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(v) {
      return K.H.useMemoCache(v);
    }
  }, X.cache = function(v) {
    return function() {
      return v.apply(null, arguments);
    };
  }, X.cloneElement = function(v, z, D) {
    if (v == null)
      throw Error(
        "The argument must be a React element, but you passed " + v + "."
      );
    var M = Bl({}, v.props), Y = v.key, w = void 0;
    if (z != null)
      for (x in z.ref !== void 0 && (w = void 0), z.key !== void 0 && (Y = "" + z.key), z)
        !Vl.call(z, x) || x === "key" || x === "__self" || x === "__source" || x === "ref" && z.ref === void 0 || (M[x] = z[x]);
    var x = arguments.length - 2;
    if (x === 1) M.children = D;
    else if (1 < x) {
      for (var Pl = Array(x), hl = 0; hl < x; hl++)
        Pl[hl] = arguments[hl + 2];
      M.children = Pl;
    }
    return Ll(v.type, Y, void 0, void 0, w, M);
  }, X.createContext = function(v) {
    return v = {
      $$typeof: sl,
      _currentValue: v,
      _currentValue2: v,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, v.Provider = v, v.Consumer = {
      $$typeof: cl,
      _context: v
    }, v;
  }, X.createElement = function(v, z, D) {
    var M, Y = {}, w = null;
    if (z != null)
      for (M in z.key !== void 0 && (w = "" + z.key), z)
        Vl.call(z, M) && M !== "key" && M !== "__self" && M !== "__source" && (Y[M] = z[M]);
    var x = arguments.length - 2;
    if (x === 1) Y.children = D;
    else if (1 < x) {
      for (var Pl = Array(x), hl = 0; hl < x; hl++)
        Pl[hl] = arguments[hl + 2];
      Y.children = Pl;
    }
    if (v && v.defaultProps)
      for (M in x = v.defaultProps, x)
        Y[M] === void 0 && (Y[M] = x[M]);
    return Ll(v, w, void 0, void 0, null, Y);
  }, X.createRef = function() {
    return { current: null };
  }, X.forwardRef = function(v) {
    return { $$typeof: k, render: v };
  }, X.isValidElement = Il, X.lazy = function(v) {
    return {
      $$typeof: H,
      _payload: { _status: -1, _result: v },
      _init: O
    };
  }, X.memo = function(v, z) {
    return {
      $$typeof: A,
      type: v,
      compare: z === void 0 ? null : z
    };
  }, X.startTransition = function(v) {
    var z = K.T, D = {};
    K.T = D;
    try {
      var M = v(), Y = K.S;
      Y !== null && Y(D, M), typeof M == "object" && M !== null && typeof M.then == "function" && M.then(F, q);
    } catch (w) {
      q(w);
    } finally {
      K.T = z;
    }
  }, X.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, X.use = function(v) {
    return K.H.use(v);
  }, X.useActionState = function(v, z, D) {
    return K.H.useActionState(v, z, D);
  }, X.useCallback = function(v, z) {
    return K.H.useCallback(v, z);
  }, X.useContext = function(v) {
    return K.H.useContext(v);
  }, X.useDebugValue = function() {
  }, X.useDeferredValue = function(v, z) {
    return K.H.useDeferredValue(v, z);
  }, X.useEffect = function(v, z, D) {
    var M = K.H;
    if (typeof D == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return M.useEffect(v, z);
  }, X.useId = function() {
    return K.H.useId();
  }, X.useImperativeHandle = function(v, z, D) {
    return K.H.useImperativeHandle(v, z, D);
  }, X.useInsertionEffect = function(v, z) {
    return K.H.useInsertionEffect(v, z);
  }, X.useLayoutEffect = function(v, z) {
    return K.H.useLayoutEffect(v, z);
  }, X.useMemo = function(v, z) {
    return K.H.useMemo(v, z);
  }, X.useOptimistic = function(v, z) {
    return K.H.useOptimistic(v, z);
  }, X.useReducer = function(v, z, D) {
    return K.H.useReducer(v, z, D);
  }, X.useRef = function(v) {
    return K.H.useRef(v);
  }, X.useState = function(v) {
    return K.H.useState(v);
  }, X.useSyncExternalStore = function(v, z, D) {
    return K.H.useSyncExternalStore(
      v,
      z,
      D
    );
  }, X.useTransition = function() {
    return K.H.useTransition();
  }, X.version = "19.1.1", X;
}
var ay;
function ni() {
  return ay || (ay = 1, ai.exports = B1()), ai.exports;
}
var ei = { exports: {} }, Cl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ey;
function p1() {
  if (ey) return Cl;
  ey = 1;
  var _ = ni();
  function Q(R) {
    var A = "https://react.dev/errors/" + R;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        A += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + R + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Z() {
  }
  var g = {
    d: {
      f: Z,
      r: function() {
        throw Error(Q(522));
      },
      D: Z,
      C: Z,
      L: Z,
      m: Z,
      X: Z,
      S: Z,
      M: Z
    },
    p: 0,
    findDOMNode: null
  }, ll = Symbol.for("react.portal");
  function cl(R, A, H) {
    var tl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ll,
      key: tl == null ? null : "" + tl,
      children: R,
      containerInfo: A,
      implementation: H
    };
  }
  var sl = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function k(R, A) {
    if (R === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return Cl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g, Cl.createPortal = function(R, A) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(Q(299));
    return cl(R, A, null, H);
  }, Cl.flushSync = function(R) {
    var A = sl.T, H = g.p;
    try {
      if (sl.T = null, g.p = 2, R) return R();
    } finally {
      sl.T = A, g.p = H, g.d.f();
    }
  }, Cl.preconnect = function(R, A) {
    typeof R == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, g.d.C(R, A));
  }, Cl.prefetchDNS = function(R) {
    typeof R == "string" && g.d.D(R);
  }, Cl.preinit = function(R, A) {
    if (typeof R == "string" && A && typeof A.as == "string") {
      var H = A.as, tl = k(H, A.crossOrigin), ul = typeof A.integrity == "string" ? A.integrity : void 0, Al = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      H === "style" ? g.d.S(
        R,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: tl,
          integrity: ul,
          fetchPriority: Al
        }
      ) : H === "script" && g.d.X(R, {
        crossOrigin: tl,
        integrity: ul,
        fetchPriority: Al,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, Cl.preinitModule = function(R, A) {
    if (typeof R == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var H = k(
            A.as,
            A.crossOrigin
          );
          g.d.M(R, {
            crossOrigin: H,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && g.d.M(R);
  }, Cl.preload = function(R, A) {
    if (typeof R == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var H = A.as, tl = k(H, A.crossOrigin);
      g.d.L(R, H, {
        crossOrigin: tl,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, Cl.preloadModule = function(R, A) {
    if (typeof R == "string")
      if (A) {
        var H = k(A.as, A.crossOrigin);
        g.d.m(R, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: H,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else g.d.m(R);
  }, Cl.requestFormReset = function(R) {
    g.d.r(R);
  }, Cl.unstable_batchedUpdates = function(R, A) {
    return R(A);
  }, Cl.useFormState = function(R, A, H) {
    return sl.H.useFormState(R, A, H);
  }, Cl.useFormStatus = function() {
    return sl.H.useHostTransitionStatus();
  }, Cl.version = "19.1.1", Cl;
}
var ny;
function G1() {
  if (ny) return ei.exports;
  ny = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Q) {
        console.error(Q);
      }
  }
  return _(), ei.exports = p1(), ei.exports;
}
var fy;
function x1() {
  if (fy) return be;
  fy = 1;
  /**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var _ = Y1(), Q = ni(), Z = G1();
  function g(l) {
    var u = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      u += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        u += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + u + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ll(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function cl(l) {
    var u = l, a = l;
    if (l.alternate) for (; u.return; ) u = u.return;
    else {
      l = u;
      do
        u = l, (u.flags & 4098) !== 0 && (a = u.return), l = u.return;
      while (l);
    }
    return u.tag === 3 ? a : null;
  }
  function sl(l) {
    if (l.tag === 13) {
      var u = l.memoizedState;
      if (u === null && (l = l.alternate, l !== null && (u = l.memoizedState)), u !== null) return u.dehydrated;
    }
    return null;
  }
  function k(l) {
    if (cl(l) !== l)
      throw Error(g(188));
  }
  function R(l) {
    var u = l.alternate;
    if (!u) {
      if (u = cl(l), u === null) throw Error(g(188));
      return u !== l ? null : l;
    }
    for (var a = l, e = u; ; ) {
      var n = a.return;
      if (n === null) break;
      var f = n.alternate;
      if (f === null) {
        if (e = n.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (n.child === f.child) {
        for (f = n.child; f; ) {
          if (f === a) return k(n), l;
          if (f === e) return k(n), u;
          f = f.sibling;
        }
        throw Error(g(188));
      }
      if (a.return !== e.return) a = n, e = f;
      else {
        for (var c = !1, i = n.child; i; ) {
          if (i === a) {
            c = !0, a = n, e = f;
            break;
          }
          if (i === e) {
            c = !0, e = n, a = f;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = f.child; i; ) {
            if (i === a) {
              c = !0, a = f, e = n;
              break;
            }
            if (i === e) {
              c = !0, e = f, a = n;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(g(189));
        }
      }
      if (a.alternate !== e) throw Error(g(190));
    }
    if (a.tag !== 3) throw Error(g(188));
    return a.stateNode.current === a ? l : u;
  }
  function A(l) {
    var u = l.tag;
    if (u === 5 || u === 26 || u === 27 || u === 6) return l;
    for (l = l.child; l !== null; ) {
      if (u = A(l), u !== null) return u;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign, tl = Symbol.for("react.element"), ul = Symbol.for("react.transitional.element"), Al = Symbol.for("react.portal"), Bl = Symbol.for("react.fragment"), Fl = Symbol.for("react.strict_mode"), al = Symbol.for("react.profiler"), ml = Symbol.for("react.provider"), dl = Symbol.for("react.consumer"), gl = Symbol.for("react.context"), Ul = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Vl = Symbol.for("react.suspense_list"), Ll = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), Il = Symbol.for("react.activity"), zt = Symbol.for("react.memo_cache_sentinel"), st = Symbol.iterator;
  function Rl(l) {
    return l === null || typeof l != "object" ? null : (l = st && l[st] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var vt = Symbol.for("react.client.reference");
  function Ql(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === vt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Bl:
        return "Fragment";
      case al:
        return "Profiler";
      case Fl:
        return "StrictMode";
      case K:
        return "Suspense";
      case Vl:
        return "SuspenseList";
      case Il:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Al:
          return "Portal";
        case gl:
          return (l.displayName || "Context") + ".Provider";
        case dl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ul:
          var u = l.render;
          return l = l.displayName, l || (l = u.displayName || u.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case Ll:
          return u = l.displayName || null, u !== null ? u : Ql(l.type) || "Memo";
        case Xl:
          u = l._payload, l = l._init;
          try {
            return Ql(l(u));
          } catch {
          }
      }
    return null;
  }
  var vl = Array.isArray, S = Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, F = [], v = -1;
  function z(l) {
    return { current: l };
  }
  function D(l) {
    0 > v || (l.current = F[v], F[v] = null, v--);
  }
  function M(l, u) {
    v++, F[v] = l.current, l.current = u;
  }
  var Y = z(null), w = z(null), x = z(null), Pl = z(null);
  function hl(l, u) {
    switch (M(x, u), M(w, l), M(Y, null), u.nodeType) {
      case 9:
      case 11:
        l = (l = u.documentElement) && (l = l.namespaceURI) ? Mv(l) : 0;
        break;
      default:
        if (l = u.tagName, u = u.namespaceURI)
          u = Mv(u), l = Dv(u, l);
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
    D(Y), M(Y, l);
  }
  function Kt() {
    D(Y), D(w), D(x);
  }
  function xn(l) {
    l.memoizedState !== null && M(Pl, l);
    var u = Y.current, a = Dv(u, l.type);
    u !== a && (M(w, l), M(Y, a));
  }
  function Te(l) {
    w.current === l && (D(Y), D(w)), Pl.current === l && (D(Pl), he._currentValue = q);
  }
  var Xn = Object.prototype.hasOwnProperty, Qn = _.unstable_scheduleCallback, jn = _.unstable_cancelCallback, iy = _.unstable_shouldYield, sy = _.unstable_requestPaint, _t = _.unstable_now, vy = _.unstable_getCurrentPriorityLevel, fi = _.unstable_ImmediatePriority, ci = _.unstable_UserBlockingPriority, Ee = _.unstable_NormalPriority, yy = _.unstable_LowPriority, ii = _.unstable_IdlePriority, dy = _.log, hy = _.unstable_setDisableYieldValue, Ea = null, lt = null;
  function Jt(l) {
    if (typeof dy == "function" && hy(l), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(Ea, l);
      } catch {
      }
  }
  var tt = Math.clz32 ? Math.clz32 : ry, oy = Math.log, my = Math.LN2;
  function ry(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (oy(l) / my | 0) | 0;
  }
  var Ae = 256, ze = 4194304;
  function gu(l) {
    var u = l & 42;
    if (u !== 0) return u;
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
  function _e(l, u, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var n = 0, f = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~f, e !== 0 ? n = gu(e) : (c &= i, c !== 0 ? n = gu(c) : a || (a = i & ~l, a !== 0 && (n = gu(a))))) : (i = e & ~f, i !== 0 ? n = gu(i) : c !== 0 ? n = gu(c) : a || (a = e & ~l, a !== 0 && (n = gu(a)))), n === 0 ? 0 : u !== 0 && u !== n && (u & f) === 0 && (f = n & -n, a = u & -u, f >= a || f === 32 && (a & 4194048) !== 0) ? u : n;
  }
  function Aa(l, u) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & u) === 0;
  }
  function gy(l, u) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return u + 250;
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
        return u + 5e3;
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
  function si() {
    var l = Ae;
    return Ae <<= 1, (Ae & 4194048) === 0 && (Ae = 256), l;
  }
  function vi() {
    var l = ze;
    return ze <<= 1, (ze & 62914560) === 0 && (ze = 4194304), l;
  }
  function Zn(l) {
    for (var u = [], a = 0; 31 > a; a++) u.push(l);
    return u;
  }
  function za(l, u) {
    l.pendingLanes |= u, u !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Sy(l, u, a, e, n, f) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, s = l.expirationTimes, o = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var b = 31 - tt(a), E = 1 << b;
      i[b] = 0, s[b] = -1;
      var m = o[b];
      if (m !== null)
        for (o[b] = null, b = 0; b < m.length; b++) {
          var r = m[b];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~E;
    }
    e !== 0 && yi(l, e, 0), f !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= f & ~(c & ~u));
  }
  function yi(l, u, a) {
    l.pendingLanes |= u, l.suspendedLanes &= ~u;
    var e = 31 - tt(u);
    l.entangledLanes |= u, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 4194090;
  }
  function di(l, u) {
    var a = l.entangledLanes |= u;
    for (l = l.entanglements; a; ) {
      var e = 31 - tt(a), n = 1 << e;
      n & u | l[e] & u && (l[e] |= u), a &= ~n;
    }
  }
  function Cn(l) {
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
  function Vn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function hi() {
    var l = O.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Jv(l.type));
  }
  function by(l, u) {
    var a = O.p;
    try {
      return O.p = l, u();
    } finally {
      O.p = a;
    }
  }
  var wt = Math.random().toString(36).slice(2), jl = "__reactFiber$" + wt, Jl = "__reactProps$" + wt, pu = "__reactContainer$" + wt, Ln = "__reactEvents$" + wt, Ty = "__reactListeners$" + wt, Ey = "__reactHandles$" + wt, oi = "__reactResources$" + wt, _a = "__reactMarker$" + wt;
  function Kn(l) {
    delete l[jl], delete l[Jl], delete l[Ln], delete l[Ty], delete l[Ey];
  }
  function Gu(l) {
    var u = l[jl];
    if (u) return u;
    for (var a = l.parentNode; a; ) {
      if (u = a[pu] || a[jl]) {
        if (a = u.alternate, u.child !== null || a !== null && a.child !== null)
          for (l = Hv(l); l !== null; ) {
            if (a = l[jl]) return a;
            l = Hv(l);
          }
        return u;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function xu(l) {
    if (l = l[jl] || l[pu]) {
      var u = l.tag;
      if (u === 5 || u === 6 || u === 13 || u === 26 || u === 27 || u === 3)
        return l;
    }
    return null;
  }
  function Oa(l) {
    var u = l.tag;
    if (u === 5 || u === 26 || u === 27 || u === 6) return l.stateNode;
    throw Error(g(33));
  }
  function Xu(l) {
    var u = l[oi];
    return u || (u = l[oi] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), u;
  }
  function Nl(l) {
    l[_a] = !0;
  }
  var mi = /* @__PURE__ */ new Set(), ri = {};
  function Su(l, u) {
    Qu(l, u), Qu(l + "Capture", u);
  }
  function Qu(l, u) {
    for (ri[l] = u, l = 0; l < u.length; l++)
      mi.add(u[l]);
  }
  var Ay = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gi = {}, Si = {};
  function zy(l) {
    return Xn.call(Si, l) ? !0 : Xn.call(gi, l) ? !1 : Ay.test(l) ? Si[l] = !0 : (gi[l] = !0, !1);
  }
  function Oe(l, u, a) {
    if (zy(u))
      if (a === null) l.removeAttribute(u);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(u);
            return;
          case "boolean":
            var e = u.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(u);
              return;
            }
        }
        l.setAttribute(u, "" + a);
      }
  }
  function Me(l, u, a) {
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
      l.setAttribute(u, "" + a);
    }
  }
  function Nt(l, u, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(u, a, "" + e);
    }
  }
  var Jn, bi;
  function ju(l) {
    if (Jn === void 0)
      try {
        throw Error();
      } catch (a) {
        var u = a.stack.trim().match(/\n( *(at )?)/);
        Jn = u && u[1] || "", bi = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Jn + l + bi;
  }
  var wn = !1;
  function Wn(l, u) {
    if (!l || wn) return "";
    wn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function() {
          try {
            if (u) {
              var E = function() {
                throw Error();
              };
              if (Object.defineProperty(E.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(E, []);
                } catch (r) {
                  var m = r;
                }
                Reflect.construct(l, [], E);
              } else {
                try {
                  E.call();
                } catch (r) {
                  m = r;
                }
                l.call(E.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                m = r;
              }
              (E = l()) && typeof E.catch == "function" && E.catch(function() {
              });
            }
          } catch (r) {
            if (r && m && typeof r.stack == "string")
              return [r.stack, m.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = e.DetermineComponentFrameRoot(), c = f[0], i = f[1];
      if (c && i) {
        var s = c.split(`
`), o = i.split(`
`);
        for (n = e = 0; e < s.length && !s[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; n < o.length && !o[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (e === s.length || n === o.length)
          for (e = s.length - 1, n = o.length - 1; 1 <= e && 0 <= n && s[e] !== o[n]; )
            n--;
        for (; 1 <= e && 0 <= n; e--, n--)
          if (s[e] !== o[n]) {
            if (e !== 1 || n !== 1)
              do
                if (e--, n--, 0 > n || s[e] !== o[n]) {
                  var b = `
` + s[e].replace(" at new ", " at ");
                  return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)), b;
                }
              while (1 <= e && 0 <= n);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? ju(a) : "";
  }
  function _y(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return ju(l.type);
      case 16:
        return ju("Lazy");
      case 13:
        return ju("Suspense");
      case 19:
        return ju("SuspenseList");
      case 0:
      case 15:
        return Wn(l.type, !1);
      case 11:
        return Wn(l.type.render, !1);
      case 1:
        return Wn(l.type, !0);
      case 31:
        return ju("Activity");
      default:
        return "";
    }
  }
  function Ti(l) {
    try {
      var u = "";
      do
        u += _y(l), l = l.return;
      while (l);
      return u;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function yt(l) {
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
  function Ei(l) {
    var u = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (u === "checkbox" || u === "radio");
  }
  function Oy(l) {
    var u = Ei(l) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      u
    ), e = "" + l[u];
    if (!l.hasOwnProperty(u) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, f = a.set;
      return Object.defineProperty(l, u, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(c) {
          e = "" + c, f.call(this, c);
        }
      }), Object.defineProperty(l, u, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(c) {
          e = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[u];
        }
      };
    }
  }
  function De(l) {
    l._valueTracker || (l._valueTracker = Oy(l));
  }
  function Ai(l) {
    if (!l) return !1;
    var u = l._valueTracker;
    if (!u) return !0;
    var a = u.getValue(), e = "";
    return l && (e = Ei(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (u.setValue(l), !0) : !1;
  }
  function Ue(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var My = /[\n"\\]/g;
  function dt(l) {
    return l.replace(
      My,
      function(u) {
        return "\\" + u.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function $n(l, u, a, e, n, f, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), u != null ? c === "number" ? (u === 0 && l.value === "" || l.value != u) && (l.value = "" + yt(u)) : l.value !== "" + yt(u) && (l.value = "" + yt(u)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), u != null ? kn(l, c, yt(u)) : a != null ? kn(l, c, yt(a)) : e != null && l.removeAttribute("value"), n == null && f != null && (l.defaultChecked = !!f), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + yt(i) : l.removeAttribute("name");
  }
  function zi(l, u, a, e, n, f, c, i) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.type = f), u != null || a != null) {
      if (!(f !== "submit" && f !== "reset" || u != null))
        return;
      a = a != null ? "" + yt(a) : "", u = u != null ? "" + yt(u) : a, i || u === l.value || (l.value = u), l.defaultValue = u;
    }
    e = e ?? n, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c);
  }
  function kn(l, u, a) {
    u === "number" && Ue(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
  }
  function Zu(l, u, a, e) {
    if (l = l.options, u) {
      u = {};
      for (var n = 0; n < a.length; n++)
        u["$" + a[n]] = !0;
      for (a = 0; a < l.length; a++)
        n = u.hasOwnProperty("$" + l[a].value), l[a].selected !== n && (l[a].selected = n), n && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + yt(a), u = null, n = 0; n < l.length; n++) {
        if (l[n].value === a) {
          l[n].selected = !0, e && (l[n].defaultSelected = !0);
          return;
        }
        u !== null || l[n].disabled || (u = l[n]);
      }
      u !== null && (u.selected = !0);
    }
  }
  function _i(l, u, a) {
    if (u != null && (u = "" + yt(u), u !== l.value && (l.value = u), a == null)) {
      l.defaultValue !== u && (l.defaultValue = u);
      return;
    }
    l.defaultValue = a != null ? "" + yt(a) : "";
  }
  function Oi(l, u, a, e) {
    if (u == null) {
      if (e != null) {
        if (a != null) throw Error(g(92));
        if (vl(e)) {
          if (1 < e.length) throw Error(g(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), u = a;
    }
    a = yt(u), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e);
  }
  function Cu(l, u) {
    if (u) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = u;
        return;
      }
    }
    l.textContent = u;
  }
  var Dy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Mi(l, u, a) {
    var e = u.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "" : e ? l.setProperty(u, a) : typeof a != "number" || a === 0 || Dy.has(u) ? u === "float" ? l.cssFloat = a : l[u] = ("" + a).trim() : l[u] = a + "px";
  }
  function Di(l, u, a) {
    if (u != null && typeof u != "object")
      throw Error(g(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || u != null && u.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "");
      for (var n in u)
        e = u[n], u.hasOwnProperty(n) && a[n] !== e && Mi(l, n, e);
    } else
      for (var f in u)
        u.hasOwnProperty(f) && Mi(l, f, u[f]);
  }
  function Fn(l) {
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
  var Uy = /* @__PURE__ */ new Map([
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
  ]), Ry = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Re(l) {
    return Ry.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var In = null;
  function Pn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Vu = null, Lu = null;
  function Ui(l) {
    var u = xu(l);
    if (u && (l = u.stateNode)) {
      var a = l[Jl] || null;
      l: switch (l = u.stateNode, u.type) {
        case "input":
          if ($n(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), u = a.name, a.type === "radio" && u != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + dt(
                "" + u
              ) + '"][type="radio"]'
            ), u = 0; u < a.length; u++) {
              var e = a[u];
              if (e !== l && e.form === l.form) {
                var n = e[Jl] || null;
                if (!n) throw Error(g(90));
                $n(
                  e,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (u = 0; u < a.length; u++)
              e = a[u], e.form === l.form && Ai(e);
          }
          break l;
        case "textarea":
          _i(l, a.value, a.defaultValue);
          break l;
        case "select":
          u = a.value, u != null && Zu(l, !!a.multiple, u, !1);
      }
    }
  }
  var lf = !1;
  function Ri(l, u, a) {
    if (lf) return l(u, a);
    lf = !0;
    try {
      var e = l(u);
      return e;
    } finally {
      if (lf = !1, (Vu !== null || Lu !== null) && (mn(), Vu && (u = Vu, l = Lu, Lu = Vu = null, Ui(u), l)))
        for (u = 0; u < l.length; u++) Ui(l[u]);
    }
  }
  function Ma(l, u) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Jl] || null;
    if (e === null) return null;
    a = e[u];
    l: switch (u) {
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
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        g(231, u, typeof a)
      );
    return a;
  }
  var Ht = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), tf = !1;
  if (Ht)
    try {
      var Da = {};
      Object.defineProperty(Da, "passive", {
        get: function() {
          tf = !0;
        }
      }), window.addEventListener("test", Da, Da), window.removeEventListener("test", Da, Da);
    } catch {
      tf = !1;
    }
  var Wt = null, uf = null, Ne = null;
  function Ni() {
    if (Ne) return Ne;
    var l, u = uf, a = u.length, e, n = "value" in Wt ? Wt.value : Wt.textContent, f = n.length;
    for (l = 0; l < a && u[l] === n[l]; l++) ;
    var c = a - l;
    for (e = 1; e <= c && u[a - e] === n[f - e]; e++) ;
    return Ne = n.slice(l, 1 < e ? 1 - e : void 0);
  }
  function He(l) {
    var u = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && u === 13 && (l = 13)) : l = u, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Hi() {
    return !1;
  }
  function wl(l) {
    function u(a, e, n, f, c) {
      this._reactName = a, this._targetInst = n, this.type = e, this.nativeEvent = f, this.target = c, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(f) : f[i]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? qe : Hi, this.isPropagationStopped = Hi, this;
    }
    return H(u.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), u;
  }
  var bu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ye = wl(bu), Ua = H({}, bu, { view: 0, detail: 0 }), Ny = wl(Ua), af, ef, Ra, Be = H({}, Ua, {
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
    getModifierState: ff,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ra && (Ra && l.type === "mousemove" ? (af = l.screenX - Ra.screenX, ef = l.screenY - Ra.screenY) : ef = af = 0, Ra = l), af);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ef;
    }
  }), qi = wl(Be), Hy = H({}, Be, { dataTransfer: 0 }), qy = wl(Hy), Yy = H({}, Ua, { relatedTarget: 0 }), nf = wl(Yy), By = H({}, bu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), py = wl(By), Gy = H({}, bu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), xy = wl(Gy), Xy = H({}, bu, { data: 0 }), Yi = wl(Xy), Qy = {
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
  }, jy = {
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
  }, Zy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Cy(l) {
    var u = this.nativeEvent;
    return u.getModifierState ? u.getModifierState(l) : (l = Zy[l]) ? !!u[l] : !1;
  }
  function ff() {
    return Cy;
  }
  var Vy = H({}, Ua, {
    key: function(l) {
      if (l.key) {
        var u = Qy[l.key] || l.key;
        if (u !== "Unidentified") return u;
      }
      return l.type === "keypress" ? (l = He(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? jy[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ff,
    charCode: function(l) {
      return l.type === "keypress" ? He(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? He(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Ly = wl(Vy), Ky = H({}, Be, {
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
  }), Bi = wl(Ky), Jy = H({}, Ua, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ff
  }), wy = wl(Jy), Wy = H({}, bu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = wl(Wy), ky = H({}, Be, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fy = wl(ky), Iy = H({}, bu, {
    newState: 0,
    oldState: 0
  }), Py = wl(Iy), ld = [9, 13, 27, 32], cf = Ht && "CompositionEvent" in window, Na = null;
  Ht && "documentMode" in document && (Na = document.documentMode);
  var td = Ht && "TextEvent" in window && !Na, pi = Ht && (!cf || Na && 8 < Na && 11 >= Na), Gi = " ", xi = !1;
  function Xi(l, u) {
    switch (l) {
      case "keyup":
        return ld.indexOf(u.keyCode) !== -1;
      case "keydown":
        return u.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ku = !1;
  function ud(l, u) {
    switch (l) {
      case "compositionend":
        return Qi(u);
      case "keypress":
        return u.which !== 32 ? null : (xi = !0, Gi);
      case "textInput":
        return l = u.data, l === Gi && xi ? null : l;
      default:
        return null;
    }
  }
  function ad(l, u) {
    if (Ku)
      return l === "compositionend" || !cf && Xi(l, u) ? (l = Ni(), Ne = uf = Wt = null, Ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(u.ctrlKey || u.altKey || u.metaKey) || u.ctrlKey && u.altKey) {
          if (u.char && 1 < u.char.length)
            return u.char;
          if (u.which) return String.fromCharCode(u.which);
        }
        return null;
      case "compositionend":
        return pi && u.locale !== "ko" ? null : u.data;
      default:
        return null;
    }
  }
  var ed = {
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
  function ji(l) {
    var u = l && l.nodeName && l.nodeName.toLowerCase();
    return u === "input" ? !!ed[l.type] : u === "textarea";
  }
  function Zi(l, u, a, e) {
    Vu ? Lu ? Lu.push(e) : Lu = [e] : Vu = e, u = En(u, "onChange"), 0 < u.length && (a = new Ye(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: u }));
  }
  var Ha = null, qa = null;
  function nd(l) {
    Ev(l, 0);
  }
  function pe(l) {
    var u = Oa(l);
    if (Ai(u)) return l;
  }
  function Ci(l, u) {
    if (l === "change") return u;
  }
  var Vi = !1;
  if (Ht) {
    var sf;
    if (Ht) {
      var vf = "oninput" in document;
      if (!vf) {
        var Li = document.createElement("div");
        Li.setAttribute("oninput", "return;"), vf = typeof Li.oninput == "function";
      }
      sf = vf;
    } else sf = !1;
    Vi = sf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ki() {
    Ha && (Ha.detachEvent("onpropertychange", Ji), qa = Ha = null);
  }
  function Ji(l) {
    if (l.propertyName === "value" && pe(qa)) {
      var u = [];
      Zi(
        u,
        qa,
        l,
        Pn(l)
      ), Ri(nd, u);
    }
  }
  function fd(l, u, a) {
    l === "focusin" ? (Ki(), Ha = u, qa = a, Ha.attachEvent("onpropertychange", Ji)) : l === "focusout" && Ki();
  }
  function cd(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return pe(qa);
  }
  function id(l, u) {
    if (l === "click") return pe(u);
  }
  function sd(l, u) {
    if (l === "input" || l === "change")
      return pe(u);
  }
  function vd(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var ut = typeof Object.is == "function" ? Object.is : vd;
  function Ya(l, u) {
    if (ut(l, u)) return !0;
    if (typeof l != "object" || l === null || typeof u != "object" || u === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(u);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var n = a[e];
      if (!Xn.call(u, n) || !ut(l[n], u[n]))
        return !1;
    }
    return !0;
  }
  function wi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Wi(l, u) {
    var a = wi(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= u && e >= u)
          return { node: a, offset: u - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = wi(a);
    }
  }
  function $i(l, u) {
    return l && u ? l === u ? !0 : l && l.nodeType === 3 ? !1 : u && u.nodeType === 3 ? $i(l, u.parentNode) : "contains" in l ? l.contains(u) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(u) & 16) : !1 : !1;
  }
  function ki(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var u = Ue(l.document); u instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof u.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = u.contentWindow;
      else break;
      u = Ue(l.document);
    }
    return u;
  }
  function yf(l) {
    var u = l && l.nodeName && l.nodeName.toLowerCase();
    return u && (u === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || u === "textarea" || l.contentEditable === "true");
  }
  var yd = Ht && "documentMode" in document && 11 >= document.documentMode, Ju = null, df = null, Ba = null, hf = !1;
  function Fi(l, u, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    hf || Ju == null || Ju !== Ue(e) || (e = Ju, "selectionStart" in e && yf(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Ba && Ya(Ba, e) || (Ba = e, e = En(df, "onSelect"), 0 < e.length && (u = new Ye(
      "onSelect",
      "select",
      null,
      u,
      a
    ), l.push({ event: u, listeners: e }), u.target = Ju)));
  }
  function Tu(l, u) {
    var a = {};
    return a[l.toLowerCase()] = u.toLowerCase(), a["Webkit" + l] = "webkit" + u, a["Moz" + l] = "moz" + u, a;
  }
  var wu = {
    animationend: Tu("Animation", "AnimationEnd"),
    animationiteration: Tu("Animation", "AnimationIteration"),
    animationstart: Tu("Animation", "AnimationStart"),
    transitionrun: Tu("Transition", "TransitionRun"),
    transitionstart: Tu("Transition", "TransitionStart"),
    transitioncancel: Tu("Transition", "TransitionCancel"),
    transitionend: Tu("Transition", "TransitionEnd")
  }, of = {}, Ii = {};
  Ht && (Ii = document.createElement("div").style, "AnimationEvent" in window || (delete wu.animationend.animation, delete wu.animationiteration.animation, delete wu.animationstart.animation), "TransitionEvent" in window || delete wu.transitionend.transition);
  function Eu(l) {
    if (of[l]) return of[l];
    if (!wu[l]) return l;
    var u = wu[l], a;
    for (a in u)
      if (u.hasOwnProperty(a) && a in Ii)
        return of[l] = u[a];
    return l;
  }
  var Pi = Eu("animationend"), l0 = Eu("animationiteration"), t0 = Eu("animationstart"), dd = Eu("transitionrun"), hd = Eu("transitionstart"), od = Eu("transitioncancel"), u0 = Eu("transitionend"), a0 = /* @__PURE__ */ new Map(), mf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  mf.push("scrollEnd");
  function Tt(l, u) {
    a0.set(l, u), Su(u, [l]);
  }
  var e0 = /* @__PURE__ */ new WeakMap();
  function ht(l, u) {
    if (typeof l == "object" && l !== null) {
      var a = e0.get(l);
      return a !== void 0 ? a : (u = {
        value: l,
        source: u,
        stack: Ti(u)
      }, e0.set(l, u), u);
    }
    return {
      value: l,
      source: u,
      stack: Ti(u)
    };
  }
  var ot = [], Wu = 0, rf = 0;
  function Ge() {
    for (var l = Wu, u = rf = Wu = 0; u < l; ) {
      var a = ot[u];
      ot[u++] = null;
      var e = ot[u];
      ot[u++] = null;
      var n = ot[u];
      ot[u++] = null;
      var f = ot[u];
      if (ot[u++] = null, e !== null && n !== null) {
        var c = e.pending;
        c === null ? n.next = n : (n.next = c.next, c.next = n), e.pending = n;
      }
      f !== 0 && n0(a, n, f);
    }
  }
  function xe(l, u, a, e) {
    ot[Wu++] = l, ot[Wu++] = u, ot[Wu++] = a, ot[Wu++] = e, rf |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function gf(l, u, a, e) {
    return xe(l, u, a, e), Xe(l);
  }
  function $u(l, u) {
    return xe(l, null, null, u), Xe(l);
  }
  function n0(l, u, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var n = !1, f = l.return; f !== null; )
      f.childLanes |= a, e = f.alternate, e !== null && (e.childLanes |= a), f.tag === 22 && (l = f.stateNode, l === null || l._visibility & 1 || (n = !0)), l = f, f = f.return;
    return l.tag === 3 ? (f = l.stateNode, n && u !== null && (n = 31 - tt(a), l = f.hiddenUpdates, e = l[n], e === null ? l[n] = [u] : e.push(u), u.lane = a | 536870912), f) : null;
  }
  function Xe(l) {
    if (50 < ne)
      throw ne = 0, zc = null, Error(g(185));
    for (var u = l.return; u !== null; )
      l = u, u = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ku = {};
  function md(l, u, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = u, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(l, u, a, e) {
    return new md(l, u, a, e);
  }
  function Sf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, u) {
    var a = l.alternate;
    return a === null ? (a = at(
      l.tag,
      u,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = u, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, u = l.dependencies, a.dependencies = u === null ? null : { lanes: u.lanes, firstContext: u.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function f0(l, u) {
    l.flags &= 65011714;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = u, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, u = a.dependencies, l.dependencies = u === null ? null : {
      lanes: u.lanes,
      firstContext: u.firstContext
    }), l;
  }
  function Qe(l, u, a, e, n, f) {
    var c = 0;
    if (e = l, typeof l == "function") Sf(l) && (c = 1);
    else if (typeof l == "string")
      c = g1(
        l,
        a,
        Y.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case Il:
          return l = at(31, a, u, n), l.elementType = Il, l.lanes = f, l;
        case Bl:
          return Au(a.children, n, f, u);
        case Fl:
          c = 8, n |= 24;
          break;
        case al:
          return l = at(12, a, u, n | 2), l.elementType = al, l.lanes = f, l;
        case K:
          return l = at(13, a, u, n), l.elementType = K, l.lanes = f, l;
        case Vl:
          return l = at(19, a, u, n), l.elementType = Vl, l.lanes = f, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ml:
              case gl:
                c = 10;
                break l;
              case dl:
                c = 9;
                break l;
              case Ul:
                c = 11;
                break l;
              case Ll:
                c = 14;
                break l;
              case Xl:
                c = 16, e = null;
                break l;
            }
          c = 29, a = Error(
            g(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return u = at(c, a, u, n), u.elementType = l, u.type = e, u.lanes = f, u;
  }
  function Au(l, u, a, e) {
    return l = at(7, l, e, u), l.lanes = a, l;
  }
  function bf(l, u, a) {
    return l = at(6, l, null, u), l.lanes = a, l;
  }
  function Tf(l, u, a) {
    return u = at(
      4,
      l.children !== null ? l.children : [],
      l.key,
      u
    ), u.lanes = a, u.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, u;
  }
  var Fu = [], Iu = 0, je = null, Ze = 0, mt = [], rt = 0, zu = null, Yt = 1, Bt = "";
  function _u(l, u) {
    Fu[Iu++] = Ze, Fu[Iu++] = je, je = l, Ze = u;
  }
  function c0(l, u, a) {
    mt[rt++] = Yt, mt[rt++] = Bt, mt[rt++] = zu, zu = l;
    var e = Yt;
    l = Bt;
    var n = 32 - tt(e) - 1;
    e &= ~(1 << n), a += 1;
    var f = 32 - tt(u) + n;
    if (30 < f) {
      var c = n - n % 5;
      f = (e & (1 << c) - 1).toString(32), e >>= c, n -= c, Yt = 1 << 32 - tt(u) + n | a << n | e, Bt = f + l;
    } else
      Yt = 1 << f | a << n | e, Bt = l;
  }
  function Ef(l) {
    l.return !== null && (_u(l, 1), c0(l, 1, 0));
  }
  function Af(l) {
    for (; l === je; )
      je = Fu[--Iu], Fu[Iu] = null, Ze = Fu[--Iu], Fu[Iu] = null;
    for (; l === zu; )
      zu = mt[--rt], mt[rt] = null, Bt = mt[--rt], mt[rt] = null, Yt = mt[--rt], mt[rt] = null;
  }
  var Kl = null, Sl = null, $ = !1, Ou = null, Ot = !1, zf = Error(g(519));
  function Mu(l) {
    var u = Error(g(418, ""));
    throw xa(ht(u, l)), zf;
  }
  function i0(l) {
    var u = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (u[jl] = l, u[Jl] = e, a) {
      case "dialog":
        L("cancel", u), L("close", u);
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", u);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ce.length; a++)
          L(ce[a], u);
        break;
      case "source":
        L("error", u);
        break;
      case "img":
      case "image":
      case "link":
        L("error", u), L("load", u);
        break;
      case "details":
        L("toggle", u);
        break;
      case "input":
        L("invalid", u), zi(
          u,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        ), De(u);
        break;
      case "select":
        L("invalid", u);
        break;
      case "textarea":
        L("invalid", u), Oi(u, e.value, e.defaultValue, e.children), De(u);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || u.textContent === "" + a || e.suppressHydrationWarning === !0 || Ov(u.textContent, a) ? (e.popover != null && (L("beforetoggle", u), L("toggle", u)), e.onScroll != null && L("scroll", u), e.onScrollEnd != null && L("scrollend", u), e.onClick != null && (u.onclick = An), u = !0) : u = !1, u || Mu(l);
  }
  function s0(l) {
    for (Kl = l.return; Kl; )
      switch (Kl.tag) {
        case 5:
        case 13:
          Ot = !1;
          return;
        case 27:
        case 3:
          Ot = !0;
          return;
        default:
          Kl = Kl.return;
      }
  }
  function pa(l) {
    if (l !== Kl) return !1;
    if (!$) return s0(l), $ = !0, !1;
    var u = l.tag, a;
    if ((a = u !== 3 && u !== 27) && ((a = u === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Qc(l.type, l.memoizedProps)), a = !a), a && Sl && Mu(l), s0(l), u === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(g(317));
      l: {
        for (l = l.nextSibling, u = 0; l; ) {
          if (l.nodeType === 8)
            if (a = l.data, a === "/$") {
              if (u === 0) {
                Sl = At(l.nextSibling);
                break l;
              }
              u--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || u++;
          l = l.nextSibling;
        }
        Sl = null;
      }
    } else
      u === 27 ? (u = Sl, vu(l.type) ? (l = Vc, Vc = null, Sl = l) : Sl = u) : Sl = Kl ? At(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ga() {
    Sl = Kl = null, $ = !1;
  }
  function v0() {
    var l = Ou;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), Ou = null), l;
  }
  function xa(l) {
    Ou === null ? Ou = [l] : Ou.push(l);
  }
  var _f = z(null), Du = null, pt = null;
  function $t(l, u, a) {
    M(_f, u._currentValue), u._currentValue = a;
  }
  function Gt(l) {
    l._currentValue = _f.current, D(_f);
  }
  function Of(l, u, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & u) !== u ? (l.childLanes |= u, e !== null && (e.childLanes |= u)) : e !== null && (e.childLanes & u) !== u && (e.childLanes |= u), l === a) break;
      l = l.return;
    }
  }
  function Mf(l, u, a, e) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var f = n.dependencies;
      if (f !== null) {
        var c = n.child;
        f = f.firstContext;
        l: for (; f !== null; ) {
          var i = f;
          f = n;
          for (var s = 0; s < u.length; s++)
            if (i.context === u[s]) {
              f.lanes |= a, i = f.alternate, i !== null && (i.lanes |= a), Of(
                f.return,
                a,
                l
              ), e || (c = null);
              break l;
            }
          f = i.next;
        }
      } else if (n.tag === 18) {
        if (c = n.return, c === null) throw Error(g(341));
        c.lanes |= a, f = c.alternate, f !== null && (f.lanes |= a), Of(c, a, l), c = null;
      } else c = n.child;
      if (c !== null) c.return = n;
      else
        for (c = n; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
      n = c;
    }
  }
  function Xa(l, u, a, e) {
    l = null;
    for (var n = u, f = !1; n !== null; ) {
      if (!f) {
        if ((n.flags & 524288) !== 0) f = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var c = n.alternate;
        if (c === null) throw Error(g(387));
        if (c = c.memoizedProps, c !== null) {
          var i = n.type;
          ut(n.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (n === Pl.current) {
        if (c = n.alternate, c === null) throw Error(g(387));
        c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(he) : l = [he]);
      }
      n = n.return;
    }
    l !== null && Mf(
      u,
      l,
      a,
      e
    ), u.flags |= 262144;
  }
  function Ce(l) {
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
  function Uu(l) {
    Du = l, pt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Zl(l) {
    return y0(Du, l);
  }
  function Ve(l, u) {
    return Du === null && Uu(l), y0(l, u);
  }
  function y0(l, u) {
    var a = u._currentValue;
    if (u = { context: u, memoizedValue: a, next: null }, pt === null) {
      if (l === null) throw Error(g(308));
      pt = u, l.dependencies = { lanes: 0, firstContext: u }, l.flags |= 524288;
    } else pt = pt.next = u;
    return a;
  }
  var rd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], u = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      u.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, gd = _.unstable_scheduleCallback, Sd = _.unstable_NormalPriority, Ol = {
    $$typeof: gl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Df() {
    return {
      controller: new rd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Qa(l) {
    l.refCount--, l.refCount === 0 && gd(Sd, function() {
      l.controller.abort();
    });
  }
  var ja = null, Uf = 0, Pu = 0, la = null;
  function bd(l, u) {
    if (ja === null) {
      var a = ja = [];
      Uf = 0, Pu = Nc(), la = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return Uf++, u.then(d0, d0), u;
  }
  function d0() {
    if (--Uf === 0 && ja !== null) {
      la !== null && (la.status = "fulfilled");
      var l = ja;
      ja = null, Pu = 0, la = null;
      for (var u = 0; u < l.length; u++) (0, l[u])();
    }
  }
  function Td(l, u) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        a.push(n);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = u;
        for (var n = 0; n < a.length; n++) (0, a[n])(u);
      },
      function(n) {
        for (e.status = "rejected", e.reason = n, n = 0; n < a.length; n++)
          (0, a[n])(void 0);
      }
    ), e;
  }
  var h0 = S.S;
  S.S = function(l, u) {
    typeof u == "object" && u !== null && typeof u.then == "function" && bd(l, u), h0 !== null && h0(l, u);
  };
  var Ru = z(null);
  function Rf() {
    var l = Ru.current;
    return l !== null ? l : yl.pooledCache;
  }
  function Le(l, u) {
    u === null ? M(Ru, Ru.current) : M(Ru, u.pool);
  }
  function o0() {
    var l = Rf();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var Za = Error(g(460)), m0 = Error(g(474)), Ke = Error(g(542)), Nf = { then: function() {
  } };
  function r0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Je() {
  }
  function g0(l, u, a) {
    switch (a = l[a], a === void 0 ? l.push(u) : a !== u && (u.then(Je, Je), u = a), u.status) {
      case "fulfilled":
        return u.value;
      case "rejected":
        throw l = u.reason, b0(l), l;
      default:
        if (typeof u.status == "string") u.then(Je, Je);
        else {
          if (l = yl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(g(482));
          l = u, l.status = "pending", l.then(
            function(e) {
              if (u.status === "pending") {
                var n = u;
                n.status = "fulfilled", n.value = e;
              }
            },
            function(e) {
              if (u.status === "pending") {
                var n = u;
                n.status = "rejected", n.reason = e;
              }
            }
          );
        }
        switch (u.status) {
          case "fulfilled":
            return u.value;
          case "rejected":
            throw l = u.reason, b0(l), l;
        }
        throw Ca = u, Za;
    }
  }
  var Ca = null;
  function S0() {
    if (Ca === null) throw Error(g(459));
    var l = Ca;
    return Ca = null, l;
  }
  function b0(l) {
    if (l === Za || l === Ke)
      throw Error(g(483));
  }
  var kt = !1;
  function Hf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function qf(l, u) {
    l = l.updateQueue, u.updateQueue === l && (u.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ft(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function It(l, u, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (I & 2) !== 0) {
      var n = e.pending;
      return n === null ? u.next = u : (u.next = n.next, n.next = u), e.pending = u, u = Xe(l), n0(l, null, a), u;
    }
    return xe(l, e, u, a), Xe(l);
  }
  function Va(l, u, a) {
    if (u = u.updateQueue, u !== null && (u = u.shared, (a & 4194048) !== 0)) {
      var e = u.lanes;
      e &= l.pendingLanes, a |= e, u.lanes = a, di(l, a);
    }
  }
  function Yf(l, u) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var n = null, f = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          f === null ? n = f = c : f = f.next = c, a = a.next;
        } while (a !== null);
        f === null ? n = f = u : f = f.next = u;
      } else n = f = u;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: f,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = u : l.next = u, a.lastBaseUpdate = u;
  }
  var Bf = !1;
  function La() {
    if (Bf) {
      var l = la;
      if (l !== null) throw l;
    }
  }
  function Ka(l, u, a, e) {
    Bf = !1;
    var n = l.updateQueue;
    kt = !1;
    var f = n.firstBaseUpdate, c = n.lastBaseUpdate, i = n.shared.pending;
    if (i !== null) {
      n.shared.pending = null;
      var s = i, o = s.next;
      s.next = null, c === null ? f = o : c.next = o, c = s;
      var b = l.alternate;
      b !== null && (b = b.updateQueue, i = b.lastBaseUpdate, i !== c && (i === null ? b.firstBaseUpdate = o : i.next = o, b.lastBaseUpdate = s));
    }
    if (f !== null) {
      var E = n.baseState;
      c = 0, b = o = s = null, i = f;
      do {
        var m = i.lane & -536870913, r = m !== i.lane;
        if (r ? (J & m) === m : (e & m) === m) {
          m !== 0 && m === Pu && (Bf = !0), b !== null && (b = b.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var G = l, B = i;
            m = u;
            var fl = a;
            switch (B.tag) {
              case 1:
                if (G = B.payload, typeof G == "function") {
                  E = G.call(fl, E, m);
                  break l;
                }
                E = G;
                break l;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = B.payload, m = typeof G == "function" ? G.call(fl, E, m) : G, m == null) break l;
                E = H({}, E, m);
                break l;
              case 2:
                kt = !0;
            }
          }
          m = i.callback, m !== null && (l.flags |= 64, r && (l.flags |= 8192), r = n.callbacks, r === null ? n.callbacks = [m] : r.push(m));
        } else
          r = {
            lane: m,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, b === null ? (o = b = r, s = E) : b = b.next = r, c |= m;
        if (i = i.next, i === null) {
          if (i = n.shared.pending, i === null)
            break;
          r = i, i = r.next, r.next = null, n.lastBaseUpdate = r, n.shared.pending = null;
        }
      } while (!0);
      b === null && (s = E), n.baseState = s, n.firstBaseUpdate = o, n.lastBaseUpdate = b, f === null && (n.shared.lanes = 0), fu |= c, l.lanes = c, l.memoizedState = E;
    }
  }
  function T0(l, u) {
    if (typeof l != "function")
      throw Error(g(191, l));
    l.call(u);
  }
  function E0(l, u) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        T0(a[l], u);
  }
  var ta = z(null), we = z(0);
  function A0(l, u) {
    l = Vt, M(we, l), M(ta, u), Vt = l | u.baseLanes;
  }
  function pf() {
    M(we, Vt), M(ta, ta.current);
  }
  function Gf() {
    Vt = we.current, D(ta), D(we);
  }
  var Pt = 0, j = null, el = null, zl = null, We = !1, ua = !1, Nu = !1, $e = 0, Ja = 0, aa = null, Ed = 0;
  function Tl() {
    throw Error(g(321));
  }
  function xf(l, u) {
    if (u === null) return !1;
    for (var a = 0; a < u.length && a < l.length; a++)
      if (!ut(l[a], u[a])) return !1;
    return !0;
  }
  function Xf(l, u, a, e, n, f) {
    return Pt = f, j = u, u.memoizedState = null, u.updateQueue = null, u.lanes = 0, S.H = l === null || l.memoizedState === null ? ns : fs, Nu = !1, f = a(e, n), Nu = !1, ua && (f = _0(
      u,
      a,
      e,
      n
    )), z0(l), f;
  }
  function z0(l) {
    S.H = tn;
    var u = el !== null && el.next !== null;
    if (Pt = 0, zl = el = j = null, We = !1, Ja = 0, aa = null, u) throw Error(g(300));
    l === null || Hl || (l = l.dependencies, l !== null && Ce(l) && (Hl = !0));
  }
  function _0(l, u, a, e) {
    j = l;
    var n = 0;
    do {
      if (ua && (aa = null), Ja = 0, ua = !1, 25 <= n) throw Error(g(301));
      if (n += 1, zl = el = null, l.updateQueue != null) {
        var f = l.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      S.H = Ud, f = u(a, e);
    } while (ua);
    return f;
  }
  function Ad() {
    var l = S.H, u = l.useState()[0];
    return u = typeof u.then == "function" ? wa(u) : u, l = l.useState()[0], (el !== null ? el.memoizedState : null) !== l && (j.flags |= 1024), u;
  }
  function Qf() {
    var l = $e !== 0;
    return $e = 0, l;
  }
  function jf(l, u, a) {
    u.updateQueue = l.updateQueue, u.flags &= -2053, l.lanes &= ~a;
  }
  function Zf(l) {
    if (We) {
      for (l = l.memoizedState; l !== null; ) {
        var u = l.queue;
        u !== null && (u.pending = null), l = l.next;
      }
      We = !1;
    }
    Pt = 0, zl = el = j = null, ua = !1, Ja = $e = 0, aa = null;
  }
  function Wl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return zl === null ? j.memoizedState = zl = l : zl = zl.next = l, zl;
  }
  function _l() {
    if (el === null) {
      var l = j.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = el.next;
    var u = zl === null ? j.memoizedState : zl.next;
    if (u !== null)
      zl = u, el = l;
    else {
      if (l === null)
        throw j.alternate === null ? Error(g(467)) : Error(g(310));
      el = l, l = {
        memoizedState: el.memoizedState,
        baseState: el.baseState,
        baseQueue: el.baseQueue,
        queue: el.queue,
        next: null
      }, zl === null ? j.memoizedState = zl = l : zl = zl.next = l;
    }
    return zl;
  }
  function Cf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function wa(l) {
    var u = Ja;
    return Ja += 1, aa === null && (aa = []), l = g0(aa, l, u), u = j, (zl === null ? u.memoizedState : zl.next) === null && (u = u.alternate, S.H = u === null || u.memoizedState === null ? ns : fs), l;
  }
  function ke(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return wa(l);
      if (l.$$typeof === gl) return Zl(l);
    }
    throw Error(g(438, String(l)));
  }
  function Vf(l) {
    var u = null, a = j.updateQueue;
    if (a !== null && (u = a.memoCache), u == null) {
      var e = j.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (u = {
        data: e.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (u == null && (u = { data: [], index: 0 }), a === null && (a = Cf(), j.updateQueue = a), a.memoCache = u, a = u.data[u.index], a === void 0)
      for (a = u.data[u.index] = Array(l), e = 0; e < l; e++)
        a[e] = zt;
    return u.index++, a;
  }
  function xt(l, u) {
    return typeof u == "function" ? u(l) : u;
  }
  function Fe(l) {
    var u = _l();
    return Lf(u, el, l);
  }
  function Lf(l, u, a) {
    var e = l.queue;
    if (e === null) throw Error(g(311));
    e.lastRenderedReducer = a;
    var n = l.baseQueue, f = e.pending;
    if (f !== null) {
      if (n !== null) {
        var c = n.next;
        n.next = f.next, f.next = c;
      }
      u.baseQueue = n = f, e.pending = null;
    }
    if (f = l.baseState, n === null) l.memoizedState = f;
    else {
      u = n.next;
      var i = c = null, s = null, o = u, b = !1;
      do {
        var E = o.lane & -536870913;
        if (E !== o.lane ? (J & E) === E : (Pt & E) === E) {
          var m = o.revertLane;
          if (m === 0)
            s !== null && (s = s.next = {
              lane: 0,
              revertLane: 0,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null
            }), E === Pu && (b = !0);
          else if ((Pt & m) === m) {
            o = o.next, m === Pu && (b = !0);
            continue;
          } else
            E = {
              lane: 0,
              revertLane: o.revertLane,
              action: o.action,
              hasEagerState: o.hasEagerState,
              eagerState: o.eagerState,
              next: null
            }, s === null ? (i = s = E, c = f) : s = s.next = E, j.lanes |= m, fu |= m;
          E = o.action, Nu && a(f, E), f = o.hasEagerState ? o.eagerState : a(f, E);
        } else
          m = {
            lane: E,
            revertLane: o.revertLane,
            action: o.action,
            hasEagerState: o.hasEagerState,
            eagerState: o.eagerState,
            next: null
          }, s === null ? (i = s = m, c = f) : s = s.next = m, j.lanes |= E, fu |= E;
        o = o.next;
      } while (o !== null && o !== u);
      if (s === null ? c = f : s.next = i, !ut(f, l.memoizedState) && (Hl = !0, b && (a = la, a !== null)))
        throw a;
      l.memoizedState = f, l.baseState = c, l.baseQueue = s, e.lastRenderedState = f;
    }
    return n === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Kf(l) {
    var u = _l(), a = u.queue;
    if (a === null) throw Error(g(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, n = a.pending, f = u.memoizedState;
    if (n !== null) {
      a.pending = null;
      var c = n = n.next;
      do
        f = l(f, c.action), c = c.next;
      while (c !== n);
      ut(f, u.memoizedState) || (Hl = !0), u.memoizedState = f, u.baseQueue === null && (u.baseState = f), a.lastRenderedState = f;
    }
    return [f, e];
  }
  function O0(l, u, a) {
    var e = j, n = _l(), f = $;
    if (f) {
      if (a === void 0) throw Error(g(407));
      a = a();
    } else a = u();
    var c = !ut(
      (el || n).memoizedState,
      a
    );
    c && (n.memoizedState = a, Hl = !0), n = n.queue;
    var i = U0.bind(null, e, n, l);
    if (Wa(2048, 8, i, [l]), n.getSnapshot !== u || c || zl !== null && zl.memoizedState.tag & 1) {
      if (e.flags |= 2048, ea(
        9,
        Ie(),
        D0.bind(
          null,
          e,
          n,
          a,
          u
        ),
        null
      ), yl === null) throw Error(g(349));
      f || (Pt & 124) !== 0 || M0(e, u, a);
    }
    return a;
  }
  function M0(l, u, a) {
    l.flags |= 16384, l = { getSnapshot: u, value: a }, u = j.updateQueue, u === null ? (u = Cf(), j.updateQueue = u, u.stores = [l]) : (a = u.stores, a === null ? u.stores = [l] : a.push(l));
  }
  function D0(l, u, a, e) {
    u.value = a, u.getSnapshot = e, R0(u) && N0(l);
  }
  function U0(l, u, a) {
    return a(function() {
      R0(u) && N0(l);
    });
  }
  function R0(l) {
    var u = l.getSnapshot;
    l = l.value;
    try {
      var a = u();
      return !ut(l, a);
    } catch {
      return !0;
    }
  }
  function N0(l) {
    var u = $u(l, 2);
    u !== null && it(u, l, 2);
  }
  function Jf(l) {
    var u = Wl();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), Nu) {
        Jt(!0);
        try {
          a();
        } finally {
          Jt(!1);
        }
      }
    }
    return u.memoizedState = u.baseState = l, u.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xt,
      lastRenderedState: l
    }, u;
  }
  function H0(l, u, a, e) {
    return l.baseState = a, Lf(
      l,
      el,
      typeof e == "function" ? e : xt
    );
  }
  function zd(l, u, a, e, n) {
    if (ln(l)) throw Error(g(485));
    if (l = u.action, l !== null) {
      var f = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          f.listeners.push(c);
        }
      };
      S.T !== null ? a(!0) : f.isTransition = !1, e(f), a = u.pending, a === null ? (f.next = u.pending = f, q0(u, f)) : (f.next = a.next, u.pending = a.next = f);
    }
  }
  function q0(l, u) {
    var a = u.action, e = u.payload, n = l.state;
    if (u.isTransition) {
      var f = S.T, c = {};
      S.T = c;
      try {
        var i = a(n, e), s = S.S;
        s !== null && s(c, i), Y0(l, u, i);
      } catch (o) {
        wf(l, u, o);
      } finally {
        S.T = f;
      }
    } else
      try {
        f = a(n, e), Y0(l, u, f);
      } catch (o) {
        wf(l, u, o);
      }
  }
  function Y0(l, u, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        B0(l, u, e);
      },
      function(e) {
        return wf(l, u, e);
      }
    ) : B0(l, u, a);
  }
  function B0(l, u, a) {
    u.status = "fulfilled", u.value = a, p0(u), l.state = a, u = l.pending, u !== null && (a = u.next, a === u ? l.pending = null : (a = a.next, u.next = a, q0(l, a)));
  }
  function wf(l, u, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        u.status = "rejected", u.reason = a, p0(u), u = u.next;
      while (u !== e);
    }
    l.action = null;
  }
  function p0(l) {
    l = l.listeners;
    for (var u = 0; u < l.length; u++) (0, l[u])();
  }
  function G0(l, u) {
    return u;
  }
  function x0(l, u) {
    if ($) {
      var a = yl.formState;
      if (a !== null) {
        l: {
          var e = j;
          if ($) {
            if (Sl) {
              t: {
                for (var n = Sl, f = Ot; n.nodeType !== 8; ) {
                  if (!f) {
                    n = null;
                    break t;
                  }
                  if (n = At(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                f = n.data, n = f === "F!" || f === "F" ? n : null;
              }
              if (n) {
                Sl = At(
                  n.nextSibling
                ), e = n.data === "F!";
                break l;
              }
            }
            Mu(e);
          }
          e = !1;
        }
        e && (u = a[0]);
      }
    }
    return a = Wl(), a.memoizedState = a.baseState = u, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: G0,
      lastRenderedState: u
    }, a.queue = e, a = us.bind(
      null,
      j,
      e
    ), e.dispatch = a, e = Jf(!1), f = If.bind(
      null,
      j,
      !1,
      e.queue
    ), e = Wl(), n = {
      state: u,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = n, a = zd.bind(
      null,
      j,
      n,
      f,
      a
    ), n.dispatch = a, e.memoizedState = l, [u, a, !1];
  }
  function X0(l) {
    var u = _l();
    return Q0(u, el, l);
  }
  function Q0(l, u, a) {
    if (u = Lf(
      l,
      u,
      G0
    )[0], l = Fe(xt)[0], typeof u == "object" && u !== null && typeof u.then == "function")
      try {
        var e = wa(u);
      } catch (c) {
        throw c === Za ? Ke : c;
      }
    else e = u;
    u = _l();
    var n = u.queue, f = n.dispatch;
    return a !== u.memoizedState && (j.flags |= 2048, ea(
      9,
      Ie(),
      _d.bind(null, n, a),
      null
    )), [e, f, l];
  }
  function _d(l, u) {
    l.action = u;
  }
  function j0(l) {
    var u = _l(), a = el;
    if (a !== null)
      return Q0(u, a, l);
    _l(), u = u.memoizedState, a = _l();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [u, e, !1];
  }
  function ea(l, u, a, e) {
    return l = { tag: l, create: a, deps: e, inst: u, next: null }, u = j.updateQueue, u === null && (u = Cf(), j.updateQueue = u), a = u.lastEffect, a === null ? u.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, u.lastEffect = l), l;
  }
  function Ie() {
    return { destroy: void 0, resource: void 0 };
  }
  function Z0() {
    return _l().memoizedState;
  }
  function Pe(l, u, a, e) {
    var n = Wl();
    e = e === void 0 ? null : e, j.flags |= l, n.memoizedState = ea(
      1 | u,
      Ie(),
      a,
      e
    );
  }
  function Wa(l, u, a, e) {
    var n = _l();
    e = e === void 0 ? null : e;
    var f = n.memoizedState.inst;
    el !== null && e !== null && xf(e, el.memoizedState.deps) ? n.memoizedState = ea(u, f, a, e) : (j.flags |= l, n.memoizedState = ea(
      1 | u,
      f,
      a,
      e
    ));
  }
  function C0(l, u) {
    Pe(8390656, 8, l, u);
  }
  function V0(l, u) {
    Wa(2048, 8, l, u);
  }
  function L0(l, u) {
    return Wa(4, 2, l, u);
  }
  function K0(l, u) {
    return Wa(4, 4, l, u);
  }
  function J0(l, u) {
    if (typeof u == "function") {
      l = l();
      var a = u(l);
      return function() {
        typeof a == "function" ? a() : u(null);
      };
    }
    if (u != null)
      return l = l(), u.current = l, function() {
        u.current = null;
      };
  }
  function w0(l, u, a) {
    a = a != null ? a.concat([l]) : null, Wa(4, 4, J0.bind(null, u, l), a);
  }
  function Wf() {
  }
  function W0(l, u) {
    var a = _l();
    u = u === void 0 ? null : u;
    var e = a.memoizedState;
    return u !== null && xf(u, e[1]) ? e[0] : (a.memoizedState = [l, u], l);
  }
  function $0(l, u) {
    var a = _l();
    u = u === void 0 ? null : u;
    var e = a.memoizedState;
    if (u !== null && xf(u, e[1]))
      return e[0];
    if (e = l(), Nu) {
      Jt(!0);
      try {
        l();
      } finally {
        Jt(!1);
      }
    }
    return a.memoizedState = [e, u], e;
  }
  function $f(l, u, a) {
    return a === void 0 || (Pt & 1073741824) !== 0 ? l.memoizedState = u : (l.memoizedState = a, l = Is(), j.lanes |= l, fu |= l, a);
  }
  function k0(l, u, a, e) {
    return ut(a, u) ? a : ta.current !== null ? (l = $f(l, a, e), ut(l, u) || (Hl = !0), l) : (Pt & 42) === 0 ? (Hl = !0, l.memoizedState = a) : (l = Is(), j.lanes |= l, fu |= l, u);
  }
  function F0(l, u, a, e, n) {
    var f = O.p;
    O.p = f !== 0 && 8 > f ? f : 8;
    var c = S.T, i = {};
    S.T = i, If(l, !1, u, a);
    try {
      var s = n(), o = S.S;
      if (o !== null && o(i, s), s !== null && typeof s == "object" && typeof s.then == "function") {
        var b = Td(
          s,
          e
        );
        $a(
          l,
          u,
          b,
          ct(l)
        );
      } else
        $a(
          l,
          u,
          e,
          ct(l)
        );
    } catch (E) {
      $a(
        l,
        u,
        { then: function() {
        }, status: "rejected", reason: E },
        ct()
      );
    } finally {
      O.p = f, S.T = c;
    }
  }
  function Od() {
  }
  function kf(l, u, a, e) {
    if (l.tag !== 5) throw Error(g(476));
    var n = I0(l).queue;
    F0(
      l,
      n,
      u,
      q,
      a === null ? Od : function() {
        return P0(l), a(e);
      }
    );
  }
  function I0(l) {
    var u = l.memoizedState;
    if (u !== null) return u;
    u = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: q
      },
      next: null
    };
    var a = {};
    return u.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: xt,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = u, l = l.alternate, l !== null && (l.memoizedState = u), u;
  }
  function P0(l) {
    var u = I0(l).next.queue;
    $a(l, u, {}, ct());
  }
  function Ff() {
    return Zl(he);
  }
  function ls() {
    return _l().memoizedState;
  }
  function ts() {
    return _l().memoizedState;
  }
  function Md(l) {
    for (var u = l.return; u !== null; ) {
      switch (u.tag) {
        case 24:
        case 3:
          var a = ct();
          l = Ft(a);
          var e = It(u, l, a);
          e !== null && (it(e, u, a), Va(e, u, a)), u = { cache: Df() }, l.payload = u;
          return;
      }
      u = u.return;
    }
  }
  function Dd(l, u, a) {
    var e = ct();
    a = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l) ? as(u, a) : (a = gf(l, u, a, e), a !== null && (it(a, l, e), es(a, u, e)));
  }
  function us(l, u, a) {
    var e = ct();
    $a(l, u, a, e);
  }
  function $a(l, u, a, e) {
    var n = {
      lane: e,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ln(l)) as(u, n);
    else {
      var f = l.alternate;
      if (l.lanes === 0 && (f === null || f.lanes === 0) && (f = u.lastRenderedReducer, f !== null))
        try {
          var c = u.lastRenderedState, i = f(c, a);
          if (n.hasEagerState = !0, n.eagerState = i, ut(i, c))
            return xe(l, u, n, 0), yl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (a = gf(l, u, n, e), a !== null)
        return it(a, l, e), es(a, u, e), !0;
    }
    return !1;
  }
  function If(l, u, a, e) {
    if (e = {
      lane: 2,
      revertLane: Nc(),
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ln(l)) {
      if (u) throw Error(g(479));
    } else
      u = gf(
        l,
        a,
        e,
        2
      ), u !== null && it(u, l, 2);
  }
  function ln(l) {
    var u = l.alternate;
    return l === j || u !== null && u === j;
  }
  function as(l, u) {
    ua = We = !0;
    var a = l.pending;
    a === null ? u.next = u : (u.next = a.next, a.next = u), l.pending = u;
  }
  function es(l, u, a) {
    if ((a & 4194048) !== 0) {
      var e = u.lanes;
      e &= l.pendingLanes, a |= e, u.lanes = a, di(l, a);
    }
  }
  var tn = {
    readContext: Zl,
    use: ke,
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
  }, ns = {
    readContext: Zl,
    use: ke,
    useCallback: function(l, u) {
      return Wl().memoizedState = [
        l,
        u === void 0 ? null : u
      ], l;
    },
    useContext: Zl,
    useEffect: C0,
    useImperativeHandle: function(l, u, a) {
      a = a != null ? a.concat([l]) : null, Pe(
        4194308,
        4,
        J0.bind(null, u, l),
        a
      );
    },
    useLayoutEffect: function(l, u) {
      return Pe(4194308, 4, l, u);
    },
    useInsertionEffect: function(l, u) {
      Pe(4, 2, l, u);
    },
    useMemo: function(l, u) {
      var a = Wl();
      u = u === void 0 ? null : u;
      var e = l();
      if (Nu) {
        Jt(!0);
        try {
          l();
        } finally {
          Jt(!1);
        }
      }
      return a.memoizedState = [e, u], e;
    },
    useReducer: function(l, u, a) {
      var e = Wl();
      if (a !== void 0) {
        var n = a(u);
        if (Nu) {
          Jt(!0);
          try {
            a(u);
          } finally {
            Jt(!1);
          }
        }
      } else n = u;
      return e.memoizedState = e.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, e.queue = l, l = l.dispatch = Dd.bind(
        null,
        j,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var u = Wl();
      return l = { current: l }, u.memoizedState = l;
    },
    useState: function(l) {
      l = Jf(l);
      var u = l.queue, a = us.bind(null, j, u);
      return u.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Wf,
    useDeferredValue: function(l, u) {
      var a = Wl();
      return $f(a, l, u);
    },
    useTransition: function() {
      var l = Jf(!1);
      return l = F0.bind(
        null,
        j,
        l.queue,
        !0,
        !1
      ), Wl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, u, a) {
      var e = j, n = Wl();
      if ($) {
        if (a === void 0)
          throw Error(g(407));
        a = a();
      } else {
        if (a = u(), yl === null)
          throw Error(g(349));
        (J & 124) !== 0 || M0(e, u, a);
      }
      n.memoizedState = a;
      var f = { value: a, getSnapshot: u };
      return n.queue = f, C0(U0.bind(null, e, f, l), [
        l
      ]), e.flags |= 2048, ea(
        9,
        Ie(),
        D0.bind(
          null,
          e,
          f,
          a,
          u
        ),
        null
      ), a;
    },
    useId: function() {
      var l = Wl(), u = yl.identifierPrefix;
      if ($) {
        var a = Bt, e = Yt;
        a = (e & ~(1 << 32 - tt(e) - 1)).toString(32) + a, u = "«" + u + "R" + a, a = $e++, 0 < a && (u += "H" + a.toString(32)), u += "»";
      } else
        a = Ed++, u = "«" + u + "r" + a.toString(32) + "»";
      return l.memoizedState = u;
    },
    useHostTransitionStatus: Ff,
    useFormState: x0,
    useActionState: x0,
    useOptimistic: function(l) {
      var u = Wl();
      u.memoizedState = u.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return u.queue = a, u = If.bind(
        null,
        j,
        !0,
        a
      ), a.dispatch = u, [l, u];
    },
    useMemoCache: Vf,
    useCacheRefresh: function() {
      return Wl().memoizedState = Md.bind(
        null,
        j
      );
    }
  }, fs = {
    readContext: Zl,
    use: ke,
    useCallback: W0,
    useContext: Zl,
    useEffect: V0,
    useImperativeHandle: w0,
    useInsertionEffect: L0,
    useLayoutEffect: K0,
    useMemo: $0,
    useReducer: Fe,
    useRef: Z0,
    useState: function() {
      return Fe(xt);
    },
    useDebugValue: Wf,
    useDeferredValue: function(l, u) {
      var a = _l();
      return k0(
        a,
        el.memoizedState,
        l,
        u
      );
    },
    useTransition: function() {
      var l = Fe(xt)[0], u = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : wa(l),
        u
      ];
    },
    useSyncExternalStore: O0,
    useId: ls,
    useHostTransitionStatus: Ff,
    useFormState: X0,
    useActionState: X0,
    useOptimistic: function(l, u) {
      var a = _l();
      return H0(a, el, l, u);
    },
    useMemoCache: Vf,
    useCacheRefresh: ts
  }, Ud = {
    readContext: Zl,
    use: ke,
    useCallback: W0,
    useContext: Zl,
    useEffect: V0,
    useImperativeHandle: w0,
    useInsertionEffect: L0,
    useLayoutEffect: K0,
    useMemo: $0,
    useReducer: Kf,
    useRef: Z0,
    useState: function() {
      return Kf(xt);
    },
    useDebugValue: Wf,
    useDeferredValue: function(l, u) {
      var a = _l();
      return el === null ? $f(a, l, u) : k0(
        a,
        el.memoizedState,
        l,
        u
      );
    },
    useTransition: function() {
      var l = Kf(xt)[0], u = _l().memoizedState;
      return [
        typeof l == "boolean" ? l : wa(l),
        u
      ];
    },
    useSyncExternalStore: O0,
    useId: ls,
    useHostTransitionStatus: Ff,
    useFormState: j0,
    useActionState: j0,
    useOptimistic: function(l, u) {
      var a = _l();
      return el !== null ? H0(a, el, l, u) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: Vf,
    useCacheRefresh: ts
  }, na = null, ka = 0;
  function un(l) {
    var u = ka;
    return ka += 1, na === null && (na = []), g0(na, l, u);
  }
  function Fa(l, u) {
    u = u.props.ref, l.ref = u !== void 0 ? u : null;
  }
  function an(l, u) {
    throw u.$$typeof === tl ? Error(g(525)) : (l = Object.prototype.toString.call(u), Error(
      g(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(u).join(", ") + "}" : l
      )
    ));
  }
  function cs(l) {
    var u = l._init;
    return u(l._payload);
  }
  function is(l) {
    function u(d, y) {
      if (l) {
        var h = d.deletions;
        h === null ? (d.deletions = [y], d.flags |= 16) : h.push(y);
      }
    }
    function a(d, y) {
      if (!l) return null;
      for (; y !== null; )
        u(d, y), y = y.sibling;
      return null;
    }
    function e(d) {
      for (var y = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? y.set(d.key, d) : y.set(d.index, d), d = d.sibling;
      return y;
    }
    function n(d, y) {
      return d = qt(d, y), d.index = 0, d.sibling = null, d;
    }
    function f(d, y, h) {
      return d.index = h, l ? (h = d.alternate, h !== null ? (h = h.index, h < y ? (d.flags |= 67108866, y) : h) : (d.flags |= 67108866, y)) : (d.flags |= 1048576, y);
    }
    function c(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function i(d, y, h, T) {
      return y === null || y.tag !== 6 ? (y = bf(h, d.mode, T), y.return = d, y) : (y = n(y, h), y.return = d, y);
    }
    function s(d, y, h, T) {
      var U = h.type;
      return U === Bl ? b(
        d,
        y,
        h.props.children,
        T,
        h.key
      ) : y !== null && (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && cs(U) === y.type) ? (y = n(y, h.props), Fa(y, h), y.return = d, y) : (y = Qe(
        h.type,
        h.key,
        h.props,
        null,
        d.mode,
        T
      ), Fa(y, h), y.return = d, y);
    }
    function o(d, y, h, T) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== h.containerInfo || y.stateNode.implementation !== h.implementation ? (y = Tf(h, d.mode, T), y.return = d, y) : (y = n(y, h.children || []), y.return = d, y);
    }
    function b(d, y, h, T, U) {
      return y === null || y.tag !== 7 ? (y = Au(
        h,
        d.mode,
        T,
        U
      ), y.return = d, y) : (y = n(y, h), y.return = d, y);
    }
    function E(d, y, h) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = bf(
          "" + y,
          d.mode,
          h
        ), y.return = d, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ul:
            return h = Qe(
              y.type,
              y.key,
              y.props,
              null,
              d.mode,
              h
            ), Fa(h, y), h.return = d, h;
          case Al:
            return y = Tf(
              y,
              d.mode,
              h
            ), y.return = d, y;
          case Xl:
            var T = y._init;
            return y = T(y._payload), E(d, y, h);
        }
        if (vl(y) || Rl(y))
          return y = Au(
            y,
            d.mode,
            h,
            null
          ), y.return = d, y;
        if (typeof y.then == "function")
          return E(d, un(y), h);
        if (y.$$typeof === gl)
          return E(
            d,
            Ve(d, y),
            h
          );
        an(d, y);
      }
      return null;
    }
    function m(d, y, h, T) {
      var U = y !== null ? y.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return U !== null ? null : i(d, y, "" + h, T);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ul:
            return h.key === U ? s(d, y, h, T) : null;
          case Al:
            return h.key === U ? o(d, y, h, T) : null;
          case Xl:
            return U = h._init, h = U(h._payload), m(d, y, h, T);
        }
        if (vl(h) || Rl(h))
          return U !== null ? null : b(d, y, h, T, null);
        if (typeof h.then == "function")
          return m(
            d,
            y,
            un(h),
            T
          );
        if (h.$$typeof === gl)
          return m(
            d,
            y,
            Ve(d, h),
            T
          );
        an(d, h);
      }
      return null;
    }
    function r(d, y, h, T, U) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return d = d.get(h) || null, i(y, d, "" + T, U);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ul:
            return d = d.get(
              T.key === null ? h : T.key
            ) || null, s(y, d, T, U);
          case Al:
            return d = d.get(
              T.key === null ? h : T.key
            ) || null, o(y, d, T, U);
          case Xl:
            var C = T._init;
            return T = C(T._payload), r(
              d,
              y,
              h,
              T,
              U
            );
        }
        if (vl(T) || Rl(T))
          return d = d.get(h) || null, b(y, d, T, U, null);
        if (typeof T.then == "function")
          return r(
            d,
            y,
            h,
            un(T),
            U
          );
        if (T.$$typeof === gl)
          return r(
            d,
            y,
            h,
            Ve(y, T),
            U
          );
        an(y, T);
      }
      return null;
    }
    function G(d, y, h, T) {
      for (var U = null, C = null, N = y, p = y = 0, Yl = null; N !== null && p < h.length; p++) {
        N.index > p ? (Yl = N, N = null) : Yl = N.sibling;
        var W = m(
          d,
          N,
          h[p],
          T
        );
        if (W === null) {
          N === null && (N = Yl);
          break;
        }
        l && N && W.alternate === null && u(d, N), y = f(W, y, p), C === null ? U = W : C.sibling = W, C = W, N = Yl;
      }
      if (p === h.length)
        return a(d, N), $ && _u(d, p), U;
      if (N === null) {
        for (; p < h.length; p++)
          N = E(d, h[p], T), N !== null && (y = f(
            N,
            y,
            p
          ), C === null ? U = N : C.sibling = N, C = N);
        return $ && _u(d, p), U;
      }
      for (N = e(N); p < h.length; p++)
        Yl = r(
          N,
          d,
          p,
          h[p],
          T
        ), Yl !== null && (l && Yl.alternate !== null && N.delete(
          Yl.key === null ? p : Yl.key
        ), y = f(
          Yl,
          y,
          p
        ), C === null ? U = Yl : C.sibling = Yl, C = Yl);
      return l && N.forEach(function(mu) {
        return u(d, mu);
      }), $ && _u(d, p), U;
    }
    function B(d, y, h, T) {
      if (h == null) throw Error(g(151));
      for (var U = null, C = null, N = y, p = y = 0, Yl = null, W = h.next(); N !== null && !W.done; p++, W = h.next()) {
        N.index > p ? (Yl = N, N = null) : Yl = N.sibling;
        var mu = m(d, N, W.value, T);
        if (mu === null) {
          N === null && (N = Yl);
          break;
        }
        l && N && mu.alternate === null && u(d, N), y = f(mu, y, p), C === null ? U = mu : C.sibling = mu, C = mu, N = Yl;
      }
      if (W.done)
        return a(d, N), $ && _u(d, p), U;
      if (N === null) {
        for (; !W.done; p++, W = h.next())
          W = E(d, W.value, T), W !== null && (y = f(W, y, p), C === null ? U = W : C.sibling = W, C = W);
        return $ && _u(d, p), U;
      }
      for (N = e(N); !W.done; p++, W = h.next())
        W = r(N, d, p, W.value, T), W !== null && (l && W.alternate !== null && N.delete(W.key === null ? p : W.key), y = f(W, y, p), C === null ? U = W : C.sibling = W, C = W);
      return l && N.forEach(function(R1) {
        return u(d, R1);
      }), $ && _u(d, p), U;
    }
    function fl(d, y, h, T) {
      if (typeof h == "object" && h !== null && h.type === Bl && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ul:
            l: {
              for (var U = h.key; y !== null; ) {
                if (y.key === U) {
                  if (U = h.type, U === Bl) {
                    if (y.tag === 7) {
                      a(
                        d,
                        y.sibling
                      ), T = n(
                        y,
                        h.props.children
                      ), T.return = d, d = T;
                      break l;
                    }
                  } else if (y.elementType === U || typeof U == "object" && U !== null && U.$$typeof === Xl && cs(U) === y.type) {
                    a(
                      d,
                      y.sibling
                    ), T = n(y, h.props), Fa(T, h), T.return = d, d = T;
                    break l;
                  }
                  a(d, y);
                  break;
                } else u(d, y);
                y = y.sibling;
              }
              h.type === Bl ? (T = Au(
                h.props.children,
                d.mode,
                T,
                h.key
              ), T.return = d, d = T) : (T = Qe(
                h.type,
                h.key,
                h.props,
                null,
                d.mode,
                T
              ), Fa(T, h), T.return = d, d = T);
            }
            return c(d);
          case Al:
            l: {
              for (U = h.key; y !== null; ) {
                if (y.key === U)
                  if (y.tag === 4 && y.stateNode.containerInfo === h.containerInfo && y.stateNode.implementation === h.implementation) {
                    a(
                      d,
                      y.sibling
                    ), T = n(y, h.children || []), T.return = d, d = T;
                    break l;
                  } else {
                    a(d, y);
                    break;
                  }
                else u(d, y);
                y = y.sibling;
              }
              T = Tf(h, d.mode, T), T.return = d, d = T;
            }
            return c(d);
          case Xl:
            return U = h._init, h = U(h._payload), fl(
              d,
              y,
              h,
              T
            );
        }
        if (vl(h))
          return G(
            d,
            y,
            h,
            T
          );
        if (Rl(h)) {
          if (U = Rl(h), typeof U != "function") throw Error(g(150));
          return h = U.call(h), B(
            d,
            y,
            h,
            T
          );
        }
        if (typeof h.then == "function")
          return fl(
            d,
            y,
            un(h),
            T
          );
        if (h.$$typeof === gl)
          return fl(
            d,
            y,
            Ve(d, h),
            T
          );
        an(d, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, y !== null && y.tag === 6 ? (a(d, y.sibling), T = n(y, h), T.return = d, d = T) : (a(d, y), T = bf(h, d.mode, T), T.return = d, d = T), c(d)) : a(d, y);
    }
    return function(d, y, h, T) {
      try {
        ka = 0;
        var U = fl(
          d,
          y,
          h,
          T
        );
        return na = null, U;
      } catch (N) {
        if (N === Za || N === Ke) throw N;
        var C = at(29, N, null, d.mode);
        return C.lanes = T, C.return = d, C;
      } finally {
      }
    };
  }
  var fa = is(!0), ss = is(!1), gt = z(null), Mt = null;
  function lu(l) {
    var u = l.alternate;
    M(Ml, Ml.current & 1), M(gt, l), Mt === null && (u === null || ta.current !== null || u.memoizedState !== null) && (Mt = l);
  }
  function vs(l) {
    if (l.tag === 22) {
      if (M(Ml, Ml.current), M(gt, l), Mt === null) {
        var u = l.alternate;
        u !== null && u.memoizedState !== null && (Mt = l);
      }
    } else tu();
  }
  function tu() {
    M(Ml, Ml.current), M(gt, gt.current);
  }
  function Xt(l) {
    D(gt), Mt === l && (Mt = null), D(Ml);
  }
  var Ml = z(0);
  function en(l) {
    for (var u = l; u !== null; ) {
      if (u.tag === 13) {
        var a = u.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Cc(a)))
          return u;
      } else if (u.tag === 19 && u.memoizedProps.revealOrder !== void 0) {
        if ((u.flags & 128) !== 0) return u;
      } else if (u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === l) break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === l) return null;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
    return null;
  }
  function Pf(l, u, a, e) {
    u = l.memoizedState, a = a(e, u), a = a == null ? u : H({}, u, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var lc = {
    enqueueSetState: function(l, u, a) {
      l = l._reactInternals;
      var e = ct(), n = Ft(e);
      n.payload = u, a != null && (n.callback = a), u = It(l, n, e), u !== null && (it(u, l, e), Va(u, l, e));
    },
    enqueueReplaceState: function(l, u, a) {
      l = l._reactInternals;
      var e = ct(), n = Ft(e);
      n.tag = 1, n.payload = u, a != null && (n.callback = a), u = It(l, n, e), u !== null && (it(u, l, e), Va(u, l, e));
    },
    enqueueForceUpdate: function(l, u) {
      l = l._reactInternals;
      var a = ct(), e = Ft(a);
      e.tag = 2, u != null && (e.callback = u), u = It(l, e, a), u !== null && (it(u, l, a), Va(u, l, a));
    }
  };
  function ys(l, u, a, e, n, f, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, f, c) : u.prototype && u.prototype.isPureReactComponent ? !Ya(a, e) || !Ya(n, f) : !0;
  }
  function ds(l, u, a, e) {
    l = u.state, typeof u.componentWillReceiveProps == "function" && u.componentWillReceiveProps(a, e), typeof u.UNSAFE_componentWillReceiveProps == "function" && u.UNSAFE_componentWillReceiveProps(a, e), u.state !== l && lc.enqueueReplaceState(u, u.state, null);
  }
  function Hu(l, u) {
    var a = u;
    if ("ref" in u) {
      a = {};
      for (var e in u)
        e !== "ref" && (a[e] = u[e]);
    }
    if (l = l.defaultProps) {
      a === u && (a = H({}, a));
      for (var n in l)
        a[n] === void 0 && (a[n] = l[n]);
    }
    return a;
  }
  var nn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var u = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(u)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function hs(l) {
    nn(l);
  }
  function os(l) {
    console.error(l);
  }
  function ms(l) {
    nn(l);
  }
  function fn(l, u) {
    try {
      var a = l.onUncaughtError;
      a(u.value, { componentStack: u.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function rs(l, u, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: u.tag === 1 ? u.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function tc(l, u, a) {
    return a = Ft(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      fn(l, u);
    }, a;
  }
  function gs(l) {
    return l = Ft(l), l.tag = 3, l;
  }
  function Ss(l, u, a, e) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var f = e.value;
      l.payload = function() {
        return n(f);
      }, l.callback = function() {
        rs(u, a, e);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      rs(u, a, e), typeof n != "function" && (cu === null ? cu = /* @__PURE__ */ new Set([this]) : cu.add(this));
      var i = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Rd(l, u, a, e, n) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (u = a.alternate, u !== null && Xa(
        u,
        a,
        n,
        !0
      ), a = gt.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Mt === null ? Oc() : a.alternate === null && bl === 0 && (bl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = n, e === Nf ? a.flags |= 16384 : (u = a.updateQueue, u === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : u.add(e), Dc(l, e, n)), !1;
          case 22:
            return a.flags |= 65536, e === Nf ? a.flags |= 16384 : (u = a.updateQueue, u === null ? (u = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = u) : (a = u.retryQueue, a === null ? u.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), Dc(l, e, n)), !1;
        }
        throw Error(g(435, a.tag));
      }
      return Dc(l, e, n), Oc(), !1;
    }
    if ($)
      return u = gt.current, u !== null ? ((u.flags & 65536) === 0 && (u.flags |= 256), u.flags |= 65536, u.lanes = n, e !== zf && (l = Error(g(422), { cause: e }), xa(ht(l, a)))) : (e !== zf && (u = Error(g(423), {
        cause: e
      }), xa(
        ht(u, a)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, e = ht(e, a), n = tc(
        l.stateNode,
        e,
        n
      ), Yf(l, n), bl !== 4 && (bl = 2)), !1;
    var f = Error(g(520), { cause: e });
    if (f = ht(f, a), ee === null ? ee = [f] : ee.push(f), bl !== 4 && (bl = 2), u === null) return !0;
    e = ht(e, a), a = u;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = n & -n, a.lanes |= l, l = tc(a.stateNode, e, l), Yf(a, l), !1;
        case 1:
          if (u = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof u.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (cu === null || !cu.has(f))))
            return a.flags |= 65536, n &= -n, a.lanes |= n, n = gs(n), Ss(
              n,
              l,
              a,
              e
            ), Yf(a, n), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var bs = Error(g(461)), Hl = !1;
  function pl(l, u, a, e) {
    u.child = l === null ? ss(u, null, a, e) : fa(
      u,
      l.child,
      a,
      e
    );
  }
  function Ts(l, u, a, e, n) {
    a = a.render;
    var f = u.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e)
        i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return Uu(u), e = Xf(
      l,
      u,
      a,
      c,
      f,
      n
    ), i = Qf(), l !== null && !Hl ? (jf(l, u, n), Qt(l, u, n)) : ($ && i && Ef(u), u.flags |= 1, pl(l, u, e, n), u.child);
  }
  function Es(l, u, a, e, n) {
    if (l === null) {
      var f = a.type;
      return typeof f == "function" && !Sf(f) && f.defaultProps === void 0 && a.compare === null ? (u.tag = 15, u.type = f, As(
        l,
        u,
        f,
        e,
        n
      )) : (l = Qe(
        a.type,
        null,
        e,
        u,
        u.mode,
        n
      ), l.ref = u.ref, l.return = u, u.child = l);
    }
    if (f = l.child, !sc(l, n)) {
      var c = f.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Ya, a(c, e) && l.ref === u.ref)
        return Qt(l, u, n);
    }
    return u.flags |= 1, l = qt(f, e), l.ref = u.ref, l.return = u, u.child = l;
  }
  function As(l, u, a, e, n) {
    if (l !== null) {
      var f = l.memoizedProps;
      if (Ya(f, e) && l.ref === u.ref)
        if (Hl = !1, u.pendingProps = e = f, sc(l, n))
          (l.flags & 131072) !== 0 && (Hl = !0);
        else
          return u.lanes = l.lanes, Qt(l, u, n);
    }
    return uc(
      l,
      u,
      a,
      e,
      n
    );
  }
  function zs(l, u, a) {
    var e = u.pendingProps, n = e.children, f = l !== null ? l.memoizedState : null;
    if (e.mode === "hidden") {
      if ((u.flags & 128) !== 0) {
        if (e = f !== null ? f.baseLanes | a : a, l !== null) {
          for (n = u.child = l.child, f = 0; n !== null; )
            f = f | n.lanes | n.childLanes, n = n.sibling;
          u.childLanes = f & ~e;
        } else u.childLanes = 0, u.child = null;
        return _s(
          l,
          u,
          e,
          a
        );
      }
      if ((a & 536870912) !== 0)
        u.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Le(
          u,
          f !== null ? f.cachePool : null
        ), f !== null ? A0(u, f) : pf(), vs(u);
      else
        return u.lanes = u.childLanes = 536870912, _s(
          l,
          u,
          f !== null ? f.baseLanes | a : a,
          a
        );
    } else
      f !== null ? (Le(u, f.cachePool), A0(u, f), tu(), u.memoizedState = null) : (l !== null && Le(u, null), pf(), tu());
    return pl(l, u, n, a), u.child;
  }
  function _s(l, u, a, e) {
    var n = Rf();
    return n = n === null ? null : { parent: Ol._currentValue, pool: n }, u.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Le(u, null), pf(), vs(u), l !== null && Xa(l, u, e, !0), null;
  }
  function cn(l, u) {
    var a = u.ref;
    if (a === null)
      l !== null && l.ref !== null && (u.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(g(284));
      (l === null || l.ref !== a) && (u.flags |= 4194816);
    }
  }
  function uc(l, u, a, e, n) {
    return Uu(u), a = Xf(
      l,
      u,
      a,
      e,
      void 0,
      n
    ), e = Qf(), l !== null && !Hl ? (jf(l, u, n), Qt(l, u, n)) : ($ && e && Ef(u), u.flags |= 1, pl(l, u, a, n), u.child);
  }
  function Os(l, u, a, e, n, f) {
    return Uu(u), u.updateQueue = null, a = _0(
      u,
      e,
      a,
      n
    ), z0(l), e = Qf(), l !== null && !Hl ? (jf(l, u, f), Qt(l, u, f)) : ($ && e && Ef(u), u.flags |= 1, pl(l, u, a, f), u.child);
  }
  function Ms(l, u, a, e, n) {
    if (Uu(u), u.stateNode === null) {
      var f = ku, c = a.contextType;
      typeof c == "object" && c !== null && (f = Zl(c)), f = new a(e, f), u.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = lc, u.stateNode = f, f._reactInternals = u, f = u.stateNode, f.props = e, f.state = u.memoizedState, f.refs = {}, Hf(u), c = a.contextType, f.context = typeof c == "object" && c !== null ? Zl(c) : ku, f.state = u.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (Pf(
        u,
        a,
        c,
        e
      ), f.state = u.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (c = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), c !== f.state && lc.enqueueReplaceState(f, f.state, null), Ka(u, e, f, n), La(), f.state = u.memoizedState), typeof f.componentDidMount == "function" && (u.flags |= 4194308), e = !0;
    } else if (l === null) {
      f = u.stateNode;
      var i = u.memoizedProps, s = Hu(a, i);
      f.props = s;
      var o = f.context, b = a.contextType;
      c = ku, typeof b == "object" && b !== null && (c = Zl(b));
      var E = a.getDerivedStateFromProps;
      b = typeof E == "function" || typeof f.getSnapshotBeforeUpdate == "function", i = u.pendingProps !== i, b || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (i || o !== c) && ds(
        u,
        f,
        e,
        c
      ), kt = !1;
      var m = u.memoizedState;
      f.state = m, Ka(u, e, f, n), La(), o = u.memoizedState, i || m !== o || kt ? (typeof E == "function" && (Pf(
        u,
        a,
        E,
        e
      ), o = u.memoizedState), (s = kt || ys(
        u,
        a,
        s,
        e,
        m,
        o,
        c
      )) ? (b || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (u.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (u.flags |= 4194308), u.memoizedProps = e, u.memoizedState = o), f.props = e, f.state = o, f.context = c, e = s) : (typeof f.componentDidMount == "function" && (u.flags |= 4194308), e = !1);
    } else {
      f = u.stateNode, qf(l, u), c = u.memoizedProps, b = Hu(a, c), f.props = b, E = u.pendingProps, m = f.context, o = a.contextType, s = ku, typeof o == "object" && o !== null && (s = Zl(o)), i = a.getDerivedStateFromProps, (o = typeof i == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (c !== E || m !== s) && ds(
        u,
        f,
        e,
        s
      ), kt = !1, m = u.memoizedState, f.state = m, Ka(u, e, f, n), La();
      var r = u.memoizedState;
      c !== E || m !== r || kt || l !== null && l.dependencies !== null && Ce(l.dependencies) ? (typeof i == "function" && (Pf(
        u,
        a,
        i,
        e
      ), r = u.memoizedState), (b = kt || ys(
        u,
        a,
        b,
        e,
        m,
        r,
        s
      ) || l !== null && l.dependencies !== null && Ce(l.dependencies)) ? (o || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(e, r, s), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        e,
        r,
        s
      )), typeof f.componentDidUpdate == "function" && (u.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (u.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (u.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (u.flags |= 1024), u.memoizedProps = e, u.memoizedState = r), f.props = e, f.state = r, f.context = s, e = b) : (typeof f.componentDidUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (u.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && m === l.memoizedState || (u.flags |= 1024), e = !1);
    }
    return f = e, cn(l, u), e = (u.flags & 128) !== 0, f || e ? (f = u.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : f.render(), u.flags |= 1, l !== null && e ? (u.child = fa(
      u,
      l.child,
      null,
      n
    ), u.child = fa(
      u,
      null,
      a,
      n
    )) : pl(l, u, a, n), u.memoizedState = f.state, l = u.child) : l = Qt(
      l,
      u,
      n
    ), l;
  }
  function Ds(l, u, a, e) {
    return Ga(), u.flags |= 256, pl(l, u, a, e), u.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ec(l) {
    return { baseLanes: l, cachePool: o0() };
  }
  function nc(l, u, a) {
    return l = l !== null ? l.childLanes & ~a : 0, u && (l |= St), l;
  }
  function Us(l, u, a) {
    var e = u.pendingProps, n = !1, f = (u.flags & 128) !== 0, c;
    if ((c = f) || (c = l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0), c && (n = !0, u.flags &= -129), c = (u.flags & 32) !== 0, u.flags &= -33, l === null) {
      if ($) {
        if (n ? lu(u) : tu(), $) {
          var i = Sl, s;
          if (s = i) {
            l: {
              for (s = i, i = Ot; s.nodeType !== 8; ) {
                if (!i) {
                  i = null;
                  break l;
                }
                if (s = At(
                  s.nextSibling
                ), s === null) {
                  i = null;
                  break l;
                }
              }
              i = s;
            }
            i !== null ? (u.memoizedState = {
              dehydrated: i,
              treeContext: zu !== null ? { id: Yt, overflow: Bt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, s = at(
              18,
              null,
              null,
              0
            ), s.stateNode = i, s.return = u, u.child = s, Kl = u, Sl = null, s = !0) : s = !1;
          }
          s || Mu(u);
        }
        if (i = u.memoizedState, i !== null && (i = i.dehydrated, i !== null))
          return Cc(i) ? u.lanes = 32 : u.lanes = 536870912, null;
        Xt(u);
      }
      return i = e.children, e = e.fallback, n ? (tu(), n = u.mode, i = sn(
        { mode: "hidden", children: i },
        n
      ), e = Au(
        e,
        n,
        a,
        null
      ), i.return = u, e.return = u, i.sibling = e, u.child = i, n = u.child, n.memoizedState = ec(a), n.childLanes = nc(
        l,
        c,
        a
      ), u.memoizedState = ac, e) : (lu(u), fc(u, i));
    }
    if (s = l.memoizedState, s !== null && (i = s.dehydrated, i !== null)) {
      if (f)
        u.flags & 256 ? (lu(u), u.flags &= -257, u = cc(
          l,
          u,
          a
        )) : u.memoizedState !== null ? (tu(), u.child = l.child, u.flags |= 128, u = null) : (tu(), n = e.fallback, i = u.mode, e = sn(
          { mode: "visible", children: e.children },
          i
        ), n = Au(
          n,
          i,
          a,
          null
        ), n.flags |= 2, e.return = u, n.return = u, e.sibling = n, u.child = e, fa(
          u,
          l.child,
          null,
          a
        ), e = u.child, e.memoizedState = ec(a), e.childLanes = nc(
          l,
          c,
          a
        ), u.memoizedState = ac, u = n);
      else if (lu(u), Cc(i)) {
        if (c = i.nextSibling && i.nextSibling.dataset, c) var o = c.dgst;
        c = o, e = Error(g(419)), e.stack = "", e.digest = c, xa({ value: e, source: null, stack: null }), u = cc(
          l,
          u,
          a
        );
      } else if (Hl || Xa(l, u, a, !1), c = (a & l.childLanes) !== 0, Hl || c) {
        if (c = yl, c !== null && (e = a & -a, e = (e & 42) !== 0 ? 1 : Cn(e), e = (e & (c.suspendedLanes | a)) !== 0 ? 0 : e, e !== 0 && e !== s.retryLane))
          throw s.retryLane = e, $u(l, e), it(c, l, e), bs;
        i.data === "$?" || Oc(), u = cc(
          l,
          u,
          a
        );
      } else
        i.data === "$?" ? (u.flags |= 192, u.child = l.child, u = null) : (l = s.treeContext, Sl = At(
          i.nextSibling
        ), Kl = u, $ = !0, Ou = null, Ot = !1, l !== null && (mt[rt++] = Yt, mt[rt++] = Bt, mt[rt++] = zu, Yt = l.id, Bt = l.overflow, zu = u), u = fc(
          u,
          e.children
        ), u.flags |= 4096);
      return u;
    }
    return n ? (tu(), n = e.fallback, i = u.mode, s = l.child, o = s.sibling, e = qt(s, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = s.subtreeFlags & 65011712, o !== null ? n = qt(o, n) : (n = Au(
      n,
      i,
      a,
      null
    ), n.flags |= 2), n.return = u, e.return = u, e.sibling = n, u.child = e, e = n, n = u.child, i = l.child.memoizedState, i === null ? i = ec(a) : (s = i.cachePool, s !== null ? (o = Ol._currentValue, s = s.parent !== o ? { parent: o, pool: o } : s) : s = o0(), i = {
      baseLanes: i.baseLanes | a,
      cachePool: s
    }), n.memoizedState = i, n.childLanes = nc(
      l,
      c,
      a
    ), u.memoizedState = ac, e) : (lu(u), a = l.child, l = a.sibling, a = qt(a, {
      mode: "visible",
      children: e.children
    }), a.return = u, a.sibling = null, l !== null && (c = u.deletions, c === null ? (u.deletions = [l], u.flags |= 16) : c.push(l)), u.child = a, u.memoizedState = null, a);
  }
  function fc(l, u) {
    return u = sn(
      { mode: "visible", children: u },
      l.mode
    ), u.return = l, l.child = u;
  }
  function sn(l, u) {
    return l = at(22, l, null, u), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function cc(l, u, a) {
    return fa(u, l.child, null, a), l = fc(
      u,
      u.pendingProps.children
    ), l.flags |= 2, u.memoizedState = null, l;
  }
  function Rs(l, u, a) {
    l.lanes |= u;
    var e = l.alternate;
    e !== null && (e.lanes |= u), Of(l.return, u, a);
  }
  function ic(l, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: u,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: n
    } : (f.isBackwards = u, f.rendering = null, f.renderingStartTime = 0, f.last = e, f.tail = a, f.tailMode = n);
  }
  function Ns(l, u, a) {
    var e = u.pendingProps, n = e.revealOrder, f = e.tail;
    if (pl(l, u, e.children, a), e = Ml.current, (e & 2) !== 0)
      e = e & 1 | 2, u.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = u.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Rs(l, a, u);
          else if (l.tag === 19)
            Rs(l, a, u);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === u) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === u)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      e &= 1;
    }
    switch (M(Ml, e), n) {
      case "forwards":
        for (a = u.child, n = null; a !== null; )
          l = a.alternate, l !== null && en(l) === null && (n = a), a = a.sibling;
        a = n, a === null ? (n = u.child, u.child = null) : (n = a.sibling, a.sibling = null), ic(
          u,
          !1,
          n,
          a,
          f
        );
        break;
      case "backwards":
        for (a = null, n = u.child, u.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && en(l) === null) {
            u.child = n;
            break;
          }
          l = n.sibling, n.sibling = a, a = n, n = l;
        }
        ic(
          u,
          !0,
          a,
          null,
          f
        );
        break;
      case "together":
        ic(u, !1, null, null, void 0);
        break;
      default:
        u.memoizedState = null;
    }
    return u.child;
  }
  function Qt(l, u, a) {
    if (l !== null && (u.dependencies = l.dependencies), fu |= u.lanes, (a & u.childLanes) === 0)
      if (l !== null) {
        if (Xa(
          l,
          u,
          a,
          !1
        ), (a & u.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && u.child !== l.child)
      throw Error(g(153));
    if (u.child !== null) {
      for (l = u.child, a = qt(l, l.pendingProps), u.child = a, a.return = u; l.sibling !== null; )
        l = l.sibling, a = a.sibling = qt(l, l.pendingProps), a.return = u;
      a.sibling = null;
    }
    return u.child;
  }
  function sc(l, u) {
    return (l.lanes & u) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ce(l)));
  }
  function Nd(l, u, a) {
    switch (u.tag) {
      case 3:
        hl(u, u.stateNode.containerInfo), $t(u, Ol, l.memoizedState.cache), Ga();
        break;
      case 27:
      case 5:
        xn(u);
        break;
      case 4:
        hl(u, u.stateNode.containerInfo);
        break;
      case 10:
        $t(
          u,
          u.type,
          u.memoizedProps.value
        );
        break;
      case 13:
        var e = u.memoizedState;
        if (e !== null)
          return e.dehydrated !== null ? (lu(u), u.flags |= 128, null) : (a & u.child.childLanes) !== 0 ? Us(l, u, a) : (lu(u), l = Qt(
            l,
            u,
            a
          ), l !== null ? l.sibling : null);
        lu(u);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (e = (a & u.childLanes) !== 0, e || (Xa(
          l,
          u,
          a,
          !1
        ), e = (a & u.childLanes) !== 0), n) {
          if (e)
            return Ns(
              l,
              u,
              a
            );
          u.flags |= 128;
        }
        if (n = u.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), M(Ml, Ml.current), e) break;
        return null;
      case 22:
      case 23:
        return u.lanes = 0, zs(l, u, a);
      case 24:
        $t(u, Ol, l.memoizedState.cache);
    }
    return Qt(l, u, a);
  }
  function Hs(l, u, a) {
    if (l !== null)
      if (l.memoizedProps !== u.pendingProps)
        Hl = !0;
      else {
        if (!sc(l, a) && (u.flags & 128) === 0)
          return Hl = !1, Nd(
            l,
            u,
            a
          );
        Hl = (l.flags & 131072) !== 0;
      }
    else
      Hl = !1, $ && (u.flags & 1048576) !== 0 && c0(u, Ze, u.index);
    switch (u.lanes = 0, u.tag) {
      case 16:
        l: {
          l = u.pendingProps;
          var e = u.elementType, n = e._init;
          if (e = n(e._payload), u.type = e, typeof e == "function")
            Sf(e) ? (l = Hu(e, l), u.tag = 1, u = Ms(
              null,
              u,
              e,
              l,
              a
            )) : (u.tag = 0, u = uc(
              null,
              u,
              e,
              l,
              a
            ));
          else {
            if (e != null) {
              if (n = e.$$typeof, n === Ul) {
                u.tag = 11, u = Ts(
                  null,
                  u,
                  e,
                  l,
                  a
                );
                break l;
              } else if (n === Ll) {
                u.tag = 14, u = Es(
                  null,
                  u,
                  e,
                  l,
                  a
                );
                break l;
              }
            }
            throw u = Ql(e) || e, Error(g(306, u, ""));
          }
        }
        return u;
      case 0:
        return uc(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 1:
        return e = u.type, n = Hu(
          e,
          u.pendingProps
        ), Ms(
          l,
          u,
          e,
          n,
          a
        );
      case 3:
        l: {
          if (hl(
            u,
            u.stateNode.containerInfo
          ), l === null) throw Error(g(387));
          e = u.pendingProps;
          var f = u.memoizedState;
          n = f.element, qf(l, u), Ka(u, e, null, a);
          var c = u.memoizedState;
          if (e = c.cache, $t(u, Ol, e), e !== f.cache && Mf(
            u,
            [Ol],
            a,
            !0
          ), La(), e = c.element, f.isDehydrated)
            if (f = {
              element: e,
              isDehydrated: !1,
              cache: c.cache
            }, u.updateQueue.baseState = f, u.memoizedState = f, u.flags & 256) {
              u = Ds(
                l,
                u,
                e,
                a
              );
              break l;
            } else if (e !== n) {
              n = ht(
                Error(g(424)),
                u
              ), xa(n), u = Ds(
                l,
                u,
                e,
                a
              );
              break l;
            } else {
              switch (l = u.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Sl = At(l.firstChild), Kl = u, $ = !0, Ou = null, Ot = !0, a = ss(
                u,
                null,
                e,
                a
              ), u.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ga(), e === n) {
              u = Qt(
                l,
                u,
                a
              );
              break l;
            }
            pl(
              l,
              u,
              e,
              a
            );
          }
          u = u.child;
        }
        return u;
      case 26:
        return cn(l, u), l === null ? (a = pv(
          u.type,
          null,
          u.pendingProps,
          null
        )) ? u.memoizedState = a : $ || (a = u.type, l = u.pendingProps, e = zn(
          x.current
        ).createElement(a), e[jl] = u, e[Jl] = l, xl(e, a, l), Nl(e), u.stateNode = e) : u.memoizedState = pv(
          u.type,
          l.memoizedProps,
          u.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return xn(u), l === null && $ && (e = u.stateNode = qv(
          u.type,
          u.pendingProps,
          x.current
        ), Kl = u, Ot = !0, n = Sl, vu(u.type) ? (Vc = n, Sl = At(
          e.firstChild
        )) : Sl = n), pl(
          l,
          u,
          u.pendingProps.children,
          a
        ), cn(l, u), l === null && (u.flags |= 4194304), u.child;
      case 5:
        return l === null && $ && ((n = e = Sl) && (e = e1(
          e,
          u.type,
          u.pendingProps,
          Ot
        ), e !== null ? (u.stateNode = e, Kl = u, Sl = At(
          e.firstChild
        ), Ot = !1, n = !0) : n = !1), n || Mu(u)), xn(u), n = u.type, f = u.pendingProps, c = l !== null ? l.memoizedProps : null, e = f.children, Qc(n, f) ? e = null : c !== null && Qc(n, c) && (u.flags |= 32), u.memoizedState !== null && (n = Xf(
          l,
          u,
          Ad,
          null,
          null,
          a
        ), he._currentValue = n), cn(l, u), pl(l, u, e, a), u.child;
      case 6:
        return l === null && $ && ((l = a = Sl) && (a = n1(
          a,
          u.pendingProps,
          Ot
        ), a !== null ? (u.stateNode = a, Kl = u, Sl = null, l = !0) : l = !1), l || Mu(u)), null;
      case 13:
        return Us(l, u, a);
      case 4:
        return hl(
          u,
          u.stateNode.containerInfo
        ), e = u.pendingProps, l === null ? u.child = fa(
          u,
          null,
          e,
          a
        ) : pl(
          l,
          u,
          e,
          a
        ), u.child;
      case 11:
        return Ts(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 7:
        return pl(
          l,
          u,
          u.pendingProps,
          a
        ), u.child;
      case 8:
        return pl(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 12:
        return pl(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 10:
        return e = u.pendingProps, $t(u, u.type, e.value), pl(
          l,
          u,
          e.children,
          a
        ), u.child;
      case 9:
        return n = u.type._context, e = u.pendingProps.children, Uu(u), n = Zl(n), e = e(n), u.flags |= 1, pl(l, u, e, a), u.child;
      case 14:
        return Es(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 15:
        return As(
          l,
          u,
          u.type,
          u.pendingProps,
          a
        );
      case 19:
        return Ns(l, u, a);
      case 31:
        return e = u.pendingProps, a = u.mode, e = {
          mode: e.mode,
          children: e.children
        }, l === null ? (a = sn(
          e,
          a
        ), a.ref = u.ref, u.child = a, a.return = u, u = a) : (a = qt(l.child, e), a.ref = u.ref, u.child = a, a.return = u, u = a), u;
      case 22:
        return zs(l, u, a);
      case 24:
        return Uu(u), e = Zl(Ol), l === null ? (n = Rf(), n === null && (n = yl, f = Df(), n.pooledCache = f, f.refCount++, f !== null && (n.pooledCacheLanes |= a), n = f), u.memoizedState = {
          parent: e,
          cache: n
        }, Hf(u), $t(u, Ol, n)) : ((l.lanes & a) !== 0 && (qf(l, u), Ka(u, null, null, a), La()), n = l.memoizedState, f = u.memoizedState, n.parent !== e ? (n = { parent: e, cache: e }, u.memoizedState = n, u.lanes === 0 && (u.memoizedState = u.updateQueue.baseState = n), $t(u, Ol, e)) : (e = f.cache, $t(u, Ol, e), e !== n.cache && Mf(
          u,
          [Ol],
          a,
          !0
        ))), pl(
          l,
          u,
          u.pendingProps.children,
          a
        ), u.child;
      case 29:
        throw u.pendingProps;
    }
    throw Error(g(156, u.tag));
  }
  function jt(l) {
    l.flags |= 4;
  }
  function qs(l, u) {
    if (u.type !== "stylesheet" || (u.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !jv(u)) {
      if (u = gt.current, u !== null && ((J & 4194048) === J ? Mt !== null : (J & 62914560) !== J && (J & 536870912) === 0 || u !== Mt))
        throw Ca = Nf, m0;
      l.flags |= 8192;
    }
  }
  function vn(l, u) {
    u !== null && (l.flags |= 4), l.flags & 16384 && (u = l.tag !== 22 ? vi() : 536870912, l.lanes |= u, va |= u);
  }
  function Ia(l, u) {
    if (!$)
      switch (l.tailMode) {
        case "hidden":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? u || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
      }
  }
  function rl(l) {
    var u = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (u)
      for (var n = l.child; n !== null; )
        a |= n.lanes | n.childLanes, e |= n.subtreeFlags & 65011712, e |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        a |= n.lanes | n.childLanes, e |= n.subtreeFlags, e |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, u;
  }
  function Hd(l, u, a) {
    var e = u.pendingProps;
    switch (Af(u), u.tag) {
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
        return rl(u), null;
      case 1:
        return rl(u), null;
      case 3:
        return a = u.stateNode, e = null, l !== null && (e = l.memoizedState.cache), u.memoizedState.cache !== e && (u.flags |= 2048), Gt(Ol), Kt(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (pa(u) ? jt(u) : l === null || l.memoizedState.isDehydrated && (u.flags & 256) === 0 || (u.flags |= 1024, v0())), rl(u), null;
      case 26:
        return a = u.memoizedState, l === null ? (jt(u), a !== null ? (rl(u), qs(u, a)) : (rl(u), u.flags &= -16777217)) : a ? a !== l.memoizedState ? (jt(u), rl(u), qs(u, a)) : (rl(u), u.flags &= -16777217) : (l.memoizedProps !== e && jt(u), rl(u), u.flags &= -16777217), null;
      case 27:
        Te(u), a = x.current;
        var n = u.type;
        if (l !== null && u.stateNode != null)
          l.memoizedProps !== e && jt(u);
        else {
          if (!e) {
            if (u.stateNode === null)
              throw Error(g(166));
            return rl(u), null;
          }
          l = Y.current, pa(u) ? i0(u) : (l = qv(n, e, a), u.stateNode = l, jt(u));
        }
        return rl(u), null;
      case 5:
        if (Te(u), a = u.type, l !== null && u.stateNode != null)
          l.memoizedProps !== e && jt(u);
        else {
          if (!e) {
            if (u.stateNode === null)
              throw Error(g(166));
            return rl(u), null;
          }
          if (l = Y.current, pa(u))
            i0(u);
          else {
            switch (n = zn(
              x.current
            ), l) {
              case 1:
                l = n.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                l = n.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    l = n.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    l = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    l = n.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof e.is == "string" ? n.createElement("select", { is: e.is }) : n.createElement("select"), e.multiple ? l.multiple = !0 : e.size && (l.size = e.size);
                    break;
                  default:
                    l = typeof e.is == "string" ? n.createElement(a, { is: e.is }) : n.createElement(a);
                }
            }
            l[jl] = u, l[Jl] = e;
            l: for (n = u.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6)
                l.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                n.child.return = n, n = n.child;
                continue;
              }
              if (n === u) break l;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === u)
                  break l;
                n = n.return;
              }
              n.sibling.return = n.return, n = n.sibling;
            }
            u.stateNode = l;
            l: switch (xl(l, a, e), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!e.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && jt(u);
          }
        }
        return rl(u), u.flags &= -16777217, null;
      case 6:
        if (l && u.stateNode != null)
          l.memoizedProps !== e && jt(u);
        else {
          if (typeof e != "string" && u.stateNode === null)
            throw Error(g(166));
          if (l = x.current, pa(u)) {
            if (l = u.stateNode, a = u.memoizedProps, e = null, n = Kl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  e = n.memoizedProps;
              }
            l[jl] = u, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || Ov(l.nodeValue, a)), l || Mu(u);
          } else
            l = zn(l).createTextNode(
              e
            ), l[jl] = u, u.stateNode = l;
        }
        return rl(u), null;
      case 13:
        if (e = u.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = pa(u), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(g(318));
              if (n = u.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(g(317));
              n[jl] = u;
            } else
              Ga(), (u.flags & 128) === 0 && (u.memoizedState = null), u.flags |= 4;
            rl(u), n = !1;
          } else
            n = v0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return u.flags & 256 ? (Xt(u), u) : (Xt(u), null);
        }
        if (Xt(u), (u.flags & 128) !== 0)
          return u.lanes = a, u;
        if (a = e !== null, l = l !== null && l.memoizedState !== null, a) {
          e = u.child, n = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (n = e.alternate.memoizedState.cachePool.pool);
          var f = null;
          e.memoizedState !== null && e.memoizedState.cachePool !== null && (f = e.memoizedState.cachePool.pool), f !== n && (e.flags |= 2048);
        }
        return a !== l && a && (u.child.flags |= 8192), vn(u, u.updateQueue), rl(u), null;
      case 4:
        return Kt(), l === null && Bc(u.stateNode.containerInfo), rl(u), null;
      case 10:
        return Gt(u.type), rl(u), null;
      case 19:
        if (D(Ml), n = u.memoizedState, n === null) return rl(u), null;
        if (e = (u.flags & 128) !== 0, f = n.rendering, f === null)
          if (e) Ia(n, !1);
          else {
            if (bl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = u.child; l !== null; ) {
                if (f = en(l), f !== null) {
                  for (u.flags |= 128, Ia(n, !1), l = f.updateQueue, u.updateQueue = l, vn(u, l), u.subtreeFlags = 0, l = a, a = u.child; a !== null; )
                    f0(a, l), a = a.sibling;
                  return M(
                    Ml,
                    Ml.current & 1 | 2
                  ), u.child;
                }
                l = l.sibling;
              }
            n.tail !== null && _t() > hn && (u.flags |= 128, e = !0, Ia(n, !1), u.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = en(f), l !== null) {
              if (u.flags |= 128, e = !0, l = l.updateQueue, u.updateQueue = l, vn(u, l), Ia(n, !0), n.tail === null && n.tailMode === "hidden" && !f.alternate && !$)
                return rl(u), null;
            } else
              2 * _t() - n.renderingStartTime > hn && a !== 536870912 && (u.flags |= 128, e = !0, Ia(n, !1), u.lanes = 4194304);
          n.isBackwards ? (f.sibling = u.child, u.child = f) : (l = n.last, l !== null ? l.sibling = f : u.child = f, n.last = f);
        }
        return n.tail !== null ? (u = n.tail, n.rendering = u, n.tail = u.sibling, n.renderingStartTime = _t(), u.sibling = null, l = Ml.current, M(Ml, e ? l & 1 | 2 : l & 1), u) : (rl(u), null);
      case 22:
      case 23:
        return Xt(u), Gf(), e = u.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (u.flags |= 8192) : e && (u.flags |= 8192), e ? (a & 536870912) !== 0 && (u.flags & 128) === 0 && (rl(u), u.subtreeFlags & 6 && (u.flags |= 8192)) : rl(u), a = u.updateQueue, a !== null && vn(u, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (e = u.memoizedState.cachePool.pool), e !== a && (u.flags |= 2048), l !== null && D(Ru), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), u.memoizedState.cache !== a && (u.flags |= 2048), Gt(Ol), rl(u), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(g(156, u.tag));
  }
  function qd(l, u) {
    switch (Af(u), u.tag) {
      case 1:
        return l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 3:
        return Gt(Ol), Kt(), l = u.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (u.flags = l & -65537 | 128, u) : null;
      case 26:
      case 27:
      case 5:
        return Te(u), null;
      case 13:
        if (Xt(u), l = u.memoizedState, l !== null && l.dehydrated !== null) {
          if (u.alternate === null)
            throw Error(g(340));
          Ga();
        }
        return l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 19:
        return D(Ml), null;
      case 4:
        return Kt(), null;
      case 10:
        return Gt(u.type), null;
      case 22:
      case 23:
        return Xt(u), Gf(), l !== null && D(Ru), l = u.flags, l & 65536 ? (u.flags = l & -65537 | 128, u) : null;
      case 24:
        return Gt(Ol), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ys(l, u) {
    switch (Af(u), u.tag) {
      case 3:
        Gt(Ol), Kt();
        break;
      case 26:
      case 27:
      case 5:
        Te(u);
        break;
      case 4:
        Kt();
        break;
      case 13:
        Xt(u);
        break;
      case 19:
        D(Ml);
        break;
      case 10:
        Gt(u.type);
        break;
      case 22:
      case 23:
        Xt(u), Gf(), l !== null && D(Ru);
        break;
      case 24:
        Gt(Ol);
    }
  }
  function Pa(l, u) {
    try {
      var a = u.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var f = a.create, c = a.inst;
            e = f(), c.destroy = e;
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (i) {
      il(u, u.return, i);
    }
  }
  function uu(l, u, a) {
    try {
      var e = u.updateQueue, n = e !== null ? e.lastEffect : null;
      if (n !== null) {
        var f = n.next;
        e = f;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, n = u;
              var s = a, o = i;
              try {
                o();
              } catch (b) {
                il(
                  n,
                  s,
                  b
                );
              }
            }
          }
          e = e.next;
        } while (e !== f);
      }
    } catch (b) {
      il(u, u.return, b);
    }
  }
  function Bs(l) {
    var u = l.updateQueue;
    if (u !== null) {
      var a = l.stateNode;
      try {
        E0(u, a);
      } catch (e) {
        il(l, l.return, e);
      }
    }
  }
  function ps(l, u, a) {
    a.props = Hu(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      il(l, u, e);
    }
  }
  function le(l, u) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (n) {
      il(l, u, n);
    }
  }
  function Dt(l, u) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (n) {
          il(l, u, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          il(l, u, n);
        }
      else a.current = null;
  }
  function Gs(l) {
    var u = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (u) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (n) {
      il(l, l.return, n);
    }
  }
  function vc(l, u, a) {
    try {
      var e = l.stateNode;
      Pd(e, l.type, a, u), e[Jl] = u;
    } catch (n) {
      il(l, l.return, n);
    }
  }
  function xs(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && vu(l.type) || l.tag === 4;
  }
  function yc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || xs(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && vu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function dc(l, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, u ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, u) : (u = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, u.appendChild(l), a = a._reactRootContainer, a != null || u.onclick !== null || (u.onclick = An));
    else if (e !== 4 && (e === 27 && vu(l.type) && (a = l.stateNode, u = null), l = l.child, l !== null))
      for (dc(l, u, a), l = l.sibling; l !== null; )
        dc(l, u, a), l = l.sibling;
  }
  function yn(l, u, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      l = l.stateNode, u ? a.insertBefore(l, u) : a.appendChild(l);
    else if (e !== 4 && (e === 27 && vu(l.type) && (a = l.stateNode), l = l.child, l !== null))
      for (yn(l, u, a), l = l.sibling; l !== null; )
        yn(l, u, a), l = l.sibling;
  }
  function Xs(l) {
    var u = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, n = u.attributes; n.length; )
        u.removeAttributeNode(n[0]);
      xl(u, e, a), u[jl] = l, u[Jl] = a;
    } catch (f) {
      il(l, l.return, f);
    }
  }
  var Zt = !1, El = !1, hc = !1, Qs = typeof WeakSet == "function" ? WeakSet : Set, ql = null;
  function Yd(l, u) {
    if (l = l.containerInfo, xc = Rn, l = ki(l), yf(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var n = e.anchorOffset, f = e.focusNode;
            e = e.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break l;
            }
            var c = 0, i = -1, s = -1, o = 0, b = 0, E = l, m = null;
            t: for (; ; ) {
              for (var r; E !== a || n !== 0 && E.nodeType !== 3 || (i = c + n), E !== f || e !== 0 && E.nodeType !== 3 || (s = c + e), E.nodeType === 3 && (c += E.nodeValue.length), (r = E.firstChild) !== null; )
                m = E, E = r;
              for (; ; ) {
                if (E === l) break t;
                if (m === a && ++o === n && (i = c), m === f && ++b === e && (s = c), (r = E.nextSibling) !== null) break;
                E = m, m = E.parentNode;
              }
              E = r;
            }
            a = i === -1 || s === -1 ? null : { start: i, end: s };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Xc = { focusedElem: l, selectionRange: a }, Rn = !1, ql = u; ql !== null; )
      if (u = ql, l = u.child, (u.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = u, ql = l;
      else
        for (; ql !== null; ) {
          switch (u = ql, f = u.alternate, l = u.flags, u.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && f !== null) {
                l = void 0, a = u, n = f.memoizedProps, f = f.memoizedState, e = a.stateNode;
                try {
                  var G = Hu(
                    a.type,
                    n,
                    a.elementType === a.type
                  );
                  l = e.getSnapshotBeforeUpdate(
                    G,
                    f
                  ), e.__reactInternalSnapshotBeforeUpdate = l;
                } catch (B) {
                  il(
                    a,
                    a.return,
                    B
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = u.stateNode.containerInfo, a = l.nodeType, a === 9)
                  Zc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Zc(l);
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
              if ((l & 1024) !== 0) throw Error(g(163));
          }
          if (l = u.sibling, l !== null) {
            l.return = u.return, ql = l;
            break;
          }
          ql = u.return;
        }
  }
  function js(l, u, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        au(l, a), e & 4 && Pa(5, a);
        break;
      case 1:
        if (au(l, a), e & 4)
          if (l = a.stateNode, u === null)
            try {
              l.componentDidMount();
            } catch (c) {
              il(a, a.return, c);
            }
          else {
            var n = Hu(
              a.type,
              u.memoizedProps
            );
            u = u.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                u,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              il(
                a,
                a.return,
                c
              );
            }
          }
        e & 64 && Bs(a), e & 512 && le(a, a.return);
        break;
      case 3:
        if (au(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (u = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                u = a.child.stateNode;
                break;
              case 1:
                u = a.child.stateNode;
            }
          try {
            E0(l, u);
          } catch (c) {
            il(a, a.return, c);
          }
        }
        break;
      case 27:
        u === null && e & 4 && Xs(a);
      case 26:
      case 5:
        au(l, a), u === null && e & 4 && Gs(a), e & 512 && le(a, a.return);
        break;
      case 12:
        au(l, a);
        break;
      case 13:
        au(l, a), e & 4 && Vs(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Cd.bind(
          null,
          a
        ), f1(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || Zt, !e) {
          u = u !== null && u.memoizedState !== null || El, n = Zt;
          var f = El;
          Zt = e, (El = u) && !f ? eu(
            l,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : au(l, a), Zt = n, El = f;
        }
        break;
      case 30:
        break;
      default:
        au(l, a);
    }
  }
  function Zs(l) {
    var u = l.alternate;
    u !== null && (l.alternate = null, Zs(u)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (u = l.stateNode, u !== null && Kn(u)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var ol = null, $l = !1;
  function Ct(l, u, a) {
    for (a = a.child; a !== null; )
      Cs(l, u, a), a = a.sibling;
  }
  function Cs(l, u, a) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(Ea, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        El || Dt(a, u), Ct(
          l,
          u,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        El || Dt(a, u);
        var e = ol, n = $l;
        vu(a.type) && (ol = a.stateNode, $l = !1), Ct(
          l,
          u,
          a
        ), se(a.stateNode), ol = e, $l = n;
        break;
      case 5:
        El || Dt(a, u);
      case 6:
        if (e = ol, n = $l, ol = null, Ct(
          l,
          u,
          a
        ), ol = e, $l = n, ol !== null)
          if ($l)
            try {
              (ol.nodeType === 9 ? ol.body : ol.nodeName === "HTML" ? ol.ownerDocument.body : ol).removeChild(a.stateNode);
            } catch (f) {
              il(
                a,
                u,
                f
              );
            }
          else
            try {
              ol.removeChild(a.stateNode);
            } catch (f) {
              il(
                a,
                u,
                f
              );
            }
        break;
      case 18:
        ol !== null && ($l ? (l = ol, Nv(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), ge(l)) : Nv(ol, a.stateNode));
        break;
      case 4:
        e = ol, n = $l, ol = a.stateNode.containerInfo, $l = !0, Ct(
          l,
          u,
          a
        ), ol = e, $l = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        El || uu(2, a, u), El || uu(4, a, u), Ct(
          l,
          u,
          a
        );
        break;
      case 1:
        El || (Dt(a, u), e = a.stateNode, typeof e.componentWillUnmount == "function" && ps(
          a,
          u,
          e
        )), Ct(
          l,
          u,
          a
        );
        break;
      case 21:
        Ct(
          l,
          u,
          a
        );
        break;
      case 22:
        El = (e = El) || a.memoizedState !== null, Ct(
          l,
          u,
          a
        ), El = e;
        break;
      default:
        Ct(
          l,
          u,
          a
        );
    }
  }
  function Vs(l, u) {
    if (u.memoizedState === null && (l = u.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ge(l);
      } catch (a) {
        il(u, u.return, a);
      }
  }
  function Bd(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var u = l.stateNode;
        return u === null && (u = l.stateNode = new Qs()), u;
      case 22:
        return l = l.stateNode, u = l._retryCache, u === null && (u = l._retryCache = new Qs()), u;
      default:
        throw Error(g(435, l.tag));
    }
  }
  function oc(l, u) {
    var a = Bd(l);
    u.forEach(function(e) {
      var n = Vd.bind(null, l, e);
      a.has(e) || (a.add(e), e.then(n, n));
    });
  }
  function et(l, u) {
    var a = u.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var n = a[e], f = l, c = u, i = c;
        l: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (vu(i.type)) {
                ol = i.stateNode, $l = !1;
                break l;
              }
              break;
            case 5:
              ol = i.stateNode, $l = !1;
              break l;
            case 3:
            case 4:
              ol = i.stateNode.containerInfo, $l = !0;
              break l;
          }
          i = i.return;
        }
        if (ol === null) throw Error(g(160));
        Cs(f, c, n), ol = null, $l = !1, f = n.alternate, f !== null && (f.return = null), n.return = null;
      }
    if (u.subtreeFlags & 13878)
      for (u = u.child; u !== null; )
        Ls(u, l), u = u.sibling;
  }
  var Et = null;
  function Ls(l, u) {
    var a = l.alternate, e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        et(u, l), nt(l), e & 4 && (uu(3, l, l.return), Pa(3, l), uu(5, l, l.return));
        break;
      case 1:
        et(u, l), nt(l), e & 512 && (El || a === null || Dt(a, a.return)), e & 64 && Zt && (l = l.updateQueue, l !== null && (e = l.callbacks, e !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? e : a.concat(e))));
        break;
      case 26:
        var n = Et;
        if (et(u, l), nt(l), e & 512 && (El || a === null || Dt(a, a.return)), e & 4) {
          var f = a !== null ? a.memoizedState : null;
          if (e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  e = l.type, a = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (e) {
                    case "title":
                      f = n.getElementsByTagName("title")[0], (!f || f[_a] || f[jl] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = n.createElement(e), n.head.insertBefore(
                        f,
                        n.querySelector("head > title")
                      )), xl(f, e, a), f[jl] = l, Nl(f), e = f;
                      break l;
                    case "link":
                      var c = Xv(
                        "link",
                        "href",
                        n
                      ).get(e + (a.href || ""));
                      if (c) {
                        for (var i = 0; i < c.length; i++)
                          if (f = c[i], f.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && f.getAttribute("rel") === (a.rel == null ? null : a.rel) && f.getAttribute("title") === (a.title == null ? null : a.title) && f.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      f = n.createElement(e), xl(f, e, a), n.head.appendChild(f);
                      break;
                    case "meta":
                      if (c = Xv(
                        "meta",
                        "content",
                        n
                      ).get(e + (a.content || ""))) {
                        for (i = 0; i < c.length; i++)
                          if (f = c[i], f.getAttribute("content") === (a.content == null ? null : "" + a.content) && f.getAttribute("name") === (a.name == null ? null : a.name) && f.getAttribute("property") === (a.property == null ? null : a.property) && f.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && f.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            c.splice(i, 1);
                            break t;
                          }
                      }
                      f = n.createElement(e), xl(f, e, a), n.head.appendChild(f);
                      break;
                    default:
                      throw Error(g(468, e));
                  }
                  f[jl] = l, Nl(f), e = f;
                }
                l.stateNode = e;
              } else
                Qv(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = xv(
                n,
                e,
                l.memoizedProps
              );
          else
            f !== e ? (f === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : f.count--, e === null ? Qv(
              n,
              l.type,
              l.stateNode
            ) : xv(
              n,
              e,
              l.memoizedProps
            )) : e === null && l.stateNode !== null && vc(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        et(u, l), nt(l), e & 512 && (El || a === null || Dt(a, a.return)), a !== null && e & 4 && vc(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (et(u, l), nt(l), e & 512 && (El || a === null || Dt(a, a.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            Cu(n, "");
          } catch (r) {
            il(l, l.return, r);
          }
        }
        e & 4 && l.stateNode != null && (n = l.memoizedProps, vc(
          l,
          n,
          a !== null ? a.memoizedProps : n
        )), e & 1024 && (hc = !0);
        break;
      case 6:
        if (et(u, l), nt(l), e & 4) {
          if (l.stateNode === null)
            throw Error(g(162));
          e = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = e;
          } catch (r) {
            il(l, l.return, r);
          }
        }
        break;
      case 3:
        if (Mn = null, n = Et, Et = _n(u.containerInfo), et(u, l), Et = n, nt(l), e & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ge(u.containerInfo);
          } catch (r) {
            il(l, l.return, r);
          }
        hc && (hc = !1, Ks(l));
        break;
      case 4:
        e = Et, Et = _n(
          l.stateNode.containerInfo
        ), et(u, l), nt(l), Et = e;
        break;
      case 12:
        et(u, l), nt(l);
        break;
      case 13:
        et(u, l), nt(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Tc = _t()), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, oc(l, e)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = a !== null && a.memoizedState !== null, o = Zt, b = El;
        if (Zt = o || n, El = b || s, et(u, l), El = b, Zt = o, nt(l), e & 8192)
          l: for (u = l.stateNode, u._visibility = n ? u._visibility & -2 : u._visibility | 1, n && (a === null || s || Zt || El || qu(l)), a = null, u = l; ; ) {
            if (u.tag === 5 || u.tag === 26) {
              if (a === null) {
                s = a = u;
                try {
                  if (f = s.stateNode, n)
                    c = f.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    i = s.stateNode;
                    var E = s.memoizedProps.style, m = E != null && E.hasOwnProperty("display") ? E.display : null;
                    i.style.display = m == null || typeof m == "boolean" ? "" : ("" + m).trim();
                  }
                } catch (r) {
                  il(s, s.return, r);
                }
              }
            } else if (u.tag === 6) {
              if (a === null) {
                s = u;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (r) {
                  il(s, s.return, r);
                }
              }
            } else if ((u.tag !== 22 && u.tag !== 23 || u.memoizedState === null || u === l) && u.child !== null) {
              u.child.return = u, u = u.child;
              continue;
            }
            if (u === l) break l;
            for (; u.sibling === null; ) {
              if (u.return === null || u.return === l) break l;
              a === u && (a = null), u = u.return;
            }
            a === u && (a = null), u.sibling.return = u.return, u = u.sibling;
          }
        e & 4 && (e = l.updateQueue, e !== null && (a = e.retryQueue, a !== null && (e.retryQueue = null, oc(l, a))));
        break;
      case 19:
        et(u, l), nt(l), e & 4 && (e = l.updateQueue, e !== null && (l.updateQueue = null, oc(l, e)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        et(u, l), nt(l);
    }
  }
  function nt(l) {
    var u = l.flags;
    if (u & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (xs(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(g(160));
        switch (a.tag) {
          case 27:
            var n = a.stateNode, f = yc(l);
            yn(l, f, n);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (Cu(c, ""), a.flags &= -33);
            var i = yc(l);
            yn(l, i, c);
            break;
          case 3:
          case 4:
            var s = a.stateNode.containerInfo, o = yc(l);
            dc(
              l,
              o,
              s
            );
            break;
          default:
            throw Error(g(161));
        }
      } catch (b) {
        il(l, l.return, b);
      }
      l.flags &= -3;
    }
    u & 4096 && (l.flags &= -4097);
  }
  function Ks(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var u = l;
        Ks(u), u.tag === 5 && u.flags & 1024 && u.stateNode.reset(), l = l.sibling;
      }
  }
  function au(l, u) {
    if (u.subtreeFlags & 8772)
      for (u = u.child; u !== null; )
        js(l, u.alternate, u), u = u.sibling;
  }
  function qu(l) {
    for (l = l.child; l !== null; ) {
      var u = l;
      switch (u.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          uu(4, u, u.return), qu(u);
          break;
        case 1:
          Dt(u, u.return);
          var a = u.stateNode;
          typeof a.componentWillUnmount == "function" && ps(
            u,
            u.return,
            a
          ), qu(u);
          break;
        case 27:
          se(u.stateNode);
        case 26:
        case 5:
          Dt(u, u.return), qu(u);
          break;
        case 22:
          u.memoizedState === null && qu(u);
          break;
        case 30:
          qu(u);
          break;
        default:
          qu(u);
      }
      l = l.sibling;
    }
  }
  function eu(l, u, a) {
    for (a = a && (u.subtreeFlags & 8772) !== 0, u = u.child; u !== null; ) {
      var e = u.alternate, n = l, f = u, c = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          eu(
            n,
            f,
            a
          ), Pa(4, f);
          break;
        case 1:
          if (eu(
            n,
            f,
            a
          ), e = f, n = e.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (o) {
              il(e, e.return, o);
            }
          if (e = f, n = e.updateQueue, n !== null) {
            var i = e.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  T0(s[n], i);
            } catch (o) {
              il(e, e.return, o);
            }
          }
          a && c & 64 && Bs(f), le(f, f.return);
          break;
        case 27:
          Xs(f);
        case 26:
        case 5:
          eu(
            n,
            f,
            a
          ), a && e === null && c & 4 && Gs(f), le(f, f.return);
          break;
        case 12:
          eu(
            n,
            f,
            a
          );
          break;
        case 13:
          eu(
            n,
            f,
            a
          ), a && c & 4 && Vs(n, f);
          break;
        case 22:
          f.memoizedState === null && eu(
            n,
            f,
            a
          ), le(f, f.return);
          break;
        case 30:
          break;
        default:
          eu(
            n,
            f,
            a
          );
      }
      u = u.sibling;
    }
  }
  function mc(l, u) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (l = u.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Qa(a));
  }
  function rc(l, u) {
    l = null, u.alternate !== null && (l = u.alternate.memoizedState.cache), u = u.memoizedState.cache, u !== l && (u.refCount++, l != null && Qa(l));
  }
  function Ut(l, u, a, e) {
    if (u.subtreeFlags & 10256)
      for (u = u.child; u !== null; )
        Js(
          l,
          u,
          a,
          e
        ), u = u.sibling;
  }
  function Js(l, u, a, e) {
    var n = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ut(
          l,
          u,
          a,
          e
        ), n & 2048 && Pa(9, u);
        break;
      case 1:
        Ut(
          l,
          u,
          a,
          e
        );
        break;
      case 3:
        Ut(
          l,
          u,
          a,
          e
        ), n & 2048 && (l = null, u.alternate !== null && (l = u.alternate.memoizedState.cache), u = u.memoizedState.cache, u !== l && (u.refCount++, l != null && Qa(l)));
        break;
      case 12:
        if (n & 2048) {
          Ut(
            l,
            u,
            a,
            e
          ), l = u.stateNode;
          try {
            var f = u.memoizedProps, c = f.id, i = f.onPostCommit;
            typeof i == "function" && i(
              c,
              u.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (s) {
            il(u, u.return, s);
          }
        } else
          Ut(
            l,
            u,
            a,
            e
          );
        break;
      case 13:
        Ut(
          l,
          u,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        f = u.stateNode, c = u.alternate, u.memoizedState !== null ? f._visibility & 2 ? Ut(
          l,
          u,
          a,
          e
        ) : te(l, u) : f._visibility & 2 ? Ut(
          l,
          u,
          a,
          e
        ) : (f._visibility |= 2, ca(
          l,
          u,
          a,
          e,
          (u.subtreeFlags & 10256) !== 0
        )), n & 2048 && mc(c, u);
        break;
      case 24:
        Ut(
          l,
          u,
          a,
          e
        ), n & 2048 && rc(u.alternate, u);
        break;
      default:
        Ut(
          l,
          u,
          a,
          e
        );
    }
  }
  function ca(l, u, a, e, n) {
    for (n = n && (u.subtreeFlags & 10256) !== 0, u = u.child; u !== null; ) {
      var f = l, c = u, i = a, s = e, o = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          ca(
            f,
            c,
            i,
            s,
            n
          ), Pa(8, c);
          break;
        case 23:
          break;
        case 22:
          var b = c.stateNode;
          c.memoizedState !== null ? b._visibility & 2 ? ca(
            f,
            c,
            i,
            s,
            n
          ) : te(
            f,
            c
          ) : (b._visibility |= 2, ca(
            f,
            c,
            i,
            s,
            n
          )), n && o & 2048 && mc(
            c.alternate,
            c
          );
          break;
        case 24:
          ca(
            f,
            c,
            i,
            s,
            n
          ), n && o & 2048 && rc(c.alternate, c);
          break;
        default:
          ca(
            f,
            c,
            i,
            s,
            n
          );
      }
      u = u.sibling;
    }
  }
  function te(l, u) {
    if (u.subtreeFlags & 10256)
      for (u = u.child; u !== null; ) {
        var a = l, e = u, n = e.flags;
        switch (e.tag) {
          case 22:
            te(a, e), n & 2048 && mc(
              e.alternate,
              e
            );
            break;
          case 24:
            te(a, e), n & 2048 && rc(e.alternate, e);
            break;
          default:
            te(a, e);
        }
        u = u.sibling;
      }
  }
  var ue = 8192;
  function ia(l) {
    if (l.subtreeFlags & ue)
      for (l = l.child; l !== null; )
        ws(l), l = l.sibling;
  }
  function ws(l) {
    switch (l.tag) {
      case 26:
        ia(l), l.flags & ue && l.memoizedState !== null && b1(
          Et,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ia(l);
        break;
      case 3:
      case 4:
        var u = Et;
        Et = _n(l.stateNode.containerInfo), ia(l), Et = u;
        break;
      case 22:
        l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ue, ue = 16777216, ia(l), ue = u) : ia(l));
        break;
      default:
        ia(l);
    }
  }
  function Ws(l) {
    var u = l.alternate;
    if (u !== null && (l = u.child, l !== null)) {
      u.child = null;
      do
        u = l.sibling, l.sibling = null, l = u;
      while (l !== null);
    }
  }
  function ae(l) {
    var u = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (u !== null)
        for (var a = 0; a < u.length; a++) {
          var e = u[a];
          ql = e, ks(
            e,
            l
          );
        }
      Ws(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        $s(l), l = l.sibling;
  }
  function $s(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        ae(l), l.flags & 2048 && uu(9, l, l.return);
        break;
      case 3:
        ae(l);
        break;
      case 12:
        ae(l);
        break;
      case 22:
        var u = l.stateNode;
        l.memoizedState !== null && u._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (u._visibility &= -3, dn(l)) : ae(l);
        break;
      default:
        ae(l);
    }
  }
  function dn(l) {
    var u = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (u !== null)
        for (var a = 0; a < u.length; a++) {
          var e = u[a];
          ql = e, ks(
            e,
            l
          );
        }
      Ws(l);
    }
    for (l = l.child; l !== null; ) {
      switch (u = l, u.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, u, u.return), dn(u);
          break;
        case 22:
          a = u.stateNode, a._visibility & 2 && (a._visibility &= -3, dn(u));
          break;
        default:
          dn(u);
      }
      l = l.sibling;
    }
  }
  function ks(l, u) {
    for (; ql !== null; ) {
      var a = ql;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          uu(8, a, u);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Qa(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, ql = e;
      else
        l: for (a = l; ql !== null; ) {
          e = ql;
          var n = e.sibling, f = e.return;
          if (Zs(e), e === a) {
            ql = null;
            break l;
          }
          if (n !== null) {
            n.return = f, ql = n;
            break l;
          }
          ql = f;
        }
    }
  }
  var pd = {
    getCacheForType: function(l) {
      var u = Zl(Ol), a = u.data.get(l);
      return a === void 0 && (a = l(), u.data.set(l, a)), a;
    }
  }, Gd = typeof WeakMap == "function" ? WeakMap : Map, I = 0, yl = null, V = null, J = 0, P = 0, ft = null, nu = !1, sa = !1, gc = !1, Vt = 0, bl = 0, fu = 0, Yu = 0, Sc = 0, St = 0, va = 0, ee = null, kl = null, bc = !1, Tc = 0, hn = 1 / 0, on = null, cu = null, Gl = 0, iu = null, ya = null, da = 0, Ec = 0, Ac = null, Fs = null, ne = 0, zc = null;
  function ct() {
    if ((I & 2) !== 0 && J !== 0)
      return J & -J;
    if (S.T !== null) {
      var l = Pu;
      return l !== 0 ? l : Nc();
    }
    return hi();
  }
  function Is() {
    St === 0 && (St = (J & 536870912) === 0 || $ ? si() : 536870912);
    var l = gt.current;
    return l !== null && (l.flags |= 32), St;
  }
  function it(l, u, a) {
    (l === yl && (P === 2 || P === 9) || l.cancelPendingCommit !== null) && (ha(l, 0), su(
      l,
      J,
      St,
      !1
    )), za(l, a), ((I & 2) === 0 || l !== yl) && (l === yl && ((I & 2) === 0 && (Yu |= a), bl === 4 && su(
      l,
      J,
      St,
      !1
    )), Rt(l));
  }
  function Ps(l, u, a) {
    if ((I & 6) !== 0) throw Error(g(327));
    var e = !a && (u & 124) === 0 && (u & l.expiredLanes) === 0 || Aa(l, u), n = e ? Qd(l, u) : Mc(l, u, !0), f = e;
    do {
      if (n === 0) {
        sa && !e && su(l, u, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, f && !xd(a)) {
          n = Mc(l, u, !1), f = !1;
          continue;
        }
        if (n === 2) {
          if (f = u, l.errorRecoveryDisabledLanes & f)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            u = c;
            l: {
              var i = l;
              n = ee;
              var s = i.current.memoizedState.isDehydrated;
              if (s && (ha(i, c).flags |= 256), c = Mc(
                i,
                c,
                !1
              ), c !== 2) {
                if (gc && !s) {
                  i.errorRecoveryDisabledLanes |= f, Yu |= f, n = 4;
                  break l;
                }
                f = kl, kl = n, f !== null && (kl === null ? kl = f : kl.push.apply(
                  kl,
                  f
                ));
              }
              n = c;
            }
            if (f = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          ha(l, 0), su(l, u, 0, !0);
          break;
        }
        l: {
          switch (e = l, f = n, f) {
            case 0:
            case 1:
              throw Error(g(345));
            case 4:
              if ((u & 4194048) !== u) break;
            case 6:
              su(
                e,
                u,
                St,
                !nu
              );
              break l;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(g(329));
          }
          if ((u & 62914560) === u && (n = Tc + 300 - _t(), 10 < n)) {
            if (su(
              e,
              u,
              St,
              !nu
            ), _e(e, 0, !0) !== 0) break l;
            e.timeoutHandle = Uv(
              lv.bind(
                null,
                e,
                a,
                kl,
                on,
                bc,
                u,
                St,
                Yu,
                va,
                nu,
                f,
                2,
                -0,
                0
              ),
              n
            );
            break l;
          }
          lv(
            e,
            a,
            kl,
            on,
            bc,
            u,
            St,
            Yu,
            va,
            nu,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Rt(l);
  }
  function lv(l, u, a, e, n, f, c, i, s, o, b, E, m, r) {
    if (l.timeoutHandle = -1, E = u.subtreeFlags, (E & 8192 || (E & 16785408) === 16785408) && (de = { stylesheets: null, count: 0, unsuspend: S1 }, ws(u), E = T1(), E !== null)) {
      l.cancelPendingCommit = E(
        cv.bind(
          null,
          l,
          u,
          f,
          a,
          e,
          n,
          c,
          i,
          s,
          b,
          1,
          m,
          r
        )
      ), su(l, f, c, !o);
      return;
    }
    cv(
      l,
      u,
      f,
      a,
      e,
      n,
      c,
      i,
      s
    );
  }
  function xd(l) {
    for (var u = l; ; ) {
      var a = u.tag;
      if ((a === 0 || a === 11 || a === 15) && u.flags & 16384 && (a = u.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var n = a[e], f = n.getSnapshot;
          n = n.value;
          try {
            if (!ut(f(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = u.child, u.subtreeFlags & 16384 && a !== null)
        a.return = u, u = a;
      else {
        if (u === l) break;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === l) return !0;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }
    return !0;
  }
  function su(l, u, a, e) {
    u &= ~Sc, u &= ~Yu, l.suspendedLanes |= u, l.pingedLanes &= ~u, e && (l.warmLanes |= u), e = l.expirationTimes;
    for (var n = u; 0 < n; ) {
      var f = 31 - tt(n), c = 1 << f;
      e[f] = -1, n &= ~c;
    }
    a !== 0 && yi(l, a, u);
  }
  function mn() {
    return (I & 6) === 0 ? (fe(0), !1) : !0;
  }
  function _c() {
    if (V !== null) {
      if (P === 0)
        var l = V.return;
      else
        l = V, pt = Du = null, Zf(l), na = null, ka = 0, l = V;
      for (; l !== null; )
        Ys(l.alternate, l), l = l.return;
      V = null;
    }
  }
  function ha(l, u) {
    var a = l.timeoutHandle;
    a !== -1 && (l.timeoutHandle = -1, t1(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), _c(), yl = l, V = a = qt(l.current, null), J = u, P = 0, ft = null, nu = !1, sa = Aa(l, u), gc = !1, va = St = Sc = Yu = fu = bl = 0, kl = ee = null, bc = !1, (u & 8) !== 0 && (u |= u & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= u; 0 < e; ) {
        var n = 31 - tt(e), f = 1 << n;
        u |= l[n], e &= ~f;
      }
    return Vt = u, Ge(), a;
  }
  function tv(l, u) {
    j = null, S.H = tn, u === Za || u === Ke ? (u = S0(), P = 3) : u === m0 ? (u = S0(), P = 4) : P = u === bs ? 8 : u !== null && typeof u == "object" && typeof u.then == "function" ? 6 : 1, ft = u, V === null && (bl = 1, fn(
      l,
      ht(u, l.current)
    ));
  }
  function uv() {
    var l = S.H;
    return S.H = tn, l === null ? tn : l;
  }
  function av() {
    var l = S.A;
    return S.A = pd, l;
  }
  function Oc() {
    bl = 4, nu || (J & 4194048) !== J && gt.current !== null || (sa = !0), (fu & 134217727) === 0 && (Yu & 134217727) === 0 || yl === null || su(
      yl,
      J,
      St,
      !1
    );
  }
  function Mc(l, u, a) {
    var e = I;
    I |= 2;
    var n = uv(), f = av();
    (yl !== l || J !== u) && (on = null, ha(l, u)), u = !1;
    var c = bl;
    l: do
      try {
        if (P !== 0 && V !== null) {
          var i = V, s = ft;
          switch (P) {
            case 8:
              _c(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              gt.current === null && (u = !0);
              var o = P;
              if (P = 0, ft = null, oa(l, i, s, o), a && sa) {
                c = 0;
                break l;
              }
              break;
            default:
              o = P, P = 0, ft = null, oa(l, i, s, o);
          }
        }
        Xd(), c = bl;
        break;
      } catch (b) {
        tv(l, b);
      }
    while (!0);
    return u && l.shellSuspendCounter++, pt = Du = null, I = e, S.H = n, S.A = f, V === null && (yl = null, J = 0, Ge()), c;
  }
  function Xd() {
    for (; V !== null; ) ev(V);
  }
  function Qd(l, u) {
    var a = I;
    I |= 2;
    var e = uv(), n = av();
    yl !== l || J !== u ? (on = null, hn = _t() + 500, ha(l, u)) : sa = Aa(
      l,
      u
    );
    l: do
      try {
        if (P !== 0 && V !== null) {
          u = V;
          var f = ft;
          t: switch (P) {
            case 1:
              P = 0, ft = null, oa(l, u, f, 1);
              break;
            case 2:
            case 9:
              if (r0(f)) {
                P = 0, ft = null, nv(u);
                break;
              }
              u = function() {
                P !== 2 && P !== 9 || yl !== l || (P = 7), Rt(l);
              }, f.then(u, u);
              break l;
            case 3:
              P = 7;
              break l;
            case 4:
              P = 5;
              break l;
            case 7:
              r0(f) ? (P = 0, ft = null, nv(u)) : (P = 0, ft = null, oa(l, u, f, 7));
              break;
            case 5:
              var c = null;
              switch (V.tag) {
                case 26:
                  c = V.memoizedState;
                case 5:
                case 27:
                  var i = V;
                  if (!c || jv(c)) {
                    P = 0, ft = null;
                    var s = i.sibling;
                    if (s !== null) V = s;
                    else {
                      var o = i.return;
                      o !== null ? (V = o, rn(o)) : V = null;
                    }
                    break t;
                  }
              }
              P = 0, ft = null, oa(l, u, f, 5);
              break;
            case 6:
              P = 0, ft = null, oa(l, u, f, 6);
              break;
            case 8:
              _c(), bl = 6;
              break l;
            default:
              throw Error(g(462));
          }
        }
        jd();
        break;
      } catch (b) {
        tv(l, b);
      }
    while (!0);
    return pt = Du = null, S.H = e, S.A = n, I = a, V !== null ? 0 : (yl = null, J = 0, Ge(), bl);
  }
  function jd() {
    for (; V !== null && !iy(); )
      ev(V);
  }
  function ev(l) {
    var u = Hs(l.alternate, l, Vt);
    l.memoizedProps = l.pendingProps, u === null ? rn(l) : V = u;
  }
  function nv(l) {
    var u = l, a = u.alternate;
    switch (u.tag) {
      case 15:
      case 0:
        u = Os(
          a,
          u,
          u.pendingProps,
          u.type,
          void 0,
          J
        );
        break;
      case 11:
        u = Os(
          a,
          u,
          u.pendingProps,
          u.type.render,
          u.ref,
          J
        );
        break;
      case 5:
        Zf(u);
      default:
        Ys(a, u), u = V = f0(u, Vt), u = Hs(a, u, Vt);
    }
    l.memoizedProps = l.pendingProps, u === null ? rn(l) : V = u;
  }
  function oa(l, u, a, e) {
    pt = Du = null, Zf(u), na = null, ka = 0;
    var n = u.return;
    try {
      if (Rd(
        l,
        n,
        u,
        a,
        J
      )) {
        bl = 1, fn(
          l,
          ht(a, l.current)
        ), V = null;
        return;
      }
    } catch (f) {
      if (n !== null) throw V = n, f;
      bl = 1, fn(
        l,
        ht(a, l.current)
      ), V = null;
      return;
    }
    u.flags & 32768 ? ($ || e === 1 ? l = !0 : sa || (J & 536870912) !== 0 ? l = !1 : (nu = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = gt.current, e !== null && e.tag === 13 && (e.flags |= 16384))), fv(u, l)) : rn(u);
  }
  function rn(l) {
    var u = l;
    do {
      if ((u.flags & 32768) !== 0) {
        fv(
          u,
          nu
        );
        return;
      }
      l = u.return;
      var a = Hd(
        u.alternate,
        u,
        Vt
      );
      if (a !== null) {
        V = a;
        return;
      }
      if (u = u.sibling, u !== null) {
        V = u;
        return;
      }
      V = u = l;
    } while (u !== null);
    bl === 0 && (bl = 5);
  }
  function fv(l, u) {
    do {
      var a = qd(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, V = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !u && (l = l.sibling, l !== null)) {
        V = l;
        return;
      }
      V = l = a;
    } while (l !== null);
    bl = 6, V = null;
  }
  function cv(l, u, a, e, n, f, c, i, s) {
    l.cancelPendingCommit = null;
    do
      gn();
    while (Gl !== 0);
    if ((I & 6) !== 0) throw Error(g(327));
    if (u !== null) {
      if (u === l.current) throw Error(g(177));
      if (f = u.lanes | u.childLanes, f |= rf, Sy(
        l,
        a,
        f,
        c,
        i,
        s
      ), l === yl && (V = yl = null, J = 0), ya = u, iu = l, da = a, Ec = f, Ac = n, Fs = e, (u.subtreeFlags & 10256) !== 0 || (u.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Ld(Ee, function() {
        return dv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), e = (u.flags & 13878) !== 0, (u.subtreeFlags & 13878) !== 0 || e) {
        e = S.T, S.T = null, n = O.p, O.p = 2, c = I, I |= 4;
        try {
          Yd(l, u, a);
        } finally {
          I = c, O.p = n, S.T = e;
        }
      }
      Gl = 1, iv(), sv(), vv();
    }
  }
  function iv() {
    if (Gl === 1) {
      Gl = 0;
      var l = iu, u = ya, a = (u.flags & 13878) !== 0;
      if ((u.subtreeFlags & 13878) !== 0 || a) {
        a = S.T, S.T = null;
        var e = O.p;
        O.p = 2;
        var n = I;
        I |= 4;
        try {
          Ls(u, l);
          var f = Xc, c = ki(l.containerInfo), i = f.focusedElem, s = f.selectionRange;
          if (c !== i && i && i.ownerDocument && $i(
            i.ownerDocument.documentElement,
            i
          )) {
            if (s !== null && yf(i)) {
              var o = s.start, b = s.end;
              if (b === void 0 && (b = o), "selectionStart" in i)
                i.selectionStart = o, i.selectionEnd = Math.min(
                  b,
                  i.value.length
                );
              else {
                var E = i.ownerDocument || document, m = E && E.defaultView || window;
                if (m.getSelection) {
                  var r = m.getSelection(), G = i.textContent.length, B = Math.min(s.start, G), fl = s.end === void 0 ? B : Math.min(s.end, G);
                  !r.extend && B > fl && (c = fl, fl = B, B = c);
                  var d = Wi(
                    i,
                    B
                  ), y = Wi(
                    i,
                    fl
                  );
                  if (d && y && (r.rangeCount !== 1 || r.anchorNode !== d.node || r.anchorOffset !== d.offset || r.focusNode !== y.node || r.focusOffset !== y.offset)) {
                    var h = E.createRange();
                    h.setStart(d.node, d.offset), r.removeAllRanges(), B > fl ? (r.addRange(h), r.extend(y.node, y.offset)) : (h.setEnd(y.node, y.offset), r.addRange(h));
                  }
                }
              }
            }
            for (E = [], r = i; r = r.parentNode; )
              r.nodeType === 1 && E.push({
                element: r,
                left: r.scrollLeft,
                top: r.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < E.length; i++) {
              var T = E[i];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          Rn = !!xc, Xc = xc = null;
        } finally {
          I = n, O.p = e, S.T = a;
        }
      }
      l.current = u, Gl = 2;
    }
  }
  function sv() {
    if (Gl === 2) {
      Gl = 0;
      var l = iu, u = ya, a = (u.flags & 8772) !== 0;
      if ((u.subtreeFlags & 8772) !== 0 || a) {
        a = S.T, S.T = null;
        var e = O.p;
        O.p = 2;
        var n = I;
        I |= 4;
        try {
          js(l, u.alternate, u);
        } finally {
          I = n, O.p = e, S.T = a;
        }
      }
      Gl = 3;
    }
  }
  function vv() {
    if (Gl === 4 || Gl === 3) {
      Gl = 0, sy();
      var l = iu, u = ya, a = da, e = Fs;
      (u.subtreeFlags & 10256) !== 0 || (u.flags & 10256) !== 0 ? Gl = 5 : (Gl = 0, ya = iu = null, yv(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (cu = null), Vn(a), u = u.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            Ea,
            u,
            void 0,
            (u.current.flags & 128) === 128
          );
        } catch {
        }
      if (e !== null) {
        u = S.T, n = O.p, O.p = 2, S.T = null;
        try {
          for (var f = l.onRecoverableError, c = 0; c < e.length; c++) {
            var i = e[c];
            f(i.value, {
              componentStack: i.stack
            });
          }
        } finally {
          S.T = u, O.p = n;
        }
      }
      (da & 3) !== 0 && gn(), Rt(l), n = l.pendingLanes, (a & 4194090) !== 0 && (n & 42) !== 0 ? l === zc ? ne++ : (ne = 0, zc = l) : ne = 0, fe(0);
    }
  }
  function yv(l, u) {
    (l.pooledCacheLanes &= u) === 0 && (u = l.pooledCache, u != null && (l.pooledCache = null, Qa(u)));
  }
  function gn(l) {
    return iv(), sv(), vv(), dv();
  }
  function dv() {
    if (Gl !== 5) return !1;
    var l = iu, u = Ec;
    Ec = 0;
    var a = Vn(da), e = S.T, n = O.p;
    try {
      O.p = 32 > a ? 32 : a, S.T = null, a = Ac, Ac = null;
      var f = iu, c = da;
      if (Gl = 0, ya = iu = null, da = 0, (I & 6) !== 0) throw Error(g(331));
      var i = I;
      if (I |= 4, $s(f.current), Js(
        f,
        f.current,
        c,
        a
      ), I = i, fe(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(Ea, f);
        } catch {
        }
      return !0;
    } finally {
      O.p = n, S.T = e, yv(l, u);
    }
  }
  function hv(l, u, a) {
    u = ht(a, u), u = tc(l.stateNode, u, 2), l = It(l, u, 2), l !== null && (za(l, 2), Rt(l));
  }
  function il(l, u, a) {
    if (l.tag === 3)
      hv(l, l, a);
    else
      for (; u !== null; ) {
        if (u.tag === 3) {
          hv(
            u,
            l,
            a
          );
          break;
        } else if (u.tag === 1) {
          var e = u.stateNode;
          if (typeof u.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (cu === null || !cu.has(e))) {
            l = ht(a, l), a = gs(2), e = It(u, a, 2), e !== null && (Ss(
              a,
              e,
              u,
              l
            ), za(e, 2), Rt(e));
            break;
          }
        }
        u = u.return;
      }
  }
  function Dc(l, u, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new Gd();
      var n = /* @__PURE__ */ new Set();
      e.set(u, n);
    } else
      n = e.get(u), n === void 0 && (n = /* @__PURE__ */ new Set(), e.set(u, n));
    n.has(a) || (gc = !0, n.add(a), l = Zd.bind(null, l, u, a), u.then(l, l));
  }
  function Zd(l, u, a) {
    var e = l.pingCache;
    e !== null && e.delete(u), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, yl === l && (J & a) === a && (bl === 4 || bl === 3 && (J & 62914560) === J && 300 > _t() - Tc ? (I & 2) === 0 && ha(l, 0) : Sc |= a, va === J && (va = 0)), Rt(l);
  }
  function ov(l, u) {
    u === 0 && (u = vi()), l = $u(l, u), l !== null && (za(l, u), Rt(l));
  }
  function Cd(l) {
    var u = l.memoizedState, a = 0;
    u !== null && (a = u.retryLane), ov(l, a);
  }
  function Vd(l, u) {
    var a = 0;
    switch (l.tag) {
      case 13:
        var e = l.stateNode, n = l.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(g(314));
    }
    e !== null && e.delete(u), ov(l, a);
  }
  function Ld(l, u) {
    return Qn(l, u);
  }
  var Sn = null, ma = null, Uc = !1, bn = !1, Rc = !1, Bu = 0;
  function Rt(l) {
    l !== ma && l.next === null && (ma === null ? Sn = ma = l : ma = ma.next = l), bn = !0, Uc || (Uc = !0, Jd());
  }
  function fe(l, u) {
    if (!Rc && bn) {
      Rc = !0;
      do
        for (var a = !1, e = Sn; e !== null; ) {
          if (l !== 0) {
            var n = e.pendingLanes;
            if (n === 0) var f = 0;
            else {
              var c = e.suspendedLanes, i = e.pingedLanes;
              f = (1 << 31 - tt(42 | l) + 1) - 1, f &= n & ~(c & ~i), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (a = !0, Sv(e, f));
          } else
            f = J, f = _e(
              e,
              e === yl ? f : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (f & 3) === 0 || Aa(e, f) || (a = !0, Sv(e, f));
          e = e.next;
        }
      while (a);
      Rc = !1;
    }
  }
  function Kd() {
    mv();
  }
  function mv() {
    bn = Uc = !1;
    var l = 0;
    Bu !== 0 && (l1() && (l = Bu), Bu = 0);
    for (var u = _t(), a = null, e = Sn; e !== null; ) {
      var n = e.next, f = rv(e, u);
      f === 0 ? (e.next = null, a === null ? Sn = n : a.next = n, n === null && (ma = a)) : (a = e, (l !== 0 || (f & 3) !== 0) && (bn = !0)), e = n;
    }
    fe(l);
  }
  function rv(l, u) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, n = l.expirationTimes, f = l.pendingLanes & -62914561; 0 < f; ) {
      var c = 31 - tt(f), i = 1 << c, s = n[c];
      s === -1 ? ((i & a) === 0 || (i & e) !== 0) && (n[c] = gy(i, u)) : s <= u && (l.expiredLanes |= i), f &= ~i;
    }
    if (u = yl, a = J, a = _e(
      l,
      l === u ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === u && (P === 2 || P === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && jn(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || Aa(l, a)) {
      if (u = a & -a, u === l.callbackPriority) return u;
      switch (e !== null && jn(e), Vn(a)) {
        case 2:
        case 8:
          a = ci;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = ii;
          break;
        default:
          a = Ee;
      }
      return e = gv.bind(null, l), a = Qn(a, e), l.callbackPriority = u, l.callbackNode = a, u;
    }
    return e !== null && e !== null && jn(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function gv(l, u) {
    if (Gl !== 0 && Gl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (gn() && l.callbackNode !== a)
      return null;
    var e = J;
    return e = _e(
      l,
      l === yl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (Ps(l, e, u), rv(l, _t()), l.callbackNode != null && l.callbackNode === a ? gv.bind(null, l) : null);
  }
  function Sv(l, u) {
    if (gn()) return null;
    Ps(l, u, !0);
  }
  function Jd() {
    u1(function() {
      (I & 6) !== 0 ? Qn(
        fi,
        Kd
      ) : mv();
    });
  }
  function Nc() {
    return Bu === 0 && (Bu = si()), Bu;
  }
  function bv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Re("" + l);
  }
  function Tv(l, u) {
    var a = u.ownerDocument.createElement("input");
    return a.name = u.name, a.value = u.value, l.id && a.setAttribute("form", l.id), u.parentNode.insertBefore(a, u), l = new FormData(l), a.parentNode.removeChild(a), l;
  }
  function wd(l, u, a, e, n) {
    if (u === "submit" && a && a.stateNode === n) {
      var f = bv(
        (n[Jl] || null).action
      ), c = e.submitter;
      c && (u = (u = c[Jl] || null) ? bv(u.formAction) : c.getAttribute("formAction"), u !== null && (f = u, c = null));
      var i = new Ye(
        "action",
        "action",
        null,
        e,
        n
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (Bu !== 0) {
                  var s = c ? Tv(n, c) : new FormData(n);
                  kf(
                    a,
                    {
                      pending: !0,
                      data: s,
                      method: n.method,
                      action: f
                    },
                    null,
                    s
                  );
                }
              } else
                typeof f == "function" && (i.preventDefault(), s = c ? Tv(n, c) : new FormData(n), kf(
                  a,
                  {
                    pending: !0,
                    data: s,
                    method: n.method,
                    action: f
                  },
                  f,
                  s
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var Hc = 0; Hc < mf.length; Hc++) {
    var qc = mf[Hc], Wd = qc.toLowerCase(), $d = qc[0].toUpperCase() + qc.slice(1);
    Tt(
      Wd,
      "on" + $d
    );
  }
  Tt(Pi, "onAnimationEnd"), Tt(l0, "onAnimationIteration"), Tt(t0, "onAnimationStart"), Tt("dblclick", "onDoubleClick"), Tt("focusin", "onFocus"), Tt("focusout", "onBlur"), Tt(dd, "onTransitionRun"), Tt(hd, "onTransitionStart"), Tt(od, "onTransitionCancel"), Tt(u0, "onTransitionEnd"), Qu("onMouseEnter", ["mouseout", "mouseover"]), Qu("onMouseLeave", ["mouseout", "mouseover"]), Qu("onPointerEnter", ["pointerout", "pointerover"]), Qu("onPointerLeave", ["pointerout", "pointerover"]), Su(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Su(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Su("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Su(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Su(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Su(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ce = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), kd = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ce)
  );
  function Ev(l, u) {
    u = (u & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], n = e.event;
      e = e.listeners;
      l: {
        var f = void 0;
        if (u)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c], s = i.instance, o = i.currentTarget;
            if (i = i.listener, s !== f && n.isPropagationStopped())
              break l;
            f = i, n.currentTarget = o;
            try {
              f(n);
            } catch (b) {
              nn(b);
            }
            n.currentTarget = null, f = s;
          }
        else
          for (c = 0; c < e.length; c++) {
            if (i = e[c], s = i.instance, o = i.currentTarget, i = i.listener, s !== f && n.isPropagationStopped())
              break l;
            f = i, n.currentTarget = o;
            try {
              f(n);
            } catch (b) {
              nn(b);
            }
            n.currentTarget = null, f = s;
          }
      }
    }
  }
  function L(l, u) {
    var a = u[Ln];
    a === void 0 && (a = u[Ln] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (Av(u, l, 2, !1), a.add(e));
  }
  function Yc(l, u, a) {
    var e = 0;
    u && (e |= 4), Av(
      a,
      l,
      e,
      u
    );
  }
  var Tn = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(l) {
    if (!l[Tn]) {
      l[Tn] = !0, mi.forEach(function(a) {
        a !== "selectionchange" && (kd.has(a) || Yc(a, !1, l), Yc(a, !0, l));
      });
      var u = l.nodeType === 9 ? l : l.ownerDocument;
      u === null || u[Tn] || (u[Tn] = !0, Yc("selectionchange", !1, u));
    }
  }
  function Av(l, u, a, e) {
    switch (Jv(u)) {
      case 2:
        var n = z1;
        break;
      case 8:
        n = _1;
        break;
      default:
        n = Wc;
    }
    a = n.bind(
      null,
      u,
      a,
      l
    ), n = void 0, !tf || u !== "touchstart" && u !== "touchmove" && u !== "wheel" || (n = !0), e ? n !== void 0 ? l.addEventListener(u, a, {
      capture: !0,
      passive: n
    }) : l.addEventListener(u, a, !0) : n !== void 0 ? l.addEventListener(u, a, {
      passive: n
    }) : l.addEventListener(u, a, !1);
  }
  function pc(l, u, a, e, n) {
    var f = e;
    if ((u & 1) === 0 && (u & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var i = e.stateNode.containerInfo;
          if (i === n) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var s = c.tag;
              if ((s === 3 || s === 4) && c.stateNode.containerInfo === n)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (c = Gu(i), c === null) return;
            if (s = c.tag, s === 5 || s === 6 || s === 26 || s === 27) {
              e = f = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    Ri(function() {
      var o = f, b = Pn(a), E = [];
      l: {
        var m = a0.get(l);
        if (m !== void 0) {
          var r = Ye, G = l;
          switch (l) {
            case "keypress":
              if (He(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = Ly;
              break;
            case "focusin":
              G = "focus", r = nf;
              break;
            case "focusout":
              G = "blur", r = nf;
              break;
            case "beforeblur":
            case "afterblur":
              r = nf;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = qy;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = wy;
              break;
            case Pi:
            case l0:
            case t0:
              r = py;
              break;
            case u0:
              r = $y;
              break;
            case "scroll":
            case "scrollend":
              r = Ny;
              break;
            case "wheel":
              r = Fy;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = xy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Bi;
              break;
            case "toggle":
            case "beforetoggle":
              r = Py;
          }
          var B = (u & 4) !== 0, fl = !B && (l === "scroll" || l === "scrollend"), d = B ? m !== null ? m + "Capture" : null : m;
          B = [];
          for (var y = o, h; y !== null; ) {
            var T = y;
            if (h = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || h === null || d === null || (T = Ma(y, d), T != null && B.push(
              ie(y, T, h)
            )), fl) break;
            y = y.return;
          }
          0 < B.length && (m = new r(
            m,
            G,
            null,
            a,
            b
          ), E.push({ event: m, listeners: B }));
        }
      }
      if ((u & 7) === 0) {
        l: {
          if (m = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", m && a !== In && (G = a.relatedTarget || a.fromElement) && (Gu(G) || G[pu]))
            break l;
          if ((r || m) && (m = b.window === b ? b : (m = b.ownerDocument) ? m.defaultView || m.parentWindow : window, r ? (G = a.relatedTarget || a.toElement, r = o, G = G ? Gu(G) : null, G !== null && (fl = cl(G), B = G.tag, G !== fl || B !== 5 && B !== 27 && B !== 6) && (G = null)) : (r = null, G = o), r !== G)) {
            if (B = qi, T = "onMouseLeave", d = "onMouseEnter", y = "mouse", (l === "pointerout" || l === "pointerover") && (B = Bi, T = "onPointerLeave", d = "onPointerEnter", y = "pointer"), fl = r == null ? m : Oa(r), h = G == null ? m : Oa(G), m = new B(
              T,
              y + "leave",
              r,
              a,
              b
            ), m.target = fl, m.relatedTarget = h, T = null, Gu(b) === o && (B = new B(
              d,
              y + "enter",
              G,
              a,
              b
            ), B.target = h, B.relatedTarget = fl, T = B), fl = T, r && G)
              t: {
                for (B = r, d = G, y = 0, h = B; h; h = ra(h))
                  y++;
                for (h = 0, T = d; T; T = ra(T))
                  h++;
                for (; 0 < y - h; )
                  B = ra(B), y--;
                for (; 0 < h - y; )
                  d = ra(d), h--;
                for (; y--; ) {
                  if (B === d || d !== null && B === d.alternate)
                    break t;
                  B = ra(B), d = ra(d);
                }
                B = null;
              }
            else B = null;
            r !== null && zv(
              E,
              m,
              r,
              B,
              !1
            ), G !== null && fl !== null && zv(
              E,
              fl,
              G,
              B,
              !0
            );
          }
        }
        l: {
          if (m = o ? Oa(o) : window, r = m.nodeName && m.nodeName.toLowerCase(), r === "select" || r === "input" && m.type === "file")
            var U = Ci;
          else if (ji(m))
            if (Vi)
              U = sd;
            else {
              U = cd;
              var C = fd;
            }
          else
            r = m.nodeName, !r || r.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? o && Fn(o.elementType) && (U = Ci) : U = id;
          if (U && (U = U(l, o))) {
            Zi(
              E,
              U,
              a,
              b
            );
            break l;
          }
          C && C(l, m, o), l === "focusout" && o && m.type === "number" && o.memoizedProps.value != null && kn(m, "number", m.value);
        }
        switch (C = o ? Oa(o) : window, l) {
          case "focusin":
            (ji(C) || C.contentEditable === "true") && (Ju = C, df = o, Ba = null);
            break;
          case "focusout":
            Ba = df = Ju = null;
            break;
          case "mousedown":
            hf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hf = !1, Fi(E, a, b);
            break;
          case "selectionchange":
            if (yd) break;
          case "keydown":
          case "keyup":
            Fi(E, a, b);
        }
        var N;
        if (cf)
          l: {
            switch (l) {
              case "compositionstart":
                var p = "onCompositionStart";
                break l;
              case "compositionend":
                p = "onCompositionEnd";
                break l;
              case "compositionupdate":
                p = "onCompositionUpdate";
                break l;
            }
            p = void 0;
          }
        else
          Ku ? Xi(l, a) && (p = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (p = "onCompositionStart");
        p && (pi && a.locale !== "ko" && (Ku || p !== "onCompositionStart" ? p === "onCompositionEnd" && Ku && (N = Ni()) : (Wt = b, uf = "value" in Wt ? Wt.value : Wt.textContent, Ku = !0)), C = En(o, p), 0 < C.length && (p = new Yi(
          p,
          l,
          null,
          a,
          b
        ), E.push({ event: p, listeners: C }), N ? p.data = N : (N = Qi(a), N !== null && (p.data = N)))), (N = td ? ud(l, a) : ad(l, a)) && (p = En(o, "onBeforeInput"), 0 < p.length && (C = new Yi(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          b
        ), E.push({
          event: C,
          listeners: p
        }), C.data = N)), wd(
          E,
          l,
          o,
          a,
          b
        );
      }
      Ev(E, u);
    });
  }
  function ie(l, u, a) {
    return {
      instance: l,
      listener: u,
      currentTarget: a
    };
  }
  function En(l, u) {
    for (var a = u + "Capture", e = []; l !== null; ) {
      var n = l, f = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || f === null || (n = Ma(l, a), n != null && e.unshift(
        ie(l, n, f)
      ), n = Ma(l, u), n != null && e.push(
        ie(l, n, f)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function ra(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function zv(l, u, a, e, n) {
    for (var f = u._reactName, c = []; a !== null && a !== e; ) {
      var i = a, s = i.alternate, o = i.stateNode;
      if (i = i.tag, s !== null && s === e) break;
      i !== 5 && i !== 26 && i !== 27 || o === null || (s = o, n ? (o = Ma(a, f), o != null && c.unshift(
        ie(a, o, s)
      )) : n || (o = Ma(a, f), o != null && c.push(
        ie(a, o, s)
      ))), a = a.return;
    }
    c.length !== 0 && l.push({ event: u, listeners: c });
  }
  var Fd = /\r\n?/g, Id = /\u0000|\uFFFD/g;
  function _v(l) {
    return (typeof l == "string" ? l : "" + l).replace(Fd, `
`).replace(Id, "");
  }
  function Ov(l, u) {
    return u = _v(u), _v(l) === u;
  }
  function An() {
  }
  function nl(l, u, a, e, n, f) {
    switch (a) {
      case "children":
        typeof e == "string" ? u === "body" || u === "textarea" && e === "" || Cu(l, e) : (typeof e == "number" || typeof e == "bigint") && u !== "body" && Cu(l, "" + e);
        break;
      case "className":
        Me(l, "class", e);
        break;
      case "tabIndex":
        Me(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Me(l, a, e);
        break;
      case "style":
        Di(l, e, f);
        break;
      case "data":
        if (u !== "object") {
          Me(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (u !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Re("" + e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (a === "formAction" ? (u !== "input" && nl(l, u, "name", n.name, n, null), nl(
            l,
            u,
            "formEncType",
            n.formEncType,
            n,
            null
          ), nl(
            l,
            u,
            "formMethod",
            n.formMethod,
            n,
            null
          ), nl(
            l,
            u,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (nl(l, u, "encType", n.encType, n, null), nl(l, u, "method", n.method, n, null), nl(l, u, "target", n.target, n, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Re("" + e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = An);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(g(61));
          if (a = e.__html, a != null) {
            if (n.children != null) throw Error(g(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Re("" + e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "" + e) : l.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        L("beforetoggle", l), L("toggle", l), Oe(l, "popover", e);
        break;
      case "xlinkActuate":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        Oe(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = Uy.get(a) || a, Oe(l, a, e));
    }
  }
  function Gc(l, u, a, e, n, f) {
    switch (a) {
      case "style":
        Di(l, e, f);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(g(61));
          if (a = e.__html, a != null) {
            if (n.children != null) throw Error(g(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string" ? Cu(l, e) : (typeof e == "number" || typeof e == "bigint") && Cu(l, "" + e);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = An);
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
        if (!ri.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (n = a.endsWith("Capture"), u = a.slice(2, n ? a.length - 7 : void 0), f = l[Jl] || null, f = f != null ? f[a] : null, typeof f == "function" && l.removeEventListener(u, f, n), typeof e == "function")) {
              typeof f != "function" && f !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(u, e, n);
              break l;
            }
            a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : Oe(l, a, e);
          }
    }
  }
  function xl(l, u, a) {
    switch (u) {
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
        L("error", l), L("load", l);
        var e = !1, n = !1, f;
        for (f in a)
          if (a.hasOwnProperty(f)) {
            var c = a[f];
            if (c != null)
              switch (f) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(g(137, u));
                default:
                  nl(l, u, f, c, a, null);
              }
          }
        n && nl(l, u, "srcSet", a.srcSet, a, null), e && nl(l, u, "src", a.src, a, null);
        return;
      case "input":
        L("invalid", l);
        var i = f = c = n = null, s = null, o = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var b = a[e];
            if (b != null)
              switch (e) {
                case "name":
                  n = b;
                  break;
                case "type":
                  c = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  o = b;
                  break;
                case "value":
                  f = b;
                  break;
                case "defaultValue":
                  i = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(g(137, u));
                  break;
                default:
                  nl(l, u, e, b, a, null);
              }
          }
        zi(
          l,
          f,
          i,
          s,
          o,
          c,
          n,
          !1
        ), De(l);
        return;
      case "select":
        L("invalid", l), e = c = f = null;
        for (n in a)
          if (a.hasOwnProperty(n) && (i = a[n], i != null))
            switch (n) {
              case "value":
                f = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                e = i;
              default:
                nl(l, u, n, i, a, null);
            }
        u = f, a = c, l.multiple = !!e, u != null ? Zu(l, !!e, u, !1) : a != null && Zu(l, !!e, a, !0);
        return;
      case "textarea":
        L("invalid", l), f = n = e = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (i = a[c], i != null))
            switch (c) {
              case "value":
                e = i;
                break;
              case "defaultValue":
                n = i;
                break;
              case "children":
                f = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(g(91));
                break;
              default:
                nl(l, u, c, i, a, null);
            }
        Oi(l, e, n, f), De(l);
        return;
      case "option":
        for (s in a)
          if (a.hasOwnProperty(s) && (e = a[s], e != null))
            switch (s) {
              case "selected":
                l.selected = e && typeof e != "function" && typeof e != "symbol";
                break;
              default:
                nl(l, u, s, e, a, null);
            }
        return;
      case "dialog":
        L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l);
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < ce.length; e++)
          L(ce[e], l);
        break;
      case "image":
        L("error", l), L("load", l);
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        L("error", l), L("load", l);
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
        for (o in a)
          if (a.hasOwnProperty(o) && (e = a[o], e != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(137, u));
              default:
                nl(l, u, o, e, a, null);
            }
        return;
      default:
        if (Fn(u)) {
          for (b in a)
            a.hasOwnProperty(b) && (e = a[b], e !== void 0 && Gc(
              l,
              u,
              b,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && (e = a[i], e != null && nl(l, u, i, e, a, null));
  }
  function Pd(l, u, a, e) {
    switch (u) {
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
        var n = null, f = null, c = null, i = null, s = null, o = null, b = null;
        for (r in a) {
          var E = a[r];
          if (a.hasOwnProperty(r) && E != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = E;
              default:
                e.hasOwnProperty(r) || nl(l, u, r, null, e, E);
            }
        }
        for (var m in e) {
          var r = e[m];
          if (E = a[m], e.hasOwnProperty(m) && (r != null || E != null))
            switch (m) {
              case "type":
                f = r;
                break;
              case "name":
                n = r;
                break;
              case "checked":
                o = r;
                break;
              case "defaultChecked":
                b = r;
                break;
              case "value":
                c = r;
                break;
              case "defaultValue":
                i = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(g(137, u));
                break;
              default:
                r !== E && nl(
                  l,
                  u,
                  m,
                  r,
                  e,
                  E
                );
            }
        }
        $n(
          l,
          c,
          i,
          s,
          o,
          b,
          f,
          n
        );
        return;
      case "select":
        r = c = i = m = null;
        for (f in a)
          if (s = a[f], a.hasOwnProperty(f) && s != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                r = s;
              default:
                e.hasOwnProperty(f) || nl(
                  l,
                  u,
                  f,
                  null,
                  e,
                  s
                );
            }
        for (n in e)
          if (f = e[n], s = a[n], e.hasOwnProperty(n) && (f != null || s != null))
            switch (n) {
              case "value":
                m = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                c = f;
              default:
                f !== s && nl(
                  l,
                  u,
                  n,
                  f,
                  e,
                  s
                );
            }
        u = i, a = c, e = r, m != null ? Zu(l, !!a, m, !1) : !!e != !!a && (u != null ? Zu(l, !!a, u, !0) : Zu(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        r = m = null;
        for (i in a)
          if (n = a[i], a.hasOwnProperty(i) && n != null && !e.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, u, i, null, e, n);
            }
        for (c in e)
          if (n = e[c], f = a[c], e.hasOwnProperty(c) && (n != null || f != null))
            switch (c) {
              case "value":
                m = n;
                break;
              case "defaultValue":
                r = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(g(91));
                break;
              default:
                n !== f && nl(l, u, c, n, e, f);
            }
        _i(l, m, r);
        return;
      case "option":
        for (var G in a)
          if (m = a[G], a.hasOwnProperty(G) && m != null && !e.hasOwnProperty(G))
            switch (G) {
              case "selected":
                l.selected = !1;
                break;
              default:
                nl(
                  l,
                  u,
                  G,
                  null,
                  e,
                  m
                );
            }
        for (s in e)
          if (m = e[s], r = a[s], e.hasOwnProperty(s) && m !== r && (m != null || r != null))
            switch (s) {
              case "selected":
                l.selected = m && typeof m != "function" && typeof m != "symbol";
                break;
              default:
                nl(
                  l,
                  u,
                  s,
                  m,
                  e,
                  r
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
        for (var B in a)
          m = a[B], a.hasOwnProperty(B) && m != null && !e.hasOwnProperty(B) && nl(l, u, B, null, e, m);
        for (o in e)
          if (m = e[o], r = a[o], e.hasOwnProperty(o) && m !== r && (m != null || r != null))
            switch (o) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(g(137, u));
                break;
              default:
                nl(
                  l,
                  u,
                  o,
                  m,
                  e,
                  r
                );
            }
        return;
      default:
        if (Fn(u)) {
          for (var fl in a)
            m = a[fl], a.hasOwnProperty(fl) && m !== void 0 && !e.hasOwnProperty(fl) && Gc(
              l,
              u,
              fl,
              void 0,
              e,
              m
            );
          for (b in e)
            m = e[b], r = a[b], !e.hasOwnProperty(b) || m === r || m === void 0 && r === void 0 || Gc(
              l,
              u,
              b,
              m,
              e,
              r
            );
          return;
        }
    }
    for (var d in a)
      m = a[d], a.hasOwnProperty(d) && m != null && !e.hasOwnProperty(d) && nl(l, u, d, null, e, m);
    for (E in e)
      m = e[E], r = a[E], !e.hasOwnProperty(E) || m === r || m == null && r == null || nl(l, u, E, m, e, r);
  }
  var xc = null, Xc = null;
  function zn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Mv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Dv(l, u) {
    if (l === 0)
      switch (u) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && u === "foreignObject" ? 0 : l;
  }
  function Qc(l, u) {
    return l === "textarea" || l === "noscript" || typeof u.children == "string" || typeof u.children == "number" || typeof u.children == "bigint" || typeof u.dangerouslySetInnerHTML == "object" && u.dangerouslySetInnerHTML !== null && u.dangerouslySetInnerHTML.__html != null;
  }
  var jc = null;
  function l1() {
    var l = window.event;
    return l && l.type === "popstate" ? l === jc ? !1 : (jc = l, !0) : (jc = null, !1);
  }
  var Uv = typeof setTimeout == "function" ? setTimeout : void 0, t1 = typeof clearTimeout == "function" ? clearTimeout : void 0, Rv = typeof Promise == "function" ? Promise : void 0, u1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Rv < "u" ? function(l) {
    return Rv.resolve(null).then(l).catch(a1);
  } : Uv;
  function a1(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function vu(l) {
    return l === "head";
  }
  function Nv(l, u) {
    var a = u, e = 0, n = 0;
    do {
      var f = a.nextSibling;
      if (l.removeChild(a), f && f.nodeType === 8)
        if (a = f.data, a === "/$") {
          if (0 < e && 8 > e) {
            a = e;
            var c = l.ownerDocument;
            if (a & 1 && se(c.documentElement), a & 2 && se(c.body), a & 4)
              for (a = c.head, se(a), c = a.firstChild; c; ) {
                var i = c.nextSibling, s = c.nodeName;
                c[_a] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c), c = i;
              }
          }
          if (n === 0) {
            l.removeChild(f), ge(u);
            return;
          }
          n--;
        } else
          a === "$" || a === "$?" || a === "$!" ? n++ : e = a.charCodeAt(0) - 48;
      else e = 0;
      a = f;
    } while (a);
    ge(u);
  }
  function Zc(l) {
    var u = l.firstChild;
    for (u && u.nodeType === 10 && (u = u.nextSibling); u; ) {
      var a = u;
      switch (u = u.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Zc(a), Kn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function e1(l, u, a, e) {
    for (; l.nodeType === 1; ) {
      var n = a;
      if (l.nodeName.toLowerCase() !== u.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
        if (!l[_a])
          switch (u) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (f = l.getAttribute("rel"), f === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (f !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (f = l.getAttribute("src"), (f !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && f && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (u === "input" && l.type === "hidden") {
        var f = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === f)
          return l;
      } else return l;
      if (l = At(l.nextSibling), l === null) break;
    }
    return null;
  }
  function n1(l, u, a) {
    if (u === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = At(l.nextSibling), l === null)) return null;
    return l;
  }
  function Cc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function f1(l, u) {
    var a = l.ownerDocument;
    if (l.data !== "$?" || a.readyState === "complete")
      u();
    else {
      var e = function() {
        u(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
    }
  }
  function At(l) {
    for (; l != null; l = l.nextSibling) {
      var u = l.nodeType;
      if (u === 1 || u === 3) break;
      if (u === 8) {
        if (u = l.data, u === "$" || u === "$!" || u === "$?" || u === "F!" || u === "F")
          break;
        if (u === "/$") return null;
      }
    }
    return l;
  }
  var Vc = null;
  function Hv(l) {
    l = l.previousSibling;
    for (var u = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (u === 0) return l;
          u--;
        } else a === "/$" && u++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function qv(l, u, a) {
    switch (u = zn(a), l) {
      case "html":
        if (l = u.documentElement, !l) throw Error(g(452));
        return l;
      case "head":
        if (l = u.head, !l) throw Error(g(453));
        return l;
      case "body":
        if (l = u.body, !l) throw Error(g(454));
        return l;
      default:
        throw Error(g(451));
    }
  }
  function se(l) {
    for (var u = l.attributes; u.length; )
      l.removeAttributeNode(u[0]);
    Kn(l);
  }
  var bt = /* @__PURE__ */ new Map(), Yv = /* @__PURE__ */ new Set();
  function _n(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Lt = O.d;
  O.d = {
    f: c1,
    r: i1,
    D: s1,
    C: v1,
    L: y1,
    m: d1,
    X: o1,
    S: h1,
    M: m1
  };
  function c1() {
    var l = Lt.f(), u = mn();
    return l || u;
  }
  function i1(l) {
    var u = xu(l);
    u !== null && u.tag === 5 && u.type === "form" ? P0(u) : Lt.r(l);
  }
  var ga = typeof document > "u" ? null : document;
  function Bv(l, u, a) {
    var e = ga;
    if (e && typeof u == "string" && u) {
      var n = dt(u);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof a == "string" && (n += '[crossorigin="' + a + '"]'), Yv.has(n) || (Yv.add(n), l = { rel: l, crossOrigin: a, href: u }, e.querySelector(n) === null && (u = e.createElement("link"), xl(u, "link", l), Nl(u), e.head.appendChild(u)));
    }
  }
  function s1(l) {
    Lt.D(l), Bv("dns-prefetch", l, null);
  }
  function v1(l, u) {
    Lt.C(l, u), Bv("preconnect", l, u);
  }
  function y1(l, u, a) {
    Lt.L(l, u, a);
    var e = ga;
    if (e && l && u) {
      var n = 'link[rel="preload"][as="' + dt(u) + '"]';
      u === "image" && a && a.imageSrcSet ? (n += '[imagesrcset="' + dt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (n += '[imagesizes="' + dt(
        a.imageSizes
      ) + '"]')) : n += '[href="' + dt(l) + '"]';
      var f = n;
      switch (u) {
        case "style":
          f = Sa(l);
          break;
        case "script":
          f = ba(l);
      }
      bt.has(f) || (l = H(
        {
          rel: "preload",
          href: u === "image" && a && a.imageSrcSet ? void 0 : l,
          as: u
        },
        a
      ), bt.set(f, l), e.querySelector(n) !== null || u === "style" && e.querySelector(ve(f)) || u === "script" && e.querySelector(ye(f)) || (u = e.createElement("link"), xl(u, "link", l), Nl(u), e.head.appendChild(u)));
    }
  }
  function d1(l, u) {
    Lt.m(l, u);
    var a = ga;
    if (a && l) {
      var e = u && typeof u.as == "string" ? u.as : "script", n = 'link[rel="modulepreload"][as="' + dt(e) + '"][href="' + dt(l) + '"]', f = n;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ba(l);
      }
      if (!bt.has(f) && (l = H({ rel: "modulepreload", href: l }, u), bt.set(f, l), a.querySelector(n) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ye(f)))
              return;
        }
        e = a.createElement("link"), xl(e, "link", l), Nl(e), a.head.appendChild(e);
      }
    }
  }
  function h1(l, u, a) {
    Lt.S(l, u, a);
    var e = ga;
    if (e && l) {
      var n = Xu(e).hoistableStyles, f = Sa(l);
      u = u || "default";
      var c = n.get(f);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = e.querySelector(
          ve(f)
        ))
          i.loading = 5;
        else {
          l = H(
            { rel: "stylesheet", href: l, "data-precedence": u },
            a
          ), (a = bt.get(f)) && Lc(l, a);
          var s = c = e.createElement("link");
          Nl(s), xl(s, "link", l), s._p = new Promise(function(o, b) {
            s.onload = o, s.onerror = b;
          }), s.addEventListener("load", function() {
            i.loading |= 1;
          }), s.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, On(c, u, e);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: i
        }, n.set(f, c);
      }
    }
  }
  function o1(l, u) {
    Lt.X(l, u);
    var a = ga;
    if (a && l) {
      var e = Xu(a).hoistableScripts, n = ba(l), f = e.get(n);
      f || (f = a.querySelector(ye(n)), f || (l = H({ src: l, async: !0 }, u), (u = bt.get(n)) && Kc(l, u), f = a.createElement("script"), Nl(f), xl(f, "link", l), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, e.set(n, f));
    }
  }
  function m1(l, u) {
    Lt.M(l, u);
    var a = ga;
    if (a && l) {
      var e = Xu(a).hoistableScripts, n = ba(l), f = e.get(n);
      f || (f = a.querySelector(ye(n)), f || (l = H({ src: l, async: !0, type: "module" }, u), (u = bt.get(n)) && Kc(l, u), f = a.createElement("script"), Nl(f), xl(f, "link", l), a.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, e.set(n, f));
    }
  }
  function pv(l, u, a, e) {
    var n = (n = x.current) ? _n(n) : null;
    if (!n) throw Error(g(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (u = Sa(a.href), a = Xu(
          n
        ).hoistableStyles, e = a.get(u), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(u, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = Sa(a.href);
          var f = Xu(
            n
          ).hoistableStyles, c = f.get(l);
          if (c || (n = n.ownerDocument || n, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(l, c), (f = n.querySelector(
            ve(l)
          )) && !f._p && (c.instance = f, c.state.loading = 5), bt.has(l) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, bt.set(l, a), f || r1(
            n,
            l,
            a,
            c.state
          ))), u && e === null)
            throw Error(g(528, ""));
          return c;
        }
        if (u && e !== null)
          throw Error(g(529, ""));
        return null;
      case "script":
        return u = a.async, a = a.src, typeof a == "string" && u && typeof u != "function" && typeof u != "symbol" ? (u = ba(a), a = Xu(
          n
        ).hoistableScripts, e = a.get(u), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(u, e)), e) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(g(444, l));
    }
  }
  function Sa(l) {
    return 'href="' + dt(l) + '"';
  }
  function ve(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gv(l) {
    return H({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function r1(l, u, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + u + "]") ? e.loading = 1 : (u = l.createElement("link"), e.preload = u, u.addEventListener("load", function() {
      return e.loading |= 1;
    }), u.addEventListener("error", function() {
      return e.loading |= 2;
    }), xl(u, "link", a), Nl(u), l.head.appendChild(u));
  }
  function ba(l) {
    return '[src="' + dt(l) + '"]';
  }
  function ye(l) {
    return "script[async]" + l;
  }
  function xv(l, u, a) {
    if (u.count++, u.instance === null)
      switch (u.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + dt(a.href) + '"]'
          );
          if (e)
            return u.instance = e, Nl(e), e;
          var n = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Nl(e), xl(e, "style", n), On(e, a.precedence, l), u.instance = e;
        case "stylesheet":
          n = Sa(a.href);
          var f = l.querySelector(
            ve(n)
          );
          if (f)
            return u.state.loading |= 4, u.instance = f, Nl(f), f;
          e = Gv(a), (n = bt.get(n)) && Lc(e, n), f = (l.ownerDocument || l).createElement("link"), Nl(f);
          var c = f;
          return c._p = new Promise(function(i, s) {
            c.onload = i, c.onerror = s;
          }), xl(f, "link", e), u.state.loading |= 4, On(f, a.precedence, l), u.instance = f;
        case "script":
          return f = ba(a.src), (n = l.querySelector(
            ye(f)
          )) ? (u.instance = n, Nl(n), n) : (e = a, (n = bt.get(f)) && (e = H({}, a), Kc(e, n)), l = l.ownerDocument || l, n = l.createElement("script"), Nl(n), xl(n, "link", e), l.head.appendChild(n), u.instance = n);
        case "void":
          return null;
        default:
          throw Error(g(443, u.type));
      }
    else
      u.type === "stylesheet" && (u.state.loading & 4) === 0 && (e = u.instance, u.state.loading |= 4, On(e, a.precedence, l));
    return u.instance;
  }
  function On(l, u, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = e.length ? e[e.length - 1] : null, f = n, c = 0; c < e.length; c++) {
      var i = e[c];
      if (i.dataset.precedence === u) f = i;
      else if (f !== n) break;
    }
    f ? f.parentNode.insertBefore(l, f.nextSibling) : (u = a.nodeType === 9 ? a.head : a, u.insertBefore(l, u.firstChild));
  }
  function Lc(l, u) {
    l.crossOrigin == null && (l.crossOrigin = u.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = u.referrerPolicy), l.title == null && (l.title = u.title);
  }
  function Kc(l, u) {
    l.crossOrigin == null && (l.crossOrigin = u.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = u.referrerPolicy), l.integrity == null && (l.integrity = u.integrity);
  }
  var Mn = null;
  function Xv(l, u, a) {
    if (Mn === null) {
      var e = /* @__PURE__ */ new Map(), n = Mn = /* @__PURE__ */ new Map();
      n.set(a, e);
    } else
      n = Mn, e = n.get(a), e || (e = /* @__PURE__ */ new Map(), n.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), n = 0; n < a.length; n++) {
      var f = a[n];
      if (!(f[_a] || f[jl] || l === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = f.getAttribute(u) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(f) : e.set(c, [f]);
      }
    }
    return e;
  }
  function Qv(l, u, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      u === "title" ? l.querySelector("head > title") : null
    );
  }
  function g1(l, u, a) {
    if (a === 1 || u.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof u.precedence != "string" || typeof u.href != "string" || u.href === "")
          break;
        return !0;
      case "link":
        if (typeof u.rel != "string" || typeof u.href != "string" || u.href === "" || u.onLoad || u.onError)
          break;
        switch (u.rel) {
          case "stylesheet":
            return l = u.disabled, typeof u.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (u.async && typeof u.async != "function" && typeof u.async != "symbol" && !u.onLoad && !u.onError && u.src && typeof u.src == "string")
          return !0;
    }
    return !1;
  }
  function jv(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var de = null;
  function S1() {
  }
  function b1(l, u, a) {
    if (de === null) throw Error(g(475));
    var e = de;
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var n = Sa(a.href), f = l.querySelector(
          ve(n)
        );
        if (f) {
          l = f._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = Dn.bind(e), l.then(e, e)), u.state.loading |= 4, u.instance = f, Nl(f);
          return;
        }
        f = l.ownerDocument || l, a = Gv(a), (n = bt.get(n)) && Lc(a, n), f = f.createElement("link"), Nl(f);
        var c = f;
        c._p = new Promise(function(i, s) {
          c.onload = i, c.onerror = s;
        }), xl(f, "link", a), u.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(u, l), (l = u.state.preload) && (u.state.loading & 3) === 0 && (e.count++, u = Dn.bind(e), l.addEventListener("load", u), l.addEventListener("error", u));
    }
  }
  function T1() {
    if (de === null) throw Error(g(475));
    var l = de;
    return l.stylesheets && l.count === 0 && Jc(l, l.stylesheets), 0 < l.count ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Jc(l, l.stylesheets), l.unsuspend) {
          var e = l.unsuspend;
          l.unsuspend = null, e();
        }
      }, 6e4);
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function Dn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Un = null;
  function Jc(l, u) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Un = /* @__PURE__ */ new Map(), u.forEach(E1, l), Un = null, Dn.call(l));
  }
  function E1(l, u) {
    if (!(u.state.loading & 4)) {
      var a = Un.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Un.set(l, a);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < n.length; f++) {
          var c = n[f];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), e = c);
        }
        e && a.set(null, e);
      }
      n = u.instance, c = n.getAttribute("data-precedence"), f = a.get(c) || e, f === e && a.set(null, n), a.set(c, n), this.count++, e = Dn.bind(this), n.addEventListener("load", e), n.addEventListener("error", e), f ? f.parentNode.insertBefore(n, f.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), u.state.loading |= 4;
    }
  }
  var he = {
    $$typeof: gl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function A1(l, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zn(0), this.hiddenUpdates = Zn(null), this.identifierPrefix = e, this.onUncaughtError = n, this.onCaughtError = f, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Zv(l, u, a, e, n, f, c, i, s, o, b, E) {
    return l = new A1(
      l,
      u,
      a,
      c,
      i,
      s,
      o,
      E
    ), u = 1, f === !0 && (u |= 24), f = at(3, null, null, u), l.current = f, f.stateNode = l, u = Df(), u.refCount++, l.pooledCache = u, u.refCount++, f.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: u
    }, Hf(f), l;
  }
  function Cv(l) {
    return l ? (l = ku, l) : ku;
  }
  function Vv(l, u, a, e, n, f) {
    n = Cv(n), e.context === null ? e.context = n : e.pendingContext = n, e = Ft(u), e.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (e.callback = f), a = It(l, e, u), a !== null && (it(a, l, u), Va(a, l, u));
  }
  function Lv(l, u) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < u ? a : u;
    }
  }
  function wc(l, u) {
    Lv(l, u), (l = l.alternate) && Lv(l, u);
  }
  function Kv(l) {
    if (l.tag === 13) {
      var u = $u(l, 67108864);
      u !== null && it(u, l, 67108864), wc(l, 67108864);
    }
  }
  var Rn = !0;
  function z1(l, u, a, e) {
    var n = S.T;
    S.T = null;
    var f = O.p;
    try {
      O.p = 2, Wc(l, u, a, e);
    } finally {
      O.p = f, S.T = n;
    }
  }
  function _1(l, u, a, e) {
    var n = S.T;
    S.T = null;
    var f = O.p;
    try {
      O.p = 8, Wc(l, u, a, e);
    } finally {
      O.p = f, S.T = n;
    }
  }
  function Wc(l, u, a, e) {
    if (Rn) {
      var n = $c(e);
      if (n === null)
        pc(
          l,
          u,
          e,
          Nn,
          a
        ), wv(l, e);
      else if (M1(
        n,
        l,
        u,
        a,
        e
      ))
        e.stopPropagation();
      else if (wv(l, e), u & 4 && -1 < O1.indexOf(l)) {
        for (; n !== null; ) {
          var f = xu(n);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var c = gu(f.pendingLanes);
                  if (c !== 0) {
                    var i = f;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var s = 1 << 31 - tt(c);
                      i.entanglements[1] |= s, c &= ~s;
                    }
                    Rt(f), (I & 6) === 0 && (hn = _t() + 500, fe(0));
                  }
                }
                break;
              case 13:
                i = $u(f, 2), i !== null && it(i, f, 2), mn(), wc(f, 2);
            }
          if (f = $c(e), f === null && pc(
            l,
            u,
            e,
            Nn,
            a
          ), f === n) break;
          n = f;
        }
        n !== null && e.stopPropagation();
      } else
        pc(
          l,
          u,
          e,
          null,
          a
        );
    }
  }
  function $c(l) {
    return l = Pn(l), kc(l);
  }
  var Nn = null;
  function kc(l) {
    if (Nn = null, l = Gu(l), l !== null) {
      var u = cl(l);
      if (u === null) l = null;
      else {
        var a = u.tag;
        if (a === 13) {
          if (l = sl(u), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (u.stateNode.current.memoizedState.isDehydrated)
            return u.tag === 3 ? u.stateNode.containerInfo : null;
          l = null;
        } else u !== l && (l = null);
      }
    }
    return Nn = l, null;
  }
  function Jv(l) {
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
        switch (vy()) {
          case fi:
            return 2;
          case ci:
            return 8;
          case Ee:
          case yy:
            return 32;
          case ii:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fc = !1, yu = null, du = null, hu = null, oe = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), ou = [], O1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function wv(l, u) {
    switch (l) {
      case "focusin":
      case "focusout":
        yu = null;
        break;
      case "dragenter":
      case "dragleave":
        du = null;
        break;
      case "mouseover":
      case "mouseout":
        hu = null;
        break;
      case "pointerover":
      case "pointerout":
        oe.delete(u.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        me.delete(u.pointerId);
    }
  }
  function re(l, u, a, e, n, f) {
    return l === null || l.nativeEvent !== f ? (l = {
      blockedOn: u,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: f,
      targetContainers: [n]
    }, u !== null && (u = xu(u), u !== null && Kv(u)), l) : (l.eventSystemFlags |= e, u = l.targetContainers, n !== null && u.indexOf(n) === -1 && u.push(n), l);
  }
  function M1(l, u, a, e, n) {
    switch (u) {
      case "focusin":
        return yu = re(
          yu,
          l,
          u,
          a,
          e,
          n
        ), !0;
      case "dragenter":
        return du = re(
          du,
          l,
          u,
          a,
          e,
          n
        ), !0;
      case "mouseover":
        return hu = re(
          hu,
          l,
          u,
          a,
          e,
          n
        ), !0;
      case "pointerover":
        var f = n.pointerId;
        return oe.set(
          f,
          re(
            oe.get(f) || null,
            l,
            u,
            a,
            e,
            n
          )
        ), !0;
      case "gotpointercapture":
        return f = n.pointerId, me.set(
          f,
          re(
            me.get(f) || null,
            l,
            u,
            a,
            e,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Wv(l) {
    var u = Gu(l.target);
    if (u !== null) {
      var a = cl(u);
      if (a !== null) {
        if (u = a.tag, u === 13) {
          if (u = sl(a), u !== null) {
            l.blockedOn = u, by(l.priority, function() {
              if (a.tag === 13) {
                var e = ct();
                e = Cn(e);
                var n = $u(a, e);
                n !== null && it(n, a, e), wc(a, e);
              }
            });
            return;
          }
        } else if (u === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Hn(l) {
    if (l.blockedOn !== null) return !1;
    for (var u = l.targetContainers; 0 < u.length; ) {
      var a = $c(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        In = e, a.target.dispatchEvent(e), In = null;
      } else
        return u = xu(a), u !== null && Kv(u), l.blockedOn = a, !1;
      u.shift();
    }
    return !0;
  }
  function $v(l, u, a) {
    Hn(l) && a.delete(u);
  }
  function D1() {
    Fc = !1, yu !== null && Hn(yu) && (yu = null), du !== null && Hn(du) && (du = null), hu !== null && Hn(hu) && (hu = null), oe.forEach($v), me.forEach($v);
  }
  function qn(l, u) {
    l.blockedOn === u && (l.blockedOn = null, Fc || (Fc = !0, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      D1
    )));
  }
  var Yn = null;
  function kv(l) {
    Yn !== l && (Yn = l, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      function() {
        Yn === l && (Yn = null);
        for (var u = 0; u < l.length; u += 3) {
          var a = l[u], e = l[u + 1], n = l[u + 2];
          if (typeof e != "function") {
            if (kc(e || a) === null)
              continue;
            break;
          }
          var f = xu(a);
          f !== null && (l.splice(u, 3), u -= 3, kf(
            f,
            {
              pending: !0,
              data: n,
              method: a.method,
              action: e
            },
            e,
            n
          ));
        }
      }
    ));
  }
  function ge(l) {
    function u(s) {
      return qn(s, l);
    }
    yu !== null && qn(yu, l), du !== null && qn(du, l), hu !== null && qn(hu, l), oe.forEach(u), me.forEach(u);
    for (var a = 0; a < ou.length; a++) {
      var e = ou[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ou.length && (a = ou[0], a.blockedOn === null); )
      Wv(a), a.blockedOn === null && ou.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var n = a[e], f = a[e + 1], c = n[Jl] || null;
        if (typeof f == "function")
          c || kv(a);
        else if (c) {
          var i = null;
          if (f && f.hasAttribute("formAction")) {
            if (n = f, c = f[Jl] || null)
              i = c.formAction;
            else if (kc(n) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? a[e + 1] = i : (a.splice(e, 3), e -= 3), kv(a);
        }
      }
  }
  function Ic(l) {
    this._internalRoot = l;
  }
  Bn.prototype.render = Ic.prototype.render = function(l) {
    var u = this._internalRoot;
    if (u === null) throw Error(g(409));
    var a = u.current, e = ct();
    Vv(a, e, l, u, null, null);
  }, Bn.prototype.unmount = Ic.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var u = l.containerInfo;
      Vv(l.current, 2, null, l, null, null), mn(), u[pu] = null;
    }
  };
  function Bn(l) {
    this._internalRoot = l;
  }
  Bn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var u = hi();
      l = { blockedOn: null, target: l, priority: u };
      for (var a = 0; a < ou.length && u !== 0 && u < ou[a].priority; a++) ;
      ou.splice(a, 0, l), a === 0 && Wv(l);
    }
  };
  var Fv = Q.version;
  if (Fv !== "19.1.1")
    throw Error(
      g(
        527,
        Fv,
        "19.1.1"
      )
    );
  O.findDOMNode = function(l) {
    var u = l._reactInternals;
    if (u === void 0)
      throw typeof l.render == "function" ? Error(g(188)) : (l = Object.keys(l).join(","), Error(g(268, l)));
    return l = R(u), l = l !== null ? A(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var U1 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var pn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!pn.isDisabled && pn.supportsFiber)
      try {
        Ea = pn.inject(
          U1
        ), lt = pn;
      } catch {
      }
  }
  return be.createRoot = function(l, u) {
    if (!ll(l)) throw Error(g(299));
    var a = !1, e = "", n = hs, f = os, c = ms, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks)), u = Zv(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      n,
      f,
      c,
      i,
      null
    ), l[pu] = u.current, Bc(l), new Ic(u);
  }, be.hydrateRoot = function(l, u, a) {
    if (!ll(l)) throw Error(g(299));
    var e = !1, n = "", f = hs, c = os, i = ms, s = null, o = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (n = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (s = a.unstable_transitionCallbacks), a.formState !== void 0 && (o = a.formState)), u = Zv(
      l,
      1,
      !0,
      u,
      a ?? null,
      e,
      n,
      f,
      c,
      i,
      s,
      o
    ), u.context = Cv(null), a = u.current, e = ct(), e = Cn(e), n = Ft(e), n.callback = null, It(a, n, e), a = e, u.current.lanes = a, za(u, a), Rt(u), l[pu] = u.current, Bc(l), new Bn(u);
  }, be.version = "19.1.1", be;
}
var cy;
function X1() {
  if (cy) return li.exports;
  cy = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (Q) {
        console.error(Q);
      }
  }
  return _(), li.exports = x1(), li.exports;
}
var Q1 = X1(), ru = ni();
async function j1({ lat: _, lon: Q }) {
  try {
    const Z = `https://api.open-meteo.com/v1/forecast?latitude=${_}&longitude=${Q}&current=temperature_2m,weather_code`, ll = await (await fetch(Z)).json(), cl = Math.round(ll?.current?.temperature_2m ?? NaN), sl = Number.isFinite(t) ? cl >= 85 ? "hot" : cl >= 65 ? "warm" : cl >= 45 ? "cool" : "cold" : "fair";
    return Number.isFinite(t) ? `${sl} (${t}°)` : sl;
  } catch {
    return "fair";
  }
}
function Z1({
  events: _ = [],
  // [{ id, name, description, location, dateTime, type, minigame }]
  sprites: Q = {
    sky: "/assets/recruitment/sprites/sky.png",
    grass: "/assets/recruitment/sprites/grass.png",
    ground: "/assets/recruitment/sprites/ground.png",
    river: "/assets/recruitment/sprites/river.png",
    wagon: "/assets/recruitment/sprites/wagon.png",
    ox: "/assets/recruitment/sprites/ox.png"
  },
  lat: Z = null,
  lon: g = null,
  dateText: ll,
  homeHref: cl = "/"
}) {
  const sl = ru.useRef(null), [k, R] = ru.useState(0), [A, H] = ru.useState("…"), [tl, ul] = ru.useState(!1);
  ru.useEffect(() => {
    const al = Object.values(Q).map((gl) => {
      const Ul = new Image();
      return Ul.src = gl, Ul.onload = dl, Ul.onerror = dl, Ul;
    });
    let ml = 0;
    function dl() {
      ++ml >= al.length && ul(!0);
    }
  }, [JSON.stringify(Q)]), ru.useEffect(() => {
    Z != null && g != null ? j1({ lat: Z, lon: g }).then(H) : H("fair");
  }, [Z, g]), ru.useEffect(() => {
    if (!tl) return;
    const al = sl.current;
    if (!al) return;
    const ml = al.getContext("2d");
    if (!ml) return;
    const dl = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    function gl() {
      al.width = Math.floor(window.innerWidth * dl), al.height = Math.floor(window.innerHeight * dl), al.style.width = "100%", al.style.height = "100%";
    }
    gl(), window.addEventListener("resize", gl);
    const Ul = Ta(Q.sky), K = Ta(Q.grass), Vl = Ta(Q.ground), Ll = Ta(Q.river), Xl = Ta(Q.wagon), Il = Ta(Q.ox);
    let zt;
    function st(Rl = 0) {
      const vt = Rl / 1e3, Ql = al.width, vl = al.height;
      ml.fillStyle = "#7ec0ff", ml.fillRect(0, 0, Ql, vl), Gn(ml, Ul, Ql, vl * 0.45, 0, vt * 5), Gn(ml, Ll, Ql, vl * 0.15, vl * 0.45, vt * 40), Gn(ml, K, Ql, vl * 0.15, vl * 0.45 - 10 * dl, vt * 20), Gn(ml, Vl, Ql, vl * 0.25, vl * 0.6, vt * 60);
      const S = Math.max(1, Math.min(3, Ql / dl / 600)), O = 64 * dl * S, q = 48 * dl * S, F = 96 * dl * S, v = 64 * dl * S, z = vl * 0.6 - 8 * dl;
      ml.imageSmoothingEnabled = !1, Il && ml.drawImage(Il, Ql * 0.35, z - q, O, q), Xl && ml.drawImage(Xl, Ql * 0.35 + O + 8 * dl, z - v, F, v), zt = requestAnimationFrame(st);
    }
    return zt = requestAnimationFrame(st), () => {
      cancelAnimationFrame(zt), window.removeEventListener("resize", gl);
    };
  }, [tl, Q]), ru.useEffect(() => {
    function al(ml) {
      ml.code === "Space" && (ml.preventDefault(), k < _.length - 1 && R((dl) => dl + 1));
    }
    return window.addEventListener("keydown", al), () => window.removeEventListener("keydown", al);
  }, [k, _.length]);
  const Al = _[k] || {}, Bl = _[k + 1]?.name || "—", Fl = ll || (/* @__PURE__ */ new Date()).toLocaleDateString(void 0, { month: "long", day: "numeric", year: "numeric" });
  return /* @__PURE__ */ Dl.jsxs("div", { className: "fullscreen retro", children: [
    /* @__PURE__ */ Dl.jsx("canvas", { ref: sl, className: "w-full h-full block" }),
    /* @__PURE__ */ Dl.jsx("a", { href: cl, className: "btn btn-home", "aria-label": "Back to home", children: "◀ Home" }),
    /* @__PURE__ */ Dl.jsx("button", { className: "btn btn-right", onClick: () => k < _.length - 1 && R(k + 1), children: "▶ Continue" }),
    /* @__PURE__ */ Dl.jsxs("div", { className: "hud", children: [
      /* @__PURE__ */ Dl.jsx("div", { className: "title", children: Al.name || "Event" }),
      /* @__PURE__ */ Dl.jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ Dl.jsxs("div", { children: [
          /* @__PURE__ */ Dl.jsx("strong", { children: "Date:" }),
          " ",
          Fl
        ] }),
        /* @__PURE__ */ Dl.jsxs("div", { children: [
          /* @__PURE__ */ Dl.jsx("strong", { children: "Weather:" }),
          " ",
          A
        ] }),
        /* @__PURE__ */ Dl.jsxs("div", { children: [
          /* @__PURE__ */ Dl.jsx("strong", { children: "Where:" }),
          " ",
          Al.location || "TBD"
        ] }),
        /* @__PURE__ */ Dl.jsxs("div", { children: [
          /* @__PURE__ */ Dl.jsx("strong", { children: "Next landmark:" }),
          " ",
          Bl
        ] })
      ] }),
      Al.description ? /* @__PURE__ */ Dl.jsx("div", { style: { marginTop: 8 }, children: Al.description }) : null,
      /* @__PURE__ */ Dl.jsxs("div", { style: { textAlign: "center", marginTop: 10 }, children: [
        "Press ",
        /* @__PURE__ */ Dl.jsx("strong", { children: "SPACE" }),
        " to continue"
      ] })
    ] })
  ] });
}
function Ta(_) {
  if (!_) return null;
  const Q = new Image();
  return Q.src = _, Q;
}
function Gn(_, Q, Z, g, ll = 0, cl = 0) {
  if (!Q || !Q.width) {
    _.fillStyle = "#3aa13a", _.fillRect(0, ll, Z, g);
    return;
  }
  const sl = g, k = Q.width * (sl / Q.height), R = -(cl % k + k) % k;
  for (let A = R; A < Z + k; A += k)
    _.drawImage(Q, A, ll, k, sl);
}
function C1(_, Q = {}) {
  const Z = Q1.createRoot(_);
  return Z.render(/* @__PURE__ */ Dl.jsx(Z1, { ...Q })), () => Z.unmount();
}
export {
  C1 as mount
};
