<template>
  <div>

  </div>
</template>

<script>
import { logoutAuth } from '@/services/auth'

export default {
  mounted () {
    logoutAuth()
  }
}
</script>