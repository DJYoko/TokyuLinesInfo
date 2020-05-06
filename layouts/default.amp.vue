<template>
  <Nuxt />
</template>
<script>
export default {
    head () {
      // canonical link to original page
        const link = [
            { rel: 'preload', as:'script', href:'https://cdn.ampproject.org/v0.js' },
        ]
        return {
            link
        }
    }
}
</script>