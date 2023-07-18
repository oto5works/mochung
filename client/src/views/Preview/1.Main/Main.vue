<template>
  <Main_defaulted 
    v-if="main.main_type === 'defaulted'"
    :title="main.title"
    :user1="info.user1.infos.user.name"
    :user2="info.user2.infos.user.name"
    :date="wedding.date" 
    :time="wedding.time" 
    :hall="wedding.hall_name" 
    :info="wedding.hall_info"
    :image="main.image"
  />
</template>

<script>
import Main_defaulted from '@/views/Preview/1.Main/Main_defaulted.vue'

export default {
  components: { Main_defaulted },
  props: {
    main: { type: Object },
    wedding: { type: Object },
    info: { type: Object },
  },
  };
  </script>
<style scoped>
.P_main {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: aqua;
}
</style>