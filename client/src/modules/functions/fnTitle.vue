<template>
  <div>
    <formBox icon="titles" :title="title" @click="openDialog">
      <p>{{ optionTitle }}</p>
    </formBox>
    <modalDialog
      :dialog="dialog"
      @update:dialog="updateDialog"
      :title="title"
      :config="true"
    >
      <article>
        <textField type="text" label="제목" v-model="optionTitle" />
        <div class="width_100">
          <formTitle3 title="추천 문구" />
          <div class="flex flex-wrap_wrap --justify-content gap_4">
            <buttonCheck
              v-for="(recommendation, index) in recommendTitleOptions[option]"
              :key="index"
              @click="selectRecommendation(recommendation)"
              :selected="recommendation === optionTitle"
            >
              <span>{{ recommendation }}</span>
            </buttonCheck>
          </div>
        </div>
      </article>
      <div class="dialog-actions">
        <buttonText @click="updateDialog(false)">
          <span>취소</span>
        </buttonText>
        <buttonDefault @click="saveValue">
          <span>확인</span>
        </buttonDefault>
      </div>
    </modalDialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  props: {
    option: { type: String },
  },
  computed: {
    ...mapGetters({
      titles: "getTitle",
      recommendTitleOptions: "getRecommendTitleOptions",
    }),
    optionTitle: {
      get() {
        return this.titles[this.option] || "";
      },
      set(value) {
        this.updateTitleAction({ option: this.option, value });
      },
    },
    title() {
      // Map keyType to corresponding titles
      const titleMap = {
        homeData: "메인 문구",
        introData: "인트로 제목",
        infoData: "인포 제목",
        locationData: "예식 장소 제목",
        noticeData: "공지사항 제목",
        galleryData: "갤러리 제목",
        commentData: "방명록 제목",
        surveyData: "설문조사 제목",
        depositData: "계좌 정보 제목",
        albumData: "게스트용 앨범 제목",
      };
      return titleMap[this.option] || "";
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    ...mapActions(["updateTitleAction"]),
    openDialog() {
      this.dialog = true;
    },
    updateDialog(value) {
      this.dialog = value;
    },
    selectRecommendation(recommendation) {
      this.optionTitle = recommendation;
      this.dialog = false; // Close the dialog after selection if needed
    },
    saveValue() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.buttonSelect {
  max-width: 100%;
  padding: 4px 8px;
  border-radius: var(--border-radius-12);
}
</style>
