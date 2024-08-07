<template>
  <div class="navigationTop">
    <navigationButton />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navigationButton from "@/components/navigation/navigationButton.vue";

export default {
  components: {navigationButton},
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
  },
  methods: {
    goToLogin() {
      this.$router.push({ name: "login" });
    },
    goToLogout() {
      this.$router.push({ name: "logout" });
    },
  },
};
</script>

<style scoped>
.navigationTop {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
}
</style>
