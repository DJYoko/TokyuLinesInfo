<template>
  <div>
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

    <ul>
      <li
        v-for="lineStation in lineStations"
        :key="lineStation.id"
      >
        {{ lineStation.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import util from "~/plugins/util";
export default {
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