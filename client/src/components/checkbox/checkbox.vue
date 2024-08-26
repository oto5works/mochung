<template>
  <button
    :class="['checkbox', { selected: modelValue }]"
    @click="handleClick"
  >
    <button class="icon_24">
      <icon v-if="!modelValue"><boxCleared /></icon>
      <icon v-if="modelValue" class="checked"><boxChecked /></icon>
      <div class="underlay" />
    </button>
    <span v-if="label">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";
import checkbox from "@/components/checkbox/checkbox.scss";

export default {
  components: {
    checkbox,
    boxCleared: defineAsyncComponent(() =>
      import("@/components/icon/boxCleared.vue")
    ),
    boxChecked: defineAsyncComponent(() =>
      import("@/components/icon/boxChecked.vue")
    ),
  },
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: [Boolean, String],
      default: false,
    },
    clickEvent: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleClick(event) {
      if (this.clickEvent) {
        this.updateValue(event);
      }
    },
    updateValue() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
/* common */
.checkbox {
  width: fit-content;
  height: 24px;
  gap: 8px;
}
.checkbox span {
  text-align: left;
  font-size: 14px;
  color: rgb(var(--mio-theme-color-on-background));
}
.checkbox.selected span {
  font-weight: 500;
  color: rgb(var(--mio-theme-color-on-background));
}
.checkbox .checked {
  stroke: rgb(var(--mio-theme-color-on-primary));
}
.checkbox .underlay {
border-radius: 8px;
  }
.checkbox:hover .underlay,
.checkbox.hover .underlay
{
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.checkbox.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
</style>
