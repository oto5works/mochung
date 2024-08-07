<template>
  <div class="fnOption">
    <buttonOption
      v-for="(option, i) of introOptions"
      :key="i"
      @click="selectIntro(option)"
      :class="{ selected: this.introData.content === option.content }"
    >
      <div class="fnOption-image">
        <div class="font-size_14 width_100 --text-align --font-weight">
          {{ option.title }}
        </div>
        <div
          class="font-size_12 width_100 --text-align"
          v-html="option.content"
        ></div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      introOptions: "getIntroOptions",
      introData: "getIntroData",
    }),
  },
  methods: {
    selectIntro(option) {
      this.introData.title = option.title;
      this.introData.content = option.content;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption {
  grid-template-columns: 1fr;
}
.fnSelect__item::before,
.fnSelect__item::after {
  border-radius: var(--border-radius-16);
}
.fnOption-image {
  aspect-ratio: unset;
}
</style>
