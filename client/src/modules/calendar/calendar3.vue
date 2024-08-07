<template>
  <div class="calendar3">
    <div class="title__wrap">
      <div class="title__content">
        <div class="month__wrap">
          <div class="month">mmm</div>
          <div class="year">yyy</div>
        </div>
      </div>
    </div>
    <div class="sp_28" />
<slot></slot>
  </div>
</template>

<script>

export default {
  props: {
    date: { type: String },
  },
};
</script>

<style scoped>
.CalendarKorean .title__wrap {
  justify-content: flex-end;
}
.CalendarKorean .vc-day-content {
  font-size: 14px;
}
.month__wrap {
  position: relative;
  display: flex;
  gap: 4px;
}
.year {
  display: block;
  font-size: 16px;
  font-weight: var(--font-weight);
  line-height: 100%;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
.month {
  display: block;
  font-size: 40px;
  font-weight: var(--font-weight);
  line-height: 100%;
  letter-spacing: 0.15em;
  writing-mode: vertical-rl;
  text-orientation: upright;
}
</style>
