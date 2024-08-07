<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="stampOptions"
    :config="true"
  >
    <article>
      <stampOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    stampOptions: defineAsyncComponent(() =>
      import("@/modules/stamp/stampOptions.vue")
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
