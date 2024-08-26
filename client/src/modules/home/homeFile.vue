<template>
  <cardViewFile
    title="Main Screen Image"
    content="Use this to set the title for the section where guests can send"
    :url="homeData.files.url"
    @click="handleClickEvent"
  >
    <fileUploader
      v-if="fileUploader"
      :dialog="fileUploader"
      @update:dialog="fileUploader = $event"
      title="메인 이미지 업로드"
      :acceptedTypes="['image/*', 'video/*']"
      :maxFileSize="1024 * 1024 * 10"
      :files="homeData.files"
      @update:files="homeData.files = $event"
    >
      <listItem
        icon="logoYoutube"
        label="유튜브 링크 업로드"
        content="메인 이미지를 동영상으로 사용하려면 유튜브 링크를 업로드 해주세요."
        v-if="!homeData.files.url"
      />
      <listItem
        icon="crop"
        label="위치 및 크기 수정"
        content="메인화면의 이미지의 위치나 크기를 수정할수 있습니다."
        v-if="homeData.files.url"
        @click="gridstack = true"
      />
    </fileUploader>
    <gridstack v-if="gridstack" :dialog="gridstack" @update:dialog="gridstack = $event" />
  </cardViewFile>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import cardViewFile from "@/components/cardView/cardViewFile.vue";

export default {
  components: {
    cardViewFile,
    fileUploader: defineAsyncComponent(() =>
      import("@/components/file/fileUploader.vue")
    ),
    gridstack: defineAsyncComponent(() =>
      import("@/modules/gridstack/gridstackDialog.vue")
    ),
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
  },
  data() {
    return {
      fileUploader: false,
      gridstack: false,
    };
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.fileUploader = true;
      this.handleScrollToAction("previewHome");
    },
    updateDialog(value) {
      this.gridstack = value;
    },
  },
};
</script>

<style scoped></style>
