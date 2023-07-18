<template>
  <div class='effect__wrap'>
    <Effect_confetti v-if='shouldRenderConfetti' :color='main.effect.color' :shape='shape' :emitters='emitters' :opacity='opacity' :move='move' :number='number'  />
  </div>
</template>

<script>
import Effect_confetti from '@/views/Preview/12.Effect/Effect_confetti.vue'

export default {
  components: { Effect_confetti },
  props: { main: { type: Object } },
  data() {
    return {
      shouldRenderConfetti: false,
      emitters: '',
      shape: '',
      opacity: '',
      move: '',
      number: '',
    };
  },
  mounted() {
  if (this.main.effect.config === 'falling') {
    this.setFalling();
  } else if (this.main.effect.config === 'explosion') {
    this.setExplosion();
  } else if (this.main.effect.config === 'side') {
    this.setSide();
  }

  if (this.main.effect.shape === 'confetti') {
    this.setConfetti();
  } else if (this.main.effect.shape === 'heart') {
    this.setHeart();
  } else if (this.main.effect.shape === 'sakura') {
    this.setSakura();
  }
  this.reloadEffectConfetti();
},

  watch: {
  'main.effect.color': function() {
    this.reloadEffectConfetti();
  },
  'main.effect.config': function(newValue) {
    if (newValue === 'falling') { this.setFalling() } 
    else if (newValue === 'explosion') { this.setExplosion() } 
    else if (newValue === 'side') { this.setSide() } 
    this.reloadEffectConfetti();
  },
  'main.effect.shape': function(newValue) {
    if (newValue === 'confetti') { this.setConfetti() } 
    else if (newValue === 'heart') { this.setHeart() } 
    else if (newValue === 'sakura') { this.setSakura() } 
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
      'direction': 'bottom',
      'enable': true,
      'gravity': {
        'enable': true,
        maxSpeed: 0.3
      },
      'outModes': {
        'default': 'out'
      },
      'size': true,
      'speed': {
        'min': 0.5,
        'max': 1
      }
    }
    this.number = {
      'value': 1,
      'density': {
        'enable': true,
        'area': 9
      }
    },
    this.opacity = { value: 1 };
    this.emitters = ''
  },
  setSide() {
    this.move = {
      'decay': 0.05,
      'direction': 'top',
      'enable': true,
      'gravity': {
        'enable': true
      },
      'outModes': {
        'top': 'none',
        'default': 'destroy'
      },
      'speed': {
        'min': 10,
        'max': 40
      }
    }
    this.number = { value: 0 }
    this.opacity = { value: 1 };
    this.emitters = [
          {
            position: { x: 0, y: 20 },
            rate: { quantity: 5, delay: 0.3 },
            particles: { move: { direction: 'top-right', outModes: { default: 'destroy' } } },
            life: { count: 14, duration: 1, delay: 0 },
          },
          {
            position: { x: 100, y: 20 },
            rate: { quantity: 5, delay: 0.3 },
            particles: { move: { direction: 'top-left', outModes: { default: 'destroy' } } },
            life: { count: 14, duration: 1, delay: 0 },
          }
        ]
  },
  setExplosion() {
    this.move = {
      'enable': true,
      'gravity': {
        'enable': true,
        'acceleration': 10
      },
      'speed': {
        'min': 10,
        'max': 20
      },
      'decay': 0.1,
      'direction': 'none',
      'straight': false,
      'outModes': {
        'default': 'destroy',
        'top': 'none'
      }
    }
    this.number = { value: 0 }
    this.opacity = { value: 1, animation: { enable: true, minimumValue: 0, speed: 2, startValue: 'max', destroy: 'min' } },

    this.emitters = {
            size: { width: 0, height: 0 },
            rate: { quantity: 150, delay: 0.1 },
            life: { count: 14, duration: 0.1, delay: .8 },
          }
  },


// shape
  setConfetti() {
    this.shape = { type: ['circle', 'square'] };
  },
  setHeart() {
    this.shape = { type: ['heart'] };
  },
  setSakura() {
    this.shape = {
          type: 'image',
          options: {
            image: {
              src: 'src/assets/image/effect_sakura.svg',
              width: 6,
              height: 8,
              particles: { size: { value: 4, random: { enable: true, minimumValue: 2 } } }
            }
          }
        };
  },
},
};
</script>


<style scoped>
.effect__wrap {
    position: absolute;
    display: block;
    width: 100%;
    height: 120%; 
    top: 0;
    left: 0;
    z-index: 2;
}
</style>