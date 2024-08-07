<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="메인 프레임"
    :config="true"
  >
    <article>
      <frameOptions @update:dialog="updateDialog" />

    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    frameOptions: defineAsyncComponent(() =>
      import("@/modules/frame/frameOptions.vue")
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
