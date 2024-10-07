<template>
  <div class="backgroundDefaulted">
  </div>
</template>


<script>
export default {
  props: {
    backgroundColor: { 
      type: Array, // RGB 배열
      default: () => [255, 255, 255] // 기본값을 흰색으로 설정
    },
  },
  data() {
    return {
      showCircle: false,
      circleColor: this.backgroundColor,
    };
  },
  methods: {
    circleClicked() {
      // 클릭 시 배경색 변경
      this.backgroundColor = [231, 76, 60]; // 클릭 시 배경색 변경 (RGB 배열)
      this.showCircle = true;
    },
    // RGB 배열을 문자열로 변환
    rgbArrayToString(rgbArray) {
      return `rgb(${rgbArray.join(', ')})`;
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
  overflow: hidden;
  background-color: rgb(var(--background-color));
  transition: background-color 1s ease-in-out; /* 배경 색상 변경 애니메이션 추가 */
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
