<template>
  <formBox icon="calendar" title="달력 스타일" @click="handleClickEvent">
    <p>{{ selectedOption }}</p>
    <calendarDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    calendarDialog: defineAsyncComponent(() =>
      import("@/modules/calendar/calendarDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
      calendarOptions: "getCalendarOptions",
    }),
    selectedOption() {
      const selectedOption = this.calendarOptions.find(
        (option) => option.value === this.dateData.calendar
      );
      return selectedOption ? selectedOption.title : this.dateData.calendar;
    },
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewCalendar");
    },
  },
};
</script>
