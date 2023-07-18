<template>
  <div>
    <h1>{{ m_name }} 그리고 {{ w_name }}</h1>
    <img :src="mainimg" />
    <p>{{ date }}, {{ time }}</p>
    <p>{{ hall_name }}, {{ adress }}</p>
  </div>
</template>
<script>
export default {
components: {},
props: {
  mainimg: String,
  date: String,
  time: String,
  adress: String,
  hall_name: String,
  m_name: String,
  w_name: String,
},
computed: {
  mainimg() {
    return (
      this.mainimg || 'https://thumbs.gfycat.com/ClassicWholeIndianjackal-mobile.jpg'
    )
  },
},
};
</script>
<style lang="scss">

</style>