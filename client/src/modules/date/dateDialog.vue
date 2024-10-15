<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle
      class="pa_modal"
      title="Wedding Date"
    />
    <dateForm class="pa_modal" />

    <div class="dialog-actions">
      <buttonDefault class="width_100" variant="filled" height="46" @click="updateDialog(false)"
        ><span>Confirm</span></buttonDefault
      >
    </div>
  </dialogModal>

</template>
<script>
import dateForm from "@/modules/date/dateForm.vue";

export default {
  components: {
    dateForm,
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
