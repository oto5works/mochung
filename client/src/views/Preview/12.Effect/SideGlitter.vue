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
  "emitters": [
    {
      "position": {
        "x": 0,
        "y": 20
      },
      "rate": {
        "quantity": 5,
        "delay": 0.3
      },
      "particles": {
        "move": {
          "direction": "top-right",
          "outModes": {
            "top": "none",
            "left": "none",
            "default": "destroy"
          }
        }
      },
      "life": {
      "count": 14,
      "duration": 1,
      "delay": 0
    },
      
    },
    {
      "position": {
        "x": 100,
        "y": 20
      },
      "rate": {
        "quantity": 5,
        "delay": 0.3
      },
      "particles": {
        "move": {
          "direction": "top-left",
          "outModes": {
            "top": "none",
            "right": "none",
            "default": "destroy"
          }
        }
      },
      "life": {
      "count": 14,
      "duration": 1,
      "delay": 0
    },
    }
  ],
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
    life: {
      duration: {
        sync: true,
        value: 5
      },
      count: 1
    },
    "move": {
      "decay": 0.05,
      "direction": "top",
      "enable": true,
      "gravity": {
        "enable": true
      },
      "outModes": {
        "top": "none",
        "default": "destroy"
      },
      "speed": {
        "min": 1,
        "max": 40
      }
    },
    "number": {
      "value": 0
    },
    "rotate": {
      "value": {
        "min": 0,
        "max": 360
      },
      "direction": "random",
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 30
      }
    },
    "size": {
      "value": 4,
      "random": {
        "enable": true,
        "minimumValue": 2
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 5,
        "max": 15
      }
    },
    "wobble": {
      "distance": 30,
      "enable": true,
      "speed": {
        "min": -7,
        "max": 7
      }
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
      "options": {}
    }
  }
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