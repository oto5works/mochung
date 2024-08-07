<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    :config="true"
    title="교통수단"
  >
    <article>
      <transportForm />
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>

<script>
import transportForm from "@/modules/transport/transportForm.vue";

export default {
  components: { transportForm },
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
