<template>
  <div>
    <section id="previewCalendar" class="--pa_0-4-0">
      <article>
        <div class="sp_64" />
        <component :is="dateData.calendar" :date="dateData.date">
          <calendarComp :date="dateData.date" />
        </component>
        <div class="sp_48" />
      </article>
    </section>
    <div class="pa_24 --display_none-none-block">
      <div class="h-hr" />
    </div>
    <section id="previewCountdown" class="--pa_4-4-0">
      <article class="flex_center">
        
        <div class="calendarCountdown">
          <div class="previewSubTitle">
            {{ setDate }} {{ setTime }}
          </div>
          <div class="sp_8"/>
          <div class="--font-size_28 --font-weight --text-align line-height_130">
            {{ hallData.name }}
          </div>
          <div class="sp_4"/>
          <div class="--font-size_12 --text-align line-height_130">{{ hallData.info }}</div>
          <div class="sp_32" />
          
          <countdownView
            v-if="dateData.fnCountdown"
            :date="dateData.date"
            :time="dateData.time"
          />
        </div>

        <div class="absolute_100 overlay_pc --display_block-block-none" />
        <div
          class="absolute_100 outline_pc box-shadow_1-bo --display_block-block-none"
        />
      </article>
    </section>
    <div class="h-hr --display_none-none-block" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/calendar/calendar.scss";

export default {
  components: {
    calendarComp: defineAsyncComponent(() =>
      import("@/modules/calendar/calendarComp.vue")
    ),
    countdownView: defineAsyncComponent(() =>
      import("@/modules/countdown/countdownView.vue")
    ),
    calendar1: defineAsyncComponent(() =>
      import("@/modules/calendar/calendar1.vue")
    ),
    calendar2: defineAsyncComponent(() =>
      import("@/modules/calendar/calendar2.vue")
    ),
    calendar3: defineAsyncComponent(() =>
      import("@/modules/calendar/calendar3.vue")
    ),
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
      hallData: "getHallData",
    }),
    setDate() {
      const parts = this.dateData.date.split("-");
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];
      return `${year}. ${parseInt(month)}. ${parseInt(day)}.`;
    },
    setTime() {
      const parts = this.dateData.time.split(":");
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);

      // Determine AM or PM
      const period = hours >= 12 ? "PM" : "AM";

      // Convert to 12-hour format
      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

      // Pad minutes with leading zero if needed
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${period} ${formattedHours} : ${formattedMinutes}`;
    },
  },
};
</script>
<style scoped>
.calendarCountdown {
  position: relative;
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 32px 0 56px 0;
}
</style>
