<template>
  <nuxt-link
    :to="{ path: '/line', query: { id: lineId } }"
    class="link-to-line line-unit"
    @click="onClick"
    :style="borderStyle"
  >
    <div class="color-label" :style="styles">
      {{ displayLabel }}
    </div>
    <div class="detail-name">{{ this.name }}</div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'lineUnit',
  props: {
    name: String,
    lineId: String,
    backgroundColor: String,
    textColor: String,
  },
  computed: {
    styles() {
      return {
        color: this.textColor,
        backgroundColor: this.backgroundColor,
      }
    },
    displayLabel() {
      return this.lineId.toUpperCase()
    },
    borderStyle() {
      return {
        border: `1px solid ${this.backgroundColor}`,
      }
    },
  },
  methods: {
    onClick(event) {
      this.$emit('click', this.lineId)
    },
  },
}
</script>

<style scoped lang="scss">
@import '~assets/variables';
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
