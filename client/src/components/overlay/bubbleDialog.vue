<!-- colorDialog.vue -->
<template>
  <div class="overlay-container" v-if="dialog">
    <div class="overlay bubbleDialog">
      <div class="overlay__scrim" @click="closeDialog" />
      <div class="overlay__content">
        <div class="dialog">
          <div class="dialog-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/components/overlay/overlay.scss";

export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.overlay.bubbleDialog {
  position: relative;
}
.bubbleDialog .overlay__content {
  position: absolute;
  top: -8px;
  right: 0;
  max-width: 80%;
}
.homeSettings .bubbleDialog .overlay__content {
  max-width: 200%;
}
.bubbleDialog .dialog {
  border-radius: var(--border-radius-16);
  background-color: var(--background-color);
  padding: 16px 0;
  -webkit-box-shadow: 0 10px 20px -10px var(--background-on);
  box-shadow: 0 10px 20px -10px var(--background-on);
}
.bubbleDialog .dialog::after {
  position: absolute;
  content: "";
  border-style: solid;
  border-width: 0 8px 12px;
  border-color: var(--background-color) transparent;
  display: block;
  top: -12px;
  right: 36px;
}
.bubbleDialog .dialog-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: unset;
  margin: 0;
}

@media all and (max-width: 1023px) {
  .bubbleDialog .overlay__content {
    max-width: 80%;
  }
  .homeSettings .bubbleDialog .overlay__content {
    max-width: 200%;
  }
}
</style>
