<template>
  <nuxt-link
    :to="{ path: '/station', query: { id: stationId } }"
    class="line-station-unit"
  >
    <div class="line-label" :style="styles">
      {{ displayLabel }}
    </div>
    <div class="detail-name">{{ this.name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'lineStationUnit',
  props: {
    stationId: {
      type: Number,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      require: true,
    },
    lineId: {
      type: String,
      require: true,
    },
    line: {
      type: Object,
      require: true,
    },
  },
  computed: {
    styles() {
      return {
        backgroundColor: this.line.backgroundColor,
        color: this.line.textColor,
      }
    },
    displayLabel() {
      return this.label.toUpperCase()
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/variables';
.line-station-unit {
  display: block;
  text-decoration: none;
  color: #222222;
  text-align: center;
  position: relative;
  background-color: $backgroundColorGray;
  margin-bottom: 2px;
  &:hover {
    text-decoration: none;
  }
  @media screen and (min-width: 576px) {
    margin-bottom: $itemMargin * 2;
  }
}

.line-label {
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
