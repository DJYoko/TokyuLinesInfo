<template>
<div class="back-link-wrap">
      <nuxt-link class="back-link" :to="{path: '/'}">back to home</nuxt-link>
</div>
</template>

<script>
export default {
  name: "backLink",
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
.back-link-wrap{
  background:#111;
}
</style>