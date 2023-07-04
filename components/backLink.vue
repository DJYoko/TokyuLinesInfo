<template>
  <div class="back-link-wrap">
    <div class="container">
      <nuxt-link class="back-link" :to="{ path: '/' }">
        <i class="fa fa-home" aria-hidden="true"></i>
        back to home</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'backLink',
}
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.back-link-wrap {
  background: $borderColorGray;
  padding: calc($itemMargin / 2);
  margin-bottom: $itemMargin;
}
</style>
