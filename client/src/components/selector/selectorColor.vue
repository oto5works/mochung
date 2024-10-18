<template>
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
      :class="{ selected: item === modelValue }"
    >
      <div class="color-item">
        <span :style="{ backgroundColor: `rgb(${item.join(',')})` }"></span>
      </div>
    </button>
  </Flicking>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@/components/tooltip/tooltip.scss";

export default {
  components: { Flicking },
  props: {
    modelValue: { type: [String, Array], default: "#A8D8EA" },
    options: { type: Array, required: true },
  },
  emits: ["update:modelValue", "update:dialog"],
  methods: {
    selectColor(option) {
      this.$emit("update:modelValue", option);
    },
    updateSelected(event) {
      event.stopPropagation();
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped></style>
