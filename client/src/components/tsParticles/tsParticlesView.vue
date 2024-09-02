<template>
  <div class="tsParticles">
    <tsParticles
      v-if="shouldRenderConfetti"
      :color="effect.color"
      :shape="shape"
      :emitters="emitters"
      :opacity="opacity"
      :move="move"
      :number="number"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    tsParticles: defineAsyncComponent(() =>
      import("@/components/tsParticles/tsParticles.vue")
    ),
  },
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
    };
  },
  mounted() {
    if (this.effect.config === "falling") {
      this.setFalling();
    } else if (this.effect.config === "explosion") {
      this.setExplosion();
    } else if (this.effect.config === "side") {
      this.setSide();
    }

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
      if (newValue === "falling") {
        this.setFalling();
      } else if (newValue === "explosion") {
        this.setExplosion();
      } else if (newValue === "side") {
        this.setSide();
      }
      this.reloadEffectConfetti();
    },
    "effect.shape": function (newValue) {
      if (newValue === "confetti") {
        this.setConfetti();
      } else if (newValue === "heart") {
        this.setHeart();
      } else if (newValue === "sakura") {
        this.setSakura();
      }
      this.reloadEffectConfetti();
    },
  },

  methods: {
    reloadEffectConfetti() {
      this.shouldRenderConfetti = false;
      this.$nextTick(() => {
        this.shouldRenderConfetti = true;
      });
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
      (this.number = {
        value: 1,
        density: {
          enable: true,
          area: 9,
        },
      }),
        (this.opacity = { value: 1 });
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
      (this.opacity = {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          startValue: "max",
          destroy: "min",
        },
      }),
        (this.emitters = {
          size: { width: 0, height: 0 },
          rate: { quantity: 150, delay: 0.1 },
          life: { count: 14, duration: 0.1, delay: 0.8 },
        });
    },

    // shape
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
</style>
