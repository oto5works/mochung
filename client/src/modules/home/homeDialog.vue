<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="메인화면 스타일"
    :config="true"
  >
    <article>
      <homeOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    homeOptions: defineAsyncComponent(() =>
      import("@/modules/home/homeOptions.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    selectOption(option) {
      this.dateData.calendar = option.value;
      this.updateDialog(false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
