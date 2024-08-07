<template>
  <formBox icon="maps" title="지도" @click="handleClickEvent">
    <p>{{ mapType }}</p>
    <mapsDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    mapsDialog: defineAsyncComponent(() =>
      import("@/modules/maps/mapsDialog.vue")
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
    mapType() {
      const mapValue = this.locationData.map;
      if (mapValue === "kakaomap") {
        return "카카오맵";
      } else if (mapValue === "upload") {
        return "이미지 업로드";
      } else if (mapValue === "disabled") {
        return "사용 안함";
      } else {
        // You can provide a default value or handle other cases if needed
        return "알 수 없음";
      }
    },
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewMap");
    },
  },
};
</script>
