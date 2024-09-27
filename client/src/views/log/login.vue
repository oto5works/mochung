<template>
  <div class="login">
    <div class="content content-left">
      <appLogo />
      <div class="text">{{ text }}</div>
      <div class="illust selected">
        <illustMain />
      </div>
    </div>
    <div class="content content-right">
      <div class="logo">
        <appLogo />
      </div>
      <div class="auth">
        <div class="illust selected">
          <illustMain />
        </div>
        <div class="text">{{ text }}</div>
        <loginNaver />
        <div class="agree">
          You acknowledge that you read, and agree, to our
          <span class="text-decoration_underline">Terms of Service</span> and
          our <span class="text-decoration_underline">Privacy Policy</span>.
        </div>
      </div>
    </div>

    <buttonDefault
      class="back"
      variant="filled"
      height="32"
      :icon="true"
      @click="goBack"
    >
      <icon><x /></icon>
    </buttonDefault>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import illustMain from "@/components/illust/illustMain";
import loginNaver from "@/views/log/loginNaver.vue";
import appLogo from "@/components/appLogo/appLogo.vue";

export default {
  components: { illustMain, loginNaver, appLogo },
  computed: {
    ...mapGetters({}),
  },
  data() {
    const appName = import.meta.env.VITE_APP_NAME || "DefaultAppName";
    return {
      appName,
      text: `Send files, move ideas with ${appName}`,
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "form" });
    },
  },
};
</script>
<style scoped>
.login {
  position: relative;
  width: 100%;
  min-height: 100%;
  display: flex;
  z-index: 2600;
  background: rgb(var(--mio-theme-color-background));
}
.login .content {
  flex: 1;
}
.login .content-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  max-width: 50%;
  overflow: hidden;
  background: rgb(var(--mio-theme-color-primary-10));
  color: rgb(var(--mio-theme-color-primary));
}
.login .content-left .text {
  font-family: var(--mio-theme-font-family-sp);
  margin-top: 1rem;
  font-size: 2.25rem;
  text-align: center;
  max-width: 400px;
  align-self: center;
  margin-bottom: 65px;
}
.login .content-left .illust {
  margin: 0 auto;
  max-height: 60vh;
  width: 70%;
  max-width: 530px;
}
.login .content-right {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.login .content-right .logo {
  display: none;
}
.auth {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.login .content-right .illust {
  display: none;
}
.login .content-right .text {
  display: none;
}
.login .content-right .agree {
  margin-top: 16px;
  font-size: 0.9rem;
  text-align: center;
  max-width: 400px;
  opacity: 0.7;
}
.back {
  position: fixed;
  top: 1rem;
  right: 1rem;
}
</style>

<style scoped>
/*--- 모바일 ---*/
@media all and (max-width: 479px) {
  .login .content-left {
    display: none;
  }
  .login .content-right .logo {
    display: flex;
    justify-content: center;
    padding-top: 1.2rem;
  }
  .login .content-right .illust {
    display: block;
    width: 90%;
  }
  .login .content-right .text {
    display: block;
    font-family: GT Super WT, "ui-serif", "Georgia", "Cambria",
      "Times New Roman", "Times", "serif";

    font-size: 2.25rem;
    text-align: center;
    max-width: 400px;
    align-self: center;
    margin-bottom: 65px;
  }
}

@media only screen and (min-width: 56.25em) {
}
</style>
