<template>
  <div></div>
</template>

<script>
import { logoutAuth } from "@/services/auth";

export default {
  created() {
    logoutAuth()
      .then(() => {
        this.$router.push({ name: "home" }); // 로그아웃 후 'home' 라우트로 이동
      })
      .catch((error) => {
        console.error("Logout failed:", error);
      });
  },
};
</script>
