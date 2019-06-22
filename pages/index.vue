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
    <div class="container">
    <div class="row">
      <div
        class="col-6 col-sm-3"
        v-for="line in lines"
        :key="line.initial"
      >
      <line-list-item :id=line.id :name=line.name :backgroundColor=line.backgroundColor :textColor=line.textColor></line-list-item>
        
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import backgroundImage from "~/assets/PAK86_touyokosentohome.jpg";
import lineListItem from "@/components/lineListItem.vue";
export default {
  components: {
    lineListItem,
  },
  data: () => {
    return {
      backgroundImageUrl: backgroundImage,
      isLoading: true,
      lines: []
    };
  },
  mounted() {
    const self = this;
    axios.get("lines.json").then(response => {
      self.lines = response.data;
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
    padding: 180px 0;
    color: #ffffff;
    font-weight: 100;
    font-size: 5rem;
  }
}
</style>