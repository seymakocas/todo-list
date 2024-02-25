function cw(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        r(o);
    new MutationObserver(o => {
        for (const i of o)
            if (i.type === "childList")
                for (const a of i.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && r(a)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(o) {
        const i = {};
        return o.integrity && (i.integrity = o.integrity), o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy), o.crossorigin === "use-credentials" ? i.credentials = "include" : o.crossorigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }
    function r(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const i = n(o);
        fetch(o.href, i)
    }
})();
var za = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function dw(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var k = {
        exports: {}
    },
    K = {}; /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var ua = Symbol.for("react.element"),
    fw = Symbol.for("react.portal"),
    pw = Symbol.for("react.fragment"),
    hw = Symbol.for("react.strict_mode"),
    mw = Symbol.for("react.profiler"),
    gw = Symbol.for("react.provider"),
    vw = Symbol.for("react.context"),
    yw = Symbol.for("react.forward_ref"),
    Sw = Symbol.for("react.suspense"),
    bw = Symbol.for("react.memo"),
    xw = Symbol.for("react.lazy"),
    Sh = Symbol.iterator;
function ww(e) {
    return e === null || typeof e != "object" ? null : (e = Sh && e[Sh] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ug = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Gg = Object.assign,
    Kg = {};
function zo(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kg,
    this.updater = n || Ug
}
zo.prototype.isReactComponent = {};
zo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
zo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};
function Yg() {}
Yg.prototype = zo.prototype;
function sf(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Kg,
    this.updater = n || Ug
}
var lf = sf.prototype = new Yg;
lf.constructor = sf;
Gg(lf, zo.prototype);
lf.isPureReactComponent = !0;
var bh = Array.isArray,
    Qg = Object.prototype.hasOwnProperty,
    uf = {
        current: null
    },
    Xg = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function qg(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    if (t != null)
        for (r in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
            Qg.call(t, r) && !Xg.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = n;
    else if (1 < s) {
        for (var l = Array(s), u = 0; u < s; u++)
            l[u] = arguments[u + 2];
        o.children = l
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s)
            o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: ua,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: uf.current
    }
}
function kw(e, t) {
    return {
        $$typeof: ua,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function cf(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ua
}
function Cw(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var xh = /\/+/g;
function Iu(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Cw("" + e.key) : t.toString(36)
}
function cs(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var a = !1;
    if (e === null)
        a = !0;
    else
        switch (i) {
        case "string":
        case "number":
            a = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ua:
            case fw:
                a = !0
            }
        }
    if (a)
        return a = e, o = o(a), e = r === "" ? "." + Iu(a, 0) : r, bh(o) ? (n = "", e != null && (n = e.replace(xh, "$&/") + "/"), cs(o, t, n, "", function(u) {
            return u
        })) : o != null && (cf(o) && (o = kw(o, n + (!o.key || a && a.key === o.key ? "" : ("" + o.key).replace(xh, "$&/") + "/") + e)), t.push(o)), 1;
    if (a = 0, r = r === "" ? "." : r + ":", bh(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var l = r + Iu(i, s);
            a += cs(i, t, n, l, o)
        }
    else if (l = ww(e), typeof l == "function")
        for (e = l.call(e), s = 0; !(i = e.next()).done;)
            i = i.value,
            l = r + Iu(i, s++),
            a += cs(i, t, n, l, o);
    else if (i === "object")
        throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return a
}
function Ia(e, t, n) {
    if (e == null)
        return e;
    var r = [],
        o = 0;
    return cs(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }), r
}
function _w(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }),
        e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var et = {
        current: null
    },
    ds = {
        transition: null
    },
    Tw = {
        ReactCurrentDispatcher: et,
        ReactCurrentBatchConfig: ds,
        ReactCurrentOwner: uf
    };
K.Children = {
    map: Ia,
    forEach: function(e, t, n) {
        Ia(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return Ia(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return Ia(e, function(t) {
                return t
            }) || []
    },
    only: function(e) {
        if (!cf(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
K.Component = zo;
K.Fragment = pw;
K.Profiler = mw;
K.PureComponent = sf;
K.StrictMode = hw;
K.Suspense = Sw;
K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Tw;
K.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Gg({}, e.props),
        o = e.key,
        i = e.ref,
        a = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, a = uf.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (l in t)
            Qg.call(t, l) && !Xg.hasOwnProperty(l) && (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
    }
    var l = arguments.length - 2;
    if (l === 1)
        r.children = n;
    else if (1 < l) {
        s = Array(l);
        for (var u = 0; u < l; u++)
            s[u] = arguments[u + 2];
        r.children = s
    }
    return {
        $$typeof: ua,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: a
    }
};
K.createContext = function(e) {
    return e = {
        $$typeof: vw,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: gw,
        _context: e
    }, e.Consumer = e
};
K.createElement = qg;
K.createFactory = function(e) {
    var t = qg.bind(null, e);
    return t.type = e, t
};
K.createRef = function() {
    return {
        current: null
    }
};
K.forwardRef = function(e) {
    return {
        $$typeof: yw,
        render: e
    }
};
K.isValidElement = cf;
K.lazy = function(e) {
    return {
        $$typeof: xw,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: _w
    }
};
K.memo = function(e, t) {
    return {
        $$typeof: bw,
        type: e,
        compare: t === void 0 ? null : t
    }
};
K.startTransition = function(e) {
    var t = ds.transition;
    ds.transition = {};
    try {
        e()
    } finally {
        ds.transition = t
    }
};
K.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
K.useCallback = function(e, t) {
    return et.current.useCallback(e, t)
};
K.useContext = function(e) {
    return et.current.useContext(e)
};
K.useDebugValue = function() {};
K.useDeferredValue = function(e) {
    return et.current.useDeferredValue(e)
};
K.useEffect = function(e, t) {
    return et.current.useEffect(e, t)
};
K.useId = function() {
    return et.current.useId()
};
K.useImperativeHandle = function(e, t, n) {
    return et.current.useImperativeHandle(e, t, n)
};
K.useInsertionEffect = function(e, t) {
    return et.current.useInsertionEffect(e, t)
};
K.useLayoutEffect = function(e, t) {
    return et.current.useLayoutEffect(e, t)
};
K.useMemo = function(e, t) {
    return et.current.useMemo(e, t)
};
K.useReducer = function(e, t, n) {
    return et.current.useReducer(e, t, n)
};
K.useRef = function(e) {
    return et.current.useRef(e)
};
K.useState = function(e) {
    return et.current.useState(e)
};
K.useSyncExternalStore = function(e, t, n) {
    return et.current.useSyncExternalStore(e, t, n)
};
K.useTransition = function() {
    return et.current.useTransition()
};
K.version = "18.2.0";
(function(e) {
    e.exports = K
})(k);
const D = dw(k.exports),
    wh = cw({
        __proto__: null,
        default: D
    }, [k.exports]);
var Ec = {},
    Cl = {
        exports: {}
    },
    wt = {},
    Zg = {
        exports: {}
    },
    Jg = {}; /**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







(function(e) {
    function t(L, G) {
        var F = L.length;
        L.push(G);
        e:
        for (; 0 < F;) {
            var A = F - 1 >>> 1,
                $ = L[A];
            if (0 < o($, G))
                L[A] = G,
                L[F] = $,
                F = A;
            else
                break e
        }
    }
    function n(L) {
        return L.length === 0 ? null : L[0]
    }
    function r(L) {
        if (L.length === 0)
            return null;
        var G = L[0],
            F = L.pop();
        if (F !== G) {
            L[0] = F;
            e:
            for (var A = 0, $ = L.length, V = $ >>> 1; A < V;) {
                var Ce = 2 * (A + 1) - 1,
                    Ie = L[Ce],
                    Xe = Ce + 1,
                    qt = L[Xe];
                if (0 > o(Ie, F))
                    Xe < $ && 0 > o(qt, Ie) ? (L[A] = qt, L[Xe] = F, A = Xe) : (L[A] = Ie, L[Ce] = F, A = Ce);
                else if (Xe < $ && 0 > o(qt, F))
                    L[A] = qt,
                    L[Xe] = F,
                    A = Xe;
                else
                    break e
            }
        }
        return G
    }
    function o(L, G) {
        var F = L.sortIndex - G.sortIndex;
        return F !== 0 ? F : L.id - G.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var a = Date,
            s = a.now();
        e.unstable_now = function() {
            return a.now() - s
        }
    }
    var l = [],
        u = [],
        c = 1,
        d = null,
        f = 3,
        h = !1,
        y = !1,
        S = !1,
        C = typeof setTimeout == "function" ? setTimeout : null,
        g = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(L) {
        for (var G = n(u); G !== null;) {
            if (G.callback === null)
                r(u);
            else if (G.startTime <= L)
                r(u),
                G.sortIndex = G.expirationTime,
                t(l, G);
            else
                break;
            G = n(u)
        }
    }
    function b(L) {
        if (S = !1, m(L), !y)
            if (n(l) !== null)
                y = !0,
                fe(_);
            else {
                var G = n(u);
                G !== null && nt(b, G.startTime - L)
            }
    }
    function _(L, G) {
        y = !1,
        S && (S = !1, g(I), I = -1),
        h = !0;
        var F = f;
        try {
            for (m(G), d = n(l); d !== null && (!(d.expirationTime > G) || L && !le());) {
                var A = d.callback;
                if (typeof A == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var $ = A(d.expirationTime <= G);
                    G = e.unstable_now(),
                    typeof $ == "function" ? d.callback = $ : d === n(l) && r(l),
                    m(G)
                } else
                    r(l);
                d = n(l)
            }
            if (d !== null)
                var V = !0;
            else {
                var Ce = n(u);
                Ce !== null && nt(b, Ce.startTime - G),
                V = !1
            }
            return V
        } finally {
            d = null,
            f = F,
            h = !1
        }
    }
    var R = !1,
        E = null,
        I = -1,
        j = 5,
        B = -1;
    function le() {
        return !(e.unstable_now() - B < j)
    }
    function ke() {
        if (E !== null) {
            var L = e.unstable_now();
            B = L;
            var G = !0;
            try {
                G = E(!0, L)
            } finally {
                G ? Qe() : (R = !1, E = null)
            }
        } else
            R = !1
    }
    var Qe;
    if (typeof p == "function")
        Qe = function() {
            p(ke)
        };
    else if (typeof MessageChannel < "u") {
        var dt = new MessageChannel,
            ft = dt.port2;
        dt.port1.onmessage = ke,
        Qe = function() {
            ft.postMessage(null)
        }
    } else
        Qe = function() {
            C(ke, 0)
        };
    function fe(L) {
        E = L,
        R || (R = !0, Qe())
    }
    function nt(L, G) {
        I = C(function() {
            L(e.unstable_now())
        }, G)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(L) {
        L.callback = null
    },
    e.unstable_continueExecution = function() {
        y || h || (y = !0, fe(_))
    },
    e.unstable_forceFrameRate = function(L) {
        0 > L || 125 < L ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < L ? Math.floor(1e3 / L) : 5
    },
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    },
    e.unstable_getFirstCallbackNode = function() {
        return n(l)
    },
    e.unstable_next = function(L) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var G = 3;
            break;
        default:
            G = f
        }
        var F = f;
        f = G;
        try {
            return L()
        } finally {
            f = F
        }
    },
    e.unstable_pauseExecution = function() {},
    e.unstable_requestPaint = function() {},
    e.unstable_runWithPriority = function(L, G) {
        switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            L = 3
        }
        var F = f;
        f = L;
        try {
            return G()
        } finally {
            f = F
        }
    },
    e.unstable_scheduleCallback = function(L, G, F) {
        var A = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? A + F : A) : F = A, L) {
        case 1:
            var $ = -1;
            break;
        case 2:
            $ = 250;
            break;
        case 5:
            $ = 1073741823;
            break;
        case 4:
            $ = 1e4;
            break;
        default:
            $ = 5e3
        }
        return $ = F + $, L = {
            id: c++,
            callback: G,
            priorityLevel: L,
            startTime: F,
            expirationTime: $,
            sortIndex: -1
        }, F > A ? (L.sortIndex = F, t(u, L), n(l) === null && L === n(u) && (S ? (g(I), I = -1) : S = !0, nt(b, F - A))) : (L.sortIndex = $, t(l, L), y || h || (y = !0, fe(_))), L
    },
    e.unstable_shouldYield = le,
    e.unstable_wrapCallback = function(L) {
        var G = f;
        return function() {
            var F = f;
            f = G;
            try {
                return L.apply(this, arguments)
            } finally {
                f = F
            }
        }
    }
})(Jg);
(function(e) {
    e.exports = Jg
})(Zg); /**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var ev = k.exports,
    bt = Zg.exports;
function z(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var tv = new Set,
    Ai = {};
function Nr(e, t) {
    wo(e, t),
    wo(e + "Capture", t)
}
function wo(e, t) {
    for (Ai[e] = t, e = 0; e < t.length; e++)
        tv.add(t[e])
}
var Tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Pc = Object.prototype.hasOwnProperty,
    Ew = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    kh = {},
    Ch = {};
function Pw(e) {
    return Pc.call(Ch, e) ? !0 : Pc.call(kh, e) ? !1 : Ew.test(e) ? Ch[e] = !0 : (kh[e] = !0, !1)
}
function Rw(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Aw(e, t, n, r) {
    if (t === null || typeof t > "u" || Rw(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function tt(e, t, n, r, o, i, a) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = a
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    We[e] = new tt(e, 0, !1, e, null, !1, !1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    We[t] = new tt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    We[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    We[e] = new tt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    We[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    We[e] = new tt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    We[e] = new tt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    We[e] = new tt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    We[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var df = /[\-:]([a-z])/g;
function ff(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(df, ff);
    We[t] = new tt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(df, ff);
    We[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(df, ff);
    We[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    We[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
We.xlinkHref = new tt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    We[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});
function pf(e, t, n, r) {
    var o = We.hasOwnProperty(t) ? We[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Aw(t, n, o, r) && (n = null), r || o === null ? Pw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var zn = ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    La = Symbol.for("react.element"),
    Yr = Symbol.for("react.portal"),
    Qr = Symbol.for("react.fragment"),
    hf = Symbol.for("react.strict_mode"),
    Rc = Symbol.for("react.profiler"),
    nv = Symbol.for("react.provider"),
    rv = Symbol.for("react.context"),
    mf = Symbol.for("react.forward_ref"),
    Ac = Symbol.for("react.suspense"),
    Mc = Symbol.for("react.suspense_list"),
    gf = Symbol.for("react.memo"),
    Bn = Symbol.for("react.lazy"),
    ov = Symbol.for("react.offscreen"),
    _h = Symbol.iterator;
function Wo(e) {
    return e === null || typeof e != "object" ? null : (e = _h && e[_h] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Se = Object.assign,
    Lu;
function ei(e) {
    if (Lu === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Lu = t && t[1] || ""
        }
    return `
`
    + Lu + e
}
var Fu = !1;
function Nu(e, t) {
    if (!e || Fu)
        return "";
    Fu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }, Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var o = u.stack.split(`
`
                ), i = r.stack.split(`
`
                ), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];)
                s--;
            for (; 1 <= a && 0 <= s; a--, s--)
                if (o[a] !== i[s]) {
                    if (a !== 1 || s !== 1)
                        do if (a--, s--, 0 > s || o[a] !== i[s]) {
                            var l = `
`
                            + o[a].replace(" at new ", " at ");
                            return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                        }
                        while (1 <= a && 0 <= s);
                    break
                }
        }
    } finally {
        Fu = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? ei(e) : ""
}
function Mw(e) {
    switch (e.tag) {
    case 5:
        return ei(e.type);
    case 16:
        return ei("Lazy");
    case 13:
        return ei("Suspense");
    case 19:
        return ei("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Nu(e.type, !1), e;
    case 11:
        return e = Nu(e.type.render, !1), e;
    case 1:
        return e = Nu(e.type, !0), e;
    default:
        return ""
    }
}
function zc(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Qr:
        return "Fragment";
    case Yr:
        return "Portal";
    case Rc:
        return "Profiler";
    case hf:
        return "StrictMode";
    case Ac:
        return "Suspense";
    case Mc:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case rv:
            return (e.displayName || "Context") + ".Consumer";
        case nv:
            return (e._context.displayName || "Context") + ".Provider";
        case mf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case gf:
            return t = e.displayName || null, t !== null ? t : zc(e.type) || "Memo";
        case Bn:
            t = e._payload,
            e = e._init;
            try {
                return zc(e(t))
            } catch {}
        }
    return null
}
function zw(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return zc(t);
    case 8:
        return t === hf ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function rr(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function iv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Iw(e) {
    var t = iv(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(a) {
                r = "" + a,
                i.call(this, a)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(a) {
                r = "" + a
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Fa(e) {
    e._valueTracker || (e._valueTracker = Iw(e))
}
function av(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = iv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}
function Ls(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Ic(e, t) {
    var n = t.checked;
    return Se({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n != null ? n : e._wrapperState.initialChecked
    })
}
function Th(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = rr(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function sv(e, t) {
    t = t.checked,
    t != null && pf(e, "checked", t, !1)
}
function Lc(e, t) {
    sv(e, t);
    var n = rr(t.value),
        r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Fc(e, t.type, n) : t.hasOwnProperty("defaultValue") && Fc(e, t.type, rr(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Eh(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Fc(e, t, n) {
    (t !== "number" || Ls(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var ti = Array.isArray;
function lo(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + rr(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Nc(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(z(91));
    return Se({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ph(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null)
                throw Error(z(92));
            if (ti(n)) {
                if (1 < n.length)
                    throw Error(z(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: rr(n)
    }
}
function lv(e, t) {
    var n = rr(t.value),
        r = rr(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Rh(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function uv(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function $c(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? uv(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Na,
    cv = function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, n, r, o)
            })
        } : e
    }(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
            e.innerHTML = t;
        else {
            for (Na = Na || document.createElement("div"), Na.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Na.firstChild; e.firstChild;)
                e.removeChild(e.firstChild);
            for (; t.firstChild;)
                e.appendChild(t.firstChild)
        }
    });
function Mi(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var si = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    Lw = ["Webkit", "ms", "Moz", "O"];
Object.keys(si).forEach(function(e) {
    Lw.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        si[t] = si[e]
    })
});
function dv(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || si.hasOwnProperty(e) && si[e] ? ("" + t).trim() : t + "px"
}
function fv(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = dv(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var Fw = Se({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Oc(e, t) {
    if (t) {
        if (Fw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(z(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(z(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(z(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(z(62))
    }
}
function Bc(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
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
        return !0
    }
}
var Dc = null;
function vf(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Vc = null,
    uo = null,
    co = null;
function Ah(e) {
    if (e = fa(e)) {
        if (typeof Vc != "function")
            throw Error(z(280));
        var t = e.stateNode;
        t && (t = Rl(t), Vc(e.stateNode, e.type, t))
    }
}
function pv(e) {
    uo ? co ? co.push(e) : co = [e] : uo = e
}
function hv() {
    if (uo) {
        var e = uo,
            t = co;
        if (co = uo = null, Ah(e), t)
            for (e = 0; e < t.length; e++)
                Ah(t[e])
    }
}
function mv(e, t) {
    return e(t)
}
function gv() {}
var $u = !1;
function vv(e, t, n) {
    if ($u)
        return e(t, n);
    $u = !0;
    try {
        return mv(e, t, n)
    } finally {
        $u = !1,
        (uo !== null || co !== null) && (gv(), hv())
    }
}
function zi(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Rl(n);
    if (r === null)
        return null;
    n = r[t];
    e:
    switch (t) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(z(231, t, typeof n));
    return n
}
var jc = !1;
if (Tn)
    try {
        var Ho = {};
        Object.defineProperty(Ho, "passive", {
            get: function() {
                jc = !0
            }
        }),
        window.addEventListener("test", Ho, Ho),
        window.removeEventListener("test", Ho, Ho)
    } catch {
        jc = !1
    }
function Nw(e, t, n, r, o, i, a, s, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var li = !1,
    Fs = null,
    Ns = !1,
    Wc = null,
    $w = {
        onError: function(e) {
            li = !0,
            Fs = e
        }
    };
function Ow(e, t, n, r, o, i, a, s, l) {
    li = !1,
    Fs = null,
    Nw.apply($w, arguments)
}
function Bw(e, t, n, r, o, i, a, s, l) {
    if (Ow.apply(this, arguments), li) {
        if (li) {
            var u = Fs;
            li = !1,
            Fs = null
        } else
            throw Error(z(198));
        Ns || (Ns = !0, Wc = u)
    }
}
function $r(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        e = t;
        do t = e,
        (t.flags & 4098) !== 0 && (n = t.return),
        e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function yv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
            return t.dehydrated
    }
    return null
}
function Mh(e) {
    if ($r(e) !== e)
        throw Error(z(188))
}
function Dw(e) {
    var t = e.alternate;
    if (!t) {
        if (t = $r(e), t === null)
            throw Error(z(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i;) {
                if (i === n)
                    return Mh(o), e;
                if (i === r)
                    return Mh(o), t;
                i = i.sibling
            }
            throw Error(z(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var a = !1, s = o.child; s;) {
                if (s === n) {
                    a = !0,
                    n = o,
                    r = i;
                    break
                }
                if (s === r) {
                    a = !0,
                    r = o,
                    n = i;
                    break
                }
                s = s.sibling
            }
            if (!a) {
                for (s = i.child; s;) {
                    if (s === n) {
                        a = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (s === r) {
                        a = !0,
                        r = i,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!a)
                    throw Error(z(189))
            }
        }
        if (n.alternate !== r)
            throw Error(z(190))
    }
    if (n.tag !== 3)
        throw Error(z(188));
    return n.stateNode.current === n ? e : t
}
function Sv(e) {
    return e = Dw(e), e !== null ? bv(e) : null
}
function bv(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null;) {
        var t = bv(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var xv = bt.unstable_scheduleCallback,
    zh = bt.unstable_cancelCallback,
    Vw = bt.unstable_shouldYield,
    jw = bt.unstable_requestPaint,
    _e = bt.unstable_now,
    Ww = bt.unstable_getCurrentPriorityLevel,
    yf = bt.unstable_ImmediatePriority,
    wv = bt.unstable_UserBlockingPriority,
    $s = bt.unstable_NormalPriority,
    Hw = bt.unstable_LowPriority,
    kv = bt.unstable_IdlePriority,
    _l = null,
    sn = null;
function Uw(e) {
    if (sn && typeof sn.onCommitFiberRoot == "function")
        try {
            sn.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ut = Math.clz32 ? Math.clz32 : Yw,
    Gw = Math.log,
    Kw = Math.LN2;
function Yw(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Gw(e) / Kw | 0) | 0
}
var $a = 64,
    Oa = 4194304;
function ni(e) {
    switch (e & -e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Os(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = n & 268435455;
    if (a !== 0) {
        var s = a & ~o;
        s !== 0 ? r = ni(s) : (i &= a, i !== 0 && (r = ni(i)))
    } else
        a = n & ~o,
        a !== 0 ? r = ni(a) : i !== 0 && (r = ni(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, i = t & -t, o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;)
            n = 31 - Ut(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function Qw(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function Xw(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var a = 31 - Ut(i),
            s = 1 << a,
            l = o[a];
        l === -1 ? ((s & n) === 0 || (s & r) !== 0) && (o[a] = Qw(s, t)) : l <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function Hc(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Cv() {
    var e = $a;
    return $a <<= 1, ($a & 4194240) === 0 && ($a = 64), e
}
function Ou(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ca(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ut(t),
    e[t] = n
}
function qw(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var o = 31 - Ut(n),
            i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Sf(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Ut(n),
            o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var ne = 0;
function _v(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
}
var Tv,
    bf,
    Ev,
    Pv,
    Rv,
    Uc = !1,
    Ba = [],
    Qn = null,
    Xn = null,
    qn = null,
    Ii = new Map,
    Li = new Map,
    jn = [],
    Zw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ih(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Qn = null;
        break;
    case "dragenter":
    case "dragleave":
        Xn = null;
        break;
    case "mouseover":
    case "mouseout":
        qn = null;
        break;
    case "pointerover":
    case "pointerout":
        Ii.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Li.delete(t.pointerId)
    }
}
function Uo(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    }, t !== null && (t = fa(t), t !== null && bf(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e)
}
function Jw(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return Qn = Uo(Qn, e, t, n, r, o), !0;
    case "dragenter":
        return Xn = Uo(Xn, e, t, n, r, o), !0;
    case "mouseover":
        return qn = Uo(qn, e, t, n, r, o), !0;
    case "pointerover":
        var i = o.pointerId;
        return Ii.set(i, Uo(Ii.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
        return i = o.pointerId, Li.set(i, Uo(Li.get(i) || null, e, t, n, r, o)), !0
    }
    return !1
}
function Av(e) {
    var t = br(e.target);
    if (t !== null) {
        var n = $r(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = yv(n), t !== null) {
                    e.blockedOn = t,
                    Rv(e.priority, function() {
                        Ev(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function fs(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = Gc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Dc = r,
            n.target.dispatchEvent(r),
            Dc = null
        } else
            return t = fa(n), t !== null && bf(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}
function Lh(e, t, n) {
    fs(e) && n.delete(t)
}
function ek() {
    Uc = !1,
    Qn !== null && fs(Qn) && (Qn = null),
    Xn !== null && fs(Xn) && (Xn = null),
    qn !== null && fs(qn) && (qn = null),
    Ii.forEach(Lh),
    Li.forEach(Lh)
}
function Go(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Uc || (Uc = !0, bt.unstable_scheduleCallback(bt.unstable_NormalPriority, ek)))
}
function Fi(e) {
    function t(o) {
        return Go(o, e)
    }
    if (0 < Ba.length) {
        Go(Ba[0], e);
        for (var n = 1; n < Ba.length; n++) {
            var r = Ba[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Qn !== null && Go(Qn, e), Xn !== null && Go(Xn, e), qn !== null && Go(qn, e), Ii.forEach(t), Li.forEach(t), n = 0; n < jn.length; n++)
        r = jn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jn.length && (n = jn[0], n.blockedOn === null);)
        Av(n),
        n.blockedOn === null && jn.shift()
}
var fo = zn.ReactCurrentBatchConfig,
    Bs = !0;
function tk(e, t, n, r) {
    var o = ne,
        i = fo.transition;
    fo.transition = null;
    try {
        ne = 1,
        xf(e, t, n, r)
    } finally {
        ne = o,
        fo.transition = i
    }
}
function nk(e, t, n, r) {
    var o = ne,
        i = fo.transition;
    fo.transition = null;
    try {
        ne = 4,
        xf(e, t, n, r)
    } finally {
        ne = o,
        fo.transition = i
    }
}
function xf(e, t, n, r) {
    if (Bs) {
        var o = Gc(e, t, n, r);
        if (o === null)
            Yu(e, t, r, Ds, n),
            Ih(e, r);
        else if (Jw(o, e, t, n, r))
            r.stopPropagation();
        else if (Ih(e, r), t & 4 && -1 < Zw.indexOf(e)) {
            for (; o !== null;) {
                var i = fa(o);
                if (i !== null && Tv(i), i = Gc(e, t, n, r), i === null && Yu(e, t, r, Ds, n), i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Yu(e, t, r, null, n)
    }
}
var Ds = null;
function Gc(e, t, n, r) {
    if (Ds = null, e = vf(r), e = br(e), e !== null)
        if (t = $r(e), t === null)
            e = null;
        else if (n = t.tag, n === 13) {
            if (e = yv(t), e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Ds = e, null
}
function Mv(e) {
    switch (e) {
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
        return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ww()) {
        case yf:
            return 1;
        case wv:
            return 4;
        case $s:
        case Hw:
            return 16;
        case kv:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Hn = null,
    wf = null,
    ps = null;
function zv() {
    if (ps)
        return ps;
    var e,
        t = wf,
        n = t.length,
        r,
        o = "value" in Hn ? Hn.value : Hn.textContent,
        i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var a = n - e;
    for (r = 1; r <= a && t[n - r] === o[i - r]; r++)
        ;
    return ps = o.slice(e, 1 < r ? 1 - r : void 0)
}
function hs(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}
function Da() {
    return !0
}
function Fh() {
    return !1
}
function kt(e) {
    function t(n, r, o, i, a) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = a,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Da : Fh, this.isPropagationStopped = Fh, this
    }
    return Se(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Da)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Da)
        },
        persist: function() {},
        isPersistent: Da
    }), t
}
var Io = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    kf = kt(Io),
    da = Se({}, Io, {
        view: 0,
        detail: 0
    }),
    rk = kt(da),
    Bu,
    Du,
    Ko,
    Tl = Se({}, da, {
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
        getModifierState: Cf,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== Ko && (Ko && e.type === "mousemove" ? (Bu = e.screenX - Ko.screenX, Du = e.screenY - Ko.screenY) : Du = Bu = 0, Ko = e), Bu)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Du
        }
    }),
    Nh = kt(Tl),
    ok = Se({}, Tl, {
        dataTransfer: 0
    }),
    ik = kt(ok),
    ak = Se({}, da, {
        relatedTarget: 0
    }),
    Vu = kt(ak),
    sk = Se({}, Io, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    lk = kt(sk),
    uk = Se({}, Io, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    ck = kt(uk),
    dk = Se({}, Io, {
        data: 0
    }),
    $h = kt(dk),
    fk = {
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
    },
    pk = {
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
    },
    hk = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
function mk(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = hk[e]) ? !!t[e] : !1
}
function Cf() {
    return mk
}
var gk = Se({}, da, {
        key: function(e) {
            if (e.key) {
                var t = fk[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = hs(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? pk[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Cf,
        charCode: function(e) {
            return e.type === "keypress" ? hs(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? hs(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    vk = kt(gk),
    yk = Se({}, Tl, {
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
    }),
    Oh = kt(yk),
    Sk = Se({}, da, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Cf
    }),
    bk = kt(Sk),
    xk = Se({}, Io, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wk = kt(xk),
    kk = Se({}, Tl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Ck = kt(kk),
    _k = [9, 13, 27, 32],
    _f = Tn && "CompositionEvent" in window,
    ui = null;
Tn && "documentMode" in document && (ui = document.documentMode);
var Tk = Tn && "TextEvent" in window && !ui,
    Iv = Tn && (!_f || ui && 8 < ui && 11 >= ui),
    Bh = String.fromCharCode(32),
    Dh = !1;
function Lv(e, t) {
    switch (e) {
    case "keyup":
        return _k.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Fv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Xr = !1;
function Ek(e, t) {
    switch (e) {
    case "compositionend":
        return Fv(t);
    case "keypress":
        return t.which !== 32 ? null : (Dh = !0, Bh);
    case "textInput":
        return e = t.data, e === Bh && Dh ? null : e;
    default:
        return null
    }
}
function Pk(e, t) {
    if (Xr)
        return e === "compositionend" || !_f && Lv(e, t) ? (e = zv(), ps = wf = Hn = null, Xr = !1, e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Iv && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Rk = {
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
function Vh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rk[e.type] : t === "textarea"
}
function Nv(e, t, n, r) {
    pv(r),
    t = Vs(t, "onChange"),
    0 < t.length && (n = new kf("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var ci = null,
    Ni = null;
function Ak(e) {
    Kv(e, 0)
}
function El(e) {
    var t = Jr(e);
    if (av(t))
        return e
}
function Mk(e, t) {
    if (e === "change")
        return t
}
var $v = !1;
if (Tn) {
    var ju;
    if (Tn) {
        var Wu = "oninput" in document;
        if (!Wu) {
            var jh = document.createElement("div");
            jh.setAttribute("oninput", "return;"),
            Wu = typeof jh.oninput == "function"
        }
        ju = Wu
    } else
        ju = !1;
    $v = ju && (!document.documentMode || 9 < document.documentMode)
}
function Wh() {
    ci && (ci.detachEvent("onpropertychange", Ov), Ni = ci = null)
}
function Ov(e) {
    if (e.propertyName === "value" && El(Ni)) {
        var t = [];
        Nv(t, Ni, e, vf(e)),
        vv(Ak, t)
    }
}
function zk(e, t, n) {
    e === "focusin" ? (Wh(), ci = t, Ni = n, ci.attachEvent("onpropertychange", Ov)) : e === "focusout" && Wh()
}
function Ik(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return El(Ni)
}
function Lk(e, t) {
    if (e === "click")
        return El(t)
}
function Fk(e, t) {
    if (e === "input" || e === "change")
        return El(t)
}
function Nk(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Xt = typeof Object.is == "function" ? Object.is : Nk;
function $i(e, t) {
    if (Xt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Pc.call(t, o) || !Xt(e[o], t[o]))
            return !1
    }
    return !0
}
function Hh(e) {
    for (; e && e.firstChild;)
        e = e.firstChild;
    return e
}
function Uh(e, t) {
    var n = Hh(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e:
        {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }n = Hh(n)
    }
}
function Bv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Bv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Dv() {
    for (var e = window, t = Ls(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ls(e.document)
    }
    return t
}
function Tf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function $k(e) {
    var t = Dv(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Bv(n.ownerDocument.documentElement, n)) {
        if (r !== null && Tf(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length,
                    i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r, r = i, i = o),
                o = Uh(n, i);
                var a = Uh(n, r);
                o && a && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;)
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Ok = Tn && "documentMode" in document && 11 >= document.documentMode,
    qr = null,
    Kc = null,
    di = null,
    Yc = !1;
function Gh(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yc || qr == null || qr !== Ls(r) || (r = qr, "selectionStart" in r && Tf(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), di && $i(di, r) || (di = r, r = Vs(Kc, "onSelect"), 0 < r.length && (t = new kf("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = qr)))
}
function Va(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Zr = {
        animationend: Va("Animation", "AnimationEnd"),
        animationiteration: Va("Animation", "AnimationIteration"),
        animationstart: Va("Animation", "AnimationStart"),
        transitionend: Va("Transition", "TransitionEnd")
    },
    Hu = {},
    Vv = {};
Tn && (Vv = document.createElement("div").style, "AnimationEvent" in window || (delete Zr.animationend.animation, delete Zr.animationiteration.animation, delete Zr.animationstart.animation), "TransitionEvent" in window || delete Zr.transitionend.transition);
function Pl(e) {
    if (Hu[e])
        return Hu[e];
    if (!Zr[e])
        return e;
    var t = Zr[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Vv)
            return Hu[e] = t[n];
    return e
}
var jv = Pl("animationend"),
    Wv = Pl("animationiteration"),
    Hv = Pl("animationstart"),
    Uv = Pl("transitionend"),
    Gv = new Map,
    Kh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ar(e, t) {
    Gv.set(e, t),
    Nr(t, [e])
}
for (var Uu = 0; Uu < Kh.length; Uu++) {
    var Gu = Kh[Uu],
        Bk = Gu.toLowerCase(),
        Dk = Gu[0].toUpperCase() + Gu.slice(1);
    ar(Bk, "on" + Dk)
}
ar(jv, "onAnimationEnd");
ar(Wv, "onAnimationIteration");
ar(Hv, "onAnimationStart");
ar("dblclick", "onDoubleClick");
ar("focusin", "onFocus");
ar("focusout", "onBlur");
ar(Uv, "onTransitionEnd");
wo("onMouseEnter", ["mouseout", "mouseover"]);
wo("onMouseLeave", ["mouseout", "mouseover"]);
wo("onPointerEnter", ["pointerout", "pointerover"]);
wo("onPointerLeave", ["pointerout", "pointerover"]);
Nr("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Nr("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Nr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Nr("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Nr("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    Vk = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
function Yh(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Bw(r, t, void 0, e),
    e.currentTarget = null
}
function Kv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e:
        {
            var i = void 0;
            if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                    var s = r[a],
                        l = s.instance,
                        u = s.currentTarget;
                    if (s = s.listener, l !== i && o.isPropagationStopped())
                        break e;
                    Yh(o, s, u),
                    i = l
                }
            else
                for (a = 0; a < r.length; a++) {
                    if (s = r[a], l = s.instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped())
                        break e;
                    Yh(o, s, u),
                    i = l
                }
        }
    }
    if (Ns)
        throw e = Wc, Ns = !1, Wc = null, e
}
function ue(e, t) {
    var n = t[Jc];
    n === void 0 && (n = t[Jc] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Yv(t, e, 2, !1), n.add(r))
}
function Ku(e, t, n) {
    var r = 0;
    t && (r |= 4),
    Yv(n, e, r, t)
}
var ja = "_reactListening" + Math.random().toString(36).slice(2);
function Oi(e) {
    if (!e[ja]) {
        e[ja] = !0,
        tv.forEach(function(n) {
            n !== "selectionchange" && (Vk.has(n) || Ku(n, !1, e), Ku(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ja] || (t[ja] = !0, Ku("selectionchange", !1, t))
    }
}
function Yv(e, t, n, r) {
    switch (Mv(t)) {
    case 1:
        var o = tk;
        break;
    case 4:
        o = nk;
        break;
    default:
        o = xf
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !jc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Yu(e, t, n, r, o) {
    var i = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
        e:
        for (;;) {
            if (r === null)
                return;
            var a = r.tag;
            if (a === 3 || a === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (a === 4)
                    for (a = r.return; a !== null;) {
                        var l = a.tag;
                        if ((l === 3 || l === 4) && (l = a.stateNode.containerInfo, l === o || l.nodeType === 8 && l.parentNode === o))
                            return;
                        a = a.return
                    }
                for (; s !== null;) {
                    if (a = br(s), a === null)
                        return;
                    if (l = a.tag, l === 5 || l === 6) {
                        r = i = a;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    vv(function() {
        var u = i,
            c = vf(n),
            d = [];
        e:
        {
            var f = Gv.get(e);
            if (f !== void 0) {
                var h = kf,
                    y = e;
                switch (e) {
                case "keypress":
                    if (hs(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    h = vk;
                    break;
                case "focusin":
                    y = "focus",
                    h = Vu;
                    break;
                case "focusout":
                    y = "blur",
                    h = Vu;
                    break;
                case "beforeblur":
                case "afterblur":
                    h = Vu;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    h = Nh;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    h = ik;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    h = bk;
                    break;
                case jv:
                case Wv:
                case Hv:
                    h = lk;
                    break;
                case Uv:
                    h = wk;
                    break;
                case "scroll":
                    h = rk;
                    break;
                case "wheel":
                    h = Ck;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    h = ck;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    h = Oh
                }
                var S = (t & 4) !== 0,
                    C = !S && e === "scroll",
                    g = S ? f !== null ? f + "Capture" : null : f;
                S = [];
                for (var p = u, m; p !== null;) {
                    m = p;
                    var b = m.stateNode;
                    if (m.tag === 5 && b !== null && (m = b, g !== null && (b = zi(p, g), b != null && S.push(Bi(p, b, m)))), C)
                        break;
                    p = p.return
                }
                0 < S.length && (f = new h(f, y, null, n, c), d.push({
                    event: f,
                    listeners: S
                }))
            }
        }if ((t & 7) === 0) {
            e:
            {
                if (f = e === "mouseover" || e === "pointerover", h = e === "mouseout" || e === "pointerout", f && n !== Dc && (y = n.relatedTarget || n.fromElement) && (br(y) || y[En]))
                    break e;
                if ((h || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window, h ? (y = n.relatedTarget || n.toElement, h = u, y = y ? br(y) : null, y !== null && (C = $r(y), y !== C || y.tag !== 5 && y.tag !== 6) && (y = null)) : (h = null, y = u), h !== y)) {
                    if (S = Nh, b = "onMouseLeave", g = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (S = Oh, b = "onPointerLeave", g = "onPointerEnter", p = "pointer"), C = h == null ? f : Jr(h), m = y == null ? f : Jr(y), f = new S(b, p + "leave", h, n, c), f.target = C, f.relatedTarget = m, b = null, br(c) === u && (S = new S(g, p + "enter", y, n, c), S.target = m, S.relatedTarget = C, b = S), C = b, h && y)
                        t:
                        {
                            for (S = h, g = y, p = 0, m = S; m; m = Wr(m))
                                p++;
                            for (m = 0, b = g; b; b = Wr(b))
                                m++;
                            for (; 0 < p - m;)
                                S = Wr(S),
                                p--;
                            for (; 0 < m - p;)
                                g = Wr(g),
                                m--;
                            for (; p--;) {
                                if (S === g || g !== null && S === g.alternate)
                                    break t;
                                S = Wr(S),
                                g = Wr(g)
                            }
                            S = null
                        } else
                        S = null;
                    h !== null && Qh(d, f, h, S, !1),
                    y !== null && C !== null && Qh(d, C, y, S, !0)
                }
            }e:
            {
                if (f = u ? Jr(u) : window, h = f.nodeName && f.nodeName.toLowerCase(), h === "select" || h === "input" && f.type === "file")
                    var _ = Mk;
                else if (Vh(f))
                    if ($v)
                        _ = Fk;
                    else {
                        _ = Ik;
                        var R = zk
                    }
                else
                    (h = f.nodeName) && h.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (_ = Lk);
                if (_ && (_ = _(e, u))) {
                    Nv(d, _, n, c);
                    break e
                }
                R && R(e, f, u),
                e === "focusout" && (R = f._wrapperState) && R.controlled && f.type === "number" && Fc(f, "number", f.value)
            }switch (R = u ? Jr(u) : window, e) {
            case "focusin":
                (Vh(R) || R.contentEditable === "true") && (qr = R, Kc = u, di = null);
                break;
            case "focusout":
                di = Kc = qr = null;
                break;
            case "mousedown":
                Yc = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Yc = !1,
                Gh(d, n, c);
                break;
            case "selectionchange":
                if (Ok)
                    break;
            case "keydown":
            case "keyup":
                Gh(d, n, c)
            }
            var E;
            if (_f)
                e:
                {
                    switch (e) {
                    case "compositionstart":
                        var I = "onCompositionStart";
                        break e;
                    case "compositionend":
                        I = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        I = "onCompositionUpdate";
                        break e
                    }
                    I = void 0
                } else
                Xr ? Lv(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
            I && (Iv && n.locale !== "ko" && (Xr || I !== "onCompositionStart" ? I === "onCompositionEnd" && Xr && (E = zv()) : (Hn = c, wf = "value" in Hn ? Hn.value : Hn.textContent, Xr = !0)), R = Vs(u, I), 0 < R.length && (I = new $h(I, e, null, n, c), d.push({
                event: I,
                listeners: R
            }), E ? I.data = E : (E = Fv(n), E !== null && (I.data = E)))),
            (E = Tk ? Ek(e, n) : Pk(e, n)) && (u = Vs(u, "onBeforeInput"), 0 < u.length && (c = new $h("onBeforeInput", "beforeinput", null, n, c), d.push({
                event: c,
                listeners: u
            }), c.data = E))
        }
        Kv(d, t)
    })
}
function Bi(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Vs(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var o = e,
            i = o.stateNode;
        o.tag === 5 && i !== null && (o = i, i = zi(e, n), i != null && r.unshift(Bi(e, i, o)), i = zi(e, t), i != null && r.push(Bi(e, i, o))),
        e = e.return
    }
    return r
}
function Wr(e) {
    if (e === null)
        return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Qh(e, t, n, r, o) {
    for (var i = t._reactName, a = []; n !== null && n !== r;) {
        var s = n,
            l = s.alternate,
            u = s.stateNode;
        if (l !== null && l === r)
            break;
        s.tag === 5 && u !== null && (s = u, o ? (l = zi(n, i), l != null && a.unshift(Bi(n, l, s))) : o || (l = zi(n, i), l != null && a.push(Bi(n, l, s)))),
        n = n.return
    }
    a.length !== 0 && e.push({
        event: t,
        listeners: a
    })
}
var jk = /\r\n?/g,
    Wk = /\u0000|\uFFFD/g;
function Xh(e) {
    return (typeof e == "string" ? e : "" + e).replace(jk, `
`
    ).replace(Wk, "")
}
function Wa(e, t, n) {
    if (t = Xh(t), Xh(e) !== t && n)
        throw Error(z(425))
}
function js() {}
var Qc = null,
    Xc = null;
function qc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Zc = typeof setTimeout == "function" ? setTimeout : void 0,
    Hk = typeof clearTimeout == "function" ? clearTimeout : void 0,
    qh = typeof Promise == "function" ? Promise : void 0,
    Uk = typeof queueMicrotask == "function" ? queueMicrotask : typeof qh < "u" ? function(e) {
        return qh.resolve(null).then(e).catch(Gk)
    } : Zc;
function Gk(e) {
    setTimeout(function() {
        throw e
    })
}
function Qu(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n), o && o.nodeType === 8)
            if (n = o.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    Fi(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    Fi(t)
}
function Zn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Zh(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Lo = Math.random().toString(36).slice(2),
    on = "__reactFiber$" + Lo,
    Di = "__reactProps$" + Lo,
    En = "__reactContainer$" + Lo,
    Jc = "__reactEvents$" + Lo,
    Kk = "__reactListeners$" + Lo,
    Yk = "__reactHandles$" + Lo;
function br(e) {
    var t = e[on];
    if (t)
        return t;
    for (var n = e.parentNode; n;) {
        if (t = n[En] || n[on]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Zh(e); e !== null;) {
                    if (n = e[on])
                        return n;
                    e = Zh(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function fa(e) {
    return e = e[on] || e[En], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Jr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(z(33))
}
function Rl(e) {
    return e[Di] || null
}
var ed = [],
    eo = -1;
function sr(e) {
    return {
        current: e
    }
}
function de(e) {
    0 > eo || (e.current = ed[eo], ed[eo] = null, eo--)
}
function se(e, t) {
    eo++,
    ed[eo] = e.current,
    e.current = t
}
var or = {},
    Ye = sr(or),
    at = sr(!1),
    Ar = or;
function ko(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return or;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
}
function st(e) {
    return e = e.childContextTypes, e != null
}
function Ws() {
    de(at),
    de(Ye)
}
function Jh(e, t, n) {
    if (Ye.current !== or)
        throw Error(z(168));
    se(Ye, t),
    se(at, n)
}
function Qv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(z(108, zw(e) || "Unknown", o));
    return Se({}, n, r)
}
function Hs(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || or, Ar = Ye.current, se(Ye, e), se(at, at.current), !0
}
function em(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(z(169));
    n ? (e = Qv(e, t, Ar), r.__reactInternalMemoizedMergedChildContext = e, de(at), de(Ye), se(Ye, e)) : de(at),
    se(at, n)
}
var bn = null,
    Al = !1,
    Xu = !1;
function Xv(e) {
    bn === null ? bn = [e] : bn.push(e)
}
function Qk(e) {
    Al = !0,
    Xv(e)
}
function lr() {
    if (!Xu && bn !== null) {
        Xu = !0;
        var e = 0,
            t = ne;
        try {
            var n = bn;
            for (ne = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null)
            }
            bn = null,
            Al = !1
        } catch (o) {
            throw bn !== null && (bn = bn.slice(e + 1)), xv(yf, lr), o
        } finally {
            ne = t,
            Xu = !1
        }
    }
    return null
}
var to = [],
    no = 0,
    Us = null,
    Gs = 0,
    Rt = [],
    At = 0,
    Mr = null,
    wn = 1,
    kn = "";
function mr(e, t) {
    to[no++] = Gs,
    to[no++] = Us,
    Us = e,
    Gs = t
}
function qv(e, t, n) {
    Rt[At++] = wn,
    Rt[At++] = kn,
    Rt[At++] = Mr,
    Mr = e;
    var r = wn;
    e = kn;
    var o = 32 - Ut(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - Ut(t) + o;
    if (30 < i) {
        var a = o - o % 5;
        i = (r & (1 << a) - 1).toString(32),
        r >>= a,
        o -= a,
        wn = 1 << 32 - Ut(t) + o | n << o | r,
        kn = i + e
    } else
        wn = 1 << i | n << o | r,
        kn = e
}
function Ef(e) {
    e.return !== null && (mr(e, 1), qv(e, 1, 0))
}
function Pf(e) {
    for (; e === Us;)
        Us = to[--no],
        to[no] = null,
        Gs = to[--no],
        to[no] = null;
    for (; e === Mr;)
        Mr = Rt[--At],
        Rt[At] = null,
        kn = Rt[--At],
        Rt[At] = null,
        wn = Rt[--At],
        Rt[At] = null
}
var vt = null,
    gt = null,
    me = !1,
    Ht = null;
function Zv(e, t) {
    var n = Mt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}
function tm(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, vt = e, gt = Zn(t.firstChild), !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, vt = e, gt = null, !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Mr !== null ? {
            id: wn,
            overflow: kn
        } : null, e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        }, n = Mt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, vt = e, gt = null, !0) : !1;
    default:
        return !1
    }
}
function td(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function nd(e) {
    if (me) {
        var t = gt;
        if (t) {
            var n = t;
            if (!tm(e, t)) {
                if (td(e))
                    throw Error(z(418));
                t = Zn(n.nextSibling);
                var r = vt;
                t && tm(e, t) ? Zv(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, vt = e)
            }
        } else {
            if (td(e))
                throw Error(z(418));
            e.flags = e.flags & -4097 | 2,
            me = !1,
            vt = e
        }
    }
}
function nm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
        e = e.return;
    vt = e
}
function Ha(e) {
    if (e !== vt)
        return !1;
    if (!me)
        return nm(e), me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !qc(e.type, e.memoizedProps)), t && (t = gt)) {
        if (td(e))
            throw Jv(), Error(z(418));
        for (; t;)
            Zv(e, t),
            t = Zn(t.nextSibling)
    }
    if (nm(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
            throw Error(z(317));
        e:
        {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            gt = Zn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            gt = null
        }
    } else
        gt = vt ? Zn(e.stateNode.nextSibling) : null;
    return !0
}
function Jv() {
    for (var e = gt; e;)
        e = Zn(e.nextSibling)
}
function Co() {
    gt = vt = null,
    me = !1
}
function Rf(e) {
    Ht === null ? Ht = [e] : Ht.push(e)
}
var Xk = zn.ReactCurrentBatchConfig;
function jt(e, t) {
    if (e && e.defaultProps) {
        t = Se({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Ks = sr(null),
    Ys = null,
    ro = null,
    Af = null;
function Mf() {
    Af = ro = Ys = null
}
function zf(e) {
    var t = Ks.current;
    de(Ks),
    e._currentValue = t
}
function rd(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
            break;
        e = e.return
    }
}
function po(e, t) {
    Ys = e,
    Af = ro = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (it = !0), e.firstContext = null)
}
function Lt(e) {
    var t = e._currentValue;
    if (Af !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        }, ro === null) {
            if (Ys === null)
                throw Error(z(308));
            ro = e,
            Ys.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            ro = ro.next = e;
    return t
}
var xr = null;
function If(e) {
    xr === null ? xr = [e] : xr.push(e)
}
function ey(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, If(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Pn(e, r)
}
function Pn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;)
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Dn = !1;
function Lf(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function ty(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function _n(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Jn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared, (q & 2) !== 0) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Pn(e, n)
    }
    return o = r.interleaved, o === null ? (t.next = t, If(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Pn(e, n)
}
function ms(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sf(e, n)
    }
}
function rm(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var o = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var a = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = a : i = i.next = a,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Qs(e, t, n, r) {
    var o = e.updateQueue;
    Dn = !1;
    var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var l = s,
            u = l.next;
        l.next = null,
        a === null ? i = u : a.next = u,
        a = l;
        var c = e.alternate;
        c !== null && (c = c.updateQueue, s = c.lastBaseUpdate, s !== a && (s === null ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
    }
    if (i !== null) {
        var d = o.baseState;
        a = 0,
        c = u = l = null,
        s = i;
        do {
            var f = s.lane,
                h = s.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: h,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e:
                {
                    var y = e,
                        S = s;
                    switch (f = t, h = n, S.tag) {
                    case 1:
                        if (y = S.payload, typeof y == "function") {
                            d = y.call(h, d, f);
                            break e
                        }
                        d = y;
                        break e;
                    case 3:
                        y.flags = y.flags & -65537 | 128;
                    case 0:
                        if (y = S.payload, f = typeof y == "function" ? y.call(h, d, f) : y, f == null)
                            break e;
                        d = Se({}, d, f);
                        break e;
                    case 2:
                        Dn = !0
                    }
                }s.callback !== null && s.lane !== 0 && (e.flags |= 64, f = o.effects, f === null ? o.effects = [s] : f.push(s))
            } else
                h = {
                    eventTime: h,
                    lane: f,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                c === null ? (u = c = h, l = d) : c = c.next = h,
                a |= f;
            if (s = s.next, s === null) {
                if (s = o.shared.pending, s === null)
                    break;
                f = s,
                s = f.next,
                f.next = null,
                o.lastBaseUpdate = f,
                o.shared.pending = null
            }
        } while (1);
        if (c === null && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, t = o.shared.interleaved, t !== null) {
            o = t;
            do a |= o.lane,
            o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Ir |= a,
        e.lanes = a,
        e.memoizedState = d
    }
}
function om(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (r.callback = null, r = n, typeof o != "function")
                    throw Error(z(191, o));
                o.call(r)
            }
        }
}
var ny = new ev.Component().refs;
function od(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Se({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ml = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? $r(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Je(),
            o = tr(e),
            i = _n(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = Jn(e, i, o),
        t !== null && (Gt(t, e, o, r), ms(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Je(),
            o = tr(e),
            i = _n(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = Jn(e, i, o),
        t !== null && (Gt(t, e, o, r), ms(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Je(),
            r = tr(e),
            o = _n(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = Jn(e, o, r),
        t !== null && (Gt(t, e, r, n), ms(t, e, r))
    }
};
function im(e, t, n, r, o, i, a) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, a) : t.prototype && t.prototype.isPureReactComponent ? !$i(n, r) || !$i(o, i) : !0
}
function ry(e, t, n) {
    var r = !1,
        o = or,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = Lt(i) : (o = st(t) ? Ar : Ye.current, r = t.contextTypes, i = (r = r != null) ? ko(e, o) : or), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
}
function am(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ml.enqueueReplaceState(t, t.state, null)
}
function id(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = ny,
    Lf(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = Lt(i) : (i = st(t) ? Ar : Ye.current, o.context = ko(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (od(e, t, i, n), o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Ml.enqueueReplaceState(o, o.state, null), Qs(e, n, o, r), o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function Yo(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1)
                    throw Error(z(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(z(147, e));
            var o = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(a) {
                var s = o.refs;
                s === ny && (s = o.refs = {}),
                a === null ? delete s[i] : s[i] = a
            }, t._stringRef = i, t)
        }
        if (typeof e != "string")
            throw Error(z(284));
        if (!n._owner)
            throw Error(z(290, e))
    }
    return e
}
function Ua(e, t) {
    throw e = Object.prototype.toString.call(t), Error(z(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function sm(e) {
    var t = e._init;
    return t(e._payload)
}
function oy(e) {
    function t(g, p) {
        if (e) {
            var m = g.deletions;
            m === null ? (g.deletions = [p], g.flags |= 16) : m.push(p)
        }
    }
    function n(g, p) {
        if (!e)
            return null;
        for (; p !== null;)
            t(g, p),
            p = p.sibling;
        return null
    }
    function r(g, p) {
        for (g = new Map; p !== null;)
            p.key !== null ? g.set(p.key, p) : g.set(p.index, p),
            p = p.sibling;
        return g
    }
    function o(g, p) {
        return g = nr(g, p), g.index = 0, g.sibling = null, g
    }
    function i(g, p, m) {
        return g.index = m, e ? (m = g.alternate, m !== null ? (m = m.index, m < p ? (g.flags |= 2, p) : m) : (g.flags |= 2, p)) : (g.flags |= 1048576, p)
    }
    function a(g) {
        return e && g.alternate === null && (g.flags |= 2), g
    }
    function s(g, p, m, b) {
        return p === null || p.tag !== 6 ? (p = rc(m, g.mode, b), p.return = g, p) : (p = o(p, m), p.return = g, p)
    }
    function l(g, p, m, b) {
        var _ = m.type;
        return _ === Qr ? c(g, p, m.props.children, b, m.key) : p !== null && (p.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Bn && sm(_) === p.type) ? (b = o(p, m.props), b.ref = Yo(g, p, m), b.return = g, b) : (b = xs(m.type, m.key, m.props, null, g.mode, b), b.ref = Yo(g, p, m), b.return = g, b)
    }
    function u(g, p, m, b) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== m.containerInfo || p.stateNode.implementation !== m.implementation ? (p = oc(m, g.mode, b), p.return = g, p) : (p = o(p, m.children || []), p.return = g, p)
    }
    function c(g, p, m, b, _) {
        return p === null || p.tag !== 7 ? (p = Er(m, g.mode, b, _), p.return = g, p) : (p = o(p, m), p.return = g, p)
    }
    function d(g, p, m) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = rc("" + p, g.mode, m), p.return = g, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case La:
                return m = xs(p.type, p.key, p.props, null, g.mode, m), m.ref = Yo(g, null, p), m.return = g, m;
            case Yr:
                return p = oc(p, g.mode, m), p.return = g, p;
            case Bn:
                var b = p._init;
                return d(g, b(p._payload), m)
            }
            if (ti(p) || Wo(p))
                return p = Er(p, g.mode, m, null), p.return = g, p;
            Ua(g, p)
        }
        return null
    }
    function f(g, p, m, b) {
        var _ = p !== null ? p.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return _ !== null ? null : s(g, p, "" + m, b);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case La:
                return m.key === _ ? l(g, p, m, b) : null;
            case Yr:
                return m.key === _ ? u(g, p, m, b) : null;
            case Bn:
                return _ = m._init, f(g, p, _(m._payload), b)
            }
            if (ti(m) || Wo(m))
                return _ !== null ? null : c(g, p, m, b, null);
            Ua(g, m)
        }
        return null
    }
    function h(g, p, m, b, _) {
        if (typeof b == "string" && b !== "" || typeof b == "number")
            return g = g.get(m) || null, s(p, g, "" + b, _);
        if (typeof b == "object" && b !== null) {
            switch (b.$$typeof) {
            case La:
                return g = g.get(b.key === null ? m : b.key) || null, l(p, g, b, _);
            case Yr:
                return g = g.get(b.key === null ? m : b.key) || null, u(p, g, b, _);
            case Bn:
                var R = b._init;
                return h(g, p, m, R(b._payload), _)
            }
            if (ti(b) || Wo(b))
                return g = g.get(m) || null, c(p, g, b, _, null);
            Ua(p, b)
        }
        return null
    }
    function y(g, p, m, b) {
        for (var _ = null, R = null, E = p, I = p = 0, j = null; E !== null && I < m.length; I++) {
            E.index > I ? (j = E, E = null) : j = E.sibling;
            var B = f(g, E, m[I], b);
            if (B === null) {
                E === null && (E = j);
                break
            }
            e && E && B.alternate === null && t(g, E),
            p = i(B, p, I),
            R === null ? _ = B : R.sibling = B,
            R = B,
            E = j
        }
        if (I === m.length)
            return n(g, E), me && mr(g, I), _;
        if (E === null) {
            for (; I < m.length; I++)
                E = d(g, m[I], b),
                E !== null && (p = i(E, p, I), R === null ? _ = E : R.sibling = E, R = E);
            return me && mr(g, I), _
        }
        for (E = r(g, E); I < m.length; I++)
            j = h(E, g, I, m[I], b),
            j !== null && (e && j.alternate !== null && E.delete(j.key === null ? I : j.key), p = i(j, p, I), R === null ? _ = j : R.sibling = j, R = j);
        return e && E.forEach(function(le) {
            return t(g, le)
        }), me && mr(g, I), _
    }
    function S(g, p, m, b) {
        var _ = Wo(m);
        if (typeof _ != "function")
            throw Error(z(150));
        if (m = _.call(m), m == null)
            throw Error(z(151));
        for (var R = _ = null, E = p, I = p = 0, j = null, B = m.next(); E !== null && !B.done; I++, B = m.next()) {
            E.index > I ? (j = E, E = null) : j = E.sibling;
            var le = f(g, E, B.value, b);
            if (le === null) {
                E === null && (E = j);
                break
            }
            e && E && le.alternate === null && t(g, E),
            p = i(le, p, I),
            R === null ? _ = le : R.sibling = le,
            R = le,
            E = j
        }
        if (B.done)
            return n(g, E), me && mr(g, I), _;
        if (E === null) {
            for (; !B.done; I++, B = m.next())
                B = d(g, B.value, b),
                B !== null && (p = i(B, p, I), R === null ? _ = B : R.sibling = B, R = B);
            return me && mr(g, I), _
        }
        for (E = r(g, E); !B.done; I++, B = m.next())
            B = h(E, g, I, B.value, b),
            B !== null && (e && B.alternate !== null && E.delete(B.key === null ? I : B.key), p = i(B, p, I), R === null ? _ = B : R.sibling = B, R = B);
        return e && E.forEach(function(ke) {
            return t(g, ke)
        }), me && mr(g, I), _
    }
    function C(g, p, m, b) {
        if (typeof m == "object" && m !== null && m.type === Qr && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case La:
                e:
                {
                    for (var _ = m.key, R = p; R !== null;) {
                        if (R.key === _) {
                            if (_ = m.type, _ === Qr) {
                                if (R.tag === 7) {
                                    n(g, R.sibling),
                                    p = o(R, m.props.children),
                                    p.return = g,
                                    g = p;
                                    break e
                                }
                            } else if (R.elementType === _ || typeof _ == "object" && _ !== null && _.$$typeof === Bn && sm(_) === R.type) {
                                n(g, R.sibling),
                                p = o(R, m.props),
                                p.ref = Yo(g, R, m),
                                p.return = g,
                                g = p;
                                break e
                            }
                            n(g, R);
                            break
                        } else
                            t(g, R);
                        R = R.sibling
                    }
                    m.type === Qr ? (p = Er(m.props.children, g.mode, b, m.key), p.return = g, g = p) : (b = xs(m.type, m.key, m.props, null, g.mode, b), b.ref = Yo(g, p, m), b.return = g, g = b)
                }return a(g);
            case Yr:
                e:
                {
                    for (R = m.key; p !== null;) {
                        if (p.key === R)
                            if (p.tag === 4 && p.stateNode.containerInfo === m.containerInfo && p.stateNode.implementation === m.implementation) {
                                n(g, p.sibling),
                                p = o(p, m.children || []),
                                p.return = g,
                                g = p;
                                break e
                            } else {
                                n(g, p);
                                break
                            }
                        else
                            t(g, p);
                        p = p.sibling
                    }
                    p = oc(m, g.mode, b),
                    p.return = g,
                    g = p
                }return a(g);
            case Bn:
                return R = m._init, C(g, p, R(m._payload), b)
            }
            if (ti(m))
                return y(g, p, m, b);
            if (Wo(m))
                return S(g, p, m, b);
            Ua(g, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, p !== null && p.tag === 6 ? (n(g, p.sibling), p = o(p, m), p.return = g, g = p) : (n(g, p), p = rc(m, g.mode, b), p.return = g, g = p), a(g)) : n(g, p)
    }
    return C
}
var _o = oy(!0),
    iy = oy(!1),
    pa = {},
    ln = sr(pa),
    Vi = sr(pa),
    ji = sr(pa);
function wr(e) {
    if (e === pa)
        throw Error(z(174));
    return e
}
function Ff(e, t) {
    switch (se(ji, t), se(Vi, e), se(ln, pa), e = t.nodeType, e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : $c(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = $c(t, e)
    }
    de(ln),
    se(ln, t)
}
function To() {
    de(ln),
    de(Vi),
    de(ji)
}
function ay(e) {
    wr(ji.current);
    var t = wr(ln.current),
        n = $c(t, e.type);
    t !== n && (se(Vi, e), se(ln, n))
}
function Nf(e) {
    Vi.current === e && (de(ln), de(Vi))
}
var ve = sr(0);
function Xs(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if ((t.flags & 128) !== 0)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var qu = [];
function $f() {
    for (var e = 0; e < qu.length; e++)
        qu[e]._workInProgressVersionPrimary = null;
    qu.length = 0
}
var gs = zn.ReactCurrentDispatcher,
    Zu = zn.ReactCurrentBatchConfig,
    zr = 0,
    ye = null,
    Ae = null,
    Le = null,
    qs = !1,
    fi = !1,
    Wi = 0,
    qk = 0;
function He() {
    throw Error(z(321))
}
function Of(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Xt(e[n], t[n]))
            return !1;
    return !0
}
function Bf(e, t, n, r, o, i) {
    if (zr = i, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, gs.current = e === null || e.memoizedState === null ? t2 : n2, e = n(r, o), fi) {
        i = 0;
        do {
            if (fi = !1, Wi = 0, 25 <= i)
                throw Error(z(301));
            i += 1,
            Le = Ae = null,
            t.updateQueue = null,
            gs.current = r2,
            e = n(r, o)
        } while (fi)
    }
    if (gs.current = Zs, t = Ae !== null && Ae.next !== null, zr = 0, Le = Ae = ye = null, qs = !1, t)
        throw Error(z(300));
    return e
}
function Df() {
    var e = Wi !== 0;
    return Wi = 0, e
}
function en() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Le === null ? ye.memoizedState = Le = e : Le = Le.next = e, Le
}
function Ft() {
    if (Ae === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = Ae.next;
    var t = Le === null ? ye.memoizedState : Le.next;
    if (t !== null)
        Le = t,
        Ae = e;
    else {
        if (e === null)
            throw Error(z(310));
        Ae = e,
        e = {
            memoizedState: Ae.memoizedState,
            baseState: Ae.baseState,
            baseQueue: Ae.baseQueue,
            queue: Ae.queue,
            next: null
        },
        Le === null ? ye.memoizedState = Le = e : Le = Le.next = e
    }
    return Le
}
function Hi(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ju(e) {
    var t = Ft(),
        n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = Ae,
        o = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var a = o.next;
            o.next = i.next,
            i.next = a
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var s = a = null,
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((zr & c) === c)
                l !== null && (l = l.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                l === null ? (s = l = d, a = r) : l = l.next = d,
                ye.lanes |= c,
                Ir |= c
            }
            u = u.next
        } while (u !== null && u !== i);
        l === null ? a = r : l.next = s,
        Xt(r, t.memoizedState) || (it = !0),
        t.memoizedState = r,
        t.baseState = a,
        t.baseQueue = l,
        n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        o = e;
        do i = o.lane,
        ye.lanes |= i,
        Ir |= i,
        o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function ec(e) {
    var t = Ft(),
        n = t.queue;
    if (n === null)
        throw Error(z(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var a = o = o.next;
        do i = e(i, a.action),
        a = a.next;
        while (a !== o);
        Xt(i, t.memoizedState) || (it = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function sy() {}
function ly(e, t) {
    var n = ye,
        r = Ft(),
        o = t(),
        i = !Xt(r.memoizedState, o);
    if (i && (r.memoizedState = o, it = !0), r = r.queue, Vf(dy.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || Le !== null && Le.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ui(9, cy.bind(null, n, r, o, t), void 0, null), Fe === null)
            throw Error(z(349));
        (zr & 30) !== 0 || uy(n, t, o)
    }
    return o
}
function uy(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ye.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}
function cy(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    fy(t) && py(e)
}
function dy(e, t, n) {
    return n(function() {
        fy(t) && py(e)
    })
}
function fy(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Xt(e, n)
    } catch {
        return !0
    }
}
function py(e) {
    var t = Pn(e, 1);
    t !== null && Gt(t, e, 1, -1)
}
function lm(e) {
    var t = en();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hi,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = e2.bind(null, ye, e), [t.memoizedState, e]
}
function Ui(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = ye.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}
function hy() {
    return Ft().memoizedState
}
function vs(e, t, n, r) {
    var o = en();
    ye.flags |= e,
    o.memoizedState = Ui(1 | t, n, void 0, r === void 0 ? null : r)
}
function zl(e, t, n, r) {
    var o = Ft();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ae !== null) {
        var a = Ae.memoizedState;
        if (i = a.destroy, r !== null && Of(r, a.deps)) {
            o.memoizedState = Ui(t, n, i, r);
            return
        }
    }
    ye.flags |= e,
    o.memoizedState = Ui(1 | t, n, i, r)
}
function um(e, t) {
    return vs(8390656, 8, e, t)
}
function Vf(e, t) {
    return zl(2048, 8, e, t)
}
function my(e, t) {
    return zl(4, 2, e, t)
}
function gy(e, t) {
    return zl(4, 4, e, t)
}
function vy(e, t) {
    if (typeof t == "function")
        return e = e(), t(e), function() {
            t(null)
        };
    if (t != null)
        return e = e(), t.current = e, function() {
            t.current = null
        }
}
function yy(e, t, n) {
    return n = n != null ? n.concat([e]) : null, zl(4, 4, vy.bind(null, t, e), n)
}
function jf() {}
function Sy(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Of(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}
function by(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Of(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}
function xy(e, t, n) {
    return (zr & 21) === 0 ? (e.baseState && (e.baseState = !1, it = !0), e.memoizedState = n) : (Xt(n, t) || (n = Cv(), ye.lanes |= n, Ir |= n, e.baseState = !0), t)
}
function Zk(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Zu.transition;
    Zu.transition = {};
    try {
        e(!1),
        t()
    } finally {
        ne = n,
        Zu.transition = r
    }
}
function wy() {
    return Ft().memoizedState
}
function Jk(e, t, n) {
    var r = tr(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    }, ky(e))
        Cy(t, n);
    else if (n = ey(e, t, n, r), n !== null) {
        var o = Je();
        Gt(n, e, r, o),
        _y(n, t, r)
    }
}
function e2(e, t, n) {
    var r = tr(e),
        o = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (ky(e))
        Cy(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
            try {
                var a = t.lastRenderedState,
                    s = i(a, n);
                if (o.hasEagerState = !0, o.eagerState = s, Xt(s, a)) {
                    var l = t.interleaved;
                    l === null ? (o.next = o, If(t)) : (o.next = l.next, l.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = ey(e, t, o, r),
        n !== null && (o = Je(), Gt(n, e, r, o), _y(n, t, r))
    }
}
function ky(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye
}
function Cy(e, t) {
    fi = qs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t),
    e.pending = t
}
function _y(e, t, n) {
    if ((n & 4194240) !== 0) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Sf(e, n)
    }
}
var Zs = {
        readContext: Lt,
        useCallback: He,
        useContext: He,
        useEffect: He,
        useImperativeHandle: He,
        useInsertionEffect: He,
        useLayoutEffect: He,
        useMemo: He,
        useReducer: He,
        useRef: He,
        useState: He,
        useDebugValue: He,
        useDeferredValue: He,
        useTransition: He,
        useMutableSource: He,
        useSyncExternalStore: He,
        useId: He,
        unstable_isNewReconciler: !1
    },
    t2 = {
        readContext: Lt,
        useCallback: function(e, t) {
            return en().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Lt,
        useEffect: um,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, vs(4194308, 4, vy.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return vs(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return vs(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = en();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = en();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Jk.bind(null, ye, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = en();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: lm,
        useDebugValue: jf,
        useDeferredValue: function(e) {
            return en().memoizedState = e
        },
        useTransition: function() {
            var e = lm(!1),
                t = e[0];
            return e = Zk.bind(null, e[1]), en().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = ye,
                o = en();
            if (me) {
                if (n === void 0)
                    throw Error(z(407));
                n = n()
            } else {
                if (n = t(), Fe === null)
                    throw Error(z(349));
                (zr & 30) !== 0 || uy(r, t, n)
            }
            o.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return o.queue = i, um(dy.bind(null, r, i, e), [e]), r.flags |= 2048, Ui(9, cy.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = en(),
                t = Fe.identifierPrefix;
            if (me) {
                var n = kn,
                    r = wn;
                n = (r & ~(1 << 32 - Ut(r) - 1)).toString(32) + n,
                t = ":" + t + "R" + n,
                n = Wi++,
                0 < n && (t += "H" + n.toString(32)),
                t += ":"
            } else
                n = qk++,
                t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    n2 = {
        readContext: Lt,
        useCallback: Sy,
        useContext: Lt,
        useEffect: Vf,
        useImperativeHandle: yy,
        useInsertionEffect: my,
        useLayoutEffect: gy,
        useMemo: by,
        useReducer: Ju,
        useRef: hy,
        useState: function() {
            return Ju(Hi)
        },
        useDebugValue: jf,
        useDeferredValue: function(e) {
            var t = Ft();
            return xy(t, Ae.memoizedState, e)
        },
        useTransition: function() {
            var e = Ju(Hi)[0],
                t = Ft().memoizedState;
            return [e, t]
        },
        useMutableSource: sy,
        useSyncExternalStore: ly,
        useId: wy,
        unstable_isNewReconciler: !1
    },
    r2 = {
        readContext: Lt,
        useCallback: Sy,
        useContext: Lt,
        useEffect: Vf,
        useImperativeHandle: yy,
        useInsertionEffect: my,
        useLayoutEffect: gy,
        useMemo: by,
        useReducer: ec,
        useRef: hy,
        useState: function() {
            return ec(Hi)
        },
        useDebugValue: jf,
        useDeferredValue: function(e) {
            var t = Ft();
            return Ae === null ? t.memoizedState = e : xy(t, Ae.memoizedState, e)
        },
        useTransition: function() {
            var e = ec(Hi)[0],
                t = Ft().memoizedState;
            return [e, t]
        },
        useMutableSource: sy,
        useSyncExternalStore: ly,
        useId: wy,
        unstable_isNewReconciler: !1
    };
function Eo(e, t) {
    try {
        var n = "",
            r = t;
        do n += Mw(r),
        r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: `
        + i.message + `
`
        + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function tc(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n != null ? n : null,
        digest: t != null ? t : null
    }
}
function ad(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var o2 = typeof WeakMap == "function" ? WeakMap : Map;
function Ty(e, t, n) {
    n = _n(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        el || (el = !0, gd = r),
        ad(e, t)
    }, n
}
function Ey(e, t, n) {
    n = _n(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        },
        n.callback = function() {
            ad(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ad(e, t),
        typeof r != "function" && (er === null ? er = new Set([this]) : er.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: a !== null ? a : ""
        })
    }), n
}
function cm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new o2;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set, r.set(t, o));
    o.has(n) || (o.add(n), e = y2.bind(null, e, t, n), t.then(e, e))
}
function dm(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function fm(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = _n(-1, 1), t.tag = 2, Jn(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
}
var i2 = zn.ReactCurrentOwner,
    it = !1;
function Ze(e, t, n, r) {
    t.child = e === null ? iy(t, null, n, r) : _o(t, e.child, n, r)
}
function pm(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return po(t, o), r = Bf(e, t, n, r, i, o), n = Df(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rn(e, t, o)) : (me && n && Ef(t), t.flags |= 1, Ze(e, t, r, o), t.child)
}
function hm(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Xf(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Py(e, t, i, r, o)) : (e = xs(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, (e.lanes & o) === 0) {
        var a = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : $i, n(a, r) && e.ref === t.ref)
            return Rn(e, t, o)
    }
    return t.flags |= 1, e = nr(i, r), e.ref = t.ref, e.return = t, t.child = e
}
function Py(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if ($i(i, r) && e.ref === t.ref)
            if (it = !1, t.pendingProps = r = i, (e.lanes & o) !== 0)
                (e.flags & 131072) !== 0 && (it = !0);
            else
                return t.lanes = e.lanes, Rn(e, t, o)
    }
    return sd(e, t, n, r, o)
}
function Ry(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if ((t.mode & 1) === 0)
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            se(io, mt),
            mt |= n;
        else {
            if ((n & 1073741824) === 0)
                return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                }, t.updateQueue = null, se(io, mt), mt |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            se(io, mt),
            mt |= r
        }
    else
        i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n,
        se(io, mt),
        mt |= r;
    return Ze(e, t, o, n), t.child
}
function Ay(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}
function sd(e, t, n, r, o) {
    var i = st(n) ? Ar : Ye.current;
    return i = ko(t, i), po(t, o), n = Bf(e, t, n, r, i, o), r = Df(), e !== null && !it ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rn(e, t, o)) : (me && r && Ef(t), t.flags |= 1, Ze(e, t, n, o), t.child)
}
function mm(e, t, n, r, o) {
    if (st(n)) {
        var i = !0;
        Hs(t)
    } else
        i = !1;
    if (po(t, o), t.stateNode === null)
        ys(e, t),
        ry(t, n, r),
        id(t, n, r, o),
        r = !0;
    else if (e === null) {
        var a = t.stateNode,
            s = t.memoizedProps;
        a.props = s;
        var l = a.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Lt(u) : (u = st(n) ? Ar : Ye.current, u = ko(t, u));
        var c = n.getDerivedStateFromProps,
            d = typeof c == "function" || typeof a.getSnapshotBeforeUpdate == "function";
        d || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== r || l !== u) && am(t, a, r, u),
        Dn = !1;
        var f = t.memoizedState;
        a.state = f,
        Qs(t, r, a, o),
        l = t.memoizedState,
        s !== r || f !== l || at.current || Dn ? (typeof c == "function" && (od(t, n, c, r), l = t.memoizedState), (s = Dn || im(t, n, s, r, f, l, u)) ? (d || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        a = t.stateNode,
        ty(e, t),
        s = t.memoizedProps,
        u = t.type === t.elementType ? s : jt(t.type, s),
        a.props = u,
        d = t.pendingProps,
        f = a.context,
        l = n.contextType,
        typeof l == "object" && l !== null ? l = Lt(l) : (l = st(n) ? Ar : Ye.current, l = ko(t, l));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s !== d || f !== l) && am(t, a, r, l),
        Dn = !1,
        f = t.memoizedState,
        a.state = f,
        Qs(t, r, a, o);
        var y = t.memoizedState;
        s !== d || f !== y || at.current || Dn ? (typeof h == "function" && (od(t, n, h, r), y = t.memoizedState), (u = Dn || im(t, n, u, r, f, y, l) || !1) ? (c || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, y, l), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, y, l)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), a.props = r, a.state = y, a.context = l, r = u) : (typeof a.componentDidUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return ld(e, t, n, r, i, o)
}
function ld(e, t, n, r, o, i) {
    Ay(e, t);
    var a = (t.flags & 128) !== 0;
    if (!r && !a)
        return o && em(t, n, !1), Rn(e, t, i);
    r = t.stateNode,
    i2.current = t;
    var s = a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && a ? (t.child = _o(t, e.child, null, i), t.child = _o(t, null, s, i)) : Ze(e, t, s, i), t.memoizedState = r.state, o && em(t, n, !0), t.child
}
function My(e) {
    var t = e.stateNode;
    t.pendingContext ? Jh(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Jh(e, t.context, !1),
    Ff(e, t.containerInfo)
}
function gm(e, t, n, r, o) {
    return Co(), Rf(o), t.flags |= 256, Ze(e, t, n, r), t.child
}
var ud = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function cd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function zy(e, t, n) {
    var r = t.pendingProps,
        o = ve.current,
        i = !1,
        a = (t.flags & 128) !== 0,
        s;
    if ((s = a) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), se(ve, o & 1), e === null)
        return nd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (a = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, a = {
            mode: "hidden",
            children: a
        }, (r & 1) === 0 && i !== null ? (i.childLanes = 0, i.pendingProps = a) : i = Fl(a, r, 0, null), e = Er(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = cd(n), t.memoizedState = ud, e) : Wf(t, a));
    if (o = e.memoizedState, o !== null && (s = o.dehydrated, s !== null))
        return a2(e, t, a, r, s, o, n);
    if (i) {
        i = r.fallback,
        a = t.mode,
        o = e.child,
        s = o.sibling;
        var l = {
            mode: "hidden",
            children: r.children
        };
        return (a & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = l, t.deletions = null) : (r = nr(o, l), r.subtreeFlags = o.subtreeFlags & 14680064), s !== null ? i = nr(s, i) : (i = Er(i, a, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, a = e.child.memoizedState, a = a === null ? cd(n) : {
            baseLanes: a.baseLanes | n,
            cachePool: null,
            transitions: a.transitions
        }, i.memoizedState = a, i.childLanes = e.childLanes & ~n, t.memoizedState = ud, r
    }
    return i = e.child, e = i.sibling, r = nr(i, {
        mode: "visible",
        children: r.children
    }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}
function Wf(e, t) {
    return t = Fl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}
function Ga(e, t, n, r) {
    return r !== null && Rf(r), _o(t, e.child, null, n), e = Wf(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}
function a2(e, t, n, r, o, i, a) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257, r = tc(Error(z(422))), Ga(e, t, a, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, o = t.mode, r = Fl({
            mode: "visible",
            children: r.children
        }, o, 0, null), i = Er(i, o, a, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, (t.mode & 1) !== 0 && _o(t, e.child, null, a), t.child.memoizedState = cd(a), t.memoizedState = ud, i);
    if ((t.mode & 1) === 0)
        return Ga(e, t, a, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset, r)
            var s = r.dgst;
        return r = s, i = Error(z(419)), r = tc(i, r, void 0), Ga(e, t, a, r)
    }
    if (s = (a & e.childLanes) !== 0, it || s) {
        if (r = Fe, r !== null) {
            switch (a & -a) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = (o & (r.suspendedLanes | a)) !== 0 ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o, Pn(e, o), Gt(r, e, o, -1))
        }
        return Qf(), r = tc(Error(z(421))), Ga(e, t, a, r)
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = S2.bind(null, e), o._reactRetry = t, null) : (e = i.treeContext, gt = Zn(o.nextSibling), vt = t, me = !0, Ht = null, e !== null && (Rt[At++] = wn, Rt[At++] = kn, Rt[At++] = Mr, wn = e.id, kn = e.overflow, Mr = t), t = Wf(t, r.children), t.flags |= 4096, t)
}
function vm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    rd(e.return, t, n)
}
function nc(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
}
function Iy(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail;
    if (Ze(e, t, r.children, n), r = ve.current, (r & 2) !== 0)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && (e.flags & 128) !== 0)
            e:
            for (e = t.child; e !== null;) {
                if (e.tag === 13)
                    e.memoizedState !== null && vm(e, n, t);
                else if (e.tag === 19)
                    vm(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null;) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (se(ve, r), (t.mode & 1) === 0)
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child, o = null; n !== null;)
                e = n.alternate,
                e !== null && Xs(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null),
            nc(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null, o = t.child, t.child = null; o !== null;) {
                if (e = o.alternate, e !== null && Xs(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            nc(t, !0, n, null, i);
            break;
        case "together":
            nc(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function ys(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}
function Rn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ir |= t.lanes, (n & t.childLanes) === 0)
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(z(153));
    if (t.child !== null) {
        for (e = t.child, n = nr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;)
            e = e.sibling,
            n = n.sibling = nr(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function s2(e, t, n) {
    switch (t.tag) {
    case 3:
        My(t),
        Co();
        break;
    case 5:
        ay(t);
        break;
    case 1:
        st(t.type) && Hs(t);
        break;
    case 4:
        Ff(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context,
            o = t.memoizedProps.value;
        se(Ks, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState, r !== null)
            return r.dehydrated !== null ? (se(ve, ve.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? zy(e, t, n) : (se(ve, ve.current & 1), e = Rn(e, t, n), e !== null ? e.sibling : null);
        se(ve, ve.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
            if (r)
                return Iy(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), se(ve, ve.current), r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0, Ry(e, t, n)
    }
    return Rn(e, t, n)
}
var Ly,
    dd,
    Fy,
    Ny;
Ly = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
};
dd = function() {};
Fy = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        wr(ln.current);
        var i = null;
        switch (n) {
        case "input":
            o = Ic(e, o),
            r = Ic(e, r),
            i = [];
            break;
        case "select":
            o = Se({}, o, {
                value: void 0
            }),
            r = Se({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Nc(e, o),
            r = Nc(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = js)
        }
        Oc(n, r);
        var a;
        n = null;
        for (u in o)
            if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
                if (u === "style") {
                    var s = o[u];
                    for (a in s)
                        s.hasOwnProperty(a) && (n || (n = {}), n[a] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ai.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (s = o != null ? o[u] : void 0, r.hasOwnProperty(u) && l !== s && (l != null || s != null))
                if (u === "style")
                    if (s) {
                        for (a in s)
                            !s.hasOwnProperty(a) || l && l.hasOwnProperty(a) || (n || (n = {}), n[a] = "");
                        for (a in l)
                            l.hasOwnProperty(a) && s[a] !== l[a] && (n || (n = {}), n[a] = l[a])
                    } else
                        n || (i || (i = []), i.push(u, n)),
                        n = l;
                else
                    u === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, s = s ? s.__html : void 0, l != null && s !== l && (i = i || []).push(u, l)) : u === "children" ? typeof l != "string" && typeof l != "number" || (i = i || []).push(u, "" + l) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Ai.hasOwnProperty(u) ? (l != null && u === "onScroll" && ue("scroll", e), i || s === l || (i = [])) : (i = i || []).push(u, l))
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ny = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};
function Qo(e, t) {
    if (!me)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;)
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null;)
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}
function l2(e, t, n) {
    var r = t.pendingProps;
    switch (Pf(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return Ue(t), null;
    case 1:
        return st(t.type) && Ws(), Ue(t), null;
    case 3:
        return r = t.stateNode, To(), de(at), de(Ye), $f(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ha(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ht !== null && (Sd(Ht), Ht = null))), dd(e, t), Ue(t), null;
    case 5:
        Nf(t);
        var o = wr(ji.current);
        if (n = t.type, e !== null && t.stateNode != null)
            Fy(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(z(166));
                return Ue(t), null
            }
            if (e = wr(ln.current), Ha(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[on] = t, r[Di] = i, e = (t.mode & 1) !== 0, n) {
                case "dialog":
                    ue("cancel", r),
                    ue("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ue("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < ri.length; o++)
                        ue(ri[o], r);
                    break;
                case "source":
                    ue("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ue("error", r),
                    ue("load", r);
                    break;
                case "details":
                    ue("toggle", r);
                    break;
                case "input":
                    Th(r, i),
                    ue("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    ue("invalid", r);
                    break;
                case "textarea":
                    Ph(r, i),
                    ue("invalid", r)
                }
                Oc(n, i),
                o = null;
                for (var a in i)
                    if (i.hasOwnProperty(a)) {
                        var s = i[a];
                        a === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && Wa(r.textContent, s, e), o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && Wa(r.textContent, s, e), o = ["children", "" + s]) : Ai.hasOwnProperty(a) && s != null && a === "onScroll" && ue("scroll", r)
                    }
                switch (n) {
                case "input":
                    Fa(r),
                    Eh(r, i, !0);
                    break;
                case "textarea":
                    Fa(r),
                    Rh(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = js)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                a = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = uv(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = a.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = a.createElement(n, {
                    is: r.is
                }) : (e = a.createElement(n), n === "select" && (a = e, r.multiple ? a.multiple = !0 : r.size && (a.size = r.size))) : e = a.createElementNS(e, n),
                e[on] = t,
                e[Di] = r,
                Ly(e, t, !1, !1),
                t.stateNode = e;
                e:
                {
                    switch (a = Bc(n, r), n) {
                    case "dialog":
                        ue("cancel", e),
                        ue("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ue("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < ri.length; o++)
                            ue(ri[o], e);
                        o = r;
                        break;
                    case "source":
                        ue("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ue("error", e),
                        ue("load", e),
                        o = r;
                        break;
                    case "details":
                        ue("toggle", e),
                        o = r;
                        break;
                    case "input":
                        Th(e, r),
                        o = Ic(e, r),
                        ue("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = Se({}, r, {
                            value: void 0
                        }),
                        ue("invalid", e);
                        break;
                    case "textarea":
                        Ph(e, r),
                        o = Nc(e, r),
                        ue("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Oc(n, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var l = s[i];
                            i === "style" ? fv(e, l) : i === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && cv(e, l)) : i === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && Mi(e, l) : typeof l == "number" && Mi(e, "" + l) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Ai.hasOwnProperty(i) ? l != null && i === "onScroll" && ue("scroll", e) : l != null && pf(e, i, l, a))
                        }
                    switch (n) {
                    case "input":
                        Fa(e),
                        Eh(e, r, !1);
                        break;
                    case "textarea":
                        Fa(e),
                        Rh(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + rr(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? lo(e, !!r.multiple, i, !1) : r.defaultValue != null && lo(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = js)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
        }
        return Ue(t), null;
    case 6:
        if (e && t.stateNode != null)
            Ny(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(z(166));
            if (n = wr(ji.current), wr(ln.current), Ha(t)) {
                if (r = t.stateNode, n = t.memoizedProps, r[on] = t, (i = r.nodeValue !== n) && (e = vt, e !== null))
                    switch (e.tag) {
                    case 3:
                        Wa(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Wa(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[on] = t,
                t.stateNode = r
        }
        return Ue(t), null;
    case 13:
        if (de(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (me && gt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                Jv(),
                Co(),
                t.flags |= 98560,
                i = !1;
            else if (i = Ha(t), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(z(318));
                    if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i)
                        throw Error(z(317));
                    i[on] = t
                } else
                    Co(),
                    (t.flags & 128) === 0 && (t.memoizedState = null),
                    t.flags |= 4;
                Ue(t),
                i = !1
            } else
                Ht !== null && (Sd(Ht), Ht = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ve.current & 1) !== 0 ? Me === 0 && (Me = 3) : Qf())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
    case 4:
        return To(), dd(e, t), e === null && Oi(t.stateNode.containerInfo), Ue(t), null;
    case 10:
        return zf(t.type._context), Ue(t), null;
    case 17:
        return st(t.type) && Ws(), Ue(t), null;
    case 19:
        if (de(ve), i = t.memoizedState, i === null)
            return Ue(t), null;
        if (r = (t.flags & 128) !== 0, a = i.rendering, a === null)
            if (r)
                Qo(i, !1);
            else {
                if (Me !== 0 || e !== null && (e.flags & 128) !== 0)
                    for (e = t.child; e !== null;) {
                        if (a = Xs(e), a !== null) {
                            for (t.flags |= 128, Qo(i, !1), r = a.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;)
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                a = i.alternate,
                                a === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = a.childLanes, i.lanes = a.lanes, i.child = a.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = a.memoizedProps, i.memoizedState = a.memoizedState, i.updateQueue = a.updateQueue, i.type = a.type, e = a.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return se(ve, ve.current & 1 | 2), t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && _e() > Po && (t.flags |= 128, r = !0, Qo(i, !1), t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Xs(a), e !== null) {
                    if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Qo(i, !0), i.tail === null && i.tailMode === "hidden" && !a.alternate && !me)
                        return Ue(t), null
                } else
                    2 * _e() - i.renderingStartTime > Po && n !== 1073741824 && (t.flags |= 128, r = !0, Qo(i, !1), t.lanes = 4194304);
            i.isBackwards ? (a.sibling = t.child, t.child = a) : (n = i.last, n !== null ? n.sibling = a : t.child = a, i.last = a)
        }
        return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = _e(), t.sibling = null, n = ve.current, se(ve, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
    case 22:
    case 23:
        return Yf(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (mt & 1073741824) !== 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(z(156, t.tag))
}
function u2(e, t) {
    switch (Pf(t), t.tag) {
    case 1:
        return st(t.type) && Ws(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
        return To(), de(at), de(Ye), $f(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
        return Nf(t), null;
    case 13:
        if (de(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(z(340));
            Co()
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
        return de(ve), null;
    case 4:
        return To(), null;
    case 10:
        return zf(t.type._context), null;
    case 22:
    case 23:
        return Yf(), null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ka = !1,
    Ke = !1,
    c2 = typeof WeakSet == "function" ? WeakSet : Set,
    O = null;
function oo(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                be(e, t, r)
            }
        else
            n.current = null
}
function fd(e, t, n) {
    try {
        n()
    } catch (r) {
        be(e, t, r)
    }
}
var ym = !1;
function d2(e, t) {
    if (Qc = Bs, e = Dv(), Tf(e)) {
        if ("selectionStart" in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e:
            {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var a = 0,
                        s = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        f = null;
                    t:
                    for (;;) {
                        for (var h; d !== n || o !== 0 && d.nodeType !== 3 || (s = a + o), d !== i || r !== 0 && d.nodeType !== 3 || (l = a + r), d.nodeType === 3 && (a += d.nodeValue.length), (h = d.firstChild) !== null;)
                            f = d,
                            d = h;
                        for (;;) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === o && (s = a), f === i && ++c === r && (l = a), (h = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = h
                    }
                    n = s === -1 || l === -1 ? null : {
                        start: s,
                        end: l
                    }
                } else
                    n = null
            }n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Xc = {
        focusedElem: e,
        selectionRange: n
    }, Bs = !1, O = t; O !== null;)
        if (t = O, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            O = e;
        else
            for (; O !== null;) {
                t = O;
                try {
                    var y = t.alternate;
                    if ((t.flags & 1024) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var S = y.memoizedProps,
                                    C = y.memoizedState,
                                    g = t.stateNode,
                                    p = g.getSnapshotBeforeUpdate(t.elementType === t.type ? S : jt(t.type, S), C);
                                g.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(z(163))
                        }
                } catch (b) {
                    be(t, t.return, b)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return,
                    O = e;
                    break
                }
                O = t.return
            }
    return y = ym, ym = !1, y
}
function pi(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && fd(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function Il(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function pd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function $y(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $y(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode, t !== null && (delete t[on], delete t[Di], delete t[Jc], delete t[Kk], delete t[Yk])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Oy(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Sm(e) {
    e:
    for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || Oy(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function hd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = js));
    else if (r !== 4 && (e = e.child, e !== null))
        for (hd(e, t, n), e = e.sibling; e !== null;)
            hd(e, t, n),
            e = e.sibling
}
function md(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (md(e, t, n), e = e.sibling; e !== null;)
            md(e, t, n),
            e = e.sibling
}
var Be = null,
    Wt = !1;
function Ln(e, t, n) {
    for (n = n.child; n !== null;)
        By(e, t, n),
        n = n.sibling
}
function By(e, t, n) {
    if (sn && typeof sn.onCommitFiberUnmount == "function")
        try {
            sn.onCommitFiberUnmount(_l, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Ke || oo(n, t);
    case 6:
        var r = Be,
            o = Wt;
        Be = null,
        Ln(e, t, n),
        Be = r,
        Wt = o,
        Be !== null && (Wt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Be.removeChild(n.stateNode));
        break;
    case 18:
        Be !== null && (Wt ? (e = Be, n = n.stateNode, e.nodeType === 8 ? Qu(e.parentNode, n) : e.nodeType === 1 && Qu(e, n), Fi(e)) : Qu(Be, n.stateNode));
        break;
    case 4:
        r = Be,
        o = Wt,
        Be = n.stateNode.containerInfo,
        Wt = !0,
        Ln(e, t, n),
        Be = r,
        Wt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Ke && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            o = r = r.next;
            do {
                var i = o,
                    a = i.destroy;
                i = i.tag,
                a !== void 0 && ((i & 2) !== 0 || (i & 4) !== 0) && fd(n, t, a),
                o = o.next
            } while (o !== r)
        }
        Ln(e, t, n);
        break;
    case 1:
        if (!Ke && (oo(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                be(n, t, s)
            }
        Ln(e, t, n);
        break;
    case 21:
        Ln(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Ke = (r = Ke) || n.memoizedState !== null, Ln(e, t, n), Ke = r) : Ln(e, t, n);
        break;
    default:
        Ln(e, t, n)
    }
}
function bm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new c2),
        t.forEach(function(r) {
            var o = b2.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(o, o))
        })
    }
}
function $t(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e,
                    a = t,
                    s = a;
                e:
                for (; s !== null;) {
                    switch (s.tag) {
                    case 5:
                        Be = s.stateNode,
                        Wt = !1;
                        break e;
                    case 3:
                        Be = s.stateNode.containerInfo,
                        Wt = !0;
                        break e;
                    case 4:
                        Be = s.stateNode.containerInfo,
                        Wt = !0;
                        break e
                    }
                    s = s.return
                }
                if (Be === null)
                    throw Error(z(160));
                By(i, a, o),
                Be = null,
                Wt = !1;
                var l = o.alternate;
                l !== null && (l.return = null),
                o.return = null
            } catch (u) {
                be(o, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;)
            Dy(t, e),
            t = t.sibling
}
function Dy(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if ($t(t, e), Zt(e), r & 4) {
            try {
                pi(3, e, e.return),
                Il(3, e)
            } catch (S) {
                be(e, e.return, S)
            }
            try {
                pi(5, e, e.return)
            } catch (S) {
                be(e, e.return, S)
            }
        }
        break;
    case 1:
        $t(t, e),
        Zt(e),
        r & 512 && n !== null && oo(n, n.return);
        break;
    case 5:
        if ($t(t, e), Zt(e), r & 512 && n !== null && oo(n, n.return), e.flags & 32) {
            var o = e.stateNode;
            try {
                Mi(o, "")
            } catch (S) {
                be(e, e.return, S)
            }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
            var i = e.memoizedProps,
                a = n !== null ? n.memoizedProps : i,
                s = e.type,
                l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && sv(o, i),
                    Bc(s, a);
                    var u = Bc(s, i);
                    for (a = 0; a < l.length; a += 2) {
                        var c = l[a],
                            d = l[a + 1];
                        c === "style" ? fv(o, d) : c === "dangerouslySetInnerHTML" ? cv(o, d) : c === "children" ? Mi(o, d) : pf(o, c, d, u)
                    }
                    switch (s) {
                    case "input":
                        Lc(o, i);
                        break;
                    case "textarea":
                        lv(o, i);
                        break;
                    case "select":
                        var f = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        h != null ? lo(o, !!i.multiple, h, !1) : f !== !!i.multiple && (i.defaultValue != null ? lo(o, !!i.multiple, i.defaultValue, !0) : lo(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[Di] = i
                } catch (S) {
                    be(e, e.return, S)
                }
        }
        break;
    case 6:
        if ($t(t, e), Zt(e), r & 4) {
            if (e.stateNode === null)
                throw Error(z(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (S) {
                be(e, e.return, S)
            }
        }
        break;
    case 3:
        if ($t(t, e), Zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Fi(t.containerInfo)
            } catch (S) {
                be(e, e.return, S)
            }
        break;
    case 4:
        $t(t, e),
        Zt(e);
        break;
    case 13:
        $t(t, e),
        Zt(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null, o.stateNode.isHidden = i, !i || o.alternate !== null && o.alternate.memoizedState !== null || (Gf = _e())),
        r & 4 && bm(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ke = (u = Ke) || c, $t(t, e), Ke = u) : $t(t, e), Zt(e), r & 8192) {
            if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !c && (e.mode & 1) !== 0)
                for (O = e, c = e.child; c !== null;) {
                    for (d = O = c; O !== null;) {
                        switch (f = O, h = f.child, f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            pi(4, f, f.return);
                            break;
                        case 1:
                            oo(f, f.return);
                            var y = f.stateNode;
                            if (typeof y.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    y.props = t.memoizedProps,
                                    y.state = t.memoizedState,
                                    y.componentWillUnmount()
                                } catch (S) {
                                    be(r, n, S)
                                }
                            }
                            break;
                        case 5:
                            oo(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                wm(d);
                                continue
                            }
                        }
                        h !== null ? (h.return = f, O = h) : wm(d)
                    }
                    c = c.sibling
                }
            e:
            for (c = null, d = e;;) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            o = d.stateNode,
                            u ? (i = o.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode, l = d.memoizedProps.style, a = l != null && l.hasOwnProperty("display") ? l.display : null, s.style.display = dv("display", a))
                        } catch (S) {
                            be(e, e.return, S)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (S) {
                            be(e, e.return, S)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null;) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        $t(t, e),
        Zt(e),
        r & 4 && bm(e);
        break;
    case 21:
        break;
    default:
        $t(t, e),
        Zt(e)
    }
}
function Zt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e:
            {
                for (var n = e.return; n !== null;) {
                    if (Oy(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(z(160))
            }switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (Mi(o, ""), r.flags &= -33);
                var i = Sm(e);
                md(e, i, o);
                break;
            case 3:
            case 4:
                var a = r.stateNode.containerInfo,
                    s = Sm(e);
                hd(e, s, a);
                break;
            default:
                throw Error(z(161))
            }
        } catch (l) {
            be(e, e.return, l)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function f2(e, t, n) {
    O = e,
    Vy(e)
}
function Vy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null;) {
        var o = O,
            i = o.child;
        if (o.tag === 22 && r) {
            var a = o.memoizedState !== null || Ka;
            if (!a) {
                var s = o.alternate,
                    l = s !== null && s.memoizedState !== null || Ke;
                s = Ka;
                var u = Ke;
                if (Ka = a, (Ke = l) && !u)
                    for (O = o; O !== null;)
                        a = O,
                        l = a.child,
                        a.tag === 22 && a.memoizedState !== null ? km(o) : l !== null ? (l.return = a, O = l) : km(o);
                for (; i !== null;)
                    O = i,
                    Vy(i),
                    i = i.sibling;
                O = o,
                Ka = s,
                Ke = u
            }
            xm(e)
        } else
            (o.subtreeFlags & 8772) !== 0 && i !== null ? (i.return = o, O = i) : xm(e)
    }
}
function xm(e) {
    for (; O !== null;) {
        var t = O;
        if ((t.flags & 8772) !== 0) {
            var n = t.alternate;
            try {
                if ((t.flags & 8772) !== 0)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Ke || Il(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : jt(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && om(t, i, r);
                        break;
                    case 3:
                        var a = t.updateQueue;
                        if (a !== null) {
                            if (n = null, t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            om(t, a, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var l = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                l.autoFocus && n.focus();
                                break;
                            case "img":
                                l.src && (n.src = l.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && Fi(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(z(163))
                    }
                Ke || t.flags & 512 && pd(t)
            } catch (f) {
                be(t, t.return, f)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function wm(e) {
    for (; O !== null;) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function km(e) {
    for (; O !== null;) {
        var t = O;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Il(4, t)
                } catch (l) {
                    be(t, n, l)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (l) {
                        be(t, o, l)
                    }
                }
                var i = t.return;
                try {
                    pd(t)
                } catch (l) {
                    be(t, i, l)
                }
                break;
            case 5:
                var a = t.return;
                try {
                    pd(t)
                } catch (l) {
                    be(t, a, l)
                }
            }
        } catch (l) {
            be(t, t.return, l)
        }
        if (t === e) {
            O = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            O = s;
            break
        }
        O = t.return
    }
}
var p2 = Math.ceil,
    Js = zn.ReactCurrentDispatcher,
    Hf = zn.ReactCurrentOwner,
    It = zn.ReactCurrentBatchConfig,
    q = 0,
    Fe = null,
    Re = null,
    Ve = 0,
    mt = 0,
    io = sr(0),
    Me = 0,
    Gi = null,
    Ir = 0,
    Ll = 0,
    Uf = 0,
    hi = null,
    ot = null,
    Gf = 0,
    Po = 1 / 0,
    Sn = null,
    el = !1,
    gd = null,
    er = null,
    Ya = !1,
    Un = null,
    tl = 0,
    mi = 0,
    vd = null,
    Ss = -1,
    bs = 0;
function Je() {
    return (q & 6) !== 0 ? _e() : Ss !== -1 ? Ss : Ss = _e()
}
function tr(e) {
    return (e.mode & 1) === 0 ? 1 : (q & 2) !== 0 && Ve !== 0 ? Ve & -Ve : Xk.transition !== null ? (bs === 0 && (bs = Cv()), bs) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Mv(e.type)), e)
}
function Gt(e, t, n, r) {
    if (50 < mi)
        throw mi = 0, vd = null, Error(z(185));
    ca(e, n, r),
    ((q & 2) === 0 || e !== Fe) && (e === Fe && ((q & 2) === 0 && (Ll |= n), Me === 4 && Wn(e, Ve)), lt(e, r), n === 1 && q === 0 && (t.mode & 1) === 0 && (Po = _e() + 500, Al && lr()))
}
function lt(e, t) {
    var n = e.callbackNode;
    Xw(e, t);
    var r = Os(e, e === Fe ? Ve : 0);
    if (r === 0)
        n !== null && zh(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && zh(n), t === 1)
            e.tag === 0 ? Qk(Cm.bind(null, e)) : Xv(Cm.bind(null, e)),
            Uk(function() {
                (q & 6) === 0 && lr()
            }),
            n = null;
        else {
            switch (_v(r)) {
            case 1:
                n = yf;
                break;
            case 4:
                n = wv;
                break;
            case 16:
                n = $s;
                break;
            case 536870912:
                n = kv;
                break;
            default:
                n = $s
            }
            n = Qy(n, jy.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function jy(e, t) {
    if (Ss = -1, bs = 0, (q & 6) !== 0)
        throw Error(z(327));
    var n = e.callbackNode;
    if (ho() && e.callbackNode !== n)
        return null;
    var r = Os(e, e === Fe ? Ve : 0);
    if (r === 0)
        return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t)
        t = nl(e, r);
    else {
        t = r;
        var o = q;
        q |= 2;
        var i = Hy();
        (Fe !== e || Ve !== t) && (Sn = null, Po = _e() + 500, Tr(e, t));
        do try {
            g2();
            break
        } catch (s) {
            Wy(e, s)
        }
        while (1);
        Mf(),
        Js.current = i,
        q = o,
        Re !== null ? t = 0 : (Fe = null, Ve = 0, t = Me)
    }
    if (t !== 0) {
        if (t === 2 && (o = Hc(e), o !== 0 && (r = o, t = yd(e, o))), t === 1)
            throw n = Gi, Tr(e, 0), Wn(e, r), lt(e, _e()), n;
        if (t === 6)
            Wn(e, r);
        else {
            if (o = e.current.alternate, (r & 30) === 0 && !h2(o) && (t = nl(e, r), t === 2 && (i = Hc(e), i !== 0 && (r = i, t = yd(e, i))), t === 1))
                throw n = Gi, Tr(e, 0), Wn(e, r), lt(e, _e()), n;
            switch (e.finishedWork = o, e.finishedLanes = r, t) {
            case 0:
            case 1:
                throw Error(z(345));
            case 2:
                gr(e, ot, Sn);
                break;
            case 3:
                if (Wn(e, r), (r & 130023424) === r && (t = Gf + 500 - _e(), 10 < t)) {
                    if (Os(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes, (o & r) !== r) {
                        Je(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Zc(gr.bind(null, e, ot, Sn), t);
                    break
                }
                gr(e, ot, Sn);
                break;
            case 4:
                if (Wn(e, r), (r & 4194240) === r)
                    break;
                for (t = e.eventTimes, o = -1; 0 < r;) {
                    var a = 31 - Ut(r);
                    i = 1 << a,
                    a = t[a],
                    a > o && (o = a),
                    r &= ~i
                }
                if (r = o, r = _e() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * p2(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = Zc(gr.bind(null, e, ot, Sn), r);
                    break
                }
                gr(e, ot, Sn);
                break;
            case 5:
                gr(e, ot, Sn);
                break;
            default:
                throw Error(z(329))
            }
        }
    }
    return lt(e, _e()), e.callbackNode === n ? jy.bind(null, e) : null
}
function yd(e, t) {
    var n = hi;
    return e.current.memoizedState.isDehydrated && (Tr(e, t).flags |= 256), e = nl(e, t), e !== 2 && (t = ot, ot = n, t !== null && Sd(t)), e
}
function Sd(e) {
    ot === null ? ot = e : ot.push.apply(ot, e)
}
function h2(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Xt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Wn(e, t) {
    for (t &= ~Uf, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Ut(t),
            r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Cm(e) {
    if ((q & 6) !== 0)
        throw Error(z(327));
    ho();
    var t = Os(e, 0);
    if ((t & 1) === 0)
        return lt(e, _e()), null;
    var n = nl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Hc(e);
        r !== 0 && (t = r, n = yd(e, r))
    }
    if (n === 1)
        throw n = Gi, Tr(e, 0), Wn(e, t), lt(e, _e()), n;
    if (n === 6)
        throw Error(z(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, gr(e, ot, Sn), lt(e, _e()), null
}
function Kf(e, t) {
    var n = q;
    q |= 1;
    try {
        return e(t)
    } finally {
        q = n,
        q === 0 && (Po = _e() + 500, Al && lr())
    }
}
function Lr(e) {
    Un !== null && Un.tag === 0 && (q & 6) === 0 && ho();
    var t = q;
    q |= 1;
    var n = It.transition,
        r = ne;
    try {
        if (It.transition = null, ne = 1, e)
            return e()
    } finally {
        ne = r,
        It.transition = n,
        q = t,
        (q & 6) === 0 && lr()
    }
}
function Yf() {
    mt = io.current,
    de(io)
}
function Tr(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Hk(n)), Re !== null)
        for (n = Re.return; n !== null;) {
            var r = n;
            switch (Pf(r), r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Ws();
                break;
            case 3:
                To(),
                de(at),
                de(Ye),
                $f();
                break;
            case 5:
                Nf(r);
                break;
            case 4:
                To();
                break;
            case 13:
                de(ve);
                break;
            case 19:
                de(ve);
                break;
            case 10:
                zf(r.type._context);
                break;
            case 22:
            case 23:
                Yf()
            }
            n = n.return
        }
    if (Fe = e, Re = e = nr(e.current, null), Ve = mt = t, Me = 0, Gi = null, Uf = Ll = Ir = 0, ot = hi = null, xr !== null) {
        for (t = 0; t < xr.length; t++)
            if (n = xr[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var o = r.next,
                    i = n.pending;
                if (i !== null) {
                    var a = i.next;
                    i.next = o,
                    r.next = a
                }
                n.pending = r
            }
        xr = null
    }
    return e
}
function Wy(e, t) {
    do {
        var n = Re;
        try {
            if (Mf(), gs.current = Zs, qs) {
                for (var r = ye.memoizedState; r !== null;) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                qs = !1
            }
            if (zr = 0, Le = Ae = ye = null, fi = !1, Wi = 0, Hf.current = null, n === null || n.return === null) {
                Me = 1,
                Gi = t,
                Re = null;
                break
            }
            e:
            {
                var i = e,
                    a = n.return,
                    s = n,
                    l = t;
                if (t = Ve, s.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                    var u = l,
                        c = s,
                        d = c.tag;
                    if ((c.mode & 1) === 0 && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue, c.memoizedState = f.memoizedState, c.lanes = f.lanes) : (c.updateQueue = null, c.memoizedState = null)
                    }
                    var h = dm(a);
                    if (h !== null) {
                        h.flags &= -257,
                        fm(h, a, s, i, t),
                        h.mode & 1 && cm(i, u, t),
                        t = h,
                        l = u;
                        var y = t.updateQueue;
                        if (y === null) {
                            var S = new Set;
                            S.add(l),
                            t.updateQueue = S
                        } else
                            y.add(l);
                        break e
                    } else {
                        if ((t & 1) === 0) {
                            cm(i, u, t),
                            Qf();
                            break e
                        }
                        l = Error(z(426))
                    }
                } else if (me && s.mode & 1) {
                    var C = dm(a);
                    if (C !== null) {
                        (C.flags & 65536) === 0 && (C.flags |= 256),
                        fm(C, a, s, i, t),
                        Rf(Eo(l, s));
                        break e
                    }
                }
                i = l = Eo(l, s),
                Me !== 4 && (Me = 2),
                hi === null ? hi = [i] : hi.push(i),
                i = a;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var g = Ty(i, l, t);
                        rm(i, g);
                        break e;
                    case 1:
                        s = l;
                        var p = i.type,
                            m = i.stateNode;
                        if ((i.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (er === null || !er.has(m)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var b = Ey(i, s, t);
                            rm(i, b);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }Gy(n)
        } catch (_) {
            t = _,
            Re === n && n !== null && (Re = n = n.return);
            continue
        }
        break
    } while (1)
}
function Hy() {
    var e = Js.current;
    return Js.current = Zs, e === null ? Zs : e
}
function Qf() {
    (Me === 0 || Me === 3 || Me === 2) && (Me = 4),
    Fe === null || (Ir & 268435455) === 0 && (Ll & 268435455) === 0 || Wn(Fe, Ve)
}
function nl(e, t) {
    var n = q;
    q |= 2;
    var r = Hy();
    (Fe !== e || Ve !== t) && (Sn = null, Tr(e, t));
    do try {
        m2();
        break
    } catch (o) {
        Wy(e, o)
    }
    while (1);
    if (Mf(), q = n, Js.current = r, Re !== null)
        throw Error(z(261));
    return Fe = null, Ve = 0, Me
}
function m2() {
    for (; Re !== null;)
        Uy(Re)
}
function g2() {
    for (; Re !== null && !Vw();)
        Uy(Re)
}
function Uy(e) {
    var t = Yy(e.alternate, e, mt);
    e.memoizedProps = e.pendingProps,
    t === null ? Gy(e) : Re = t,
    Hf.current = null
}
function Gy(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, (t.flags & 32768) === 0) {
            if (n = l2(n, t, mt), n !== null) {
                Re = n;
                return
            }
        } else {
            if (n = u2(n, t), n !== null) {
                n.flags &= 32767,
                Re = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                Me = 6,
                Re = null;
                return
            }
        }
        if (t = t.sibling, t !== null) {
            Re = t;
            return
        }
        Re = t = e
    } while (t !== null);
    Me === 0 && (Me = 5)
}
function gr(e, t, n) {
    var r = ne,
        o = It.transition;
    try {
        It.transition = null,
        ne = 1,
        v2(e, t, n, r)
    } finally {
        It.transition = o,
        ne = r
    }
    return null
}
function v2(e, t, n, r) {
    do ho();
    while (Un !== null);
    if ((q & 6) !== 0)
        throw Error(z(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
        throw Error(z(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (qw(e, i), e === Fe && (Re = Fe = null, Ve = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ya || (Ya = !0, Qy($s, function() {
        return ho(), null
    })), i = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || i) {
        i = It.transition,
        It.transition = null;
        var a = ne;
        ne = 1;
        var s = q;
        q |= 4,
        Hf.current = null,
        d2(e, n),
        Dy(n, e),
        $k(Xc),
        Bs = !!Qc,
        Xc = Qc = null,
        e.current = n,
        f2(n),
        jw(),
        q = s,
        ne = a,
        It.transition = i
    } else
        e.current = n;
    if (Ya && (Ya = !1, Un = e, tl = o), i = e.pendingLanes, i === 0 && (er = null), Uw(n.stateNode), lt(e, _e()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (el)
        throw el = !1, e = gd, gd = null, e;
    return (tl & 1) !== 0 && e.tag !== 0 && ho(), i = e.pendingLanes, (i & 1) !== 0 ? e === vd ? mi++ : (mi = 0, vd = e) : mi = 0, lr(), null
}
function ho() {
    if (Un !== null) {
        var e = _v(tl),
            t = It.transition,
            n = ne;
        try {
            if (It.transition = null, ne = 16 > e ? 16 : e, Un === null)
                var r = !1;
            else {
                if (e = Un, Un = null, tl = 0, (q & 6) !== 0)
                    throw Error(z(331));
                var o = q;
                for (q |= 4, O = e.current; O !== null;) {
                    var i = O,
                        a = i.child;
                    if ((O.flags & 16) !== 0) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var l = 0; l < s.length; l++) {
                                var u = s[l];
                                for (O = u; O !== null;) {
                                    var c = O;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        pi(8, c, i)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        O = d;
                                    else
                                        for (; O !== null;) {
                                            c = O;
                                            var f = c.sibling,
                                                h = c.return;
                                            if ($y(c), c === u) {
                                                O = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = h,
                                                O = f;
                                                break
                                            }
                                            O = h
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var S = y.child;
                                if (S !== null) {
                                    y.child = null;
                                    do {
                                        var C = S.sibling;
                                        S.sibling = null,
                                        S = C
                                    } while (S !== null)
                                }
                            }
                            O = i
                        }
                    }
                    if ((i.subtreeFlags & 2064) !== 0 && a !== null)
                        a.return = i,
                        O = a;
                    else
                        e:
                        for (; O !== null;) {
                            if (i = O, (i.flags & 2048) !== 0)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    pi(9, i, i.return)
                                }
                            var g = i.sibling;
                            if (g !== null) {
                                g.return = i.return,
                                O = g;
                                break e
                            }
                            O = i.return
                        }
                }
                var p = e.current;
                for (O = p; O !== null;) {
                    a = O;
                    var m = a.child;
                    if ((a.subtreeFlags & 2064) !== 0 && m !== null)
                        m.return = a,
                        O = m;
                    else
                        e:
                        for (a = p; O !== null;) {
                            if (s = O, (s.flags & 2048) !== 0)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Il(9, s)
                                    }
                                } catch (_) {
                                    be(s, s.return, _)
                                }
                            if (s === a) {
                                O = null;
                                break e
                            }
                            var b = s.sibling;
                            if (b !== null) {
                                b.return = s.return,
                                O = b;
                                break e
                            }
                            O = s.return
                        }
                }
                if (q = o, lr(), sn && typeof sn.onPostCommitFiberRoot == "function")
                    try {
                        sn.onPostCommitFiberRoot(_l, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ne = n,
            It.transition = t
        }
    }
    return !1
}
function _m(e, t, n) {
    t = Eo(n, t),
    t = Ty(e, t, 1),
    e = Jn(e, t, 1),
    t = Je(),
    e !== null && (ca(e, 1, t), lt(e, t))
}
function be(e, t, n) {
    if (e.tag === 3)
        _m(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                _m(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (er === null || !er.has(r))) {
                    e = Eo(n, e),
                    e = Ey(t, e, 1),
                    t = Jn(t, e, 1),
                    e = Je(),
                    t !== null && (ca(t, 1, e), lt(t, e));
                    break
                }
            }
            t = t.return
        }
}
function y2(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Je(),
    e.pingedLanes |= e.suspendedLanes & n,
    Fe === e && (Ve & n) === n && (Me === 4 || Me === 3 && (Ve & 130023424) === Ve && 500 > _e() - Gf ? Tr(e, 0) : Uf |= n),
    lt(e, t)
}
function Ky(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Oa, Oa <<= 1, (Oa & 130023424) === 0 && (Oa = 4194304)));
    var n = Je();
    e = Pn(e, t),
    e !== null && (ca(e, t, n), lt(e, n))
}
function S2(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane),
    Ky(e, n)
}
function b2(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode,
            o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(z(314))
    }
    r !== null && r.delete(t),
    Ky(e, n)
}
var Yy;
Yy = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || at.current)
            it = !0;
        else {
            if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
                return it = !1, s2(e, t, n);
            it = (e.flags & 131072) !== 0
        }
    else
        it = !1,
        me && (t.flags & 1048576) !== 0 && qv(t, Gs, t.index);
    switch (t.lanes = 0, t.tag) {
    case 2:
        var r = t.type;
        ys(e, t),
        e = t.pendingProps;
        var o = ko(t, Ye.current);
        po(t, n),
        o = Bf(null, t, r, e, o, n);
        var i = Df();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, st(r) ? (i = !0, Hs(t)) : i = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Lf(t), o.updater = Ml, t.stateNode = o, o._reactInternals = t, id(t, r, e, n), t = ld(null, t, r, !0, i, n)) : (t.tag = 0, me && i && Ef(t), Ze(null, t, o, n), t = t.child), t;
    case 16:
        r = t.elementType;
        e:
        {
            switch (ys(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = w2(r), e = jt(r, e), o) {
            case 0:
                t = sd(null, t, r, e, n);
                break e;
            case 1:
                t = mm(null, t, r, e, n);
                break e;
            case 11:
                t = pm(null, t, r, e, n);
                break e;
            case 14:
                t = hm(null, t, r, jt(r.type, e), n);
                break e
            }
            throw Error(z(306, r, ""))
        }return t;
    case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), sd(e, t, r, o, n);
    case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), mm(e, t, r, o, n);
    case 3:
        e:
        {
            if (My(t), e === null)
                throw Error(z(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            ty(e, t),
            Qs(t, r, null, n);
            var a = t.memoizedState;
            if (r = a.element, i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: a.cache,
                    pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                    transitions: a.transitions
                }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                    o = Eo(Error(z(423)), t),
                    t = gm(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = Eo(Error(z(424)), t),
                    t = gm(e, t, r, n, o);
                    break e
                } else
                    for (gt = Zn(t.stateNode.containerInfo.firstChild), vt = t, me = !0, Ht = null, n = iy(t, null, r, n), t.child = n; n;)
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Co(), r === o) {
                    t = Rn(e, t, n);
                    break e
                }
                Ze(e, t, r, n)
            }
            t = t.child
        }return t;
    case 5:
        return ay(t), e === null && nd(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = o.children, qc(r, o) ? a = null : i !== null && qc(r, i) && (t.flags |= 32), Ay(e, t), Ze(e, t, a, n), t.child;
    case 6:
        return e === null && nd(t), null;
    case 13:
        return zy(e, t, n);
    case 4:
        return Ff(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _o(t, null, r, n) : Ze(e, t, r, n), t.child;
    case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), pm(e, t, r, o, n);
    case 7:
        return Ze(e, t, t.pendingProps, n), t.child;
    case 8:
        return Ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
        return Ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
        e:
        {
            if (r = t.type._context, o = t.pendingProps, i = t.memoizedProps, a = o.value, se(Ks, r._currentValue), r._currentValue = a, i !== null)
                if (Xt(i.value, a)) {
                    if (i.children === o.children && !at.current) {
                        t = Rn(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child, i !== null && (i.return = t); i !== null;) {
                        var s = i.dependencies;
                        if (s !== null) {
                            a = i.child;
                            for (var l = s.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (i.tag === 1) {
                                        l = _n(-1, n & -n),
                                        l.tag = 2;
                                        var u = i.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? l.next = l : (l.next = c.next, c.next = l),
                                            u.pending = l
                                        }
                                    }
                                    i.lanes |= n,
                                    l = i.alternate,
                                    l !== null && (l.lanes |= n),
                                    rd(i.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                l = l.next
                            }
                        } else if (i.tag === 10)
                            a = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (a = i.return, a === null)
                                throw Error(z(341));
                            a.lanes |= n,
                            s = a.alternate,
                            s !== null && (s.lanes |= n),
                            rd(a, n, t),
                            a = i.sibling
                        } else
                            a = i.child;
                        if (a !== null)
                            a.return = i;
                        else
                            for (a = i; a !== null;) {
                                if (a === t) {
                                    a = null;
                                    break
                                }
                                if (i = a.sibling, i !== null) {
                                    i.return = a.return,
                                    a = i;
                                    break
                                }
                                a = a.return
                            }
                        i = a
                    }
            Ze(e, t, o.children, n),
            t = t.child
        }return t;
    case 9:
        return o = t.type, r = t.pendingProps.children, po(t, n), o = Lt(o), r = r(o), t.flags |= 1, Ze(e, t, r, n), t.child;
    case 14:
        return r = t.type, o = jt(r, t.pendingProps), o = jt(r.type, o), hm(e, t, r, o, n);
    case 15:
        return Py(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : jt(r, o), ys(e, t), t.tag = 1, st(r) ? (e = !0, Hs(t)) : e = !1, po(t, n), ry(t, r, o), id(t, r, o, n), ld(null, t, r, !0, e, n);
    case 19:
        return Iy(e, t, n);
    case 22:
        return Ry(e, t, n)
    }
    throw Error(z(156, t.tag))
};
function Qy(e, t) {
    return xv(e, t)
}
function x2(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Mt(e, t, n, r) {
    return new x2(e, t, n, r)
}
function Xf(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}
function w2(e) {
    if (typeof e == "function")
        return Xf(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === mf)
            return 11;
        if (e === gf)
            return 14
    }
    return 2
}
function nr(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}
function xs(e, t, n, r, o, i) {
    var a = 2;
    if (r = e, typeof e == "function")
        Xf(e) && (a = 1);
    else if (typeof e == "string")
        a = 5;
    else
        e:
        switch (e) {
        case Qr:
            return Er(n.children, o, i, t);
        case hf:
            a = 8,
            o |= 8;
            break;
        case Rc:
            return e = Mt(12, n, t, o | 2), e.elementType = Rc, e.lanes = i, e;
        case Ac:
            return e = Mt(13, n, t, o), e.elementType = Ac, e.lanes = i, e;
        case Mc:
            return e = Mt(19, n, t, o), e.elementType = Mc, e.lanes = i, e;
        case ov:
            return Fl(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case nv:
                    a = 10;
                    break e;
                case rv:
                    a = 9;
                    break e;
                case mf:
                    a = 11;
                    break e;
                case gf:
                    a = 14;
                    break e;
                case Bn:
                    a = 16,
                    r = null;
                    break e
                }
            throw Error(z(130, e == null ? e : typeof e, ""))
        }
    return t = Mt(a, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t
}
function Er(e, t, n, r) {
    return e = Mt(7, e, r, t), e.lanes = n, e
}
function Fl(e, t, n, r) {
    return e = Mt(22, e, r, t), e.elementType = ov, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}
function rc(e, t, n) {
    return e = Mt(6, e, null, t), e.lanes = n, e
}
function oc(e, t, n) {
    return t = Mt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}
function k2(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ou(0),
    this.expirationTimes = Ou(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ou(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function qf(e, t, n, r, o, i, a, s, l) {
    return e = new k2(e, t, n, s, l), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Mt(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Lf(i), e
}
function C2(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Yr,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Xy(e) {
    if (!e)
        return or;
    e = e._reactInternals;
    e:
    {
        if ($r(e) !== e || e.tag !== 1)
            throw Error(z(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (st(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(z(171))
    }if (e.tag === 1) {
        var n = e.type;
        if (st(n))
            return Qv(e, n, t)
    }
    return t
}
function qy(e, t, n, r, o, i, a, s, l) {
    return e = qf(n, r, !0, e, o, i, a, s, l), e.context = Xy(null), n = e.current, r = Je(), o = tr(n), i = _n(r, o), i.callback = t != null ? t : null, Jn(n, i, o), e.current.lanes = o, ca(e, o, r), lt(e, r), e
}
function Nl(e, t, n, r) {
    var o = t.current,
        i = Je(),
        a = tr(o);
    return n = Xy(n), t.context === null ? t.context = n : t.pendingContext = n, t = _n(i, a), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Jn(o, t, a), e !== null && (Gt(e, o, a, i), ms(e, o, a)), a
}
function rl(e) {
    if (e = e.current, !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Tm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Zf(e, t) {
    Tm(e, t),
    (e = e.alternate) && Tm(e, t)
}
function _2() {
    return null
}
var Zy = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};
function Jf(e) {
    this._internalRoot = e
}
$l.prototype.render = Jf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(z(409));
    Nl(e, t, null, null)
};
$l.prototype.unmount = Jf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Lr(function() {
            Nl(null, e, null, null)
        }),
        t[En] = null
    }
};
function $l(e) {
    this._internalRoot = e
}
$l.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Pv();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < jn.length && t !== 0 && t < jn[n].priority; n++)
            ;
        jn.splice(n, 0, e),
        n === 0 && Av(e)
    }
};
function ep(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Ol(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Em() {}
function T2(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var u = rl(a);
                i.call(u)
            }
        }
        var a = qy(t, r, e, 0, null, !1, !1, "", Em);
        return e._reactRootContainer = a, e[En] = a.current, Oi(e.nodeType === 8 ? e.parentNode : e), Lr(), a
    }
    for (; o = e.lastChild;)
        e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var u = rl(l);
            s.call(u)
        }
    }
    var l = qf(e, 0, !1, null, null, !1, !1, "", Em);
    return e._reactRootContainer = l, e[En] = l.current, Oi(e.nodeType === 8 ? e.parentNode : e), Lr(function() {
        Nl(t, l, n, r)
    }), l
}
function Bl(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var a = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var l = rl(a);
                s.call(l)
            }
        }
        Nl(t, a, e, o)
    } else
        a = T2(n, t, e, o, r);
    return rl(a)
}
Tv = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = ni(t.pendingLanes);
            n !== 0 && (Sf(t, n | 1), lt(t, _e()), (q & 6) === 0 && (Po = _e() + 500, lr()))
        }
        break;
    case 13:
        Lr(function() {
            var r = Pn(e, 1);
            if (r !== null) {
                var o = Je();
                Gt(r, e, 1, o)
            }
        }),
        Zf(e, 1)
    }
};
bf = function(e) {
    if (e.tag === 13) {
        var t = Pn(e, 134217728);
        if (t !== null) {
            var n = Je();
            Gt(t, e, 134217728, n)
        }
        Zf(e, 134217728)
    }
};
Ev = function(e) {
    if (e.tag === 13) {
        var t = tr(e),
            n = Pn(e, t);
        if (n !== null) {
            var r = Je();
            Gt(n, e, t, r)
        }
        Zf(e, t)
    }
};
Pv = function() {
    return ne
};
Rv = function(e, t) {
    var n = ne;
    try {
        return ne = e, t()
    } finally {
        ne = n
    }
};
Vc = function(e, t, n) {
    switch (t) {
    case "input":
        if (Lc(e, n), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = Rl(r);
                    if (!o)
                        throw Error(z(90));
                    av(r),
                    Lc(r, o)
                }
            }
        }
        break;
    case "textarea":
        lv(e, n);
        break;
    case "select":
        t = n.value,
        t != null && lo(e, !!n.multiple, t, !1)
    }
};
mv = Kf;
gv = Lr;
var E2 = {
        usingClientEntryPoint: !1,
        Events: [fa, Jr, Rl, pv, hv, Kf]
    },
    Xo = {
        findFiberByHostInstance: br,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    P2 = {
        bundleType: Xo.bundleType,
        version: Xo.version,
        rendererPackageName: Xo.rendererPackageName,
        rendererConfig: Xo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: zn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Sv(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Xo.findFiberByHostInstance || _2,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qa.isDisabled && Qa.supportsFiber)
        try {
            _l = Qa.inject(P2),
            sn = Qa
        } catch {}
}
wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = E2;
wt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ep(t))
        throw Error(z(200));
    return C2(e, t, null, n)
};
wt.createRoot = function(e, t) {
    if (!ep(e))
        throw Error(z(299));
    var n = !1,
        r = "",
        o = Zy;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = qf(e, 1, !1, null, null, n, !1, r, o), e[En] = t.current, Oi(e.nodeType === 8 ? e.parentNode : e), new Jf(t)
};
wt.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(z(188)) : (e = Object.keys(e).join(","), Error(z(268, e)));
    return e = Sv(t), e = e === null ? null : e.stateNode, e
};
wt.flushSync = function(e) {
    return Lr(e)
};
wt.hydrate = function(e, t, n) {
    if (!Ol(t))
        throw Error(z(200));
    return Bl(null, e, t, !0, n)
};
wt.hydrateRoot = function(e, t, n) {
    if (!ep(e))
        throw Error(z(405));
    var r = n != null && n.hydratedSources || null,
        o = !1,
        i = "",
        a = Zy;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (a = n.onRecoverableError)), t = qy(t, null, e, 1, n != null ? n : null, o, !1, i, a), e[En] = t.current, Oi(e), r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new $l(t)
};
wt.render = function(e, t, n) {
    if (!Ol(t))
        throw Error(z(200));
    return Bl(null, e, t, !1, n)
};
wt.unmountComponentAtNode = function(e) {
    if (!Ol(e))
        throw Error(z(40));
    return e._reactRootContainer ? (Lr(function() {
        Bl(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[En] = null
        })
    }), !0) : !1
};
wt.unstable_batchedUpdates = Kf;
wt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ol(n))
        throw Error(z(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(z(38));
    return Bl(e, t, n, !1, r)
};
wt.version = "18.2.0-next-9e3b772b8-20220608";
(function(e) {
    function t() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
            } catch (n) {
                console.error(n)
            }
    }
    t(),
    e.exports = wt
})(Cl);
var Pm = Cl.exports;
Ec.createRoot = Pm.createRoot,
Ec.hydrateRoot = Pm.hydrateRoot;
var ol = Boolean(globalThis == null ? void 0 : globalThis.document) ? k.exports.useLayoutEffect : k.exports.useEffect,
    Dl = {
        exports: {}
    },
    Vl = {}; /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */







var R2 = k.exports,
    A2 = Symbol.for("react.element"),
    M2 = Symbol.for("react.fragment"),
    z2 = Object.prototype.hasOwnProperty,
    I2 = R2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    L2 = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
function Jy(e, t, n) {
    var r,
        o = {},
        i = null,
        a = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
    for (r in t)
        z2.call(t, r) && !L2.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: A2,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: I2.current
    }
}
Vl.Fragment = M2;
Vl.jsx = Jy;
Vl.jsxs = Jy;
(function(e) {
    e.exports = Vl
})(Dl);
const Ki = Dl.exports.Fragment,
    P = Dl.exports.jsx,
    Te = Dl.exports.jsxs;
var tp = k.exports.createContext({});
tp.displayName = "ColorModeContext";
function jl() {
    const e = k.exports.useContext(tp);
    if (e === void 0)
        throw new Error("useColorMode must be used within a ColorModeProvider");
    return e
}
var Xa = {
    light: "chakra-ui-light",
    dark: "chakra-ui-dark"
};
function F2(e={}) {
    const {preventTransition: t=!0} = e,
        n = {
            setDataset: r => {
                const o = t ? n.preventTransition() : void 0;
                document.documentElement.dataset.theme = r,
                document.documentElement.style.colorScheme = r,
                o == null || o()
            },
            setClassName(r) {
                document.body.classList.add(r ? Xa.dark : Xa.light),
                document.body.classList.remove(r ? Xa.light : Xa.dark)
            },
            query() {
                return window.matchMedia("(prefers-color-scheme: dark)")
            },
            getSystemTheme(r) {
                var i;
                return ((i = n.query().matches) != null ? i : r === "dark") ? "dark" : "light"
            },
            addListener(r) {
                const o = n.query(),
                    i = a => {
                        r(a.matches ? "dark" : "light")
                    };
                return typeof o.addListener == "function" ? o.addListener(i) : o.addEventListener("change", i), () => {
                    typeof o.removeListener == "function" ? o.removeListener(i) : o.removeEventListener("change", i)
                }
            },
            preventTransition() {
                const r = document.createElement("style");
                return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(r), () => {
                    window.getComputedStyle(document.body),
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            document.head.removeChild(r)
                        })
                    })
                }
            }
        };
    return n
}
var N2 = "chakra-ui-color-mode";
function $2(e) {
    return {
        ssr: !1,
        type: "localStorage",
        get(t) {
            if (!(globalThis != null && globalThis.document))
                return t;
            let n;
            try {
                n = localStorage.getItem(e) || t
            } catch {}
            return n || t
        },
        set(t) {
            try {
                localStorage.setItem(e, t)
            } catch {}
        }
    }
}
var O2 = $2(N2),
    Rm = () => {};
function Am(e, t) {
    return e.type === "cookie" && e.ssr ? e.get(t) : t
}
function e1(e) {
    const {value: t, children: n, options: {useSystemColorMode: r, initialColorMode: o, disableTransitionOnChange: i}={}, colorModeManager: a=O2} = e,
        s = o === "dark" ? "dark" : "light",
        [l, u] = k.exports.useState(() => Am(a, s)),
        [c, d] = k.exports.useState(() => Am(a)),
        {getSystemTheme: f, setClassName: h, setDataset: y, addListener: S} = k.exports.useMemo(() => F2({
            preventTransition: i
        }), [i]),
        C = o === "system" && !l ? c : l,
        g = k.exports.useCallback(b => {
            const _ = b === "system" ? f() : b;
            u(_),
            h(_ === "dark"),
            y(_),
            a.set(_)
        }, [a, f, h, y]);
    ol(() => {
        o === "system" && d(f())
    }, []),
    k.exports.useEffect(() => {
        const b = a.get();
        if (b) {
            g(b);
            return
        }
        if (o === "system") {
            g("system");
            return
        }
        g(s)
    }, [a, s, o, g]);
    const p = k.exports.useCallback(() => {
        g(C === "dark" ? "light" : "dark")
    }, [C, g]);
    k.exports.useEffect(() => {
        if (!!r)
            return S(g)
    }, [r, S, g]);
    const m = k.exports.useMemo(() => ({
        colorMode: t != null ? t : C,
        toggleColorMode: t ? Rm : p,
        setColorMode: t ? Rm : g,
        forced: t !== void 0
    }), [C, p, g, t]);
    return P(tp.Provider, {
        value: m,
        children: n
    })
}
e1.displayName = "ColorModeProvider";
var B2 = new Set(["dark", "light", "system"]);
function D2(e) {
    let t = e;
    return B2.has(t) || (t = "light"), t
}
function V2(e={}) {
    const {initialColorMode: t="light", type: n="localStorage", storageKey: r="chakra-ui-color-mode"} = e,
        o = D2(t),
        i = n === "cookie",
        a = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `
        ,
        s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `
        ;
    return `!${i ? a : s}`.trim()
}
function j2(e={}) {
    const {nonce: t} = e;
    return P("script", {
        id: "chakra-script",
        nonce: t,
        dangerouslySetInnerHTML: {
            __html: V2(e)
        }
    })
}
var bd = {
    exports: {}
};
(function(e, t) {
    var n = 200,
        r = "__lodash_hash_undefined__",
        o = 800,
        i = 16,
        a = 9007199254740991,
        s = "[object Arguments]",
        l = "[object Array]",
        u = "[object AsyncFunction]",
        c = "[object Boolean]",
        d = "[object Date]",
        f = "[object Error]",
        h = "[object Function]",
        y = "[object GeneratorFunction]",
        S = "[object Map]",
        C = "[object Number]",
        g = "[object Null]",
        p = "[object Object]",
        m = "[object Proxy]",
        b = "[object RegExp]",
        _ = "[object Set]",
        R = "[object String]",
        E = "[object Undefined]",
        I = "[object WeakMap]",
        j = "[object ArrayBuffer]",
        B = "[object DataView]",
        le = "[object Float32Array]",
        ke = "[object Float64Array]",
        Qe = "[object Int8Array]",
        dt = "[object Int16Array]",
        ft = "[object Int32Array]",
        fe = "[object Uint8Array]",
        nt = "[object Uint8ClampedArray]",
        L = "[object Uint16Array]",
        G = "[object Uint32Array]",
        F = /[\\^$.*+?()[\]{}|]/g,
        A = /^\[object .+?Constructor\]$/,
        $ = /^(?:0|[1-9]\d*)$/,
        V = {};
    V[le] = V[ke] = V[Qe] = V[dt] = V[ft] = V[fe] = V[nt] = V[L] = V[G] = !0,
    V[s] = V[l] = V[j] = V[c] = V[B] = V[d] = V[f] = V[h] = V[S] = V[C] = V[p] = V[b] = V[_] = V[R] = V[I] = !1;
    var Ce = typeof za == "object" && za && za.Object === Object && za,
        Ie = typeof self == "object" && self && self.Object === Object && self,
        Xe = Ce || Ie || Function("return this")(),
        qt = t && !t.nodeType && t,
        Nt = qt && !0 && e && !e.nodeType && e,
        pn = Nt && Nt.exports === qt,
        ur = pn && Ce.process,
        In = function() {
            try {
                var v = Nt && Nt.require && Nt.require("util").types;
                return v || ur && ur.binding && ur.binding("util")
            } catch {}
        }(),
        ka = In && In.isTypedArray;
    function qb(v, x, T) {
        switch (T.length) {
        case 0:
            return v.call(x);
        case 1:
            return v.call(x, T[0]);
        case 2:
            return v.call(x, T[0], T[1]);
        case 3:
            return v.call(x, T[0], T[1], T[2])
        }
        return v.apply(x, T)
    }
    function Zb(v, x) {
        for (var T = -1, N = Array(v); ++T < v;)
            N[T] = x(T);
        return N
    }
    function Jb(v) {
        return function(x) {
            return v(x)
        }
    }
    function ex(v, x) {
        return v == null ? void 0 : v[x]
    }
    function tx(v, x) {
        return function(T) {
            return v(x(T))
        }
    }
    var nx = Array.prototype,
        rx = Function.prototype,
        Ca = Object.prototype,
        wu = Xe["__core-js_shared__"],
        _a = rx.toString,
        hn = Ca.hasOwnProperty,
        eh = function() {
            var v = /[^.]+$/.exec(wu && wu.keys && wu.keys.IE_PROTO || "");
            return v ? "Symbol(src)_1." + v : ""
        }(),
        th = Ca.toString,
        ox = _a.call(Object),
        ix = RegExp("^" + _a.call(hn).replace(F, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Ta = pn ? Xe.Buffer : void 0,
        nh = Xe.Symbol,
        rh = Xe.Uint8Array,
        oh = Ta ? Ta.allocUnsafe : void 0,
        ih = tx(Object.getPrototypeOf, Object),
        ah = Object.create,
        ax = Ca.propertyIsEnumerable,
        sx = nx.splice,
        cr = nh ? nh.toStringTag : void 0,
        Ea = function() {
            try {
                var v = _u(Object, "defineProperty");
                return v({}, "", {}), v
            } catch {}
        }(),
        lx = Ta ? Ta.isBuffer : void 0,
        sh = Math.max,
        ux = Date.now,
        lh = _u(Xe, "Map"),
        Do = _u(Object, "create"),
        cx = function() {
            function v() {}
            return function(x) {
                if (!fr(x))
                    return {};
                if (ah)
                    return ah(x);
                v.prototype = x;
                var T = new v;
                return v.prototype = void 0, T
            }
        }();
    function dr(v) {
        var x = -1,
            T = v == null ? 0 : v.length;
        for (this.clear(); ++x < T;) {
            var N = v[x];
            this.set(N[0], N[1])
        }
    }
    function dx() {
        this.__data__ = Do ? Do(null) : {},
        this.size = 0
    }
    function fx(v) {
        var x = this.has(v) && delete this.__data__[v];
        return this.size -= x ? 1 : 0, x
    }
    function px(v) {
        var x = this.__data__;
        if (Do) {
            var T = x[v];
            return T === r ? void 0 : T
        }
        return hn.call(x, v) ? x[v] : void 0
    }
    function hx(v) {
        var x = this.__data__;
        return Do ? x[v] !== void 0 : hn.call(x, v)
    }
    function mx(v, x) {
        var T = this.__data__;
        return this.size += this.has(v) ? 0 : 1, T[v] = Do && x === void 0 ? r : x, this
    }
    dr.prototype.clear = dx,
    dr.prototype.delete = fx,
    dr.prototype.get = px,
    dr.prototype.has = hx,
    dr.prototype.set = mx;
    function mn(v) {
        var x = -1,
            T = v == null ? 0 : v.length;
        for (this.clear(); ++x < T;) {
            var N = v[x];
            this.set(N[0], N[1])
        }
    }
    function gx() {
        this.__data__ = [],
        this.size = 0
    }
    function vx(v) {
        var x = this.__data__,
            T = Pa(x, v);
        if (T < 0)
            return !1;
        var N = x.length - 1;
        return T == N ? x.pop() : sx.call(x, T, 1), --this.size, !0
    }
    function yx(v) {
        var x = this.__data__,
            T = Pa(x, v);
        return T < 0 ? void 0 : x[T][1]
    }
    function Sx(v) {
        return Pa(this.__data__, v) > -1
    }
    function bx(v, x) {
        var T = this.__data__,
            N = Pa(T, v);
        return N < 0 ? (++this.size, T.push([v, x])) : T[N][1] = x, this
    }
    mn.prototype.clear = gx,
    mn.prototype.delete = vx,
    mn.prototype.get = yx,
    mn.prototype.has = Sx,
    mn.prototype.set = bx;
    function Vr(v) {
        var x = -1,
            T = v == null ? 0 : v.length;
        for (this.clear(); ++x < T;) {
            var N = v[x];
            this.set(N[0], N[1])
        }
    }
    function xx() {
        this.size = 0,
        this.__data__ = {
            hash: new dr,
            map: new (lh || mn),
            string: new dr
        }
    }
    function wx(v) {
        var x = Aa(this, v).delete(v);
        return this.size -= x ? 1 : 0, x
    }
    function kx(v) {
        return Aa(this, v).get(v)
    }
    function Cx(v) {
        return Aa(this, v).has(v)
    }
    function _x(v, x) {
        var T = Aa(this, v),
            N = T.size;
        return T.set(v, x), this.size += T.size == N ? 0 : 1, this
    }
    Vr.prototype.clear = xx,
    Vr.prototype.delete = wx,
    Vr.prototype.get = kx,
    Vr.prototype.has = Cx,
    Vr.prototype.set = _x;
    function jr(v) {
        var x = this.__data__ = new mn(v);
        this.size = x.size
    }
    function Tx() {
        this.__data__ = new mn,
        this.size = 0
    }
    function Ex(v) {
        var x = this.__data__,
            T = x.delete(v);
        return this.size = x.size, T
    }
    function Px(v) {
        return this.__data__.get(v)
    }
    function Rx(v) {
        return this.__data__.has(v)
    }
    function Ax(v, x) {
        var T = this.__data__;
        if (T instanceof mn) {
            var N = T.__data__;
            if (!lh || N.length < n - 1)
                return N.push([v, x]), this.size = ++T.size, this;
            T = this.__data__ = new Vr(N)
        }
        return T.set(v, x), this.size = T.size, this
    }
    jr.prototype.clear = Tx,
    jr.prototype.delete = Ex,
    jr.prototype.get = Px,
    jr.prototype.has = Rx,
    jr.prototype.set = Ax;
    function Mx(v, x) {
        var T = Pu(v),
            N = !T && Eu(v),
            Q = !T && !N && ph(v),
            ie = !T && !N && !Q && mh(v),
            pe = T || N || Q || ie,
            Y = pe ? Zb(v.length, String) : [],
            he = Y.length;
        for (var Et in v)
            (x || hn.call(v, Et)) && !(pe && (Et == "length" || Q && (Et == "offset" || Et == "parent") || ie && (Et == "buffer" || Et == "byteLength" || Et == "byteOffset") || dh(Et, he))) && Y.push(Et);
        return Y
    }
    function ku(v, x, T) {
        (T !== void 0 && !Ma(v[x], T) || T === void 0 && !(x in v)) && Cu(v, x, T)
    }
    function zx(v, x, T) {
        var N = v[x];
        (!(hn.call(v, x) && Ma(N, T)) || T === void 0 && !(x in v)) && Cu(v, x, T)
    }
    function Pa(v, x) {
        for (var T = v.length; T--;)
            if (Ma(v[T][0], x))
                return T;
        return -1
    }
    function Cu(v, x, T) {
        x == "__proto__" && Ea ? Ea(v, x, {
            configurable: !0,
            enumerable: !0,
            value: T,
            writable: !0
        }) : v[x] = T
    }
    var Ix = Gx();
    function Ra(v) {
        return v == null ? v === void 0 ? E : g : cr && cr in Object(v) ? Kx(v) : Jx(v)
    }
    function uh(v) {
        return Vo(v) && Ra(v) == s
    }
    function Lx(v) {
        if (!fr(v) || qx(v))
            return !1;
        var x = Au(v) ? ix : A;
        return x.test(rw(v))
    }
    function Fx(v) {
        return Vo(v) && hh(v.length) && !!V[Ra(v)]
    }
    function Nx(v) {
        if (!fr(v))
            return Zx(v);
        var x = fh(v),
            T = [];
        for (var N in v)
            N == "constructor" && (x || !hn.call(v, N)) || T.push(N);
        return T
    }
    function ch(v, x, T, N, Q) {
        v !== x && Ix(x, function(ie, pe) {
            if (Q || (Q = new jr), fr(ie))
                $x(v, x, pe, T, ch, N, Q);
            else {
                var Y = N ? N(Tu(v, pe), ie, pe + "", v, x, Q) : void 0;
                Y === void 0 && (Y = ie),
                ku(v, pe, Y)
            }
        }, gh)
    }
    function $x(v, x, T, N, Q, ie, pe) {
        var Y = Tu(v, T),
            he = Tu(x, T),
            Et = pe.get(he);
        if (Et) {
            ku(v, T, Et);
            return
        }
        var pt = ie ? ie(Y, he, T + "", v, x, pe) : void 0,
            jo = pt === void 0;
        if (jo) {
            var Mu = Pu(he),
                zu = !Mu && ph(he),
                yh = !Mu && !zu && mh(he);
            pt = he,
            Mu || zu || yh ? Pu(Y) ? pt = Y : ow(Y) ? pt = Wx(Y) : zu ? (jo = !1, pt = Dx(he, !0)) : yh ? (jo = !1, pt = jx(he, !0)) : pt = [] : iw(he) || Eu(he) ? (pt = Y, Eu(Y) ? pt = aw(Y) : (!fr(Y) || Au(Y)) && (pt = Yx(he))) : jo = !1
        }
        jo && (pe.set(he, pt), Q(pt, he, N, ie, pe), pe.delete(he)),
        ku(v, T, pt)
    }
    function Ox(v, x) {
        return tw(ew(v, x, vh), v + "")
    }
    var Bx = Ea ? function(v, x) {
        return Ea(v, "toString", {
            configurable: !0,
            enumerable: !1,
            value: lw(x),
            writable: !0
        })
    } : vh;
    function Dx(v, x) {
        if (x)
            return v.slice();
        var T = v.length,
            N = oh ? oh(T) : new v.constructor(T);
        return v.copy(N), N
    }
    function Vx(v) {
        var x = new v.constructor(v.byteLength);
        return new rh(x).set(new rh(v)), x
    }
    function jx(v, x) {
        var T = x ? Vx(v.buffer) : v.buffer;
        return new v.constructor(T, v.byteOffset, v.length)
    }
    function Wx(v, x) {
        var T = -1,
            N = v.length;
        for (x || (x = Array(N)); ++T < N;)
            x[T] = v[T];
        return x
    }
    function Hx(v, x, T, N) {
        var Q = !T;
        T || (T = {});
        for (var ie = -1, pe = x.length; ++ie < pe;) {
            var Y = x[ie],
                he = N ? N(T[Y], v[Y], Y, T, v) : void 0;
            he === void 0 && (he = v[Y]),
            Q ? Cu(T, Y, he) : zx(T, Y, he)
        }
        return T
    }
    function Ux(v) {
        return Ox(function(x, T) {
            var N = -1,
                Q = T.length,
                ie = Q > 1 ? T[Q - 1] : void 0,
                pe = Q > 2 ? T[2] : void 0;
            for (ie = v.length > 3 && typeof ie == "function" ? (Q--, ie) : void 0, pe && Qx(T[0], T[1], pe) && (ie = Q < 3 ? void 0 : ie, Q = 1), x = Object(x); ++N < Q;) {
                var Y = T[N];
                Y && v(x, Y, N, ie)
            }
            return x
        })
    }
    function Gx(v) {
        return function(x, T, N) {
            for (var Q = -1, ie = Object(x), pe = N(x), Y = pe.length; Y--;) {
                var he = pe[v ? Y : ++Q];
                if (T(ie[he], he, ie) === !1)
                    break
            }
            return x
        }
    }
    function Aa(v, x) {
        var T = v.__data__;
        return Xx(x) ? T[typeof x == "string" ? "string" : "hash"] : T.map
    }
    function _u(v, x) {
        var T = ex(v, x);
        return Lx(T) ? T : void 0
    }
    function Kx(v) {
        var x = hn.call(v, cr),
            T = v[cr];
        try {
            v[cr] = void 0;
            var N = !0
        } catch {}
        var Q = th.call(v);
        return N && (x ? v[cr] = T : delete v[cr]), Q
    }
    function Yx(v) {
        return typeof v.constructor == "function" && !fh(v) ? cx(ih(v)) : {}
    }
    function dh(v, x) {
        var T = typeof v;
        return x = x == null ? a : x, !!x && (T == "number" || T != "symbol" && $.test(v)) && v > -1 && v % 1 == 0 && v < x
    }
    function Qx(v, x, T) {
        if (!fr(T))
            return !1;
        var N = typeof x;
        return (N == "number" ? Ru(T) && dh(x, T.length) : N == "string" && x in T) ? Ma(T[x], v) : !1
    }
    function Xx(v) {
        var x = typeof v;
        return x == "string" || x == "number" || x == "symbol" || x == "boolean" ? v !== "__proto__" : v === null
    }
    function qx(v) {
        return !!eh && eh in v
    }
    function fh(v) {
        var x = v && v.constructor,
            T = typeof x == "function" && x.prototype || Ca;
        return v === T
    }
    function Zx(v) {
        var x = [];
        if (v != null)
            for (var T in Object(v))
                x.push(T);
        return x
    }
    function Jx(v) {
        return th.call(v)
    }
    function ew(v, x, T) {
        return x = sh(x === void 0 ? v.length - 1 : x, 0), function() {
            for (var N = arguments, Q = -1, ie = sh(N.length - x, 0), pe = Array(ie); ++Q < ie;)
                pe[Q] = N[x + Q];
            Q = -1;
            for (var Y = Array(x + 1); ++Q < x;)
                Y[Q] = N[Q];
            return Y[x] = T(pe), qb(v, this, Y)
        }
    }
    function Tu(v, x) {
        if (!(x === "constructor" && typeof v[x] == "function") && x != "__proto__")
            return v[x]
    }
    var tw = nw(Bx);
    function nw(v) {
        var x = 0,
            T = 0;
        return function() {
            var N = ux(),
                Q = i - (N - T);
            if (T = N, Q > 0) {
                if (++x >= o)
                    return arguments[0]
            } else
                x = 0;
            return v.apply(void 0, arguments)
        }
    }
    function rw(v) {
        if (v != null) {
            try {
                return _a.call(v)
            } catch {}
            try {
                return v + ""
            } catch {}
        }
        return ""
    }
    function Ma(v, x) {
        return v === x || v !== v && x !== x
    }
    var Eu = uh(function() {
            return arguments
        }()) ? uh : function(v) {
            return Vo(v) && hn.call(v, "callee") && !ax.call(v, "callee")
        },
        Pu = Array.isArray;
    function Ru(v) {
        return v != null && hh(v.length) && !Au(v)
    }
    function ow(v) {
        return Vo(v) && Ru(v)
    }
    var ph = lx || uw;
    function Au(v) {
        if (!fr(v))
            return !1;
        var x = Ra(v);
        return x == h || x == y || x == u || x == m
    }
    function hh(v) {
        return typeof v == "number" && v > -1 && v % 1 == 0 && v <= a
    }
    function fr(v) {
        var x = typeof v;
        return v != null && (x == "object" || x == "function")
    }
    function Vo(v) {
        return v != null && typeof v == "object"
    }
    function iw(v) {
        if (!Vo(v) || Ra(v) != p)
            return !1;
        var x = ih(v);
        if (x === null)
            return !0;
        var T = hn.call(x, "constructor") && x.constructor;
        return typeof T == "function" && T instanceof T && _a.call(T) == ox
    }
    var mh = ka ? Jb(ka) : Fx;
    function aw(v) {
        return Hx(v, gh(v))
    }
    function gh(v) {
        return Ru(v) ? Mx(v, !0) : Nx(v)
    }
    var sw = Ux(function(v, x, T, N) {
        ch(v, x, T, N)
    });
    function lw(v) {
        return function() {
            return v
        }
    }
    function vh(v) {
        return v
    }
    function uw() {
        return !1
    }
    e.exports = sw
})(bd, bd.exports);
const zt = bd.exports;
function Kt(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !Array.isArray(e)
}
function kr(e, ...t) {
    return W2(e) ? e(...t) : e
}
var W2 = e => typeof e == "function",
    H2 = e => /!(important)?$/.test(e),
    Mm = e => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e,
    xd = (e, t) => n => {
        const r = String(t),
            o = H2(r),
            i = Mm(r),
            a = e ? `${e}.${i}` : i;
        let s = Kt(n.__cssMap) && a in n.__cssMap ? n.__cssMap[a].varRef : t;
        return s = Mm(s), o ? `${s} !important` : s
    };
function Yi(e) {
    const {scale: t, transform: n, compose: r} = e;
    return (i, a) => {
        var u;
        const s = xd(t, i)(a);
        let l = (u = n == null ? void 0 : n(s, a)) != null ? u : s;
        return r && (l = r(l, a)), l
    }
}
var qa = (...e) => t => e.reduce((n, r) => r(n), t);
function Ot(e, t) {
    return n => {
        const r = {
            property: n,
            scale: e
        };
        return r.transform = Yi({
            scale: e,
            transform: t
        }), r
    }
}
var U2 = ({rtl: e, ltr: t}) => n => n.direction === "rtl" ? e : t;
function G2(e) {
    const {property: t, scale: n, transform: r} = e;
    return {
        scale: n,
        property: U2(t),
        transform: n ? Yi({
            scale: n,
            compose: r
        }) : r
    }
}
var t1 = ["rotate(var(--chakra-rotate, 0))", "scaleX(var(--chakra-scale-x, 1))", "scaleY(var(--chakra-scale-y, 1))", "skewX(var(--chakra-skew-x, 0))", "skewY(var(--chakra-skew-y, 0))"];
function K2() {
    return ["translateX(var(--chakra-translate-x, 0))", "translateY(var(--chakra-translate-y, 0))", ...t1].join(" ")
}
function Y2() {
    return ["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)", ...t1].join(" ")
}
var Q2 = {
        "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
        filter: ["var(--chakra-blur)", "var(--chakra-brightness)", "var(--chakra-contrast)", "var(--chakra-grayscale)", "var(--chakra-hue-rotate)", "var(--chakra-invert)", "var(--chakra-saturate)", "var(--chakra-sepia)", "var(--chakra-drop-shadow)"].join(" ")
    },
    X2 = {
        backdropFilter: ["var(--chakra-backdrop-blur)", "var(--chakra-backdrop-brightness)", "var(--chakra-backdrop-contrast)", "var(--chakra-backdrop-grayscale)", "var(--chakra-backdrop-hue-rotate)", "var(--chakra-backdrop-invert)", "var(--chakra-backdrop-opacity)", "var(--chakra-backdrop-saturate)", "var(--chakra-backdrop-sepia)"].join(" "),
        "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
        "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
    };
function q2(e) {
    return {
        "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
        "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
        "--chakra-ring-width": e,
        boxShadow: ["var(--chakra-ring-offset-shadow)", "var(--chakra-ring-shadow)", "var(--chakra-shadow, 0 0 #0000)"].join(", ")
    }
}
var Z2 = {
        "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse"
        },
        "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse"
        }
    },
    n1 = "& > :not(style) ~ :not(style)",
    J2 = {
        [n1]: {
            marginInlineStart: "calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",
            marginInlineEnd: "calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"
        }
    },
    eC = {
        [n1]: {
            marginTop: "calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",
            marginBottom: "calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"
        }
    },
    wd = {
        "to-t": "to top",
        "to-tr": "to top right",
        "to-r": "to right",
        "to-br": "to bottom right",
        "to-b": "to bottom",
        "to-bl": "to bottom left",
        "to-l": "to left",
        "to-tl": "to top left"
    },
    tC = new Set(Object.values(wd)),
    r1 = new Set(["none", "-moz-initial", "inherit", "initial", "revert", "unset"]),
    nC = e => e.trim();
function rC(e, t) {
    var d;
    var n;
    if (e == null || r1.has(e))
        return e;
    const r = /(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,
        {type: o, values: i} = (d = (n = r.exec(e)) == null ? void 0 : n.groups) != null ? d : {};
    if (!o || !i)
        return e;
    const a = o.includes("-gradient") ? o : `${o}-gradient`,
        [s, ...l] = i.split(",").map(nC).filter(Boolean);
    if ((l == null ? void 0 : l.length) === 0)
        return e;
    const u = s in wd ? wd[s] : s;
    l.unshift(u);
    const c = l.map(f => {
        if (tC.has(f))
            return f;
        const h = f.indexOf(" "),
            [y, S] = h !== -1 ? [f.substr(0, h), f.substr(h + 1)] : [f],
            C = o1(S) ? S : S && S.split(" "),
            g = `colors.${y}`,
            p = g in t.__cssMap ? t.__cssMap[g].varRef : y;
        return C ? [p, ...Array.isArray(C) ? C : [C]].join(" ") : p
    });
    return `${a}(${c.join(", ")})`
}
var o1 = e => typeof e == "string" && e.includes("(") && e.includes(")"),
    oC = (e, t) => rC(e, t != null ? t : {});
function iC(e) {
    return /^var\(--.+\)$/.test(e)
}
var aC = e => {
        const t = parseFloat(e.toString()),
            n = e.toString().replace(String(t), "");
        return {
            unitless: !n,
            value: t,
            unit: n
        }
    },
    Jt = e => t => `${e}(${t})`,
    X = {
        filter(e) {
            return e !== "auto" ? e : Q2
        },
        backdropFilter(e) {
            return e !== "auto" ? e : X2
        },
        ring(e) {
            return q2(X.px(e))
        },
        bgClip(e) {
            return e === "text" ? {
                color: "transparent",
                backgroundClip: "text"
            } : {
                backgroundClip: e
            }
        },
        transform(e) {
            return e === "auto" ? K2() : e === "auto-gpu" ? Y2() : e
        },
        vh(e) {
            return e === "$100vh" ? "var(--chakra-vh)" : e
        },
        px(e) {
            if (e == null)
                return e;
            const {unitless: t} = aC(e);
            return t || typeof e == "number" ? `${e}px` : e
        },
        fraction(e) {
            return typeof e != "number" || e > 1 ? e : `${e * 100}%`
        },
        float(e, t) {
            const n = {
                left: "right",
                right: "left"
            };
            return t.direction === "rtl" ? n[e] : e
        },
        degree(e) {
            if (iC(e) || e == null)
                return e;
            const t = typeof e == "string" && !e.endsWith("deg");
            return typeof e == "number" || t ? `${e}deg` : e
        },
        gradient: oC,
        blur: Jt("blur"),
        opacity: Jt("opacity"),
        brightness: Jt("brightness"),
        contrast: Jt("contrast"),
        dropShadow: Jt("drop-shadow"),
        grayscale: Jt("grayscale"),
        hueRotate: Jt("hue-rotate"),
        invert: Jt("invert"),
        saturate: Jt("saturate"),
        sepia: Jt("sepia"),
        bgImage(e) {
            return e == null || o1(e) || r1.has(e) ? e : `url(${e})`
        },
        outline(e) {
            const t = String(e) === "0" || String(e) === "none";
            return e !== null && t ? {
                outline: "2px solid transparent",
                outlineOffset: "2px"
            } : {
                outline: e
            }
        },
        flexDirection(e) {
            var o;
            const {space: t, divide: n} = (o = Z2[e]) != null ? o : {},
                r = {
                    flexDirection: e
                };
            return t && (r[t] = 1), n && (r[n] = 1), r
        }
    },
    w = {
        borderWidths: Ot("borderWidths"),
        borderStyles: Ot("borderStyles"),
        colors: Ot("colors"),
        borders: Ot("borders"),
        radii: Ot("radii", X.px),
        space: Ot("space", qa(X.vh, X.px)),
        spaceT: Ot("space", qa(X.vh, X.px)),
        degreeT(e) {
            return {
                property: e,
                transform: X.degree
            }
        },
        prop(e, t, n) {
            return {
                property: e,
                scale: t,
                ...t && {
                    transform: Yi({
                        scale: t,
                        transform: n
                    })
                }
            }
        },
        propT(e, t) {
            return {
                property: e,
                transform: t
            }
        },
        sizes: Ot("sizes", qa(X.vh, X.px)),
        sizesT: Ot("sizes", qa(X.vh, X.fraction)),
        shadows: Ot("shadows"),
        logical: G2,
        blur: Ot("blur", X.blur)
    },
    ws = {
        background: w.colors("background"),
        backgroundColor: w.colors("backgroundColor"),
        backgroundImage: w.propT("backgroundImage", X.bgImage),
        backgroundSize: !0,
        backgroundPosition: !0,
        backgroundRepeat: !0,
        backgroundAttachment: !0,
        backgroundClip: {
            transform: X.bgClip
        },
        bgSize: w.prop("backgroundSize"),
        bgPosition: w.prop("backgroundPosition"),
        bg: w.colors("background"),
        bgColor: w.colors("backgroundColor"),
        bgPos: w.prop("backgroundPosition"),
        bgRepeat: w.prop("backgroundRepeat"),
        bgAttachment: w.prop("backgroundAttachment"),
        bgGradient: w.propT("backgroundImage", X.gradient),
        bgClip: {
            transform: X.bgClip
        }
    };
Object.assign(ws, {
    bgImage: ws.backgroundImage,
    bgImg: ws.backgroundImage
});
var Z = {
    border: w.borders("border"),
    borderWidth: w.borderWidths("borderWidth"),
    borderStyle: w.borderStyles("borderStyle"),
    borderColor: w.colors("borderColor"),
    borderRadius: w.radii("borderRadius"),
    borderTop: w.borders("borderTop"),
    borderBlockStart: w.borders("borderBlockStart"),
    borderTopLeftRadius: w.radii("borderTopLeftRadius"),
    borderStartStartRadius: w.logical({
        scale: "radii",
        property: {
            ltr: "borderTopLeftRadius",
            rtl: "borderTopRightRadius"
        }
    }),
    borderEndStartRadius: w.logical({
        scale: "radii",
        property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius"
        }
    }),
    borderTopRightRadius: w.radii("borderTopRightRadius"),
    borderStartEndRadius: w.logical({
        scale: "radii",
        property: {
            ltr: "borderTopRightRadius",
            rtl: "borderTopLeftRadius"
        }
    }),
    borderEndEndRadius: w.logical({
        scale: "radii",
        property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius"
        }
    }),
    borderRight: w.borders("borderRight"),
    borderInlineEnd: w.borders("borderInlineEnd"),
    borderBottom: w.borders("borderBottom"),
    borderBlockEnd: w.borders("borderBlockEnd"),
    borderBottomLeftRadius: w.radii("borderBottomLeftRadius"),
    borderBottomRightRadius: w.radii("borderBottomRightRadius"),
    borderLeft: w.borders("borderLeft"),
    borderInlineStart: {
        property: "borderInlineStart",
        scale: "borders"
    },
    borderInlineStartRadius: w.logical({
        scale: "radii",
        property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
        }
    }),
    borderInlineEndRadius: w.logical({
        scale: "radii",
        property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
        }
    }),
    borderX: w.borders(["borderLeft", "borderRight"]),
    borderInline: w.borders("borderInline"),
    borderY: w.borders(["borderTop", "borderBottom"]),
    borderBlock: w.borders("borderBlock"),
    borderTopWidth: w.borderWidths("borderTopWidth"),
    borderBlockStartWidth: w.borderWidths("borderBlockStartWidth"),
    borderTopColor: w.colors("borderTopColor"),
    borderBlockStartColor: w.colors("borderBlockStartColor"),
    borderTopStyle: w.borderStyles("borderTopStyle"),
    borderBlockStartStyle: w.borderStyles("borderBlockStartStyle"),
    borderBottomWidth: w.borderWidths("borderBottomWidth"),
    borderBlockEndWidth: w.borderWidths("borderBlockEndWidth"),
    borderBottomColor: w.colors("borderBottomColor"),
    borderBlockEndColor: w.colors("borderBlockEndColor"),
    borderBottomStyle: w.borderStyles("borderBottomStyle"),
    borderBlockEndStyle: w.borderStyles("borderBlockEndStyle"),
    borderLeftWidth: w.borderWidths("borderLeftWidth"),
    borderInlineStartWidth: w.borderWidths("borderInlineStartWidth"),
    borderLeftColor: w.colors("borderLeftColor"),
    borderInlineStartColor: w.colors("borderInlineStartColor"),
    borderLeftStyle: w.borderStyles("borderLeftStyle"),
    borderInlineStartStyle: w.borderStyles("borderInlineStartStyle"),
    borderRightWidth: w.borderWidths("borderRightWidth"),
    borderInlineEndWidth: w.borderWidths("borderInlineEndWidth"),
    borderRightColor: w.colors("borderRightColor"),
    borderInlineEndColor: w.colors("borderInlineEndColor"),
    borderRightStyle: w.borderStyles("borderRightStyle"),
    borderInlineEndStyle: w.borderStyles("borderInlineEndStyle"),
    borderTopRadius: w.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
    borderBottomRadius: w.radii(["borderBottomLeftRadius", "borderBottomRightRadius"]),
    borderLeftRadius: w.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
    borderRightRadius: w.radii(["borderTopRightRadius", "borderBottomRightRadius"])
};
Object.assign(Z, {
    rounded: Z.borderRadius,
    roundedTop: Z.borderTopRadius,
    roundedTopLeft: Z.borderTopLeftRadius,
    roundedTopRight: Z.borderTopRightRadius,
    roundedTopStart: Z.borderStartStartRadius,
    roundedTopEnd: Z.borderStartEndRadius,
    roundedBottom: Z.borderBottomRadius,
    roundedBottomLeft: Z.borderBottomLeftRadius,
    roundedBottomRight: Z.borderBottomRightRadius,
    roundedBottomStart: Z.borderEndStartRadius,
    roundedBottomEnd: Z.borderEndEndRadius,
    roundedLeft: Z.borderLeftRadius,
    roundedRight: Z.borderRightRadius,
    roundedStart: Z.borderInlineStartRadius,
    roundedEnd: Z.borderInlineEndRadius,
    borderStart: Z.borderInlineStart,
    borderEnd: Z.borderInlineEnd,
    borderTopStartRadius: Z.borderStartStartRadius,
    borderTopEndRadius: Z.borderStartEndRadius,
    borderBottomStartRadius: Z.borderEndStartRadius,
    borderBottomEndRadius: Z.borderEndEndRadius,
    borderStartRadius: Z.borderInlineStartRadius,
    borderEndRadius: Z.borderInlineEndRadius,
    borderStartWidth: Z.borderInlineStartWidth,
    borderEndWidth: Z.borderInlineEndWidth,
    borderStartColor: Z.borderInlineStartColor,
    borderEndColor: Z.borderInlineEndColor,
    borderStartStyle: Z.borderInlineStartStyle,
    borderEndStyle: Z.borderInlineEndStyle
});
var sC = {
        color: w.colors("color"),
        textColor: w.colors("color"),
        fill: w.colors("fill"),
        stroke: w.colors("stroke")
    },
    kd = {
        boxShadow: w.shadows("boxShadow"),
        mixBlendMode: !0,
        blendMode: w.prop("mixBlendMode"),
        backgroundBlendMode: !0,
        bgBlendMode: w.prop("backgroundBlendMode"),
        opacity: !0
    };
Object.assign(kd, {
    shadow: kd.boxShadow
});
var lC = {
        filter: {
            transform: X.filter
        },
        blur: w.blur("--chakra-blur"),
        brightness: w.propT("--chakra-brightness", X.brightness),
        contrast: w.propT("--chakra-contrast", X.contrast),
        hueRotate: w.degreeT("--chakra-hue-rotate"),
        invert: w.propT("--chakra-invert", X.invert),
        saturate: w.propT("--chakra-saturate", X.saturate),
        dropShadow: w.propT("--chakra-drop-shadow", X.dropShadow),
        backdropFilter: {
            transform: X.backdropFilter
        },
        backdropBlur: w.blur("--chakra-backdrop-blur"),
        backdropBrightness: w.propT("--chakra-backdrop-brightness", X.brightness),
        backdropContrast: w.propT("--chakra-backdrop-contrast", X.contrast),
        backdropHueRotate: w.degreeT("--chakra-backdrop-hue-rotate"),
        backdropInvert: w.propT("--chakra-backdrop-invert", X.invert),
        backdropSaturate: w.propT("--chakra-backdrop-saturate", X.saturate)
    },
    il = {
        alignItems: !0,
        alignContent: !0,
        justifyItems: !0,
        justifyContent: !0,
        flexWrap: !0,
        flexDirection: {
            transform: X.flexDirection
        },
        experimental_spaceX: {
            static: J2,
            transform: Yi({
                scale: "space",
                transform: e => e !== null ? {
                    "--chakra-space-x": e
                } : null
            })
        },
        experimental_spaceY: {
            static: eC,
            transform: Yi({
                scale: "space",
                transform: e => e != null ? {
                    "--chakra-space-y": e
                } : null
            })
        },
        flex: !0,
        flexFlow: !0,
        flexGrow: !0,
        flexShrink: !0,
        flexBasis: w.sizes("flexBasis"),
        justifySelf: !0,
        alignSelf: !0,
        order: !0,
        placeItems: !0,
        placeContent: !0,
        placeSelf: !0,
        gap: w.space("gap"),
        rowGap: w.space("rowGap"),
        columnGap: w.space("columnGap")
    };
Object.assign(il, {
    flexDir: il.flexDirection
});
var i1 = {
        gridGap: w.space("gridGap"),
        gridColumnGap: w.space("gridColumnGap"),
        gridRowGap: w.space("gridRowGap"),
        gridColumn: !0,
        gridRow: !0,
        gridAutoFlow: !0,
        gridAutoColumns: !0,
        gridColumnStart: !0,
        gridColumnEnd: !0,
        gridRowStart: !0,
        gridRowEnd: !0,
        gridAutoRows: !0,
        gridTemplate: !0,
        gridTemplateColumns: !0,
        gridTemplateRows: !0,
        gridTemplateAreas: !0,
        gridArea: !0
    },
    uC = {
        appearance: !0,
        cursor: !0,
        resize: !0,
        userSelect: !0,
        pointerEvents: !0,
        outline: {
            transform: X.outline
        },
        outlineOffset: !0,
        outlineColor: w.colors("outlineColor")
    },
    Pt = {
        width: w.sizesT("width"),
        inlineSize: w.sizesT("inlineSize"),
        height: w.sizes("height"),
        blockSize: w.sizes("blockSize"),
        boxSize: w.sizes(["width", "height"]),
        minWidth: w.sizes("minWidth"),
        minInlineSize: w.sizes("minInlineSize"),
        minHeight: w.sizes("minHeight"),
        minBlockSize: w.sizes("minBlockSize"),
        maxWidth: w.sizes("maxWidth"),
        maxInlineSize: w.sizes("maxInlineSize"),
        maxHeight: w.sizes("maxHeight"),
        maxBlockSize: w.sizes("maxBlockSize"),
        overflow: !0,
        overflowX: !0,
        overflowY: !0,
        overscrollBehavior: !0,
        overscrollBehaviorX: !0,
        overscrollBehaviorY: !0,
        display: !0,
        verticalAlign: !0,
        boxSizing: !0,
        boxDecorationBreak: !0,
        float: w.propT("float", X.float),
        objectFit: !0,
        objectPosition: !0,
        visibility: !0,
        isolation: !0
    };
Object.assign(Pt, {
    w: Pt.width,
    h: Pt.height,
    minW: Pt.minWidth,
    maxW: Pt.maxWidth,
    minH: Pt.minHeight,
    maxH: Pt.maxHeight,
    overscroll: Pt.overscrollBehavior,
    overscrollX: Pt.overscrollBehaviorX,
    overscrollY: Pt.overscrollBehaviorY
});
var cC = {
    listStyleType: !0,
    listStylePosition: !0,
    listStylePos: w.prop("listStylePosition"),
    listStyleImage: !0,
    listStyleImg: w.prop("listStyleImage")
};
function dC(e, t, n, r) {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (r = 0; r < o.length && e; r += 1)
        e = e[o[r]];
    return e === void 0 ? n : e
}
var fC = e => {
        const t = new WeakMap;
        return (r, o, i, a) => {
            if (typeof r > "u")
                return e(r, o, i);
            t.has(r) || t.set(r, new Map);
            const s = t.get(r);
            if (s.has(o))
                return s.get(o);
            const l = e(r, o, i, a);
            return s.set(o, l), l
        }
    },
    pC = fC(dC),
    hC = {
        border: "0px",
        clip: "rect(0, 0, 0, 0)",
        width: "1px",
        height: "1px",
        margin: "-1px",
        padding: "0px",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "absolute"
    },
    mC = {
        position: "static",
        width: "auto",
        height: "auto",
        clip: "auto",
        padding: "0",
        margin: "0",
        overflow: "visible",
        whiteSpace: "normal"
    },
    ic = (e, t, n) => {
        const r = {},
            o = pC(e, t, {});
        for (const i in o)
            i in n && n[i] != null || (r[i] = o[i]);
        return r
    },
    gC = {
        srOnly: {
            transform(e) {
                return e === !0 ? hC : e === "focusable" ? mC : {}
            }
        },
        layerStyle: {
            processResult: !0,
            transform: (e, t, n) => ic(t, `layerStyles.${e}`, n)
        },
        textStyle: {
            processResult: !0,
            transform: (e, t, n) => ic(t, `textStyles.${e}`, n)
        },
        apply: {
            processResult: !0,
            transform: (e, t, n) => ic(t, e, n)
        }
    },
    gi = {
        position: !0,
        pos: w.prop("position"),
        zIndex: w.prop("zIndex", "zIndices"),
        inset: w.spaceT("inset"),
        insetX: w.spaceT(["left", "right"]),
        insetInline: w.spaceT("insetInline"),
        insetY: w.spaceT(["top", "bottom"]),
        insetBlock: w.spaceT("insetBlock"),
        top: w.spaceT("top"),
        insetBlockStart: w.spaceT("insetBlockStart"),
        bottom: w.spaceT("bottom"),
        insetBlockEnd: w.spaceT("insetBlockEnd"),
        left: w.spaceT("left"),
        insetInlineStart: w.logical({
            scale: "space",
            property: {
                ltr: "left",
                rtl: "right"
            }
        }),
        right: w.spaceT("right"),
        insetInlineEnd: w.logical({
            scale: "space",
            property: {
                ltr: "right",
                rtl: "left"
            }
        })
    };
Object.assign(gi, {
    insetStart: gi.insetInlineStart,
    insetEnd: gi.insetInlineEnd
});
var vC = {
        ring: {
            transform: X.ring
        },
        ringColor: w.colors("--chakra-ring-color"),
        ringOffset: w.prop("--chakra-ring-offset-width"),
        ringOffsetColor: w.colors("--chakra-ring-offset-color"),
        ringInset: w.prop("--chakra-ring-inset")
    },
    ce = {
        margin: w.spaceT("margin"),
        marginTop: w.spaceT("marginTop"),
        marginBlockStart: w.spaceT("marginBlockStart"),
        marginRight: w.spaceT("marginRight"),
        marginInlineEnd: w.spaceT("marginInlineEnd"),
        marginBottom: w.spaceT("marginBottom"),
        marginBlockEnd: w.spaceT("marginBlockEnd"),
        marginLeft: w.spaceT("marginLeft"),
        marginInlineStart: w.spaceT("marginInlineStart"),
        marginX: w.spaceT(["marginInlineStart", "marginInlineEnd"]),
        marginInline: w.spaceT("marginInline"),
        marginY: w.spaceT(["marginTop", "marginBottom"]),
        marginBlock: w.spaceT("marginBlock"),
        padding: w.space("padding"),
        paddingTop: w.space("paddingTop"),
        paddingBlockStart: w.space("paddingBlockStart"),
        paddingRight: w.space("paddingRight"),
        paddingBottom: w.space("paddingBottom"),
        paddingBlockEnd: w.space("paddingBlockEnd"),
        paddingLeft: w.space("paddingLeft"),
        paddingInlineStart: w.space("paddingInlineStart"),
        paddingInlineEnd: w.space("paddingInlineEnd"),
        paddingX: w.space(["paddingInlineStart", "paddingInlineEnd"]),
        paddingInline: w.space("paddingInline"),
        paddingY: w.space(["paddingTop", "paddingBottom"]),
        paddingBlock: w.space("paddingBlock")
    };
Object.assign(ce, {
    m: ce.margin,
    mt: ce.marginTop,
    mr: ce.marginRight,
    me: ce.marginInlineEnd,
    marginEnd: ce.marginInlineEnd,
    mb: ce.marginBottom,
    ml: ce.marginLeft,
    ms: ce.marginInlineStart,
    marginStart: ce.marginInlineStart,
    mx: ce.marginX,
    my: ce.marginY,
    p: ce.padding,
    pt: ce.paddingTop,
    py: ce.paddingY,
    px: ce.paddingX,
    pb: ce.paddingBottom,
    pl: ce.paddingLeft,
    ps: ce.paddingInlineStart,
    paddingStart: ce.paddingInlineStart,
    pr: ce.paddingRight,
    pe: ce.paddingInlineEnd,
    paddingEnd: ce.paddingInlineEnd
});
var yC = {
        textDecorationColor: w.colors("textDecorationColor"),
        textDecoration: !0,
        textDecor: {
            property: "textDecoration"
        },
        textDecorationLine: !0,
        textDecorationStyle: !0,
        textDecorationThickness: !0,
        textUnderlineOffset: !0,
        textShadow: w.shadows("textShadow")
    },
    SC = {
        clipPath: !0,
        transform: w.propT("transform", X.transform),
        transformOrigin: !0,
        translateX: w.spaceT("--chakra-translate-x"),
        translateY: w.spaceT("--chakra-translate-y"),
        skewX: w.degreeT("--chakra-skew-x"),
        skewY: w.degreeT("--chakra-skew-y"),
        scaleX: w.prop("--chakra-scale-x"),
        scaleY: w.prop("--chakra-scale-y"),
        scale: w.prop(["--chakra-scale-x", "--chakra-scale-y"]),
        rotate: w.degreeT("--chakra-rotate")
    },
    bC = {
        transition: !0,
        transitionDelay: !0,
        animation: !0,
        willChange: !0,
        transitionDuration: w.prop("transitionDuration", "transition.duration"),
        transitionProperty: w.prop("transitionProperty", "transition.property"),
        transitionTimingFunction: w.prop("transitionTimingFunction", "transition.easing")
    },
    xC = {
        fontFamily: w.prop("fontFamily", "fonts"),
        fontSize: w.prop("fontSize", "fontSizes", X.px),
        fontWeight: w.prop("fontWeight", "fontWeights"),
        lineHeight: w.prop("lineHeight", "lineHeights"),
        letterSpacing: w.prop("letterSpacing", "letterSpacings"),
        textAlign: !0,
        fontStyle: !0,
        wordBreak: !0,
        overflowWrap: !0,
        textOverflow: !0,
        textTransform: !0,
        whiteSpace: !0,
        noOfLines: {
            static: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "var(--chakra-line-clamp)"
            },
            property: "--chakra-line-clamp"
        }
    },
    wC = {
        scrollBehavior: !0,
        scrollSnapAlign: !0,
        scrollSnapStop: !0,
        scrollSnapType: !0,
        scrollMargin: w.spaceT("scrollMargin"),
        scrollMarginTop: w.spaceT("scrollMarginTop"),
        scrollMarginBottom: w.spaceT("scrollMarginBottom"),
        scrollMarginLeft: w.spaceT("scrollMarginLeft"),
        scrollMarginRight: w.spaceT("scrollMarginRight"),
        scrollMarginX: w.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
        scrollMarginY: w.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
        scrollPadding: w.spaceT("scrollPadding"),
        scrollPaddingTop: w.spaceT("scrollPaddingTop"),
        scrollPaddingBottom: w.spaceT("scrollPaddingBottom"),
        scrollPaddingLeft: w.spaceT("scrollPaddingLeft"),
        scrollPaddingRight: w.spaceT("scrollPaddingRight"),
        scrollPaddingX: w.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
        scrollPaddingY: w.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
    };
function a1(e) {
    return Kt(e) && e.reference ? e.reference : String(e)
}
var Wl = (e, ...t) => t.map(a1).join(` ${e} `).replace(/calc/g, ""),
    zm = (...e) => `calc(${Wl("+", ...e)})`,
    Im = (...e) => `calc(${Wl("-", ...e)})`,
    Cd = (...e) => `calc(${Wl("*", ...e)})`,
    Lm = (...e) => `calc(${Wl("/", ...e)})`,
    Fm = e => {
        const t = a1(e);
        return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Cd(t, -1)
    },
    yr = Object.assign(e => ({
        add: (...t) => yr(zm(e, ...t)),
        subtract: (...t) => yr(Im(e, ...t)),
        multiply: (...t) => yr(Cd(e, ...t)),
        divide: (...t) => yr(Lm(e, ...t)),
        negate: () => yr(Fm(e)),
        toString: () => e.toString()
    }), {
        add: zm,
        subtract: Im,
        multiply: Cd,
        divide: Lm,
        negate: Fm
    });
function kC(e, t="-") {
    return e.replace(/\s+/g, t)
}
function CC(e) {
    const t = kC(e.toString());
    return TC(_C(t))
}
function _C(e) {
    return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e
}
function TC(e) {
    return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&")
}
function EC(e, t="") {
    return [t, e].filter(Boolean).join("-")
}
function PC(e, t) {
    return `var(${e}${t ? `, ${t}` : ""})`
}
function RC(e, t="") {
    return CC(`--${EC(e, t)}`)
}
function Ct(e, t, n) {
    const r = RC(e, n);
    return {
        variable: r,
        reference: PC(r, t)
    }
}
function AC(e) {
    const t = e == null ? 0 : e.length;
    return t ? e[t - 1] : void 0
}
function MC(e) {
    const t = parseFloat(e.toString()),
        n = e.toString().replace(String(t), "");
    return {
        unitless: !n,
        value: t,
        unit: n
    }
}
function _d(e) {
    if (e == null)
        return e;
    const {unitless: t} = MC(e);
    return t || typeof e == "number" ? `${e}px` : e
}
var s1 = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1,
    np = e => Object.fromEntries(Object.entries(e).sort(s1));
function Nm(e) {
    const t = np(e);
    return Object.assign(Object.values(t), t)
}
function zC(e) {
    const t = Object.keys(np(e));
    return new Set(t)
}
function $m(e) {
    var n;
    if (!e)
        return e;
    e = (n = _d(e)) != null ? n : e;
    const t = e.endsWith("px") ? -1 : -.0625;
    return typeof e == "number" ? `${e + t}` : e.replace(/(\d+\.?\d*)/u, r => `${parseFloat(r) + t}`)
}
function oi(e, t) {
    const n = ["@media screen"];
    return e && n.push("and", `(min-width: ${_d(e)})`), t && n.push("and", `(max-width: ${_d(t)})`), n.join(" ")
}
function IC(e) {
    var i;
    if (!e)
        return null;
    e.base = (i = e.base) != null ? i : "0px";
    const t = Nm(e),
        n = Object.entries(e).sort(s1).map(([a, s], l, u) => {
            var d;
            let [, c] = (d = u[l + 1]) != null ? d : [];
            return c = parseFloat(c) > 0 ? $m(c) : void 0, {
                _minW: $m(s),
                breakpoint: a,
                minW: s,
                maxW: c,
                maxWQuery: oi(null, c),
                minWQuery: oi(s),
                minMaxQuery: oi(s, c)
            }
        }),
        r = zC(e),
        o = Array.from(r.values());
    return {
        keys: r,
        normalized: t,
        isResponsive(a) {
            const s = Object.keys(a);
            return s.length > 0 && s.every(l => r.has(l))
        },
        asObject: np(e),
        asArray: Nm(e),
        details: n,
        media: [null, ...t.map(a => oi(a)).slice(1)],
        toArrayValue(a) {
            if (!Kt(a))
                throw new Error("toArrayValue: value must be an object");
            const s = o.map(l => {
                var u;
                return (u = a[l]) != null ? u : null
            });
            for (; AC(s) === null;)
                s.pop();
            return s
        },
        toObjectValue(a) {
            if (!Array.isArray(a))
                throw new Error("toObjectValue: value must be an array");
            return a.reduce((s, l, u) => {
                const c = o[u];
                return c != null && l != null && (s[c] = l), s
            }, {})
        }
    }
}
var $e = {
        hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
        focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
        focusVisible: (e, t) => `${e}:focus-visible ${t}`,
        focusWithin: (e, t) => `${e}:focus-within ${t}`,
        active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
        disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
        invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
        checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
        indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
        readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
        expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
        placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
    },
    Fn = e => l1(t => e(t, "&"), "[role=group]", "[data-group]", ".group"),
    gn = e => l1(t => e(t, "~ &"), "[data-peer]", ".peer"),
    l1 = (e, ...t) => t.map(e).join(", "),
    Hl = {
        _hover: "&:hover, &[data-hover]",
        _active: "&:active, &[data-active]",
        _focus: "&:focus, &[data-focus]",
        _highlighted: "&[data-highlighted]",
        _focusWithin: "&:focus-within",
        _focusVisible: "&:focus-visible, &[data-focus-visible]",
        _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
        _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
        _before: "&::before",
        _after: "&::after",
        _empty: "&:empty",
        _expanded: "&[aria-expanded=true], &[data-expanded]",
        _checked: "&[aria-checked=true], &[data-checked]",
        _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
        _pressed: "&[aria-pressed=true], &[data-pressed]",
        _invalid: "&[aria-invalid=true], &[data-invalid]",
        _valid: "&[data-valid], &[data-state=valid]",
        _loading: "&[data-loading], &[aria-busy=true]",
        _selected: "&[aria-selected=true], &[data-selected]",
        _hidden: "&[hidden], &[data-hidden]",
        _autofill: "&:-webkit-autofill",
        _even: "&:nth-of-type(even)",
        _odd: "&:nth-of-type(odd)",
        _first: "&:first-of-type",
        _last: "&:last-of-type",
        _notFirst: "&:not(:first-of-type)",
        _notLast: "&:not(:last-of-type)",
        _visited: "&:visited",
        _activeLink: "&[aria-current=page]",
        _activeStep: "&[aria-current=step]",
        _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
        _groupHover: Fn($e.hover),
        _peerHover: gn($e.hover),
        _groupFocus: Fn($e.focus),
        _peerFocus: gn($e.focus),
        _groupFocusVisible: Fn($e.focusVisible),
        _peerFocusVisible: gn($e.focusVisible),
        _groupActive: Fn($e.active),
        _peerActive: gn($e.active),
        _groupDisabled: Fn($e.disabled),
        _peerDisabled: gn($e.disabled),
        _groupInvalid: Fn($e.invalid),
        _peerInvalid: gn($e.invalid),
        _groupChecked: Fn($e.checked),
        _peerChecked: gn($e.checked),
        _groupFocusWithin: Fn($e.focusWithin),
        _peerFocusWithin: gn($e.focusWithin),
        _peerPlaceholderShown: gn($e.placeholderShown),
        _placeholder: "&::placeholder",
        _placeholderShown: "&:placeholder-shown",
        _fullScreen: "&:fullscreen",
        _selection: "&::selection",
        _rtl: "[dir=rtl] &, &[dir=rtl]",
        _ltr: "[dir=ltr] &, &[dir=ltr]",
        _mediaDark: "@media (prefers-color-scheme: dark)",
        _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
        _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
        _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"
    },
    LC = Object.keys(Hl);
function Om(e, t) {
    return Ct(String(e).replace(/\./g, "-"), void 0, t)
}
function FC(e, t) {
    let n = {};
    const r = {};
    for (const [o, i] of Object.entries(e)) {
        const {isSemantic: a, value: s} = i,
            {variable: l, reference: u} = Om(o, t == null ? void 0 : t.cssVarPrefix);
        if (!a) {
            if (o.startsWith("space")) {
                const f = o.split("."),
                    [h, ...y] = f,
                    S = `${h}.-${y.join(".")}`,
                    C = yr.negate(s),
                    g = yr.negate(u);
                r[S] = {
                    value: C,
                    var: l,
                    varRef: g
                }
            }
            n[l] = s,
            r[o] = {
                value: s,
                var: l,
                varRef: u
            };
            continue
        }
        const c = f => {
                const y = [String(o).split(".")[0], f].join(".");
                if (!e[y])
                    return f;
                const {reference: C} = Om(y, t == null ? void 0 : t.cssVarPrefix);
                return C
            },
            d = Kt(s) ? s : {
                default: s
            };
        n = zt(n, Object.entries(d).reduce((f, [h, y]) => {
            var p;
            var S;
            const C = c(y);
            if (h === "default")
                return f[l] = C, f;
            const g = (p = (S = Hl) == null ? void 0 : S[h]) != null ? p : h;
            return f[g] = {
                [l]: C
            }, f
        }, {})),
        r[o] = {
            value: u,
            var: l,
            varRef: u
        }
    }
    return {
        cssVars: n,
        cssMap: r
    }
}
function NC(e, t=[]) {
    const n = Object.assign({}, e);
    for (const r of t)
        r in n && delete n[r];
    return n
}
function $C(e, t) {
    const n = {};
    for (const r of t)
        r in e && (n[r] = e[r]);
    return n
}
var OC = ["colors", "borders", "borderWidths", "borderStyles", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "space", "shadows", "sizes", "zIndices", "transition", "blur"];
function BC(e) {
    return $C(e, OC)
}
function DC(e) {
    return e.semanticTokens
}
function VC(e) {
    const {__cssMap: t, __cssVars: n, __breakpoints: r, ...o} = e;
    return o
}
function jC({tokens: e, semanticTokens: t}) {
    var o,
        i;
    const n = Object.entries((o = Td(e)) != null ? o : {}).map(([a, s]) => [a, {
            isSemantic: !1,
            value: s
        }]),
        r = Object.entries((i = Td(t, 1)) != null ? i : {}).map(([a, s]) => [a, {
            isSemantic: !0,
            value: s
        }]);
    return Object.fromEntries([...n, ...r])
}
function Td(e, t=1 / 0) {
    return !Kt(e) && !Array.isArray(e) || !t ? e : Object.entries(e).reduce((n, [r, o]) => (Kt(o) || Array.isArray(o) ? Object.entries(Td(o, t - 1)).forEach(([i, a]) => {
        n[`${r}.${i}`] = a
    }) : n[r] = o, n), {})
}
function WC(e) {
    var t;
    const n = VC(e),
        r = BC(n),
        o = DC(n),
        i = jC({
            tokens: r,
            semanticTokens: o
        }),
        a = (t = n.config) == null ? void 0 : t.cssVarPrefix,
        {cssMap: s, cssVars: l} = FC(i, {
            cssVarPrefix: a
        });
    return Object.assign(n, {
        __cssVars: {
            ...{
                "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
                "--chakra-ring-offset-width": "0px",
                "--chakra-ring-offset-color": "#fff",
                "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
                "--chakra-ring-offset-shadow": "0 0 #0000",
                "--chakra-ring-shadow": "0 0 #0000",
                "--chakra-space-x-reverse": "0",
                "--chakra-space-y-reverse": "0"
            },
            ...l
        },
        __cssMap: s,
        __breakpoints: IC(n.breakpoints)
    }), n
}
var rp = zt({}, ws, Z, sC, il, Pt, lC, vC, uC, i1, gC, gi, kd, ce, wC, xC, yC, SC, cC, bC);
Object.assign({}, ce, Pt, il, i1, gi);
var HC = [...Object.keys(rp), ...LC],
    UC = {
        ...rp,
        ...Hl
    },
    GC = e => e in UC,
    KC = e => t => {
        if (!t.__breakpoints)
            return e;
        const {isResponsive: n, toArrayValue: r, media: o} = t.__breakpoints,
            i = {};
        for (const a in e) {
            let s = kr(e[a], t);
            if (s == null)
                continue;
            if (s = Kt(s) && n(s) ? r(s) : s, !Array.isArray(s)) {
                i[a] = s;
                continue
            }
            const l = s.slice(0, o.length).length;
            for (let u = 0; u < l; u += 1) {
                const c = o == null ? void 0 : o[u];
                if (!c) {
                    i[a] = s[u];
                    continue
                }
                i[c] = i[c] || {},
                s[u] != null && (i[c][a] = s[u])
            }
        }
        return i
    };
function YC(e) {
    const t = [];
    let n = "",
        r = !1;
    for (let o = 0; o < e.length; o++) {
        const i = e[o];
        i === "(" ? (r = !0, n += i) : i === ")" ? (r = !1, n += i) : i === "," && !r ? (t.push(n), n = "") : n += i
    }
    return n = n.trim(), n && t.push(n), t
}
function QC(e) {
    return /^var\(--.+\)$/.test(e)
}
var XC = (e, t) => e.startsWith("--") && typeof t == "string" && !QC(t),
    qC = (e, t) => {
        var a,
            s;
        if (t == null)
            return t;
        const n = l => {
                var u,
                    c;
                return (c = (u = e.__cssMap) == null ? void 0 : u[l]) == null ? void 0 : c.varRef
            },
            r = l => {
                var u;
                return (u = n(l)) != null ? u : l
            },
            [o, i] = YC(t);
        return t = (s = (a = n(o)) != null ? a : r(i)) != null ? s : r(t), t
    };
function ZC(e) {
    const {configs: t={}, pseudos: n={}, theme: r} = e,
        o = (i, a=!1) => {
            var d,
                f;
            var s;
            const l = kr(i, r),
                u = KC(l)(r);
            let c = {};
            for (let h in u) {
                const y = u[h];
                let S = kr(y, r);
                h in n && (h = n[h]),
                XC(h, S) && (S = qC(r, S));
                let C = t[h];
                if (C === !0 && (C = {
                    property: h
                }), Kt(S)) {
                    c[h] = (d = c[h]) != null ? d : {},
                    c[h] = zt({}, c[h], o(S, !0));
                    continue
                }
                let g = (f = (s = C == null ? void 0 : C.transform) == null ? void 0 : s.call(C, S, r, l)) != null ? f : S;
                g = C != null && C.processResult ? o(g, !0) : g;
                const p = kr(C == null ? void 0 : C.property, r);
                if (!a && (C == null ? void 0 : C.static)) {
                    const m = kr(C.static, r);
                    c = zt({}, c, m)
                }
                if (p && Array.isArray(p)) {
                    for (const m of p)
                        c[m] = g;
                    continue
                }
                if (p) {
                    p === "&" && Kt(g) ? c = zt({}, c, g) : c[p] = g;
                    continue
                }
                if (Kt(g)) {
                    c = zt({}, c, g);
                    continue
                }
                c[h] = g
            }
            return c
        };
    return o
}
var u1 = e => t => ZC({
    theme: t,
    pseudos: Hl,
    configs: rp
})(e);
function ge(e) {
    return {
        definePartsStyle(t) {
            return t
        },
        defineMultiStyleConfig(t) {
            return {
                parts: e,
                ...t
            }
        }
    }
}
function JC(e, t) {
    if (Array.isArray(e))
        return e;
    if (Kt(e))
        return t(e);
    if (e != null)
        return [e]
}
function e_(e, t) {
    for (let n = t + 1; n < e.length; n++)
        if (e[n] != null)
            return n;
    return -1
}
function t_(e) {
    const t = e.__breakpoints;
    return function(r, o, i, a) {
        var s,
            l;
        if (!t)
            return;
        const u = {},
            c = JC(i, t.toArrayValue);
        if (!c)
            return u;
        const d = c.length,
            f = d === 1,
            h = !!r.parts;
        for (let y = 0; y < d; y++) {
            const S = t.details[y],
                C = t.details[e_(c, y)],
                g = oi(S.minW, C == null ? void 0 : C._minW),
                p = kr((s = r[o]) == null ? void 0 : s[c[y]], a);
            if (!!p) {
                if (h) {
                    (l = r.parts) == null || l.forEach(m => {
                        zt(u, {
                            [m]: f ? p[m] : {
                                [g]: p[m]
                            }
                        })
                    });
                    continue
                }
                if (!h) {
                    f ? zt(u, p) : u[g] = p;
                    continue
                }
                u[g] = p
            }
        }
        return u
    }
}
function n_(e) {
    return t => {
        var a;
        const {variant: n, size: r, theme: o} = t,
            i = t_(o);
        return zt({}, kr((a = e.baseStyle) != null ? a : {}, t), i(e, "sizes", r, t), i(e, "variants", n, t))
    }
}
function ze(e) {
    return NC(e, ["styleConfig", "size", "variant", "colorScheme"])
}
function r_(e) {
    if (e.sheet)
        return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
        if (document.styleSheets[t].ownerNode === e)
            return document.styleSheets[t]
}
function o_(e) {
    var t = document.createElement("style");
    return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t
}
var i_ = function() {
        function e(n) {
            var r = this;
            this._insertTag = function(o) {
                var i;
                r.tags.length === 0 ? r.insertionPoint ? i = r.insertionPoint.nextSibling : r.prepend ? i = r.container.firstChild : i = r.before : i = r.tags[r.tags.length - 1].nextSibling,
                r.container.insertBefore(o, i),
                r.tags.push(o)
            },
            this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy,
            this.tags = [],
            this.ctr = 0,
            this.nonce = n.nonce,
            this.key = n.key,
            this.container = n.container,
            this.prepend = n.prepend,
            this.insertionPoint = n.insertionPoint,
            this.before = null
        }
        var t = e.prototype;
        return t.hydrate = function(r) {
            r.forEach(this._insertTag)
        }, t.insert = function(r) {
            this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(o_(this));
            var o = this.tags[this.tags.length - 1];
            if (this.isSpeedy) {
                var i = r_(o);
                try {
                    i.insertRule(r, i.cssRules.length)
                } catch {}
            } else
                o.appendChild(document.createTextNode(r));
            this.ctr++
        }, t.flush = function() {
            this.tags.forEach(function(r) {
                return r.parentNode && r.parentNode.removeChild(r)
            }),
            this.tags = [],
            this.ctr = 0
        }, e
    }(),
    Ge = "-ms-",
    al = "-moz-",
    J = "-webkit-",
    c1 = "comm",
    op = "rule",
    ip = "decl",
    a_ = "@import",
    d1 = "@keyframes",
    s_ = Math.abs,
    Ul = String.fromCharCode,
    l_ = Object.assign;
function u_(e, t) {
    return (((t << 2 ^ rt(e, 0)) << 2 ^ rt(e, 1)) << 2 ^ rt(e, 2)) << 2 ^ rt(e, 3)
}
function f1(e) {
    return e.trim()
}
function c_(e, t) {
    return (e = t.exec(e)) ? e[0] : e
}
function te(e, t, n) {
    return e.replace(t, n)
}
function Ed(e, t) {
    return e.indexOf(t)
}
function rt(e, t) {
    return e.charCodeAt(t) | 0
}
function Qi(e, t, n) {
    return e.slice(t, n)
}
function nn(e) {
    return e.length
}
function ap(e) {
    return e.length
}
function Za(e, t) {
    return t.push(e), e
}
function d_(e, t) {
    return e.map(t).join("")
}
var Gl = 1,
    Ro = 1,
    p1 = 0,
    ut = 0,
    Pe = 0,
    Fo = "";
function Kl(e, t, n, r, o, i, a) {
    return {
        value: e,
        root: t,
        parent: n,
        type: r,
        props: o,
        children: i,
        line: Gl,
        column: Ro,
        length: a,
        return: ""
    }
}
function qo(e, t) {
    return l_(Kl("", null, null, "", null, null, 0), e, {
        length: -e.length
    }, t)
}
function f_() {
    return Pe
}
function p_() {
    return Pe = ut > 0 ? rt(Fo, --ut) : 0, Ro--, Pe === 10 && (Ro = 1, Gl--), Pe
}
function yt() {
    return Pe = ut < p1 ? rt(Fo, ut++) : 0, Ro++, Pe === 10 && (Ro = 1, Gl++), Pe
}
function un() {
    return rt(Fo, ut)
}
function ks() {
    return ut
}
function ha(e, t) {
    return Qi(Fo, e, t)
}
function Xi(e) {
    switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
        return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
        return 4;
    case 58:
        return 3;
    case 34:
    case 39:
    case 40:
    case 91:
        return 2;
    case 41:
    case 93:
        return 1
    }
    return 0
}
function h1(e) {
    return Gl = Ro = 1, p1 = nn(Fo = e), ut = 0, []
}
function m1(e) {
    return Fo = "", e
}
function Cs(e) {
    return f1(ha(ut - 1, Pd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function h_(e) {
    for (; (Pe = un()) && Pe < 33;)
        yt();
    return Xi(e) > 2 || Xi(Pe) > 3 ? "" : " "
}
function m_(e, t) {
    for (; --t && yt() && !(Pe < 48 || Pe > 102 || Pe > 57 && Pe < 65 || Pe > 70 && Pe < 97);)
        ;
    return ha(e, ks() + (t < 6 && un() == 32 && yt() == 32))
}
function Pd(e) {
    for (; yt();)
        switch (Pe) {
        case e:
            return ut;
        case 34:
        case 39:
            e !== 34 && e !== 39 && Pd(Pe);
            break;
        case 40:
            e === 41 && Pd(e);
            break;
        case 92:
            yt();
            break
        }
    return ut
}
function g_(e, t) {
    for (; yt() && e + Pe !== 47 + 10;)
        if (e + Pe === 42 + 42 && un() === 47)
            break;
    return "/*" + ha(t, ut - 1) + "*" + Ul(e === 47 ? e : yt())
}
function v_(e) {
    for (; !Xi(un());)
        yt();
    return ha(e, ut)
}
function y_(e) {
    return m1(_s("", null, null, null, [""], e = h1(e), 0, [0], e))
}
function _s(e, t, n, r, o, i, a, s, l) {
    for (var u = 0, c = 0, d = a, f = 0, h = 0, y = 0, S = 1, C = 1, g = 1, p = 0, m = "", b = o, _ = i, R = r, E = m; C;)
        switch (y = p, p = yt()) {
        case 40:
            if (y != 108 && E.charCodeAt(d - 1) == 58) {
                Ed(E += te(Cs(p), "&", "&\f"), "&\f") != -1 && (g = -1);
                break
            }
        case 34:
        case 39:
        case 91:
            E += Cs(p);
            break;
        case 9:
        case 10:
        case 13:
        case 32:
            E += h_(y);
            break;
        case 92:
            E += m_(ks() - 1, 7);
            continue;
        case 47:
            switch (un()) {
            case 42:
            case 47:
                Za(S_(g_(yt(), ks()), t, n), l);
                break;
            default:
                E += "/"
            }
            break;
        case 123 * S:
            s[u++] = nn(E) * g;
        case 125 * S:
        case 59:
        case 0:
            switch (p) {
            case 0:
            case 125:
                C = 0;
            case 59 + c:
                h > 0 && nn(E) - d && Za(h > 32 ? Dm(E + ";", r, n, d - 1) : Dm(te(E, " ", "") + ";", r, n, d - 2), l);
                break;
            case 59:
                E += ";";
            default:
                if (Za(R = Bm(E, t, n, u, c, o, s, m, b = [], _ = [], d), i), p === 123)
                    if (c === 0)
                        _s(E, t, R, R, b, i, d, s, _);
                    else
                        switch (f) {
                        case 100:
                        case 109:
                        case 115:
                            _s(e, R, R, r && Za(Bm(e, R, R, 0, 0, o, s, m, o, b = [], d), _), o, _, d, s, r ? b : _);
                            break;
                        default:
                            _s(E, R, R, R, [""], _, 0, s, _)
                        }
            }
            u = c = h = 0,
            S = g = 1,
            m = E = "",
            d = a;
            break;
        case 58:
            d = 1 + nn(E),
            h = y;
        default:
            if (S < 1) {
                if (p == 123)
                    --S;
                else if (p == 125 && S++ == 0 && p_() == 125)
                    continue
            }
            switch (E += Ul(p), p * S) {
            case 38:
                g = c > 0 ? 1 : (E += "\f", -1);
                break;
            case 44:
                s[u++] = (nn(E) - 1) * g,
                g = 1;
                break;
            case 64:
                un() === 45 && (E += Cs(yt())),
                f = un(),
                c = d = nn(m = E += v_(ks())),
                p++;
                break;
            case 45:
                y === 45 && nn(E) == 2 && (S = 0)
            }
        }
    return i
}
function Bm(e, t, n, r, o, i, a, s, l, u, c) {
    for (var d = o - 1, f = o === 0 ? i : [""], h = ap(f), y = 0, S = 0, C = 0; y < r; ++y)
        for (var g = 0, p = Qi(e, d + 1, d = s_(S = a[y])), m = e; g < h; ++g)
            (m = f1(S > 0 ? f[g] + " " + p : te(p, /&\f/g, f[g]))) && (l[C++] = m);
    return Kl(e, t, n, o === 0 ? op : s, l, u, c)
}
function S_(e, t, n) {
    return Kl(e, t, n, c1, Ul(f_()), Qi(e, 2, -2), 0)
}
function Dm(e, t, n, r) {
    return Kl(e, t, n, ip, Qi(e, 0, r), Qi(e, r + 1, -1), r)
}
function g1(e, t) {
    switch (u_(e, t)) {
    case 5103:
        return J + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
        return J + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
        return J + e + al + e + Ge + e + e;
    case 6828:
    case 4268:
        return J + e + Ge + e + e;
    case 6165:
        return J + e + Ge + "flex-" + e + e;
    case 5187:
        return J + e + te(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Ge + "flex-$1$2") + e;
    case 5443:
        return J + e + Ge + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
        return J + e + Ge + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
        return J + e + Ge + te(e, "shrink", "negative") + e;
    case 5292:
        return J + e + Ge + te(e, "basis", "preferred-size") + e;
    case 6060:
        return J + "box-" + te(e, "-grow", "") + J + e + Ge + te(e, "grow", "positive") + e;
    case 4554:
        return J + te(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    case 6187:
        return te(te(te(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e;
    case 5495:
    case 3959:
        return te(e, /(image-set\([^]*)/, J + "$1$`$1");
    case 4968:
        return te(te(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Ge + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
        return te(e, /(.+)-inline(.+)/, J + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
        if (nn(e) - 1 - t > 6)
            switch (rt(e, t + 1)) {
            case 109:
                if (rt(e, t + 4) !== 45)
                    break;
            case 102:
                return te(e, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + al + (rt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
            case 115:
                return ~Ed(e, "stretch") ? g1(te(e, "stretch", "fill-available"), t) + e : e
            }
        break;
    case 4949:
        if (rt(e, t + 1) !== 115)
            break;
    case 6444:
        switch (rt(e, nn(e) - 3 - (~Ed(e, "!important") && 10))) {
        case 107:
            return te(e, ":", ":" + J) + e;
        case 101:
            return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + J + (rt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + Ge + "$2box$3") + e
        }
        break;
    case 5936:
        switch (rt(e, t + 11)) {
        case 114:
            return J + e + Ge + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
            return J + e + Ge + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
            return J + e + Ge + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e
        }
        return J + e + Ge + e + e
    }
    return e
}
function mo(e, t) {
    for (var n = "", r = ap(e), o = 0; o < r; o++)
        n += t(e[o], o, e, t) || "";
    return n
}
function b_(e, t, n, r) {
    switch (e.type) {
    case a_:
    case ip:
        return e.return = e.return || e.value;
    case c1:
        return "";
    case d1:
        return e.return = e.value + "{" + mo(e.children, r) + "}";
    case op:
        e.value = e.props.join(",")
    }
    return nn(n = mo(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
}
function x_(e) {
    var t = ap(e);
    return function(n, r, o, i) {
        for (var a = "", s = 0; s < t; s++)
            a += e[s](n, r, o, i) || "";
        return a
    }
}
function w_(e) {
    return function(t) {
        t.root || (t = t.return) && e(t)
    }
}
function k_(e, t, n, r) {
    if (e.length > -1 && !e.return)
        switch (e.type) {
        case ip:
            e.return = g1(e.value, e.length);
            break;
        case d1:
            return mo([qo(e, {
                value: te(e.value, "@", "@" + J)
            })], r);
        case op:
            if (e.length)
                return d_(e.props, function(o) {
                    switch (c_(o, /(::plac\w+|:read-\w+)/)) {
                    case ":read-only":
                    case ":read-write":
                        return mo([qo(e, {
                            props: [te(o, /:(read-\w+)/, ":" + al + "$1")]
                        })], r);
                    case "::placeholder":
                        return mo([qo(e, {
                            props: [te(o, /:(plac\w+)/, ":" + J + "input-$1")]
                        }), qo(e, {
                            props: [te(o, /:(plac\w+)/, ":" + al + "$1")]
                        }), qo(e, {
                            props: [te(o, /:(plac\w+)/, Ge + "input-$1")]
                        })], r)
                    }
                    return ""
                })
        }
}
var Vm = function(t) {
    var n = new WeakMap;
    return function(r) {
        if (n.has(r))
            return n.get(r);
        var o = t(r);
        return n.set(r, o), o
    }
};
function v1(e) {
    var t = Object.create(null);
    return function(n) {
        return t[n] === void 0 && (t[n] = e(n)), t[n]
    }
}
var C_ = function(t, n, r) {
        for (var o = 0, i = 0; o = i, i = un(), o === 38 && i === 12 && (n[r] = 1), !Xi(i);)
            yt();
        return ha(t, ut)
    },
    __ = function(t, n) {
        var r = -1,
            o = 44;
        do switch (Xi(o)) {
        case 0:
            o === 38 && un() === 12 && (n[r] = 1),
            t[r] += C_(ut - 1, n, r);
            break;
        case 2:
            t[r] += Cs(o);
            break;
        case 4:
            if (o === 44) {
                t[++r] = un() === 58 ? "&\f" : "",
                n[r] = t[r].length;
                break
            }
        default:
            t[r] += Ul(o)
        }
        while (o = yt());
        return t
    },
    T_ = function(t, n) {
        return m1(__(h1(t), n))
    },
    jm = new WeakMap,
    E_ = function(t) {
        if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
            for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule";)
                if (r = r.parent, !r)
                    return;
            if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !jm.get(r)) && !o) {
                jm.set(t, !0);
                for (var i = [], a = T_(n, i), s = r.props, l = 0, u = 0; l < a.length; l++)
                    for (var c = 0; c < s.length; c++, u++)
                        t.props[u] = i[l] ? a[l].replace(/&\f/g, s[c]) : s[c] + " " + a[l]
            }
        }
    },
    P_ = function(t) {
        if (t.type === "decl") {
            var n = t.value;
            n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (t.return = "", t.value = "")
        }
    },
    R_ = [k_],
    A_ = function(t) {
        var n = t.key;
        if (n === "css") {
            var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
            Array.prototype.forEach.call(r, function(S) {
                var C = S.getAttribute("data-emotion");
                C.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""))
            })
        }
        var o = t.stylisPlugins || R_,
            i = {},
            a,
            s = [];
        a = t.container || document.head,
        Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(S) {
            for (var C = S.getAttribute("data-emotion").split(" "), g = 1; g < C.length; g++)
                i[C[g]] = !0;
            s.push(S)
        });
        var l,
            u = [E_, P_];
        {
            var c,
                d = [b_, w_(function(S) {
                    c.insert(S)
                })],
                f = x_(u.concat(o, d)),
                h = function(C) {
                    return mo(y_(C), f)
                };
            l = function(C, g, p, m) {
                c = p,
                h(C ? C + "{" + g.styles + "}" : g.styles),
                m && (y.inserted[g.name] = !0)
            }
        }
        var y = {
            key: n,
            sheet: new i_({
                key: n,
                container: a,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint
            }),
            nonce: t.nonce,
            inserted: i,
            registered: {},
            insert: l
        };
        return y.sheet.hydrate(s), y
    };
function sl() {
    return sl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, sl.apply(this, arguments)
}
var y1 = {
        exports: {}
    },
    oe = {}; /** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */






var Ne = typeof Symbol == "function" && Symbol.for,
    sp = Ne ? Symbol.for("react.element") : 60103,
    lp = Ne ? Symbol.for("react.portal") : 60106,
    Yl = Ne ? Symbol.for("react.fragment") : 60107,
    Ql = Ne ? Symbol.for("react.strict_mode") : 60108,
    Xl = Ne ? Symbol.for("react.profiler") : 60114,
    ql = Ne ? Symbol.for("react.provider") : 60109,
    Zl = Ne ? Symbol.for("react.context") : 60110,
    up = Ne ? Symbol.for("react.async_mode") : 60111,
    Jl = Ne ? Symbol.for("react.concurrent_mode") : 60111,
    eu = Ne ? Symbol.for("react.forward_ref") : 60112,
    tu = Ne ? Symbol.for("react.suspense") : 60113,
    M_ = Ne ? Symbol.for("react.suspense_list") : 60120,
    nu = Ne ? Symbol.for("react.memo") : 60115,
    ru = Ne ? Symbol.for("react.lazy") : 60116,
    z_ = Ne ? Symbol.for("react.block") : 60121,
    I_ = Ne ? Symbol.for("react.fundamental") : 60117,
    L_ = Ne ? Symbol.for("react.responder") : 60118,
    F_ = Ne ? Symbol.for("react.scope") : 60119;
function _t(e) {
    if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
        case sp:
            switch (e = e.type, e) {
            case up:
            case Jl:
            case Yl:
            case Xl:
            case Ql:
            case tu:
                return e;
            default:
                switch (e = e && e.$$typeof, e) {
                case Zl:
                case eu:
                case ru:
                case nu:
                case ql:
                    return e;
                default:
                    return t
                }
            }
        case lp:
            return t
        }
    }
}
function S1(e) {
    return _t(e) === Jl
}
oe.AsyncMode = up;
oe.ConcurrentMode = Jl;
oe.ContextConsumer = Zl;
oe.ContextProvider = ql;
oe.Element = sp;
oe.ForwardRef = eu;
oe.Fragment = Yl;
oe.Lazy = ru;
oe.Memo = nu;
oe.Portal = lp;
oe.Profiler = Xl;
oe.StrictMode = Ql;
oe.Suspense = tu;
oe.isAsyncMode = function(e) {
    return S1(e) || _t(e) === up
};
oe.isConcurrentMode = S1;
oe.isContextConsumer = function(e) {
    return _t(e) === Zl
};
oe.isContextProvider = function(e) {
    return _t(e) === ql
};
oe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === sp
};
oe.isForwardRef = function(e) {
    return _t(e) === eu
};
oe.isFragment = function(e) {
    return _t(e) === Yl
};
oe.isLazy = function(e) {
    return _t(e) === ru
};
oe.isMemo = function(e) {
    return _t(e) === nu
};
oe.isPortal = function(e) {
    return _t(e) === lp
};
oe.isProfiler = function(e) {
    return _t(e) === Xl
};
oe.isStrictMode = function(e) {
    return _t(e) === Ql
};
oe.isSuspense = function(e) {
    return _t(e) === tu
};
oe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Yl || e === Jl || e === Xl || e === Ql || e === tu || e === M_ || typeof e == "object" && e !== null && (e.$$typeof === ru || e.$$typeof === nu || e.$$typeof === ql || e.$$typeof === Zl || e.$$typeof === eu || e.$$typeof === I_ || e.$$typeof === L_ || e.$$typeof === F_ || e.$$typeof === z_)
};
oe.typeOf = _t;
(function(e) {
    e.exports = oe
})(y1);
var b1 = y1.exports,
    N_ = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    },
    $_ = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0
    },
    x1 = {};
x1[b1.ForwardRef] = N_;
x1[b1.Memo] = $_;
var O_ = !0;
function B_(e, t, n) {
    var r = "";
    return n.split(" ").forEach(function(o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : r += o + " "
    }), r
}
var w1 = function(t, n, r) {
        var o = t.key + "-" + n.name;
        (r === !1 || O_ === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles)
    },
    k1 = function(t, n, r) {
        w1(t, n, r);
        var o = t.key + "-" + n.name;
        if (t.inserted[n.name] === void 0) {
            var i = n;
            do t.insert(n === i ? "." + o : "", i, t.sheet, !0),
            i = i.next;
            while (i !== void 0)
        }
    };
function D_(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
        n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24,
        n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16),
        n ^= n >>> 24,
        t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
    switch (o) {
    case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
        t ^= e.charCodeAt(r) & 255,
        t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16)
    }
    return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36)
}
var V_ = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    },
    j_ = /[A-Z]|^ms/g,
    W_ = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    C1 = function(t) {
        return t.charCodeAt(1) === 45
    },
    Wm = function(t) {
        return t != null && typeof t != "boolean"
    },
    ac = v1(function(e) {
        return C1(e) ? e : e.replace(j_, "-$&").toLowerCase()
    }),
    Hm = function(t, n) {
        switch (t) {
        case "animation":
        case "animationName":
            if (typeof n == "string")
                return n.replace(W_, function(r, o, i) {
                    return rn = {
                        name: o,
                        styles: i,
                        next: rn
                    }, o
                })
        }
        return V_[t] !== 1 && !C1(t) && typeof n == "number" && n !== 0 ? n + "px" : n
    };
function qi(e, t, n) {
    if (n == null)
        return "";
    if (n.__emotion_styles !== void 0)
        return n;
    switch (typeof n) {
    case "boolean":
        return "";
    case "object":
        {
            if (n.anim === 1)
                return rn = {
                    name: n.name,
                    styles: n.styles,
                    next: rn
                }, n.name;
            if (n.styles !== void 0) {
                var r = n.next;
                if (r !== void 0)
                    for (; r !== void 0;)
                        rn = {
                            name: r.name,
                            styles: r.styles,
                            next: rn
                        },
                        r = r.next;
                var o = n.styles + ";";
                return o
            }
            return H_(e, t, n)
        }case "function":
        {
            if (e !== void 0) {
                var i = rn,
                    a = n(e);
                return rn = i, qi(e, t, a)
            }
            break
        }
    }
    if (t == null)
        return n;
    var s = t[n];
    return s !== void 0 ? s : n
}
function H_(e, t, n) {
    var r = "";
    if (Array.isArray(n))
        for (var o = 0; o < n.length; o++)
            r += qi(e, t, n[o]) + ";";
    else
        for (var i in n) {
            var a = n[i];
            if (typeof a != "object")
                t != null && t[a] !== void 0 ? r += i + "{" + t[a] + "}" : Wm(a) && (r += ac(i) + ":" + Hm(i, a) + ";");
            else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
                for (var s = 0; s < a.length; s++)
                    Wm(a[s]) && (r += ac(i) + ":" + Hm(i, a[s]) + ";");
            else {
                var l = qi(e, t, a);
                switch (i) {
                case "animation":
                case "animationName":
                    {
                        r += ac(i) + ":" + l + ";";
                        break
                    }default:
                    r += i + "{" + l + "}"
                }
            }
        }
    return r
}
var Um = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    rn,
    cp = function(t, n, r) {
        if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
            return t[0];
        var o = !0,
            i = "";
        rn = void 0;
        var a = t[0];
        a == null || a.raw === void 0 ? (o = !1, i += qi(r, n, a)) : i += a[0];
        for (var s = 1; s < t.length; s++)
            i += qi(r, n, t[s]),
            o && (i += a[s]);
        Um.lastIndex = 0;
        for (var l = "", u; (u = Um.exec(i)) !== null;)
            l += "-" + u[1];
        var c = D_(i) + l;
        return {
            name: c,
            styles: i,
            next: rn
        }
    },
    U_ = function(t) {
        return t()
    },
    _1 = wh["useInsertionEffect"] ? wh["useInsertionEffect"] : !1,
    G_ = _1 || U_,
    Gm = _1 || k.exports.useLayoutEffect,
    T1 = k.exports.createContext(typeof HTMLElement < "u" ? A_({
        key: "css"
    }) : null);
T1.Provider;
var E1 = function(t) {
        return k.exports.forwardRef(function(n, r) {
            var o = k.exports.useContext(T1);
            return t(n, o, r)
        })
    },
    Zi = k.exports.createContext({}),
    K_ = function(t, n) {
        if (typeof n == "function") {
            var r = n(t);
            return r
        }
        return sl({}, t, n)
    },
    Y_ = Vm(function(e) {
        return Vm(function(t) {
            return K_(e, t)
        })
    }),
    Q_ = function(t) {
        var n = k.exports.useContext(Zi);
        return t.theme !== n && (n = Y_(n)(t.theme)), k.exports.createElement(Zi.Provider, {
            value: n
        }, t.children)
    },
    ou = E1(function(e, t) {
        var n = e.styles,
            r = cp([n], void 0, k.exports.useContext(Zi)),
            o = k.exports.useRef();
        return Gm(function() {
            var i = t.key + "-global",
                a = new t.sheet.constructor({
                    key: i,
                    nonce: t.sheet.nonce,
                    container: t.sheet.container,
                    speedy: t.sheet.isSpeedy
                }),
                s = !1,
                l = document.querySelector('style[data-emotion="' + i + " " + r.name + '"]');
            return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
                a.flush()
            }
        }, [t]), Gm(function() {
            var i = o.current,
                a = i[0],
                s = i[1];
            if (s) {
                i[1] = !1;
                return
            }
            if (r.next !== void 0 && k1(t, r.next, !0), a.tags.length) {
                var l = a.tags[a.tags.length - 1].nextElementSibling;
                a.before = l,
                a.flush()
            }
            t.insert("", r, a, !1)
        }, [t, r.name]), null
    });
function X_() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return cp(t)
}
var q_ = function() {
    var t = X_.apply(void 0, arguments),
        n = "animation-" + t.name;
    return {
        name: n,
        styles: "@keyframes " + n + "{" + t.styles + "}",
        anim: 1,
        toString: function() {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_"
        }
    }
};
function Z_(e) {
    return typeof e == "function"
}
function J_(e, t) {
    const n = {};
    return Object.keys(e).forEach(r => {
        t.includes(r) || (n[r] = e[r])
    }), n
}
function e5(e, t, n, r) {
    const o = typeof t == "string" ? t.split(".") : [t];
    for (r = 0; r < o.length && e; r += 1)
        e = e[o[r]];
    return e === void 0 ? n : e
}
var t5 = e => {
        const t = new WeakMap;
        return (r, o, i, a) => {
            if (typeof r > "u")
                return e(r, o, i);
            t.has(r) || t.set(r, new Map);
            const s = t.get(r);
            if (s.has(o))
                return s.get(o);
            const l = e(r, o, i, a);
            return s.set(o, l), l
        }
    },
    P1 = t5(e5);
function R1(e, t) {
    const n = {};
    return Object.keys(e).forEach(r => {
        const o = e[r];
        t(o, r, e) && (n[r] = o)
    }), n
}
var A1 = e => R1(e, t => t != null);
function M1(e, ...t) {
    return Z_(e) ? e(...t) : e
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function n5(e={}) {
    const {strict: t=!0, errorMessage: n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider", name: r} = e,
        o = k.exports.createContext(void 0);
    o.displayName = r;
    function i() {
        var a;
        const s = k.exports.useContext(o);
        if (!s && t) {
            const l = new Error(n);
            throw l.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, l, i), l
        }
        return s
    }
    return [o.Provider, i, o]
}
var r5 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    o5 = v1(function(e) {
        return r5.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91
    }),
    i5 = o5,
    a5 = function(t) {
        return t !== "theme"
    },
    Km = function(t) {
        return typeof t == "string" && t.charCodeAt(0) > 96 ? i5 : a5
    },
    Ym = function(t, n, r) {
        var o;
        if (n) {
            var i = n.shouldForwardProp;
            o = t.__emotion_forwardProp && i ? function(a) {
                return t.__emotion_forwardProp(a) && i(a)
            } : i
        }
        return typeof o != "function" && r && (o = t.__emotion_forwardProp), o
    },
    s5 = function(t) {
        var n = t.cache,
            r = t.serialized,
            o = t.isStringTag;
        return w1(n, r, o), G_(function() {
            return k1(n, r, o)
        }), null
    },
    l5 = function e(t, n) {
        var r = t.__emotion_real === t,
            o = r && t.__emotion_base || t,
            i,
            a;
        n !== void 0 && (i = n.label, a = n.target);
        var s = Ym(t, n, r),
            l = s || Km(o),
            u = !l("as");
        return function() {
            var c = arguments,
                d = r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
            if (i !== void 0 && d.push("label:" + i + ";"), c[0] == null || c[0].raw === void 0)
                d.push.apply(d, c);
            else {
                d.push(c[0][0]);
                for (var f = c.length, h = 1; h < f; h++)
                    d.push(c[h], c[0][h])
            }
            var y = E1(function(S, C, g) {
                var p = u && S.as || o,
                    m = "",
                    b = [],
                    _ = S;
                if (S.theme == null) {
                    _ = {};
                    for (var R in S)
                        _[R] = S[R];
                    _.theme = k.exports.useContext(Zi)
                }
                typeof S.className == "string" ? m = B_(C.registered, b, S.className) : S.className != null && (m = S.className + " ");
                var E = cp(d.concat(b), C.registered, _);
                m += C.key + "-" + E.name,
                a !== void 0 && (m += " " + a);
                var I = u && s === void 0 ? Km(p) : l,
                    j = {};
                for (var B in S)
                    u && B === "as" || I(B) && (j[B] = S[B]);
                return j.className = m, j.ref = g, k.exports.createElement(k.exports.Fragment, null, k.exports.createElement(s5, {
                    cache: C,
                    serialized: E,
                    isStringTag: typeof p == "string"
                }), k.exports.createElement(p, j))
            });
            return y.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", y.defaultProps = t.defaultProps, y.__emotion_real = y, y.__emotion_base = o, y.__emotion_styles = d, y.__emotion_forwardProp = s, Object.defineProperty(y, "toString", {
                value: function() {
                    return "." + a
                }
            }), y.withComponent = function(S, C) {
                return e(S, sl({}, n, C, {
                    shouldForwardProp: Ym(y, C, !0)
                })).apply(void 0, d)
            }, y
        }
    },
    u5 = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"],
    Rd = l5.bind();
u5.forEach(function(e) {
    Rd[e] = Rd(e)
});
function re(e, t={}) {
    let n = !1;
    function r() {
        if (!n) {
            n = !0;
            return
        }
        throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")
    }
    function o(...c) {
        r();
        for (const d of c)
            t[d] = l(d);
        return re(e, t)
    }
    function i(...c) {
        for (const d of c)
            d in t || (t[d] = l(d));
        return re(e, t)
    }
    function a() {
        return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.selector]))
    }
    function s() {
        return Object.fromEntries(Object.entries(t).map(([d, f]) => [d, f.className]))
    }
    function l(c) {
        const h = `chakra-${(["container", "root"].includes(c != null ? c : "") ? [e] : [e, c]).filter(Boolean).join("__")}`;
        return {
            className: h,
            selector: `.${h}`,
            toString: () => c
        }
    }
    return {
        parts: o,
        toPart: l,
        extend: i,
        selectors: a,
        classnames: s,
        get keys() {
            return Object.keys(t)
        },
        __type: {}
    }
}
var c5 = re("accordion").parts("root", "container", "button", "panel").extend("icon"),
    d5 = re("alert").parts("title", "description", "container").extend("icon", "spinner"),
    f5 = re("avatar").parts("label", "badge", "container").extend("excessLabel", "group"),
    p5 = re("breadcrumb").parts("link", "item", "container").extend("separator");
re("button").parts();
var h5 = re("checkbox").parts("control", "icon", "container").extend("label");
re("progress").parts("track", "filledTrack").extend("label");
var m5 = re("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    g5 = re("editable").parts("preview", "input", "textarea"),
    v5 = re("form").parts("container", "requiredIndicator", "helperText"),
    y5 = re("formError").parts("text", "icon"),
    S5 = re("input").parts("addon", "field", "element"),
    b5 = re("list").parts("container", "item", "icon"),
    x5 = re("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"),
    w5 = re("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"),
    k5 = re("numberinput").parts("root", "field", "stepperGroup", "stepper");
re("pininput").parts("field");
var C5 = re("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"),
    _5 = re("progress").parts("label", "filledTrack", "track"),
    T5 = re("radio").parts("container", "control", "label"),
    E5 = re("select").parts("field", "icon"),
    P5 = re("slider").parts("container", "track", "thumb", "filledTrack", "mark"),
    R5 = re("stat").parts("container", "label", "helpText", "number", "icon"),
    A5 = re("switch").parts("container", "track", "thumb"),
    M5 = re("table").parts("table", "thead", "tbody", "tr", "th", "td", "tfoot", "caption"),
    z5 = re("tabs").parts("root", "tab", "tablist", "tabpanel", "tabpanels", "indicator"),
    I5 = re("tag").parts("container", "label", "closeButton");
function je(e, t) {
    L5(e) && (e = "100%");
    var n = F5(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}
function Ja(e) {
    return Math.min(1, Math.max(0, e))
}
function L5(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}
function F5(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}
function z1(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function es(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}
function Cr(e) {
    return e.length === 1 ? "0" + e : String(e)
}
function N5(e, t, n) {
    return {
        r: je(e, 255) * 255,
        g: je(t, 255) * 255,
        b: je(n, 255) * 255
    }
}
function Qm(e, t, n) {
    e = je(e, 255),
    t = je(t, 255),
    n = je(n, 255);
    var r = Math.max(e, t, n),
        o = Math.min(e, t, n),
        i = 0,
        a = 0,
        s = (r + o) / 2;
    if (r === o)
        a = 0,
        i = 0;
    else {
        var l = r - o;
        switch (a = s > .5 ? l / (2 - r - o) : l / (r + o), r) {
        case e:
            i = (t - n) / l + (t < n ? 6 : 0);
            break;
        case t:
            i = (n - e) / l + 2;
            break;
        case n:
            i = (e - t) / l + 4;
            break
        }
        i /= 6
    }
    return {
        h: i,
        s: a,
        l: s
    }
}
function sc(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function $5(e, t, n) {
    var r,
        o,
        i;
    if (e = je(e, 360), t = je(t, 100), n = je(n, 100), t === 0)
        o = n,
        i = n,
        r = n;
    else {
        var a = n < .5 ? n * (1 + t) : n + t - n * t,
            s = 2 * n - a;
        r = sc(s, a, e + 1 / 3),
        o = sc(s, a, e),
        i = sc(s, a, e - 1 / 3)
    }
    return {
        r: r * 255,
        g: o * 255,
        b: i * 255
    }
}
function Xm(e, t, n) {
    e = je(e, 255),
    t = je(t, 255),
    n = je(n, 255);
    var r = Math.max(e, t, n),
        o = Math.min(e, t, n),
        i = 0,
        a = r,
        s = r - o,
        l = r === 0 ? 0 : s / r;
    if (r === o)
        i = 0;
    else {
        switch (r) {
        case e:
            i = (t - n) / s + (t < n ? 6 : 0);
            break;
        case t:
            i = (n - e) / s + 2;
            break;
        case n:
            i = (e - t) / s + 4;
            break
        }
        i /= 6
    }
    return {
        h: i,
        s: l,
        v: a
    }
}
function O5(e, t, n) {
    e = je(e, 360) * 6,
    t = je(t, 100),
    n = je(n, 100);
    var r = Math.floor(e),
        o = e - r,
        i = n * (1 - t),
        a = n * (1 - o * t),
        s = n * (1 - (1 - o) * t),
        l = r % 6,
        u = [n, a, i, i, s, n][l],
        c = [s, n, n, a, i, i][l],
        d = [i, i, s, n, n, a][l];
    return {
        r: u * 255,
        g: c * 255,
        b: d * 255
    }
}
function qm(e, t, n, r) {
    var o = [Cr(Math.round(e).toString(16)), Cr(Math.round(t).toString(16)), Cr(Math.round(n).toString(16))];
    return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
}
function B5(e, t, n, r, o) {
    var i = [Cr(Math.round(e).toString(16)), Cr(Math.round(t).toString(16)), Cr(Math.round(n).toString(16)), Cr(D5(r))];
    return o && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
}
function D5(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}
function Zm(e) {
    return ht(e) / 255
}
function ht(e) {
    return parseInt(e, 16)
}
function V5(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var Ad = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};
function j5(e) {
    var t = {
            r: 0,
            g: 0,
            b: 0
        },
        n = 1,
        r = null,
        o = null,
        i = null,
        a = !1,
        s = !1;
    return typeof e == "string" && (e = U5(e)), typeof e == "object" && (vn(e.r) && vn(e.g) && vn(e.b) ? (t = N5(e.r, e.g, e.b), a = !0, s = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : vn(e.h) && vn(e.s) && vn(e.v) ? (r = es(e.s), o = es(e.v), t = O5(e.h, r, o), a = !0, s = "hsv") : vn(e.h) && vn(e.s) && vn(e.l) && (r = es(e.s), i = es(e.l), t = $5(e.h, r, i), a = !0, s = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = z1(n), {
        ok: a,
        format: e.format || s,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: n
    }
}
var W5 = "[-\\+]?\\d+%?",
    H5 = "[-\\+]?\\d*\\.\\d+%?",
    Gn = "(?:".concat(H5, ")|(?:").concat(W5, ")"),
    lc = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"),
    uc = "[\\s|\\(]+(".concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")[,|\\s]+(").concat(Gn, ")\\s*\\)?"),
    Vt = {
        CSS_UNIT: new RegExp(Gn),
        rgb: new RegExp("rgb" + lc),
        rgba: new RegExp("rgba" + uc),
        hsl: new RegExp("hsl" + lc),
        hsla: new RegExp("hsla" + uc),
        hsv: new RegExp("hsv" + lc),
        hsva: new RegExp("hsva" + uc),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
function U5(e) {
    if (e = e.trim().toLowerCase(), e.length === 0)
        return !1;
    var t = !1;
    if (Ad[e])
        e = Ad[e],
        t = !0;
    else if (e === "transparent")
        return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
    var n = Vt.rgb.exec(e);
    return n ? {
        r: n[1],
        g: n[2],
        b: n[3]
    } : (n = Vt.rgba.exec(e), n ? {
        r: n[1],
        g: n[2],
        b: n[3],
        a: n[4]
    } : (n = Vt.hsl.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3]
    } : (n = Vt.hsla.exec(e), n ? {
        h: n[1],
        s: n[2],
        l: n[3],
        a: n[4]
    } : (n = Vt.hsv.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3]
    } : (n = Vt.hsva.exec(e), n ? {
        h: n[1],
        s: n[2],
        v: n[3],
        a: n[4]
    } : (n = Vt.hex8.exec(e), n ? {
        r: ht(n[1]),
        g: ht(n[2]),
        b: ht(n[3]),
        a: Zm(n[4]),
        format: t ? "name" : "hex8"
    } : (n = Vt.hex6.exec(e), n ? {
        r: ht(n[1]),
        g: ht(n[2]),
        b: ht(n[3]),
        format: t ? "name" : "hex"
    } : (n = Vt.hex4.exec(e), n ? {
        r: ht(n[1] + n[1]),
        g: ht(n[2] + n[2]),
        b: ht(n[3] + n[3]),
        a: Zm(n[4] + n[4]),
        format: t ? "name" : "hex8"
    } : (n = Vt.hex3.exec(e), n ? {
        r: ht(n[1] + n[1]),
        g: ht(n[2] + n[2]),
        b: ht(n[3] + n[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}
function vn(e) {
    return Boolean(Vt.CSS_UNIT.exec(String(e)))
}
var ma = function() {
    function e(t, n) {
        t === void 0 && (t = ""),
        n === void 0 && (n = {});
        var r;
        if (t instanceof e)
            return t;
        typeof t == "number" && (t = V5(t)),
        this.originalInput = t;
        var o = j5(t);
        this.originalInput = t,
        this.r = o.r,
        this.g = o.g,
        this.b = o.b,
        this.a = o.a,
        this.roundA = Math.round(100 * this.a) / 100,
        this.format = (r = n.format) !== null && r !== void 0 ? r : o.format,
        this.gradientType = n.gradientType,
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        this.isValid = o.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }, e.prototype.isLight = function() {
        return !this.isDark()
    }, e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }, e.prototype.getLuminance = function() {
        var t = this.toRgb(),
            n,
            r,
            o,
            i = t.r / 255,
            a = t.g / 255,
            s = t.b / 255;
        return i <= .03928 ? n = i / 12.92 : n = Math.pow((i + .055) / 1.055, 2.4), a <= .03928 ? r = a / 12.92 : r = Math.pow((a + .055) / 1.055, 2.4), s <= .03928 ? o = s / 12.92 : o = Math.pow((s + .055) / 1.055, 2.4), .2126 * n + .7152 * r + .0722 * o
    }, e.prototype.getAlpha = function() {
        return this.a
    }, e.prototype.setAlpha = function(t) {
        return this.a = z1(t), this.roundA = Math.round(100 * this.a) / 100, this
    }, e.prototype.toHsv = function() {
        var t = Xm(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }, e.prototype.toHsvString = function() {
        var t = Xm(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function() {
        var t = Qm(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }, e.prototype.toHslString = function() {
        var t = Qm(this.r, this.g, this.b),
            n = Math.round(t.h * 360),
            r = Math.round(t.s * 100),
            o = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(o, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(o, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), qm(this.r, this.g, this.b, t)
    }, e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t)
    }, e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), B5(this.r, this.g, this.b, this.a, t)
    }, e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t)
    }, e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r),
            n = Math.round(this.g),
            r = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function() {
        var t = function(n) {
            return "".concat(Math.round(je(n, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }, e.prototype.toPercentageRgbString = function() {
        var t = function(n) {
            return Math.round(je(n, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }, e.prototype.toName = function() {
        if (this.a === 0)
            return "transparent";
        if (this.a < 1)
            return !1;
        for (var t = "#" + qm(this.r, this.g, this.b, !1), n = 0, r = Object.entries(Ad); n < r.length; n++) {
            var o = r[n],
                i = o[0],
                a = o[1];
            if (t === a)
                return i
        }
        return !1
    }, e.prototype.toString = function(t) {
        var n = Boolean(t);
        t = t != null ? t : this.format;
        var r = !1,
            o = this.a < 1 && this.a >= 0,
            i = !n && o && (t.startsWith("hex") || t === "name");
        return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString())
    }, e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, e.prototype.clone = function() {
        return new e(this.toString())
    }, e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l += t / 100, n.l = Ja(n.l), new e(n)
    }, e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var n = this.toRgb();
        return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n)
    }, e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.l -= t / 100, n.l = Ja(n.l), new e(n)
    }, e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix("white", t)
    }, e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix("black", t)
    }, e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s -= t / 100, n.s = Ja(n.s), new e(n)
    }, e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var n = this.toHsl();
        return n.s += t / 100, n.s = Ja(n.s), new e(n)
    }, e.prototype.greyscale = function() {
        return this.desaturate(100)
    }, e.prototype.spin = function(t) {
        var n = this.toHsl(),
            r = (n.h + t) % 360;
        return n.h = r < 0 ? 360 + r : r, new e(n)
    }, e.prototype.mix = function(t, n) {
        n === void 0 && (n = 50);
        var r = this.toRgb(),
            o = new e(t).toRgb(),
            i = n / 100,
            a = {
                r: (o.r - r.r) * i + r.r,
                g: (o.g - r.g) * i + r.g,
                b: (o.b - r.b) * i + r.b,
                a: (o.a - r.a) * i + r.a
            };
        return new e(a)
    }, e.prototype.analogous = function(t, n) {
        t === void 0 && (t = 6),
        n === void 0 && (n = 30);
        var r = this.toHsl(),
            o = 360 / n,
            i = [this];
        for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t;)
            r.h = (r.h + o) % 360,
            i.push(new e(r));
        return i
    }, e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t)
    }, e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var n = this.toHsv(), r = n.h, o = n.s, i = n.v, a = [], s = 1 / t; t--;)
            a.push(new e({
                h: r,
                s: o,
                v: i
            })),
            i = (i + s) % 1;
        return a
    }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
            n = t.h;
        return [this, new e({
            h: (n + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (n + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }, e.prototype.onBackground = function(t) {
        var n = this.toRgb(),
            r = new e(t).toRgb();
        return new e({
            r: r.r + (n.r - r.r) * n.a,
            g: r.g + (n.g - r.g) * n.a,
            b: r.b + (n.b - r.b) * n.a
        })
    }, e.prototype.triad = function() {
        return this.polyad(3)
    }, e.prototype.tetrad = function() {
        return this.polyad(4)
    }, e.prototype.polyad = function(t) {
        for (var n = this.toHsl(), r = n.h, o = [this], i = 360 / t, a = 1; a < t; a++)
            o.push(new e({
                h: (r + a * i) % 360,
                s: n.s,
                l: n.l
            }));
        return o
    }, e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }, e
}();
function I1(e) {
    if (e === void 0 && (e = {}), e.count !== void 0 && e.count !== null) {
        var t = e.count,
            n = [];
        for (e.count = void 0; t > n.length;)
            e.count = null,
            e.seed && (e.seed += 1),
            n.push(I1(e));
        return e.count = t, n
    }
    var r = G5(e.hue, e.seed),
        o = K5(r, e),
        i = Y5(r, o, e),
        a = {
            h: r,
            s: o,
            v: i
        };
    return e.alpha !== void 0 && (a.a = e.alpha), new ma(a)
}
function G5(e, t) {
    var n = X5(e),
        r = ll(n, t);
    return r < 0 && (r = 360 + r), r
}
function K5(e, t) {
    if (t.hue === "monochrome")
        return 0;
    if (t.luminosity === "random")
        return ll([0, 100], t.seed);
    var n = L1(e).saturationRange,
        r = n[0],
        o = n[1];
    switch (t.luminosity) {
    case "bright":
        r = 55;
        break;
    case "dark":
        r = o - 10;
        break;
    case "light":
        o = 55;
        break
    }
    return ll([r, o], t.seed)
}
function Y5(e, t, n) {
    var r = Q5(e, t),
        o = 100;
    switch (n.luminosity) {
    case "dark":
        o = r + 20;
        break;
    case "light":
        r = (o + r) / 2;
        break;
    case "random":
        r = 0,
        o = 100;
        break
    }
    return ll([r, o], n.seed)
}
function Q5(e, t) {
    for (var n = L1(e).lowerBounds, r = 0; r < n.length - 1; r++) {
        var o = n[r][0],
            i = n[r][1],
            a = n[r + 1][0],
            s = n[r + 1][1];
        if (t >= o && t <= a) {
            var l = (s - i) / (a - o),
                u = i - l * o;
            return l * t + u
        }
    }
    return 0
}
function X5(e) {
    var t = parseInt(e, 10);
    if (!Number.isNaN(t) && t < 360 && t > 0)
        return [t, t];
    if (typeof e == "string") {
        var n = N1.find(function(a) {
            return a.name === e
        });
        if (n) {
            var r = F1(n);
            if (r.hueRange)
                return r.hueRange
        }
        var o = new ma(e);
        if (o.isValid) {
            var i = o.toHsv().h;
            return [i, i]
        }
    }
    return [0, 360]
}
function L1(e) {
    e >= 334 && e <= 360 && (e -= 360);
    for (var t = 0, n = N1; t < n.length; t++) {
        var r = n[t],
            o = F1(r);
        if (o.hueRange && e >= o.hueRange[0] && e <= o.hueRange[1])
            return o
    }
    throw Error("Color not found")
}
function ll(e, t) {
    if (t === void 0)
        return Math.floor(e[0] + Math.random() * (e[1] + 1 - e[0]));
    var n = e[1] || 1,
        r = e[0] || 0;
    t = (t * 9301 + 49297) % 233280;
    var o = t / 233280;
    return Math.floor(r + o * (n - r))
}
function F1(e) {
    var t = e.lowerBounds[0][0],
        n = e.lowerBounds[e.lowerBounds.length - 1][0],
        r = e.lowerBounds[e.lowerBounds.length - 1][1],
        o = e.lowerBounds[0][1];
    return {
        name: e.name,
        hueRange: e.hueRange,
        lowerBounds: e.lowerBounds,
        saturationRange: [t, n],
        brightnessRange: [r, o]
    }
}
var N1 = [{
    name: "monochrome",
    hueRange: null,
    lowerBounds: [[0, 0], [100, 0]]
}, {
    name: "red",
    hueRange: [-26, 18],
    lowerBounds: [[20, 100], [30, 92], [40, 89], [50, 85], [60, 78], [70, 70], [80, 60], [90, 55], [100, 50]]
}, {
    name: "orange",
    hueRange: [19, 46],
    lowerBounds: [[20, 100], [30, 93], [40, 88], [50, 86], [60, 85], [70, 70], [100, 70]]
}, {
    name: "yellow",
    hueRange: [47, 62],
    lowerBounds: [[25, 100], [40, 94], [50, 89], [60, 86], [70, 84], [80, 82], [90, 80], [100, 75]]
}, {
    name: "green",
    hueRange: [63, 178],
    lowerBounds: [[30, 100], [40, 90], [50, 85], [60, 81], [70, 74], [80, 64], [90, 50], [100, 40]]
}, {
    name: "blue",
    hueRange: [179, 257],
    lowerBounds: [[20, 100], [30, 86], [40, 80], [50, 74], [60, 60], [70, 52], [80, 44], [90, 39], [100, 35]]
}, {
    name: "purple",
    hueRange: [258, 282],
    lowerBounds: [[20, 100], [30, 87], [40, 79], [50, 70], [60, 65], [70, 59], [80, 52], [90, 45], [100, 42]]
}, {
    name: "pink",
    hueRange: [283, 334],
    lowerBounds: [[20, 100], [30, 90], [40, 86], [60, 84], [80, 80], [90, 75], [100, 73]]
}];
function q5(e, t, n, r, o) {
    for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++)
        e = e ? e[t[r]] : o;
    return e === o ? n : e
}
var Z5 = e => Object.keys(e).length === 0,
    De = (e, t, n) => {
        const r = q5(e, `colors.${t}`, t),
            {isValid: o} = new ma(r);
        return o ? r : n
    },
    J5 = e => t => {
        const n = De(t, e);
        return new ma(n).isDark() ? "dark" : "light"
    },
    eT = e => t => J5(e)(t) === "dark",
    Ao = (e, t) => n => {
        const r = De(n, e);
        return new ma(r).setAlpha(t).toRgbString()
    };
function Jm(e="1rem", t="rgba(255, 255, 255, 0.15)") {
    return {
        backgroundImage: `linear-gradient(
    45deg,
    ${
        t} 25%,
    transparent 25%,
    transparent 50%,
    ${

        t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`


        ,
        backgroundSize: `${e} ${e}`
    }
}
function tT(e) {
    const t = I1().toHexString();
    return !e || Z5(e) ? t : e.string && e.colors ? rT(e.string, e.colors) : e.string && !e.colors ? nT(e.string) : e.colors && !e.string ? oT(e.colors) : t
}
function nT(e) {
    let t = 0;
    if (e.length === 0)
        return t.toString();
    for (let r = 0; r < e.length; r += 1)
        t = e.charCodeAt(r) + ((t << 5) - t),
        t = t & t;
    let n = "#";
    for (let r = 0; r < 3; r += 1)
        n += `00${(t >> r * 8 & 255).toString(16)}`.substr(-2);
    return n
}
function rT(e, t) {
    let n = 0;
    if (e.length === 0)
        return t[0];
    for (let r = 0; r < e.length; r += 1)
        n = e.charCodeAt(r) + ((n << 5) - n),
        n = n & n;
    return n = (n % t.length + t.length) % t.length, t[n]
}
function oT(e) {
    return e[Math.floor(Math.random() * e.length)]
}
function M(e, t) {
    return n => n.colorMode === "dark" ? t : e
}
function dp(e) {
    const {orientation: t, vertical: n, horizontal: r} = e;
    return t ? t === "vertical" ? n : r : {}
}
function iT(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !Array.isArray(e)
}
function $1(e) {
    return iT(e) && e.reference ? e.reference : String(e)
}
var iu = (e, ...t) => t.map($1).join(` ${e} `).replace(/calc/g, ""),
    e0 = (...e) => `calc(${iu("+", ...e)})`,
    t0 = (...e) => `calc(${iu("-", ...e)})`,
    Md = (...e) => `calc(${iu("*", ...e)})`,
    n0 = (...e) => `calc(${iu("/", ...e)})`,
    r0 = e => {
        const t = $1(e);
        return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Md(t, -1)
    },
    xn = Object.assign(e => ({
        add: (...t) => xn(e0(e, ...t)),
        subtract: (...t) => xn(t0(e, ...t)),
        multiply: (...t) => xn(Md(e, ...t)),
        divide: (...t) => xn(n0(e, ...t)),
        negate: () => xn(r0(e)),
        toString: () => e.toString()
    }), {
        add: e0,
        subtract: t0,
        multiply: Md,
        divide: n0,
        negate: r0
    });
function aT(e) {
    return !Number.isInteger(parseFloat(e.toString()))
}
function sT(e, t="-") {
    return e.replace(/\s+/g, t)
}
function O1(e) {
    const t = sT(e.toString());
    return t.includes("\\.") ? e : aT(e) ? t.replace(".", "\\.") : e
}
function lT(e, t="") {
    return [t, O1(e)].filter(Boolean).join("-")
}
function uT(e, t) {
    return `var(${O1(e)}${t ? `, ${t}` : ""})`
}
function cT(e, t="") {
    return `--${lT(e, t)}`
}
function ct(e, t) {
    const n = cT(e, t == null ? void 0 : t.prefix);
    return {
        variable: n,
        reference: uT(n, dT(t == null ? void 0 : t.fallback))
    }
}
function dT(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.reference
}
var {definePartsStyle: fT, defineMultiStyleConfig: pT} = ge(c5.keys),
    hT = {
        borderTopWidth: "1px",
        borderColor: "inherit",
        _last: {
            borderBottomWidth: "1px"
        }
    },
    mT = {
        transitionProperty: "common",
        transitionDuration: "normal",
        fontSize: "md",
        _focusVisible: {
            boxShadow: "outline"
        },
        _hover: {
            bg: "blackAlpha.50"
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        },
        px: "4",
        py: "2"
    },
    gT = {
        pt: "2",
        px: "4",
        pb: "5"
    },
    vT = {
        fontSize: "1.25em"
    },
    yT = fT({
        container: hT,
        button: mT,
        panel: gT,
        icon: vT
    }),
    ST = pT({
        baseStyle: yT
    }),
    {definePartsStyle: ga, defineMultiStyleConfig: bT} = ge(d5.keys),
    St = Ct("alert-fg"),
    An = Ct("alert-bg"),
    xT = ga({
        container: {
            bg: An.reference,
            px: "4",
            py: "3"
        },
        title: {
            fontWeight: "bold",
            lineHeight: "6",
            marginEnd: "2"
        },
        description: {
            lineHeight: "6"
        },
        icon: {
            color: St.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "6"
        },
        spinner: {
            color: St.reference,
            flexShrink: 0,
            marginEnd: "3",
            w: "5",
            h: "5"
        }
    });
function fp(e) {
    const {theme: t, colorScheme: n} = e,
        r = Ao(`${n}.200`, .16)(t);
    return {
        light: `colors.${n}.100`,
        dark: r
    }
}
var wT = ga(e => {
        const {colorScheme: t} = e,
            n = fp(e);
        return {
            container: {
                [St.variable]: `colors.${t}.500`,
                [An.variable]: n.light,
                _dark: {
                    [St.variable]: `colors.${t}.200`,
                    [An.variable]: n.dark
                }
            }
        }
    }),
    kT = ga(e => {
        const {colorScheme: t} = e,
            n = fp(e);
        return {
            container: {
                [St.variable]: `colors.${t}.500`,
                [An.variable]: n.light,
                _dark: {
                    [St.variable]: `colors.${t}.200`,
                    [An.variable]: n.dark
                },
                paddingStart: "3",
                borderStartWidth: "4px",
                borderStartColor: St.reference
            }
        }
    }),
    CT = ga(e => {
        const {colorScheme: t} = e,
            n = fp(e);
        return {
            container: {
                [St.variable]: `colors.${t}.500`,
                [An.variable]: n.light,
                _dark: {
                    [St.variable]: `colors.${t}.200`,
                    [An.variable]: n.dark
                },
                pt: "2",
                borderTopWidth: "4px",
                borderTopColor: St.reference
            }
        }
    }),
    _T = ga(e => {
        const {colorScheme: t} = e;
        return {
            container: {
                [St.variable]: "colors.white",
                [An.variable]: `colors.${t}.500`,
                _dark: {
                    [St.variable]: "colors.gray.900",
                    [An.variable]: `colors.${t}.200`
                },
                color: St.reference
            }
        }
    }),
    TT = {
        subtle: wT,
        "left-accent": kT,
        "top-accent": CT,
        solid: _T
    },
    ET = bT({
        baseStyle: xT,
        variants: TT,
        defaultProps: {
            variant: "subtle",
            colorScheme: "blue"
        }
    }),
    B1 = {
        px: "1px",
        .5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem"
    },
    PT = {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem",
        "2xs": "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "8xl": "90rem",
        prose: "60ch"
    },
    RT = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
    },
    AT = {
        ...B1,
        ...PT,
        container: RT
    },
    D1 = AT,
    MT = e => typeof e == "function";
function we(e, ...t) {
    return MT(e) ? e(...t) : e
}
var {definePartsStyle: V1, defineMultiStyleConfig: zT} = ge(f5.keys),
    go = Ct("avatar-border-color"),
    cc = Ct("avatar-bg"),
    IT = {
        borderRadius: "full",
        border: "0.2em solid",
        [go.variable]: "white",
        _dark: {
            [go.variable]: "colors.gray.800"
        },
        borderColor: go.reference
    },
    LT = {
        [cc.variable]: "colors.gray.200",
        _dark: {
            [cc.variable]: "colors.whiteAlpha.400"
        },
        bgColor: cc.reference
    },
    o0 = Ct("avatar-background"),
    FT = e => {
        const {name: t, theme: n} = e,
            r = t ? tT({
                string: t
            }) : "colors.gray.400",
            o = eT(r)(n);
        let i = "white";
        return o || (i = "gray.800"), {
            bg: o0.reference,
            "&:not([data-loaded])": {
                [o0.variable]: r
            },
            color: i,
            [go.variable]: "colors.white",
            _dark: {
                [go.variable]: "colors.gray.800"
            },
            borderColor: go.reference,
            verticalAlign: "top"
        }
    },
    NT = V1(e => ({
        badge: we(IT, e),
        excessLabel: we(LT, e),
        container: we(FT, e)
    }));
function Nn(e) {
    const t = e !== "100%" ? D1[e] : void 0;
    return V1({
        container: {
            width: e,
            height: e,
            fontSize: `calc(${t != null ? t : e} / 2.5)`
        },
        excessLabel: {
            width: e,
            height: e
        },
        label: {
            fontSize: `calc(${t != null ? t : e} / 2.5)`,
            lineHeight: e !== "100%" ? t != null ? t : e : void 0
        }
    })
}
var $T = {
        "2xs": Nn(4),
        xs: Nn(6),
        sm: Nn(8),
        md: Nn(12),
        lg: Nn(16),
        xl: Nn(24),
        "2xl": Nn(32),
        full: Nn("100%")
    },
    OT = zT({
        baseStyle: NT,
        sizes: $T,
        defaultProps: {
            size: "md"
        }
    }),
    BT = {
        px: 1,
        textTransform: "uppercase",
        fontSize: "xs",
        borderRadius: "sm",
        fontWeight: "bold"
    },
    vo = Ct("badge-bg"),
    an = Ct("badge-color"),
    DT = e => {
        const {colorScheme: t, theme: n} = e,
            r = Ao(`${t}.500`, .6)(n);
        return {
            [vo.variable]: `colors.${t}.500`,
            [an.variable]: "colors.white",
            _dark: {
                [vo.variable]: r,
                [an.variable]: "colors.whiteAlpha.800"
            },
            bg: vo.reference,
            color: an.reference
        }
    },
    VT = e => {
        const {colorScheme: t, theme: n} = e,
            r = Ao(`${t}.200`, .16)(n);
        return {
            [vo.variable]: `colors.${t}.100`,
            [an.variable]: `colors.${t}.800`,
            _dark: {
                [vo.variable]: r,
                [an.variable]: `colors.${t}.200`
            },
            bg: vo.reference,
            color: an.reference
        }
    },
    jT = e => {
        const {colorScheme: t, theme: n} = e,
            r = Ao(`${t}.200`, .8)(n);
        return {
            [an.variable]: `colors.${t}.500`,
            _dark: {
                [an.variable]: r
            },
            color: an.reference,
            boxShadow: `inset 0 0 0px 1px ${an.reference}`
        }
    },
    WT = {
        solid: DT,
        subtle: VT,
        outline: jT
    },
    vi = {
        baseStyle: BT,
        variants: WT,
        defaultProps: {
            variant: "subtle",
            colorScheme: "gray"
        }
    },
    {defineMultiStyleConfig: HT, definePartsStyle: UT} = ge(p5.keys),
    GT = {
        transitionProperty: "common",
        transitionDuration: "fast",
        transitionTimingFunction: "ease-out",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        _hover: {
            textDecoration: "underline"
        },
        _focusVisible: {
            boxShadow: "outline"
        }
    },
    KT = UT({
        link: GT
    }),
    YT = HT({
        baseStyle: KT
    }),
    QT = {
        lineHeight: "1.2",
        borderRadius: "md",
        fontWeight: "semibold",
        transitionProperty: "common",
        transitionDuration: "normal",
        _focusVisible: {
            boxShadow: "outline"
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed",
            boxShadow: "none"
        },
        _hover: {
            _disabled: {
                bg: "initial"
            }
        }
    },
    j1 = e => {
        const {colorScheme: t, theme: n} = e;
        if (t === "gray")
            return {
                color: M("inherit", "whiteAlpha.900")(e),
                _hover: {
                    bg: M("gray.100", "whiteAlpha.200")(e)
                },
                _active: {
                    bg: M("gray.200", "whiteAlpha.300")(e)
                }
            };
        const r = Ao(`${t}.200`, .12)(n),
            o = Ao(`${t}.200`, .24)(n);
        return {
            color: M(`${t}.600`, `${t}.200`)(e),
            bg: "transparent",
            _hover: {
                bg: M(`${t}.50`, r)(e)
            },
            _active: {
                bg: M(`${t}.100`, o)(e)
            }
        }
    },
    XT = e => {
        const {colorScheme: t} = e,
            n = M("gray.200", "whiteAlpha.300")(e);
        return {
            border: "1px solid",
            borderColor: t === "gray" ? n : "currentColor",
            ".chakra-button__group[data-attached] > &:not(:last-of-type)": {
                marginEnd: "-1px"
            },
            ...we(j1, e)
        }
    },
    qT = {
        yellow: {
            bg: "yellow.400",
            color: "black",
            hoverBg: "yellow.500",
            activeBg: "yellow.600"
        },
        cyan: {
            bg: "cyan.400",
            color: "black",
            hoverBg: "cyan.500",
            activeBg: "cyan.600"
        }
    },
    ZT = e => {
        var s;
        const {colorScheme: t} = e;
        if (t === "gray") {
            const l = M("gray.100", "whiteAlpha.200")(e);
            return {
                bg: l,
                _hover: {
                    bg: M("gray.200", "whiteAlpha.300")(e),
                    _disabled: {
                        bg: l
                    }
                },
                _active: {
                    bg: M("gray.300", "whiteAlpha.400")(e)
                }
            }
        }
        const {bg: n=`${t}.500`, color: r="white", hoverBg: o=`${t}.600`, activeBg: i=`${t}.700`} = (s = qT[t]) != null ? s : {},
            a = M(n, `${t}.200`)(e);
        return {
            bg: a,
            color: M(r, "gray.800")(e),
            _hover: {
                bg: M(o, `${t}.300`)(e),
                _disabled: {
                    bg: a
                }
            },
            _active: {
                bg: M(i, `${t}.400`)(e)
            }
        }
    },
    JT = e => {
        const {colorScheme: t} = e;
        return {
            padding: 0,
            height: "auto",
            lineHeight: "normal",
            verticalAlign: "baseline",
            color: M(`${t}.500`, `${t}.200`)(e),
            _hover: {
                textDecoration: "underline",
                _disabled: {
                    textDecoration: "none"
                }
            },
            _active: {
                color: M(`${t}.700`, `${t}.500`)(e)
            }
        }
    },
    eE = {
        bg: "none",
        color: "inherit",
        display: "inline",
        lineHeight: "inherit",
        m: "0",
        p: "0"
    },
    tE = {
        ghost: j1,
        outline: XT,
        solid: ZT,
        link: JT,
        unstyled: eE
    },
    nE = {
        lg: {
            h: "12",
            minW: "12",
            fontSize: "lg",
            px: "6"
        },
        md: {
            h: "10",
            minW: "10",
            fontSize: "md",
            px: "4"
        },
        sm: {
            h: "8",
            minW: "8",
            fontSize: "sm",
            px: "3"
        },
        xs: {
            h: "6",
            minW: "6",
            fontSize: "xs",
            px: "2"
        }
    },
    rE = {
        baseStyle: QT,
        variants: tE,
        sizes: nE,
        defaultProps: {
            variant: "solid",
            size: "md",
            colorScheme: "gray"
        }
    },
    {definePartsStyle: Ts, defineMultiStyleConfig: oE} = ge(h5.keys),
    yi = Ct("checkbox-size"),
    iE = e => {
        const {colorScheme: t} = e;
        return {
            w: yi.reference,
            h: yi.reference,
            transitionProperty: "box-shadow",
            transitionDuration: "normal",
            border: "2px solid",
            borderRadius: "sm",
            borderColor: "inherit",
            color: "white",
            _checked: {
                bg: M(`${t}.500`, `${t}.200`)(e),
                borderColor: M(`${t}.500`, `${t}.200`)(e),
                color: M("white", "gray.900")(e),
                _hover: {
                    bg: M(`${t}.600`, `${t}.300`)(e),
                    borderColor: M(`${t}.600`, `${t}.300`)(e)
                },
                _disabled: {
                    borderColor: M("gray.200", "transparent")(e),
                    bg: M("gray.200", "whiteAlpha.300")(e),
                    color: M("gray.500", "whiteAlpha.500")(e)
                }
            },
            _indeterminate: {
                bg: M(`${t}.500`, `${t}.200`)(e),
                borderColor: M(`${t}.500`, `${t}.200`)(e),
                color: M("white", "gray.900")(e)
            },
            _disabled: {
                bg: M("gray.100", "whiteAlpha.100")(e),
                borderColor: M("gray.100", "transparent")(e)
            },
            _focusVisible: {
                boxShadow: "outline"
            },
            _invalid: {
                borderColor: M("red.500", "red.300")(e)
            }
        }
    },
    aE = {
        _disabled: {
            cursor: "not-allowed"
        }
    },
    sE = {
        userSelect: "none",
        _disabled: {
            opacity: .4
        }
    },
    lE = {
        transitionProperty: "transform",
        transitionDuration: "normal"
    },
    uE = Ts(e => ({
        icon: lE,
        container: aE,
        control: we(iE, e),
        label: sE
    })),
    cE = {
        sm: Ts({
            control: {
                [yi.variable]: "sizes.3"
            },
            label: {
                fontSize: "sm"
            },
            icon: {
                fontSize: "3xs"
            }
        }),
        md: Ts({
            control: {
                [yi.variable]: "sizes.4"
            },
            label: {
                fontSize: "md"
            },
            icon: {
                fontSize: "2xs"
            }
        }),
        lg: Ts({
            control: {
                [yi.variable]: "sizes.5"
            },
            label: {
                fontSize: "lg"
            },
            icon: {
                fontSize: "2xs"
            }
        })
    },
    ul = oE({
        baseStyle: uE,
        sizes: cE,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    Si = ct("close-button-size"),
    dE = e => {
        const t = M("blackAlpha.100", "whiteAlpha.100")(e),
            n = M("blackAlpha.200", "whiteAlpha.200")(e);
        return {
            w: [Si.reference],
            h: [Si.reference],
            borderRadius: "md",
            transitionProperty: "common",
            transitionDuration: "normal",
            _disabled: {
                opacity: .4,
                cursor: "not-allowed",
                boxShadow: "none"
            },
            _hover: {
                bg: t
            },
            _active: {
                bg: n
            },
            _focusVisible: {
                boxShadow: "outline"
            }
        }
    },
    fE = {
        lg: {
            [Si.variable]: "sizes.10",
            fontSize: "md"
        },
        md: {
            [Si.variable]: "sizes.8",
            fontSize: "xs"
        },
        sm: {
            [Si.variable]: "sizes.6",
            fontSize: "2xs"
        }
    },
    pE = {
        baseStyle: dE,
        sizes: fE,
        defaultProps: {
            size: "md"
        }
    },
    {variants: hE, defaultProps: mE} = vi,
    gE = {
        fontFamily: "mono",
        fontSize: "sm",
        px: "0.2em",
        borderRadius: "sm"
    },
    vE = {
        baseStyle: gE,
        variants: hE,
        defaultProps: mE
    },
    yE = {
        w: "100%",
        mx: "auto",
        maxW: "prose",
        px: "4"
    },
    SE = {
        baseStyle: yE
    },
    bE = {
        opacity: .6,
        borderColor: "inherit"
    },
    xE = {
        borderStyle: "solid"
    },
    wE = {
        borderStyle: "dashed"
    },
    kE = {
        solid: xE,
        dashed: wE
    },
    CE = {
        baseStyle: bE,
        variants: kE,
        defaultProps: {
            variant: "solid"
        }
    },
    {definePartsStyle: zd, defineMultiStyleConfig: _E} = ge(m5.keys);
function Hr(e) {
    return zd(e === "full" ? {
        dialog: {
            maxW: "100vw",
            h: "100vh"
        }
    } : {
        dialog: {
            maxW: e
        }
    })
}
var TE = {
        bg: "blackAlpha.600",
        zIndex: "overlay"
    },
    EE = {
        display: "flex",
        zIndex: "modal",
        justifyContent: "center"
    },
    PE = e => {
        const {isFullHeight: t} = e;
        return {
            ...t && {
                height: "100vh"
            },
            zIndex: "modal",
            maxH: "100vh",
            bg: M("white", "gray.700")(e),
            color: "inherit",
            boxShadow: M("lg", "dark-lg")(e)
        }
    },
    RE = {
        px: "6",
        py: "4",
        fontSize: "xl",
        fontWeight: "semibold"
    },
    AE = {
        position: "absolute",
        top: "2",
        insetEnd: "3"
    },
    ME = {
        px: "6",
        py: "2",
        flex: "1",
        overflow: "auto"
    },
    zE = {
        px: "6",
        py: "4"
    },
    IE = zd(e => ({
        overlay: TE,
        dialogContainer: EE,
        dialog: we(PE, e),
        header: RE,
        closeButton: AE,
        body: ME,
        footer: zE
    })),
    LE = {
        xs: Hr("xs"),
        sm: Hr("md"),
        md: Hr("lg"),
        lg: Hr("2xl"),
        xl: Hr("4xl"),
        full: Hr("full")
    },
    FE = _E({
        baseStyle: IE,
        sizes: LE,
        defaultProps: {
            size: "xs"
        }
    }),
    {definePartsStyle: NE, defineMultiStyleConfig: $E} = ge(g5.keys),
    OE = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal"
    },
    BE = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal",
        width: "full",
        _focusVisible: {
            boxShadow: "outline"
        },
        _placeholder: {
            opacity: .6
        }
    },
    DE = {
        borderRadius: "md",
        py: "1",
        transitionProperty: "common",
        transitionDuration: "normal",
        width: "full",
        _focusVisible: {
            boxShadow: "outline"
        },
        _placeholder: {
            opacity: .6
        }
    },
    VE = NE({
        preview: OE,
        input: BE,
        textarea: DE
    }),
    jE = $E({
        baseStyle: VE
    }),
    {definePartsStyle: WE, defineMultiStyleConfig: HE} = ge(v5.keys),
    UE = e => ({
        marginStart: "1",
        color: M("red.500", "red.300")(e)
    }),
    GE = e => ({
        mt: "2",
        color: M("gray.600", "whiteAlpha.600")(e),
        lineHeight: "normal",
        fontSize: "sm"
    }),
    KE = WE(e => ({
        container: {
            width: "100%",
            position: "relative"
        },
        requiredIndicator: we(UE, e),
        helperText: we(GE, e)
    })),
    YE = HE({
        baseStyle: KE
    }),
    {definePartsStyle: QE, defineMultiStyleConfig: XE} = ge(y5.keys),
    qE = e => ({
        color: M("red.500", "red.300")(e),
        mt: "2",
        fontSize: "sm",
        lineHeight: "normal"
    }),
    ZE = e => ({
        marginEnd: "0.5em",
        color: M("red.500", "red.300")(e)
    }),
    JE = QE(e => ({
        text: we(qE, e),
        icon: we(ZE, e)
    })),
    eP = XE({
        baseStyle: JE
    }),
    tP = {
        fontSize: "md",
        marginEnd: "3",
        mb: "2",
        fontWeight: "medium",
        transitionProperty: "common",
        transitionDuration: "normal",
        opacity: 1,
        _disabled: {
            opacity: .4
        }
    },
    nP = {
        baseStyle: tP
    },
    rP = {
        fontFamily: "heading",
        fontWeight: "bold"
    },
    oP = {
        "4xl": {
            fontSize: ["6xl", null, "7xl"],
            lineHeight: 1
        },
        "3xl": {
            fontSize: ["5xl", null, "6xl"],
            lineHeight: 1
        },
        "2xl": {
            fontSize: ["4xl", null, "5xl"],
            lineHeight: [1.2, null, 1]
        },
        xl: {
            fontSize: ["3xl", null, "4xl"],
            lineHeight: [1.33, null, 1.2]
        },
        lg: {
            fontSize: ["2xl", null, "3xl"],
            lineHeight: [1.33, null, 1.2]
        },
        md: {
            fontSize: "xl",
            lineHeight: 1.2
        },
        sm: {
            fontSize: "md",
            lineHeight: 1.2
        },
        xs: {
            fontSize: "sm",
            lineHeight: 1.2
        }
    },
    iP = {
        baseStyle: rP,
        sizes: oP,
        defaultProps: {
            size: "xl"
        }
    },
    {definePartsStyle: Cn, defineMultiStyleConfig: aP} = ge(S5.keys),
    sP = Cn({
        field: {
            width: "100%",
            minWidth: 0,
            outline: 0,
            position: "relative",
            appearance: "none",
            transitionProperty: "common",
            transitionDuration: "normal",
            _disabled: {
                opacity: .4,
                cursor: "not-allowed"
            }
        }
    }),
    $n = {
        lg: {
            fontSize: "lg",
            px: "4",
            h: "12",
            borderRadius: "md"
        },
        md: {
            fontSize: "md",
            px: "4",
            h: "10",
            borderRadius: "md"
        },
        sm: {
            fontSize: "sm",
            px: "3",
            h: "8",
            borderRadius: "sm"
        },
        xs: {
            fontSize: "xs",
            px: "2",
            h: "6",
            borderRadius: "sm"
        }
    },
    lP = {
        lg: Cn({
            field: $n.lg,
            addon: $n.lg
        }),
        md: Cn({
            field: $n.md,
            addon: $n.md
        }),
        sm: Cn({
            field: $n.sm,
            addon: $n.sm
        }),
        xs: Cn({
            field: $n.xs,
            addon: $n.xs
        })
    };
function pp(e) {
    const {focusBorderColor: t, errorBorderColor: n} = e;
    return {
        focusBorderColor: t || M("blue.500", "blue.300")(e),
        errorBorderColor: n || M("red.500", "red.300")(e)
    }
}
var uP = Cn(e => {
        const {theme: t} = e,
            {focusBorderColor: n, errorBorderColor: r} = pp(e);
        return {
            field: {
                border: "1px solid",
                borderColor: "inherit",
                bg: "inherit",
                _hover: {
                    borderColor: M("gray.300", "whiteAlpha.400")(e)
                },
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: De(t, r),
                    boxShadow: `0 0 0 1px ${De(t, r)}`
                },
                _focusVisible: {
                    zIndex: 1,
                    borderColor: De(t, n),
                    boxShadow: `0 0 0 1px ${De(t, n)}`
                }
            },
            addon: {
                border: "1px solid",
                borderColor: M("inherit", "whiteAlpha.50")(e),
                bg: M("gray.100", "whiteAlpha.300")(e)
            }
        }
    }),
    cP = Cn(e => {
        const {theme: t} = e,
            {focusBorderColor: n, errorBorderColor: r} = pp(e);
        return {
            field: {
                border: "2px solid",
                borderColor: "transparent",
                bg: M("gray.100", "whiteAlpha.50")(e),
                _hover: {
                    bg: M("gray.200", "whiteAlpha.100")(e)
                },
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: De(t, r)
                },
                _focusVisible: {
                    bg: "transparent",
                    borderColor: De(t, n)
                }
            },
            addon: {
                border: "2px solid",
                borderColor: "transparent",
                bg: M("gray.100", "whiteAlpha.50")(e)
            }
        }
    }),
    dP = Cn(e => {
        const {theme: t} = e,
            {focusBorderColor: n, errorBorderColor: r} = pp(e);
        return {
            field: {
                borderBottom: "1px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent",
                _readOnly: {
                    boxShadow: "none !important",
                    userSelect: "all"
                },
                _invalid: {
                    borderColor: De(t, r),
                    boxShadow: `0px 1px 0px 0px ${De(t, r)}`
                },
                _focusVisible: {
                    borderColor: De(t, n),
                    boxShadow: `0px 1px 0px 0px ${De(t, n)}`
                }
            },
            addon: {
                borderBottom: "2px solid",
                borderColor: "inherit",
                borderRadius: "0",
                px: "0",
                bg: "transparent"
            }
        }
    }),
    fP = Cn({
        field: {
            bg: "transparent",
            px: "0",
            height: "auto"
        },
        addon: {
            bg: "transparent",
            px: "0",
            height: "auto"
        }
    }),
    pP = {
        outline: uP,
        filled: cP,
        flushed: dP,
        unstyled: fP
    },
    ee = aP({
        baseStyle: sP,
        sizes: lP,
        variants: pP,
        defaultProps: {
            size: "md",
            variant: "outline"
        }
    }),
    hP = e => ({
        bg: M("gray.100", "whiteAlpha")(e),
        borderRadius: "md",
        borderWidth: "1px",
        borderBottomWidth: "3px",
        fontSize: "0.8em",
        fontWeight: "bold",
        lineHeight: "normal",
        px: "0.4em",
        whiteSpace: "nowrap"
    }),
    mP = {
        baseStyle: hP
    },
    gP = {
        transitionProperty: "common",
        transitionDuration: "fast",
        transitionTimingFunction: "ease-out",
        cursor: "pointer",
        textDecoration: "none",
        outline: "none",
        color: "inherit",
        _hover: {
            textDecoration: "underline"
        },
        _focusVisible: {
            boxShadow: "outline"
        }
    },
    vP = {
        baseStyle: gP
    },
    {defineMultiStyleConfig: yP, definePartsStyle: SP} = ge(b5.keys),
    bP = {
        marginEnd: "2",
        display: "inline",
        verticalAlign: "text-bottom"
    },
    xP = SP({
        icon: bP
    }),
    wP = yP({
        baseStyle: xP
    }),
    {defineMultiStyleConfig: kP, definePartsStyle: CP} = ge(x5.keys),
    _P = e => ({
        bg: M("#fff", "gray.700")(e),
        boxShadow: M("sm", "dark-lg")(e),
        color: "inherit",
        minW: "3xs",
        py: "2",
        zIndex: 1,
        borderRadius: "md",
        borderWidth: "1px"
    }),
    TP = e => ({
        py: "1.5",
        px: "3",
        transitionProperty: "background",
        transitionDuration: "ultra-fast",
        transitionTimingFunction: "ease-in",
        _focus: {
            bg: M("gray.100", "whiteAlpha.100")(e)
        },
        _active: {
            bg: M("gray.200", "whiteAlpha.200")(e)
        },
        _expanded: {
            bg: M("gray.100", "whiteAlpha.100")(e)
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        }
    }),
    EP = {
        mx: 4,
        my: 2,
        fontWeight: "semibold",
        fontSize: "sm"
    },
    PP = {
        opacity: .6
    },
    RP = {
        border: 0,
        borderBottom: "1px solid",
        borderColor: "inherit",
        my: "2",
        opacity: .6
    },
    AP = {
        transitionProperty: "common",
        transitionDuration: "normal"
    },
    MP = CP(e => ({
        button: AP,
        list: we(_P, e),
        item: we(TP, e),
        groupTitle: EP,
        command: PP,
        divider: RP
    })),
    zP = kP({
        baseStyle: MP
    }),
    {defineMultiStyleConfig: IP, definePartsStyle: Id} = ge(w5.keys),
    LP = {
        bg: "blackAlpha.600",
        zIndex: "modal"
    },
    FP = e => {
        const {isCentered: t, scrollBehavior: n} = e;
        return {
            display: "flex",
            zIndex: "modal",
            justifyContent: "center",
            alignItems: t ? "center" : "flex-start",
            overflow: n === "inside" ? "hidden" : "auto"
        }
    },
    NP = e => {
        const {scrollBehavior: t} = e;
        return {
            borderRadius: "md",
            bg: M("white", "gray.700")(e),
            color: "inherit",
            my: "16",
            zIndex: "modal",
            maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
            boxShadow: M("lg", "dark-lg")(e)
        }
    },
    $P = {
        px: "6",
        py: "4",
        fontSize: "xl",
        fontWeight: "semibold"
    },
    OP = {
        position: "absolute",
        top: "2",
        insetEnd: "3"
    },
    BP = e => {
        const {scrollBehavior: t} = e;
        return {
            px: "6",
            py: "2",
            flex: "1",
            overflow: t === "inside" ? "auto" : void 0
        }
    },
    DP = {
        px: "6",
        py: "4"
    },
    VP = Id(e => ({
        overlay: LP,
        dialogContainer: we(FP, e),
        dialog: we(NP, e),
        header: $P,
        closeButton: OP,
        body: we(BP, e),
        footer: DP
    }));
function Bt(e) {
    return Id(e === "full" ? {
        dialog: {
            maxW: "100vw",
            minH: "$100vh",
            my: "0",
            borderRadius: "0"
        }
    } : {
        dialog: {
            maxW: e
        }
    })
}
var jP = {
        xs: Bt("xs"),
        sm: Bt("sm"),
        md: Bt("md"),
        lg: Bt("lg"),
        xl: Bt("xl"),
        "2xl": Bt("2xl"),
        "3xl": Bt("3xl"),
        "4xl": Bt("4xl"),
        "5xl": Bt("5xl"),
        "6xl": Bt("6xl"),
        full: Bt("full")
    },
    WP = IP({
        baseStyle: VP,
        sizes: jP,
        defaultProps: {
            size: "md"
        }
    }),
    HP = {
        letterSpacings: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em"
        },
        lineHeights: {
            normal: "normal",
            none: 1,
            shorter: 1.25,
            short: 1.375,
            base: 1.5,
            tall: 1.625,
            taller: "2",
            3: ".75rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem"
        },
        fontWeights: {
            hairline: 100,
            thin: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        fonts: {
            heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
        },
        fontSizes: {
            "3xs": "0.45rem",
            "2xs": "0.625rem",
            xs: "0.75rem",
            sm: "0.875rem",
            md: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "3.75rem",
            "7xl": "4.5rem",
            "8xl": "6rem",
            "9xl": "8rem"
        }
    },
    W1 = HP,
    {defineMultiStyleConfig: UP, definePartsStyle: H1} = ge(k5.keys),
    hp = ct("number-input-stepper-width"),
    U1 = ct("number-input-input-padding"),
    GP = xn(hp).add("0.5rem").toString(),
    KP = {
        [hp.variable]: "sizes.6",
        [U1.variable]: GP
    },
    YP = e => {
        var n;
        var t;
        return (n = (t = we(ee.baseStyle, e)) == null ? void 0 : t.field) != null ? n : {}
    },
    QP = {
        width: [hp.reference]
    },
    XP = e => ({
        borderStart: "1px solid",
        borderStartColor: M("inherit", "whiteAlpha.300")(e),
        color: M("inherit", "whiteAlpha.800")(e),
        _active: {
            bg: M("gray.200", "whiteAlpha.300")(e)
        },
        _disabled: {
            opacity: .4,
            cursor: "not-allowed"
        }
    }),
    qP = H1(e => {
        var t,
            n;
        return {
            root: KP,
            field: (t = we(YP, e)) != null ? t : {},
            stepperGroup: QP,
            stepper: (n = we(XP, e)) != null ? n : {}
        }
    });
function ts(e) {
    var s;
    var t,
        n;
    const r = (t = ee.sizes) == null ? void 0 : t[e],
        o = {
            lg: "md",
            md: "md",
            sm: "sm",
            xs: "sm"
        },
        i = (s = (n = r.field) == null ? void 0 : n.fontSize) != null ? s : "md",
        a = W1.fontSizes[i];
    return H1({
        field: {
            ...r.field,
            paddingInlineEnd: U1.reference,
            verticalAlign: "top"
        },
        stepper: {
            fontSize: xn(a).multiply(.75).toString(),
            _first: {
                borderTopEndRadius: o[e]
            },
            _last: {
                borderBottomEndRadius: o[e],
                mt: "-1px",
                borderTopWidth: 1
            }
        }
    })
}
var ZP = {
        xs: ts("xs"),
        sm: ts("sm"),
        md: ts("md"),
        lg: ts("lg")
    },
    JP = UP({
        baseStyle: qP,
        sizes: ZP,
        variants: ee.variants,
        defaultProps: ee.defaultProps
    }),
    i0,
    e3 = {
        ...(i0 = ee.baseStyle) == null ? void 0 : i0.field,
        textAlign: "center"
    },
    t3 = {
        lg: {
            fontSize: "lg",
            w: 12,
            h: 12,
            borderRadius: "md"
        },
        md: {
            fontSize: "md",
            w: 10,
            h: 10,
            borderRadius: "md"
        },
        sm: {
            fontSize: "sm",
            w: 8,
            h: 8,
            borderRadius: "sm"
        },
        xs: {
            fontSize: "xs",
            w: 6,
            h: 6,
            borderRadius: "sm"
        }
    },
    a0,
    Bg,
    n3 = {
        outline: e => {
            var r;
            var t,
                n;
            return (r = (n = we((t = ee.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        flushed: e => {
            var r;
            var t,
                n;
            return (r = (n = we((t = ee.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        filled: e => {
            var r;
            var t,
                n;
            return (r = (n = we((t = ee.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : n.field) != null ? r : {}
        },
        unstyled: (Bg = (a0 = ee.variants) == null ? void 0 : a0.unstyled.field) != null ? Bg : {}
    },
    r3 = {
        baseStyle: e3,
        sizes: t3,
        variants: n3,
        defaultProps: ee.defaultProps
    },
    {defineMultiStyleConfig: o3, definePartsStyle: i3} = ge(C5.keys),
    dc = ct("popper-bg"),
    a3 = ct("popper-arrow-bg"),
    s3 = ct("popper-arrow-shadow-color"),
    l3 = {
        zIndex: 10
    },
    u3 = e => {
        const t = M("white", "gray.700")(e),
            n = M("gray.200", "whiteAlpha.300")(e);
        return {
            [dc.variable]: `colors.${t}`,
            bg: dc.reference,
            [a3.variable]: dc.reference,
            [s3.variable]: `colors.${n}`,
            width: "xs",
            border: "1px solid",
            borderColor: "inherit",
            borderRadius: "md",
            boxShadow: "sm",
            zIndex: "inherit",
            _focusVisible: {
                outline: 0,
                boxShadow: "outline"
            }
        }
    },
    c3 = {
        px: 3,
        py: 2,
        borderBottomWidth: "1px"
    },
    d3 = {
        px: 3,
        py: 2
    },
    f3 = {
        px: 3,
        py: 2,
        borderTopWidth: "1px"
    },
    p3 = {
        position: "absolute",
        borderRadius: "md",
        top: 1,
        insetEnd: 2,
        padding: 2
    },
    h3 = i3(e => ({
        popper: l3,
        content: u3(e),
        header: c3,
        body: d3,
        footer: f3,
        closeButton: p3
    })),
    m3 = o3({
        baseStyle: h3
    }),
    {defineMultiStyleConfig: g3, definePartsStyle: ii} = ge(_5.keys),
    v3 = e => {
        const {colorScheme: t, theme: n, isIndeterminate: r, hasStripe: o} = e,
            i = M(Jm(), Jm("1rem", "rgba(0,0,0,0.1)"))(e),
            a = M(`${t}.500`, `${t}.200`)(e),
            s = `linear-gradient(
    to right,
    transparent 0%,
    ${

            De(n, a)} 50%,
    transparent 100%
  )`

            ;
        return {
            ...!r && o && i,
            ...r ? {
                bgImage: s
            } : {
                bgColor: a
            }
        }
    },
    y3 = {
        lineHeight: "1",
        fontSize: "0.25em",
        fontWeight: "bold",
        color: "white"
    },
    S3 = e => ({
        bg: M("gray.100", "whiteAlpha.300")(e)
    }),
    b3 = e => ({
        transitionProperty: "common",
        transitionDuration: "slow",
        ...v3(e)
    }),
    x3 = ii(e => ({
        label: y3,
        filledTrack: b3(e),
        track: S3(e)
    })),
    w3 = {
        xs: ii({
            track: {
                h: "1"
            }
        }),
        sm: ii({
            track: {
                h: "2"
            }
        }),
        md: ii({
            track: {
                h: "3"
            }
        }),
        lg: ii({
            track: {
                h: "4"
            }
        })
    },
    k3 = g3({
        sizes: w3,
        baseStyle: x3,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    {defineMultiStyleConfig: C3, definePartsStyle: Es} = ge(T5.keys),
    _3 = e => {
        var t;
        const n = (t = we(ul.baseStyle, e)) == null ? void 0 : t.control;
        return {
            ...n,
            borderRadius: "full",
            _checked: {
                ...n == null ? void 0 : n._checked,
                _before: {
                    content: '""',
                    display: "inline-block",
                    pos: "relative",
                    w: "50%",
                    h: "50%",
                    borderRadius: "50%",
                    bg: "currentColor"
                }
            }
        }
    },
    T3 = Es(e => {
        var t,
            n,
            r,
            o;
        return {
            label: (n = (t = ul).baseStyle) == null ? void 0 : n.call(t, e).label,
            container: (o = (r = ul).baseStyle) == null ? void 0 : o.call(r, e).container,
            control: _3(e)
        }
    }),
    E3 = {
        md: Es({
            control: {
                w: "4",
                h: "4"
            },
            label: {
                fontSize: "md"
            }
        }),
        lg: Es({
            control: {
                w: "5",
                h: "5"
            },
            label: {
                fontSize: "lg"
            }
        }),
        sm: Es({
            control: {
                width: "3",
                height: "3"
            },
            label: {
                fontSize: "sm"
            }
        })
    },
    P3 = C3({
        baseStyle: T3,
        sizes: E3,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    {defineMultiStyleConfig: R3, definePartsStyle: A3} = ge(E5.keys),
    M3 = e => {
        var t;
        return {
            ...(t = ee.baseStyle) == null ? void 0 : t.field,
            bg: M("white", "gray.700")(e),
            appearance: "none",
            paddingBottom: "1px",
            lineHeight: "normal",
            "> option, > optgroup": {
                bg: M("white", "gray.700")(e)
            }
        }
    },
    z3 = {
        width: "6",
        height: "100%",
        insetEnd: "2",
        position: "relative",
        color: "currentColor",
        fontSize: "xl",
        _disabled: {
            opacity: .5
        }
    },
    I3 = A3(e => ({
        field: M3(e),
        icon: z3
    })),
    ns = {
        paddingInlineEnd: "8"
    },
    s0,
    l0,
    u0,
    c0,
    d0,
    f0,
    p0,
    h0,
    L3 = {
        lg: {
            ...(s0 = ee.sizes) == null ? void 0 : s0.lg,
            field: {
                ...(l0 = ee.sizes) == null ? void 0 : l0.lg.field,
                ...ns
            }
        },
        md: {
            ...(u0 = ee.sizes) == null ? void 0 : u0.md,
            field: {
                ...(c0 = ee.sizes) == null ? void 0 : c0.md.field,
                ...ns
            }
        },
        sm: {
            ...(d0 = ee.sizes) == null ? void 0 : d0.sm,
            field: {
                ...(f0 = ee.sizes) == null ? void 0 : f0.sm.field,
                ...ns
            }
        },
        xs: {
            ...(p0 = ee.sizes) == null ? void 0 : p0.xs,
            field: {
                ...(h0 = ee.sizes) == null ? void 0 : h0.xs.field,
                ...ns
            },
            icon: {
                insetEnd: "1"
            }
        }
    },
    F3 = R3({
        baseStyle: I3,
        sizes: L3,
        variants: ee.variants,
        defaultProps: ee.defaultProps
    }),
    N3 = Ct("skeleton-start-color"),
    $3 = Ct("skeleton-end-color"),
    O3 = e => {
        const t = M("gray.100", "gray.800")(e),
            n = M("gray.400", "gray.600")(e),
            {startColor: r=t, endColor: o=n, theme: i} = e,
            a = De(i, r),
            s = De(i, o);
        return {
            [N3.variable]: a,
            [$3.variable]: s,
            opacity: .7,
            borderRadius: "2px",
            borderColor: a,
            background: s
        }
    },
    B3 = {
        baseStyle: O3
    },
    D3 = e => ({
        borderRadius: "md",
        fontWeight: "semibold",
        _focusVisible: {
            boxShadow: "outline",
            padding: "4",
            position: "fixed",
            top: "6",
            insetStart: "6",
            bg: M("white", "gray.700")(e)
        }
    }),
    V3 = {
        baseStyle: D3
    },
    {defineMultiStyleConfig: j3, definePartsStyle: au} = ge(P5.keys),
    Ji = Ct("slider-thumb-size"),
    ea = Ct("slider-track-size"),
    W3 = e => {
        const {orientation: t} = e;
        return {
            display: "inline-block",
            position: "relative",
            cursor: "pointer",
            _disabled: {
                opacity: .6,
                cursor: "default",
                pointerEvents: "none"
            },
            ...dp({
                orientation: t,
                vertical: {
                    h: "100%"
                },
                horizontal: {
                    w: "100%"
                }
            })
        }
    },
    H3 = e => ({
        ...dp({
            orientation: e.orientation,
            horizontal: {
                h: ea.reference
            },
            vertical: {
                w: ea.reference
            }
        }),
        overflow: "hidden",
        borderRadius: "sm",
        bg: M("gray.200", "whiteAlpha.200")(e),
        _disabled: {
            bg: M("gray.300", "whiteAlpha.300")(e)
        }
    }),
    U3 = e => {
        const {orientation: t} = e;
        return {
            ...dp({
                orientation: t,
                vertical: {
                    left: "50%",
                    transform: "translateX(-50%)",
                    _active: {
                        transform: "translateX(-50%) scale(1.15)"
                    }
                },
                horizontal: {
                    top: "50%",
                    transform: "translateY(-50%)",
                    _active: {
                        transform: "translateY(-50%) scale(1.15)"
                    }
                }
            }),
            w: Ji.reference,
            h: Ji.reference,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            outline: 0,
            zIndex: 1,
            borderRadius: "full",
            bg: "white",
            boxShadow: "base",
            border: "1px solid",
            borderColor: "transparent",
            transitionProperty: "transform",
            transitionDuration: "normal",
            _focusVisible: {
                boxShadow: "outline"
            },
            _disabled: {
                bg: "gray.300"
            }
        }
    },
    G3 = e => {
        const {colorScheme: t} = e;
        return {
            width: "inherit",
            height: "inherit",
            bg: M(`${t}.500`, `${t}.200`)(e)
        }
    },
    K3 = au(e => ({
        container: W3(e),
        track: H3(e),
        thumb: U3(e),
        filledTrack: G3(e)
    })),
    Y3 = au({
        container: {
            [Ji.variable]: "sizes.4",
            [ea.variable]: "sizes.1"
        }
    }),
    Q3 = au({
        container: {
            [Ji.variable]: "sizes.3.5",
            [ea.variable]: "sizes.1"
        }
    }),
    X3 = au({
        container: {
            [Ji.variable]: "sizes.2.5",
            [ea.variable]: "sizes.0.5"
        }
    }),
    q3 = {
        lg: Y3,
        md: Q3,
        sm: X3
    },
    Z3 = j3({
        baseStyle: K3,
        sizes: q3,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    Sr = ct("spinner-size"),
    J3 = {
        width: [Sr.reference],
        height: [Sr.reference]
    },
    eR = {
        xs: {
            [Sr.variable]: "sizes.3"
        },
        sm: {
            [Sr.variable]: "sizes.4"
        },
        md: {
            [Sr.variable]: "sizes.6"
        },
        lg: {
            [Sr.variable]: "sizes.8"
        },
        xl: {
            [Sr.variable]: "sizes.12"
        }
    },
    tR = {
        baseStyle: J3,
        sizes: eR,
        defaultProps: {
            size: "md"
        }
    },
    {defineMultiStyleConfig: nR, definePartsStyle: G1} = ge(R5.keys),
    rR = {
        fontWeight: "medium"
    },
    oR = {
        opacity: .8,
        marginBottom: "2"
    },
    iR = {
        verticalAlign: "baseline",
        fontWeight: "semibold"
    },
    aR = {
        marginEnd: 1,
        w: "3.5",
        h: "3.5",
        verticalAlign: "middle"
    },
    sR = G1({
        container: {},
        label: rR,
        helpText: oR,
        number: iR,
        icon: aR
    }),
    lR = {
        md: G1({
            label: {
                fontSize: "sm"
            },
            helpText: {
                fontSize: "sm"
            },
            number: {
                fontSize: "2xl"
            }
        })
    },
    uR = nR({
        baseStyle: sR,
        sizes: lR,
        defaultProps: {
            size: "md"
        }
    }),
    {defineMultiStyleConfig: cR, definePartsStyle: Ps} = ge(A5.keys),
    bi = ct("switch-track-width"),
    Pr = ct("switch-track-height"),
    fc = ct("switch-track-diff"),
    dR = xn.subtract(bi, Pr),
    Ld = ct("switch-thumb-x"),
    fR = e => {
        const {colorScheme: t} = e;
        return {
            borderRadius: "full",
            p: "0.5",
            width: [bi.reference],
            height: [Pr.reference],
            transitionProperty: "common",
            transitionDuration: "fast",
            bg: M("gray.300", "whiteAlpha.400")(e),
            _focusVisible: {
                boxShadow: "outline"
            },
            _disabled: {
                opacity: .4,
                cursor: "not-allowed"
            },
            _checked: {
                bg: M(`${t}.500`, `${t}.200`)(e)
            }
        }
    },
    pR = {
        bg: "white",
        transitionProperty: "transform",
        transitionDuration: "normal",
        borderRadius: "inherit",
        width: [Pr.reference],
        height: [Pr.reference],
        _checked: {
            transform: `translateX(${Ld.reference})`
        }
    },
    hR = Ps(e => ({
        container: {
            [fc.variable]: dR,
            [Ld.variable]: fc.reference,
            _rtl: {
                [Ld.variable]: xn(fc).negate().toString()
            }
        },
        track: fR(e),
        thumb: pR
    })),
    mR = {
        sm: Ps({
            container: {
                [bi.variable]: "1.375rem",
                [Pr.variable]: "sizes.3"
            }
        }),
        md: Ps({
            container: {
                [bi.variable]: "1.875rem",
                [Pr.variable]: "sizes.4"
            }
        }),
        lg: Ps({
            container: {
                [bi.variable]: "2.875rem",
                [Pr.variable]: "sizes.6"
            }
        })
    },
    gR = cR({
        baseStyle: hR,
        sizes: mR,
        defaultProps: {
            size: "md",
            colorScheme: "blue"
        }
    }),
    {defineMultiStyleConfig: vR, definePartsStyle: yo} = ge(M5.keys),
    yR = yo({
        table: {
            fontVariantNumeric: "lining-nums tabular-nums",
            borderCollapse: "collapse",
            width: "full"
        },
        th: {
            fontFamily: "heading",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "wider",
            textAlign: "start"
        },
        td: {
            textAlign: "start"
        },
        caption: {
            mt: 4,
            fontFamily: "heading",
            textAlign: "center",
            fontWeight: "medium"
        }
    }),
    cl = {
        "&[data-is-numeric=true]": {
            textAlign: "end"
        }
    },
    SR = yo(e => {
        const {colorScheme: t} = e;
        return {
            th: {
                color: M("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: M(`${t}.100`, `${t}.700`)(e),
                ...cl
            },
            td: {
                borderBottom: "1px",
                borderColor: M(`${t}.100`, `${t}.700`)(e),
                ...cl
            },
            caption: {
                color: M("gray.600", "gray.100")(e)
            },
            tfoot: {
                tr: {
                    "&:last-of-type": {
                        th: {
                            borderBottomWidth: 0
                        }
                    }
                }
            }
        }
    }),
    bR = yo(e => {
        const {colorScheme: t} = e;
        return {
            th: {
                color: M("gray.600", "gray.400")(e),
                borderBottom: "1px",
                borderColor: M(`${t}.100`, `${t}.700`)(e),
                ...cl
            },
            td: {
                borderBottom: "1px",
                borderColor: M(`${t}.100`, `${t}.700`)(e),
                ...cl
            },
            caption: {
                color: M("gray.600", "gray.100")(e)
            },
            tbody: {
                tr: {
                    "&:nth-of-type(odd)": {
                        "th, td": {
                            borderBottomWidth: "1px",
                            borderColor: M(`${t}.100`, `${t}.700`)(e)
                        },
                        td: {
                            background: M(`${t}.100`, `${t}.700`)(e)
                        }
                    }
                }
            },
            tfoot: {
                tr: {
                    "&:last-of-type": {
                        th: {
                            borderBottomWidth: 0
                        }
                    }
                }
            }
        }
    }),
    xR = {
        simple: SR,
        striped: bR,
        unstyled: {}
    },
    wR = {
        sm: yo({
            th: {
                px: "4",
                py: "1",
                lineHeight: "4",
                fontSize: "xs"
            },
            td: {
                px: "4",
                py: "2",
                fontSize: "sm",
                lineHeight: "4"
            },
            caption: {
                px: "4",
                py: "2",
                fontSize: "xs"
            }
        }),
        md: yo({
            th: {
                px: "6",
                py: "3",
                lineHeight: "4",
                fontSize: "xs"
            },
            td: {
                px: "6",
                py: "4",
                lineHeight: "5"
            },
            caption: {
                px: "6",
                py: "2",
                fontSize: "sm"
            }
        }),
        lg: yo({
            th: {
                px: "8",
                py: "4",
                lineHeight: "5",
                fontSize: "sm"
            },
            td: {
                px: "8",
                py: "5",
                lineHeight: "6"
            },
            caption: {
                px: "6",
                py: "2",
                fontSize: "md"
            }
        })
    },
    kR = vR({
        baseStyle: yR,
        variants: xR,
        sizes: wR,
        defaultProps: {
            variant: "simple",
            size: "md",
            colorScheme: "gray"
        }
    }),
    {defineMultiStyleConfig: CR, definePartsStyle: cn} = ge(z5.keys),
    _R = e => {
        const {orientation: t} = e;
        return {
            display: t === "vertical" ? "flex" : "block"
        }
    },
    TR = e => {
        const {isFitted: t} = e;
        return {
            flex: t ? 1 : void 0,
            transitionProperty: "common",
            transitionDuration: "normal",
            _focusVisible: {
                zIndex: 1,
                boxShadow: "outline"
            },
            _disabled: {
                cursor: "not-allowed",
                opacity: .4
            }
        }
    },
    ER = e => {
        const {align: t="start", orientation: n} = e;
        return {
            justifyContent: {
                end: "flex-end",
                center: "center",
                start: "flex-start"
            }[t],
            flexDirection: n === "vertical" ? "column" : "row"
        }
    },
    PR = {
        p: 4
    },
    RR = cn(e => ({
        root: _R(e),
        tab: TR(e),
        tablist: ER(e),
        tabpanel: PR
    })),
    AR = {
        sm: cn({
            tab: {
                py: 1,
                px: 4,
                fontSize: "sm"
            }
        }),
        md: cn({
            tab: {
                fontSize: "md",
                py: 2,
                px: 4
            }
        }),
        lg: cn({
            tab: {
                fontSize: "lg",
                py: 3,
                px: 4
            }
        })
    },
    MR = cn(e => {
        const {colorScheme: t, orientation: n} = e,
            r = n === "vertical",
            o = n === "vertical" ? "borderStart" : "borderBottom",
            i = r ? "marginStart" : "marginBottom";
        return {
            tablist: {
                [o]: "2px solid",
                borderColor: "inherit"
            },
            tab: {
                [o]: "2px solid",
                borderColor: "transparent",
                [i]: "-2px",
                _selected: {
                    color: M(`${t}.600`, `${t}.300`)(e),
                    borderColor: "currentColor"
                },
                _active: {
                    bg: M("gray.200", "whiteAlpha.300")(e)
                },
                _disabled: {
                    _active: {
                        bg: "none"
                    }
                }
            }
        }
    }),
    zR = cn(e => {
        const {colorScheme: t} = e;
        return {
            tab: {
                borderTopRadius: "md",
                border: "1px solid",
                borderColor: "transparent",
                mb: "-1px",
                _selected: {
                    color: M(`${t}.600`, `${t}.300`)(e),
                    borderColor: "inherit",
                    borderBottomColor: M("white", "gray.800")(e)
                }
            },
            tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
            }
        }
    }),
    IR = cn(e => {
        const {colorScheme: t} = e;
        return {
            tab: {
                border: "1px solid",
                borderColor: "inherit",
                bg: M("gray.50", "whiteAlpha.50")(e),
                mb: "-1px",
                _notLast: {
                    marginEnd: "-1px"
                },
                _selected: {
                    bg: M("#fff", "gray.800")(e),
                    color: M(`${t}.600`, `${t}.300`)(e),
                    borderColor: "inherit",
                    borderTopColor: "currentColor",
                    borderBottomColor: "transparent"
                }
            },
            tablist: {
                mb: "-1px",
                borderBottom: "1px solid",
                borderColor: "inherit"
            }
        }
    }),
    LR = cn(e => {
        const {colorScheme: t, theme: n} = e;
        return {
            tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: "gray.600",
                _selected: {
                    color: De(n, `${t}.700`),
                    bg: De(n, `${t}.100`)
                }
            }
        }
    }),
    FR = cn(e => {
        const {colorScheme: t} = e;
        return {
            tab: {
                borderRadius: "full",
                fontWeight: "semibold",
                color: M("gray.600", "inherit")(e),
                _selected: {
                    color: M("#fff", "gray.800")(e),
                    bg: M(`${t}.600`, `${t}.300`)(e)
                }
            }
        }
    }),
    NR = cn({}),
    $R = {
        line: MR,
        enclosed: zR,
        "enclosed-colored": IR,
        "soft-rounded": LR,
        "solid-rounded": FR,
        unstyled: NR
    },
    OR = CR({
        baseStyle: RR,
        sizes: AR,
        variants: $R,
        defaultProps: {
            size: "md",
            variant: "line",
            colorScheme: "blue"
        }
    }),
    {defineMultiStyleConfig: BR, definePartsStyle: Rr} = ge(I5.keys),
    DR = {
        fontWeight: "medium",
        lineHeight: 1.2,
        outline: 0,
        borderRadius: "md",
        _focusVisible: {
            boxShadow: "outline"
        }
    },
    VR = {
        lineHeight: 1.2,
        overflow: "visible"
    },
    jR = {
        fontSize: "lg",
        w: "5",
        h: "5",
        transitionProperty: "common",
        transitionDuration: "normal",
        borderRadius: "full",
        marginStart: "1.5",
        marginEnd: "-1",
        opacity: .5,
        _disabled: {
            opacity: .4
        },
        _focusVisible: {
            boxShadow: "outline",
            bg: "rgba(0, 0, 0, 0.14)"
        },
        _hover: {
            opacity: .8
        },
        _active: {
            opacity: 1
        }
    },
    WR = Rr({
        container: DR,
        label: VR,
        closeButton: jR
    }),
    HR = {
        sm: Rr({
            container: {
                minH: "5",
                minW: "5",
                fontSize: "xs",
                px: "2"
            },
            closeButton: {
                marginEnd: "-2px",
                marginStart: "0.35rem"
            }
        }),
        md: Rr({
            container: {
                minH: "6",
                minW: "6",
                fontSize: "sm",
                px: "2"
            }
        }),
        lg: Rr({
            container: {
                minH: "8",
                minW: "8",
                fontSize: "md",
                px: "3"
            }
        })
    },
    UR = {
        subtle: Rr(e => {
            var t;
            return {
                container: (t = vi.variants) == null ? void 0 : t.subtle(e)
            }
        }),
        solid: Rr(e => {
            var t;
            return {
                container: (t = vi.variants) == null ? void 0 : t.solid(e)
            }
        }),
        outline: Rr(e => {
            var t;
            return {
                container: (t = vi.variants) == null ? void 0 : t.outline(e)
            }
        })
    },
    GR = BR({
        variants: UR,
        baseStyle: WR,
        sizes: HR,
        defaultProps: {
            size: "md",
            variant: "subtle",
            colorScheme: "gray"
        }
    }),
    m0,
    KR = {
        ...(m0 = ee.baseStyle) == null ? void 0 : m0.field,
        paddingY: "2",
        minHeight: "20",
        lineHeight: "short",
        verticalAlign: "top"
    },
    g0,
    Dg,
    YR = {
        outline: e => {
            var n;
            var t;
            return (n = (t = ee.variants) == null ? void 0 : t.outline(e).field) != null ? n : {}
        },
        flushed: e => {
            var n;
            var t;
            return (n = (t = ee.variants) == null ? void 0 : t.flushed(e).field) != null ? n : {}
        },
        filled: e => {
            var n;
            var t;
            return (n = (t = ee.variants) == null ? void 0 : t.filled(e).field) != null ? n : {}
        },
        unstyled: (Dg = (g0 = ee.variants) == null ? void 0 : g0.unstyled.field) != null ? Dg : {}
    },
    v0,
    y0,
    S0,
    b0,
    Vg,
    jg,
    Wg,
    Hg,
    QR = {
        xs: (Vg = (v0 = ee.sizes) == null ? void 0 : v0.xs.field) != null ? Vg : {},
        sm: (jg = (y0 = ee.sizes) == null ? void 0 : y0.sm.field) != null ? jg : {},
        md: (Wg = (S0 = ee.sizes) == null ? void 0 : S0.md.field) != null ? Wg : {},
        lg: (Hg = (b0 = ee.sizes) == null ? void 0 : b0.lg.field) != null ? Hg : {}
    },
    XR = {
        baseStyle: KR,
        sizes: QR,
        variants: YR,
        defaultProps: {
            size: "md",
            variant: "outline"
        }
    },
    pc = ct("tooltip-bg"),
    x0 = ct("tooltip-fg"),
    qR = ct("popper-arrow-bg"),
    ZR = e => {
        const t = M("gray.700", "gray.300")(e),
            n = M("whiteAlpha.900", "gray.900")(e);
        return {
            bg: pc.reference,
            color: x0.reference,
            [pc.variable]: `colors.${t}`,
            [x0.variable]: `colors.${n}`,
            [qR.variable]: pc.reference,
            px: "2",
            py: "0.5",
            borderRadius: "sm",
            fontWeight: "medium",
            fontSize: "sm",
            boxShadow: "md",
            maxW: "xs",
            zIndex: "tooltip"
        }
    },
    JR = {
        baseStyle: ZR
    },
    eA = {
        Accordion: ST,
        Alert: ET,
        Avatar: OT,
        Badge: vi,
        Breadcrumb: YT,
        Button: rE,
        Checkbox: ul,
        CloseButton: pE,
        Code: vE,
        Container: SE,
        Divider: CE,
        Drawer: FE,
        Editable: jE,
        Form: YE,
        FormError: eP,
        FormLabel: nP,
        Heading: iP,
        Input: ee,
        Kbd: mP,
        Link: vP,
        List: wP,
        Menu: zP,
        Modal: WP,
        NumberInput: JP,
        PinInput: r3,
        Popover: m3,
        Progress: k3,
        Radio: P3,
        Select: F3,
        Skeleton: B3,
        SkipLink: V3,
        Slider: Z3,
        Spinner: tR,
        Stat: uR,
        Switch: gR,
        Table: kR,
        Tabs: OR,
        Tag: GR,
        Textarea: XR,
        Tooltip: JR
    },
    tA = {
        none: 0,
        "1px": "1px solid",
        "2px": "2px solid",
        "4px": "4px solid",
        "8px": "8px solid"
    },
    nA = tA,
    rA = {
        base: "0em",
        sm: "30em",
        md: "48em",
        lg: "62em",
        xl: "80em",
        "2xl": "96em"
    },
    oA = rA,
    iA = {
        transparent: "transparent",
        current: "currentColor",
        black: "#000000",
        white: "#FFFFFF",
        whiteAlpha: {
            50: "rgba(255, 255, 255, 0.04)",
            100: "rgba(255, 255, 255, 0.06)",
            200: "rgba(255, 255, 255, 0.08)",
            300: "rgba(255, 255, 255, 0.16)",
            400: "rgba(255, 255, 255, 0.24)",
            500: "rgba(255, 255, 255, 0.36)",
            600: "rgba(255, 255, 255, 0.48)",
            700: "rgba(255, 255, 255, 0.64)",
            800: "rgba(255, 255, 255, 0.80)",
            900: "rgba(255, 255, 255, 0.92)"
        },
        blackAlpha: {
            50: "rgba(0, 0, 0, 0.04)",
            100: "rgba(0, 0, 0, 0.06)",
            200: "rgba(0, 0, 0, 0.08)",
            300: "rgba(0, 0, 0, 0.16)",
            400: "rgba(0, 0, 0, 0.24)",
            500: "rgba(0, 0, 0, 0.36)",
            600: "rgba(0, 0, 0, 0.48)",
            700: "rgba(0, 0, 0, 0.64)",
            800: "rgba(0, 0, 0, 0.80)",
            900: "rgba(0, 0, 0, 0.92)"
        },
        gray: {
            50: "#F7FAFC",
            100: "#EDF2F7",
            200: "#E2E8F0",
            300: "#CBD5E0",
            400: "#A0AEC0",
            500: "#718096",
            600: "#4A5568",
            700: "#2D3748",
            800: "#1A202C",
            900: "#171923"
        },
        red: {
            50: "#FFF5F5",
            100: "#FED7D7",
            200: "#FEB2B2",
            300: "#FC8181",
            400: "#F56565",
            500: "#E53E3E",
            600: "#C53030",
            700: "#9B2C2C",
            800: "#822727",
            900: "#63171B"
        },
        orange: {
            50: "#FFFAF0",
            100: "#FEEBC8",
            200: "#FBD38D",
            300: "#F6AD55",
            400: "#ED8936",
            500: "#DD6B20",
            600: "#C05621",
            700: "#9C4221",
            800: "#7B341E",
            900: "#652B19"
        },
        yellow: {
            50: "#FFFFF0",
            100: "#FEFCBF",
            200: "#FAF089",
            300: "#F6E05E",
            400: "#ECC94B",
            500: "#D69E2E",
            600: "#B7791F",
            700: "#975A16",
            800: "#744210",
            900: "#5F370E"
        },
        green: {
            50: "#F0FFF4",
            100: "#C6F6D5",
            200: "#9AE6B4",
            300: "#68D391",
            400: "#48BB78",
            500: "#38A169",
            600: "#2F855A",
            700: "#276749",
            800: "#22543D",
            900: "#1C4532"
        },
        teal: {
            50: "#E6FFFA",
            100: "#B2F5EA",
            200: "#81E6D9",
            300: "#4FD1C5",
            400: "#38B2AC",
            500: "#319795",
            600: "#2C7A7B",
            700: "#285E61",
            800: "#234E52",
            900: "#1D4044"
        },
        blue: {
            50: "#ebf8ff",
            100: "#bee3f8",
            200: "#90cdf4",
            300: "#63b3ed",
            400: "#4299e1",
            500: "#3182ce",
            600: "#2b6cb0",
            700: "#2c5282",
            800: "#2a4365",
            900: "#1A365D"
        },
        cyan: {
            50: "#EDFDFD",
            100: "#C4F1F9",
            200: "#9DECF9",
            300: "#76E4F7",
            400: "#0BC5EA",
            500: "#00B5D8",
            600: "#00A3C4",
            700: "#0987A0",
            800: "#086F83",
            900: "#065666"
        },
        purple: {
            50: "#FAF5FF",
            100: "#E9D8FD",
            200: "#D6BCFA",
            300: "#B794F4",
            400: "#9F7AEA",
            500: "#805AD5",
            600: "#6B46C1",
            700: "#553C9A",
            800: "#44337A",
            900: "#322659"
        },
        pink: {
            50: "#FFF5F7",
            100: "#FED7E2",
            200: "#FBB6CE",
            300: "#F687B3",
            400: "#ED64A6",
            500: "#D53F8C",
            600: "#B83280",
            700: "#97266D",
            800: "#702459",
            900: "#521B41"
        },
        linkedin: {
            50: "#E8F4F9",
            100: "#CFEDFB",
            200: "#9BDAF3",
            300: "#68C7EC",
            400: "#34B3E4",
            500: "#00A0DC",
            600: "#008CC9",
            700: "#0077B5",
            800: "#005E93",
            900: "#004471"
        },
        facebook: {
            50: "#E8F4F9",
            100: "#D9DEE9",
            200: "#B7C2DA",
            300: "#6482C0",
            400: "#4267B2",
            500: "#385898",
            600: "#314E89",
            700: "#29487D",
            800: "#223B67",
            900: "#1E355B"
        },
        messenger: {
            50: "#D0E6FF",
            100: "#B9DAFF",
            200: "#A2CDFF",
            300: "#7AB8FF",
            400: "#2E90FF",
            500: "#0078FF",
            600: "#0063D1",
            700: "#0052AC",
            800: "#003C7E",
            900: "#002C5C"
        },
        whatsapp: {
            50: "#dffeec",
            100: "#b9f5d0",
            200: "#90edb3",
            300: "#65e495",
            400: "#3cdd78",
            500: "#22c35e",
            600: "#179848",
            700: "#0c6c33",
            800: "#01421c",
            900: "#001803"
        },
        twitter: {
            50: "#E5F4FD",
            100: "#C8E9FB",
            200: "#A8DCFA",
            300: "#83CDF7",
            400: "#57BBF5",
            500: "#1DA1F2",
            600: "#1A94DA",
            700: "#1681BF",
            800: "#136B9E",
            900: "#0D4D71"
        },
        telegram: {
            50: "#E3F2F9",
            100: "#C5E4F3",
            200: "#A2D4EC",
            300: "#7AC1E4",
            400: "#47A9DA",
            500: "#0088CC",
            600: "#007AB8",
            700: "#006BA1",
            800: "#005885",
            900: "#003F5E"
        }
    },
    aA = iA,
    sA = {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px"
    },
    lA = sA,
    uA = {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
        inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
        none: "none",
        "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
    },
    cA = uA,
    dA = {
        common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
        colors: "background-color, border-color, color, fill, stroke",
        dimensions: "width, height",
        position: "left, right, top, bottom",
        background: "background-color, background-image, background-position"
    },
    fA = {
        "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    pA = {
        "ultra-fast": "50ms",
        faster: "100ms",
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
        slower: "400ms",
        "ultra-slow": "500ms"
    },
    hA = {
        property: dA,
        easing: fA,
        duration: pA
    },
    mA = hA,
    gA = {
        hide: -1,
        auto: "auto",
        base: 0,
        docked: 10,
        dropdown: 1e3,
        sticky: 1100,
        banner: 1200,
        overlay: 1300,
        modal: 1400,
        popover: 1500,
        skipLink: 1600,
        toast: 1700,
        tooltip: 1800
    },
    vA = gA,
    yA = {
        none: 0,
        sm: "4px",
        base: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px"
    },
    SA = yA,
    bA = {
        breakpoints: oA,
        zIndices: vA,
        radii: lA,
        blur: SA,
        colors: aA,
        ...W1,
        sizes: D1,
        shadows: cA,
        space: B1,
        borders: nA,
        transition: mA
    },
    xA = {
        colors: {
            "chakra-body-text": {
                _light: "gray.800",
                _dark: "whiteAlpha.900"
            },
            "chakra-body-bg": {
                _light: "white",
                _dark: "gray.800"
            },
            "chakra-border-color": {
                _light: "gray.200",
                _dark: "whiteAlpha.300"
            },
            "chakra-placeholder-color": {
                _light: "gray.500",
                _dark: "whiteAlpha.400"
            }
        }
    },
    wA = {
        global: {
            body: {
                fontFamily: "body",
                color: "chakra-body-text",
                bg: "chakra-body-bg",
                transitionProperty: "background-color",
                transitionDuration: "normal",
                lineHeight: "base"
            },
            "*::placeholder": {
                color: "chakra-placeholder-color"
            },
            "*, *::before, &::after": {
                borderColor: "chakra-border-color",
                wordWrap: "break-word"
            }
        }
    };
function kA(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !Array.isArray(e)
}
var CA = ["borders", "breakpoints", "colors", "components", "config", "direction", "fonts", "fontSizes", "fontWeights", "letterSpacings", "lineHeights", "radii", "shadows", "sizes", "space", "styles", "transition", "zIndices"];
function _A(e) {
    return kA(e) ? CA.every(t => Object.prototype.hasOwnProperty.call(e, t)) : !1
}
var TA = "ltr",
    EA = {
        useSystemColorMode: !1,
        initialColorMode: "light",
        cssVarPrefix: "chakra"
    },
    K1 = {
        semanticTokens: xA,
        direction: TA,
        ...bA,
        components: eA,
        styles: wA,
        config: EA
    };
function ai(e) {
    return typeof e == "function"
}
function PA(...e) {
    return t => e.reduce((n, r) => r(n), t)
}
function RA(...e) {
    let t = [...e],
        n = e[e.length - 1];
    return _A(n) && t.length > 1 ? t = t.slice(0, t.length - 1) : n = K1, PA(...t.map(r => o => ai(r) ? r(o) : AA(o, r)))(n)
}
function AA(...e) {
    return zt({}, ...e, Y1)
}
function Y1(e, t, n, r) {
    if ((ai(e) || ai(t)) && Object.prototype.hasOwnProperty.call(r, n))
        return (...o) => {
            const i = ai(e) ? e(...o) : e,
                a = ai(t) ? t(...o) : t;
            return zt({}, i, a, Y1)
        }
}
var MA = typeof Element < "u",
    zA = typeof Map == "function",
    IA = typeof Set == "function",
    LA = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Rs(e, t) {
    if (e === t)
        return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor)
            return !1;
        var n,
            r,
            o;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (!Rs(e[r], t[r]))
                    return !1;
            return !0
        }
        var i;
        if (zA && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!Rs(r.value[1], t.get(r.value[0])))
                    return !1;
            return !0
        }
        if (IA && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size)
                return !1;
            for (i = e.entries(); !(r = i.next()).done;)
                if (!t.has(r.value[0]))
                    return !1;
            return !0
        }
        if (LA && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length)
                return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
        if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, o[r]))
                return !1;
        if (MA && e instanceof Element)
            return !1;
        for (r = n; r-- !== 0;)
            if (!((o[r] === "_owner" || o[r] === "__v" || o[r] === "__o") && e.$$typeof) && !Rs(e[o[r]], t[o[r]]))
                return !1;
        return !0
    }
    return e !== e && t !== t
}
var FA = function(t, n) {
    try {
        return Rs(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i))
            return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
function Q1() {
    const e = k.exports.useContext(Zi);
    if (!e)
        throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");
    return e
}
function NA() {
    const e = jl(),
        t = Q1();
    return {
        ...e,
        theme: t
    }
}
function $A(e, t, n) {
    var o,
        i;
    if (t == null)
        return t;
    const r = a => {
        var s,
            l;
        return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[a]
    };
    return (i = (o = r(t)) != null ? o : r(n)) != null ? i : n
}
function OA(e, t, n) {
    var o,
        i;
    if (t == null)
        return t;
    const r = a => {
        var s,
            l;
        return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null ? void 0 : l.value
    };
    return (i = (o = r(t)) != null ? o : r(n)) != null ? i : n
}
function BA(e, t, n) {
    const r = Array.isArray(t) ? t : [t],
        o = Array.isArray(n) ? n : [n];
    return i => {
        const a = o.filter(Boolean),
            s = r.map((l, u) => {
                var d,
                    f;
                if (e === "breakpoints")
                    return $A(i, l, (d = a[u]) != null ? d : l);
                const c = `${e}.${l}`;
                return OA(i, c, (f = a[u]) != null ? f : l)
            });
        return Array.isArray(t) ? s : s[0]
    }
}
function DA(e) {
    const {cssVarsRoot: t, theme: n, children: r} = e,
        o = k.exports.useMemo(() => WC(n), [n]);
    return Te(Q_, {
        theme: o,
        children: [P(VA, {
            root: t
        }), r]
    })
}
function VA({root: e=":host, :root"}) {
    const t = [e, "[data-theme]"].join(",");
    return P(ou, {
        styles: n => ({
            [t]: n.__cssVars
        })
    })
}
n5({
    name: "StylesContext",
    errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function jA() {
    const {colorMode: e} = jl();
    return P(ou, {
        styles: t => {
            const n = P1(t, "styles.global"),
                r = M1(n, {
                    theme: t,
                    colorMode: e
                });
            return r ? u1(r)(t) : void 0
        }
    })
}
var WA = new Set([...HC, "textStyle", "layerStyle", "apply", "noOfLines", "focusBorderColor", "errorBorderColor", "as", "__css", "css", "sx"]),
    HA = new Set(["htmlWidth", "htmlHeight", "htmlSize"]);
function UA(e) {
    return HA.has(e) || !WA.has(e)
}
var GA = ({baseStyle: e}) => t => {
    const {theme: n, css: r, __css: o, sx: i, ...a} = t,
        s = R1(a, (d, f) => GC(f)),
        l = M1(e, t),
        u = Object.assign({}, o, l, A1(s), i),
        c = u1(u)(t.theme);
    return r ? [c, r] : c
};
function hc(e, t) {
    const {baseStyle: n, ...r} = t != null ? t : {};
    r.shouldForwardProp || (r.shouldForwardProp = UA);
    const o = GA({
            baseStyle: n
        }),
        i = Rd(e, r)(o);
    return D.forwardRef(function(l, u) {
        const {colorMode: c, forced: d} = jl();
        return D.createElement(i, {
            ref: u,
            "data-theme": d ? c : void 0,
            ...l
        })
    })
}
function W(e) {
    return k.exports.forwardRef(e)
}
function X1(e, t={}) {
    var c;
    const {styleConfig: n, ...r} = t,
        {theme: o, colorMode: i} = NA(),
        a = e ? P1(o, `components.${e}`) : void 0,
        s = n || a,
        l = zt({
            theme: o,
            colorMode: i
        }, (c = s == null ? void 0 : s.defaultProps) != null ? c : {}, A1(J_(r, ["children"]))),
        u = k.exports.useRef({});
    if (s) {
        const f = n_(s)(l);
        FA(u.current, f) || (u.current = f)
    }
    return u.current
}
function Tt(e, t={}) {
    return X1(e, t)
}
function No(e, t={}) {
    return X1(e, t)
}
function KA() {
    const e = new Map;
    return new Proxy(hc, {
        apply(t, n, r) {
            return hc(...r)
        },
        get(t, n) {
            return e.has(n) || e.set(n, hc(n)), e.get(n)
        }
    })
}
var H = KA();
function YA(e, t) {
    return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`
}
function fn(e={}) {
    const {name: t, strict: n=!0, hookName: r="useContext", providerName: o="Provider", errorMessage: i} = e,
        a = k.exports.createContext(void 0);
    a.displayName = t;
    function s() {
        var l;
        const u = k.exports.useContext(a);
        if (!u && n) {
            const c = new Error(i != null ? i : YA(r, o));
            throw c.name = "ContextError", (l = Error.captureStackTrace) == null || l.call(Error, c, s), c
        }
        return u
    }
    return [a.Provider, s, a]
}
function QA(e, t) {
    if (e != null) {
        if (typeof e == "function") {
            e(t);
            return
        }
        try {
            e.current = t
        } catch {
            throw new Error(`Cannot assign value '${t}' to ref '${e}'`)
        }
    }
}
function Fd(...e) {
    return t => {
        e.forEach(n => {
            QA(n, t)
        })
    }
}
function XA(...e) {
    return k.exports.useMemo(() => Fd(...e), e)
}
var Ee = (...e) => e.filter(Boolean).join(" "),
    w0 = {
        path: Te("g", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [P("path", {
                strokeLinecap: "round",
                fill: "none",
                d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
            }), P("path", {
                fill: "currentColor",
                strokeLinecap: "round",
                d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
            }), P("circle", {
                fill: "none",
                strokeMiterlimit: "10",
                cx: "12",
                cy: "12",
                r: "11.25"
            })]
        }),
        viewBox: "0 0 24 24"
    },
    Or = W((e, t) => {
        const {as: n, viewBox: r, color: o="currentColor", focusable: i=!1, children: a, className: s, __css: l, ...u} = e,
            c = Ee("chakra-icon", s),
            d = {
                w: "1em",
                h: "1em",
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: 0,
                color: o,
                ...l
            },
            f = {
                ref: t,
                focusable: i,
                className: c,
                __css: d
            },
            h = r != null ? r : w0.viewBox;
        if (n && typeof n != "string")
            return D.createElement(H.svg, {
                as: n,
                ...f,
                ...u
            });
        const y = a != null ? a : w0.path;
        return D.createElement(H.svg, {
            verticalAlign: "middle",
            viewBox: h,
            ...f,
            ...u
        }, y)
    });
Or.displayName = "Icon";
function qA(e, t=[]) {
    const n = k.exports.useRef(e);
    return k.exports.useEffect(() => {
        n.current = e
    }), k.exports.useCallback((...r) => {
        var o;
        return (o = n.current) == null ? void 0 : o.call(n, ...r)
    }, t)
}
const mp = k.exports.createContext({
        transformPagePoint: e => e,
        isStatic: !1,
        reducedMotion: "never"
    }),
    su = k.exports.createContext({});
function ZA() {
    return k.exports.useContext(su).visualElement
}
const $o = k.exports.createContext(null),
    Br = typeof document < "u",
    dl = Br ? k.exports.useLayoutEffect : k.exports.useEffect,
    q1 = k.exports.createContext({
        strict: !1
    });
function JA(e, t, n, r) {
    const o = ZA(),
        i = k.exports.useContext(q1),
        a = k.exports.useContext($o),
        s = k.exports.useContext(mp).reducedMotion,
        l = k.exports.useRef(void 0);
    r = r || i.renderer,
    !l.current && r && (l.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceId: a ? a.id : void 0,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: s
    }));
    const u = l.current;
    return dl(() => {
        u && u.syncRender()
    }), k.exports.useEffect(() => {
        u && u.animationState && u.animationState.animateChanges()
    }), dl(() => () => u && u.notifyUnmount(), []), u
}
function ao(e) {
    return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function e4(e, t, n) {
    return k.exports.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : ao(n) && (n.current = r))
    }, [t])
}
function ta(e) {
    return typeof e == "string" || Array.isArray(e)
}
function lu(e) {
    return typeof e == "object" && typeof e.start == "function"
}
const t4 = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
function uu(e) {
    return lu(e.animate) || t4.some(t => ta(e[t]))
}
function Z1(e) {
    return Boolean(uu(e) || e.variants)
}
function n4(e, t) {
    if (uu(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ta(n) ? n : void 0,
            animate: ta(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function r4(e) {
    const {initial: t, animate: n} = n4(e, k.exports.useContext(su));
    return k.exports.useMemo(() => ({
        initial: t,
        animate: n
    }), [k0(t), k0(n)])
}
function k0(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const yn = e => ({
        isEnabled: t => e.some(n => !!t[n])
    }),
    na = {
        measureLayout: yn(["layout", "layoutId", "drag"]),
        animation: yn(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
        exit: yn(["exit"]),
        drag: yn(["drag", "dragControls"]),
        focus: yn(["whileFocus"]),
        hover: yn(["whileHover", "onHoverStart", "onHoverEnd"]),
        tap: yn(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
        pan: yn(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
        inView: yn(["whileInView", "onViewportEnter", "onViewportLeave"])
    };
function o4(e) {
    for (const t in e)
        t === "projectionNodeConstructor" ? na.projectionNodeConstructor = e[t] : na[t].Component = e[t]
}
function cu(e) {
    const t = k.exports.useRef(null);
    return t.current === null && (t.current = e()), t.current
}
const xi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
let i4 = 1;
function a4() {
    return cu(() => {
        if (xi.hasEverUpdated)
            return i4++
    })
}
const gp = k.exports.createContext({});
class s4 extends D.Component {
    getSnapshotBeforeUpdate()
    {
        const {visualElement: t, props: n} = this.props;
        return t && t.setProps(n), null
    }
    componentDidUpdate() {}
    render()
    {
        return this.props.children
    }
}
const J1 = k.exports.createContext({}),
    l4 = Symbol.for("motionComponentSymbol");
function u4({preloadedFeatures: e, createVisualElement: t, projectionNodeConstructor: n, useRender: r, useVisualState: o, Component: i}) {
    e && o4(e);
    function a(l, u) {
        const c = {
                ...k.exports.useContext(mp),
                ...l,
                layoutId: c4(l)
            },
            {isStatic: d} = c;
        let f = null;
        const h = r4(l),
            y = d ? void 0 : a4(),
            S = o(l, d);
        if (!d && Br) {
            h.visualElement = JA(i, S, c, t);
            const C = k.exports.useContext(q1).strict,
                g = k.exports.useContext(J1);
            h.visualElement && (f = h.visualElement.loadFeatures(c, C, e, y, n || na.projectionNodeConstructor, g))
        }
        return Te(s4, {
            visualElement: h.visualElement,
            props: c,
            children: [f, P(su.Provider, {
                value: h,
                children: r(i, l, y, e4(S, h.visualElement, u), S, d, h.visualElement)
            })]
        })
    }
    const s = k.exports.forwardRef(a);
    return s[l4] = i, s
}
function c4({layoutId: e}) {
    const t = k.exports.useContext(gp).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function d4(e) {
    function t(r, o={}) {
        return u4(e(r, o))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t, {
        get: (r, o) => (n.has(o) || n.set(o, t(o)), n.get(o))
    })
}
const f4 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];
function vp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(f4.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const fl = {};
function p4(e) {
    Object.assign(fl, e)
}
const pl = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
    va = new Set(pl);
function eS(e, {layout: t, layoutId: n}) {
    return va.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!fl[e] || e === "opacity")
}
const Yt = e => !!(e != null && e.getVelocity),
    h4 = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective"
    },
    m4 = (e, t) => pl.indexOf(e) - pl.indexOf(t);
function g4({transform: e, transformKeys: t}, {enableHardwareAcceleration: n=!0, allowTransformNone: r=!0}, o, i) {
    let a = "";
    t.sort(m4);
    for (const s of t)
        a += `${h4[s] || s}(${e[s]}) `;
    return n && !e.z && (a += "translateZ(0)"), a = a.trim(), i ? a = i(e, o ? "" : a) : r && o && (a = "none"), a
}
function tS(e) {
    return e.startsWith("--")
}
const v4 = (e, t) => t && typeof e == "number" ? t.transform(e) : e,
    nS = (e, t) => n => Math.max(Math.min(n, t), e),
    wi = e => e % 1 ? Number(e.toFixed(5)) : e,
    ra = /(-)?([\d]*\.?[\d])+/g,
    Nd = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    y4 = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ya(e) {
    return typeof e == "string"
}
const Dr = {
        test: e => typeof e == "number",
        parse: parseFloat,
        transform: e => e
    },
    ki = Object.assign(Object.assign({}, Dr), {
        transform: nS(0, 1)
    }),
    rs = Object.assign(Object.assign({}, Dr), {
        default: 1
    }),
    Sa = e => ({
        test: t => ya(t) && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: t => `${t}${e}`
    }),
    On = Sa("deg"),
    dn = Sa("%"),
    U = Sa("px"),
    S4 = Sa("vh"),
    b4 = Sa("vw"),
    C0 = Object.assign(Object.assign({}, dn), {
        parse: e => dn.parse(e) / 100,
        transform: e => dn.transform(e * 100)
    }),
    yp = (e, t) => n => Boolean(ya(n) && y4.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)),
    rS = (e, t, n) => r => {
        if (!ya(r))
            return r;
        const [o, i, a, s] = r.match(ra);
        return {
            [e]: parseFloat(o),
            [t]: parseFloat(i),
            [n]: parseFloat(a),
            alpha: s !== void 0 ? parseFloat(s) : 1
        }
    },
    _r = {
        test: yp("hsl", "hue"),
        parse: rS("hue", "saturation", "lightness"),
        transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + dn.transform(wi(t)) + ", " + dn.transform(wi(n)) + ", " + wi(ki.transform(r)) + ")"
    },
    x4 = nS(0, 255),
    mc = Object.assign(Object.assign({}, Dr), {
        transform: e => Math.round(x4(e))
    }),
    Kn = {
        test: yp("rgb", "red"),
        parse: rS("red", "green", "blue"),
        transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + mc.transform(e) + ", " + mc.transform(t) + ", " + mc.transform(n) + ", " + wi(ki.transform(r)) + ")"
    };
function w4(e) {
    let t = "",
        n = "",
        r = "",
        o = "";
    return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), o = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), o = e.substr(4, 1), t += t, n += n, r += r, o += o), {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: o ? parseInt(o, 16) / 255 : 1
    }
}
const $d = {
        test: yp("#"),
        parse: w4,
        transform: Kn.transform
    },
    qe = {
        test: e => Kn.test(e) || $d.test(e) || _r.test(e),
        parse: e => Kn.test(e) ? Kn.parse(e) : _r.test(e) ? _r.parse(e) : $d.parse(e),
        transform: e => ya(e) ? e : e.hasOwnProperty("red") ? Kn.transform(e) : _r.transform(e)
    },
    oS = "${c}",
    iS = "${n}";
function k4(e) {
    var t,
        n,
        r,
        o;
    return isNaN(e) && ya(e) && ((n = (t = e.match(ra)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((o = (r = e.match(Nd)) === null || r === void 0 ? void 0 : r.length) !== null && o !== void 0 ? o : 0) > 0
}
function aS(e) {
    typeof e == "number" && (e = `${e}`);
    const t = [];
    let n = 0;
    const r = e.match(Nd);
    r && (n = r.length, e = e.replace(Nd, oS), t.push(...r.map(qe.parse)));
    const o = e.match(ra);
    return o && (e = e.replace(ra, iS), t.push(...o.map(Dr.parse))), {
        values: t,
        numColors: n,
        tokenised: e
    }
}
function sS(e) {
    return aS(e).values
}
function lS(e) {
    const {values: t, numColors: n, tokenised: r} = aS(e),
        o = t.length;
    return i => {
        let a = r;
        for (let s = 0; s < o; s++)
            a = a.replace(s < n ? oS : iS, s < n ? qe.transform(i[s]) : wi(i[s]));
        return a
    }
}
const C4 = e => typeof e == "number" ? 0 : e;
function _4(e) {
    const t = sS(e);
    return lS(e)(t.map(C4))
}
const Mn = {
        test: k4,
        parse: sS,
        createTransformer: lS,
        getAnimatableNone: _4
    },
    T4 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function E4(e) {
    let [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(ra) || [];
    if (!r)
        return e;
    const o = n.replace(r, "");
    let i = T4.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + o + ")"
}
const P4 = /([a-z-]*)\(.*?\)/g,
    Od = Object.assign(Object.assign({}, Mn), {
        getAnimatableNone: e => {
            const t = e.match(P4);
            return t ? t.map(E4).join(" ") : e
        }
    }),
    _0 = {
        ...Dr,
        transform: Math.round
    },
    uS = {
        borderWidth: U,
        borderTopWidth: U,
        borderRightWidth: U,
        borderBottomWidth: U,
        borderLeftWidth: U,
        borderRadius: U,
        radius: U,
        borderTopLeftRadius: U,
        borderTopRightRadius: U,
        borderBottomRightRadius: U,
        borderBottomLeftRadius: U,
        width: U,
        maxWidth: U,
        height: U,
        maxHeight: U,
        size: U,
        top: U,
        right: U,
        bottom: U,
        left: U,
        padding: U,
        paddingTop: U,
        paddingRight: U,
        paddingBottom: U,
        paddingLeft: U,
        margin: U,
        marginTop: U,
        marginRight: U,
        marginBottom: U,
        marginLeft: U,
        rotate: On,
        rotateX: On,
        rotateY: On,
        rotateZ: On,
        scale: rs,
        scaleX: rs,
        scaleY: rs,
        scaleZ: rs,
        skew: On,
        skewX: On,
        skewY: On,
        distance: U,
        translateX: U,
        translateY: U,
        translateZ: U,
        x: U,
        y: U,
        z: U,
        perspective: U,
        transformPerspective: U,
        opacity: ki,
        originX: C0,
        originY: C0,
        originZ: U,
        zIndex: _0,
        fillOpacity: ki,
        strokeOpacity: ki,
        numOctaves: _0
    };
function Sp(e, t, n, r) {
    const {style: o, vars: i, transform: a, transformKeys: s, transformOrigin: l} = e;
    s.length = 0;
    let u = !1,
        c = !1,
        d = !0;
    for (const f in t) {
        const h = t[f];
        if (tS(f)) {
            i[f] = h;
            continue
        }
        const y = uS[f],
            S = v4(h, y);
        if (va.has(f)) {
            if (u = !0, a[f] = S, s.push(f), !d)
                continue;
            h !== (y.default || 0) && (d = !1)
        } else
            f.startsWith("origin") ? (c = !0, l[f] = S) : o[f] = S
    }
    if (t.transform || (u || r ? o.transform = g4(e, n, d, r) : o.transform && (o.transform = "none")), c) {
        const {originX: f="50%", originY: h="50%", originZ: y=0} = l;
        o.transformOrigin = `${f} ${h} ${y}`
    }
}
const bp = () => ({
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
});
function cS(e, t, n) {
    for (const r in t)
        !Yt(t[r]) && !eS(r, n) && (e[r] = t[r])
}
function R4({transformTemplate: e}, t, n) {
    return k.exports.useMemo(() => {
        const r = bp();
        return Sp(r, t, {
            enableHardwareAcceleration: !n
        }, e), Object.assign({}, r.vars, r.style)
    }, [t])
}
function A4(e, t, n) {
    const r = e.style || {},
        o = {};
    return cS(o, r, e), Object.assign(o, R4(e, t, n)), e.transformValues ? e.transformValues(o) : o
}
function M4(e, t, n) {
    const r = {},
        o = A4(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), r.style = o, r
}
const z4 = ["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"],
    I4 = ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    L4 = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    F4 = ["whileInView", "onViewportEnter", "onViewportLeave", "viewport"],
    N4 = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", ...F4, ...I4, ...z4, ...L4]);
function hl(e) {
    return N4.has(e)
}
let dS = e => !hl(e);
function $4(e) {
    !e || (dS = t => t.startsWith("on") ? !hl(t) : e(t))
}
try {
    $4(require("@emotion/is-prop-valid").default)
} catch {}
function O4(e, t, n) {
    const r = {};
    for (const o in e)
        (dS(o) || n === !0 && hl(o) || !t && !hl(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
    return r
}
function T0(e, t, n) {
    return typeof e == "string" ? e : U.transform(t + n * e)
}
function B4(e, t, n) {
    const r = T0(t, e.x, e.width),
        o = T0(n, e.y, e.height);
    return `${r} ${o}`
}
const D4 = {
        offset: "stroke-dashoffset",
        array: "stroke-dasharray"
    },
    V4 = {
        offset: "strokeDashoffset",
        array: "strokeDasharray"
    };
function j4(e, t, n=1, r=0, o=!0) {
    e.pathLength = 1;
    const i = o ? D4 : V4;
    e[i.offset] = U.transform(-r);
    const a = U.transform(t),
        s = U.transform(n);
    e[i.array] = `${a} ${s}`
}
function xp(e, {attrX: t, attrY: n, originX: r, originY: o, pathLength: i, pathSpacing: a=1, pathOffset: s=0, ...l}, u, c) {
    Sp(e, l, u, c),
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: f, dimensions: h} = e;
    d.transform && (h && (f.transform = d.transform), delete d.transform),
    h && (r !== void 0 || o !== void 0 || f.transform) && (f.transformOrigin = B4(h, r !== void 0 ? r : .5, o !== void 0 ? o : .5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    i !== void 0 && j4(d, i, a, s, !1)
}
const fS = () => ({
    ...bp(),
    attrs: {}
});
function W4(e, t) {
    const n = k.exports.useMemo(() => {
        const r = fS();
        return xp(r, t, {
            enableHardwareAcceleration: !1
        }, e.transformTemplate), {
            ...r.attrs,
            style: {
                ...r.style
            }
        }
    }, [t]);
    if (e.style) {
        const r = {};
        cS(r, e.style, e),
        n.style = {
            ...r,
            ...n.style
        }
    }
    return n
}
function H4(e=!1) {
    return (n, r, o, i, {latestValues: a}, s) => {
        const u = (vp(n) ? W4 : M4)(r, a, s),
            d = {
                ...O4(r, typeof n == "string", e),
                ...u,
                ref: i
            };
        return o && (d["data-projection-id"] = o), k.exports.createElement(n, d)
    }
}
const pS = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function hS(e, {style: t, vars: n}, r, o) {
    Object.assign(e.style, t, o && o.getProjectionStyles(r));
    for (const i in n)
        e.style.setProperty(i, n[i])
}
const mS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);
function gS(e, t, n, r) {
    hS(e, t, void 0, r);
    for (const o in t.attrs)
        e.setAttribute(mS.has(o) ? o : pS(o), t.attrs[o])
}
function wp(e) {
    const {style: t} = e,
        n = {};
    for (const r in t)
        (Yt(t[r]) || eS(r, e)) && (n[r] = t[r]);
    return n
}
function vS(e) {
    const t = wp(e);
    for (const n in e)
        if (Yt(e[n])) {
            const r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
            t[r] = e[n]
        }
    return t
}
function kp(e, t, n, r={}, o={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, o)), t
}
const oa = e => Array.isArray(e),
    U4 = e => Boolean(e && typeof e == "object" && e.mix && e.toValue),
    yS = e => oa(e) ? e[e.length - 1] || 0 : e;
function As(e) {
    const t = Yt(e) ? e.get() : e;
    return U4(t) ? t.toValue() : t
}
function G4({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, o, i) {
    const a = {
        latestValues: K4(r, o, i, e),
        renderState: t()
    };
    return n && (a.mount = s => n(r, s, a)), a
}
const SS = e => (t, n) => {
    const r = k.exports.useContext(su),
        o = k.exports.useContext($o),
        i = () => G4(e, t, r, o);
    return n ? i() : cu(i)
};
function K4(e, t, n, r) {
    const o = {},
        i = r(e);
    for (const f in i)
        o[f] = As(i[f]);
    let {initial: a, animate: s} = e;
    const l = uu(e),
        u = Z1(e);
    t && u && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || a === !1;
    const d = c ? s : a;
    return d && typeof d != "boolean" && !lu(d) && (Array.isArray(d) ? d : [d]).forEach(h => {
        const y = kp(e, h);
        if (!y)
            return;
        const {transitionEnd: S, transition: C, ...g} = y;
        for (const p in g) {
            let m = g[p];
            if (Array.isArray(m)) {
                const b = c ? m.length - 1 : 0;
                m = m[b]
            }
            m !== null && (o[p] = m)
        }
        for (const p in S)
            o[p] = S[p]
    }), o
}
const Y4 = {
        useVisualState: SS({
            scrapeMotionValuesFromProps: vS,
            createRenderState: fS,
            onMount: (e, t, {renderState: n, latestValues: r}) => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
                xp(n, r, {
                    enableHardwareAcceleration: !1
                }, e.transformTemplate),
                gS(t, n)
            }
        })
    },
    Q4 = {
        useVisualState: SS({
            scrapeMotionValuesFromProps: wp,
            createRenderState: bp
        })
    };
function X4(e, {forwardMotionProps: t=!1}, n, r, o) {
    return {
        ...vp(e) ? Y4 : Q4,
        preloadedFeatures: n,
        useRender: H4(t),
        createVisualElement: r,
        projectionNodeConstructor: o,
        Component: e
    }
}
var ae;
(function(e) {
    e.Animate = "animate",
    e.Hover = "whileHover",
    e.Tap = "whileTap",
    e.Drag = "whileDrag",
    e.Focus = "whileFocus",
    e.InView = "whileInView",
    e.Exit = "exit"
})(ae || (ae = {}));
function du(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
}
function Bd(e, t, n, r) {
    k.exports.useEffect(() => {
        const o = e.current;
        if (n && o)
            return du(o, t, n, r)
    }, [e, t, n, r])
}
function q4({whileFocus: e, visualElement: t}) {
    const {animationState: n} = t,
        r = () => {
            n && n.setActive(ae.Focus, !0)
        },
        o = () => {
            n && n.setActive(ae.Focus, !1)
        };
    Bd(t, "focus", e ? r : void 0),
    Bd(t, "blur", e ? o : void 0)
}
function bS(e) {
    return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent
}
function xS(e) {
    return !!e.touches
}
function Z4(e) {
    return t => {
        const n = t instanceof MouseEvent;
        (!n || n && t.button === 0) && e(t)
    }
}
const J4 = {
    pageX: 0,
    pageY: 0
};
function eM(e, t="page") {
    const r = e.touches[0] || e.changedTouches[0] || J4;
    return {
        x: r[t + "X"],
        y: r[t + "Y"]
    }
}
function tM(e, t="page") {
    return {
        x: e[t + "X"],
        y: e[t + "Y"]
    }
}
function Cp(e, t="page") {
    return {
        point: xS(e) ? eM(e, t) : tM(e, t)
    }
}
const wS = (e, t=!1) => {
        const n = r => e(r, Cp(r));
        return t ? Z4(n) : n
    },
    nM = () => Br && window.onpointerdown === null,
    rM = () => Br && window.ontouchstart === null,
    oM = () => Br && window.onmousedown === null,
    iM = {
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointercancel: "mousecancel",
        pointerover: "mouseover",
        pointerout: "mouseout",
        pointerenter: "mouseenter",
        pointerleave: "mouseleave"
    },
    aM = {
        pointerdown: "touchstart",
        pointermove: "touchmove",
        pointerup: "touchend",
        pointercancel: "touchcancel"
    };
function kS(e) {
    return nM() ? e : rM() ? aM[e] : oM() ? iM[e] : e
}
function So(e, t, n, r) {
    return du(e, kS(t), wS(n, t === "pointerdown"), r)
}
function ml(e, t, n, r) {
    return Bd(e, kS(t), n && wS(n, t === "pointerdown"), r)
}
function CS(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        };
        return t === null ? (t = e, n) : !1
    }
}
const E0 = CS("dragHorizontal"),
    P0 = CS("dragVertical");
function _S(e) {
    let t = !1;
    if (e === "y")
        t = P0();
    else if (e === "x")
        t = E0();
    else {
        const n = E0(),
            r = P0();
        n && r ? t = () => {
            n(),
            r()
        } : (n && n(), r && r())
    }
    return t
}
function TS() {
    const e = _S(!0);
    return e ? (e(), !1) : !0
}
function R0(e, t, n) {
    return (r, o) => {
        !bS(r) || TS() || (e.animationState && e.animationState.setActive(ae.Hover, t), n && n(r, o))
    }
}
function sM({onHoverStart: e, onHoverEnd: t, whileHover: n, visualElement: r}) {
    ml(r, "pointerenter", e || n ? R0(r, !0, e) : void 0, {
        passive: !e
    }),
    ml(r, "pointerleave", t || n ? R0(r, !1, t) : void 0, {
        passive: !t
    })
}
const ES = (e, t) => t ? e === t ? !0 : ES(e, t.parentElement) : !1;
function _p(e) {
    return k.exports.useEffect(() => () => e(), [])
}
function PS(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
var lM = function() {},
    gl = function() {};
const vl = (e, t, n) => Math.min(Math.max(n, e), t),
    gc = .001,
    uM = .01,
    A0 = 10,
    cM = .05,
    dM = 1;
function fM({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let o,
        i;
    lM(e <= A0 * 1e3);
    let a = 1 - t;
    a = vl(cM, dM, a),
    e = vl(uM, A0, e / 1e3),
    a < 1 ? (o = u => {
        const c = u * a,
            d = c * e,
            f = c - n,
            h = Dd(u, a),
            y = Math.exp(-d);
        return gc - f / h * y
    }, i = u => {
        const d = u * a * e,
            f = d * n + n,
            h = Math.pow(a, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-d),
            S = Dd(Math.pow(u, 2), a);
        return (-o(u) + gc > 0 ? -1 : 1) * ((f - h) * y) / S
    }) : (o = u => {
        const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
        return -gc + c * d
    }, i = u => {
        const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
        return c * d
    });
    const s = 5 / e,
        l = hM(o, i, s);
    if (e = e * 1e3, isNaN(l))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(l, 2) * r;
        return {
            stiffness: u,
            damping: a * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const pM = 12;
function hM(e, t, n) {
    let r = n;
    for (let o = 1; o < pM; o++)
        r = r - e(r) / t(r);
    return r
}
function Dd(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const mM = ["duration", "bounce"],
    gM = ["stiffness", "damping", "mass"];
function M0(e, t) {
    return t.some(n => e[n] !== void 0)
}
function vM(e) {
    let t = Object.assign({
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1
    }, e);
    if (!M0(e, gM) && M0(e, mM)) {
        const n = fM(e);
        t = Object.assign(Object.assign(Object.assign({}, t), n), {
            velocity: 0,
            mass: 1
        }),
        t.isResolvedFromDuration = !0
    }
    return t
}
function Tp(e) {
    var {from: t=0, to: n=1, restSpeed: r=2, restDelta: o} = e,
        i = PS(e, ["from", "to", "restSpeed", "restDelta"]);
    const a = {
        done: !1,
        value: t
    };
    let {stiffness: s, damping: l, mass: u, velocity: c, duration: d, isResolvedFromDuration: f} = vM(i),
        h = z0,
        y = z0;
    function S() {
        const C = c ? -(c / 1e3) : 0,
            g = n - t,
            p = l / (2 * Math.sqrt(s * u)),
            m = Math.sqrt(s / u) / 1e3;
        if (o === void 0 && (o = Math.min(Math.abs(n - t) / 100, .4)), p < 1) {
            const b = Dd(m, p);
            h = _ => {
                const R = Math.exp(-p * m * _);
                return n - R * ((C + p * m * g) / b * Math.sin(b * _) + g * Math.cos(b * _))
            },
            y = _ => {
                const R = Math.exp(-p * m * _);
                return p * m * R * (Math.sin(b * _) * (C + p * m * g) / b + g * Math.cos(b * _)) - R * (Math.cos(b * _) * (C + p * m * g) - b * g * Math.sin(b * _))
            }
        } else if (p === 1)
            h = b => n - Math.exp(-m * b) * (g + (C + m * g) * b);
        else {
            const b = m * Math.sqrt(p * p - 1);
            h = _ => {
                const R = Math.exp(-p * m * _),
                    E = Math.min(b * _, 300);
                return n - R * ((C + p * m * g) * Math.sinh(E) + b * g * Math.cosh(E)) / b
            }
        }
    }
    return S(), {
        next: C => {
            const g = h(C);
            if (f)
                a.done = C >= d;
            else {
                const p = y(C) * 1e3,
                    m = Math.abs(p) <= r,
                    b = Math.abs(n - g) <= o;
                a.done = m && b
            }
            return a.value = a.done ? n : g, a
        },
        flipTarget: () => {
            c = -c,
            [t, n] = [n, t],
            S()
        }
    }
}
Tp.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const z0 = e => 0,
    ia = (e, t, n) => {
        const r = t - e;
        return r === 0 ? 1 : (n - e) / r
    },
    xe = (e, t, n) => -n * e + n * t + e;
function vc(e, t, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function I0({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let o = 0,
        i = 0,
        a = 0;
    if (!t)
        o = i = a = n;
    else {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - s;
        o = vc(l, s, e + 1 / 3),
        i = vc(l, s, e),
        a = vc(l, s, e - 1 / 3)
    }
    return {
        red: Math.round(o * 255),
        green: Math.round(i * 255),
        blue: Math.round(a * 255),
        alpha: r
    }
}
const yM = (e, t, n) => {
        const r = e * e,
            o = t * t;
        return Math.sqrt(Math.max(0, n * (o - r) + r))
    },
    SM = [$d, Kn, _r],
    L0 = e => SM.find(t => t.test(e)),
    RS = (e, t) => {
        let n = L0(e),
            r = L0(t),
            o = n.parse(e),
            i = r.parse(t);
        n === _r && (o = I0(o), n = Kn),
        r === _r && (i = I0(i), r = Kn);
        const a = Object.assign({}, o);
        return s => {
            for (const l in a)
                l !== "alpha" && (a[l] = yM(o[l], i[l], s));
            return a.alpha = xe(o.alpha, i.alpha, s), n.transform(a)
        }
    },
    Vd = e => typeof e == "number",
    bM = (e, t) => n => t(e(n)),
    fu = (...e) => e.reduce(bM);
function AS(e, t) {
    return Vd(e) ? n => xe(e, t, n) : qe.test(e) ? RS(e, t) : zS(e, t)
}
const MS = (e, t) => {
        const n = [...e],
            r = n.length,
            o = e.map((i, a) => AS(i, t[a]));
        return i => {
            for (let a = 0; a < r; a++)
                n[a] = o[a](i);
            return n
        }
    },
    xM = (e, t) => {
        const n = Object.assign(Object.assign({}, e), t),
            r = {};
        for (const o in n)
            e[o] !== void 0 && t[o] !== void 0 && (r[o] = AS(e[o], t[o]));
        return o => {
            for (const i in r)
                n[i] = r[i](o);
            return n
        }
    };
function F0(e) {
    const t = Mn.parse(e),
        n = t.length;
    let r = 0,
        o = 0,
        i = 0;
    for (let a = 0; a < n; a++)
        r || typeof t[a] == "number" ? r++ : t[a].hue !== void 0 ? i++ : o++;
    return {
        parsed: t,
        numNumbers: r,
        numRGB: o,
        numHSL: i
    }
}
const zS = (e, t) => {
        const n = Mn.createTransformer(t),
            r = F0(e),
            o = F0(t);
        return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? fu(MS(r.parsed, o.parsed), n) : a => `${a > 0 ? t : e}`
    },
    wM = (e, t) => n => xe(e, t, n);
function kM(e) {
    if (typeof e == "number")
        return wM;
    if (typeof e == "string")
        return qe.test(e) ? RS : zS;
    if (Array.isArray(e))
        return MS;
    if (typeof e == "object")
        return xM
}
function CM(e, t, n) {
    const r = [],
        o = n || kM(e[0]),
        i = e.length - 1;
    for (let a = 0; a < i; a++) {
        let s = o(e[a], e[a + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[a] : t;
            s = fu(l, s)
        }
        r.push(s)
    }
    return r
}
function _M([e, t], [n]) {
    return r => n(ia(e, t, r))
}
function TM(e, t) {
    const n = e.length,
        r = n - 1;
    return o => {
        let i = 0,
            a = !1;
        if (o <= e[0] ? a = !0 : o >= e[r] && (i = r - 1, a = !0), !a) {
            let l = 1;
            for (; l < n && !(e[l] > o || l === r); l++)
                ;
            i = l - 1
        }
        const s = ia(e[i], e[i + 1], o);
        return t[i](s)
    }
}
function IS(e, t, {clamp: n=!0, ease: r, mixer: o}={}) {
    const i = e.length;
    gl(i === t.length),
    gl(!r || !Array.isArray(r) || r.length === i - 1),
    e[0] > e[i - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
    const a = CM(t, r, o),
        s = i === 2 ? _M(e, a) : TM(e, a);
    return n ? l => s(vl(e[0], e[i - 1], l)) : s
}
const pu = e => t => 1 - e(1 - t),
    Ep = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    EM = e => t => Math.pow(t, e),
    LS = e => t => t * t * ((e + 1) * t - e),
    PM = e => {
        const t = LS(e);
        return n => (n *= 2) < 1 ? .5 * t(n) : .5 * (2 - Math.pow(2, -10 * (n - 1)))
    },
    FS = 1.525,
    RM = 4 / 11,
    AM = 8 / 11,
    MM = 9 / 10,
    Pp = e => e,
    Rp = EM(2),
    zM = pu(Rp),
    NS = Ep(Rp),
    $S = e => 1 - Math.sin(Math.acos(e)),
    Ap = pu($S),
    IM = Ep(Ap),
    Mp = LS(FS),
    LM = pu(Mp),
    FM = Ep(Mp),
    NM = PM(FS),
    $M = 4356 / 361,
    OM = 35442 / 1805,
    BM = 16061 / 1805,
    yl = e => {
        if (e === 1 || e === 0)
            return e;
        const t = e * e;
        return e < RM ? 7.5625 * t : e < AM ? 9.075 * t - 9.9 * e + 3.4 : e < MM ? $M * t - OM * e + BM : 10.8 * e * e - 20.52 * e + 10.72
    },
    DM = pu(yl),
    VM = e => e < .5 ? .5 * (1 - yl(1 - e * 2)) : .5 * yl(e * 2 - 1) + .5;
function jM(e, t) {
    return e.map(() => t || NS).splice(0, e.length - 1)
}
function WM(e) {
    const t = e.length;
    return e.map((n, r) => r !== 0 ? r / (t - 1) : 0)
}
function HM(e, t) {
    return e.map(n => n * t)
}
function Ms({from: e=0, to: t=1, ease: n, offset: r, duration: o=300}) {
    const i = {
            done: !1,
            value: e
        },
        a = Array.isArray(t) ? t : [e, t],
        s = HM(r && r.length === a.length ? r : WM(a), o);
    function l() {
        return IS(s, a, {
            ease: Array.isArray(n) ? n : jM(a, n)
        })
    }
    let u = l();
    return {
        next: c => (i.value = u(c), i.done = c >= o, i),
        flipTarget: () => {
            a.reverse(),
            u = l()
        }
    }
}
function UM({velocity: e=0, from: t=0, power: n=.8, timeConstant: r=350, restDelta: o=.5, modifyTarget: i}) {
    const a = {
        done: !1,
        value: t
    };
    let s = n * e;
    const l = t + s,
        u = i === void 0 ? l : i(l);
    return u !== l && (s = u - t), {
        next: c => {
            const d = -s * Math.exp(-c / r);
            return a.done = !(d > o || d < -o), a.value = a.done ? u : u + d, a
        },
        flipTarget: () => {}
    }
}
const N0 = {
    keyframes: Ms,
    spring: Tp,
    decay: UM
};
function GM(e) {
    if (Array.isArray(e.to))
        return Ms;
    if (N0[e.type])
        return N0[e.type];
    const t = new Set(Object.keys(e));
    return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Ms : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Tp : Ms
}
const OS = 1 / 60 * 1e3,
    KM = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    BS = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(KM()), OS);
function YM(e) {
    let t = [],
        n = [],
        r = 0,
        o = !1,
        i = !1;
    const a = new WeakSet,
        s = {
            schedule: (l, u=!1, c=!1) => {
                const d = c && o,
                    f = d ? t : n;
                return u && a.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)), l
            },
            cancel: l => {
                const u = n.indexOf(l);
                u !== -1 && n.splice(u, 1),
                a.delete(l)
            },
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(l),
                        a.has(c) && (s.schedule(c), e())
                    }
                o = !1,
                i && (i = !1, s.process(l))
            }
        };
    return s
}
const QM = 40;
let jd = !0,
    aa = !1,
    Wd = !1;
const bo = {
        delta: 0,
        timestamp: 0
    },
    ba = ["read", "update", "preRender", "render", "postRender"],
    hu = ba.reduce((e, t) => (e[t] = YM(() => aa = !0), e), {}),
    XM = ba.reduce((e, t) => {
        const n = hu[t];
        return e[t] = (r, o=!1, i=!1) => (aa || JM(), n.schedule(r, o, i)), e
    }, {}),
    qM = ba.reduce((e, t) => (e[t] = hu[t].cancel, e), {});
ba.reduce((e, t) => (e[t] = () => hu[t].process(bo), e), {});
const ZM = e => hu[e].process(bo),
    DS = e => {
        aa = !1,
        bo.delta = jd ? OS : Math.max(Math.min(e - bo.timestamp, QM), 1),
        bo.timestamp = e,
        Wd = !0,
        ba.forEach(ZM),
        Wd = !1,
        aa && (jd = !1, BS(DS))
    },
    JM = () => {
        aa = !0,
        jd = !0,
        Wd || BS(DS)
    },
    e6 = () => bo;
function VS(e, t, n=0) {
    return e - t - n
}
function t6(e, t, n=0, r=!0) {
    return r ? VS(t + -e, t, n) : t - (e - t) + n
}
function n6(e, t, n, r) {
    return r ? e >= t + n : e <= -n
}
const r6 = e => {
    const t = ({delta: n}) => e(n);
    return {
        start: () => XM.update(t, !0),
        stop: () => qM.update(t)
    }
};
function jS(e) {
    var t,
        n,
        {from: r, autoplay: o=!0, driver: i=r6, elapsed: a=0, repeat: s=0, repeatType: l="loop", repeatDelay: u=0, onPlay: c, onStop: d, onComplete: f, onRepeat: h, onUpdate: y} = e,
        S = PS(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
    let {to: C} = S,
        g,
        p = 0,
        m = S.duration,
        b,
        _ = !1,
        R = !0,
        E;
    const I = GM(S);
    !((n = (t = I).needsInterpolation) === null || n === void 0) && n.call(t, r, C) && (E = IS([0, 100], [r, C], {
        clamp: !1
    }), r = 0, C = 100);
    const j = I(Object.assign(Object.assign({}, S), {
        from: r,
        to: C
    }));
    function B() {
        p++,
        l === "reverse" ? (R = p % 2 === 0, a = t6(a, m, u, R)) : (a = VS(a, m, u), l === "mirror" && j.flipTarget()),
        _ = !1,
        h && h()
    }
    function le() {
        g.stop(),
        f && f()
    }
    function ke(dt) {
        if (R || (dt = -dt), a += dt, !_) {
            const ft = j.next(Math.max(0, a));
            b = ft.value,
            E && (b = E(b)),
            _ = R ? ft.done : a <= 0
        }
        y == null || y(b),
        _ && (p === 0 && (m != null || (m = a)), p < s ? n6(a, m, u, R) && B() : le())
    }
    function Qe() {
        c == null || c(),
        g = i(ke),
        g.start()
    }
    return o && Qe(), {
        stop: () => {
            d == null || d(),
            g.stop()
        }
    }
}
function WS(e, t) {
    return t ? e * (1e3 / t) : 0
}
function o6({from: e=0, velocity: t=0, min: n, max: r, power: o=.8, timeConstant: i=750, bounceStiffness: a=500, bounceDamping: s=10, restDelta: l=1, modifyTarget: u, driver: c, onUpdate: d, onComplete: f, onStop: h}) {
    let y;
    function S(m) {
        return n !== void 0 && m < n || r !== void 0 && m > r
    }
    function C(m) {
        return n === void 0 ? r : r === void 0 || Math.abs(n - m) < Math.abs(r - m) ? n : r
    }
    function g(m) {
        y == null || y.stop(),
        y = jS(Object.assign(Object.assign({}, m), {
            driver: c,
            onUpdate: b => {
                var _;
                d == null || d(b),
                (_ = m.onUpdate) === null || _ === void 0 || _.call(m, b)
            },
            onComplete: f,
            onStop: h
        }))
    }
    function p(m) {
        g(Object.assign({
            type: "spring",
            stiffness: a,
            damping: s,
            restDelta: l
        }, m))
    }
    if (S(e))
        p({
            from: e,
            velocity: t,
            to: C(e)
        });
    else {
        let m = o * t + e;
        typeof u < "u" && (m = u(m));
        const b = C(m),
            _ = b === n ? -1 : 1;
        let R,
            E;
        const I = j => {
            R = E,
            E = j,
            t = WS(j - R, e6().delta),
            (_ === 1 && j > b || _ === -1 && j < b) && p({
                from: j,
                to: b,
                velocity: t
            })
        };
        g({
            type: "decay",
            from: e,
            velocity: t,
            timeConstant: i,
            power: o,
            restDelta: l,
            modifyTarget: u,
            onUpdate: S(m) ? I : void 0
        })
    }
    return {
        stop: () => y == null ? void 0 : y.stop()
    }
}
const Hd = e => e.hasOwnProperty("x") && e.hasOwnProperty("y"),
    $0 = e => Hd(e) && e.hasOwnProperty("z"),
    os = (e, t) => Math.abs(e - t);
function zp(e, t) {
    if (Vd(e) && Vd(t))
        return os(e, t);
    if (Hd(e) && Hd(t)) {
        const n = os(e.x, t.x),
            r = os(e.y, t.y),
            o = $0(e) && $0(t) ? os(e.z, t.z) : 0;
        return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
    }
}
const HS = (e, t) => 1 - 3 * t + 3 * e,
    US = (e, t) => 3 * t - 6 * e,
    GS = e => 3 * e,
    Sl = (e, t, n) => ((HS(t, n) * e + US(t, n)) * e + GS(t)) * e,
    KS = (e, t, n) => 3 * HS(t, n) * e * e + 2 * US(t, n) * e + GS(t),
    i6 = 1e-7,
    a6 = 10;
function s6(e, t, n, r, o) {
    let i,
        a,
        s = 0;
    do a = t + (n - t) / 2,
    i = Sl(a, r, o) - e,
    i > 0 ? n = a : t = a;
    while (Math.abs(i) > i6 && ++s < a6);
    return a
}
const l6 = 8,
    u6 = .001;
function c6(e, t, n, r) {
    for (let o = 0; o < l6; ++o) {
        const i = KS(t, n, r);
        if (i === 0)
            return t;
        t -= (Sl(t, n, r) - e) / i
    }
    return t
}
const zs = 11,
    is = 1 / (zs - 1);
function d6(e, t, n, r) {
    if (e === t && n === r)
        return Pp;
    const o = new Float32Array(zs);
    for (let a = 0; a < zs; ++a)
        o[a] = Sl(a * is, e, n);
    function i(a) {
        let s = 0,
            l = 1;
        const u = zs - 1;
        for (; l !== u && o[l] <= a; ++l)
            s += is;
        --l;
        const c = (a - o[l]) / (o[l + 1] - o[l]),
            d = s + c * is,
            f = KS(d, e, n);
        return f >= u6 ? c6(a, d, e, n) : f === 0 ? d : s6(a, s, s + is, e, n)
    }
    return a => a === 0 || a === 1 ? a : Sl(i(a), t, r)
}
function f6({onTap: e, onTapStart: t, onTapCancel: n, whileTap: r, visualElement: o}) {
    const i = e || t || n || r,
        a = k.exports.useRef(!1),
        s = k.exports.useRef(null),
        l = {
            passive: !(t || e || n || h)
        };
    function u() {
        s.current && s.current(),
        s.current = null
    }
    function c() {
        return u(), a.current = !1, o.animationState && o.animationState.setActive(ae.Tap, !1), !TS()
    }
    function d(y, S) {
        !c() || (ES(o.getInstance(), y.target) ? e && e(y, S) : n && n(y, S))
    }
    function f(y, S) {
        !c() || n && n(y, S)
    }
    function h(y, S) {
        u(),
        !a.current && (a.current = !0, s.current = fu(So(window, "pointerup", d, l), So(window, "pointercancel", f, l)), o.animationState && o.animationState.setActive(ae.Tap, !0), t && t(y, S))
    }
    ml(o, "pointerdown", i ? h : void 0, l),
    _p(u)
}
const p6 = "production",
    YS = typeof process > "u" || process.env === void 0 ? p6 : "production",
    O0 = new Set;
function QS(e, t, n) {
    e || O0.has(t) || (console.warn(t), n && console.warn(n), O0.add(t))
}
const Ud = new WeakMap,
    yc = new WeakMap,
    h6 = e => {
        const t = Ud.get(e.target);
        t && t(e)
    },
    m6 = e => {
        e.forEach(h6)
    };
function g6({root: e, ...t}) {
    const n = e || document;
    yc.has(n) || yc.set(n, {});
    const r = yc.get(n),
        o = JSON.stringify(t);
    return r[o] || (r[o] = new IntersectionObserver(m6, {
        root: e,
        ...t
    })), r[o]
}
function v6(e, t, n) {
    const r = g6(t);
    return Ud.set(e, n), r.observe(e), () => {
        Ud.delete(e),
        r.unobserve(e)
    }
}
function y6({visualElement: e, whileInView: t, onViewportEnter: n, onViewportLeave: r, viewport: o={}}) {
    const i = k.exports.useRef({
        hasEnteredView: !1,
        isInView: !1
    });
    let a = Boolean(t || n || r);
    o.once && i.current.hasEnteredView && (a = !1),
    (typeof IntersectionObserver > "u" ? x6 : b6)(a, i.current, e, o)
}
const S6 = {
    some: 0,
    all: 1
};
function b6(e, t, n, {root: r, margin: o, amount: i="some", once: a}) {
    k.exports.useEffect(() => {
        if (!e)
            return;
        const s = {
                root: r == null ? void 0 : r.current,
                rootMargin: o,
                threshold: typeof i == "number" ? i : S6[i]
            },
            l = u => {
                const {isIntersecting: c} = u;
                if (t.isInView === c || (t.isInView = c, a && !c && t.hasEnteredView))
                    return;
                c && (t.hasEnteredView = !0),
                n.animationState && n.animationState.setActive(ae.InView, c);
                const d = n.getProps(),
                    f = c ? d.onViewportEnter : d.onViewportLeave;
                f && f(u)
            };
        return v6(n.getInstance(), s, l)
    }, [e, r, o, i])
}
function x6(e, t, n, {fallback: r=!0}) {
    k.exports.useEffect(() => {
        !e || !r || (YS !== "production" && QS(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(() => {
            t.hasEnteredView = !0;
            const {onViewportEnter: o} = n.getProps();
            o && o(null),
            n.animationState && n.animationState.setActive(ae.InView, !0)
        }))
    }, [e])
}
const Yn = e => t => (e(t), null),
    w6 = {
        inView: Yn(y6),
        tap: Yn(f6),
        focus: Yn(q4),
        hover: Yn(sM)
    };
function XS() {
    const e = k.exports.useContext($o);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e,
        o = k.exports.useId();
    return k.exports.useEffect(() => r(o), []), !t && n ? [!1, () => n && n(o)] : [!0]
}
function k6() {
    return C6(k.exports.useContext($o))
}
function C6(e) {
    return e === null ? !0 : e.isPresent
}
function qS(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
const bl = e => e * 1e3,
    _6 = {
        linear: Pp,
        easeIn: Rp,
        easeInOut: NS,
        easeOut: zM,
        circIn: $S,
        circInOut: IM,
        circOut: Ap,
        backIn: Mp,
        backInOut: FM,
        backOut: LM,
        anticipate: NM,
        bounceIn: DM,
        bounceInOut: VM,
        bounceOut: yl
    },
    B0 = e => {
        if (Array.isArray(e)) {
            gl(e.length === 4);
            const [t, n, r, o] = e;
            return d6(t, n, r, o)
        } else if (typeof e == "string")
            return _6[e];
        return e
    },
    T6 = e => Array.isArray(e) && typeof e[0] != "number",
    D0 = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Mn.test(t) && !t.startsWith("url(")),
    pr = () => ({
        type: "spring",
        stiffness: 500,
        damping: 25,
        restSpeed: 10
    }),
    as = e => ({
        type: "spring",
        stiffness: 550,
        damping: e === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    }),
    Sc = () => ({
        type: "keyframes",
        ease: "linear",
        duration: .3
    }),
    E6 = e => ({
        type: "keyframes",
        duration: .8,
        values: e
    }),
    V0 = {
        x: pr,
        y: pr,
        z: pr,
        rotate: pr,
        rotateX: pr,
        rotateY: pr,
        rotateZ: pr,
        scaleX: as,
        scaleY: as,
        scale: as,
        opacity: Sc,
        backgroundColor: Sc,
        color: Sc,
        default: as
    },
    P6 = (e, t) => {
        let n;
        return oa(t) ? n = E6 : n = V0[e] || V0.default, {
            to: t,
            ...n(t)
        }
    },
    R6 = {
        ...uS,
        color: qe,
        backgroundColor: qe,
        outlineColor: qe,
        fill: qe,
        stroke: qe,
        borderColor: qe,
        borderTopColor: qe,
        borderRightColor: qe,
        borderBottomColor: qe,
        borderLeftColor: qe,
        filter: Od,
        WebkitFilter: Od
    },
    Ip = e => R6[e];
function Lp(e, t) {
    var n;
    let r = Ip(e);
    return r !== Od && (r = Mn), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t)
}
const A6 = {
        current: !1
    },
    ZS = 1 / 60 * 1e3,
    M6 = typeof performance < "u" ? () => performance.now() : () => Date.now(),
    JS = typeof window < "u" ? e => window.requestAnimationFrame(e) : e => setTimeout(() => e(M6()), ZS);
function z6(e) {
    let t = [],
        n = [],
        r = 0,
        o = !1,
        i = !1;
    const a = new WeakSet,
        s = {
            schedule: (l, u=!1, c=!1) => {
                const d = c && o,
                    f = d ? t : n;
                return u && a.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (r = t.length)), l
            },
            cancel: l => {
                const u = n.indexOf(l);
                u !== -1 && n.splice(u, 1),
                a.delete(l)
            },
            process: l => {
                if (o) {
                    i = !0;
                    return
                }
                if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
                    for (let u = 0; u < r; u++) {
                        const c = t[u];
                        c(l),
                        a.has(c) && (s.schedule(c), e())
                    }
                o = !1,
                i && (i = !1, s.process(l))
            }
        };
    return s
}
const I6 = 40;
let Gd = !0,
    sa = !1,
    Kd = !1;
const xo = {
        delta: 0,
        timestamp: 0
    },
    xa = ["read", "update", "preRender", "render", "postRender"],
    mu = xa.reduce((e, t) => (e[t] = z6(() => sa = !0), e), {}),
    Qt = xa.reduce((e, t) => {
        const n = mu[t];
        return e[t] = (r, o=!1, i=!1) => (sa || F6(), n.schedule(r, o, i)), e
    }, {}),
    Fr = xa.reduce((e, t) => (e[t] = mu[t].cancel, e), {}),
    bc = xa.reduce((e, t) => (e[t] = () => mu[t].process(xo), e), {}),
    L6 = e => mu[e].process(xo),
    eb = e => {
        sa = !1,
        xo.delta = Gd ? ZS : Math.max(Math.min(e - xo.timestamp, I6), 1),
        xo.timestamp = e,
        Kd = !0,
        xa.forEach(L6),
        Kd = !1,
        sa && (Gd = !1, JS(eb))
    },
    F6 = () => {
        sa = !0,
        Gd = !0,
        Kd || JS(eb)
    },
    Yd = () => xo;
function tb(e, t) {
    const n = performance.now(),
        r = ({timestamp: o}) => {
            const i = o - n;
            i >= t && (Fr.read(r), e(i - t))
        };
    return Qt.read(r, !0), () => Fr.read(r)
}
function N6({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, ...u}) {
    return !!Object.keys(u).length
}
function $6({ease: e, times: t, yoyo: n, flip: r, loop: o, ...i}) {
    const a = {
        ...i
    };
    return t && (a.offset = t), i.duration && (a.duration = bl(i.duration)), i.repeatDelay && (a.repeatDelay = bl(i.repeatDelay)), e && (a.ease = T6(e) ? e.map(B0) : B0(e)), i.type === "tween" && (a.type = "keyframes"), (n || o || r) && (n ? a.repeatType = "reverse" : o ? a.repeatType = "loop" : r && (a.repeatType = "mirror"), a.repeat = o || n || r || i.repeat), i.type !== "spring" && (a.type = "keyframes"), a
}
function O6(e, t) {
    var n,
        r;
    return (r = (n = (Fp(e, t) || {}).delay) !== null && n !== void 0 ? n : e.delay) !== null && r !== void 0 ? r : 0
}
function B6(e) {
    return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to], e.to[0] = e.from), e
}
function D6(e, t, n) {
    return Array.isArray(t.to) && e.duration === void 0 && (e.duration = .8), B6(t), N6(e) || (e = {
        ...e,
        ...P6(n, t.to)
    }), {
        ...t,
        ...$6(e)
    }
}
function V6(e, t, n, r, o) {
    const i = Fp(r, e) || {};
    let a = i.from !== void 0 ? i.from : t.get();
    const s = D0(e, n);
    a === "none" && s && typeof n == "string" ? a = Lp(e, n) : j0(a) && typeof n == "string" ? a = W0(n) : !Array.isArray(n) && j0(n) && typeof a == "string" && (n = W0(a));
    const l = D0(e, a);
    function u() {
        const d = {
            from: a,
            to: n,
            velocity: t.getVelocity(),
            onComplete: o,
            onUpdate: f => t.set(f)
        };
        return i.type === "inertia" || i.type === "decay" ? o6({
            ...d,
            ...i
        }) : jS({
            ...D6(i, d, e),
            onUpdate: f => {
                d.onUpdate(f),
                i.onUpdate && i.onUpdate(f)
            },
            onComplete: () => {
                d.onComplete(),
                i.onComplete && i.onComplete()
            }
        })
    }
    function c() {
        const d = yS(n);
        return t.set(d), o(), i.onUpdate && i.onUpdate(d), i.onComplete && i.onComplete(), {
            stop: () => {}
        }
    }
    return !l || !s || i.type === !1 ? c : u
}
function j0(e) {
    return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1
}
function W0(e) {
    return typeof e == "number" ? 0 : Lp("", e)
}
function Fp(e, t) {
    return e[t] || e.default || e
}
function Np(e, t, n, r={}) {
    return A6.current && (r = {
        type: !1
    }), t.start(o => {
        let i;
        const a = V6(e, t, n, r, o),
            s = O6(r, e),
            l = () => i = a();
        let u;
        return s ? u = tb(l, bl(s)) : l(), () => {
            u && u(),
            i && i.stop()
        }
    })
}
const j6 = e => /^\-?\d*\.?\d+$/.test(e),
    W6 = e => /^0[^.\s]+$/.test(e);
function $p(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function Op(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class Ci {
    constructor()
    {
        this.subscriptions = []
    }
    add(t)
    {
        return $p(this.subscriptions, t), () => Op(this.subscriptions, t)
    }
    notify(t, n, r)
    {
        const o = this.subscriptions.length;
        if (!!o)
            if (o === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < o; i++) {
                    const a = this.subscriptions[i];
                    a && a(t, n, r)
                }
    }
    getSize()
    {
        return this.subscriptions.length
    }
    clear()
    {
        this.subscriptions.length = 0
    }
}
const H6 = e => !isNaN(parseFloat(e));
class U6 {
    constructor(t)
    {
        this.version = "7.6.1",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.updateSubscribers = new Ci,
        this.velocityUpdateSubscribers = new Ci,
        this.renderSubscribers = new Ci,
        this.canTrackVelocity = !1,
        this.updateAndNotify = (n, r=!0) => {
            this.prev = this.current,
            this.current = n;
            const {delta: o, timestamp: i} = Yd();
            this.lastUpdated !== i && (this.timeDelta = o, this.lastUpdated = i, Qt.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.updateSubscribers.notify(this.current),
            this.velocityUpdateSubscribers.getSize() && this.velocityUpdateSubscribers.notify(this.getVelocity()),
            r && this.renderSubscribers.notify(this.current)
        },
        this.scheduleVelocityCheck = () => Qt.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: n}) => {
            n !== this.lastUpdated && (this.prev = this.current, this.velocityUpdateSubscribers.notify(this.getVelocity()))
        },
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = H6(this.current)
    }
    onChange(t)
    {
        return this.updateSubscribers.add(t)
    }
    clearListeners()
    {
        this.updateSubscribers.clear()
    }
    onRenderRequest(t)
    {
        return t(this.get()), this.renderSubscribers.add(t)
    }
    attach(t)
    {
        this.passiveEffect = t
    }
    set(t, n=!0)
    {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    get()
    {
        return this.current
    }
    getPrevious()
    {
        return this.prev
    }
    getVelocity()
    {
        return this.canTrackVelocity ? WS(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t)
    {
        return this.stop(), new Promise(n => {
            this.hasAnimated = !0,
            this.stopAnimation = t(n)
        }).then(() => this.clearAnimation())
    }
    stop()
    {
        this.stopAnimation && this.stopAnimation(),
        this.clearAnimation()
    }
    isAnimating()
    {
        return !!this.stopAnimation
    }
    clearAnimation()
    {
        this.stopAnimation = null
    }
    destroy()
    {
        this.updateSubscribers.clear(),
        this.renderSubscribers.clear(),
        this.stop()
    }
}
function Mo(e) {
    return new U6(e)
}
const nb = e => t => t.test(e),
    G6 = {
        test: e => e === "auto",
        parse: e => e
    },
    rb = [Dr, U, dn, On, b4, S4, G6],
    Zo = e => rb.find(nb(e)),
    K6 = [...rb, qe, Mn],
    Y6 = e => K6.find(nb(e));
function Q6(e) {
    const t = {};
    return e.forEachValue((n, r) => t[r] = n.get()), t
}
function X6(e) {
    const t = {};
    return e.forEachValue((n, r) => t[r] = n.getVelocity()), t
}
function gu(e, t, n) {
    const r = e.getProps();
    return kp(r, t, n !== void 0 ? n : r.custom, Q6(e), X6(e))
}
function q6(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Mo(n))
}
function Z6(e, t) {
    const n = gu(e, t);
    let {transitionEnd: r={}, transition: o={}, ...i} = n ? e.makeTargetAnimatable(n, !1) : {};
    i = {
        ...i,
        ...r
    };
    for (const a in i) {
        const s = yS(i[a]);
        q6(e, a, s)
    }
}
function J6(e, t, n) {
    var r,
        o;
    const i = Object.keys(t).filter(s => !e.hasValue(s)),
        a = i.length;
    if (!!a)
        for (let s = 0; s < a; s++) {
            const l = i[s],
                u = t[l];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (o = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !== null && o !== void 0 ? o : t[l]),
            c != null && (typeof c == "string" && (j6(c) || W6(c)) ? c = parseFloat(c) : !Y6(c) && Mn.test(u) && (c = Lp(l, u)), e.addValue(l, Mo(c)), n[l] === void 0 && (n[l] = c), e.setBaseTarget(l, c))
        }
}
function ez(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function tz(e, t, n) {
    var r;
    const o = {};
    for (const i in e) {
        const a = ez(i, t);
        o[i] = a !== void 0 ? a : (r = n.getValue(i)) === null || r === void 0 ? void 0 : r.get()
    }
    return o
}
function xl(e) {
    return Boolean(Yt(e) && e.add)
}
function nz(e, t, n={}) {
    e.notifyAnimationStart(t);
    let r;
    if (Array.isArray(t)) {
        const o = t.map(i => Qd(e, i, n));
        r = Promise.all(o)
    } else if (typeof t == "string")
        r = Qd(e, t, n);
    else {
        const o = typeof t == "function" ? gu(e, t, n.custom) : t;
        r = ob(e, o, n)
    }
    return r.then(() => e.notifyAnimationComplete(t))
}
function Qd(e, t, n={}) {
    var r;
    const o = gu(e, t, n.custom);
    let {transition: i=e.getDefaultTransition() || {}} = o || {};
    n.transitionOverride && (i = n.transitionOverride);
    const a = o ? () => ob(e, o, n) : () => Promise.resolve(),
        s = !((r = e.variantChildren) === null || r === void 0) && r.size ? (u=0) => {
            const {delayChildren: c=0, staggerChildren: d, staggerDirection: f} = i;
            return rz(e, t, c + u, d, f, n)
        } : () => Promise.resolve(),
        {when: l} = i;
    if (l) {
        const [u, c] = l === "beforeChildren" ? [a, s] : [s, a];
        return u().then(c)
    } else
        return Promise.all([a(), s(n.delay)])
}
function ob(e, t, {delay: n=0, transitionOverride: r, type: o}={}) {
    var i;
    let {transition: a=e.getDefaultTransition(), transitionEnd: s, ...l} = e.makeTargetAnimatable(t);
    const u = e.getValue("willChange");
    r && (a = r);
    const c = [],
        d = o && ((i = e.animationState) === null || i === void 0 ? void 0 : i.getState()[o]);
    for (const f in l) {
        const h = e.getValue(f),
            y = l[f];
        if (!h || y === void 0 || d && iz(d, f))
            continue;
        let S = {
            delay: n,
            ...a
        };
        e.shouldReduceMotion && va.has(f) && (S = {
            ...S,
            type: !1,
            delay: 0
        });
        let C = Np(f, h, y, S);
        xl(u) && (u.add(f), C = C.then(() => u.remove(f))),
        c.push(C)
    }
    return Promise.all(c).then(() => {
        s && Z6(e, s)
    })
}
function rz(e, t, n=0, r=0, o=1, i) {
    const a = [],
        s = (e.variantChildren.size - 1) * r,
        l = o === 1 ? (u=0) => u * r : (u=0) => s - u * r;
    return Array.from(e.variantChildren).sort(oz).forEach((u, c) => {
        a.push(Qd(u, t, {
            ...i,
            delay: n + l(c)
        }).then(() => u.notifyAnimationComplete(t)))
    }), Promise.all(a)
}
function oz(e, t) {
    return e.sortNodePosition(t)
}
function iz({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1, r
}
const Bp = [ae.Animate, ae.InView, ae.Focus, ae.Hover, ae.Tap, ae.Drag, ae.Exit],
    az = [...Bp].reverse(),
    sz = Bp.length;
function lz(e) {
    return t => Promise.all(t.map(({animation: n, options: r}) => nz(e, n, r)))
}
function uz(e) {
    let t = lz(e);
    const n = dz();
    let r = !0;
    const o = (l, u) => {
        const c = gu(e, u);
        if (c) {
            const {transition: d, transitionEnd: f, ...h} = c;
            l = {
                ...l,
                ...h,
                ...f
            }
        }
        return l
    };
    function i(l) {
        t = l(e)
    }
    function a(l, u) {
        var c;
        const d = e.getProps(),
            f = e.getVariantContext(!0) || {},
            h = [],
            y = new Set;
        let S = {},
            C = 1 / 0;
        for (let p = 0; p < sz; p++) {
            const m = az[p],
                b = n[m],
                _ = (c = d[m]) !== null && c !== void 0 ? c : f[m],
                R = ta(_),
                E = m === u ? b.isActive : null;
            E === !1 && (C = p);
            let I = _ === f[m] && _ !== d[m] && R;
            if (I && r && e.manuallyAnimateOnMount && (I = !1), b.protectedKeys = {
                ...S
            }, !b.isActive && E === null || !_ && !b.prevProp || lu(_) || typeof _ == "boolean")
                continue;
            const j = cz(b.prevProp, _);
            let B = j || m === u && b.isActive && !I && R || p > C && R;
            const le = Array.isArray(_) ? _ : [_];
            let ke = le.reduce(o, {});
            E === !1 && (ke = {});
            const {prevResolvedValues: Qe={}} = b,
                dt = {
                    ...Qe,
                    ...ke
                },
                ft = fe => {
                    B = !0,
                    y.delete(fe),
                    b.needsAnimating[fe] = !0
                };
            for (const fe in dt) {
                const nt = ke[fe],
                    L = Qe[fe];
                S.hasOwnProperty(fe) || (nt !== L ? oa(nt) && oa(L) ? !qS(nt, L) || j ? ft(fe) : b.protectedKeys[fe] = !0 : nt !== void 0 ? ft(fe) : y.add(fe) : nt !== void 0 && y.has(fe) ? ft(fe) : b.protectedKeys[fe] = !0)
            }
            b.prevProp = _,
            b.prevResolvedValues = ke,
            b.isActive && (S = {
                ...S,
                ...ke
            }),
            r && e.blockInitialAnimation && (B = !1),
            B && !I && h.push(...le.map(fe => ({
                animation: fe,
                options: {
                    type: m,
                    ...l
                }
            })))
        }
        if (y.size) {
            const p = {};
            y.forEach(m => {
                const b = e.getBaseTarget(m);
                b !== void 0 && (p[m] = b)
            }),
            h.push({
                animation: p
            })
        }
        let g = Boolean(h.length);
        return r && d.initial === !1 && !e.manuallyAnimateOnMount && (g = !1), r = !1, g ? t(h) : Promise.resolve()
    }
    function s(l, u, c) {
        var d;
        if (n[l].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(h => {
            var y;
            return (y = h.animationState) === null || y === void 0 ? void 0 : y.setActive(l, u)
        }),
        n[l].isActive = u;
        const f = a(c, l);
        for (const h in n)
            n[h].protectedKeys = {};
        return f
    }
    return {
        animateChanges: a,
        setActive: s,
        setAnimateFunction: i,
        getState: () => n
    }
}
function cz(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !qS(t, e) : !1
}
function hr(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function dz() {
    return {
        [ae.Animate]: hr(!0),
        [ae.InView]: hr(),
        [ae.Hover]: hr(),
        [ae.Tap]: hr(),
        [ae.Drag]: hr(),
        [ae.Focus]: hr(),
        [ae.Exit]: hr()
    }
}
const fz = {
    animation: Yn(({visualElement: e, animate: t}) => {
        e.animationState || (e.animationState = uz(e)),
        lu(t) && k.exports.useEffect(() => t.subscribe(e), [t])
    }),
    exit: Yn(e => {
        const {custom: t, visualElement: n} = e,
            [r, o] = XS(),
            i = k.exports.useContext($o);
        k.exports.useEffect(() => {
            n.isPresent = r;
            const a = n.animationState && n.animationState.setActive(ae.Exit, !r, {
                custom: i && i.custom || t
            });
            a && !r && a.then(o)
        }, [r])
    })
};
class ib {
    constructor(t, n, {transformPagePoint: r}={})
    {
        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const u = wc(this.lastMoveEventInfo, this.history),
                c = this.startEvent !== null,
                d = zp(u.offset, {
                    x: 0,
                    y: 0
                }) >= 3;
            if (!c && !d)
                return;
            const {point: f} = u,
                {timestamp: h} = Yd();
            this.history.push({
                ...f,
                timestamp: h
            });
            const {onStart: y, onMove: S} = this.handlers;
            c || (y && y(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent),
            S && S(this.lastMoveEvent, u)
        }, this.handlePointerMove = (u, c) => {
            if (this.lastMoveEvent = u, this.lastMoveEventInfo = xc(c, this.transformPagePoint), bS(u) && u.buttons === 0) {
                this.handlePointerUp(u, c);
                return
            }
            Qt.update(this.updatePoint, !0)
        }, this.handlePointerUp = (u, c) => {
            this.end();
            const {onEnd: d, onSessionEnd: f} = this.handlers,
                h = wc(xc(c, this.transformPagePoint), this.history);
            this.startEvent && d && d(u, h),
            f && f(u, h)
        }, xS(t) && t.touches.length > 1)
            return;
        this.handlers = n,
        this.transformPagePoint = r;
        const o = Cp(t),
            i = xc(o, this.transformPagePoint),
            {point: a} = i,
            {timestamp: s} = Yd();
        this.history = [{
            ...a,
            timestamp: s
        }];
        const {onSessionStart: l} = n;
        l && l(t, wc(i, this.history)),
        this.removeListeners = fu(So(window, "pointermove", this.handlePointerMove), So(window, "pointerup", this.handlePointerUp), So(window, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t)
    {
        this.handlers = t
    }
    end()
    {
        this.removeListeners && this.removeListeners(),
        Fr.update(this.updatePoint)
    }
}
function xc(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function H0(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function wc({point: e}, t) {
    return {
        point: e,
        delta: H0(e, ab(t)),
        offset: H0(e, pz(t)),
        velocity: hz(t, .1)
    }
}
function pz(e) {
    return e[0]
}
function ab(e) {
    return e[e.length - 1]
}
function hz(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1,
        r = null;
    const o = ab(e);
    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > bl(t)));)
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const i = (o.timestamp - r.timestamp) / 1e3;
    if (i === 0)
        return {
            x: 0,
            y: 0
        };
    const a = {
        x: (o.x - r.x) / i,
        y: (o.y - r.y) / i
    };
    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
}
function xt(e) {
    return e.max - e.min
}
function U0(e, t=0, n=.01) {
    return zp(e, t) < n
}
function G0(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = xe(t.min, t.max, e.origin),
    e.scale = xt(n) / xt(t),
    (U0(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = xe(n.min, n.max, e.origin) - e.originPoint,
    (U0(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function _i(e, t, n, r) {
    G0(e.x, t.x, n.x, r == null ? void 0 : r.originX),
    G0(e.y, t.y, n.y, r == null ? void 0 : r.originY)
}
function K0(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + xt(t)
}
function mz(e, t, n) {
    K0(e.x, t.x, n.x),
    K0(e.y, t.y, n.y)
}
function Y0(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + xt(t)
}
function Ti(e, t, n) {
    Y0(e.x, t.x, n.x),
    Y0(e.y, t.y, n.y)
}
function gz(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? xe(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? xe(n, e, r.max) : Math.min(e, n)), e
}
function Q0(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function vz(e, {top: t, left: n, bottom: r, right: o}) {
    return {
        x: Q0(e.x, n, o),
        y: Q0(e.y, t, r)
    }
}
function X0(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
        min: n,
        max: r
    }
}
function yz(e, t) {
    return {
        x: X0(e.x, t.x),
        y: X0(e.y, t.y)
    }
}
function Sz(e, t) {
    let n = .5;
    const r = xt(e),
        o = xt(t);
    return o > r ? n = ia(t.min, t.max - r, e.min) : r > o && (n = ia(e.min, e.max - o, t.min)), vl(0, 1, n)
}
function bz(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n
}
const Xd = .35;
function xz(e=Xd) {
    return e === !1 ? e = 0 : e === !0 && (e = Xd), {
        x: q0(e, "left", "right"),
        y: q0(e, "top", "bottom")
    }
}
function q0(e, t, n) {
    return {
        min: Z0(e, t),
        max: Z0(e, n)
    }
}
function Z0(e, t) {
    var n;
    return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0
}
const J0 = () => ({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    }),
    Ei = () => ({
        x: J0(),
        y: J0()
    }),
    eg = () => ({
        min: 0,
        max: 0
    }),
    Oe = () => ({
        x: eg(),
        y: eg()
    });
function tn(e) {
    return [e("x"), e("y")]
}
function sb({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function wz({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function kz(e, t) {
    if (!t)
        return e;
    const n = t({
            x: e.left,
            y: e.top
        }),
        r = t({
            x: e.right,
            y: e.bottom
        });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function kc(e) {
    return e === void 0 || e === 1
}
function qd({scale: e, scaleX: t, scaleY: n}) {
    return !kc(e) || !kc(t) || !kc(n)
}
function vr(e) {
    return qd(e) || lb(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function lb(e) {
    return tg(e.x) || tg(e.y)
}
function tg(e) {
    return e && e !== "0%"
}
function wl(e, t, n) {
    const r = e - n,
        o = t * r;
    return n + o
}
function ng(e, t, n, r, o) {
    return o !== void 0 && (e = wl(e, o, r)), wl(e, n, r) + t
}
function Zd(e, t=0, n=1, r, o) {
    e.min = ng(e.min, t, n, r, o),
    e.max = ng(e.max, t, n, r, o)
}
function ub(e, {x: t, y: n}) {
    Zd(e.x, t.translate, t.scale, t.originPoint),
    Zd(e.y, n.translate, n.scale, n.originPoint)
}
function Cz(e, t, n, r=!1) {
    var o,
        i;
    const a = n.length;
    if (!a)
        return;
    t.x = t.y = 1;
    let s,
        l;
    for (let u = 0; u < a; u++)
        s = n[u],
        l = s.projectionDelta,
        ((i = (o = s.instance) === null || o === void 0 ? void 0 : o.style) === null || i === void 0 ? void 0 : i.display) !== "contents" && (r && s.options.layoutScroll && s.scroll && s !== s.root && so(e, {
            x: -s.scroll.x,
            y: -s.scroll.y
        }), l && (t.x *= l.x.scale, t.y *= l.y.scale, ub(e, l)), r && vr(s.latestValues) && so(e, s.latestValues))
}
function Vn(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function rg(e, t, [n, r, o]) {
    const i = t[o] !== void 0 ? t[o] : .5,
        a = xe(e.min, e.max, i);
    Zd(e, t[n], t[r], a, t.scale)
}
const _z = ["x", "scaleX", "originX"],
    Tz = ["y", "scaleY", "originY"];
function so(e, t) {
    rg(e.x, t, _z),
    rg(e.y, t, Tz)
}
function cb(e, t) {
    return sb(kz(e.getBoundingClientRect(), t))
}
function Ez(e, t, n) {
    const r = cb(e, n),
        {scroll: o} = t;
    return o && (Vn(r.x, o.x), Vn(r.y, o.y)), r
}
const Pz = new WeakMap;
class Rz {
    constructor(t)
    {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = Oe(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={})
    {
        if (this.visualElement.isPresent === !1)
            return;
        const r = s => {
                this.stopAnimation(),
                n && this.snapToCursor(Cp(s, "page").point)
            },
            o = (s, l) => {
                var u;
                const {drag: c, dragPropagation: d, onDragStart: f} = this.getProps();
                c && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = _S(c), !this.openGlobalLock) || (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), tn(h => {
                    var y,
                        S;
                    let C = this.getAxisMotionValue(h).get() || 0;
                    if (dn.test(C)) {
                        const g = (S = (y = this.visualElement.projection) === null || y === void 0 ? void 0 : y.layout) === null || S === void 0 ? void 0 : S.actual[h];
                        g && (C = xt(g) * (parseFloat(C) / 100))
                    }
                    this.originPoint[h] = C
                }), f == null || f(s, l), (u = this.visualElement.animationState) === null || u === void 0 || u.setActive(ae.Drag, !0))
            },
            i = (s, l) => {
                const {dragPropagation: u, dragDirectionLock: c, onDirectionLock: d, onDrag: f} = this.getProps();
                if (!u && !this.openGlobalLock)
                    return;
                const {offset: h} = l;
                if (c && this.currentDirection === null) {
                    this.currentDirection = Az(h),
                    this.currentDirection !== null && (d == null || d(this.currentDirection));
                    return
                }
                this.updateAxis("x", l.point, h),
                this.updateAxis("y", l.point, h),
                this.visualElement.syncRender(),
                f == null || f(s, l)
            },
            a = (s, l) => this.stop(s, l);
        this.panSession = new ib(t, {
            onSessionStart: r,
            onStart: o,
            onMove: i,
            onSessionEnd: a
        }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
        })
    }
    stop(t, n)
    {
        const r = this.isDragging;
        if (this.cancel(), !r)
            return;
        const {velocity: o} = n;
        this.startAnimation(o);
        const {onDragEnd: i} = this.getProps();
        i == null || i(t, n)
    }
    cancel()
    {
        var t,
            n;
        this.isDragging = !1,
        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
        (t = this.panSession) === null || t === void 0 || t.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null),
        (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(ae.Drag, !1)
    }
    updateAxis(t, n, r)
    {
        const {drag: o} = this.getProps();
        if (!r || !ss(t, o, this.currentDirection))
            return;
        const i = this.getAxisMotionValue(t);
        let a = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (a = gz(a, this.constraints[t], this.elastic[t])),
        i.set(a)
    }
    resolveConstraints()
    {
        const {dragConstraints: t, dragElastic: n} = this.getProps(),
            {layout: r} = this.visualElement.projection || {},
            o = this.constraints;
        t && ao(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = vz(r.actual, t) : this.constraints = !1,
        this.elastic = xz(n),
        o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && tn(i => {
            this.getAxisMotionValue(i) && (this.constraints[i] = bz(r.actual[i], this.constraints[i]))
        })
    }
    resolveRefConstraints()
    {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !ao(t))
            return !1;
        const r = t.current,
            {projection: o} = this.visualElement;
        if (!o || !o.layout)
            return !1;
        const i = Ez(r, o.root, this.visualElement.getTransformPagePoint());
        let a = yz(o.layout.actual, i);
        if (n) {
            const s = n(wz(a));
            this.hasMutatedConstraints = !!s,
            s && (a = sb(s))
        }
        return a
    }
    startAnimation(t)
    {
        const {drag: n, dragMomentum: r, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s} = this.getProps(),
            l = this.constraints || {},
            u = tn(c => {
                var d;
                if (!ss(c, n, this.currentDirection))
                    return;
                let f = (d = l == null ? void 0 : l[c]) !== null && d !== void 0 ? d : {};
                a && (f = {
                    min: 0,
                    max: 0
                });
                const h = o ? 200 : 1e6,
                    y = o ? 40 : 1e7,
                    S = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: h,
                        bounceDamping: y,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...f
                    };
                return this.startAxisValueAnimation(c, S)
            });
        return Promise.all(u).then(s)
    }
    startAxisValueAnimation(t, n)
    {
        const r = this.getAxisMotionValue(t);
        return Np(t, r, 0, n)
    }
    stopAnimation()
    {
        tn(t => this.getAxisMotionValue(t).stop())
    }
    getAxisMotionValue(t)
    {
        var n,
            r;
        const o = "_drag" + t.toUpperCase(),
            i = this.visualElement.getProps()[o];
        return i || this.visualElement.getValue(t, (r = (n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) !== null && r !== void 0 ? r : 0)
    }
    snapToCursor(t)
    {
        tn(n => {
            const {drag: r} = this.getProps();
            if (!ss(n, r, this.currentDirection))
                return;
            const {projection: o} = this.visualElement,
                i = this.getAxisMotionValue(n);
            if (o && o.layout) {
                const {min: a, max: s} = o.layout.actual[n];
                i.set(t[n] - xe(a, s, .5))
            }
        })
    }
    scalePositionWithinConstraints()
    {
        var t;
        const {drag: n, dragConstraints: r} = this.getProps(),
            {projection: o} = this.visualElement;
        if (!ao(r) || !o || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        tn(s => {
            const l = this.getAxisMotionValue(s);
            if (l) {
                const u = l.get();
                i[s] = Sz({
                    min: u,
                    max: u
                }, this.constraints[s])
            }
        });
        const {transformTemplate: a} = this.visualElement.getProps();
        this.visualElement.getInstance().style.transform = a ? a({}, "") : "none",
        (t = o.root) === null || t === void 0 || t.updateScroll(),
        o.updateLayout(),
        this.resolveConstraints(),
        tn(s => {
            if (!ss(s, n, null))
                return;
            const l = this.getAxisMotionValue(s),
                {min: u, max: c} = this.constraints[s];
            l.set(xe(u, c, i[s]))
        })
    }
    addListeners()
    {
        var t;
        Pz.set(this.visualElement, this);
        const n = this.visualElement.getInstance(),
            r = So(n, "pointerdown", u => {
                const {drag: c, dragListener: d=!0} = this.getProps();
                c && d && this.start(u)
            }),
            o = () => {
                const {dragConstraints: u} = this.getProps();
                ao(u) && (this.constraints = this.resolveRefConstraints())
            },
            {projection: i} = this.visualElement,
            a = i.addEventListener("measure", o);
        i && !i.layout && ((t = i.root) === null || t === void 0 || t.updateScroll(), i.updateLayout()),
        o();
        const s = du(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({delta: u, hasLayoutChanged: c}) => {
                this.isDragging && c && (tn(d => {
                    const f = this.getAxisMotionValue(d);
                    !f || (this.originPoint[d] += u[d].translate, f.set(f.get() + u[d].translate))
                }), this.visualElement.syncRender())
            });
        return () => {
            s(),
            r(),
            a(),
            l == null || l()
        }
    }
    getProps()
    {
        const t = this.visualElement.getProps(),
            {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: o=!1, dragConstraints: i=!1, dragElastic: a=Xd, dragMomentum: s=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: o,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: s
        }
    }
}
function ss(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Az(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n
}
function Mz(e) {
    const {dragControls: t, visualElement: n} = e,
        r = cu(() => new Rz(n));
    k.exports.useEffect(() => t && t.subscribe(r), [r, t]),
    k.exports.useEffect(() => r.addListeners(), [r])
}
function zz({onPan: e, onPanStart: t, onPanEnd: n, onPanSessionStart: r, visualElement: o}) {
    const i = e || t || n || r,
        a = k.exports.useRef(null),
        {transformPagePoint: s} = k.exports.useContext(mp),
        l = {
            onSessionStart: r,
            onStart: t,
            onMove: e,
            onEnd: (c, d) => {
                a.current = null,
                n && n(c, d)
            }
        };
    k.exports.useEffect(() => {
        a.current !== null && a.current.updateHandlers(l)
    });
    function u(c) {
        a.current = new ib(c, l, {
            transformPagePoint: s
        })
    }
    ml(o, "pointerdown", i && u),
    _p(() => a.current && a.current.end())
}
const Iz = {
        pan: Yn(zz),
        drag: Yn(Mz)
    },
    Jd = {
        current: null
    },
    db = {
        current: !1
    };
function Lz() {
    if (db.current = !0, !!Br)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => Jd.current = e.matches;
            e.addListener(t),
            t()
        } else
            Jd.current = !1
}
const ls = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "LayoutAnimationStart", "SetAxisTarget", "Unmount"];
function Fz() {
    const e = ls.map(() => new Ci),
        t = {},
        n = {
            clearAllListeners: () => e.forEach(r => r.clear()),
            updatePropListeners: r => {
                ls.forEach(o => {
                    var i;
                    const a = "on" + o,
                        s = r[a];
                    (i = t[o]) === null || i === void 0 || i.call(t),
                    s && (t[o] = n[a](s))
                })
            }
        };
    return e.forEach((r, o) => {
        n["on" + ls[o]] = i => r.add(i),
        n["notify" + ls[o]] = (...i) => r.notify(...i)
    }), n
}
function Nz(e, t, n) {
    const {willChange: r} = t;
    for (const o in t) {
        const i = t[o],
            a = n[o];
        if (Yt(i))
            e.addValue(o, i),
            xl(r) && r.add(o);
        else if (Yt(a))
            e.addValue(o, Mo(i)),
            xl(r) && r.remove(o);
        else if (a !== i)
            if (e.hasValue(o)) {
                const s = e.getValue(o);
                !s.hasAnimated && s.set(i)
            } else {
                const s = e.getStaticValue(o);
                e.addValue(o, Mo(s !== void 0 ? s : i))
            }
    }
    for (const o in n)
        t[o] === void 0 && e.removeValue(o);
    return t
}
const fb = Object.keys(na),
    $z = fb.length,
    pb = ({treeType: e="", build: t, getBaseTarget: n, makeTargetAnimatable: r, measureViewportBox: o, render: i, readValueFromInstance: a, removeValueFromRenderState: s, sortNodePosition: l, scrapeMotionValuesFromProps: u}) => ({parent: c, props: d, presenceId: f, blockInitialAnimation: h, visualState: y, reducedMotionConfig: S}, C={}) => {
        let g = !1;
        const {latestValues: p, renderState: m} = y;
        let b;
        const _ = Fz(),
            R = new Map,
            E = new Map;
        let I = {};
        const j = {
                ...p
            },
            B = d.initial ? {
                ...p
            } : {};
        let le;
        function ke() {
            !b || !g || (Qe(), i(b, m, d.style, F.projection))
        }
        function Qe() {
            t(F, m, p, C, d)
        }
        function dt() {
            _.notifyUpdate(p)
        }
        function ft(A, $) {
            const V = $.onChange(Ie => {
                    p[A] = Ie,
                    d.onUpdate && Qt.update(dt, !1, !0)
                }),
                Ce = $.onRenderRequest(F.scheduleRender);
            E.set(A, () => {
                V(),
                Ce()
            })
        }
        const {willChange: fe, ...nt} = u(d);
        for (const A in nt) {
            const $ = nt[A];
            p[A] !== void 0 && Yt($) && ($.set(p[A], !1), xl(fe) && fe.add(A))
        }
        if (d.values)
            for (const A in d.values) {
                const $ = d.values[A];
                p[A] !== void 0 && Yt($) && $.set(p[A])
            }
        const L = uu(d),
            G = Z1(d),
            F = {
                treeType: e,
                current: null,
                depth: c ? c.depth + 1 : 0,
                parent: c,
                children: new Set,
                presenceId: f,
                shouldReduceMotion: null,
                variantChildren: G ? new Set : void 0,
                isVisible: void 0,
                manuallyAnimateOnMount: Boolean(c == null ? void 0 : c.isMounted()),
                blockInitialAnimation: h,
                isMounted: () => Boolean(b),
                mount(A) {
                    g = !0,
                    b = F.current = A,
                    F.projection && F.projection.mount(A),
                    G && c && !L && (le = c == null ? void 0 : c.addVariantChild(F)),
                    R.forEach(($, V) => ft(V, $)),
                    db.current || Lz(),
                    F.shouldReduceMotion = S === "never" ? !1 : S === "always" ? !0 : Jd.current,
                    c == null || c.children.add(F),
                    F.setProps(d)
                },
                unmount() {
                    var A;
                    (A = F.projection) === null || A === void 0 || A.unmount(),
                    Fr.update(dt),
                    Fr.render(ke),
                    E.forEach($ => $()),
                    le == null || le(),
                    c == null || c.children.delete(F),
                    _.clearAllListeners(),
                    b = void 0,
                    g = !1
                },
                loadFeatures(A, $, V, Ce, Ie, Xe) {
                    const qt = [];
                    for (let Nt = 0; Nt < $z; Nt++) {
                        const pn = fb[Nt],
                            {isEnabled: ur, Component: In} = na[pn];
                        ur(A) && In && qt.push(k.exports.createElement(In, {
                            key: pn,
                            ...A,
                            visualElement: F
                        }))
                    }
                    if (!F.projection && Ie) {
                        F.projection = new Ie(Ce, F.getLatestValues(), c && c.projection);
                        const {layoutId: Nt, layout: pn, drag: ur, dragConstraints: In, layoutScroll: ka} = A;
                        F.projection.setOptions({
                            layoutId: Nt,
                            layout: pn,
                            alwaysMeasureLayout: Boolean(ur) || In && ao(In),
                            visualElement: F,
                            scheduleRender: () => F.scheduleRender(),
                            animationType: typeof pn == "string" ? pn : "both",
                            initialPromotionConfig: Xe,
                            layoutScroll: ka
                        })
                    }
                    return qt
                },
                addVariantChild(A) {
                    var $;
                    const V = F.getClosestVariantNode();
                    if (V)
                        return ($ = V.variantChildren) === null || $ === void 0 || $.add(A), () => V.variantChildren.delete(A)
                },
                sortNodePosition(A) {
                    return !l || e !== A.treeType ? 0 : l(F.getInstance(), A.getInstance())
                },
                getClosestVariantNode: () => G ? F : c == null ? void 0 : c.getClosestVariantNode(),
                getLayoutId: () => d.layoutId,
                getInstance: () => b,
                getStaticValue: A => p[A],
                setStaticValue: (A, $) => p[A] = $,
                getLatestValues: () => p,
                setVisibility(A) {
                    F.isVisible !== A && (F.isVisible = A, F.scheduleRender())
                },
                makeTargetAnimatable(A, $=!0) {
                    return r(F, A, d, $)
                },
                measureViewportBox() {
                    return o(b, d)
                },
                addValue(A, $) {
                    F.hasValue(A) && F.removeValue(A),
                    R.set(A, $),
                    p[A] = $.get(),
                    ft(A, $)
                },
                removeValue(A) {
                    var $;
                    R.delete(A),
                    ($ = E.get(A)) === null || $ === void 0 || $(),
                    E.delete(A),
                    delete p[A],
                    s(A, m)
                },
                hasValue: A => R.has(A),
                getValue(A, $) {
                    if (d.values && d.values[A])
                        return d.values[A];
                    let V = R.get(A);
                    return V === void 0 && $ !== void 0 && (V = Mo($), F.addValue(A, V)), V
                },
                forEachValue: A => R.forEach(A),
                readValue: A => p[A] !== void 0 ? p[A] : a(b, A, C),
                setBaseTarget(A, $) {
                    j[A] = $
                },
                getBaseTarget(A) {
                    var $;
                    const {initial: V} = d,
                        Ce = typeof V == "string" || typeof V == "object" ? ($ = kp(d, V)) === null || $ === void 0 ? void 0 : $[A] : void 0;
                    if (V && Ce !== void 0)
                        return Ce;
                    if (n) {
                        const Ie = n(d, A);
                        if (Ie !== void 0 && !Yt(Ie))
                            return Ie
                    }
                    return B[A] !== void 0 && Ce === void 0 ? void 0 : j[A]
                },
                ..._,
                build() {
                    return Qe(), m
                },
                scheduleRender() {
                    Qt.render(ke, !1, !0)
                },
                syncRender: ke,
                setProps(A) {
                    (A.transformTemplate || d.transformTemplate) && F.scheduleRender(),
                    d = A,
                    _.updatePropListeners(A),
                    I = Nz(F, u(d), I)
                },
                getProps: () => d,
                getVariant: A => {
                    var $;
                    return ($ = d.variants) === null || $ === void 0 ? void 0 : $[A]
                },
                getDefaultTransition: () => d.transition,
                getTransformPagePoint: () => d.transformPagePoint,
                getVariantContext(A=!1) {
                    if (A)
                        return c == null ? void 0 : c.getVariantContext();
                    if (!L) {
                        const V = (c == null ? void 0 : c.getVariantContext()) || {};
                        return d.initial !== void 0 && (V.initial = d.initial), V
                    }
                    const $ = {};
                    for (let V = 0; V < Oz; V++) {
                        const Ce = hb[V],
                            Ie = d[Ce];
                        (ta(Ie) || Ie === !1) && ($[Ce] = Ie)
                    }
                    return $
                }
            };
        return F
    },
    hb = ["initial", ...Bp],
    Oz = hb.length;
function ef(e) {
    return typeof e == "string" && e.startsWith("var(--")
}
const mb = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Bz(e) {
    const t = mb.exec(e);
    if (!t)
        return [, ];
    const [, n, r] = t;
    return [n, r]
}
function tf(e, t, n=1) {
    const [r, o] = Bz(e);
    if (!r)
        return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    return i ? i.trim() : ef(o) ? tf(o, t, n + 1) : o
}
function Dz(e, {...t}, n) {
    const r = e.getInstance();
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.forEachValue(o => {
        const i = o.get();
        if (!ef(i))
            return;
        const a = tf(i, r);
        a && o.set(a)
    });
    for (const o in t) {
        const i = t[o];
        if (!ef(i))
            continue;
        const a = tf(i, r);
        !a || (t[o] = a, n && n[o] === void 0 && (n[o] = i))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const Vz = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
    gb = e => Vz.has(e),
    jz = e => Object.keys(e).some(gb),
    vb = (e, t) => {
        e.set(t, !1),
        e.set(t)
    },
    og = e => e === Dr || e === U;
var ig;
(function(e) {
    e.width = "width",
    e.height = "height",
    e.left = "left",
    e.right = "right",
    e.top = "top",
    e.bottom = "bottom"
})(ig || (ig = {}));
const ag = (e, t) => parseFloat(e.split(", ")[t]),
    sg = (e, t) => (n, {transform: r}) => {
        if (r === "none" || !r)
            return 0;
        const o = r.match(/^matrix3d\((.+)\)$/);
        if (o)
            return ag(o[1], t);
        {
            const i = r.match(/^matrix\((.+)\)$/);
            return i ? ag(i[1], e) : 0
        }
    },
    Wz = new Set(["x", "y", "z"]),
    Hz = pl.filter(e => !Wz.has(e));
function Uz(e) {
    const t = [];
    return Hz.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
    }), t.length && e.syncRender(), t
}
const lg = {
        width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
        height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
        top: (e, {top: t}) => parseFloat(t),
        left: (e, {left: t}) => parseFloat(t),
        bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
        right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
        x: sg(4, 13),
        y: sg(5, 14)
    },
    Gz = (e, t, n) => {
        const r = t.measureViewportBox(),
            o = t.getInstance(),
            i = getComputedStyle(o),
            {display: a} = i,
            s = {};
        a === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach(u => {
            s[u] = lg[u](r, i)
        }),
        t.syncRender();
        const l = t.measureViewportBox();
        return n.forEach(u => {
            const c = t.getValue(u);
            vb(c, s[u]),
            e[u] = lg[u](l, i)
        }), e
    },
    Kz = (e, t, n={}, r={}) => {
        t = {
            ...t
        },
        r = {
            ...r
        };
        const o = Object.keys(t).filter(gb);
        let i = [],
            a = !1;
        const s = [];
        if (o.forEach(l => {
            const u = e.getValue(l);
            if (!e.hasValue(l))
                return;
            let c = n[l],
                d = Zo(c);
            const f = t[l];
            let h;
            if (oa(f)) {
                const y = f.length,
                    S = f[0] === null ? 1 : 0;
                c = f[S],
                d = Zo(c);
                for (let C = S; C < y; C++)
                    h ? gl(Zo(f[C]) === h) : h = Zo(f[C])
            } else
                h = Zo(f);
            if (d !== h)
                if (og(d) && og(h)) {
                    const y = u.get();
                    typeof y == "string" && u.set(parseFloat(y)),
                    typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && h === U && (t[l] = f.map(parseFloat))
                } else
                    (d == null ? void 0 : d.transform) && (h == null ? void 0 : h.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(h.transform(c)) : t[l] = d.transform(f) : (a || (i = Uz(e), a = !0), s.push(l), r[l] = r[l] !== void 0 ? r[l] : t[l], vb(u, f))
        }), s.length) {
            const l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
                u = Gz(t, e, s);
            return i.length && i.forEach(([c, d]) => {
                e.getValue(c).set(d)
            }), e.syncRender(), Br && l !== null && window.scrollTo({
                top: l
            }), {
                target: u,
                transitionEnd: r
            }
        } else
            return {
                target: t,
                transitionEnd: r
            }
    };
function Yz(e, t, n, r) {
    return jz(t) ? Kz(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const Qz = (e, t, n, r) => {
    const o = Dz(e, t, r);
    return t = o.target, r = o.transitionEnd, Yz(e, t, n, r)
};
function Xz(e) {
    return window.getComputedStyle(e)
}
const yb = {
        treeType: "dom",
        readValueFromInstance(e, t) {
            if (va.has(t)) {
                const n = Ip(t);
                return n && n.default || 0
            } else {
                const n = Xz(e),
                    r = (tS(t) ? n.getPropertyValue(t) : n[t]) || 0;
                return typeof r == "string" ? r.trim() : r
            }
        },
        sortNodePosition(e, t) {
            return e.compareDocumentPosition(t) & 2 ? 1 : -1
        },
        getBaseTarget(e, t) {
            var n;
            return (n = e.style) === null || n === void 0 ? void 0 : n[t]
        },
        measureViewportBox(e, {transformPagePoint: t}) {
            return cb(e, t)
        },
        resetTransform(e, t, n) {
            const {transformTemplate: r} = n;
            t.style.transform = r ? r({}, "") : "none",
            e.scheduleRender()
        },
        restoreTransform(e, t) {
            e.style.transform = t.style.transform
        },
        removeValueFromRenderState(e, {vars: t, style: n}) {
            delete t[e],
            delete n[e]
        },
        makeTargetAnimatable(e, {transition: t, transitionEnd: n, ...r}, {transformValues: o}, i=!0) {
            let a = tz(r, t || {}, e);
            if (o && (n && (n = o(n)), r && (r = o(r)), a && (a = o(a))), i) {
                J6(e, r, a);
                const s = Qz(e, r, a, n);
                n = s.transitionEnd,
                r = s.target
            }
            return {
                transition: t,
                transitionEnd: n,
                ...r
            }
        },
        scrapeMotionValuesFromProps: wp,
        build(e, t, n, r, o) {
            e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"),
            Sp(t, n, r, o.transformTemplate)
        },
        render: hS
    },
    qz = pb(yb),
    Zz = pb({
        ...yb,
        getBaseTarget(e, t) {
            return e[t]
        },
        readValueFromInstance(e, t) {
            var n;
            return va.has(t) ? ((n = Ip(t)) === null || n === void 0 ? void 0 : n.default) || 0 : (t = mS.has(t) ? t : pS(t), e.getAttribute(t))
        },
        scrapeMotionValuesFromProps: vS,
        build(e, t, n, r, o) {
            xp(t, n, r, o.transformTemplate)
        },
        render: gS
    }),
    Jz = (e, t) => vp(e) ? Zz(t, {
        enableHardwareAcceleration: !1
    }) : qz(t, {
        enableHardwareAcceleration: !0
    });
function ug(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const Jo = {
        correct: (e, t) => {
            if (!t.target)
                return e;
            if (typeof e == "string")
                if (U.test(e))
                    e = parseFloat(e);
                else
                    return e;
            const n = ug(e, t.target.x),
                r = ug(e, t.target.y);
            return `${n}% ${r}%`
        }
    },
    cg = "_$css",
    eI = {
        correct: (e, {treeScale: t, projectionDelta: n}) => {
            const r = e,
                o = e.includes("var("),
                i = [];
            o && (e = e.replace(mb, h => (i.push(h), cg)));
            const a = Mn.parse(e);
            if (a.length > 5)
                return r;
            const s = Mn.createTransformer(e),
                l = typeof a[0] != "number" ? 1 : 0,
                u = n.x.scale * t.x,
                c = n.y.scale * t.y;
            a[0 + l] /= u,
            a[1 + l] /= c;
            const d = xe(u, c, .5);
            typeof a[2 + l] == "number" && (a[2 + l] /= d),
            typeof a[3 + l] == "number" && (a[3 + l] /= d);
            let f = s(a);
            if (o) {
                let h = 0;
                f = f.replace(cg, () => {
                    const y = i[h];
                    return h++, y
                })
            }
            return f
        }
    };
class tI extends D.Component {
    componentDidMount()
    {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o} = this.props,
            {projection: i} = t;
        p4(rI),
        i && (n.group && n.group.add(i), r && r.register && o && r.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }), i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove()
        })),
        xi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t)
    {
        const {layoutDependency: n, visualElement: r, drag: o, isPresent: i} = this.props,
            a = r.projection;
        return a && (a.isPresent = i, o || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || Qt.postRender(() => {
            var s;
            !((s = a.getStack()) === null || s === void 0) && s.members.length || this.safeToRemove()
        }))), null
    }
    componentDidUpdate()
    {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
    }
    componentWillUnmount()
    {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props,
            {projection: o} = t;
        o && (o.scheduleCheckAfterUnmount(), n != null && n.group && n.group.remove(o), r != null && r.deregister && r.deregister(o))
    }
    safeToRemove()
    {
        const {safeToRemove: t} = this.props;
        t == null || t()
    }
    render()
    {
        return null
    }
}
function nI(e) {
    const [t, n] = XS(),
        r = k.exports.useContext(gp);
    return P(tI, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: k.exports.useContext(J1),
        isPresent: t,
        safeToRemove: n
    })
}
const rI = {
        borderRadius: {
            ...Jo,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
        },
        borderTopLeftRadius: Jo,
        borderTopRightRadius: Jo,
        borderBottomLeftRadius: Jo,
        borderBottomRightRadius: Jo,
        boxShadow: eI
    },
    oI = {
        measureLayout: nI
    };
function iI(e, t, n={}) {
    const r = Yt(e) ? e : Mo(e);
    return Np("", r, t, n), {
        stop: () => r.stop(),
        isAnimating: () => r.isAnimating()
    }
}
const Sb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    aI = Sb.length,
    dg = e => typeof e == "string" ? parseFloat(e) : e,
    fg = e => typeof e == "number" || U.test(e);
function sI(e, t, n, r, o, i) {
    var a,
        s,
        l,
        u;
    o ? (e.opacity = xe(0, (a = n.opacity) !== null && a !== void 0 ? a : 1, lI(r)), e.opacityExit = xe((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, uI(r))) : i && (e.opacity = xe((l = t.opacity) !== null && l !== void 0 ? l : 1, (u = n.opacity) !== null && u !== void 0 ? u : 1, r));
    for (let c = 0; c < aI; c++) {
        const d = `border${Sb[c]}Radius`;
        let f = pg(t, d),
            h = pg(n, d);
        if (f === void 0 && h === void 0)
            continue;
        f || (f = 0),
        h || (h = 0),
        f === 0 || h === 0 || fg(f) === fg(h) ? (e[d] = Math.max(xe(dg(f), dg(h), r), 0), (dn.test(h) || dn.test(f)) && (e[d] += "%")) : e[d] = h
    }
    (t.rotate || n.rotate) && (e.rotate = xe(t.rotate || 0, n.rotate || 0, r))
}
function pg(e, t) {
    var n;
    return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius
}
const lI = bb(0, .5, Ap),
    uI = bb(.5, .95, Pp);
function bb(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(ia(e, t, r))
}
function hg(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Dt(e, t) {
    hg(e.x, t.x),
    hg(e.y, t.y)
}
function mg(e, t, n, r, o) {
    return e -= t, e = wl(e, 1 / n, r), o !== void 0 && (e = wl(e, 1 / o, r)), e
}
function cI(e, t=0, n=1, r=.5, o, i=e, a=e) {
    if (dn.test(t) && (t = parseFloat(t), t = xe(a.min, a.max, t / 100) - a.min), typeof t != "number")
        return;
    let s = xe(i.min, i.max, r);
    e === i && (s -= t),
    e.min = mg(e.min, t, n, s, o),
    e.max = mg(e.max, t, n, s, o)
}
function gg(e, t, [n, r, o], i, a) {
    cI(e, t[n], t[r], t[o], t.scale, i, a)
}
const dI = ["x", "scaleX", "originX"],
    fI = ["y", "scaleY", "originY"];
function vg(e, t, n, r) {
    gg(e.x, t, dI, n == null ? void 0 : n.x, r == null ? void 0 : r.x),
    gg(e.y, t, fI, n == null ? void 0 : n.y, r == null ? void 0 : r.y)
}
function yg(e) {
    return e.translate === 0 && e.scale === 1
}
function xb(e) {
    return yg(e.x) && yg(e.y)
}
function wb(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function Sg(e) {
    return xt(e.x) / xt(e.y)
}
function pI(e, t, n=.1) {
    return zp(e, t) <= n
}
class hI {
    constructor()
    {
        this.members = []
    }
    add(t)
    {
        $p(this.members, t),
        t.scheduleRender()
    }
    remove(t)
    {
        if (Op(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t)
    {
        const n = this.members.findIndex(o => t === o);
        if (n === 0)
            return !1;
        let r;
        for (let o = n; o >= 0; o--) {
            const i = this.members[o];
            if (i.isPresent !== !1) {
                r = i;
                break
            }
        }
        return r ? (this.promote(r), !0) : !1
    }
    promote(t, n)
    {
        var r;
        const o = this.lead;
        if (t !== o && (this.prevLead = o, this.lead = t, t.show(), o)) {
            o.instance && o.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = o,
            n && (t.resumeFrom.preserveOpacity = !0),
            o.snapshot && (t.snapshot = o.snapshot, t.snapshot.latestValues = o.animationValues || o.latestValues, t.snapshot.isShared = !0),
            !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && o.hide()
        }
    }
    exitAnimationComplete()
    {
        this.members.forEach(t => {
            var n,
                r,
                o,
                i,
                a;
            (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n),
            (a = (o = t.resumingFrom) === null || o === void 0 ? void 0 : (i = o.options).onExitComplete) === null || a === void 0 || a.call(i)
        })
    }
    scheduleRender()
    {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        })
    }
    removeLeadSnapshot()
    {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
const mI = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function bg(e, t, n) {
    const r = e.x.translate / t.x,
        o = e.y.translate / t.y;
    let i = `translate3d(${r}px, ${o}px, 0) `;
    if (i += `scale(${1 / t.x}, ${1 / t.y}) `, n) {
        const {rotate: l, rotateX: u, rotateY: c} = n;
        l && (i += `rotate(${l}deg) `),
        u && (i += `rotateX(${u}deg) `),
        c && (i += `rotateY(${c}deg) `)
    }
    const a = e.x.scale * t.x,
        s = e.y.scale * t.y;
    return i += `scale(${a}, ${s})`, i === mI ? "none" : i
}
const gI = (e, t) => e.depth - t.depth;
class vI {
    constructor()
    {
        this.children = [],
        this.isDirty = !1
    }
    add(t)
    {
        $p(this.children, t),
        this.isDirty = !0
    }
    remove(t)
    {
        Op(this.children, t),
        this.isDirty = !0
    }
    forEach(t)
    {
        this.isDirty && this.children.sort(gI),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
const xg = ["", "X", "Y", "Z"],
    wg = 1e3;
function kb({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o}) {
    return class {
        constructor(a, s={}, l=t == null ? void 0 : t())
        {
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.potentialNodes = new Map,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            },
            this.updateProjection = () => {
                this.nodes.forEach(wI),
                this.nodes.forEach(kI)
            },
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.id = a,
            this.latestValues = s,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0,
            a && this.root.registerPotentialNode(a, this);
            for (let u = 0; u < this.path.length; u++)
                this.path[u].shouldResetTransform = !0;
            this.root === this && (this.nodes = new vI)
        }
        addEventListener(a, s)
        {
            return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Ci), this.eventHandlers.get(a).add(s)
        }
        notifyListeners(a, ...s)
        {
            const l = this.eventHandlers.get(a);
            l == null || l.notify(...s)
        }
        hasListeners(a)
        {
            return this.eventHandlers.has(a)
        }
        registerPotentialNode(a, s)
        {
            this.potentialNodes.set(a, s)
        }
        mount(a, s=!1)
        {
            var l;
            if (this.instance)
                return;
            this.isSVG = a instanceof SVGElement && a.tagName !== "svg",
            this.instance = a;
            const {layoutId: u, layout: c, visualElement: d} = this.options;
            if (d && !d.getInstance() && d.mount(a), this.root.nodes.add(this), (l = this.parent) === null || l === void 0 || l.children.add(this), this.id && this.root.potentialNodes.delete(this.id), s && (c || u) && (this.isLayoutDirty = !0), e) {
                let f;
                const h = () => this.root.updateBlockedByResize = !1;
                e(a, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = tb(h, 250),
                    xi.hasAnimatedSinceResize && (xi.hasAnimatedSinceResize = !1, this.nodes.forEach(Cg))
                })
            }
            u && this.root.registerSharedNode(u, this),
            this.options.animate !== !1 && d && (u || c) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: h, hasRelativeTargetChanged: y, layout: S}) => {
                var C,
                    g,
                    p,
                    m,
                    b;
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const _ = (g = (C = this.options.transition) !== null && C !== void 0 ? C : d.getDefaultTransition()) !== null && g !== void 0 ? g : PI,
                    {onLayoutAnimationStart: R, onLayoutAnimationComplete: E} = d.getProps(),
                    I = !this.targetLayout || !wb(this.targetLayout, S) || y,
                    j = !h && y;
                if (((p = this.resumeFrom) === null || p === void 0 ? void 0 : p.instance) || j || h && (I || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, j);
                    const B = {
                        ...Fp(_, "layout"),
                        onPlay: R,
                        onComplete: E
                    };
                    d.shouldReduceMotion && (B.delay = 0, B.type = !1),
                    this.startAnimation(B)
                } else
                    !h && this.animationProgress === 0 && Cg(this),
                    this.isLead() && ((b = (m = this.options).onExitComplete) === null || b === void 0 || b.call(m));
                this.targetLayout = S
            })
        }
        unmount()
        {
            var a,
                s;
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this),
            (a = this.getStack()) === null || a === void 0 || a.remove(this),
            (s = this.parent) === null || s === void 0 || s.children.delete(this),
            this.instance = void 0,
            Fr.preRender(this.updateProjection)
        }
        blockUpdate()
        {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate()
        {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked()
        {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked()
        {
            var a;
            return this.isAnimationBlocked || ((a = this.parent) === null || a === void 0 ? void 0 : a.isTreeAnimationBlocked()) || !1
        }
        startUpdate()
        {
            var a;
            this.isUpdateBlocked() || (this.isUpdating = !0, (a = this.nodes) === null || a === void 0 || a.forEach(CI))
        }
        willUpdate(a=!0)
        {
            var s,
                l,
                u;
            if (this.root.isUpdateBlocked()) {
                (l = (s = this.options).onExitComplete) === null || l === void 0 || l.call(s);
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let h = 0; h < this.path.length; h++) {
                const y = this.path[h];
                y.shouldResetTransform = !0,
                y.updateScroll()
            }
            const {layoutId: c, layout: d} = this.options;
            if (c === void 0 && !d)
                return;
            const f = (u = this.options.visualElement) === null || u === void 0 ? void 0 : u.getProps().transformTemplate;
            this.prevTransformTemplateValue = f == null ? void 0 : f(this.latestValues, ""),
            this.updateSnapshot(),
            a && this.notifyListeners("willUpdate")
        }
        didUpdate()
        {
            if (this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(kg);
                return
            }
            !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(RI), this.potentialNodes.clear()), this.nodes.forEach(xI), this.nodes.forEach(yI), this.nodes.forEach(SI), this.clearAllSnapshots(), bc.update(), bc.preRender(), bc.render())
        }
        clearAllSnapshots()
        {
            this.nodes.forEach(bI),
            this.sharedNodes.forEach(_I)
        }
        scheduleUpdateProjection()
        {
            Qt.preRender(this.updateProjection, !1, !0)
        }
        scheduleCheckAfterUnmount()
        {
            Qt.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            })
        }
        updateSnapshot()
        {
            if (this.snapshot || !this.instance)
                return;
            const a = this.measure(),
                s = this.removeTransform(this.removeElementScroll(a));
            Pg(s),
            this.snapshot = {
                measured: a,
                layout: s,
                latestValues: {}
            }
        }
        updateLayout()
        {
            var a;
            if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let u = 0; u < this.path.length; u++)
                    this.path[u].updateScroll();
            const s = this.measure();
            Pg(s);
            const l = this.layout;
            this.layout = {
                measured: s,
                actual: this.removeElementScroll(s)
            },
            this.layoutCorrected = Oe(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.actual),
            (a = this.options.visualElement) === null || a === void 0 || a.notifyLayoutMeasure(this.layout.actual, l == null ? void 0 : l.actual)
        }
        updateScroll()
        {
            this.options.layoutScroll && this.instance && (this.isScrollRoot = r(this.instance), this.scroll = n(this.instance))
        }
        resetTransform()
        {
            var a;
            if (!o)
                return;
            const s = this.isLayoutDirty || this.shouldResetTransform,
                l = this.projectionDelta && !xb(this.projectionDelta),
                u = (a = this.options.visualElement) === null || a === void 0 ? void 0 : a.getProps().transformTemplate,
                c = u == null ? void 0 : u(this.latestValues, ""),
                d = c !== this.prevTransformTemplateValue;
            s && (l || vr(this.latestValues) || d) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender())
        }
        measure()
        {
            const {visualElement: a} = this.options;
            if (!a)
                return Oe();
            const s = a.measureViewportBox(),
                {scroll: l} = this.root;
            return l && (Vn(s.x, l.x), Vn(s.y, l.y)), s
        }
        removeElementScroll(a)
        {
            const s = Oe();
            Dt(s, a);
            for (let l = 0; l < this.path.length; l++) {
                const u = this.path[l],
                    {scroll: c, options: d, isScrollRoot: f} = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (f) {
                        Dt(s, a);
                        const {scroll: h} = this.root;
                        h && (Vn(s.x, -h.x), Vn(s.y, -h.y))
                    }
                    Vn(s.x, c.x),
                    Vn(s.y, c.y)
                }
            }
            return s
        }
        applyTransform(a, s=!1)
        {
            const l = Oe();
            Dt(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !s && c.options.layoutScroll && c.scroll && c !== c.root && so(l, {
                    x: -c.scroll.x,
                    y: -c.scroll.y
                }),
                vr(c.latestValues) && so(l, c.latestValues)
            }
            return vr(this.latestValues) && so(l, this.latestValues), l
        }
        removeTransform(a)
        {
            var s;
            const l = Oe();
            Dt(l, a);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!c.instance || !vr(c.latestValues))
                    continue;
                qd(c.latestValues) && c.updateSnapshot();
                const d = Oe(),
                    f = c.measure();
                Dt(d, f),
                vg(l, c.latestValues, (s = c.snapshot) === null || s === void 0 ? void 0 : s.layout, d)
            }
            return vr(this.latestValues) && vg(l, this.latestValues), l
        }
        setTargetDelta(a)
        {
            this.targetDelta = a,
            this.root.scheduleUpdateProjection()
        }
        setOptions(a)
        {
            this.options = {
                ...this.options,
                ...a,
                crossfade: a.crossfade !== void 0 ? a.crossfade : !0
            }
        }
        clearMeasurements()
        {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        resolveTargetDelta()
        {
            var a;
            const {layout: s, layoutId: l} = this.options;
            !this.layout || !(s || l) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), Ti(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Dt(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Oe(), this.targetWithTransforms = Oe()), this.relativeTarget && this.relativeTargetOrigin && ((a = this.relativeParent) === null || a === void 0 ? void 0 : a.target) ? mz(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Dt(this.target, this.layout.actual), ub(this.target, this.targetDelta)) : Dt(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = Oe(), this.relativeTargetOrigin = Oe(), Ti(this.relativeTargetOrigin, this.target, this.relativeParent.target), Dt(this.relativeTarget, this.relativeTargetOrigin)))))
        }
        getClosestProjectingParent()
        {
            if (!(!this.parent || qd(this.parent.latestValues) || lb(this.parent.latestValues)))
                return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
        }
        calcProjection()
        {
            var a;
            const {layout: s, layoutId: l} = this.options;
            if (this.isTreeAnimating = Boolean(((a = this.parent) === null || a === void 0 ? void 0 : a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || l))
                return;
            const u = this.getLead();
            Dt(this.layoutCorrected, this.layout.actual),
            Cz(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== u);
            const {target: c} = u;
            if (!c)
                return;
            this.projectionDelta || (this.projectionDelta = Ei(), this.projectionDeltaWithTransform = Ei());
            const d = this.treeScale.x,
                f = this.treeScale.y,
                h = this.projectionTransform;
            _i(this.projectionDelta, this.layoutCorrected, c, this.latestValues),
            this.projectionTransform = bg(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== h || this.treeScale.x !== d || this.treeScale.y !== f) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", c))
        }
        hide()
        {
            this.isVisible = !1
        }
        show()
        {
            this.isVisible = !0
        }
        scheduleRender(a=!0)
        {
            var s,
                l,
                u;
            (l = (s = this.options).scheduleRender) === null || l === void 0 || l.call(s),
            a && ((u = this.getStack()) === null || u === void 0 || u.scheduleRender()),
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(a, s=!1)
        {
            var l;
            const u = this.snapshot,
                c = (u == null ? void 0 : u.latestValues) || {},
                d = {
                    ...this.latestValues
                },
                f = Ei();
            this.relativeTarget = this.relativeTargetOrigin = void 0,
            this.attemptToResolveRelativeTarget = !s;
            const h = Oe(),
                y = u == null ? void 0 : u.isShared,
                S = (((l = this.getStack()) === null || l === void 0 ? void 0 : l.members.length) || 0) <= 1,
                C = Boolean(y && !S && this.options.crossfade === !0 && !this.path.some(EI));
            this.animationProgress = 0,
            this.mixTargetDelta = g => {
                var p;
                const m = g / 1e3;
                _g(f.x, a.x, m),
                _g(f.y, a.y, m),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && ((p = this.relativeParent) === null || p === void 0 ? void 0 : p.layout) && (Ti(h, this.layout.actual, this.relativeParent.layout.actual), TI(this.relativeTarget, this.relativeTargetOrigin, h, m)),
                y && (this.animationValues = d, sI(d, c, this.latestValues, m, C, S)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = m
            },
            this.mixTargetDelta(0)
        }
        startAnimation(a)
        {
            var s,
                l;
            this.notifyListeners("animationStart"),
            (s = this.currentAnimation) === null || s === void 0 || s.stop(),
            this.resumingFrom && ((l = this.resumingFrom.currentAnimation) === null || l === void 0 || l.stop()),
            this.pendingAnimation && (Fr.update(this.pendingAnimation), this.pendingAnimation = void 0),
            this.pendingAnimation = Qt.update(() => {
                xi.hasAnimatedSinceResize = !0,
                this.currentAnimation = iI(0, wg, {
                    ...a,
                    onUpdate: u => {
                        var c;
                        this.mixTargetDelta(u),
                        (c = a.onUpdate) === null || c === void 0 || c.call(a, u)
                    },
                    onComplete: () => {
                        var u;
                        (u = a.onComplete) === null || u === void 0 || u.call(a),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            })
        }
        completeAnimation()
        {
            var a;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0),
            (a = this.getStack()) === null || a === void 0 || a.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation()
        {
            var a;
            this.currentAnimation && ((a = this.mixTargetDelta) === null || a === void 0 || a.call(this, wg), this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget()
        {
            const a = this.getLead();
            let {targetWithTransforms: s, target: l, layout: u, latestValues: c} = a;
            if (!(!s || !l || !u)) {
                if (this !== a && this.layout && u && Cb(this.options.animationType, this.layout.actual, u.actual)) {
                    l = this.target || Oe();
                    const d = xt(this.layout.actual.x);
                    l.x.min = a.target.x.min,
                    l.x.max = l.x.min + d;
                    const f = xt(this.layout.actual.y);
                    l.y.min = a.target.y.min,
                    l.y.max = l.y.min + f
                }
                Dt(s, l),
                so(s, c),
                _i(this.projectionDeltaWithTransform, this.layoutCorrected, s, c)
            }
        }
        registerSharedNode(a, s)
        {
            var l,
                u,
                c;
            this.sharedNodes.has(a) || this.sharedNodes.set(a, new hI),
            this.sharedNodes.get(a).add(s),
            s.promote({
                transition: (l = s.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
                preserveFollowOpacity: (c = (u = s.options.initialPromotionConfig) === null || u === void 0 ? void 0 : u.shouldPreserveFollowOpacity) === null || c === void 0 ? void 0 : c.call(u, s)
            })
        }
        isLead()
        {
            const a = this.getStack();
            return a ? a.lead === this : !0
        }
        getLead()
        {
            var a;
            const {layoutId: s} = this.options;
            return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this
        }
        getPrevLead()
        {
            var a;
            const {layoutId: s} = this.options;
            return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0
        }
        getStack()
        {
            const {layoutId: a} = this.options;
            if (a)
                return this.root.sharedNodes.get(a)
        }
        promote({needsReset: a, transition: s, preserveFollowOpacity: l}={})
        {
            const u = this.getStack();
            u && u.promote(this, l),
            a && (this.projectionDelta = void 0, this.needsReset = !0),
            s && this.setOptions({
                transition: s
            })
        }
        relegate()
        {
            const a = this.getStack();
            return a ? a.relegate(this) : !1
        }
        resetRotation()
        {
            const {visualElement: a} = this.options;
            if (!a)
                return;
            let s = !1;
            const l = {};
            for (let u = 0; u < xg.length; u++) {
                const c = xg[u],
                    d = "rotate" + c;
                !a.getStaticValue(d) || (s = !0, l[d] = a.getStaticValue(d), a.setStaticValue(d, 0))
            }
            if (!!s) {
                a == null || a.syncRender();
                for (const u in l)
                    a.setStaticValue(u, l[u]);
                a.scheduleRender()
            }
        }
        getProjectionStyles(a={})
        {
            var s,
                l,
                u;
            const c = {};
            if (!this.instance || this.isSVG)
                return c;
            if (this.isVisible)
                c.visibility = "";
            else
                return {
                    visibility: "hidden"
                };
            const d = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate;
            if (this.needsReset)
                return this.needsReset = !1, c.opacity = "", c.pointerEvents = As(a.pointerEvents) || "", c.transform = d ? d(this.latestValues, "") : "none", c;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const C = {};
                return this.options.layoutId && (C.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, C.pointerEvents = As(a.pointerEvents) || ""), this.hasProjected && !vr(this.latestValues) && (C.transform = d ? d({}, "") : "none", this.hasProjected = !1), C
            }
            const h = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            c.transform = bg(this.projectionDeltaWithTransform, this.treeScale, h),
            d && (c.transform = d(h, c.transform));
            const {x: y, y: S} = this.projectionDelta;
            c.transformOrigin = `${y.origin * 100}% ${S.origin * 100}% 0`,
            f.animationValues ? c.opacity = f === this ? (u = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = f === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
            for (const C in fl) {
                if (h[C] === void 0)
                    continue;
                const {correct: g, applyTo: p} = fl[C],
                    m = g(h[C], f);
                if (p) {
                    const b = p.length;
                    for (let _ = 0; _ < b; _++)
                        c[p[_]] = m
                } else
                    c[C] = m
            }
            return this.options.layoutId && (c.pointerEvents = f === this ? As(a.pointerEvents) || "" : "none"), c
        }
        clearSnapshot()
        {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree()
        {
            this.root.nodes.forEach(a => {
                var s;
                return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop()
            }),
            this.root.nodes.forEach(kg),
            this.root.sharedNodes.clear()
        }
    }
}
function yI(e) {
    e.updateLayout()
}
function SI(e) {
    var t,
        n,
        r;
    const o = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
        const {actual: i, measured: a} = e.layout,
            {animationType: s} = e.options;
        s === "size" ? tn(f => {
            const h = o.isShared ? o.measured[f] : o.layout[f],
                y = xt(h);
            h.min = i[f].min,
            h.max = h.min + y
        }) : Cb(s, o.layout, i) && tn(f => {
            const h = o.isShared ? o.measured[f] : o.layout[f],
                y = xt(i[f]);
            h.max = h.min + y
        });
        const l = Ei();
        _i(l, i, o.layout);
        const u = Ei();
        o.isShared ? _i(u, e.applyTransform(a, !0), o.measured) : _i(u, i, o.layout);
        const c = !xb(l);
        let d = !1;
        if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
            const {snapshot: f, layout: h} = e.relativeParent;
            if (f && h) {
                const y = Oe();
                Ti(y, o.layout, f.layout);
                const S = Oe();
                Ti(S, i, h.actual),
                wb(y, S) || (d = !0)
            }
        }
        e.notifyListeners("didUpdate", {
            layout: i,
            snapshot: o,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: d
        })
    } else
        e.isLead() && ((r = (n = e.options).onExitComplete) === null || r === void 0 || r.call(n));
    e.options.transition = void 0
}
function bI(e) {
    e.clearSnapshot()
}
function kg(e) {
    e.clearMeasurements()
}
function xI(e) {
    const {visualElement: t} = e.options;
    t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(),
    e.resetTransform()
}
function Cg(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0
}
function wI(e) {
    e.resolveTargetDelta()
}
function kI(e) {
    e.calcProjection()
}
function CI(e) {
    e.resetRotation()
}
function _I(e) {
    e.removeLeadSnapshot()
}
function _g(e, t, n) {
    e.translate = xe(t.translate, 0, n),
    e.scale = xe(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Tg(e, t, n, r) {
    e.min = xe(t.min, n.min, r),
    e.max = xe(t.max, n.max, r)
}
function TI(e, t, n, r) {
    Tg(e.x, t.x, n.x, r),
    Tg(e.y, t.y, n.y, r)
}
function EI(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const PI = {
    duration: .45,
    ease: [.4, 0, .1, 1]
};
function RI(e, t) {
    let n = e.root;
    for (let i = e.path.length - 1; i >= 0; i--)
        if (Boolean(e.path[i].instance)) {
            n = e.path[i];
            break
        }
    const o = (n && n !== e.root ? n.instance : document).querySelector(`[data-projection-id="${t}"]`);
    o && e.mount(o, !0)
}
function Eg(e) {
    e.min = Math.round(e.min),
    e.max = Math.round(e.max)
}
function Pg(e) {
    Eg(e.x),
    Eg(e.y)
}
function Cb(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !pI(Sg(t), Sg(n), .2)
}
const AI = kb({
        attachResizeListener: (e, t) => du(e, "resize", t),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
        }),
        checkIsScrollRoot: () => !0
    }),
    Cc = {
        current: void 0
    },
    MI = kb({
        measureScroll: e => ({
            x: e.scrollLeft,
            y: e.scrollTop
        }),
        defaultParent: () => {
            if (!Cc.current) {
                const e = new AI(0, {});
                e.mount(window),
                e.setOptions({
                    layoutScroll: !0
                }),
                Cc.current = e
            }
            return Cc.current
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none"
        },
        checkIsScrollRoot: e => Boolean(window.getComputedStyle(e).position === "fixed")
    }),
    zI = {
        ...fz,
        ...w6,
        ...Iz,
        ...oI
    },
    kl = d4((e, t) => X4(e, t, zI, Jz, MI));
function _b() {
    const e = k.exports.useRef(!1);
    return dl(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}
function II() {
    const e = _b(),
        [t, n] = k.exports.useState(0),
        r = k.exports.useCallback(() => {
            e.current && n(t + 1)
        }, [t]);
    return [k.exports.useCallback(() => Qt.postRender(r), [r]), t]
}
class LI extends k.exports.Component {
    getSnapshotBeforeUpdate(t)
    {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render()
    {
        return this.props.children
    }
}
function FI({children: e, isPresent: t}) {
    const n = k.exports.useId(),
        r = k.exports.useRef(null),
        o = k.exports.useRef({
            width: 0,
            height: 0,
            top: 0,
            left: 0
        });
    return k.exports.useInsertionEffect(() => {
        const {width: i, height: a, top: s, left: l} = o.current;
        if (t || !r.current || !i || !a)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${
        i}px !important;
            height: ${a}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `

        ), () => {
            document.head.removeChild(u)
        }
    }, [t]), P(LI, {
        isPresent: t,
        childRef: r,
        sizeRef: o,
        children: k.exports.cloneElement(e, {
            ref: r
        })
    })
}
const _c = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: i, mode: a}) => {
    const s = cu(NI),
        l = k.exports.useId(),
        u = k.exports.useMemo(() => ({
            id: l,
            initial: t,
            isPresent: n,
            custom: o,
            onExitComplete: c => {
                s.set(c, !0);
                for (const d of s.values())
                    if (!d)
                        return;
                r && r()
            },
            register: c => (s.set(c, !1), () => s.delete(c))
        }), i ? void 0 : [n]);
    return k.exports.useMemo(() => {
        s.forEach((c, d) => s.set(d, !1))
    }, [n]), k.exports.useEffect(() => {
        !n && !s.size && r && r()
    }, [n]), a === "popLayout" && (e = P(FI, {
        isPresent: n,
        children: e
    })), P($o.Provider, {
        value: u,
        children: e
    })
};
function NI() {
    return new Map
}
const Gr = e => e.key || "";
function $I(e, t) {
    e.forEach(n => {
        const r = Gr(n);
        t.set(r, n)
    })
}
function OI(e) {
    const t = [];
    return k.exports.Children.forEach(e, n => {
        k.exports.isValidElement(n) && t.push(n)
    }), t
}
const Is = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: o, presenceAffectsLayout: i=!0, mode: a="sync"}) => {
    o && (a = "wait", QS(!1, "Replace exitBeforeEnter with mode='wait'"));
    let [s] = II();
    const l = k.exports.useContext(gp).forceRender;
    l && (s = l);
    const u = _b(),
        c = OI(e);
    let d = c;
    const f = new Set,
        h = k.exports.useRef(d),
        y = k.exports.useRef(new Map).current,
        S = k.exports.useRef(!0);
    if (dl(() => {
        S.current = !1,
        $I(c, y),
        h.current = d
    }), _p(() => {
        S.current = !0,
        y.clear(),
        f.clear()
    }), S.current)
        return P(Ki, {
            children: d.map(m => P(_c, {
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: i,
                mode: a,
                children: m
            }, Gr(m)))
        });
    d = [...d];
    const C = h.current.map(Gr),
        g = c.map(Gr),
        p = C.length;
    for (let m = 0; m < p; m++) {
        const b = C[m];
        g.indexOf(b) === -1 && f.add(b)
    }
    return a === "wait" && f.size && (d = []), f.forEach(m => {
        if (g.indexOf(m) !== -1)
            return;
        const b = y.get(m);
        if (!b)
            return;
        const _ = C.indexOf(m),
            R = () => {
                y.delete(m),
                f.delete(m);
                const E = h.current.findIndex(I => I.key === m);
                if (h.current.splice(E, 1), !f.size) {
                    if (h.current = c, u.current === !1)
                        return;
                    s(),
                    r && r()
                }
            };
        d.splice(_, 0, P(_c, {
            isPresent: !1,
            onExitComplete: R,
            custom: t,
            presenceAffectsLayout: i,
            mode: a,
            children: b
        }, Gr(b)))
    }), d = d.map(m => {
        const b = m.key;
        return f.has(b) ? m : P(_c, {
            isPresent: !0,
            presenceAffectsLayout: i,
            mode: a,
            children: m
        }, Gr(m))
    }), YS !== "production" && a === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), P(Ki, {
        children: f.size ? d : d.map(m => k.exports.cloneElement(m))
    })
};
var BI = (...e) => e.filter(Boolean).join(" "),
    DI = q_({
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    }),
    Dp = W((e, t) => {
        const n = Tt("Spinner", e),
            {label: r="Loading...", thickness: o="2px", speed: i="0.45s", emptyColor: a="transparent", className: s, ...l} = ze(e),
            u = BI("chakra-spinner", s),
            c = {
                display: "inline-block",
                borderColor: "currentColor",
                borderStyle: "solid",
                borderRadius: "99999px",
                borderWidth: o,
                borderBottomColor: a,
                borderLeftColor: a,
                animation: `${DI} ${i} linear infinite`,
                ...n
            };
        return D.createElement(H.div, {
            ref: t,
            __css: c,
            className: u,
            ...l
        }, r && D.createElement(H.span, {
            srOnly: !0
        }, r))
    });
Dp.displayName = "Spinner";
var vu = (...e) => e.filter(Boolean).join(" ");
function VI(e) {
    return P(Or, {
        viewBox: "0 0 24 24",
        ...e,
        children: P("path", {
            fill: "currentColor",
            d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        })
    })
}
function jI(e) {
    return P(Or, {
        viewBox: "0 0 24 24",
        ...e,
        children: P("path", {
            fill: "currentColor",
            d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
        })
    })
}
function Rg(e) {
    return P(Or, {
        viewBox: "0 0 24 24",
        ...e,
        children: P("path", {
            fill: "currentColor",
            d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        })
    })
}
var [WI, HI] = fn({
        name: "AlertContext",
        hookName: "useAlertContext",
        providerName: "<Alert />"
    }),
    [UI, Vp] = fn({
        name: "AlertStylesContext",
        hookName: "useAlertStyles",
        providerName: "<Alert />"
    }),
    Tb = {
        info: {
            icon: jI,
            colorScheme: "blue"
        },
        warning: {
            icon: Rg,
            colorScheme: "orange"
        },
        success: {
            icon: VI,
            colorScheme: "green"
        },
        error: {
            icon: Rg,
            colorScheme: "red"
        },
        loading: {
            icon: Dp,
            colorScheme: "blue"
        }
    };
function GI(e) {
    return Tb[e].colorScheme
}
function KI(e) {
    return Tb[e].icon
}
var jp = W(function(t, n) {
    var u;
    const {status: r="info", addRole: o=!0, ...i} = ze(t),
        a = (u = t.colorScheme) != null ? u : GI(r),
        s = No("Alert", {
            ...t,
            colorScheme: a
        }),
        l = {
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            ...s.container
        };
    return D.createElement(WI, {
        value: {
            status: r
        }
    }, D.createElement(UI, {
        value: s
    }, D.createElement(H.div, {
        role: o ? "alert" : void 0,
        ref: n,
        ...i,
        className: vu("chakra-alert", t.className),
        __css: l
    })))
});
jp.displayName = "Alert";
var Wp = W(function(t, n) {
    const r = Vp(),
        o = {
            display: "inline",
            ...r.description
        };
    return D.createElement(H.div, {
        ref: n,
        ...t,
        className: vu("chakra-alert__desc", t.className),
        __css: o
    })
});
Wp.displayName = "AlertDescription";
function Hp(e) {
    const {status: t} = HI(),
        n = KI(t),
        r = Vp(),
        o = t === "loading" ? r.spinner : r.icon;
    return D.createElement(H.span, {
        display: "inherit",
        ...e,
        className: vu("chakra-alert__icon", e.className),
        __css: o
    }, e.children || P(n, {
        h: "100%",
        w: "100%"
    }))
}
Hp.displayName = "AlertIcon";
var Up = W(function(t, n) {
    const r = Vp();
    return D.createElement(H.div, {
        ref: n,
        ...t,
        className: vu("chakra-alert__title", t.className),
        __css: r.title
    })
});
Up.displayName = "AlertTitle";
function Gp(e) {
    return k.exports.Children.toArray(e).filter(t => k.exports.isValidElement(t))
}
var yu = (...e) => e.filter(Boolean).join(" "),
    Ag = e => e ? "" : void 0,
    [YI, QI] = fn({
        strict: !1,
        name: "ButtonGroupContext"
    });
function nf(e) {
    const {children: t, className: n, ...r} = e,
        o = k.exports.isValidElement(t) ? k.exports.cloneElement(t, {
            "aria-hidden": !0,
            focusable: !1
        }) : t,
        i = yu("chakra-button__icon", n);
    return D.createElement(H.span, {
        display: "inline-flex",
        alignSelf: "center",
        flexShrink: 0,
        ...r,
        className: i
    }, o)
}
nf.displayName = "ButtonIcon";
function rf(e) {
    const {label: t, placement: n, spacing: r="0.5rem", children: o=P(Dp, {
            color: "currentColor",
            width: "1em",
            height: "1em"
        }), className: i, __css: a, ...s} = e,
        l = yu("chakra-button__spinner", i),
        u = n === "start" ? "marginEnd" : "marginStart",
        c = k.exports.useMemo(() => ({
            display: "flex",
            alignItems: "center",
            position: t ? "relative" : "absolute",
            [u]: t ? r : 0,
            fontSize: "1em",
            lineHeight: "normal",
            ...a
        }), [a, t, u, r]);
    return D.createElement(H.div, {
        className: l,
        ...s,
        __css: c
    }, o)
}
rf.displayName = "ButtonSpinner";
function XI(e) {
    const [t, n] = k.exports.useState(!e);
    return {
        ref: k.exports.useCallback(i => {
            !i || n(i.tagName === "BUTTON")
        }, []),
        type: t ? "button" : void 0
    }
}
var Kp = W((e, t) => {
    const n = QI(),
        r = Tt("Button", {
            ...n,
            ...e
        }),
        {isDisabled: o=n == null ? void 0 : n.isDisabled, isLoading: i, isActive: a, children: s, leftIcon: l, rightIcon: u, loadingText: c, iconSpacing: d="0.5rem", type: f, spinner: h, spinnerPlacement: y="start", className: S, as: C, ...g} = ze(e),
        p = k.exports.useMemo(() => {
            const R = {
                ...r == null ? void 0 : r._focus,
                zIndex: 1
            };
            return {
                display: "inline-flex",
                appearance: "none",
                alignItems: "center",
                justifyContent: "center",
                userSelect: "none",
                position: "relative",
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                outline: "none",
                ...r,
                ...!!n && {
                    _focus: R
                }
            }
        }, [r, n]),
        {ref: m, type: b} = XI(C),
        _ = {
            rightIcon: u,
            leftIcon: l,
            iconSpacing: d,
            children: s
        };
    return D.createElement(H.button, {
        disabled: o || i,
        ref: XA(t, m),
        as: C,
        type: f != null ? f : b,
        "data-active": Ag(a),
        "data-loading": Ag(i),
        __css: p,
        className: yu("chakra-button", S),
        ...g
    }, i && y === "start" && P(rf, {
        className: "chakra-button__spinner--start",
        label: c,
        placement: "start",
        spacing: d,
        children: h
    }), i ? c || D.createElement(H.span, {
        opacity: 0
    }, P(Mg, {
        ..._
    })) : P(Mg, {
        ..._
    }), i && y === "end" && P(rf, {
        className: "chakra-button__spinner--end",
        label: c,
        placement: "end",
        spacing: d,
        children: h
    }))
});
Kp.displayName = "Button";
function Mg(e) {
    const {leftIcon: t, rightIcon: n, children: r, iconSpacing: o} = e;
    return Te(Ki, {
        children: [t && P(nf, {
            marginEnd: o,
            children: t
        }), r, n && P(nf, {
            marginStart: o,
            children: n
        })]
    })
}
var qI = W(function(t, n) {
    const {size: r, colorScheme: o, variant: i, className: a, spacing: s="0.5rem", isAttached: l, isDisabled: u, ...c} = t,
        d = yu("chakra-button__group", a),
        f = k.exports.useMemo(() => ({
            size: r,
            colorScheme: o,
            variant: i,
            isDisabled: u
        }), [r, o, i, u]);
    let h = {
        display: "inline-flex"
    };
    return l ? h = {
        ...h,
        "> *:first-of-type:not(:last-of-type)": {
            borderEndRadius: 0
        },
        "> *:not(:first-of-type):not(:last-of-type)": {
            borderRadius: 0
        },
        "> *:not(:first-of-type):last-of-type": {
            borderStartRadius: 0
        }
    } : h = {
        ...h,
        "& > *:not(style) ~ *:not(style)": {
            marginStart: s
        }
    }, D.createElement(YI, {
        value: f
    }, D.createElement(H.div, {
        ref: n,
        role: "group",
        __css: h,
        className: d,
        "data-attached": l ? "" : void 0,
        ...c
    }))
});
qI.displayName = "ButtonGroup";
var Yp = W((e, t) => {
    const {icon: n, children: r, isRound: o, "aria-label": i, ...a} = e,
        s = n || r,
        l = k.exports.isValidElement(s) ? k.exports.cloneElement(s, {
            "aria-hidden": !0,
            focusable: !1
        }) : null;
    return P(Kp, {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": i,
        ...a,
        children: l
    })
});
Yp.displayName = "IconButton";
var Oo = (...e) => e.filter(Boolean).join(" "),
    us = e => e ? "" : void 0,
    Tc = e => e ? !0 : void 0;
function zg(...e) {
    return function(n) {
        e.some(r => (r == null || r(n), n == null ? void 0 : n.defaultPrevented))
    }
}
var [ZI, Eb] = fn({
        name: "FormControlStylesContext",
        errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
    }),
    [JI, Bo] = fn({
        strict: !1,
        name: "FormControlContext"
    });
function eL(e) {
    const {id: t, isRequired: n, isInvalid: r, isDisabled: o, isReadOnly: i, ...a} = e,
        s = k.exports.useId(),
        l = t || `field-${s}`,
        u = `${l}-label`,
        c = `${l}-feedback`,
        d = `${l}-helptext`,
        [f, h] = k.exports.useState(!1),
        [y, S] = k.exports.useState(!1),
        [C, g] = k.exports.useState(!1),
        p = k.exports.useCallback((E={}, I=null) => ({
            id: d,
            ...E,
            ref: Fd(I, j => {
                !j || S(!0)
            })
        }), [d]),
        m = k.exports.useCallback((E={}, I=null) => {
            var j,
                B;
            return {
                ...E,
                ref: I,
                "data-focus": us(C),
                "data-disabled": us(o),
                "data-invalid": us(r),
                "data-readonly": us(i),
                id: (j = E.id) != null ? j : u,
                htmlFor: (B = E.htmlFor) != null ? B : l
            }
        }, [l, o, C, r, i, u]),
        b = k.exports.useCallback((E={}, I=null) => ({
            id: c,
            ...E,
            ref: Fd(I, j => {
                !j || h(!0)
            }),
            "aria-live": "polite"
        }), [c]),
        _ = k.exports.useCallback((E={}, I=null) => ({
            ...E,
            ...a,
            ref: I,
            role: "group"
        }), [a]),
        R = k.exports.useCallback((E={}, I=null) => ({
            ...E,
            ref: I,
            role: "presentation",
            "aria-hidden": !0,
            children: E.children || "*"
        }), []);
    return {
        isRequired: !!n,
        isInvalid: !!r,
        isReadOnly: !!i,
        isDisabled: !!o,
        isFocused: !!C,
        onFocus: () => g(!0),
        onBlur: () => g(!1),
        hasFeedbackText: f,
        setHasFeedbackText: h,
        hasHelpText: y,
        setHasHelpText: S,
        id: l,
        labelId: u,
        feedbackId: c,
        helpTextId: d,
        htmlProps: a,
        getHelpTextProps: p,
        getErrorMessageProps: b,
        getRootProps: _,
        getLabelProps: m,
        getRequiredIndicatorProps: R
    }
}
var tL = W(function(t, n) {
    const r = No("Form", t),
        o = ze(t),
        {getRootProps: i, htmlProps: a, ...s} = eL(o),
        l = Oo("chakra-form-control", t.className);
    return D.createElement(JI, {
        value: s
    }, D.createElement(ZI, {
        value: r
    }, D.createElement(H.div, {
        ...i({}, n),
        className: l,
        __css: r.container
    })))
});
tL.displayName = "FormControl";
var nL = W(function(t, n) {
    const r = Bo(),
        o = Eb(),
        i = Oo("chakra-form__helper-text", t.className);
    return D.createElement(H.div, {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: i
    })
});
nL.displayName = "FormHelperText";
function rL(e) {
    const {isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...i} = oL(e);
    return {
        ...i,
        disabled: t,
        readOnly: r,
        required: o,
        "aria-invalid": Tc(n),
        "aria-required": Tc(o),
        "aria-readonly": Tc(r)
    }
}
function oL(e) {
    var y,
        S,
        C;
    const t = Bo(),
        {id: n, disabled: r, readOnly: o, required: i, isRequired: a, isInvalid: s, isReadOnly: l, isDisabled: u, onFocus: c, onBlur: d, ...f} = e,
        h = e["aria-describedby"] ? [e["aria-describedby"]] : [];
    return (t == null ? void 0 : t.hasFeedbackText) && (t == null ? void 0 : t.isInvalid) && h.push(t.feedbackId), t != null && t.hasHelpText && h.push(t.helpTextId), {
        ...f,
        "aria-describedby": h.join(" ") || void 0,
        id: n != null ? n : t == null ? void 0 : t.id,
        isDisabled: (y = r != null ? r : u) != null ? y : t == null ? void 0 : t.isDisabled,
        isReadOnly: (S = o != null ? o : l) != null ? S : t == null ? void 0 : t.isReadOnly,
        isRequired: (C = i != null ? i : a) != null ? C : t == null ? void 0 : t.isRequired,
        isInvalid: s != null ? s : t == null ? void 0 : t.isInvalid,
        onFocus: zg(t == null ? void 0 : t.onFocus, c),
        onBlur: zg(t == null ? void 0 : t.onBlur, d)
    }
}
var [iL, aL] = fn({
        name: "FormErrorStylesContext",
        errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
    }),
    sL = W((e, t) => {
        const n = No("FormError", e),
            r = ze(e),
            o = Bo();
        return o != null && o.isInvalid ? D.createElement(iL, {
            value: n
        }, D.createElement(H.div, {
            ...o == null ? void 0 : o.getErrorMessageProps(r, t),
            className: Oo("chakra-form__error-message", e.className),
            __css: {
                display: "flex",
                alignItems: "center",
                ...n.text
            }
        })) : null
    });
sL.displayName = "FormErrorMessage";
var lL = W((e, t) => {
    const n = aL(),
        r = Bo();
    if (!(r != null && r.isInvalid))
        return null;
    const o = Oo("chakra-form__error-icon", e.className);
    return P(Or, {
        ref: t,
        "aria-hidden": !0,
        ...e,
        __css: n.icon,
        className: o,
        children: P("path", {
            fill: "currentColor",
            d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        })
    })
});
lL.displayName = "FormErrorIcon";
var uL = W(function(t, n) {
    var f;
    const r = Tt("FormLabel", t),
        o = ze(t),
        {className: i, children: a, requiredIndicator: s=P(Pb, {}), optionalIndicator: l=null, ...u} = o,
        c = Bo(),
        d = (f = c == null ? void 0 : c.getLabelProps(u, n)) != null ? f : {
            ref: n,
            ...u
        };
    return D.createElement(H.label, {
        ...d,
        className: Oo("chakra-form__label", o.className),
        __css: {
            display: "block",
            textAlign: "start",
            ...r
        }
    }, a, c != null && c.isRequired ? s : l)
});
uL.displayName = "FormLabel";
var Pb = W(function(t, n) {
    const r = Bo(),
        o = Eb();
    if (!(r != null && r.isRequired))
        return null;
    const i = Oo("chakra-form__required-indicator", t.className);
    return D.createElement(H.span, {
        ...r == null ? void 0 : r.getRequiredIndicatorProps(t, n),
        __css: o.requiredIndicator,
        className: i
    })
});
Pb.displayName = "RequiredIndicator";
function Ig(e, t) {
    const n = k.exports.useRef(!1),
        r = k.exports.useRef(!1);
    k.exports.useEffect(() => {
        if (n.current && r.current)
            return e();
        r.current = !0
    }, t),
    k.exports.useEffect(() => (n.current = !0, () => {
        n.current = !1
    }), [])
}
function cL(e) {
    return P(Or, {
        focusable: "false",
        "aria-hidden": !0,
        ...e,
        children: P("path", {
            fill: "currentColor",
            d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
        })
    })
}
var Su = W(function(t, n) {
    const r = Tt("CloseButton", t),
        {children: o, isDisabled: i, __css: a, ...s} = ze(t),
        l = {
            outline: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0
        };
    return D.createElement(H.button, {
        type: "button",
        "aria-label": "Close",
        ref: n,
        disabled: i,
        __css: {
            ...l,
            ...r,
            ...a
        },
        ...s
    }, o || P(cL, {
        width: "1em",
        height: "1em"
    }))
});
Su.displayName = "CloseButton";
var Rb = `
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100lvh) {
    :root {
      --chakra-vh: 100lvh;
    }
  }
`





















    ,
    dL = () => P(ou, {
        styles: Rb
    }),
    fL = () => P(ou, {
        styles: `
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${



















































































































































































































































































        Rb}
    `
    });
function Qp(e) {
    const t = Object.assign({}, e);
    for (let n in t)
        t[n] === void 0 && delete t[n];
    return t
}
var Xp = W(function(t, n) {
    const {htmlSize: r, ...o} = t,
        i = No("Input", o),
        a = ze(o),
        s = rL(a),
        l = Ee("chakra-input", t.className);
    return D.createElement(H.input, {
        size: r,
        ...s,
        __css: i.field,
        ref: n,
        className: l
    })
});
Xp.displayName = "Input";
Xp.id = "Input";
var [pL, Ab] = fn({
        name: "InputGroupStylesContext",
        errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
    }),
    hL = W(function(t, n) {
        const r = No("Input", t),
            {children: o, className: i, ...a} = ze(t),
            s = Ee("chakra-input__group", i),
            l = {},
            u = Gp(o),
            c = r.field;
        u.forEach(f => {
            var h,
                y;
            !r || (c && f.type.id === "InputLeftElement" && (l.paddingStart = (h = c.height) != null ? h : c.h), c && f.type.id === "InputRightElement" && (l.paddingEnd = (y = c.height) != null ? y : c.h), f.type.id === "InputRightAddon" && (l.borderEndRadius = 0), f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0))
        });
        const d = u.map(f => {
            var h,
                y;
            const S = Qp({
                size: ((h = f.props) == null ? void 0 : h.size) || t.size,
                variant: ((y = f.props) == null ? void 0 : y.variant) || t.variant
            });
            return f.type.id !== "Input" ? k.exports.cloneElement(f, S) : k.exports.cloneElement(f, Object.assign(S, l, f.props))
        });
        return D.createElement(H.div, {
            className: s,
            ref: n,
            __css: {
                width: "100%",
                display: "flex",
                position: "relative"
            },
            ...a
        }, P(pL, {
            value: r,
            children: d
        }))
    });
hL.displayName = "InputGroup";
var mL = {
        left: {
            marginEnd: "-1px",
            borderEndRadius: 0,
            borderEndColor: "transparent"
        },
        right: {
            marginStart: "-1px",
            borderStartRadius: 0,
            borderStartColor: "transparent"
        }
    },
    gL = H("div", {
        baseStyle: {
            flex: "0 0 auto",
            width: "auto",
            display: "flex",
            alignItems: "center",
            whiteSpace: "nowrap"
        }
    }),
    qp = W(function(t, n) {
        var s;
        const {placement: r="left", ...o} = t,
            i = (s = mL[r]) != null ? s : {},
            a = Ab();
        return P(gL, {
            ref: n,
            ...o,
            __css: {
                ...a.addon,
                ...i
            }
        })
    });
qp.displayName = "InputAddon";
var Mb = W(function(t, n) {
    return P(qp, {
        ref: n,
        placement: "left",
        ...t,
        className: Ee("chakra-input__left-addon", t.className)
    })
});
Mb.displayName = "InputLeftAddon";
Mb.id = "InputLeftAddon";
var zb = W(function(t, n) {
    return P(qp, {
        ref: n,
        placement: "right",
        ...t,
        className: Ee("chakra-input__right-addon", t.className)
    })
});
zb.displayName = "InputRightAddon";
zb.id = "InputRightAddon";
var vL = H("div", {
        baseStyle: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0",
            zIndex: 2
        }
    }),
    bu = W(function(t, n) {
        var u,
            c;
        const {placement: r="left", ...o} = t,
            i = Ab(),
            a = i.field,
            l = {
                [r === "left" ? "insetStart" : "insetEnd"]: "0",
                width: (u = a == null ? void 0 : a.height) != null ? u : a == null ? void 0 : a.h,
                height: (c = a == null ? void 0 : a.height) != null ? c : a == null ? void 0 : a.h,
                fontSize: a == null ? void 0 : a.fontSize,
                ...i.element
            };
        return P(vL, {
            ref: n,
            __css: l,
            ...o
        })
    });
bu.id = "InputElement";
bu.displayName = "InputElement";
var Ib = W(function(t, n) {
    const {className: r, ...o} = t,
        i = Ee("chakra-input__left-element", r);
    return P(bu, {
        ref: n,
        placement: "left",
        className: i,
        ...o
    })
});
Ib.id = "InputLeftElement";
Ib.displayName = "InputLeftElement";
var Lb = W(function(t, n) {
    const {className: r, ...o} = t,
        i = Ee("chakra-input__right-element", r);
    return P(bu, {
        ref: n,
        placement: "right",
        className: i,
        ...o
    })
});
Lb.id = "InputRightElement";
Lb.displayName = "InputRightElement";
function yL(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function") && !Array.isArray(e)
}
Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
function ir(e, t) {
    return Array.isArray(e) ? e.map(n => n === null ? null : t(n)) : yL(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null
}
var SL = W(function(e, t) {
    const {ratio: n=4 / 3, children: r, className: o, ...i} = e,
        a = k.exports.Children.only(r),
        s = Ee("chakra-aspect-ratio", o);
    return D.createElement(H.div, {
        ref: t,
        position: "relative",
        className: s,
        _before: {
            height: 0,
            content: '""',
            display: "block",
            paddingBottom: ir(n, l => `${1 / l * 100}%`)
        },
        __css: {
            "& > *:not(style)": {
                overflow: "hidden",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%"
            },
            "& > img, & > video": {
                objectFit: "cover"
            }
        },
        ...i
    }, a)
});
SL.displayName = "AspectRatio";
var bL = W(function(t, n) {
    const r = Tt("Badge", t),
        {className: o, ...i} = ze(t);
    return D.createElement(H.span, {
        ref: n,
        className: Ee("chakra-badge", t.className),
        ...i,
        __css: {
            display: "inline-block",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            ...r
        }
    })
});
bL.displayName = "Badge";
var xu = H("div");
xu.displayName = "Box";
var Fb = W(function(t, n) {
    const {size: r, centerContent: o=!0, ...i} = t;
    return P(xu, {
        ref: n,
        boxSize: r,
        __css: {
            ...o ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            } : {},
            flexShrink: 0,
            flexGrow: 0
        },
        ...i
    })
});
Fb.displayName = "Square";
var xL = W(function(t, n) {
    const {size: r, ...o} = t;
    return P(Fb, {
        size: r,
        ref: n,
        borderRadius: "9999px",
        ...o
    })
});
xL.displayName = "Circle";
var wL = H("div", {
    baseStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
});
wL.displayName = "Center";
var kL = {
    horizontal: {
        insetStart: "50%",
        transform: "translateX(-50%)"
    },
    vertical: {
        top: "50%",
        transform: "translateY(-50%)"
    },
    both: {
        insetStart: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    }
};
W(function(t, n) {
    const {axis: r="both", ...o} = t;
    return D.createElement(H.div, {
        ref: n,
        __css: kL[r],
        ...o,
        position: "absolute"
    })
});
var CL = W(function(t, n) {
    const r = Tt("Code", t),
        {className: o, ...i} = ze(t);
    return D.createElement(H.code, {
        ref: n,
        className: Ee("chakra-code", t.className),
        ...i,
        __css: {
            display: "inline-block",
            ...r
        }
    })
});
CL.displayName = "Code";
var Nb = W(function(t, n) {
    const {className: r, centerContent: o, ...i} = ze(t),
        a = Tt("Container", t);
    return D.createElement(H.div, {
        ref: n,
        className: Ee("chakra-container", r),
        ...i,
        __css: {
            ...a,
            ...o && {
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }
        }
    })
});
Nb.displayName = "Container";
var $b = W(function(t, n) {
    const {borderLeftWidth: r, borderBottomWidth: o, borderTopWidth: i, borderRightWidth: a, borderWidth: s, borderStyle: l, borderColor: u, ...c} = Tt("Divider", t),
        {className: d, orientation: f="horizontal", __css: h, ...y} = ze(t),
        S = {
            vertical: {
                borderLeftWidth: r || a || s || "1px",
                height: "100%"
            },
            horizontal: {
                borderBottomWidth: o || i || s || "1px",
                width: "100%"
            }
        };
    return D.createElement(H.hr, {
        ref: n,
        "aria-orientation": f,
        ...y,
        __css: {
            ...c,
            border: "0",
            borderColor: u,
            borderStyle: l,
            ...S[f],
            ...h
        },
        className: Ee("chakra-divider", d)
    })
});
$b.displayName = "Divider";
var of = W(function(t, n) {
    const {direction: r, align: o, justify: i, wrap: a, basis: s, grow: l, shrink: u, ...c} = t,
        d = {
            display: "flex",
            flexDirection: r,
            alignItems: o,
            justifyContent: i,
            flexWrap: a,
            flexBasis: s,
            flexGrow: l,
            flexShrink: u
        };
    return D.createElement(H.div, {
        ref: n,
        __css: d,
        ...c
    })
});
of.displayName = "Flex";
var Ob = W(function(t, n) {
    const {templateAreas: r, gap: o, rowGap: i, columnGap: a, column: s, row: l, autoFlow: u, autoRows: c, templateRows: d, autoColumns: f, templateColumns: h, ...y} = t,
        S = {
            display: "grid",
            gridTemplateAreas: r,
            gridGap: o,
            gridRowGap: i,
            gridColumnGap: a,
            gridAutoColumns: f,
            gridColumn: s,
            gridRow: l,
            gridAutoFlow: u,
            gridAutoRows: c,
            gridTemplateRows: d,
            gridTemplateColumns: h
        };
    return D.createElement(H.div, {
        ref: n,
        __css: S,
        ...y
    })
});
Ob.displayName = "Grid";
function Lg(e) {
    return ir(e, t => t === "auto" ? "auto" : `span ${t}/span ${t}`)
}
var _L = W(function(t, n) {
    const {area: r, colSpan: o, colStart: i, colEnd: a, rowEnd: s, rowSpan: l, rowStart: u, ...c} = t,
        d = Qp({
            gridArea: r,
            gridColumn: Lg(o),
            gridRow: Lg(l),
            gridColumnStart: i,
            gridColumnEnd: a,
            gridRowStart: u,
            gridRowEnd: s
        });
    return D.createElement(H.div, {
        ref: n,
        __css: d,
        ...c
    })
});
_L.displayName = "GridItem";
var TL = W(function(t, n) {
    const r = Tt("Heading", t),
        {className: o, ...i} = ze(t);
    return D.createElement(H.h2, {
        ref: n,
        className: Ee("chakra-heading", t.className),
        ...i,
        __css: r
    })
});
TL.displayName = "Heading";
W(function(t, n) {
    const r = Tt("Mark", t),
        o = ze(t);
    return P(xu, {
        ref: n,
        ...o,
        as: "mark",
        __css: {
            bg: "transparent",
            whiteSpace: "nowrap",
            ...r
        }
    })
});
var EL = W(function(t, n) {
    const r = Tt("Kbd", t),
        {className: o, ...i} = ze(t);
    return D.createElement(H.kbd, {
        ref: n,
        className: Ee("chakra-kbd", o),
        ...i,
        __css: {
            fontFamily: "mono",
            ...r
        }
    })
});
EL.displayName = "Kbd";
var PL = W(function(t, n) {
    const r = Tt("Link", t),
        {className: o, isExternal: i, ...a} = ze(t);
    return D.createElement(H.a, {
        target: i ? "_blank" : void 0,
        rel: i ? "noopener" : void 0,
        ref: n,
        className: Ee("chakra-link", o),
        ...a,
        __css: r
    })
});
PL.displayName = "Link";
W(function(t, n) {
    const {isExternal: r, target: o, rel: i, className: a, ...s} = t;
    return D.createElement(H.a, {
        ...s,
        ref: n,
        className: Ee("chakra-linkbox__overlay", a),
        rel: r ? "noopener noreferrer" : i,
        target: r ? "_blank" : o,
        __css: {
            position: "static",
            "&::before": {
                content: "''",
                cursor: "inherit",
                display: "block",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                width: "100%",
                height: "100%"
            }
        }
    })
});
W(function(t, n) {
    const {className: r, ...o} = t;
    return D.createElement(H.div, {
        ref: n,
        position: "relative",
        ...o,
        className: Ee("chakra-linkbox", r),
        __css: {
            "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
                position: "relative",
                zIndex: 1
            }
        }
    })
});
var [RL, Bb] = fn({
        name: "ListStylesContext",
        errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
    }),
    Zp = W(function(t, n) {
        const r = No("List", t),
            {children: o, styleType: i="none", stylePosition: a, spacing: s, ...l} = ze(t),
            u = Gp(o),
            d = s ? {
                ["& > *:not(style) ~ *:not(style)"]: {
                    mt: s
                }
            } : {};
        return D.createElement(RL, {
            value: r
        }, D.createElement(H.ul, {
            ref: n,
            listStyleType: i,
            listStylePosition: a,
            role: "list",
            __css: {
                ...r.container,
                ...d
            },
            ...l
        }, u))
    });
Zp.displayName = "List";
var AL = W((e, t) => {
    const {as: n, ...r} = e;
    return P(Zp, {
        ref: t,
        as: "ol",
        styleType: "decimal",
        marginStart: "1em",
        ...r
    })
});
AL.displayName = "OrderedList";
var ML = W(function(t, n) {
    const {as: r, ...o} = t;
    return P(Zp, {
        ref: n,
        as: "ul",
        styleType: "initial",
        marginStart: "1em",
        ...o
    })
});
ML.displayName = "UnorderedList";
var zL = W(function(t, n) {
    const r = Bb();
    return D.createElement(H.li, {
        ref: n,
        ...t,
        __css: r.item
    })
});
zL.displayName = "ListItem";
var IL = W(function(t, n) {
    const r = Bb();
    return P(Or, {
        ref: n,
        role: "presentation",
        ...t,
        __css: r.icon
    })
});
IL.displayName = "ListIcon";
var LL = W(function(t, n) {
    const {columns: r, spacingX: o, spacingY: i, spacing: a, minChildWidth: s, ...l} = t,
        u = Q1(),
        c = s ? NL(s, u) : $L(r);
    return P(Ob, {
        ref: n,
        gap: a,
        columnGap: o,
        rowGap: i,
        templateColumns: c,
        ...l
    })
});
LL.displayName = "SimpleGrid";
function FL(e) {
    return typeof e == "number" ? `${e}px` : e
}
function NL(e, t) {
    return ir(e, n => {
        const r = BA("sizes", n, FL(n))(t);
        return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`
    })
}
function $L(e) {
    return ir(e, t => t === null ? null : `repeat(${t}, minmax(0, 1fr))`)
}
var OL = H("div", {
    baseStyle: {
        flex: 1,
        justifySelf: "stretch",
        alignSelf: "stretch"
    }
});
OL.displayName = "Spacer";
var af = "& > *:not(style) ~ *:not(style)";
function BL(e) {
    const {spacing: t, direction: n} = e,
        r = {
            column: {
                marginTop: t,
                marginEnd: 0,
                marginBottom: 0,
                marginStart: 0
            },
            row: {
                marginTop: 0,
                marginEnd: 0,
                marginBottom: 0,
                marginStart: t
            },
            "column-reverse": {
                marginTop: 0,
                marginEnd: 0,
                marginBottom: t,
                marginStart: 0
            },
            "row-reverse": {
                marginTop: 0,
                marginEnd: t,
                marginBottom: 0,
                marginStart: 0
            }
        };
    return {
        flexDirection: n,
        [af]: ir(n, o => r[o])
    }
}
function DL(e) {
    const {spacing: t, direction: n} = e,
        r = {
            column: {
                my: t,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: "1px"
            },
            "column-reverse": {
                my: t,
                mx: 0,
                borderLeftWidth: 0,
                borderBottomWidth: "1px"
            },
            row: {
                mx: t,
                my: 0,
                borderLeftWidth: "1px",
                borderBottomWidth: 0
            },
            "row-reverse": {
                mx: t,
                my: 0,
                borderLeftWidth: "1px",
                borderBottomWidth: 0
            }
        };
    return {
        "&": ir(n, o => r[o])
    }
}
var Db = e => D.createElement(H.div, {
    className: "chakra-stack__item",
    ...e,
    __css: {
        display: "inline-block",
        flex: "0 0 auto",
        minWidth: 0,
        ...e.__css
    }
});
Db.displayName = "StackItem";
var la = W((e, t) => {
    const {isInline: n, direction: r, align: o, justify: i, spacing: a="0.5rem", wrap: s, children: l, divider: u, className: c, shouldWrapChildren: d, ...f} = e,
        h = n ? "row" : r != null ? r : "column",
        y = k.exports.useMemo(() => BL({
            direction: h,
            spacing: a
        }), [h, a]),
        S = k.exports.useMemo(() => DL({
            spacing: a,
            direction: h
        }), [a, h]),
        C = !!u,
        g = !d && !C,
        p = k.exports.useMemo(() => {
            const b = Gp(l);
            return g ? b : b.map((_, R) => {
                const E = typeof _.key < "u" ? _.key : R,
                    I = R + 1 === b.length,
                    B = d ? P(Db, {
                        children: _
                    }, E) : _;
                if (!C)
                    return B;
                const le = k.exports.cloneElement(u, {
                        __css: S
                    }),
                    ke = I ? null : le;
                return Te(k.exports.Fragment, {
                    children: [B, ke]
                }, E)
            })
        }, [u, S, C, g, d, l]),
        m = Ee("chakra-stack", c);
    return D.createElement(H.div, {
        ref: t,
        display: "flex",
        alignItems: o,
        justifyContent: i,
        flexDirection: y.flexDirection,
        flexWrap: s,
        className: m,
        __css: C ? {} : {
            [af]: y[af]
        },
        ...f
    }, p)
});
la.displayName = "Stack";
var Vb = W((e, t) => P(la, {
    align: "center",
    ...e,
    direction: "row",
    ref: t
}));
Vb.displayName = "HStack";
var VL = W((e, t) => P(la, {
    align: "center",
    ...e,
    direction: "column",
    ref: t
}));
VL.displayName = "VStack";
var Pi = W(function(t, n) {
    const r = Tt("Text", t),
        {className: o, align: i, decoration: a, casing: s, ...l} = ze(t),
        u = Qp({
            textAlign: t.align,
            textDecoration: t.decoration,
            textTransform: t.casing
        });
    return D.createElement(H.p, {
        ref: n,
        className: Ee("chakra-text", t.className),
        ...u,
        ...l,
        __css: r
    })
});
Pi.displayName = "Text";
function Fg(e) {
    return typeof e == "number" ? `${e}px` : e
}
var jL = W(function(t, n) {
    const {spacing: r="0.5rem", spacingX: o, spacingY: i, children: a, justify: s, direction: l, align: u, className: c, shouldWrapChildren: d, ...f} = t,
        h = k.exports.useMemo(() => {
            const {spacingX: S=r, spacingY: C=r} = {
                spacingX: o,
                spacingY: i
            };
            return {
                "--chakra-wrap-x-spacing": g => ir(S, p => Fg(xd("space", p)(g))),
                "--chakra-wrap-y-spacing": g => ir(C, p => Fg(xd("space", p)(g))),
                "--wrap-x-spacing": "calc(var(--chakra-wrap-x-spacing) / 2)",
                "--wrap-y-spacing": "calc(var(--chakra-wrap-y-spacing) / 2)",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: s,
                alignItems: u,
                flexDirection: l,
                listStyleType: "none",
                padding: "0",
                margin: "calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)",
                "& > *:not(style)": {
                    margin: "var(--wrap-y-spacing) var(--wrap-x-spacing)"
                }
            }
        }, [r, o, i, s, u, l]),
        y = k.exports.useMemo(() => d ? k.exports.Children.map(a, (S, C) => P(jb, {
            children: S
        }, C)) : a, [a, d]);
    return D.createElement(H.div, {
        ref: n,
        className: Ee("chakra-wrap", c),
        overflow: "hidden",
        ...f
    }, D.createElement(H.ul, {
        className: "chakra-wrap__list",
        __css: h
    }, y))
});
jL.displayName = "Wrap";
var jb = W(function(t, n) {
    const {className: r, ...o} = t;
    return D.createElement(H.li, {
        ref: n,
        __css: {
            display: "flex",
            alignItems: "flex-start"
        },
        className: Ee("chakra-wrap__listitem", r),
        ...o
    })
});
jb.displayName = "WrapItem";
var WL = {
        body: {
            classList: {
                add() {},
                remove() {}
            }
        },
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector() {
            return null
        },
        querySelectorAll() {
            return []
        },
        getElementById() {
            return null
        },
        createEvent() {
            return {
                initEvent() {}
            }
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return []
                }
            }
        }
    },
    Wb = WL,
    Ur = () => {},
    HL = {
        document: Wb,
        navigator: {
            userAgent: ""
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: Ur,
        removeEventListener: Ur,
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return ""
                }
            }
        },
        matchMedia() {
            return {
                matches: !1,
                addListener: Ur,
                removeListener: Ur
            }
        },
        requestAnimationFrame(e) {
            return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame(e) {
            typeof setTimeout > "u" || clearTimeout(e)
        },
        setTimeout: () => 0,
        clearTimeout: Ur,
        setInterval: () => 0,
        clearInterval: Ur
    },
    UL = HL,
    GL = {
        window: UL,
        document: Wb
    },
    Hb = typeof window < "u" ? {
        window,
        document
    } : GL,
    Ub = k.exports.createContext(Hb);
Ub.displayName = "EnvironmentContext";
function Gb(e) {
    const {children: t, environment: n} = e,
        [r, o] = k.exports.useState(null),
        [i, a] = k.exports.useState(!1);
    k.exports.useEffect(() => a(!0), []);
    const s = k.exports.useMemo(() => {
        if (n)
            return n;
        const l = r == null ? void 0 : r.ownerDocument,
            u = r == null ? void 0 : r.ownerDocument.defaultView;
        return l ? {
            document: l,
            window: u
        } : Hb
    }, [r, n]);
    return Te(Ub.Provider, {
        value: s,
        children: [t, !n && i && P("span", {
            id: "__chakra_env",
            hidden: !0,
            ref: l => {
                k.exports.startTransition(() => {
                    l && o(l)
                })
            }
        })]
    })
}
Gb.displayName = "EnvironmentProvider";
var [KL, YL] = fn({
    strict: !1,
    name: "PortalManagerContext"
});
function Kb(e) {
    const {children: t, zIndex: n} = e;
    return P(KL, {
        value: {
            zIndex: n
        },
        children: t
    })
}
Kb.displayName = "PortalManager";
var [Yb, QL] = fn({
        strict: !1,
        name: "PortalContext"
    }),
    Jp = "chakra-portal",
    XL = ".chakra-portal",
    qL = e => P("div", {
        className: "chakra-portal-zIndex",
        style: {
            position: "absolute",
            zIndex: e.zIndex,
            top: 0,
            left: 0,
            right: 0
        },
        children: e.children
    }),
    ZL = e => {
        const {appendToParentPortal: t, children: n} = e,
            [r, o] = k.exports.useState(null),
            i = k.exports.useRef(null),
            [, a] = k.exports.useState({});
        k.exports.useEffect(() => a({}), []);
        const s = QL(),
            l = YL();
        ol(() => {
            if (!r)
                return;
            const c = r.ownerDocument,
                d = t && s != null ? s : c.body;
            if (!d)
                return;
            i.current = c.createElement("div"),
            i.current.className = Jp,
            d.appendChild(i.current),
            a({});
            const f = i.current;
            return () => {
                d.contains(f) && d.removeChild(f)
            }
        }, [r]);
        const u = l != null && l.zIndex ? P(qL, {
            zIndex: l == null ? void 0 : l.zIndex,
            children: n
        }) : n;
        return i.current ? Cl.exports.createPortal(P(Yb, {
            value: i.current,
            children: u
        }), i.current) : P("span", {
            ref: c => {
                c && o(c)
            }
        })
    },
    JL = e => {
        const {children: t, containerRef: n, appendToParentPortal: r} = e,
            o = n.current,
            i = o != null ? o : typeof window < "u" ? document.body : void 0,
            a = k.exports.useMemo(() => {
                const l = o == null ? void 0 : o.ownerDocument.createElement("div");
                return l && (l.className = Jp), l
            }, [o]),
            [, s] = k.exports.useState({});
        return ol(() => s({}), []), ol(() => {
            if (!(!a || !i))
                return i.appendChild(a), () => {
                    i.removeChild(a)
                }
        }, [a, i]), i && a ? Cl.exports.createPortal(P(Yb, {
            value: r ? a : null,
            children: t
        }), a) : null
    };
function wa(e) {
    const {containerRef: t, ...n} = e;
    return t ? P(JL, {
        containerRef: t,
        ...n
    }) : P(ZL, {
        ...n
    })
}
wa.defaultProps = {
    appendToParentPortal: !0
};
wa.className = Jp;
wa.selector = XL;
wa.displayName = "Portal";
function eF(e, t) {
    const n = qA(e);
    k.exports.useEffect(() => {
        if (t == null)
            return;
        let r = null;
        return r = window.setTimeout(() => {
            n()
        }, t), () => {
            r && window.clearTimeout(r)
        }
    }, [t, n])
}
function tF(e, ...t) {
    return nF(e) ? e(...t) : e
}
var nF = e => typeof e == "function",
    rF = (e, t) => e.find(n => n.id === t);
function Ng(e, t) {
    const n = Qb(e, t),
        r = n ? e[n].findIndex(o => o.id === t) : -1;
    return {
        position: n,
        index: r
    }
}
function Qb(e, t) {
    for (const [n, r] of Object.entries(e))
        if (rF(r, t))
            return n
}
function oF(e) {
    const t = e.includes("right"),
        n = e.includes("left");
    let r = "center";
    return t && (r = "flex-end"), n && (r = "flex-start"), {
        display: "flex",
        flexDirection: "column",
        alignItems: r
    }
}
function iF(e) {
    const n = e === "top" || e === "bottom" ? "0 auto" : void 0,
        r = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0,
        o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0,
        i = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)",
        a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
    return {
        position: "fixed",
        zIndex: 5500,
        pointerEvents: "none",
        display: "flex",
        flexDirection: "column",
        margin: n,
        top: r,
        bottom: o,
        right: i,
        left: a
    }
}
var aF = {
        top: [],
        "top-left": [],
        "top-right": [],
        "bottom-left": [],
        bottom: [],
        "bottom-right": []
    },
    Ri = sF(aF);
function sF(e) {
    let t = e;
    const n = new Set,
        r = o => {
            t = o(t),
            n.forEach(i => i())
        };
    return {
        getState: () => t,
        subscribe: o => (n.add(o), () => {
            r(() => e),
            n.delete(o)
        }),
        removeToast: (o, i) => {
            r(a => ({
                ...a,
                [i]: a[i].filter(s => s.id != o)
            }))
        },
        notify: (o, i) => {
            const a = lF(o, i),
                {position: s, id: l} = a;
            return r(u => {
                var f,
                    h;
                const d = s.includes("top") ? [a, ...(f = u[s]) != null ? f : []] : [...(h = u[s]) != null ? h : [], a];
                return {
                    ...u,
                    [s]: d
                }
            }), l
        },
        update: (o, i) => {
            !o || r(a => {
                const s = {
                        ...a
                    },
                    {position: l, index: u} = Ng(s, o);
                return l && u !== -1 && (s[l][u] = {
                    ...s[l][u],
                    ...i,
                    message: cF(i)
                }), s
            })
        },
        closeAll: ({positions: o}={}) => {
            r(i => {
                const a = ["bottom", "bottom-right", "bottom-left", "top", "top-left", "top-right"];
                return (o != null ? o : a).reduce((l, u) => (l[u] = i[u].map(c => ({
                    ...c,
                    requestClose: !0
                })), l), {
                    ...i
                })
            })
        },
        close: o => {
            r(i => {
                const a = Qb(i, o);
                return a ? {
                    ...i,
                    [a]: i[a].map(s => s.id == o ? {
                        ...s,
                        requestClose: !0
                    } : s)
                } : i
            })
        },
        isActive: o => Boolean(Ng(Ri.getState(), o).position)
    }
}
var $g = 0;
function lF(e, t={}) {
    var o,
        i;
    $g += 1;
    const n = (o = t.id) != null ? o : $g,
        r = (i = t.position) != null ? i : "bottom";
    return {
        id: n,
        message: e,
        position: r,
        duration: t.duration,
        onCloseComplete: t.onCloseComplete,
        onRequestRemove: () => Ri.removeToast(String(n), r),
        status: t.status,
        requestClose: !1,
        containerStyle: t.containerStyle
    }
}
var uF = e => {
    const {status: t, variant: n="solid", id: r, title: o, isClosable: i, onClose: a, description: s, icon: l} = e,
        u = r ? {
            root: `toast-${r}`,
            title: `toast-${r}-title`,
            description: `toast-${r}-description`
        } : void 0;
    return D.createElement(jp, {
        addRole: !1,
        status: t,
        variant: n,
        id: u == null ? void 0 : u.root,
        alignItems: "start",
        borderRadius: "md",
        boxShadow: "lg",
        paddingEnd: 8,
        textAlign: "start",
        width: "auto"
    }, P(Hp, {
        children: l
    }), D.createElement(H.div, {
        flex: "1",
        maxWidth: "100%"
    }, o && P(Up, {
        id: u == null ? void 0 : u.title,
        children: o
    }), s && P(Wp, {
        id: u == null ? void 0 : u.description,
        display: "block",
        children: s
    })), i && P(Su, {
        size: "sm",
        onClick: a,
        position: "absolute",
        insetEnd: 1,
        top: 1
    }))
};
function cF(e={}) {
    const {render: t, toastComponent: n=uF} = e;
    return o => typeof t == "function" ? t({
        ...o,
        ...e
    }) : P(n, {
        ...o,
        ...e
    })
}
var dF = {
        initial: e => {
            const {position: t} = e,
                n = ["top", "bottom"].includes(t) ? "y" : "x";
            let r = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
            return t === "bottom" && (r = 1), {
                opacity: 0,
                [n]: r * 24
            }
        },
        animate: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: .4,
                ease: [.4, 0, .2, 1]
            }
        },
        exit: {
            opacity: 0,
            scale: .85,
            transition: {
                duration: .2,
                ease: [.4, 0, 1, 1]
            }
        }
    },
    Xb = k.exports.memo(e => {
        const {id: t, message: n, onCloseComplete: r, onRequestRemove: o, requestClose: i=!1, position: a="bottom", duration: s=5e3, containerStyle: l, motionVariants: u=dF, toastSpacing: c="0.5rem"} = e,
            [d, f] = k.exports.useState(s),
            h = k6();
        Ig(() => {
            h || r == null || r()
        }, [h]),
        Ig(() => {
            f(s)
        }, [s]);
        const y = () => f(null),
            S = () => f(s),
            C = () => {
                h && o()
            };
        k.exports.useEffect(() => {
            h && i && o()
        }, [h, i, o]),
        eF(C, d);
        const g = k.exports.useMemo(() => ({
                pointerEvents: "auto",
                maxWidth: 560,
                minWidth: 300,
                margin: c,
                ...l
            }), [l, c]),
            p = k.exports.useMemo(() => oF(a), [a]);
        return D.createElement(kl.li, {
            layout: !0,
            className: "chakra-toast",
            variants: u,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            onHoverStart: y,
            onHoverEnd: S,
            custom: {
                position: a
            },
            style: p
        }, D.createElement(H.div, {
            role: "status",
            "aria-atomic": "true",
            className: "chakra-toast__inner",
            __css: g
        }, tF(n, {
            id: t,
            onClose: C
        })))
    });
Xb.displayName = "ToastComponent";
var fF = e => {
        const t = k.exports.useSyncExternalStore(Ri.subscribe, Ri.getState, Ri.getState),
            {children: n, motionVariants: r, component: o=Xb, portalProps: i} = e,
            s = Object.keys(t).map(l => {
                const u = t[l];
                return P("ul", {
                    role: "region",
                    "aria-live": "polite",
                    id: `chakra-toast-manager-${l}`,
                    style: iF(l),
                    children: P(Is, {
                        initial: !1,
                        children: u.map(c => P(o, {
                            motionVariants: r,
                            ...c
                        }, c.id))
                    })
                }, l)
            });
        return Te(Ki, {
            children: [n, P(wa, {
                ...i,
                children: s
            })]
        })
    },
    pF = e => {
        const {children: t, colorModeManager: n, portalZIndex: r, resetCSS: o=!0, theme: i={}, environment: a, cssVarsRoot: s} = e,
            l = P(Gb, {
                environment: a,
                children: t
            });
        return P(DA, {
            theme: i,
            cssVarsRoot: s,
            children: Te(e1, {
                colorModeManager: n,
                options: i.config,
                children: [o ? P(fL, {}) : P(dL, {}), P(jA, {}), r ? P(Kb, {
                    zIndex: r,
                    children: l
                }) : l]
            })
        })
    };
function hF({children: e, theme: t=K1, toastOptions: n, ...r}) {
    return Te(pF, {
        theme: t,
        ...r,
        children: [e, P(fF, {
            ...n
        })]
    })
}
function mF({title: e, titleId: t, ...n}, r) {
    return Te("svg", {
        ...Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            ref: r,
            "aria-labelledby": t
        }, n),
        children: [e ? P("title", {
            id: t,
            children: e
        }) : null, P("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        })]
    })
}
const gF = k.exports.forwardRef(mF),
    vF = gF;
function yF({title: e, titleId: t, ...n}, r) {
    return Te("svg", {
        ...Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            ref: r,
            "aria-labelledby": t
        }, n),
        children: [e ? P("title", {
            id: t,
            children: e
        }) : null, P("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 4.5v15m7.5-7.5h-15"
        })]
    })
}
const SF = k.exports.forwardRef(yF),
    bF = SF;
function xF({title: e, titleId: t, ...n}, r) {
    return Te("svg", {
        ...Object.assign({
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            strokeWidth: 1.5,
            stroke: "currentColor",
            "aria-hidden": "true",
            ref: r,
            "aria-labelledby": t
        }, n),
        children: [e ? P("title", {
            id: t,
            children: e
        }) : null, P("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        })]
    })
}
const wF = k.exports.forwardRef(xF),
    kF = wF;
var Kr = (e => (e.success = "success", e.error = "error", e))(Kr || {});
const CF = 3e3,
    _F = () => {
        const [e, t] = k.exports.useState([]),
            n = o => {
                t(i => i.filter(a => a.id !== o))
            };
        return {
            alerts: e,
            removeAlert: n,
            notifie: (o, i, a) => {
                const s = new Date().getTime();
                t(l => [...l, {
                    id: s,
                    isVisible: !0,
                    title: o,
                    description: i,
                    status: a,
                    timeout: setTimeout(() => {
                        n(s)
                    }, CF)
                }])
            }
        }
    },
    TF = ({alert: e, removeAlert: t}) => Te(jp, {
        status: e.status,
        as: kl.div,
        layout: !0,
        initial: {
            scale: 0
        },
        animate: {
            scale: 1
        },
        exit: {
            scale: 0
        },
        children: [P(Hp, {}), P(Up, {
            children: e.title
        }), P(Wp, {
            children: e.description
        }), P(Su, {
            ml: "auto",
            onClick: () => t(e.id)
        })]
    }),
    EF = () => {
        const [e, t] = k.exports.useState(new Date().toLocaleTimeString());
        return k.exports.useEffect(() => {
            const n = setInterval(() => {
                t(new Date().toLocaleTimeString())
            }, 1e3);
            return () => clearInterval(n)
        }, []), P(Pi, {
            fontSize: "md",
            mt: "-0.5rem",
            color: "gray.400",
            _dark: {
                color: "gray.500"
            },
            children: e
        })
    },
    PF = () => {
        const [e, t] = k.exports.useState([]),
            [n, r] = k.exports.useState(""),
            {alerts: o, removeAlert: i, notifie: a} = _F(),
            s = d => {
                if (d.preventDefault(), !n)
                    return a("Form", "Should Not Be Empty.", Kr.error);
                if (e.find(f => f.body === n))
                    return a("Task", `Task "${n}" already exists`, Kr.error);
                t(f => [...f, {
                    id: new Date().getTime(),
                    body: n,
                    createdAt: new Date
                }]),
                a("Task", `Added "${n}".`, Kr.success),
                r("")
            },
            l = d => {
                r(d.target.value)
            },
            u = d => {
                var f;
                t(h => h.filter(y => y.id !== d)),
                a("Task", `Removed "${(f = e.find(h => h.id === d)) == null ? void 0 : f.body}".`, Kr.success)
            },
            c = () => {
                t([]),
                a("Task", "Removed All Tasks.", Kr.success)
            };
        return Te(Nb, {
            minH: "100vh",
            textAlign: "center",
            paddingTop: "10%",
            children: [P(Pi, {
                fontSize: "5xl",
                fontWeight: "bold",
                children: "Todo App"
            }), P(EF, {}), Te(of, {
                minW: "10rem",
                p: "1rem",
                direction: "column",
                children: [P("form", {
                    onSubmit: s,
                    children: Te(Vb, {
                        children: [P(Xp, {
                            variant: "filled",
                            placeholder: "Enter your task",
                            onChange: l,
                            value: n,
                            autoFocus: !0
                        }), P(Yp, {
                            "aria-label": "add something to do",
                            type: "submit",
                            p: ".3rem",
                            icon: P(bF, {
                                height: "100%"
                            })
                        })]
                    })
                }), P(Is, {
                    children: e.length > 0 && Te(la, {
                        as: kl.div,
                        initial: {
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 1
                        },
                        exit: {
                            scale: 0,
                            opacity: 0
                        },
                        layout: !0,
                        direction: "column",
                        spacing: "1rem",
                        paddingBlock: "1rem",
                        children: [P(Is, {
                            children: e.slice(0).reverse().map(d => Te(xu, {
                                as: kl.div,
                                initial: {
                                    scale: 0
                                },
                                animate: {
                                    scale: 1
                                },
                                exit: {
                                    scale: 0
                                },
                                layout: !0,
                                children: [Te(of, {
                                    justify: "space-between",
                                    align: "center",
                                    p: ".5rem",
                                    children: [P(Pi, {
                                        children: d.body
                                    }), P(Pi, {
                                        fontSize: "xs",
                                        color: "gray.500",
                                        _dark: {
                                            color: "gray.400"
                                        },
                                        ml: "auto",
                                        mr: ".5rem",
                                        alignSelf: "end",
                                        children: d.createdAt.toLocaleTimeString()
                                    }), P(Su, {
                                        onClick: () => u(d.id)
                                    })]
                                }), P($b, {})]
                            }, d.id))
                        }), P(Kp, {
                            colorScheme: "red",
                            _dark: {
                                backgroundColor: "red.600",
                                color: "white"
                            },
                            onClick: c,
                            children: "delete all"
                        })]
                    })
                })]
            }), P(la, {
                pos: "absolute",
                left: "1",
                top: "1",
                right: {
                    base: "1",
                    md: "unset"
                },
                children: P(Is, {
                    children: o.map(d => P(TF, {
                        alert: d,
                        removeAlert: i
                    }, d.id))
                })
            })]
        })
    },
    RF = () => {
        const {colorMode: e, toggleColorMode: t} = jl();
        return Te(Ki, {
            children: [P(PF, {}), P(Yp, {
                "aria-label": "toggle colormode",
                icon: e === "light" ? P(kF, {
                    height: "100%"
                }) : P(vF, {
                    height: "100%"
                }),
                position: "absolute",
                top: ".5rem",
                right: ".5rem",
                p: ".4rem",
                onClick: t,
                variant: "ghost"
            })]
        })
    },
    AF = {
        initialColorMode: "dark",
        useSystemColorMode: !1
    },
    Og = RA({
        config: AF
    });
Ec.createRoot(document.getElementById("root")).render(P(D.StrictMode, {
    children: Te(hF, {
        theme: Og,
        children: [P(j2, {
            initialColorMode: Og.config.initialColorMode
        }), P(RF, {})]
    })
}));
