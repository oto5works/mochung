<template>
  <header class="appbar_mobile">
    <div class="appbar-content" :class="{ isOpen: isOpen }">
    <div class="container" >
      <appLogo />

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
          label="collection"
          :class="{ selected: $route.name === 'collection' }"
          @click="handleCollection"
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
  </div>
  <div v-if="isOpen" class="scrim" @click="toggleFold()" />

  </header>
</template>

<script>
import { mapGetters } from "vuex";
import appLogo from "@/components/appLogo/appLogo.vue";
import list from "@/components/icon/list.vue";
import appbarAuth from "@/components/appbar/appbarAuth.vue";

import "@/components/appbar/appbar.scss";

export default {
  components: {
    appbarAuth,
    appLogo,
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
    handleCollection() {
      this.$router.push({ name: "collection" });
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
