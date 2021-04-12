<template>
  <div>
    <back-link></back-link>
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
              :name="line.name"
              :backgroundColor="line.backgroundColor"
              :textColor="line.textColor"
            ></line-unit>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import util from '~/plugins/util'
import lineUnit from '@/components/lineUnit.vue'
import backLink from '@/components/backLink.vue'

export default {
  name: 'station',
  components: {
    lineUnit,
    backLink,
  },
  data: () => {
    return {
      transfer: [],
      id: 0,
      lat: 0,
      lineIds: [],
      lon: 0,
      name: '',
      lines: [],
    }
  },
  mounted() {
    const stationId = isFinite(this.$route.query.id)
      ? parseInt(this.$route.query.id)
      : null

    if (!stationId) return false
    this.id = stationId
    this.getData(stationId)
  },
  methods: {
    getData() {
      axios
        .get(`./stations.json`)
        .then((response) => {
          const station = util.getObjectById(response.data, this.id)
          this.lat = station.lat
          this.lon = station.lon
          this.name = station.name
          this.lineIds = station.lineIds
        })
        .then(() => {
          axios.get(`./lines.json`).then((response) => {
            this.lines = response.data.filter((line) => {
              return this.lineIds.indexOf(line.id) !== -1
            })
          })
        })
    },
  },
  computed: {},
}
</script>

<style scoped lang="scss">
@import '~assets/variables';
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
