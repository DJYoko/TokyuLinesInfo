<template>
  <div>
    <div class="container">
      <h1 class="text-left">Tokyu Lines info</h1>
    </div>
    <div
      id="mainvisual"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    ></div>
    <div class="line-list">
      <div class="container">
        <div class="row" v-if="lines.length > 0">
          <div
            class="col-6 col-sm-3 col-lg-2 line-list-item-wrapper"
            v-for="line in lines"
            :key="line.initial"
          >
            <line-unit
              :line-id="line.id"
              :line-name="line.name"
              :backgroundColor="line.backgroundColor"
              :textColor="line.textColor"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <nuxt-link class="about-link" :to="{ path: '/about/' }">about</nuxt-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/variables.scss';
h1 {
  color: $textColor;
  font-weight: 100;
  margin-bottom: 0;
  padding: $itemMargin 0;
}
#mainvisual {
  position: relative;
  background-position: center bottom;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 180px 0;
}
.line-list {
  padding-top: $itemMargin * 2;
  margin-left: 0;
  margin-right: 0;
  background-color: $borderColorGray;
}
.line-list-item-wrapper {
  margin-bottom: $itemMargin * 2;
}
.link-to-line {
  text-decoration: none;
  color: $textColor;
}
.about-link {
  display: block;
  padding: $itemMargin;
  text-align: center;
}
</style>

<script>
import axios from 'axios'
import rootPath from '@/assets/scripts/rootPath'

import backgroundImage from '~/assets/pp_tamagawahukei_retouched.jpg'
export default {
  name: 'index',
  components: {
    lineUnit: () => import('@/components/lineUnit'),
  },
  data: () => {
    return {
      backgroundImageUrl: backgroundImage,
      isLoading: true,
      lines: [],
    }
  },
  mounted() {
    const self = this
    axios.get(`${rootPath()}lines.json`).then((response) => {
      self.lines = response.data
    })
  },
  head() {
    return {
      title: 'Tokyu Lines Info',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tokyu Lines Info',
        },
      ],
    }
  },
}
</script>
