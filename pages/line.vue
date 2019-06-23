<template>
  <div>
    <h1>Line</h1>
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
export default {
  data: () => {
    return {
      lineStations: []
    };
  },
  mounted() {
    const lineId = this.$route.query.id;
    axios.get(`./lineStation/${lineId}.json`).then(response => {
      console.log(response);
      this.lineStations = response.data;
    });
  }
};
</script>