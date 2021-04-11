<template>
  <div>
    <back-link></back-link>
    <div class="container">
      <h2>web framework &amp; libraries</h2>
      <ul style="padding-left:20px;">
        <li>Vue <a
            href="https://vuejs.org/"
            target="_blank"
          >https://vuejs.org/</a></li>
        <li>Nuxt.js <a
            href="https://nuxtjs.org/"
            target="_blank"
          >https://nuxtjs.org/</a></li>
        <li>Bootstrap: <a
            href="https://getbootstrap.com/"
            target="_blank"
          >https://getbootstrap.com/</a></li>
      </ul>
      <hr>
      <h4>visual materials</h4>
      <ul style="padding-left:20px;">
        <li>station &amp; line data: <a
            href="https://www.tokyu.co.jp/"
            target="_blank"
          >www.tokyu.co.jp</a></li>
        <li>photos: <a
            href="https://www.pakutaso.com/20190537148post-21034.html"
            target="_blank"
          >PAKUTAO</a> (used in Top page main visual)</li>
      </ul>
      <hr>
      <h4>source</h4>
      <ul style="padding-left:20px;">
        <li>GitHub <a
            href="https://github.com/DJYoko/TokyuLinesInfo"
            target="_blank"
          >https://github.com/DJYoko/TokyuLinesInfo</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import backLink from "@/components/backLink.vue";
import constants from "@/assets/constants";

export default {
  components: {
    backLink
  },
  head () {
    return {
      title: 'about | ' + constants.siteName,
      meta: [{
        hid: 'description',
        name: 'description',
        content: constants.siteName
      }]
    }
  },
};
</script>

<style scoped lang="scss">
@import "~assets/variables";
.back-link {
  text-align: left;
}
</style>