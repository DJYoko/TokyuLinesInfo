import { _ as __nuxt_component_0 } from './n-link-563b35af.mjs'
import {
  mergeProps,
  withCtx,
  createVNode,
  toDisplayString,
  useSSRContext,
} from 'vue'
import {
  ssrRenderComponent,
  ssrRenderStyle,
  ssrInterpolate,
} from 'vue/server-renderer'
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
      return {
        border: `1px solid ${this.$props.backgroundColor}`,
      }
    },
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
  const _component_nuxt_link = __nuxt_component_0
  _push(
    ssrRenderComponent(
      _component_nuxt_link,
      mergeProps(
        {
          to: `/line/${$props.lineId}/`,
          class: 'link-to-line line-unit',
          style: $options.borderStyle,
        },
        _attrs
      ),
      {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(
              `<div class="color-label" style="${ssrRenderStyle(
                $options.styles
              )}" data-v-c556af78${_scopeId}>${ssrInterpolate(
                $options.displayLabel
              )}</div><div class="detail-name" data-v-c556af78${_scopeId}>${ssrInterpolate(
                $props.lineName
              )}</div>`
            )
          } else {
            return [
              createVNode(
                'div',
                {
                  class: 'color-label',
                  style: $options.styles,
                },
                toDisplayString($options.displayLabel),
                5
              ),
              createVNode(
                'div',
                { class: 'detail-name' },
                toDisplayString($props.lineName),
                1
              ),
            ]
          }
        }),
        _: 1,
      },
      _parent
    )
  )
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/lineUnit.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-c556af78'],
])

export { __nuxt_component_1 as default }
//# sourceMappingURL=lineUnit-cdfa27da.mjs.map
