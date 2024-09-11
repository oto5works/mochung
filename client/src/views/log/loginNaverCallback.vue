<template>
  <div>
    <div>code : {{code}}</div>
    <div>state: {{state}}</div>
    {{ userData }}
  </div>
</template>

<script>
import { loginAuth } from '@/services/auth'
import { mapGetters } from 'vuex';

export default {
  data () {
    return {
      code: '',
      state: '',
    }
  },
  computed: {
    ...mapGetters({ userData: 'getUserData' }),
  },
  created () {
    loginAuth()
  }
}
</script>

