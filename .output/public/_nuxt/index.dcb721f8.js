import {
  _ as e,
  f as r,
  c as o,
  b as d,
  g as s,
  o as n,
} from './entry.4d2d6987.js'
import i from './backLink.f5ce2a9e.js'
import { c as a } from './constants.9b9751f9.js'
import './n-link.5287e4e1.js'
const l = {
    name: 'about',
    components: {
      backLink: () =>
        r(
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
    head() {
      return {
        title: 'about | ' + a.siteName,
        meta: [
          { hid: 'description', name: 'description', content: a.siteName },
        ],
      }
    },
  },
  p = s(
    '<div class="container" data-v-0880ad89><h2 data-v-0880ad89>web framework &amp; libraries</h2><ul style="padding-left:20px;" data-v-0880ad89><li data-v-0880ad89> Vue <a href="https://vuejs.org/" target="_blank" rel="noreferrer" data-v-0880ad89> https://vuejs.org/ </a></li><li data-v-0880ad89> Nuxt.js <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer" data-v-0880ad89> https://nuxtjs.org/ </a></li><li data-v-0880ad89> Bootstrap: <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" data-v-0880ad89> https://getbootstrap.com/ </a></li></ul><hr data-v-0880ad89><h4 data-v-0880ad89>visual materials</h4><ul style="padding-left:20px;" data-v-0880ad89><li data-v-0880ad89> station &amp; line data: <a href="https://www.tokyu.co.jp/" target="_blank" rel="noreferrer" data-v-0880ad89> www.tokyu.co.jp </a></li><li data-v-0880ad89> photos: <a href="https://www.pakutaso.com/20190537148post-21034.html" target="_blank" rel="noreferrer" data-v-0880ad89> PAKUTASO </a> (used in Top page main visual) </li></ul><hr data-v-0880ad89><h4 data-v-0880ad89>source</h4><ul style="padding-left:20px;" data-v-0880ad89><li data-v-0880ad89> GitHub <a href="https://github.com/DJYoko/TokyuLinesInfo" target="_blank" rel="noreferrer" data-v-0880ad89> https://github.com/DJYoko/TokyuLinesInfo </a></li></ul></div>',
    1
  )
function _(c, u, v, h, m, f) {
  const t = i
  return n(), o('div', null, [d(t), p])
}
const w = e(l, [
  ['render', _],
  ['__scopeId', 'data-v-0880ad89'],
])
export { w as default }
