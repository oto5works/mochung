<template>
  <div class="tooltipMenu" v-click-outside="handleClickOutside">
    <slot></slot>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
const { bind, unbind } = vClickOutside.directive;
import "@/components/tooltip/tooltip.scss";

export default {
  components: {},
  directives: {
    clickOutside: {
      mounted(el, binding) {
        bind(el, { value: binding.value });
      },
      beforeUnmount(el) {
        unbind(el);
      },
    },
  },
  props: {
    dialog: { type: Boolean, required: true },
  },
  emits: ["update:modelValue", "update:dialog"],
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    handleClickOutside() {
      this.updateDialog(false); // 외부 클릭 시 dialog 값을 false로 설정
    },
  },
};
</script>