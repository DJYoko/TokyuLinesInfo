import __nuxt_component_0 from './backLink-57bb47c4.mjs'
import __nuxt_component_1 from './lineUnit-cdfa27da.mjs'
import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs'
import { useSSRContext } from 'vue'
import axios from 'axios'
import {
  ssrRenderAttrs,
  ssrRenderComponent,
  ssrInterpolate,
  ssrRenderList,
} from 'vue/server-renderer'
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

const { $getObjectById, $rootPath } = useNuxtApp()
const _sfc_main = {
  name: 'StationId',
  components: {
    lineUnit: () => import('./lineUnit-cdfa27da.mjs'),
    backLink: () => import('./backLink-57bb47c4.mjs'),
  },
  data: () => {
    return {
      transfer: [],
      lat: 0,
      lineIds: [],
      lon: 0,
      name: '',
      lines: [],
    }
  },
  mounted() {
    if (this.stationId) {
      this.getData()
    }
  },
  methods: {
    getData() {
      axios
        .get(`${$rootPath(location.href)}stations.json`)
        .then((response) => {
          const station = $getObjectById(response.data, this.stationId)
          this.lat = station.lat
          this.lon = station.lon
          this.name = station.name
          this.lineIds = station.lineIds
        })
        .then(() => {
          axios
            .get(`${$rootPath(location.href)}lines.json`)
            .then((response) => {
              this.lines = response.data.filter((line) => {
                return this.lineIds.indexOf(line.id) !== -1
              })
            })
        })
    },
  },
  computed: {
    stationId() {
      if (!isFinite(this.$route.params.stationId)) {
        return null
      }
      return parseInt(this.$route.params.stationId)
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
  const _component_back_link = __nuxt_component_0
  const _component_line_unit = __nuxt_component_1
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-25db5d95>`)
  _push(ssrRenderComponent(_component_back_link, null, null, _parent))
  _push(
    `<div class="container" data-v-25db5d95><h2 data-v-25db5d95>${ssrInterpolate(
      _ctx.name
    )}</h2><hr data-v-25db5d95><div class="transfer" data-v-25db5d95><h3 data-v-25db5d95>\u4E57\u308A\u5165\u308C\u8DEF\u7DDA</h3><div class="row" data-v-25db5d95><!--[-->`
  )
  ssrRenderList(_ctx.lines, (line) => {
    _push(
      `<div class="col-6 col-sm-3 col-lg-2 line-list-item-wrapper" data-v-25db5d95>`
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
  _push(`<!--]--></div></div></div></div>`)
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'pages/station/_stationId/index.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-25db5d95'],
])

export { index as default }
//# sourceMappingURL=index-bc7538a2.mjs.map
