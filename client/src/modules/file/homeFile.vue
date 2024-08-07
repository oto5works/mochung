<template>
  <div
    :class="{ formBox: true, active: homeData.files.url }"
    @click="handleClickEvent"
  >
    <div v-if="homeData.files.url" class="formBox-title">
      <div
        v-if="isImageType"
        class="isType"
        :style="{ backgroundImage: 'url(' + homeData.files.url + ')' }"
      ></div>
      <div v-if="isVideoType" class="isType">
        <video :src="homeData.files.url" class="video-preview"></video>
      </div>

      <span>업로드 완료</span>
    </div>
    <div v-if="homeData.files.url" class="formBox-content">
      <p>설정</p>
    </div>
    <div v-if="!homeData.files.url" class="formBox-title">
      <icon><upload /></icon>
      <span>메인 이미지 업로드</span>
    </div>
    <div v-if="!homeData.files.url" class="formBox-content">
      <icon><caretRight /></icon>
    </div>

    <fileUploader
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
      title="메인 이미지"
      :acceptedTypes="['image/*', 'video/*']"
      :maxFileSize="1024 * 1024 * 10"
      :files="homeData.files"
      @update:files="homeData.files = $event"
    >
      <li
        v-if="homeData.files.url && $route.name !== 'form1'"
        @click="gridstack = true"
      >
        <div class="title">
          <icon><crop /></icon><span>위치 및 크기 수정</span>
        </div>

        <modalDialog
          v-if="gridstack"
          :dialog="gridstack"
          @update:dialog="updateDialog"
          :config="true"
        >
          <article>
            <formTitle2
              title="메인 이미지 위치 · 크기 수정"
              content="폭죽과 꽃가루 효과로 메인 화면을 특별하게 꾸며보세요. 모바일 초대장이 개성적으로 돋보이게 만들어줍니다."
            />
            <gridstack />
          </article>

          <div class="dialog-actions position_relative z-index_3">
            <button
              class="button-select selected height_36 pa_24"
              variant="text"
              @click="updateDialog(false)"
            >
              <span>확인</span>
            </button>
          </div>
        </modalDialog>
      </li>
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
    gridstack: defineAsyncComponent(() =>
      import("@/modules/gridstack/gridstack")
    ),
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
    isImageType() {
      return (
        this.homeData.files.file &&
        this.homeData.files.file.type.startsWith("image/")
      );
    },
    isVideoType() {
      return (
        this.homeData.files.file &&
        this.homeData.files.file.type.startsWith("video/")
      );
    },
  },
  data() {
    return {
      dialog: false,
      gridstack: false,
    };
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewHome");
    },
    updateDialog(value) {
      this.gridstack = value;
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
