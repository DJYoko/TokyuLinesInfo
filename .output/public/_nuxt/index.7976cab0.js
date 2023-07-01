import {
  _ as l,
  f as _,
  c as n,
  a as t,
  n as u,
  F as m,
  r as p,
  b as i,
  w as h,
  h as g,
  o as a,
  d as f,
  p as b,
  e as x,
} from './entry.4d2d6987.js'
import v from './lineUnit.6dbe1d89.js'
import { _ as k } from './n-link.5287e4e1.js'
import { a as I } from './index.ca03c6e9.js'
import { c as r } from './constants.9b9751f9.js'
const w =
  '' + new URL('pp_tamagawahukei_retouched.4b01210b.jpg', import.meta.url).href
const { $rootPath: C } = g(),
  $ = {
    name: 'index',
    components: {
      lineUnit: () =>
        _(
          () => import('./lineUnit.6dbe1d89.js'),
          [
            './lineUnit.6dbe1d89.js',
            './n-link.5287e4e1.js',
            './entry.4d2d6987.js',
            './lineUnit.76b263f0.css',
          ],
          import.meta.url
        ),
    },
    data: () => ({ backgroundImageUrl: w, isLoading: !0, lines: [] }),
    mounted() {
      const e = this
      I.get(`${C(location.href)}lines.json`).then((s) => {
        e.lines = s.data
      })
    },
    head() {
      return {
        title: r.siteName,
        meta: [
          { hid: 'description', name: 'description', content: r.siteName },
        ],
      }
    },
  },
  y = (e) => (b('data-v-d75184bd'), (e = e()), x(), e),
  N = y(() =>
    t(
      'div',
      { class: 'container' },
      [t('h1', { class: 'text-left' }, 'Tokyu Lines info')],
      -1
    )
  ),
  L = { class: 'line-list' },
  S = { class: 'container' },
  U = { class: 'row' },
  V = { class: 'container' }
function B(e, s, E, P, T, j) {
  const c = v,
    d = k
  return (
    a(),
    n('div', null, [
      N,
      t(
        'div',
        {
          id: 'mainvisual',
          style: u({ backgroundImage: `url(${e.backgroundImageUrl})` }),
        },
        null,
        4
      ),
      t('div', L, [
        t('div', S, [
          t('div', U, [
            (a(!0),
            n(
              m,
              null,
              p(
                e.lines,
                (o) => (
                  a(),
                  n(
                    'div',
                    {
                      class: 'col-6 col-sm-3 col-lg-2 line-list-item-wrapper',
                      key: o.initial,
                    },
                    [
                      i(
                        c,
                        {
                          'line-id': o.id,
                          'line-name': o.name,
                          backgroundColor: o.backgroundColor,
                          textColor: o.textColor,
                        },
                        null,
                        8,
                        ['line-id', 'line-name', 'backgroundColor', 'textColor']
                      ),
                    ]
                  )
                )
              ),
              128
            )),
          ]),
        ]),
      ]),
      t('div', V, [
        i(
          d,
          { class: 'about-link', to: { path: '/about/' } },
          { default: h(() => [f('about')]), _: 1 }
        ),
      ]),
    ])
  )
}
const O = l($, [
  ['render', B],
  ['__scopeId', 'data-v-d75184bd'],
])
export { O as default }
