<template>
  <cardView icon="color" :title="title" @click="dialog = true">
    <div class="cardView-content">
      <div class="color-item">
        <span
          v-for="(c, index) in colorArray"
          :key="index"
          :style="{ backgroundColor: c }"
        ></span>
      </div>
      <span>{{ selectedColor }}</span>
    </div>
    <tooltipColor
      v-if="dialog"
      :options="options"
      v-model="color"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>

<script>
import { defineAsyncComponent } from "vue";
import color from "@/components/icon/color.vue";

export default {
  components: {
    color,
    tooltipColor: defineAsyncComponent(() =>
      import("@/components/tooltip/tooltipColor.vue")
    ),
  },
  props: {
    modelValue: {
      type: [String, Array],
      default: "#000000",
    },
    options: { type: Array },
    title: { type: String, default: "Color Picker" },
  },
  data() {
    return {
      dialog: false,
      color: this.modelValue,
    };
  },
  watch: {
    modelValue(newVal) {
      this.color = newVal;
    },
    color(newVal) {
      this.$emit("update:modelValue", newVal);
    },
  },
  computed: {
    selectedColor() {
      if (Array.isArray(this.color)) {
        const selectedColor = this.options.find((option) =>
          option.value.every((color) => this.color.includes(color))
        );
        return selectedColor ? selectedColor.title : this.color.join(", ");
      } else {
        const selectedColor = this.options.find(
          (option) => option.value === this.color
        );
        return selectedColor ? selectedColor.title : this.color;
      }
    },
    colorArray() {
      return Array.isArray(this.color) ? this.color : [this.color];
    },
  },
  methods: {
    toggleDialog(event) {
      event.stopPropagation();
      this.dialog = !this.dialog;
    },
  },
};
</script>

<style scoped>
.cardView-content {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-item {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(var(--mio-theme-color-on-background), 0.1);
  overflow: hidden;
}
.color-item span {
  flex: 1 1 50%;
}
</style>
