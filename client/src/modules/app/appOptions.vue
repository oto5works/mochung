<template>
  <div class="flex flex-direction_column gap_8">
    <buttonSelect
      v-for="appItem in apps"
      :key="appItem"
      @click="toggleApp(appItem)"
      :class="[{ selected: isAppActive(appItem) }, appItem]"
      class="width_100 height_64 --border-radius_24"
    >
      <icon><component :is="appItem" /></icon>
      <span>{{ getAppDisplayName(appItem) }}</span>
    </buttonSelect>
  </div>
</template>

<script>
import "@/modules/app/app.scss";

import { mapGetters } from "vuex";
import kakaomap from "@/components/icon/kakaomap.vue";
import kakaonavi from "@/components/icon/kakaonavi.vue";
import navermap from "@/components/icon/navermap.vue";
import tmap from "@/components/icon/tmap.vue";

export default {
  components: { kakaomap, kakaonavi, navermap, tmap },
  data() {
    return {
      apps: ["navermap", "kakaomap", "kakaonavi", "tmap"],
    };
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  methods: {
    toggleApp(appItem) {
      const index = this.locationData.app.indexOf(appItem);
      if (index !== -1) {
        // If the app is in the array, remove it
        this.locationData.app.splice(index, 1);
      } else {
        // If the app is not in the array, add it
        this.locationData.app.push(appItem);
      }
    },
    isAppActive(appItem) {
      return this.locationData.app.includes(appItem);
    },
    getAppDisplayName(appItem) {
      switch (appItem) {
        case "kakaomap":
          return "카카오맵";
        case "kakaonavi":
          return "카카오네비";
        case "navermap":
          return "네이버맵";
        case "tmap":
          return "티맵";
        default:
          return "";
      }
    },
  },
};
</script>
