! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = { exports: {}, id: o, loaded: !1 };
        return e[o].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports }
    var n = {};
    t.m = e, t.c = n, t.p = "/", t(0) }([function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    n(88), n(76);
    var r = n(78),
        i = o(r),
        a = n(77),
        u = o(a);
    (0, n(70).addLoadEvent)(function() { u.default.init(), i.default.init() }) }, function(e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) }, function(e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function(e, t) {
        return n.call(e, t) } }, function(e, t, n) {
    var o = n(49),
        r = n(15);
    e.exports = function(e) {
        return o(r(e)) } }, function(e, t, n) { e.exports = !n(8)(function() {
        return 7 != Object.defineProperty({}, "a", { get: function() {
                return 7 } }).a }) }, function(e, t, n) {
    var o = n(6),
        r = n(12);
    e.exports = n(4) ? function(e, t, n) {
        return o.f(e, t, r(1, n)) } : function(e, t, n) {
        return e[t] = n, e } }, function(e, t, n) {
    var o = n(10),
        r = n(30),
        i = n(24),
        a = Object.defineProperty;
    t.f = n(4) ? Object.defineProperty : function(e, t, n) {
        if (o(e), t = i(t, !0), o(n), r) try {
            return a(e, t, n) } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (e[t] = n.value), e } }, function(e, t, n) {
    var o = n(22)("wks"),
        r = n(13),
        i = n(1).Symbol,
        a = "function" == typeof i;
    (e.exports = function(e) {
        return o[e] || (o[e] = a && i[e] || (a ? i : r)("Symbol." + e)) }).store = o }, function(e, t) { e.exports = function(e) {
        try {
            return !!e() } catch (e) {
            return !0 } } }, function(e, t, n) {
    var o = n(35),
        r = n(16);
    e.exports = Object.keys || function(e) {
        return o(e, r) } }, function(e, t, n) {
    var o = n(11);
    e.exports = function(e) {
        if (!o(e)) throw TypeError(e + " is not an object!");
        return e } }, function(e, t) { e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e } }, function(e, t) { e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } }, function(e, t) {
    var n = 0,
        o = Math.random();
    e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36)) } }, function(e, t) {
    var n = e.exports = { version: "2.4.0" }; "number" == typeof __e && (__e = n) }, function(e, t) { e.exports = function(e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e } }, function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function(e, t) { e.exports = {} }, function(e, t) { e.exports = !0 }, function(e, t) { t.f = {}.propertyIsEnumerable }, function(e, t, n) {
    var o = n(6).f,
        r = n(2),
        i = n(7)("toStringTag");
    e.exports = function(e, t, n) { e && !r(e = n ? e : e.prototype, i) && o(e, i, { configurable: !0, value: t }) } }, function(e, t, n) {
    var o = n(22)("keys"),
        r = n(13);
    e.exports = function(e) {
        return o[e] || (o[e] = r(e)) } }, function(e, t, n) {
    var o = n(1),
        r = "__core-js_shared__",
        i = o[r] || (o[r] = {});
    e.exports = function(e) {
        return i[e] || (i[e] = {}) } }, function(e, t) {
    var n = Math.ceil,
        o = Math.floor;
    e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e) } }, function(e, t, n) {
    var o = n(11);
    e.exports = function(e, t) {
        if (!o(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !o(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !o(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value") } }, function(e, t, n) {
    var o = n(1),
        r = n(14),
        i = n(18),
        a = n(26),
        u = n(6).f;
    e.exports = function(e) {
        var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {}); "_" == e.charAt(0) || e in t || u(t, e, { value: a.f(e) }) } }, function(e, t, n) { t.f = n(7) }, function(e, t, n) {
    var o = n(1),
        r = n(14),
        i = n(46),
        a = n(5),
        u = "prototype",
        l = function(e, t, n) {
            var s, c, f, p = e & l.F,
                d = e & l.G,
                m = e & l.S,
                h = e & l.P,
                v = e & l.B,
                y = e & l.W,
                g = d ? r : r[t] || (r[t] = {}),
                w = g[u],
                x = d ? o : m ? o[t] : (o[t] || {})[u];
            d && (n = t);
            for (s in n)(c = !p && x && void 0 !== x[s]) && s in g || (f = c ? x[s] : n[s], g[s] = d && "function" != typeof x[s] ? n[s] : v && c ? i(f, o) : y && x[s] == f ? function(e) {
                var t = function(t, n, o) {
                    if (this instanceof e) {
                        switch (arguments.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t);
                            case 2:
                                return new e(t, n) }
                        return new e(t, n, o) }
                    return e.apply(this, arguments) };
                return t[u] = e[u], t }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((g.virtual || (g.virtual = {}))[s] = f, e & l.R && w && !w[s] && a(w, s, f))) };
    l.F = 1, l.G = 2, l.S = 4, l.P = 8, l.B = 16, l.W = 32, l.U = 64, l.R = 128, e.exports = l }, function(e, t) {
    var n = {}.toString;
    e.exports = function(e) {
        return n.call(e).slice(8, -1) } }, function(e, t, n) {
    var o = n(11),
        r = n(1).document,
        i = o(r) && o(r.createElement);
    e.exports = function(e) {
        return i ? r.createElement(e) : {} } }, function(e, t, n) { e.exports = !n(4) && !n(8)(function() {
        return 7 != Object.defineProperty(n(29)("div"), "a", { get: function() {
                return 7 } }).a }) }, function(e, t, n) { "use strict";
    var o = n(18),
        r = n(27),
        i = n(36),
        a = n(5),
        u = n(2),
        l = n(17),
        s = n(51),
        c = n(20),
        f = n(58),
        p = n(7)("iterator"),
        d = !([].keys && "next" in [].keys()),
        m = "keys",
        h = "values",
        v = function() {
            return this };
    e.exports = function(e, t, n, y, g, w, x) { s(n, t, y);
        var b, C, S, I = function(e) {
                if (!d && e in O) return O[e];
                switch (e) {
                    case m:
                    case h:
                        return function() {
                            return new n(this, e) } }
                return function() {
                    return new n(this, e) } },
            T = t + " Iterator",
            E = g == h,
            _ = !1,
            O = e.prototype,
            R = O[p] || O["@@iterator"] || g && O[g],
            k = R || I(g),
            D = g ? E ? I("entries") : k : void 0,
            M = "Array" == t ? O.entries || R : R;
        if (M && (S = f(M.call(new e))) !== Object.prototype && (c(S, T, !0), o || u(S, p) || a(S, p, v)), E && R && R.name !== h && (_ = !0, k = function() {
                return R.call(this) }), o && !x || !d && !_ && O[p] || a(O, p, k), l[t] = k, l[T] = v, g)
            if (b = { values: E ? k : I(h), keys: w ? k : I(m), entries: D }, x)
                for (C in b) C in O || i(O, C, b[C]);
            else r(r.P + r.F * (d || _), t, b);
        return b } }, function(e, t, n) {
    var o = n(10),
        r = n(55),
        i = n(16),
        a = n(21)("IE_PROTO"),
        u = function() {},
        l = "prototype",
        s = function() {
            var e, t = n(29)("iframe"),
                o = i.length;
            for (t.style.display = "none", n(48).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), s = e.F; o--;) delete s[l][i[o]];
            return s() };
    e.exports = Object.create || function(e, t) {
        var n;
        return null !== e ? (u[l] = o(e), n = new u, u[l] = null, n[a] = e) : n = s(), void 0 === t ? n : r(n, t) } }, function(e, t, n) {
    var o = n(35),
        r = n(16).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function(e) {
        return o(e, r) } }, function(e, t) { t.f = Object.getOwnPropertySymbols }, function(e, t, n) {
    var o = n(2),
        r = n(3),
        i = n(45)(!1),
        a = n(21)("IE_PROTO");
    e.exports = function(e, t) {
        var n, u = r(e),
            l = 0,
            s = [];
        for (n in u) n != a && o(u, n) && s.push(n);
        for (; t.length > l;) o(u, n = t[l++]) && (~i(s, n) || s.push(n));
        return s } }, function(e, t, n) { e.exports = n(5) }, function(e, t, n) {
    var o = n(15);
    e.exports = function(e) {
        return Object(o(e)) } }, function(e, t, n) { e.exports = { default: n(41), __esModule: !0 } }, function(e, t, n) { e.exports = { default: n(42), __esModule: !0 } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }
    t.__esModule = !0;
    var r = n(39),
        i = o(r),
        a = n(38),
        u = o(a),
        l = "function" == typeof u.default && "symbol" == typeof i.default ? function(e) {
            return typeof e } : function(e) {
            return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : typeof e };
    t.default = "function" == typeof u.default && "symbol" === l(i.default) ? function(e) {
        return void 0 === e ? "undefined" : l(e) } : function(e) {
        return e && "function" == typeof u.default && e.constructor === u.default && e !== u.default.prototype ? "symbol" : void 0 === e ? "undefined" : l(e) } }, function(e, t, n) { n(65), n(63), n(66), n(67), e.exports = n(14).Symbol }, function(e, t, n) { n(64), n(68), e.exports = n(26).f("iterator") }, function(e, t) { e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e } }, function(e, t) { e.exports = function() {} }, function(e, t, n) {
    var o = n(3),
        r = n(61),
        i = n(60);
    e.exports = function(e) {
        return function(t, n, a) {
            var u, l = o(t),
                s = r(l.length),
                c = i(a, s);
            if (e && n != n) {
                for (; s > c;)
                    if ((u = l[c++]) != u) return !0 } else
                for (; s > c; c++)
                    if ((e || c in l) && l[c] === n) return e || c || 0; return !e && -1 } } }, function(e, t, n) {
    var o = n(43);
    e.exports = function(e, t, n) {
        if (o(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n) };
            case 2:
                return function(n, o) {
                    return e.call(t, n, o) };
            case 3:
                return function(n, o, r) {
                    return e.call(t, n, o, r) } }
        return function() {
            return e.apply(t, arguments) } } }, function(e, t, n) {
    var o = n(9),
        r = n(34),
        i = n(19);
    e.exports = function(e) {
        var t = o(e),
            n = r.f;
        if (n)
            for (var a, u = n(e), l = i.f, s = 0; u.length > s;) l.call(e, a = u[s++]) && t.push(a);
        return t } }, function(e, t, n) { e.exports = n(1).document && document.documentElement }, function(e, t, n) {
    var o = n(28);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == o(e) ? e.split("") : Object(e) } }, function(e, t, n) {
    var o = n(28);
    e.exports = Array.isArray || function(e) {
        return "Array" == o(e) } }, function(e, t, n) { "use strict";
    var o = n(32),
        r = n(12),
        i = n(20),
        a = {};
    n(5)(a, n(7)("iterator"), function() {
        return this }), e.exports = function(e, t, n) { e.prototype = o(a, { next: r(1, n) }), i(e, t + " Iterator") } }, function(e, t) { e.exports = function(e, t) {
        return { value: t, done: !!e } } }, function(e, t, n) {
    var o = n(9),
        r = n(3);
    e.exports = function(e, t) {
        for (var n, i = r(e), a = o(i), u = a.length, l = 0; u > l;)
            if (i[n = a[l++]] === t) return n } }, function(e, t, n) {
    var o = n(13)("meta"),
        r = n(11),
        i = n(2),
        a = n(6).f,
        u = 0,
        l = Object.isExtensible || function() {
            return !0 },
        s = !n(8)(function() {
            return l(Object.preventExtensions({})) }),
        c = function(e) { a(e, o, { value: { i: "O" + ++u, w: {} } }) },
        f = function(e, t) {
            if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!i(e, o)) {
                if (!l(e)) return "F";
                if (!t) return "E";
                c(e) }
            return e[o].i },
        p = function(e, t) {
            if (!i(e, o)) {
                if (!l(e)) return !0;
                if (!t) return !1;
                c(e) }
            return e[o].w },
        d = function(e) {
            return s && m.NEED && l(e) && !i(e, o) && c(e), e },
        m = e.exports = { KEY: o, NEED: !1, fastKey: f, getWeak: p, onFreeze: d } }, function(e, t, n) {
    var o = n(6),
        r = n(10),
        i = n(9);
    e.exports = n(4) ? Object.defineProperties : function(e, t) { r(e);
        for (var n, a = i(t), u = a.length, l = 0; u > l;) o.f(e, n = a[l++], t[n]);
        return e } }, function(e, t, n) {
    var o = n(19),
        r = n(12),
        i = n(3),
        a = n(24),
        u = n(2),
        l = n(30),
        s = Object.getOwnPropertyDescriptor;
    t.f = n(4) ? s : function(e, t) {
        if (e = i(e), t = a(t, !0), l) try {
            return s(e, t) } catch (e) {}
        if (u(e, t)) return r(!o.f.call(e, t), e[t]) } }, function(e, t, n) {
    var o = n(3),
        r = n(33).f,
        i = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        u = function(e) {
            try {
                return r(e) } catch (e) {
                return a.slice() } };
    e.exports.f = function(e) {
        return a && "[object Window]" == i.call(e) ? u(e) : r(o(e)) } }, function(e, t, n) {
    var o = n(2),
        r = n(37),
        i = n(21)("IE_PROTO"),
        a = Object.prototype;
    e.exports = Object.getPrototypeOf || function(e) {
        return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null } }, function(e, t, n) {
    var o = n(23),
        r = n(15);
    e.exports = function(e) {
        return function(t, n) {
            var i, a, u = String(r(t)),
                l = o(n),
                s = u.length;
            return l < 0 || l >= s ? e ? "" : void 0 : (i = u.charCodeAt(l), i < 55296 || i > 56319 || l + 1 === s || (a = u.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? u.charAt(l) : i : e ? u.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536) } } }, function(e, t, n) {
    var o = n(23),
        r = Math.max,
        i = Math.min;
    e.exports = function(e, t) {
        return e = o(e), e < 0 ? r(e + t, 0) : i(e, t) } }, function(e, t, n) {
    var o = n(23),
        r = Math.min;
    e.exports = function(e) {
        return e > 0 ? r(o(e), 9007199254740991) : 0 } }, function(e, t, n) { "use strict";
    var o = n(44),
        r = n(52),
        i = n(17),
        a = n(3);
    e.exports = n(31)(Array, "Array", function(e, t) { this._t = a(e), this._i = 0, this._k = t }, function() {
        var e = this._t,
            t = this._k,
            n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]]) }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries") }, function(e, t) {}, function(e, t, n) { "use strict";
    var o = n(59)(!0);
    n(31)(String, "String", function(e) { this._t = String(e), this._i = 0 }, function() {
        var e, t = this._t,
            n = this._i;
        return n >= t.length ? { value: void 0, done: !0 } : (e = o(t, n), this._i += e.length, { value: e, done: !1 }) }) }, function(e, t, n) { "use strict";
    var o = n(1),
        r = n(2),
        i = n(4),
        a = n(27),
        u = n(36),
        l = n(54).KEY,
        s = n(8),
        c = n(22),
        f = n(20),
        p = n(13),
        d = n(7),
        m = n(26),
        h = n(25),
        v = n(53),
        y = n(47),
        g = n(50),
        w = n(10),
        x = n(3),
        b = n(24),
        C = n(12),
        S = n(32),
        I = n(57),
        T = n(56),
        E = n(6),
        _ = n(9),
        O = T.f,
        R = E.f,
        k = I.f,
        D = o.Symbol,
        M = o.JSON,
        A = M && M.stringify,
        F = "prototype",
        P = d("_hidden"),
        L = d("toPrimitive"),
        j = {}.propertyIsEnumerable,
        N = c("symbol-registry"),
        Z = c("symbols"),
        U = c("op-symbols"),
        z = Object[F],
        B = "function" == typeof D,
        q = o.QObject,
        K = !q || !q[F] || !q[F].findChild,
        W = i && s(function() {
            return 7 != S(R({}, "a", { get: function() {
                    return R(this, "a", { value: 7 }).a } })).a }) ? function(e, t, n) {
            var o = O(z, t);
            o && delete z[t], R(e, t, n), o && e !== z && R(z, t, o) } : R,
        J = function(e) {
            var t = Z[e] = S(D[F]);
            return t._k = e, t },
        H = B && "symbol" == typeof D.iterator ? function(e) {
            return "symbol" == typeof e } : function(e) {
            return e instanceof D },
        G = function(e, t, n) {
            return e === z && G(U, t, n), w(e), t = b(t, !0), w(n), r(Z, t) ? (n.enumerable ? (r(e, P) && e[P][t] && (e[P][t] = !1), n = S(n, { enumerable: C(0, !1) })) : (r(e, P) || R(e, P, C(1, {})), e[P][t] = !0), W(e, t, n)) : R(e, t, n) },
        Y = function(e, t) { w(e);
            for (var n, o = y(t = x(t)), r = 0, i = o.length; i > r;) G(e, n = o[r++], t[n]);
            return e },
        V = function(e, t) {
            return void 0 === t ? S(e) : Y(S(e), t) },
        X = function(e) {
            var t = j.call(this, e = b(e, !0));
            return !(this === z && r(Z, e) && !r(U, e)) && (!(t || !r(this, e) || !r(Z, e) || r(this, P) && this[P][e]) || t) },
        $ = function(e, t) {
            if (e = x(e), t = b(t, !0), e !== z || !r(Z, t) || r(U, t)) {
                var n = O(e, t);
                return !n || !r(Z, t) || r(e, P) && e[P][t] || (n.enumerable = !0), n } },
        Q = function(e) {
            for (var t, n = k(x(e)), o = [], i = 0; n.length > i;) r(Z, t = n[i++]) || t == P || t == l || o.push(t);
            return o },
        ee = function(e) {
            for (var t, n = e === z, o = k(n ? U : x(e)), i = [], a = 0; o.length > a;) !r(Z, t = o[a++]) || n && !r(z, t) || i.push(Z[t]);
            return i };
    B || (D = function() {
        if (this instanceof D) throw TypeError("Symbol is not a constructor!");
        var e = p(arguments.length > 0 ? arguments[0] : void 0),
            t = function(n) { this === z && t.call(U, n), r(this, P) && r(this[P], e) && (this[P][e] = !1), W(this, e, C(1, n)) };
        return i && K && W(z, e, { configurable: !0, set: t }), J(e) }, u(D[F], "toString", function() {
        return this._k }), T.f = $, E.f = G, n(33).f = I.f = Q, n(19).f = X, n(34).f = ee, i && !n(18) && u(z, "propertyIsEnumerable", X, !0), m.f = function(e) {
        return J(d(e)) }), a(a.G + a.W + a.F * !B, { Symbol: D });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) d(te[ne++]);
    for (var te = _(d.store), ne = 0; te.length > ne;) h(te[ne++]);
    a(a.S + a.F * !B, "Symbol", { for: function(e) {
            return r(N, e += "") ? N[e] : N[e] = D(e) }, keyFor: function(e) {
            if (H(e)) return v(N, e);
            throw TypeError(e + " is not a symbol!") }, useSetter: function() { K = !0 }, useSimple: function() { K = !1 } }), a(a.S + a.F * !B, "Object", { create: V, defineProperty: G, defineProperties: Y, getOwnPropertyDescriptor: $, getOwnPropertyNames: Q, getOwnPropertySymbols: ee }), M && a(a.S + a.F * (!B || s(function() {
        var e = D();
        return "[null]" != A([e]) || "{}" != A({ a: e }) || "{}" != A(Object(e)) })), "JSON", { stringify: function(e) {
            if (void 0 !== e && !H(e)) {
                for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
                return t = o[1], "function" == typeof t && (n = t), !n && g(t) || (t = function(e, t) {
                    if (n && (t = n.call(this, e, t)), !H(t)) return t }), o[1] = t, A.apply(M, o) } } }), D[F][L] || n(5)(D[F], L, D[F].valueOf), f(D, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0) }, function(e, t, n) { n(25)("asyncIterator") }, function(e, t, n) { n(25)("observable") }, function(e, t, n) { n(62);
    for (var o = n(1), r = n(5), i = n(17), a = n(7)("toStringTag"), u = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
        var s = u[l],
            c = o[s],
            f = c && c.prototype;
        f && !f[a] && r(f, a, s), i[s] = i.Array } }, , function(e, t, n) { "use strict";
    var o = n(40),
        r = function(e) {
            return e && e.__esModule ? e : { default: e } }(o),
        i = function() {
            function e(e, t, o) {
                return t || o ? String.fromCharCode(t || o) : n[e] || e }

            function t(e) {
                return o[e] }
            var n = { "&quot;": '"', "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " " },
                o = {};
            for (var a in n) o[n[a]] = a;
            return n["&apos;"] = "'", o["'"] = "&#39;", { encode: function(e) {
                    return e ? ("" + e).replace(/['<> "&]/g, t).replace(/\r?\n/g, "<br/>").replace(/\s/g, "&nbsp;") : "" }, decode: function(t) {
                    return t ? ("" + t).replace(/<br\s*\/?>/gi, "\n").replace(/&quot;|&lt;|&gt;|&amp;|&nbsp;|&apos;|&#(\d+);|&#(\d+)/g, e).replace(/\u00a0/g, " ") : "" }, encodeBase16: function(e) {
                    if (!e) return e;
                    e += "";
                    for (var t = [], n = 0, o = e.length; o > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return t.join("") }, encodeBase16forJSON: function(e) {
                    if (!e) return e;
                    e = e.replace(/[\u4E00-\u9FBF]/gi, function(e) {
                        return escape(e).replace("%u", "\\u") });
                    for (var t = [], n = 0, o = e.length; o > n; n++) t.push(e.charCodeAt(n).toString(16).toUpperCase());
                    return t.join("") }, decodeBase16: function(e) {
                    if (!e) return e;
                    e += "";
                    for (var t = [], n = 0, o = e.length; o > n; n += 2) t.push(String.fromCharCode("0x" + e.slice(n, n + 2)));
                    return t.join("") }, encodeObject: function(e) {
                    if (e instanceof Array)
                        for (var t = 0, n = e.length; n > t; t++) e[t] = i.encodeObject(e[t]);
                    else if ("object" == (void 0 === e ? "undefined" : (0, r.default)(e)))
                        for (var o in e) e[o] = i.encodeObject(e[o]);
                    else if ("string" == typeof e) return i.encode(e);
                    return e }, loadScript: function(e) {
                    var t = document.createElement("script");
                    document.getElementsByTagName("body")[0].appendChild(t), t.setAttribute("src", e) }, addLoadEvent: function(e) {
                    var t = window.onload; "function" != typeof window.onload ? window.onload = e : window.onload = function() { t(), e() } } } }();
    e.exports = i }, function(e, t) {
    function n(e, t) { e.classList ? e.classList.add(t) : e.className += " " + t }
    e.exports = n }, function(e, t) {
    function n(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
            var n = new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)", "gi");
            e.className = e.className.replace(n, " ") } }
    e.exports = n }, , , , function(e, t, n) { "use strict";
    var o = n(90);
    if (n(80), window.BJ_REPORT) {}
    e.exports = { init: function() {} } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }

    function r(e, t) {
        var e = e.replace(/<%-sUrl%>/g, encodeURIComponent(t.sUrl)).replace(/<%-sTitle%>/g, t.sTitle).replace(/<%-sDesc%>/g, t.sDesc).replace(/<%-sPic%>/g, encodeURIComponent(t.sPic));
        window.open(e) }

    function i() {
        var e = document.querySelector(".js-wx-box"),
            t = document.querySelector(".mask");
        (0, s.default)(e, "in"), (0, s.default)(e, "ready"), (0, s.default)(t, "in") }

    function a() {
        var e = document.querySelector(".js-wx-box"),
            t = document.querySelector(".mask");
        (0, f.default)(e, "in"), (0, f.default)(e, "ready"), (0, f.default)(t, "in") }

    function u(e, t) { "weibo" === e ? r("http://service.weibo.com/share/share.php?url=<%-sUrl%>&title=<%-sTitle%>&pic=<%-sPic%>", t) : "qq" === e ? r("http://connect.qq.com/widget/shareqq/index.html?url=<%-sUrl%>&title=<%-sTitle%>&source=<%-sDesc%>", t) : "douban" === e ? r("https://www.douban.com/share/service?image=<%-sPic%>&href=<%-sUrl%>&name=<%-sTitle%>&text=<%-sDesc%>", t) : "qzone" === e ? r("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=<%-sUrl%>&title=<%-sTitle%>&pics=<%-sPic%>&summary=<%-sDesc%>", t) : "facebook" === e ? r("https://www.facebook.com/sharer/sharer.php?u=<%-sUrl%>", t) : "twitter" === e ? r("https://twitter.com/intent/tweet?text=<%-sTitle%>&url=<%-sUrl%>&via=<%-config.url%>", t) : "google" === e ? r("https://plus.google.com/share?url=<%-sUrl%>", t) : "weixin" === e && i() }
    var l = n(71),
        s = o(l),
        c = n(72),
        f = o(c),
        p = function() {
            var e = document.querySelectorAll(".share-sns");
            if (e && 0 !== e.length) {
                var t = window.location.href,
                    n = document.querySelector("title").innerHTML,
                    o = document.querySelectorAll(".article-entry img"),
                    r = o.length ? document.querySelector(".article-entry img").getAttribute("src") : ""; "" === r || /^(http:|https:)?\/\//.test(r) || (r = window.location.origin + r), e.forEach(function(e) { e.onclick = function(o) { u(e.getAttribute("data-type"), { sUrl: t, sPic: r, sTitle: n, sDesc: n }) } }), document.querySelector(".mask").onclick = a, document.querySelector(".js-modal-close").onclick = a } };
    e.exports = { init: p } }, function(e, t, n) { "use strict";

    function o(e) {
        return e && e.__esModule ? e : { default: e } }

    function r() {
        var e = document.querySelectorAll(".pswp")[0],
            t = document.querySelectorAll(".article-entry img:not(.reward-img)");
        t.forEach(function(n, o) { n.onclick = function() {
                if (!document.querySelector(".left-col.show")) {
                    var n = [];
                    t.forEach(function(e, t) {
                        var o = (e.getAttribute("data-idx", t), e.getAttribute("data-target") || e.getAttribute("src")),
                            r = e.getAttribute("alt");
                        n.push({ src: o, w: e.width, h: e.height, title: r }) });
                    new a.default(e, l.default, n, { index: parseInt(o) }).init() } } }) }
    var i = n(92),
        a = o(i),
        u = n(91),
        l = o(u);
    n(86), n(87), window.PhotoSwipe = a.default, window.PhotoSwipeUI_Default = l.default, e.exports = { init: r } }, , function(e, t, n) {
    var o = function(e) {
        if (e.BJ_REPORT) return e.BJ_REPORT;
        var t = [],
            n = {},
            o = { id: 0, uin: 0, url: "", combo: 1, ext: null, level: 4, ignore: [], random: 1, delay: 1e3, submit: null, repeat: 1 },
            r = function(e, t) {
                return Object.prototype.toString.call(e) === "[object " + (t || "Object") + "]" },
            i = function(e) {
                return "object" == typeof e && !!e },
            a = function(e) {
                return null === e || !r(e, "Number") && !e },
            u = e.onerror;
        e.onerror = function(t, n, o, i, a) {
            var l = t;
            a && a.stack && (l = s(a)), r(l, "Event") && (l += l.type ? "--" + l.type + "--" + (l.target ? l.target.tagName + "::" + l.target.src : "") : ""), y.push({ msg: l, target: n, rowNum: o, colNum: i }), v(), u && u.apply(e, arguments) };
        var l = function(e) {
                try {
                    if (e.stack) {
                        var t = e.stack.match("https?://[^\n]+");
                        t = t ? t[0] : "";
                        var n = t.match(":(\\d+):(\\d+)");
                        n || (n = [0, 0, 0]);
                        return { msg: s(e), rowNum: n[1], colNum: n[2], target: t.replace(n[0], "") } }
                    return e.name && e.message && e.description ? { msg: JSON.stringify(e) } : e } catch (t) {
                    return e } },
            s = function(e) {
                var t = e.stack.replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, ""),
                    n = e.toString();
                return t.indexOf(n) < 0 && (t = n + "@" + t), t },
            c = function(e, t) {
                var n = [],
                    r = [],
                    u = [];
                if (i(e)) { e.level = e.level || o.level;
                    for (var l in e) {
                        var s = e[l];
                        if (!a(s)) {
                            if (i(s)) try { s = JSON.stringify(s) } catch (e) { s = "[BJ_REPORT detect value stringify error] " + e.toString() }
                            u.push(l + ":" + s), n.push(l + "=" + encodeURIComponent(s)), r.push(l + "[" + t + "]=" + encodeURIComponent(s)) } } }
                return [r.join("&"), u.join(","), n.join("&")] },
            f = [],
            p = function(e) {
                if (o.submit) o.submit(e);
                else {
                    var t = new Image;
                    f.push(t), t.src = e } },
            d = function(e) {
                if (!i(e)) return !0;
                var t = e.msg;
                return (n[t] = (parseInt(n[t], 10) || 0) + 1) > o.repeat },
            m = [],
            h = 0,
            v = function(e) {
                if (o.report) {
                    for (; t.length;) {
                        var n = !1,
                            i = t.shift();
                        if (!d(i)) {
                            var a = c(i, m.length);
                            if (r(o.ignore, "Array"))
                                for (var u = 0, l = o.ignore.length; u < l; u++) {
                                    var s = o.ignore[u];
                                    if (r(s, "RegExp") && s.test(a[1]) || r(s, "Function") && s(i, a[1])) { n = !0;
                                        break } }
                            n || (o.combo ? m.push(a[0]) : p(o.report + a[2] + "&_t=" + +new Date), o.onReport && o.onReport(o.id, i)) } }
                    if (m.length) {
                        var f = function() { clearTimeout(h), p(o.report + m.join("&") + "&count=" + m.length + "&_t=" + +new Date), h = 0, m = [] };
                        e ? f() : h || (h = setTimeout(f, o.delay)) } } },
            y = e.BJ_REPORT = { push: function(e) {
                    if (Math.random() >= o.random) return y;
                    var n = i(e) ? l(e) : { msg: e };
                    return o.ext && !n.ext && (n.ext = o.ext), t.push(n), v(), y }, report: function(e) {
                    return e && y.push(e), v(!0), y }, info: function(e) {
                    return e ? (i(e) ? e.level = 2 : e = { msg: e, level: 2 }, y.push(e), y) : y }, debug: function(e) {
                    return e ? (i(e) ? e.level = 1 : e = { msg: e, level: 1 }, y.push(e), y) : y }, init: function(e) {
                    if (i(e))
                        for (var n in e) o[n] = e[n];
                    var r = parseInt(o.id, 10);
                    return r && (/qq\.com$/gi.test(location.hostname) && (o.url || (o.url = "//badjs2.qq.com/badjs"), o.uin || (o.uin = parseInt((document.cookie.match(/\buin=\D+(\d+)/) || [])[1], 10))), o.report = (o.url || "/badjs") + "?id=" + r + "&uin=" + o.uin + "&from=" + encodeURIComponent(location.href) + "&"), t.length && v(), y }, __onerror__: e.onerror };
        return "undefined" != typeof console && console.error && setTimeout(function() {
            var e = ((location.hash || "").match(/([#&])BJ_ERROR=([^&$]+)/) || [])[2];
            e && console.error("BJ_ERROR", decodeURIComponent(e).replace(/(:\d+:\d+)\s*/g, "$1\n")) }, 0), y }(window);
    e.exports = o,
        function(e) {
            if (!e.BJ_REPORT) return void console.error("please load bg-report first");
            var t = function(t) { e.BJ_REPORT.report(t) },
                n = {};
            e.BJ_REPORT.tryJs = function(e) {
                return e && (t = e), n };
            var o, r = function(e, t) {
                    for (var n in t) e[n] = t[n] },
                i = function(e) {
                    return "function" == typeof e },
                a = function(n, r) {
                    return function() {
                        try {
                            return n.apply(this, r || arguments) } catch (n) {
                            if (t(n), n.stack && console && console.error && console.error("[BJ-REPORT]", n.stack), !o) {
                                var i = e.onerror;
                                e.onerror = function() {}, o = setTimeout(function() { e.onerror = i, o = null }, 50) }
                            throw n } } },
                u = function(e) {
                    return function() {
                        for (var t, n = [], o = 0, r = arguments.length; o < r; o++) t = arguments[o], i(t) && (t = a(t)), n.push(t);
                        return e.apply(this, n) } },
                l = function(e) {
                    return function(t, n) {
                        if ("string" == typeof t) try { t = new Function(t) } catch (e) {
                            throw e }
                        var o = [].slice.call(arguments, 2);
                        return t = a(t, o.length && o), e(t, n) } },
                s = function(e, t) {
                    return function() {
                        for (var n, o, r = [], u = 0, l = arguments.length; u < l; u++) n = arguments[u], i(n) && (o = a(n)) && (n.tryWrap = o) && (n = o), r.push(n);
                        return e.apply(t || this, r) } },
                c = function(e) {
                    var t, n;
                    for (t in e) n = e[t], i(n) && (e[t] = a(n));
                    return e };
            n.spyJquery = function() {
                var t = e.$;
                if (!t || !t.event) return n;
                var o, r;
                t.zepto ? (o = t.fn.on, r = t.fn.off, t.fn.on = s(o), t.fn.off = function() {
                    for (var e, t = [], n = 0, o = arguments.length; n < o; n++) e = arguments[n], i(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
                    return r.apply(this, t) }) : window.jQuery && (o = t.event.add, r = t.event.remove, t.event.add = s(o), t.event.remove = function() {
                    for (var e, t = [], n = 0, o = arguments.length; n < o; n++) e = arguments[n], i(e) && e.tryWrap && (e = e.tryWrap), t.push(e);
                    return r.apply(this, t) });
                var a = t.ajax;
                return a && (t.ajax = function(e, n) {
                    return n || (n = e, e = void 0), c(n), e ? a.call(t, e, n) : a.call(t, n) }), n }, n.spyModules = function() {
                var t = e.require,
                    o = e.define;
                return o && o.amd && t && (e.require = u(t), r(e.require, t), e.define = u(o), r(e.define, o)), e.seajs && o && (e.define = function() {
                    for (var e, t = [], n = 0, r = arguments.length; n < r; n++) e = arguments[n], i(e) && (e = a(e), e.toString = function(e) {
                        return function() {
                            return e.toString() } }(arguments[n])), t.push(e);
                    return o.apply(this, t) }, e.seajs.use = u(e.seajs.use), r(e.define, o)), n }, n.spySystem = function() {
                return e.setTimeout = l(e.setTimeout), e.setInterval = l(e.setInterval), n }, n.spyCustom = function(e) {
                return i(e) ? a(e) : c(e) }, n.spyAll = function() {
                return n.spyJquery().spyModules().spySystem(), n } }(window) }, , , , , , function(e, t) {}, function(e, t) {}, function(e, t) {}, , function(e, t, n) {
    var o, r;! function(i) {
        if (o = i, r = "function" == typeof o ? o.call(t, n, t, e) : o, void 0 !== r && (e.exports = r), !0, e.exports = i(), !!0) {
            var a = window.Cookies,
                u = window.Cookies = i();
            u.noConflict = function() {
                return window.Cookies = a, u } } }(function() {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var o in n) t[o] = n[o] }
            return t }

        function t(n) {
            function o(t, r, i) {
                var a;
                if ("undefined" != typeof document) {
                    if (arguments.length > 1) {
                        if (i = e({ path: "/" }, o.defaults, i), "number" == typeof i.expires) {
                            var u = new Date;
                            u.setMilliseconds(u.getMilliseconds() + 864e5 * i.expires), i.expires = u }
                        try { a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a) } catch (e) {}
                        return r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", r, i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") }
                    t || (a = {});
                    for (var l = document.cookie ? document.cookie.split("; ") : [], s = /(%[0-9A-Z]{2})+/g, c = 0; c < l.length; c++) {
                        var f = l[c].split("="),
                            p = f.slice(1).join("="); '"' === p.charAt(0) && (p = p.slice(1, -1));
                        try {
                            var d = f[0].replace(s, decodeURIComponent);
                            if (p = n.read ? n.read(p, d) : n(p, d) || p.replace(s, decodeURIComponent), this.json) try { p = JSON.parse(p) } catch (e) {}
                            if (t === d) { a = p;
                                break }
                            t || (a[d] = p) } catch (e) {} }
                    return a } }
            return o.set = o, o.get = function(e) {
                return o.call(o, e) }, o.getJSON = function() {
                return o.apply({ json: !0 }, [].slice.call(arguments)) }, o.defaults = {}, o.remove = function(t, n) { o(t, "", e(n, { expires: -1 })) }, o.withConverter = t, o }
        return t(function() {}) }) }, function(e, t, n) {
    var o, r;
    ! function(i, a) { o = a, void 0 !== (r = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = r) }(0, function() {
        "use strict";
        return function(e, t) {
            var n, o, r, i, a, u, l, s, c, f, p, d, m, h, v, y, g, w, x, b = this,
                C = !1,
                S = !0,
                I = !0,
                T = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function(e, t) {
                        return e.title ? (t.children[0].innerHTML = e.title, !0) : (t.children[0].innerHTML = "", !1) }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function() {
                        return e.currItem.src || "" }, getPageURLForShare: function() {
                        return window.location.href }, getTextForShare: function() {
                        return e.currItem.title || "" }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
                E = function(e) {
                    if (y) return !0;
                    e = e || window.event, v.timeToIdle && v.mouseUsed && !c && L();
                    for (var n, o, r = e.target || e.srcElement, i = r.getAttribute("class") || "", a = 0; a < K.length; a++) n = K[a], n.onTap && i.indexOf("pswp__" + n.name) > -1 && (n.onTap(), o = !0);
                    if (o) { e.stopPropagation && e.stopPropagation(), y = !0;
                        var u = t.features.isOldAndroid ? 600 : 30;
                        g = setTimeout(function() { y = !1 }, u) } },
                _ = function() {
                    return !e.likelyTouchDevice || v.mouseUsed || screen.width > v.fitControlsWidth },
                O = function(e, n, o) { t[(o ? "add" : "remove") + "Class"](e, "pswp__" + n) },
                R = function() {
                    var e = 1 === v.getNumItemsFn();
                    e !== h && (O(o, "ui--one-slide", e), h = e) },
                k = function() { O(l, "share-modal--hidden", I) },
                D = function() {
                    return I = !I, I ? (t.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function() { I && k() }, 300)) : (k(), setTimeout(function() { I || t.addClass(l, "pswp__share-modal--fade-in") }, 30)), I || A(), !1 },
                M = function(t) { t = t || window.event;
                    var n = t.target || t.srcElement;
                    return e.shout("shareLinkClick", t, n), !(!n.href || !n.hasAttribute("download") && (window.open(n.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), I || D(), 1)) },
                A = function() {
                    for (var e, t, n, o, r, i = "", a = 0; a < v.shareButtons.length; a++) e = v.shareButtons[a], n = v.getImageURLForShare(e), o = v.getPageURLForShare(e), r = v.getTextForShare(e), t = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(n)).replace("{{raw_image_url}}", n).replace("{{text}}", encodeURIComponent(r)), i += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", v.parseShareButtonOut && (i = v.parseShareButtonOut(e, i));
                    l.children[0].innerHTML = i, l.children[0].onclick = M },
                F = function(e) {
                    for (var n = 0; n < v.closeElClasses.length; n++)
                        if (t.hasClass(e, "pswp__" + v.closeElClasses[n])) return !0 },
                P = 0,
                L = function() { clearTimeout(x), P = 0, c && b.setIdle(!1) },
                j = function(e) { e = e || window.event;
                    var t = e.relatedTarget || e.toElement;
                    t && "HTML" !== t.nodeName || (clearTimeout(x), x = setTimeout(function() { b.setIdle(!0) }, v.timeToIdleOutside)) },
                N = function() { v.fullscreenEl && !t.features.isOldAndroid && (n || (n = b.getFullscreenAPI()), n ? (t.bind(document, n.eventK, b.updateFullscreen), b.updateFullscreen(), t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs")) },
                Z = function() { v.preloaderEl && (U(!0), f("beforeChange", function() { clearTimeout(m), m = setTimeout(function() { e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && U(!1) : U(!0) }, v.loadingIndicatorDelay) }), f("imageLoadComplete", function(t, n) { e.currItem === n && U(!0) })) },
                U = function(e) { d !== e && (O(p, "preloader--active", !e), d = e) },
                z = function(e) {
                    var n = e.vGap;
                    if (_()) {
                        var a = v.barsSize;
                        if (v.captionEl && "auto" === a.bottom)
                            if (i || (i = t.createEl("pswp__caption pswp__caption--fake"), i.appendChild(t.createEl("pswp__caption__center")), o.insertBefore(i, r), t.addClass(o, "pswp__ui--fit")), v.addCaptionHTMLFn(e, i, !0)) {
                                var u = i.clientHeight;
                                n.bottom = parseInt(u, 10) || 44 } else n.bottom = a.top;
                        else n.bottom = "auto" === a.bottom ? 0 : a.bottom;
                        n.top = a.top } else n.top = n.bottom = 0 },
                B = function() { v.timeToIdle && f("mouseUsed", function() { t.bind(document, "mousemove", L), t.bind(document, "mouseout", j), w = setInterval(function() { 2 === ++P && b.setIdle(!0) }, v.timeToIdle / 2) }) },
                q = function() {
                    f("onVerticalDrag", function(e) { S && e < .95 ? b.hideControls() : !S && e >= .95 && b.showControls() });
                    var e;
                    f("onPinchClose", function(t) { S && t < .9 ? (b.hideControls(), e = !0) : e && !S && t > .9 && b.showControls() }), f("zoomGestureEnded", function() {
                        (e = !1) && !S && b.showControls() })
                },
                K = [{ name: "caption", option: "captionEl", onInit: function(e) { r = e } }, { name: "share-modal", option: "shareEl", onInit: function(e) { l = e }, onTap: function() { D() } }, { name: "button--share", option: "shareEl", onInit: function(e) { u = e }, onTap: function() { D() } }, { name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function(e) { a = e } }, { name: "button--close", option: "closeEl", onTap: e.close }, { name: "button--arrow--left", option: "arrowEl", onTap: e.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: e.next }, { name: "button--fs", option: "fullscreenEl", onTap: function() { n.isFullscreen() ? n.exit() : n.enter() } }, { name: "preloader", option: "preloaderEl", onInit: function(e) { p = e } }],
                W = function() {
                    var e, n, r, i = function(o) {
                        if (o)
                            for (var i = o.length, a = 0; a < i; a++) { e = o[a], n = e.className;
                                for (var u = 0; u < K.length; u++) r = K[u], n.indexOf("pswp__" + r.name) > -1 && (v[r.option] ? (t.removeClass(e, "pswp__element--disabled"), r.onInit && r.onInit(e)) : t.addClass(e, "pswp__element--disabled")) } };
                    i(o.children);
                    var a = t.getChildByClass(o, "pswp__top-bar");
                    a && i(a.children) };
            b.init = function() { t.extend(e.options, T, !0), v = e.options, o = t.getChildByClass(e.scrollWrap, "pswp__ui"), f = e.listen, q(), f("beforeChange", b.update), f("doubleTap", function(t) {
                    var n = e.currItem.initialZoomLevel;
                    e.getZoomLevel() !== n ? e.zoomTo(n, t, 333) : e.zoomTo(v.getDoubleTapZoom(!1, e.currItem), t, 333) }), f("preventDragEvent", function(e, t, n) {
                    var o = e.target || e.srcElement;
                    o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (n.prevent = !1) }), f("bindEvents", function() { t.bind(o, "pswpTap click", E), t.bind(e.scrollWrap, "pswpTap", b.onGlobalTap), e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", b.onMouseOver) }), f("unbindEvents", function() { I || D(), w && clearInterval(w), t.unbind(document, "mouseout", j), t.unbind(document, "mousemove", L), t.unbind(o, "pswpTap click", E), t.unbind(e.scrollWrap, "pswpTap", b.onGlobalTap), t.unbind(e.scrollWrap, "mouseover", b.onMouseOver), n && (t.unbind(document, n.eventK, b.updateFullscreen), n.isFullscreen() && (v.hideAnimationDuration = 0, n.exit()), n = null) }), f("destroy", function() { v.captionEl && (i && o.removeChild(i), t.removeClass(r, "pswp__caption--empty")), l && (l.children[0].onclick = null), t.removeClass(o, "pswp__ui--over-close"), t.addClass(o, "pswp__ui--hidden"), b.setIdle(!1) }), v.showAnimationDuration || t.removeClass(o, "pswp__ui--hidden"), f("initialZoomIn", function() { v.showAnimationDuration && t.removeClass(o, "pswp__ui--hidden") }), f("initialZoomOut", function() { t.addClass(o, "pswp__ui--hidden") }), f("parseVerticalMargin", z), W(), v.shareEl && u && l && (I = !0), R(), B(), N(), Z() }, b.setIdle = function(e) { c = e, O(o, "ui--idle", e) }, b.update = function() { S && e.currItem ? (b.updateIndexIndicator(), v.captionEl && (v.addCaptionHTMLFn(e.currItem, r), O(r, "caption--empty", !e.currItem.title)), C = !0) : C = !1, I || D(), R() }, b.updateFullscreen = function(o) { o && setTimeout(function() { e.setScrollOffset(0, t.getScrollY()) }, 50), t[(n.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs") }, b.updateIndexIndicator = function() { v.counterEl && (a.innerHTML = e.getCurrentIndex() + 1 + v.indexIndicatorSep + v.getNumItemsFn()) }, b.onGlobalTap = function(n) { n = n || window.event;
                var o = n.target || n.srcElement;
                if (!y)
                    if (n.detail && "mouse" === n.detail.pointerType) {
                        if (F(o)) return void e.close();
                        t.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? v.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(n.detail.releasePoint)) } else if (v.tapToToggleControls && (S ? b.hideControls() : b.showControls()), v.tapToClose && (t.hasClass(o, "pswp__img") || F(o))) return void e.close() }, b.onMouseOver = function(e) { e = e || window.event;
                var t = e.target || e.srcElement;
                O(o, "ui--over-close", F(t)) }, b.hideControls = function() { t.addClass(o, "pswp__ui--hidden"), S = !1 }, b.showControls = function() { S = !0, C || b.update(), t.removeClass(o, "pswp__ui--hidden") }, b.supportsFullscreen = function() {
                var e = document;
                return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen) }, b.getFullscreenAPI = function() {
                var t, n = document.documentElement,
                    o = "fullscreenchange";
                return n.requestFullscreen ? t = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: o } : n.mozRequestFullScreen ? t = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + o } : n.webkitRequestFullscreen ? t = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + o } : n.msRequestFullscreen && (t = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), t && (t.enter = function() {
                    return s = v.closeOnScroll, v.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT) }, t.exit = function() {
                    return v.closeOnScroll = s, document[this.exitK]() }, t.isFullscreen = function() {
                    return document[this.elementK] }), t }
        }
    })
}, function(e, t, n) {
    var o, r;
    ! function(i, a) { o = a, void 0 !== (r = "function" == typeof o ? o.call(t, n, t, e) : o) && (e.exports = r) }(0, function() {
        "use strict";
        return function(e, t, n, o) {
            var r = { features: null, bind: function(e, t, n, o) {
                    var r = (o ? "remove" : "add") + "EventListener";
                    t = t.split(" ");
                    for (var i = 0; i < t.length; i++) t[i] && e[r](t[i], n, !1) }, isArray: function(e) {
                    return e instanceof Array }, createEl: function(e, t) {
                    var n = document.createElement(t || "div");
                    return e && (n.className = e), n }, getScrollY: function() {
                    var e = window.pageYOffset;
                    return void 0 !== e ? e : document.documentElement.scrollTop }, unbind: function(e, t, n) { r.bind(e, t, n, !0) }, removeClass: function(e, t) {
                    var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
                    e.className = e.className.replace(n, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }, addClass: function(e, t) { r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t) }, hasClass: function(e, t) {
                    return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className) }, getChildByClass: function(e, t) {
                    for (var n = e.firstChild; n;) {
                        if (r.hasClass(n, t)) return n;
                        n = n.nextSibling } }, arraySearch: function(e, t, n) {
                    for (var o = e.length; o--;)
                        if (e[o][n] === t) return o;
                    return -1 }, extend: function(e, t, n) {
                    for (var o in t)
                        if (t.hasOwnProperty(o)) {
                            if (n && e.hasOwnProperty(o)) continue;
                            e[o] = t[o] } }, easing: { sine: { out: function(e) {
                            return Math.sin(e * (Math.PI / 2)) }, inOut: function(e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2 } }, cubic: { out: function(e) {
                            return --e * e * e + 1 } } }, detectFeatures: function() {
                    if (r.features) return r.features;
                    var e = r.createEl(),
                        t = e.style,
                        n = "",
                        o = {};
                    if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
                        var i = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            a && a.length > 0 && (a = parseInt(a[1], 10)) >= 1 && a < 8 && (o.isOldIOSPhone = !0) }
                        var u = i.match(/Android\s([0-9\.]*)/),
                            l = u ? u[1] : 0;
                        l = parseFloat(l), l >= 1 && (l < 4.4 && (o.isOldAndroid = !0), o.androidVersion = l), o.isMobileOpera = /opera mini|opera mobi/i.test(i) }
                    for (var s, c, f = ["transform", "perspective", "animationName"], p = ["", "webkit", "Moz", "ms", "O"], d = 0; d < 4; d++) { n = p[d];
                        for (var m = 0; m < 3; m++) s = f[m], c = n + (n ? s.charAt(0).toUpperCase() + s.slice(1) : s), !o[s] && c in t && (o[s] = c);
                        n && !o.raf && (n = n.toLowerCase(), o.raf = window[n + "RequestAnimationFrame"], o.raf && (o.caf = window[n + "CancelAnimationFrame"] || window[n + "CancelRequestAnimationFrame"])) }
                    if (!o.raf) {
                        var h = 0;
                        o.raf = function(e) {
                            var t = (new Date).getTime(),
                                n = Math.max(0, 16 - (t - h)),
                                o = window.setTimeout(function() { e(t + n) }, n);
                            return h = t + n, o }, o.caf = function(e) { clearTimeout(e) } }
                    return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, r.features = o, o } };
            r.detectFeatures(), r.features.oldIE && (r.bind = function(e, t, n, o) { t = t.split(" ");
                for (var r, i = (o ? "detach" : "attach") + "Event", a = function() { n.handleEvent.call(n) }, u = 0; u < t.length; u++)
                    if (r = t[u])
                        if ("object" == typeof n && n.handleEvent) {
                            if (o) {
                                if (!n["oldIE" + r]) return !1 } else n["oldIE" + r] = a;
                            e[i]("on" + r, n["oldIE" + r]) } else e[i]("on" + r, n) });
            var i = this,
                a = { allowPanToNext: !0, spacing: .12, bgOpacity: 1, mouseUsed: !1, loop: !0, pinchToClose: !0, closeOnScroll: !0, closeOnVerticalDrag: !0, verticalDragRange: .75, hideAnimationDuration: 333, showAnimationDuration: 333, showHideOpacity: !1, focus: !0, escKey: !0, arrowKeys: !0, mainScrollEndFriction: .35, panEndFriction: .35, isClickableElement: function(e) {
                        return "A" === e.tagName }, getDoubleTapZoom: function(e, t) {
                        return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33 }, maxSpreadZoom: 1.33, modal: !0, scaleMode: "fit" };
            r.extend(a, o);
            var u, l, s, c, f, p, d, m, h, v, y, g, w, x, b, C, S, I, T, E, _, O, R, k, D, M, A, F, P, L, j, N, Z, U, z, B, q, K, W, J, H, G, Y, V, X, $, Q, ee, te, ne, oe, re, ie, ae, ue, le, se = function() {
                    return { x: 0, y: 0 } },
                ce = se(),
                fe = se(),
                pe = se(),
                de = {},
                me = 0,
                he = {},
                ve = se(),
                ye = 0,
                ge = !0,
                we = [],
                xe = {},
                be = !1,
                Ce = function(e, t) { r.extend(i, t.publicMethods), we.push(e) },
                Se = function(e) {
                    var t = Yt();
                    return e > t - 1 ? e - t : e < 0 ? t + e : e },
                Ie = {},
                Te = function(e, t) {
                    return Ie[e] || (Ie[e] = []), Ie[e].push(t) },
                Ee = function(e) {
                    var t = Ie[e];
                    if (t) {
                        var n = Array.prototype.slice.call(arguments);
                        n.shift();
                        for (var o = 0; o < t.length; o++) t[o].apply(i, n) } },
                _e = function() {
                    return (new Date).getTime() },
                Oe = function(e) { ae = e, i.bg.style.opacity = e * a.bgOpacity },
                Re = function(e, t, n, o, r) {
                    (!be || r && r !== i.currItem) && (o /= r ? r.fitRatio : i.currItem.fitRatio), e[O] = g + t + "px, " + n + "px" + w + " scale(" + o + ")" },
                ke = function(e) { te && (e && (v > i.currItem.fitRatio ? be || (ln(i.currItem, !1, !0), be = !0) : be && (ln(i.currItem), be = !1)), Re(te, pe.x, pe.y, v)) },
                De = function(e) { e.container && Re(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e) },
                Me = function(e, t) { t[O] = g + e + "px, 0px" + w },
                Ae = function(e, t) {
                    if (!a.loop && t) {
                        var n = c + (ve.x * me - e) / ve.x,
                            o = Math.round(e - mt.x);
                        (n < 0 && o > 0 || n >= Yt() - 1 && o < 0) && (e = mt.x + o * a.mainScrollEndFriction) }
                    mt.x = e, Me(e, f) },
                Fe = function(e, t) {
                    var n = ht[e] - he[e];
                    return fe[e] + ce[e] + n - n * (t / y) },
                Pe = function(e, t) { e.x = t.x, e.y = t.y, t.id && (e.id = t.id) },
                Le = function(e) { e.x = Math.round(e.x), e.y = Math.round(e.y) },
                je = null,
                Ne = function() { je && (r.unbind(document, "mousemove", Ne), r.addClass(e, "pswp--has_mouse"), a.mouseUsed = !0, Ee("mouseUsed")), je = setTimeout(function() { je = null }, 100) },
                Ze = function() { r.bind(document, "keydown", i), j.transform && r.bind(i.scrollWrap, "click", i), a.mouseUsed || r.bind(document, "mousemove", Ne), r.bind(window, "resize scroll", i), Ee("bindEvents") },
                Ue = function() { r.unbind(window, "resize", i), r.unbind(window, "scroll", h.scroll), r.unbind(document, "keydown", i), r.unbind(document, "mousemove", Ne), j.transform && r.unbind(i.scrollWrap, "click", i), K && r.unbind(window, d, i), Ee("unbindEvents") },
                ze = function(e, t) {
                    var n = on(i.currItem, de, e);
                    return t && (ee = n), n },
                Be = function(e) {
                    return e || (e = i.currItem), e.initialZoomLevel },
                qe = function(e) {
                    return e || (e = i.currItem), e.w > 0 ? a.maxSpreadZoom : 1 },
                Ke = function(e, t, n, o) {
                    return o === i.currItem.initialZoomLevel ? (n[e] = i.currItem.initialPosition[e], !0) : (n[e] = Fe(e, o), n[e] > t.min[e] ? (n[e] = t.min[e], !0) : n[e] < t.max[e] && (n[e] = t.max[e], !0)) },
                We = function() {
                    if (O) {
                        var t = j.perspective && !k;
                        return g = "translate" + (t ? "3d(" : "("), void(w = j.perspective ? ", 0px)" : ")") }
                    O = "left", r.addClass(e, "pswp--ie"), Me = function(e, t) { t.left = e + "px" }, De = function(e) {
                        var t = e.fitRatio > 1 ? 1 : e.fitRatio,
                            n = e.container.style,
                            o = t * e.w,
                            r = t * e.h;
                        n.width = o + "px", n.height = r + "px", n.left = e.initialPosition.x + "px", n.top = e.initialPosition.y + "px" }, ke = function() {
                        if (te) {
                            var e = te,
                                t = i.currItem,
                                n = t.fitRatio > 1 ? 1 : t.fitRatio,
                                o = n * t.w,
                                r = n * t.h;
                            e.width = o + "px", e.height = r + "px", e.left = pe.x + "px", e.top = pe.y + "px" } } },
                Je = function(e) {
                    var t = "";
                    a.escKey && 27 === e.keyCode ? t = "close" : a.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")), t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, i[t]())) },
                He = function(e) { e && (H || J || ne || B) && (e.preventDefault(), e.stopPropagation()) },
                Ge = function() { i.setScrollOffset(0, r.getScrollY()) },
                Ye = {},
                Ve = 0,
                Xe = function(e) { Ye[e] && (Ye[e].raf && M(Ye[e].raf), Ve--, delete Ye[e]) },
                $e = function(e) { Ye[e] && Xe(e), Ye[e] || (Ve++, Ye[e] = {}) },
                Qe = function() {
                    for (var e in Ye) Ye.hasOwnProperty(e) && Xe(e) },
                et = function(e, t, n, o, r, i, a) {
                    var u, l = _e();
                    $e(e);
                    var s = function() {
                        if (Ye[e]) {
                            if ((u = _e() - l) >= o) return Xe(e), i(n), void(a && a());
                            i((n - t) * r(u / o) + t), Ye[e].raf = D(s) } };
                    s() },
                tt = { shout: Ee, listen: Te, viewportSize: de, options: a, isMainScrollAnimating: function() {
                        return ne }, getZoomLevel: function() {
                        return v }, getCurrentIndex: function() {
                        return c }, isDragging: function() {
                        return K }, isZooming: function() {
                        return X }, setScrollOffset: function(e, t) { he.x = e, L = he.y = t, Ee("updateScrollOffset", he) }, applyZoomPan: function(e, t, n, o) { pe.x = t, pe.y = n, v = e, ke(o) }, init: function() {
                        if (!u && !l) {
                            var n;
                            i.framework = r, i.template = e, i.bg = r.getChildByClass(e, "pswp__bg"), A = e.className, u = !0, j = r.detectFeatures(), D = j.raf, M = j.caf, O = j.transform, P = j.oldIE, i.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap"), i.container = r.getChildByClass(i.scrollWrap, "pswp__container"), f = i.container.style, i.itemHolders = C = [{ el: i.container.children[0], wrap: 0, index: -1 }, { el: i.container.children[1], wrap: 0, index: -1 }, { el: i.container.children[2], wrap: 0, index: -1 }], C[0].el.style.display = C[2].el.style.display = "none", We(), h = { resize: i.updateSize, scroll: Ge, keydown: Je, click: He };
                            var o = j.isOldIOSPhone || j.isOldAndroid || j.isMobileOpera;
                            for (j.animationName && j.transform && !o || (a.showAnimationDuration = a.hideAnimationDuration = 0), n = 0; n < we.length; n++) i["init" + we[n]]();
                            if (t) {
                                (i.ui = new t(i, r)).init() }
                            Ee("firstUpdate"), c = c || a.index || 0, (isNaN(c) || c < 0 || c >= Yt()) && (c = 0), i.currItem = Gt(c), (j.isOldIOSPhone || j.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), a.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = r.getScrollY() + "px")), void 0 === L && (Ee("initialLayout"), L = F = r.getScrollY());
                            var s = "pswp--open ";
                            for (a.mainClass && (s += a.mainClass + " "), a.showHideOpacity && (s += "pswp--animate_opacity "), s += k ? "pswp--touch" : "pswp--notouch", s += j.animationName ? " pswp--css_animation" : "", s += j.svg ? " pswp--svg" : "", r.addClass(e, s), i.updateSize(), p = -1, ye = null, n = 0; n < 3; n++) Me((n + p) * ve.x, C[n].el.style);
                            P || r.bind(i.scrollWrap, m, i), Te("initialZoomInEnd", function() { i.setContent(C[0], c - 1), i.setContent(C[2], c + 1), C[0].el.style.display = C[2].el.style.display = "block", a.focus && e.focus(), Ze() }), i.setContent(C[1], c), i.updateCurrItem(), Ee("afterInit"), ge || (x = setInterval(function() { Ve || K || X || v !== i.currItem.initialZoomLevel || i.updateSize() }, 1e3)), r.addClass(e, "pswp--visible") } }, close: function() { u && (u = !1, l = !0, Ee("close"), Ue(), Xt(i.currItem, null, !0, i.destroy)) }, destroy: function() { Ee("destroy"), Kt && clearTimeout(Kt), e.setAttribute("aria-hidden", "true"), e.className = A, x && clearInterval(x), r.unbind(i.scrollWrap, m, i), r.unbind(window, "scroll", i), xt(), Qe(), Ie = null }, panTo: function(e, t, n) { n || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), t > ee.min.y ? t = ee.min.y : t < ee.max.y && (t = ee.max.y)), pe.x = e, pe.y = t, ke() }, handleEvent: function(e) { e = e || window.event, h[e.type] && h[e.type](e) }, goTo: function(e) { e = Se(e);
                        var t = e - c;
                        ye = t, c = e, i.currItem = Gt(c), me -= t, Ae(ve.x * me), Qe(), ne = !1, i.updateCurrItem() }, next: function() { i.goTo(c + 1) }, prev: function() { i.goTo(c - 1) }, updateCurrZoomItem: function(e) {
                        if (e && Ee("beforeChange", 0), C[1].el.children.length) {
                            var t = C[1].el.children[0];
                            te = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null } else te = null;
                        ee = i.currItem.bounds, y = v = i.currItem.initialZoomLevel, pe.x = ee.center.x, pe.y = ee.center.y, e && Ee("afterChange") }, invalidateCurrItems: function() { b = !0;
                        for (var e = 0; e < 3; e++) C[e].item && (C[e].item.needsUpdate = !0) }, updateCurrItem: function(e) {
                        if (0 !== ye) {
                            var t, n = Math.abs(ye);
                            if (!(e && n < 2)) { i.currItem = Gt(c), be = !1, Ee("beforeChange", ye), n >= 3 && (p += ye + (ye > 0 ? -3 : 3), n = 3);
                                for (var o = 0; o < n; o++) ye > 0 ? (t = C.shift(), C[2] = t, p++, Me((p + 2) * ve.x, t.el.style), i.setContent(t, c - n + o + 1 + 1)) : (t = C.pop(), C.unshift(t), p--, Me(p * ve.x, t.el.style), i.setContent(t, c + n - o - 1 - 1));
                                if (te && 1 === Math.abs(ye)) {
                                    var r = Gt(S);
                                    r.initialZoomLevel !== v && (on(r, de), ln(r), De(r)) }
                                ye = 0, i.updateCurrZoomItem(), S = c, Ee("afterChange") } } }, updateSize: function(t) {
                        if (!ge && a.modal) {
                            var n = r.getScrollY();
                            if (L !== n && (e.style.top = n + "px", L = n), !t && xe.x === window.innerWidth && xe.y === window.innerHeight) return;
                            xe.x = window.innerWidth, xe.y = window.innerHeight, e.style.height = xe.y + "px" }
                        if (de.x = i.scrollWrap.clientWidth, de.y = i.scrollWrap.clientHeight, Ge(), ve.x = de.x + Math.round(de.x * a.spacing), ve.y = de.y, Ae(ve.x * me), Ee("beforeResize"), void 0 !== p) {
                            for (var o, u, l, s = 0; s < 3; s++) o = C[s], Me((s + p) * ve.x, o.el.style), l = c + s - 1, a.loop && Yt() > 2 && (l = Se(l)), u = Gt(l), u && (b || u.needsUpdate || !u.bounds) ? (i.cleanSlide(u), i.setContent(o, l), 1 === s && (i.currItem = u, i.updateCurrZoomItem(!0)), u.needsUpdate = !1) : -1 === o.index && l >= 0 && i.setContent(o, l), u && u.container && (on(u, de), ln(u), De(u));
                            b = !1 }
                        y = v = i.currItem.initialZoomLevel, ee = i.currItem.bounds, ee && (pe.x = ee.center.x, pe.y = ee.center.y, ke(!0)), Ee("resize") }, zoomTo: function(e, t, n, o, i) { t && (y = v, ht.x = Math.abs(t.x) - pe.x, ht.y = Math.abs(t.y) - pe.y, Pe(fe, pe));
                        var a = ze(e, !1),
                            u = {};
                        Ke("x", a, u, e), Ke("y", a, u, e);
                        var l = v,
                            s = { x: pe.x, y: pe.y };
                        Le(u);
                        var c = function(t) { 1 === t ? (v = e, pe.x = u.x, pe.y = u.y) : (v = (e - l) * t + l, pe.x = (u.x - s.x) * t + s.x, pe.y = (u.y - s.y) * t + s.y), i && i(t), ke(1 === t) };
                        n ? et("customZoomTo", 0, 1, n, o || r.easing.sine.inOut, c) : c(1) } },
                nt = {},
                ot = {},
                rt = {},
                it = {},
                at = {},
                ut = [],
                lt = {},
                st = [],
                ct = {},
                ft = 0,
                pt = se(),
                dt = 0,
                mt = se(),
                ht = se(),
                vt = se(),
                yt = function(e, t) {
                    return e.x === t.x && e.y === t.y },
                gt = function(e, t) {
                    return Math.abs(e.x - t.x) < 25 && Math.abs(e.y - t.y) < 25 },
                wt = function(e, t) {
                    return ct.x = Math.abs(e.x - t.x), ct.y = Math.abs(e.y - t.y), Math.sqrt(ct.x * ct.x + ct.y * ct.y) },
                xt = function() { G && (M(G), G = null) },
                bt = function() { K && (G = D(bt), jt()) },
                Ct = function() {
                    return !("fit" === a.scaleMode && v === i.currItem.initialZoomLevel) },
                St = function(e, t) {
                    return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (t(e) ? e : St(e.parentNode, t)) },
                It = {},
                Tt = function(e, t) {
                    return It.prevent = !St(e.target, a.isClickableElement), Ee("preventDragEvent", e, t, It), It.prevent },
                Et = function(e, t) {
                    return t.x = e.pageX, t.y = e.pageY, t.id = e.identifier, t },
                _t = function(e, t, n) { n.x = .5 * (e.x + t.x), n.y = .5 * (e.y + t.y) },
                Ot = function(e, t, n) {
                    if (e - Z > 50) {
                        var o = st.length > 2 ? st.shift() : {};
                        o.x = t, o.y = n, st.push(o), Z = e } },
                Rt = function() {
                    var e = pe.y - i.currItem.initialPosition.y;
                    return 1 - Math.abs(e / (de.y / 2)) },
                kt = {},
                Dt = {},
                Mt = [],
                At = function(e) {
                    for (; Mt.length > 0;) Mt.pop();
                    return R ? (le = 0, ut.forEach(function(e) { 0 === le ? Mt[0] = e : 1 === le && (Mt[1] = e), le++ })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Mt[0] = Et(e.touches[0], kt), e.touches.length > 1 && (Mt[1] = Et(e.touches[1], Dt))) : (kt.x = e.pageX, kt.y = e.pageY, kt.id = "", Mt[0] = kt), Mt },
                Ft = function(e, t) {
                    var n, o, r, u, l = pe[e] + t[e],
                        s = t[e] > 0,
                        c = mt.x + t.x,
                        f = mt.x - lt.x;
                    return n = l > ee.min[e] || l < ee.max[e] ? a.panEndFriction : 1, l = pe[e] + t[e] * n, !a.allowPanToNext && v !== i.currItem.initialZoomLevel || (te ? "h" !== oe || "x" !== e || J || (s ? (l > ee.min[e] && (n = a.panEndFriction, ee.min[e] - l, o = ee.min[e] - fe[e]), (o <= 0 || f < 0) && Yt() > 1 ? (u = c, f < 0 && c > lt.x && (u = lt.x)) : ee.min.x !== ee.max.x && (r = l)) : (l < ee.max[e] && (n = a.panEndFriction, l - ee.max[e], o = fe[e] - ee.max[e]), (o <= 0 || f > 0) && Yt() > 1 ? (u = c, f > 0 && c < lt.x && (u = lt.x)) : ee.min.x !== ee.max.x && (r = l))) : u = c, "x" !== e) ? void(ne || Y || v > i.currItem.fitRatio && (pe[e] += t[e] * n)) : (void 0 !== u && (Ae(u, !0), Y = u !== lt.x), ee.min.x !== ee.max.x && (void 0 !== r ? pe.x = r : Y || (pe.x += t.x * n)), void 0 !== u) },
                Pt = function(e) {
                    if (!("mousedown" === e.type && e.button > 0)) {
                        if (Ht) return void e.preventDefault();
                        if (!q || "mousedown" !== e.type) {
                            if (Tt(e, !0) && e.preventDefault(), Ee("pointerDown"), R) {
                                var t = r.arraySearch(ut, e.pointerId, "id");
                                t < 0 && (t = ut.length), ut[t] = { x: e.pageX, y: e.pageY, id: e.pointerId } }
                            var n = At(e),
                                o = n.length;
                            V = null, Qe(), K && 1 !== o || (K = re = !0, r.bind(window, d, i), z = ue = ie = B = Y = H = W = J = !1, oe = null, Ee("firstTouchStart", n), Pe(fe, pe), ce.x = ce.y = 0, Pe(it, n[0]), Pe(at, it), lt.x = ve.x * me, st = [{ x: it.x, y: it.y }], Z = N = _e(), ze(v, !0), xt(), bt()), !X && o > 1 && !ne && !Y && (y = v, J = !1, X = W = !0, ce.y = ce.x = 0, Pe(fe, pe), Pe(nt, n[0]), Pe(ot, n[1]), _t(nt, ot, vt), ht.x = Math.abs(vt.x) - pe.x, ht.y = Math.abs(vt.y) - pe.y, $ = Q = wt(nt, ot)) } } },
                Lt = function(e) {
                    if (e.preventDefault(), R) {
                        var t = r.arraySearch(ut, e.pointerId, "id");
                        if (t > -1) {
                            var n = ut[t];
                            n.x = e.pageX, n.y = e.pageY } }
                    if (K) {
                        var o = At(e);
                        if (oe || H || X) V = o;
                        else if (mt.x !== ve.x * me) oe = "h";
                        else {
                            var i = Math.abs(o[0].x - it.x) - Math.abs(o[0].y - it.y);
                            Math.abs(i) >= 10 && (oe = i > 0 ? "h" : "v", V = o) } } },
                jt = function() {
                    if (V) {
                        var e = V.length;
                        if (0 !== e)
                            if (Pe(nt, V[0]), rt.x = nt.x - it.x, rt.y = nt.y - it.y, X && e > 1) {
                                if (it.x = nt.x, it.y = nt.y, !rt.x && !rt.y && yt(V[1], ot)) return;
                                Pe(ot, V[1]), J || (J = !0, Ee("zoomGestureStarted"));
                                var t = wt(nt, ot),
                                    n = Bt(t);
                                n > i.currItem.initialZoomLevel + i.currItem.initialZoomLevel / 15 && (ue = !0);
                                var o = 1,
                                    r = Be(),
                                    u = qe();
                                if (n < r)
                                    if (a.pinchToClose && !ue && y <= i.currItem.initialZoomLevel) {
                                        var l = r - n,
                                            s = 1 - l / (r / 1.2);
                                        Oe(s), Ee("onPinchClose", s), ie = !0 } else o = (r - n) / r, o > 1 && (o = 1), n = r - o * (r / 3);
                                else n > u && (o = (n - u) / (6 * r), o > 1 && (o = 1), n = u + o * r);
                                o < 0 && (o = 0), $ = t, _t(nt, ot, pt), ce.x += pt.x - vt.x, ce.y += pt.y - vt.y, Pe(vt, pt), pe.x = Fe("x", n), pe.y = Fe("y", n), z = n > v, v = n, ke() } else {
                                if (!oe) return;
                                if (re && (re = !1, Math.abs(rt.x) >= 10 && (rt.x -= V[0].x - at.x), Math.abs(rt.y) >= 10 && (rt.y -= V[0].y - at.y)), it.x = nt.x, it.y = nt.y, 0 === rt.x && 0 === rt.y) return;
                                if ("v" === oe && a.closeOnVerticalDrag && !Ct()) { ce.y += rt.y, pe.y += rt.y;
                                    var c = Rt();
                                    return B = !0, Ee("onVerticalDrag", c), Oe(c), void ke() }
                                Ot(_e(), nt.x, nt.y), H = !0, ee = i.currItem.bounds;
                                var f = Ft("x", rt);
                                f || (Ft("y", rt), Le(pe), ke()) } } },
                Nt = function(e) {
                    if (j.isOldAndroid) {
                        if (q && "mouseup" === e.type) return;
                        e.type.indexOf("touch") > -1 && (clearTimeout(q), q = setTimeout(function() { q = 0 }, 600)) }
                    Ee("pointerUp"), Tt(e, !1) && e.preventDefault();
                    var t;
                    if (R) {
                        var n = r.arraySearch(ut, e.pointerId, "id");
                        if (n > -1)
                            if (t = ut.splice(n, 1)[0], navigator.pointerEnabled) t.type = e.pointerType || "mouse";
                            else {
                                var o = { 4: "mouse", 2: "touch", 3: "pen" };
                                t.type = o[e.pointerType], t.type || (t.type = e.pointerType || "mouse") } }
                    var u, l = At(e),
                        s = l.length;
                    if ("mouseup" === e.type && (s = 0), 2 === s) return V = null, !0;
                    1 === s && Pe(at, l[0]), 0 !== s || oe || ne || (t || ("mouseup" === e.type ? t = { x: e.pageX, y: e.pageY, type: "mouse" } : e.changedTouches && e.changedTouches[0] && (t = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type: "touch" })), Ee("touchRelease", e, t));
                    var c = -1;
                    if (0 === s && (K = !1, r.unbind(window, d, i), xt(), X ? c = 0 : -1 !== dt && (c = _e() - dt)), dt = 1 === s ? _e() : -1, u = -1 !== c && c < 150 ? "zoom" : "swipe", X && s < 2 && (X = !1, 1 === s && (u = "zoomPointerUp"), Ee("zoomGestureEnded")), V = null, H || J || ne || B)
                        if (Qe(), U || (U = Zt()), U.calculateSwipeSpeed("x"), B) {
                            var f = Rt();
                            if (f < a.verticalDragRange) i.close();
                            else {
                                var p = pe.y,
                                    m = ae;
                                et("verticalDrag", 0, 1, 300, r.easing.cubic.out, function(e) { pe.y = (i.currItem.initialPosition.y - p) * e + p, Oe((1 - m) * e + m), ke() }), Ee("onVerticalDrag", 1) } } else {
                            if ((Y || ne) && 0 === s) {
                                var h = zt(u, U);
                                if (h) return;
                                u = "zoomPointerUp" }
                            if (!ne) return "swipe" !== u ? void qt() : void(!Y && v > i.currItem.fitRatio && Ut(U)) } },
                Zt = function() {
                    var e, t, n = { lastFlickOffset: {}, lastFlickDist: {}, lastFlickSpeed: {}, slowDownRatio: {}, slowDownRatioReverse: {}, speedDecelerationRatio: {}, speedDecelerationRatioAbs: {}, distanceOffset: {}, backAnimDestination: {}, backAnimStarted: {}, calculateSwipeSpeed: function(o) { st.length > 1 ? (e = _e() - Z + 50, t = st[st.length - 2][o]) : (e = _e() - N, t = at[o]), n.lastFlickOffset[o] = it[o] - t, n.lastFlickDist[o] = Math.abs(n.lastFlickOffset[o]), n.lastFlickDist[o] > 20 ? n.lastFlickSpeed[o] = n.lastFlickOffset[o] / e : n.lastFlickSpeed[o] = 0, Math.abs(n.lastFlickSpeed[o]) < .1 && (n.lastFlickSpeed[o] = 0), n.slowDownRatio[o] = .95, n.slowDownRatioReverse[o] = 1 - n.slowDownRatio[o], n.speedDecelerationRatio[o] = 1 }, calculateOverBoundsAnimOffset: function(e, t) { n.backAnimStarted[e] || (pe[e] > ee.min[e] ? n.backAnimDestination[e] = ee.min[e] : pe[e] < ee.max[e] && (n.backAnimDestination[e] = ee.max[e]), void 0 !== n.backAnimDestination[e] && (n.slowDownRatio[e] = .7, n.slowDownRatioReverse[e] = 1 - n.slowDownRatio[e], n.speedDecelerationRatioAbs[e] < .05 && (n.lastFlickSpeed[e] = 0, n.backAnimStarted[e] = !0, et("bounceZoomPan" + e, pe[e], n.backAnimDestination[e], t || 300, r.easing.sine.out, function(t) { pe[e] = t, ke() })))) }, calculateAnimOffset: function(e) { n.backAnimStarted[e] || (n.speedDecelerationRatio[e] = n.speedDecelerationRatio[e] * (n.slowDownRatio[e] + n.slowDownRatioReverse[e] - n.slowDownRatioReverse[e] * n.timeDiff / 10), n.speedDecelerationRatioAbs[e] = Math.abs(n.lastFlickSpeed[e] * n.speedDecelerationRatio[e]), n.distanceOffset[e] = n.lastFlickSpeed[e] * n.speedDecelerationRatio[e] * n.timeDiff, pe[e] += n.distanceOffset[e]) }, panAnimLoop: function() {
                            if (Ye.zoomPan && (Ye.zoomPan.raf = D(n.panAnimLoop), n.now = _e(), n.timeDiff = n.now - n.lastNow, n.lastNow = n.now, n.calculateAnimOffset("x"), n.calculateAnimOffset("y"), ke(), n.calculateOverBoundsAnimOffset("x"), n.calculateOverBoundsAnimOffset("y"), n.speedDecelerationRatioAbs.x < .05 && n.speedDecelerationRatioAbs.y < .05)) return pe.x = Math.round(pe.x), pe.y = Math.round(pe.y), ke(), void Xe("zoomPan") } };
                    return n },
                Ut = function(e) {
                    return e.calculateSwipeSpeed("y"), ee = i.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0) : ($e("zoomPan"), e.lastNow = _e(), void e.panAnimLoop()) },
                zt = function(e, t) {
                    var n;
                    ne || (ft = c);
                    var o;
                    if ("swipe" === e) {
                        var u = it.x - at.x,
                            l = t.lastFlickDist.x < 10;
                        u > 30 && (l || t.lastFlickOffset.x > 20) ? o = -1 : u < -30 && (l || t.lastFlickOffset.x < -20) && (o = 1) }
                    var s;
                    o && (c += o, c < 0 ? (c = a.loop ? Yt() - 1 : 0, s = !0) : c >= Yt() && (c = a.loop ? 0 : Yt() - 1, s = !0), s && !a.loop || (ye += o, me -= o, n = !0));
                    var f, p = ve.x * me,
                        d = Math.abs(p - mt.x);
                    return n || p > mt.x == t.lastFlickSpeed.x > 0 ? (f = Math.abs(t.lastFlickSpeed.x) > 0 ? d / Math.abs(t.lastFlickSpeed.x) : 333, f = Math.min(f, 400), f = Math.max(f, 250)) : f = 333, ft === c && (n = !1), ne = !0, Ee("mainScrollAnimStart"), et("mainScroll", mt.x, p, f, r.easing.cubic.out, Ae, function() { Qe(), ne = !1, ft = -1, (n || ft !== c) && i.updateCurrItem(), Ee("mainScrollAnimComplete") }), n && i.updateCurrItem(!0), n },
                Bt = function(e) {
                    return 1 / Q * e * y },
                qt = function() {
                    var e = v,
                        t = Be(),
                        n = qe();
                    v < t ? e = t : v > n && (e = n);
                    var o, a = ae;
                    return ie && !z && !ue && v < t ? (i.close(), !0) : (ie && (o = function(e) { Oe((1 - a) * e + a) }), i.zoomTo(e, 0, 200, r.easing.cubic.out, o), !0) };
            Ce("Gestures", { publicMethods: { initGestures: function() {
                        var e = function(e, t, n, o, r) { I = e + t, T = e + n, E = e + o, _ = r ? e + r : "" };
                        R = j.pointerEvent, R && j.touch && (j.touch = !1), R ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : j.touch ? (e("touch", "start", "move", "end", "cancel"), k = !0) : e("mouse", "down", "move", "up"), d = T + " " + E + " " + _, m = I, R && !k && (k = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), i.likelyTouchDevice = k, h[I] = Pt, h[T] = Lt, h[E] = Nt, _ && (h[_] = h[E]), j.touch && (m += " mousedown", d += " mousemove mouseup", h.mousedown = h[I], h.mousemove = h[T], h.mouseup = h[E]), k || (a.allowPanToNext = !1) } } });
            var Kt, Wt, Jt, Ht, Gt, Yt, Vt, Xt = function(t, n, o, u) { Kt && clearTimeout(Kt), Ht = !0, Jt = !0;
                    var l;
                    t.initialLayout ? (l = t.initialLayout, t.initialLayout = null) : l = a.getThumbBoundsFn && a.getThumbBoundsFn(c);
                    var f = o ? a.hideAnimationDuration : a.showAnimationDuration,
                        p = function() { Xe("initialZoom"), o ? (i.template.removeAttribute("style"), i.bg.removeAttribute("style")) : (Oe(1), n && (n.style.display = "block"), r.addClass(e, "pswp--animated-in"), Ee("initialZoom" + (o ? "OutEnd" : "InEnd"))), u && u(), Ht = !1 };
                    if (!f || !l || void 0 === l.x) return Ee("initialZoom" + (o ? "Out" : "In")), v = t.initialZoomLevel, Pe(pe, t.initialPosition), ke(), e.style.opacity = o ? 0 : 1, Oe(1), void(f ? setTimeout(function() { p() }, f) : p());! function() {
                        var n = s,
                            u = !i.currItem.src || i.currItem.loadError || a.showHideOpacity;
                        t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (v = l.w / t.w, pe.x = l.x, pe.y = l.y - F, i[u ? "template" : "bg"].style.opacity = .001, ke()), $e("initialZoom"), o && !n && r.removeClass(e, "pswp--animated-in"), u && (o ? r[(n ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() { r.addClass(e, "pswp--animate_opacity") }, 30)), Kt = setTimeout(function() {
                            if (Ee("initialZoom" + (o ? "Out" : "In")), o) {
                                var i = l.w / t.w,
                                    a = { x: pe.x, y: pe.y },
                                    s = v,
                                    c = ae,
                                    d = function(t) { 1 === t ? (v = i, pe.x = l.x, pe.y = l.y - L) : (v = (i - s) * t + s, pe.x = (l.x - a.x) * t + a.x, pe.y = (l.y - L - a.y) * t + a.y), ke(), u ? e.style.opacity = 1 - t : Oe(c - t * c) };
                                n ? et("initialZoom", 0, 1, f, r.easing.cubic.out, d, p) : (d(1), Kt = setTimeout(p, f + 20)) } else v = t.initialZoomLevel, Pe(pe, t.initialPosition), ke(), Oe(1), u ? e.style.opacity = 1 : Oe(1), Kt = setTimeout(p, f + 20) }, o ? 25 : 90) }() },
                $t = {},
                Qt = [],
                en = { index: 0, errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>', forceProgressiveLoading: !1, preload: [1, 1], getNumItemsFn: function() {
                        return Wt.length } },
                tn = function() {
                    return { center: { x: 0, y: 0 }, max: { x: 0, y: 0 }, min: { x: 0, y: 0 } } },
                nn = function(e, t, n) {
                    var o = e.bounds;
                    o.center.x = Math.round(($t.x - t) / 2), o.center.y = Math.round(($t.y - n) / 2) + e.vGap.top, o.max.x = t > $t.x ? Math.round($t.x - t) : o.center.x, o.max.y = n > $t.y ? Math.round($t.y - n) + e.vGap.top : o.center.y, o.min.x = t > $t.x ? 0 : o.center.x, o.min.y = n > $t.y ? e.vGap.top : o.center.y },
                on = function(e, t, n) {
                    if (e.src && !e.loadError) {
                        var o = !n;
                        if (o && (e.vGap || (e.vGap = { top: 0, bottom: 0 }), Ee("parseVerticalMargin", e)), $t.x = t.x, $t.y = t.y - e.vGap.top - e.vGap.bottom, o) {
                            var r = $t.x / e.w,
                                i = $t.y / e.h;
                            e.fitRatio = r < i ? r : i;
                            var u = a.scaleMode; "orig" === u ? n = 1 : "fit" === u && (n = e.fitRatio), n > 1 && (n = 1), e.initialZoomLevel = n, e.bounds || (e.bounds = tn()) }
                        if (!n) return;
                        return nn(e, e.w * n, e.h * n), o && n === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds }
                    return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = tn(), e.initialPosition = e.bounds.center, e.bounds },
                rn = function(e, t, n, o, r, a) { t.loadError || o && (t.imageAppended = !0, ln(t, o, t === i.currItem && be), n.appendChild(o), a && setTimeout(function() { t && t.loaded && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) }, 500)) },
                an = function(e) { e.loading = !0, e.loaded = !1;
                    var t = e.img = r.createEl("pswp__img", "img"),
                        n = function() { e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, t.onload = t.onerror = null, t = null };
                    return t.onload = n, t.onerror = function() { e.loadError = !0, n() }, t.src = e.src, t },
                un = function(e, t) {
                    if (e.src && e.loadError && e.container) return t && (e.container.innerHTML = ""), e.container.innerHTML = a.errorMsg.replace("%url%", e.src), !0 },
                ln = function(e, t, n) {
                    if (e.src) { t || (t = e.container.lastChild);
                        var o = n ? e.w : Math.round(e.w * e.fitRatio),
                            r = n ? e.h : Math.round(e.h * e.fitRatio);
                        e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = r + "px"), t.style.width = o + "px", t.style.height = r + "px" } },
                sn = function() {
                    if (Qt.length) {
                        for (var e, t = 0; t < Qt.length; t++) e = Qt[t], e.holder.index === e.index && rn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
                        Qt = [] } };
            Ce("Controller", {
                publicMethods: {
                    lazyLoadItem: function(e) { e = Se(e);
                        var t = Gt(e);
                        t && (!t.loaded && !t.loading || b) && (Ee("gettingData", e, t), t.src && an(t)) },
                    initController: function() { r.extend(a, en, !0), i.items = Wt = n, Gt = i.getItemAt, Yt = a.getNumItemsFn, Vt = a.loop, Yt() < 3 && (a.loop = !1), Te("beforeChange", function(e) {
                            var t, n = a.preload,
                                o = null === e || e >= 0,
                                r = Math.min(n[0], Yt()),
                                u = Math.min(n[1], Yt());
                            for (t = 1; t <= (o ? u : r); t++) i.lazyLoadItem(c + t);
                            for (t = 1; t <= (o ? r : u); t++) i.lazyLoadItem(c - t) }), Te("initialLayout", function() { i.currItem.initialLayout = a.getThumbBoundsFn && a.getThumbBoundsFn(c) }), Te("mainScrollAnimComplete", sn), Te("initialZoomInEnd", sn), Te("destroy", function() {
                            for (var e, t = 0; t < Wt.length; t++) e = Wt[t], e.container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                            Qt = null }) },
                    getItemAt: function(e) {
                        return e >= 0 && void 0 !== Wt[e] && Wt[e] },
                    allowProgressiveImg: function() {
                        return a.forceProgressiveLoading || !k || a.mouseUsed || screen.width > 1200 },
                    setContent: function(e, t) {
                        a.loop && (t = Se(t));
                        var n = i.getItemAt(e.index);
                        n && (n.container = null);
                        var o, l = i.getItemAt(t);
                        if (!l) return void(e.el.innerHTML = "");
                        Ee("gettingData", t, l), e.index = t, e.item = l;
                        var s = l.container = r.createEl("pswp__zoom-wrap");
                        if (!l.src && l.html && (l.html.tagName ? s.appendChild(l.html) : s.innerHTML = l.html), un(l), on(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && (o = r.createEl("pswp__img", "img"), o.style.opacity = 1, o.src = l.src, ln(l, o), rn(0, l, s, o));
                        else {
                            if (l.loadComplete = function(n) {
                                    if (u) {
                                        if (e && e.index === t) {
                                            if (un(n, !0)) return n.loadComplete = n.img = null, on(n, de), De(n), void(e.index === c && i.updateCurrZoomItem());
                                            n.imageAppended ? !Ht && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null) : j.transform && (ne || Ht) ? Qt.push({ item: n, baseDiv: s, img: n.img, index: t, holder: e, clearPlaceholder: !0 }) : rn(0, n, s, n.img, 0, !0) }
                                        n.loadComplete = null, n.img = null, Ee("imageLoadComplete", t, n) } }, r.features.transform) {
                                var f = "pswp__img pswp__img--placeholder";
                                f += l.msrc ? "" : " pswp__img--placeholder--blank";
                                var p = r.createEl(f, l.msrc ? "img" : "");
                                l.msrc && (p.src = l.msrc), ln(l, p), s.appendChild(p), l.placeholder = p }
                            l.loading || an(l), i.allowProgressiveImg() && (!Jt && j.transform ? Qt.push({
                                item: l,
                                baseDiv: s,
                                img: l.img,
                                index: t,
                                holder: e
                            }) : rn(0, l, s, l.img, 0, !0))
                        }
                        Jt || t !== c ? De(l) : (te = s.style, Xt(l, o || l.img)), e.el.innerHTML = "", e.el.appendChild(s)
                    },
                    cleanSlide: function(e) { e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1 }
                }
            });
            var cn, fn = {},
                pn = function(e, t, n) {
                    var o = document.createEvent("CustomEvent"),
                        r = { origEvent: e, target: e.target, releasePoint: t, pointerType: n || "touch" };
                    o.initCustomEvent("pswpTap", !0, !0, r), e.target.dispatchEvent(o) };
            Ce("Tap", { publicMethods: { initTap: function() { Te("firstTouchStart", i.onTapStart), Te("touchRelease", i.onTapRelease), Te("destroy", function() { fn = {}, cn = null }) }, onTapStart: function(e) { e.length > 1 && (clearTimeout(cn), cn = null) }, onTapRelease: function(e, t) {
                        if (t && !H && !W && !Ve) {
                            var n = t;
                            if (cn && (clearTimeout(cn), cn = null, gt(n, fn))) return void Ee("doubleTap", n);
                            if ("mouse" === t.type) return void pn(e, t, "mouse");
                            if ("BUTTON" === e.target.tagName.toUpperCase() || r.hasClass(e.target, "pswp__single-tap")) return void pn(e, t);
                            Pe(fn, n), cn = setTimeout(function() { pn(e, t), cn = null }, 300) } } } });
            var dn;
            Ce("DesktopZoom", { publicMethods: { initDesktopZoom: function() { P || (k ? Te("mouseUsed", function() { i.setupDesktopZoom() }) : i.setupDesktopZoom(!0)) }, setupDesktopZoom: function(t) { dn = {};
                        var n = "wheel mousewheel DOMMouseScroll";
                        Te("bindEvents", function() { r.bind(e, n, i.handleMouseWheel) }), Te("unbindEvents", function() { dn && r.unbind(e, n, i.handleMouseWheel) }), i.mouseZoomedIn = !1;
                        var o, a = function() { i.mouseZoomedIn && (r.removeClass(e, "pswp--zoomed-in"), i.mouseZoomedIn = !1), v < 1 ? r.addClass(e, "pswp--zoom-allowed") : r.removeClass(e, "pswp--zoom-allowed"), u() },
                            u = function() { o && (r.removeClass(e, "pswp--dragging"), o = !1) };
                        Te("resize", a), Te("afterChange", a), Te("pointerDown", function() { i.mouseZoomedIn && (o = !0, r.addClass(e, "pswp--dragging")) }), Te("pointerUp", u), t || a() }, handleMouseWheel: function(e) {
                        if (v <= i.currItem.fitRatio) return a.modal && (!a.closeOnScroll || Ve || K ? e.preventDefault() : O && Math.abs(e.deltaY) > 2 && (s = !0, i.close())), !0;
                        if (e.stopPropagation(), dn.x = 0, "deltaX" in e) 1 === e.deltaMode ? (dn.x = 18 * e.deltaX, dn.y = 18 * e.deltaY) : (dn.x = e.deltaX, dn.y = e.deltaY);
                        else if ("wheelDelta" in e) e.wheelDeltaX && (dn.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? dn.y = -.16 * e.wheelDeltaY : dn.y = -.16 * e.wheelDelta;
                        else {
                            if (!("detail" in e)) return;
                            dn.y = e.detail }
                        ze(v, !0);
                        var t = pe.x - dn.x,
                            n = pe.y - dn.y;
                        (a.modal || t <= ee.min.x && t >= ee.max.x && n <= ee.min.y && n >= ee.max.y) && e.preventDefault(), i.panTo(t, n) }, toggleDesktopZoom: function(t) { t = t || { x: de.x / 2 + he.x, y: de.y / 2 + he.y };
                        var n = a.getDoubleTapZoom(!0, i.currItem),
                            o = v === n;
                        i.mouseZoomedIn = !o, i.zoomTo(o ? i.currItem.initialZoomLevel : n, t, 333), r[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in") } } });
            var mn, hn, vn, yn, gn, wn, xn, bn, Cn, Sn, In, Tn, En = { history: !0, galleryUID: 1 },
                _n = function() {
                    return In.hash.substring(1) },
                On = function() { mn && clearTimeout(mn), vn && clearTimeout(vn) },
                Rn = function() {
                    var e = _n(),
                        t = {};
                    if (e.length < 5) return t;
                    var n, o = e.split("&");
                    for (n = 0; n < o.length; n++)
                        if (o[n]) {
                            var r = o[n].split("=");
                            r.length < 2 || (t[r[0]] = r[1]) }
                    if (a.galleryPIDs) {
                        var i = t.pid;
                        for (t.pid = 0, n = 0; n < Wt.length; n++)
                            if (Wt[n].pid === i) { t.pid = n;
                                break } } else t.pid = parseInt(t.pid, 10) - 1;
                    return t.pid < 0 && (t.pid = 0), t },
                kn = function() {
                    if (vn && clearTimeout(vn), Ve || K) return void(vn = setTimeout(kn, 500));
                    yn ? clearTimeout(hn) : yn = !0;
                    var e = c + 1,
                        t = Gt(c);
                    t.hasOwnProperty("pid") && (e = t.pid);
                    var n = xn + "&gid=" + a.galleryUID + "&pid=" + e;
                    bn || -1 === In.hash.indexOf(n) && (Sn = !0);
                    var o = In.href.split("#")[0] + "#" + n;
                    Tn ? "#" + n !== window.location.hash && history[bn ? "replaceState" : "pushState"]("", document.title, o) : bn ? In.replace(o) : In.hash = n, bn = !0, hn = setTimeout(function() { yn = !1 }, 60) };
            Ce("History", { publicMethods: { initHistory: function() {
                        if (r.extend(a, En, !0), a.history) { In = window.location, Sn = !1, Cn = !1, bn = !1, xn = _n(), Tn = "pushState" in history, xn.indexOf("gid=") > -1 && (xn = xn.split("&gid=")[0], xn = xn.split("?gid=")[0]), Te("afterChange", i.updateURL), Te("unbindEvents", function() { r.unbind(window, "hashchange", i.onHashChange) });
                            var e = function() { wn = !0, Cn || (Sn ? history.back() : xn ? In.hash = xn : Tn ? history.pushState("", document.title, In.pathname + In.search) : In.hash = ""), On() };
                            Te("unbindEvents", function() { s && e() }), Te("destroy", function() { wn || e() }), Te("firstUpdate", function() { c = Rn().pid });
                            var t = xn.indexOf("pid=");
                            t > -1 && (xn = xn.substring(0, t), "&" === xn.slice(-1) && (xn = xn.slice(0, -1))), setTimeout(function() { u && r.bind(window, "hashchange", i.onHashChange) }, 40) } }, onHashChange: function() {
                        return _n() === xn ? (Cn = !0, void i.close()) : void(yn || (gn = !0, i.goTo(Rn().pid), gn = !1)) }, updateURL: function() { On(), gn || (bn ? mn = setTimeout(kn, 800) : kn()) } } }), r.extend(i, tt)
        }
    })
}]);

// player.js 
function initMarquee() { $(".marquee").marquee({ duration: 15e3, gap: 50, delayBeforeStart: 0, direction: "left", duplicated: !0 }) }

function isExceedTag() {
    var t = !1;
    return $(".musicTag strong").width() + $(".musicTag span").width() + $(".musicTag .artist").width() > $(".musicTag").width() && (t = !0), t }

function shuffle(t) {
    for (var a, e, i = t.length; i;) e = Math.floor(Math.random() * i--), a = t[i], t[i] = t[e], t[e] = a;
    return t }

function showNotification(t) { isShowNotification = !0, $(".qplayer-notification").length > 0 && ($(".qplayer-notification").remove(), clearTimeout(autoClearTimer), clearTimeout(autoShowTimer)), $("body").append('<div class="qplayer-notification animation-target"><span class="qplayer-notification-icon">i</span><span class="body" style="box-shadow: rgba(0, 0, 0, 0.0980392) 0px 0px 5px;"><span class="message"></span></span><a class="close" href="#" onclick="closeNotification();return false;">×</a><div style="clear: both"></div>'), $(".qplayer-notification .message").text(t);
    var a = $(".qplayer-notification").css({ opacity: "0", width: "auto" }).width() + 20;
    $(".qplayer-notification").css({ width: "50px", opacity: "1" }), autoShowTimer = setTimeout(function() { $(".qplayer-notification").css({ width: a, transition: "all .7s ease" }), $(".qplayer-notification .close").delay(500).show(0) }, 1500), autoClearTimer = setTimeout("if ($('.qplayer-notification').length>0) {closeNotification()}", 4e3) }

function closeNotification() { isShowNotification = !1, $(".qplayer-notification").css({ width: "50px", transition: "all .7s ease" }), $(".qplayer-notification .close").delay(500).hide(0), setTimeout(function() { isShowNotification || ($(".qplayer-notification").css("opacity", "0"), $(".qplayer-notification-icon").css({ transform: "scale(0)", transition: "transform .5s ease" })) }, 1e3), setTimeout(function() { isShowNotification || $(".qplayer-notification").remove() }, 1500), clearTimeout(autoClearTimer), clearTimeout(autoShowTimer) }

function showTips(t, a, e) { $("body").append('<div class="qplayer_tips"><span class="tips_arrow"></span><span class="info" style="display:none">' + a + '</span><button class="tips_button" onclick="removeTips()">不再提示</button></div>'), $(".qplayer_tips").css({ top: $(t).offset().top - 100 - 30 - 15, left: $(t).offset().left - 28 }), $(".qplayer_tips").css({ height: 100, transition: "all .5s ease-in-out" }), $(".qplayer_tips .info").delay(500).fadeIn(), $(".tips_arrow").css({ "border-width": "15px", transition: "all .5s ease-in-out" }), $(".tips_button").css({ height: "30px", transition: "all .5s ease-in-out" }), void 0 != e && $(".tips_button").click(e) }

function removeTips() { $(".qplayer_tips .info").fadeOut(), $(".qplayer_tips").css({ height: "0", transition: "all .5s ease-in-out" }), $(".tips_arrow").css({ "border-width": "0", transition: "all .5s ease-in-out" }), $(".tips_button").css({ opacity: "0", transition: "all .2s ease-in-out" }), setTimeout(function() { $(".qplayer_tips").remove() }, 500) }! function(t) {
    for (var a, e = !0, i = [], s = void 0 == localStorage.qplayer, o = void 0 != localStorage.qplayer && "true" === localStorage.qplayer, n = 0; n < playlist.length; n++) {
        var r = playlist[n];
        t("#playlist").append('<li class="lib" style="overflow:hidden;"><strong style="margin-left: 5px;">' + r.title + '</strong><span style="float: right;" class="artist">' + r.artist + "</span></li>"), "" == r.mp3 && t("#playlist li").eq(n).css("color", "#ddd") }
    var l, c, p = 0,
        u = localStorage.qplayer_shuffle_array;
    o && void 0 != u && playlist.length === (i = JSON.parse(u)).length ? (p = i[0], a = 0, t("#QPlayer .cover").attr("title", "点击关闭随机播放")) : (o = !1, t("#QPlayer .cover").attr("title", "点击开启随机播放"));
    for (var f = 0, n = 0; n < playlist.length; n++) f += t("#playlist li").eq(n).height() + 6;
    if (f > 360 && (t("#playlist").css("overflow", "auto"), o)) {
        for (var y = 0, h = 0; h < p; h++) y += t("#playlist li").eq(h).height() + 6;
        t("#playlist").scrollTop(y) }
    var d = function() { l.volume = .28, l.play(), isRotate && (t("#player .cover img").css("animation", "9.8s linear 0s normal none infinite rotate"), t("#player .cover img").css("animation-play-state", "running")), t(".playback").addClass("playing"), c = setInterval(v, 500), isExceedTag() && (e ? (initMarquee(), e = !1) : t(".marquee").marquee("resume")) },
        m = function() { l.pause(), t("#player .cover img").css("animation-play-state", "paused"), t(".playback").removeClass("playing"), clearInterval(c), isExceedTag() && t(".marquee").marquee("pause") },
        g = function(a) {
            var e = parseInt(a % 60) < 10 ? "0" + parseInt(a % 60) : parseInt(a % 60);
            l.duration;
            t(".timer").html(parseInt(a / 60) + ":" + e) },
        v = function() { g(l.currentTime) },
        T = function(a) { a < 0 ? track = p = playlist.length - 1 : a >= playlist.length ? track = p = 0 : track = a, e = !0, t("audio").remove(), k(track), d() },
        q = function(t) { 1 === t ? (++a === i.length && (a = 0), p = i[a]) : 0 === t && (--a < 0 && (a = i.length - 1), p = i[a]), T(p) },
        w = function() { m(), l.currentTime = 0, o ? q(1) : p < playlist.length && T(++p) },
        $ = function() { this.seekable && this.seekable.length && this.seekable.end(0) },
        b = function() { 1 == autoplay && d() },
        k = function(e) {
            for (var s = playlist[e];
                "" == s.mp3;) showNotification("歌曲地址为空，已自动跳过"), o ? (++a === i.length && (a = 0), e = p = i[a]) : p = ++e, s = playlist[e];
            var n = t("<audio>").html('<source src="' + s.mp3 + '"><source src="' + s.ogg + '">').appendTo("#player");
            t(".cover").html('<img src="' + s.cover + '" alt="' + s.album + '">'), t(".musicTag").html("<strong>" + s.title + '</strong><span> - </span><span class="artist">' + s.artist + "</span>"), t("#playlist li").removeClass("playing").eq(e).addClass("playing"), l = n[0], l.addEventListener("progress", $, !1), l.addEventListener("durationchange", $, !1), l.addEventListener("canplay", b, !1), l.addEventListener("ended", w, !1) };
    k(p), t(".playback").on("click", function() { t(this).hasClass("playing") ? m() : d() }), t(".rewind").on("click", function() { o ? q(0) : T(--p) }), t(".fastforward").on("click", function() { o ? q(1) : T(++p) }), t("#playlist li").each(function(e) { t(this).on("click", function() {
            if (o) {
                for (var t = 0; t < i.length; t++)
                    if (i[t] === e) { a = t;
                        break } } else p = e;
            T(e) }) }), t("#QPlayer .liebiao,#QPlayer .liebiao").on("click", function() {
        var a = t("#playlist");!1 === a.hasClass("go") ? (a.css({ "max-height": "302px", transition: "max-height .5s ease" }), a.css("border", "1px solid #dedede"), a.addClass("go")) : (a.css({ "max-height": "0px", transition: "max-height .5s ease" }), a.css("border", "0"), a.removeClass("go")) }), t("#QPlayer .ssBtn").on("click", function() {
        var a = t("#QPlayer");!1 === t(".ssBtn .adf").hasClass("on") ? (s && (setTimeout("showTips('#player .cover','点击封面开启(关闭)随机播放', " + function() { setTimeout("showTips('#player .ctrl .musicTag','点击拖动标题栏快进(快退)')", 1e3) } + ");", 500), s = !s, localStorage.qplayer = "false"), a.css("transform", "translateX(332px)"), t(".ssBtn .adf").addClass("on")) : (a.css("transform", "translateX(0px)"), t(".ssBtn .adf").removeClass("on")) }), t("#player .cover").on("click", function() {
        if (o = !o) { t("#player .cover").attr("title", "点击关闭随机播放"), showNotification("已开启随机播放");
            for (var e = [], s = 0; s < playlist.length; s++) e[s] = s;
            i = shuffle(e);
            for (var n = 0; n < i.length; n++)
                if (i[n] === p) { a = n;
                    break }
            localStorage.qplayer_shuffle_array = JSON.stringify(i) } else t("#player .cover").attr("title", "点击开启随机播放"), showNotification("已关闭随机播放"), localStorage.removeItem("qplayer_shuffle_array");
        localStorage.qplayer = o });
    var x, _;
    t("#player .ctrl .musicTag").mousedown(function(t) { x = t.screenX }).mousemove(function(t) {
        if (1 === t.which) { _ = t.screenX;
            var a = Math.round((_ - x) / 678 * 100);
            l.currentTime += a, g(l.currentTime) } }), t("#player .ctrl .musicTag").bind("touchstart", function(t) { x = t.originalEvent.targetTouches[0].screenX }).bind("touchmove", function(t) { _ = t.originalEvent.targetTouches[0].screenX;
        var a = Math.round((_ - x) / 678 * 100);
        l.currentTime += a, g(l.currentTime) }) }(jQuery);
