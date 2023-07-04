<template>
  <nuxt-link
    :to="`/line/${lineId}/`"
    class="link-to-line line-unit"
    :style="borderStyle"
  >
    <div class="color-label" :style="styles">
      {{ displayLabel }}
    </div>
    <div class="detail-name">{{ lineName }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'lineUnit',
  props: {
    lineName: { type: String, default: '' },
    lineId: { type: String, default: '' },
    backgroundColor: { type: String, default: '' },
    textColor: { type: String, default: '' },
  },
  computed: {
    styles() {
      return {
        color: this.$props.textColor,
        backgroundColor: this.$props.backgroundColor,
      }
    },
    displayLabel() {
      return this.$props.lineId.toUpperCase()
    },
    borderStyle() {
      return {
        border: `1px solid ${this.$props.backgroundColor}`,
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.line-unit {
  display: block;
  text-align: center;
  cursor: pointer;
  border-radius: $itemRadius;
  transition: $transition;
}

.color-label {
  padding: $itemMargin 0;
  font-weight: bold;
  border-radius: $itemRadius $itemRadius 0 0;
}
.detail-name {
  font-size: 0.8em;
  padding: $itemMargin 0;
  background-color: #ffffff;
  border-radius: 0 0 $itemRadius $itemRadius;
}

.line-unit {
  &:hover {
    text-decoration: none;
    transform: scale(1.1);
  }
}
</style>
