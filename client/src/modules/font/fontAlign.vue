<template>
  <formBox :icon="customData.align" title="문단 정렬" @click="dialog = true">
    <div class="edit-article__text">{{ selectedOption }}</div>
    <fnSelect
      v-if="dialog"
      optionTitle="효과 모양"
      :options="fontAlignOptions"
      :selected="customData.align"
      @update:selected="customData.align = $event"
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
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      fontAlignOptions: "getFontAlignOptions",
      customData: "getCustomData",
    }),
    selectedOption() {
      const selectedOption = this.fontAlignOptions.find(
        (option) => option.value === this.customData.align
      );
      return selectedOption ? selectedOption.title : this.customData.align;
    },
  },
};
</script>
