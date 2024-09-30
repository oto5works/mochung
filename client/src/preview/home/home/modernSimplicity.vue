<template>
  <div class="home" :style="{ color: color }">
    <div class="home-container">
      <div class="text1">
        <span>
          {{ options.host0.name }}
        </span>
        <icon class="asterisk"><asterisk2 /></icon>
        <span>
          {{ options.host1.name }}
        </span>
      </div>
      <div class="text2">
          {{ options.hall.address }}, {{ options.hall.detail }}<br />
          {{ options.hall.name }}<br />
          {{ setDate }}, {{ setTime }}
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

      // Get the month name based on the month number
      const monthName = monthNames[month - 1]; // Month is 1-based

      // Construct the formatted date string
      const formattedString = `${day} ${monthName} ${year}`;

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
  text-align: left;
}
.home-scale.left {
  overflow: hidden; /* 공백 숨기기 */
  transform-origin: top left;
}

.home-scale.right {
  overflow: hidden; /* 공백 숨기기 */
  transform-origin: top right;
}

.home-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: 1.5em;
}
.text1 {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
  font-size: 0.875em;
  line-height: 130%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: 40%;
}
.asterisk {
  width: 0.75em;
  height: 0.75em;
}
.text2 {
  width: 48%;
  font-size: 0.75em;
  line-height: 148%;
}
</style>
