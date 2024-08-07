<template>
  <div class="calendar1">
    <div class="flex width_100 --justify-content">
      <div class="flex flex-direction_column justify-content_center">
        <div class="font-size_18 text-align_center">{{ setDate.year }}</div>
        <div class="font-size_80 line-height_100 --font-weight --text-align">
          {{ setDate.month }}
        </div>
      </div>
    </div>
    <div class="sp_64"/>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: null,
      month: null,
    };
  },
  props: {
    date: { type: String },
  },
  computed: {
    setDate() {
      const parts = this.date.split("-");
      const year = parts[0];
      const month = parseInt(parts[1], 10); // Parse as integer
      const day = parts[2];
      return { year, month, day };
    },
  },
};
</script>

<style>
.calendar1 {
  padding: 0 48px;
}
.calendar1 .vc-highlight::before,
.calendar1 .vc-highlight::after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38px;
  height: 38px;
  border-radius: var(--border-radius-32);
}
.calendar1 .vc-highlight::after {
  background: var(--pc-pc-tr);
  border-width: 1px;
  border-style: var(--border-style);
  border-color: var(--po-po-pc);
}
.calendar1 .vc-highlight::before {
  display: var(--box-shadow-display);
  -webkit-box-shadow: 0 10px 20px -10px var(--primary-color);
  box-shadow: 0 10px 20px -10px var(--primary-color);
}
.calendar1 .vc-highlight-content-solid {
  color: var(--po-po-pc);
  font-weight: var(--font-weight);
}
.calendar1 .vc-week,
.calendar1 .vc-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
}
.calendar1 .vc-day {
  min-height: 40px;
}
.calendar1 .vc-day-content {
  line-height: 100%;
  font-size: var(--font-size-14);
}
.calendar1 .vc-weekday {
  text-align: center;
  font-weight: var(--font-weight);
  font-size: var(--font-size-15);
  margin-bottom: 24px;
}
</style>
