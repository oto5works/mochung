<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="home__content">
      <div class="font-size_72 bold line-height_100">{{ setDay }}</div>
      <div class="sp_4"/>
      <div class="h-hr" />
      <div class="sp_12"/>
      <div style="line-height: 220%" class="font-size_12 info">
        {{ options.title }}<br/>
        {{ options.host0.name }} + {{ options.host1.name }}<br/>
        {{ setDate }}
        </div>
   
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: { type: Object },
    color: {
      type: String,
      default: '',
    },
  },
  computed: {
    setDate() {
      const parts = this.options.date.split("-");
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      const formattedDate = new Date(`${year}-${month}-${day}`);
      const options = {
        year: "numeric",
        month: "long", // "2-digit" 대신 "long"을 사용하여 월 이름 전체를 출력합니다.
        day: "numeric",
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      return formattedString.replace(/\//g, ".");
    },

    setDay() {
      const [year, month, day] = this.options.date.split("-");

      const formattedDate = new Date(`${year}-${month}-${day}`);
      const options = {
        day: "2-digit", // day를 2글자로 나타내기
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      return formattedString.replace(/\//g, ".");
    },
  },
};
</script>

<style scoped>
.home__wrap {
  width: 100%;
  height: 100%;
}
.home__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
}
.h-hr {
  width: 72px;
  height: 1px;
  border-color: inherit!important;
}
.info {
  writing-mode: vertical-rl;
}

</style>
