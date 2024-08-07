<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="메인화면 스타일"
    :config="true"
  >
    <article>
      <designOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    designOptions: defineAsyncComponent(() =>
      import("@/modules/design/designOptions.vue")
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
