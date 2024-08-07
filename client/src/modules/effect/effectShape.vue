<template>
  <formBox :icon="effect.shape" title="효과 모양" @click="dialog = true">
    <div class="edit-article__text">{{ selectedShape }}</div>
    <fnSelect
      v-if="dialog"
      optionTitle="효과 모양"
      :options="effectShapeOptions"
      :selected="effect.shape"
      @update:selected="effect.shape = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    fnSelect: defineAsyncComponent(() =>
      import("@/modules/functions/fnSelect.vue")
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
