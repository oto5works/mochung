<template>
  <cardView
    :icon="effect.config"
    title="효과 스타일"
    @click="dialog = true"
  >
    <span>{{ selectedConfig }}</span>
    <selectorOption
      v-if="dialog"
      optionTitle="효과 스타일"
      :options="effectConfigOptions"
      :selected="effect.config"
      @update:selected="effect.config = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    selectorOption: defineAsyncComponent(() =>
      import("@/components/selector/selectorOption.vue")
    ),
  },
  props: {
    effect: { type: Object },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      effectConfigOptions: "getEffectConfigOptions",
    }),
    selectedConfig() {
      const selectedOption = this.effectConfigOptions.find(
        (option) => option.value === this.effect.config
      );
      return selectedOption ? selectedOption.title : this.effect.config;
    },
  },
};
</script>
