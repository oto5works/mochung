<template>
  <button class="cardView" @click="toggleDialog">
    <div class="cardView-header">
      <icon class="icon_24"><color /></icon>
      <div class="title">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="cardView-content">
      <div class="item-color" :style="{ background: selected }" />
      <span>{{ selectedColor }}</span>
    </div>
    <div class="underlay" />
    <tooltipColor v-if="dialog" :options="options" :selected="selected" @update:selected="updateColor" />
  </button>
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
    title: {
      type: String,
      default: "",
    },
    selected: { type: [String, Array], default: "#A8D8EA" },
    options: { type: Array },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    selectedColor() {
      const selectedColor = this.options.find(
        (option) => option.value === this.selected
      );
      return selectedColor ? selectedColor.title : this.selected;
    },
  },
  methods: {
    updateColor(newColor) {
      this.$emit('update:selected', newColor); // 부모의 부모에게 이벤트 전송
    },
    toggleDialog(event) {
      event.stopPropagation();
      this.dialog = !this.dialog;
    },
    hideDialog() {
      if (this.dialog) {
        this.dialog = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.hideDialog);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.hideDialog);
  },
};
</script>

<style scoped>
.cardView {
  position: relative; /* Ensure the cardView is the reference for absolute positioning */
  justify-content: space-between;
  min-height: 72px;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
}
.cardView .underlay {
  background-color: rgb(var(--mio-theme-color-primary-05));
}
.cardView:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.cardView-header {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 18px;
}
.title-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  align-items: center;
  min-height: 24px;
  font-size: 16px;
  font-weight: 500;
}
.content {
  font-size: 13px;
  line-height: 140%;
  color: rgb(var(--mio-theme-color-on-background-70));
}
.cardView-content {
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.cardView-content .item-color {
  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  outline: 1px solid rgb(var(--mio-theme-color-primary-05));
}

/* Full-screen scrim */
.overlay__scrim {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

/* Popup content positioned relative to the cardView */
.overlay__content {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(8px); /* Adjust as needed for positioning */
  background: white;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1100; /* Higher than the scrim */
}
</style>
