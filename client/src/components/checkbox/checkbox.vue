<template>
  <button :class="['checkbox', { selected: isChecked }]" @click="handleClick">
    <button class="icon_24">
      <icon v-if="!isChecked"><boxCleared /></icon>
      <icon v-if="isChecked" class="checked"><boxChecked /></icon>
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
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    isChecked() {
      if (this.value !== undefined) {
        console.log ('if = True')
        return this.modelValue === this.value;
      }
      console.log ('if = False')
      return this.modelValue === true;
    },
  },
  methods: {
    handleClick(event) {
      if (this.clickEvent) {
        this.updateValue();
      }
    },
    updateValue() {
      if (this.value !== undefined) {
        this.$emit("update:modelValue", this.isChecked ? null : this.value);
      } else {
        this.$emit("update:modelValue", !this.isChecked);
      }
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
.checkbox.hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.checkbox.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
</style>
