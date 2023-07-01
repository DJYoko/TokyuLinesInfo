import {
  _ as p,
  o as s,
  i as v,
  w as x,
  a as e,
  t as l,
  n as h,
  f as u,
  c as d,
  b as m,
  F as S,
  r as k,
  h as b,
} from './entry.4d2d6987.js'
import $ from './backLink.f5ce2a9e.js'
import { _ as C } from './n-link.5287e4e1.js'
import { a as c } from './index.ca03c6e9.js'
const L = {
    name: 'lineStationUnit',
    props: {
      stationId: { type: Number, require: !0 },
      stationName: { type: String, require: !0 },
      label: { type: String, require: !0 },
      lineId: { type: String, require: !0 },
      line: { type: Object, require: !0 },
    },
    computed: {
      styles() {
        return {
          backgroundColor: this.line.backgroundColor,
          color: this.line.textColor,
        }
      },
      displayLabel() {
        return this.label.toUpperCase()
      },
    },
  },
  N = { class: 'detail-name' }
function j(t, n, i, f, g, o) {
  const r = C
  return (
    s(),
    v(
      r,
      { to: `/station/${i.stationId}/`, class: 'line-station-unit' },
      {
        default: x(() => [
          e(
            'div',
            { class: 'line-label', style: h(o.styles) },
            l(o.displayLabel),
            5
          ),
          e('div', N, l(i.stationName), 1),
        ]),
        _: 1,
      },
      8,
      ['to']
    )
  )
}
const y = p(L, [
    ['render', j],
    ['__scopeId', 'data-v-83fc96b7'],
  ]),
  B = Object.freeze(
    Object.defineProperty({ __proto__: null, default: y }, Symbol.toStringTag, {
      value: 'Module',
    })
  )
const { $rootPath: _ } = b(),
  { $getObjectById: O } = b(),
  P = {
    name: 'LineIndex',
    components: {
      lineStationUnit: () =>
        u(() => Promise.resolve().then(() => B), void 0, import.meta.url),
      backLink: () =>
        u(
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
      stations: [],
      lineStations: [],
      line: { backgroundColor: '', id: '', name: '', textColor: '' },
    }),
    mounted() {
      c.get(`${_(location.href)}lineStations.json`).then((t) => {
        this.lineStations = t.data.filter((n) => n.lineId === this.lineId)
      }),
        c.get(`${_(location.href)}stations.json`).then((t) => {
          this.stations = t.data
        }),
        c.get(`${_(location.href)}lines.json`).then((t) => {
          this.line = O(t.data, this.lineId)
        })
    },
    methods: {},
    computed: {
      lineId() {
        return this.$route.params.lineId
      },
      displayLabel() {
        return this.line.id.toUpperCase()
      },
      symbolStyle() {
        return {
          backgroundColor: this.line.backgroundColor,
          color: this.line.textColor,
        }
      },
      getStationNameById() {
        return (t) => {
          const n = this.stations.filter((i) => i.id === t)
          return n.length > 0 ? n[0].name : 'station not found'
        }
      },
    },
  },
  U = { class: 'container' },
  q = { class: 'line-title-block' },
  E = { class: 'row' }
function V(t, n, i, f, g, o) {
  const r = $,
    I = y
  return (
    s(),
    d('div', null, [
      m(r),
      e('div', U, [
        e('div', q, [
          e(
            'div',
            { class: 'line-symbol', style: h(o.symbolStyle) },
            l(o.displayLabel),
            5
          ),
          e('h1', null, l(t.line.name), 1),
        ]),
        e('div', E, [
          (s(!0),
          d(
            S,
            null,
            k(
              t.lineStations,
              (a) => (
                s(),
                d(
                  'div',
                  {
                    class: 'col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12',
                    key: a.id,
                  },
                  [
                    m(
                      I,
                      {
                        'station-id': a.stationId,
                        'station-name': o.getStationNameById(a.stationId),
                        label: a.label,
                        lineId: a.lineId,
                        line: t.line,
                      },
                      null,
                      8,
                      ['station-id', 'station-name', 'label', 'lineId', 'line']
                    ),
                  ]
                )
              )
            ),
            128
          )),
        ]),
      ]),
    ])
  )
}
const z = p(P, [
  ['render', V],
  ['__scopeId', 'data-v-a55c4a7d'],
])
export { z as default }
