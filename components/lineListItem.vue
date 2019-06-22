<template>
  <div class="line-list-item">
    <div
      class="color-label"
      :style="styles"
    >
      {{displayLabel}}
    </div>
    <div class="detail-name">{{this.name}}</div>

  </div>
</template>

<script>
export default {
  name: "lineListItem",
  props: {
    name: String,
    id: String,
    backgroundColor: String,
    textColor: String
  },
  computed: {
    styles() {
      return {
        color: this.textColor,
        backgroundColor: this.backgroundColor
      };
    },
    displayLabel() {
      return this.id.toUpperCase();
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
.line-list-item {
  text-align: center;
}

.color-label {
  padding: $itemMargin 0;
  font-weight: bold;
  border-radius: $itemRadius $itemRadius 0 0;
}
.detail-name{
  font-size:0.8em;
  padding:$itemMargin 0;
  background-color: #ffffff;
  border-radius: 0 0 $itemRadius $itemRadius;
}
</style>