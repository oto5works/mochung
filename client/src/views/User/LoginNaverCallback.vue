<template>
  <div>
    <div>code : {{code}}</div>
    <div>state: {{state}}</div>
  </div>
</template>

<script>
import { loginAuth } from '@/services/auth'

export default {
  data () {
    return {
      code: '',
      state: '',
    }
  },
  mounted () {
    loginAuth()
  }
}
</script>
