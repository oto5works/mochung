<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 375 406"
    :aria-labelledby="icon"
    role="presentation"
  >
    <title :id="icon" lang="en"></title>
    <g>
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 0,
    },
    height: {
      type: [Number, String],
      default: 0,
    },
    color: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  flex-shrink: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 1.4;
}
</style>
