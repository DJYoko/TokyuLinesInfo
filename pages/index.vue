<template>
  <div>
    <div class="container">
    <h1 class="text-left">Tokyu Lines info</h1>
    </div>
    <div
      id="mainvisual"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
    </div>
    <div class="line-list">
      <div class="container">
        <div class="row">
          <div
            class="col-6 col-sm-3 line-list-item-wrapper"
            v-for="line in lines"
            :key="line.initial"
          >
            <line-list-item
              :id=line.id
              :name=line.name
              :backgroundColor=line.backgroundColor
              :textColor=line.textColor
              @click="onLineItemClicked"
            ></line-list-item>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import backgroundImage from "~/assets/pp_tamagawahukei_retouched.jpg";
import lineListItem from "@/components/lineListItem.vue";
export default {
  components: {
    lineListItem
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
  },
  methods: {
    onLineItemClicked: (payload)=>{
      console.log(payload);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
h1 {
    color: $textColor;
    font-weight: 100;
    margin-bottom: 0;
    padding: $itemMargin 0;
  }
#mainvisual {
  position: relative;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 180px 0;
  
}
.line-list {
  padding-top: $itemMargin * 2;
  margin-left: 0;
  margin-right: 0;
  background-color: $borderColorGray;
}
.line-list-item-wrapper {
  margin-bottom: $itemMargin * 2;
}
</style>