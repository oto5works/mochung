<template>
  <div class="home__wrap" :style="{ color: color }">
    <div
      id="date"
      class="flex flex-direction_column text-align_center gap_12 width_100 font-size_72 line-height_100"
    >
      <div>{{ setYear }}</div>
      <div>{{ setMonth }}</div>
      <div>{{ setDay }}</div>
    </div>

    <div
      id="title"
      class="flex flex-direction_column align-items_center justify-content_center gap_8 width_100 bold"
    >
      <div class="title__wrap">
        <div class="font-size_16">{{ options.title }}</div>
        <div class="sp_8" />
        <div class="v-hr" />
      </div>
      <div class="font-size_12">WEDDING CEREMONY</div>
    </div>

    <div
      id="name"
      class="flex align-items_center justify-content_center gap_12 width_100"
    >
      <div class="font-size_24">{{ options.host0.name }}</div>
      <div class="font-size_16">&</div>
      <div class="font-size_24">{{ options.host1.name }}</div>
    </div>

    <div id="date-hall" class="width_100 text-align_center">
      <div class="font-size_12">AT</div>
      <div class="font-size_16 bold">{{ options.hall.name }}</div>
      <div class="font-size_14">{{ options.hall.info }} {{ setTime }}</div>
    </div>
    <div class="sp_24" />
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
    setYear() {
      const parts = this.options.date.split("-");
      const year = parts[0].slice(-2);
      return `${year}`;
    },
    setMonth() {
      const parts = this.options.date.split("-");
      const month = parseInt(parts[1]);
      return month < 10 ? `0${month}` : `${month}`;
    },
    setDay() {
      const parts = this.options.date.split("-");
      const day = parseInt(parts[2]);
      return day < 10 ? `0${day}` : `${day}`;
    },
    setTime() {
      const parts = this.options.time.split(":");
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);

      // Determine AM or PM
      const period = hours >= 12 ? "오후" : "오전";

      // Convert to 12-hour format
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

      // Pad minutes with leading zero if needed
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${period} ${formattedHours}시 ${formattedMinutes}분`;
    },
  },
};
</script>

<style scoped>
.home__wrap {
  color: var(--home-color);
}
.title__wrap {
  width: fit-content;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: var(--home-color);
}
#date {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
}
#title {
  position: absolute;
  top: 68%;
  transform: translateY(-50%);
}
#name {
  position: absolute;
  top: 77%;
  transform: translateY(-50%);
}
#date-hall {
  position: absolute;
  top: 85%;
  transform: translateY(-50%);
}
</style>
