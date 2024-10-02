<template>
  <buttonAlt
    variant="fuctions"
    :class="{ 'heart-ing': particles }"
    id="like"
    @click="triggerParticlesAnimation"
  >
    <Particles
      ref="particleContainer"
      id="likeparticles"
      :particlesInit="initializeParticles"
      :options="particleOptions"
    />
    <icon  class="icon_20" :class="{ 'heart-beat': particles }"><heart /></icon>
  </buttonAlt>
</template>

<script>
import { mapGetters } from "vuex";
import { toggleLike } from "@/services/posts";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadHeartShape } from "tsparticles-shape-heart";
import heart from "@/components/icon/heart.vue";
import buttonAlt from "@/preview/components/buttonAlt.vue";

export default {
  components: { heart, buttonAlt },
  watch: {
    primaryColor: {
      handler(newColor) {
        const colorString = `rgb(${newColor.join(", ")})`;
        if (!this.particleContainer) {
          this.initializeParticles(this.$refs.particleContainer);
        } else {
          this.particleContainer.options.particles.color.value = colorString;
          this.particleContainer.refresh();
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters({
      primaryColor: "getPrimaryColor",
    }),
    primaryColorString() {
      return `rgb(${this.primaryColor.join(", ")})`;
    },
  },
  data() {
    return {
      particles: false,
      particleContainer: null,
      particleOptions: {
        fullScreen: { enable: true, zIndex: 99999 },
        particles: {
          move: {
            angle: {
              value: 0,
            },
            direction: "top",
            enable: true,
            outModes: {
              default: "destroy",
            },
            size: true,
            speed: {
              min: 8,
              max: 12,
            },
          },
          wobble: { enable: true, distance: 10, speed: { min: -7, max: 7 } },
          shape: { type: ["heart"] },
          color: '#000000', // 초기값 설정
          size: {
            value: 14,
            random: {
              enable: true,
              minimumValue: 8,
            },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 3,
              startValue: "max",
              destroy: "min",
            },
          },
        },
      },
    };
  },
  created() {
    this.particleOptions.particles.color = this.primaryColorString;
  },
  methods: {
    async initializeParticles(engine) {
      try {
        await loadFull(engine);
        loadHeartShape(engine);
        this.particleContainer = await tsParticles.load(this.particleOptions);
        console.log("Particles loaded successfully.");
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    },

    async triggerParticlesAnimation() {
      if (this.particleContainer) {
        this.handleLike();
        this.submitLike();
        const likeBtn = document.querySelector("#like");
        if (!likeBtn) {
          return;
        }
        const rect = likeBtn.getBoundingClientRect();
        const startX =
          (rect.x + rect.width / 2) * this.particleContainer.retina.pixelRatio;
        const startY =
          (rect.y + rect.height / 2) * this.particleContainer.retina.pixelRatio;
        const heartBeatCount = 1; // Number of heartbeats

        for (let i = 0; i < heartBeatCount; i++) {
          const particle = {
            x: startX,
            y: startY,
          };
          this.particleContainer.particles.addParticle(particle);
        }
      }
    },

    handleLike() {
      this.particles = true;
      setTimeout(() => {
        this.particles = false;
      }, 200);
    },

    async submitLike() {
      if (this.$route.params.id) {
        try {
          const id = this.$route.params.id;
          await toggleLike(id);
        } catch (error) {
          window.alert(error.response.data.message);
        }
      } else {
        console.log("$route.params.id 값이 없습니다.");
      }
    },
  },
};
</script>

<style scoped>

.heart-beat {
  animation: heartBeat 0.2s;
}
.heart-ing {
  pointer-events: none;
}
@keyframes heartBeat {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
