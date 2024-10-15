<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle
      class="pa_modal"
      title="Archive"
      content="Are you sure you want to archive Jeff's conversation?"
    />
    <formField class="pa_modal" label="title" :spacing="true" v-model="functionData.fnTitle" />
    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="handleSave"
      ><span>Save Data</span></buttonDefault>
      <buttonDefault
        class="width_100"
        variant="text"
        height="46"
        @click="updateDialog(false)"
      ><span>Cancel</span></buttonDefault>
    </div>
  </dialogModal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      functionData: "getFunctionData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    handleSave() {
      if (!this.functionData.fnTitle || this.functionData.fnTitle.trim() === "") {
        window.confirm("Title field is required. Please enter a value.");
        return;
      }
      this.$router.push({ name: "save" });
    },
  },
};
</script>
