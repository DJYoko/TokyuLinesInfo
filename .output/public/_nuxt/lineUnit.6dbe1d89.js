import { _ as a } from './n-link.5287e4e1.js'
import {
  _ as s,
  o as i,
  i as _,
  w as c,
  a as o,
  t as n,
  n as l,
} from './entry.4d2d6987.js'
const d = {
    name: 'lineUnit',
    props: {
      lineName: { type: String, default: '' },
      lineId: { type: String, default: '' },
      backgroundColor: { type: String, default: '' },
      textColor: { type: String, default: '' },
    },
    computed: {
      styles() {
        return {
          color: this.$props.textColor,
          backgroundColor: this.$props.backgroundColor,
        }
      },
      displayLabel() {
        return this.$props.lineId.toUpperCase()
      },
      borderStyle() {
        return { border: `1px solid ${this.$props.backgroundColor}` }
      },
    },
  },
  p = { class: 'detail-name' }
function u(y, f, t, m, x, e) {
  const r = a
  return (
    i(),
    _(
      r,
      {
        to: `/line/${t.lineId}/`,
        class: 'link-to-line line-unit',
        style: l(e.borderStyle),
      },
      {
        default: c(() => [
          o(
            'div',
            { class: 'color-label', style: l(e.styles) },
            n(e.displayLabel),
            5
          ),
          o('div', p, n(t.lineName), 1),
        ]),
        _: 1,
      },
      8,
      ['to', 'style']
    )
  )
}
const k = s(d, [
  ['render', u],
  ['__scopeId', 'data-v-c556af78'],
])
export { k as default }
