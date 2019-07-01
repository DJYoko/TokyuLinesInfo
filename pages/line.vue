<template>
  <div>
    <back-link></back-link>
    <div class="container">
      <div class="line-title-block">
        <div
          class="line-symbol"
          :style="symbolStyle"
        >
          {{ displayLabel }}
        </div>
        <h1>
          {{ line.name }}
        </h1>
      </div>

      <div class="row">
        <div
          class="col-xl-2 col-lg-3 col-md-3 col-sm-4 col-12"
          v-for="lineStation in lineStations"
          :key="lineStation.id"
        >
          <nuxt-link
            :to="{path: '/station', query: { id:lineStation.stationId } }"
            class="link-to-station"
          >
            <line-station-unit
              :id=lineStation.id
              :name=getStationNameById(lineStation.stationId)
              :label=lineStation.label
              :lineId=lineStation.lineId
              :line=line
            ></line-station-unit>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import util from "~/plugins/util";
import lineStationUnit from "@/components/lineStationUnit.vue";
import backLink from "@/components/backLink.vue";
export default {
  components: {
    lineStationUnit,
    backLink
  },
  data: () => {
    return {
      stations: [],
      lineStations: [],
      line: {
        backgroundColor: "",
        id: "",
        name: "",
        textColor: ""
      }
    };
  },
  mounted() {
    const lineId = this.$route.query.id;
    axios.get(`./lineStations.json`).then(response => {
      this.lineStations = response.data.filter(station => {
        return station.lineId === lineId;
      });
    });

    axios.get(`./stations.json`).then(response => {
      this.stations = response.data;
    });

    axios.get(`./lines.json`).then(response => {
      this.line = util.getObjectById(response.data, lineId);
    });
  },
  methods: {},
  computed: {
    displayLabel() {
      return this.line.id.toUpperCase();
    },
    symbolStyle() {
      return {
        backgroundColor: this.line.backgroundColor,
        color: this.line.textColor
      };
    },
    getStationNameById() {
      const self = this;
      return stationId => {
        const matchedStations = this.stations.filter(station => {
          return station.id === stationId;
        });
        return matchedStations.length > 0
          ? matchedStations[0].name
          : "駅登録なし";
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
.line-title-block {
  position: relative;
  height: $itemMargin * 4;
}
.line-symbol {
  position: absolute;
  left: $itemMargin;
  top: $itemMargin;
  width: $itemMargin * 2;
  height: $itemMargin * 2;
  line-height: $itemMargin * 2;
  border-radius: $itemRadius;
  text-align: center;
}

h1 {
  font-size: $itemMargin * 2;
  height: $itemMargin * 4;
  line-height: $itemMargin * 4;
  margin-bottom: 0;
  padding: 0 $itemMargin 0 $itemMargin * 4;
}

.link-to-station {
  text-decoration: none;
  color: $textColor;
}
</style>