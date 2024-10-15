<template>
  <cardViewTitle :title="title" v-model="optionTitle" @click="openDialog">
    <dialogModal :dialog="dialog" @update:dialog="updateDialog" :title="title">
      <titleArticle class="pa_modal" title="FIELDS OF EXPRESSION" />
      <formField
        class="pa_modal"
        label="제목"
        v-model="optionTitle"
        :spacing="true"
      />
      <titleSection class="pa_modal" title="추천 문구" />
      <chips class="pa_modal" v-model="optionTitle">
        <chip
          v-for="(recommendation, index) in recommendTitleOptions[option]"
          :key="index"
          :value="recommendation"
          :title="recommendation"
          :selected="recommendation === optionTitle"
          @click="selectRecommendation(recommendation)"
        >
        </chip>
      </chips>
      <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="updateDialog(false)"
          ><span>Confirm</span></buttonDefault
        >
      </div>
    </dialogModal>
  </cardViewTitle>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import cardViewTitle from "@/components/cardView/cardViewTitle.vue";
import chips from "@/components/chip/chips.vue";
import chip from "@/components/chip/chip.vue";

export default {
  components: { cardViewTitle, chip, chips },
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
