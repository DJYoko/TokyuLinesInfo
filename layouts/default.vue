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
        const link = [
            { rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css', integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin:'anonymous' }
        ]
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