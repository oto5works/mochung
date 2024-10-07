<template>
  <div class="tsParticles">
    <div class="sp_16"/>
    shouldRenderConfetti = {{ shouldRenderConfetti }}<br>
    {{ effect }}
    <Particles
      v-if="shouldRenderConfetti"
      ref="particlesRef"
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
    effect: { type: Object },
  },
  data() {
    return {
      shouldRenderConfetti: false,
      emitters: "",
      shape: "",
      opacity: "",
      move: "",
      number: "",
      options: {},
    };
  },
  mounted() {
    // Effect 초기화
    if (this.effect.config === "falling") {
      this.setFalling();
    } else if (this.effect.config === "explosion") {
      this.setExplosion();
    } else if (this.effect.config === "side") {
      this.setSide();
    }

    // Shape 초기화
    if (this.effect.shape === "confetti") {
      this.setConfetti();
    } else if (this.effect.shape === "heart") {
      this.setHeart();
    } else if (this.effect.shape === "sakura") {
      this.setSakura();
    }
    this.reloadEffectConfetti();
  },

  watch: {
    "effect.color": function () {
      this.reloadEffectConfetti();
    },
    "effect.config": function (newValue) {
      this.setupEffect(newValue);
      this.reloadEffectConfetti();
    },
    "effect.shape": function (newValue) {
      this.setupShape(newValue);
      this.reloadEffectConfetti();
    },
  },

  methods: {
    destroyParticles() {
    console.log("destroyParticles called");

    // particlesInit 이벤트 리스너 제거
    window.removeEventListener("particlesInit", this.particlesInit);

    // 입자 효과 비활성화
    this.shouldRenderConfetti = false;

    // 입자 효과와 관련된 파라미터 초기화
    this.move = {};
    this.number = {};
    this.opacity = {};
    this.emitters = "";
    this.shape = "";
    this.options = {};
  },



    reloadEffectConfetti() {
      this.shouldRenderConfetti = false;
      this.$nextTick(() => {
        this.shouldRenderConfetti = true;
        this.updateOptions();
      });
    },
    updateOptions() {
      this.options = {
        fullScreen: { enable: false },
        particles: {
          move: this.move,
          number: this.number,
          opacity: this.opacity,
          color: this.effect.color,
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
      };
    },
    async particlesInit(engine) {
      await loadFull(engine);
      loadHeartShape(engine);
    },
    setFalling() {
      this.move = {
        direction: "bottom",
        enable: true,
        gravity: {
          enable: true,
          maxSpeed: 0.3,
        },
        outModes: {
          default: "out",
        },
        size: true,
        speed: {
          min: 0.5,
          max: 1,
        },
      };
      this.number = {
        value: 1,
        density: {
          enable: true,
          area: 9,
        },
      };
      this.opacity = { value: 1 };
      this.emitters = "";
    },
    setSide() {
      this.move = {
        decay: 0.05,
        direction: "top",
        enable: true,
        gravity: {
          enable: true,
        },
        outModes: {
          top: "none",
          default: "destroy",
        },
        speed: {
          min: 10,
          max: 40,
        },
      };
      this.number = { value: 0 };
      this.opacity = { value: 1 };
      this.emitters = [
        {
          position: { x: 0, y: 20 },
          rate: { quantity: 5, delay: 0.3 },
          particles: {
            move: { direction: "top-right", outModes: { default: "destroy" } },
          },
          life: { count: 14, duration: 1, delay: 0 },
        },
        {
          position: { x: 100, y: 20 },
          rate: { quantity: 5, delay: 0.3 },
          particles: {
            move: { direction: "top-left", outModes: { default: "destroy" } },
          },
          life: { count: 14, duration: 1, delay: 0 },
        },
      ];
    },
    setExplosion() {
      this.move = {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 10,
        },
        speed: {
          min: 10,
          max: 20,
        },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      };
      this.number = { value: 0 };
      this.opacity = {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      };
      this.emitters = {
        size: { width: 0, height: 0 },
        rate: { quantity: 150, delay: 0.1 },
        life: { count: 14, duration: 0.1, delay: 0.8 },
      };
    },
    setConfetti() {
      this.shape = { type: ["circle", "square"] };
    },
    setHeart() {
      this.shape = { type: ["heart"] };
    },
    setSakura() {
      this.shape = {
        type: "image",
        options: {
          image: [
            {
              src: "https://jwpggit.github.io/storage/image/moInv/sakura1.svg",
              width: 256,
              height: 256,
              particles: {
                size: { value: 10, random: { enable: true, minimumValue: 4 } },
              },
            },
            {
              src: "https://jwpggit.github.io/storage/image/moInv/sakura2.svg",
              width: 256,
              height: 256,
              particles: {
                size: { value: 10, random: { enable: true, minimumValue: 4 } },
              },
            },
            {
              src: "https://jwpggit.github.io/storage/image/moInv/sakura3.svg",
              width: 256,
              height: 256,
              particles: {
                size: { value: 10, random: { enable: true, minimumValue: 4 } },
              },
            },
          ],
        },
      };
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
