<template>
  <div class="tsParticles">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :options="options"
    />
  </div>
</template>

<script>
import { loadFull } from "tsparticles";
import { loadHeartShape } from "tsparticles-shape-heart";

export default {
  props: {
    color: { type: [String, Array, Object] },
    speed: { type: [String, Array, Object] },
    emitters: { type: [String, Array, Object] },
    shape: { type: [String, Array, Object] },
    opacity: { type: [Object, String] },
    move: { type: [Object, String] },
    number: { type: [Object, String] },
  },
  data() {
    return {
      options: {
        fullScreen: { enable: false },
        particles: {
          move: this.move,
          number: this.number,
          opacity: this.opacity,
          // 공통
          color: this.color,
          //life: { duration: { sync: true, value: 5 }, count: 1 },
          rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: { enable: true, speed: 30 },
          },
          tilt: {
            direction: "random",
            enable: true,
            value: { min: 0, max: 360 },
            animation: { enable: true, speed: 30 },
          },
          size: { value: 5, random: { enable: true, minimumValue: 3 } },
          roll: {
            enable: true,
            darken: { enable: true, value: 12 },
            enlighten: { enable: true, value: 12 },
            speed: { min: 5, max: 15 },
          },
          wobble: { enable: true, distance: 30, speed: { min: -7, max: 7 } },
          shape: this.shape,
        },
        emitters: this.emitters,
      },
    };
  },
  methods: {
    async particlesInit(engine) {
      await loadFull(engine);
      loadHeartShape(engine);
    },
  },
};
</script>

<style>
.tsParticles {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
#tsparticles {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
