<template>
  <div>
    <h1>Line</h1>
    <ul>
      <li v-for="station in stations" :key="station.id">
    {{ station.name }}
  </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: ()=> {
    return {
      stations: [
        {
          name: '渋谷',
          id: 'TY01',
          station_id: '00001',
        },
        {
          name: '横浜',
          id: 'TY20',
          station_id: '10001',
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