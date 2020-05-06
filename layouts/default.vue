<template>
    <nuxt/>
</template>
<script>
export default {
    props: {
        hasAmpPage: {
            type: Boolean,
            default: true
        }
    },
    head () {
         const link = []
        if(this.$props.hasAmpPage) {
            const routePath = `/amp${this.$route.path}`.replace(/\/$/g, '')
            const ampCanonicalLink = { rel: 'amphtml', href: routePath}
            link.push(ampCanonicalLink)
        }
        return {
            link
        }
    },
}
</script>