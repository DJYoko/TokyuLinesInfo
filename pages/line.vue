<template>
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
        class="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12"
        v-for="lineStation in lineStations"
        :key="lineStation.id"
      >
        <line-station-unit
                :id=lineStation.id
                :name=lineStation.name
                :lineStationLabel=lineStation.lineStationLabel
                :lineId=lineStation.lineId
                :line=line
                @click="onLineStationClicked"
              ></line-station-unit>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import util from "~/plugins/util";
import lineStationUnit from "@/components/lineStationUnit.vue";
export default {
  components: {
    lineStationUnit
  },
  data: () => {
    return {
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
    axios.get(`./lineStation/${lineId}.json`).then(response => {
      console.log(response);
      this.lineStations = response.data;
    });

    axios.get(`./lines.json`).then(response => {
      console.log(response.data, lineId);
      this.line = util.getObjectById(response.data, lineId);

      console.log(this.line);
    });
  },
  methods: {
    onLineStationClicked: (payload) =>{
      console.log(payload);
    }
  },
  computed: {
    displayLabel() {
      return this.line.id.toUpperCase();
    },
    symbolStyle() {
      return {
        backgroundColor: this.line.backgroundColor,
        color: this.line.textColor
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
</style>