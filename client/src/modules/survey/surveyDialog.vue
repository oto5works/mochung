<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <fnTitle option="surveyData" />
      <tiptap v-model="surveyData.content" />
    </article>

    <article>
      <formTitle3 title="FIELDS OF EXPRESSION" />
      <surveyOptions />
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
</template>
<script>
import { mapGetters } from "vuex";
import fnTitle from "@/modules/functions/fnTitle.vue";
import tiptap from "@/modules/functions/tiptap.vue";
import surveyOptions from "@/modules/survey/surveyOptions.vue";

export default {
  components: {
    fnTitle,
    tiptap,
    surveyOptions,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.surveyData.fnSurvey = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>
