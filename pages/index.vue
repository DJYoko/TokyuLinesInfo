<template>
  <div>
    <h1>Top</h1>
    <ul>
      <li v-for="line in lines" :key="line.initial">
    {{ line.name }}
  </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: ()=> {
    return {
      lines: [
        {
          name: '東横線',
          initial: 'TY',
        }
      ]
    }
  }
  // fetch ({ store, params }) {
  //   return axios.get('http://my-api/stars')
  //     .then((res) => {
  //       store.commit('setStars', res.data)
  //     })
  // }
}
</script>