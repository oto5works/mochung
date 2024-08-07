<template>
  <div class="design">
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 37" 
    role="presentation"
  >
    <g>
      <slot />
    </g>
  </svg>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.design {
  position: relative;
  width: auto;
  height: 80%;
}
svg {
  height: 100%;
}

</style>