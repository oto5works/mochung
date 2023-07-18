<template>
  <svg xmlns="http://www.w3.org/2000/svg" 
    :width="width" 
    :height="height" 
    viewBox="0 0 256 256" 
    :aria-labelledby="svg" 
    role="presentation"
  >
    <title :id="svg" lang="en">{{svg}} svg</title>
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    svg: {
      type: String,
      default: 'box'
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
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