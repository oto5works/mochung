<template>
  <formBox icon="app" title="지도 앱 연동" @click="handleClickEvent">
    <button
      class="--border-radius_12 icon_24 selected"
      v-for="appItem in locationData.app"
      :key="appItem"
      @click="toggleApp(appItem)"
      :class="[appItem]"
    >
      <icon class="icon_18"><component :is="appItem" /></icon>
      <div class="overlay"/>
    </button>
    <appDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import "@/modules/app/app.scss";

import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import kakaomap from "@/components/icon/kakaomap.vue";
import kakaonavi from "@/components/icon/kakaonavi.vue";
import navermap from "@/components/icon/navermap.vue";
import tmap from "@/components/icon/tmap.vue";

export default {
  components: {
    kakaomap,
    kakaonavi,
    navermap,
    tmap,
    appDialog: defineAsyncComponent(() =>
      import("@/modules/app/appDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewLocation");
    },
  },
};
</script>

<style scoped>
button svg {
  color: inherit;
}
</style>