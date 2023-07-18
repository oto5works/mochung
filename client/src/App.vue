<template>
  <v-app>
    <Noti />
    <v-main><RouterView/></v-main>
  </v-app>
</template>

<script>
import { RouterView } from 'vue-router'
import Noti from './components/Noti.vue'
import { mapGetters } from "vuex";

export default {
  components: { RouterView, Noti },
  computed: {
    ...mapGetters({
            auth: 'isAuthenticated',
            username: 'getUserName',
          }),
    //showNavbar() {
      //return !['/login', '/'].includes(this.$route.path)
    //}
  },
  data() {
    return {
      Header: this.Header,
    }
  },
}
</script>

