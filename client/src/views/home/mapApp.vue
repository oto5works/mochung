<template>
    <div class="bkbk">

<svg class="filter" version="1.1">
    <defs>
      <filter id="gooeyness">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
        <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
      </filter>
    </defs>
  </svg>

  <div class="mainDot" @click="toggleAnimations">
      <div class="dot" :class="{ 'dotAnimation1': animateDots }"></div>
      <div class="dot" :class="{ 'dotAnimation2': animateDots }"></div>
      <div class="dot" :class="{ 'dotAnimation3': animateDots }"></div>
      <div class="dot" :class="{ 'dotAnimation4': animateDots }"></div>
    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      animateDots: false,
    };
  },
  methods: {
    toggleAnimations() {
      this.animateDots = !this.animateDots;
    },
  },
};
</script>

<style scoped>
.dotAnimation1 {
  animation: FirstDot 1.4s;
}

.dotAnimation2 {
  animation: SecondDot 1.4s;
}

.dotAnimation3 {
  animation: ThirdDot 1.4s;
}

.dotAnimation4 {
  animation: FourthDot 1.4s;
}
.bkbk {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 800px;
  overflow: visible;
  border: 1px solid gray;
  filter: url(#gooeyness);
}
.filter {
  position: absolute;
  visibility: hidden;
}

.dots {
  display: flex;
  flex-direction: column-reverse;
  gap: 16px;
  
}
.mainDot {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: visible;
  background: red;
  z-index: 100;
  
}
.dot {
  position: absolute;
  left: 50%;
  border-radius: 50%;
  width: 56px;
  height: 56px;
}

.dot:first-child {
  background: blue;
  transform: scale(1) translate(-50%, -108%);
}

.dot:nth-child(2) {
  background: orange;
  transform: scale(1) translate(-50%, -216%);
}

.dot:nth-child(3) {
  background: yellow;
  transform: scale(1) translate(-50%, -324%);
}

.dot:nth-child(4) {
  background: green;
  transform: scale(1) translate(-50%, -432%);
}

@keyframes FirstDot {
  0% {
    transform: scale(1) translate(-50%, 0%);
  }
  100% {
    transform: scale(1) translate(-50%, -108%);
  }
}

@keyframes SecondDot {
  0% {
    transform: scale(1) translate(-50%, 0%);
  }
  100% {
    transform: scale(1) translate(-50%, -216%);
  }
}

@keyframes ThirdDot {
  0% {
    transform: scale(1) translate(-50%, 0%);
  }
  100% {
    transform: scale(1) translate(-50%, -324%);
  }
}

@keyframes FourthDot {
  0% {
    transform: scale(1) translate(-50%, 0%);
  }
  100% {
    transform: scale(1) translate(-50%, -432%);
  }
}

@keyframes FifthDot {
  0% {
    transform: scale(1) translate(-50%, 0%);
  }
  100% {
    transform: scale(1) translate(-50%, -432%);
  }
}

</style>