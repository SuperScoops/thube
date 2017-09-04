! function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var a = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e
    }, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 46)
}([function(e, t, n) {
    var o, a;
    (function() {
        function n(e) {
            function t(t, n, o, a, i, s) {
                for (; i >= 0 && i < s; i += e) {
                    var r = a ? a[i] : i;
                    o = n(o, t[r], r, t)
                }
                return o
            }
            return function(n, o, a, i) {
                o = k(o, i, 4);
                var s = !x(n) && N.keys(n),
                    r = (s || n).length,
                    l = e > 0 ? 0 : r - 1;
                return arguments.length < 3 && (a = n[s ? s[l] : l], l += e), t(n, o, a, s, l, r)
            }
        }

        function i(e) {
            return function(t, n, o) {
                n = E(n, o);
                for (var a = A(t), i = e > 0 ? 0 : a - 1; i >= 0 && i < a; i += e)
                    if (n(t[i], i, t)) return i;
                return -1
            }
        }

        function s(e, t, n) {
            return function(o, a, i) {
                var s = 0,
                    r = A(o);
                if ("number" == typeof i) e > 0 ? s = i >= 0 ? i : Math.max(i + r, s) : r = i >= 0 ? Math.min(i + 1, r) : i + r + 1;
                else if (n && i && r) return i = n(o, a), o[i] === a ? i : -1;
                if (a !== a) return i = t(m.call(o, s, r), N.isNaN), i >= 0 ? i + s : -1;
                for (i = e > 0 ? s : r - 1; i >= 0 && i < r; i += e)
                    if (o[i] === a) return i;
                return -1
            }
        }

        function r(e, t) {
            var n = O.length,
                o = e.constructor,
                a = N.isFunction(o) && o.prototype || u,
                i = "constructor";
            for (N.has(e, i) && !N.contains(t, i) && t.push(i); n--;)(i = O[n]) in e && e[i] !== a[i] && !N.contains(t, i) && t.push(i)
        }
        var l = this,
            d = l._,
            c = Array.prototype,
            u = Object.prototype,
            p = Function.prototype,
            h = c.push,
            m = c.slice,
            g = u.toString,
            f = u.hasOwnProperty,
            v = Array.isArray,
            b = Object.keys,
            w = p.bind,
            y = Object.create,
            C = function() {},
            N = function(e) {
                return e instanceof N ? e : this instanceof N ? void(this._wrapped = e) : new N(e)
            };
        void 0 !== e && e.exports && (t = e.exports = N), t._ = N, N.VERSION = "1.8.3";
        var k = function(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, o) {
                            return e.call(t, n, o)
                        };
                    case 3:
                        return function(n, o, a) {
                            return e.call(t, n, o, a)
                        };
                    case 4:
                        return function(n, o, a, i) {
                            return e.call(t, n, o, a, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            },
            E = function(e, t, n) {
                return null == e ? N.identity : N.isFunction(e) ? k(e, t, n) : N.isObject(e) ? N.matcher(e) : N.property(e)
            };
        N.iteratee = function(e, t) {
            return E(e, t, 1 / 0)
        };
        var $ = function(e, t) {
                return function(n) {
                    var o = arguments.length;
                    if (o < 2 || null == n) return n;
                    for (var a = 1; a < o; a++)
                        for (var i = arguments[a], s = e(i), r = s.length, l = 0; l < r; l++) {
                            var d = s[l];
                            t && void 0 !== n[d] || (n[d] = i[d])
                        }
                    return n
                }
            },
            T = function(e) {
                if (!N.isObject(e)) return {};
                if (y) return y(e);
                C.prototype = e;
                var t = new C;
                return C.prototype = null, t
            },
            L = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            },
            S = Math.pow(2, 53) - 1,
            A = L("length"),
            x = function(e) {
                var t = A(e);
                return "number" == typeof t && t >= 0 && t <= S
            };
        N.each = N.forEach = function(e, t, n) {
            t = k(t, n);
            var o, a;
            if (x(e))
                for (o = 0, a = e.length; o < a; o++) t(e[o], o, e);
            else {
                var i = N.keys(e);
                for (o = 0, a = i.length; o < a; o++) t(e[i[o]], i[o], e)
            }
            return e
        }, N.map = N.collect = function(e, t, n) {
            t = E(t, n);
            for (var o = !x(e) && N.keys(e), a = (o || e).length, i = Array(a), s = 0; s < a; s++) {
                var r = o ? o[s] : s;
                i[s] = t(e[r], r, e)
            }
            return i
        }, N.reduce = N.foldl = N.inject = n(1), N.reduceRight = N.foldr = n(-1), N.find = N.detect = function(e, t, n) {
            var o;
            if (void 0 !== (o = x(e) ? N.findIndex(e, t, n) : N.findKey(e, t, n)) && o !== -1) return e[o]
        }, N.filter = N.select = function(e, t, n) {
            var o = [];
            return t = E(t, n), N.each(e, function(e, n, a) {
                t(e, n, a) && o.push(e)
            }), o
        }, N.reject = function(e, t, n) {
            return N.filter(e, N.negate(E(t)), n)
        }, N.every = N.all = function(e, t, n) {
            t = E(t, n);
            for (var o = !x(e) && N.keys(e), a = (o || e).length, i = 0; i < a; i++) {
                var s = o ? o[i] : i;
                if (!t(e[s], s, e)) return !1
            }
            return !0
        }, N.some = N.any = function(e, t, n) {
            t = E(t, n);
            for (var o = !x(e) && N.keys(e), a = (o || e).length, i = 0; i < a; i++) {
                var s = o ? o[i] : i;
                if (t(e[s], s, e)) return !0
            }
            return !1
        }, N.contains = N.includes = N.include = function(e, t, n, o) {
            return x(e) || (e = N.values(e)), ("number" != typeof n || o) && (n = 0), N.indexOf(e, t, n) >= 0
        }, N.invoke = function(e, t) {
            var n = m.call(arguments, 2),
                o = N.isFunction(t);
            return N.map(e, function(e) {
                var a = o ? t : e[t];
                return null == a ? a : a.apply(e, n)
            })
        }, N.pluck = function(e, t) {
            return N.map(e, N.property(t))
        }, N.where = function(e, t) {
            return N.filter(e, N.matcher(t))
        }, N.findWhere = function(e, t) {
            return N.find(e, N.matcher(t))
        }, N.max = function(e, t, n) {
            var o, a, i = -(1 / 0),
                s = -(1 / 0);
            if (null == t && null != e) {
                e = x(e) ? e : N.values(e);
                for (var r = 0, l = e.length; r < l; r++)(o = e[r]) > i && (i = o)
            } else t = E(t, n), N.each(e, function(e, n, o) {
                ((a = t(e, n, o)) > s || a === -(1 / 0) && i === -(1 / 0)) && (i = e, s = a)
            });
            return i
        }, N.min = function(e, t, n) {
            var o, a, i = 1 / 0,
                s = 1 / 0;
            if (null == t && null != e) {
                e = x(e) ? e : N.values(e);
                for (var r = 0, l = e.length; r < l; r++)(o = e[r]) < i && (i = o)
            } else t = E(t, n), N.each(e, function(e, n, o) {
                ((a = t(e, n, o)) < s || a === 1 / 0 && i === 1 / 0) && (i = e, s = a)
            });
            return i
        }, N.shuffle = function(e) {
            for (var t, n = x(e) ? e : N.values(e), o = n.length, a = Array(o), i = 0; i < o; i++) t = N.random(0, i), t !== i && (a[i] = a[t]), a[t] = n[i];
            return a
        }, N.sample = function(e, t, n) {
            return null == t || n ? (x(e) || (e = N.values(e)), e[N.random(e.length - 1)]) : N.shuffle(e).slice(0, Math.max(0, t))
        }, N.sortBy = function(e, t, n) {
            return t = E(t, n), N.pluck(N.map(e, function(e, n, o) {
                return {
                    value: e,
                    index: n,
                    criteria: t(e, n, o)
                }
            }).sort(function(e, t) {
                var n = e.criteria,
                    o = t.criteria;
                if (n !== o) {
                    if (n > o || void 0 === n) return 1;
                    if (n < o || void 0 === o) return -1
                }
                return e.index - t.index
            }), "value")
        };
        var H = function(e) {
            return function(t, n, o) {
                var a = {};
                return n = E(n, o), N.each(t, function(o, i) {
                    var s = n(o, i, t);
                    e(a, o, s)
                }), a
            }
        };
        N.groupBy = H(function(e, t, n) {
            N.has(e, n) ? e[n].push(t) : e[n] = [t]
        }), N.indexBy = H(function(e, t, n) {
            e[n] = t
        }), N.countBy = H(function(e, t, n) {
            N.has(e, n) ? e[n]++ : e[n] = 1
        }), N.toArray = function(e) {
            return e ? N.isArray(e) ? m.call(e) : x(e) ? N.map(e, N.identity) : N.values(e) : []
        }, N.size = function(e) {
            return null == e ? 0 : x(e) ? e.length : N.keys(e).length
        }, N.partition = function(e, t, n) {
            t = E(t, n);
            var o = [],
                a = [];
            return N.each(e, function(e, n, i) {
                (t(e, n, i) ? o : a).push(e)
            }), [o, a]
        }, N.first = N.head = N.take = function(e, t, n) {
            if (null != e) return null == t || n ? e[0] : N.initial(e, e.length - t)
        }, N.initial = function(e, t, n) {
            return m.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
        }, N.last = function(e, t, n) {
            if (null != e) return null == t || n ? e[e.length - 1] : N.rest(e, Math.max(0, e.length - t))
        }, N.rest = N.tail = N.drop = function(e, t, n) {
            return m.call(e, null == t || n ? 1 : t)
        }, N.compact = function(e) {
            return N.filter(e, N.identity)
        };
        var I = function(e, t, n, o) {
            for (var a = [], i = 0, s = o || 0, r = A(e); s < r; s++) {
                var l = e[s];
                if (x(l) && (N.isArray(l) || N.isArguments(l))) {
                    t || (l = I(l, t, n));
                    var d = 0,
                        c = l.length;
                    for (a.length += c; d < c;) a[i++] = l[d++]
                } else n || (a[i++] = l)
            }
            return a
        };
        N.flatten = function(e, t) {
            return I(e, t, !1)
        }, N.without = function(e) {
            return N.difference(e, m.call(arguments, 1))
        }, N.uniq = N.unique = function(e, t, n, o) {
            N.isBoolean(t) || (o = n, n = t, t = !1), null != n && (n = E(n, o));
            for (var a = [], i = [], s = 0, r = A(e); s < r; s++) {
                var l = e[s],
                    d = n ? n(l, s, e) : l;
                t ? (s && i === d || a.push(l), i = d) : n ? N.contains(i, d) || (i.push(d), a.push(l)) : N.contains(a, l) || a.push(l)
            }
            return a
        }, N.union = function() {
            return N.uniq(I(arguments, !0, !0))
        }, N.intersection = function(e) {
            for (var t = [], n = arguments.length, o = 0, a = A(e); o < a; o++) {
                var i = e[o];
                if (!N.contains(t, i)) {
                    for (var s = 1; s < n && N.contains(arguments[s], i); s++);
                    s === n && t.push(i)
                }
            }
            return t
        }, N.difference = function(e) {
            var t = I(arguments, !0, !0, 1);
            return N.filter(e, function(e) {
                return !N.contains(t, e)
            })
        }, N.zip = function() {
            return N.unzip(arguments)
        }, N.unzip = function(e) {
            for (var t = e && N.max(e, A).length || 0, n = Array(t), o = 0; o < t; o++) n[o] = N.pluck(e, o);
            return n
        }, N.object = function(e, t) {
            for (var n = {}, o = 0, a = A(e); o < a; o++) t ? n[e[o]] = t[o] : n[e[o][0]] = e[o][1];
            return n
        }, N.findIndex = i(1), N.findLastIndex = i(-1), N.sortedIndex = function(e, t, n, o) {
            n = E(n, o, 1);
            for (var a = n(t), i = 0, s = A(e); i < s;) {
                var r = Math.floor((i + s) / 2);
                n(e[r]) < a ? i = r + 1 : s = r
            }
            return i
        }, N.indexOf = s(1, N.findIndex, N.sortedIndex), N.lastIndexOf = s(-1, N.findLastIndex), N.range = function(e, t, n) {
            null == t && (t = e || 0, e = 0), n = n || 1;
            for (var o = Math.max(Math.ceil((t - e) / n), 0), a = Array(o), i = 0; i < o; i++, e += n) a[i] = e;
            return a
        };
        var M = function(e, t, n, o, a) {
            if (!(o instanceof t)) return e.apply(n, a);
            var i = T(e.prototype),
                s = e.apply(i, a);
            return N.isObject(s) ? s : i
        };
        N.bind = function(e, t) {
            if (w && e.bind === w) return w.apply(e, m.call(arguments, 1));
            if (!N.isFunction(e)) throw new TypeError("Bind must be called on a function");
            var n = m.call(arguments, 2),
                o = function() {
                    return M(e, o, t, this, n.concat(m.call(arguments)))
                };
            return o
        }, N.partial = function(e) {
            var t = m.call(arguments, 1),
                n = function() {
                    for (var o = 0, a = t.length, i = Array(a), s = 0; s < a; s++) i[s] = t[s] === N ? arguments[o++] : t[s];
                    for (; o < arguments.length;) i.push(arguments[o++]);
                    return M(e, n, this, this, i)
                };
            return n
        }, N.bindAll = function(e) {
            var t, n, o = arguments.length;
            if (o <= 1) throw new Error("bindAll must be passed function names");
            for (t = 1; t < o; t++) n = arguments[t], e[n] = N.bind(e[n], e);
            return e
        }, N.memoize = function(e, t) {
            var n = function(o) {
                var a = n.cache,
                    i = "" + (t ? t.apply(this, arguments) : o);
                return N.has(a, i) || (a[i] = e.apply(this, arguments)), a[i]
            };
            return n.cache = {}, n
        }, N.delay = function(e, t) {
            var n = m.call(arguments, 2);
            return setTimeout(function() {
                return e.apply(null, n)
            }, t)
        }, N.defer = N.partial(N.delay, N, 1), N.throttle = function(e, t, n) {
            var o, a, i, s = null,
                r = 0;
            n || (n = {});
            var l = function() {
                r = n.leading === !1 ? 0 : N.now(), s = null, i = e.apply(o, a), s || (o = a = null)
            };
            return function() {
                var d = N.now();
                r || n.leading !== !1 || (r = d);
                var c = t - (d - r);
                return o = this, a = arguments, c <= 0 || c > t ? (s && (clearTimeout(s), s = null), r = d, i = e.apply(o, a), s || (o = a = null)) : s || n.trailing === !1 || (s = setTimeout(l, c)), i
            }
        }, N.debounce = function(e, t, n) {
            var o, a, i, s, r, l = function() {
                var d = N.now() - s;
                d < t && d >= 0 ? o = setTimeout(l, t - d) : (o = null, n || (r = e.apply(i, a), o || (i = a = null)))
            };
            return function() {
                i = this, a = arguments, s = N.now();
                var d = n && !o;
                return o || (o = setTimeout(l, t)), d && (r = e.apply(i, a), i = a = null), r
            }
        }, N.wrap = function(e, t) {
            return N.partial(t, e)
        }, N.negate = function(e) {
            return function() {
                return !e.apply(this, arguments)
            }
        }, N.compose = function() {
            var e = arguments,
                t = e.length - 1;
            return function() {
                for (var n = t, o = e[t].apply(this, arguments); n--;) o = e[n].call(this, o);
                return o
            }
        }, N.after = function(e, t) {
            return function() {
                if (--e < 1) return t.apply(this, arguments)
            }
        }, N.before = function(e, t) {
            var n;
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n
            }
        }, N.once = N.partial(N.before, 2);
        var _ = !{
                toString: null
            }.propertyIsEnumerable("toString"),
            O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        N.keys = function(e) {
            if (!N.isObject(e)) return [];
            if (b) return b(e);
            var t = [];
            for (var n in e) N.has(e, n) && t.push(n);
            return _ && r(e, t), t
        }, N.allKeys = function(e) {
            if (!N.isObject(e)) return [];
            var t = [];
            for (var n in e) t.push(n);
            return _ && r(e, t), t
        }, N.values = function(e) {
            for (var t = N.keys(e), n = t.length, o = Array(n), a = 0; a < n; a++) o[a] = e[t[a]];
            return o
        }, N.mapObject = function(e, t, n) {
            t = E(t, n);
            for (var o, a = N.keys(e), i = a.length, s = {}, r = 0; r < i; r++) o = a[r], s[o] = t(e[o], o, e);
            return s
        }, N.pairs = function(e) {
            for (var t = N.keys(e), n = t.length, o = Array(n), a = 0; a < n; a++) o[a] = [t[a], e[t[a]]];
            return o
        }, N.invert = function(e) {
            for (var t = {}, n = N.keys(e), o = 0, a = n.length; o < a; o++) t[e[n[o]]] = n[o];
            return t
        }, N.functions = N.methods = function(e) {
            var t = [];
            for (var n in e) N.isFunction(e[n]) && t.push(n);
            return t.sort()
        }, N.extend = $(N.allKeys), N.extendOwn = N.assign = $(N.keys), N.findKey = function(e, t, n) {
            t = E(t, n);
            for (var o, a = N.keys(e), i = 0, s = a.length; i < s; i++)
                if (o = a[i], t(e[o], o, e)) return o
        }, N.pick = function(e, t, n) {
            var o, a, i = {},
                s = e;
            if (null == s) return i;
            N.isFunction(t) ? (a = N.allKeys(s), o = k(t, n)) : (a = I(arguments, !1, !1, 1), o = function(e, t, n) {
                return t in n
            }, s = Object(s));
            for (var r = 0, l = a.length; r < l; r++) {
                var d = a[r],
                    c = s[d];
                o(c, d, s) && (i[d] = c)
            }
            return i
        }, N.omit = function(e, t, n) {
            if (N.isFunction(t)) t = N.negate(t);
            else {
                var o = N.map(I(arguments, !1, !1, 1), String);
                t = function(e, t) {
                    return !N.contains(o, t)
                }
            }
            return N.pick(e, t, n)
        }, N.defaults = $(N.allKeys, !0), N.create = function(e, t) {
            var n = T(e);
            return t && N.extendOwn(n, t), n
        }, N.clone = function(e) {
            return N.isObject(e) ? N.isArray(e) ? e.slice() : N.extend({}, e) : e
        }, N.tap = function(e, t) {
            return t(e), e
        }, N.isMatch = function(e, t) {
            var n = N.keys(t),
                o = n.length;
            if (null == e) return !o;
            for (var a = Object(e), i = 0; i < o; i++) {
                var s = n[i];
                if (t[s] !== a[s] || !(s in a)) return !1
            }
            return !0
        };
        var F = function(e, t, n, o) {
            if (e === t) return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t) return e === t;
            e instanceof N && (e = e._wrapped), t instanceof N && (t = t._wrapped);
            var a = g.call(e);
            if (a !== g.call(t)) return !1;
            switch (a) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t
            }
            var i = "[object Array]" === a;
            if (!i) {
                if ("object" != typeof e || "object" != typeof t) return !1;
                var s = e.constructor,
                    r = t.constructor;
                if (s !== r && !(N.isFunction(s) && s instanceof s && N.isFunction(r) && r instanceof r) && "constructor" in e && "constructor" in t) return !1
            }
            n = n || [], o = o || [];
            for (var l = n.length; l--;)
                if (n[l] === e) return o[l] === t;
            if (n.push(e), o.push(t), i) {
                if ((l = e.length) !== t.length) return !1;
                for (; l--;)
                    if (!F(e[l], t[l], n, o)) return !1
            } else {
                var d, c = N.keys(e);
                if (l = c.length, N.keys(t).length !== l) return !1;
                for (; l--;)
                    if (d = c[l], !N.has(t, d) || !F(e[d], t[d], n, o)) return !1
            }
            return n.pop(), o.pop(), !0
        };
        N.isEqual = function(e, t) {
            return F(e, t)
        }, N.isEmpty = function(e) {
            return null == e || (x(e) && (N.isArray(e) || N.isString(e) || N.isArguments(e)) ? 0 === e.length : 0 === N.keys(e).length)
        }, N.isElement = function(e) {
            return !(!e || 1 !== e.nodeType)
        }, N.isArray = v || function(e) {
            return "[object Array]" === g.call(e)
        }, N.isObject = function(e) {
            var t = typeof e;
            return "function" === t || "object" === t && !!e
        }, N.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
            N["is" + e] = function(t) {
                return g.call(t) === "[object " + e + "]"
            }
        }), N.isArguments(arguments) || (N.isArguments = function(e) {
            return N.has(e, "callee")
        }), "function" != typeof /./ && "object" != typeof Int8Array && (N.isFunction = function(e) {
            return "function" == typeof e || !1
        }), N.isFinite = function(e) {
            return isFinite(e) && !isNaN(parseFloat(e))
        }, N.isNaN = function(e) {
            return N.isNumber(e) && e !== +e
        }, N.isBoolean = function(e) {
            return e === !0 || e === !1 || "[object Boolean]" === g.call(e)
        }, N.isNull = function(e) {
            return null === e
        }, N.isUndefined = function(e) {
            return void 0 === e
        }, N.has = function(e, t) {
            return null != e && f.call(e, t)
        }, N.noConflict = function() {
            return l._ = d, this
        }, N.identity = function(e) {
            return e
        }, N.constant = function(e) {
            return function() {
                return e
            }
        }, N.noop = function() {}, N.property = L, N.propertyOf = function(e) {
            return null == e ? function() {} : function(t) {
                return e[t]
            }
        }, N.matcher = N.matches = function(e) {
            return e = N.extendOwn({}, e),
                function(t) {
                    return N.isMatch(t, e)
                }
        }, N.times = function(e, t, n) {
            var o = Array(Math.max(0, e));
            t = k(t, n, 1);
            for (var a = 0; a < e; a++) o[a] = t(a);
            return o
        }, N.random = function(e, t) {
            return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
        }, N.now = Date.now || function() {
            return (new Date).getTime()
        };
        var q = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            P = N.invert(q),
            R = function(e) {
                var t = function(t) {
                        return e[t]
                    },
                    n = "(?:" + N.keys(e).join("|") + ")",
                    o = RegExp(n),
                    a = RegExp(n, "g");
                return function(e) {
                    return e = null == e ? "" : "" + e, o.test(e) ? e.replace(a, t) : e
                }
            };
        N.escape = R(q), N.unescape = R(P), N.result = function(e, t, n) {
            var o = null == e ? void 0 : e[t];
            return void 0 === o && (o = n), N.isFunction(o) ? o.call(e) : o
        };
        var D = 0;
        N.uniqueId = function(e) {
            var t = ++D + "";
            return e ? e + t : t
        }, N.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            B = function(e) {
                return "\\" + j[e]
            };
        N.template = function(e, t, n) {
            !t && n && (t = n), t = N.defaults({}, t, N.templateSettings);
            var o = RegExp([(t.escape || /(.)^/).source, (t.interpolate || /(.)^/).source, (t.evaluate || /(.)^/).source].join("|") + "|$", "g"),
                a = 0,
                i = "__p+='";
            e.replace(o, function(t, n, o, s, r) {
                return i += e.slice(a, r).replace(/\\|'|\r|\n|\u2028|\u2029/g, B), a = r + t.length, n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : o ? i += "'+\n((__t=(" + o + "))==null?'':__t)+\n'" : s && (i += "';\n" + s + "\n__p+='"), t
            }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
            try {
                var s = new Function(t.variable || "obj", "_", i)
            } catch (e) {
                throw e.source = i, e
            }
            var r = function(e) {
                    return s.call(this, e, N)
                },
                l = t.variable || "obj";
            return r.source = "function(" + l + "){\n" + i + "}", r
        }, N.chain = function(e) {
            var t = N(e);
            return t._chain = !0, t
        };
        var V = function(e, t) {
            return e._chain ? N(t).chain() : t
        };
        N.mixin = function(e) {
            N.each(N.functions(e), function(t) {
                var n = N[t] = e[t];
                N.prototype[t] = function() {
                    var e = [this._wrapped];
                    return h.apply(e, arguments), V(this, n.apply(N, e))
                }
            })
        }, N.mixin(N), N.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
            var t = c[e];
            N.prototype[e] = function() {
                var n = this._wrapped;
                return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], V(this, n)
            }
        }), N.each(["concat", "join", "slice"], function(e) {
            var t = c[e];
            N.prototype[e] = function() {
                return V(this, t.apply(this._wrapped, arguments))
            }
        }), N.prototype.value = function() {
            return this._wrapped
        }, N.prototype.valueOf = N.prototype.toJSON = N.prototype.value, N.prototype.toString = function() {
            return "" + this._wrapped
        }, o = [], void 0 !== (a = function() {
            return N
        }.apply(t, o)) && (e.exports = a)
    }).call(this)
}, function(e, t, n) {
    "use strict";
    n(42), n(43)
}, function(e, t) {
    window.v4cScript.trigger("legacy-loaded"), console.log("LEGACY END")
}, function(e, t) {
    function n(e) {
        if ("string" != typeof e || "" === e.trim() || e.length < 1) return "";
        for (var t = "", n = 0, o = {
                0: "ï¼",
                1: "ï¼‘",
                2: "ï¼’",
                3: "ï¼“",
                4: "ï¼”",
                5: "ï¼•",
                6: "ï¼–",
                7: "ï¼—",
                8: "ï¼˜",
                9: "ï¼™",
                a: "ï½",
                b: "ï½‚",
                c: "ï½ƒ",
                d: "ï½„",
                e: "ï½…",
                f: "ï½†",
                g: "ï½‡",
                h: "ï½ˆ",
                i: "ï½‰",
                j: "ï½Š",
                k: "ï½‹",
                l: "ï½Œ",
                m: "ï½",
                n: "ï½Ž",
                o: "ï½",
                p: "ï½",
                q: "ï½‘",
                r: "ï½’",
                s: "ï½“",
                t: "ï½”",
                u: "ï½•",
                v: "ï½–",
                w: "ï½—",
                x: "ï½˜",
                y: "ï½™",
                z: "ï½š",
                A: "ï¼¡",
                B: "ï¼¢",
                C: "ï¼£",
                D: "ï¼¤",
                E: "ï¼¥",
                F: "ï¼¦",
                G: "ï¼§",
                H: "ï¼¨",
                I: "ï¼©",
                J: "ï¼ª",
                K: "ï¼«",
                L: "ï¼¬",
                M: "ï¼­",
                N: "ï¼®",
                O: "ï¼¯",
                P: "ï¼°",
                Q: "ï¼±",
                R: "ï¼²",
                S: "ï¼³",
                T: "ï¼´",
                U: "ï¼µ",
                V: "ï¼¶",
                W: "ï¼·",
                X: "ï¼¸",
                Y: "ï¼¹",
                Z: "ï¼º",
                " ": "ã€€",
                "!": "ï¼",
                '"': "ï¼‚",
                "#": "ï¼ƒ",
                $: "ï¼„",
                "%": "ï¼…",
                "&": "ï¼†",
                "(": "ï¼ˆ",
                ")": "ï¼‰",
                "*": "ï¼Š",
                "+": "ï¼‹",
                ",": "ï¼Œ",
                "-": "ï¼",
                ".": "ï¼Ž",
                "/": "ï¼",
                ":": "ï¼š",
                ";": "ï¼›",
                "<": "ï¼œ",
                "=": "ï¼",
                ">": "ï¼ž",
                "?": "ï¼Ÿ",
                "@": "ï¼ ",
                "'": "ï¼‡",
                "[": "ï¼»",
                "\\": "ï¼¼",
                "]": "ï¼½",
                "^": "ï¼¾",
                _: "ï¼¿",
                "`": "ï½€",
                "{": "ï½›",
                "|": "ï½œ",
                "}": "ï½",
                "~": "ï½ž",
                "Â¥": "ï¿¥",
                "Â¢": "ï¿ ",
                "Â£": "ï¿¡",
                "Â¬": "ï¿¢",
                "Â¯": "ï¿£",
                "Â¦": "ï¿¤",
                "â‚©": "ï¿¦",
                "â¦…": "ï½Ÿ",
                "â¦†": "ï½ "
            }; n < e.length; n++) t += o.hasOwnProperty(e[n]) ? o[e[n]] : e[n];
        return t
    }

    function o() {
        if ($("head .plcollapsecss").remove(), $("#queue").data().shrink) {
            var e = [".qbtn-alarm"];
            $("head").append('<style class="plcollapsecss">' + e.join(", ") + " {display: none!important;}</style>")
        }
    }

    function a(e) {
        var t = calcUserBreakdown(),
            n = t.AFK,
            o = t.Anonymous;
        $("#afkCount .activeusercount").text(e - n - o + " active"), $("#afkCount .afkusercount").text(n + " afk"), e >= 125 ? ($("#usercount").addClass("highcount"), e >= 200 ? ($("#usercount").addClass("highb"), e >= 300 ? ($("#usercount").addClass("highc"), e >= 400 ? ($("#usercount").addClass("highd"), e >= 500 ? $("#usercount").addClass("highe") : $("#usercount").removeClass("highe")) : $("#usercount").removeClass("highd")) : $("#usercount").removeClass("highc")) : $("#usercount").removeClass("highb")) : $("#usercount").removeClass("highcount")
    }

    function i() {
        if (MPS.enabled) {
            MPS.rate++, $("#msgPerSec").text(MPS.rate);
            var e = function() {
                MPS.rate >= 75 && !$("#msgPerSec").hasClass("superXtremeMemes") ? $("#msgPerSec").addClass("superXtremeMemes") : MPS.rate < 75 && $("#msgPerSec").hasClass("superXtremeMemes") && $("#msgPerSec").removeClass("superXtremeMemes"), MPS.rate >= 50 && !$("#msgPerSec").hasClass("midXtremeMemes") ? $("#msgPerSec").addClass("midXtremeMemes") : MPS.rate < 50 && $("#msgPerSec").hasClass("midXtremeMemes") && $("#msgPerSec").removeClass("midXtremeMemes"), MPS.rate >= 25 && !$("#msgPerSec").hasClass("xtremeMemes") ? $("#msgPerSec").addClass("xtremeMemes") : MPS.rate < 25 && $("#msgPerSec").hasClass("xtremeMemes") && $("#msgPerSec").removeClass("xtremeMemes")
            };
            e(), setTimeout(function() {
                MPS.rate--, MPS.rate < 0 && (MPS.rate = 0), $("#msgPerSec").text(MPS.rate), e()
            }, 1e3)
        }
    }
    var s = this;
    console.log("LEGACY START"), CHANNEL.bot = "v4cbot", window.EMOTESPERLINE = 5, window.eventHandlers = {
            addUser: function(e) {
                e.rank <= 0 && $("#wrap").append("<style>.chat-msg-" + e.name + " .username {color: #808080!important;}</style>")
            },
            changeMedia: function(e) {
                0 == USEROPTS.hidevid && ("IniyZZqlcwA" == $(".pluid-" + PL_CURRENT).data("media").id ? setTimeout(function() {
                    $("#wrap").css("background", "url(https://i.imgur.com/mIjMpbR.gif)")
                }, 24e3) : $("#wrap").css("background", ""), $("#currenttitle").html($("#currenttitle").html().split("Currently Playing: ").pop()), $("#currenttitle").html(execEmotes($("#currenttitle").html().split("Currently Playing: ").pop())), $("#currentblame").html("via " + $(".pluid-" + PL_CURRENT).data("blame"))), document.title = PAGETITLE = String().concat(decodeURIComponent("%E2%96%B6"), " - ", $(".pluid-" + PL_CURRENT).data("media").title, " via ", $(".pluid-" + PL_CURRENT).data("blame"))
            },
            channelOpts: function(e) {
                1 == e.chat_antiflood && CLIENT.rank > 1 ? $("#checkitout").css("color", "white") : $("#checkitout").css("color", "red")
            },
            chatMsg: function(e) {
                MPS.enabled && i(), 1 == r && 1 == CHANNEL.opts.chat_antiflood && $('div[class*="chat-msg"]').last().find(".channel-emote").not('[title*="doomguy"]').not('[title*="daniel"]').not('[title*="rekt"]').last().trigger("click")
            },
            newPoll: function(e) {
                ".duane" === e.title.substring(6, 0) ? $(".well.active").css("background", "url(https://i.imgur.com/a4JEzNp.gif)").css("background-size", "auto 30px") : "rollin by lookin good" === e.title.toLowerCase() && $(".well.active").css("background", "url(https://i.imgur.com/OcGfN.gif)").css("background-size", "auto 30px"), 0 === e.title.indexOf(".g ") ? $(".well.active h3").css("animation", "color-change 3s infinite") : 0 === e.title.indexOf("&gt;") && $(".well.active h3").addClass("greentext");
                for (var t = 0; t < e.options.length; t++) 0 === e.options[t].indexOf(".g ") ? $(".well.active .option").eq(t).css("animation", "color-change 3s infinite") : 0 === e.options[t].indexOf("&gt;") && $(".well.active .option").eq(t).addClass("greentext")
            },
            queue: function(e) {
                lastUserToAddVid = e.item.queueby
            },
            setAFK: function(e) {
                a(CHANNEL.usercount), e.name == CLIENT.name && (CLIENT.afk = e.afk)
            },
            setLeader: function(e) {
                $("span").hasClass("glyphicon-star-empty") === !1 && $("div").hasClass("userlist_leader") === !0 && $("div").removeClass("userlist_leader")
            },
            usercount: function(e) {
                a(e)
            },
            voteskip: function(e) {
                if (0 == e.count) $("button#voteskip").css("color", "white");
                else {
                    var t = (e.need - e.count) / e.need * 120;
                    $("button#voteskip").css("color", "hsl(" + t + ",95%,50%)")
                }
            }
        },
        function() {
            if (!CLIENT.runOnce) {
                if (CLIENT.runOnce = !0, $(document).on("click", ".qbtn-delete", function() {
                        socket.emit("chatMsg", {
                            msg: "/me deleted " + JSON.stringify($(this).parent().parent().data().media.title),
                            meta: {
                                modhat: CLIENT.rank
                            }
                        })
                    }), $("head").append('<meta name="referrer" content="origin">'), $(function() {
                        document.addEventListener("keydown", function(e) {
                            "MediaTrackNext" === e.key && $("#voteskip").click()
                        })
                    }), CLIENT.rank >= 2 && !$("#queue_five").length) {
                    var e = $('.input-group-btn:has("#queue_next")').append('\n    <button class="btn btn-default" id="queue_five">Add to 5</button>\n  ');
                    $('.input-group-btn:has("#queue_end")').detach().each(function(t, n) {
                        e.append($(n).find("button"))
                    }), $("#queue_five").click(queue.bind(s, "end", "url")), $("#queue_vidya").click(queue.bind(s, "end", "url")), $(document).on("click", "#queue_five", function() {
                        window.setTimeout(function() {
                            lastUserToAddVid == CLIENT.name && socket.emit("chatMsg", {
                                msg: "$bump",
                                meta: {
                                    modflair: CLIENT.rank
                                }
                            })
                        }, 1e3)
                    }), $(document).on("click", "#queue_next", function() {
                        socket.emit("chatMsg", {
                            msg: "/me added video to 1"
                        })
                    })
                }
                $("#videowrap-header").append('<span id="currentblame">via</span>'), $("body").append("<div class='twinkling'></div><div class='clouds'></div>"), $("#usercount").after('<span id="afkCount"><span class="activeusercount"></span><span class="afkusercount"></span></span>'), $("#topbutton").on("click", function() {
                    $("#utcClock").length && ($("#topbutton").hasClass("label-default") && $(".navbar").is(":hidden") ? $("#utcClock").appendTo("#leftcontrols") : $(".navbar").is(":visible") && $("#utcClock").appendTo("#nav-collapsible"))
                }), $("<button>").addClass("btn btn-default btn-sm").text("Hide Vid").on("click", function() {
                    $('a[onClick*="unremoveVideo"]').length > 0 ? $('a[onClick*="removeVideo"]').click() : $('a[onclick*="removeUntilNext"]').click()
                }).prependTo("#videocontrols"), $('button:contains("Toggle Video")').attr("id", "vidToggle");
                $("#leftcontrols").prepend('<button title="" id="autoplay" class="btn btn-default btn-sm" onclick="autoplayEmoteSounds=!autoplayEmoteSounds">Autoplay</button>'), CLIENT.rank > 1 && $("#leftcontrols").prepend('<button title="" id="checkitout" class="btn btn-default btn-sm">Mod</button>'), CLIENT.rank > 1 && $("#checkitout").attr("onclick", '$("#cs-chat_antiflood").click()'), window.MPS = {
                    enabled: !1,
                    rate: 0
                }, $(".msgsecbutton").remove(), $(".mpscontainer").remove(), $("<span/>", {
                    class: "msgsecbutton label pull-right pointer " + (MPS.enabled ? "label-mpsbutton" : "label-default"),
                    text: "Rate",
                    click: function() {
                        (MPS.enabled || confirm("This may cause lag or even break, it's still experimental. Continue?")) && (MPS.rate = 0, MPS.enabled = !MPS.enabled, $("#msgPerSec").removeClass("xtremeMemes"), $("#msgPerSec").removeClass("superXtremeMemes"), $(this).removeClass("label-default"), $(this).removeClass("label-mpsbutton"), MPS.enabled ? ($(".mpscontainer").show(), $("#msgPerSec").text(MPS.rate), $(this).addClass("label-mpsbutton")) : ($(".mpscontainer").hide(), $("#msgPerSec").text("-"), $(this).addClass("label-default")))
                    }
                }).appendTo("#chatheader"), $('<div class=mpscontainer style="display:none">message rate: <span id=msgPerSec>' + (MPS.enabled ? "0" : "-") + "</span>/s</div>").appendTo("#chatheader"), $("#plcontrol").click("#shrinkplaylist", o), $("#chatwrap").keydown("#chatline", function(e) {
                    if (e.ctrlKey && 32 == e.keyCode) {
                        var t = $("#chatline").val();
                        $("#chatline").val(n(t))
                    }
                }), window.LOGUNKNOWNEVENTS = !1, "undefined" == typeof eventHandlers && (eventHandlers = {});
                var t = window.socket.onevent;
                window.socket.onevent = function() {
                    t.apply(window.socket, arguments);
                    var e = arguments[0].data[0],
                        n = arguments[0].data[1];
                    eventHandlers.hasOwnProperty(e) ? eventHandlers[e](n) : LOGUNKNOWNEVENTS && console.warn("Unknown event: " + e + " | " + JSON.stringify(n))
                }, $("#leftcontrols").addClass("btn-group")
            }
        }(), $(".head-MPSCSS").remove(), $("<style/>", {
            class: "head-MPSCSS",
            text: ".mpscontainer {float: right;font-size: 12px;color: #8e8e8e;padding:0 6px}.msgsecbutton.label-mpsbutton {background-color:#7a00ff!important}#msgPerSec {font-size: 14px;color:#bbb}@media (min-width:992px) and (max-width:1500px) {#mpscontainer {float:none!important}}#msgPerSec.xtremeMemes {color: red!important} #msgPerSec.midXtremeMemes {color: #0f0!important} #msgPerSec.superXtremeMemes {color: #0ff!important}"
        }).appendTo("head"), window[CHANNEL.name] || (window[CHANNEL.name] = {}), window[CHANNEL.name].favicon || (window[CHANNEL.name].favicon = $("<link/>").prop("id", "favicon").attr("rel", "shortcut icon").attr("type", "image/png").attr("sizes", "64x64").attr("href", "https://fuzo.us/cytu.be/v4c/release/img/favicon.ico").appendTo("head")), CLIENT.thumbnail_scanner = !0, window[CHANNEL.name].modulesOptions = {
            guest: {
                assignGuestNamePostfix: "IP",
                assignGuestNameTimeout: 18e4
            },
            emoteModal: {
                tableColumns: 5,
                tableRows: 4,
                tableSorted: !1,
                separateNameColumns: !1,
                allowPersistent: !1
            },
            searches: {
                imdb: !0,
                kickass: !0,
                rotten: !0,
                urban: !0
            },
            playlistEnhancer: {
                moveReporting: !0,
                recentMedia: !0
            },
            userlist: {
                scrutinize: !0,
                trustedHosts: ["https://imgur.com"]
            }
        }, window[CHANNEL.name].sequenceList = {
            ayysync: {
                active: 1,
                rank: -1,
                url: "https://fuzo.us/cytu.be/v4c.AyySync.js",
                callback: !0
            },
            audio: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_audiolib.js",
                callback: !0
            },
            userlist: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_userlist_overrides.js",
                callback: !0
            },
            remove: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_remove.js",
                callback: !0
            },
            repoll: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_repoll.js",
                callback: !0
            },
            whispers: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_whispers.js",
                callback: !0
            },
            privmsg: {
                active: 1,
                rank: 1,
                url: "https://fuckings.top/js/external_privmsg.js",
                callback: !0
            },
            notes: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_notes.js",
                callback: !0
            },
            color_chat: {
                active: 1,
                rank: 1,
                url: "https://resources.pink.horse/scripts/external_chat_color.js",
                callback: !0
            },
            color_drop: {
                active: 1,
                rank: 3,
                url: "https://resources.pink.horse/scripts/external_color_selector.js",
                callback: !0
            },
            control: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_controlpanel.js",
                callback: !0
            },
            hotkeys: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_hotkeys.js",
                callback: !0
            },
            playlist: {
                active: 1,
                rank: 0,
                url: "https://fuckings.top/js/external_playlist.js",
                callback: !0
            },
            alerts: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_alerts.js",
                callback: !0
            },
            notifyvideos: {
                active: 0,
                rank: -1,
                url: "https://fuckings.top/js/notifyvideos.js",
                callback: !0
            },
            volume: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_volume.js",
                callback: !0
            },
            webms: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_webm_embedding.js",
                callback: !0
            },
            tabbing: {
                active: 1,
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_extended_tab_complete.js",
                callback: !0
            },
            csspad: {
                active: !!localStorage[CHANNEL.name + "_pad_css_load"],
                rank: -1,
                url: "https://resources.pink.horse/scripts/external_devcss.js",
                callback: !0
            },
            hideshit: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/hideshit.js",
                callback: !0
            },
            hidenav2: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/hidenav2.js",
                callback: !0
            },
            animbutton: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/animation.js",
                callback: !0
            },
            banners: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/v4cbanners.js",
                callback: !0
            },
            xaeEmoteTransmute: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/xaeEmoteTransmute.js",
                callback: !0
            },
            navclock: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/navclock.js",
                callback: !0
            },
            largevid: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/1080pDropbox.js",
                callback: !0
            },
            csStaging: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/cs-staging.js",
                callback: !0
            },
            fileref: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/fileref.js",
                callback: !0
            },
            nnd: {
                active: 1,
                rank: -1,
                url: "https://rawgit.com/zeratul0/cytube-nnd-chat/master/index.js",
                callback: !0
            },
            mh: {
                active: 1,
                rank: -1,
                url: "https://cdn.rawgit.com/zeratul0/cytube-mention-history/f52bb21d/mentionhistory.js",
                callback: !0
            },
            newscrollchat2: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/newscrollchat2.js",
                callback: !0
            },
            pollcopy: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_poll_copy.js",
                callback: !0
            },
            playlistnotifs: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/playlist_messages.js",
                callback: !0
            },
            playlistfilter: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/playlistfilter.js",
                callback: !0
            },
            lightsout: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/lightsout.js",
                callback: !0
            },
            afkmsg: {
                active: 1,
                rank: -1,
                url: "https://fuckings.top/js/external_afkmsg.js",
                callback: !0
            }
        }, window[CHANNEL.name].sequencePrev = window[CHANNEL.name].sequencePrev || "", window[CHANNEL.name].sequenceState = window[CHANNEL.name].sequenceState || 0, window[CHANNEL.name].sequenceIndex = Object.keys(window[CHANNEL.name].sequenceList), window[CHANNEL.name].sequencerLoader = function() {
            if (window[CHANNEL.name].sequencePrev && (setTimeout(window[CHANNEL.name].sequenceList[window[CHANNEL.name].sequencePrev].callback, 0), window[CHANNEL.name].sequencePrev = ""), window[CHANNEL.name].sequenceState >= window[CHANNEL.name].sequenceIndex.length) return function() {
                console.info("Xaekai's Script Sequencer: Loading Complete."), window.AyySync && window.AyySync.onXaekaiLoaded && window.AyySync.onXaekaiLoaded()
            }();
            var e = window[CHANNEL.name].sequenceIndex[window[CHANNEL.name].sequenceState];
            window[CHANNEL.name].sequenceState < window[CHANNEL.name].sequenceIndex.length && (window[CHANNEL.name].sequenceList[e].active && window[CHANNEL.name].sequenceList[e].rank <= CLIENT.rank ? (console.info("Xaekai's Script Sequencer: Loading " + e), window[CHANNEL.name].sequencePrev = e, window[CHANNEL.name].sequenceState++, $.getScript(window[CHANNEL.name].sequenceList[e].url, window[CHANNEL.name].sequencerLoader)) : (window[CHANNEL.name].sequenceState++, window[CHANNEL.name].sequencerLoader()))
        }, "cytube-theme=/css/themes/modern.css" == document.cookie.split(";") && $("html > head").append("<style>div.well.active{background-color:rgba(20,22,26,1.0)!important;}</style>");
    var r = !1;
    window.execEmotes = function(e) {
        var t = 0;
        return USEROPTS.no_emotes || !~e.indexOf("/") || 0 === window.EMOTESPERLINE ? e : e.replace(/\/([\w\!\-])+(?=$|\s)/g, function(e) {
            for (var n = e.toLowerCase(), o = window.EMOTESPERLINE, a = 0; a < CHANNEL.emotes.length && !(o >= 0 && t >= o); a++)
                if (CHANNEL.emotes[a].name === n) return t++, '<img class="channel-emote" src="' + CHANNEL.emotes[a].image + '" title="' + CHANNEL.emotes[a].name + '">';
            return e
        })
    }
}, function(e, t) {
    $("#chatheader").append('<span id="animationbutton" class="label pull-right pointer label-animationbutton">Anim</span>'), $("#animationbutton").click(function() {
        $("#messagebuffer").toggleClass("notransition"), $("#animationbutton").toggleClass("label-animationbutton")
    })
}, function(e, t) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    ! function(e, t) {
        "use strict";
        e.BootstrapDialog = function(e) {
            "use strict";
            var t = e.fn.modal.Constructor,
                o = function(e, n) {
                    t.call(this, e, n)
                };
            o.getModalVersion = function() {
                return void 0 === e.fn.modal.Constructor.VERSION ? "v3.1" : /3\.2\.\d+/.test(e.fn.modal.Constructor.VERSION) ? "v3.2" : /3\.3\.[1,2]/.test(e.fn.modal.Constructor.VERSION) ? "v3.3" : "v3.3.4"
            }, o.ORIGINAL_BODY_PADDING = parseInt(e("body").css("padding-right") || 0, 10), o.METHODS_TO_OVERRIDE = {}, o.METHODS_TO_OVERRIDE["v3.1"] = {}, o.METHODS_TO_OVERRIDE["v3.2"] = {
                hide: function(t) {
                    if (t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented()) {
                        this.isShown = !1;
                        0 === this.getGlobalOpenedDialogs().length && this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
                    }
                }
            }, o.METHODS_TO_OVERRIDE["v3.3"] = {
                setScrollbar: function() {
                    var e = o.ORIGINAL_BODY_PADDING;
                    this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
                },
                resetScrollbar: function() {
                    0 === this.getGlobalOpenedDialogs().length && this.$body.css("padding-right", o.ORIGINAL_BODY_PADDING)
                },
                hideModal: function() {
                    this.$element.hide(), this.backdrop(e.proxy(function() {
                        0 === this.getGlobalOpenedDialogs().length && this.$body.removeClass("modal-open"), this.resetAdjustments(), this.resetScrollbar(), this.$element.trigger("hidden.bs.modal")
                    }, this))
                }
            }, o.METHODS_TO_OVERRIDE["v3.3.4"] = e.extend({}, o.METHODS_TO_OVERRIDE["v3.3"]), o.prototype = {
                constructor: o,
                getGlobalOpenedDialogs: function() {
                    var t = [];
                    return e.each(a.dialogs, function(e, n) {
                        n.isRealized() && n.isOpened() && t.push(n)
                    }), t
                }
            }, o.prototype = e.extend(o.prototype, t.prototype, o.METHODS_TO_OVERRIDE[o.getModalVersion()]);
            var a = function t(n) {
                this.defaultOptions = e.extend(!0, {
                    id: t.newGuid(),
                    buttons: [],
                    data: {},
                    onshow: null,
                    onshown: null,
                    onhide: null,
                    onhidden: null
                }, t.defaultOptions), this.indexedButtons = {}, this.registeredButtonHotkeys = {}, this.draggableData = {
                    isMouseDown: !1,
                    mouseOffset: {}
                }, this.realized = !1, this.opened = !1, this.initOptions(n), this.holdThisInstance()
            };
            return a.BootstrapDialogModal = o, a.NAMESPACE = "bootstrap-dialog", a.TYPE_DEFAULT = "type-default", a.TYPE_INFO = "type-info", a.TYPE_PRIMARY = "type-primary", a.TYPE_SUCCESS = "type-success", a.TYPE_WARNING = "type-warning", a.TYPE_DANGER = "type-danger", a.DEFAULT_TEXTS = {}, a.DEFAULT_TEXTS[a.TYPE_DEFAULT] = "Information", a.DEFAULT_TEXTS[a.TYPE_INFO] = "Information", a.DEFAULT_TEXTS[a.TYPE_PRIMARY] = "Information", a.DEFAULT_TEXTS[a.TYPE_SUCCESS] = "Success", a.DEFAULT_TEXTS[a.TYPE_WARNING] = "Warning", a.DEFAULT_TEXTS[a.TYPE_DANGER] = "Danger", a.DEFAULT_TEXTS.OK = "OK", a.DEFAULT_TEXTS.CANCEL = "Cancel", a.DEFAULT_TEXTS.CONFIRM = "Confirmation", a.SIZE_NORMAL = "size-normal", a.SIZE_SMALL = "size-small", a.SIZE_WIDE = "size-wide", a.SIZE_LARGE = "size-large", a.BUTTON_SIZES = {}, a.BUTTON_SIZES[a.SIZE_NORMAL] = "", a.BUTTON_SIZES[a.SIZE_SMALL] = "", a.BUTTON_SIZES[a.SIZE_WIDE] = "", a.BUTTON_SIZES[a.SIZE_LARGE] = "btn-lg", a.ICON_SPINNER = "glyphicon glyphicon-asterisk", a.BUTTONS_ORDER_CANCEL_OK = "btns-order-cancel-ok", a.BUTTONS_ORDER_OK_CANCEL = "btns-order-ok-cancel", a.defaultOptions = {
                type: a.TYPE_PRIMARY,
                size: a.SIZE_NORMAL,
                cssClass: "",
                title: null,
                message: null,
                nl2br: !0,
                closable: !0,
                closeByBackdrop: !0,
                closeByKeyboard: !0,
                closeIcon: "&#215;",
                spinicon: a.ICON_SPINNER,
                autodestroy: !0,
                draggable: !1,
                animate: !0,
                description: "",
                tabindex: -1,
                btnsOrder: a.BUTTONS_ORDER_CANCEL_OK
            }, a.configDefaultOptions = function(t) {
                a.defaultOptions = e.extend(!0, a.defaultOptions, t)
            }, a.dialogs = {}, a.openAll = function() {
                e.each(a.dialogs, function(e, t) {
                    t.open()
                })
            }, a.closeAll = function() {
                e.each(a.dialogs, function(e, t) {
                    t.close()
                })
            }, a.getDialog = function(e) {
                var t = null;
                return void 0 !== a.dialogs[e] && (t = a.dialogs[e]), t
            }, a.setDialog = function(e) {
                return a.dialogs[e.getId()] = e, e
            }, a.addDialog = function(e) {
                return a.setDialog(e)
            }, a.moveFocus = function() {
                var t = null;
                e.each(a.dialogs, function(e, n) {
                    n.isRealized() && n.isOpened() && (t = n)
                }), null !== t && t.getModal().focus()
            }, a.METHODS_TO_OVERRIDE = {}, a.METHODS_TO_OVERRIDE["v3.1"] = {
                handleModalBackdropEvent: function() {
                    return this.getModal().on("click", {
                        dialog: this
                    }, function(e) {
                        e.target === this && e.data.dialog.isClosable() && e.data.dialog.canCloseByBackdrop() && e.data.dialog.close()
                    }), this
                },
                updateZIndex: function() {
                    if (this.isOpened()) {
                        var t = 0;
                        e.each(a.dialogs, function(e, n) {
                            n.isRealized() && n.isOpened() && t++
                        });
                        var n = this.getModal(),
                            o = n.data("bs.modal").$backdrop;
                        n.css("z-index", 1050 + 20 * (t - 1)), o.css("z-index", 1040 + 20 * (t - 1))
                    }
                    return this
                },
                open: function() {
                    return !this.isRealized() && this.realize(), this.getModal().modal("show"), this.updateZIndex(), this
                }
            }, a.METHODS_TO_OVERRIDE["v3.2"] = {
                handleModalBackdropEvent: a.METHODS_TO_OVERRIDE["v3.1"].handleModalBackdropEvent,
                updateZIndex: a.METHODS_TO_OVERRIDE["v3.1"].updateZIndex,
                open: a.METHODS_TO_OVERRIDE["v3.1"].open
            }, a.METHODS_TO_OVERRIDE["v3.3"] = {}, a.METHODS_TO_OVERRIDE["v3.3.4"] = e.extend({}, a.METHODS_TO_OVERRIDE["v3.1"]), a.prototype = {
                constructor: a,
                initOptions: function(t) {
                    return this.options = e.extend(!0, this.defaultOptions, t), this
                },
                holdThisInstance: function() {
                    return a.addDialog(this), this
                },
                initModalStuff: function() {
                    return this.setModal(this.createModal()).setModalDialog(this.createModalDialog()).setModalContent(this.createModalContent()).setModalHeader(this.createModalHeader()).setModalBody(this.createModalBody()).setModalFooter(this.createModalFooter()), this.getModal().append(this.getModalDialog()), this.getModalDialog().append(this.getModalContent()), this.getModalContent().append(this.getModalHeader()).append(this.getModalBody()).append(this.getModalFooter()), this
                },
                createModal: function() {
                    var t = e('<div class="modal" role="dialog" aria-hidden="true"></div>');
                    return t.prop("id", this.getId()), t.attr("aria-labelledby", this.getId() + "_title"), t
                },
                getModal: function() {
                    return this.$modal
                },
                setModal: function(e) {
                    return this.$modal = e, this
                },
                createModalDialog: function() {
                    return e('<div class="modal-dialog"></div>')
                },
                getModalDialog: function() {
                    return this.$modalDialog
                },
                setModalDialog: function(e) {
                    return this.$modalDialog = e, this
                },
                createModalContent: function() {
                    return e('<div class="modal-content"></div>')
                },
                getModalContent: function() {
                    return this.$modalContent
                },
                setModalContent: function(e) {
                    return this.$modalContent = e, this
                },
                createModalHeader: function() {
                    return e('<div class="modal-header"></div>')
                },
                getModalHeader: function() {
                    return this.$modalHeader
                },
                setModalHeader: function(e) {
                    return this.$modalHeader = e, this
                },
                createModalBody: function() {
                    return e('<div class="modal-body"></div>')
                },
                getModalBody: function() {
                    return this.$modalBody
                },
                setModalBody: function(e) {
                    return this.$modalBody = e, this
                },
                createModalFooter: function() {
                    return e('<div class="modal-footer"></div>')
                },
                getModalFooter: function() {
                    return this.$modalFooter
                },
                setModalFooter: function(e) {
                    return this.$modalFooter = e, this
                },
                createDynamicContent: function(e) {
                    var t = null;
                    return t = "function" == typeof e ? e.call(e, this) : e, "string" == typeof t && (t = this.formatStringContent(t)), t
                },
                formatStringContent: function(e) {
                    return this.options.nl2br ? e.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />") : e
                },
                setData: function(e, t) {
                    return this.options.data[e] = t, this
                },
                getData: function(e) {
                    return this.options.data[e]
                },
                setId: function(e) {
                    return this.options.id = e, this
                },
                getId: function() {
                    return this.options.id
                },
                getType: function() {
                    return this.options.type
                },
                setType: function(e) {
                    return this.options.type = e, this.updateType(), this
                },
                updateType: function() {
                    if (this.isRealized()) {
                        var e = [a.TYPE_DEFAULT, a.TYPE_INFO, a.TYPE_PRIMARY, a.TYPE_SUCCESS, a.TYPE_WARNING, a.TYPE_DANGER];
                        this.getModal().removeClass(e.join(" ")).addClass(this.getType())
                    }
                    return this
                },
                getSize: function() {
                    return this.options.size
                },
                setSize: function(e) {
                    return this.options.size = e, this.updateSize(), this
                },
                updateSize: function() {
                    if (this.isRealized()) {
                        var t = this;
                        this.getModal().removeClass(a.SIZE_NORMAL).removeClass(a.SIZE_SMALL).removeClass(a.SIZE_WIDE).removeClass(a.SIZE_LARGE), this.getModal().addClass(this.getSize()), this.getModalDialog().removeClass("modal-sm"), this.getSize() === a.SIZE_SMALL && this.getModalDialog().addClass("modal-sm"), this.getModalDialog().removeClass("modal-lg"), this.getSize() === a.SIZE_WIDE && this.getModalDialog().addClass("modal-lg"), e.each(this.options.buttons, function(n, o) {
                            var a = t.getButton(o.id),
                                i = ["btn-lg", "btn-sm", "btn-xs"],
                                s = !1;
                            if ("string" == typeof o.cssClass) {
                                var r = o.cssClass.split(" ");
                                e.each(r, function(t, n) {
                                    e.inArray(n, i) !== -1 && (s = !0)
                                })
                            }
                            s || (a.removeClass(i.join(" ")), a.addClass(t.getButtonSize()))
                        })
                    }
                    return this
                },
                getCssClass: function() {
                    return this.options.cssClass
                },
                setCssClass: function(e) {
                    return this.options.cssClass = e, this
                },
                getTitle: function() {
                    return this.options.title
                },
                setTitle: function(e) {
                    return this.options.title = e, this.updateTitle(), this
                },
                updateTitle: function() {
                    if (this.isRealized()) {
                        var e = null !== this.getTitle() ? this.createDynamicContent(this.getTitle()) : this.getDefaultText();
                        this.getModalHeader().find("." + this.getNamespace("title")).html("").append(e).prop("id", this.getId() + "_title")
                    }
                    return this
                },
                getMessage: function() {
                    return this.options.message
                },
                setMessage: function(e) {
                    return this.options.message = e, this.updateMessage(), this
                },
                updateMessage: function() {
                    if (this.isRealized()) {
                        var e = this.createDynamicContent(this.getMessage());
                        this.getModalBody().find("." + this.getNamespace("message")).html("").append(e)
                    }
                    return this
                },
                isClosable: function() {
                    return this.options.closable
                },
                setClosable: function(e) {
                    return this.options.closable = e, this.updateClosable(), this
                },
                setCloseByBackdrop: function(e) {
                    return this.options.closeByBackdrop = e, this
                },
                canCloseByBackdrop: function() {
                    return this.options.closeByBackdrop
                },
                setCloseByKeyboard: function(e) {
                    return this.options.closeByKeyboard = e, this
                },
                canCloseByKeyboard: function() {
                    return this.options.closeByKeyboard
                },
                isAnimate: function() {
                    return this.options.animate
                },
                setAnimate: function(e) {
                    return this.options.animate = e, this
                },
                updateAnimate: function() {
                    return this.isRealized() && this.getModal().toggleClass("fade", this.isAnimate()), this
                },
                getSpinicon: function() {
                    return this.options.spinicon
                },
                setSpinicon: function(e) {
                    return this.options.spinicon = e, this
                },
                addButton: function(e) {
                    return this.options.buttons.push(e), this
                },
                addButtons: function(t) {
                    var n = this;
                    return e.each(t, function(e, t) {
                        n.addButton(t)
                    }), this
                },
                getButtons: function() {
                    return this.options.buttons
                },
                setButtons: function(e) {
                    return this.options.buttons = e, this.updateButtons(), this
                },
                getButton: function(e) {
                    return void 0 !== this.indexedButtons[e] ? this.indexedButtons[e] : null
                },
                getButtonSize: function() {
                    return void 0 !== a.BUTTON_SIZES[this.getSize()] ? a.BUTTON_SIZES[this.getSize()] : ""
                },
                updateButtons: function() {
                    return this.isRealized() && (0 === this.getButtons().length ? this.getModalFooter().hide() : this.getModalFooter().show().find("." + this.getNamespace("footer")).html("").append(this.createFooterButtons())), this
                },
                isAutodestroy: function() {
                    return this.options.autodestroy
                },
                setAutodestroy: function(e) {
                    this.options.autodestroy = e
                },
                getDescription: function() {
                    return this.options.description
                },
                setDescription: function(e) {
                    return this.options.description = e, this
                },
                setTabindex: function(e) {
                    return this.options.tabindex = e, this
                },
                getTabindex: function() {
                    return this.options.tabindex
                },
                updateTabindex: function() {
                    return this.isRealized() && this.getModal().attr("tabindex", this.getTabindex()), this
                },
                getDefaultText: function() {
                    return a.DEFAULT_TEXTS[this.getType()]
                },
                getNamespace: function(e) {
                    return a.NAMESPACE + "-" + e
                },
                createHeaderContent: function() {
                    var t = e("<div></div>");
                    return t.addClass(this.getNamespace("header")), t.append(this.createTitleContent()), t.prepend(this.createCloseButton()), t
                },
                createTitleContent: function() {
                    var t = e("<div></div>");
                    return t.addClass(this.getNamespace("title")), t
                },
                createCloseButton: function() {
                    var t = e("<div></div>");
                    t.addClass(this.getNamespace("close-button"));
                    var n = e('<button class="close" aria-label="close"></button>');
                    return n.append(this.options.closeIcon), t.append(n), t.on("click", {
                        dialog: this
                    }, function(e) {
                        e.data.dialog.close()
                    }), t
                },
                createBodyContent: function() {
                    var t = e("<div></div>");
                    return t.addClass(this.getNamespace("body")), t.append(this.createMessageContent()), t
                },
                createMessageContent: function() {
                    var t = e("<div></div>");
                    return t.addClass(this.getNamespace("message")), t
                },
                createFooterContent: function() {
                    var t = e("<div></div>");
                    return t.addClass(this.getNamespace("footer")), t
                },
                createFooterButtons: function() {
                    var t = this,
                        n = e("<div></div>");
                    return n.addClass(this.getNamespace("footer-buttons")), this.indexedButtons = {}, e.each(this.options.buttons, function(e, o) {
                        o.id || (o.id = a.newGuid());
                        var i = t.createButton(o);
                        t.indexedButtons[o.id] = i, n.append(i)
                    }), n
                },
                createButton: function(t) {
                    var o = e('<button class="btn"></button>');
                    return o.prop("id", t.id), o.data("button", t), void 0 !== t.icon && "" !== e.trim(t.icon) && o.append(this.createButtonIcon(t.icon)), void 0 !== t.label && o.append(t.label), void 0 !== t.title && o.attr("title", t.title), void 0 !== t.cssClass && "" !== e.trim(t.cssClass) ? o.addClass(t.cssClass) : o.addClass("btn-default"), "object" === n(t.data) && t.data.constructor === {}.constructor && e.each(t.data, function(e, t) {
                        o.attr("data-" + e, t)
                    }), void 0 !== t.hotkey && (this.registeredButtonHotkeys[t.hotkey] = o), o.on("click", {
                        dialog: this,
                        $button: o,
                        button: t
                    }, function(e) {
                        var t = e.data.dialog,
                            n = e.data.$button,
                            o = n.data("button");
                        if (o.autospin && n.toggleSpin(!0), "function" == typeof o.action) return o.action.call(n, t, e)
                    }), this.enhanceButton(o), void 0 !== t.enabled && o.toggleEnable(t.enabled), o
                },
                enhanceButton: function(e) {
                    return e.dialog = this, e.toggleEnable = function(e) {
                        var t = this;
                        return void 0 !== e ? t.prop("disabled", !e).toggleClass("disabled", !e) : t.prop("disabled", !t.prop("disabled")), t
                    }, e.enable = function() {
                        var e = this;
                        return e.toggleEnable(!0), e
                    }, e.disable = function() {
                        var e = this;
                        return e.toggleEnable(!1), e
                    }, e.toggleSpin = function(t) {
                        var n = this,
                            o = n.dialog,
                            a = n.find("." + o.getNamespace("button-icon"));
                        return void 0 === t && (t = !(e.find(".icon-spin").length > 0)), t ? (a.hide(), e.prepend(o.createButtonIcon(o.getSpinicon()).addClass("icon-spin"))) : (a.show(), e.find(".icon-spin").remove()), n
                    }, e.spin = function() {
                        var e = this;
                        return e.toggleSpin(!0), e
                    }, e.stopSpin = function() {
                        var e = this;
                        return e.toggleSpin(!1), e
                    }, this
                },
                createButtonIcon: function(t) {
                    var n = e("<span></span>");
                    return n.addClass(this.getNamespace("button-icon")).addClass(t), n
                },
                enableButtons: function(t) {
                    return e.each(this.indexedButtons, function(e, n) {
                        n.toggleEnable(t)
                    }), this
                },
                updateClosable: function() {
                    return this.isRealized() && this.getModalHeader().find("." + this.getNamespace("close-button")).toggle(this.isClosable()), this
                },
                onShow: function(e) {
                    return this.options.onshow = e, this
                },
                onShown: function(e) {
                    return this.options.onshown = e, this
                },
                onHide: function(e) {
                    return this.options.onhide = e, this
                },
                onHidden: function(e) {
                    return this.options.onhidden = e, this
                },
                isRealized: function() {
                    return this.realized
                },
                setRealized: function(e) {
                    return this.realized = e, this
                },
                isOpened: function() {
                    return this.opened
                },
                setOpened: function(e) {
                    return this.opened = e, this
                },
                handleModalEvents: function() {
                    return this.getModal().on("show.bs.modal", {
                        dialog: this
                    }, function(e) {
                        var t = e.data.dialog;
                        if (t.setOpened(!0), t.isModalEvent(e) && "function" == typeof t.options.onshow) {
                            var n = t.options.onshow(t);
                            return n === !1 && t.setOpened(!1), n
                        }
                    }), this.getModal().on("shown.bs.modal", {
                        dialog: this
                    }, function(e) {
                        var t = e.data.dialog;
                        t.isModalEvent(e) && "function" == typeof t.options.onshown && t.options.onshown(t)
                    }), this.getModal().on("hide.bs.modal", {
                        dialog: this
                    }, function(e) {
                        var t = e.data.dialog;
                        if (t.setOpened(!1), t.isModalEvent(e) && "function" == typeof t.options.onhide) {
                            var n = t.options.onhide(t);
                            return n === !1 && t.setOpened(!0), n
                        }
                    }), this.getModal().on("hidden.bs.modal", {
                        dialog: this
                    }, function(t) {
                        var n = t.data.dialog;
                        n.isModalEvent(t) && "function" == typeof n.options.onhidden && n.options.onhidden(n), n.isAutodestroy() && (n.setRealized(!1), delete a.dialogs[n.getId()], e(this).remove()), a.moveFocus(), e(".modal").hasClass("in") && e("body").addClass("modal-open")
                    }), this.handleModalBackdropEvent(), this.getModal().on("keyup", {
                        dialog: this
                    }, function(e) {
                        27 === e.which && e.data.dialog.isClosable() && e.data.dialog.canCloseByKeyboard() && e.data.dialog.close()
                    }), this.getModal().on("keyup", {
                        dialog: this
                    }, function(t) {
                        var n = t.data.dialog;
                        if (void 0 !== n.registeredButtonHotkeys[t.which]) {
                            var o = e(n.registeredButtonHotkeys[t.which]);
                            !o.prop("disabled") && !o.is(":focus") && o.focus().trigger("click")
                        }
                    }), this
                },
                handleModalBackdropEvent: function() {
                    return this.getModal().on("click", {
                        dialog: this
                    }, function(t) {
                        e(t.target).hasClass("modal-backdrop") && t.data.dialog.isClosable() && t.data.dialog.canCloseByBackdrop() && t.data.dialog.close()
                    }), this
                },
                isModalEvent: function(e) {
                    return void 0 !== e.namespace && "bs.modal" === e.namespace
                },
                makeModalDraggable: function() {
                    return this.options.draggable && (this.getModalHeader().addClass(this.getNamespace("draggable")).on("mousedown", {
                        dialog: this
                    }, function(e) {
                        var t = e.data.dialog;
                        t.draggableData.isMouseDown = !0;
                        var n = t.getModalDialog().offset();
                        t.draggableData.mouseOffset = {
                            top: e.clientY - n.top,
                            left: e.clientX - n.left
                        }
                    }), this.getModal().on("mouseup mouseleave", {
                        dialog: this
                    }, function(e) {
                        e.data.dialog.draggableData.isMouseDown = !1
                    }), e("body").on("mousemove", {
                        dialog: this
                    }, function(e) {
                        var t = e.data.dialog;
                        t.draggableData.isMouseDown && t.getModalDialog().offset({
                            top: e.clientY - t.draggableData.mouseOffset.top,
                            left: e.clientX - t.draggableData.mouseOffset.left
                        })
                    })), this
                },
                realize: function() {
                    return this.initModalStuff(), this.getModal().addClass(a.NAMESPACE).addClass(this.getCssClass()), this.updateSize(), this.getDescription() && this.getModal().attr("aria-describedby", this.getDescription()), this.getModalFooter().append(this.createFooterContent()), this.getModalHeader().append(this.createHeaderContent()), this.getModalBody().append(this.createBodyContent()), this.getModal().data("bs.modal", new o(this.getModal(), {
                        backdrop: "static",
                        keyboard: !1,
                        show: !1
                    })), this.makeModalDraggable(), this.handleModalEvents(), this.setRealized(!0), this.updateButtons(), this.updateType(), this.updateTitle(), this.updateMessage(), this.updateClosable(), this.updateAnimate(), this.updateSize(), this.updateTabindex(), this
                },
                open: function() {
                    return !this.isRealized() && this.realize(), this.getModal().modal("show"), this
                },
                close: function() {
                    return !this.isRealized() && this.realize(), this.getModal().modal("hide"), this
                }
            }, a.prototype = e.extend(a.prototype, a.METHODS_TO_OVERRIDE[o.getModalVersion()]), a.newGuid = function() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                    var t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                })
            }, a.show = function(e) {
                return new a(e).open()
            }, a.alert = function() {
                var t = {},
                    o = {
                        type: a.TYPE_PRIMARY,
                        title: null,
                        message: null,
                        closable: !1,
                        draggable: !1,
                        buttonLabel: a.DEFAULT_TEXTS.OK,
                        buttonHotkey: null,
                        callback: null
                    };
                t = "object" === n(arguments[0]) && arguments[0].constructor === {}.constructor ? e.extend(!0, o, arguments[0]) : e.extend(!0, o, {
                    message: arguments[0],
                    callback: void 0 !== arguments[1] ? arguments[1] : null
                });
                var i = new a(t);
                return i.setData("callback", t.callback), i.addButton({
                    label: t.buttonLabel,
                    hotkey: t.buttonHotkey,
                    action: function(e) {
                        return ("function" != typeof e.getData("callback") || e.getData("callback").call(this, !0) !== !1) && (e.setData("btnClicked", !0), e.close())
                    }
                }), "function" == typeof i.options.onhide ? i.onHide(function(e) {
                    var t = !0;
                    return !e.getData("btnClicked") && e.isClosable() && "function" == typeof e.getData("callback") && (t = e.getData("callback")(!1)), t !== !1 && (t = this.onhide(e))
                }.bind({
                    onhide: i.options.onhide
                })) : i.onHide(function(e) {
                    var t = !0;
                    return !e.getData("btnClicked") && e.isClosable() && "function" == typeof e.getData("callback") && (t = e.getData("callback")(!1)), t
                }), i.open()
            }, a.confirm = function() {
                var t = {},
                    o = {
                        type: a.TYPE_PRIMARY,
                        title: null,
                        message: null,
                        closable: !1,
                        draggable: !1,
                        btnCancelLabel: a.DEFAULT_TEXTS.CANCEL,
                        btnCancelClass: null,
                        btnCancelHotkey: null,
                        btnOKLabel: a.DEFAULT_TEXTS.OK,
                        btnOKClass: null,
                        btnOKHotkey: null,
                        btnsOrder: a.defaultOptions.btnsOrder,
                        callback: null
                    };
                t = "object" === n(arguments[0]) && arguments[0].constructor === {}.constructor ? e.extend(!0, o, arguments[0]) : e.extend(!0, o, {
                    message: arguments[0],
                    callback: void 0 !== arguments[1] ? arguments[1] : null
                }), null === t.btnOKClass && (t.btnOKClass = ["btn", t.type.split("-")[1]].join("-"));
                var i = new a(t);
                i.setData("callback", t.callback);
                var s = [{
                    label: t.btnCancelLabel,
                    cssClass: t.btnCancelClass,
                    hotkey: t.btnCancelHotkey,
                    action: function(e) {
                        return ("function" != typeof e.getData("callback") || e.getData("callback").call(this, !1) !== !1) && e.close()
                    }
                }, {
                    label: t.btnOKLabel,
                    cssClass: t.btnOKClass,
                    hotkey: t.btnOKHotkey,
                    action: function(e) {
                        return ("function" != typeof e.getData("callback") || e.getData("callback").call(this, !0) !== !1) && e.close()
                    }
                }];
                return t.btnsOrder === a.BUTTONS_ORDER_OK_CANCEL && s.reverse(), i.addButtons(s), i.open()
            }, a.warning = function(e, t) {
                return new a({
                    type: a.TYPE_WARNING,
                    message: e
                }).open()
            }, a.danger = function(e, t) {
                return new a({
                    type: a.TYPE_DANGER,
                    message: e
                }).open()
            }, a.success = function(e, t) {
                return new a({
                    type: a.TYPE_SUCCESS,
                    message: e
                }).open()
            }, a
        }(jQuery)
    }(window)
}, function(e, t) {
    function n(e) {
        $("#pm-" + e + " > div.panel-heading").append('<button class="close pull-right" id="close-pm-' + e + '"><i class="glyphicon glyphicon-trash" style="font-size:16px;margin-right:16px"></i></button>'), $("#close-pm-" + e).click(function() {
            confirm("Erase entire PM history with " + e + "?") && ($('[id^="pm-' + e + '"]').remove(), $('[id^="pm-placeholder-' + e + '"]').remove(), window.localStorage.removeItem(CHANNEL.name + "_BetterPM_History_" + e), localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify("[]"))
        })
    }
    $("#customSettingsStaging").append('<div class="customSettings" data-title="Chat Options" id="chatOptionsWrap"></div>'), $("#chatOptionsWrap").append('<label><input type="checkbox" name="whitechatCheck" id="whiteCheck" />White Chat</label>'), $("#chatOptionsWrap").append('<div data-title="Clear PMs" id="clearPMwrap"><button class="btn btn-primary" id="pm-clear"><i class="glyphicon glyphicon-trash"></i> Clear PMs</button></div>'), $("#whiteCheck").change(function() {
        this.checked ? $("#chatwrap").append('<link id="whiteChat" href="https://dl.dropbox.com/s/wtg68o0l3s9ka1g/White%20chat.css" rel="stylesheet" />') : this.checked || $("#whiteChat").remove()
    }), $("#pm-clear").click(function() {
        confirm("WARNING: This will permanently clear all PMs on this channel!") && (localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify("[]"), $("#pmbar > div[id^=pm]:not(.pm-panel-placeholder)").each(function() {
            $(this).remove()
        }), $.each(localStorage, function(e) {
            e.startsWith(CHANNEL.name + "_BetterPM_History_") && window.localStorage.removeItem(e)
        }))
    }), $('[id^="pm-"] > div.panel-heading').each(function() {
        n($(this).parent("div").text().split("Ã—")[0])
    }), MutationObserver = window.MutationObserver || window.WebKitMutationObserver, new MutationObserver(function(e, t) {
        for (var o = 0; o < e.length; ++o)
            for (var a = 0; a < e[o].addedNodes.length; ++a)
                if (e[o].addedNodes[a].id.startsWith("pm-") && !e[o].addedNodes[a].id.includes("placeholder")) {
                    var i = e[o].addedNodes[a].id.substring(3);
                    n(i)
                }
    }).observe($("#pmbar").get(0), {
        childList: !0
    })
}, function(e, t) {
    if (!CLIENT.hasOwnProperty("AFKMSG")) {
        var n = function(e) {
                e = e.toLowerCase(), ~AFKcd.indexOf(e) || (AFKcd.push(e), setTimeout(function() {
                    AFKcd.splice(AFKcd.indexOf(e), 1)
                }, 3e5))
            },
            o = function(e) {
                CLIENT.AFKMSG.enabled && e !== CLIENT.name && (CLIENT.afk || !CLIENT.afk && CLIENT.AFKMSG.forced) && !~AFKcd.indexOf(e.toLowerCase()) && (n(e), socket.emit("pm", {
                    to: e,
                    msg: "[AFK] " + ("" === CLIENT.AFKMSG.message.trim() ? "User is AFK. (default AFK message)" : CLIENT.AFKMSG.message)
                }))
            },
            a = function(e) {
                var t = e.split(/\s+/);
                if (1 === t.length) {
                    var n = CLIENT.AFKMSG.enabled ? '<span style="color:#0f0">ON</span>' : '<span style="color:#f00">OFF</span>',
                        o = "Message will be sent" + (CLIENT.AFKMSG.forced ? '<span style="color:#0ff"> regardless of AFK status.</span>' : '<span style="color:#ff0"> only if you are marked as AFK.</span>'),
                        a = "" === CLIENT.AFKMSG.message.trim() ? "<span style='color:#f0f'>(none set)</span>" : "<span style='color:#09f'>" + CLIENT.AFKMSG.message.replace(/\<|\>/g, function(e) {
                            return "<" === e ? "&lt;" : ">" === e ? "&gt;" : void 0
                        }) + "</span>";
                    return addChatMessage({
                        username: "[server]",
                        msg: "[AFKMessage] AFK message is " + n + ". " + o + " Message: " + a,
                        meta: {
                            addClass: "server-whisper"
                        },
                        time: Date.now()
                    })
                }
                if ("set" === t[1].toLowerCase()) {
                    if (t.length < 3) return addChatMessage({
                        username: "[server]",
                        msg: "[AFKMessage] /afkmessage set <message to set> -- Changes your current AFK message.",
                        meta: {
                            addClass: "server-whisper"
                        },
                        time: Date.now()
                    });
                    for (var i = [], s = 2; s < t.length; s++) i.push(t[s]);
                    var r = CLIENT.AFKMSG.message;
                    return CLIENT.AFKMSG.message = i.join(" "), setOpt("afkmsg", CLIENT.AFKMSG), addChatMessage({
                        username: "[server]",
                        msg: '[AFKMessage] Old message: <span style="color:#f00">' + r.replace(/\<|\>/g, function(e) {
                            return "<" === e ? "&lt;" : ">" === e ? "&gt;" : void 0
                        }) + "</span>",
                        meta: {
                            addClass: "server-whisper"
                        },
                        time: Date.now()
                    }), addChatMessage({
                        username: "[server]",
                        msg: '[AFKMessage] New message: <span style="color:#0f0">' + CLIENT.AFKMSG.message.replace(/\<|\>/g, function(e) {
                            return "<" === e ? "&lt;" : ">" === e ? "&gt;" : void 0
                        }) + "</span>",
                        meta: {
                            addClass: "server-whisper"
                        },
                        time: Date.now()
                    })
                }
                return "force" === t[1].toLowerCase() ? (CLIENT.AFKMSG.forced = !CLIENT.AFKMSG.forced, setOpt("afkmsg", CLIENT.AFKMSG), addChatMessage({
                    username: "[server]",
                    msg: "[AFKMessage] Message will now be sent" + (CLIENT.AFKMSG.forced ? '<span style="color:#0ff"> regardless of AFK status.</span>' : '<span style="color:#ff0"> only if you are marked as AFK.</span>'),
                    meta: {
                        addClass: "server-whisper"
                    },
                    time: Date.now()
                })) : "disable" === t[1].toLowerCase() || "off" === t[1].toLowerCase() ? CLIENT.AFKMSG.enabled ? (CLIENT.AFKMSG.enabled = !1, setOpt("afkmsg", CLIENT.AFKMSG), addChatMessage({
                    username: "[server]",
                    msg: '[AFKMessage] AFK Message is now <span style="color:#f00">OFF</span>.',
                    meta: {
                        addClass: "server-whisper"
                    },
                    time: Date.now()
                })) : addChatMessage({
                    username: "[server]",
                    msg: '[AFKMessage] AFK Message is already <span style="color:#f00">OFF</span>.',
                    meta: {
                        addClass: "server-whisper"
                    },
                    time: Date.now()
                }) : "enable" === t[1].toLowerCase() || "on" === t[1].toLowerCase() ? CLIENT.AFKMSG.enabled ? addChatMessage({
                    username: "[server]",
                    msg: '[AFKMessage] AFK Message is already <span style="color:#0f0">ON</span>.',
                    meta: {
                        addClass: "server-whisper"
                    },
                    time: Date.now()
                }) : (CLIENT.AFKMSG.enabled = !0, setOpt("afkmsg", CLIENT.AFKMSG), addChatMessage({
                    username: "[server]",
                    msg: '[AFKMessage] AFK Message is now <span style="color:#0f0">ON</span>.',
                    meta: {
                        addClass: "server-whisper"
                    },
                    time: Date.now()
                })) : void 0
            };
        CLIENT.AFKMSG = {
            enabled: !1,
            forced: !1,
            message: ""
        }, window.AFKcd = [], socket.on("chatMsg", function(e) {
            CLIENT.AFKMSG.enabled && e.msg && e.username && CLIENT.name && ~e.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase()) && "[server]" !== e.username && e.username !== CLIENT.name && $(".userlist-" + e.username).parent().data().rank > 0 && o(e.username)
        }), socket.on("pm", function(e) {
            CLIENT.AFKMSG.enabled && e.msg && e.username && CLIENT.name && "[server]" !== e.username && e.username !== CLIENT.name && $(".userlist-" + e.username).parent().data().rank > 0 && o(e.username)
        }), $("#chatline").unbind("keydown"), window[CHANNEL.name] && window[CHANNEL.name].chatline && window[CHANNEL.name].chatline.initialized ? $("#chatline").keydown(function(e) {
            function t() {
                function e() {
                    return Math.floor(180 * Math.random() + 75).toString(16)
                }
                switch (window[CHANNEL.name].chatline.setting.type) {
                    case "random":
                        return "#" + e() + e() + e();
                    case "static":
                        return window[CHANNEL.name].chatline.setting.static;
                    case "cycle":
                        return window[CHANNEL.name].chatline.cycleDo()
                }
            } {
                if (13 != e.keyCode) return 9 == e.keyCode ? (chatTabComplete(), e.preventDefault(), !1) : 38 == e.keyCode ? (CHATHISTIDX == CHATHIST.length && CHATHIST.push($("#chatline").val()), CHATHISTIDX > 0 && (CHATHISTIDX--, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : 40 == e.keyCode ? (CHATHISTIDX < CHATHIST.length - 1 && (CHATHISTIDX++, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : void 0;
                if (CHATTHROTTLE) return;
                var n = $("#chatline").val(),
                    o = n.trim().split(/\s+/);
                if (o[0].match(/\/selfclear|\/sclear/)) return Callbacks.clearchat(), void $("#chatline").val("");
                if (o[0] && ("/afkmsg" === o[0].toLowerCase() || "/afkmessage" === o[0].toLowerCase())) return CHATHIST.push($("#chatline").val()), CHATHISTIDX = CHATHIST.length, $("#chatline").val(""), a(n.trim());
                if ("/spoiler" == o[0]) return $("#messagebuffer").data("spoilertype", "hover" === $("#messagebuffer").data("spoilertype") ? "click" : "hover"), $(".image-spoiler").each(function() {
                    $(this).attr("src", $(this).data().spoiler).attr("data-spoiled", "false")
                }), window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your spoiler setting is now: ", $("#messagebuffer").data("spoilertype"), ".")), void $("#chatline").val("");
                if ("/wipesettings" == o[0]) return Object.keys(localStorage).filter(function(e) {
                    return e.match(new RegExp("^" + CHANNEL.name))
                }).each(function(e) {
                    return localStorage.removeItem(e)
                }), window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your channel settings have been wiped.")), void $("#chatline").val("");
                if ("/smartpurge" == o[0]) return CLIENT.rank >= CHANNEL.perms.playlistdelete ? (playlist().filter(function(e) {
                    return !(userlist(!0).indexOf(e.addedby) > -1)
                }).each(function(e) {
                    socket.emit("delete", e.uid)
                }), socket.emit("chatMsg", {
                    msg: String().concat("/me ", "smartpurged the playlist."),
                    meta: {}
                })) : window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "You have insufficient rank to use this.")), void $("#chatline").val("");
                if ("/pm" == o[0]) {
                    o.shift();
                    var i = o.shift();
                    return n = o.join(" ").trim(), userlist(!0).indexOf(i) == -1 ? void window[CHANNEL.name].VirtualWhisper(String().concat("[System] User not found.")) : ($("#pm-" + i).length ? n.length || window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "The PM window is already open retard.")) : initPm(i).find(".panel-heading").click(), n.length && socket.emit("pm", {
                        to: i,
                        msg: n,
                        meta: {}
                    }), void $("#chatline").val(""))
                }
                if (CLIENT.rank >= CHANNEL.perms.playlistmove && 3 == o.length && "/move" == o[0]) return !isNaN(parseInt(o[1])) && parseInt(o[1]) > 0 && parseInt(o[1]) <= $("#queue li").length && !isNaN(parseInt(o[2])) && parseInt(o[2]) > 0 && parseInt(o[2]) <= $("#queue li").length && (parseInt(o[2]) > parseInt(o[1]) ? (socket.emit("chatMsg", {
                    msg: "/me moves a video.",
                    meta: {}
                }), socket.emit("moveMedia", {
                    from: $("#queue li").eq(parseInt(o[1]) - 1).data("uid"),
                    after: $("#queue li").eq(parseInt(o[2]) - 1).data("uid")
                })) : (socket.emit("chatMsg", {
                    msg: "/me moves a video.",
                    meta: {}
                }), socket.emit("moveMedia", {
                    from: $("#queue li").eq(parseInt(o[1]) - 1).data("uid"),
                    after: $("#queue li").eq(parseInt(o[2]) - 2).data("uid")
                }))), void $("#chatline").val("");
                if (CLIENT.rank >= CHANNEL.perms.playlistmove && o.length >= 2 && "/bump" == o[0]) {
                    o.shift();
                    var s, i = o.shift(),
                        r = o.length ? parseInt(o.shift()) : -1;
                    console.log(i, r);
                    var l = $("#queue li").filter(function(e, t) {
                        return $(t).data().blame.toLowerCase() == i.toLowerCase()
                    }).last();
                    if (!l.length) return window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Video by user ", i, " not found.")), void $("#chatline").val("");
                    if (!isNaN(r) && r > 0 && r <= $("#queue li").length) s = $("#queue li").eq(r - 1).data("uid");
                    else {
                        if (r !== -1) return window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Destination doesn't exist.")), void $("#chatline").val("");
                        s = PL_CURRENT
                    }
                    return socket.emit("chatMsg", {
                        msg: "/me moves a video.",
                        meta: {}
                    }), socket.emit("moveMedia", {
                        from: l.data("uid"),
                        after: s
                    }), void $("#chatline").val("")
                }
                if (n.trim()) {
                    var d = {};
                    if (USEROPTS.adminhat && CLIENT.rank >= 255 ? n = "/a " + n : USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (d.modflair = CLIENT.rank), CLIENT.rank >= 2 && 0 === n.indexOf("/m ") && (d.modflair = CLIENT.rank, n = n.substring(3)), maxLength = 220, n.indexOf("ssc:") == -1 && "/" !== n[0] && ">" !== n[0] && n.length < maxLength && window[CHANNEL.name].chatline.toggleState && (n = "ssc:" + t() + "  " + n), n.match(/^\/setcolor/)) return window[CHANNEL.name].chatline.handleSettingsMessage(e, this, n);
                    if (n.match(/^\/tts/)) return window.ttsToggle = !window.ttsToggle, void $("#chatline").val("");
                    socket.emit("chatMsg", {
                        msg: n,
                        meta: d
                    }), CHATHIST.push($("#chatline").val()), CHATHISTIDX = CHATHIST.length, $("#chatline").val("")
                } else if (e.ctrlKey && CHATHIST.length) {
                    if (CLIENT.enterHold) return;
                    CLIENT.enterHold = !0;
                    var n = CHATHIST[CHATHIST.length - 1],
                        d = {};
                    USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (d.modflair = CLIENT.rank), window[CHANNEL.name].chatline.toggleState && (n = "ssc:" + t() + "  " + n), socket.emit("chatMsg", {
                        msg: n,
                        meta: d
                    })
                }
            }
        }) : $("#chatline").keydown(function(e) {
            if (13 != e.keyCode) {
                if (9 == e.keyCode) {
                    try {
                        chatTabComplete()
                    } catch (e) {
                        console.error(e)
                    }
                    return e.preventDefault(), !1
                }
                return 38 == e.keyCode ? (CHATHISTIDX == CHATHIST.length && CHATHIST.push($("#chatline").val()), CHATHISTIDX > 0 && (CHATHISTIDX--, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : 40 == e.keyCode ? (CHATHISTIDX < CHATHIST.length - 1 && (CHATHISTIDX++, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : void 0
            }
            if (!CHATTHROTTLE) {
                var t = $("#chatline").val();
                if (t.trim()) {
                    if (0 === t.toLowerCase().indexOf("/afkmsg ") || 0 === t.toLowerCase().indexOf("/afkmessage ")) return CHATHIST.push($("#chatline").val()), CHATHISTIDX = CHATHIST.length, $("#chatline").val(""), a(t.trim());
                    var n = {};
                    USEROPTS.adminhat && CLIENT.rank >= 255 ? t = "/a " + t : USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (n.modflair = CLIENT.rank), CLIENT.rank >= 2 && 0 === t.indexOf("/m ") && (n.modflair = CLIENT.rank, t = t.substring(3)), socket.emit("chatMsg", {
                        msg: t,
                        meta: n
                    }), CHATHIST.push($("#chatline").val()), CHATHISTIDX = CHATHIST.length, $("#chatline").val("")
                }
            }
        });
        var i = getOpt("afkmsg");
        i && (CLIENT.AFKMSG = i)
    }
}, function(e, t) {
    /*!
     **|  CyTube Audio Notifications System
     **|  Copyright 2013-2015 Xaekai
     **|
     **@preserve
     */
    window[CHANNEL.name] || (window[CHANNEL.name] = {}), $("#customSettingsStaging").length || $("<div/>").prop("id", "customSettingsStaging").hide().insertAfter("#useroptions"), window[CHANNEL.name].audioNotice || (window[CHANNEL.name].audioNotice = {}, window[CHANNEL.name].audioNotice.Squee = {
            timeSinceLast: 0
        }, window[CHANNEL.name].audioNotice.Poll = {
            timeSinceLast: 0
        }, window[CHANNEL.name].audioNotice.Priv = {
            timeSinceLast: 0
        }, window[CHANNEL.name].audioNotice.Video = {
            timeSinceLast: 0
        }), window[CHANNEL.name].audioNotice.typeNames = {
            Squee: "Username",
            Poll: "Poll",
            Priv: "Private Message",
            Video: "Queued Video"
        }, window[CHANNEL.name].audioNotice.pushNoticeChange = function(e) {
            var t, n, o;
            t = e.type, n = e.id, o = e.silent, window[CHANNEL.name].audioNotice[t].id = n, window[CHANNEL.name].audioNotice[t].file = window[CHANNEL.name].audioNotice.choices[n], localStorage[CHANNEL.name + "_AudioNotice" + t + "ID"] = n, $("#AudioNotice" + this.typeNames[t].split(" ")[0]).remove(), window[CHANNEL.name].audioNotice[t].audio = $("<audio>").prop("id", "AudioNotice" + this.typeNames[t].split(" ")[0]).appendTo("body").attr("preload", "auto").prop("volume", window[CHANNEL.name].audioNotice[t].volume).append($("<source>").attr("src", window[CHANNEL.name].audioNotice[t].file).attr("type", "audio/ogg")), o || (window[CHANNEL.name].audioNotice[t].audio[0].play(), $("div.chat-msg-\\\\\\$server\\\\\\$:contains(" + this.typeNames[t] + " Notification)").remove(), window[CHANNEL.name].VirtualWhisper(this.typeNames[t] + " Notification Changed to: " + n))
        }, window[CHANNEL.name].audioNotice.pushVolume = function(e) {
            var t, n;
            if (t = e.type, "up" == (n = e.volume)) n = (100 * window[CHANNEL.name].audioNotice[t].volume + 5) / 100;
            else {
                if ("down" != n) return console.error("ERROR: AudioNotice System: Volume must be 'up' or 'down'");
                n = (100 * window[CHANNEL.name].audioNotice[t].volume - 5) / 100
            }
            n = Math.min(Math.max(n, .05), 1) || .6, window[CHANNEL.name].audioNotice[t].volume = n, localStorage[CHANNEL.name + "_AudioNotice" + t + "Volume"] = Math.floor(100 * n), window[CHANNEL.name].audioNotice[t].audio.prop("volume", n)[0].play(), window[CHANNEL.name].audioNotice[t].indicator && window[CHANNEL.name].audioNotice[t].indicator.html(Math.floor(100 * n))
        }, window[CHANNEL.name].audioNotice.toggle = function(e) {
            window[CHANNEL.name].audioNotice[e].toggleState = !window[CHANNEL.name].audioNotice[e].toggleState, localStorage[CHANNEL.name + "_AudioNotice" + e + "Toggle"] = +window[CHANNEL.name].audioNotice[e].toggleState, window[CHANNEL.name].audioNotice[e].toggleButton && window[CHANNEL.name].audioNotice[e].toggleButton.toggleClass("label-default label-info"), window[CHANNEL.name].audioNotice[e].panel.toggleClass("btn-danger btn-success")
        }, window[CHANNEL.name].audioNotice.handler = {
            Squee: function(e) {
                var t;
                if (window[CHANNEL.name].audioNotice.Squee.toggleState && e.username != CHANNEL.bot) {
                    if (!CHANNEL.opts.chat_antiflood) return void console.info();
                    if (!(Date.now() - window[CHANNEL.name].audioNotice.Squee.timeSinceLast < 7e3) && (t = $(".nick-highlight:not( .parsed )"), t.length)) {
                        t.addClass("parsed");
                        var n = Date.parse("2015-10-31T04:00:00Z"),
                            o = Date.parse("2015-11-01T04:00:00Z"),
                            a = Date.now();
                        a > n && o > a ? function() {
                            toot = new Audio("/skulltrumpet.wav"), toot.volume = .33, toot.play()
                        }() : window[CHANNEL.name].audioNotice.Squee.audio[0].play(), window[CHANNEL.name].audioNotice.Squee.timeSinceLast = Date.now()
                    }
                }
            },
            Poll: function(e) {
                window[CHANNEL.name].audioNotice.Poll.toggleState && (CLIENT.rank < CHANNEL.perms.pollvote || Date.now() - window[CHANNEL.name].audioNotice.Poll.timeSinceLast < 36e4 || (window[CHANNEL.name].audioNotice.Poll.audio[0].play(), window[CHANNEL.name].audioNotice.Poll.timeSinceLast = Date.now()))
            },
            Priv: function(e) {
                window[CHANNEL.name].audioNotice.Priv.toggleState && e.username != CLIENT.name && e.username != CHANNEL.bot && ($(document.activeElement).hasClass("pm-input") || Date.now() - window[CHANNEL.name].audioNotice.Priv.timeSinceLast < 18e4 || (window[CHANNEL.name].audioNotice.Priv.audio[0].play(), window[CHANNEL.name].audioNotice.Priv.timeSinceLast = Date.now(), $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Private Message Notification)").remove(), window[CHANNEL.name].VirtualWhisper("Private Message Notification")))
            },
            Video: function(e) {
                var t;
                if (window[CHANNEL.name].audioNotice.Video.toggleState && !(CLIENT.rank < CHANNEL.perms.seeplaylist)) {
                    if ((t = playlist(!0).addedby == CLIENT.name) && window[CHANNEL.name].audioNotice.Video.last) return void(window[CHANNEL.name].audioNotice.Video.timeSinceLast = Date.now());
                    window[CHANNEL.name].audioNotice.Video.last = !1, t && (Date.now() - window[CHANNEL.name].audioNotice.Video.timeSinceLast < 6e5 || (window[CHANNEL.name].audioNotice.Video.audio[0].play(), window[CHANNEL.name].audioNotice.Video.timeSinceLast = Date.now(), window[CHANNEL.name].audioNotice.Video.last = !0, $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Video Notification)").remove(), window[CHANNEL.name].VirtualWhisper("Video Notification: Your video is now playing!")))
                }
            }
        },
        function() {
            if (!window[CHANNEL.name].audioNotice.initialized) {
                if (window[CHANNEL.name].audioNotice.initialized = !0, window[CHANNEL.name].audioNotice.Squee.toggleState = !0, window[CHANNEL.name].audioNotice.Poll.toggleState = !0, window[CHANNEL.name].audioNotice.Priv.toggleState = !0, window[CHANNEL.name].audioNotice.Video.toggleState = !0, window[CHANNEL.name].audioNotice.Squee.id = "squee", window[CHANNEL.name].audioNotice.Poll.id = "votingpoll", window[CHANNEL.name].audioNotice.Priv.id = "uhoh", window[CHANNEL.name].audioNotice.Video.id = "fairywand", window[CHANNEL.name].audioNotice.Squee.volume = .6, window[CHANNEL.name].audioNotice.Poll.volume = .3, window[CHANNEL.name].audioNotice.Priv.volume = .35, window[CHANNEL.name].audioNotice.Video.volume = .35, window[CHANNEL.name].audioLibrary ? window[CHANNEL.name].audioNotice.choices = window[CHANNEL.name].audioLibrary.squees : window[CHANNEL.name].audioNotice.choices = {
                        squee: "https://resources.pink.horse/sounds/squee.ogg",
                        votingpoll: "https://resources.pink.horse/sounds/votingpoll.ogg",
                        uhoh: "https://resources.pink.horse/sounds/uhoh.ogg",
                        fairywand: "https://resources.pink.horse/sounds/fairy_wand.ogg"
                    }, window[CHANNEL.name] && window[CHANNEL.name].modulesOptions && window[CHANNEL.name].modulesOptions.audioNotice) {
                    for (var e = Object.keys(window[CHANNEL.name].modulesOptions.audioNotice.choices), t = Object.keys(window[CHANNEL.name].modulesOptions.audioNotice.notices), n = e.length - 1; n >= 0; n--) window[CHANNEL.name].audioNotice.choices[e[n]] = window[CHANNEL.name].modulesOptions.audioNotice.choices[e[n]];
                    for (var n = t.length - 1; n >= 0; n--) window[CHANNEL.name].audioNotice[t[n]].id = window[CHANNEL.name].modulesOptions.audioNotice.notices[t[n]]
                }
                var o = Object.keys(window[CHANNEL.name].audioNotice.typeNames);
                if ("undefined" != typeof Storage)
                    for (var n = o.length - 1; n >= 0; n--) void 0 != localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "Toggle"] && (window[CHANNEL.name].audioNotice[o[n]].toggleState = parseInt(localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "Toggle"])), void 0 != localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "ID"] && (window[CHANNEL.name].audioNotice[o[n]].id = localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "ID"]), void 0 != localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "Volume"] && (window[CHANNEL.name].audioNotice[o[n]].volume = parseInt(localStorage[CHANNEL.name + "_AudioNotice" + o[n] + "Volume"]) / 100 || .6), window[CHANNEL.name].audioNotice.pushNoticeChange({
                        type: o[n],
                        id: window[CHANNEL.name].audioNotice[o[n]].id,
                        silent: !0
                    });
                else console.log("ERROR: AudioNotice System: Local storage not supported by this browser.");
                window[CHANNEL.name].audioNotice.Squee.toggleButton = $("<span/>").html('Sq<span class="toggle-label">uee</span>').prop("id", "AudioNoticeSqueeToggle").attr("title", "Toggle Username Audio Notices").addClass("pointer label label-info pull-right").click(function() {
                    window[CHANNEL.name].audioNotice.toggle("Squee")
                }).appendTo($("#chatheader")), window[CHANNEL.name].audioNotice.Squee.toggleState || window[CHANNEL.name].audioNotice.Squee.toggleButton.removeClass("label-info").addClass("label-default"), socket.on("chatMsg", function(e) {
                    return window[CHANNEL.name].audioNotice.handler.Squee(e)
                }), socket.on("newPoll", function(e) {
                    return window[CHANNEL.name].audioNotice.handler.Poll(e)
                }), socket.on("pm", function(e) {
                    return window[CHANNEL.name].audioNotice.handler.Priv(e)
                }), socket.on("changeMedia", function(e) {
                    return window[CHANNEL.name].audioNotice.handler.Video(e)
                }), console.log("INFO: AudioNotice System Initialized"), window[CHANNEL.name].audioNotice.controls = $('<div id="AudioNoticeControls" class="customSettings" data-title="Audio Notifications Settings"/>').appendTo("#customSettingsStaging");
                for (var n = 0; n < o.length; n++) {
                    var a = o[n];
                    ! function() {
                        var e = $("<form>").prop("action", "javascript:void(0)").addClass("form-horizontal"),
                            t = $("<div>").addClass("form-group").prop("id", "AudioNoticeControls" + a).appendTo(e);
                        window[CHANNEL.name].audioNotice.controls.append(e), $("<span>").addClass("label label-info col-sm-2").text(window[CHANNEL.name].audioNotice.typeNames[a] + " Notice").appendTo(t);
                        var n = $("<div>").addClass("btn-group col-sm-4").attr("data-control", a).appendTo(t),
                            o = $("<button/>").prop("id", "AudioNoticeControls" + a + "Toggle").addClass("btn btn-sm btn-success").attr("title", "Toggle " + window[CHANNEL.name].audioNotice.typeNames[a] + " Notices").html('<span class="glyphicon glyphicon-bell"></span>').click(function() {
                                window[CHANNEL.name].audioNotice.toggle($(this).parent().data().control)
                            }).prependTo(n);
                        window[CHANNEL.name].audioNotice[a].panel = o, window[CHANNEL.name].audioNotice[a].toggleState || o.toggleClass("btn-success btn-danger");
                        var i = $("<div/>").addClass("btn-group").prop("id", "AudioNoticeControls" + a + "Sounds").appendTo(n);
                        $("<button/>").prop("id", "AudioNoticeControls" + a + "VolumeDown").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[a] + " Volume Down").click(function() {
                            window[CHANNEL.name].audioNotice.pushVolume({
                                type: $(this).parent().data().control,
                                volume: "down"
                            })
                        }).html('<span class="glyphicon glyphicon-volume-down"></span>').appendTo(n), window[CHANNEL.name].audioNotice[a].indicator = $("<button/>").prop("id", "AudioNoticeControls" + a + "Indicator").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[a] + " Volume").html(100 * window[CHANNEL.name].audioNotice[a].volume).appendTo(n), $("<button/>").prop("id", "AudioNoticeControls" + a + "VolumeUp").addClass("btn btn-sm btn-default").attr("title", window[CHANNEL.name].audioNotice.typeNames[a] + " Volume Up").click(function() {
                            window[CHANNEL.name].audioNotice.pushVolume({
                                type: $(this).parent().data().control,
                                volume: "up"
                            })
                        }).html('<span class="glyphicon glyphicon-volume-up"></span>').appendTo(n), $("<button/>").prop("id", "AudioNoticeControls" + a + "Play").addClass("btn btn-sm btn-default").attr("title", "Play Notification").click(function() {
                            window[CHANNEL.name].audioNotice[$(this).parent().data().control].audio[0].play()
                        }).html('<span class="glyphicon glyphicon-play"></span>').appendTo(n), $("<button/>").addClass("btn btn-default btn-sm dropdown-toggle").attr("type", "button").attr("href", "javascript:void(0)").attr("data-toggle", "dropdown").html("<span class='glyphicon glyphicon-music'></span> Sound <span class='caret'></span>").appendTo(i);
                        for (var s = $("<ul/>").addClass("dropdown-menu").addClass("columns").attr("role", "menu").appendTo(i), r = Object.keys(window[CHANNEL.name].audioNotice.choices), l = 0; l < r.length; l++) {
                            key = r[l];
                            var d = $("<li/>").appendTo(s);
                            ! function(e) {
                                $("<a/>").text(key).attr("href", "javascript:void(0)").attr("data-notice", key).attr("data-type", a).click(function() {
                                    console.log($(this).data().type, $(this).data().notice), window[CHANNEL.name].audioNotice.pushNoticeChange({
                                        type: $(this).data().type,
                                        id: $(this).data().notice,
                                        silent: !1
                                    })
                                }).appendTo(d)
                            }()
                        }
                    }()
                }
            }
        }()
}, function(e, t) {
    var n;
    /*!
     **|  Audio File Library for CyTube Scripts
     **|  Written by Xaekai
     **|
     **@preserve
     */
    window[CHANNEL.name].audioLibrary || (window[CHANNEL.name].audioLibrary = {}), window[CHANNEL.name].audioLibrary.sounds = (n = {
        boku: {
            url: "https://fuckings.top/audio/boku.ogg",
            emote: !1,
            squee: !0
        },
        chen: {
            url: "https://drowngaben.x10.mx/unused/bikehorn.ogg",
            emote: !1,
            squee: !0
        },
        cuffy: {
            url: "https://www.myinstants.com/media/sounds/go-fuck-yrself_1.mp3",
            emote: !1,
            squee: !0
        },
        doorstuck: {
            url: "https://www.myinstants.com/media/sounds/door-stuck-door-stuck.mp3",
            emote: !1,
            squee: !0
        },
        doot: {
            url: "https://drowngaben.x10.mx/unused/dootdoot.mp3",
            emote: !1,
            squee: !0
        },
        duckgif: {
            url: "https://www.myinstants.com/media/sounds/quack_5.mp3",
            emote: !1,
            squee: !0
        },
        dundun: {
            url: "https://www.myinstants.com/media/sounds/dun_dun_1.mp3",
            emote: !1,
            squee: !0
        },
        EXCELLENT: {
            url: "https://www.myinstants.com/media/sounds/excellent.mp3",
            emote: !1,
            squee: !0
        },
        falco: {
            url: "https://www.myinstants.com/media/sounds/falco1e.mp3",
            emote: !1,
            squee: !0
        },
        fuckyoudonte: {
            url: "https://www.myinstants.com/media/sounds/dmc-fuck-you-1.mp3",
            emote: !1,
            squee: !0
        },
        gabedog: {
            url: "https://www.myinstants.com/media/sounds/gabe-bark.mp3",
            emote: !1,
            squee: !0
        },
        GOH: {
            url: "https://www.myinstants.com/media/sounds/go_3.mp3",
            emote: !1,
            squee: !0
        },
        hesaid: {
            url: "https://fuckings.top/audio/hesaidforyou.ogg",
            emote: !1,
            squee: !0
        },
        heylisten: {
            url: "https://www.myinstants.com/media/sounds/hey_listen.mp3",
            emote: !1,
            squee: !0
        },
        inception: {
            url: "https://www.myinstants.com/media/sounds/inceptionbutton.mp3",
            emote: !1,
            squee: !0
        },
        highnoon: {
            url: "https://www.myinstants.com/media/sounds/its-high-noon.mp3",
            emote: !1,
            squee: !0
        },
        kefka: {
            url: "https://www.myinstants.com/media/sounds/kefkas-laugh.mp3",
            emote: !1,
            squee: !0
        },
        Krogan: {
            url: "https://www.myinstants.com/media/sounds/deez-nuts-got-eem-original-vine-mp3cut.mp3",
            emote: !1,
            squee: !0
        },
        mgsalert: {
            url: "https://www.myinstants.com/media/sounds/metalgearsolid.swf.mp3",
            emote: !1,
            squee: !0
        },
        mgscodec: {
            url: "https://www.myinstants.com/media/sounds/codec.mp3",
            emote: !1,
            squee: !0
        },
        newtypeflash: {
            url: "https://www.myinstants.com/media/sounds/gundam-newtype-flash-sound-effect.mp3",
            emote: !1,
            squee: !0
        },
        nootnoot: {
            url: "https://www.myinstants.com/media/sounds/noot-noot.mp3",
            emote: !1,
            squee: !0
        },
        nopeavi: {
            url: "https://www.myinstants.com/media/sounds/engineer_no01.mp3",
            emote: !1,
            squee: !0
        },
        ifistopvapingifuckingdie: {
            url: "https://www.myinstants.com/media/sounds/vapecon_bdcw1q3.mp3",
            emote: !1,
            squee: !0
        },
        ps3: {
            url: "https://www.myinstants.com/media/sounds/ps3-trophy-sound-effect.mp3",
            emote: !1,
            squee: !0
        },
        wilhelm: {
            url: "https://www.myinstants.com/media/sounds/wilhelmscream.mp3",
            emote: !1,
            squee: !0
        },
        xperror: {
            url: "https://www.myinstants.com/media/sounds/erro.mp3",
            emote: !1,
            squee: !0
        },
        wololo: {
            url: "https://www.myinstants.com/media/sounds/sound-9.mp3",
            emote: !1,
            squee: !0
        },
        wryyyyyy: {
            url: "https://www.myinstants.com/media/sounds/wryyyyyy.mp3",
            emote: !1,
            squee: !0
        },
        yee: {
            url: "https://www.myinstants.com/media/sounds/yee_2.mp3",
            emote: !1,
            squee: !0
        },
        YOOOOOOOO: {
            url: "https://www.myinstants.com/media/sounds/butthurt-desk_1.mp3",
            emote: !1,
            squee: !0
        },
        nuke: {
            url: "https://www.myinstants.com/media/sounds/nuclear-launch.mp3",
            emote: !1,
            squee: !0
        },
        cuntpizzayoubetterfuckingusethis: {
            url: "https://www.myinstants.com/media/sounds/david-oohwahahahah.mp3",
            emote: !1,
            squee: !0
        },
        pkmnheal: {
            url: "https://fuckings.top/audio/pkmncenter.ogg",
            emote: !1,
            squee: !0
        },
        pylons: {
            url: "https://www.myinstants.com/media/sounds/null-you_must_construct_additional_pylons.mp3",
            emote: !1,
            squee: !0
        },
        weed: {
            url: "https://www.myinstants.com/media/sounds/snoop-dogg-smoke-weed-everyday.mp3",
            emote: !1,
            squee: !0
        },
        zergling: {
            url: "www.hazmatt.net/gaming/starcraft/zerg/units/zergling/zzerdy00.wav",
            emote: !1,
            squee: !0
        },
        awoo: {
            url: "https://www.myinstants.com/media/sounds/awoo-.mp3",
            emote: !1,
            squee: !0
        },
        surprise: {
            url: "https://resources.pink.horse/sounds/surprise.ogg",
            emote: !1,
            squee: !0
        },
        dayum: {
            url: "https://resources.pink.horse/sounds/dayum.ogg",
            emote: !1,
            squee: !0
        },
        airhorn: {
            url: "https://resources.pink.horse/sounds/airhorn.mp3",
            emote: !0,
            squee: !0
        },
        blop: {
            url: "https://resources.pink.horse/sounds/blop.ogg",
            emote: !1,
            squee: !0
        },
        damnson: {
            url: "https://resources.pink.horse/sounds/damnson.ogg",
            emote: !0,
            squee: !0
        },
        dog1: {
            url: "https://resources.pink.horse/sounds/dog1.ogg",
            emote: !0,
            squee: !0
        },
        fairywand: {
            url: "https://resources.pink.horse/sounds/fairy_wand.ogg",
            emote: !1,
            squee: !0
        },
        hankhill: {
            url: "https://resources.pink.horse/sounds/hankhill.ogg",
            emote: !0,
            squee: !0
        },
        hitmarker: {
            url: "https://resources.pink.horse/sounds/hitmarker.mp3",
            emote: !0,
            squee: !1
        },
        howcould: {
            url: "https://resources.pink.horse/sounds/howcouldthishappen.ogg",
            emote: !0,
            squee: !1
        },
        mcguirk: {
            url: "https://resources.pink.horse/sounds/mcguirk.ogg",
            emote: !0,
            squee: !0
        },
        meatball: {
            url: "https://resources.pink.horse/sounds/hobo_meatball.ogg",
            emote: !0,
            squee: !0
        },
        nigga: {
            url: "https://resources.pink.horse/sounds/coming_for_you.ogg",
            emote: !0,
            squee: !0
        },
        present: {
            url: "https://resources.pink.horse/sounds/present4ya.ogg",
            emote: !0,
            squee: !0
        },
        raininside: {
            url: "https://resources.pink.horse/sounds/rain_inside.ogg",
            emote: !1,
            squee: !1
        },
        smokeweed: {
            url: "https://resources.pink.horse/sounds/smokeweed.ogg",
            emote: !0,
            squee: !0
        },
        icq2003_incomingim: {
            url: "https://resources.pink.horse/sounds/ICQ2003_Message.wav",
            emote: !1,
            squee: !0
        },
        icq2003_typing: {
            url: "https://resources.pink.horse/sounds/ICQ2003_MsgType.wav",
            emote: !1,
            squee: !0
        },
        icq2008_incomingim: {
            url: "https://resources.pink.horse/sounds/ICQ2008_IncomingIM.mp3",
            emote: !1,
            squee: !0
        },
        icq2008_outgoingim: {
            url: "https://resources.pink.horse/sounds/ICQ2008_OutgoingIM.mp3",
            emote: !1,
            squee: !0
        },
        icq2008_typing: {
            url: "https://resources.pink.horse/sounds/ICQ2008_TypingIM.wav",
            emote: !1,
            squee: !0
        }
    }, n.airhorn = {
        url: "https://www.myinstants.com/media/sounds/airhorn.mp3",
        emote: !0,
        squee: !0
    }, n.sandstorm = {
        url: "https://upload.wikimedia.org/wikipedia/en/3/3f/Darude_-_Sandstorm.ogg",
        emote: !0,
        squee: !1
    }, n.wahaha = {
        url: "https://github.com/panzi/Browser-Ponies/raw/gh-pages/ponies/rarity/wahahaha.ogg",
        emote: !0,
        squee: !0
    }, n.ut_mousehole = {
        url: "https://resources.pink.horse/sounds/undertale_mousehole.ogg",
        emote: !0,
        squee: !0
    }, n.votingpoll = {
        url: "https://resources.pink.horse/sounds/votingpoll.ogg",
        emote: !0,
        squee: !0
    }, n.uhoh = {
        url: "https://resources.pink.horse/sounds/uhoh.ogg",
        emote: !0,
        squee: !0
    }, n.squish = {
        url: "https://resources.pink.horse/sounds/squish.ogg",
        emote: !0,
        squee: !0
    }, n), window[CHANNEL.name].audioLibrary.squees = function() {
        for (var e = Object.keys(window[CHANNEL.name].audioLibrary.sounds), t = {}, n = e.length - 1; n >= 0; n--) {
            var o = window[CHANNEL.name].audioLibrary.sounds[e[n]];
            o.squee && (t[e[n]] = o.url)
        }
        return t
    }(), window[CHANNEL.name].audioLibrary.emotes = function() {
        for (var e = Object.keys(window[CHANNEL.name].audioLibrary.sounds), t = {}, n = e.length - 1; n >= 0; n--) {
            var o = window[CHANNEL.name].audioLibrary.sounds[e[n]];
            o.emote && (t[e[n]] = new Audio(o.url))
        }
        return t
    }()
}, function(e, t) {
    window.tts = function(e) {
        if (window.ttsToggle || $("#forcetts").length) {
            var t = e.msg.replace(/<img class="channel-emote" src=".*?" title=":(.{1,40}):"[^>]*>/g, "$1").replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/<.*?>/g, "");
            new Audio("https://tts.cyzon.us/tts?text=" + encodeURIComponent(function(e) {
                return e.replace(/&#?(\w+);/g, function(e, t) {
                    return isNaN(t) && (chars = {
                        quot: 34,
                        amp: 38,
                        lt: 60,
                        gt: 62,
                        nbsp: 160,
                        copy: 169,
                        reg: 174,
                        deg: 176,
                        frasl: 47,
                        trade: 8482,
                        euro: 8364,
                        Agrave: 192,
                        Aacute: 193,
                        Acirc: 194,
                        Atilde: 195,
                        Auml: 196,
                        Aring: 197,
                        AElig: 198,
                        Ccedil: 199,
                        Egrave: 200,
                        Eacute: 201,
                        Ecirc: 202,
                        Euml: 203,
                        Igrave: 204,
                        Iacute: 205,
                        Icirc: 206,
                        Iuml: 207,
                        ETH: 208,
                        Ntilde: 209,
                        Ograve: 210,
                        Oacute: 211,
                        Ocirc: 212,
                        Otilde: 213,
                        Ouml: 214,
                        times: 215,
                        Oslash: 216,
                        Ugrave: 217,
                        Uacute: 218,
                        Ucirc: 219,
                        Uuml: 220,
                        Yacute: 221,
                        THORN: 222,
                        szlig: 223,
                        agrave: 224,
                        aacute: 225,
                        acirc: 226,
                        atilde: 227,
                        auml: 228,
                        aring: 229,
                        aelig: 230,
                        ccedil: 231,
                        egrave: 232,
                        eacute: 233,
                        ecirc: 234,
                        euml: 235,
                        igrave: 236,
                        iacute: 237,
                        icirc: 238,
                        iuml: 239,
                        eth: 240,
                        ntilde: 241,
                        ograve: 242,
                        oacute: 243,
                        ocirc: 244,
                        otilde: 245,
                        ouml: 246,
                        divide: 247,
                        oslash: 248,
                        ugrave: 249,
                        uacute: 250,
                        ucirc: 251,
                        uuml: 252,
                        yacute: 253,
                        thorn: 254,
                        yuml: 255,
                        lsquo: 8216,
                        rsquo: 8217,
                        sbquo: 8218,
                        ldquo: 8220,
                        rdquo: 8221,
                        bdquo: 8222,
                        dagger: 8224,
                        Dagger: 8225,
                        permil: 8240,
                        lsaquo: 8249,
                        rsaquo: 8250,
                        spades: 9824,
                        clubs: 9827,
                        hearts: 9829,
                        diams: 9830,
                        oline: 8254,
                        larr: 8592,
                        uarr: 8593,
                        rarr: 8594,
                        darr: 8595,
                        hellip: 133,
                        ndash: 150,
                        mdash: 151,
                        iexcl: 161,
                        cent: 162,
                        pound: 163,
                        curren: 164,
                        yen: 165,
                        brvbar: 166,
                        brkbar: 166,
                        sect: 167,
                        uml: 168,
                        die: 168,
                        ordf: 170,
                        laquo: 171,
                        not: 172,
                        shy: 173,
                        macr: 175,
                        hibar: 175,
                        plusmn: 177,
                        sup2: 178,
                        sup3: 179,
                        acute: 180,
                        micro: 181,
                        para: 182,
                        middot: 183,
                        cedil: 184,
                        sup1: 185,
                        ordm: 186,
                        raquo: 187,
                        frac14: 188,
                        frac12: 189,
                        frac34: 190,
                        iquest: 191,
                        Alpha: 913,
                        alpha: 945,
                        Beta: 914,
                        beta: 946,
                        Gamma: 915,
                        gamma: 947,
                        Delta: 916,
                        delta: 948,
                        Epsilon: 917,
                        epsilon: 949,
                        Zeta: 918,
                        zeta: 950,
                        Eta: 919,
                        eta: 951,
                        Theta: 920,
                        theta: 952,
                        Iota: 921,
                        iota: 953,
                        Kappa: 922,
                        kappa: 954,
                        Lambda: 923,
                        lambda: 955,
                        Mu: 924,
                        mu: 956,
                        Nu: 925,
                        nu: 957,
                        Xi: 926,
                        xi: 958,
                        Omicron: 927,
                        omicron: 959,
                        Pi: 928,
                        pi: 960,
                        Rho: 929,
                        rho: 961,
                        Sigma: 931,
                        sigma: 963,
                        Tau: 932,
                        tau: 964,
                        Upsilon: 933,
                        upsilon: 965,
                        Phi: 934,
                        phi: 966,
                        Chi: 935,
                        chi: 967,
                        Psi: 936,
                        psi: 968,
                        Omega: 937,
                        omega: 969
                    }, void 0 !== chars[t] && (t = chars[t])), String.fromCharCode(t)
                })
            }(t))).play()
        }
    }, window.ttsLoaded || (window.ttsLoaded = !0, window.ttsToggle = !1, socket.on("chatMsg", function(e) {
        return window.tts(e)
    })), window[CHANNEL.name] || (window[CHANNEL.name] = {}), window[CHANNEL.name].chatline || (window[CHANNEL.name].chatline = {}), window[CHANNEL.name].chatline.cycleDo = function() {
        var e = this.setting.cycle[this.setting.cycleState];
        return this.setting.cycleState++, this.setting.cycleState = this.setting.cycleState < this.setting.cycle.length && this.setting.cycleState || 0, e
    }, window[CHANNEL.name].chatline.handleStaticColorSet = function(e) {
        var t = this.setting;
        return t.type = "static", t.static = e, window[CHANNEL.name].VirtualWhisper("Chatline: Static color changed to " + e), window[CHANNEL.name].chatline.propagate(t)
    }, window[CHANNEL.name].chatline.handleCycleColorReset = function(e) {
        var t = this.setting;
        return t.type = "cycle", t.cycle.length = 0, t.cycle.push(e), window[CHANNEL.name].VirtualWhisper("Chatline: Cycle wiped and populated with " + e), window[CHANNEL.name].chatline.propagate(t)
    }, window[CHANNEL.name].chatline.handleCycleColorAppend = function(e) {
        var t = this.setting;
        return t.type = "cycle", t.cycle.push(e), window[CHANNEL.name].VirtualWhisper("Chatline: Cycle push " + e), window[CHANNEL.name].chatline.propagate(t)
    }, window[CHANNEL.name].chatline.handleTypeSet = function(e) {
        var t = this.setting;
        return t.type = e, $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Color type)").remove(), window[CHANNEL.name].VirtualWhisper("Chatline: Color type changed to " + e), window[CHANNEL.name].chatline.propagate(t)
    }, window[CHANNEL.name].chatline.handleCycleColorSet = function(e) {
        var t = this.setting;
        t.type = "cycle", t.cycle = e, window[CHANNEL.name].chatline.propagate(t)
    }, window[CHANNEL.name].chatline.propagate = function(e) {
        this.setting = e, localStorage[CHANNEL.name + "_chatlineSetting"] = JSON.stringify(e)
    }, window[CHANNEL.name].chatline.handleSettingsMessage = function(e, t, n) {
        $(t).val("");
        var o = n.replace(/\/setcolor ?/, ""),
            a = this.setting;
        if (console.log("Chatline: Current settings:" + JSON.stringify(a)), o.match(/toggle/) && window[CHANNEL.name].chatline.toggle(), o.match(/type|mode/) && (o = o.replace(/type |mode /, "").trim(), o.match(/(static|cycle|random)$/))) return window[CHANNEL.name].chatline.handleTypeSet(o);
        if (o.match(/static/) && (o = o.replace(/static ?/, "").trim(), "" == o && this.handleSettingsMessage(e, t, "/setcolor type static"), o.match(/#?([a-f0-9]{3}|[a-f0-9]{6})/i))) return a.static = o, window[CHANNEL.name].VirtualWhisper("Chatline: Static color changed to " + o), window[CHANNEL.name].chatline.propagate(a);
        if (o.match(/cycle/)) {
            o = o.replace(/cycle ?/, "").trim().toLowerCase(), "" == o && this.handleSettingsMessage(e, t, "/setcolor type cycle");
            var i = JSON.parse(o);
            if (i.constructor === Array && i.length > 0) return a.cycle = i, a.cycleState = 0, window[CHANNEL.name].VirtualWhisper("Chatline: Cycle changed to " + o), window[CHANNEL.name].chatline.propagate(a)
        }
    }, window[CHANNEL.name].chatline.toggle = function() {
        window[CHANNEL.name].chatline.toggleState ? (window[CHANNEL.name].chatline.toggleState = !1, window[CHANNEL.name].chatline.toggleButton.addClass("label-default").removeClass("label-info"), window[CHANNEL.name].chatline.toggleButtonPanel && window[CHANNEL.name].chatline.toggleButtonPanel.addClass("btn-danger").removeClass("btn-success"), localStorage[CHANNEL.name + "_chatlineToggle"] = 0) : (window[CHANNEL.name].chatline.toggleState = !0, window[CHANNEL.name].chatline.toggleButton.removeClass("label-default").addClass("label-info"), window[CHANNEL.name].chatline.toggleButtonPanel && window[CHANNEL.name].chatline.toggleButtonPanel.removeClass("btn-danger").addClass("btn-success"), localStorage[CHANNEL.name + "_chatlineToggle"] = 1)
    }, window[CHANNEL.name].chatline.fontSize = function(e) {
        var t = this.setting;
        if (isNaN(t.size) && (t.size = 1), "up" == e.change) t.size = Math.min(10 * t.size + 1, 25) / 10;
        else {
            if ("down" != e.change) return;
            t.size = Math.max(10 * t.size - 1, 4) / 10
        }
        return window[CHANNEL.name].chatline.updateStyleSheet(t.size), window[CHANNEL.name].chatline.propagate(t, !0), $("div.chat-msg-\\\\\\$server\\\\\\$:contains(Font size)").remove(), window[CHANNEL.name].VirtualWhisper("Chatline: Font size modifier changed to " + t.size + "em.")
    }, window[CHANNEL.name].chatline.css = "#messagebuffer div {    font-size: __MODem}", window[CHANNEL.name].chatline.updateStyleSheet = function(e) {
        var t = this.css.replace(/__MOD/, e);
        this.styleSheet.text(t)
    }, window[CHANNEL.name].chatline.initialized || (window[CHANNEL.name].chatline.initialized = !0, window[CHANNEL.name].chatline.toggleState = !1, window[CHANNEL.name].chatline.cycleState = 0, window[CHANNEL.name].chatline.setting || (window[CHANNEL.name].chatline.setting = {
        type: "static",
        static: "lightgrey",
        cycle: ["orange", "yellow", "lime"],
        size: 1
    }), "undefined" != typeof Storage ? ($(window).on("unload.chathistory", function() {
        localStorage[CHANNEL.name + "_CHATHIST"] = JSON.stringify(CHATHIST.slice(CHATHIST.length > 100 ? CHATHIST.length - 100 : 0, CHATHIST.length))
    }), void 0 !== localStorage[CHANNEL.name + "_CHATHIST"] && (window.CHATHIST = JSON.parse(localStorage[CHANNEL.name + "_CHATHIST"]), window.CHATHISTIDX = CHATHIST.length), void 0 === localStorage[CHANNEL.name + "_chatlineToggle"] ? localStorage[CHANNEL.name + "_chatlineToggle"] = 0 : window[CHANNEL.name].chatline.toggleState = parseInt(localStorage[CHANNEL.name + "_chatlineToggle"]), void 0 === localStorage[CHANNEL.name + "_chatlineSetting"] ? localStorage[CHANNEL.name + "_chatlineSetting"] = JSON.stringify(window[CHANNEL.name].chatline.setting) : (window[CHANNEL.name].chatline.setting = JSON.parse(localStorage[CHANNEL.name + "_chatlineSetting"]), window[CHANNEL.name].chatline.setting || (window[CHANNEL.name].chatline.setting = {
        type: "random",
        static: "grey",
        cycle: ["orange", "yellow", "lime"]
    }))) : console.log("ERROR: Local storage not supported by this browser."), window[CHANNEL.name].chatline.toggleButton = $("<span/>").html('C<span class="toggle-label">hat </span>C<span class="toggle-label">olor</span>').prop("id", "ChatcolorToggle").attr("title", "Toggle Chat Coloring").addClass("pointer label label-info pull-right").appendTo($("#chatheader")).click(window[CHANNEL.name].chatline.toggle), window[CHANNEL.name].chatline.toggleState || window[CHANNEL.name].chatline.toggleButton.removeClass("label-info").addClass("label-default"), window[CHANNEL.name].chatline.styleSheet = $("<style>").prop("id", "chatlineStyle").attr("type", "text/css").appendTo("head"), isNaN(window[CHANNEL.name].chatline.setting.size) && (window[CHANNEL.name].chatline.setting.size = 1), window[CHANNEL.name].chatline.updateStyleSheet(window[CHANNEL.name].chatline.setting.size), $("#chatline").on("staticColorSet", function(e) {
        window[CHANNEL.name].chatline.handleStaticColorSet(e.color)
    }), $("#chatline").on("cycleColorSet", function(e) {
        window[CHANNEL.name].chatline.handleCycleColorReset(e.color)
    }), $("#chatline").on("cycleColorAppend", function(e) {
        window[CHANNEL.name].chatline.handleCycleColorAppend(e.color)
    }), $("#chatline").on("colorTypeSet", function(e) {
        window[CHANNEL.name].chatline.handleTypeSet(e.setting)
    }), $("#chatline").on("fontSize", function(e) {
        window[CHANNEL.name].chatline.fontSize(e)
    })), $("#chatline").unbind("keyup.enterHold"), $("#chatline").on("keyup.enterHold", function(e) {
        13 === e.keyCode && (CLIENT.enterHold = !1)
    }), $("#chatline").unbind("keydown"), $("#chatline").keydown(function(e) {
        function t() {
            function e() {
                return Math.floor(180 * Math.random() + 75).toString(16)
            }
            switch (window[CHANNEL.name].chatline.setting.type) {
                case "random":
                    return "#" + e() + e() + e();
                case "static":
                    return window[CHANNEL.name].chatline.setting.static;
                case "cycle":
                    return window[CHANNEL.name].chatline.cycleDo()
            }
        } {
            if (13 != e.keyCode) return 9 == e.keyCode ? (chatTabComplete(), e.preventDefault(), !1) : 38 == e.keyCode ? (CHATHISTIDX == CHATHIST.length && CHATHIST.push($("#chatline").val()), CHATHISTIDX > 0 && (CHATHISTIDX--, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : 40 == e.keyCode ? (CHATHISTIDX < CHATHIST.length - 1 && (CHATHISTIDX++, $("#chatline").val(CHATHIST[CHATHISTIDX])), e.preventDefault(), !1) : void 0;
            if (CHATTHROTTLE) return;
            var n = $("#chatline").val(),
                o = n.trim().split(/\s+/);
            if (console.info("[DEBUG] " + o), o[0].match(/\/selfclear|\/sclear/)) return Callbacks.clearchat(), void $("#chatline").val("");
            if ("/spoiler" == o[0]) return $("#messagebuffer").data("spoilertype", "hover" === $("#messagebuffer").data("spoilertype") ? "click" : "hover"), $(".image-spoiler").each(function() {
                $(this).attr("src", $(this).data().spoiler).attr("data-spoiled", "false")
            }), window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your spoiler setting is now: ", $("#messagebuffer").data("spoilertype"), ".")), void $("#chatline").val("");
            if ("/wipesettings" == o[0]) return Object.keys(localStorage).filter(function(e) {
                return e.match(new RegExp("^" + CHANNEL.name))
            }).each(function(e) {
                return localStorage.removeItem(e)
            }), window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your channel settings have been wiped.")), void $("#chatline").val("");
            if ("/smartpurge" == o[0]) return CLIENT.rank >= CHANNEL.perms.playlistdelete ? (playlist().filter(function(e) {
                return !(userlist(!0).indexOf(e.addedby) > -1)
            }).each(function(e) {
                socket.emit("delete", e.uid)
            }), socket.emit("chatMsg", {
                msg: String().concat("/me ", "smartpurged the playlist."),
                meta: {}
            })) : window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "You have insufficient rank to use this.")), void $("#chatline").val("");
            if ("/pm" == o[0]) {
                o.shift();
                var a = o.shift();
                return n = o.join(" ").trim(), userlist(!0).indexOf(a) == -1 ? void window[CHANNEL.name].VirtualWhisper(String().concat("[System] User not found.")) : ($("#pm-" + a).length ? n.length || window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "The PM window is already open retard.")) : initPm(a).find(".panel-heading").click(), n.length && socket.emit("pm", {
                    to: a,
                    msg: n,
                    meta: {}
                }), void $("#chatline").val(""))
            }
            if (CLIENT.rank >= CHANNEL.perms.playlistmove && 3 == o.length && "/move" == o[0]) return !isNaN(parseInt(o[1])) && parseInt(o[1]) > 0 && parseInt(o[1]) <= $("#queue li").length && !isNaN(parseInt(o[2])) && parseInt(o[2]) > 0 && parseInt(o[2]) <= $("#queue li").length && (parseInt(o[2]) > parseInt(o[1]) ? (socket.emit("chatMsg", {
                msg: "/me moves a video.",
                meta: {}
            }), socket.emit("moveMedia", {
                from: $("#queue li").eq(parseInt(o[1]) - 1).data("uid"),
                after: $("#queue li").eq(parseInt(o[2]) - 1).data("uid")
            })) : (socket.emit("chatMsg", {
                msg: "/me moves a video.",
                meta: {}
            }), socket.emit("moveMedia", {
                from: $("#queue li").eq(parseInt(o[1]) - 1).data("uid"),
                after: $("#queue li").eq(parseInt(o[2]) - 2).data("uid")
            }))), void $("#chatline").val("");
            if (CLIENT.rank >= CHANNEL.perms.playlistmove && o.length >= 2 && "/bump" == o[0]) {
                o.shift();
                var i, a = o.shift(),
                    s = o.length ? parseInt(o.shift()) : -1;
                console.log(a, s);
                var r = $("#queue li").filter(function(e, t) {
                    return $(t).data().blame.toLowerCase() == a.toLowerCase()
                }).last();
                if (!r.length) return window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Video by user ", a, " not found.")), void $("#chatline").val("");
                if (!isNaN(s) && s > 0 && s <= $("#queue li").length) i = $("#queue li").eq(s - 1).data("uid");
                else {
                    if (s !== -1) return window[CHANNEL.name].VirtualWhisper(String().concat("[MoveMedia] ", "Destination doesn't exist.")), void $("#chatline").val("");
                    i = PL_CURRENT
                }
                return socket.emit("chatMsg", {
                    msg: "/me moves a video.",
                    meta: {}
                }), socket.emit("moveMedia", {
                    from: r.data("uid"),
                    after: i
                }), void $("#chatline").val("")
            }
            if (n.trim()) {
                var l = {};
                if (USEROPTS.adminhat && CLIENT.rank >= 255 ? n = "/a " + n : USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (l.modflair = CLIENT.rank), CLIENT.rank >= 2 && 0 === n.indexOf("/m ") && (l.modflair = CLIENT.rank, n = n.substring(3)), maxLength = 220, n.indexOf("ssc:") == -1 && "/" !== n[0] && ">" !== n[0] && n.length < maxLength && window[CHANNEL.name].chatline.toggleState && (n = "ssc:" + t() + "  " + n), n.match(/^\/setcolor/)) return window[CHANNEL.name].chatline.handleSettingsMessage(e, this, n);
                if (n.match(/^\/tts/)) return window.ttsToggle = !window.ttsToggle, void $("#chatline").val("");
                socket.emit("chatMsg", {
                    msg: n,
                    meta: l
                }), CHATHIST.push($("#chatline").val()), CHATHISTIDX = CHATHIST.length, $("#chatline").val("")
            } else if (e.ctrlKey && CHATHIST.length) {
                if (CLIENT.enterHold) return;
                CLIENT.enterHold = !0;
                var n = CHATHIST[CHATHIST.length - 1],
                    l = {};
                USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (l.modflair = CLIENT.rank), window[CHANNEL.name].chatline.toggleState && (n = "ssc:" + t() + "  " + n), socket.emit("chatMsg", {
                    msg: n,
                    meta: l
                })
            }
        }
    })
}, function(e, t) {
    /*!
     **|  Chatline Enhancements
     **|    Color selection system
     **|    Messagebuffer text sizing
     **|
     **@preserve
     */
    colormapMouseover = function(e) {
            var t = e.alt;
            $("#mapTitle").css("color", t)
        }, colormapClick = function(e, t) {
            var n = document.getElementById("chatline"),
                o = t.alt;
            return (e.ctrlKey || e.altKey || e.shiftKey) && n.focus(), e.ctrlKey && e.altKey && e.shiftKey ? $("#chatline").trigger({
                type: "colorTypeSet",
                setting: "random"
            }) : e.ctrlKey && e.shiftKey ? $("#chatline").trigger({
                type: "colorTypeSet",
                setting: "static"
            }) : e.ctrlKey && e.altKey ? $("#chatline").trigger({
                type: "colorTypeSet",
                setting: "cycle"
            }) : e.altKey ? $("#chatline").trigger({
                type: "cycleColorSet",
                color: o
            }) : e.ctrlKey ? (e.stopPropagation(), $("#chatline").trigger({
                type: "cycleColorAppend",
                color: o
            })) : e.shiftKey ? $("#chatline").trigger({
                type: "staticColorSet",
                color: o
            }) : (n.value = n.value.slice(0, n.selectionStart) + " ssc:" + o + " " + n.value.slice(n.selectionStart, n.length), void n.focus())
        }, $("#colorFilters").remove(),
        function() {
            $("#chatinput").length || $("#chatline").wrap('<div id="chatinput" class="input-group" style="width:100%">');
            var e = $("<span>").addClass("input-group-btn dropup").prop("id", "colorFilters");
            $("#videowrap").prevAll().length ? e.insertAfter($("#chatline")) : e.insertBefore($("#chatline"));
            $("<button/>").addClass("btn btn-default dropdown-toggle").attr("type", "button").attr("href", "javascript:void(0)").attr("data-toggle", "dropdown").html("<span id='colorFiltersDropText'>Colors </span><span class='caret'></span>").appendTo(e),
                function() {
                    for (var e = $("<div>").css("min-width", "250px").prop("id", "colorFiltersPopup"), t = $("<div>").css("margin", "0 auto").css("display", "table").appendTo(e), n = ($("<span>").prop("id", "mapTitle").html("<center> Select color: â–ˆâ–ˆ </center>").appendTo(t), $("<img>").attr("alt", "colormap").attr("src", "https://resources.pink.horse/images/colormap.gif").attr("usemap", "#colormap").css("margin-right", "2px").appendTo(t), $("<map>").prop("id", "colormap").attr("name", "colormap").appendTo(t)), o = [{
                            hex: "003366",
                            coords: "63,0,72,4,72,15,63,19,54,15,54,4",
                            cell: "20,54"
                        }, {
                            hex: "336699",
                            coords: "81,0,90,4,90,15,81,19,72,15,72,4",
                            cell: "20,72"
                        }, {
                            hex: "3366CC",
                            coords: "99,0,108,4,108,15,99,19,90,15,90,4",
                            cell: "20,90"
                        }, {
                            hex: "003399",
                            coords: "117,0,126,4,126,15,117,19,108,15,108,4",
                            cell: "20,108"
                        }, {
                            hex: "000099",
                            coords: "135,0,144,4,144,15,135,19,126,15,126,4",
                            cell: "20,126"
                        }, {
                            hex: "0000CC",
                            coords: "153,0,162,4,162,15,153,19,144,15,144,4",
                            cell: "20,144"
                        }, {
                            hex: "000066",
                            coords: "171,0,180,4,180,15,171,19,162,15,162,4",
                            cell: "20,162"
                        }, {
                            hex: "006666",
                            coords: "54,15,63,19,63,30,54,34,45,30,45,19",
                            cell: "35,45"
                        }, {
                            hex: "006699",
                            coords: "72,15,81,19,81,30,72,34,63,30,63,19",
                            cell: "35,63"
                        }, {
                            hex: "0099CC",
                            coords: "90,15,99,19,99,30,90,34,81,30,81,19",
                            cell: "35,81"
                        }, {
                            hex: "0066CC",
                            coords: "108,15,117,19,117,30,108,34,99,30,99,19",
                            cell: "35,99"
                        }, {
                            hex: "0033CC",
                            coords: "126,15,135,19,135,30,126,34,117,30,117,19",
                            cell: "35,117"
                        }, {
                            hex: "0000FF",
                            coords: "144,15,153,19,153,30,144,34,135,30,135,19",
                            cell: "35,135"
                        }, {
                            hex: "3333FF",
                            coords: "162,15,171,19,171,30,162,34,153,30,153,19",
                            cell: "35,153"
                        }, {
                            hex: "333399",
                            coords: "180,15,189,19,189,30,180,34,171,30,171,19",
                            cell: "35,171"
                        }, {
                            hex: "669999",
                            coords: "45,30,54,34,54,45,45,49,36,45,36,34",
                            cell: "50,36"
                        }, {
                            hex: "009999",
                            coords: "63,30,72,34,72,45,63,49,54,45,54,34",
                            cell: "50,54"
                        }, {
                            hex: "33CCCC",
                            coords: "81,30,90,34,90,45,81,49,72,45,72,34",
                            cell: "50,72"
                        }, {
                            hex: "00CCFF",
                            coords: "99,30,108,34,108,45,99,49,90,45,90,34",
                            cell: "50,90"
                        }, {
                            hex: "0099FF",
                            coords: "117,30,126,34,126,45,117,49,108,45,108,34",
                            cell: "50,108"
                        }, {
                            hex: "0066FF",
                            coords: "135,30,144,34,144,45,135,49,126,45,126,34",
                            cell: "50,126"
                        }, {
                            hex: "3366FF",
                            coords: "153,30,162,34,162,45,153,49,144,45,144,34",
                            cell: "50,144"
                        }, {
                            hex: "3333CC",
                            coords: "171,30,180,34,180,45,171,49,162,45,162,34",
                            cell: "50,162"
                        }, {
                            hex: "666699",
                            coords: "189,30,198,34,198,45,189,49,180,45,180,34",
                            cell: "50,180"
                        }, {
                            hex: "339966",
                            coords: "36,45,45,49,45,60,36,64,27,60,27,49",
                            cell: "65,27"
                        }, {
                            hex: "00CC99",
                            coords: "54,45,63,49,63,60,54,64,45,60,45,49",
                            cell: "65,45"
                        }, {
                            hex: "00FFCC",
                            coords: "72,45,81,49,81,60,72,64,63,60,63,49",
                            cell: "65,63"
                        }, {
                            hex: "00FFFF",
                            coords: "90,45,99,49,99,60,90,64,81,60,81,49",
                            cell: "65,81"
                        }, {
                            hex: "33CCFF",
                            coords: "108,45,117,49,117,60,108,64,99,60,99,49",
                            cell: "65,99"
                        }, {
                            hex: "3399FF",
                            coords: "126,45,135,49,135,60,126,64,117,60,117,49",
                            cell: "65,117"
                        }, {
                            hex: "6699FF",
                            coords: "144,45,153,49,153,60,144,64,135,60,135,49",
                            cell: "65,135"
                        }, {
                            hex: "6666FF",
                            coords: "162,45,171,49,171,60,162,64,153,60,153,49",
                            cell: "65,153"
                        }, {
                            hex: "6600FF",
                            coords: "180,45,189,49,189,60,180,64,171,60,171,49",
                            cell: "65,171"
                        }, {
                            hex: "6600CC",
                            coords: "198,45,207,49,207,60,198,64,189,60,189,49",
                            cell: "65,189"
                        }, {
                            hex: "339933",
                            coords: "27,60,36,64,36,75,27,79,18,75,18,64",
                            cell: "80,18"
                        }, {
                            hex: "00CC66",
                            coords: "45,60,54,64,54,75,45,79,36,75,36,64",
                            cell: "80,36"
                        }, {
                            hex: "00FF99",
                            coords: "63,60,72,64,72,75,63,79,54,75,54,64",
                            cell: "80,54"
                        }, {
                            hex: "66FFCC",
                            coords: "81,60,90,64,90,75,81,79,72,75,72,64",
                            cell: "80,72"
                        }, {
                            hex: "66FFFF",
                            coords: "99,60,108,64,108,75,99,79,90,75,90,64",
                            cell: "80,90"
                        }, {
                            hex: "66CCFF",
                            coords: "117,60,126,64,126,75,117,79,108,75,108,64",
                            cell: "80,108"
                        }, {
                            hex: "99CCFF",
                            coords: "135,60,144,64,144,75,135,79,126,75,126,64",
                            cell: "80,126"
                        }, {
                            hex: "9999FF",
                            coords: "153,60,162,64,162,75,153,79,144,75,144,64",
                            cell: "80,144"
                        }, {
                            hex: "9966FF",
                            coords: "171,60,180,64,180,75,171,79,162,75,162,64",
                            cell: "80,162"
                        }, {
                            hex: "9933FF",
                            coords: "189,60,198,64,198,75,189,79,180,75,180,64",
                            cell: "80,180"
                        }, {
                            hex: "9900FF",
                            coords: "207,60,216,64,216,75,207,79,198,75,198,64",
                            cell: "80,198"
                        }, {
                            hex: "006600",
                            coords: "18,75,27,79,27,90,18,94,9,90,9,79",
                            cell: "95,9"
                        }, {
                            hex: "00CC00",
                            coords: "36,75,45,79,45,90,36,94,27,90,27,79",
                            cell: "95,27"
                        }, {
                            hex: "00FF00",
                            coords: "54,75,63,79,63,90,54,94,45,90,45,79",
                            cell: "95,45"
                        }, {
                            hex: "66FF99",
                            coords: "72,75,81,79,81,90,72,94,63,90,63,79",
                            cell: "95,63"
                        }, {
                            hex: "99FFCC",
                            coords: "90,75,99,79,99,90,90,94,81,90,81,79",
                            cell: "95,81"
                        }, {
                            hex: "CCFFFF",
                            coords: "108,75,117,79,117,90,108,94,99,90,99,79",
                            cell: "95,99"
                        }, {
                            hex: "CCCCFF",
                            coords: "126,75,135,79,135,90,126,94,117,90,117,79",
                            cell: "95,117"
                        }, {
                            hex: "CC99FF",
                            coords: "144,75,153,79,153,90,144,94,135,90,135,79",
                            cell: "95,135"
                        }, {
                            hex: "CC66FF",
                            coords: "162,75,171,79,171,90,162,94,153,90,153,79",
                            cell: "95,153"
                        }, {
                            hex: "CC33FF",
                            coords: "180,75,189,79,189,90,180,94,171,90,171,79",
                            cell: "95,171"
                        }, {
                            hex: "CC00FF",
                            coords: "198,75,207,79,207,90,198,94,189,90,189,79",
                            cell: "95,189"
                        }, {
                            hex: "9900CC",
                            coords: "216,75,225,79,225,90,216,94,207,90,207,79",
                            cell: "95,207"
                        }, {
                            hex: "003300",
                            coords: "9,90,18,94,18,105,9,109,0,105,0,94",
                            cell: "110,0"
                        }, {
                            hex: "009933",
                            coords: "27,90,36,94,36,105,27,109,18,105,18,94",
                            cell: "110,18"
                        }, {
                            hex: "33CC33",
                            coords: "45,90,54,94,54,105,45,109,36,105,36,94",
                            cell: "110,36"
                        }, {
                            hex: "66FF66",
                            coords: "63,90,72,94,72,105,63,109,54,105,54,94",
                            cell: "110,54"
                        }, {
                            hex: "99FF99",
                            coords: "81,90,90,94,90,105,81,109,72,105,72,94",
                            cell: "110,72"
                        }, {
                            hex: "CCFFCC",
                            coords: "99,90,108,94,108,105,99,109,90,105,90,94",
                            cell: "110,90"
                        }, {
                            hex: "FFFFFF",
                            coords: "117,90,126,94,126,105,117,109,108,105,108,94",
                            cell: "110,108"
                        }, {
                            hex: "FFCCFF",
                            coords: "135,90,144,94,144,105,135,109,126,105,126,94",
                            cell: "110,126"
                        }, {
                            hex: "FF99FF",
                            coords: "153,90,162,94,162,105,153,109,144,105,144,94",
                            cell: "110,144"
                        }, {
                            hex: "FF66FF",
                            coords: "171,90,180,94,180,105,171,109,162,105,162,94",
                            cell: "110,162"
                        }, {
                            hex: "FF00FF",
                            coords: "189,90,198,94,198,105,189,109,180,105,180,94",
                            cell: "110,180"
                        }, {
                            hex: "CC00CC",
                            coords: "207,90,216,94,216,105,207,109,198,105,198,94",
                            cell: "110,198"
                        }, {
                            hex: "660066",
                            coords: "225,90,234,94,234,105,225,109,216,105,216,94",
                            cell: "110,216"
                        }, {
                            hex: "336600",
                            coords: "18,105,27,109,27,120,18,124,9,120,9,109",
                            cell: "125,9"
                        }, {
                            hex: "009900",
                            coords: "36,105,45,109,45,120,36,124,27,120,27,109",
                            cell: "125,27"
                        }, {
                            hex: "66FF33",
                            coords: "54,105,63,109,63,120,54,124,45,120,45,109",
                            cell: "125,45"
                        }, {
                            hex: "99FF66",
                            coords: "72,105,81,109,81,120,72,124,63,120,63,109",
                            cell: "125,63"
                        }, {
                            hex: "CCFF99",
                            coords: "90,105,99,109,99,120,90,124,81,120,81,109",
                            cell: "125,81"
                        }, {
                            hex: "FFFFCC",
                            coords: "108,105,117,109,117,120,108,124,99,120,99,109",
                            cell: "125,99"
                        }, {
                            hex: "FFCCCC",
                            coords: "126,105,135,109,135,120,126,124,117,120,117,109",
                            cell: "125,117"
                        }, {
                            hex: "FF99CC",
                            coords: "144,105,153,109,153,120,144,124,135,120,135,109",
                            cell: "125,135"
                        }, {
                            hex: "FF66CC",
                            coords: "162,105,171,109,171,120,162,124,153,120,153,109",
                            cell: "125,153"
                        }, {
                            hex: "FF33CC",
                            coords: "180,105,189,109,189,120,180,124,171,120,171,109",
                            cell: "125,171"
                        }, {
                            hex: "CC0099",
                            coords: "198,105,207,109,207,120,198,124,189,120,189,109",
                            cell: "125,189"
                        }, {
                            hex: "993399",
                            coords: "216,105,225,109,225,120,216,124,207,120,207,109",
                            cell: "125,207"
                        }, {
                            hex: "333300",
                            coords: "27,120,36,124,36,135,27,139,18,135,18,124",
                            cell: "140,18"
                        }, {
                            hex: "669900",
                            coords: "45,120,54,124,54,135,45,139,36,135,36,124",
                            cell: "140,36"
                        }, {
                            hex: "99FF33",
                            coords: "63,120,72,124,72,135,63,139,54,135,54,124",
                            cell: "140,54"
                        }, {
                            hex: "CCFF66",
                            coords: "81,120,90,124,90,135,81,139,72,135,72,124",
                            cell: "140,72"
                        }, {
                            hex: "FFFF99",
                            coords: "99,120,108,124,108,135,99,139,90,135,90,124",
                            cell: "140,90"
                        }, {
                            hex: "FFCC99",
                            coords: "117,120,126,124,126,135,117,139,108,135,108,124",
                            cell: "140,108"
                        }, {
                            hex: "FF9999",
                            coords: "135,120,144,124,144,135,135,139,126,135,126,124",
                            cell: "140,126"
                        }, {
                            hex: "FF6699",
                            coords: "153,120,162,124,162,135,153,139,144,135,144,124",
                            cell: "140,144"
                        }, {
                            hex: "FF3399",
                            coords: "171,120,180,124,180,135,171,139,162,135,162,124",
                            cell: "140,162"
                        }, {
                            hex: "CC3399",
                            coords: "189,120,198,124,198,135,189,139,180,135,180,124",
                            cell: "140,180"
                        }, {
                            hex: "990099",
                            coords: "207,120,216,124,216,135,207,139,198,135,198,124",
                            cell: "140,198"
                        }, {
                            hex: "666633",
                            coords: "36,135,45,139,45,150,36,154,27,150,27,139",
                            cell: "155,27"
                        }, {
                            hex: "99CC00",
                            coords: "54,135,63,139,63,150,54,154,45,150,45,139",
                            cell: "155,45"
                        }, {
                            hex: "CCFF33",
                            coords: "72,135,81,139,81,150,72,154,63,150,63,139",
                            cell: "155,63"
                        }, {
                            hex: "FFFF66",
                            coords: "90,135,99,139,99,150,90,154,81,150,81,139",
                            cell: "155,81"
                        }, {
                            hex: "FFCC66",
                            coords: "108,135,117,139,117,150,108,154,99,150,99,139",
                            cell: "155,99"
                        }, {
                            hex: "FF9966",
                            coords: "126,135,135,139,135,150,126,154,117,150,117,139",
                            cell: "155,117"
                        }, {
                            hex: "FF6666",
                            coords: "144,135,153,139,153,150,144,154,135,150,135,139",
                            cell: "155,135"
                        }, {
                            hex: "FF0066",
                            coords: "162,135,171,139,171,150,162,154,153,150,153,139",
                            cell: "155,153"
                        }, {
                            hex: "CC6699",
                            coords: "180,135,189,139,189,150,180,154,171,150,171,139",
                            cell: "155,171"
                        }, {
                            hex: "993366",
                            coords: "198,135,207,139,207,150,198,154,189,150,189,139",
                            cell: "155,189"
                        }, {
                            hex: "999966",
                            coords: "45,150,54,154,54,165,45,169,36,165,36,154",
                            cell: "170,36"
                        }, {
                            hex: "CCCC00",
                            coords: "63,150,72,154,72,165,63,169,54,165,54,154",
                            cell: "170,54"
                        }, {
                            hex: "FFFF00",
                            coords: "81,150,90,154,90,165,81,169,72,165,72,154",
                            cell: "170,72"
                        }, {
                            hex: "FFCC00",
                            coords: "99,150,108,154,108,165,99,169,90,165,90,154",
                            cell: "170,90"
                        }, {
                            hex: "FF9933",
                            coords: "117,150,126,154,126,165,117,169,108,165,108,154",
                            cell: "170,108"
                        }, {
                            hex: "FF6600",
                            coords: "135,150,144,154,144,165,135,169,126,165,126,154",
                            cell: "170,126"
                        }, {
                            hex: "FF5050",
                            coords: "153,150,162,154,162,165,153,169,144,165,144,154",
                            cell: "170,144"
                        }, {
                            hex: "CC0066",
                            coords: "171,150,180,154,180,165,171,169,162,165,162,154",
                            cell: "170,162"
                        }, {
                            hex: "660033",
                            coords: "189,150,198,154,198,165,189,169,180,165,180,154",
                            cell: "170,180"
                        }, {
                            hex: "996633",
                            coords: "54,165,63,169,63,180,54,184,45,180,45,169",
                            cell: "185,45"
                        }, {
                            hex: "CC9900",
                            coords: "72,165,81,169,81,180,72,184,63,180,63,169",
                            cell: "185,63"
                        }, {
                            hex: "FF9900",
                            coords: "90,165,99,169,99,180,90,184,81,180,81,169",
                            cell: "185,81"
                        }, {
                            hex: "CC6600",
                            coords: "108,165,117,169,117,180,108,184,99,180,99,169",
                            cell: "185,99"
                        }, {
                            hex: "FF3300",
                            coords: "126,165,135,169,135,180,126,184,117,180,117,169",
                            cell: "185,117"
                        }, {
                            hex: "FF0000",
                            coords: "144,165,153,169,153,180,144,184,135,180,135,169",
                            cell: "185,135"
                        }, {
                            hex: "CC0000",
                            coords: "162,165,171,169,171,180,162,184,153,180,153,169",
                            cell: "185,153"
                        }, {
                            hex: "990033",
                            coords: "180,165,189,169,189,180,180,184,171,180,171,169",
                            cell: "185,171"
                        }, {
                            hex: "663300",
                            coords: "63,180,72,184,72,195,63,199,54,195,54,184",
                            cell: "200,54"
                        }, {
                            hex: "996600",
                            coords: "81,180,90,184,90,195,81,199,72,195,72,184",
                            cell: "200,72"
                        }, {
                            hex: "CC3300",
                            coords: "99,180,108,184,108,195,99,199,90,195,90,184",
                            cell: "200,90"
                        }, {
                            hex: "993300",
                            coords: "117,180,126,184,126,195,117,199,108,195,108,184",
                            cell: "200,108"
                        }, {
                            hex: "990000",
                            coords: "135,180,144,184,144,195,135,199,126,195,126,184",
                            cell: "200,126"
                        }, {
                            hex: "800000",
                            coords: "153,180,162,184,162,195,153,199,144,195,144,184",
                            cell: "200,144"
                        }, {
                            hex: "993333",
                            coords: "171,180,180,184,180,195,171,199,162,195,162,184",
                            cell: "200,162"
                        }], a = 0; a < o.length; a++)(function(e) {
                        return $("<area>").attr("alt", "#" + e.hex).attr("coords", e.coords).attr("onclick", "colormapClick(event,this)").attr("onmouseover", "colormapMouseover(this)").attr("shape", "poly").css("cursor", "pointer")
                    })(o[a]).appendTo(n);
                    return e
                }().addClass("dropdown-menu").attr("role", "menu").appendTo(e);
            $("<button>").addClass("btn btn-warning btn-xs").append($("<span>").addClass("glyphicon glyphicon-resize-full")).on("click", function(e) {
                return $("#chatline").trigger({
                    type: "fontSize",
                    change: "up"
                }), e.stopPropagation()
            }).css("position", "absolute").css("right", "0").css("bottom", "0").css("font-family", "monospace").css("border-radius", "2px").css("margin", "4px").css("padding-top", "4px").appendTo("#colorFiltersPopup"), $("<button>").addClass("btn btn-warning btn-xs").append($("<span>").addClass("glyphicon glyphicon-resize-small")).on("click", function(e) {
                return $("#chatline").trigger({
                    type: "fontSize",
                    change: "down"
                }), e.stopPropagation()
            }).css("position", "absolute").css("left", "0").css("bottom", "0").css("font-family", "monospace").css("border-radius", "2px").css("margin", "4px").css("padding-top", "4px").appendTo("#colorFiltersPopup")
        }()
}, function(e, t) {
    function n(e) {
        var t = e.title || "Empty Modal",
            n = !!e.titleIsMarkup,
            o = $("<div/>").addClass("modal fade").attr("tabindex", "-1"),
            a = $("<div/>").addClass("modal-dialog").appendTo(o),
            i = $("<div/>").addClass("modal-content").appendTo(a),
            s = $("<div/>").addClass("modal-header").appendTo(i),
            r = $("<div/>").addClass("modal-body").appendTo(i),
            l = $("<div/>").addClass("modal-footer");
        return $("<button/>").addClass("close").attr("data-dismiss", "modal").attr("data-hidden", "true").html("&times;").appendTo(s), $("<button/>").addClass("btn btn-default").attr("data-dismiss", "modal").prop("type", "button").html("Close").appendTo(l), n ? $("<h4/>").addClass("modal-title").html(t).appendTo(s) : $("<h4/>").addClass("modal-title").text(t).appendTo(s), e.wrap_id && o.prop("id", e.wrap_id), e.body_id && r.prop("id", e.body_id), e.footer && l.appendTo(i), e.destroy && o.on("hidden.bs.modal", function() {
            o.remove()
        }), e.attach && o.appendTo(e.attach), o
    }
    /*|  CyTube Custom Channel Settings Modal
     **|  Version: 2015-02-05
     **|  Written by Xaekai. Copyright 2014-2015.
     **@preserve
     */
    $("#customSettingsStaging").length || $("<div/>").prop("id", "customSettingsStaging").hide().insertAfter("#useroptions"), $("#customSettingsModal").length && ($("#customSettingsWrap .customSettings").detach().appendTo($("#customSettingsStaging")), $("#customSettingsModal").remove()), $("#customSettingsModalTrigger").length && $("#customSettingsModalTrigger").unbind().remove(), $("<button/>").prop("id", "customSettingsModalTrigger").attr("title", "Channel Control").addClass("btn btn-sm btn-default").html('<span class="glyphicon glyphicon-tasks"></span> Channel Control').button().appendTo("#customSettingsStaging").attr("data-toggle", "modal").click(function(e) {
        n({
            title: "Personal Channel Settings: " + CHANNEL.name,
            wrap_id: "customSettingsModal",
            body_id: "customSettingsWrap",
            footer: !0
        }).on("show.bs.modal", function(e) {
            $("#customSettingsStaging .customSettings").each(function() {
                var e = $("<div/>").addClass("panel panel-primary"),
                    t = $("<div/>").addClass("panel-heading").appendTo(e),
                    n = $("<div/>").addClass("panel-body").appendTo(e);
                e.appendTo($("#customSettingsWrap")), t.text($(this).data().title), $(this).detach().appendTo(n)
            })
        }).on("hidden.bs.modal", function(e) {
            $("#customSettingsWrap .customSettings").detach().appendTo($("#customSettingsStaging")), $("#customSettingsModal").remove()
        }).insertAfter("#useroptions").modal()
    }), USEROPTS.layout.match(/synchtube/) ? $("#customSettingsModalTrigger").detach().appendTo("#leftcontrols") : $("#customSettingsModalTrigger").detach().prependTo("#leftcontrols")
}, function(e, t) {
    /*!  
     **|  Enhanced Tab Completion by Xaekai
     **|  Original function by Cyzon
     **|
     **@preserve
     */
    $("#emote_suggest").length || $("#chatwrap").append('<div style="white-space: pre;" id="emote_suggest"></div>'), window.emoteSuggest = function(e) {
        console.log("emoteSuggest");
        var t = "";
        for (i = 0; i < Math.min(10, e.length); i++) t += e[i] + "   ";
        t.trim(), $("#emote_suggest").stop(!0, !0), $("#emote_suggest").html(t).fadeIn(0, function() {
            $(this).delay(3e3).fadeOut(1e3)
        })
    }, window.doTabCompletion = function(e, t, n, o, a) {
        emoteSuggest(o);
        var i = Math.min.apply(Math, o.map(function(e) {
            return e.length
        }));
        o = o.map(function(e) {
            return e.substring(0, i)
        });
        for (var s = !0, r = 21; s;) {
            s = !1;
            for (var l = o[0], d = 1; d < o.length; d++)
                if (o[d] !== l) {
                    s = !0;
                    break
                }
            if (s && (o = o.map(function(e) {
                    return e.substring(0, e.length - 1)
                })), --r < 0) break
        }
        t = o[0].substring(0, i);
        for (var d = 0; d < n.length; d++)
            if (n[d].toLowerCase() === t) {
                t = n[d];
                break
            }
        1 === o.length && (1 === e.length && t[0].match(/[\w]/) && (t += ":"), t += " "), e[e.length - 1] = t;
        var c = e.join(" ") + a;
        c != $("#chatline")[0].value && ($("#chatline").val(c), $("#chatline")[0].selectionStart = $("#chatline")[0].value.length - a.length, $("#chatline")[0].selectionEnd = $("#chatline")[0].value.length - a.length)
    }, window.chatTabComplete = function() {
        var e = $("#chatline")[0].value,
            t = "";
        $("#chatline")[0].selectionStart == $("#chatline")[0].selectionEnd && (e = $("#chatline")[0].value.slice(0, $("#chatline")[0].selectionStart), t = $("#chatline")[0].value.slice($("#chatline")[0].selectionStart));
        var n = e.split(/\s/),
            o = n[n.length - 1].toLowerCase();
        if (!o.match(/^[\w-]{1,20}$/)) return emoteTabComplete(n, o, t);
        var a = Array.prototype.slice,
            i = a.call($("#userlist").children()).map(function(e) {
                return e.children[1].innerHTML
            }),
            s = a.call(i).map(function(e) {
                return e.toLowerCase()
            }).filter(function(e) {
                return 0 === e.indexOf(o)
            });
        return 0 !== s.length ? doTabCompletion(n, o, i, s, t) : void 0
    }, window.emoteTabComplete = function(e, t, n) {
        if (console.log(t), CHANNEL.emotes && 0 != CHANNEL.emotes.length) {
            var o = [];
            for (i = 0; i < CHANNEL.emotes.length; i++) CHANNEL.emotes[i].name[0].match(/^[^\w]/) && o.push(CHANNEL.emotes[i].name);
            var a = Array.prototype.slice,
                s = a.call(o).map(function(e) {
                    return e.toLowerCase()
                }).filter(function(e) {
                    return 0 === e.indexOf(t)
                });
            if (0 !== s.length) return doTabCompletion(e, t, o, s, n)
        }
    }
}, function(e, t) {
    /*!  CyTube Common Hotkeys
     **|  Version 2016.07.06.0239
     **|  Written by Xaekai
     **|  Copyright 2013-2016
     **@preserve
     */
    var n = !1,
        o = !1,
        a = !1,
        i = !1,
        s = !1;
    $(document).off("keydown.keytracker keyup.keytracker"), $(document).on("keydown.keytracker", function(e) {
        switch (e.which) {
            case 8:
                return void(n = !0);
            case 16:
                return void(o = !0);
            case 17:
                return void(a = !0);
            case 18:
                return void(i = !0)
        }
    }), $(document).on("keyup.keytracker", function(e) {
        switch (s = !1, e.which) {
            case 8:
                return void(n = !1);
            case 16:
                return void(o = !1);
            case 17:
                return void(a = !1);
            case 18:
                return void(i = !1);
            case 27:
                return void(s = !0)
        }
    }), $(document).off("beforeunload.backspacekiller"), $(window).on("beforeunload.backspacekiller", function() {
        if (n) return n = !1, "Accidental pageback prevention:"
    }), $(document).off("keydown.hotkeys"), $(document).on("keydown.hotkeys", function(e) {
        if (!e.shiftKey && !e.ctrlKey && e.altKey) {
            if (87 === e.which && $("#cinematoggle").length) return $("#cinematoggle").click(), e.preventDefault(), !1;
            if (83 === e.which) return $("#messagebuffer").data("spoilertype", "hover" === $("#messagebuffer").data("spoilertype") ? "click" : "hover"), $(".image-spoiler").each(function() {
                $(this).attr("src", $(this).data().spoiler).attr("data-spoiled", "false")
            }), "function" == typeof window[CHANNEL.name].VirtualWhisper && window[CHANNEL.name].VirtualWhisper(String().concat("[System] ", "Your spoiler setting is now: ", $("#messagebuffer").data("spoilertype"), ".")), e.preventDefault(), !1
        }
        if (!e.ctrlKey) return !0;
        if (void 0 === e.target.selectionStart || null == e.target.selectionStart) return !0;
        var t = {};
        t.wrap = !1, t.braced = !1;
        var n = !0;
        if (e.shiftKey) switch (e.which) {
            case 66:
                t.code = "blur", t.wrap = !0, t.braced = !0;
                break;
            case 83:
                t.code = "shake", t.wrap = !0, t.braced = !0;
                break;
            default:
                n = !1
        } else switch (e.which) {
            case 87:
                return $("#skinnytoggle").length && ($("#skinnytoggle").click(), e.preventDefault()), !1;
            case 83:
                t.code = "spoiler", t.wrap = !0, t.braced = !0;
                break;
            case 66:
                t.code = "**", t.wrap = !0;
                break;
            case 73:
                t.code = "__", t.wrap = !0;
                break;
            case 77:
                t.code = "flop", t.wrap = !0, t.braced = !0;
                break;
            case 70:
                t.code = "flip", t.wrap = !0, t.braced = !0;
                break;
            case 191:
                t.code = "tilt-forward", t.wrap = !0, t.braced = !0;
                break;
            case 220:
                t.code = "tilt-reverse", t.wrap = !0, t.braced = !0;
                break;
            case 192:
                t.code = "~~", t.wrap = !0;
                break;
            case 80:
                t.code = ".pic";
                break;
            default:
                n = !1
        }
        if (!n) return !0;
        if (!$(e.target).is("#chatline") && !$(e.target).is(".pm-input")) return !0;
        var o = $(e.target).val(),
            a = e.target.selectionStart,
            i = e.target.selectionEnd,
            s = o.length,
            r = a == i,
            l = i - a;
        return o = t.wrap && t.braced ? o.slice(0, a) + "[" + t.code + "]â€Š" + o.slice(a, i) + "â€Š[/" + t.code + "]" + o.slice(i) : t.wrap ? o.slice(0, a) + t.code + o.slice(a, i) + t.code + o.slice(i) : o.slice(0, a) + o.slice(a, i) + t.code + o.slice(i), $(e.target).val(o), r ? (s = i + t.code.length + function() {
            return t.braced ? 3 : 0
        }(), e.target.setSelectionRange(s, s)) : (i = $(e.target).val().length - s + l + a, e.target.setSelectionRange(a, i)), !1
    }), $("#messagebuffer").off("click.quickact"), $("#messagebuffer").on("click.quickact", "strong.username", function(e) {
        var t = $(this).parent().parent().attr("class").match(/chat-msg-(\w+)/)[1];
        e.altKey && e.shiftKey && CLIENT.rank > 2 && userlist()[t] && CLIENT.rank > userlist()[t].rank && socket.emit("chatMsg", {
            msg: "/kick " + t + " Quick Kick"
        }), e.altKey || e.shiftKey || e.ctrlKey && t && initPm(t).find(".panel-heading").click()
    }), $("#chatline").off("paste.enhanced"), $("#chatline").on("paste.enhanced", function(e) {
        var t = (e.originalEvent || e).clipboardData.getData("text/plain");
        t = o && /^https?:\/\/(?:\w+\.)*(?:\w+\.)(?:\w+)\/(?:\w+\/)*(?:[^ ]+)(?:png|gif|jpe?g)(?:[^ ]+)?$/.test(t) ? t + ".pic" : t, document.execCommand("insertText", !1, t) && e.preventDefault(), s && $("#chatline").trigger(function() {
            var e = jQuery.Event("keydown");
            return e.which = e.keyCode = 13, e
        }())
    })
}, function(e, t) {
    /*!
     **|  A little scratchpad in the left pane for CyTube
     **|  Written by Xaekai
     **|
     **@preserve
     */
    function n() {
        $("#pad_notes_wrap").length && ($("#pad_notes_contents").remove(), $("#pad_notes_wrap").remove()), $("<div>").prop("id", "pad_notes_wrap").addClass("form-group").append($("<button>").addClass("close pull-right").text("Ã—").click(function() {
            return $(this).parent().remove()
        })).append($("<label>").attr("for", "pad_notes_container").text("Scratch pad")).append($("<span/>").prop("id", "pad_notes_container").append($("<textarea>").prop("id", "pad_notes_contents").addClass("form-control").attr("placeholder", "Page notes").attr("rows", "10"))).appendTo("#leftpane"), "undefined" != typeof Storage ? void 0 !== localStorage[CHANNEL.name + "_scratchPad"] && $("#pad_notes_contents").val(localStorage[CHANNEL.name + "_scratchPad"]) : $("#pad_notes_contents").val("This browser doesn't support storage. The contents of this box won't be saved between refreshes."), $("#pad_notes_contents").keyup(function() {
            var e = $(this),
                t = e.val(),
                n = Date.now();
            e.data("lastkey", n), setTimeout(function() {
                e.data("lastkey") === n && e.val() === t && (localStorage[CHANNEL.name + "_scratchPad"] = t)
            }, 1e3)
        })
    }
    n(), n = null
}, function(e, t) {
    function n(e) {
        function t(t) {
            e.popover({
                html: !0,
                placement: function() {
                    return USEROPTS.layout.match(/synchtube/) ? "right" : "left"
                },
                trigger: "hover",
                content: t
            })
        }

        function n(e) {
            return t(i.replace(/__url/, e))
        }
        var o = e.data().media.type,
            a = e.data().media.id,
            i = '<img src="__url" class="__class">'.replace(/__class/, "playlist-thumbnail");
        if ("yt" == o) {
            var s = "http://img.youtube.com/vi/__id/0.jpg".replace(/__id/, a);
            return n(s), e.addClass("thumbed")
        }
        if ("vi" == o) {
            var r = "http://vimeo.com/api/v2/video/__id.json".replace(/__id/, a);
            return $.getJSON(r, function(e) {
                n(e[0].thumbnail_medium)
            }), e.addClass("thumbed")
        }
        if ("dm" == o) {
            var s = "http://www.dailymotion.com/thumbnail/video/__id".replace(/__id/, a);
            return n(s), e.addClass("thumbed")
        }
        if ("gd" == o) {
            var s = "http://thumbs.pink.horse/drive/__id".replace(/__id/, a);
            return n(s), e.addClass("thumbed")
        }
        if ("gp" == o) {
            var s = "http://thumbs.pink.horse/picasa/__id".replace(/__id/, a);
            return n(s), e.addClass("thumbed")
        }
    }

    function o() {
        $("#queue > .queue_entry:not(.thumbed)").each(function() {
            n($(this))
        })
    }

    function a() {
        return $("#queue .popover").remove()
    }

    function i() {
        function e(e) {
            e = Number(e);
            var t = Math.floor(e / 3600),
                n = Math.floor(e % 3600 / 60),
                o = Math.floor(e % 3600 % 60);
            return (t > 0 ? t + ":" + (n < 10 ? "0" : "") : "") + n + ":" + (o < 10 ? "0" : "") + o
        }
        var t, n = document.querySelectorAll("#queue li"),
            o = document.querySelector("#plmeta"),
            a = [],
            i = 0,
            s = o && "playtime" in o.dataset && o.dataset.playtime >= 0 ? o.dataset.playtime : 0;
        0 != n.length && (n.each(function() {
            if (this.querySelector(".qe_time")) return t ? (this.querySelector(".qe_time").dataset.timeleft = "Time till: " + e(i) + " | ", void(i += parseInt(this.dataset.seconds))) : void(this.classList.contains("queue_active") ? (t = this, i += parseInt(this.dataset.seconds) - s, this.querySelector(".qe_time").dataset.timeleft = "Time left: " + e(i) + " | ") : a.push(this))
        }), a.each(function() {
            this.querySelector(".qe_time").dataset.timeleft = "Time till: " + e(i) + " | ", i += parseInt(this.dataset.seconds)
        }))
    }

    function s(e) {
        Callbacks.changeMedia({
            currentTime: 0,
            duration: "--:--",
            id: e.id,
            meta: {
                embed: {
                    src: String().concat("http://www.ustream.tv/embed/", e.id, "?v=3&wmode=direct&autoplay=1"),
                    tag: "iframe"
                }
            },
            paused: !1,
            seconds: 0,
            title: String().concat("Ustream.tv - channel/", e.name),
            type: "us"
        })
    }
    /*!
     **|  Cytube Playlist Enhancements
     **|  Written by Xaekai except where noted
     **|  Edited by zeratul(biggles) to remove MoveMedia messages, fix playlist collapse
     **|  Version 2017.06.15.0045
     **|  Copyright 2014-2016
     **|
     **@preserve
     */
    if (!r) var r = {};
    window[CHANNEL.name] && window[CHANNEL.name].modulesOptions && window[CHANNEL.name].modulesOptions.playlistEnhancer ? r.recentMedia = window[CHANNEL.name].modulesOptions.playlistEnhancer.recentMedia : r.recentMedia = !0,
        /*!
         **|  Playlist Helper
         **@preserve
         */
        window.requestPlaylistTimeout = null, window.throttledRequestPlaylist = function() {
            window.requestPlaylistTimeout || (socket.emit("requestPlaylist"), window.requestPlaylistTimeout = setTimeout(function() {
                clearTimeout(window.requestPlaylistTimeout)
            }, 6e4))
        }, window.playlist = function(e) {
            var t = "#queue > .queue_entry",
                n = [];
            return e && (t += ".queue_active"), $(t).each(function() {
                var e, t = $(this).data();
                e = $(this).attr("data-original-title") ? $(this).attr("data-original-title").match(/: ([-\w\u00c0-\u00ff]{1,20})$/)[1] : $(this).attr("title").match(/: ([-\w\u00c0-\u00ff]{1,20})$/)[1], n.push({
                    uid: t.uid,
                    media: t.media,
                    temp: t.temp,
                    active: $(this).hasClass("queue_active"),
                    addedby: e
                })
            }), e && n[0] || n
        }, CLIENT.thumbnail_scanner || (CLIENT.thumbnail_scanner = !0, $("head").append($("<style>").prop("id", "thumbnailStyle").text(".playlist-thumbnail { max-height: 180px; max-width: 240px; border-radius: 4px; }")), o(), socket.on("queue", o), socket.on("playlist", o), socket.on("delete", function() {
            a()
        }), $("#queue").on("mouseleave", a)),
        function() {
            CLIENT.playlistInline || (CLIENT.playlistInline = !0, window.makeQueueEntry = function(e, t) {
                var n = e.media,
                    o = $("<li/>");
                o.addClass("queue_entry"), o.addClass("pluid-" + e.uid), o.data("uid", e.uid), o.data("media", n), o.data("temp", e.temp), o.data("blame", e.queueby), n.thumb && $("<img/>").attr("src", n.thumb.url).css("float", "left").css("clear", "both").appendTo(o);
                $("<a/>").addClass("qe_title").appendTo(o).text(n.title).attr("href", formatURL(n)).attr("target", "_blank");
                $("<span/>").addClass("qe_time").appendTo(o).text(n.duration), $("<span/>").addClass("qe_blame").appendTo(o).text(e.queueby + " | ");
                $("<div/>").addClass("qe_clear").appendTo(o);
                return e.temp && o.addClass("queue_temp"), t && addQueueButtons(o), o
            }, setTimeout(function() {
                throttledRequestPlaylist()
            }, 61e3))
        }(),
        /*!
         **|  Cytube Playlist Time
         **|  Written by Spoon
         **@preserve
         */
        HTMLCollection.prototype.each = Array.prototype.each = NodeList.prototype.each = function(e, t) {
            for (var n = -1, o = void 0 === t; ++n < this.length;) o && (t = this[n]), e.bind(t)(this[n], n, this)
        }, document.body.insertAdjacentHTML("beforeEnd", "<style>#queue li:hover .qe_time:before { content: attr(data-timeleft); }</style>");
    var l = window.makeQueueEntry;
    window.makeQueueEntry = function(e, t) {
            var n = l(e, t);
            return n[0].dataset.seconds = e.media.seconds, n
        }, socket.on("mediaUpdate", function(e) {
            var t = document.querySelector("#plmeta");
            !t || t.dataset.playtime && e.paused || (t.dataset.playtime = Math.abs(Math.ceil(e.currentTime))), e.paused || i()
        }), throttledRequestPlaylist(),
        /*!
         **|  CyTube Recent Media History
         **|  Written by Xaekai
         **|  Credit to sym for the idea.
         **|  Version 2016.07.04.0547
         **|
         **@preserve
         */
        function(e) {
            (function(e, t, n, o) {
                if (r.recentMedia && !(CLIENT.rank < CHANNEL.perms.seeplaylist)) {
                    if ("undefined" == typeof Storage) return void console.info("[XaeTube: Recent Media] Storage not supported. Aborting load.");
                    console.info("[XaeTube: Recent Media] Loading Module."), localStorage[CHANNEL.name + "_RecentMedia"] === o && (localStorage[CHANNEL.name + "_RecentMedia"] = JSON.stringify([]));
                    e[CHANNEL.name].RecentMedia = {
                        maxhist: 10,
                        history: JSON.parse(localStorage[CHANNEL.name + "_RecentMedia"]),
                        synch: function() {
                            localStorage[CHANNEL.name + "_RecentMedia"] = JSON.stringify(this.history)
                        },
                        view: function() {
                            if (n("#recentmedia-list").empty(), this.history.length)
                                for (var e = this.history.length - 1; e >= 0; e--)(function(e) {
                                    var t = n("<li>").addClass("recent_entry queue_entry");
                                    n("<a>").addClass("recent_link qe_title").attr("target", "_blank").attr("href", e.link).text(e.title).appendTo(t), n("<span>").addClass("qe_time").text(e.duration).appendTo(t), n("<span>").addClass("qe_blame").text(e.blame + " | ").appendTo(t);
                                    return t
                                })(this.history[e]).appendTo("#recentmedia-list")
                        },
                        update: function(e) {
                            var t = {
                                title: e.title,
                                link: formatURL(e),
                                duration: e.duration,
                                blame: n(".pluid-" + PL_CURRENT).data("blame")
                            };
                            "#" !== t.link && (this.history.length && t.link === this.history[this.history.length - 1].link || (this.history.push(t), this.history = this.history.slice(this.history.length > this.maxhist ? this.history.length - this.maxhist : 0, this.history.length), this.synch()))
                        },
                        init: function() {
                            var e = this;
                            n("<div>").addClass("plcontrol-collapse col-lg-12 col-md-12 collapse").attr("id", "recentmedia").css({
                                height: 0
                            }).prependTo("#rightpane-inner").append(n("<div>").addClass("vertical-spacer")).append(n("<ol>").attr("id", "recentmedia-list").text("Initializing.")), n("<button>").addClass("btn btn-sm btn-default").attr("id", "showrecent").attr("title", "Recently shown videos").attr("data-toggle", "collapse").attr("data-target", "#recentmedia").button().button("hide").append(n("<span>").addClass("glyphicon glyphicon-time")).on("click", function() {
                                var e = n(this).hasClass("active");
                                n(".plcontrol-collapse").collapse("hide"), n("#plcontrol button.active").button("toggle"), e || n(this).button("toggle")
                            }).appendTo("#plcontrol"), n("<style>").text("#recentmedia-list>li:first-child { border-top-width: 1px }").prependTo(n("head"));
                            socket.on("changeMedia", function(t) {
                                e.update(t), e.view()
                            }), socket.emit("playerReady")
                        }
                    }.init()
                }
            })(window, document, window.jQuery)
        }(),
        /*!
         **|  CyTube Simplied Leader
         **|  Written by Xaekai
         **|
         **@preserve
         */
        function() {
            !$("#leader").length && CLIENT.rank >= CHANNEL.perms.leaderctl && ($("<button>").prop("id", "leader").attr("title", "Control current time of media").addClass("btn btn-sm btn-default").append($("<span>").addClass("glyphicon glyphicon-transfer")).insertAfter($("#qlockbtn")).on("click", function() {
                CLIENT.leader ? socket.emit("assignLeader", {
                    name: ""
                }) : socket.emit("assignLeader", {
                    name: CLIENT.name
                })
            }), socket.on("setLeader", function(e) {
                e === CLIENT.name ? $("#leader").removeClass("btn-default").addClass("btn-warning") : $("#leader").addClass("btn-default").removeClass("btn-warning")
            }));
            var e = Math.min(CHANNEL.perms.oplaylistdelete, CHANNEL.perms.oplaylistjump, CHANNEL.perms.oplaylistnext, CHANNEL.perms.playlistdelete, CHANNEL.perms.playlistjump, CHANNEL.perms.playlistnext);
            !$("#shrinkplaylist").length && CLIENT.rank >= e && ($("#queue").data().shrink = !1, $("<button>").prop("id", "shrinkplaylist").attr("title", "Toggle playlist collapse").addClass("btn btn-sm btn-default").append($("<span>").addClass("glyphicon glyphicon-compressed")).insertAfter($("#shuffleplaylist")).on("click", function() {
                $("#queue").data().shrink ? ($("#queue").data().shrink = !1, $("#playlistStyle").remove()) : ($("#queue").data().shrink = !0, $("head").append($("<style>").prop("id", "playlistStyle").text("#queue div.btn-group, .qe_clear { display: none!important; }"))), $(this).toggleClass("btn-default btn-warning")
            }))
        }(),
        /*!
         **|  CyTube Quick Preferred Qualilty
         **|  Written by Xaekai
         **|
         **@preserve
         */
        $("#quickQuality").remove(),
        function() {
            var e = [{
                    code: "auto",
                    text: "Auto"
                }, {
                    code: "240",
                    text: "240p"
                }, {
                    code: "360",
                    text: "360p"
                }, {
                    code: "480",
                    text: "480p"
                }, {
                    code: "720",
                    text: "720p"
                }, {
                    code: "1080",
                    text: "1080p"
                }, {
                    code: "best",
                    text: "Highest"
                }],
                t = e.filter(function(e) {
                    return e.code == USEROPTS.default_quality
                })[0].text,
                n = $("<div/>").addClass("btn-group dropdown").prop("id", "quickQuality").prependTo("#videocontrols");
            $("<button/>").addClass("btn btn-default btn-sm dropdown-toggle").attr("type", "button").attr("title", "Preferred Quality").attr("href", "javascript:void(0)").attr("data-toggle", "dropdown").html("<span class='glyphicon glyphicon-hd-video'></span><strong> " + t + " </strong><span class='caret'></span>").appendTo(n);
            var o = $("<ul/>").addClass("dropdown-menu ul-double").appendTo(n);
            e.filter(function(e) {
                console.log(e.code)
            }), e.filter(function(e) {
                $("<li/>").addClass("li-double").html($("<a/>").text(e.text).attr("quality", e.code).click(function() {
                    $("#quickQuality strong").text(" " + $(this).text()), USEROPTS.default_quality = $(this).attr("quality"), $("#us-default-quality").val(USEROPTS.default_quality), storeOpts(), $("#mediarefresh").click()
                })).appendTo(o)
            })
        }(), $("#quickStream").remove(),
        function() {
            var e = [{
                    id: "16558159",
                    name: "woeful-streaming"
                }, {
                    id: "20308283",
                    name: "ponyspazz"
                }, {
                    id: "13392289",
                    name: "the-brony-network"
                }, {
                    id: "20768037",
                    name: "btvnumanother"
                }],
                t = $("<div/>").addClass("btn-group dropdown").prop("id", "quickStream").prependTo("#videocontrols").hide();
            $("<button/>").addClass("btn btn-default btn-sm dropdown-toggle").attr("type", "button").attr("title", "Stream Select").attr("href", "javascript:void(0)").attr("data-toggle", "dropdown").html("<strong> Pony Stream </strong><span class='caret'></span>").appendTo(t);
            var n = $("<ul/>").addClass("dropdown-menu ul-double").appendTo(t);
            if (e.filter(function(e) {
                    $("<li/>").addClass("li-double").html($("<a/>").text(e.name).data("streamid", e.id).data("streamname", e.name).click(function() {
                        s({
                            id: $(this).data("streamid"),
                            name: $(this).data("streamname")
                        })
                    })).appendTo(n)
                }), !window.ponystreamlistener) {
                window.ponystreamlistener = !0, socket.on("changeMedia", function(e) {
                    e && "us" == e.type && e.id && e.id.match(/13392289|16558159|20308283|20768037/) ? ($("#quickStream").show(), $("#quickQuality").hide()) : ($("#quickStream").hide(), $("#quickQuality").show())
                });
                var o = playlist(!0).media;
                o && "us" == o.type && data && data.id && data.id.match(/13392289|16558159|20308283|20768037/) ? ($("#quickStream").show(), $("#quickQuality").hide()) : ($("#quickStream").hide(), $("#quickQuality").show())
            }
        }(), CLIENT.playlistSync || (CLIENT.playlistSync = !0, CLIENT.playlistCool = Date.now(), CLIENT.playlistSynk = function(e) {
            if (!(Math.abs(CLIENT.playlistCool - Date.now()) < 75e3)) {
                var t = $("ul#queue li.queue_entry").length;
                Math.abs(t - e.count) > 1 && (setTimeout(function() {
                    throttledRequestPlaylist()
                }, 5e3), console.info("Attemping to correct playlist"), CLIENT.playlistCool = Date.now())
            }
        }, socket.on("setPlaylistMeta", function(e) {
            return CLIENT.playlistSynk(e)
        }))
}, function(e, t) {
    function n(e) {
        for (var t = e, n = t.find("h3").length ? i(t.find("h3")[0].innerHTML) : "", o = t.find(".option"), a = function() {
                var e = t.find(".option .btn");
                return e.length > 0 && e[0].innerText.indexOf("?") > -1
            }(), s = [], r = 0; r < o.length && !(s.length >= 50); r++) s.push(i(o[r].innerHTML));
        return {
            title: n,
            opts: s,
            obscured: a
        }
    }

    function o() {
        $(".well.poll-menu").length && ($(".well.poll-menu").remove(), showPollMenu())
    }

    function a(e) {
        if (e && "string" == typeof e.title && e.opts && e.hasOwnProperty("obscured") && !(e.opts.length >= 50)) {
            showPollMenu(), o();
            var t = document.getElementsByClassName("poll-menu");
            if (t.length > 0) {
                t = t[0];
                for (var n = t.querySelectorAll("input.form-control"), a = t.querySelector('input[type="checkbox"]'), i = n.length - 2; i < e.opts.length;) ! function() {
                    $("<input/>").addClass("form-control").attr("type", "text").attr("maxlength", "255").addClass("poll-menu-option").insertAfter($(n[n.length - 1]))
                }(), i++;
                n = t.querySelectorAll("input.form-control"), n[0].value = e.title;
                for (var s = 2; s - 2 < e.opts.length; s++) n[s].value = e.opts[s - 2];
                a.checked = e.obscured
            }
        }
    }

    function i(e) {
        return $("<span>" + e.replace(/\<button .+?\>[0-9\?]+\<\/button\>/i, "").replace(/\<img class\=\"channel\-emote\" .+? title\=\"(.+?)\"\>/gi, "$1") + "</span>")[0].innerText
    }
    socket.on("newPoll", function(e) {
        var t = $("<button/>", {
            class: "btn btn-purple btn-sm pull-right copy",
            text: "Copy",
            click: function() {
                a(n($(this).parent()))
            }
        });
        CLIENT.rank < CHANNEL.perms.pollctl && t.hide(), t.insertBefore($("#pollwrap .well.active").find("h3"))
    }), $(function() {
        for (var e = $("#pollwrap .well"), t = 0; t < e.length; t++)
            if (!e.eq(t).find(".btn.copy").length) {
                var o = $("<button/>", {
                    class: "btn btn-purple btn-sm pull-right copy",
                    text: "Copy",
                    click: function() {
                        a(n($(this).parent()))
                    }
                });
                CLIENT.rank < CHANNEL.perms.pollctl && o.hide(), o.insertBefore(e.eq(t).find("h3"))
            }
    })
}, function(e, t) {
    /*!
     **|  CyTube PM Enhancements
     **|  Copyright Xaekai 2014 - 2016
     **|  Version 2016.06.05.0011
     **|
     **@preserve
     */
    window[CHANNEL.name] || (window[CHANNEL.name] = {}),
        function(e) {
            (function(e, t, n, o) {
                if ("undefined" == typeof Storage) return void console.info("[XaeTube: Better PMs] localStorage not supported. Aborting load.");
                console.info("[XaeTube: Better PMs] Loading Module."), localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] == o && (localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify([]));
                try {
                    var a = JSON.parse(localStorage[CHANNEL.name + "_BetterPM_PrevOpen"]);
                    if (!Array.isArray(a)) throw null
                } catch (e) {
                    localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify([])
                }
                var i = e[CHANNEL.name].BetterPMs = {
                    previouslyOpen: JSON.parse(localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] || "[]"),
                    openCache: {},
                    flushCache: function() {
                        return Object.keys(this.openCache).forEach(function(e) {
                            localStorage[CHANNEL.name + "_BetterPM_History_" + e] = JSON.stringify(this.openCache[e])
                        }.bind(this)), !0
                    },
                    deployCache: function(e) {
                        if (localStorage[CHANNEL.name + "_BetterPM_History_" + e] != o) return this.initCache(e), this.openCache[e].slice(this.openCache[e].length > 50 ? this.openCache[e].length - 50 : 0).forEach(function(e) {
                            Callbacks.pm(e, !0)
                        }), !0
                    },
                    scheduleFlush: function() {
                        return this.flushCache(), !0
                    },
                    initCache: function(e) {
                        return void 0 === this.openCache[e] && (this.openCache[e] = JSON.parse(localStorage[CHANNEL.name + "_BetterPM_History_" + e])), !0
                    },
                    saveOpen: function() {
                        var e = [];
                        return n("#pmbar > div[id^=pm]:not(.pm-panel-placeholder)").each(function() {
                            e.push(n(this).attr("id").replace(/^pm-/, ""))
                        }), localStorage[CHANNEL.name + "_BetterPM_PrevOpen"] = JSON.stringify(e), !0
                    },
                    pushNewPrivMsg: function(e, t) {
                        return localStorage[CHANNEL.name + "_BetterPM_History_" + e] == o && (localStorage[CHANNEL.name + "_BetterPM_History_" + e] = JSON.stringify([])), this.initCache(e), this.openCache[e].push(t), this.scheduleFlush(), !0
                    }
                };
                e.initPm = function(e) {
                    if (n("#pm-" + e).length > 0) return n("#pm-" + e);
                    var t, o = n("<div/>").addClass("panel panel-default pm-panel").appendTo(n("#pmbar")).data("last", {
                            name: ""
                        }).attr("id", "pm-" + e),
                        a = n("<div/>").addClass("panel-heading").text(e).appendTo(o),
                        s = (n("<button/>").addClass("close pull-right").html("&times;").appendTo(a).click(function() {
                            o.remove(), n("#pm-placeholder-" + e).remove()
                        }), n("<div/>").addClass("panel-body").appendTo(o).hide());
                    a.click(function() {
                        if (s.toggle(), o.removeClass("panel-primary").addClass("panel-default"), s.is(":hidden")) o.css("position", ""), n("#pm-placeholder-" + e).remove();
                        else {
                            t = n("<div/>").addClass("pm-panel-placeholder").attr("id", "pm-placeholder-" + e).insertAfter(o);
                            var a = o.position().left;
                            o.css("position", "absolute").css("bottom", "0px").css("left", a)
                        }
                    });
                    n("<div/>").addClass("pm-buffer linewrap").appendTo(s);
                    n("<hr/>").appendTo(s);
                    var r = n("<input/>").addClass("form-control pm-input").attr("type", "text").attr("maxlength", 240).appendTo(s);
                    return r.keydown(function(t) {
                        if (13 === t.keyCode) {
                            if (CHATTHROTTLE) return;
                            var n = {},
                                o = r.val();
                            if ("" === o.trim()) return;
                            USEROPTS.modhat && CLIENT.rank >= Rank.Moderator && (n.modflair = CLIENT.rank), CLIENT.rank >= 2 && 0 === o.indexOf("/m ") && (n.modflair = CLIENT.rank, o = o.substring(3)), socket.emit("pm", {
                                to: e,
                                msg: o,
                                meta: n
                            }), r.val("")
                        }
                    }), i.deployCache(e), {
                        startCheck: function(e) {
                            if (n("#pm-" + e).length) {
                                var t = initPm(e).find(".pm-buffer");
                                t.children().last().length && t.children().last()[0].scrollIntoView(), t[0].scrollTop = t[0].scrollHeight, t[0].scrollHeight == this.scrollHeight && 0 !== this.scrollHeight || (this.scrollHeight = t[0].scrollHeight, setTimeout(this.startCheck.bind(this), this.timeout, e))
                            }
                        },
                        scrollHeight: -1,
                        timeout: 250
                    }.startCheck(e), o
                }, e.Callbacks.pm = function(t, n) {
                    var o = t.username;
                    if (IGNORED.indexOf(o) === -1) {
                        if (o == CHANNEL.bot && "Kamikze" !== CLIENT.name) return e[CHANNEL.name].VirtualWhisper(o + ": " + t.msg);
                        t.username === CLIENT.name ? o = t.to : pingMessage(!0);
                        var a = initPm(o),
                            s = a.find(".pm-buffer");
                        if (formatChatMessage(t, a.data("last")).appendTo(s), s.scrollTop(s.prop("scrollHeight")), a.find(".panel-body").is(":hidden") && a.removeClass("panel-default").addClass("panel-primary"), !n) {
                            var r = CLIENT.name !== t.username ? t.username : t.to;
                            i.pushNewPrivMsg(r, t)
                        }
                    }
                }, n("#pmbar > div[id^=pm]:not(.pm-panel-placeholder)").each(function() {
                    var e = n(this).attr("id").replace(/^pm-/, "");
                    i.previouslyOpen.push(e), n(this).find("div.pm-buffer").each(function() {})
                }), localStorage[CHANNEL.name + "_BetterPM_PrevOpen"], JSON.stringify([]), i.previouslyOpen.forEach(function(e) {
                    initPm(e)
                }), n(e).on("unload.openprivs", function() {
                    i.saveOpen(), i.flushCache()
                })
            })(window, document, window.jQuery)
        }()
}, function(e, t) {
    /*!
     **|  CyTube Enhanced Layout Options
     **|
     **|  Version 2015.05.12
     **|
     **@preserve
     */
    window.userVol = 0, $('nav.navbar a[href="#"][onclick]').attr("href", "javascript:void(0)"), $('a[onclick*="removeUntilNext"]').length || $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:removeUntilNext()").text("Remove Video Until Next"))), window.removeUntilNext = function() {
            return socket.once("changeMedia", unremoveVideo), removeVideo()
        }, window.removeVideo = function(e) {
            try {
                PLAYER.getVolume(function(e) {
                    console.log("removeVideo volume set: " + e), window.userVol = e
                }), PLAYER.setVolume(0), "rv" === PLAYER.type && killVideoUntilItIsDead($(PLAYER.player))
            } catch (e) {
                console.log(e)
            }
            CLIENT.removedOnGDrive = "gd" == PLAYER.mediaType, $("#videowrap").hide().attr("id", "videowrap_disabled"), $("#ytapiplayer").attr("id", "ytapiplayer_disabled"), $("#chatwrap").removeClass("col-lg-5 col-md-5").addClass("col-md-12"), $('a[onclick*="removeVideo"]').attr("onclick", "javascript:unremoveVideo(event)").text("Restore video"), e && e.preventDefault && e.preventDefault()
        }, window.unremoveVideo = function(e) {
            setTimeout(function() {
                console.log("unremoveVideo volume set: " + window.userVol), PLAYER.setVolume(window.userVol)
            }, 250), socket.emit("playerReady"), $("#chatwrap").addClass("col-lg-5 col-md-5").removeClass("col-md-12"), $("#videowrap_disabled").attr("id", "videowrap").show(), $("#ytapiplayer_disabled").attr("id", "ytapiplayer"), $('a[onclick*="removeVideo"]').attr("onclick", "javascript:removeVideo(event)").text("Remove video"), e && e.preventDefault && e.preventDefault(), CLIENT.removedOnGDrive && (CLIENT.removedOnGDrive = !1, setTimeout(function() {
                $("#mediarefresh").click()
            }, 1e3))
        }, $('a[onclick*="toggleChat"]').length || $('a[onclick*="chatOnly"]').parent().after($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", "javascript:toggleChat()").text("Remove Chat"))),
        function() {
            window.cinemaLoaded || (window.cinemaLoaded = !0, $('a[onclick*="removeVideo"]').parent().parent().append($("<li>").append($("<a>").attr("href", "javascript:void(0)").attr("onclick", 'javascript:$("#cinematoggle").click()').text("Cinema Mode"))), Cinema = {}, Cinema.rootDir = "https://pink.horse/resources/css/")
        }()
}, function(e, t) {
    if (Callbacks.newPoll = function(e) {
            Callbacks.closePoll();
            $("<div/>").addClass("poll-notify").html(e.initiator + ' opened a poll: "' + execEmotes(e.title) + '"').appendTo($("#messagebuffer"));
            scrollChat();
            var t = $("<div/>").data("title", e.title).data("options", JSON.stringify(e.options)).addClass("well active").prependTo($("#pollwrap"));
            $("<button/>").addClass("close pull-right").html("&times;").appendTo(t).click(function(e) {
                if (hasPermission("pollctl") && e.ctrlKey) {
                    var n = $(this).parent(),
                        o = $("<span>").html(n.data().title).text(),
                        a = JSON.parse(n.data().options);
                    a.forEach(function(e, t, n) {
                        n[t] = $("<span>").html(e).text()
                    }), $("#pollwrap .poll-menu > .btn-danger").click(), $("#newpollbtn").click();
                    var i = $("#pollwrap .poll-menu"),
                        s = i.find("button:contains(Add Option)");
                    i.find("strong:contains(Title)").next("input").val(o), i.find(".poll-menu-option").remove();
                    for (var r = 0; r < a.length; r++) $("<input/>").addClass("form-control").attr("type", "text").addClass("poll-menu-option").val(a[r]).insertBefore(s)
                }
                t.remove()
            }), hasPermission("pollctl") && $("<button/>").addClass("btn btn-danger btn-sm pull-right").text("End Poll").appendTo(t).click(function(e) {
                if (e.ctrlKey) {
                    var t = $(this).parent(),
                        n = $("<span>").html(t.data().title).text(),
                        o = JSON.parse(t.data().options);
                    o.forEach(function(e, t, n) {
                        n[t] = $("<span>").html(e).text()
                    }), $("#pollwrap .poll-menu > .btn-danger").click(), $("#newpollbtn").click();
                    var a = $("#pollwrap .poll-menu"),
                        i = a.find("button:contains(Add Option)");
                    a.find("strong:contains(Title)").next("input").val(n), a.find(".poll-menu-option").remove();
                    for (var s = 0; s < o.length; s++) $("<input/>").addClass("form-control").attr("type", "text").addClass("poll-menu-option").val(o[s]).insertBefore(i);
                    if (e.shiftKey || e.altKey) return
                }
                socket.emit("closePoll")
            }), $("<h3/>").html(execEmotes(e.title)).appendTo(t);
            for (var n = 0; n < e.options.length; n++) ! function(n) {
                var o = function() {
                    socket.emit("vote", {
                        option: n
                    }), t.find(".option button").each(function() {
                        $(this).attr("disabled", "disabled")
                    }), $(this).parent().addClass("option-selected")
                };
                $("<button/>").addClass("btn btn-default btn-sm").text(e.counts[n]).prependTo($("<div/>").addClass("option").html(execEmotes(e.options[n])).appendTo(t)).click(o)
            }(n);
            e.timestamp && $("<span/>").addClass("label label-default pull-right").data("timestamp", e.timestamp).appendTo(t).text(new Date(e.timestamp).toTimeString().split(" ")[0]), t.find(".btn").attr("disabled", !hasPermission("pollvote"))
        }, $("#pollwrap .active").length && $(".poll-notify").length) {
        var n = $("#pollwrap .active"),
            o = n.find("h3").text().replace(/(https?:\/\/\w+\.\w+[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'),
            a = n.find("span.label").data("timestamp"),
            i = [],
            s = [];
        n.find("div.option > button").each(function() {
            s.push($(this).text()), $(this).remove()
        }), n.find("div.option").each(function() {
            i.push($(this).text()), $(this).remove()
        }), n.remove(), i.forEach(function(e, t, n) {
            e.match(/https?:\/\/\w+\.\w+/) && (n[t] = e.replace(/(https?:\/\/\w+\.\w+[^\s]+)/g, '<a href="$1" target="_blank">$1</a>'))
        });
        var r = $(".poll-notify").first().text().split(" ").shift();
        $(".poll-notify").remove(), Callbacks.newPoll({
            title: o,
            options: i,
            initiator: r,
            counts: s,
            timestamp: a
        })
    }
}, function(e, t) {
    window.closeLast = function() {}, window.improveChatMessage = function(e) {
            var t = e.find("span strong");
            if (t.length && ": " === t.text().slice(-2)) {
                var n = t.text().slice(0, -2);
                t.empty(), t = $("<span/>").text(n).addClass("user-link").appendTo(t), $("<span>:Â </span>").insertAfter(t);
                var o, a = 0,
                    i = function(e) {
                        closeLast(!0), o = $("#userlist .userlist-" + t.text().replace(/[^\w-]/g, "\\$")).parent().find(".user-dropdown").clone(!0).appendTo(document.body).css({
                            position: "absolute",
                            top: e.pageY,
                            left: e.pageX
                        }).css({
                            display: "block"
                        }), o.find(".btn-group-vertical .btn-xs").on("click", function() {
                            r(!0)
                        }), o.on("click", s), $(document).on("click", r), closeLast = r, e.preventDefault()
                    },
                    s = function(e) {
                        e.stopPropagation()
                    },
                    r = function e(t) {
                        (a++ || t === !0) && (a = 0, o.remove(), o.off("click", s), $(document).off("click", e))
                    };
                t.on("click", i), t.on("contextmenu", function() {
                    return $("#chatline").val($("#chatline").val() + t.text().replace(/[^\w-]/g, "\\$") + ": ").focus(), !1
                })
            }
            return e
        }, window.improveUserlist = function(e) {
            CLIENT.rank > 1 && (e.find(".btn-group-vertical").prepend($('<button class="btn btn-xs btn-default">Block User\'s Videos</button>')), e.find(".btn-group-vertical").prepend($('<button class="btn btn-xs btn-warning" style="margin-bottom:5px;"><strong>$vidya</strong></button>').on("click", function() {
                return socket.emit("chatMsg", {
                    msg: "$vidya " + $($(e).find("> strong")[0]).text()
                })
            })), e.find(".btn-group-vertical").prepend($('<button class="btn btn-xs btn-success" style="margin-bottom:5px;"><strong>$bump</strong></button>').on("click", function() {
                return socket.emit("chatMsg", {
                    msg: "$bump " + $($(e).find("> strong")[0]).text()
                })
            })))
        }, $("#chatwrap > .linewrap > div").each(function(e, t) {
            improveChatMessage($(t))
        }), $(".user-dropdown").each(function(e, t) {
            improveUserlist($(t))
        }), window.formatChatMessage = function(e, t) {
            e.meta && !e.msgclass || (e.meta = {
                addClass: e.msgclass,
                addClassToNameAndTimestamp: e.msgclass
            });
            var n = e.username === t.name,
                o = n;
            "server-whisper" === e.meta.addClass && (n = !0), e.msg.match(/^\s*<strong>\w+\s*:\s*<\/strong>\s*/) && (n = !1), e.meta.forceShowName && (n = !1), e.msg = stripImages(e.msg), e.msg = execEmotes(e.msg), t.name = e.username;
            var a = $("<div/>");
            if ("drink" === e.meta.addClass && (a.addClass("drink"), e.meta.addClass = ""), USEROPTS.show_timestamps) {
                var i = $("<span/>").addClass("timestamp").appendTo(a),
                    s = new Date(e.time).toTimeString().split(" ")[0];
                i.text("[" + s + "] "), e.meta.addClass && e.meta.addClassToNameAndTimestamp && i.addClass(e.meta.addClass)
            }
            var r = $("<span/>");
            n || r.appendTo(a), o && "server-whisper" !== e.meta.addClass && a.addClass("consecutive"), $("<strong/>").addClass("username").text(e.username + ": ").appendTo(r), e.meta.modflair && r.addClass(getNameColor(e.meta.modflair)), e.meta.addClass && e.meta.addClassToNameAndTimestamp && r.addClass(e.meta.addClass), e.meta.superadminflair && (r.addClass("label").addClass(e.meta.superadminflair.labelclass), $("<span/>").addClass(e.meta.superadminflair.icon).addClass("glyphicon").css("margin-right", "3px").prependTo(r));
            var l = $("<span/>").appendTo(a);
            return l[0].innerHTML = e.msg, e.meta.action && (r.remove(), l[0].innerHTML = e.username + " " + e.msg), e.meta.addClass && l.addClass(e.meta.addClass), e.meta.shadow && a.addClass("chat-shadow"), a.find("img").load(function() {
                SCROLLCHAT && scrollChat()
            }), improveChatMessage(a)
        }, window.addChatMessage = function(e) {
            if (IGNORED.indexOf(e.username) === -1 && (!e.meta.shadow || USEROPTS.show_shadowchat) && (!USEROPTS.no_emotes || e.msg.match(/<img/) || e.msg.match(/class="sound-embed"/) || e.msg.replace(/<\/?\w+ [^>]+?>|<\/?\w+>/g, "").replace(/:[\w.]+:/g, "").replace(/spam filtered/gi, "").replace(/\s/g, "").replace(/[:.!,]/g, "").length)) {
                var t = formatChatMessage(e, LASTCHAT),
                    n = e.username.replace(/[^\w-]/g, "\\$");
                t.addClass("chat-msg-" + n), t.appendTo($("#messagebuffer")), t.mouseover(function() {
                    $(".chat-msg-" + n).addClass("nick-hover")
                }), t.mouseleave(function() {
                    $(".nick-hover").removeClass("nick-hover")
                }), $("#messagebuffer").children().length > 100 && $($("#messagebuffer").children()[0]).remove(), SCROLLCHAT && scrollChat();
                var o = !1;
                CLIENT.name && e.username != CLIENT.name && e.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase()) != -1 && (t.addClass("nick-highlight"), o = !0), pingMessage(o)
            }
        },
        function(e) {
            var t;
            try {
                t = e[CHANNEL.name].modulesOptions.userlist.trustedHosts
            } catch (e) {
                t = []
            }
            var n;
            try {
                n = e[CHANNEL.name].modulesOptions.userlist.scrutinize
            } catch (e) {
                n = !1
            }
            var o = new RegExp(["imgur.com", "pink.horse"].concat(t).join("|"), "i");
            e.trustAvatar = function(e) {
                if (!n) return !0;
                try {
                    var t = new URL(e).host.split("."),
                        a = t.pop(),
                        i = t.pop()
                } catch (e) {
                    return !1
                }
                return o.test(i + "." + a)
            }
        }(window);
    var n = addUserDropdown;
    window.addUserDropdown = function(e) {
            n.apply(this, [e]), improveUserlist(e.find(".user-dropdown"))
        }, window.formatUserlistItem = function(e) {
            var t = {
                    name: e.data("name") || "",
                    rank: e.data("rank"),
                    profile: e.data("profile") || {
                        image: "",
                        text: ""
                    },
                    leader: e.data("leader") || !1,
                    icon: e.data("icon") || !1
                },
                n = $(e.children()[1]);
            n.removeClass(), n.css("font-style", ""), n.addClass(getNameColor(t.rank)), 3 === t.rank && n.addClass("userlist_admin"), n.addClass("userlist-" + t.name.replace(/[^\w-]/g, "\\$")), e.find(".profile-box").remove();
            var o = e.data().meta || {};
            o.afk ? e.addClass("userlist_afk") : e.removeClass("userlist_afk"), o.muted ? e.addClass("userlist_muted") : e.removeClass("userlist_muted"), o.smuted ? e.addClass("userlist_smuted") : e.removeClass("userlist_smuted");
            var a = null,
                i = t.rank > 1 || trustAvatar(t.profile.image);
            n.unbind("mouseenter"), n.unbind("mousemove"), n.unbind("mouseleave"), n.mouseenter(function(n) {
                a && a.remove();
                var o = n.clientY + 5,
                    s = n.clientX;
                a = $("<div/>").addClass("profile-box linewrap").css("top", o + "px").appendTo(e), t.profile.image && i && (t.profile.image = t.profile.image.replace(/http\:/gi, "https:"), $("<img/>").addClass("profile-image").attr("src", t.profile.image).appendTo(a)), $("<strong/>").text(t.name).appendTo(a);
                var r = e.data("meta") || {};
                r.ip && ($("<br/>").appendTo(a), $("<em/>").text(r.ip).appendTo(a)), r.aliases && ($("<br/>").appendTo(a), $("<em/>").text("aliases: " + r.aliases.join(", ")).appendTo(a)), $("<hr/>").css("margin-top", "5px").css("margin-bottom", "5px").appendTo(a), $("<p/>").text(t.profile.text).appendTo(a), $("body").hasClass("synchtube") && (s -= a.outerWidth()), a.css("left", s + "px")
            }), n.mousemove(function(e) {
                var t = e.clientY + 5,
                    n = e.clientX;
                $("body").hasClass("synchtube") && (n -= a.outerWidth()), a.css("left", n + "px").css("top", t + "px")
            }), n.mouseleave(function() {
                a.remove()
            });
            var s = e.children()[0];
            s.innerHTML = "", t.leader && $("<span/>").addClass("glyphicon glyphicon-star-empty").appendTo(s), e.data().meta.afk && (n.css("font-style", "italic"), $("<span/>").addClass("glyphicon glyphicon-time").appendTo(s)), t.icon && $("<span/>").addClass("glyphicon " + t.icon).prependTo(s)
        }, window.userlist = function(e) {
            var t = Array.prototype.slice.call($("#userlist").children()).filter(function(e) {
                return $(e).hasClass("userlist_item")
            }).map(function(e) {
                return e.children[1].innerHTML
            });
            if (e) return t;
            for (var n = {}, o = t.length - 1; o >= 0; o--) n[t[o]] = findUserlistItem(t[o]).data();
            return n
        },
        function(e) {
            for (var t = e.userlist(!0), n = t.length - 1; n >= 0; n--) e.findUserlistItem(t[n]).find("span:contains(" + t[n] + ")").addClass("userlist-" + t[n]), e.findUserlistItem(t[n]).data().profile.image = e.trustAvatar(e.findUserlistItem(t[n]).data().profile.image) ? e.findUserlistItem(t[n]).data().profile.image : null
        }(window), window.evacuateRoom = function(e) {
            e = e || {};
            var t = e.reason && ": " + e.reason || ".",
                n = !!e.doRefresh,
                o = userlist(!0),
                a = userlist(!1);
            socket.emit("chatMsg", {
                msg: "/kickanons Automated kick. Room clear invoked" + t
            });
            for (var i = 0; i < o.length; i++) CLIENT.rank > a[o[i]].rank && socket.emit("chatMsg", {
                msg: "/kick " + o[i] + " Automated kick. Room clear invoked" + t
            });
            socket.emit("clearPlaylist"), socket.emit("chatMsg", {
                msg: "/clear"
            }), n && location.refresh()
        }, $("#shuffleplaylist").unbind("click"), $("#shuffleplaylist").click(function(e) {
            if (e.shiftKey) return socket.emit("shufflePlaylist");
            confirm("Are you sure you want to shuffle the playlist?") && socket.emit("shufflePlaylist")
        }), $("#customSettingsStaging").length || $("<div/>").prop("id", "customSettingsStaging").hide().insertAfter("#useroptions"), $("#UserlistAutohide").remove(),
        function() {
            if (window[CHANNEL.name].autohider || (window[CHANNEL.name].autohider = {}), window[CHANNEL.name].autohider.initialized || (window[CHANNEL.name].autohider.initialized = !0, window[CHANNEL.name].autohider.defaultTime = 3e4, window[CHANNEL.name].autohider.toggleState = !1, "undefined" != typeof Storage ? (void 0 !== localStorage[CHANNEL.name + "_autohiderToggle"] && (window[CHANNEL.name].autohider.toggleState = parseInt(localStorage[CHANNEL.name + "_autohiderToggle"])), void 0 !== localStorage[CHANNEL.name + "_autohiderTimeout"] ? window[CHANNEL.name].autohider.timeout = parseInt(localStorage[CHANNEL.name + "_autohiderTimeout"]) : window[CHANNEL.name].autohider.timeout = window[CHANNEL.name].autohider.defaultTime) : console.log("ERROR: Local storage not supported by this browser."), window[CHANNEL.name].autohider.toggle = function() {
                    window[CHANNEL.name].autohider.toggleState ? (window[CHANNEL.name].autohider.toggleState = !1, $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close"), localStorage[CHANNEL.name + "_autohiderToggle"] = 0) : (window[CHANNEL.name].autohider.toggleState = !0, $("#userlist").is(":hidden") || $("#userlisttoggle").click(), $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close"), localStorage[CHANNEL.name + "_autohiderToggle"] = 1)
                }), $("<div>").prop("id", "UserlistAutohide").addClass("customSettings").attr("data-title", "Userlist Autohider").appendTo("#customSettingsStaging"), $("<div>").addClass("form-group").append($("<button/>").prop("id", "ccs-userlisthide_toggle").addClass("btn btn-sm btn-default col-sm-2").attr("title", "Toggle Autohide").html("&nbsp;Toggle").prepend($("<span>").addClass("glyphicon glyphicon-eye-open")).click(function() {
                    window[CHANNEL.name].autohider.toggle()
                })).append($("<label>").addClass("control-label col-sm-2").attr("for", "ccs-userlisthide_timeout").prepend($("<span>").addClass("label label-info pull-right").text("Timeout:"))).append($("<div>").addClass("col-sm-8").append($("<input>").prop("id", "ccs-userlisthide_timeout").addClass("form-control cs-textbox").attr("type", "text").attr("placeholder", "Delay before hide in ms. Default is " + window[CHANNEL.name].autohider.defaultTime).keyup(function() {
                    var e = $(this),
                        t = e.val(),
                        n = Date.now();
                    e.data("lastkey", n), setTimeout(function() {
                        e.data("lastkey") === n && e.val() === t && (parseInt(t) > -1 ? parseInt(t) < 1e4 ? (e.val(1e4), localStorage[CHANNEL.name + "_autohiderTimeout"] = 1e4, console.log("Userlist autohiding timeout set to minimum value")) : (localStorage[CHANNEL.name + "_autohiderTimeout"] = parseInt(t), console.log("Userlist autohiding timeout set to " + t)) : e.val(""))
                    }, 1e3)
                }))).appendTo($("#UserlistAutohide")), window[CHANNEL.name].autohider.timeout !== window[CHANNEL.name].autohider.defaultTime && $("#ccs-userlisthide_timeout").val(window[CHANNEL.name].autohider.timeout), window[CHANNEL.name].autohider.toggleState && $("#ccs-userlisthide_toggle").toggleClass("btn-default btn-warning").find("span.glyphicon").toggleClass("glyphicon-eye-open glyphicon-eye-close"), window[CHANNEL.name].autohider.toggleState) {
                var e = window[CHANNEL.name].autohider.timeout;
                parseInt(e) && setTimeout(function() {
                    $("#userlist").is(":hidden") || $("#userlisttoggle").click()
                }, e)
            }
        }(), $("#messagebuffer").data("spoilertype", "hover"), $("#messagebuffer").off("mouseenter.spoiler mouseleave.spoiler"), $("#messagebuffer").on("mouseenter.spoiler mouseleave.spoiler", ".image-spoiler", function(e) {
            "click" !== $("#messagebuffer").data("spoilertype") && ("mouseenter" === e.type ? $(this).attr("src", $(this).data().src).attr("data-spoiled", "true") : $(this).attr("src", $(this).data().spoiler).attr("data-spoiled", "false"))
        }), $("#messagebuffer").off("click.spoiler"), $("#messagebuffer").on("click.spoiler", ".image-spoiler", function(e) {
            if (e.shiftKey || e.ctrlKey || !e.altKey) "hover" !== $("#messagebuffer").data("spoilertype") && (e.preventDefault(), "false" === $(this).attr("data-spoiled") ? $(this).attr("src", $(this).data().src).attr("data-spoiled", "true") : $(this).attr("src", $(this).data().spoiler).attr("data-spoiled", "false"));
            else {
                if (e.preventDefault(), $(this).hasClass("image-embed-large")) return void $(this).removeClass("image-embed-large").addClass("image-embed-small");
                if ($(this).hasClass("image-embed-medium")) return void $(this).removeClass("image-embed-medium").addClass("image-embed-large");
                if ($(this).hasClass("image-embed-small")) return void $(this).removeClass("image-embed-small").addClass("image-embed-medium")
            }
        }), $("#cs-emotes-export").unbind("click"), $("#cs-emotes-export").click(function() {
            var e = CHANNEL.emotes.map(function(e) {
                return {
                    name: e.name,
                    image: e.image
                }
            });
            $("#cs-emotes-exporttext").val(JSON.stringify(e).replace(/\},\{/g, "},\n{"))
        }), $("#cs-chatfilters-export").unbind("click"), $("#cs-chatfilters-export").click(function() {
            var e = function e(t) {
                socket.listeners("chatFilters").splice(socket.listeners("chatFilters").indexOf(e)), $("#cs-chatfilters-exporttext").val(JSON.stringify(t).replace(/\},\{/g, "},\n{"))
            };
            socket.on("chatFilters", e), socket.emit("requestChatFilters")
        })
}, function(e, t) {
    /*!
     **|  CyTube Extra Volume Controls
     **|  Written by Xaekai
     **|  Copyright 2014-2016
     **|
     **@preserve
     */
    $("[id^=volumeButton]").remove();
    $("<button/>").prop("id", "volumeButtonUp").addClass("btn btn-default btn-sm").attr("type", "button").attr("title", "Volume Up").html("<span class='glyphicon glyphicon-volume-up'></span>").on("click", function() {
        PLAYER.getVolume(function(e) {
            var t = Math.min(1, Math.max(0, .01 * Math.round((e + (e >= .1 ? e >= .2 ? .05 : .02 : .01)) / .01))).toFixed(2);
            PLAYER.setVolume(t), $("#volumeButtonIndicator").html(t)
        })
    }).prependTo("#videocontrols"), $("<button/>").prop("id", "volumeButtonIndicator").addClass("btn btn-success btn-sm").attr("type", "button").attr("title", "Volume Indicator / Mute").html("???").on("click", function() {
        $(this).data().mutedState ? (PLAYER.setVolume($(this).data().preMutedVolume), $(this).data().mutedState = !1, $(this).toggleClass("btn-success btn-warning")) : PLAYER.getVolume(function(e) {
            $("#volumeButtonIndicator").data().preMutedVolume = e, $("#volumeButtonIndicator").data().mutedState = !0, $("#volumeButtonIndicator").toggleClass("btn-success btn-warning"), PLAYER.setVolume(0)
        })
    }).data("mutedState", !1).prependTo("#videocontrols"), $("<button/>").prop("id", "volumeButtonDown").addClass("btn btn-default btn-sm").attr("type", "button").attr("title", "Volume Down").html("<span class='glyphicon glyphicon-volume-down'></span>").on("click", function() {
        PLAYER.getVolume(function(e) {
            var t = Math.min(1, Math.max(0, .01 * Math.round((e - (e <= .2 ? e <= .1 ? .01 : .02 : .05)) / .01))).toFixed(2);
            PLAYER.setVolume(t), $("#volumeButtonIndicator").html(t)
        })
    }).prependTo("#videocontrols");
    CLIENT.rank >= CHANNEL.perms.seeplaylist && $("#queue .queue_entry").length && PLAYER.getVolume(function(e) {
        $("#volumeButtonIndicator").html(e.toFixed(2))
    }), CLIENT.volumeListener || (CLIENT.volumeListener = !0, setInterval(function() {
        PLAYER.getVolume(function(e) {
            $("#volumeButtonIndicator").html(e.toFixed(2))
        })
    }, 3333), socket.on("changeMedia", function() {
        setTimeout(function() {
            PLAYER.getVolume(function(e) {
                $("#volumeButtonIndicator").html(e.toFixed(2))
            })
        }, 2050)
    }))
}, function(e, t) {
    /*!  
    **|  CyTube In-Chat Media Embedding Support
    **|  Written by Xaekai
    **|  Version: 2015.12.25
    ///

    WebM / Imgur GifV:

    Sound Embedding Filters:

    Normal:
    \b(https?\:\/\/)(.*?)[.,](?:sound|play)\b
    <span class="sound-embed" style="display:none;" data-proto="\1" data-path="\2"></span>

    Replace for autoplay:
    <span class="sound-embed autoplay" style="display:none;" data-proto="\1" data-path="\2"></span>

    \\\
    **@preserve
    */
    function n() {
        $("img.webm").each(function(e) {
            var t = this,
                n = $("<video>").attr("preload", "").attr("volume", .5).attr("webkit-playsinline", "").text("Your browser does not support the video tag.");
            $(this).hasClass("data") && ($(this).attr("src", $(this).attr("data-src")), $(this).removeAttr("data-src"));
            var o = $(this).attr("src");
            $(this).hasClass("imgur") && ($(this).removeAttr("src"), o = o.split(".").reverse().splice(1).reverse().join("."), n.append('<source src="' + o + '.mp4" type="video/mp4">').append('<source src="' + o + '.webm" type="video/webm">'));
            var a = $(this).parents('div[class*="chat-msg"]').attr("class").match(/chat-msg-[^ ]+/)[0].replace(/chat-msg-/, ""),
                i = findUserlistItem(a) ? findUserlistItem(a).data().rank : -2,
                s = $(this).attr("data-params") || "";
            $(this).removeAttr("data-params");
            var r = {
                autoplay: !!(s.match(/a/) && i >= 1),
                unmuted: !!(s.match(/m/) && i >= 1),
                loop: !!(s.match(/l/) && i >= 1),
                controls: !!(s.match(/c/) && i >= 2),
                shens: ""
            };
            r.autoplay && r.unmuted && i < 2 && (r.autoplay = !1, r.shens = " Attempted unauthorized unmuted autoplay");
            try {
                window[CHANNEL.name].VirtualWhisper(String().concat("Video Media embedded by ", a, ". Rank: ", i > -2 ? i : "unknown", " Autoplay:", r.autoplay, " Unmuted:", r.unmuted, " Loop:", r.loop, " Hide Controls:", r.controls))
            } catch (e) {
                return
            }
            r.autoplay && (n.attr("autoplay", ""), n[0].autoplay = !0), r.loop && (n.attr("loop", ""), n[0].loop = !0), r.unmuted ? (n.removeAttr("muted"), n[0].muted = !1) : (n.attr("muted", ""), n[0].muted = !0), r.controls ? (n.removeAttr("controls"), n[0].controls = !1) : (n.attr("controls", ""), n[0].controls = !0), attrs = null, $.each(this.attributes, function(e) {
                $(n).attr(t.attributes[e].name, t.attributes[e].value)
            }), $(this).parent().after(n.addClass("webmvol")).remove(), setTimeout(function() {
                $(".webmvol").each(function() {
                    $(this)[0].volume = .33, $(this).removeClass("webmvol")
                })
            }, 1500)
        })
    }

    function o(e) {
        $(".sound-embed:not(.parsed)").each(function(e) {
            var t = $(this),
                n = t.attr("data-path"),
                o = t.attr("data-proto");
            t.addClass("parsed").append($("<audio>").append($("<source>").attr("src", o + n).attr("type", "audio/mpeg")).prop("volume", .4).on("play", function() {
                $(this).siblings("button").addClass("btn-success").removeClass("btn-default btn-warning").html('<span class="glyphicon glyphicon-pause"></span>').attr("title", "Click to pause")
            }).on("pause", function() {
                $(this).siblings("button").addClass("btn-warning").removeClass("btn-default btn-success").html('<span class="glyphicon glyphicon-play"></span>').attr("title", "Click to resume")
            }).on("ended", function() {
                $(this).siblings("button").addClass("btn-default").removeClass("btn-success btn-warning").html('<span class="glyphicon glyphicon-play"></span>').attr("title", "Click to play")
            })).append($("<button>").addClass("btn btn-sm btn-default playsound").attr("title", "Click to play").html('<span class="glyphicon glyphicon-play"></span>').on("click", function(e) {
                if (e.ctrlKey) return void $("#chatline").val(String().concat($("#chatline").val(), " ", $(this).siblings("audio").children("source").attr("src")));
                var t = $(this).siblings("audio")[0];
                t.paused ? t.play() : t.pause()
            })).show(), t.hasClass("autoplay") && t.children("audio").attr("autoplay", !0)
        })
    }
    CHANNEL.mediaListeners || (CHANNEL.mediaListeners = socket.on("chatMsg", function() {
        o(), n()
    }), o(), n(), $(".webm").each(function() {
        $(this)[0].volume = .33
    }))
}, function(e, t) {
    /*!  
     **|  CyTube Virtual Whispers and User Join/Leave messages for Everybody
     **|  Written by Xaekai
     **|  Copyright 2013-2016
     **|  
     **@preserve
     */
    window[CHANNEL.name].VirtualWhisperOffset = 0, window[CHANNEL.name].VirtualWhisperSync = function() {
        socket.once("chatMsg", function(e) {
            window[CHANNEL.name].VirtualWhisperOffset = Date.now() - e.time
        })
    }, setTimeout(window[CHANNEL.name].VirtualWhisperSync, 2e3), setTimeout(window[CHANNEL.name].VirtualWhisperSync, 3e4), window[CHANNEL.name].VirtualWhisper = function(e) {
        var t = {
            time: Date.now() - window[CHANNEL.name].VirtualWhisperOffset,
            username: "[server]",
            msg: e,
            msgclass: "server-whisper",
            meta: {
                shadow: !1,
                addClass: "server-whisper",
                addClassToNameAndTimestamp: !0
            }
        };
        addChatMessage(t)
    }, window[CHANNEL.name].VirtualWhisperTick = 1e3, window[CHANNEL.name].VirtualWhisperExpire = function(e) {
        if (document.hidden) return void $("div.chat-msg-\\\\\\$server\\\\\\$[data-expire]").each(function() {
            $(this).attr("data-expire", parseInt($(this).attr("data-expire")) + e)
        });
        $("div.chat-msg-\\\\\\$server\\\\\\$[data-expire]").first().each(function() {
            Date.now() > parseInt($(this).attr("data-expire")) && $(this).remove()
        }), $("div.chat-msg-\\\\\\$server\\\\\\$:not([data-expire])").each(function() {
            $(this).attr("data-expire", Date.now() + 3e4)
        })
    }, window[CHANNEL.name].whisperUserLeave = function(e) {
        window[CHANNEL.name].VirtualWhisper(e.name + " disconnected")
    }, window[CHANNEL.name].whisperUserJoin = function(e) {
        window[CHANNEL.name].VirtualWhisper(e.name + " joined")
    }, window[CHANNEL.name].loaded_whispers || (window[CHANNEL.name].loaded_whispers = !0, $("#messagebuffer").on("whisper", function(e, t) {
        window[CHANNEL.name].VirtualWhisper(t)
    }), socket.on("userLeave", function(e) {
        window[CHANNEL.name].whisperUserLeave(e)
    }), socket.on("addUser", function(e) {
        CLIENT.rank < 2 && window[CHANNEL.name].whisperUserJoin(e)
    }), setInterval(function(e) {
        return window[CHANNEL.name].VirtualWhisperExpire(e)
    }, window[CHANNEL.name].VirtualWhisperTick, window[CHANNEL.name].VirtualWhisperTick))
}, function(e, t) {}, function(e, t) {
    $("#chatheader").append('<span id="topbutton" class="label pull-right pointer label-topbutton">Top</span>'), CLIENT._hideNav = JSON.parse(localStorage.getItem(CHANNEL.name + "_hideNav")), null === CLIENT._hideNav && (CLIENT._hideNav, localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(!1))), CLIENT._hideNav === !0 && ($(".navbar").hide(), $("#motdrow").hide(), $("#cinematoggle").hide(), $("#topbutton").removeClass("label-topbutton").addClass("label-default"), $("#mainpage").css("padding-top", "10px")), $("#topbutton").click(function() {
        CLIENT._hideNav === !1 ? (CLIENT._hideNav = !0, localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(!0)), $(".navbar").hide(), $("#motdrow").hide(), $("#cinematoggle").hide(), $("#topbutton").removeClass("label-topbutton").addClass("label-default"), $("#mainpage").css("padding-top", "10px")) : (CLIENT._hideNav = !1, localStorage.setItem(CHANNEL.name + "_hideNav", JSON.stringify(!1)), $(".navbar").show(), $("#motdrow").show(), $("#cinematoggle").show(), $("#topbutton").removeClass("label-default").addClass("label-topbutton"), $("#mainpage").css("padding-top", "60px"))
    })
}, function(e, t) {
    ! function() {
        if (void 0 !== CLIENT.displayOpts) return console.error("Tried to load displayOpts add-on, but CLIENT.displayOpts already exists (did it load already?)");
        CLIENT.displayOpts = {
            noRepeat: !0,
            utcClock: !0,
            motd: !0,
            footer: !0,
            inactivepolls: !0,
            hidevidonskip: !1,
            botMsg: {
                pokeroll: !0,
                polls: !1,
                modMsg: !1,
                voteskip: !1,
                cmdMsg: !0
            },
            buttons: {
                mod: !0,
                nnd: !0,
                channelcontrol: !0,
                autoplay: !0,
                largePlayer: !0,
                emotelist: !0,
                newpoll: !0,
                selfclear: !0,
                afkCount: !0,
                anim: !0,
                top: !0,
                squee: !0,
                lightsout: !0,
                rate: !0,
                modhat: !0,
                volumecontrol: !0,
                library: !0,
                search: !0,
                skip: !0,
                shuffle: !1,
                chance: !1,
                customembed: !1,
                playlistlock: !1,
                leader: !1,
                notify: !0,
                queuenext: !0
            }
        }, CLIENT.displayOptsFns = {
            load: function() {
                localStorage.getItem(CHANNEL.name + "_displayOpts") && (CLIENT.displayOpts = JSON.parse(localStorage.getItem(CHANNEL.name + "_displayOpts"))), CLIENT.displayOptsFns.updateModal()
            },
            save: function() {
                CLIENT.displayOpts.noRepeat = $("#disopt-noRepeat").prop("checked"), CLIENT.displayOpts.utcClock = $("#disopt-utcClock").prop("checked"), CLIENT.displayOpts.motd = $("#disopt-motd").prop("checked"), CLIENT.displayOpts.footer = $("#disopt-footer").prop("checked"), CLIENT.displayOpts.inactivepolls = $("#disopt-inactivepolls").prop("checked"), CLIENT.displayOpts.hidevidonskip = $("#disopt-hidevidonskip").prop("checked"), CLIENT.displayOpts.botMsg.pokeroll = $("#disopt-botMsg-pokeroll").prop("checked"), CLIENT.displayOpts.botMsg.polls = $("#disopt-botMsg-polls").prop("checked"), CLIENT.displayOpts.botMsg.modMsg = $("#disopt-botMsg-modMsg").prop("checked"), CLIENT.displayOpts.botMsg.voteskip = $("#disopt-botMsg-voteskip").prop("checked"), CLIENT.displayOpts.botMsg.cmdMsg = $("#disopt-botMsg-cmdMsg").prop("checked"), CLIENT.displayOpts.buttons.mod = $("#disopt-buttons-mod").prop("checked"), CLIENT.displayOpts.buttons.nnd = $("#disopt-buttons-nnd").prop("checked"), CLIENT.displayOpts.buttons.channelcontrol = $("#disopt-buttons-channelcontrol").prop("checked"), CLIENT.displayOpts.buttons.autoplay = $("#disopt-buttons-autoplay").prop("checked"), CLIENT.displayOpts.buttons.emotelist = $("#disopt-buttons-emotelist").prop("checked"), CLIENT.displayOpts.buttons.newpoll = $("#disopt-buttons-newpoll").prop("checked"), CLIENT.displayOpts.buttons.selfclear = $("#disopt-buttons-selfclear").prop("checked"), CLIENT.displayOpts.buttons.afkCount = $("#disopt-buttons-afkCount").prop("checked"), CLIENT.displayOpts.buttons.anim = $("#disopt-buttons-anim").prop("checked"), CLIENT.displayOpts.buttons.top = $("#disopt-buttons-top").prop("checked"), CLIENT.displayOpts.buttons.squee = $("#disopt-buttons-squee").prop("checked"), CLIENT.displayOpts.buttons.lightsout = $("#disopt-buttons-lightsout").prop("checked"), CLIENT.displayOpts.buttons.rate = $("#disopt-buttons-rate").prop("checked"), CLIENT.displayOpts.buttons.modhat = $("#disopt-buttons-modhat").prop("checked"), CLIENT.displayOpts.buttons.volumecontrol = $("#disopt-buttons-volumecontrol").prop("checked"), CLIENT.displayOpts.buttons.library = $("#disopt-buttons-library").prop("checked"), CLIENT.displayOpts.buttons.search = $("#disopt-buttons-search").prop("checked"), CLIENT.displayOpts.buttons.skip = $("#disopt-buttons-skip").prop("checked"), CLIENT.displayOpts.buttons.shuffle = $("#disopt-buttons-shuffle").prop("checked"), CLIENT.displayOpts.buttons.chance = $("#disopt-buttons-chance").prop("checked"), CLIENT.displayOpts.buttons.customembed = $("#disopt-buttons-customembed").prop("checked"), CLIENT.displayOpts.buttons.playlistlock = $("#disopt-buttons-playlistlock").prop("checked"), CLIENT.displayOpts.buttons.leader = $("#disopt-buttons-leader").prop("checked"), CLIENT.displayOpts.buttons.notify = $("#disopt-buttons-notify").prop("checked"), CLIENT.displayOpts.buttons.queuenext = $("#disopt-buttons-queuenext").prop("checked"), CLIENT.displayOptsFns.processHidden(), localStorage.setItem(CHANNEL.name + "_displayOpts", JSON.stringify(CLIENT.displayOpts))
            },
            updateModal: function() {
                $("#disopt-noRepeat").prop("checked", CLIENT.displayOpts.noRepeat), $("#disopt-utcClock").prop("checked", CLIENT.displayOpts.utcClock), $("#disopt-motd").prop("checked", CLIENT.displayOpts.motd), $("#disopt-footer").prop("checked", CLIENT.displayOpts.footer), $("#disopt-inactivepolls").prop("checked", CLIENT.displayOpts.inactivepolls), $("#disopt-hidevidonskip").prop("checked", CLIENT.displayOpts.hidevidonskip), $("#disopt-botMsg-pokeroll").prop("checked", CLIENT.displayOpts.botMsg.pokeroll), $("#disopt-botMsg-polls").prop("checked", CLIENT.displayOpts.botMsg.polls), $("#disopt-botMsg-modMsg").prop("checked", CLIENT.displayOpts.botMsg.modMsg), $("#disopt-botMsg-voteskip").prop("checked", CLIENT.displayOpts.botMsg.voteskip), $("#disopt-botMsg-cmdMsg").prop("checked", CLIENT.displayOpts.botMsg.cmdMsg), $("#disopt-buttons-mod").prop("checked", CLIENT.displayOpts.buttons.mod), $("#disopt-buttons-nnd").prop("checked", CLIENT.displayOpts.buttons.nnd), $("#disopt-buttons-channelcontrol").prop("checked", CLIENT.displayOpts.buttons.channelcontrol), $("#disopt-buttons-autoplay").prop("checked", CLIENT.displayOpts.buttons.autoplay), $("#disopt-buttons-emotelist").prop("checked", CLIENT.displayOpts.buttons.emotelist), $("#disopt-buttons-newpoll").prop("checked", CLIENT.displayOpts.buttons.newpoll), $("#disopt-buttons-selfclear").prop("checked", CLIENT.displayOpts.buttons.selfclear), $("#disopt-buttons-afkCount").prop("checked", CLIENT.displayOpts.buttons.afkCount), $("#disopt-buttons-anim").prop("checked", CLIENT.displayOpts.buttons.anim), $("#disopt-buttons-top").prop("checked", CLIENT.displayOpts.buttons.top), $("#disopt-buttons-squee").prop("checked", CLIENT.displayOpts.buttons.squee), $("#disopt-buttons-lightsout").prop("checked", CLIENT.displayOpts.buttons.lightsout), $("#disopt-buttons-rate").prop("checked", CLIENT.displayOpts.buttons.rate), $("#disopt-buttons-modhat").prop("checked", CLIENT.displayOpts.buttons.modhat), $("#disopt-buttons-volumecontrol").prop("checked", CLIENT.displayOpts.buttons.volumecontrol), $("#disopt-buttons-library").prop("checked", CLIENT.displayOpts.buttons.library), $("#disopt-buttons-search").prop("checked", CLIENT.displayOpts.buttons.search), $("#disopt-buttons-skip").prop("checked", CLIENT.displayOpts.buttons.skip), $("#disopt-buttons-shuffle").prop("checked", CLIENT.displayOpts.buttons.shuffle), $("#disopt-buttons-chance").prop("checked", CLIENT.displayOpts.buttons.chance), $("#disopt-buttons-customembed").prop("checked", CLIENT.displayOpts.buttons.customembed), $("#disopt-buttons-playlistlock").prop("checked", CLIENT.displayOpts.buttons.playlistlock), $("#disopt-buttons-leader").prop("checked", CLIENT.displayOpts.buttons.leader), $("#disopt-buttons-notify").prop("checked", CLIENT.displayOpts.buttons.notify), $("#disopt-buttons-queuenext").prop("checked", CLIENT.displayOpts.buttons.queuenext)
            },
            processHidden: function() {
                var e = [];
                $("input[data-hide]:not(:checked)").each(function() {
                    e.push($(this).attr("data-hide"))
                }), $("#hideThis").html("<style>" + e.toString() + "{display:none!important}</style>")
            },
            setHTML: function() {
                if (!$("#displayOptsModal").length) {
                    var e = '<div class="fade modal" id=displayOptsModal aria-hidden=true role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close data-dismiss=modal aria-hidden=true>x</button><h4>Advanced Display Options: <span id=modal-mh-roomname>' + CHANNEL.name + '</span></h4></div><div class=modal-body id=displayOptsModalWrap><div class=modal-option><div class=checkbox><label for=displayoption-noRepeat><input id=disopt-noRepeat type=checkbox>Show single-user spam [Turn off for Anti-cuntpizza mode]</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-utcClock><input id=disopt-utcClock type=checkbox data-hide="#utcClock">Show UTC Clock</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-motd><input id=disopt-motd type=checkbox data-hide="#motdrow">Show MOTD</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-footer><input id=disopt-footer type=checkbox data-hide="#footer">Show Footer</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-inactivepolls><input id=disopt-inactivepolls type=checkbox data-hide="#pollwrap .muted">Show Inactive Polls</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-hidevidonskip><input id=disopt-hidevidonskip type=checkbox>Hide Video after pressing Voteskip [Coming Soon]</label></div></div><br><div class=modal-option><div class=checkbox><label for=displayoption-botMsg-pokeroll><input id=disopt-botMsg-pokeroll type=checkbox>Bot: Show $pokeroll Messages</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-botMsg-polls><input id=disopt-botMsg-polls type=checkbox>Bot: Show "Poll Passed" Messages</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-botMsg-modMsg><input id=disopt-botMsg-modMsg type=checkbox>Bot: Show Mod Messages - whitenames dont see these anyway</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-botMsg-voteskip><input id=disopt-botMsg-voteskip type=checkbox> Show "Voteskip Passed" messages [Coming Soon]</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-botMsg-cmdMsg><input id=disopt-botMsg-cmdMsg type=checkbox> Show botcommand messages (anything starting with $) [Coming Soon]</label></div></div><br><div class=modal-option><div class=checkbox><label for=displayoption-buttons-mod><input id=disopt-buttons-mod type=checkbox data-hide="#checkitout">Show Mod Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-nnd><input id=disopt-buttons-nnd type=checkbox data-hide="#toggleNND">Show NND Chat Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-channelcontrol><input id=disopt-buttons-channelcontrol type=checkbox data-hide="#customSettingsModalTrigger">Show Channel Control Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-autoplay><input id=disopt-buttons-autoplay type=checkbox data-hide="#autoplay">Show autoplay Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-emotelist><input id=disopt-buttons-emotelist type=checkbox data-hide="#emotelistbtn">Show Emote List Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-newpoll><input id=disopt-buttons-newpoll type=checkbox data-hide="#newpollbtn">Show New Poll Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-selfclear><input id=disopt-buttons-selfclear type=checkbox data-hide="#selfClearbtn">Show Chat Clear Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-afkCount><input id=disopt-buttons-afkCount type=checkbox data-hide="#afkCount"> Show AFK Count</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-anim><input id=disopt-buttons-anim type=checkbox data-hide="#animationbutton"> Show Animation Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-top><input id=disopt-buttons-top type=checkbox data-hide="#topbutton"> Show Top Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-squee><input id=disopt-buttons-squee type=checkbox data-hide="#AudioNoticeSqueeToggle"> Show Squee Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-lightsout><input id=disopt-buttons-lightsout type=checkbox data-hide=".lightsoutbtn"> Show lightsout Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-rate><input id=disopt-buttons-rate type=checkbox data-hide=".msgsecbutton"> Show Message Rate Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-modhat><input id=disopt-buttons-modhat type=checkbox data-hide="#modhat"> Show Name Color Button (Mods Only)</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-volumecontrol><input id=disopt-buttons-volumecontrol type=checkbox data-hide="#volumeButtonDown, #volumeButtonUp, #volumeButtonIndicator"> Show Volume Controls (under Player)</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-library><input id=disopt-buttons-library type=checkbox data-hide="#showplaylistmanager"> Show Playlist Library Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-search><input id=disopt-buttons-search type=checkbox data-hide="#showsearch"> Show Search Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-skip><input id=disopt-buttons-skip type=checkbox data-hide="#voteskip"> Show Skip Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-shuffle><input id=disopt-buttons-shuffle type=checkbox data-hide="#shuffleplaylist"> Show Shuffle Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-chance><input id=disopt-buttons-chance type=checkbox data-hide="#clearplaylist"> Show Chance Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-customembed><input id=disopt-buttons-customembed type=checkbox data-hide="#showcustomembed"> Show Custom Embed Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-playlistlock><input id=disopt-buttons-playlistlock type=checkbox data-hide="#qlockbtn"> Show Playlist Lock Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-leader><input id=disopt-buttons-leader type=checkbox data-hide="#leader">Show Take Leader Button</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-notify><input id=disopt-buttons-notify type=checkbox data-hide="#qbtnnotify">Show Notify Buttons (In playlist)</label></div></div><div class=modal-option><div class=checkbox><label for=displayoption-buttons-queuenext><input id=disopt-buttons-queuenext type=checkbox data-hide="#queue-next">Show Next Button</label></div></div></div><div class=modal-footer><div class=left-warning>Settings are not applied until you click Save.</div><button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.displayOptsFns.save() type=button>Save</button><button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.displayOptsFns.updateModal() type=button>Close</button><div class=subfooter><span class=by>written by hunter2, code stolen from zeratul a bit tho tbh</span><span class=ver>version 1.0</span></div></div></div></div></div>';
                    $(e).insertBefore("#pmbar")
                }
                $("#showdisplayOptsmodal").length || $("ul.navbar-nav .settings-dropdown").append($("<li/>").append("<a id=showdisplayOptsmodal href=javascript:void(0) onclick=javascript:CLIENT.displayOptsFns.openModal()>Hide Options</a>")), $(".head-DISOPTS-CSS").remove(), $("head").append('<div id="hideThis" style="display:none"></div><style class="head-DISOPTS-CSS">.modal .modal-scroll {padding: 4px;background: #161616;box-shadow: 0 0 10px black inset;border: 1px solid black;border-radius: 6px;width: 100%;height:310px;overflow-y: auto;margin-top: 30px;}.modal label.numInput {min-height: 20px;padding-left: 20px;margin-bottom: 0;font-weight: 400;}.modal .left-warning {float: left;padding: 10px 12px;font-size: 13px;color: #ff8f8f}.modal .modal-caption {font-size: 13px;text-indent: 35px;color: #8f9cad}#displayOptsModal .subfooter {text-align: center;color: #757575}#displayOptsModal .subfooter .by {padding-right: 10px;border-right: 1px solid #252525}#displayOptsModal .subfooter .ver {padding-left: 10px;border-left: 1px solid #4e4e4e}</style>')
            },
            openModal: function() {
                $("#displayOptsModal").modal()
            }
        }, CLIENT.displayOptsFns.setHTML(), CLIENT.displayOptsFns.load(), CLIENT.displayOptsFns.updateModal(), CLIENT.displayOptsFns.processHidden(), $(window).unload(function() {
            CLIENT.displayOptsFns.save()
        })
    }()
}, function(e, t) {
    function n(e, t) {
        if (void 0 !== window.nnd) {
            var n = window.nnd;
            if ((n.MAX < 1 || isNaN(parseInt(n.MAX))) && (n.MAX = window.nnd.MAX = 100), n.enabled && $("#ytapiplayer")[0] && null !== e && "string" == typeof e && e.length > 0 && !/^\$/.test(e)) {
                var o = "0px",
                    a = "right";
                for (e.length > 240 && (e = e.substring(0, 240)), n.fromRight || (a = "left"); $(".videoText").length >= n.MAX && n.MAX >= 1;) $(".videoText").eq(0).remove();
                var i = 24 * Math.random() + 24;
                1 === n.offsetType ? o = 89 * Math.random() + "%" : (o = i * Math.floor(Math.random() * Math.floor($("#ytapiplayer").height() / i)) + "px", (n.offsetType < 0 || n.offsetType > 1) && (console.error("NNDchat: Unknown offsetType " + n.offsetType + ", reverting to 0"), window.nnd.offsetType = 0));
                var s = $("<div/>", {
                    class: "videoText " + t,
                    style: "visibility: hidden; top:" + o + "; font-size:" + i + "px"
                }).append(e);
                $(".videochatContainer").append(s), s.css(a, 0 - s.width() + "px"), s.addClass("moving"), s.css("visibility", "visible"), s.css(a, $("#ytapiplayer").width() + "px")
            }
        }
    }! function() {
        if ($(".head-NNDCSS").remove(), $("<style />", {
                class: "head-NNDCSS",
                text: ".videoText {color: white;font-size: 2em;position: absolute;z-index: 1;cursor: default;white-space:nowrap;opacity:0.7;font-family: 'Meiryo', sans-serif;letter-spacing: 4px;user-select: none;text-shadow: 0 -1px #000, 1px 0 #000, 0 1px #000, -1px 0 #000;pointer-events: none}.videoText.moving {transition: right 7.5s linear, left 7.5s linear}.videoText.greentext {color: #789922}.videoText img {max-height: 64px;max-width: 64px}.videoText.shout {color: #f00}.modal .left-warning {float: left;padding: 10px 12px;font-size: 13px;color: #ff8f8f}.modal .modal-caption {font-size: 13px;text-indent: 35px;color: #8f9cad}#nndSettingsWrap .radio label {display: block;color: #c4ccd8}#nndSettingsWrap #nnd-maxmsgs {margin: 10px 0;width: 25%;min-width: 200px}.modal-subheader {font-size: 16px;border-bottom: 1px solid #212123;margin-left: -10px;padding: 10px 0 0 2px}#nndSettingsModal .subfooter {text-align: center;color: #757575}#nndSettingsModal .subfooter .by {padding-right: 10px;border-right: 1px solid #252525}#nndSettingsModal .subfooter .ver {padding-left: 10px;border-left: 1px solid #4e4e4e}"
            }).appendTo("head"), console.debug("NND Chat: CSS added to page header"), CLIENT.runNND) return void console.error("NND Chat script attempted to load, but it looks like it has already been loaded!");
        CLIENT.runNND = !0, window.nnd = {
            enabled: !1,
            MAX: 100,
            offsetType: 0,
            fromRight: !0,
            _fn: {
                init: function() {
                    nnd.enabled = !1, nnd.MAX = 100, nnd.offsetType = 0, nnd.fromRight = !0, nnd._fn.updateModal(), nnd._fn.save()
                },
                getopts: function() {
                    var e = {};
                    for (var t in window.nnd) /^\_/.test(t) || (e[t] = window.nnd[t]);
                    return e
                },
                save: function() {
                    return localStorage.setItem(CHANNEL.name + "_nndOptions", JSON.stringify(window.nnd._fn.getopts()))
                },
                load: function() {
                    var e = JSON.parse(localStorage.getItem(CHANNEL.name + "_nndOptions"));
                    if (null === e || void 0 === e) return nnd._fn.init(), void console.debug("NND settings not found, using defaults and saving them");
                    for (var t in e) nnd.hasOwnProperty(t) && !/^\_/.test(t) && (nnd[t] = e[t]);
                    nnd._fn.save(), nnd._fn.updateModal()
                },
                updateModal: function() {
                    $("#nnd-enable").prop("checked", nnd.enabled), $("#nnd-offsettype-" + nnd.offsetType).prop("checked", !0), $("#nnd-fromright-" + nnd.fromRight).prop("checked", !0), $("#nnd-maxmsgs").attr("placeholder", nnd.MAX), $("#nnd-maxmsgs").val(nnd.MAX)
                },
                saveFromModal: function() {
                    if (nnd.enabled = $("#nnd-enable").prop("checked"), nnd.enabled || $(".videoText").remove(), $("#nnd-offsettype-0").prop("checked") ? nnd.offsetType = 0 : $("#nnd-offsettype-1").prop("checked") && (nnd.offsetType = 1), $("#nnd-fromright-true").prop("checked") ? nnd.fromRight = !0 : $("#nnd-fromright-false").prop("checked") && (nnd.fromRight = !1), !isNaN(parseInt($("#nnd-maxmsgs").val())) && parseInt($("#nnd-maxmsgs").val()) >= 1) {
                        var e = parseInt($("#nnd-maxmsgs").val());
                        nnd.MAX = e, $("#nnd-maxmsgs").attr("placeholder", e), $("#nnd-maxmsgs").val(e)
                    } else $("#nnd-maxmsgs").val(nnd.MAX), $("#nnd-maxmsg").attr("placeholder", nnd.MAX);
                    nnd._fn.save()
                }
            },
            _ver: "1.01"
        }, $('<div class="fade modal"id=nndSettingsModal aria-hidden=true role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close data-dismiss=modal aria-hidden=true>Ã—</button><h4>NND Chat Settings: <span id=modal-nnd-roomname>' + CHANNEL.name + '</span></h4></div><div class=modal-body id=nndSettingsWrap><div class=modal-option><div class=checkbox><label for=nnd-enable><input id=nnd-enable type=checkbox> Enable NND Chat</label><div class=modal-caption>Enable Nico Nico Douga-style chat messages. Places chat messages on the currently playing video and scrolls them to the opposite side.</div></div></div><div class=modal-option><div class=modal-subheader>Message Offset</div><div class=radio><label for=nnd-offsettype-0><input id=nnd-offsettype-0 type=radio name=offsettype> Random position based on font size of message and video player height</label><br><label for=nnd-offsettype-1><input id=nnd-offsettype-1 type=radio name=offsettype> Random percent from top of video player</label><div class=modal-caption>Determines how the position of the chat message is generated.</div></div></div><div class=modal-option><div class=modal-subheader>Message Direction</div><div class=radio><label for=nnd-fromright-true><input id=nnd-fromright-true type=radio name=fromright> from Right to Left</label><br><label for=nnd-fromright-false><input id=nnd-fromright-false type=radio name=fromright> from Left to Right</label><div class=modal-caption>Determines where new messages will start and end.</div></div></div><div class=modal-option><div class=modal-subheader>Maximum Messages</div><input id=nnd-maxmsgs type=text class=form-control placeholder=100><div class=modal-caption>Maximum amount of messages allowed on screen at once before the oldest messages are removed. A large amount of messages may cause lag. Default 100.</div></div></div><div class=modal-footer><div class=left-warning>Settings are not applied until you click Save.</div><button class="btn btn-primary"data-dismiss=modal type=button onclick=nnd._fn.saveFromModal()>Save</button> <button class="btn btn-primary"data-dismiss=modal type=button onclick=nnd._fn.updateModal()>Close</button><div class="subfooter"><span class="by">NND chat created by zeratul</span><span class="ver">version ' + nnd._ver + "</span></div></div></div></div></div>").insertBefore("#pmbar"), nnd._fn.load(), nnd._fn.updateModal(), $("#leftcontrols").append($("<button/>", {
            id: "toggleNND",
            class: "btn btn-default btn-sm",
            html: 'NND <span class="glyphicon glyphicon-cog"></span>',
            click: function() {
                return $("#nndSettingsModal").modal()
            }
        })), $(".embed-responsive").prepend($("<div/>", {
            class: "videochatContainer"
        })), $("#main").on("transitionend", ".videochatContainer .videoText", function() {
            $(this).remove()
        }), socket.on("chatMsg", function(e) {
            IGNORED.indexOf(e.username) > -1 || window.nnd.enabled && "[server]" !== e.username.toLowerCase() && "v4cbot" !== e.username.toLowerCase() && (e.meta.addClass || (e.meta.addClass = ""), n(e.msg, e.meta.addClass))
        }), $(window).unload(function() {
            window.nnd._fn.save()
        }), console.debug("LOADED: NND-style Chat script for Cytu.be written by zeratul. Version " + nnd._ver)
    }()
}, function(e, t) {
    $(function() {
        if (void 0 === window.LIGHTSOUT) {
            window.LIGHTSOUT = getOpt("useLightsOut"), null === LIGHTSOUT && (setOpt("useLightsOut", !1), LIGHTSOUT = !1), $(".lightsoutbtn").remove();
            var e = $("<span/>", {
                class: "lightsoutbtn label pull-right pointer label-default",
                text: "LightsOut",
                click: function() {
                    $(".LIGHTSOUT-CSS").remove(), $(this).removeClass("label-default"), $(this).removeClass("label-lightsout");
                    var e = getOpt("theme");
                    LIGHTSOUT ? (LIGHTSOUT = !1, $(this).addClass("label-default")) : "/css/themes/slate.css" === e ? (LIGHTSOUT = !0, $(this).addClass("label-lightsout"), $("head").append('<link class="LIGHTSOUT-CSS" href="https://cdn.rawgit.com/zeratul0/cytube-lightsout-theme/993a61f9/lightsout.css" rel="stylesheet">')) : ($(this).addClass("label-default"), alert("Lights Out was not set. You must be using the Slate theme.")), setOpt("useLightsOut", LIGHTSOUT)
                }
            });
            e.appendTo("#chatheader"), LIGHTSOUT && (LIGHTSOUT = !1, e.click())
        }
    })
}, function(e, t) {
    ! function() {
        if (void 0 !== CLIENT.mentionHistory) return console.error("Tried to load Mention History add-on, but CLIENT.mentionHistory already exists (did it load already?)");
        CLIENT.mentionHistory = {
            enabled: !0,
            messages: [],
            saved: [],
            savedWasOpened: !1,
            max: 200,
            unique: !0,
            ver: "1.04"
        }, CLIENT.mentionHistoryFns = {
            load: function() {
                getOpt(CHANNEL.name + "_mentionHistory") && (CLIENT.mentionHistory = getOpt(CHANNEL.name + "_mentionHistory")), CLIENT.mentionHistoryFns.validMax(), CLIENT.mentionHistoryFns.fillModal(), CLIENT.mentionHistoryFns.updateModal()
            },
            save: function() {
                for (CLIENT.mentionHistory.enabled = $("#mh-enable").prop("checked"), CLIENT.mentionHistory.unique = $("#mh-unique").prop("checked"), CLIENT.mentionHistory.max = parseInt($("#mh-maxmsgs").val()), CLIENT.mentionHistoryFns.validMax(); $("#mentionModal #mh-List div").length > CLIENT.mentionHistory.max;) $("#mentionModal #mh-List div").eq(0).remove();
                var e = CLIENT.mentionHistory.messages;
                e.length > CLIENT.mentionHistory.max && (CLIENT.mentionHistory.messages = e.slice(e.length - CLIENT.mentionHistory.max, e.length)), setOpt(CHANNEL.name + "_mentionHistory", CLIENT.mentionHistory)
            },
            validMax: function() {
                (isNaN(CLIENT.mentionHistory.max) || "number" != typeof CLIENT.mentionHistory.max || CLIENT.mentionHistory.max < 1) && (CLIENT.mentionHistory.max = 200), $("#mh-maxmsgs").val(CLIENT.mentionHistory.max)
            },
            parseMsg: function(e, t, n) {
                if (e && e.msg && e.username && e.time) {
                    var o = $("<div/>", {
                        class: "btn-group"
                    });
                    t && (~t.indexOf("save") && o.append($("<button/>", {
                        class: "btn btn-xs btn-success",
                        title: "Save this message",
                        click: function() {
                            !n && CLIENT.mentionHistoryFns.saveMessage(e) ? $(this).parent().parent().addClass("blink").removeClass("blink", 50) : $(this).parent().parent().addClass("blink-red").removeClass("blink-red", 50)
                        }
                    }).append('<span class="glyphicon glyphicon-floppy-save"></span>')), ~t.indexOf("delete") && o.append($("<button/>", {
                        class: "btn btn-xs btn-danger",
                        title: "Permanently delete this message",
                        click: function() {
                            n ? CLIENT.mentionHistoryFns.deleteSaved(e) : CLIENT.mentionHistoryFns.deleteMsg(e), $(this).parent().parent().remove()
                        }
                    }).append('<span class="glyphicon glyphicon-trash"></span>')));
                    var a = $('<div class="chat-msg-' + e.username + '"><span class="timestamp">[' + new Date(e.time).toString().split(" ").slice(0, 5).join(" ") + '] </span><span><strong class="username">' + e.username + ": </strong></span><span>" + e.msg + "</span></div>");
                    return o.children().length > 0 && a.prepend(o), a
                }
            },
            deleteMsg: function(e) {
                if (e && e.msg && e.username && e.time)
                    for (var t = 0, n = CLIENT.mentionHistory.messages; t < n.length; t++) e.msg === n[t].msg && e.username === n[t].username && e.time === n[t].time && (CLIENT.mentionHistory.messages.splice(t, 1), CLIENT.mentionHistoryFns.save())
            },
            deleteSaved: function(e) {
                if (e && e.msg && e.username && e.time)
                    for (var t = 0, n = CLIENT.mentionHistory.saved; t < n.length; t++) e.msg === n[t].msg && e.username === n[t].username && e.time === n[t].time && (CLIENT.mentionHistory.saved.splice(t, 1), CLIENT.mentionHistoryFns.save())
            },
            newMsg: function(e) {
                if (CLIENT.mentionHistory.enabled && e.msg && e.username && CLIENT.name && ~e.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase())) {
                    var t = e.msg.toLowerCase(),
                        n = e.username.toLowerCase(),
                        o = CLIENT.name.toLowerCase(),
                        a = CLIENT.mentionHistory;
                    if ("[server]" === n || n === o) return;
                    if (CLIENT.mentionHistoryFns.validMax(), a.unique)
                        for (var i = 0; i < a.messages.length; i++)
                            if (a.messages[i].msg.toLowerCase() === t && a.messages[i].username.toLowerCase() === n) return console.debug("mentionHistory: Message sent by " + e.username + " ignored, only recording unique messages");
                    CLIENT.mentionHistory.messages.push(e), $("#showmentionmodal").hasClass("newMsg") || $("#showmentionmodal").addClass("newMsg"), !$("#mh-List").hasClass("newMsg") && $("#mh-List")[0].scrollHeight > $("#mh-List")[0].clientHeight && $("#mh-List").addClass("newMsg");
                    var s = CLIENT.mentionHistory.messages;
                    s.length > CLIENT.mentionHistory.max && (CLIENT.mentionHistory.messages = s.slice(s.length - CLIENT.mentionHistory.max, s.length)), $("#mentionModal #mh-List").append(CLIENT.mentionHistoryFns.parseMsg(e, ["save", "delete"], !1)), CLIENT.mentionHistoryFns.save()
                }
            },
            saveMessage: function(e) {
                if (e && e.msg && e.username && e.time) {
                    for (var t = CLIENT.mentionHistory.saved, n = 0; n < t.length; n++)
                        if (e.msg === t[n].msg && e.username === t[n].username && e.time === t[n].time) return !1;
                    return CLIENT.mentionHistory.saved.push(e), $("#mentionModal #mh-saved").append(CLIENT.mentionHistoryFns.parseMsg(e, ["delete"], !0)), CLIENT.mentionHistoryFns.save(), !0
                }
            },
            fillModal: function() {
                $("#mentionModal #mh-List").empty();
                for (var e = 0, t = $("#mh-List"), n = CLIENT.mentionHistory.messages; e < n.length; e++) t.append(CLIENT.mentionHistoryFns.parseMsg(n[e], ["save", "delete"], !1));
                CLIENT.mentionHistoryFns.scrollAll()
            },
            fillSaved: function() {
                $("#mentionModal #mh-saved").empty();
                for (var e = 0, t = $("#mh-saved"), n = CLIENT.mentionHistory.saved; e < n.length; e++) t.append(CLIENT.mentionHistoryFns.parseMsg(n[e], ["delete"], !0));
                CLIENT.mentionHistoryFns.scrollAll()
            },
            emptyModal: function() {
                $("#mentionModal #mh-List").empty(), $("#mh-List").removeClass("newMsg")
            },
            emptySavedList: function() {
                $("#mentionModal #mh-saved").empty()
            },
            updateModal: function() {
                CLIENT.mentionHistoryFns.validMax(), $("#mh-enable").prop("checked", CLIENT.mentionHistory.enabled), $("#mh-unique").prop("checked", CLIENT.mentionHistory.unique)
            },
            empty: function() {
                confirm('Are you sure you want to permanently delete your mention history for: "' + CHANNEL.name + '"? (This will not delete any messages from the Saved Messages tab.)') && (CLIENT.mentionHistory.messages = [], CLIENT.mentionHistoryFns.save(), CLIENT.mentionHistoryFns.emptyModal())
            },
            emptySaved: function() {
                confirm('Are you sure you want to permanently delete your **SAVED** mention history for: "' + CHANNEL.name + '"? (This will not delete any messages from the All Messages tab.)') && (CLIENT.mentionHistory.saved = [], CLIENT.mentionHistoryFns.save(), CLIENT.mentionHistoryFns.emptySavedList())
            },
            setHTML: function() {
                $("#mentionModal").length || ($('<div class="fade modal" id=mentionModal aria-hidden=true role=dialog style=display:none tabindex=-1><div class=modal-dialog><div class=modal-content><div class=modal-header><button class=close data-dismiss=modal aria-hidden=true>Ã—</button><h4>Mention History: <span id=modal-mh-roomname>' + CHANNEL.name + '</span></h4></div><div class=modal-body id=mentionModalWrap><div class=modal-option><div class=checkbox><label for=mh-enable><input id=mh-enable type=checkbox> Enable Mention History</label><div class=modal-caption>When this is checked, chat messages containing your username will be recorded here.</div></div></div><div class=modal-option><div class=checkbox><label for=mh-unique><input id=mh-unique type=checkbox> Only save unique messages</label><div class=modal-caption>When this option is checked, new messages will not be recorded if your history contains a message with the same username and text.</div></div></div><div class=modal-option><label for=mh-maxmsgs class=numInput>Maximum Messages <input id=mh-maxmsgs type=text class=form-control placeholder=200></label><div class=modal-caption>Maximum amount of messages allowed to be recorded. Saved messages have no limit.</div></div><ul class="nav nav-tabs"><li class="active"><a href="#mh-List" data-toggle="tab" aria-expanded="true">All Messages</a></li><li class=""><a href="#mh-saved" data-toggle="tab" aria-expanded="false">Saved Messages</a></li></ul><div class="modal-scroll active" id=mh-List></div><div class="modal-scroll" id=mh-saved></div></div><div class=modal-footer><div class=left-warning>Settings are not applied until you click Save.</div><button class="btn btn-danger" onclick=CLIENT.mentionHistoryFns.emptySaved() type=button>Clear Saved Messages</button><button class="btn btn-danger" onclick=CLIENT.mentionHistoryFns.empty() type=button>Clear Messages</button> <button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.mentionHistoryFns.save() type=button>Save</button> <button class="btn btn-primary" data-dismiss=modal onclick=CLIENT.mentionHistoryFns.updateModal() type=button>Close</button><div class=subfooter><span class=by>written by zeratul</span><span class=ver>version ' + CLIENT.mentionHistory.ver + "</span></div></div></div></div></div>").insertBefore("#pmbar"), $("#mentionModal").on("shown.bs.modal", function() {
                    CLIENT.mentionHistoryFns.scrollAll()
                }), $("#mentionModal .nav.nav-tabs li").eq(1).on("click", function() {
                    CLIENT.mentionHistory.savedWasOpened || (CLIENT.mentionHistory.savedWasOpened = !0, CLIENT.mentionHistoryFns.scrollAll())
                }), $("#mh-List").on("scroll", function() {
                    var e = this;
                    this.classList.contains("newMsg") && e.scrollTop + e.clientHeight >= e.scrollHeight - 8 && (this.classList.remove("newMsg"), $("#showmentionmodal").removeClass("newMsg"))
                })), $("#showmentionmodal").length || $("#nav-collapsible ul.navbar-nav.navbar-left").append($("<li/>").append("<a id=showmentionmodal href=javascript:void(0) onclick=javascript:CLIENT.mentionHistoryFns.openModal()>Mention History</a>")), $(".head-MHCSS").remove(), $("head").append('<style class="head-MHCSS">#showmentionmodal.newMsg {color: red;text-shadow: 1px 0 #500, 0 1px #500, -1px 0 #500, 0 -1px #500;}#mentionModal.modal .modal-scroll {display: none;padding: 4px;background: #161616;box-shadow: 0 -4px 10px black inset;border: 1px solid black;border-top: 0;border-bottom-left-radius: 6px;border-bottom-right-radius: 6px;width: 100%;height:310px;overflow-y: auto;margin: 0!important;}#mentionModal.modal .modal-scroll.active {display: block!important;}#mentionModal.modal .btn-group .btn-success {background-image: linear-gradient(#1c6b1c,#2c822c 40%,#15a015);}#mentionModal.modal .btn-group .btn-success:hover {background-image: linear-gradient(#155015,#1f5d1f 40%,#0e6f0e);}#mentionModal.modal .nav.nav-tabs {margin-top: 30px;}#mentionModal.modal #mh-List.newMsg {border-color: red!important;}.modal .modal-scroll>div {overflow: hidden;transition: background-color .5s ease, color .5s ease;}.modal .modal-scroll>div.blink {transition: none!important;background-color: #3cbd3c;color: black;}.modal .modal-scroll>div.blink-red {transition: none!important;background-color: #a03e3e;color: black;}#mentionModal.modal .modal-scroll div .btn-group {margin: 0 5px;}.modal #mh-maxmsgs {display: inline-block;margin-left: 10px;width: 100px;}.modal label.numInput {min-height: 20px;padding-left: 20px;margin-bottom: 0;font-weight: 400;}.modal .left-warning {float: left;padding: 10px 12px;font-size: 13px;color: #ff8f8f}.modal .modal-caption {font-size: 13px;text-indent: 35px;color: #8f9cad}#mentionModal .subfooter {text-align: center;color: #757575}#mentionModal .subfooter .by {padding-right: 10px;border-right: 1px solid #252525}#mentionModal .subfooter .ver {padding-left: 10px;border-left: 1px solid #4e4e4e}</style>')
            },
            openModal: function() {
                $("#mentionModal").modal(), $("#showmentionmodal").removeClass("newMsg")
            },
            scrollAll: function() {
                var e = document.getElementById("mh-List"),
                    t = document.getElementById("mh-saved");
                e.classList.contains("active") && (e.scrollTop = e.scrollHeight), t.classList.contains("active") && (t.scrollTop = t.scrollHeight)
            }
        }, CLIENT.mentionHistoryFns.setHTML(), CLIENT.mentionHistoryFns.load(), CLIENT.mentionHistory.hasOwnProperty("saved") || (CLIENT.mentionHistory.saved = []), CLIENT.mentionHistoryFns.fillModal(), CLIENT.mentionHistoryFns.fillSaved(), CLIENT.mentionHistoryFns.updateModal(), socket.on("chatMsg", function(e) {
            IGNORED.indexOf(e.username) > -1 || CLIENT.mentionHistoryFns.newMsg(e)
        }), $(window).unload(function() {
            CLIENT.mentionHistoryFns.save()
        })
    }()
}, function(e, t) {
    ({
        init: function() {
            $('<div class="navbar-text pull-right" id="utcClock"></div>').insertAfter($(".nav.navbar-nav.navbar-right")), this.clock = $("#utcClock"), this.tick()
        },
        tick: function() {
            this.now = new Date, this.clock.html(String().concat(this.now.getUTCHours(), ":", this.now.getUTCMinutes() > 9 ? this.now.getUTCMinutes() : "0" + this.now.getUTCMinutes(), ":", this.now.getUTCSeconds() > 9 ? this.now.getUTCSeconds() : "0" + this.now.getUTCSeconds(), " UTC")), setTimeout(this.tick.bind(this), 1e3)
        }
    }).init()
}, function(e, t) {
    window.MAXMESSAGE = 100, $("#messagebuffer").unbind("scroll"), $("#messagebuffer").scroll(function(e) {
        if (IGNORE_SCROLL_EVENT) return void(IGNORE_SCROLL_EVENT = !1);
        var t = $("#messagebuffer"),
            n = 0,
            o = t.children();
        o.length > 0 && (n = $(o[o.length - 1]).outerHeight() || 0), t.height() + t.scrollTop() >= t.prop("scrollHeight") - n ? (SCROLLCHAT = !0, window.MAXMESSAGES = 100, $("#newmessages-indicator").remove()) : SCROLLCHAT = !1
    });
    var n = {};
    window.addChatMessage = function(e) {
        if (window.MAXMESSAGES = void 0 !== window.MAXMESSAGES ? window.MAXMESSAGES : 100, IGNORED.indexOf(e.username) === -1 && (!e.meta.shadow || USEROPTS.show_shadowchat) && (CLIENT.displayOpts.noRepeat || n[e.username] != e.msg) && (CLIENT.displayOpts.noRepeat || (n[e.username] = e.msg), (CLIENT.displayOpts.botMsg.polls || e.username != CHANNEL.bot || 0 !== e.msg.indexOf("Poll")) && (CLIENT.displayOpts.botMsg.modMsg || e.username != CHANNEL.bot || 0 !== e.msg.indexOf("Voteskip Passed")) && (CLIENT.displayOpts.botMsg.pokeroll || e.username != CHANNEL.bot || !(e.msg.indexOf("caught: #") > 0)) && (CLIENT.displayOpts.botMsg.pokeroll || 0 !== e.msg.indexOf("$pokeroll")))) {
            var t = $("#messagebuffer"),
                o = formatChatMessage(e, LASTCHAT),
                a = e.username.replace(/[^\w-]/g, "\\$");
            o.addClass("chat-msg-" + a), o.appendTo(t), o.mouseover(function() {
                $(".chat-msg-" + a).addClass("nick-hover")
            }), o.mouseleave(function() {
                $(".nick-hover").removeClass("nick-hover")
            });
            t.prop("scrollHeight");
            if (SCROLLCHAT) scrollChat(), trimChatBuffer();
            else {
                MAXMESSAGES < 1e4 && ++MAXMESSAGES;
                var i = $("#newmessages-indicator");
                if (!i.length) {
                    i = $("<div/>").attr("id", "newmessages-indicator").appendTo($("#chatwrap"));
                    var s = $("<span/>").attr("id", "newmessages-indicator-bghack").appendTo(i);
                    $("<span/>").addClass("glyphicon glyphicon-chevron-down").appendTo(s), $("<span/>").text("New Messages Below").appendTo(s), $("<span/>").addClass("glyphicon glyphicon-chevron-down").appendTo(s), i.click(function() {
                        SCROLLCHAT = !0, scrollChat(), trimChatBuffer()
                    })
                }
            }
            o.find("img").load(function() {
                SCROLLCHAT ? (IGNORE_SCROLL_EVENT = !0, scrollChat()) : SCROLLCHAT && $(this).position().top < 0 && scrollAndIgnoreEvent(t.scrollTop() + $(this).height())
            });
            var r = !1;
            CLIENT.name && e.username != CLIENT.name && e.msg.toLowerCase().indexOf(CLIENT.name.toLowerCase()) != -1 && (o.addClass("nick-highlight"), r = !0), pingMessage(r)
        }
    }, scrollChat()
}, function(e, t) {
    CLIENT.notifyVideos = [], socket.on("changeMedia", function() {
        var e = CLIENT.notifyVideos.indexOf(PLAYER.mediaId);
        ~e && (window[CHANNEL.name].VirtualWhisper("Playing [" + $(".pluid-" + PL_CURRENT).data("media").title + "], notified!"), scrollChat(), CLIENT.notifyVideos.splice(e, 1), window[CHANNEL.name].audioNotice.Video.audio[0].play(), rebuildPlaylist())
    }), window.addQueueButtons = function(e) {
        e.find(".btn-group").remove(), e.find(".qbtn-alarm").remove();
        var t = $("<div/>").addClass("btn-group").appendTo(e);
        if (hasPermission("playlistjump") && $("<button/>").addClass("btn btn-xs btn-default qbtn-play").html("<span class='glyphicon glyphicon-play'></span>Play").click(function() {
                socket.emit("jumpTo", e.data("uid"))
            }).appendTo(t), hasPermission("playlistmove") && $("<button/>").addClass("btn btn-xs btn-default qbtn-next").html("<span class='glyphicon glyphicon-share-alt'></span>Queue Next").click(function() {
                socket.emit("moveMedia", {
                    from: e.data("uid"),
                    after: PL_CURRENT
                })
            }).appendTo(t), hasPermission("settemp")) {
            var n = e.data("temp") ? "Make Permanent" : "Make Temporary";
            $("<button/>").addClass("btn btn-xs btn-default qbtn-tmp").html("<span class='glyphicon glyphicon-flag'></span>" + n).click(function() {
                socket.emit("setTemp", {
                    uid: e.data("uid"),
                    temp: !e.data("temp")
                })
            }).appendTo(t)
        }
        hasPermission("playlistdelete") && $("<button/>").addClass("btn btn-xs btn-default qbtn-delete").html("<span class='glyphicon glyphicon-trash'></span>Delete").click(function() {
            socket.emit("delete", e.data("uid"))
        }).appendTo(t), idx = CLIENT.notifyVideos.indexOf(e.data("media").id), $("<button/>").addClass("btn btn-xs btn-default qbtn-alarm" + (~idx ? " qbtn-notified" : "")).html("<span class='glyphicon glyphicon-bell'></span>Notify").click(function() {
            idx = CLIENT.notifyVideos.indexOf(e.data("media").id), ~idx ? (CLIENT.notifyVideos.splice(idx, 1), $(this).removeClass("qbtn-notified"), window[CHANNEL.name].VirtualWhisper("Removed video from notification list."), scrollChat()) : (CLIENT.notifyVideos.push(e.data("media").id), $(this).addClass("qbtn-notified"), window[CHANNEL.name].VirtualWhisper("Added video to notification list."), scrollChat())
        }).appendTo($(t).parent()), (USEROPTS.qbtn_hide && !USEROPTS.qbtn_idontlikechange || 0 == t.find(".btn").length) && t.hide(), USEROPTS.qbtn_idontlikechange ? (t.addClass("pull-left"), t.detach().prependTo(e), t.find(".btn").each(function() {
            var e = $(this).find(".glyphicon");
            $(this).html(""), e.appendTo(this)
        }), t.find(".qbtn-play").addClass("btn-success"), t.find(".qbtn-delete").addClass("btn-danger")) : 0 != t.find(".btn").length && (e.unbind("contextmenu"), e.contextmenu(function(n) {
            return !!n.shiftKey || (n.preventDefault(), "none" == t.css("display") ? ($(".qbtn-alarm", e).show("blind"), t.show("blind")) : ($(".qbtn-alarm", e).hide(), t.hide("blind")), !1)
        }))
    }, rebuildPlaylist()
}, function(e, t) {
    ! function() {
        function e(e, t) {
            var n = $(e);
            n.find("img").load(function() {
                SCROLLCHAT ? scrollChat() : $(this).position().top < 0 && scrollAndIgnoreEvent($("#messagebuffer").scrollTop + $(this).height())
            }), $("#messagebuffer").append(n[0]), setTimeout(function() {
                $(n).remove()
            }, t), scrollChat(), window.LASTCHAT = {
                name: ""
            }
        }
        CLIENT.hasOwnProperty("playlistNotifs") || (CLIENT.playlistNotifs = {
            showAdd: !0,
            showMove: !0
        }, socket.on("moveVideo", function(t) {
            if (CLIENT.playlistNotifs.showMove) {
                var n = "",
                    o = $(".pluid-" + t.from),
                    a = o.index("#queue li") + 1;
                $("#queue");
                if (o.length) {
                    var i = o.children(".qe_title").text();
                    if (i.length > 50 && (i = i.substr(0, 50) + "..."), "prepend" === t.after) n = '<span class="mv-title">' + i + '</span> moved to <span class="mv-to">#1</span>';
                    else if ("append" === t.after) n = '<span class="mv-title">' + i + '</span> moved to <span class="mv-to">the bottom of the list</span>';
                    else {
                        var s = $(".pluid-" + t.after),
                            r = s.index() + 2;
                        if (!s.length) return;
                        n = '<span class="mv-title">' + i + '</span> moved from <span class="mv-from">#' + a + '</span> to <span class="mv-to">#' + r + "</span>"
                    }
                    "" !== n && e("<div class='chat-movevideo'><span class='timestamp'>[" + (new Date).toTimeString().split(" ")[0] + "] </span><span class='mv'>" + n + "</span></div>", 6e4)
                }
            }
        }), socket.on("queue", function(t) {
            if (CLIENT.playlistNotifs.showAdd) {
                var n = t.item.media.title;
                n.length > 50 && (n = n.substr(0, 50) + "...");
                var o = '<span class="av-queueby">' + t.item.queueby + '</span> added <span class="av-title">' + n + "</span>";
                $("#queue");
                if ("prepend" === t.after) o += ' to <span class="av-to">the top</span>';
                else if ("append" !== t.after) {
                    var a = $(".pluid-" + t.after);
                    if (!a.length) return;
                    var i = a.index("#queue li");
                    o += ' to <span class="av-to">#' + (i + 2) + "</span>"
                }
                e("<div class='chat-addvideo'><span class='timestamp'>[" + (new Date).toTimeString().split(" ")[0] + "] </span><span class='av'>" + o + "</span></div>", 3e4)
            }
        }), "undefined" != typeof playlistEnhancer && (playlistEnhancer.moveReporting = !1))
    }()
}, function(e, t) {
    function n(e) {
        o();
        var t = 0,
            n = $("#queue li"),
            e = e.toLowerCase();
        if (n)
            for (; t < n.length; t++) {
                var a = n[t].title;
                a && (a = a.substr(10).toLowerCase(), a !== e ? $(n[t]).addClass("pl-noheight") : $(n[t]).addClass("pl-highlight"))
            }
    }

    function o() {
        $("#filterlabel").text("").hide(), $("#queue li").removeClass("pl-noheight").removeClass("pl-highlight")
    }
    $(function() {
        $(".plfilter-css").remove(), $("head").append('\n        <style class="plfilter-css">\n            .pl-highlight.queue_active {\n                background: #335375;\n            }\n            .pl-highlight {\n                border-color: #63c3ff!important;\n                background: #122735!important;\n            }\n            .pl-noheight {\n                height: 0!important;\n                padding: 0!important;\n                margin: 0!important;\n                border: 0!important;\n                overflow: hidden!important;\n            }\n            #filterlabel {\n                color: #63c3ff;\n                border: 1px solid #63c3ff;\n                border-bottom: 0;\n                border-top-left-radius: 4px;\n                border-top-right-radius: 4px;\n                background: #122735;\n                padding: 2px 6px;\n            }\n        </style>\n    '), $('<div id="filterlabel" style="display: none;"></div>').insertBefore("#queue"), $("#plcontrol").append($('<button class="btn btn-sm btn-default collapsed" id="showuserfilter" title="Filter playlist for videos added by a specific user" data-target="#filterplaylistcontrol" data-toggle="collapse"><span class="glyphicon glyphicon-filter"></span></button>').on("click", function() {
            var e = $(this).hasClass("active");
            $(".plcontrol-collapse").collapse("hide"), $("#plcontrol button.active").button("toggle"), e || $(this).button("toggle")
        })), $('<div class="plcontrol-collapse col-lg-12 col-md-12 collapse" id="filterplaylistcontrol" style="padding-bottom: 15px; height: 0px;"><div class="vertical-spacer"></div> <div class="input-group"><input class="form-control" id="pfinput" type="text" maxlength="100" placeholder="Username"/> <span class="input-group-btn"><button class="btn btn-default" id="pfcancel">Clear</button> <button class="btn btn-default" id="pffilter">Filter</button></span></div></div>').css({
            height: 0
        }).insertAfter("#addfromurl"), $("#pffilter").on("click", function() {
            $("#filterlabel").text("").hide();
            var e = $("#pfinput").val().trim().toLowerCase().substr(0, 100);
            e && "" !== e ? ($("#filterplaylistcontrol .alert").remove(), n(e), $("#filterlabel").text("Showing " + $(".pl-highlight").length + " videos added by " + e + ".").show()) : makeAlert("Invalid Input", "No username specified to search for.", "alert-danger").appendTo($("#filterplaylistcontrol"))
        }), $("#pfcancel").on("click", o), $("#pfinput").on("keypress", function(e) {
            if (13 === e.which) {
                $(".pl-noheight").length > 0 || $(".pl-highlight").length > 0 ? $("#pfcancel").click() : $("#pffilter").click()
            }
        })
    })
}, function(e, t, n) {
    (function(e) {
        ! function() {
            "use strict";

            function t() {
                return i.find("object, embed, iframe, video")
            }

            function n() {
                clearTimeout(F), F = null, a.removeClass("inactive")
            }

            function o() {
                a.addClass("inactive")
            }
            if (!window.AyySync) {
                window.AyySync = {
                    options: {
                        startFullscreened: !1
                    }
                }, console.log("AyySync started");
                var a = jQuery(document.body),
                    i = a.find(".embed-responsive");
                if ($("#nav-collapsible .nav.navbar-nav").addClass("navbar-left"), $("#logoutform").length) {
                    $("#logoutform").css({
                        display: "none"
                    });
                    var s = $('<ul class="nav navbar-nav navbar-right"></ul>').appendTo($("#nav-collapsible"))
                }
                var r = {};
                $(".navbar-nav li").each(function(e, t) {
                    var n = $($(t).find("a")[0]);
                    if (n.length > 0) switch (/^[\/w]*([a-zA-Z]*)/.exec($(n).html().trim().toLowerCase())[0]) {
                        case "account":
                            if (r.accountSettings = $(t), $("#logoutform").length) {
                                var o = findUserlistItem(CLIENT.name);
                                o.length && o.data().profile.image.length > 0 ? ($(n).html('<img style="display:inline-block;width:32px;height:32px;" />&nbsp;&nbsp;' + CLIENT.name + ' <b class="caret"></b>').find("img").attr("src", o.data().profile.image), $(t).addClass("profile-button")) : $(n).html('<span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;' + CLIENT.name + ' <b class="caret"></b>'), r.accountSettings.appendTo(s)
                            } else $(n).html('<span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp;Account <b class="caret"></b>');
                            break;
                        case "options":
                            r.clientSettings = $(t).detach();
                            break;
                        case "channel":
                            r.channelSettings = $(t).detach(), "none" === n.css("display") && delete r.channelSettings;
                            break;
                        case "layout":
                            r.layoutSettings = $(t), $(n).html('<span class="glyphicon glyphicon-th-large"></span> Layout <b class="caret"></b>')
                    }
                }), r.showRules = $('<li><a href="#"><strong>!</strong> Rules</a></li>'), r.showRules.appendTo($(".navbar-nav.navbar-left")), r.showRules.find("a").on("click", function(e) {
                    console.log("reee"), e.preventDefault();
                    var t = BootstrapDialog.show();
                    t.setTitle("<strong>!</strong> Rules"), t.getModalBody().empty().append(l), t.setButtons([{
                        label: "Ok",
                        action: function(e) {
                            e.close()
                        }
                    }])
                });
                var l = $("#motdrow").detach();
                $(".navbar .navbar-header > .navbar-brand").remove();
                var d = $($(".navbar .navbar-nav li")[0]);
                d.find("a").html('<span class="glyphicon glyphicon-home"></span>');
                var c = {
                        v4c: {
                            label: "Vidya4chan",
                            headerLogo: "https://i.imgur.com/w5DOMDa.png",
                            id: "v4c"
                        },
                        anime4chan: {
                            label: "Anime4chan",
                            id: "anime4chan"
                        },
                        m4c: {
                            label: "Movie4chan",
                            id: "m4c"
                        }
                    },
                    u = c[CHANNEL.name.toLowerCase()];
                u && u.headerLogo || (u = c.v4c);
                var p = $('<li id="ChannelList" class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown" style="padding: 4px 8px 4px 6px; height: 50px;"><img style="height: 100%;"/> <span class="badge">-</span> <b class="caret"></b></a> <ul class="dropdown-menu"></ul></li>');
                p.insertAfter(d).find("img").attr("src", u.headerLogo), d.remove();
                var h = p.find(".badge");
                p = p.find(".dropdown-menu");
                var m = null,
                    g = function() {
                        p.empty(), $(Object.keys(c)).each(function(e, t) {
                            var n = $("            <li><a></a></li>          ").appendTo(p);
                            $(n.find("a")).addClass("channel-" + c[t].id).attr("href", "https://cytu.be/r/" + c[t].id).html((m && m[c[t].id] ? '<span class="badge">' + m[c[t].id].viewers + "</span>&nbsp;" : "") + c[t].label + " (../r/" + c[t].id + ")")
                        }), $('<li class="divider"></li>').appendTo(p), $('<li><a href="https://cytu.be/"><span class="glyphicon glyphicon-align-justify"></span> Channel Directory</a></li>').appendTo(p)
                    };
                g();
                var f = function() {
                    $.ajax({
                        url: "/",
                        complete: function(t) {
                            var n = t.responseText.split("<tbody>")[1].split("</tbody>")[0].split("</tr>"),
                                t = [];
                            m = e.reduce(n, function(e, n) {
                                return t = /<td><a href="\/r\/(.*)">(.*)<\/a><\/td><td>([0-9]*)<\/td><td>(?:.*)<\/td>/g.exec(n), null !== t && (e[t[1]] = {
                                    url: t[1],
                                    label: t[2],
                                    viewers: t[3]
                                }), e
                            }, {});
                            var o = e.reduce(c, function(e, t) {
                                return void 0 !== m[t.id] && (e += parseInt(m[t.id].viewers, 10)), e
                            }, 0);
                            h.html((void 0 !== m[CHANNEL.name] ? m[CHANNEL.name].viewers : "?") + " / " + o), g()
                        }
                    })
                };
                f(), setInterval(function() {
                    f()
                }, 6e5);
                var v = $('<li class="dropdown" style=""><a class="dropdown-toggle" href="#" data-toggle="dropdown"><span class="glyphicon glyphicon-cog"></span> <b class="caret"></b></a> <ul class="dropdown-menu settings-dropdown"></ul></li>');
                v.insertAfter($(r.layoutSettings)), v = v.find(".dropdown-menu"), $('<li><a href="javascript:showUserOptions();">Client Settings</a></li>').appendTo(v), r.channelSettings && $('<li><a href="javascript:showChannelSettings();">Channel Settings</a></li>').appendTo(v), $(".plcontrol-collapse > .input-group").addClass("input-group-sm"), $(".navbar.navbar-fixed-top").removeClass("navbar-fixed-top");
                $('<div class="fw-chat-panel"><div class="inner"></div></div>').appendTo($(".embed-responsive"));
                var b = $('<div class="fw-chat-controls"><a class="button chat"><i class="glyphicon glyphicon-comment"></i> <span class="button-label">ToggleÂ Chat</span></a> <a class="button nnd-toggle"><i class="glyphicon glyphicon-bullhorn"></i> <span class="button-label">NNDÂ Toggle</span></a> <a class="button fw-overlay-toggle"><i class="glyphicon glyphicon-pause"></i> <span class="button-label">ToggleÂ FWÂ Overlay</span></a> <a class="button fw-chat-right-toggle"><i class="glyphicon glyphicon-resize-horizontal"></i> <span class="button-label">ChangeÂ ChatÂ Side</span></a> <a class="button fw-close"><i class="glyphicon glyphicon-remove"></i> <span class="button-label">ExitÂ FullÂ Window</span></a></div>');
                b.appendTo($(".embed-responsive")), b.find("a.chat").on("click", function() {
                    a.toggleClass("fw-chat-open"), localStorage.setItem("showFullscreenChat", "false" === localStorage.getItem("showFullscreenChat") ? "true" : "false")
                }), b.find("a.fw-close").on("click", function() {
                    T(), localStorage.setItem("enableFullscreen", "false" === localStorage.getItem("enableFullscreen") ? "true" : "false")
                }), b.find("a.fw-overlay-toggle").on("click", function() {
                    L(), localStorage.setItem("enableFullscreenOverlay", "false" === localStorage.getItem("enableFullscreenOverlay") ? "true" : "false")
                }), b.find("a.fw-chat-right-toggle").on("click", function() {
                    S(), localStorage.setItem("fullscreenChatRight", "false" === localStorage.getItem("fullscreenChatRight") ? "true" : "false")
                }), b.find("a.nnd-toggle").on("click", function() {
                    R()
                }), $('<button id="fw-leftcontrols-toggle" title="Toggle Cinema Mode" class="btn btn-default btn-sm">Cinema <span class="glyphicon glyphicon-film"></span></button>').on("click", function() {
                    T(), localStorage.setItem("enableFullscreen", "false" === localStorage.getItem("enableFullscreen") ? "true" : "false")
                }).appendTo($("#leftcontrols"));
                var w = $('            <div class="fw-aux-controls">                <a class="button kill">                    <i class="glyphicon glyphicon-trash"></i>                    <span class="button-label">Local&nbsp;Skip&nbsp;Video</span>                </a>                <a class="button skip display-none fw-showOn">                    <i class="glyphicon glyphicon-step-forward"></i>                    <span class="button-label">Vote&nbsp;Skip</span>                </a>            </div>');
                w.find(".kill").on("click", function() {
                    0 === i.find("object, embed, iframe, video").length ? _() : (t().remove(), A.appendTo(i), y())
                });
                var y = function() {
                        i.find(".killScreen").length ? w.find(".kill").addClass("selected") : w.find(".kill").removeClass("selected")
                    },
                    C = w.find(".skip").detach();
                $("#voteskip").click(function() {
                    C.detach()
                }), C.click(function() {
                    socket.emit("voteskip"), C.detach(), $("#voteskip").attr("disabled", !0)
                });
                var N = CHANNEL ? CHANNEL.opts : null;
                w.appendTo($(".embed-responsive"));
                var k = jQuery("<li>", {
                    class: "fw-start",
                    css: {
                        cursor: "pointer"
                    }
                });
                k.appendTo(a.find("#nav-collapsible .nav.navbar-nav.navbar-left")).on("click", function() {
                    T(), localStorage.setItem("enableFullscreen", "false" === localStorage.getItem("enableFullscreen") ? "true" : "false")
                }).append(jQuery("<a>", {
                    class: "glyphicon glyphicon-fullscreen"
                }));
                var E = "videowrap" === $($("#main > div")[0]).attr("id"),
                    T = function() {
                        i.find(".videochatContainer").empty(), a.hasClass("fw") ? (a.removeClass("fw"), jQuery("#guestlogin, #chatline").detach().insertAfter($("#messagebuffer")), $(".navbar").prependTo(a), $("#controlsrow").insertAfter($("#main")), E ? $("#chatwrap").appendTo($("#main")) : $("#chatwrap").prependTo($("#main")), handleVideoResize(), $("#fw-leftcontrols-toggle").removeClass("btn-primary").addClass("btn-default"), $(".fw-start").removeClass("active"), SCROLLCHAT = !0) : (a.addClass("fw"), jQuery("#guestlogin, #chatline").detach().appendTo(document.body), $(".navbar").prependTo(a), $("#controlsrow").insertAfter($(".navbar")), $(window).scrollTop(0), $("#chatwrap").appendTo($(".fw-chat-panel > .inner")), $("#fw-leftcontrols-toggle").addClass("btn-primary").removeClass("btn-default"), $(".fw-start").addClass("active"), SCROLLCHAT = !0), setTimeout(function() {
                            window.handleVideoResize(), scrollChat()
                        }, 50)
                    },
                    L = function() {
                        a.hasClass("fw-overlay") ? a.removeClass("fw-overlay") : a.addClass("fw-overlay"), setTimeout(function() {
                            window.handleVideoResize(), scrollChat()
                        }, 50)
                    },
                    S = function() {
                        a.hasClass("fw-chat-right") ? a.removeClass("fw-chat-right") : a.addClass("fw-chat-right"), scrollChat(), setTimeout(function() {
                            window.handleVideoResize(), scrollChat()
                        }, 50)
                    },
                    A = $('<div class="killScreen"><br/><br/><br/> Video Locally Skipped <br/><br/> Waiting for next video to start...</div>'),
                    x = Callbacks.channelCSSJS;
                Callbacks.channelCSSJS = function(e) {
                    N || socket.on("channelOpts", function(e) {
                        N = e
                    }), e && e.js && e.js.indexOf("AyySync.onXaekaiLoaded();") === -1 && (e.js = e.js.replace('console.info("Xaekai\'s Script Sequencer: Loading Complete.")', 'console.info("Xaekai\'s Script Sequencer: Loading Complete.");AyySync.onXaekaiLoaded(null);')), x(e)
                };
                var H, I, M = function(e, t) {
                        N && (N.allow_voteskip ? C.appendTo(w) : C.detach()), t = t || {}, H = e || H, _()
                    },
                    _ = function(e) {
                        e = e || {};
                        console.log("currentVideoData", new Date, H),
                            function() {
                                i.find(".killScreen").length && e.preserveKillScreen !== !0 && A.detach(), 0 === i.find("object, embed, iframe, video").length && $("<iframe>", {
                                    id: "ytapiplayer",
                                    class: "embed-responsive-item display-none"
                                }).appendTo(i)
                            }(), PLAYER && PLAYER.mediaType && (PLAYER.mediaType = null), I(H), y()
                    },
                    O = function() {
                        window.Callbacks.changeMedia !== M && (I = window.Callbacks.changeMedia, window.Callbacks.changeMedia = M)
                    };
                O();
                var F = null;
                $(a).on("mousemove", function() {
                    null === F && n(), clearTimeout(F), F = null, F = setTimeout(function() {
                        o()
                    }, 1e4)
                });
                var q = $(a).find(".navbar .nav > li");
                $.each(q, function(e, t) {});
                var P = function() {
                        window.nnd.enabled ? $(a).addClass("nnd") : $(a).removeClass("nnd")
                    },
                    R = function() {
                        $(".videoText").remove(), window.nnd.enabled = !window.nnd.enabled, P()
                    };
                window.v4cScript.on("legacy-loaded", function() {
                    console.log("AyySync legacy-loaded triggered."), O(), $("#pad_notes_wrap").addClass("well"), $("#emote_suggest").addClass("well"), $("#colorFilters").remove(), $("#cinematoggle").remove(), $(".plcontrol-collapse > .input-group").addClass("input-group-sm"), $("#plcontrol button").button(), $("#plcontrol button").button("hide"), $(".plcontrol-collapse").collapse({
                        toggle: !1
                    });
                    var e = window.nnd._fn.init;
                    window.nnd._fn.init = function() {
                        e.apply(this, arguments), P()
                    };
                    var t = window.nnd._fn.saveFromModal;
                    window.nnd._fn.saveFromModal = function() {
                            t.apply(this, arguments), P()
                        }, P(), $("#customSettingsModalTrigger").html('          Channel <span class="glyphicon glyphicon-cog"></span>        ').attr("title", "Channel preferences"), $("#emotelistbtn").html("          Emotes        ").attr("title", "Browse emotes"), $("#newpollbtn").html('          <span class="glypicon glyphicon-plus"></span> Poll        ').attr("title", "Create new poll"), $("#leftcontrols").append('<button title="Client chat clear" id="selfClearbtn" class="btn btn-default btn-sm">Self Clear</button>'), $("#selfClearbtn").on("click", function() {
                            $("#messagebuffer").html("")
                        }), $(".navbar-nav li").each(function(e, t) {
                            var n = $($(t).find("a")[0]);
                            if (n.length > 0) switch (/^[\/w]*([a-zA-Z]*)/.exec($(n).html().trim().toLowerCase())[0]) {
                                case "mention":
                                    $(n).html("<strong>@</strong> Mentions")
                            }
                        }), k.appendTo(a.find("#nav-collapsible .nav.navbar-nav.navbar-left")),
                        function() {
                            var e;
                            window.handleVideoResize = function() {
                                if (e = $("#ytapiplayer"), 0 !== e.length) {
                                    var t, n, o = 0,
                                        a = function() {
                                            if (++o > 10 && clearInterval(t), !(e.parent().outerHeight() <= 0)) {
                                                clearInterval(t);
                                                var a = $(e).parent();
                                                n = $(document.body).hasClass("fw") ? $(document.body).hasClass("fw-overlay") ? a.outerHeight() - $("#chatline").outerHeight() - 45 - $("#chatheader").outerHeight() : a.outerHeight() - $("#chatline").outerHeight() - $("#chatheader").outerHeight() : a.outerHeight() - $("#chatline").outerHeight() - 1, $("#messagebuffer").css({
                                                    height: n
                                                }), $("#userlist").css({
                                                    height: n
                                                }), e.attr("height", VHEIGHT = a.outerHeight()).attr("width", VWIDTH = a.outerWidth())
                                            }
                                        };
                                    e.height() > 0 ? a() : t = setInterval(a, 500)
                                }
                            }, window.handleVideoResize(), setInterval(function() {
                                window.handleVideoResize()
                            }, 1500)
                        }()
                }), $(window).on("resize", function() {
                    SCROLLCHAT = !0, scrollChat()
                }), "true" !== localStorage.getItem("showFullscreenChat") && null !== localStorage.getItem("showFullscreenChat") || a.toggleClass("fw-chat-open"), "true" === localStorage.getItem("enableFullscreenOverlay") && L(), "true" !== localStorage.getItem("fullscreenChatRight") && null !== localStorage.getItem("fullscreenChatRight") || S()
            }
        }()
    }).call(t, n(0))
}, function(e, t) {
    window[CHANNEL.name] || (window[CHANNEL.name] = {}), window[CHANNEL.name].banners = {
        target: $("div#pollwrap"),
        timeout: 6e4,
        banners: ["https://i.imgur.com/LUKCVUL.png", "https://i.imgur.com/ibHHpgM.jpg", "https://i.imgur.com/PSM9mLP.gif", "https://i.imgur.com/KQCQ5Mm.png", "https://i.imgur.com/MMVn65y.jpg", "https://i.imgur.com/alYvyke.jpg", "https://i.imgur.com/HplbwQ1.gif", "https://i.imgur.com/BlACv42.gif", "https://i.imgur.com/ptOS2hO.gif", "https://i.imgur.com/Hy29EX9.jpg", "https://i.imgur.com/G5TPt6J.jpg", "https://i.imgur.com/vUK58Vq.jpg", "https://i.imgur.com/atudZJZ.gif", "https://i.imgur.com/nkyBBm8.gif", "https://i.imgur.com/4yWiSv3.gif", "https://i.imgur.com/bfAtlu4.png", "https://i.imgur.com/v0ZgUoG.jpg", "https://i.imgur.com/kicbEmj.jpg", "https://i.imgur.com/pUq9ntt.png", "https://i.imgur.com/lipf2LH.png", "https://i.imgur.com/qaJ4CG7.gif", "https://i.imgur.com/SfpRHlJ.jpg", "https://i.imgur.com/tRSEYHh.png", "https://i.imgur.com/N3vlkLB.jpg", "https://i.imgur.com/6tLvTQq.jpg", "https://i.imgur.com/Z3GoCMS.jpg", "https://i.imgur.com/8J38kWp.png", "https://i.imgur.com/QIU9zkH.png", "https://i.imgur.com/O9ImQST.png", "https://i.imgur.com/hCTC4uK.png", "https://i.imgur.com/rSIK9Kc.png", "https://i.imgur.com/qYMfPZG.png", "https://i.imgur.com/5b2uxNG.png", "https://i.imgur.com/ht8hdA6.png", "https://i.imgur.com/zzFN4lR.png", "https://i.imgur.com/91LdImc.png", "https://i.imgur.com/1FtFqhV.png", "https://i.imgur.com/LJAfnpo.png", "https://i.imgur.com/LLuvGL8.png", "https://i.imgur.com/hkBpIeJ.png", "https://i.imgur.com/qYIVHkI.png", "https://i.imgur.com/SFPXSB9.png", "https://i.imgur.com/OWUeoOr.png", "https://i.imgur.com/Gri0YtC.png", "https://i.imgur.com/Qm1Dxzq.gif", "https://i.imgur.com/iK09RaC.png", "https://i.imgur.com/kkoAlqI.png", "https://i.imgur.com/swUGCmv.png", "https://i.imgur.com/RWJrJO1.png", "https://i.imgur.com/msDJde5.png", "https://i.imgur.com/5FmtYto.png", "https://i.imgur.com/5xlbiFB.png", "https://i.imgur.com/wakf2Ys.gif", "https://i.imgur.com/OrA3QKb.gif", "https://i.imgur.com/UayjGQG.png", "https://i.imgur.com/0KZsEvZ.png", "https://i.imgur.com/H76Se7i.png", "https://i.imgur.com/nMThE7V.png", "https://i.imgur.com/CTGTUai.gif", "https://i.imgur.com/R3xLQk2.png", "https://i.imgur.com/B5Cjwg7.png", "https://i.imgur.com/szWNiSZ.jpg", "https://i.imgur.com/fZu5oQQ.png", "https://i.imgur.com/XyMbfIe.png", "https://i.imgur.com/CaJ2fwu.gif", "https://i.imgur.com/q7cyMTh.png", "https://i.imgur.com/U1fH2pc.jpg", "https://i.imgur.com/LWCPD2z.jpg", "https://i.imgur.com/Cwg9GMr.png", "https://i.imgur.com/qvo4qc8.png", "https://i.imgur.com/HiZO28Q.png", "https://i.imgur.com/DCneYCK.png", "https://i.imgur.com/39616RG.png", "https://i.imgur.com/BlP3PWI.png", "https://i.imgur.com/K7jVAik.jpg", "https://i.imgur.com/YYhM6aY.jpg", "https://i.imgur.com/cVJTL0u.jpg", "https://i.imgur.com/ypvNoeX.png", "https://i.imgur.com/sgJktLI.png", "https://i.imgur.com/FzByZrA.png", "https://i.imgur.com/CBQhj3m.png", "https://i.imgur.com/ZYfHLf1.jpg", "https://i.imgur.com/Hd7HAiY.jpg", "https://i.imgur.com/SYyUa6K.png", "https://i.imgur.com/9QD28sn.png", "https://i.imgur.com/M3fcMun.jpg", "https://i.imgur.com/Cqb0FaW.jpg", "https://i.imgur.com/MFHhxCH.jpg", "https://i.imgur.com/OXPtR7G.png", "https://i.imgur.com/ilz7JEs.jpg", "https://i.imgur.com/Ew0AEXw.png", "https://i.imgur.com/k37tvil.gif", "https://i.imgur.com/7sEfqpW.gif", "https://i.imgur.com/L5MXzsD.jpg", "https://i.imgur.com/vzVvPD3.jpg", "https://i.imgur.com/YDS07gO.png", "https://i.imgur.com/4RFu99Z.gif", "https://i.imgur.com/STS50RP.png", "https://i.imgur.com/9QU8XC4.png", "https://i.imgur.com/00Y80bi.png", "https://i.imgur.com/1FvfgAH.png", "https://i.imgur.com/YVydo37.jpg", "https://i.imgur.com/1mW840f.png", "https://i.imgur.com/edFbkLG.png", "https://i.imgur.com/eFAFVAo.png", "https://i.imgur.com/kbt1Y7H.png", "https://i.imgur.com/0jQHXRS.png", "https://i.imgur.com/4qA3cPG.png", "https://i.imgur.com/a3a691k.png"],
        currentBanner: null,
        deployBanner: function() {
            this.target.css({
                "background-image": String().concat("url(", this.currentBanner, ")")
            })
        },
        chooseBanner: function() {
            var e = this.banners.splice(Math.floor(Math.random() * this.banners.length), 1).shift();
            this.banners.unshift(this.currentBanner), this.currentBanner = e
        },
        nextTick: null,
        cycle: function() {
            this.chooseBanner(), this.deployBanner(), this.nextTick = setTimeout(this.cycle.bind(this), this.timeout)
        },
        init: function() {
            return this.currentBanner = this.banners.pop(), this.cycle(), this
        }
    }.init()
}, function(e, t) {
    $("#messagebuffer").unbind("click.transmote"), $("#messagebuffer").on("click.transmote", "img.channel-emote", function(e) {
        function t(e, t) {
            return e.volume = t, e
        }
        switch ($(this).attr("title")) {
            case "/feel":
                $(this).attr("title", "/feelsgud").attr("src", "https://i.imgur.com/miFcyXz.png");
                break;
            case "/feelsgud":
                $(this).attr("title", "/feel").attr("src", "https://i.imgur.com/1MJdYMA.png");
                break;
            case "/wakemeup":
                $(this).attr("title", "/cantwakeup").attr("src", "https://i.imgur.com/gAqA8PP.png");
                break;
            case "/cantwakeup":
                $(this).attr("title", "/wakemeup").attr("src", "https://i.imgur.com/rpFA4eT.png");
                break;
            case "/go":
                $(this).attr("title", "/gigago").attr("src", "https://i.imgur.com/nA1oTnX.gif"), t(new Audio("https://www.myinstants.com/media/sounds/gal-o-sengen.mp3"), .7).play();
                break;
            case "/gigago":
                $(this).attr("title", "/go").attr("src", "https://i.imgur.com/aqhrV.gif");
                break;
            case "/homo":
                $(this).attr("title", "/homo2").attr("src", "https://i.imgur.com/Ns8g8lB.gif");
                break;
            case "/homo2":
                $(this).attr("title", "/homo").attr("src", "https://i.imgur.com/vaQn3RC.gif");
                break;
            case "/neverever":
                $(this).attr("title", "/neverfuckingever").attr("src", "https://i.imgur.com/X8wgq2k.png");
                break;
            case "/neverfuckingever":
                $(this).attr("title", "/neverever").attr("src", "https://i.imgur.com/MJnWGHV.png");
                break;
            case "/burd":
                $(this).attr("title", "/burd2").attr("src", "https://i.imgur.com/Hp3ypPj.gif");
                break;
            case "/burd2":
                $(this).attr("title", "/burd3").attr("src", "https://i.imgur.com/jSlcr.gif");
                break;
            case "/burd3":
                $(this).attr("title", "/burd").attr("src", "https://i.imgur.com/O9ZKezB.gif");
                break;
            case "/aniki":
                $(this).attr("title", "/aniki").attr("src", "https://i.imgur.com/tqD04Xw.png");
                break;
            case "/mysides":
                $(this).attr("title", "/mysides2").attr("src", "https://i.imgur.com/DtINozi.gif");
                break;
            case "/mysides2":
                $(this).attr("title", "/mysides").attr("src", "https://i.imgur.com/vETtK.png");
                break;
            case "/chen":
                $(this).attr("title", "/chen2").attr("src", "https://i.imgur.com/TGHRo8W.gif"), t(new Audio("https://www.myinstants.com/media/sounds/bikehorn.mp3"), .4).play();
                break;
            case "/chen2":
                $(this).attr("title", "/chen3").attr("src", "https://i.imgur.com/MSoQrxX.gif"), t(new Audio("https://www.myinstants.com/media/sounds/honk-honk-chen.mp3"), .4).play();
                break;
            case "/chen3":
                $(this).attr("title", "/chen").attr("src", "https://i.imgur.com/7X9O7Rm.png"), t(new Audio("https://www.myinstants.com/media/sounds/car-horn-sound-effect.mp3"), .4).play();
                break;
            case "/notbad":
                $(this).attr("title", "/john").attr("src", "https://i.imgur.com/LXaCgmO.png"), t(new Audio("https://www.myinstants.com/media/sounds/divorce1.mp3"), .85).play();
                break;
            case "/!":
                t(new Audio("https://www.myinstants.com/media/sounds/metalgearsolid.mp3"), .9).play();
                break;
            case "/4u":
                t(new Audio("https://www.myinstants.com/media/sounds/bane-1.mp3"), .5).play();
                break;
            case "/aesthetic":
                t(new Audio("https://www.myinstants.com/media/sounds/succ.mp3"), .4).play();
                break;
            case "/succ":
                t(new Audio("https://www.myinstants.com/media/sounds/succ.mp3"), .4).play();
                break;
            case "/alarm":
                t(new Audio("https://www.myinstants.com/media/sounds/sirene_1.mp3"), .9).play();
                break;
            case "/bazinga":
                t(new Audio("https://www.myinstants.com/media/sounds/bazinga.swf.mp3"), .33).play();
                break;
            case "/bestgames":
                t(new Audio("https://drowngaben.x10.mx/unused/gayniggas.mp3"), .33).play();
                break;
            case "/birry":
                t(new Audio("https://soundboard.ass-we-can.com/static/music/BillyH/Like%20embarrassing%20me.mp3"), .9).play();
                break;
            case "/berd":
                t(new Audio("https://resources.pink.horse/sounds/berd.ogg"), .33).play();
                break;
            case "/bomb":
                t(new Audio("https://www.myinstants.com/media/sounds/bomb2.mp3"), .7).play();
                break;
            case "/chen4":
                t(new Audio("https://www.myinstants.com/media/sounds/chen-honk-honk.mp3"), .4).play();
                break;
            case "/daniel":
                t(new Audio("https://www.myinstants.com/media/sounds/vocaroo_s03hjdrwp5kq.mp3"), .3).play();
                break;
            case "/dio":
                t(new Audio("https://resources.pink.horse/sounds/v4c/dio.mp3"), .5).play();
                break;
            case "/doit":
                t(new Audio("https://www.myinstants.com/media/sounds/do-it_2.mp3"), .3).play();
                break;
            case "/doot":
                t(new Audio("https://drowngaben.x10.mx/unused/dootdoot.mp3"), .5).play();
                break;
            case "/doomguy":
                t(new Audio("https://resources.pink.horse/sounds/doom.music.ogg"), .5).play();
                break;
            case "/duane":
                t(new Audio("https://www.myinstants.com/media/sounds/videoplayback-1-mp3cut_6.mp3"), .7).play();
                break;
            case "/duckgif":
                t(new Audio("https://www.myinstants.com/media/sounds/quack_5.mp3"), .9).play();
                break;
            case "/eey":
                t(new Audio("https://www.myinstants.com/media/sounds/pa_1.mp3"), .9).play();
                break;
            case "/fuckyou":
                t(new Audio("https://www.myinstants.com/media/sounds/dmc-fuck-you-1.mp3"), .9).play();
                break;
            case "/he":
                t(new Audio("https://www.myinstants.com/media/sounds/he_5.mp3"), .9).play();
                break;
            case "/john":
                t(new Audio("https://www.myinstants.com/media/sounds/divorce1.mp3"), .5).play();
                break;
            case "/jotaro":
                t(new Audio("https://www.myinstants.com/media/sounds/oraoraoraoraora-sound-effect.mp3"), .5).play();
                break;
            case "/nice2":
                t(new Audio("https://www.myinstants.com/media/sounds/joseph-joestar-nice.mp3"), .9).play();
                break;
            case "/no":
                t(new Audio("https://drowngaben.x10.mx/unused/no.mp3"), .4).play();
                break;
            case "/nogaems":
                t(new Audio("https://www.myinstants.com/media/sounds/videoplayback-2-mp3cut_2.mp3"), .7).play();
                break;
            case "/noh":
                t(new Audio("https://www.myinstants.com/media/sounds/noh_1.mp3"), .33).play();
                break;
            case "/objection":
                t(new Audio("https://www.myinstants.com/media/sounds/phoenix-objection.mp3"), .3).play();
                break;
            case "/percy":
                t(new Audio("https://www.myinstants.com/media/sounds/thomas-whistle.mp3"), .5).play();
                break;
            case "/pew":
                t(new Audio("https://www.myinstants.com/media/sounds/efectos-de-sonido-street-fight-ii-ryus-hadouken.mp3"), .9).play();
                break;
            case "/push":
                t(new Audio("https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3"), .5).play();
                break;
            case "/push2":
                t(new Audio("https://www.myinstants.com/media/sounds/bad-gay-porn-acting-4.mp3"), .7).play();
                break;
            case "/ree":
                t(new Audio("https://www.myinstants.com/media/sounds/reeeeeeeee.mp3"), .7).play();
                break;
            case "/rekt":
                t(new Audio("https://www.myinstants.com/media/sounds/pistol_fire3.mp3"), .77).play();
                break;
            case "/rekt2":
                t(new Audio("https://www.myinstants.com/media/sounds/mp5_smg-gunguru-703432894.mp3"), .9).play();
                break;
            case "/rekt3":
                t(new Audio("https://www.myinstants.com/media/sounds/rifle-shot-echo.mp3"), .9).play();
                break;
            case "/sanic":
                t(new Audio("https://www.myinstants.com/media/sounds/come-on-step-it-up.mp3"), .9).play();
                break;
            case "/shazbot":
                t(new Audio("https://www.myinstants.com/media/sounds/vgs-shazbot-mp3cut.mp3"), .9).play();
                break;
            case "/shieeet":
                t(new Audio("https://www.myinstants.com/media/sounds/shiet_1.mp3"), .66).play();
                break;
            case "/swooce":
                t(new Audio("https://drowngaben.x10.mx/snd/swooce.mp3"), .8).play();
                break;
            case "/spurdo":
                t(new Audio("https://resources.pink.horse/sounds/fug.ogg"), .5).play();
                break;
            case "/teedus":
                t(new Audio("https://www.myinstants.com/media/sounds/tidus-laugh-japanese.mp3"), .9).play();
                break;
            case "/tidus":
                t(new Audio("https://www.myinstants.com/media/sounds/tiduss-laugh.mp3"), .9).play();
                break;
            case "/van":
                t(new Audio("https://www.myinstants.com/media/sounds/van-darkholme-says-fuck-you.mp3"), .5).play();
                break;
            case "/wooo":
                t(new Audio("https://www.myinstants.com/media/sounds/woo.mp3"), .9).play();
                break;
            case "/wow2":
                t(new Audio("https://www.myinstants.com/media/sounds/wow-.mp3"), .9).play();
                break;
            case "/wry":
                t(new Audio("https://www.myinstants.com/media/sounds/wryyyyyy.mp3"), .5).play();
                break;
            case "/yee":
                t(new Audio("https://www.myinstants.com/media/sounds/combobreak.mp3"), .9).play();
                break;
            case "/yes":
                t(new Audio("https://www.myinstants.com/media/sounds/m_6.mp3"), .9).play();
                break;
            case "/yoo":
                t(new Audio("https://www.myinstants.com/media/sounds/yoooooooooooooooooooooooooooohhhhhhhhhhhhhhhhhhhhhhhhhhhhhh.mp3"), .9).play()
        }
    })
}, function(e, t, n) {
    "use strict";
    (function(e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = e.Model.extend({
            constructor: function() {}
        });
        ! function() {
            function e(e) {
                var e = void 0 !== e ? e : "none" !== $("#motd").css("display");
                e ? ($("#motd").hide(), localStorage.setItem("motd-dismiss-hash", t(window.CHANNEL.motd)), console.log("hash1", parseInt(localStorage["motd-dismiss-hash"]), t(window.CHANNEL.motd)), $("#togglemotd").find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")) : ($("#motd").show(), localStorage.removeItem("motd-dismiss-hash"), $("#togglemotd").find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus"))
            }
            var t = function(e) {
                return e.split("").reduce(function(e, t) {
                    return (e = (e << 5) - e + t.charCodeAt(0)) & e
                }, 0)
            };
            $("#togglemotd").off("click"), $("#togglemotd").click(function() {
                e()
            }), window.Callbacks.setMotd = function(e) {
                window.CHANNEL.motd = e, console.log("hash3", parseInt(localStorage["motd-dismiss-hash"]), e), $("#motd").html(e), $("#cs-motdtext").val(e), "" == e || localStorage["motd-dismiss-hash"] && t(parseInt(localStorage["motd-dismiss-hash"])) === t(window.CHANNEL.motd) ? $("#motdwrap").hide() : ($("#motdwrap").show(), $("#motd").show(), $("#togglemotd").find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus"))
            }
        }(), t.default = n
    }).call(t, n(40))
}, function(e, t, n) {
    "use strict";
    var o = n(44);
    ! function(e, t) {
        var n = t.View.extend;
        t.View.extend = function() {
            var t = n.apply(this, arguments);
            return t.prototype.inject = function(t) {
                this.$el.appendTo(t), "object" === e.type(this) && "trigger" in this && this.trigger("injected")
            }, t
        }
    }(jQuery, o), e.exports = o
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        var t = e.fn.init;
        e.fn.init = function(n, o, a) {
            return "object" === e.type(n) && "$el" in n ? n.$el : new t(n, o, a)
        }
    }(window.jQuery), e.exports = jQuery
}, function(e, t, n) {
    "use strict";
    ! function(e) {
        var t, n, o, a, i, s = function(s, r, l) {
                l && e.extend({
                    style: {}
                }, l);
                var d = e('<span class="added ripple-wrapper"></span>').prependTo(s);
                return d.removeClass("added"), t = e(s).outerWidth(), n = e(s).outerHeight(), o = Math.max(t, n), d.css({
                    width: o,
                    height: o
                }), a = r.clientX - e(s).offset().left - o / 2 + e(window).scrollLeft(), i = r.clientY - e(s).offset().top - o / 2 + e(window).scrollTop(), d.css({
                    top: i + "px",
                    left: a + "px"
                }).css(l.style).addClass("animated")
            },
            r = function(e) {
                e.remove()
            };
        e.fn.ripple = function(t) {
            return e(this).addClass("has-ripple").on("click", function(e) {
                var n = s(this, e, t);
                setTimeout(function() {
                    r(n)
                }, 400)
            }), this
        }
    }(jQuery)
}, function(e, t, n) {
    "use strict";
    var o = n(39),
        a = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(o);
    $(document).ready(function() {
        window.v4cScript = new a.default
    })
}, function(e, t, n) {
    (function(o) {
        var a, i;
        ! function(s) {
            var r = "object" == typeof self && self.self === self && self || "object" == typeof o && o.global === o && o;
            a = [n(0), n(41), t], void 0 !== (i = function(e, t, n) {
                r.Backbone = s(r, n, e, t)
            }.apply(t, a)) && (e.exports = i)
        }(function(e, t, n, o) {
            var a = e.Backbone,
                i = Array.prototype.slice;
            t.VERSION = "1.3.3", t.$ = o, t.noConflict = function() {
                return e.Backbone = a, this
            }, t.emulateHTTP = !1, t.emulateJSON = !1;
            var s = function(e, t, o) {
                    switch (e) {
                        case 1:
                            return function() {
                                return n[t](this[o])
                            };
                        case 2:
                            return function(e) {
                                return n[t](this[o], e)
                            };
                        case 3:
                            return function(e, a) {
                                return n[t](this[o], l(e, this), a)
                            };
                        case 4:
                            return function(e, a, i) {
                                return n[t](this[o], l(e, this), a, i)
                            };
                        default:
                            return function() {
                                var e = i.call(arguments);
                                return e.unshift(this[o]), n[t].apply(n, e)
                            }
                    }
                },
                r = function(e, t, o) {
                    n.each(t, function(t, a) {
                        n[a] && (e.prototype[a] = s(t, a, o))
                    })
                },
                l = function(e, t) {
                    return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? d(e) : n.isString(e) ? function(t) {
                        return t.get(e)
                    } : e
                },
                d = function(e) {
                    var t = n.matches(e);
                    return function(e) {
                        return t(e.attributes)
                    }
                },
                c = t.Events = {},
                u = /\s+/,
                p = function(e, t, o, a, i) {
                    var s, r = 0;
                    if (o && "object" == typeof o) {
                        void 0 !== a && "context" in i && void 0 === i.context && (i.context = a);
                        for (s = n.keys(o); r < s.length; r++) t = p(e, t, s[r], o[s[r]], i)
                    } else if (o && u.test(o))
                        for (s = o.split(u); r < s.length; r++) t = e(t, s[r], a, i);
                    else t = e(t, o, a, i);
                    return t
                };
            c.on = function(e, t, n) {
                return h(this, e, t, n)
            };
            var h = function(e, t, n, o, a) {
                if (e._events = p(m, e._events || {}, t, n, {
                        context: o,
                        ctx: e,
                        listening: a
                    }), a) {
                    (e._listeners || (e._listeners = {}))[a.id] = a
                }
                return e
            };
            c.listenTo = function(e, t, o) {
                if (!e) return this;
                var a = e._listenId || (e._listenId = n.uniqueId("l")),
                    i = this._listeningTo || (this._listeningTo = {}),
                    s = i[a];
                if (!s) {
                    var r = this._listenId || (this._listenId = n.uniqueId("l"));
                    s = i[a] = {
                        obj: e,
                        objId: a,
                        id: r,
                        listeningTo: i,
                        count: 0
                    }
                }
                return h(e, t, o, this, s), this
            };
            var m = function(e, t, n, o) {
                if (n) {
                    var a = e[t] || (e[t] = []),
                        i = o.context,
                        s = o.ctx,
                        r = o.listening;
                    r && r.count++, a.push({
                        callback: n,
                        context: i,
                        ctx: i || s,
                        listening: r
                    })
                }
                return e
            };
            c.off = function(e, t, n) {
                return this._events ? (this._events = p(g, this._events, e, t, {
                    context: n,
                    listeners: this._listeners
                }), this) : this
            }, c.stopListening = function(e, t, o) {
                var a = this._listeningTo;
                if (!a) return this;
                for (var i = e ? [e._listenId] : n.keys(a), s = 0; s < i.length; s++) {
                    var r = a[i[s]];
                    if (!r) break;
                    r.obj.off(t, o, this)
                }
                return this
            };
            var g = function(e, t, o, a) {
                if (e) {
                    var i, s = 0,
                        r = a.context,
                        l = a.listeners;
                    if (t || o || r) {
                        for (var d = t ? [t] : n.keys(e); s < d.length; s++) {
                            t = d[s];
                            var c = e[t];
                            if (!c) break;
                            for (var u = [], p = 0; p < c.length; p++) {
                                var h = c[p];
                                o && o !== h.callback && o !== h.callback._callback || r && r !== h.context ? u.push(h) : (i = h.listening) && 0 == --i.count && (delete l[i.id], delete i.listeningTo[i.objId])
                            }
                            u.length ? e[t] = u : delete e[t]
                        }
                        return e
                    }
                    for (var m = n.keys(l); s < m.length; s++) i = l[m[s]], delete l[i.id], delete i.listeningTo[i.objId]
                }
            };
            c.once = function(e, t, o) {
                var a = p(f, {}, e, t, n.bind(this.off, this));
                return "string" == typeof e && null == o && (t = void 0), this.on(a, t, o)
            }, c.listenToOnce = function(e, t, o) {
                var a = p(f, {}, t, o, n.bind(this.stopListening, this, e));
                return this.listenTo(e, a)
            };
            var f = function(e, t, o, a) {
                if (o) {
                    var i = e[t] = n.once(function() {
                        a(t, i), o.apply(this, arguments)
                    });
                    i._callback = o
                }
                return e
            };
            c.trigger = function(e) {
                if (!this._events) return this;
                for (var t = Math.max(0, arguments.length - 1), n = Array(t), o = 0; o < t; o++) n[o] = arguments[o + 1];
                return p(v, this._events, e, void 0, n), this
            };
            var v = function(e, t, n, o) {
                    if (e) {
                        var a = e[t],
                            i = e.all;
                        a && i && (i = i.slice()), a && b(a, o), i && b(i, [t].concat(o))
                    }
                    return e
                },
                b = function(e, t) {
                    var n, o = -1,
                        a = e.length,
                        i = t[0],
                        s = t[1],
                        r = t[2];
                    switch (t.length) {
                        case 0:
                            for (; ++o < a;)(n = e[o]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++o < a;)(n = e[o]).callback.call(n.ctx, i);
                            return;
                        case 2:
                            for (; ++o < a;)(n = e[o]).callback.call(n.ctx, i, s);
                            return;
                        case 3:
                            for (; ++o < a;)(n = e[o]).callback.call(n.ctx, i, s, r);
                            return;
                        default:
                            for (; ++o < a;)(n = e[o]).callback.apply(n.ctx, t);
                            return
                    }
                };
            c.bind = c.on, c.unbind = c.off, n.extend(t, c);
            var w = t.Model = function(e, t) {
                var o = e || {};
                t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), t.parse && (o = this.parse(o, t) || {});
                var a = n.result(this, "defaults");
                o = n.defaults(n.extend({}, a, o), a), this.set(o, t), this.changed = {}, this.initialize.apply(this, arguments)
            };
            n.extend(w.prototype, c, {
                changed: null,
                validationError: null,
                idAttribute: "id",
                cidPrefix: "c",
                initialize: function() {},
                toJSON: function(e) {
                    return n.clone(this.attributes)
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                get: function(e) {
                    return this.attributes[e]
                },
                escape: function(e) {
                    return n.escape(this.get(e))
                },
                has: function(e) {
                    return null != this.get(e)
                },
                matches: function(e) {
                    return !!n.iteratee(e, this)(this.attributes)
                },
                set: function(e, t, o) {
                    if (null == e) return this;
                    var a;
                    if ("object" == typeof e ? (a = e, o = t) : (a = {})[e] = t, o || (o = {}), !this._validate(a, o)) return !1;
                    var i = o.unset,
                        s = o.silent,
                        r = [],
                        l = this._changing;
                    this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
                    var d = this.attributes,
                        c = this.changed,
                        u = this._previousAttributes;
                    for (var p in a) t = a[p], n.isEqual(d[p], t) || r.push(p), n.isEqual(u[p], t) ? delete c[p] : c[p] = t, i ? delete d[p] : d[p] = t;
                    if (this.idAttribute in a && (this.id = this.get(this.idAttribute)), !s) {
                        r.length && (this._pending = o);
                        for (var h = 0; h < r.length; h++) this.trigger("change:" + r[h], this, d[r[h]], o)
                    }
                    if (l) return this;
                    if (!s)
                        for (; this._pending;) o = this._pending, this._pending = !1, this.trigger("change", this, o);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(e, t) {
                    return this.set(e, void 0, n.extend({}, t, {
                        unset: !0
                    }))
                },
                clear: function(e) {
                    var t = {};
                    for (var o in this.attributes) t[o] = void 0;
                    return this.set(t, n.extend({}, e, {
                        unset: !0
                    }))
                },
                hasChanged: function(e) {
                    return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
                },
                changedAttributes: function(e) {
                    if (!e) return !!this.hasChanged() && n.clone(this.changed);
                    var t = this._changing ? this._previousAttributes : this.attributes,
                        o = {};
                    for (var a in e) {
                        var i = e[a];
                        n.isEqual(t[a], i) || (o[a] = i)
                    }
                    return !!n.size(o) && o
                },
                previous: function(e) {
                    return null != e && this._previousAttributes ? this._previousAttributes[e] : null
                },
                previousAttributes: function() {
                    return n.clone(this._previousAttributes)
                },
                fetch: function(e) {
                    e = n.extend({
                        parse: !0
                    }, e);
                    var t = this,
                        o = e.success;
                    return e.success = function(n) {
                        var a = e.parse ? t.parse(n, e) : n;
                        if (!t.set(a, e)) return !1;
                        o && o.call(e.context, t, n, e), t.trigger("sync", t, n, e)
                    }, H(this, e), this.sync("read", this, e)
                },
                save: function(e, t, o) {
                    var a;
                    null == e || "object" == typeof e ? (a = e, o = t) : (a = {})[e] = t, o = n.extend({
                        validate: !0,
                        parse: !0
                    }, o);
                    var i = o.wait;
                    if (a && !i) {
                        if (!this.set(a, o)) return !1
                    } else if (!this._validate(a, o)) return !1;
                    var s = this,
                        r = o.success,
                        l = this.attributes;
                    o.success = function(e) {
                        s.attributes = l;
                        var t = o.parse ? s.parse(e, o) : e;
                        if (i && (t = n.extend({}, a, t)), t && !s.set(t, o)) return !1;
                        r && r.call(o.context, s, e, o), s.trigger("sync", s, e, o)
                    }, H(this, o), a && i && (this.attributes = n.extend({}, l, a));
                    var d = this.isNew() ? "create" : o.patch ? "patch" : "update";
                    "patch" !== d || o.attrs || (o.attrs = a);
                    var c = this.sync(d, this, o);
                    return this.attributes = l, c
                },
                destroy: function(e) {
                    e = e ? n.clone(e) : {};
                    var t = this,
                        o = e.success,
                        a = e.wait,
                        i = function() {
                            t.stopListening(), t.trigger("destroy", t, t.collection, e)
                        };
                    e.success = function(n) {
                        a && i(), o && o.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e)
                    };
                    var s = !1;
                    return this.isNew() ? n.defer(e.success) : (H(this, e), s = this.sync("delete", this, e)), a || i(), s
                },
                url: function() {
                    var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || x();
                    if (this.isNew()) return e;
                    var t = this.get(this.idAttribute);
                    return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t)
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return !this.has(this.idAttribute)
                },
                isValid: function(e) {
                    return this._validate({}, n.extend({}, e, {
                        validate: !0
                    }))
                },
                _validate: function(e, t) {
                    if (!t.validate || !this.validate) return !0;
                    e = n.extend({}, this.attributes, e);
                    var o = this.validationError = this.validate(e, t) || null;
                    return !o || (this.trigger("invalid", this, o, n.extend(t, {
                        validationError: o
                    })), !1)
                }
            }), r(w, {
                keys: 1,
                values: 1,
                pairs: 1,
                invert: 1,
                pick: 0,
                omit: 0,
                chain: 1,
                isEmpty: 1
            }, "attributes");
            var y = t.Collection = function(e, t) {
                    t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
                        silent: !0
                    }, t))
                },
                C = {
                    add: !0,
                    remove: !0,
                    merge: !0
                },
                N = {
                    add: !0,
                    remove: !1
                },
                k = function(e, t, n) {
                    n = Math.min(Math.max(n, 0), e.length);
                    var o, a = Array(e.length - n),
                        i = t.length;
                    for (o = 0; o < a.length; o++) a[o] = e[o + n];
                    for (o = 0; o < i; o++) e[o + n] = t[o];
                    for (o = 0; o < a.length; o++) e[o + i + n] = a[o]
                };
            n.extend(y.prototype, c, {
                model: w,
                initialize: function() {},
                toJSON: function(e) {
                    return this.map(function(t) {
                        return t.toJSON(e)
                    })
                },
                sync: function() {
                    return t.sync.apply(this, arguments)
                },
                add: function(e, t) {
                    return this.set(e, n.extend({
                        merge: !1
                    }, t, N))
                },
                remove: function(e, t) {
                    t = n.extend({}, t);
                    var o = !n.isArray(e);
                    e = o ? [e] : e.slice();
                    var a = this._removeModels(e, t);
                    return !t.silent && a.length && (t.changes = {
                        added: [],
                        merged: [],
                        removed: a
                    }, this.trigger("update", this, t)), o ? a[0] : a
                },
                set: function(e, t) {
                    if (null != e) {
                        t = n.extend({}, C, t), t.parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                        var o = !n.isArray(e);
                        e = o ? [e] : e.slice();
                        var a = t.at;
                        null != a && (a = +a), a > this.length && (a = this.length), a < 0 && (a += this.length + 1);
                        var i, s, r = [],
                            l = [],
                            d = [],
                            c = [],
                            u = {},
                            p = t.add,
                            h = t.merge,
                            m = t.remove,
                            g = !1,
                            f = this.comparator && null == a && t.sort !== !1,
                            v = n.isString(this.comparator) ? this.comparator : null;
                        for (s = 0; s < e.length; s++) {
                            i = e[s];
                            var b = this.get(i);
                            if (b) {
                                if (h && i !== b) {
                                    var w = this._isModel(i) ? i.attributes : i;
                                    t.parse && (w = b.parse(w, t)), b.set(w, t), d.push(b), f && !g && (g = b.hasChanged(v))
                                }
                                u[b.cid] || (u[b.cid] = !0, r.push(b)), e[s] = b
                            } else p && (i = e[s] = this._prepareModel(i, t)) && (l.push(i), this._addReference(i, t), u[i.cid] = !0, r.push(i))
                        }
                        if (m) {
                            for (s = 0; s < this.length; s++) i = this.models[s], u[i.cid] || c.push(i);
                            c.length && this._removeModels(c, t)
                        }
                        var y = !1,
                            N = !f && p && m;
                        if (r.length && N ? (y = this.length !== r.length || n.some(this.models, function(e, t) {
                                return e !== r[t]
                            }), this.models.length = 0, k(this.models, r, 0), this.length = this.models.length) : l.length && (f && (g = !0), k(this.models, l, null == a ? this.length : a), this.length = this.models.length), g && this.sort({
                                silent: !0
                            }), !t.silent) {
                            for (s = 0; s < l.length; s++) null != a && (t.index = a + s), i = l[s], i.trigger("add", i, this, t);
                            (g || y) && this.trigger("sort", this, t), (l.length || c.length || d.length) && (t.changes = {
                                added: l,
                                removed: c,
                                merged: d
                            }, this.trigger("update", this, t))
                        }
                        return o ? e[0] : e
                    }
                },
                reset: function(e, t) {
                    t = t ? n.clone(t) : {};
                    for (var o = 0; o < this.models.length; o++) this._removeReference(this.models[o], t);
                    return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                        silent: !0
                    }, t)), t.silent || this.trigger("reset", this, t), e
                },
                push: function(e, t) {
                    return this.add(e, n.extend({
                        at: this.length
                    }, t))
                },
                pop: function(e) {
                    var t = this.at(this.length - 1);
                    return this.remove(t, e)
                },
                unshift: function(e, t) {
                    return this.add(e, n.extend({
                        at: 0
                    }, t))
                },
                shift: function(e) {
                    var t = this.at(0);
                    return this.remove(t, e)
                },
                slice: function() {
                    return i.apply(this.models, arguments)
                },
                get: function(e) {
                    if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid]
                },
                has: function(e) {
                    return null != this.get(e)
                },
                at: function(e) {
                    return e < 0 && (e += this.length), this.models[e]
                },
                where: function(e, t) {
                    return this[t ? "find" : "filter"](e)
                },
                findWhere: function(e) {
                    return this.where(e, !0)
                },
                sort: function(e) {
                    var t = this.comparator;
                    if (!t) throw new Error("Cannot sort a set without a comparator");
                    e || (e = {});
                    var o = t.length;
                    return n.isFunction(t) && (t = n.bind(t, this)), 1 === o || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("sort", this, e), this
                },
                pluck: function(e) {
                    return this.map(e + "")
                },
                fetch: function(e) {
                    e = n.extend({
                        parse: !0
                    }, e);
                    var t = e.success,
                        o = this;
                    return e.success = function(n) {
                        var a = e.reset ? "reset" : "set";
                        o[a](n, e), t && t.call(e.context, o, n, e), o.trigger("sync", o, n, e)
                    }, H(this, e), this.sync("read", this, e)
                },
                create: function(e, t) {
                    t = t ? n.clone(t) : {};
                    var o = t.wait;
                    if (!(e = this._prepareModel(e, t))) return !1;
                    o || this.add(e, t);
                    var a = this,
                        i = t.success;
                    return t.success = function(e, t, n) {
                        o && a.add(e, n), i && i.call(n.context, e, t, n)
                    }, e.save(null, t), e
                },
                parse: function(e, t) {
                    return e
                },
                clone: function() {
                    return new this.constructor(this.models, {
                        model: this.model,
                        comparator: this.comparator
                    })
                },
                modelId: function(e) {
                    return e[this.model.prototype.idAttribute || "id"]
                },
                _reset: function() {
                    this.length = 0, this.models = [], this._byId = {}
                },
                _prepareModel: function(e, t) {
                    if (this._isModel(e)) return e.collection || (e.collection = this), e;
                    t = t ? n.clone(t) : {}, t.collection = this;
                    var o = new this.model(e, t);
                    return o.validationError ? (this.trigger("invalid", this, o.validationError, t), !1) : o
                },
                _removeModels: function(e, t) {
                    for (var n = [], o = 0; o < e.length; o++) {
                        var a = this.get(e[o]);
                        if (a) {
                            var i = this.indexOf(a);
                            this.models.splice(i, 1), this.length--, delete this._byId[a.cid];
                            var s = this.modelId(a.attributes);
                            null != s && delete this._byId[s], t.silent || (t.index = i, a.trigger("remove", a, this, t)), n.push(a), this._removeReference(a, t)
                        }
                    }
                    return n
                },
                _isModel: function(e) {
                    return e instanceof w
                },
                _addReference: function(e, t) {
                    this._byId[e.cid] = e;
                    var n = this.modelId(e.attributes);
                    null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this)
                },
                _removeReference: function(e, t) {
                    delete this._byId[e.cid];
                    var n = this.modelId(e.attributes);
                    null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(e, t, n, o) {
                    if (t) {
                        if (("add" === e || "remove" === e) && n !== this) return;
                        if ("destroy" === e && this.remove(t, o), "change" === e) {
                            var a = this.modelId(t.previousAttributes()),
                                i = this.modelId(t.attributes);
                            a !== i && (null != a && delete this._byId[a], null != i && (this._byId[i] = t))
                        }
                    }
                    this.trigger.apply(this, arguments)
                }
            }), r(y, {
                forEach: 3,
                each: 3,
                map: 3,
                collect: 3,
                reduce: 0,
                foldl: 0,
                inject: 0,
                reduceRight: 0,
                foldr: 0,
                find: 3,
                detect: 3,
                filter: 3,
                select: 3,
                reject: 3,
                every: 3,
                all: 3,
                some: 3,
                any: 3,
                include: 3,
                includes: 3,
                contains: 3,
                invoke: 0,
                max: 3,
                min: 3,
                toArray: 1,
                size: 1,
                first: 3,
                head: 3,
                take: 3,
                initial: 3,
                rest: 3,
                tail: 3,
                drop: 3,
                last: 3,
                without: 0,
                difference: 0,
                indexOf: 3,
                shuffle: 1,
                lastIndexOf: 3,
                isEmpty: 1,
                chain: 1,
                sample: 3,
                partition: 3,
                groupBy: 3,
                countBy: 3,
                sortBy: 3,
                indexBy: 3,
                findIndex: 3,
                findLastIndex: 3
            }, "models");
            var E = t.View = function(e) {
                    this.cid = n.uniqueId("view"), n.extend(this, n.pick(e, $)), this._ensureElement(), this.initialize.apply(this, arguments)
                },
                $ = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            n.extend(E.prototype, c, {
                tagName: "div",
                $: function(e) {
                    return this.$el.find(e)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this._removeElement(), this.stopListening(), this
                },
                _removeElement: function() {
                    this.$el.remove()
                },
                setElement: function(e) {
                    return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this
                },
                _setElement: function(e) {
                    this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0]
                },
                delegateEvents: function(e) {
                    if (e || (e = n.result(this, "events")), !e) return this;
                    this.undelegateEvents();
                    for (var t in e) {
                        var o = e[t];
                        if (n.isFunction(o) || (o = this[o]), o) {
                            var a = t.match(/^(\S+)\s*(.*)$/);
                            this.delegate(a[1], a[2], n.bind(o, this))
                        }
                    }
                    return this
                },
                delegate: function(e, t, n) {
                    return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this
                },
                undelegateEvents: function() {
                    return this.$el && this.$el.off(".delegateEvents" + this.cid), this
                },
                undelegate: function(e, t, n) {
                    return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this
                },
                _createElement: function(e) {
                    return document.createElement(e)
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(n.result(this, "el"));
                    else {
                        var e = n.extend({}, n.result(this, "attributes"));
                        this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className")), this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e)
                    }
                },
                _setAttributes: function(e) {
                    this.$el.attr(e)
                }
            }), t.sync = function(e, o, a) {
                var i = T[e];
                n.defaults(a || (a = {}), {
                    emulateHTTP: t.emulateHTTP,
                    emulateJSON: t.emulateJSON
                });
                var s = {
                    type: i,
                    dataType: "json"
                };
                if (a.url || (s.url = n.result(o, "url") || x()), null != a.data || !o || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(a.attrs || o.toJSON(a))), a.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                        model: s.data
                    } : {}), a.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i)) {
                    s.type = "POST", a.emulateJSON && (s.data._method = i);
                    var r = a.beforeSend;
                    a.beforeSend = function(e) {
                        if (e.setRequestHeader("X-HTTP-Method-Override", i), r) return r.apply(this, arguments)
                    }
                }
                "GET" === s.type || a.emulateJSON || (s.processData = !1);
                var l = a.error;
                a.error = function(e, t, n) {
                    a.textStatus = t, a.errorThrown = n, l && l.call(a.context, e, t, n)
                };
                var d = a.xhr = t.ajax(n.extend(s, a));
                return o.trigger("request", o, d, a), d
            };
            var T = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                delete: "DELETE",
                read: "GET"
            };
            t.ajax = function() {
                return t.$.ajax.apply(t.$, arguments)
            };
            var L = t.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            };
            n.extend(L.prototype, c, {
                initialize: function() {},
                route: function(e, o, a) {
                    n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(o) && (a = o, o = ""), a || (a = this[o]);
                    var i = this;
                    return t.history.route(e, function(n) {
                        var s = i._extractParameters(e, n);
                        i.execute(a, s, o) !== !1 && (i.trigger.apply(i, ["route:" + o].concat(s)), i.trigger("route", o, s), t.history.trigger("route", i, o, s))
                    }), this
                },
                execute: function(e, t, n) {
                    e && e.apply(this, t)
                },
                navigate: function(e, n) {
                    return t.history.navigate(e, n), this
                },
                _bindRoutes: function() {
                    if (this.routes) {
                        this.routes = n.result(this, "routes");
                        for (var e, t = n.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
                    }
                },
                _routeToRegExp: function(e) {
                    return e = e.replace(/[\-{}\[\]+?.,\\\^$|#\s]/g, "\\$&").replace(/\((.*?)\)/g, "(?:$1)?").replace(/(\(\?)?:\w+/g, function(e, t) {
                        return t ? e : "([^/?]+)"
                    }).replace(/\*\w+/g, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
                },
                _extractParameters: function(e, t) {
                    var o = e.exec(t).slice(1);
                    return n.map(o, function(e, t) {
                        return t === o.length - 1 ? e || null : e ? decodeURIComponent(e) : null
                    })
                }
            });
            var S = t.History = function() {
                this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
            };
            S.started = !1, n.extend(S.prototype, c, {
                interval: 50,
                atRoot: function() {
                    return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
                },
                matchRoot: function() {
                    return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
                },
                decodeFragment: function(e) {
                    return decodeURI(e.replace(/%25/g, "%2525"))
                },
                getSearch: function() {
                    var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
                    return e ? e[0] : ""
                },
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getPath: function() {
                    var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                    return "/" === e.charAt(0) ? e.slice(1) : e
                },
                getFragment: function(e) {
                    return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), e.replace(/^[#\/]|\s+$/g, "")
                },
                start: function(e) {
                    if (S.started) throw new Error("Backbone.history has already been started");
                    if (S.started = !0, this.options = n.extend({
                            root: "/"
                        }, this.options, e), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(/^\/+|\/+$/g, "/"), this._wantsHashChange && this._wantsPushState) {
                        if (!this._hasPushState && !this.atRoot()) {
                            var t = this.root.slice(0, -1) || "/";
                            return this.location.replace(t + "#" + this.getPath()), !0
                        }
                        this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                            replace: !0
                        })
                    }
                    if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                        this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
                        var o = document.body,
                            a = o.insertBefore(this.iframe, o.firstChild).contentWindow;
                        a.document.open(), a.document.close(), a.location.hash = "#" + this.fragment
                    }
                    var i = window.addEventListener || function(e, t) {
                        return attachEvent("on" + e, t)
                    };
                    if (this._usePushState ? i("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? i("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent) return this.loadUrl()
                },
                stop: function() {
                    var e = window.removeEventListener || function(e, t) {
                        return detachEvent("on" + e, t)
                    };
                    this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), S.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
                    this.iframe && this.navigate(t), this.loadUrl()
                },
                loadUrl: function(e) {
                    return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), n.some(this.handlers, function(t) {
                        if (t.route.test(e)) return t.callback(e), !0
                    }))
                },
                navigate: function(e, t) {
                    if (!S.started) return !1;
                    t && t !== !0 || (t = {
                        trigger: !!t
                    }), e = this.getFragment(e || "");
                    var n = this.root;
                    "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
                    var o = n + e;
                    if (e = this.decodeFragment(e.replace(/#.*$/, "")), this.fragment !== e) {
                        if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, o);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(o);
                            if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                                var a = this.iframe.contentWindow;
                                t.replace || (a.document.open(), a.document.close()), this._updateHash(a.location, e, t.replace)
                            }
                        }
                        return t.trigger ? this.loadUrl(e) : void 0
                    }
                },
                _updateHash: function(e, t, n) {
                    if (n) {
                        var o = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(o + "#" + t)
                    } else e.hash = "#" + t
                }
            }), t.history = new S;
            var A = function(e, t) {
                var o, a = this;
                return o = e && n.has(e, "constructor") ? e.constructor : function() {
                    return a.apply(this, arguments)
                }, n.extend(o, a, t), o.prototype = n.create(a.prototype, e), o.prototype.constructor = o, o.__super__ = a.prototype, o
            };
            w.extend = y.extend = L.extend = E.extend = S.extend = A;
            var x = function() {
                    throw new Error('A "url" property or function must be specified')
                },
                H = function(e, t) {
                    var n = t.error;
                    t.error = function(o) {
                        n && n.call(t.context, e, o, t), e.trigger("error", e, o, t)
                    }
                };
            return t
        })
    }).call(t, n(45))
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    n(1), n(3), n(5), n(36), n(16), n(9), n(21), n(19), n(20), n(24), n(18), n(15), n(10), n(11), n(12), n(14), n(8), n(33), n(22), n(23), n(13), n(27), n(26), n(4), n(37), n(38), n(31), n(6), n(25), n(28), n(30), n(32), n(17), n(34), n(35), n(29), n(7), e.exports = n(2)
}]);
