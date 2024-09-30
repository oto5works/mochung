<template>
  <div class="home" :style="{ color: color }">


      <div class="home-container">
        <div class="title">
          <svg
            version="1.1"
            id="welcome"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 140 56"
            style="enable-background: new 0 0 140 56"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M4.1,39.8C0,45.4,1.9,54.7,9,47.2c2.6,7.1,9.4-0.4,11.5-4.2 M18.1,45.2c14.5-1.6,4.4-12.9,1.5,2.3
	C18.8,60,60.4,24.4,65.9,16.7C77.7,0.2,64.3-1.2,53.2,8.3c-10.9,9.3-32.7,47.4-8.8,45.2c7.9-1.5,11.3-5.5,15.9-10 M70.9,35
	c-0.8-6.6-8.9-1.5-10.2,5.3c-2.9,14.3,18.3,7.5,23.7,1.5 M83.8,42.3c-6.3,11.6,5.4,8.5,6.4-0.5c1.2-3.1-2.2-7.8-4.9-4.4
	c-4.5,9.8,11,11.3,14,3.3c-2.2-1.3-2.6,8-2.6,9.4c2.8-1,4.7-4.4,6.7-6.6c-1,7,4.3,2.1,6.5-0.6c-0.1,7.5,5.5,5.4,9.6,2.6
	c1-0.7,2.2-1,3.4-1c2.7,0.1,4.8-1.3,5.8-4.2c0.2-0.5-0.3-1-0.8-0.9c-2.6,0.5-4,4.2-5,6.6c-0.2,0.4-0.3,0.9-0.2,1.4
	c0.2,6.5,13.1-3.5,15.5-5.4"
            />
          </svg>

          <span>{{ options.title }}</span>
        </div>

        <div class="text1">
          INVITE YOU TO SHARE IN THE<br />
          CELEBRAION OF THEIR MARRIAGE<br />
          {{ setDate }}<br />
          {{ options.hall.name }}
        </div>
      </div>

      

      <div class="text2">
        <span>
          {{ options.host0.name }}
        </span>
        <icon class="asterisk"><asterisk2 /></icon>
        <span>
          {{ options.host1.name }}
        </span>
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
      const month = parseInt(parts[1], 10); // Convert month to a number
      const day = parts[2];

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

      // Create a Date object
      const dateObject = new Date(year, month - 1, day); // Month is 0-based in Date object

      // Get the day name based on the date object
      const dayName = dayNames[dateObject.getUTCDay()]; // Get the day of the week (0-6)

      // Get the month name based on the month number
      const monthName = monthNames[month - 1]; // Month is 1-based

      // Construct the formatted date string
      const formattedString = `on ${dayName}, ${day} ${monthName} ${year}`;

      return formattedString;
    },
  },
};
</script>

<style scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
}
.home-container {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1.5em;
  gap: 5em;
  top: 8%;
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
}

.title {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5em;
  width: 100%;
  font-size: 0.875em;
  font-weight: 700;
  letter-spacing: 0.04em;
}



.text1 {
  font-size: 0.875em;
  line-height: 180%;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
}
.asterisk {
  width: 0.75em;
  height: 0.75em;
}
.text2 {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 12%;
  gap: 0.5em;
  font-size: 1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: 100%;
}
</style>
