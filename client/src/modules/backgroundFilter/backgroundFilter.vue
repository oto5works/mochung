<template>
  <div class="backgroundFilter" :class="{ [this.filter]: true }"></div>
</template>
<script>
import "@/modules/backgroundFilter/backgroundFilter.scss";

export default {
  props: {
    filter: { type: String },
  },
};
</script>

<style scoped>
.backgroundFilter {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
}
</style>
