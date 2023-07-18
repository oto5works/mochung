<template>
  <div class="tsParticles">
      <Particles
          id="tsparticles"
          :particlesInit="particlesInit"
          :particlesLoaded="particlesLoaded"
          :options="options"
      />
  </div>
</template>

<script>
import { loadFull } from "tsparticles";
const particlesInit = async engine => {
    await loadFull(engine);
};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
export default {

  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
    },
  },
  data() {
    return {
      options: {


        "fullScreen": {
  'enable': false,
},




"particles": {
    "color": {
      "value": [
        "#fa0000",
        "#ffa900",
        "#00daac",
        "#00a8d1",
        "#c100a0",
        "#f471be",
      ],
      animation: {
        enable: true,
        speed: 500,
        sync: true
      }
    },
    "move": {
      "direction": "bottom",
      "enable": true,
      "outModes": {
        "default": "out"
      },
      "size": true,
      "speed": {
        "min": 0,
        "max": .5
      }
    },
    // 갯수
    "number": {
      "value": 50,
      "density": {
        "enable": false,
        "area": 800
      }
    },
    // 점점 사라지게
    opacity: {
      value: 1,
      animation: {
        enable: true,
        speed: 0.08,
        sync: true,
        startValue: "max",
        count: 1,
        destroy: "min",
      },
      value: {
        min: 0,
        max: 1
      }
    },
    // 없애는것.
    life: {
      duration: {
        sync: true,
        value: 30
      },
      count: 1
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "move": true,
      "animation": {
        "enable": true,
        "speed": 10
      }
    },
    "tilt": {
      "direction": "random",
      "enable": false,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 10
      }
    },
    // 모양 여기서 바꿈
    "shape": {
      "type": [
        "circle",
        "square"
      ],
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 10
      },
      "enlighten": {
        "enable": true,
        "value": 10
      },
      "enable": true,
      "speed": {
        "min": 10,
        "max": 20
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "move": true,
      "speed": {
        "min": -15,
        "max": 15
      }
    }}



      },
    };
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

