<!-- textArea.vue -->
<template>
  <div class="form-field" :class="{ focus: isFocused, active: modelValue }">
    <div class="textArea">
      <div class="textField-flex">
        <div class="textField-space" />
        <div class="textField-input">
          <textarea
            :value="modelValue"
            @input="handleInput"
            :placeholder="placeholder"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
        </div>

        <slot></slot>
        <div class="textField-space" />
      </div>
      <div class="textField-overlay" />
      <div class="textField-outline">
        <div class="textField-outline__start" />
        <div class="textField-outline__notch">
          <label>{{ label }}</label>
        </div>
        <div class="textField-outline__end" />
      </div>
      <div class="textField-underline" />
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return { isFocused: false };
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
