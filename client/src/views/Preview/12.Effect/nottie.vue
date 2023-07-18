<template>
  <div class="lottie-container" style="width: 100%; height: auto;">
    <Vue3Lottie :animationData="ButterflyHearts" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import ButterflyHearts from '@/assets/json/ButterflyHearts.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
        ButterflyHearts,
    }
  },
}
</script>

