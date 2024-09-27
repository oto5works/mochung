<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_24">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>

    <div class="pa_24">
      <surveySwitch />
      <enableView
        class="selected"
        v-if="!surveyData.fnSurvey"
        title="기능 이용 대기 중"
        content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요."
      />
    </div>

    <div v-if="surveyData.fnSurvey" class="pa_24">
      <div class="form-spacing" />
      <titleSection title="추천 문구" />

      <selectorTitle option="surveyData" />
      <div class="sp_8" />

      <tiptap v-model="surveyData.content" />
      <div class="form-spacing" />

      <titleSection title="추천 문구" />
      <chips>
        <chip
          v-for="(value, key) in surveyData.functions"
          :key="key"
          :selected="value"
          :title="surveyFunctionOptions[key]"
          @click="toggleOption(key)"
        >
        </chip>
      </chips>
      <div class="form-spacing" />
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import enableView from "@/components/enable/enableView.vue";
import surveySwitch from "@/modules/survey/surveySwitch.vue";
import chip from "@/components/chip/chip.vue";
import chips from "@/components/chip/chips.vue";
import tiptap from "@/components/tiptap/tiptap.vue";
import selectorTitle from "@/components/selector/selectorTitle.vue";

export default {
  components: {
    surveySwitch,
    enableView,
    chip,
    chips,
    tiptap,
    selectorTitle,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
      surveyFunctionOptions: "getSurveyFunctionOptions",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    toggleOption(functionName) {
      this.surveyData.functions[functionName] =
        !this.surveyData.functions[functionName];
    },
  },
};
</script>
