<template>
  <article id="previewSurvey" :class="design">
    <sectionView v-if="surveyData.fnSurvey">
      <div class="previewSurvey">
        <div class="--font-size_11 font-weight_700 width_100">NOTICE</div>
        <div class="sp_24" />
        <div class="--font-size_32 font-weight_700 width_100">
          {{ surveyData.title }}
        </div>
        <div class="sp_8" />
        <div class="preview-tiptap" v-html="surveyData.content" />
        <div class="sp_72" />
        <button
          class="--font-size_13 font-weight_700 text-decoration_underline"
          @click="dialog = true"
        >
          <span>RESPOND HERE</span>
        </button>
      </div>
      <surveyDialog
        v-if="dialog"
        :dialog="dialog"
        @update:dialog="dialog = $event"
      />
    </sectionView>
  </article>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    surveyDialog: defineAsyncComponent(() =>
      import("@/preview/survey/surveyDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
      design: "getDesign",
    }),
  },
};
</script>

<style scoped>
.previewSurvey {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 196px 40px 88px 40px;
}
.design1 {
  background-color: rgb(var(--primary-color));
  color: rgb(var(--primary-on));
}
</style>
