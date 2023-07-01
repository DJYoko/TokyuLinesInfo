import { b as buildAssetsURL } from '../../handlers/renderer.mjs'
import __nuxt_component_1 from './lineUnit-cdfa27da.mjs'
import { _ as __nuxt_component_0 } from './n-link-563b35af.mjs'
import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs'
import { withCtx, createTextVNode, useSSRContext } from 'vue'
import axios from 'axios'
import { c as constants } from './constants-22e52d1b.mjs'
import {
  ssrRenderAttrs,
  ssrRenderStyle,
  ssrRenderList,
  ssrRenderComponent,
} from 'vue/server-renderer'
import 'vue-bundle-renderer/runtime'
import 'h3'
import 'devalue'
import '../../nitro/node-server.mjs'
import 'node-fetch-native/polyfill'
import 'node:http'
import 'node:https'
import 'destr'
import 'ofetch'
import 'unenv/runtime/fetch/index'
import 'hookable'
import 'scule'
import 'klona'
import 'defu'
import 'ohash'
import 'ufo'
import 'unstorage'
import 'radix3'
import 'node:fs'
import 'node:url'
import 'pathe'
import 'http-graceful-shutdown'
import 'unctx'
import 'vue-router'
import '@unhead/ssr'
import 'unhead'
import '@unhead/shared'

const backgroundImage =
  '' + buildAssetsURL('pp_tamagawahukei_retouched.4b01210b.jpg')
const { $rootPath } = useNuxtApp()
const _sfc_main = {
  name: 'index',
  components: {
    lineUnit: () => import('./lineUnit-cdfa27da.mjs'),
  },
  data: () => {
    return {
      backgroundImageUrl: backgroundImage,
      isLoading: true,
      lines: [],
    }
  },
  mounted() {
    const self = this
    axios.get(`${$rootPath(location.href)}lines.json`).then((response) => {
      self.lines = response.data
    })
  },
  head() {
    return {
      title: constants.siteName,
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
  const _component_line_unit = __nuxt_component_1
  const _component_nuxt_link = __nuxt_component_0
  _push(
    `<div${ssrRenderAttrs(
      _attrs
    )} data-v-d75184bd><div class="container" data-v-d75184bd><h1 class="text-left" data-v-d75184bd>Tokyu Lines info</h1></div><div id="mainvisual" style="${ssrRenderStyle(
      { backgroundImage: `url(${_ctx.backgroundImageUrl})` }
    )}" data-v-d75184bd></div><div class="line-list" data-v-d75184bd><div class="container" data-v-d75184bd><div class="row" data-v-d75184bd><!--[-->`
  )
  ssrRenderList(_ctx.lines, (line) => {
    _push(
      `<div class="col-6 col-sm-3 col-lg-2 line-list-item-wrapper" data-v-d75184bd>`
    )
    _push(
      ssrRenderComponent(
        _component_line_unit,
        {
          'line-id': line.id,
          'line-name': line.name,
          backgroundColor: line.backgroundColor,
          textColor: line.textColor,
        },
        null,
        _parent
      )
    )
    _push(`</div>`)
  })
  _push(`<!--]--></div></div></div><div class="container" data-v-d75184bd>`)
  _push(
    ssrRenderComponent(
      _component_nuxt_link,
      {
        class: 'about-link',
        to: { path: '/about/' },
      },
      {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`about`)
          } else {
            return [createTextVNode('about')]
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
    'pages/index.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-d75184bd'],
])

export { index as default }
//# sourceMappingURL=index-ac3f02f3.mjs.map
