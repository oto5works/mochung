<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="home__content">
      <div class="top flex align-items_center justify-content_space-between">
        <div class="font-size_14 letter-spacing_2 bold">20</div>
        <div class="font1 font-size_14 letter-spacing_1">SAVE THE DATE</div>
        <div class="font-size_14 letter-spacing_2 bold">
          {{ setYear }}
        </div>
      </div>
<div class="sp_32"/>
      <div class="font-size_20 line-height_120 text-align_center width_100 bold">
        {{ setDate }} {{ setTime }}<br/>
        {{ options.hall.name }} {{ options.hall.info }}<br/>
        WEDDING CEREMONY<br/>
        {{ options.host0.name }} ✽ {{ options.host1.name }}<br/>
        <br/>
        {{ options.title }}
      </div>
    </div>

    <div class="svg-ani" >
      <svg width="160" height="160" viewBox="0 0 160 160" :class="{ 'svg-rotate': ani }">
        <!-- 원 경로 -->
        <path
          id="circlePath"
          d="M 80,80 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
          fill="none"
        />

        <!-- 텍스트 -->
        <text font-size="12" letter-spacing="0.08em">
          <textPath xlink:href="#circlePath">
            {{ setDate }} ✽ {{ setTime }} ✽ SAVE THE DATE ➔
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    options: { type: Object },
    ani: {
      type: Boolean,
      default: true, // 기본값으로 true를 설정합니다.
    },
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
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      return formattedString.replace(/\//g, ".");
    },
    setTime() {
      const parts = this.options.time.split(":");
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);

      // Determine AM or PM
      const period = hours >= 12 ? "PM" : "AM";

      // Convert to 12-hour format
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

      // Pad minutes with leading zero if needed
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${period} ${formattedHours}:${formattedMinutes}`;
    },
    setYear() {
      const year = this.options.date.split("-")[0];
      return year.slice(2);
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
  top: 24%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}


@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/* SVG에 애니메이션을 적용합니다. */
.svg-rotate {
  animation: rotate 18s infinite linear; /* 회전 애니메이션을 적용합니다. */
}
.svg-ani {
  position: absolute;
  width: 160px;
  height: 160px;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10%;
  color: currentColor;
}

.svg-ani text {
  fill: currentColor;
}
.top {
  width: 100%;
}
.font1 {
  font-family: "archivo";
  border-radius: 50%;
  padding:  24px;
  border: 1px solid currentColor;
}
</style>
