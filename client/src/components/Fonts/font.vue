<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    viewBox="0 0 160 40" 
    :aria-labelledby="font" 
    role="presentation"
  >
    <title :id="font" lang="en">{{font}} font</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    font: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 160
    },
    height: {
      type: [Number, String],
      default: 40
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>