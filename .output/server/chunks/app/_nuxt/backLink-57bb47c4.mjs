import { _ as __nuxt_component_0$1 } from './n-link-563b35af.mjs'
import {
  mergeProps,
  withCtx,
  createVNode,
  createTextVNode,
  useSSRContext,
} from 'vue'
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer'
import { _ as _export_sfc } from '../server.mjs'
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
  name: 'backLink',
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
  const _component_nuxt_link = __nuxt_component_0$1
  _push(
    `<div${ssrRenderAttrs(
      mergeProps({ class: 'back-link-wrap' }, _attrs)
    )} data-v-24898d14><div class="container" data-v-24898d14>`
  )
  _push(
    ssrRenderComponent(
      _component_nuxt_link,
      {
        class: 'back-link',
        to: { path: '/' },
      },
      {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(
              `<i class="fa fa-home" aria-hidden="true" data-v-24898d14${_scopeId}></i> back to home`
            )
          } else {
            return [
              createVNode('i', {
                class: 'fa fa-home',
                'aria-hidden': 'true',
              }),
              createTextVNode(' back to home'),
            ]
          }
        }),
        _: 1,
      },
      _parent
    )
  )
  _push(`</div></div>`)
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/backLink.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-24898d14'],
])

export { __nuxt_component_0 as default }
//# sourceMappingURL=backLink-57bb47c4.mjs.map
