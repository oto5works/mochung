<template>
  <button class="buttonThumbTab">
    <button class="thumb">

    </button>
    <span>{{ label }}</span>
  </button>
</template>

<script>
export default {
  props: {
    function: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: false,
    },
  },
};
</script>

<style scoped>
/* common */
.buttonThumbTab {
  position: relative;
  width: fit-content;
  gap: 8px;
  margin-right: 24px;
  padding: 12px 0;
}
.buttonThumbTab .thumb {
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 12px;
  overflow: hidden;
}
.buttonThumbTab span {
  color: rgb(var(--mio-theme-color-on-background-40));
  font-size: 18px;
}
.buttonThumbTab.selected span {
  color: rgb(var(--mio-theme-color-primary));
  font-weight: 700;
}
</style>
