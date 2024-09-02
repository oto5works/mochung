<template>
  <article>
    <sectionView id="previewCalendar">
      <div class="container previewCalendar">
        <component :is="dateData.calendar" :date="dateData.date">
          <calendarComp :date="dateData.date" />
        </component>
        <div
          class="display_flex gap_16 --font-size_12 letter-spacing_8 font-weight_700"
        >
          {{ setDate }} {{ setTime }}
          <span>|</span>
          <span v-if="dDay">
            {{ dDay }}
          </span>
        </div>
      </div>
    </sectionView>

    <!--<sectionView id="previewCountdown">
      <div class="previewCountdown">
        <countdownView
        v-if="dateData.fnCountdown"
        :date="dateData.date"
        :time="dateData.time"
      />
      </div>
    </sectionView>-->
  </article>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/preview/calendar/calendar.scss";

export default {
  components: {
    calendarComp: defineAsyncComponent(() =>
      import("@/preview/calendar/calendarComp.vue")
    ),
    countdownView: defineAsyncComponent(() =>
      import("@/preview/countdown/countdownView.vue")
    ),
    calendar1: defineAsyncComponent(() =>
      import("@/preview/calendar/calendar1.vue")
    ),
    calendar2: defineAsyncComponent(() =>
      import("@/preview/calendar/calendar2.vue")
    ),
    calendar3: defineAsyncComponent(() =>
      import("@/preview/calendar/calendar3.vue")
    ),
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
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
    dDay() {
      const today = new Date();
      const targetDate = new Date(
        this.dateData.date + "T" + this.dateData.time
      );

      // Calculate the difference in days
      const timeDiff = targetDate - today;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      if (daysDiff === 0) {
        return "TODAY IS THE DAY!";
      } else if (daysDiff > 0) {
        return `D-${daysDiff} DAYS`;
      } else {
        return `D+${Math.abs(daysDiff)} DAYS AGO`;
      }
    },
  },
};
</script>

<style scoped>
/* 필요한 스타일 추가 */
</style>
