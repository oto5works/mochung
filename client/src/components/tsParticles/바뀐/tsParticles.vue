<template>
  <div class="snow-container">
    <canvas ref="canvas" class="snow-canvas"></canvas>
    <button @click="startSnow">Start Snow</button>
    <button @click="stopSnow">Stop Snow</button>
    <button @click="resetSnow">Reset Snow</button>
    <select v-model="currentShape" @change="onShapeChange">
      <option value="['circle', 'square']">기본 모양</option>
      <option value="heart">하트 모양</option>
    </select>
  </div>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  mounted() {
    this.setupCanvas();
    this.myConfetti = confetti.create(this.$refs.canvas, { resize: true });
    this.heartShape = confetti.shapeFromPath({
      path: "M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 75,-75 38,0 57,18 76,56z",
      matrix: [
        0.03333333333333333, 0, 0, 0.03333333333333333, -5.566666666666666,
        -5.533333333333333,
      ],
    });
  },
  data() {
    return {
      animationFrameId: null, // 애니메이션 프레임 ID
      myConfetti: null, // confetti 인스턴스
      currentShape: ["circle", "square"], // 현재 선택된 모양
      heartShape: null, // 하트 모양 설정
    };
  },
  methods: {
    setupCanvas() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    },
    onShapeChange() {
      this.resetSnow();
      this.startSnow();
    },
    startSnow() {
      var duration = 5 * 1000;
      var animationEnd = Date.now() + duration;
      var skew = 1;
      var colors = ["#bb0000", "#ffffff", "#ff9a00"];
      const randomInRange = (min, max) => Math.random() * (max - min) + min;

      const frame = () => {
        var timeLeft = animationEnd - Date.now();
        var ticks = Math.max(200, 500 * (timeLeft / duration));
        skew = Math.max(0.8, skew - 0.001);

        this.myConfetti({
          particleCount: 1,
          startVelocity: 0,
          ticks: ticks,
          origin: {
            x: Math.random(),
            y: Math.random() * skew - 0.2, // 위에서 아래로 내리기
          },
          colors: [colors[Math.floor(Math.random() * colors.length)]], // 랜덤 색상 선택
          shapes: this.currentShape === "heart" ? [this.heartShape] : ["circle", "square"], // 선택된 모양으로 설정
          gravity: randomInRange(0.4, 0.6), // 중력 설정
          scalar: randomInRange(0.4, 1), // 입자 크기 조정
          drift: randomInRange(-0.4, 0.4), // 입자 드리프트 조정
        });

        if (timeLeft > 0) {
          this.animationFrameId = requestAnimationFrame(frame);
        }
      };

      this.animationFrameId = requestAnimationFrame(frame);
    },
    stopSnow() {
      // 애니메이션 프레임 중지
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;

      // 모든 입자 초기화
      this.resetSnow();
    },
    resetSnow() {
      // confetti 효과 초기화
      if (this.myConfetti) {
        this.myConfetti.reset();
      }
    },
  },
};
</script>

<style scoped>
.snow-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: aqua; /* 배경색 설정 */
}

.snow-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none; /* 클릭 이벤트 비활성화 */
}

button,
select {
  position: relative;
  z-index: 2;
  margin: 10px;
  padding: 10px 15px;
  color: white;
  background-color: #007bff; /* 버튼 배경색 */
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3; /* 버튼 호버 색상 */
}

select {
  color: #000;
  background-color: #fff; /* 드롭다운 배경색 */
}
</style>
