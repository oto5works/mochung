<template>
  <div class="backgroundDefaulted" :style="{ backgroundColor: circleColor }">
    <transition name="circle">
      <div
        class="circle"
        :style="{ backgroundColor: backgroundColor }"
        v-if="showCircle"
        @click="circleClicked"
      ></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    backgroundColor: { type: String },
  },
  data() {
    return {
      showCircle: false,
      circleColor: this.backgroundColor,
    };
  },
  methods: {
    circleClicked() {
      // circle가 클릭되었을 때, watch에 의해 backgroundColor가 변경됩니다.
      this.backgroundColor = "#e74c3c"; // 클릭 시 배경색 변경
      this.showCircle = true;
    },
  },
  watch: {
    backgroundColor(newColor) {
      // backgroundColor가 변경될 때 애니메이션을 위한 setTimeout 실행
      this.showCircle = true;
      setTimeout(() => {
        this.circleColor = newColor;
        this.showCircle = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.backgroundDefaulted {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.circle {
  position: fixed;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}
@keyframes circle-animation {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(50);
    opacity: 1;
  }
}
.circle-enter-active,
.circle-leave-active {
  animation: circle-animation 1s ease-in-out;
}
</style>
