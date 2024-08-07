<template>
  <div class="mapsFile">
    <img
      v-if="locationData.files.url"
      :src="locationData.files.url"
      alt="Location Image"
    />
    <illust v-else><error /></illust>
    <locationFile />
    <div class="absolute_100 overlay_pc" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import locationFile from "@/modules/file/locationFile.vue";
import illust from "@/components/illust/illust.vue";
import error from "@/components/illust/error/error.vue";

export default {
  components: {
    locationFile,
    illust,
    error,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
};
</script>
<style scoped>
.config .formTitle3 {
  justify-content: center;
}
.mapsFile {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: var(--border-radius-18);
  gap: 16px;
  padding: 24px;
}
.mapsFile-image {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-18);
}
.mapsFile img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-24);
}
</style>
