<template>
  <button class="chip" :class="{ selected: selected }">
    <icon class="check icon_16"><check /></icon>
    <span>{{ title }}</span>
    <slot></slot>
    <div class="underlay" />
    <div class="shadow" />
  </button>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.chip {
  position: relative;
  gap: 4px;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
  color: rgb(var(--mio-theme-color-primary));
  font-size: 11px;
  min-height: 32px;
}
.chip .shadow {
  display: none;
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-primary), 0.3);
}
.chip .check {
  display: none;
}
.chip .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.chip .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.chip:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
.chip.selected {
  font-weight: 500;
}
.chip.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-40));
}
.chip.selected .check {
  display: block;
}
.chip.selected .shadow {
  display: block;
}
.chip.disabled {
  color: rgb(var(--mio-theme-color-primary-40));
}
.chip.disabled .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
</style>
