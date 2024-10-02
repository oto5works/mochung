<template>
  <div class="calendar1">
    <div class="display_flex width_100 --justify-content">
      <div class="display_flex flex-direction_column justify-content_center">
        <div class="--font-size_13 text-align_center">{{ setDate.year }}</div>
        <div
          class="--font-size_48 line-height_100 font-weight_700 text-align_center"
        >
          {{ setDate.month }}
        </div>
      </div>
    </div>
    <div class="sp_56" />
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
  padding: 0 2.5em;
  width: 100%;
}
.calendar1 .vc-highlight {
  width: 2em;
  height: 2em;
  border-radius: var(--border-radius_24);
  background-color: rgb(var(--primary-color));
}
.vc-highlight-content-solid {
  font-weight: 700;
  color: rgb(var(--primary-on));
}
.calendar1 .vc-week,
.calendar1 .vc-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  position: relative;
}
.calendar1 .vc-day {
  min-height: 2.5em;
}
.calendar1 .vc-day-content {
  line-height: 100%;
  font-size: var(--font-size_13);
}
.calendar1 .vc-weekday {
  text-align: center;
  font-size: var(--font-size_13);
  opacity: 0.7;
  margin-bottom: 1.5em;
}
</style>
