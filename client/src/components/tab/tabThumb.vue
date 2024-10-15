<template>
  <button class="tabThumb" :class="{ selected: isSelected }" @click="selectTab">
    <button class="thumb">
      <component :is="currentComponent" class="svgColor" />
    </button>
    <span>{{ title }}</span>
    <slot></slot>
  </button>
</template>

<script>
import bride from "@/components/svg/bride.vue";
import groom from "@/components/svg/groom.vue";

export default {
  components: { bride, groom },
  props: {
    title: {
      type: String,
      default: false,
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
    currentComponent() {
      const brideTerms = ["bride", "신부", "신부님"];
      const groomTerms = ["groom", "신랑", "신랑님"];

      if (brideTerms.includes(this.title.toLowerCase())) {
        return "bride";
      } else if (groomTerms.includes(this.title.toLowerCase())) {
        return "groom";
      } else {
        return null;
      }
    },
    isSelected() {
      return this.$parent.modelValue === this.value;
    },
  },
  methods: {
    selectTab() {
      this.$parent.updateValue(this.value);
    },
  },
};
</script>

<style scoped>
/* common */
.tabThumb {
  position: relative;
  width: fit-content;
  gap: 8px;
  margin-right: 32px;
  padding: 12px 0;
}
.tabThumb .thumb {
  position: relative;
  width: 28px;
  border-radius: 10px;
  overflow: hidden;
}
.tabThumb span {
  color: rgb(var(--mio-theme-color-on-background-40));
  font-size: 15px;
}
.tabThumb.selected span {
  color: rgb(var(--mio-theme-color-primary));
  font-weight: 600;
}
</style>
