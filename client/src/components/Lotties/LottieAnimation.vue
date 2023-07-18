<template>
  <div :style="containerStyle">
    <Vue3Lottie :animationData="animationData" :options="options" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
  components: {
    Vue3Lottie,
  },
  props: {
    lottie: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 200
    },
    height: {
      type: [Number, String],
      default: 200
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  data() {
    return {
      animationData: null
    }
  },
  computed: {
    containerStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        color: this.color
      }
    },
    options() {
      return {
        loop: true,
        autoplay: true,
        animationData: this.animationData
      }
    }
  },
  watch: {

  }
}
</script>