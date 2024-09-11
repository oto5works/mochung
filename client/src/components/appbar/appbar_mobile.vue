<template>
  <header class="appbar_mobile">
    <div class="container" :class="{ isOpen: isOpen }">
      <div class="logo">
        <span>{{ appName }}</span>
      </div>

      <buttonDefault
        variant="text"
        height="36"
        :icon="true"
        @click="toggleFold()"
        :class="{ selected: isOpen }"
      >
        <icon class="icon_16"><component :is="isOpen ? 'x' : 'list'" /></icon>
      </buttonDefault>
    </div>
    <div class="appbar-panel" :class="{ isOpen: isOpen }">
      <appbarAuth @toggle-fold="toggleFold" />
      <div class="list">
        <listItem
          icon="upload"
          label="archive"
          :class="{ selected: $route.name === 'archive' }"
          @click="handleArchive"
        />
        <listItem
          icon="upload"
          label="form"
          :class="{ selected: $route.name === 'form' }"
          @click="handleForm"
        />
        <listItem
          icon="upload"
          label="components"
          :class="{ selected: $route.name === 'components' }"
          @click="handleComponents"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { useRoute } from "vue-router";
import logo from "@/components/logo.vue";
import list from "@/components/icon/list.vue";
import appbarAuth from "@/components/appbar/appbarAuth.vue";

import "@/components/appbar/appbar.scss";

export default {
  components: {
    appbarAuth,
    logo,
    list,
  },
  data() {
    return {
      isOpen: false,
      appName: import.meta.env.VITE_APP_NAME || "DefaultAppName",
    };
  },
  computed: {
    ...mapGetters({}),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    handleArchive() {
      this.$router.push({ name: "archive" });
      this.toggleFold();
    },
    handleForm() {
      this.$router.push({ name: "form" });
      this.toggleFold();
    },
    handleComponents() {
      this.$router.push({ name: "components" });
      this.toggleFold();
    },
    toggleFold() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped></style>
