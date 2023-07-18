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
import { loadHeartShape } from "tsparticles-shape-heart";

const particlesInit = async engine => {
    await loadFull(engine);
    loadHeartShape(engine);

};

const particlesLoaded = async container => {
    console.log("Particles container loaded", container);
};
export default {
  methods: {
    particlesInit: async (engine) => {
      await loadFull(engine);
      loadHeartShape(engine);

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
      "value": ["fff"],
      animation: {
        enable: true,
        speed: 1000,
        sync: true
      }
    },
    "shape": {
      "type": [
        "circle",
        "square"
      ],
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        speed: 1,
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
    "size": {
      "value": 6,
      "random": {
        "enable": true,
        "minimumValue": 2
      }
    },
    "links": {
      "enable": false
    },

    "move": {
      "enable": true,
      "gravity": {
        "enable": true,
        "acceleration": 10
      },
      "speed": {
        "min": 10,
        "max": 20
      },
      "decay": 0.1,
      "direction": "none",
      "straight": false,
      "outModes": {
        "default": "destroy",
        "top": "none"
      }
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
        "speed": 60
      }
    },
    "tilt": {
      "direction": "random",
      "enable": true,
      "move": true,
      "value": {
        "min": 0,
        "max": 360
      },
      "animation": {
        "enable": true,
        "speed": 60
      }
    },
    "roll": {
      "darken": {
        "enable": true,
        "value": 25
      },
      "enable": true,
      "speed": {
        "min": 15,
        "max": 25
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
    }
  },
  "emitters": [
  {
    "life": {
      "count": 14,
      "duration": 0.1,
      "delay": .8
    },
    "rate": {
      "delay": 0.1,
      "quantity": 150
    },
  },
  ]
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