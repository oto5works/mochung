<template>
  <div class="calendar2">
    <div class="flex flex-direction_column align-items_center">
      <div
        class="font-family font-size_28 line-height_100 text-align_center width_100"
      >
        {{ formattedDate }}
      </div>
      <div class="sp_4" />
      <div
        style="letter-spacing: 0.24em"
        class="font-family font-size_16 line-height_100 text-align_center width_100"
      >
        {{ year }}
      </div>
    </div>
    <div class="sp_32" />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    date: { type: String },
  },
  computed: {
    formattedDate() {
      return this.formatDate(this.date);
    },
    year() {
      const date = new Date(this.date);
      return date.getFullYear();
    },
  },
  methods: {
    formatDate(dateString) {
      const dateArray = dateString.split("-");
      const day = parseInt(dateArray[2], 10);
      const month = parseInt(dateArray[1], 10);
      const year = dateArray[0];

      // 날짜를 영문 형식으로 변환
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const formattedDate = `The ${this.ordinal(day)} of ${months[month - 1]}`;
      return formattedDate;
    },
    ordinal(number) {
      if (number === 1) return "First";
      if (number === 2) return "Second";
      if (number === 3) return "Third";
      if (number === 21) return "Twenty-First";
      if (number === 22) return "Twenty-Second";
      if (number === 23) return "Twenty-Third";
      if (number === 31) return "Thirty-First";
      const lastDigit = number % 10;
      switch (lastDigit) {
        case 1:
          return `${number}st`;
        case 2:
          return `${number}nd`;
        case 3:
          return `${number}rd`;
        default:
          return `${number}th`;
      }
    },
  },
};
</script>

<style>
.calendar2 {
  font-family: 'roboto';
  font-weight: 700;
  padding: 0 48px;
}
.calendar2 .vc-highlight-content-solid {
  position: relative;
  color: inherit;
}
.calendar2 .vc-highlight-content-solid::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 26px;
  height: 26px;
  border-radius: 20px;
  outline: 2px solid var(--font-color);
}
.calendar2 .vc-week,
.calendar2 .vc-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0px;
  position: relative;
}
.calendar2 .vc-day-box-center-center {
  justify-content: center;
}
.calendar2 .vc-day {
  min-height: 30px;
}
.calendar2 .vc-day-content {
  line-height: 100%;
  font-size: 22px;
  font-weight: 500;
}
.calendar2 .vc-weekday {
  display: none;
}
.calendar2 .font-family {
  font-family: "adobe-garamond-pro";
  font-weight: 700;
}
</style>
