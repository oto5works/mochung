<template>
  <button
    class="tab"
    :class="{
      selected: isSelected,
      design3: design === 'design3',
      border: border,
    }"
    @click="selectTab"
  >
    <span>{{ title }}</span>
    <slot></slot>
    <div class="underlay" />
    <div v-if="shadow"  class="shadow" />
  </button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    function: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
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
    ...mapGetters({
      design: "getDesign",
      shadow: "getShadow",
      border: "getBorder",
    }),
    isSelected() {
      // Only check if $parent.modelValue exists
      return (
        this.$parent.modelValue !== undefined &&
        this.$parent.modelValue === this.value
      );
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
.tab {
  color: rgb(var(--font-color));
  height: 28px;
  padding: 0 10px;
  font-size: 12px;
  border-radius: var(--border-radius_12);
}
.tab.design3 {
  color: rgb(var(--primary-color));
  opacity: 0.4;
  border-radius: 0;
}
.tab.selected {
  color: rgb(var(--primary-on));
  font-weight: 700;
}
.tab.selected .underlay {
  background-color: rgb(var(--primary-color));
}
.tab.selected .shadow {
  box-shadow: 0 10px 20px -10px rgba(var(--primary-color), 0.5);
}
.tab.selected.border {
  color: rgb(var(--primary-color));
}
.tab.selected.border .underlay {
  background-color: transparent;
  border: 1px solid rgb(var(--primary-color));
}
.tab.selected.design3 {
  color: rgb(var(--primary-color));
  opacity: 1;
  border-bottom: 1px solid currentColor;
}
.tab.design3 .shadow,
.tab.design3 .underlay {
  display: none;
}
</style>
