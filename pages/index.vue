<template>
  <div>
    <div
      id="mainvisual"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <div class="container">
        <h1 class="text-center">Tokyu Lines info</h1>
      </div>
    </div>
    <ul>
      <li
        v-for="line in lines"
        :key="line.initial"
      >
        {{ line.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import backgroundImage from "~/assets/PAK86_touyokosentohome.jpg";
export default {
  data: () => {
    return {
      backgroundImageUrl: backgroundImage,
      isLoading: true,
      lines: []
    };
  },
  mounted() {
    console.log("run");
    axios.get("lines.json").then(response => {
      this.lines = response.data;
    });
  }
};
</script>

<style scoped lang="scss">
#mainvisual {
  position: relative;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  h1 {
    padding:240px 0;
    color:#ffffff;
    font-weight: 100;
    font-size:5rem;
  }
}
</style>