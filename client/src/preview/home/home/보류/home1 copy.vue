<template>
  <div class="home__wrap" :style="{ color: color }">
    <div class="home__content">
      <div class="home-scale">
      <div class="font-size_18 bold text-align_center">{{ options.title }}</div>
      <div class="sp_4" />
      <div class="h-hr" />
      <div class="sp_8" />
      <div style="line-height: 1.25" class="font-size_16 text-align_center">
        {{ setDate }}<br />
        {{ setTime }}
      </div>
      <div class="sp_18" />
      <div style="line-height: 1.25" class="font-size_16 text-align_center">
        WEDDING CEREMONY<br />
        {{ options.host0.name }} & {{ options.host1.name }}<br />
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
.home__content {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 50%;
}
.h-hr {
  width: 10%;
  height: 1px;
  border-color: inherit !important;
}
</style>
