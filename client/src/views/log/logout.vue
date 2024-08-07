<template>
  <div></div>
</template>

<script>
import { logoutAuth } from '@/services/auth';

export default {
  mounted() {
    logoutAuth(); // Trigger the logout action when the component is mounted
  },
};
</script>
