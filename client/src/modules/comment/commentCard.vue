<template>
  <button class="commentCard" :class="{ selected: selected }">
    <icon v-if="selected" class="icon_16"><boxChecked /></icon>
    <icon v-if="!selected" class="icon_16"><boxCleared /></icon>

<div class="title-wrap">
    <span class="title">{{ title }}</span>
    <span class="info">{{ info }}</span>
  </div>
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
.commentCard {
  justify-content: flex-start;
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  gap: 18px;
}
.commentCard > .underlay {
  border: 1px solid rgb(var(--mio-theme-color-primary-05));
}
.commentCard.hover > .underlay,
.commentCard:hover > .underlay {
  background-color: rgb(var(--mio-theme-color-primary-07));
}
.commentCard.selected > .underlay {
  background-color: rgb(var(--mio-theme-color-primary-07));
}



.commentCard .title-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 70%;
}
.commentCard .title {
  display: flex;
  align-items: center;
  min-height: 24px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
}
.info {
  font-size: 13px;
  font-weight: 400;
  line-height: 140%;
}
.commentCard .title span {
  white-space: nowrap;
}
</style>
