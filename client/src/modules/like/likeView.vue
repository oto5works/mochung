<template>
  <button
    :class="{ 'heart-ing': particles }"
    class="button-like button-defaulted --border-radius_32"
    id="like"
    @click="triggerParticlesAnimation"
  >
    <Particles
      ref="particleContainer"
      id="likeparticles"
      :particlesInit="initializeParticles"
      :options="particleOptions"
    />
    <icon :class="{ 'heart-beat': particles }"><heart /></icon>
  </button>
</template>

<script>
import { mapGetters } from "vuex";

import { toggleLike } from "@/services/posts";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";
import { loadHeartShape } from "tsparticles-shape-heart";
import heart from "@/components/icon/heart.vue";

export default {
  components: { heart },
  watch: {
    // color 값이 변경될 때 실행될 함수 정의
    primaryColor: {
      handler(newColor) {
        // 파티클 컨테이너가 아직 초기화되지 않았으면 초기화
        if (!this.particleContainer) {
          this.initializeParticles(this.$refs.particleContainer);
        } else {
          // 파티클 컨테이너가 이미 초기화된 경우, 색상에 맞게 업데이트
          this.particleContainer.options.particles.color.value = newColor;
          this.particleContainer.refresh();
        }
      },
      deep: true, // 객체 또는 배열의 내부 속성까지 감지할 때 사용
    },
  },
  computed: {
    ...mapGetters({
      primaryColor: "getPrimaryColor",
    }),
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
          color: '#000000',
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
              speed: 1,
              startValue: "max",
              destroy: "min",
            },
          },
        },
      },
    };
  },
  created() {
    this.particleOptions.particles.color = this.primaryColor;
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
        // Toggle animation class to trigger the animation
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

        // Set particles to false after animation
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
#like {
  position: fixed;
  bottom: 84px;
  right: 4.2%;
  z-index: 4;
}
.button-like {
  width: 56px;
  height: 56px;
}

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
