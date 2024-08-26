<template>
  <div class="tooltipColor" v-click-outside="() => updateDialog(false)">
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

export default {
  components: { Flicking },
  directives: {
    clickOutside: vClickOutside.directive,
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
  },
};
</script>

<style scoped>
.tooltipColor {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 70%;
  right: 4%;
  width: fit-content;
  max-width: 80%;
  height: 56px;
  border-radius: 16px;
  background-color: rgb(var(--mio-theme-color-background));
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-on-background), 0.3);
}
.tooltipColor::after {
  position: absolute;
  content: "";
  border-style: solid;
  border-width: 8px 6px 0;
  border-color: rgb(var(--mio-theme-color-background)) transparent;
  display: block;
  bottom: -8px;
  right: 36px;
}
.flicking-color {
  width: 100%;
  padding: 0 16px;
}

.color-wrap {
  position: relative;
  display: flex;
  
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}
.color-wrap.selected {
  border: 1px solid rgb(var(--mio-theme-color-primary));
}


.color-item {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 1px solid rgba(var(--mio-theme-color-on-background), 0.1);
  overflow: hidden;
}
.color-item span {
  flex: 1 1 50%;
}





.color-segment {
  flex: 1;
}
.umbrella {
  background: conic-gradient(
    from 90deg,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red,
    violet
  );
}
.opacity_0 {
  opacity: 0;
}
</style>
