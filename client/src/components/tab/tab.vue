<template>
  <button 
    class="tab" 
    :class="{ selected: isSelected }" 
    @click="selectTab"
  >
    <span>{{ title }}</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    function: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: null,
    },
    modelValue: {
      type: [String, Number],
      default: null,
    },
  },
  computed: {
    isSelected() {
      // Only check if $parent.modelValue exists
      return this.$parent.modelValue !== undefined && this.$parent.modelValue === this.value;
    },
  },
  methods: {
    selectTab() {
      // Only update if $parent.modelValue exists
      if (this.$parent.modelValue !== undefined) {
        this.$parent.updateValue(this.value);
      }
    },
  },
};
</script>

<style scoped>
/* common */
.tab {
  color: rgb(var(--mio-theme-color-on-background-40));
  width: fit-content;
  height: 40px;
  gap: 8px;
  font-size: 14px;
  margin-right: 16px;
}
.tab.selected {
  color: rgb(var(--mio-theme-color-primary));
  font-weight: 700;
}
</style>
