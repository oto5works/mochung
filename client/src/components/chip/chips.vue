<!-- tabs.vue -->
<template>
  <div class="chips">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue(value) {
      this.$emit("update:modelValue", value); // 부모 컴포넌트로 이벤트 전파
    },
  },
};
</script>

<style scoped>
.chips {
  position: relative;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
}
</style>
