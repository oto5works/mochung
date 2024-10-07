<template>
  <div class="home" :style="{ color: color }">
    <div class="home-scale">
      <div class="home-container">
        <div class="title">
          {{ options.title }}
        </div>

        <div class="content-wrap">
          <div class="content">
            <span class="text1">
              <!-- {{ options.host0.title }} {{ options.host1.title }} -->
              celebration
            </span>
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

          <div class="content">
            <span class="text1"> LOCATION </span>
            <div class="text2">
              {{ options.hall.name }}
            </div>
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
.home {
  width: 100%;
  height: 100%;
}
.home-scale {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 13%;
  width: 100%;
  overflow: hidden; /* 공백 숨기기 */
  transform-origin: top center;
}

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.5em;
}

.title {
  font-size: 1.75em;
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
.text1 {
  font-size: 0.75em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  opacity: 0.7;
}
.asterisk {
  width: 0.75em;
  height: 0.75em;
}
.text2 {
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 0.9375em;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
