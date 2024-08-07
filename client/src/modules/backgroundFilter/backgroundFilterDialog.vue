<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="배경 필터"
    :config="true"
  >
    <article>
      <backgroundFilterOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    backgroundFilterOptions: defineAsyncComponent(() =>
      import("@/modules/backgroundFilter/backgroundFilterOptions.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
