<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="info">
      <div
        style="max-width: 160px; line-height: 1.34"
        class="font-size_18 bold"
      >
        {{ options.title }}
      </div>
      <div style="line-height: 1.25" class="font-size_18">
        {{ options.hall.name }} {{ options.hall.info }}<br />
        {{ setDate }}<br />
        {{ setTime }}
      </div>
    </div>

    <div id="name" style="letter-spacing: 0.3em">
      <div class="font-size_28 bold">{{ options.host0.name }}</div>
      <div class="font-size_28 bold">{{ options.host1.name }}</div>
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
    fontFamily: { type: String },
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
  },
};
</script>

<style scoped>
.home__wrap {
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  top: 4%;
  left: 12%;
  writing-mode: vertical-rl;
}
#title {
  position: absolute;
  top: 80%;
}
#name {
  position: absolute;
  top: 4%;
  right: 12%;
  writing-mode: vertical-rl;
}
</style>
