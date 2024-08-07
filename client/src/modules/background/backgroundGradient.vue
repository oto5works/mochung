<!-- backgroundGradient.vue -->
<template>
  <canvas ref="gradientCanvas" class="previewGradient" data-transition-in />
</template>

<script>
import { Gradient } from '@/components/component/background/gradient.js';

export default {
props: {
  customData: { type: Object },
},
mounted() {
  this.initGradient('.previewGradient');
},
watch: {
  'customData.styleBackground': 'handleDataChange',
  'customData.gradient1': 'handleDataChange',
  'customData.gradient2': 'handleDataChange',
  'customData.gradient3': 'handleDataChange',
},
methods: {
  handleDataChange() {
    // Debounce the function call
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.initGradient('.previewGradient');
    }, 200); // Adjust the debounce time as needed
  },
  initGradient(selector) {
    const gradient = new Gradient();
    gradient.initGradient(selector);
  }
}
};
</script>
