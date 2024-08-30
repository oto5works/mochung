<template>
  <div class="formField formArea" :class="formFieldClasses">
    <div class="formField-wrap">
      <div class="formField-content">
        <div class="formField-input">
          <textarea
            rows="4"
            :value="modelValue"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
          <label>{{ label }}</label>
        </div>
      </div>
    </div>
    <div class="formField-details" :class="{ spacing: spacing }">
      <div class="messages" v-if="!isValid">
        <buttonDefault variant="tonal" height="14" :icon="true">
          <icon class="icon_10"><warning /></icon>
        </buttonDefault>
        <span>{{ errorMessage }}</span>
      </div>

      <div class="messages" v-if="isValid && hint">
        <buttonDefault variant="tonal" height="14" :icon="true">
          <icon class="icon_10"><question /></icon>
        </buttonDefault>
        <span>{{ hint }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import question from "@/components/icon/question";
import warning from "@/components/icon/warning";
import "@/components/formField/formField.scss";

export default {
  components: { question, warning },
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
    hint: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    rules: {
      type: [Array, String, Object],
      default: () => [],
    },
    spacing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    isValid() {
      return this.rules.every(rule => rule(this.modelValue) === true);
    },
    errorMessage() {
      for (const rule of this.rules) {
        const result = rule(this.modelValue);
        if (result !== true) return result;
      }
      return '';
    },
    formFieldClasses() {
      return {
        focus: this.isFocused,
        active: this.modelValue,
        invalid: !this.isValid,
      };
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
      // this.validate();
    },

    async validate() {
      this.errorMessage = ""; // 초기화
      for (const rule of this.rules) {
        const result = await rule(this.modelValue); // 비동기 함수 처리
        if (result !== true) {
          this.errorMessage = result; // errorMessage 업데이트
          return; // 유효하지 않은 경우 더 이상 검사하지 않고 종료
        }
      }
    },
  },
};
</script>
