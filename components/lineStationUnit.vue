<template>
  <div class="line-station-unit">
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
  name: "lineStationUnit",
  props: {
    id: {
      type: String,
      require: true
    },
    name: {
      type: String,
      require: true
    },
    lineStationLabel: {
      type: String,
      require: true
    },
    lineId: {
      type: String,
      require: true
    },
    line: {
      type: Object,
      require: true
    }
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.line.backgroundColor,
        color: this.line.textColor
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
.line-station-unit {
  text-align: center;
  position: relative;
  background-color: $backgroundColorGray;
  margin-bottom: 2px;
  @media screen and (min-width: 576px) {
    margin-bottom: $itemMargin * 2;
  }
}

.color-label {
  position: absolute;
  top: $itemMargin;
  left: $itemMargin;
  width: $itemMargin * 3;
  height: $itemMargin * 2;
  line-height: $itemMargin * 2;
}
.detail-name {
  height: $itemMargin * 4;
  line-height: $itemMargin * 4;
  padding: 0 0 0 $itemMargin * 4;
  border-radius: 0 0 $itemRadius $itemRadius;
  transition: $transition;
}
</style>