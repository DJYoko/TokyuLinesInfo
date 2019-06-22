<template>
  <div
    class="line-list-item"
    @click="onClick"
  >
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
  },
  methods: {
    onClick(event) {
      this.$emit("click", this.id);
    }
  }
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
.line-list-item {
  text-align: center;
  cursor: pointer;
}

.color-label {
  padding: $itemMargin 0;
  font-weight: bold;
  border-radius: $itemRadius $itemRadius 0 0;
  transition: $transition;
}
.detail-name {
  font-size: 0.8em;
  padding: $itemMargin 0;
  background-color: #ffffff;
  border-radius: 0 0 $itemRadius $itemRadius;
  transition: $transition;
}

.line-list-item {
  &:hover {
    .color-label,
    .detail-name {
      transform: scale(1.1);
    }
  }
}
</style>