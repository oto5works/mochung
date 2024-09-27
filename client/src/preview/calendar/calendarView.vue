<template>
  <article>
    <sectionView id="previewCalendar">
      <div class="container previewCalendar">
        <component :is="dateData.calendar" :date="dateData.date">
          <calendarComp :date="dateData.date" />
        </component>
        <div
          class="display_flex gap_16 --font-size_12 letter-spacing_8 font-weight_700 day"
        >
          {{ setDate }}, {{ setTime }}
          <span>|</span>
          <span v-if="dDay">
            {{ dDay }}
          </span>
        </div>
        <stampView />
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
    stampView: defineAsyncComponent(() =>
      import("@/preview/stamp/stampView.vue")
    ),
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
    }),
    setDate() {
      const parts = this.dateData.date.split("-");
      const year = parts[0];
      const month = parseInt(parts[1]) - 1; // JavaScript의 월은 0부터 시작
      const day = parseInt(parts[2]);

      const dateObj = new Date(year, month, day);

      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthsOfYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const dayOfWeek = daysOfWeek[dateObj.getDay()];
      const monthName = monthsOfYear[month]; // 0-based index for month

      return `${dayOfWeek}, ${day} ${monthName} ${year}`;
    },
    setTime() {
      const parts = this.dateData.time.split(":");
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);

      // Pad hours and minutes with leading zero if needed
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      return `${formattedHours}:${formattedMinutes}`;
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
.day {
text-transform: uppercase;
}
</style>