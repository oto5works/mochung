<template>
  <div class="login">
    <div class="common-space" />
    <div class="login-content">

      <div class="sp_24" />
      <div class="login-button">
        <loginNaver />
      </div>
    </div>

    <div class="common-space" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import loginNaver from "@/views/log/loginNaver.vue";
export default {
  components: { loginNaver },
  computed: {
    ...mapGetters({
    }),
  },
};
</script>
<style scoped>
.app-content {
  padding-left: 0px !important;
  width: 100%;
  background-color: aqua;
}

.login {
  padding: 0 64px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.login-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 56px;
}
.login-button {
  width: 80%;
}
</style>

<style scoped>
@media all and (max-width: 1023px) {
  .login {
    padding: 0 16px;
  }
  .login-button {
  width: 100%;
}
}
</style>
