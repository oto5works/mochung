<template>
  <cardView :icon="effect.shape" title="효과 모양" @click="dialog = true">
    <span>{{ selectedShape }}</span>
    <selectorOption
      v-if="dialog"
      optionTitle="효과 모양"
      :options="effectShapeOptions"
      :selected="effect.shape"
      @update:selected="effect.shape = $event"
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
      effectShapeOptions: "getEffectShapeOptions",
    }),
    selectedShape() {
      const selectedOption = this.effectShapeOptions.find(
        (option) => option.value === this.effect.shape
      );
      return selectedOption ? selectedOption.title : this.effect.shape;
    },
  },
};
</script>
