<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    :title="optionTitle"
    :config="true"
  >
    <article>
      <buttonSelect
      class="--border-radius_24"
        v-for="(option, i) of options"
        :key="i"
        @click="selectOption(option)"
        :class="{ selected: selected === option.value }"
      >
        <icon :icon="option.value"><component :is="option.value" /></icon>
        <span>{{option.title}}</span>
      </buttonSelect>
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
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
  },
  props: {
    dialog: { type: Boolean },
    optionTitle: { type: String },
    options: { type: Array },
    selected: { type: [Object, String, Boolean] },
  },
  methods: {
    selectOption(option) {
      this.$emit("update:selected", option.value);
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
<style scoped>
.buttonSelect {
  height: 64px;
}
</style>