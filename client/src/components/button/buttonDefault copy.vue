<template>
  <button class="buttonDefault" :style="{ color: color }">
    <div class="overlay" :style="{ color: onColor }" />
    <div class="content" :style="{ color: onColor }">
      <slot></slot>
    </div>
    <div class="outline" />
    <div class="underlay" />
    <div class="shadow" />
  </button>
</template>

<script>
import { setOnColor } from "@/services/function";

export default {
  props: {
    color: {
      type: String,
      default: null,
    },
  },
  computed: {
    onColor() {
      if (this.color) {
        // Call setOnColor function with the color prop
        return setOnColor(this.color);
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>
.buttonDefault {
  color: var(--mio-theme-color-primary);
  font-size: 14px;
  font-weight: 700;
}
.buttonDefault .content {
  color: var(--mio-theme-color-on-primary);
}
.buttonDefault .overlay {
  color: var(--mio-theme-color-on-primary);
  background-color: currentColor;
}
.buttonDefault .underlay {
  color: var(--mio-theme-color-primary);
  background-color: currentColor;
}
.buttonDefault .outline {
  display: none;
  border-style: solid;
  border-width: 1px;
}
.buttonDefault .shadow {
  display: none;
}

/*-- config --*/
.config .buttonDefault {
  color: var(--po-po-pc);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight);
}
.config .buttonDefault .content {
  color: var(--po-po-pc);
}
.config .buttonDefault .overlay {
  color: var(--pc-pc-tr);
}
.buttonDefault .overlay {
  color: var(--po-po-pc);
}
.buttonDefault .underlay {
  color: var(--pc-pc-tr);
}
.config .buttonDefault .outline {
  display: var(--border-display);
  border-color: var(--po-po-pc);
}
.config .buttonDefault .shadow {
  display: var(--box-shadow-display);
  -webkit-box-shadow: 0 10px 20px -10px var(--primary-color);
  box-shadow: 0 10px 20px -10px var(--primary-color);
}
</style>
