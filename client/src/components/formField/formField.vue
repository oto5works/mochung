<template>
  <div class="formField" :class="formFieldClasses">
    <div class="formField-wrap">
      <div class="formField-content">
        <slot></slot>
        <div class="formField-input">
          <input
            :type="currentInputType"
            :value="modelValue"
            @input="handleInput"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />

          <!-- Show/Hide Password Button -->
          <buttonDefault
            v-if="type === 'password'"
            class="formField-button password"
            variant="tonal"
            height="24"
            :icon="true"
            :class="{ selected: showPassword }"
            @click="togglePasswordVisibility"
          >
            <icon class="icon_14">
              <eye v-if="!showPassword" />
              <eyeClosed v-if="showPassword" />
            </icon>
          </buttonDefault>

          <!-- Date/Time Picker Button -->
          <buttonDefault
            v-if="type === 'date' || type === 'time'"
            class="formField-button"
            variant="tonal"
            height="24"
            :icon="true"
          >
            <icon class="icon_14">
              <clock v-if="type === 'time'" />
              <date v-if="type === 'date'" />
            </icon>
          </buttonDefault>

          <label>{{ label }}</label>
          <div class="formField-underline" />
        </div>
      </div>
      <div class="formField-overlay" />
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
import date from "@/components/icon/date";
import clock from "@/components/icon/clock";
import eye from "@/components/icon/eye";
import eyeClosed from "@/components/icon/eyeClosed";
import warning from "@/components/icon/warning";
import "@/components/formField/formField.scss";

export default {
  components: { question, date, clock, eye, eyeClosed, warning },
  props: {
    label: {
      type: String,
      required: true,
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
      errorMessage: "",
      showPassword: false,
    };
  },
  computed: {
    isValid() {
      return this.errorMessage === "";
    },
    formFieldClasses() {
      return {
        focus: this.isFocused,
        active: this.modelValue,
        invalid: !this.isValid,
        date: ["date", "time"].includes(this.type),
      };
    },
    currentInputType() {
      return this.type === "password" && this.showPassword ? "text" : this.type;
    },
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
      this.validate();
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

    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
