<template>
  <Nuxt />
</template>
<script>
export default {
    head () {
      // canonical link to original page
        const routePath = this.$route.path.replace(/^\/amp/, '/')
        const link = [
            { rel: 'preload', as:'script', href:'https://cdn.ampproject.org/v0.js' },
            { rel: 'canonical', href: routePath},
        ]
        return {
            link
        }
    }
}
</script>