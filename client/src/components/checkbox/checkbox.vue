<template>
  <button :class="['checkbox', { selected: isChecked }]" @click="handleClick">
    <button class="icon_20">
      <icon class="icon_18" v-if="!isChecked"><boxCleared /></icon>
      <icon class="icon_18" v-if="isChecked"><boxChecked /></icon>
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

</style>
