<template>
  <Calendar ref="calendar" :attributes="attributes" />
</template>

<script>
import { Calendar, DatePicker } from "v-calendar";

export default {
  components: {
    DatePicker,
    Calendar,
  },
  props: {
    date: { type: String },
  },
  data() {
    return {
      attributes: [
        {
          highlight: true,
          dates: "",
        },
      ],
    };
  },
  watch: {
    date() {
      this.moveDate(this.date);
    },
  },
  mounted() {
    this.moveDate(this.date);
  },

  methods: {
    moveDate(date) {
      const calendar = this.$refs.calendar;

      calendar.move(date);

      this.attributes = [
        {
          highlight: true,
          dates: date,
        },
      ];
    },
  },
};
</script>
