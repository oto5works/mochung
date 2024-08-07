<template>
  <div
    :class="{ formBox: true, active: kakaotalkData.files.url }"
    @click="handleClickEvent"
  >
    <div v-if="kakaotalkData.files.url" class="formBox-title">
      <div
        class="isType"
        :style="{ backgroundImage: 'url(' + kakaotalkData.files.url + ')' }"
      ></div>
      <span>업로드 완료</span>
    </div>
    <div v-if="kakaotalkData.files.url" class="formBox-content">
      <p>설정</p>
    </div>
    <div v-if="!kakaotalkData.files.url" class="formBox-title">
      <icon><upload /></icon>
      <span>카카오톡 이미지 업로드</span>
    </div>
    <div v-if="!kakaotalkData.files.url" class="formBox-content">
      <icon><caretRight /></icon>
    </div>
    <fileUploader
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
      title="카카오톡 이미지"
      :acceptedTypes="['image/*']"
      :maxFileSize="1024 * 1024 * 10"
      :files="kakaotalkData.files"
      @update:files="kakaotalkData.files = $event"
    >
    </fileUploader>
    <div class="outline" />
    <div class="overlay" />
    <div class="shadow" />
  </div>
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
      kakaotalkData: "getKakaotalkData",
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
.video-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
