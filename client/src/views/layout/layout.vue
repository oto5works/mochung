<template>
  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
    <div class="grid-item">7</div>
    <div class="grid-item">8</div>
    <div class="grid-item">9</div>
    <div class="grid-item">10</div>
    <div class="grid-item">11</div>
    <div class="grid-item">12</div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  padding: 0 48px;
  height: 100vh; /* 화면 전체 높이 사용 */
  right: 0;
  padding-right: 48px;
  background-color: #f0f0f0; /* 배경색 추가 */
  position: relative;
}

.grid-item {
  background-color: #c4c4c4; /* 기본 그리드 아이템 배경색 */
  border: 1px solid #999; /* 그리드 아이템 경계선 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #fff;
}

/* 각 그리드 아이템에 다른 색상 적용 */
.grid-item:nth-child(odd) {
  background-color: #ff6b6b;
}

.grid-item:nth-child(even) {
  background-color: #1dd1a1;
}
</style>
