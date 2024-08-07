<template>
  <buttonDefault class="height_40 pa_16 --border-radius_24" @click="handleClickEvent">
    <span v-if="locationData.files.url">설정</span>
    <span v-else>지도 이미지 업로드</span>
    <fileUploader
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
      title="지도 이미지"
      :acceptedTypes="['image/*']"
      :maxFileSize="1024 * 1024 * 10"
      :files="locationData.files"
      @update:files="locationData.files = $event"
    >
    </fileUploader>
  </buttonDefault>
</template>
<script>
import "@/modules/formBox/formBox.scss";

import upload from "@/components/icon/upload";
import crop from "@/components/icon/crop";
import caretRight from "@/components/icon/caretRight";
import dots from "@/components/icon/dots";

import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    upload,
    crop,
    caretRight,
    dots,
    fileUploader: defineAsyncComponent(() =>
      import("@/modules/file/fileUploader")
    ),
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>

<style scoped>
.absolute_100 {
  z-index: 1;
}
.formBox__text,
.isType {
  z-index: 2;
}
.formBox__title {
  flex: unset;
}
.isType {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 56px;
  background-position: center;
  background-size: cover;
  border-radius: var(--border-radius-12);
  background-color: var(--primary-color);
  overflow: hidden;
}
.isType svg {
  color: var(--primary-on);
}
.formBox.active {
  padding-left: 12px;
}
</style>
