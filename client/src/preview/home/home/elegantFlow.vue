<template>
  <div class="home" :style="{ color: 'white' }">
    <div class="home-container">
      <icon class="asterisk"><asterisk2 /></icon>
<div class="spacing1" />
      <div class="text1">
        Invite you to share in the<br>celebration of their marriage
      </div>
      <div class="spacing2" />

      <div class="text2" v-html="setDate"></div>
      <div class="text2">{{ setTime }}<div class="line"></div></div>
      <div class="spacing3" />

      <div class="title">
        {{ options.title }}
      </div>

      <svg
        version="1.1"
        id="welcome"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 158 84"
        style="enable-background: new 0 0 158 84"
        xml:space="preserve"
      >
        <path
          class="st0"
          d="M4.8,48.1c-1.3,1.5-2.3,3.5-2.7,5.6c-0.1,0.6-0.1,1.3,0.3,1.6c0.3,0.2,0.6,0.1,0.9-0.1c1.2-0.6,2.2-1.5,3-2.8
	c-1.3,1.8-2,4.2-2.1,6.5c0,0.4,0,0.8,0.2,1.2c0.3,0.6,1,0.7,1.5,0.5c0.5-0.2,1-0.7,1.3-1.2c2.2-2.8,3.9-6,5.5-9.2
	c0.3-0.5,0.5-1.1,0.6-1.7c0.1-0.5,0-1.5-0.7-1.4c-0.4,0.1-0.6,0.9-0.6,1.4c-0.1,0.6,0,1.3,0.3,1.8c1.5,3.3,5,3.2,7.6,3
	c1.9-0.1,4.1-0.2,5.7-0.8c0.9-0.3,3.7-1.9,3.3-3.4c-0.1-0.3-0.4-0.5-0.7-0.5c-1.5,0-2.3,1.9-2.8,3.4c-0.4,1.4-0.6,3,0.2,4.1
	c0.6,1,1.8,1.2,2.8,1.3c5.9,0.3,12.5-0.7,17.5-5.3c5.4-5,10-11.3,14.7-18.3c4.3-6.4,8.6-13.6,10.6-23.2c0.4-2,0.8-4.3,0.5-6.4
	c0-0.5-0.1-1-0.3-1.4C71.2,2,70.7,2,70.2,2.1c-1.4,0.3-2.7,1.6-3.9,3c-5.3,6.3-9.3,15.4-13.2,24.4c-2.5,5.8-5,11.6-7,18
	c-1.5,4.9-2.8,13.2-3.4,18.7c-0.6,4.7-1.3,10.4,1.1,13.8c2.5,3.4,5.3,2.2,7.8-0.1c2.8-2.6,5.5-5.5,8.2-8.5
	c5.3-6.1,9.2-12.7,13.3-20.7 M96.1,52.2c-0.1-1.9-2.2-1.7-3.4-0.9c-0.6,0.5-1.1,1.1-1.5,1.8c-0.8,1.5-1.4,3.1-1.7,4.8
	c0,0.3-0.1,0.6,0.1,0.8c0.2,0.3,0.7,0.4,1,0.3c0.4-0.1,0.6-0.4,0.9-0.7c1-1.2,1.9-2.5,2.9-3.6c0.5-0.6,1.1-1.1,1.7-1.5
	c0.8-0.5,1.1-0.7,2.1-0.7c3.5,0.2,7.1,0.3,10.6,0.5 M113.1,46.4c-2.3,3.5-4.4,7.1-6.3,10.9c1.4-2.1,2.4-4.3,4.2-6.2
	c1.7-1.8,3.7-3.3,6-4.3c1.1-0.5,2.4-0.9,3.6-0.8c0.3,0,0.6,0.1,0.7,0.3c0.3,0.4,0.1,0.9-0.2,1.3c-1.4,1.9-3.6,3.3-4,5.6
	c0,0.1,0,0.1,0,0.2c0.1,0.1,0.3,0.1,0.4,0c0.9-0.5,2.7-1.9,3.8-1.6c2.5,0.7,0.5,4.7,2.3,6.3c1.3,1.1,3.1,0.2,4.4-0.7
	c2.5-1.7,5-3.4,7.5-5.1c1.2-0.9,2.5-1.7,3.7-2.5c0.3-0.2,0.6-0.4,0.9-0.6c0.1-0.1,0.3-0.2,0.4-0.3c0.6-0.8-0.4-1-0.9-1
	c-0.7,0.1-1.4,0.5-2,1.1c-0.7,0.8-1.1,1.8-1.4,2.9c-0.3,1-0.4,2.2,0.2,3.1c1.9,3.2,8.3,1.5,10.8,0.6c3.1-1.1,6-2.9,8.7-4.8
	 M92.8,51.4c-2,1-4,2-6,3.1c-2.1,1.2-4.3,2.2-6.6,2.9C78.3,58,76,58.5,74,57.6c-1.6-0.7-2.3-2.8-2.1-4.4c0.4-2.5,3.4-6,6-3.7"
        />
      </svg>


<div class="content1">

      <div class="text3">to Our Wedding<br />Ceremony</div>

      <div class="text4">
        <span>
          {{ options.host0.name }}
        </span>
        <div class="line"></div>
        <span>
          {{ options.host1.name }}
        </span>
      </div>

    </div>

    </div>
  </div>
</template>
<script>
import asterisk2 from "@/components/icon/asterisk2.vue";

export default {
  components: { asterisk2 },
  props: {
    options: { type: Object },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    setDate() {
      const parts = this.options.date.split("-");
      const year = parts[0];
      const month = parseInt(parts[1], 10) - 1; // Convert month to 0-based
      const day = parseInt(parts[2], 10); // Convert day to number

      // Create an array of month names
      const monthNames = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ];

      // Create an array of day names
      const dayNames = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
      ];

      // Create a new Date object
      const date = new Date(year, month, day);

      // Get the day of the week and month name
      const dayName = dayNames[date.getDay()];
      const monthName = monthNames[month];

      // Construct the formatted date string
      const formattedString = `${year}<br>${dayName}, ${day} ${monthName}`;

      return formattedString;
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
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}


.asterisk {
  width: 1.25em;
  height: 1.25em;
}
.text1 {
  font-size: 0.75em;
  font-family: var(--mio-theme-font-family-sp);
  text-transform: capitalize;
}
.text2 {
  display: flex;
  font-size: 0.625em;
  font-weight: 600;
  line-height: 160%;
  letter-spacing: 0.16em;
  gap: 0.75em;
  align-items: center;
}
.title {
  font-size: 1.625em;
  font-weight: 700;
}
.text3 {
  font-size: 1em;
  font-weight: 600;
  line-height: 120%;
  font-family: var(--mio-theme-font-family-sp);
}
.text4 {
  display: flex;
  font-size: 0.9375em;
  letter-spacing: 0.08em;
  font-weight: 700;
  gap: 0.75em;
  align-items: center;
}

.line {
  width: 1.5em;
  height: 0.0625em;
  background-color: currentColor;
}
#welcome {
  fill: none;
  display: inline-block;
  vertical-align: baseline;
  flex-shrink: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
  stroke-width: 1;
  stroke: currentColor;
  width: 36%;
  transform: translateY(-22%);
}
.spacing1 {
  height: 2.8%;
}
.spacing2 {
  height: 3.4%;
}
.spacing3 {
  height: 4.2%;
}
.content1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.375em;
  transform: translateY(-24%);
}
</style>
