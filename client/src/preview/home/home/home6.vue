<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="home__content">
      <div class="font1">{{ setYear }}</div>
      <div class="sp_6"/>
      <div class="date__wrap">
        <!--  -->
      <div class="month">{{ setMonth }}</div>
      <div class="hr__wrap">
        <div class="h-hr" />
      </div>
      <!--  -->
      <div class="date">{{ setDay }}</div>
      
    </div>


      <div  class="font1 bold">{{ setWeek }}.</div>


<div class="content">
  {{ options.host0.name }} 그리고 {{ options.host1.name }}<br/>
  {{ options.hall.name }}, {{ options.hall.info }}
  <div class="sp_16"/>
  <div class="bold" style="letter-spacing: 0.1em;">
  {{ options.title }}
</div>
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
    setYear() {
      const parts = this.options.date.split("-");
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      const formattedDate = new Date(`${year}-${month}-${day}`);
      const options = {
        year: "numeric",
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      return formattedString.replace(/\//g, ".");
    },
    setDay() {
    const parts = this.options.date.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const formattedDate = new Date(`${year}-${month}-${day}`);
    const options = {
      day: "numeric",
    };
    const formattedString = new Intl.DateTimeFormat("en-US", options).format(
      formattedDate
    );

    return formattedString;
  },
  setDay() {
    const parts = this.options.date.split("-");
    const year = parts[0];
    const month = parseInt(parts[1]); // 월을 숫자로 파싱
    const day = parseInt(parts[2]); // 일을 숫자로 파싱

    return day.toString(); // 일을 숫자에서 문자열로 변환하여 반환
},

  setMonth() {
    const parts = this.options.date.split("-");
    const year = parts[0];
    const month = parseInt(parts[1]); // 월을 숫자로 파싱
    const day = parts[2];

    return month.toString(); // 월을 숫자에서 문자열로 변환하여 반환
},

setWeek() {
    const parts = this.options.date.split("-");
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const formattedDate = new Date(`${year}-${month}-${day}`);
    const options = {
      weekday: "short",
    };
    const formattedString = new Intl.DateTimeFormat("en-US", options).format(
      formattedDate
    );

    return formattedString.toLowerCase(); // 소문자로 변환하여 반환
}
    
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
}
.font1 {
  width: 100%;
  line-height: 100%;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.1em;
}
.date__wrap {
  position: relative;
  display: flex;
  width: auto;
  height: 46px;
}
.month {
  position: relative;
  top: 0;
  font-size: 16px;
  text-align: right;
  line-height: 100%;
}
.hr__wrap {
  position: relative;
  width: 9px;
  height: 28px;
  top: 0px;
}
.h-hr {
  position: absolute;
  top: 50%;
  left: 80%;
  width: 38px;
  height: 1px;
  transform: translate(-50%, -50%) rotate(135deg);
  border-color: inherit!important;
}
.date {
  position: relative;
  font-size: 32px;
  line-height: 190%;
  white-space: nowrap;
}



.content {
  position: relative;
  transform: translateY(160%);
  font-size: 14px;
  line-height: 140%;
  text-align: center;
}

</style>
