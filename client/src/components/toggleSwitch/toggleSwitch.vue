<template>
  <button 
  class="switch" 
  :class="['listItem', { selected: modelValue }]"
  @click="updateValue($event)"
  >
    <span class="switch-slider"/>
    <div class="underlay"/>
  </button>
</template>

<script>
export default {
  name: 'ToggleSwitchButton',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
  border-radius: 14px;
}
.switch .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.switch:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
.switch.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-40));
}
.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch .switch-slider {
  position: absolute;
  display: block;
  content: '';
  top: 6px;
  left: 6px;
  width: 16px;
  height: 16px;
  transition: 0.4s;
  border-radius: 50%;
  background-color: rgb(var(--mio-theme-color-primary-40));
}
.switch.selected .switch-slider {
  transform: translateX(20px);
  background-color: rgb(var(--mio-theme-color-primary));
  box-shadow: 0 2px 6px 0px rgba(var(--mio-theme-color-primary),.6);
}
</style>
