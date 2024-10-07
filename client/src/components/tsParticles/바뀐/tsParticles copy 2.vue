<template>
  <div class="tsParticles">
    <Particles
      v-if="shouldRenderParticles"
      ref="particlesRef"
      id="tsparticles"
      :options="options"
    />
  </div>
</template>

<script>
import { tsParticles } from "tsparticles";

export default {
  data() {
    return {
      shouldRenderParticles: true,
      options: {
        fullScreen: { enable: false },
        particles: {
          number: { value: 50 }, // 입자 수 줄이기
          size: { value: 5, random: true }, // 사이즈 랜덤화
          move: {
            enable: true,
            speed: 2, // 이동 속도 조정
            outModes: { default: "out" },
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
        },
      },
    };
  },
  mounted() {
    this.loadParticles();
  },
  methods: {
    async loadParticles() {
      await tsParticles.load(this.$refs.particlesRef, this.options);
    },
    destroyParticles() {
      this.shouldRenderParticles = false;
      tsParticles.dom.length = 0; // 입자 제거
    },
  },
};
</script>

<style scoped>
.tsParticles {
  position: absolute;
  display: block;
  width: 100%;
  height: 120%;
  top: 0;
  left: 0;
  z-index: 3;
}
#tsparticles {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
