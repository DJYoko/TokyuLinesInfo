<template>
  <div class="line-list-item">
    <div
      class="color-label"
      :style="styles"
    >
      {{displayLabel}}
    </div>
    <div>{{this.name}}</div>

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
@import '~assets/variables';
.line-list-item {
  text-align: center;
  border: 1px solid $borderColorGray;
}

.color-label{
  padding:12px 0;
  font-weight: bold;
}
</style>