<template>
  <button
    :class="['listItem', { selected: modelValue }]"
    @click="updateValue($event)"
  >
    <icon v-if="icon" class="icon_18">
      <component :is="icon" />
    </icon>
    <div
      v-if="label"
      class="display_flex flex-direction_column align-items_flex-start width_100"
    >
      <div v-if="label" class="label">{{ label }}</div>
      <div v-if="content" class="content" v-html="content"></div>
    </div>

    <slot></slot>
    <button v-if="checkbox" class="icon_24">
      <icon v-if="!modelValue"><boxCleared /></icon>
      <icon v-if="modelValue" class="checked"><boxChecked /></icon>
    </button>

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
    upload: defineAsyncComponent(() => import("@/components/icon/upload.vue")),
    search: defineAsyncComponent(() => import("@/components/icon/search.vue")),
    magicwand: defineAsyncComponent(() =>
      import("@/components/icon/magicwand.vue")
    ),
    trash: defineAsyncComponent(() => import("@/components/icon/trash.vue")),
    pencil: defineAsyncComponent(() => import("@/components/icon/pencil")),

    logoYoutube: defineAsyncComponent(() =>
      import("@/components/icon/logoYoutube.vue")
    ),
    crop: defineAsyncComponent(() => import("@/components/icon/crop.vue")),
    magicWand: defineAsyncComponent(() =>
      import("@/components/icon/magicWand.vue")
    ),
    grid: defineAsyncComponent(() => import("@/components/icon/grid")),
    swipe: defineAsyncComponent(() => import("@/components/icon/swipe")),
    thumb: defineAsyncComponent(() => import("@/components/icon/thumbnail")),
    slideshow: defineAsyncComponent(() =>
      import("@/components/icon/slideshow")
    ),
    falling: defineAsyncComponent(() =>
      import("@/components/icon/confettiFalling")
    ),
    side: defineAsyncComponent(() => import("@/components/icon/confettiSide")),
    explosion: defineAsyncComponent(() =>
      import("@/components/icon/confettiExplosion")
    ),
    confetti: defineAsyncComponent(() => import("@/components/icon/shapes")),
    heart: defineAsyncComponent(() => import("@/components/icon/heart")),
    sakura: defineAsyncComponent(() => import("@/components/icon/sakura")),
    kanji: defineAsyncComponent(() => import("@/components/icon/kanji")),
    flower: defineAsyncComponent(() => import("@/components/icon/flower")),
    cross: defineAsyncComponent(() => import("@/components/icon/cross")),

    ribbon: defineAsyncComponent(() => import("@/components/icon/ribbon")),
    left: defineAsyncComponent(() => import("@/components/icon/alignLeft")),
    center: defineAsyncComponent(() => import("@/components/icon/alignCenter")),
    right: defineAsyncComponent(() => import("@/components/icon/alignRight")),
    eye: defineAsyncComponent(() => import("@/components/icon/eye")),
    share: defineAsyncComponent(() => import("@/components/icon/share")),
  },
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    content: {
      type: String,
    },
    checkbox: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    updateValue() {
      this.$emit("update:modelValue", !this.modelValue);
    },
  },
};
</script>

<style scoped>
/* common */
.listItem {
  padding: 10px 16px;
  width: 100%;
  min-height: 56px;
  gap: 16px;
  justify-content: space-between;
  border-radius: 16px;
}
.listItem .label,
.listItem .content {
  width: 100%;
  text-align: left;
}
.listItem .label {
  font-size: 15px;
  font-weight: 500;
  color: rgb(var(--mio-theme-color-on-background));
}
.listItem .content {
  font-size: 13px;
  color: rgb(var(--mio-theme-color-on-background-70));
}
.listItem .checked {
  stroke: rgb(var(--mio-theme-color-on-primary));
}
.listItem:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.listItem.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
</style>
