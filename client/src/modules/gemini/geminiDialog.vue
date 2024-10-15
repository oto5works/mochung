<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_modal">
      <chips>
        <chip
          v-for="(option, index) in promptOptions"
          :key="index"
          :selected="selected.includes(option.value)"
          :title="option.label"
          @click="selectOption(option.value)"
        >
        </chip>
      </chips>
    </div>
{{ result }}<br>
    {{ selected }}<br />
    {{ geminiLoading }}

    <div class="form-spacing" />

    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="handleGenerateAI()"
        ><span>다음 →</span></buttonDefault
      >
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";
import chip from "@/components/chip/chip.vue";
import chips from "@/components/chip/chips.vue";

export default {
  components: {
    chip,
    chips,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      selected: [],
      result: null,
    };
  },
  computed: {
    ...mapGetters({
      promptOptions: "getPromptOptions",
      geminiLoading: "getGeminiLoading",
      geminiResult: "getGeminiResult",
      homeStyleOptions: "getHomeStyleOptions",
      homeData: "getHomeData",
      customData: "getCustomData",
    }),
  },
  methods: {
    ...mapActions(["generateAIDesign","updateFormDataAction"]),

    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    selectOption(value) {
      if (this.selected.includes(value)) {
        // 이미 선택된 경우, 선택 해제
        this.selected = this.selected.filter((item) => item !== value);
      } else {
        // 선택되지 않은 경우, 추가
        this.selected.push(value);
      }
    },
    async handleGenerateAI() {
      try {
        await this.generateAIDesign(this.selected);
        // 여기에 추가 작업 실행
        console.log("AI 디자인 생성 완료 후 실행되는 작업");
        // 예를 들어, 다음 페이지로 이동하거나 사용자에게 알림을 표시
        this.result = this.geminiResult
        this.updateDesign(this.geminiResult.customData)
      } catch (error) {
        console.error("AI 디자인 생성 중 오류 발생:", error);
        // 오류 처리 로직 추가
      }
    },
    
    updateDesign(result) {
      console.log("fff", result);

      const homeStyle = this.homeStyleOptions.find(
        (item) => item.value === result.homeStyle
      );
      console.log("fff:::", homeStyle);
      const updateData = {
        customData: {
          ...this.customData,
          backgroundColor: result.backgroundColor,
          filter: result.filter,
          design: result.design,
          align: result.align,
          primaryColor: result.primaryColor,
          radius: result.radius,
          border: result.border,
          shadow: result.shadow,
          fontSize: result.fontSize,
          fontColor: result.fontColor,
          fontFamily: result.fontFamily,
          fontWeight: result.fontWeight,
          stamp: result.stamp,
        },
      };
      if (result) {
        this.homeData.style = homeStyle.value;
        this.homeData.item = homeStyle.item;
        this.updateFormDataAction(updateData);
      }
    },
  },
};
</script>
