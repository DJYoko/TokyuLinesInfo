;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    183: function (t, n, c) {
      var content = c(214)
      content.__esModule && (content = content.default),
        'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, c(85).default)('032e2ebc', content, !0, { sourceMap: !1 })
    },
    213: function (t, n, c) {
      'use strict'
      c(183)
    },
    214: function (t, n, c) {
      var e = c(84)(!1)
      e.push([
        t.i,
        '.back-link-wrap[data-v-3e12c3c7]{background:#f1f1f1;padding:7.5px;margin-bottom:15px}',
        '',
      ]),
        (t.exports = e)
    },
    228: function (t, n, c) {
      'use strict'
      c.r(n)
      var e = { name: 'backLink' },
        o = (c(213), c(29)),
        component = Object(o.a)(
          e,
          function () {
            var t = this,
              n = t.$createElement,
              c = t._self._c || n
            return c('div', { staticClass: 'back-link-wrap' }, [
              c(
                'div',
                { staticClass: 'container' },
                [
                  c(
                    'n-link',
                    { staticClass: 'back-link', attrs: { to: { path: '/' } } },
                    [
                      c('i', {
                        staticClass: 'fa fa-home',
                        attrs: { 'aria-hidden': 'true' },
                      }),
                      t._v('\n      back to home'),
                    ]
                  ),
                ],
                1
              ),
            ])
          },
          [],
          !1,
          null,
          '3e12c3c7',
          null
        )
      n.default = component.exports
    },
  },
])
