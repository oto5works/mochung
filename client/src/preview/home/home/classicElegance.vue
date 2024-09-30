<template>
  <div class="home" :style="{ color: color }">
    <div class="home-scale">
      <div class="home-container">
        <div class="content1">
          <div class="title">
            {{ options.title }}
          </div>
          <div class="text1">
            <span>
              {{ options.host0.name }}
            </span>
            <icon class="asterisk"><asterisk2 /></icon>
            <span>
              {{ options.host1.name }}
            </span>
          </div>
        </div>

        <div class="content2">
          <div class="text2">
            {{ options.hall.name }}
          </div>

          <div class="text3">
            {{ setDate }}
          </div>
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
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home-scale {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 15%;
  height: 24%;
  width: 100%;
}

.home-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.title {
  text-align: left;
  font-size: 1.875em;
  font-weight: 700;
  text-transform: uppercase;
}
.content-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75em;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375em;
}

.content1 {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}
.content2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2em;
}
.asterisk {
  width: 1em;
  height: 1em;
}
.text1 {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.text2 {
  font-size: 1em;
  text-transform: uppercase;
}
.text3 {
  font-size: 0.8125em;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
