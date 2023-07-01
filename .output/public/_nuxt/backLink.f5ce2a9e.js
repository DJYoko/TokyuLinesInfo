import { _ as o } from './n-link.5287e4e1.js'
import {
  _ as s,
  o as c,
  c as _,
  a as t,
  b as n,
  w as d,
  d as p,
  p as i,
  e as r,
} from './entry.4d2d6987.js'
const l = { name: 'backLink' },
  u = (e) => (i('data-v-24898d14'), (e = e()), r(), e),
  k = { class: 'back-link-wrap' },
  m = { class: 'container' },
  h = u(() => t('i', { class: 'fa fa-home', 'aria-hidden': 'true' }, null, -1))
function f(e, x, b, v, $, w) {
  const a = o
  return (
    c(),
    _('div', k, [
      t('div', m, [
        n(
          a,
          { class: 'back-link', to: { path: '/' } },
          { default: d(() => [h, p(' back to home')]), _: 1 }
        ),
      ]),
    ])
  )
}
const N = s(l, [
  ['render', f],
  ['__scopeId', 'data-v-24898d14'],
])
export { N as default }
