;(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    184: function (t, e, n) {
      var content = n(219)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(85).default)('d2349e0c', content, !0, { sourceMap: !1 })
    },
    215: function (t, e, n) {
      'use strict'
      var r = n(5),
        o = n(23),
        l = n(24),
        c = n(121),
        f = n(66),
        d = n(9),
        h = n(47).f,
        v = n(48).f,
        x = n(11).f,
        N = n(216).trim,
        I = 'Number',
        m = r.Number,
        _ = m,
        y = m.prototype,
        E = l(n(86)(y)) == I,
        S = 'trim' in String.prototype,
        A = function (t) {
          var e = f(t, !1)
          if ('string' == typeof e && e.length > 2) {
            var n,
              r,
              o,
              l = (e = S ? e.trim() : N(e, 3)).charCodeAt(0)
            if (43 === l || 45 === l) {
              if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
            } else if (48 === l) {
              switch (e.charCodeAt(1)) {
                case 66:
                case 98:
                  ;(r = 2), (o = 49)
                  break
                case 79:
                case 111:
                  ;(r = 8), (o = 55)
                  break
                default:
                  return +e
              }
              for (var code, c = e.slice(2), i = 0, d = c.length; i < d; i++)
                if ((code = c.charCodeAt(i)) < 48 || code > o) return NaN
              return parseInt(c, r)
            }
          }
          return +e
        }
      if (!m(' 0o1') || !m('0b1') || m('+0x1')) {
        m = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this
          return n instanceof m &&
            (E
              ? d(function () {
                  y.valueOf.call(n)
                })
              : l(n) != I)
            ? c(new _(A(e)), n, m)
            : A(e)
        }
        for (
          var C,
            w = n(8)
              ? h(_)
              : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(
                  ','
                ),
            k = 0;
          w.length > k;
          k++
        )
          o(_, (C = w[k])) && !o(m, C) && x(m, C, v(_, C))
        ;(m.prototype = y), (y.constructor = m), n(13)(r, I, m)
      }
    },
    216: function (t, e, n) {
      var r = n(4),
        o = n(31),
        l = n(9),
        c = n(217),
        f = '[' + c + ']',
        d = RegExp('^' + f + f + '*'),
        h = RegExp(f + f + '*$'),
        v = function (t, e, n) {
          var o = {},
            f = l(function () {
              return !!c[t]() || '​' != '​'[t]()
            }),
            d = (o[t] = f ? e(x) : c[t])
          n && (o[n] = d), r(r.P + r.F * f, 'String', o)
        },
        x = (v.trim = function (t, e) {
          return (
            (t = String(o(t))),
            1 & e && (t = t.replace(d, '')),
            2 & e && (t = t.replace(h, '')),
            t
          )
        })
      t.exports = v
    },
    217: function (t, e) {
      t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff'
    },
    218: function (t, e, n) {
      'use strict'
      n(184)
    },
    219: function (t, e, n) {
      var r = n(84)(!1)
      r.push([
        t.i,
        '.line-station-unit[data-v-45ec449a]{display:block;color:#222;text-align:center;position:relative;background-color:#eee;margin-bottom:2px}.line-station-unit[data-v-45ec449a],.line-station-unit[data-v-45ec449a]:hover{text-decoration:none}@media screen and (min-width:576px){.line-station-unit[data-v-45ec449a]{margin-bottom:30px}}.line-label[data-v-45ec449a]{position:absolute;top:15px;left:15px;width:45px;height:30px;line-height:30px}.detail-name[data-v-45ec449a]{height:60px;line-height:60px;padding:0 0 0 60px;border-radius:0 0 8px 8px;transition:all .2s}',
        '',
      ]),
        (t.exports = r)
    },
    229: function (t, e, n) {
      'use strict'
      n.r(e)
      n(215)
      var r = {
          name: 'lineStationUnit',
          props: {
            stationId: { type: Number, require: !0 },
            stationName: { type: String, require: !0 },
            label: { type: String, require: !0 },
            lineId: { type: String, require: !0 },
            line: { type: Object, require: !0 },
          },
          computed: {
            styles: function () {
              return {
                backgroundColor: this.line.backgroundColor,
                color: this.line.textColor,
              }
            },
            displayLabel: function () {
              return this.label.toUpperCase()
            },
          },
        },
        o = (n(218), n(29)),
        component = Object(o.a)(
          r,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'n-link',
              {
                staticClass: 'line-station-unit',
                attrs: { to: '/station/' + t.stationId + '/' },
              },
              [
                n('div', { staticClass: 'line-label', style: t.styles }, [
                  t._v('\n    ' + t._s(t.displayLabel) + '\n  '),
                ]),
                t._v(' '),
                n('div', { staticClass: 'detail-name' }, [
                  t._v(t._s(t.stationName)),
                ]),
              ]
            )
          },
          [],
          !1,
          null,
          '45ec449a',
          null
        )
      e.default = component.exports
    },
  },
])
