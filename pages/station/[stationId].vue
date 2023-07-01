<template>
  <div>
    <back-link />
    <div class="container">
      <h2>{{ name }}</h2>
      <hr />
      <div class="transfer">
        <h3>乗り入れ路線</h3>
        <div class="row">
          <div
            class="col-6 col-sm-3 col-lg-2 line-list-item-wrapper"
            v-for="line in lines"
            :key="line.initial"
          >
            <line-unit
              :line-id="line.id"
              :line-name="line.name"
              :backgroundColor="
                line.backgroundColor ? line.backgroundColor : ''
              "
              :textColor="line.textColor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import rootPath from '@/assets/scripts/rootPath'
import getObjectById from '@/assets/scripts/getObjectById'

export default {
  name: 'StationId',
  components: {
    lineUnit: () => import('@/components/lineUnit'),
    backLink: () => import('@/components/backLink'),
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
    async getData() {
      await axios
        .get(`${rootPath(location.href)}stations.json`)
        .then((response) => {
          const station = getObjectById(response.data, this.stationId)
          this.lat = station.lat
          this.lon = station.lon
          this.name = station.name
          this.lineIds = station.lineIds
        })
      await axios
        .get(`${rootPath(location.href)}lines.json`)
        .then((response) => {
          this.lines = response.data.filter((line) => {
            return this.lineIds.indexOf(line.id) !== -1
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
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.back-link {
  text-align: left;
}
.line-unit {
  text-align: center;
  cursor: pointer;
  border-radius: $itemRadius;
  transition: $transition;
}
.link-to-line {
  text-decoration: none;
  color: $textColor;
}
</style>
