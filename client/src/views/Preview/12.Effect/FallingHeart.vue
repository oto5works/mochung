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
        fullScreen: {
              enable: false,
              zIndex: -1
            },
            interactivity: {
              detectsOn: 'canvas',
              events: {
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                onClick: {
                  enable: true,
                  mode: 'push'
                },
                resize: true
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4
                },
                push: {
                  quantity: 4
                }
              }
            },
            particles: {
              color: {
                value: '#ff4d4d',
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true
                }
              },
              links: {
                color: '#ff4d4d',
                distance: 120,
                enable: true,
                opacity: 0.4,
                width: 1
              },
              move: {
                attract: {
                  enable: true,
                  rotate: {
                    x: 600,
                    y: 1200
                  }
                },
                enable: true,
                outModes: {
                  bottom: 'out',
                  left: 'out',
                  right: 'out',
                  top: 'out'
                },
                random: true,
                speed: 2,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 100
              },
              opacity: {
                value: {
                  min: 0.1,
                  max: 0.5
                },
                animation: {
                  enable: true,
                  speed: 1,
                  sync: false
                }
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 0,
                  color: '#000'
                },
                polygon: {
                  nb_sides: 5
                }
              },
              size: {
                value: {
                  min: 1,
                  max: 10
                },
                animation: {
                  enable: true,
                  speed: 10,
                  sync: true
                }
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