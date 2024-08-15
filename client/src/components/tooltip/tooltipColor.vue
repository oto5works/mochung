<template>
  <div class="tooltipColor">
    <Flicking
      ref="flicking"
      class="flicking-color"
      :options="{ moveType: 'freeScroll', bound: true, align: 'prev' }"
    >
      <button class="color-item">
        <div class="color umbrella">
            <input class="opacity_0" @input="updateSelected($event)" @click.stop type="color" />
        </div>
      </button>
      <button
        class="color-item"
        v-for="(item, index) in options"
        :key="index"
        @click="selectColor(item)"
        :class="{ selected: item.value === selected }"
      >
        <div class="color">
            <!--
          <span
            v-for="(color, colorIndex) in item.value"
            :key="colorIndex"
            :style="{ backgroundColor: color }"
          ></span>
          -->
          <span
            :style="{ backgroundColor: item.value }"
          ></span>
        </div>
      </button>
    </Flicking>
  </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";

export default {
  components: { Flicking, },
  props: {
    selected: { type: [String, Array], default: "#A8D8EA" },
    options: { type: Array },
  },
  methods: {
    selectColor(option) {
    this.$emit("update:selected", option.value); // 부모에게 이벤트 전송
  },
  updateSelected(event) {
    event.stopPropagation(); // 부모 요소로 이벤트가 전파되지 않도록 함
    this.$emit("update:selected", event.target.value); // 부모에게 이벤트 전송
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
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-on-background),.3);
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
.color-item {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
}
.color-item.selected {
  border: 1px solid rgb(var(--mio-theme-color-primary));
}
.color {
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(var(--mio-theme-color-on-background), 0.1);
}
.color span {
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

</style>
