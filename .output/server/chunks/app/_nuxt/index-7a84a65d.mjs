import __nuxt_component_0 from './backLink-57bb47c4.mjs'
import { _ as __nuxt_component_0$1 } from './n-link-563b35af.mjs'
import {
  useSSRContext,
  mergeProps,
  withCtx,
  createVNode,
  toDisplayString,
} from 'vue'
import {
  ssrRenderAttrs,
  ssrRenderComponent,
  ssrRenderStyle,
  ssrInterpolate,
  ssrRenderList,
} from 'vue/server-renderer'
import { _ as _export_sfc, a as useNuxtApp } from '../server.mjs'
import axios from 'axios'
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

const _sfc_main$1 = {
  name: 'lineStationUnit',
  props: {
    stationId: {
      type: Number,
      require: true,
    },
    stationName: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
    lineId: {
      type: String,
      require: true,
    },
    line: {
      type: Object,
      require: true,
    },
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
}
function _sfc_ssrRender$1(
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
    ssrRenderComponent(
      _component_nuxt_link,
      mergeProps(
        {
          to: `/station/${$props.stationId}/`,
          class: 'line-station-unit',
        },
        _attrs
      ),
      {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(
              `<div class="line-label" style="${ssrRenderStyle(
                $options.styles
              )}" data-v-83fc96b7${_scopeId}>${ssrInterpolate(
                $options.displayLabel
              )}</div><div class="detail-name" data-v-83fc96b7${_scopeId}>${ssrInterpolate(
                $props.stationName
              )}</div>`
            )
          } else {
            return [
              createVNode(
                'div',
                {
                  class: 'line-label',
                  style: $options.styles,
                },
                toDisplayString($options.displayLabel),
                5
              ),
              createVNode(
                'div',
                { class: 'detail-name' },
                toDisplayString($props.stationName),
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
const _sfc_setup$1 = _sfc_main$1.setup
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'components/lineStationUnit.vue'
  )
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [
  ['ssrRender', _sfc_ssrRender$1],
  ['__scopeId', 'data-v-83fc96b7'],
])
const lineStationUnit = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: __nuxt_component_1,
})
const { $rootPath } = useNuxtApp()
const { $getObjectById } = useNuxtApp()
const _sfc_main = {
  name: 'LineIndex',
  components: {
    lineStationUnit: () =>
      Promise.resolve().then(function () {
        return lineStationUnit
      }),
    backLink: () => import('./backLink-57bb47c4.mjs'),
  },
  data: () => {
    return {
      stations: [],
      lineStations: [],
      line: {
        backgroundColor: '',
        id: '',
        name: '',
        textColor: '',
      },
    }
  },
  mounted() {
    axios
      .get(`${$rootPath(location.href)}lineStations.json`)
      .then((response) => {
        this.lineStations = response.data.filter((station) => {
          return station.lineId === this.lineId
        })
      })
    axios.get(`${$rootPath(location.href)}stations.json`).then((response) => {
      this.stations = response.data
    })
    axios.get(`${$rootPath(location.href)}lines.json`).then((response) => {
      this.line = $getObjectById(response.data, this.lineId)
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
      return (stationId) => {
        const matchedStations = this.stations.filter((station) => {
          return station.id === stationId
        })
        return matchedStations.length > 0
          ? matchedStations[0].name
          : 'station not found'
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
  const _component_back_link = __nuxt_component_0
  const _component_line_station_unit = __nuxt_component_1
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-a55c4a7d>`)
  _push(ssrRenderComponent(_component_back_link, null, null, _parent))
  _push(
    `<div class="container" data-v-a55c4a7d><div class="line-title-block" data-v-a55c4a7d><div class="line-symbol" style="${ssrRenderStyle(
      $options.symbolStyle
    )}" data-v-a55c4a7d>${ssrInterpolate(
      $options.displayLabel
    )}</div><h1 data-v-a55c4a7d>${ssrInterpolate(
      _ctx.line.name
    )}</h1></div><div class="row" data-v-a55c4a7d><!--[-->`
  )
  ssrRenderList(_ctx.lineStations, (lineStation) => {
    _push(
      `<div class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12" data-v-a55c4a7d>`
    )
    _push(
      ssrRenderComponent(
        _component_line_station_unit,
        {
          'station-id': lineStation.stationId,
          'station-name': $options.getStationNameById(lineStation.stationId),
          label: lineStation.label,
          lineId: lineStation.lineId,
          line: _ctx.line,
        },
        null,
        _parent
      )
    )
    _push(`</div>`)
  })
  _push(`<!--]--></div></div></div>`)
}
const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(
    'pages/line/_lineId/index.vue'
  )
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [
  ['ssrRender', _sfc_ssrRender],
  ['__scopeId', 'data-v-a55c4a7d'],
])

export { index as default }
//# sourceMappingURL=index-7a84a65d.mjs.map
