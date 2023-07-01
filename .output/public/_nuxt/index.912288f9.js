import {
  _ as m,
  f as i,
  c as s,
  b as r,
  a as o,
  t as u,
  F as h,
  r as f,
  h as I,
  o as a,
  p as g,
  e as v,
} from './entry.4d2d6987.js'
import x from './backLink.f5ce2a9e.js'
import b from './lineUnit.6dbe1d89.js'
import { a as l } from './index.ca03c6e9.js'
import './n-link.5287e4e1.js'
const { $getObjectById: k, $rootPath: d } = I(),
  $ = {
    name: 'StationId',
    components: {
      lineUnit: () =>
        i(
          () => import('./lineUnit.6dbe1d89.js'),
          [
            './lineUnit.6dbe1d89.js',
            './n-link.5287e4e1.js',
            './entry.4d2d6987.js',
            './lineUnit.76b263f0.css',
          ],
          import.meta.url
        ),
      backLink: () =>
        i(
          () => import('./backLink.f5ce2a9e.js'),
          [
            './backLink.f5ce2a9e.js',
            './n-link.5287e4e1.js',
            './entry.4d2d6987.js',
            './backLink.548808a9.css',
          ],
          import.meta.url
        ),
    },
    data: () => ({
      transfer: [],
      lat: 0,
      lineIds: [],
      lon: 0,
      name: '',
      lines: [],
    }),
    mounted() {
      this.stationId && this.getData()
    },
    methods: {
      getData() {
        l.get(`${d(location.href)}stations.json`)
          .then((t) => {
            const e = k(t.data, this.stationId)
            ;(this.lat = e.lat),
              (this.lon = e.lon),
              (this.name = e.name),
              (this.lineIds = e.lineIds)
          })
          .then(() => {
            l.get(`${d(location.href)}lines.json`).then((t) => {
              this.lines = t.data.filter(
                (e) => this.lineIds.indexOf(e.id) !== -1
              )
            })
          })
      },
    },
    computed: {
      stationId() {
        return isFinite(this.$route.params.stationId)
          ? parseInt(this.$route.params.stationId)
          : null
      },
    },
  },
  _ = (t) => (g('data-v-25db5d95'), (t = t()), v(), t),
  C = { class: 'container' },
  y = _(() => o('hr', null, null, -1)),
  D = { class: 'transfer' },
  E = _(() => o('h3', null, '乗り入れ路線', -1)),
  S = { class: 'row' }
function B(t, e, L, O, P, V) {
  const c = x,
    p = b
  return (
    a(),
    s('div', null, [
      r(c),
      o('div', C, [
        o('h2', null, u(t.name), 1),
        y,
        o('div', D, [
          E,
          o('div', S, [
            (a(!0),
            s(
              h,
              null,
              f(
                t.lines,
                (n) => (
                  a(),
                  s(
                    'div',
                    {
                      class: 'col-6 col-sm-3 col-lg-2 line-list-item-wrapper',
                      key: n.initial,
                    },
                    [
                      r(
                        p,
                        {
                          'line-id': n.id,
                          'line-name': n.name,
                          backgroundColor: n.backgroundColor,
                          textColor: n.textColor,
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
    ])
  )
}
const R = m($, [
  ['render', B],
  ['__scopeId', 'data-v-25db5d95'],
])
export { R as default }
