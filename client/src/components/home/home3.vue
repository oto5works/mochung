<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="home__content">
      <div class="svg__wrap">
        <svg
          version="1.1"
          id="레이어_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 141 55"
          style="enable-background: new 0 0 141 55"
          xml:space="preserve"
        >
          <path
            class="st0"
            d="M3.2,39.5C-1,45.2,0.9,54.7,8.1,47c2.7,7.3,9.6-0.4,11.8-4.2 M17.5,45c14.8-1.6,4.5-13.2,1.5,2.3
	c-0.7,12.7,45.2-27,47.2-31.8C78.3-1.3,65.7-3,53.8,7.9c-10.1,5.8-33.9,47.8-9.4,45.5c6.4-1.7,11.6-5.6,16.3-10.2 M71.5,34.6
	c-0.8-6.7-9.7,2.4-10.5,5.4c-2.9,14.6,18.7,7.7,24.3,1.5 M84.8,42.1c-6.4,11.8,5.5,8.7,6.6-0.5c1.3-3.1-2.3-7.9-5-4.4
	c-4.6,9.9,11.3,11.5,14.3,3.3c-2.2-1.3-2.6,8.1-2.7,9.6c2.8-1,4.8-4.5,6.9-6.7c-1,7.2,4.4,2.1,6.6-0.6c-0.1,8.8,7.4,4.6,11.5,1.5
	c3.9,0.9,7-0.7,7.9-5c-3.6-0.4-5.3,4.6-6.4,7.4c-0.8,8.2,13.3-2.7,15.8-4.7"
          />
        </svg>
      </div>
      <div class="font1">{{ options.title }}</div>

      <div class="font2">
        INVITE YOU TO SHARE IN THE<br />
        CELEBRAION OF THEIR MARRIAGE<br />
        ON {{ setDate }}<br />
        AT {{ options.hall.name }}
      </div>
      
    </div>
    <div class="font3">
      <div class="bold">WEDDING CEREMONY</div>
      {{ options.host0.name }} & {{ options.host1.name }}
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
      const month = parseInt(parts[1], 10) - 1; // Adjust month to be zero-based
      const day = parts[2];

      const formattedDate = new Date(year, month, day);
      const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      };
      const formattedString = new Intl.DateTimeFormat("en-US", options).format(
        formattedDate
      );

      return formattedString.toUpperCase();
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
  width: 70%;
}
.svg__wrap {
  width: 140px;
  height: auto;
}
.svg__wrap svg {
  fill: none;
  stroke: currentColor;
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.font1 {
  line-height: 100%;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.2em;
  font-weight: 700;
}
.font2 {
  transform: translateY(62%);
  font-size: 14px;
  width: 100%;
  line-height: 180%;
  text-align: center;
}
.font3 {
  position: absolute;
  bottom: 16%;
  width: 100%;
  font-size: 12px;
  line-height: 160%;
  text-align: center;
}

</style>
