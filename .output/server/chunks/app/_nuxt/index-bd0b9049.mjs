import __nuxt_component_0 from './backLink-57bb47c4.mjs'
import { c as constants } from './constants-22e52d1b.mjs'
import { useSSRContext } from 'vue'
import {
  ssrRenderAttrs,
  ssrRenderComponent,
  ssrRenderStyle,
} from 'vue/server-renderer'
import { _ as _export_sfc } from '../server.mjs'
import './n-link-563b35af.mjs'
import 'ufo'
import 'ofetch'
import 'hookable'
import 'unctx'
import 'vue-router'
import 'h3'
import '@unhead/ssr'
import 'unhead'
import '@unhead/shared'
import 'defu'
import '../../nitro/node-server.mjs'
import 'node-fetch-native/polyfill'
import 'node:http'
import 'node:https'
import 'destr'
import 'unenv/runtime/fetch/index'
import 'scule'
import 'klona'
import 'ohash'
import 'unstorage'
import 'radix3'
import 'node:fs'
import 'node:url'
import 'pathe'
import 'http-graceful-shutdown'

const _sfc_main = {
  name: 'about',
  components: {
    backLink: () => import('./backLink-57bb47c4.mjs'),
  },
  head() {
    return {
      title: 'about | ' + constants.siteName,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: constants.siteName,
        },
      ],
    }
  },
}
function _sfc_ssrRender(
  _ctx,
  _push,
  _parent,
  _attrs,
  $props,
  $setup,
  $data,
  $options
) {
  const _component_back_link = __nuxt_component_0
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-0880ad89>`)
  _push(ssrRenderComponent(_component_back_link, null, null, _parent))
  _push(
    `<div class="container" data-v-0880ad89><h2 data-v-0880ad89>web framework &amp; libraries</h2><ul style="${ssrRenderStyle(
      { 'padding-left': '20px' }
    )}" data-v-0880ad89><li data-v-0880ad89> Vue <a href="https://vuejs.org/" target="_blank" rel="noreferrer" data-v-0880ad89> https://vuejs.org/ </a></li><li data-v-0880ad89> Nuxt.js <a href="https://nuxtjs.org/" target="_blank" rel="noreferrer" data-v-0880ad89> https://nuxtjs.org/ </a></li><li data-v-0880ad89> Bootstrap: <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" data-v-0880ad89> https://getbootstrap.com/ </a></li></ul><hr data-v-0880ad89><h4 data-v-0880ad89>visual materials</h4><ul style="${ssrRenderStyle(
      { 'padding-left': '20px' }
    )}" data-v-0880ad89><li data-v-0880ad89> station &amp; line data: <a href="https://www.tokyu.co.jp/" target="_blank" rel="noreferrer" data-v-0880ad89> www.tokyu.co.jp </a></li><li data-v-0880ad89> photos: <a href="https://www.pakutaso.com/20190537148post-21034.html" target="_blank" rel="noreferrer" data-v-0880ad89> PAKUTASO </a> (used in Top page main visual) </li></ul><hr data-v-0880ad89><h4 data-v-0880ad89>source</h4><ul style="${ssrRenderStyle(
      { 'padding-left': '20px' }
    )}" data-v-0880ad89><li data-v-0880ad89> GitHub <a href="https://github.com/DJYoko/TokyuLinesInfo" target="_blank" rel="noreferrer" data-v-0880ad89> https://github.com/DJYoko/TokyuLinesInfo </a></li></ul></div></div>`
  )
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'pages/about/index.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-0880ad89'],
])

export { index as default }
//# sourceMappingURL=index-bd0b9049.mjs.map
