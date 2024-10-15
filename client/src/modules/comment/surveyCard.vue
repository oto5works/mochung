<template>
  <button class="surveyCard" :class="{ selected: selected }">
    <icon v-if="selected" class="icon_16"><boxChecked /></icon>
    <icon v-if="!selected" class="icon_16"><boxCleared /></icon>

    <span class="title">{{ title }}</span>
    <slot></slot>
    <div class="underlay" />
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    boxCleared: defineAsyncComponent(() =>
      import("@/components/icon/boxCleared.vue")
    ),
    boxChecked: defineAsyncComponent(() =>
      import("@/components/icon/boxChecked.vue")
    ),
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
    info: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.surveyCard {
  justify-content: flex-start;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  gap: 18px;
}
.surveyCard > .underlay {
  border: 1px solid rgb(var(--mio-theme-color-primary-05));
}
.surveyCard.hover > .underlay,
.surveyCard:hover > .underlay {
  background-color: rgb(var(--mio-theme-color-primary-07));
}
.surveyCard.selected > .underlay {
  background-color: rgb(var(--mio-theme-color-primary-07));
}



.surveyCard .title-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.surveyCard .title {
  display: flex;
  align-items: center;
  min-height: 24px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
}
.surveyCard .title span {
  white-space: nowrap;
}
</style>
