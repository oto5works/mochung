<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="폰트 선택"
    :config="true"
  >
    <article>
      <fontFamilyOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import fontFamilyOptions from "@/modules/font/fontFamilyOptions.vue";

export default {
  components: { fontFamilyOptions },
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
