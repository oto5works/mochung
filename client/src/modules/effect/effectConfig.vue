<template>
  <formBox
    :icon="effect.config"
    title="효과 스타일"
    @click="dialog = true"
  >
    <div class="edit-article__text">{{ selectedConfig }}</div>
    <fnSelect
      v-if="dialog"
      optionTitle="효과 스타일"
      :options="effectConfigOptions"
      :selected="effect.config"
      @update:selected="effect.config = $event"
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
