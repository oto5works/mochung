<template>
  <div class="tooltipColor" v-click-outside="handleClickOutside">
    <Flicking
      ref="flicking"
      class="flicking-color"
      :options="{ moveType: 'freeScroll', bound: true, align: 'prev' }"
    >
      <!-- Color picker button -->
      <button class="color-wrap">
        <div class="color-item umbrella">
          <input
            class="opacity_0"
            @input="updateSelected($event)"
            @click.stop
            type="color"
          />
        </div>
      </button>

      <!-- Color options -->
      <button
        class="color-wrap"
        v-for="(item, index) in options"
        :key="index"
        @click="selectColor(item)"
        :class="{ selected: item.value === modelValue }"
      >
        <div class="color-item">
          <span
            v-for="(color, index) in getColorArray(item.value)"
            :key="index"
            :style="{ backgroundColor: color }"
          ></span>
        </div>
      </button>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import vClickOutside from "v-click-outside";
const { bind, unbind } = vClickOutside.directive;
import "@/components/tooltip/tooltip.scss";

export default {
  components: { Flicking },
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
    modelValue: { type: [String, Array], default: "#A8D8EA" },
    options: { type: Array, required: true },
    dialog: { type: Boolean, required: true },
  },
  emits: ["update:modelValue", "update:dialog"],
  methods: {
    selectColor(option) {
      this.$emit("update:modelValue", option.value);
    },
    updateSelected(event) {
      event.stopPropagation();
      this.$emit("update:modelValue", event.target.value);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    getColorArray(value) {
      return Array.isArray(value) ? value : [value];
    },
    handleClickOutside() {
      this.updateDialog(false);  // 외부 클릭 시 dialog 값을 false로 설정
    },
  },
};
</script>

<style scoped>

</style>
