(function () {
    "use strict";
    var ze = Math.floor,
        Te = Math.abs,
        Fe = Math.PI,
        Be = Math.pow,
        Oe = Math.round,
        je = Math.sqrt,
        Ne = Math.sin,
        Me = Math.cos,
        Re = Math.min,
        Ue = Math.max;
    function e(t) {
        "@babel/helpers - typeof";
        return (
            (e =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
            e(t)
        );
    }
    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function n(e, t) {
        for (var n, o = 0; o < t.length; o++) (n = t[o]), (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
    function o(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e;
    }
    function r(e, t, i) {
        return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
    }
    function a(e) {
        return e && DataView.prototype.isPrototypeOf(e);
    }
    function s(e) {
        if (("string" != typeof e && (e += ""), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e) || "" === e)) throw new TypeError("Invalid character in header field name");
        return e.toLowerCase();
    }
    function l(e) {
        return "string" != typeof e && (e += ""), e;
    }
    function d(e) {
        var t = {
            next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
            },
        };
        return (
            We.iterable &&
                (t[Symbol.iterator] = function () {
                    return t;
                }),
            t
        );
    }
    function c(e) {
        (this.map = {}),
            e instanceof c
                ? e.forEach(function (e, t) {
                      this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                      this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                  }, this);
    }
    function p(e) {
        return e.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e.bodyUsed = !0);
    }
    function g(e) {
        return new Promise(function (t, i) {
            (e.onload = function () {
                t(e.result);
            }),
                (e.onerror = function () {
                    i(e.error);
                });
        });
    }
    function u(e) {
        var t = new FileReader(),
            i = g(t);
        return t.readAsArrayBuffer(e), i;
    }
    function m(e) {
        var t = new FileReader(),
            i = g(t);
        return t.readAsText(e), i;
    }
    function h(e) {
        for (var t = new Uint8Array(e), n = Array(t.length), o = 0; o < t.length; o++) n[o] = String.fromCharCode(t[o]);
        return n.join("");
    }
    function y(e) {
        if (e.slice) return e.slice(0);
        var t = new Uint8Array(e.byteLength);
        return t.set(new Uint8Array(e)), t.buffer;
    }
    function f() {
        return (
            (this.bodyUsed = !1),
            (this._initBody = function (e) {
                (this._bodyInit = e),
                    e
                        ? "string" == typeof e
                            ? (this._bodyText = e)
                            : We.blob && Blob.prototype.isPrototypeOf(e)
                            ? (this._bodyBlob = e)
                            : We.formData && FormData.prototype.isPrototypeOf(e)
                            ? (this._bodyFormData = e)
                            : We.searchParams && URLSearchParams.prototype.isPrototypeOf(e)
                            ? (this._bodyText = e.toString())
                            : We.arrayBuffer && We.blob && a(e)
                            ? ((this._bodyArrayBuffer = y(e.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                            : We.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || He(e))
                            ? (this._bodyArrayBuffer = y(e))
                            : (this._bodyText = e = Object.prototype.toString.call(e))
                        : (this._bodyText = ""),
                    this.headers.get("content-type") ||
                        ("string" == typeof e
                            ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                            : this._bodyBlob && this._bodyBlob.type
                            ? this.headers.set("content-type", this._bodyBlob.type)
                            : We.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }),
            We.blob &&
                ((this.blob = function () {
                    var e = p(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    else return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                    return this._bodyArrayBuffer ? p(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u);
                })),
            (this.text = function () {
                var e = p(this);
                if (e) return e;
                if (this._bodyBlob) return m(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(h(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                else return Promise.resolve(this._bodyText);
            }),
            We.formData &&
                (this.formData = function () {
                    return this.text().then(x);
                }),
            (this.json = function () {
                return this.text().then(JSON.parse);
            }),
            this
        );
    }
    function v(e) {
        var t = e.toUpperCase();
        return -1 < Xe.indexOf(t) ? t : e;
    }
    function b(e, t) {
        t = t || {};
        var i = t.body;
        if (e instanceof b) {
            if (e.bodyUsed) throw new TypeError("Already read");
            (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new c(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                i || null == e._bodyInit || ((i = e._bodyInit), (e.bodyUsed = !0));
        } else this.url = e + "";
        if (
            ((this.credentials = t.credentials || this.credentials || "same-origin"),
            (t.headers || !this.headers) && (this.headers = new c(t.headers)),
            (this.method = v(t.method || this.method || "GET")),
            (this.mode = t.mode || this.mode || null),
            (this.signal = t.signal || this.signal),
            (this.referrer = null),
            ("GET" === this.method || "HEAD" === this.method) && i)
        )
            throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(i);
    }
    function x(e) {
        var t = new FormData();
        return (
            e
                .trim()
                .split("&")
                .forEach(function (e) {
                    if (e) {
                        var i = e.split("="),
                            n = i.shift().replace(/\+/g, " "),
                            o = i.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(n), decodeURIComponent(o));
                    }
                }),
            t
        );
    }
    function E(e) {
        var t = new c(),
            i = e.replace(/\r?\n[\t ]+/g, " ");
        return (
            i.split(/\r?\n/).forEach(function (e) {
                var i = e.split(":"),
                    n = i.shift().trim();
                if (n) {
                    var o = i.join(":").trim();
                    t.append(n, o);
                }
            }),
            t
        );
    }
    function S(e, t) {
        t || (t = {}),
            (this.type = "default"),
            (this.status = t.status === void 0 ? 200 : t.status),
            (this.ok = 200 <= this.status && 300 > this.status),
            (this.statusText = "statusText" in t ? t.statusText : "OK"),
            (this.headers = new c(t.headers)),
            (this.url = t.url || ""),
            this._initBody(e);
    }
    function _(e, t) {
        return new Promise(function (i, n) {
            function o() {
                a.abort();
            }
            var r = new b(e, t);
            if (r.signal && r.signal.aborted) return n(new Ge("Aborted", "AbortError"));
            var a = new XMLHttpRequest();
            (a.onload = function () {
                var e = { status: a.status, statusText: a.statusText, headers: E(a.getAllResponseHeaders() || "") };
                e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                var t = "response" in a ? a.response : a.responseText;
                i(new S(t, e));
            }),
                (a.onerror = function () {
                    n(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                    n(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                    n(new Ge("Aborted", "AbortError"));
                }),
                a.open(r.method, r.url, !0),
                "include" === r.credentials ? (a.withCredentials = !0) : "omit" === r.credentials && (a.withCredentials = !1),
                "responseType" in a && We.blob && (a.responseType = "blob"),
                r.headers.forEach(function (e, t) {
                    a.setRequestHeader(t, e);
                }),
                r.signal &&
                    (r.signal.addEventListener("abort", o),
                    (a.onreadystatechange = function () {
                        4 === a.readyState && r.signal.removeEventListener("abort", o);
                    })),
                a.send("undefined" == typeof r._bodyInit ? null : r._bodyInit);
        });
    }
    function C(e, t, i) {
        return Re(Ue(e, t), i);
    }
    function k(e, t) {
        return -1 < e.indexOf(t);
    }
    function D(e, t) {
        return e.apply(null, t);
    }
    function I(e) {
        var t = /\(([^)]+)\)/.exec(e);
        return t
            ? t[1].split(",").map(function (e) {
                  return parseFloat(e);
              })
            : [];
    }
    function P(e, i) {
        function n(e) {
            var t = Math.exp,
                n = i ? (i * e) / 1e3 : e;
            return (n = 1 > c ? t(-n * c * d) * (1 * Me(p * n) + g * Ne(p * n)) : (1 + g * n) * t(-n * d)), 0 === e || 1 === e ? e : 1 - n;
        }
        var o = I(e),
            r = C(Ke.und(o[0]) ? 1 : o[0], 0.1, 100),
            a = C(Ke.und(o[1]) ? 100 : o[1], 0.1, 100),
            s = C(Ke.und(o[2]) ? 10 : o[2], 0.1, 100),
            l = C(Ke.und(o[3]) ? 0 : o[3], 0.1, 100),
            d = je(a / r),
            c = s / (2 * je(a * r)),
            p = 1 > c ? d * je(1 - c * c) : 0,
            g = 1 > c ? (c * d + -l) / p : -l + d;
        return i
            ? n
            : function () {
                  var t = Ze.springs[e];
                  if (t) return t;
                  for (var i = 1 / 6, o = 0, r = 0; ; )
                      if (((o += i), 1 !== n(o))) r = 0;
                      else if ((r++, 16 <= r)) break;
                  var a = 1e3 * (o * i);
                  return (Ze.springs[e] = a), a;
              };
    }
    function w(e) {
        return (
            void 0 === e && (e = 10),
            function (i) {
                return Oe(i * e) * (1 / e);
            }
        );
    }
    function A(e, t) {
        if (Ke.fnc(e)) return e;
        var i = e.split("(")[0],
            n = tt[i],
            o = I(e);
        return "spring" === i ? P(e, t) : "cubicBezier" === i ? D(et, o) : "steps" === i ? D(w, o) : D(n, o);
    }
    function L(e) {
        try {
            var t = document.querySelectorAll(e);
            return t;
        } catch (t) {}
    }
    function z(e, t) {
        for (var n = e.length, o = 2 <= arguments.length ? arguments[1] : void 0, r = [], a = 0; a < n; a++)
            if (a in e) {
                var s = e[a];
                t.call(o, s, a, e) && r.push(s);
            }
        return r;
    }
    function T(e) {
        return e.reduce(function (e, t) {
            return e.concat(Ke.arr(t) ? T(t) : t);
        }, []);
    }
    function F(e) {
        return Ke.arr(e) ? e : (Ke.str(e) && (e = L(e) || e), e instanceof NodeList || e instanceof HTMLCollection ? [].slice.call(e) : [e]);
    }
    function B(e, t) {
        return e.some(function (e) {
            return e === t;
        });
    }
    function O(e) {
        var t = {};
        for (var i in e) t[i] = e[i];
        return t;
    }
    function j(e, t) {
        var i = O(e);
        for (var n in e) i[n] = t.hasOwnProperty(n) ? t[n] : e[n];
        return i;
    }
    function N(e, t) {
        var i = O(e);
        for (var n in t) i[n] = Ke.und(e[n]) ? t[n] : e[n];
        return i;
    }
    function M(e) {
        var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
        return t ? "rgba(" + t[1] + ",1)" : e;
    }
    function R(e) {
        var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
                return t + t + i + i + n + n;
            }),
            i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),
            n = parseInt(i[1], 16),
            o = parseInt(i[2], 16),
            r = parseInt(i[3], 16);
        return "rgba(" + n + "," + o + "," + r + ",1)";
    }
    function U(e) {
        function t(e, i, n) {
            return 0 > n && (n += 1), 1 < n && (n -= 1), n < 1 / 6 ? e + 6 * (i - e) * n : n < 1 / 2 ? i : n < 2 / 3 ? e + 6 * ((i - e) * (2 / 3 - n)) : e;
        }
        var i,
            n,
            o,
            d = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
            c = parseInt(d[1], 10) / 360,
            u = parseInt(d[2], 10) / 100,
            s = parseInt(d[3], 10) / 100,
            l = d[4] || 1;
        if (0 == u) i = n = o = s;
        else {
            var a = 0.5 > s ? s * (1 + u) : s + u - s * u,
                m = 2 * s - a;
            (i = t(m, a, c + 1 / 3)), (n = t(m, a, c)), (o = t(m, a, c - 1 / 3));
        }
        return "rgba(" + 255 * i + "," + 255 * n + "," + 255 * o + "," + l + ")";
    }
    function W(e) {
        return Ke.rgb(e) ? M(e) : Ke.hex(e) ? R(e) : Ke.hsl(e) ? U(e) : void 0;
    }
    function q(e) {
        var t = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);
        if (t) return t[1];
    }
    function H(e) {
        return k(e, "translate") || "perspective" === e ? "px" : k(e, "rotate") || k(e, "skew") ? "deg" : void 0;
    }
    function X(e, t) {
        return Ke.fnc(e) ? e(t.target, t.id, t.total) : e;
    }
    function V(e, t) {
        return e.getAttribute(t);
    }
    function G(e, t, i) {
        var n = q(t);
        if (B([i, "deg", "rad", "turn"], n)) return t;
        var o = Ze.CSS[t + i];
        if (!Ke.und(o)) return o;
        var r = document.createElement(e.tagName),
            a = e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
        a.appendChild(r), (r.style.position = "absolute"), (r.style.width = 100 + i);
        var s = 100 / r.offsetWidth;
        a.removeChild(r);
        var l = s * parseFloat(t);
        return (Ze.CSS[t + i] = l), l;
    }
    function Q(e, t, i) {
        if (t in e.style) {
            var n = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                o = e.style[t] || getComputedStyle(e).getPropertyValue(n) || "0";
            return i ? G(e, o, i) : o;
        }
    }
    function Y(e, t) {
        return Ke.dom(e) && !Ke.inp(e) && (V(e, t) || (Ke.svg(e) && e[t])) ? "attribute" : Ke.dom(e) && B(Je, t) ? "transform" : Ke.dom(e) && "transform" !== t && Q(e, t) ? "css" : null == e[t] ? void 0 : "object";
    }
    function $(e) {
        if (Ke.dom(e)) {
            for (var t, i = e.style.transform || "", n = new Map(); (t = /(\w+)\(([^)]*)\)/g.exec(i)); ) n.set(t[1], t[2]);
            return n;
        }
    }
    function J(e, t, i, n) {
        var o = k(t, "scale") ? 1 : 0 + H(t),
            r = $(e).get(t) || o;
        return i && (i.transforms.list.set(t, r), (i.transforms.last = t)), n ? G(e, r, n) : r;
    }
    function Z(e, t, i, n) {
        switch (Y(e, t)) {
            case "transform":
                return J(e, t, n, i);
            case "css":
                return Q(e, t, i);
            case "attribute":
                return V(e, t);
            default:
                return e[t] || 0;
        }
    }
    function K(e, t) {
        var i = /^(\*=|\+=|-=)/.exec(e);
        if (!i) return e;
        var n = q(e) || 0,
            o = parseFloat(t),
            r = parseFloat(e.replace(i[0], ""));
        switch (i[0][0]) {
            case "+":
                return o + r + n;
            case "-":
                return o - r + n;
            case "*":
                return o * r + n;
        }
    }
    function ee(e, t) {
        if (Ke.col(e)) return W(e);
        if (/\s/g.test(e)) return e;
        var i = q(e),
            n = i ? e.substr(0, e.length - i.length) : e;
        return t ? n + t : n;
    }
    function te(e, t) {
        return je(Be(t.x - e.x, 2) + Be(t.y - e.y, 2));
    }
    function ie(e) {
        return 2 * Fe * V(e, "r");
    }
    function ne(e) {
        return 2 * V(e, "width") + 2 * V(e, "height");
    }
    function oe(e) {
        return te({ x: V(e, "x1"), y: V(e, "y1") }, { x: V(e, "x2"), y: V(e, "y2") });
    }
    function re(e) {
        for (var t, n, o = e.points, r = 0, a = 0; a < o.numberOfItems; a++) (n = o.getItem(a)), 0 < a && (r += te(t, n)), (t = n);
        return r;
    }
    function ae(e) {
        var t = e.points;
        return re(e) + te(t.getItem(t.numberOfItems - 1), t.getItem(0));
    }
    function se(e) {
        if (e.getTotalLength) return e.getTotalLength();
        switch (e.tagName.toLowerCase()) {
            case "circle":
                return ie(e);
            case "rect":
                return ne(e);
            case "line":
                return oe(e);
            case "polyline":
                return re(e);
            case "polygon":
                return ae(e);
        }
    }
    function le(e) {
        for (var t = e.parentNode; Ke.svg(t) && !!Ke.svg(t.parentNode); ) t = t.parentNode;
        return t;
    }
    function de(e, t) {
        var i = t || {},
            n = i.el || le(e),
            o = n.getBoundingClientRect(),
            r = V(n, "viewBox"),
            a = o.width,
            s = o.height,
            l = i.viewBox || (r ? r.split(" ") : [0, 0, a, s]);
        return { el: n, viewBox: l, x: l[0] / 1, y: l[1] / 1, w: a / l[2], h: s / l[3] };
    }
    function ce(e, t) {
        function i(i) {
            void 0 === i && (i = 0);
            var n = 1 <= t + i ? t + i : 0;
            return e.el.getPointAtLength(n);
        }
        var n = de(e.el, e.svg),
            o = i(),
            r = i(-1),
            a = i(1);
        switch (e.property) {
            case "x":
                return (o.x - n.x) * n.w;
            case "y":
                return (o.y - n.y) * n.h;
            case "angle":
                return (180 * Math.atan2(a.y - r.y, a.x - r.x)) / Fe;
        }
    }
    function pe(e, t) {
        var i = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
            n = ee(Ke.pth(e) ? e.totalLength : e, t) + "";
        return { original: n, numbers: n.match(i) ? n.match(i).map(Number) : [0], strings: Ke.str(e) || t ? n.split(i) : [] };
    }
    function ge(e) {
        var t = e ? T(Ke.arr(e) ? e.map(F) : F(e)) : [];
        return z(t, function (e, t, i) {
            return i.indexOf(e) === t;
        });
    }
    function ue(e) {
        var n = ge(e);
        return n.map(function (e, t) {
            return { target: e, id: t, total: n.length, transforms: { list: $(e) } };
        });
    }
    function me(e, t) {
        var i = O(t);
        if ((/^spring/.test(i.easing) && (i.duration = P(i.easing)), Ke.arr(e))) {
            var n = e.length,
                o = 2 === n && !Ke.obj(e[0]);
            o ? (e = { value: e }) : !Ke.fnc(t.duration) && (i.duration = t.duration / n);
        }
        var r = Ke.arr(e) ? e : [e];
        return r
            .map(function (e, n) {
                var i = Ke.obj(e) && !Ke.pth(e) ? e : { value: e };
                return Ke.und(i.delay) && (i.delay = n ? 0 : t.delay), Ke.und(i.endDelay) && (i.endDelay = n === r.length - 1 ? t.endDelay : 0), i;
            })
            .map(function (e) {
                return N(e, i);
            });
    }
    function he(e) {
        for (
            var t = z(
                    T(
                        e.map(function (e) {
                            return Object.keys(e);
                        })
                    ),
                    function (e) {
                        return Ke.key(e);
                    }
                ).reduce(function (e, t) {
                    return 0 > e.indexOf(t) && e.push(t), e;
                }, []),
                n = {},
                o = function (o) {
                    var i = t[o];
                    n[i] = e.map(function (e) {
                        var t = {};
                        for (var n in e) Ke.key(n) ? n == i && (t.value = e[n]) : (t[n] = e[n]);
                        return t;
                    });
                },
                r = 0;
            r < t.length;
            r++
        )
            o(r);
        return n;
    }
    function ye(e, t) {
        var i = [],
            n = t.keyframes;
        for (var o in (n && (t = N(he(n), t)), t)) Ke.key(o) && i.push({ name: o, tweens: me(t[o], e) });
        return i;
    }
    function fe(e, i) {
        var n = {};
        for (var t in e) {
            var o = X(e[t], i);
            Ke.arr(o) &&
                ((o = o.map(function (e) {
                    return X(e, i);
                })),
                1 === o.length && (o = o[0])),
                (n[t] = o);
        }
        return (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n;
    }
    function ve(e, i) {
        var n;
        return e.tweens.map(function (o) {
            var t = fe(o, i),
                r = t.value,
                a = Ke.arr(r) ? r[1] : r,
                s = q(a),
                l = Z(i.target, e.name, s, i),
                d = n ? n.to.original : l,
                c = Ke.arr(r) ? r[0] : d,
                p = q(c) || q(l),
                g = s || p;
            return (
                Ke.und(a) && (a = d),
                (t.from = pe(c, g)),
                (t.to = pe(K(a, c), g)),
                (t.start = n ? n.end : 0),
                (t.end = t.start + t.delay + t.duration + t.endDelay),
                (t.easing = A(t.easing, t.duration)),
                (t.isPath = Ke.pth(r)),
                (t.isColor = Ke.col(t.from.original)),
                t.isColor && (t.round = 1),
                (n = t),
                t
            );
        });
    }
    function be(e, t) {
        var i = ue(e);
        i.forEach(function (e) {
            for (var i in t) {
                var n = X(t[i], e),
                    o = e.target,
                    r = q(n),
                    a = Z(o, i, r, e),
                    s = r || q(a),
                    l = K(ee(n, s), a),
                    d = Y(o, i);
                it[d](o, i, l, e.transforms, !0);
            }
        });
    }
    function xe(e, t) {
        var i = Y(e.target, t.name);
        if (i) {
            var n = ve(t, e),
                o = n[n.length - 1];
            return { type: i, property: t.name, animatable: e, tweens: n, duration: o.end, delay: n[0].delay, endDelay: o.endDelay };
        }
    }
    function Ee(e, t) {
        return z(
            T(
                e.map(function (e) {
                    return t.map(function (t) {
                        return xe(e, t);
                    });
                })
            ),
            function (e) {
                return !Ke.und(e);
            }
        );
    }
    function Se(e, t) {
        var i = e.length,
            n = function (e) {
                return e.timelineOffset ? e.timelineOffset : 0;
            },
            o = {};
        return (
            (o.duration = i
                ? Ue.apply(
                      Math,
                      e.map(function (e) {
                          return n(e) + e.duration;
                      })
                  )
                : t.duration),
            (o.delay = i
                ? Re.apply(
                      Math,
                      e.map(function (e) {
                          return n(e) + e.delay;
                      })
                  )
                : t.delay),
            (o.endDelay = i
                ? o.duration -
                  Ue.apply(
                      Math,
                      e.map(function (e) {
                          return n(e) + e.duration - e.endDelay;
                      })
                  )
                : t.endDelay),
            o
        );
    }
    function _e(e) {
        var t = j(Ye, e),
            i = j($e, e),
            n = ye(i, e),
            o = ue(e.targets),
            r = Ee(o, n),
            a = Se(r, i),
            s = nt;
        return nt++, N(t, { id: s, children: [], animatables: o, animations: r, duration: a.duration, delay: a.delay, endDelay: a.endDelay });
    }
    function Ce() {
        document.hidden
            ? (ot.forEach(function (e) {
                  return e.pause();
              }),
              (rt = ot.slice(0)),
              (ke.running = ot = []))
            : rt.forEach(function (e) {
                  return e.play();
              });
    }
    function ke(e) {
        function t(e) {
            var t =
                window.Promise &&
                new Promise(function (e) {
                    return (y = e);
                });
            return (e.finished = t), t;
        }
        function i() {
            var e = f.direction;
            "alternate" !== e && (f.direction = "normal" === e ? "reverse" : "normal"),
                (f.reversed = !f.reversed),
                p.forEach(function (e) {
                    return (e.reversed = f.reversed);
                });
        }
        function n(e) {
            return f.reversed ? f.duration - e : e;
        }
        function o() {
            (g = 0), (u = n(f.currentTime) * (1 / ke.speed));
        }
        function r(e, t) {
            t && t.seek(e - t.timelineOffset);
        }
        function a(e) {
            if (!f.reversePlayback) for (var t = 0; t < h; t++) r(e, p[t]);
            else for (var n = h; n--; ) r(e, p[n]);
        }
        function s(e) {
            for (var t = 0, o = f.animations, r = o.length; t < r; ) {
                var l = o[t],
                    d = l.animatable,
                    c = l.tweens,
                    p = c.length - 1,
                    g = c[p];
                p &&
                    (g =
                        z(c, function (i) {
                            return e < i.end;
                        })[0] || g);
                for (var u = C(e - g.start - g.delay, 0, g.duration) / g.duration, m = isNaN(u) ? 1 : g.easing(u), h = g.to.strings, y = g.round, v = [], x = g.to.numbers.length, E = void 0, S = 0; S < x; S++) {
                    var _ = void 0,
                        k = g.to.numbers[S],
                        D = g.from.numbers[S] || 0;
                    (_ = g.isPath ? ce(g.value, m * k) : D + m * (k - D)), y && !(g.isColor && 2 < S) && (_ = Oe(_ * y) / y), v.push(_);
                }
                var I = h.length;
                if (!I) E = v[0];
                else {
                    E = h[0];
                    for (var P = 0; P < I; P++) {
                        var w = h[P],
                            a = h[P + 1],
                            b = v[P];
                        isNaN(b) || (a ? (E += b + a) : (E += b + " "));
                    }
                }
                it[l.type](d.target, l.property, E, d.transforms), (l.currentValue = E), t++;
            }
        }
        function l(e) {
            f[e] && !f.passThrough && f[e](f);
        }
        function d() {
            f.remaining && !0 !== f.remaining && f.remaining--;
        }
        function c(e) {
            var o = f.duration,
                r = f.delay,
                c = o - f.endDelay,
                h = n(e);
            (f.progress = C(100 * (h / o), 0, 100)),
                (f.reversePlayback = h < f.currentTime),
                p && a(h),
                !f.began && 0 < f.currentTime && ((f.began = !0), l("begin")),
                !f.loopBegan && 0 < f.currentTime && ((f.loopBegan = !0), l("loopBegin")),
                h <= r && 0 !== f.currentTime && s(0),
                ((h >= c && f.currentTime !== o) || !o) && s(o),
                h > r && h < c ? (!f.changeBegan && ((f.changeBegan = !0), (f.changeCompleted = !1), l("changeBegin")), l("change"), s(h)) : f.changeBegan && ((f.changeCompleted = !0), (f.changeBegan = !1), l("changeComplete")),
                (f.currentTime = C(h, 0, o)),
                f.began && l("update"),
                e >= o &&
                    ((u = 0),
                    d(),
                    f.remaining
                        ? ((g = m), l("loopComplete"), (f.loopBegan = !1), "alternate" === f.direction && i())
                        : ((f.paused = !0), !f.completed && ((f.completed = !0), l("loopComplete"), l("complete"), !f.passThrough && "Promise" in window && (y(), (v = t(f))))));
        }
        void 0 === e && (e = {});
        var p,
            g = 0,
            u = 0,
            m = 0,
            h = 0,
            y = null,
            f = _e(e),
            v = t(f);
        return (
            (f.reset = function () {
                var e = f.direction;
                (f.passThrough = !1),
                    (f.currentTime = 0),
                    (f.progress = 0),
                    (f.paused = !0),
                    (f.began = !1),
                    (f.loopBegan = !1),
                    (f.changeBegan = !1),
                    (f.completed = !1),
                    (f.changeCompleted = !1),
                    (f.reversePlayback = !1),
                    (f.reversed = "reverse" === e),
                    (f.remaining = f.loop),
                    (p = f.children),
                    (h = p.length);
                for (var t = h; t--; ) f.children[t].reset();
                ((f.reversed && !0 !== f.loop) || ("alternate" === e && 1 === f.loop)) && f.remaining++, s(f.reversed ? f.duration : 0);
            }),
            (f.set = function (e, t) {
                return be(e, t), f;
            }),
            (f.tick = function (e) {
                (m = e), g || (g = m), c((m + (u - g)) * ke.speed);
            }),
            (f.seek = function (e) {
                c(n(e));
            }),
            (f.pause = function () {
                (f.paused = !0), o();
            }),
            (f.play = function () {
                f.paused && (f.completed && f.reset(), (f.paused = !1), ot.push(f), o(), !Qe && at());
            }),
            (f.reverse = function () {
                i(), o();
            }),
            (f.restart = function () {
                f.reset(), f.play();
            }),
            f.reset(),
            f.autoplay && f.play(),
            f
        );
    }
    function De(e, t) {
        for (var i = t.length; i--; ) B(e, t[i].animatable.target) && t.splice(i, 1);
    }
    function Ie(e) {
        for (var t = ge(e), n = ot.length; n--; ) {
            var o = ot[n],
                r = o.animations,
                a = o.children;
            De(t, r);
            for (var s = a.length; s--; ) {
                var l = a[s],
                    d = l.animations;
                De(t, d), d.length || l.children.length || a.splice(s, 1);
            }
            r.length || a.length || o.pause();
        }
    }
    function Pe() {
        function e(e, t) {
            for (var n, o = e.childNodes, r = [], a = 0; a < o.length; a++) (n = o[a].cloneNode(!0)), t.push(n);
            return r;
        }
        function t() {
            for (var e, t = Z; t < Q; t++) (e = G[t]), e && ((e.element.style.transition = "opacity .3s ease"), (e.element.style.opacity = 1));
        }
        function n() {
            if (K.length) {
                for (var e, t = 0, i = K.length; t < i; t++) (e = K[t]), e.pause(), e.classList.remove("is-playing");
                K.length = 0;
            }
        }
        function o() {
            var e = ct ? ".video-desktop video" : ".video-mobile video",
                t = X.selectedElement.querySelectorAll(e);
            if (t.length) for (var i, n = 0, o = t.length; n < o; n++) (i = t[n]), i.classList.add("is-playing"), i.play(), K.push(i);
        }
        function a() {
            n();
            var e = ct ? ".video-desktop video" : ".video-mobile video",
                t = X.selectedElement.querySelector(e);
            t && (t.classList.add("is-playing"), t.play(), K.push(t));
        }
        function s() {
            var e = j.querySelector(".is-selected");
            if (e) {
                var t = e.classList.contains("is-white-text");
                t ? document.body.classList.add("is-white-text") : document.body.classList.remove("is-white-text");
            }
        }
        function l() {
            X.select(V.selectedIndex), s();
        }
        function d() {
            var e = V.x;
            0 <= e
                ? ((e = -V.slideableWidth + e), e >= V.slideableWidth && ((V.x = -(V.x % V.slideableWidth) + 1), (e = V.x)))
                : e < -V.slideableWidth && ((e = V.slideableWidth + e), e <= -V.slideableWidth && ((V.x = (V.x % V.slideableWidth) - 1), (e = V.x)));
            var t = J.reduce(function (t, i) {
                    return Te(i - e) <= Te(t - e) ? i : t;
                }),
                i = J.indexOf(t);
            i === V.scrollSlideIndex || (null === V.scrollSlideIndex && (V.scrollSlideIndex = V.selectedIndex), (V.scrollSlideIndex = i), V.select(V.scrollSlideIndex), l());
        }
        function c() {
            L || (V.slides && ((V.x = (V.x - z) % V.slideableWidth), (V.selectedIndex = V.dragEndRestingSelect()), V.updateSelectedSlide(), V.settle(V.x), A && l(), (A = !A)), requestAnimationFrame(c));
        }
        function p() {
            L = !0;
        }
        function g() {
            L && ((L = !1), m(), requestAnimationFrame(c));
        }
        function u() {
            clearTimeout(O);
        }
        function m() {
            O = setTimeout(S, T);
        }
        function h() {
            (F = !0), o(), _(), n(), p(), u(), l(), a();
        }
        function y() {
            (F = !1), m(), F || B || g();
        }
        function f() {
            (B = !0), (F = !0), p(), u();
        }
        function v() {
            (F = !0), p(), u(), d();
        }
        function b() {
            F = !1;
        }
        function x() {
            (B = !1), F || B || g();
        }
        function E() {
            V.selectedIndex > Z / 2 && V.selectedIndex < Q - 1 && t(), L && d();
        }
        function S() {
            B || F || N.classList.remove("is-visible");
        }
        function _() {
            u(), N.classList.contains("is-hover") || m(), N.classList.add("is-visible");
        }
        function C() {
            u(), N.classList.add("is-hover");
        }
        function k() {
            m(), N.classList.remove("is-hover");
        }
        function D() {
            (ct = lt.width > lt.height), (z = ct ? w : P), (T = ct ? 2000 : 3000);
        }
        for (
            var I,
                P = 0.8,
                w = 0.8,
                A = !0,
                L = !1,
                z = ct ? w : P,
                T = ct ? 2e3 : 3e3,
                F = !1,
                B = !1,
                O = null,
                j = document.querySelector(".main-carousel"),
                N = document.querySelector(".nav-carousel"),
                M = document.querySelector(".info-text"),
                R = N.querySelectorAll(".carousel-cell"),
                U = 26 * R.length,
                W = Math.ceil((2 * lt.width) / U),
                q = [],
                H = 0;
            H < W;
            H++
        )
            e(N, q);
        var X = new Flickity(".main-carousel", { fade: !0, draggable: !1, lazyLoad: 1, pageDots: !1, prevNextButtons: !1, freeScroll: !0, wrapAround: !0, freeScrollFriction: 0.035, percentPosition: !1, accessibility: !1 }),
            V = new Flickity(".nav-carousel", ((I = { pageDots: !1, prevNextButtons: !1, percentPosition: !1, freeScroll: !0, wrapAround: !0, freeScrollFriction: 0.035 }), r(I, "percentPosition", !1), r(I, "accessibility", !1), I));
        V.append(q);
        for (
            var G = V.slides.map(function (e) {
                    return e.cells[0];
                }),
                Q = G.length,
                Y = X.slides.map(function (e) {
                    return e.cells[0];
                }),
                $ = Y.length,
                J = V.slides.map(function (e) {
                    return -e.target;
                }),
                Z = Q / 2,
                K = [],
                ee = 0;
            ee < $;
            ee++
        ) {
            var te = Y[ee].element,
                ie = ct ? ".video-desktop video" : ".video-mobile video",
                ne = te.querySelectorAll(ie);
            ne.length && ne.forEach(function () {});
        }
        for (var oe = 0; oe < Q; oe++) {
            var re = G[oe].element,
                ae = re.querySelector(".image-desktop");
            ae && (ae.addEventListener("mousemove", C, !1), ae.addEventListener("mouseleave", k, !1));
        }
        (function () {
            for (var e, t = Z; t < Q; t++) (e = G[t]), e && ((e.element.style.transition = "none"), (e.element.style.opacity = 0));
        })(),
            (V.cellAlign = 0),
            V.reposition(),
            (function () {
                document.body.addEventListener("touchstart", _, !1),
                    document.body.addEventListener("mousemove", _, !1),
                    window.addEventListener("resize", D, !1),
                    V.on("scroll", E),
                    V.on("pointerDown", h),
                    V.on("pointerUp", y),
                    V.on("dragStart", f),
                    V.on("dragMove", v),
                    V.on("dragEnd", b),
                    V.on("settle", x),
                    X.on("change", a);
            })(),
            (function () {
                setTimeout(function () {
                    N.classList.add("is-visible"),
                        setTimeout(function () {
                            ke({
                                targets: V,
                                cellAlign: 0.5,
                                easing: "linear",
                                duration: 350,
                                update: function () {
                                    V.reposition();
                                },
                            }),
                                m(),
                                c();
                        }, 2e3);
                }, 500);
            })(),
            o();
    }
    function we() {
        ft++, this.removeAttribute("data-flickity-lazyload"), ht || bt + ft !== Dt || (Pe(), (ht = !0));
    }
    function Ae() {
        bt++, ht || bt + ft !== Dt || (Pe(), (ht = !0));
    }
    function Le() {
        this.classList.add("can-play");
    }
    (function (t, i) {
        "object" === ("undefined" == typeof exports ? "undefined" : e(exports)) && "undefined" != typeof module ? i() : "function" == typeof define && define.amd ? define(i) : i();
    })(void 0, function () {
        function t(e) {
            var t = this.constructor;
            return this.then(
                function (i) {
                    return t.resolve(e()).then(function () {
                        return i;
                    });
                },
                function (i) {
                    return t.resolve(e()).then(function () {
                        return t.reject(i);
                    });
                }
            );
        }
        function n(e) {
            return !!(e && "undefined" != typeof e.length);
        }
        function o() {}
        function r(e, t) {
            return function () {
                e.apply(t, arguments);
            };
        }
        function a(e) {
            if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            (this._state = 0), (this._handled = !1), (this._value = void 0), (this._deferreds = []), g(e, this);
        }
        function s(e, t) {
            for (; 3 === e._state; ) e = e._value;
            return 0 === e._state
                ? void e._deferreds.push(t)
                : void ((e._handled = !0),
                  a._immediateFn(function () {
                      var i = 1 === e._state ? t.onFulfilled : t.onRejected;
                      if (null === i) return void (1 === e._state ? l : d)(t.promise, e._value);
                      var n;
                      try {
                          n = i(e._value);
                      } catch (i) {
                          return void d(t.promise, i);
                      }
                      l(t.promise, n);
                  }));
        }
        function l(t, i) {
            try {
                if (i === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (i && ("object" === e(i) || "function" == typeof i)) {
                    var n = i.then;
                    if (i instanceof a) return (t._state = 3), (t._value = i), void c(t);
                    if ("function" == typeof n) return void g(r(n, i), t);
                }
                (t._state = 1), (t._value = i), c(t);
            } catch (i) {
                d(t, i);
            }
        }
        function d(e, t) {
            (e._state = 2), (e._value = t), c(e);
        }
        function c(e) {
            2 === e._state &&
                0 === e._deferreds.length &&
                a._immediateFn(function () {
                    e._handled || a._unhandledRejectionFn(e._value);
                });
            for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
            e._deferreds = null;
        }
        function p(e, t, i) {
            (this.onFulfilled = "function" == typeof e ? e : null), (this.onRejected = "function" == typeof t ? t : null), (this.promise = i);
        }
        function g(e, t) {
            var i = !1;
            try {
                e(
                    function (e) {
                        i || ((i = !0), l(t, e));
                    },
                    function (e) {
                        i || ((i = !0), d(t, e));
                    }
                );
            } catch (e) {
                if (i) return;
                (i = !0), d(t, e);
            }
        }
        var u = setTimeout;
        (a.prototype["catch"] = function (e) {
            return this.then(null, e);
        }),
            (a.prototype.then = function (e, t) {
                var i = new this.constructor(o);
                return s(this, new p(e, t, i)), i;
            }),
            (a.prototype["finally"] = t),
            (a.all = function (t) {
                return new a(function (o, r) {
                    function a(t, i) {
                        try {
                            if (i && ("object" === e(i) || "function" == typeof i)) {
                                var n = i.then;
                                if ("function" == typeof n)
                                    return void n.call(
                                        i,
                                        function (e) {
                                            a(t, e);
                                        },
                                        r
                                    );
                            }
                            (s[t] = i), 0 == --l && o(s);
                        } catch (e) {
                            r(e);
                        }
                    }
                    if (!n(t)) return r(new TypeError("Promise.all accepts an array"));
                    var s = Array.prototype.slice.call(t);
                    if (0 === s.length) return o([]);
                    for (var l = s.length, d = 0; d < s.length; d++) a(d, s[d]);
                });
            }),
            (a.resolve = function (t) {
                return t && "object" === e(t) && t.constructor === a
                    ? t
                    : new a(function (e) {
                          e(t);
                      });
            }),
            (a.reject = function (e) {
                return new a(function (t, i) {
                    i(e);
                });
            }),
            (a.race = function (e) {
                return new a(function (t, o) {
                    if (!n(e)) return o(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, s = e.length; r < s; r++) a.resolve(e[r]).then(t, o);
                });
            }),
            (a._immediateFn =
                ("function" == typeof setImmediate &&
                    function (e) {
                        setImmediate(e);
                    }) ||
                function (e) {
                    u(e, 0);
                }),
            (a._unhandledRejectionFn = function (e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
            });
        var m = (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if ("undefined" != typeof global) return global;
            throw new Error("unable to locate global object");
        })();
        "Promise" in m ? !m.Promise.prototype["finally"] && (m.Promise.prototype["finally"] = t) : (m.Promise = a);
    });
    var We = {
        searchParams: "URLSearchParams" in self,
        iterable: "Symbol" in self && "iterator" in Symbol,
        blob:
            "FileReader" in self &&
            "Blob" in self &&
            (function () {
                try {
                    return new Blob(), !0;
                } catch (t) {
                    return !1;
                }
            })(),
        formData: "FormData" in self,
        arrayBuffer: "ArrayBuffer" in self,
    };
    if (We.arrayBuffer)
        var qe = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
            He =
                ArrayBuffer.isView ||
                function (e) {
                    return e && -1 < qe.indexOf(Object.prototype.toString.call(e));
                };
    (c.prototype.append = function (e, t) {
        (e = s(e)), (t = l(t));
        var i = this.map[e];
        this.map[e] = i ? i + ", " + t : t;
    }),
        (c.prototype["delete"] = function (e) {
            delete this.map[s(e)];
        }),
        (c.prototype.get = function (e) {
            return (e = s(e)), this.has(e) ? this.map[e] : null;
        }),
        (c.prototype.has = function (e) {
            return this.map.hasOwnProperty(s(e));
        }),
        (c.prototype.set = function (e, t) {
            this.map[s(e)] = l(t);
        }),
        (c.prototype.forEach = function (e, t) {
            for (var i in this.map) this.map.hasOwnProperty(i) && e.call(t, this.map[i], i, this);
        }),
        (c.prototype.keys = function () {
            var e = [];
            return (
                this.forEach(function (t, i) {
                    e.push(i);
                }),
                d(e)
            );
        }),
        (c.prototype.values = function () {
            var e = [];
            return (
                this.forEach(function (t) {
                    e.push(t);
                }),
                d(e)
            );
        }),
        (c.prototype.entries = function () {
            var e = [];
            return (
                this.forEach(function (t, i) {
                    e.push([i, t]);
                }),
                d(e)
            );
        }),
        We.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
    var Xe = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
    (b.prototype.clone = function () {
        return new b(this, { body: this._bodyInit });
    }),
        f.call(b.prototype),
        f.call(S.prototype),
        (S.prototype.clone = function () {
            return new S(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new c(this.headers), url: this.url });
        }),
        (S.error = function () {
            var e = new S(null, { status: 0, statusText: "" });
            return (e.type = "error"), e;
        });
    var Ve = [301, 302, 303, 307, 308];
    S.redirect = function (e, t) {
        if (-1 === Ve.indexOf(t)) throw new RangeError("Invalid status code");
        return new S(null, { status: t, headers: { location: e } });
    };
    var Ge = self.DOMException;
    try {
        new Ge();
    } catch (e) {
        (Ge = function (e, t) {
            (this.message = e), (this.name = t);
            var i = Error(e);
            this.stack = i.stack;
        }),
            (Ge.prototype = Object.create(Error.prototype)),
            (Ge.prototype.constructor = Ge);
    }
    (_.polyfill = !0),
        self.fetch || ((self.fetch = _), (self.Headers = c), (self.Request = b), (self.Response = S)),
        (function () {
            function t(e) {
                (this.time = e.time),
                    (this.target = e.target),
                    (this.rootBounds = e.rootBounds),
                    (this.boundingClientRect = e.boundingClientRect),
                    (this.intersectionRect = e.intersectionRect || d()),
                    (this.isIntersecting = !!e.intersectionRect);
                var t = this.boundingClientRect,
                    i = t.width * t.height,
                    n = this.intersectionRect,
                    o = n.width * n.height;
                this.intersectionRatio = i ? +(o / i).toFixed(4) : this.isIntersecting ? 1 : 0;
            }
            function i(e, t) {
                var i = t || {};
                if ("function" != typeof e) throw new Error("callback must be a function");
                if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
                (this._checkForIntersections = o(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT)),
                    (this._callback = e),
                    (this._observationTargets = []),
                    (this._queuedEntries = []),
                    (this._rootMarginValues = this._parseRootMargin(i.rootMargin)),
                    (this.thresholds = this._initThresholds(i.threshold)),
                    (this.root = i.root || null),
                    (this.rootMargin = this._rootMarginValues
                        .map(function (e) {
                            return e.value + e.unit;
                        })
                        .join(" "));
            }
            function n() {
                return window.performance && performance.now && performance.now();
            }
            function o(e, t) {
                var i = null;
                return function () {
                    i ||
                        (i = setTimeout(function () {
                            e(), (i = null);
                        }, t));
                };
            }
            function r(e, t, i, n) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, i, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, i);
            }
            function a(e, t, i, n) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, i, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, i);
            }
            function s(e, t) {
                var i = Ue(e.top, t.top),
                    n = Re(e.bottom, t.bottom),
                    o = Ue(e.left, t.left),
                    r = Re(e.right, t.right),
                    a = r - o,
                    s = n - i;
                return 0 <= a && 0 <= s && { top: i, bottom: n, left: o, right: r, width: a, height: s };
            }
            function l(e) {
                var t;
                try {
                    t = e.getBoundingClientRect();
                } catch (e) {}
                return t ? ((t.width && t.height) || (t = { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: t.right - t.left, height: t.bottom - t.top }), t) : d();
            }
            function d() {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
            function c(e, t) {
                for (var i = t; i; ) {
                    if (i == e) return !0;
                    i = p(i);
                }
                return !1;
            }
            function p(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t;
            }
            if ("object" === ("undefined" == typeof window ? "undefined" : e(window))) {
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype)
                    return void (
                        "isIntersecting" in window.IntersectionObserverEntry.prototype ||
                        Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                            get: function () {
                                return 0 < this.intersectionRatio;
                            },
                        })
                    );
                var g = window.document;
                (i.prototype.THROTTLE_TIMEOUT = 100),
                    (i.prototype.POLL_INTERVAL = null),
                    (i.prototype.USE_MUTATION_OBSERVER = !0),
                    (i.prototype.observe = function (e) {
                        var t = this._observationTargets.some(function (t) {
                            return t.element == e;
                        });
                        if (!t) {
                            if (!(e && 1 == e.nodeType)) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({ element: e, entry: null }), this._monitorIntersections(), this._checkForIntersections();
                        }
                    }),
                    (i.prototype.unobserve = function (e) {
                        (this._observationTargets = this._observationTargets.filter(function (t) {
                            return t.element != e;
                        })),
                            this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance());
                    }),
                    (i.prototype.disconnect = function () {
                        (this._observationTargets = []), this._unmonitorIntersections(), this._unregisterInstance();
                    }),
                    (i.prototype.takeRecords = function () {
                        var e = this._queuedEntries.slice();
                        return (this._queuedEntries = []), e;
                    }),
                    (i.prototype._initThresholds = function (e) {
                        var t = e || [0];
                        return (
                            Array.isArray(t) || (t = [t]),
                            t.sort().filter(function (e, t, i) {
                                if ("number" != typeof e || isNaN(e) || 0 > e || 1 < e) throw new Error("threshold must be a number between 0 and 1 inclusively");
                                return e !== i[t - 1];
                            })
                        );
                    }),
                    (i.prototype._parseRootMargin = function (e) {
                        var t = (e || "0px").split(/\s+/).map(function (e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return { value: parseFloat(t[1]), unit: t[2] };
                        });
                        return (t[1] = t[1] || t[0]), (t[2] = t[2] || t[0]), (t[3] = t[3] || t[1]), t;
                    }),
                    (i.prototype._monitorIntersections = function () {
                        this._monitoringIntersections ||
                            ((this._monitoringIntersections = !0),
                            this.POLL_INTERVAL
                                ? (this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL))
                                : (r(window, "resize", this._checkForIntersections, !0),
                                  r(g, "scroll", this._checkForIntersections, !0),
                                  this.USE_MUTATION_OBSERVER &&
                                      "MutationObserver" in window &&
                                      ((this._domObserver = new MutationObserver(this._checkForIntersections)), this._domObserver.observe(g, { attributes: !0, childList: !0, characterData: !0, subtree: !0 }))));
                    }),
                    (i.prototype._unmonitorIntersections = function () {
                        this._monitoringIntersections &&
                            ((this._monitoringIntersections = !1),
                            clearInterval(this._monitoringInterval),
                            (this._monitoringInterval = null),
                            a(window, "resize", this._checkForIntersections, !0),
                            a(g, "scroll", this._checkForIntersections, !0),
                            this._domObserver && (this._domObserver.disconnect(), (this._domObserver = null)));
                    }),
                    (i.prototype._checkForIntersections = function () {
                        var e = this._rootIsInDom(),
                            i = e ? this._getRootRect() : d();
                        this._observationTargets.forEach(function (o) {
                            var r = o.element,
                                a = l(r),
                                s = this._rootContainsTarget(r),
                                d = o.entry,
                                c = e && s && this._computeTargetAndRootIntersection(r, i),
                                p = (o.entry = new t({ time: n(), target: r, boundingClientRect: a, rootBounds: i, intersectionRect: c }));
                            d ? (e && s ? this._hasCrossedThreshold(d, p) && this._queuedEntries.push(p) : d && d.isIntersecting && this._queuedEntries.push(p)) : this._queuedEntries.push(p);
                        }, this),
                            this._queuedEntries.length && this._callback(this.takeRecords(), this);
                    }),
                    (i.prototype._computeTargetAndRootIntersection = function (e, t) {
                        if ("none" != window.getComputedStyle(e).display) {
                            for (var i = l(e), n = i, o = p(e), r = !1; !r; ) {
                                var a = null,
                                    d = 1 == o.nodeType ? window.getComputedStyle(o) : {};
                                if ("none" == d.display) return;
                                if ((o == this.root || o == g ? ((r = !0), (a = t)) : o != g.body && o != g.documentElement && "visible" != d.overflow && (a = l(o)), a && ((n = s(a, n)), !n))) break;
                                o = p(o);
                            }
                            return n;
                        }
                    }),
                    (i.prototype._getRootRect = function () {
                        var e;
                        if (this.root) e = l(this.root);
                        else {
                            var t = g.documentElement,
                                i = g.body;
                            e = { top: 0, left: 0, right: t.clientWidth || i.clientWidth, width: t.clientWidth || i.clientWidth, bottom: t.clientHeight || i.clientHeight, height: t.clientHeight || i.clientHeight };
                        }
                        return this._expandRectByRootMargin(e);
                    }),
                    (i.prototype._expandRectByRootMargin = function (e) {
                        var t = this._rootMarginValues.map(function (t, n) {
                                return "px" == t.unit ? t.value : (t.value * (n % 2 ? e.width : e.height)) / 100;
                            }),
                            i = { top: e.top - t[0], right: e.right + t[1], bottom: e.bottom + t[2], left: e.left - t[3] };
                        return (i.width = i.right - i.left), (i.height = i.bottom - i.top), i;
                    }),
                    (i.prototype._hasCrossedThreshold = function (e, t) {
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            o = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== o) for (var r, a = 0; a < this.thresholds.length; a++) if (((r = this.thresholds[a]), r == n || r == o || r < n != r < o)) return !0;
                    }),
                    (i.prototype._rootIsInDom = function () {
                        return !this.root || c(g, this.root);
                    }),
                    (i.prototype._rootContainsTarget = function (e) {
                        return c(this.root || g, e);
                    }),
                    (i.prototype._registerInstance = function () {}),
                    (i.prototype._unregisterInstance = function () {}),
                    (window.IntersectionObserver = i),
                    (window.IntersectionObserverEntry = t);
            }
        })(),
        Element.prototype.matches ||
            (Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (e) {
                    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; 0 <= --n && t.item(n) !== this; );
                    return -1 < n;
                }),
        Element.prototype.closest ||
            (!Element.prototype.matches && (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
            (Element.prototype.closest = function (e) {
                var t = this,
                    i = this;
                if (!document.documentElement.contains(t)) return null;
                do {
                    if (i.matches(e)) return i;
                    i = i.parentElement;
                } while (null !== i);
                return null;
            }));
    var Qe,
        Ye = { update: null, begin: null, loopBegin: null, changeBegin: null, change: null, changeComplete: null, loopComplete: null, complete: null, loop: 1, direction: "normal", autoplay: !0, timelineOffset: 0 },
        $e = { duration: 1e3, delay: 0, endDelay: 0, easing: "easeOutElastic(1, .5)", round: 0 },
        Je = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective"],
        Ze = { CSS: {}, springs: {} },
        Ke = {
            arr: function (e) {
                return Array.isArray(e);
            },
            obj: function (e) {
                return k(Object.prototype.toString.call(e), "Object");
            },
            pth: function (e) {
                return Ke.obj(e) && e.hasOwnProperty("totalLength");
            },
            svg: function (e) {
                return e instanceof SVGElement;
            },
            inp: function (e) {
                return e instanceof HTMLInputElement;
            },
            dom: function (e) {
                return e.nodeType || Ke.svg(e);
            },
            str: function (e) {
                return "string" == typeof e;
            },
            fnc: function (e) {
                return "function" == typeof e;
            },
            und: function (e) {
                return "undefined" == typeof e;
            },
            hex: function (e) {
                return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
            },
            rgb: function (e) {
                return /^rgb/.test(e);
            },
            hsl: function (e) {
                return /^hsl/.test(e);
            },
            col: function (e) {
                return Ke.hex(e) || Ke.rgb(e) || Ke.hsl(e);
            },
            key: function (e) {
                return !Ye.hasOwnProperty(e) && !$e.hasOwnProperty(e) && "targets" !== e && "keyframes" !== e;
            },
        },
        et = (function () {
            function e(e, t) {
                return 1 - 3 * t + 3 * e;
            }
            function t(e, t) {
                return 3 * t - 6 * e;
            }
            function i(e) {
                return 3 * e;
            }
            function n(n, o, r) {
                return ((e(o, r) * n + t(o, r)) * n + i(o)) * n;
            }
            function o(n, o, r) {
                return 3 * e(o, r) * n * n + 2 * t(o, r) * n + i(o);
            }
            function r(e, t, o, r, a) {
                var s,
                    l,
                    d = 0;
                do (l = t + (o - t) / 2), (s = n(l, r, a) - e), 0 < s ? (o = l) : (t = l);
                while (1e-7 < Te(s) && 10 > ++d);
                return l;
            }
            function a(e, t, r, a) {
                for (var s, l = 0; 4 > l; ++l) {
                    if (((s = o(t, r, a)), 0 === s)) return t;
                    var d = n(t, r, a) - e;
                    t -= d / s;
                }
                return t;
            }
            function s(e, t, s, d) {
                function c(t) {
                    for (var i = 0, n = 1; n !== 10 && p[n] <= t; ++n) i += l;
                    --n;
                    var d = (t - p[n]) / (p[n + 1] - p[n]),
                        c = i + d * l,
                        g = o(c, e, s);
                    return 0.001 <= g ? a(t, c, e, s) : 0 === g ? c : r(t, i, i + l, e, s);
                }
                if (0 <= e && 1 >= e && 0 <= s && 1 >= s) {
                    var p = new Float32Array(11);
                    if (e !== t || s !== d) for (var g = 0; 11 > g; ++g) p[g] = n(g * l, e, s);
                    return function (i) {
                        return e === t && s === d ? i : 0 === i || 1 === i ? i : n(c(i), t, d);
                    };
                }
            }
            var l = 1 / 10;
            return s;
        })(),
        tt = (function () {
            var e = {
                    linear: function () {
                        return function (e) {
                            return e;
                        };
                    },
                },
                t = {
                    Sine: function () {
                        return function (e) {
                            return 1 - Me((e * Fe) / 2);
                        };
                    },
                    Circ: function () {
                        return function (e) {
                            return 1 - je(1 - e * e);
                        };
                    },
                    Back: function () {
                        return function (e) {
                            return e * e * (3 * e - 2);
                        };
                    },
                    Bounce: function () {
                        return function (e) {
                            for (var t, i = 4; e < ((t = Be(2, --i)) - 1) / 11; );
                            return 1 / Be(4, 3 - i) - 7.5625 * Be((3 * t - 2) / 22 - e, 2);
                        };
                    },
                    Elastic: function (e, t) {
                        void 0 === e && (e = 1), void 0 === t && (t = 0.5);
                        var i = C(e, 1, 10),
                            n = C(t, 0.1, 2);
                        return function (e) {
                            var t = Math.asin;
                            return 0 === e || 1 === e ? e : -i * Be(2, 10 * (e - 1)) * Ne(((e - 1 - (n / (2 * Fe)) * t(1 / i)) * (2 * Fe)) / n);
                        };
                    },
                };
            return (
                ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (e, n) {
                    t[e] = function () {
                        return function (e) {
                            return Be(e, n + 2);
                        };
                    };
                }),
                Object.keys(t).forEach(function (i) {
                    var n = t[i];
                    (e["easeIn" + i] = n),
                        (e["easeOut" + i] = function (e, i) {
                            return function (o) {
                                return 1 - n(e, i)(1 - o);
                            };
                        }),
                        (e["easeInOut" + i] = function (e, i) {
                            return function (o) {
                                return 0.5 > o ? n(e, i)(2 * o) / 2 : 1 - n(e, i)(-2 * o + 2) / 2;
                            };
                        });
                }),
                e
            );
        })(),
        it = {
            css: function (e, t, i) {
                return (e.style[t] = i);
            },
            attribute: function (e, t, i) {
                return e.setAttribute(t, i);
            },
            object: function (e, t, i) {
                return (e[t] = i);
            },
            transform: function (e, t, i, n, o) {
                if ((n.list.set(t, i), t === n.last || o)) {
                    var r = "";
                    n.list.forEach(function (e, t) {
                        r += t + "(" + e + ") ";
                    }),
                        (e.style.transform = r);
                }
            },
        },
        nt = 0,
        ot = [],
        rt = [],
        at = (function () {
            function e() {
                Qe = requestAnimationFrame(t);
            }
            function t(n) {
                var t = ot.length;
                if (t) {
                    for (var o = 0; o < t; ) {
                        var r = ot[o];
                        if (!r.paused) r.tick(n);
                        else {
                            var a = ot.indexOf(r);
                            -1 < a && (ot.splice(a, 1), (t = ot.length));
                        }
                        o++;
                    }
                    e();
                } else Qe = cancelAnimationFrame(Qe);
            }
            return e;
        })();
    "undefined" != typeof document && document.addEventListener("visibilitychange", Ce),
        (ke.version = "3.1.0"),
        (ke.speed = 1),
        (ke.running = ot),
        (ke.remove = Ie),
        (ke.get = Z),
        (ke.set = be),
        (ke.convertPx = G),
        (ke.path = function (e, t) {
            var i = Ke.str(e) ? L(e)[0] : e;
            return function (e) {
                return { property: e, el: i, svg: de(i), totalLength: se(i) * ((t || 100) / 100) };
            };
        }),
        (ke.setDashoffset = function (e) {
            var t = se(e);
            return e.setAttribute("stroke-dasharray", t), t;
        }),
        (ke.stagger = function (e, t) {
            void 0 === t && (t = {});
            var i = t.direction || "normal",
                n = t.easing ? A(t.easing) : null,
                o = t.grid,
                r = t.axis,
                a = t.from || 0,
                s = "first" === a,
                l = "center" === a,
                d = "last" === a,
                c = Ke.arr(e),
                p = c ? parseFloat(e[0]) : parseFloat(e),
                g = c ? parseFloat(e[1]) : 0,
                u = q(c ? e[1] : e) || 0,
                m = t.start || 0 + (c ? p : 0),
                h = [],
                y = 0;
            return function (e, f, v) {
                if ((s && (a = 0), l && (a = (v - 1) / 2), d && (a = v - 1), !h.length)) {
                    for (var t = 0; t < v; t++) {
                        if (!o) h.push(Te(a - t));
                        else {
                            var b = l ? (o[0] - 1) / 2 : a % o[0],
                                x = l ? (o[1] - 1) / 2 : ze(a / o[0]),
                                E = t % o[0],
                                S = ze(t / o[0]),
                                _ = b - E,
                                C = x - S,
                                k = je(_ * _ + C * C);
                            "x" === r && (k = -_), "y" === r && (k = -C), h.push(k);
                        }
                        y = Ue.apply(Math, h);
                    }
                    n &&
                        (h = h.map(function (e) {
                            return n(e / y) * y;
                        })),
                        "reverse" === i &&
                            (h = h.map(function (e) {
                                return r ? (0 > e ? -1 * e : -e) : Te(y - e);
                            }));
                }
                var D = c ? (g - p) / y : p;
                return m + D * (Oe(100 * h[f]) / 100) + u;
            };
        }),
        (ke.timeline = function (e) {
            void 0 === e && (e = {});
            var t = ke(e);
            return (
                (t.duration = 0),
                (t.add = function (n, o) {
                    function r(e) {
                        e.passThrough = !0;
                    }
                    var a = ot.indexOf(t),
                        s = t.children;
                    -1 < a && ot.splice(a, 1);
                    for (var l = 0; l < s.length; l++) r(s[l]);
                    var d = N(n, j($e, e));
                    d.targets = d.targets || e.targets;
                    var c = t.duration;
                    (d.autoplay = !1), (d.direction = t.direction), (d.timelineOffset = Ke.und(o) ? c : K(o, c)), r(t), t.seek(d.timelineOffset);
                    var p = ke(d);
                    r(p), s.push(p);
                    var g = Se(s, e);
                    return (t.delay = g.delay), (t.endDelay = g.endDelay), (t.duration = g.duration), t.seek(0), t.reset(), t.autoplay && t.play(), t;
                }),
                t
            );
        }),
        (ke.easing = A),
        (ke.penner = tt),
        (ke.random = function (e, t) {
            return ze(Math.random() * (t - e + 1)) + e;
        });
    var st = (function () {
            function e() {
                t(this, e),
                    (this.el = document.documentElement),
                    (this.bodyEl = document.body),
                    (this.width = 0),
                    (this.height = 0),
                    (this.x = 0),
                    (this.y = 0),
                    (this.breakPoints = { xxs: 350, xs: 500, s: 800, m: 1100, l: 1500, xl: 2e3, xxl: 2500 }),
                    (this.updateScrollPosition = this.updateScrollPosition.bind(this)),
                    (this.updateDimensions = this.updateDimensions.bind(this)),
                    this.updateScrollPosition(),
                    this.updateDimensions(),
                    window.addEventListener("resize", this.updateDimensions, !1),
                    document.addEventListener("scroll", this.updateScrollPosition, !1);
            }
            return (
                o(e, [
                    {
                        key: "updateScrollPosition",
                        value: function () {
                            (this.x = window.pageXOffset || document.documentElement.scrollLeft || this.bodyEl.scrollLeft || 0), (this.y = window.pageYOffset || document.documentElement.scrollTop || this.bodyEl.scrollTop || 0);
                        },
                    },
                    {
                        key: "updateDimensions",
                        value: function () {
                            this.updateScrollPosition(),
                                (this.width = this.el.clientWidth || this.bodyEl.clientWidth),
                                (this.height = window.innerHeight),
                                (this.scrollHeight = this.bodyEl.scrollHeight),
                                this.el.style.setProperty("--doc-width", this.width + "px"),
                                this.el.style.setProperty("--doc-height", this.height + "px");
                        },
                    },
                ]),
                e
            );
        })(),
        lt = new st();
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
                  return i(t, e);
              })
            : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
            ? (module.exports = i(t, require("jquery")))
            : (t.jQueryBridget = i(t, t.jQuery));
    })(window, function (e, t) {
        function i(r, s, l) {
            function i(e, t, n) {
                var o,
                    s = "$()." + r + '("' + t + '")';
                return (
                    e.each(function (e, i) {
                        var d = l.data(i, r);
                        if (!d) return void a(r + " not initialized. Cannot call methods, i.e. " + s);
                        var c = d[t];
                        if (!c || "_" == t.charAt(0)) return void a(s + " is not a valid method");
                        var p = c.apply(d, n);
                        o = void 0 === o ? p : o;
                    }),
                    void 0 === o ? e : o
                );
            }
            function d(e, t) {
                e.each(function (e, i) {
                    var n = l.data(i, r);
                    n ? (n.option(t), n._init()) : ((n = new s(i, t)), l.data(i, r, n));
                });
            }
            (l = l || t || e.jQuery),
                l &&
                    (!s.prototype.option &&
                        (s.prototype.option = function (e) {
                            l.isPlainObject(e) && (this.options = l.extend(!0, this.options, e));
                        }),
                    (l.fn[r] = function (e) {
                        if ("string" == typeof e) {
                            var t = o.call(arguments, 1);
                            return i(this, e, t);
                        }
                        return d(this, e), this;
                    }),
                    n(l));
        }
        function n(e) {
            !e || (e && e.bridget) || (e.bridget = i);
        }
        var o = Array.prototype.slice,
            r = e.console,
            a =
                "undefined" == typeof r
                    ? function () {}
                    : function (e) {
                          r.error(e);
                      };
        return n(t || e.jQuery), i;
    }),
        (function (t, i) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", i) : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports ? (module.exports = i()) : (t.EvEmitter = i());
        })("undefined" == typeof window ? void 0 : window, function () {
            function e() {}
            var t = e.prototype;
            return (
                (t.on = function (e, t) {
                    if (e && t) {
                        var i = (this._events = this._events || {}),
                            n = (i[e] = i[e] || []);
                        return -1 == n.indexOf(t) && n.push(t), this;
                    }
                }),
                (t.once = function (e, t) {
                    if (e && t) {
                        this.on(e, t);
                        var i = (this._onceEvents = this._onceEvents || {}),
                            n = (i[e] = i[e] || {});
                        return (n[t] = !0), this;
                    }
                }),
                (t.off = function (e, t) {
                    var i = this._events && this._events[e];
                    if (i && i.length) {
                        var n = i.indexOf(t);
                        return -1 != n && i.splice(n, 1), this;
                    }
                }),
                (t.emitEvent = function (e, t) {
                    var n = this._events && this._events[e];
                    if (n && n.length) {
                        (n = n.slice(0)), (t = t || []);
                        for (var o = this._onceEvents && this._onceEvents[e], r = 0; r < n.length; r++) {
                            var a = n[r],
                                s = o && o[a];
                            s && (this.off(e, a), delete o[a]), a.apply(this, t);
                        }
                        return this;
                    }
                }),
                (t.allOff = function () {
                    delete this._events, delete this._onceEvents;
                }),
                e
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd ? define("get-size/get-size", i) : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports ? (module.exports = i()) : (t.getSize = i());
        })(window, function () {
            function t(e) {
                var t = parseFloat(e),
                    i = -1 == e.indexOf("%") && !isNaN(t);
                return i && t;
            }
            function n() {
                for (var e, t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, n = 0; n < c; n++) (e = d[n]), (t[e] = 0);
                return t;
            }
            function o(e) {
                var t = getComputedStyle(e);
                return t || l("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t;
            }
            function r() {
                if (!p) {
                    p = !0;
                    var e = document.createElement("div");
                    (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                    var i = document.body || document.documentElement;
                    i.appendChild(e);
                    var n = o(e);
                    (s = 200 == Oe(t(n.width))), (a.isBoxSizeOuter = s), i.removeChild(e);
                }
            }
            function a(a) {
                if ((r(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == e(a) && a.nodeType)) {
                    var l = o(a);
                    if ("none" == l.display) return n();
                    for (var p = { width: a.offsetWidth, height: a.offsetHeight }, g = (p.isBorderBox = "border-box" == l.boxSizing), u = 0; u < c; u++) {
                        var m = d[u],
                            h = l[m],
                            y = parseFloat(h);
                        p[m] = isNaN(y) ? 0 : y;
                    }
                    var f = p.paddingLeft + p.paddingRight,
                        v = p.paddingTop + p.paddingBottom,
                        b = p.marginLeft + p.marginRight,
                        x = p.marginTop + p.marginBottom,
                        E = p.borderLeftWidth + p.borderRightWidth,
                        S = p.borderTopWidth + p.borderBottomWidth,
                        _ = g && s,
                        C = t(l.width);
                    !1 !== C && (p.width = C + (_ ? 0 : f + E));
                    var k = t(l.height);
                    return !1 !== k && (p.height = k + (_ ? 0 : v + S)), (p.innerWidth = p.width - (f + E)), (p.innerHeight = p.height - (v + S)), (p.outerWidth = p.width + b), (p.outerHeight = p.height + x), p;
                }
            }
            var s,
                l =
                    "undefined" == typeof console
                        ? function () {}
                        : function (e) {
                              console.error(e);
                          },
                d = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                c = d.length,
                p = !1;
            return a;
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("desandro-matches-selector/matches-selector", i)
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i())
                : (t.matchesSelector = i());
        })(window, function () {
            var e = (function () {
                var e = window.Element.prototype;
                if (e.matches) return "matches";
                if (e.matchesSelector) return "matchesSelector";
                for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = o + "MatchesSelector";
                    if (e[r]) return r;
                }
            })();
            return function (t, i) {
                return t[e](i);
            };
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("desandro-matches-selector")))
                : (t.fizzyUIUtils = i(t, t.matchesSelector));
        })(window, function (t, n) {
            var o = {
                    extend: function (e, t) {
                        for (var i in t) e[i] = t[i];
                        return e;
                    },
                    modulo: function (e, t) {
                        return ((e % t) + t) % t;
                    },
                },
                r = Array.prototype.slice;
            (o.makeArray = function (t) {
                if (Array.isArray(t)) return t;
                if (null === t || void 0 === t) return [];
                var i = "object" == e(t) && "number" == typeof t.length;
                return i ? r.call(t) : [t];
            }),
                (o.removeFrom = function (e, t) {
                    var i = e.indexOf(t);
                    -1 != i && e.splice(i, 1);
                }),
                (o.getParent = function (e, t) {
                    for (; e.parentNode && e != document.body; ) if (((e = e.parentNode), n(e, t))) return e;
                }),
                (o.getQueryElement = function (e) {
                    return "string" == typeof e ? document.querySelector(e) : e;
                }),
                (o.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (o.filterFindElements = function (e, t) {
                    e = o.makeArray(e);
                    var r = [];
                    return (
                        e.forEach(function (e) {
                            if (e instanceof HTMLElement) {
                                if (!t) return void r.push(e);
                                n(e, t) && r.push(e);
                                for (var o = e.querySelectorAll(t), a = 0; a < o.length; a++) r.push(o[a]);
                            }
                        }),
                        r
                    );
                }),
                (o.debounceMethod = function (e, t, i) {
                    i = i || 100;
                    var n = e.prototype[t],
                        o = t + "Timeout";
                    e.prototype[t] = function () {
                        var e = this[o];
                        clearTimeout(e);
                        var t = arguments,
                            r = this;
                        this[o] = setTimeout(function () {
                            n.apply(r, t), delete r[o];
                        }, i);
                    };
                }),
                (o.docReady = function (e) {
                    var t = document.readyState;
                    "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
                }),
                (o.toDashed = function (e) {
                    return e
                        .replace(/(.)([A-Z])/g, function (e, t, i) {
                            return t + "-" + i;
                        })
                        .toLowerCase();
                });
            var a = t.console;
            return (
                (o.htmlInit = function (e, i) {
                    o.docReady(function () {
                        var n = o.toDashed(i),
                            r = "data-" + n,
                            s = document.querySelectorAll("[" + r + "]"),
                            l = document.querySelectorAll(".js-" + n),
                            d = o.makeArray(s).concat(o.makeArray(l)),
                            c = t.jQuery;
                        d.forEach(function (t) {
                            var n,
                                o = t.getAttribute(r) || t.getAttribute(r + "-options");
                            try {
                                n = o && JSON.parse(o);
                            } catch (e) {
                                return void (a && a.error("Error parsing " + r + " on " + t.className + ": " + e));
                            }
                            var s = new e(t, n);
                            c && c.data(t, i, s);
                        });
                    });
                }),
                o
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/cell", ["get-size/get-size"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("get-size")))
                : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = i(t, t.getSize)));
        })(window, function (e, t) {
            function i(e, t) {
                (this.element = e), (this.parent = t), this.create();
            }
            var n = i.prototype;
            return (
                (n.create = function () {
                    (this.element.style.position = "absolute"), this.element.setAttribute("aria-hidden", "true"), (this.x = 0), (this.shift = 0);
                }),
                (n.destroy = function () {
                    this.unselect(), (this.element.style.position = "");
                    var e = this.parent.originSide;
                    this.element.style[e] = "";
                }),
                (n.getSize = function () {
                    this.size = t(this.element);
                }),
                (n.setPosition = function (e) {
                    (this.x = e), this.updateTarget(), this.renderPosition(e);
                }),
                (n.updateTarget = n.setDefaultTarget = function () {
                    var e = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                    this.target = this.x + this.size[e] + this.size.width * this.parent.cellAlign;
                }),
                (n.renderPosition = function (e) {
                    var t = this.parent.originSide;
                    this.element.style[t] = this.parent.getPositionValue(e);
                }),
                (n.select = function () {
                    this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden");
                }),
                (n.unselect = function () {
                    this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true");
                }),
                (n.wrapShift = function (e) {
                    (this.shift = e), this.renderPosition(this.x + this.parent.slideableWidth * e);
                }),
                (n.remove = function () {
                    this.element.parentNode.removeChild(this.element);
                }),
                i
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/slide", i)
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i())
                : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = i()));
        })(window, function () {
            function e(e) {
                (this.parent = e), (this.isOriginLeft = "left" == e.originSide), (this.cells = []), (this.outerWidth = 0), (this.height = 0);
            }
            var t = e.prototype;
            return (
                (t.addCell = function (e) {
                    if ((this.cells.push(e), (this.outerWidth += e.size.outerWidth), (this.height = Ue(e.size.outerHeight, this.height)), 1 == this.cells.length)) {
                        this.x = e.x;
                        var t = this.isOriginLeft ? "marginLeft" : "marginRight";
                        this.firstMargin = e.size[t];
                    }
                }),
                (t.updateTarget = function () {
                    var e = this.isOriginLeft ? "marginRight" : "marginLeft",
                        t = this.getLastCell(),
                        i = t ? t.size[e] : 0,
                        n = this.outerWidth - (this.firstMargin + i);
                    this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
                }),
                (t.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                }),
                (t.select = function () {
                    this.cells.forEach(function (e) {
                        e.select();
                    });
                }),
                (t.unselect = function () {
                    this.cells.forEach(function (e) {
                        e.unselect();
                    });
                }),
                (t.getCellElements = function () {
                    return this.cells.map(function (e) {
                        return e.element;
                    });
                }),
                e
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("fizzy-ui-utils")))
                : ((t.Flickity = t.Flickity || {}), (t.Flickity.animatePrototype = i(t, t.fizzyUIUtils)));
        })(window, function (e, t) {
            return {
                startAnimation: function () {
                    this.isAnimating || ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
                },
                animate: function () {
                    this.applyDragForce(), this.applySelectedAttraction();
                    var e = this.x;
                    if ((this.integratePhysics(), this.positionSlider(), this.settle(e), this.isAnimating)) {
                        var t = this;
                        requestAnimationFrame(function () {
                            t.animate();
                        });
                    }
                },
                positionSlider: function () {
                    var e = this.x;
                    this.options.wrapAround && 1 < this.cells.length && ((e = t.modulo(e, this.slideableWidth)), (e -= this.slideableWidth), this.shiftWrapCells(e)), this.setTranslateX(e, this.isAnimating), this.dispatchScrollEvent();
                },
                setTranslateX: function (e, t) {
                    (e += this.cursorPosition), (e = this.options.rightToLeft ? -e : e);
                    var i = this.getPositionValue(e);
                    this.slider.style.transform = t ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")";
                },
                dispatchScrollEvent: function () {
                    var e = this.slides[0];
                    if (e) {
                        var t = -this.x - e.target,
                            i = t / this.slidesWidth;
                        this.dispatchEvent("scroll", null, [i, t]);
                    }
                },
                positionSliderAtSelected: function () {
                    this.cells.length && ((this.x = -this.selectedSlide.target), (this.velocity = 0), this.positionSlider());
                },
                getPositionValue: function (e) {
                    return this.options.percentPosition ? 0.01 * Oe(1e4 * (e / this.size.innerWidth)) + "%" : Oe(e) + "px";
                },
                settle: function (e) {
                    this.isPointerDown || Oe(100 * this.x) != Oe(100 * e) || this.restingFrames++,
                        2 < this.restingFrames && ((this.isAnimating = !1), delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]));
                },
                shiftWrapCells: function (e) {
                    var t = this.cursorPosition + e;
                    this._shiftCells(this.beforeShiftCells, t, -1);
                    var i = this.size.innerWidth - (e + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, i, 1);
                },
                _shiftCells: function (e, t, n) {
                    for (var o = 0; o < e.length; o++) {
                        var r = e[o],
                            a = 0 < t ? n : 0;
                        r.wrapShift(a), (t -= r.size.outerWidth);
                    }
                },
                _unshiftCells: function (e) {
                    if (e && e.length) for (var t = 0; t < e.length; t++) e[t].wrapShift(0);
                },
                integratePhysics: function () {
                    (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
                },
                applyForce: function (e) {
                    this.velocity += e;
                },
                getFrictionFactor: function () {
                    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"];
                },
                getRestingPosition: function () {
                    return this.x + this.velocity / (1 - this.getFrictionFactor());
                },
                applyDragForce: function () {
                    if (this.isDraggable && this.isPointerDown) {
                        var e = this.dragX - this.x,
                            t = e - this.velocity;
                        this.applyForce(t);
                    }
                },
                applySelectedAttraction: function () {
                    var e = this.isDraggable && this.isPointerDown;
                    if (!(e || this.isFreeScrolling || !this.slides.length)) {
                        var t = -1 * this.selectedSlide.target - this.x,
                            i = t * this.options.selectedAttraction;
                        this.applyForce(i);
                    }
                },
            };
        }),
        (function (t, i) {
            if ("function" == typeof define && define.amd)
                define("flickity/js/flickity", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./slide", "./animate"], function (e, n, o, r, a, s) {
                    return i(t, e, n, o, r, a, s);
                });
            else if ("object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports)
                module.exports = i(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./slide"), require("./animate"));
            else {
                var n = t.Flickity;
                t.Flickity = i(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, n.Cell, n.Slide, n.animatePrototype);
            }
        })(window, function (e, t, i, n, o, r, a) {
            function s(e, t) {
                for (e = n.makeArray(e); e.length; ) t.appendChild(e.shift());
            }
            function l(e, t) {
                var i = n.getQueryElement(e);
                if (!i) return void (p && p.error("Bad element for Flickity: " + (i || e)));
                if (((this.element = i), this.element.flickityGUID)) {
                    var o = u[this.element.flickityGUID];
                    return o.option(t), o;
                }
                d && (this.$element = d(this.element)), (this.options = n.extend({}, this.constructor.defaults)), this.option(t), this._create();
            }
            var d = e.jQuery,
                c = e.getComputedStyle,
                p = e.console,
                g = 0,
                u = {};
            (l.defaults = { accessibility: !0, cellAlign: "center", freeScrollFriction: 0.075, friction: 0.28, namespaceJQueryEvents: !0, percentPosition: !0, resize: !0, selectedAttraction: 0.025, setGallerySize: !0 }),
                (l.createMethods = []);
            var m = l.prototype;
            n.extend(m, t.prototype),
                (m._create = function () {
                    var t = (this.guid = ++g);
                    for (var i in ((this.element.flickityGUID = t),
                    (u[t] = this),
                    (this.selectedIndex = 0),
                    (this.restingFrames = 0),
                    (this.x = 0),
                    (this.velocity = 0),
                    (this.originSide = this.options.rightToLeft ? "right" : "left"),
                    (this.viewport = document.createElement("div")),
                    (this.viewport.className = "flickity-viewport"),
                    this._createSlider(),
                    (this.options.resize || this.options.watchCSS) && e.addEventListener("resize", this),
                    this.options.on)) {
                        var n = this.options.on[i];
                        this.on(i, n);
                    }
                    l.createMethods.forEach(function (e) {
                        this[e]();
                    }, this),
                        this.options.watchCSS ? this.watchCSS() : this.activate();
                }),
                (m.option = function (e) {
                    n.extend(this.options, e);
                }),
                (m.activate = function () {
                    if (!this.isActive) {
                        (this.isActive = !0), this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize();
                        var e = this._filterFindCellElements(this.element.children);
                        s(e, this.slider),
                            this.viewport.appendChild(this.slider),
                            this.element.appendChild(this.viewport),
                            this.reloadCells(),
                            this.options.accessibility && ((this.element.tabIndex = 0), this.element.addEventListener("keydown", this)),
                            this.emitEvent("activate"),
                            this.selectInitialIndex(),
                            (this.isInitActivated = !0),
                            this.dispatchEvent("ready");
                    }
                }),
                (m._createSlider = function () {
                    var e = document.createElement("div");
                    (e.className = "flickity-slider"), (e.style[this.originSide] = 0), (this.slider = e);
                }),
                (m._filterFindCellElements = function (e) {
                    return n.filterFindElements(e, this.options.cellSelector);
                }),
                (m.reloadCells = function () {
                    (this.cells = this._makeCells(this.slider.children)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize();
                }),
                (m._makeCells = function (e) {
                    var t = this._filterFindCellElements(e),
                        i = t.map(function (e) {
                            return new o(e, this);
                        }, this);
                    return i;
                }),
                (m.getLastCell = function () {
                    return this.cells[this.cells.length - 1];
                }),
                (m.getLastSlide = function () {
                    return this.slides[this.slides.length - 1];
                }),
                (m.positionCells = function () {
                    this._sizeCells(this.cells), this._positionCells(0);
                }),
                (m._positionCells = function (e) {
                    (e = e || 0), (this.maxCellHeight = e ? this.maxCellHeight || 0 : 0);
                    var t = 0;
                    if (0 < e) {
                        var n = this.cells[e - 1];
                        t = n.x + n.size.outerWidth;
                    }
                    for (var o, r = this.cells.length, a = e; a < r; a++) (o = this.cells[a]), o.setPosition(t), (t += o.size.outerWidth), (this.maxCellHeight = Ue(o.size.outerHeight, this.maxCellHeight));
                    (this.slideableWidth = t), this.updateSlides(), this._containSlides(), (this.slidesWidth = r ? this.getLastSlide().target - this.slides[0].target : 0);
                }),
                (m._sizeCells = function (e) {
                    e.forEach(function (e) {
                        e.getSize();
                    });
                }),
                (m.updateSlides = function () {
                    if (((this.slides = []), !!this.cells.length)) {
                        var e = new r(this);
                        this.slides.push(e);
                        var t = "left" == this.originSide,
                            n = t ? "marginRight" : "marginLeft",
                            o = this._getCanCellFit();
                        this.cells.forEach(function (t, a) {
                            if (!e.cells.length) return void e.addCell(t);
                            var i = e.outerWidth - e.firstMargin + (t.size.outerWidth - t.size[n]);
                            o.call(this, a, i) ? e.addCell(t) : (e.updateTarget(), (e = new r(this)), this.slides.push(e), e.addCell(t));
                        }, this),
                            e.updateTarget(),
                            this.updateSelectedSlide();
                    }
                }),
                (m._getCanCellFit = function () {
                    var e = this.options.groupCells;
                    if (!e)
                        return function () {
                            return !1;
                        };
                    if ("number" == typeof e) {
                        var t = parseInt(e, 10);
                        return function (e) {
                            return 0 != e % t;
                        };
                    }
                    var i = "string" == typeof e && e.match(/^(\d+)%$/),
                        n = i ? parseInt(i[1], 10) / 100 : 1;
                    return function (e, t) {
                        return t <= (this.size.innerWidth + 1) * n;
                    };
                }),
                (m._init = m.reposition = function () {
                    this.positionCells(), this.positionSliderAtSelected();
                }),
                (m.getSize = function () {
                    (this.size = i(this.element)), this.setCellAlign(), (this.cursorPosition = this.size.innerWidth * this.cellAlign);
                });
            var h = { center: { left: 0.5, right: 0.5 }, left: { left: 0, right: 1 }, right: { right: 0, left: 1 } };
            return (
                (m.setCellAlign = function () {
                    var e = h[this.options.cellAlign];
                    this.cellAlign = e ? e[this.originSide] : this.options.cellAlign;
                }),
                (m.setGallerySize = function () {
                    if (this.options.setGallerySize) {
                        var e = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                        this.viewport.style.height = e + "px";
                    }
                }),
                (m._getWrapShiftCells = function () {
                    if (this.options.wrapAround) {
                        this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                        var e = this.cursorPosition,
                            t = this.cells.length - 1;
                        (this.beforeShiftCells = this._getGapCells(e, t, -1)), (e = this.size.innerWidth - this.cursorPosition), (this.afterShiftCells = this._getGapCells(e, 0, 1));
                    }
                }),
                (m._getGapCells = function (e, t, i) {
                    for (var n, o = []; 0 < e && ((n = this.cells[t]), !!n); ) o.push(n), (t += i), (e -= n.size.outerWidth);
                    return o;
                }),
                (m._containSlides = function () {
                    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                        var e = this.options.rightToLeft,
                            t = e ? "marginRight" : "marginLeft",
                            i = e ? "marginLeft" : "marginRight",
                            n = this.slideableWidth - this.getLastCell().size[i],
                            o = n < this.size.innerWidth,
                            r = this.cursorPosition + this.cells[0].size[t],
                            a = n - this.size.innerWidth * (1 - this.cellAlign);
                        this.slides.forEach(function (e) {
                            o ? (e.target = n * this.cellAlign) : ((e.target = Ue(e.target, r)), (e.target = Re(e.target, a)));
                        }, this);
                    }
                }),
                (m.dispatchEvent = function (e, t, i) {
                    var n = t ? [t].concat(i) : i;
                    if ((this.emitEvent(e, n), d && this.$element)) {
                        e += this.options.namespaceJQueryEvents ? ".flickity" : "";
                        var o = e;
                        if (t) {
                            var r = d.Event(t);
                            (r.type = e), (o = r);
                        }
                        this.$element.trigger(o, i);
                    }
                }),
                (m.select = function (e, t, i) {
                    if (this.isActive && ((e = parseInt(e, 10)), this._wrapSelect(e), (this.options.wrapAround || t) && (e = n.modulo(e, this.slides.length)), !!this.slides[e])) {
                        var o = this.selectedIndex;
                        (this.selectedIndex = e),
                            this.updateSelectedSlide(),
                            i ? this.positionSliderAtSelected() : this.startAnimation(),
                            this.options.adaptiveHeight && this.setGallerySize(),
                            this.dispatchEvent("select", null, [e]),
                            e != o && this.dispatchEvent("change", null, [e]),
                            this.dispatchEvent("cellSelect");
                    }
                }),
                (m._wrapSelect = function (e) {
                    var t = this.slides.length,
                        i = this.options.wrapAround && 1 < t;
                    if (!i) return e;
                    var o = n.modulo(e, t),
                        r = Te(o - this.selectedIndex),
                        a = Te(o + t - this.selectedIndex),
                        s = Te(o - t - this.selectedIndex);
                    !this.isDragSelect && a < r ? (e += t) : !this.isDragSelect && s < r && (e -= t), 0 > e ? (this.x -= this.slideableWidth) : e >= t && (this.x += this.slideableWidth);
                }),
                (m.previous = function (e, t) {
                    this.select(this.selectedIndex - 1, e, t);
                }),
                (m.next = function (e, t) {
                    this.select(this.selectedIndex + 1, e, t);
                }),
                (m.updateSelectedSlide = function () {
                    var e = this.slides[this.selectedIndex];
                    e &&
                        (this.unselectSelectedSlide(),
                        (this.selectedSlide = e),
                        e.select(),
                        (this.selectedCells = e.cells),
                        (this.selectedElements = e.getCellElements()),
                        (this.selectedCell = e.cells[0]),
                        (this.selectedElement = this.selectedElements[0]));
                }),
                (m.unselectSelectedSlide = function () {
                    this.selectedSlide && this.selectedSlide.unselect();
                }),
                (m.selectInitialIndex = function () {
                    var e = this.options.initialIndex;
                    if (this.isInitActivated) return void this.select(this.selectedIndex, !1, !0);
                    if (e && "string" == typeof e) {
                        var t = this.queryCell(e);
                        if (t) return void this.selectCell(e, !1, !0);
                    }
                    var i = 0;
                    e && this.slides[e] && (i = e), this.select(i, !1, !0);
                }),
                (m.selectCell = function (e, t, i) {
                    var n = this.queryCell(e);
                    if (n) {
                        var o = this.getCellSlideIndex(n);
                        this.select(o, t, i);
                    }
                }),
                (m.getCellSlideIndex = function (e) {
                    for (var t = 0; t < this.slides.length; t++) {
                        var n = this.slides[t],
                            o = n.cells.indexOf(e);
                        if (-1 != o) return t;
                    }
                }),
                (m.getCell = function (e) {
                    for (var t, n = 0; n < this.cells.length; n++) if (((t = this.cells[n]), t.element == e)) return t;
                }),
                (m.getCells = function (e) {
                    e = n.makeArray(e);
                    var t = [];
                    return (
                        e.forEach(function (e) {
                            var i = this.getCell(e);
                            i && t.push(i);
                        }, this),
                        t
                    );
                }),
                (m.getCellElements = function () {
                    return this.cells.map(function (e) {
                        return e.element;
                    });
                }),
                (m.getParentCell = function (e) {
                    var t = this.getCell(e);
                    return t ? t : ((e = n.getParent(e, ".flickity-slider > *")), this.getCell(e));
                }),
                (m.getAdjacentCellElements = function (e, t) {
                    if (!e) return this.selectedSlide.getCellElements();
                    t = void 0 === t ? this.selectedIndex : t;
                    var o = this.slides.length;
                    if (1 + 2 * e >= o) return this.getCellElements();
                    for (var r = [], a = t - e; a <= t + e; a++) {
                        var s = this.options.wrapAround ? n.modulo(a, o) : a,
                            l = this.slides[s];
                        l && (r = r.concat(l.getCellElements()));
                    }
                    return r;
                }),
                (m.queryCell = function (e) {
                    if ("number" == typeof e) return this.cells[e];
                    if ("string" == typeof e) {
                        if (e.match(/^[#\.]?[\d\/]/)) return;
                        e = this.element.querySelector(e);
                    }
                    return this.getCell(e);
                }),
                (m.uiChange = function () {
                    this.emitEvent("uiChange");
                }),
                (m.childUIPointerDown = function (e) {
                    "touchstart" != e.type && e.preventDefault(), this.focus();
                }),
                (m.onresize = function () {
                    this.watchCSS(), this.resize();
                }),
                n.debounceMethod(l, "onresize", 150),
                (m.resize = function () {
                    if (this.isActive) {
                        this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                        var e = this.selectedElements && this.selectedElements[0];
                        this.selectCell(e, !1, !0);
                    }
                }),
                (m.watchCSS = function () {
                    var e = this.options.watchCSS;
                    if (e) {
                        var t = c(this.element, ":after").content;
                        -1 == t.indexOf("flickity") ? this.deactivate() : this.activate();
                    }
                }),
                (m.onkeydown = function (e) {
                    var t = document.activeElement && document.activeElement != this.element;
                    if (this.options.accessibility && !t) {
                        var i = l.keyboardHandlers[e.keyCode];
                        i && i.call(this);
                    }
                }),
                (l.keyboardHandlers = {
                    37: function () {
                        var e = this.options.rightToLeft ? "next" : "previous";
                        this.uiChange(), this[e]();
                    },
                    39: function () {
                        var e = this.options.rightToLeft ? "previous" : "next";
                        this.uiChange(), this[e]();
                    },
                }),
                (m.focus = function () {
                    var t = e.pageYOffset;
                    this.element.focus({ preventScroll: !0 }), e.pageYOffset != t && e.scrollTo(e.pageXOffset, t);
                }),
                (m.deactivate = function () {
                    this.isActive &&
                        (this.element.classList.remove("flickity-enabled"),
                        this.element.classList.remove("flickity-rtl"),
                        this.unselectSelectedSlide(),
                        this.cells.forEach(function (e) {
                            e.destroy();
                        }),
                        this.element.removeChild(this.viewport),
                        s(this.slider.children, this.element),
                        this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)),
                        (this.isActive = !1),
                        this.emitEvent("deactivate"));
                }),
                (m.destroy = function () {
                    this.deactivate(), e.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), d && this.$element && d.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete u[this.guid];
                }),
                n.extend(m, a),
                (l.data = function (e) {
                    e = n.getQueryElement(e);
                    var t = e && e.flickityGUID;
                    return t && u[t];
                }),
                n.htmlInit(l, "flickity"),
                d && d.bridget && d.bridget("flickity", l),
                (l.setJQuery = function (e) {
                    d = e;
                }),
                (l.Cell = o),
                (l.Slide = r),
                l
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("unipointer/unipointer", ["ev-emitter/ev-emitter"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("ev-emitter")))
                : (t.Unipointer = i(t, t.EvEmitter));
        })(window, function (e, t) {
            function i() {}
            var n = (i.prototype = Object.create(t.prototype));
            (n.bindStartEvent = function (e) {
                this._bindStartEvent(e, !0);
            }),
                (n.unbindStartEvent = function (e) {
                    this._bindStartEvent(e, !1);
                }),
                (n._bindStartEvent = function (t, i) {
                    i = void 0 === i || i;
                    var n = i ? "addEventListener" : "removeEventListener",
                        o = "mousedown";
                    e.PointerEvent ? (o = "pointerdown") : "ontouchstart" in e && (o = "touchstart"), t[n](o, this);
                }),
                (n.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (n.getTouch = function (e) {
                    for (var t, n = 0; n < e.length; n++) if (((t = e[n]), t.identifier == this.pointerIdentifier)) return t;
                }),
                (n.onmousedown = function (e) {
                    var t = e.button;
                    (t && 0 !== t && 1 !== t) || this._pointerDown(e, e);
                }),
                (n.ontouchstart = function (e) {
                    this._pointerDown(e, e.changedTouches[0]);
                }),
                (n.onpointerdown = function (e) {
                    this._pointerDown(e, e);
                }),
                (n._pointerDown = function (e, t) {
                    e.button || this.isPointerDown || ((this.isPointerDown = !0), (this.pointerIdentifier = void 0 === t.pointerId ? t.identifier : t.pointerId), this.pointerDown(e, t));
                }),
                (n.pointerDown = function (e, t) {
                    this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]);
                });
            var o = { mousedown: ["mousemove", "mouseup"], touchstart: ["touchmove", "touchend", "touchcancel"], pointerdown: ["pointermove", "pointerup", "pointercancel"] };
            return (
                (n._bindPostStartEvents = function (t) {
                    if (t) {
                        var i = o[t.type];
                        i.forEach(function (t) {
                            e.addEventListener(t, this);
                        }, this),
                            (this._boundPointerEvents = i);
                    }
                }),
                (n._unbindPostStartEvents = function () {
                    this._boundPointerEvents &&
                        (this._boundPointerEvents.forEach(function (t) {
                            e.removeEventListener(t, this);
                        }, this),
                        delete this._boundPointerEvents);
                }),
                (n.onmousemove = function (e) {
                    this._pointerMove(e, e);
                }),
                (n.onpointermove = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerMove(e, e);
                }),
                (n.ontouchmove = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerMove(e, t);
                }),
                (n._pointerMove = function (e, t) {
                    this.pointerMove(e, t);
                }),
                (n.pointerMove = function (e, t) {
                    this.emitEvent("pointerMove", [e, t]);
                }),
                (n.onmouseup = function (e) {
                    this._pointerUp(e, e);
                }),
                (n.onpointerup = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerUp(e, e);
                }),
                (n.ontouchend = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerUp(e, t);
                }),
                (n._pointerUp = function (e, t) {
                    this._pointerDone(), this.pointerUp(e, t);
                }),
                (n.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]);
                }),
                (n._pointerDone = function () {
                    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone();
                }),
                (n._pointerReset = function () {
                    (this.isPointerDown = !1), delete this.pointerIdentifier;
                }),
                (n.pointerDone = function () {}),
                (n.onpointercancel = function (e) {
                    e.pointerId == this.pointerIdentifier && this._pointerCancel(e, e);
                }),
                (n.ontouchcancel = function (e) {
                    var t = this.getTouch(e.changedTouches);
                    t && this._pointerCancel(e, t);
                }),
                (n._pointerCancel = function (e, t) {
                    this._pointerDone(), this.pointerCancel(e, t);
                }),
                (n.pointerCancel = function (e, t) {
                    this.emitEvent("pointerCancel", [e, t]);
                }),
                (i.getPointerPoint = function (e) {
                    return { x: e.pageX, y: e.pageY };
                }),
                i
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("unidragger/unidragger", ["unipointer/unipointer"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("unipointer")))
                : (t.Unidragger = i(t, t.Unipointer));
        })(window, function (e, t) {
            function i() {}
            var n = (i.prototype = Object.create(t.prototype));
            (n.bindHandles = function () {
                this._bindHandles(!0);
            }),
                (n.unbindHandles = function () {
                    this._bindHandles(!1);
                }),
                (n._bindHandles = function (t) {
                    t = void 0 === t || t;
                    for (var n, o = t ? "addEventListener" : "removeEventListener", r = t ? this._touchActionValue : "", a = 0; a < this.handles.length; a++)
                        (n = this.handles[a]), this._bindStartEvent(n, t), n[o]("click", this), e.PointerEvent && (n.style.touchAction = r);
                }),
                (n._touchActionValue = "none"),
                (n.pointerDown = function (e, t) {
                    var i = this.okayPointerDown(e);
                    i && ((this.pointerDownPointer = t), e.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(e), this.emitEvent("pointerDown", [e, t]));
                });
            var o = { TEXTAREA: !0, INPUT: !0, SELECT: !0, OPTION: !0 },
                r = { radio: !0, checkbox: !0, button: !0, submit: !0, image: !0, file: !0 };
            return (
                (n.okayPointerDown = function (e) {
                    var t = o[e.target.nodeName],
                        i = r[e.target.type],
                        n = !t || i;
                    return n || this._pointerReset(), n;
                }),
                (n.pointerDownBlur = function () {
                    var e = document.activeElement,
                        t = e && e.blur && e != document.body;
                    t && e.blur();
                }),
                (n.pointerMove = function (e, t) {
                    var i = this._dragPointerMove(e, t);
                    this.emitEvent("pointerMove", [e, t, i]), this._dragMove(e, t, i);
                }),
                (n._dragPointerMove = function (e, t) {
                    var i = { x: t.pageX - this.pointerDownPointer.pageX, y: t.pageY - this.pointerDownPointer.pageY };
                    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(e, t), i;
                }),
                (n.hasDragStarted = function (e) {
                    return 3 < Te(e.x) || 3 < Te(e.y);
                }),
                (n.pointerUp = function (e, t) {
                    this.emitEvent("pointerUp", [e, t]), this._dragPointerUp(e, t);
                }),
                (n._dragPointerUp = function (e, t) {
                    this.isDragging ? this._dragEnd(e, t) : this._staticClick(e, t);
                }),
                (n._dragStart = function (e, t) {
                    (this.isDragging = !0), (this.isPreventingClicks = !0), this.dragStart(e, t);
                }),
                (n.dragStart = function (e, t) {
                    this.emitEvent("dragStart", [e, t]);
                }),
                (n._dragMove = function (e, t, i) {
                    this.isDragging && this.dragMove(e, t, i);
                }),
                (n.dragMove = function (e, t, i) {
                    e.preventDefault(), this.emitEvent("dragMove", [e, t, i]);
                }),
                (n._dragEnd = function (e, t) {
                    (this.isDragging = !1),
                        setTimeout(
                            function () {
                                delete this.isPreventingClicks;
                            }.bind(this)
                        ),
                        this.dragEnd(e, t);
                }),
                (n.dragEnd = function (e, t) {
                    this.emitEvent("dragEnd", [e, t]);
                }),
                (n.onclick = function (e) {
                    this.isPreventingClicks && e.preventDefault();
                }),
                (n._staticClick = function (e, t) {
                    (this.isIgnoringMouseUp && "mouseup" == e.type) ||
                        (this.staticClick(e, t),
                        "mouseup" != e.type &&
                            ((this.isIgnoringMouseUp = !0),
                            setTimeout(
                                function () {
                                    delete this.isIgnoringMouseUp;
                                }.bind(this),
                                400
                            )));
                }),
                (n.staticClick = function (e, t) {
                    this.emitEvent("staticClick", [e, t]);
                }),
                (i.getPointerPoint = t.getPointerPoint),
                i
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/drag", ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function (e, n, o) {
                      return i(t, e, n, o);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("./flickity"), require("unidragger"), require("fizzy-ui-utils")))
                : (t.Flickity = i(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
        })(window, function (e, t, i, n) {
            function o() {
                return { x: e.pageXOffset, y: e.pageYOffset };
            }
            n.extend(t.defaults, { draggable: ">1", dragThreshold: 3 }), t.createMethods.push("_createDrag");
            var r = t.prototype;
            n.extend(r, i.prototype), (r._touchActionValue = "pan-y");
            var a = "createTouch" in document,
                s = !1;
            (r._createDrag = function () {
                this.on("activate", this.onActivateDrag),
                    this.on("uiChange", this._uiChangeDrag),
                    this.on("deactivate", this.onDeactivateDrag),
                    this.on("cellChange", this.updateDraggable),
                    a && !s && (e.addEventListener("touchmove", function () {}), (s = !0));
            }),
                (r.onActivateDrag = function () {
                    (this.handles = [this.viewport]), this.bindHandles(), this.updateDraggable();
                }),
                (r.onDeactivateDrag = function () {
                    this.unbindHandles(), this.element.classList.remove("is-draggable");
                }),
                (r.updateDraggable = function () {
                    (this.isDraggable = ">1" == this.options.draggable ? 1 < this.slides.length : this.options.draggable), this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable");
                }),
                (r.bindDrag = function () {
                    (this.options.draggable = !0), this.updateDraggable();
                }),
                (r.unbindDrag = function () {
                    (this.options.draggable = !1), this.updateDraggable();
                }),
                (r._uiChangeDrag = function () {
                    delete this.isFreeScrolling;
                }),
                (r.pointerDown = function (t, i) {
                    if (!this.isDraggable) return void this._pointerDownDefault(t, i);
                    var n = this.okayPointerDown(t);
                    n &&
                        (this._pointerDownPreventDefault(t),
                        this.pointerDownFocus(t),
                        document.activeElement != this.element && this.pointerDownBlur(),
                        (this.dragX = this.x),
                        this.viewport.classList.add("is-pointer-down"),
                        (this.pointerDownScroll = o()),
                        e.addEventListener("scroll", this),
                        this._pointerDownDefault(t, i));
                }),
                (r._pointerDownDefault = function (e, t) {
                    (this.pointerDownPointer = { pageX: t.pageX, pageY: t.pageY }), this._bindPostStartEvents(e), this.dispatchEvent("pointerDown", e, [t]);
                });
            var l = { INPUT: !0, TEXTAREA: !0, SELECT: !0 };
            return (
                (r.pointerDownFocus = function (e) {
                    var t = l[e.target.nodeName];
                    t || this.focus();
                }),
                (r._pointerDownPreventDefault = function (e) {
                    var t = "touchstart" == e.type,
                        i = "touch" == e.pointerType,
                        n = l[e.target.nodeName];
                    t || i || n || e.preventDefault();
                }),
                (r.hasDragStarted = function (e) {
                    return Te(e.x) > this.options.dragThreshold;
                }),
                (r.pointerUp = function (e, t) {
                    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", e, [t]), this._dragPointerUp(e, t);
                }),
                (r.pointerDone = function () {
                    e.removeEventListener("scroll", this), delete this.pointerDownScroll;
                }),
                (r.dragStart = function (t, i) {
                    this.isDraggable && ((this.dragStartPosition = this.x), this.startAnimation(), e.removeEventListener("scroll", this), this.dispatchEvent("dragStart", t, [i]));
                }),
                (r.pointerMove = function (e, t) {
                    var i = this._dragPointerMove(e, t);
                    this.dispatchEvent("pointerMove", e, [t, i]), this._dragMove(e, t, i);
                }),
                (r.dragMove = function (e, t, i) {
                    if (this.isDraggable) {
                        e.preventDefault(), (this.previousDragX = this.dragX);
                        var n = this.options.rightToLeft ? -1 : 1;
                        this.options.wrapAround && (i.x %= this.slideableWidth);
                        var o = this.dragStartPosition + i.x * n;
                        if (!this.options.wrapAround && this.slides.length) {
                            var r = Ue(-this.slides[0].target, this.dragStartPosition);
                            o = o > r ? 0.5 * (o + r) : o;
                            var a = Re(-this.getLastSlide().target, this.dragStartPosition);
                            o = o < a ? 0.5 * (o + a) : o;
                        }
                        (this.dragX = o), (this.dragMoveTime = new Date()), this.dispatchEvent("dragMove", e, [t, i]);
                    }
                }),
                (r.dragEnd = function (e, t) {
                    if (this.isDraggable) {
                        this.options.freeScroll && (this.isFreeScrolling = !0);
                        var i = this.dragEndRestingSelect();
                        if (this.options.freeScroll && !this.options.wrapAround) {
                            var n = this.getRestingPosition();
                            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target;
                        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                        delete this.previousDragX, (this.isDragSelect = this.options.wrapAround), this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", e, [t]);
                    }
                }),
                (r.dragEndRestingSelect = function () {
                    var e = this.getRestingPosition(),
                        t = Te(this.getSlideDistance(-e, this.selectedIndex)),
                        i = this._getClosestResting(e, t, 1),
                        n = this._getClosestResting(e, t, -1),
                        o = i.distance < n.distance ? i.index : n.index;
                    return o;
                }),
                (r._getClosestResting = function (e, t, i) {
                    for (
                        var n = this.selectedIndex,
                            o = 1 / 0,
                            r =
                                this.options.contain && !this.options.wrapAround
                                    ? function (e, t) {
                                          return e <= t;
                                      }
                                    : function (e, t) {
                                          return e < t;
                                      };
                        r(t, o) && ((n += i), (o = t), (t = this.getSlideDistance(-e, n)), null !== t);

                    )
                        t = Te(t);
                    return { distance: o, index: n - i };
                }),
                (r.getSlideDistance = function (e, t) {
                    var i = this.slides.length,
                        o = this.options.wrapAround && 1 < i,
                        r = o ? n.modulo(t, i) : t,
                        a = this.slides[r];
                    if (!a) return null;
                    var s = o ? this.slideableWidth * ze(t / i) : 0;
                    return e - (a.target + s);
                }),
                (r.dragEndBoostSelect = function () {
                    if (void 0 === this.previousDragX || !this.dragMoveTime || 100 < new Date() - this.dragMoveTime) return 0;
                    var e = this.getSlideDistance(-this.dragX, this.selectedIndex),
                        t = this.previousDragX - this.dragX;
                    return 0 < e && 0 < t ? 1 : 0 > e && 0 > t ? -1 : 0;
                }),
                (r.staticClick = function (e, t) {
                    var i = this.getParentCell(e.target),
                        n = i && i.element,
                        o = i && this.cells.indexOf(i);
                    this.dispatchEvent("staticClick", e, [t, n, o]);
                }),
                (r.onscroll = function () {
                    var e = o(),
                        t = this.pointerDownScroll.x - e.x,
                        i = this.pointerDownScroll.y - e.y;
                    (3 < Te(t) || 3 < Te(i)) && this._pointerDone();
                }),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/prev-next-button", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (e, n, o) {
                      return i(t, e, n, o);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")))
                : i(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
        })(window, function (e, t, i, n) {
            function o(e, t) {
                (this.direction = e), (this.parent = t), this._create();
            }
            function r(e) {
                return "string" == typeof e ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
            }
            (o.prototype = Object.create(i.prototype)),
                (o.prototype._create = function () {
                    (this.isEnabled = !0), (this.isPrevious = -1 == this.direction);
                    var e = this.parent.options.rightToLeft ? 1 : -1;
                    this.isLeft = this.direction == e;
                    var t = (this.element = document.createElement("button"));
                    (t.className = "flickity-button flickity-prev-next-button"),
                        (t.className += this.isPrevious ? " previous" : " next"),
                        t.setAttribute("type", "button"),
                        this.disable(),
                        t.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                    var i = this.createSVG();
                    t.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                }),
                (o.prototype.activate = function () {
                    this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element);
                }),
                (o.prototype.deactivate = function () {
                    this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this);
                }),
                (o.prototype.createSVG = function () {
                    var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    e.setAttribute("class", "flickity-button-icon"), e.setAttribute("viewBox", "0 0 100 100");
                    var t = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                        i = r(this.parent.options.arrowShape);
                    return t.setAttribute("d", i), t.setAttribute("class", "arrow"), this.isLeft || t.setAttribute("transform", "translate(100, 100) rotate(180) "), e.appendChild(t), e;
                }),
                (o.prototype.handleEvent = n.handleEvent),
                (o.prototype.onclick = function () {
                    if (this.isEnabled) {
                        this.parent.uiChange();
                        var e = this.isPrevious ? "previous" : "next";
                        this.parent[e]();
                    }
                }),
                (o.prototype.enable = function () {
                    this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
                }),
                (o.prototype.disable = function () {
                    this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
                }),
                (o.prototype.update = function () {
                    var e = this.parent.slides;
                    if (this.parent.options.wrapAround && 1 < e.length) return void this.enable();
                    var t = e.length ? e.length - 1 : 0,
                        i = this.isPrevious ? 0 : t,
                        n = this.parent.selectedIndex == i ? "disable" : "enable";
                    this[n]();
                }),
                (o.prototype.destroy = function () {
                    this.deactivate(), this.allOff();
                }),
                n.extend(t.defaults, { prevNextButtons: !0, arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 } }),
                t.createMethods.push("_createPrevNextButtons");
            var a = t.prototype;
            return (
                (a._createPrevNextButtons = function () {
                    this.options.prevNextButtons && ((this.prevButton = new o(-1, this)), (this.nextButton = new o(1, this)), this.on("activate", this.activatePrevNextButtons));
                }),
                (a.activatePrevNextButtons = function () {
                    this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons);
                }),
                (a.deactivatePrevNextButtons = function () {
                    this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons);
                }),
                (t.PrevNextButton = o),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/page-dots", ["./flickity", "unipointer/unipointer", "fizzy-ui-utils/utils"], function (e, n, o) {
                      return i(t, e, n, o);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("./flickity"), require("unipointer"), require("fizzy-ui-utils")))
                : i(t, t.Flickity, t.Unipointer, t.fizzyUIUtils);
        })(window, function (e, t, i, n) {
            function o(e) {
                (this.parent = e), this._create();
            }
            (o.prototype = Object.create(i.prototype)),
                (o.prototype._create = function () {
                    (this.holder = document.createElement("ol")),
                        (this.holder.className = "flickity-page-dots"),
                        (this.dots = []),
                        (this.handleClick = this.onClick.bind(this)),
                        this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent));
                }),
                (o.prototype.activate = function () {
                    this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder);
                }),
                (o.prototype.deactivate = function () {
                    this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder);
                }),
                (o.prototype.setDots = function () {
                    var e = this.parent.slides.length - this.dots.length;
                    0 < e ? this.addDots(e) : 0 > e && this.removeDots(-e);
                }),
                (o.prototype.addDots = function (e) {
                    for (var t, n = document.createDocumentFragment(), o = [], r = this.dots.length, a = r; a < r + e; a++)
                        (t = document.createElement("li")), (t.className = "dot"), t.setAttribute("aria-label", "Page dot " + (a + 1)), n.appendChild(t), o.push(t);
                    this.holder.appendChild(n), (this.dots = this.dots.concat(o));
                }),
                (o.prototype.removeDots = function (e) {
                    var t = this.dots.splice(this.dots.length - e, e);
                    t.forEach(function (e) {
                        this.holder.removeChild(e);
                    }, this);
                }),
                (o.prototype.updateSelected = function () {
                    this.selectedDot && ((this.selectedDot.className = "dot"), this.selectedDot.removeAttribute("aria-current")),
                        this.dots.length && ((this.selectedDot = this.dots[this.parent.selectedIndex]), (this.selectedDot.className = "dot is-selected"), this.selectedDot.setAttribute("aria-current", "step"));
                }),
                (o.prototype.onTap = o.prototype.onClick = function (e) {
                    var t = e.target;
                    if ("LI" == t.nodeName) {
                        this.parent.uiChange();
                        var i = this.dots.indexOf(t);
                        this.parent.select(i);
                    }
                }),
                (o.prototype.destroy = function () {
                    this.deactivate(), this.allOff();
                }),
                (t.PageDots = o),
                n.extend(t.defaults, { pageDots: !0 }),
                t.createMethods.push("_createPageDots");
            var r = t.prototype;
            return (
                (r._createPageDots = function () {
                    this.options.pageDots &&
                        ((this.pageDots = new o(this)),
                        this.on("activate", this.activatePageDots),
                        this.on("select", this.updateSelectedPageDots),
                        this.on("cellChange", this.updatePageDots),
                        this.on("resize", this.updatePageDots),
                        this.on("deactivate", this.deactivatePageDots));
                }),
                (r.activatePageDots = function () {
                    this.pageDots.activate();
                }),
                (r.updateSelectedPageDots = function () {
                    this.pageDots.updateSelected();
                }),
                (r.updatePageDots = function () {
                    this.pageDots.setDots();
                }),
                (r.deactivatePageDots = function () {
                    this.pageDots.deactivate();
                }),
                (t.PageDots = o),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/player", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"], function (e, t, n) {
                      return i(e, t, n);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(require("ev-emitter"), require("fizzy-ui-utils"), require("./flickity")))
                : i(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
        })(window, function (e, t, i) {
            function n(e) {
                (this.parent = e), (this.state = "stopped"), (this.onVisibilityChange = this.visibilityChange.bind(this)), (this.onVisibilityPlay = this.visibilityPlay.bind(this));
            }
            (n.prototype = Object.create(e.prototype)),
                (n.prototype.play = function () {
                    if ("playing" != this.state) {
                        var e = document.hidden;
                        return e ? void document.addEventListener("visibilitychange", this.onVisibilityPlay) : void ((this.state = "playing"), document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick());
                    }
                }),
                (n.prototype.tick = function () {
                    if ("playing" == this.state) {
                        var e = this.parent.options.autoPlay;
                        e = "number" == typeof e ? e : 3e3;
                        var t = this;
                        this.clear(),
                            (this.timeout = setTimeout(function () {
                                t.parent.next(!0), t.tick();
                            }, e));
                    }
                }),
                (n.prototype.stop = function () {
                    (this.state = "stopped"), this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange);
                }),
                (n.prototype.clear = function () {
                    clearTimeout(this.timeout);
                }),
                (n.prototype.pause = function () {
                    "playing" == this.state && ((this.state = "paused"), this.clear());
                }),
                (n.prototype.unpause = function () {
                    "paused" == this.state && this.play();
                }),
                (n.prototype.visibilityChange = function () {
                    var e = document.hidden;
                    this[e ? "pause" : "unpause"]();
                }),
                (n.prototype.visibilityPlay = function () {
                    this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay);
                }),
                t.extend(i.defaults, { pauseAutoPlayOnHover: !0 }),
                i.createMethods.push("_createPlayer");
            var o = i.prototype;
            return (
                (o._createPlayer = function () {
                    (this.player = new n(this)), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer);
                }),
                (o.activatePlayer = function () {
                    this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this));
                }),
                (o.playPlayer = function () {
                    this.player.play();
                }),
                (o.stopPlayer = function () {
                    this.player.stop();
                }),
                (o.pausePlayer = function () {
                    this.player.pause();
                }),
                (o.unpausePlayer = function () {
                    this.player.unpause();
                }),
                (o.deactivatePlayer = function () {
                    this.player.stop(), this.element.removeEventListener("mouseenter", this);
                }),
                (o.onmouseenter = function () {
                    this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this));
                }),
                (o.onmouseleave = function () {
                    this.player.unpause(), this.element.removeEventListener("mouseleave", this);
                }),
                (i.Player = n),
                i
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function (e, n) {
                      return i(t, e, n);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("./flickity"), require("fizzy-ui-utils")))
                : i(t, t.Flickity, t.fizzyUIUtils);
        })(window, function (e, t, i) {
            function n(e) {
                var t = document.createDocumentFragment();
                return (
                    e.forEach(function (e) {
                        t.appendChild(e.element);
                    }),
                    t
                );
            }
            var o = t.prototype;
            return (
                (o.insert = function (e, t) {
                    var i = this._makeCells(e);
                    if (i && i.length) {
                        var o = this.cells.length;
                        t = void 0 === t ? o : t;
                        var r = n(i),
                            a = t == o;
                        if (a) this.slider.appendChild(r);
                        else {
                            var s = this.cells[t].element;
                            this.slider.insertBefore(r, s);
                        }
                        if (0 === t) this.cells = i.concat(this.cells);
                        else if (a) this.cells = this.cells.concat(i);
                        else {
                            var l = this.cells.splice(t, o - t);
                            this.cells = this.cells.concat(i).concat(l);
                        }
                        this._sizeCells(i), this.cellChange(t, !0);
                    }
                }),
                (o.append = function (e) {
                    this.insert(e, this.cells.length);
                }),
                (o.prepend = function (e) {
                    this.insert(e, 0);
                }),
                (o.remove = function (e) {
                    var t = this.getCells(e);
                    if (t && t.length) {
                        var n = this.cells.length - 1;
                        t.forEach(function (e) {
                            e.remove();
                            var t = this.cells.indexOf(e);
                            (n = Re(t, n)), i.removeFrom(this.cells, e);
                        }, this),
                            this.cellChange(n, !0);
                    }
                }),
                (o.cellSizeChange = function (e) {
                    var t = this.getCell(e);
                    if (t) {
                        t.getSize();
                        var i = this.cells.indexOf(t);
                        this.cellChange(i);
                    }
                }),
                (o.cellChange = function (e, t) {
                    var i = this.selectedElement;
                    this._positionCells(e), this._getWrapShiftCells(), this.setGallerySize();
                    var n = this.getCell(i);
                    n && (this.selectedIndex = this.getCellSlideIndex(n)),
                        (this.selectedIndex = Re(this.slides.length - 1, this.selectedIndex)),
                        this.emitEvent("cellChange", [e]),
                        this.select(this.selectedIndex),
                        t && this.positionSliderAtSelected();
                }),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/lazyload", ["./flickity", "fizzy-ui-utils/utils"], function (e, n) {
                      return i(t, e, n);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("./flickity"), require("fizzy-ui-utils")))
                : i(t, t.Flickity, t.fizzyUIUtils);
        })(window, function (e, t, i) {
            function n(e) {
                if ("IMG" == e.nodeName) {
                    var t = e.getAttribute("data-flickity-lazyload"),
                        n = e.getAttribute("data-flickity-lazyload-src"),
                        o = e.getAttribute("data-flickity-lazyload-srcset");
                    if (t || n || o) return [e];
                }
                var r = e.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                return i.makeArray(r);
            }
            function o(e, t) {
                (this.img = e), (this.flickity = t), this.load();
            }
            t.createMethods.push("_createLazyload");
            var r = t.prototype;
            return (
                (r._createLazyload = function () {
                    this.on("select", this.lazyLoad);
                }),
                (r.lazyLoad = function () {
                    var e = this.options.lazyLoad;
                    if (e) {
                        var t = "number" == typeof e ? e : 0,
                            i = this.getAdjacentCellElements(t),
                            r = [];
                        i.forEach(function (e) {
                            var t = n(e);
                            r = r.concat(t);
                        }),
                            r.forEach(function (e) {
                                new o(e, this);
                            }, this);
                    }
                }),
                (o.prototype.handleEvent = i.handleEvent),
                (o.prototype.load = function () {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                    var e = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                        t = this.img.getAttribute("data-flickity-lazyload-srcset");
                    (this.img.src = e),
                        t && this.img.setAttribute("srcset", t),
                        this.img.removeAttribute("data-flickity-lazyload"),
                        this.img.removeAttribute("data-flickity-lazyload-src"),
                        this.img.removeAttribute("data-flickity-lazyload-srcset");
                }),
                (o.prototype.onload = function (e) {
                    this.complete(e, "flickity-lazyloaded");
                }),
                (o.prototype.onerror = function (e) {
                    this.complete(e, "flickity-lazyerror");
                }),
                (o.prototype.complete = function (e, t) {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                    var i = this.flickity.getParentCell(this.img),
                        n = i && i.element;
                    this.flickity.cellSizeChange(n), this.img.classList.add(t), this.flickity.dispatchEvent("lazyLoad", e, n);
                }),
                (t.LazyLoader = o),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], i)
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) &&
                  module.exports &&
                  (module.exports = i(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")));
        })(window, function (e) {
            return e;
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("flickity-as-nav-for/as-nav-for", ["flickity/js/index", "fizzy-ui-utils/utils"], i)
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(require("flickity"), require("fizzy-ui-utils")))
                : (t.Flickity = i(t.Flickity, t.fizzyUIUtils));
        })(window, function (e, t) {
            function i(e, i, n) {
                return (i - e) * n + e;
            }
            e.createMethods.push("_createAsNavFor");
            var n = e.prototype;
            return (
                (n._createAsNavFor = function () {
                    this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
                    var e = this.options.asNavFor;
                    if (e) {
                        var t = this;
                        setTimeout(function () {
                            t.setNavCompanion(e);
                        });
                    }
                }),
                (n.setNavCompanion = function (i) {
                    i = t.getQueryElement(i);
                    var n = e.data(i);
                    if (n && n != this) {
                        this.navCompanion = n;
                        var o = this;
                        (this.onNavCompanionSelect = function () {
                            o.navCompanionSelect();
                        }),
                            n.on("select", this.onNavCompanionSelect),
                            this.on("staticClick", this.onNavStaticClick),
                            this.navCompanionSelect(!0);
                    }
                }),
                (n.navCompanionSelect = function (e) {
                    var t = this.navCompanion && this.navCompanion.selectedCells;
                    if (t) {
                        var n = t[0],
                            o = this.navCompanion.cells.indexOf(n),
                            r = o + t.length - 1,
                            a = ze(i(o, r, this.navCompanion.cellAlign));
                        if ((this.selectCell(a, !1, e), this.removeNavSelectedElements(), !(a >= this.cells.length))) {
                            var s = this.cells.slice(o, r + 1);
                            (this.navSelectedElements = s.map(function (e) {
                                return e.element;
                            })),
                                this.changeNavSelectedClass("add");
                        }
                    }
                }),
                (n.changeNavSelectedClass = function (e) {
                    this.navSelectedElements.forEach(function (t) {
                        t.classList[e]("is-nav-selected");
                    });
                }),
                (n.activateAsNavFor = function () {
                    this.navCompanionSelect(!0);
                }),
                (n.removeNavSelectedElements = function () {
                    this.navSelectedElements && (this.changeNavSelectedClass("remove"), delete this.navSelectedElements);
                }),
                (n.onNavStaticClick = function (e, t, i, n) {
                    "number" == typeof n && this.navCompanion.selectCell(n);
                }),
                (n.deactivateAsNavFor = function () {
                    this.removeNavSelectedElements();
                }),
                (n.destroyAsNavFor = function () {
                    this.navCompanion && (this.navCompanion.off("select", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion);
                }),
                e
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (e) {
                      return i(t, e);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("ev-emitter")))
                : (t.imagesLoaded = i(t, t.EvEmitter));
        })("undefined" == typeof window ? void 0 : window, function (t, i) {
            function n(e, t) {
                for (var i in t) e[i] = t[i];
                return e;
            }
            function o(t) {
                if (Array.isArray(t)) return t;
                var i = "object" == e(t) && "number" == typeof t.length;
                return i ? c.call(t) : [t];
            }
            function r(e, t, i) {
                if (!(this instanceof r)) return new r(e, t, i);
                var a = e;
                return (
                    "string" == typeof e && (a = document.querySelectorAll(e)),
                    a
                        ? void ((this.elements = o(a)),
                          (this.options = n({}, this.options)),
                          "function" == typeof t ? (i = t) : n(this.options, t),
                          i && this.on("always", i),
                          this.getImages(),
                          l && (this.jqDeferred = new l.Deferred()),
                          setTimeout(this.check.bind(this)))
                        : void d.error("Bad element for imagesLoaded " + (a || e))
                );
            }
            function a(e) {
                this.img = e;
            }
            function s(e, t) {
                (this.url = e), (this.element = t), (this.img = new Image());
            }
            var l = t.jQuery,
                d = t.console,
                c = Array.prototype.slice;
            (r.prototype = Object.create(i.prototype)),
                (r.prototype.options = {}),
                (r.prototype.getImages = function () {
                    (this.images = []), this.elements.forEach(this.addElementImages, this);
                }),
                (r.prototype.addElementImages = function (e) {
                    "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
                    var t = e.nodeType;
                    if (t && p[t]) {
                        for (var n, o = e.querySelectorAll("img"), r = 0; r < o.length; r++) (n = o[r]), this.addImage(n);
                        if ("string" == typeof this.options.background) {
                            var a = e.querySelectorAll(this.options.background);
                            for (r = 0; r < a.length; r++) {
                                var s = a[r];
                                this.addElementBackgroundImages(s);
                            }
                        }
                    }
                });
            var p = { 1: !0, 9: !0, 11: !0 };
            return (
                (r.prototype.addElementBackgroundImages = function (e) {
                    var t = getComputedStyle(e);
                    if (t) for (var i, n = /url\((['"])?(.*?)\1\)/gi, o = n.exec(t.backgroundImage); null !== o; ) (i = o && o[2]), i && this.addBackground(i, e), (o = n.exec(t.backgroundImage));
                }),
                (r.prototype.addImage = function (e) {
                    var t = new a(e);
                    this.images.push(t);
                }),
                (r.prototype.addBackground = function (e, t) {
                    var i = new s(e, t);
                    this.images.push(i);
                }),
                (r.prototype.check = function () {
                    function e(e, i, n) {
                        setTimeout(function () {
                            t.progress(e, i, n);
                        });
                    }
                    var t = this;
                    return (
                        (this.progressedCount = 0),
                        (this.hasAnyBroken = !1),
                        this.images.length
                            ? void this.images.forEach(function (t) {
                                  t.once("progress", e), t.check();
                              })
                            : void this.complete()
                    );
                }),
                (r.prototype.progress = function (e, t, i) {
                    this.progressedCount++,
                        (this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded),
                        this.emitEvent("progress", [this, e, t]),
                        this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e),
                        this.progressedCount == this.images.length && this.complete(),
                        this.options.debug && d && d.log("progress: " + i, e, t);
                }),
                (r.prototype.complete = function () {
                    var e = this.hasAnyBroken ? "fail" : "done";
                    if (((this.isComplete = !0), this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred)) {
                        var t = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[t](this);
                    }
                }),
                (a.prototype = Object.create(i.prototype)),
                (a.prototype.check = function () {
                    var e = this.getIsImageComplete();
                    return e
                        ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
                        : void ((this.proxyImage = new Image()),
                          this.proxyImage.addEventListener("load", this),
                          this.proxyImage.addEventListener("error", this),
                          this.img.addEventListener("load", this),
                          this.img.addEventListener("error", this),
                          (this.proxyImage.src = this.img.src));
                }),
                (a.prototype.getIsImageComplete = function () {
                    return this.img.complete && this.img.naturalWidth;
                }),
                (a.prototype.confirm = function (e, t) {
                    (this.isLoaded = e), this.emitEvent("progress", [this, this.img, t]);
                }),
                (a.prototype.handleEvent = function (e) {
                    var t = "on" + e.type;
                    this[t] && this[t](e);
                }),
                (a.prototype.onload = function () {
                    this.confirm(!0, "onload"), this.unbindEvents();
                }),
                (a.prototype.onerror = function () {
                    this.confirm(!1, "onerror"), this.unbindEvents();
                }),
                (a.prototype.unbindEvents = function () {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (s.prototype = Object.create(a.prototype)),
                (s.prototype.check = function () {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), (this.img.src = this.url);
                    var e = this.getIsImageComplete();
                    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
                }),
                (s.prototype.unbindEvents = function () {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                }),
                (s.prototype.confirm = function (e, t) {
                    (this.isLoaded = e), this.emitEvent("progress", [this, this.element, t]);
                }),
                (r.makeJQueryPlugin = function (e) {
                    (e = e || t.jQuery),
                        e &&
                            ((l = e),
                            (l.fn.imagesLoaded = function (e, t) {
                                var i = new r(this, e, t);
                                return i.jqDeferred.promise(l(this));
                            }));
                }),
                r.makeJQueryPlugin(),
                r
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function (e, n) {
                      return i(t, e, n);
                  })
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(t, require("flickity"), require("imagesloaded")))
                : (t.Flickity = i(t, t.Flickity, t.imagesLoaded));
        })(window, function (e, t, i) {
            t.createMethods.push("_createImagesLoaded");
            var n = t.prototype;
            return (
                (n._createImagesLoaded = function () {
                    this.on("activate", this.imagesLoaded);
                }),
                (n.imagesLoaded = function () {
                    function e(e, i) {
                        var n = t.getParentCell(i.img);
                        t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected();
                    }
                    if (this.options.imagesLoaded) {
                        var t = this;
                        i(this.slider).on("progress", e);
                    }
                }),
                t
            );
        }),
        (function (t, i) {
            "function" == typeof define && define.amd
                ? define(["flickity/js/index", "fizzy-ui-utils/utils"], i)
                : "object" == ("undefined" == typeof module ? "undefined" : e(module)) && module.exports
                ? (module.exports = i(require("flickity"), require("fizzy-ui-utils")))
                : i(t.Flickity, t.fizzyUIUtils);
        })(window, function (e, t) {
            var i = e.Slide,
                n = i.prototype.updateTarget;
            (i.prototype.updateTarget = function () {
                if ((n.apply(this, arguments), !!this.parent.options.fade)) {
                    var e = this.target - this.x,
                        t = this.cells[0].x;
                    this.cells.forEach(function (i) {
                        var n = i.x - t - e;
                        i.renderPosition(n);
                    });
                }
            }),
                (i.prototype.setOpacity = function (e) {
                    this.cells.forEach(function (t) {
                        t.element.style.opacity = e;
                    });
                });
            var o = e.prototype;
            e.createMethods.push("_createFade"),
                (o._createFade = function () {
                    (this.fadeIndex = this.selectedIndex),
                        (this.prevSelectedIndex = this.selectedIndex),
                        this.on("select", this.onSelectFade),
                        this.on("dragEnd", this.onDragEndFade),
                        this.on("settle", this.onSettleFade),
                        this.on("activate", this.onActivateFade),
                        this.on("deactivate", this.onDeactivateFade);
                });
            var r = o.updateSlides;
            (o.updateSlides = function () {
                r.apply(this, arguments),
                    this.options.fade &&
                        this.slides.forEach(function (e, t) {
                            var i = t == this.selectedIndex ? 1 : 0;
                            e.setOpacity(i);
                        }, this);
            }),
                (o.onSelectFade = function () {
                    (this.fadeIndex = Re(this.prevSelectedIndex, this.slides.length - 1)), (this.prevSelectedIndex = this.selectedIndex);
                }),
                (o.onSettleFade = function () {
                    if ((delete this.didDragEnd, !!this.options.fade)) {
                        this.selectedSlide.setOpacity(1);
                        var e = this.slides[this.fadeIndex];
                        e && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0);
                    }
                }),
                (o.onDragEndFade = function () {
                    this.didDragEnd = !0;
                }),
                (o.onActivateFade = function () {
                    this.options.fade && this.element.classList.add("is-fade");
                }),
                (o.onDeactivateFade = function () {
                    this.options.fade &&
                        (this.element.classList.remove("is-fade"),
                        this.slides.forEach(function (e) {
                            e.setOpacity("");
                        }));
                });
            var a = o.positionSlider;
            o.positionSlider = function () {
                return this.options.fade ? void (this.fadeSlides(), this.dispatchScrollEvent()) : void a.apply(this, arguments);
            };
            var s = o.positionSliderAtSelected;
            (o.positionSliderAtSelected = function () {
                this.options.fade && this.setTranslateX(0), s.apply(this, arguments);
            }),
                (o.fadeSlides = function () {
                    if (!(2 > this.slides.length)) {
                        var e = this.getFadeIndexes(),
                            t = this.slides[e.a],
                            i = this.slides[e.b],
                            n = this.wrapDifference(t.target, i.target),
                            o = this.wrapDifference(t.target, -this.x);
                        (o /= n), t.setOpacity(1 - o), i.setOpacity(o);
                        var r = e.a;
                        this.isDragging && (r = 0.5 < o ? e.a : e.b);
                        var a = null != this.fadeHideIndex && this.fadeHideIndex != r && this.fadeHideIndex != e.a && this.fadeHideIndex != e.b;
                        a && this.slides[this.fadeHideIndex].setOpacity(0), (this.fadeHideIndex = r);
                    }
                }),
                (o.getFadeIndexes = function () {
                    return this.isDragging || this.didDragEnd ? (this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes()) : { a: this.fadeIndex, b: this.selectedIndex };
                }),
                (o.getFadeDragWrapIndexes = function () {
                    var e = this.slides.map(function (e, t) {
                            return this.getSlideDistance(-this.x, t);
                        }, this),
                        i = e.map(function (e) {
                            return Te(e);
                        }),
                        n = Re.apply(Math, i),
                        o = i.indexOf(n),
                        r = e[o],
                        a = this.slides.length,
                        s = 0 <= r ? 1 : -1;
                    return { a: o, b: t.modulo(o + s, a) };
                }),
                (o.getFadeDragLimitIndexes = function () {
                    for (var e, t = 0, n = 0; n < this.slides.length - 1 && ((e = this.slides[n]), !(-this.x < e.target)); n++) t = n;
                    return { a: t, b: t + 1 };
                }),
                (o.wrapDifference = function (e, t) {
                    var i = t - e;
                    if (!this.options.wrapAround) return i;
                    var n = i + this.slideableWidth,
                        o = i - this.slideableWidth;
                    return Te(n) < Te(i) && (i = n), Te(o) < Te(i) && (i = o), i;
                });
            var l = o._getWrapShiftCells;
            o._getWrapShiftCells = function () {
                this.options.fade || l.apply(this, arguments);
            };
            var d = o.shiftWrapCells;
            return (
                (o.shiftWrapCells = function () {
                    this.options.fade || d.apply(this, arguments);
                }),
                e
            );
        });
    for (
        var dt,
            ct = lt.width > lt.height,
            pt = ct ? ".main-carousel .video-desktop video" : ".main-carousel .video-mobile video",
            gt = ct ? ".main-carousel .image-desktop .lazy-load" : ".main-carousel .image-mobile .lazy-load",
            ut = document.querySelectorAll(pt),
            mt = document.querySelectorAll(gt),
            ht = !1,
            yt = [],
            ft = 0,
            vt = [],
            bt = 0,
            xt = 0;
        xt < mt.length;
        xt++
    )
        (dt = mt[xt]), yt.push(dt);
    for (var Et, St = 0; St < ut.length; St++) (Et = ut[St]), vt.push(Et);
    for (var _t, Ct = yt.length, kt = vt.length, Dt = Ct + kt, It = 0; It < kt; It++)
        (_t = vt[It]), (_t.src = _t.dataset.src), _t.addEventListener("suspend", Ae), _t.addEventListener("canplay", Ae), _t.addEventListener("play", Le), _t.play();
    for (var Pt, wt = 0; wt < Ct; wt++) (Pt = yt[wt]), Pt.addEventListener("load", we), (Pt.src = Pt.dataset.flickityLazyload);
    document.body.classList.add("is-ready");
})();
