<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle
      class="pa_24"
      title="Bank Account"
      content="Get an official Creative Cloud subscription. When you make a payment"
    />
    <gridstack />

    <div class="dialog-actions">
      <buttonDefault class="width_100" variant="filled" height="46" @click="updateDialog(false)"
        ><span>Confirm</span></buttonDefault
      >
    </div>
  </dialogModal>
</template>

<script>
import gridstack from "@/modules/gridstack/gridstack";

export default {
  components: {
    gridstack,
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
