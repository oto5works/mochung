<template>
  <div class="appbarAuth">
    <div class="content">
      <!--
      <button class="thumb" :class="{ selected: userData.isAuthenticated }" @click="handleAuth">
        <component :is="randomComponent" />
      </button>
-->
<!--
      <span v-if="userData.isAuthenticated" @click="handleArchive">
        <span class="font-size_16 font-weight_700">{{ userInfo.provider }}</span
        ><br />
        <span class="font-size_12">{{ userInfo.email }}</span>
      </span>

      <span v-else>
        I'll
        <span class="text-decoration_underline" @click="handleLogin"
          >Sign Up / Sign in</span
        ><br />Check out more benefits
      </span>
-->
<div v-if="userData.isAuthenticated" @click="handleArchive">
        
        <span>{{ userInfo.email }}</span>
      </div>

      <div v-else>
      <span>로그인</span> 
      </div>
    </div>

    <buttonDefault
      v-if="userData.isAuthenticated"
      variant="filled"
      height="32"
      @click="handleLogout"
    >
      <span>logout</span>
    </buttonDefault>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "@/components/appbar/appbar.scss";
import bride from "@/components/svg/bride.vue";
import groom from "@/components/svg/groom.vue";
import { getAUser } from "@/services/users";

export default {
  components: {
    bride,
    groom,
  },
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
  },
  data() {
    return {
      randomComponent: null, // 랜덤 컴포넌트를 저장할 변수
      userInfo: {
        email: null,
        provider: null,
      },
    };
  },
  created() {
    // bride와 groom 중 하나를 무작위로 선택
    const components = ["bride", "groom"];
    this.randomComponent =
      components[Math.floor(Math.random() * components.length)];
    this.fetchUser();
  },
  watch: {
    "userData.isAuthenticated"(newVal) {
      if (newVal === true) {
        this.fetchUser();
      }
    },
  },
  methods: {
    handleAuth() {
      if (this.userData.isAuthenticated) {
        this.$router.push({ name: "archive" });
      } else {
        this.$router.push({ name: "login" });
      }
      this.$emit("toggle-fold");
    },
    handleArchive() {
      this.$router.push({ name: "archive" });
      this.$emit("toggle-fold");
    },
    handleLogin() {
      this.$router.push({ name: "login" });
      this.$emit("toggle-fold");
    },
    handleLogout() {
      this.$router.push({ name: "logout" });
      this.$emit("toggle-fold");
    },
    async fetchUser() {
      if (this.userData.isAuthenticated) {
        const id = this.userData.userId;
        try {
          const res = await getAUser(id);
          this.userInfo.email = res.email;
          this.userInfo.provider = res.provider;
        } catch (error) {
          console.error("Error fetching archives:", error);
        }
      } else {
        console.log("회원이 아님");
      }
    },
  },
};
</script>

<style scoped></style>
