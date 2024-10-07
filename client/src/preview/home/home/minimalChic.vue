<template>
  <div class="home" :style="{ color: color }">
    <div class="home-container">
      <div class="text1">
        {{ day }}
      </div>

      <div class="text2">
        {{ setDate }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    options: { type: Object },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    day() {
      const parts = this.options.date.split("-");
      return parts[2].padStart(2, "0"); // 두 자리 숫자로 반환 (예: '01')
    },
    setDate() {
      const parts = this.options.date.split("-");
      const year = parts[0];
      const month = parts[1];

      const formattedDate = new Date(`${year}-${month}-01`); // 월에 대한 날짜 설정
      const options = {
        year: "numeric",
        month: "short", // 'long'을 사용하여 전체 월 이름을 가져옴
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      // 'JUNE 2020' 형식으로 포맷하기
      const [monthName, yearNumber] = formattedString.split(" ");
      return `${monthName.toUpperCase()} ${yearNumber}`; // 월 이름을 대문자로 변환
    },
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 16%;
  width: 100%;
  gap: 0.6em;
}

.text1 {
  font-size: 4.5em; /* 72px에 해당 */
  letter-spacing: -0.02em;
  font-weight: 300;
  font-family: 'ebgaramond';
  line-height: 100%;
  border-bottom: 0.03125em solid currentColor;
  width: fit-content;
  padding: 0 0.05em;
}
.text2 {
  font-size: 0.8125em; /* 13px에 해당 */
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
