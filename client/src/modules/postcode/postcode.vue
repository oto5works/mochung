<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="주소 검색"
    :config="true"
  >
    <div class="position_relative width_100 pa_16">
      <VueDaumPostcode @complete="oncomplete" />
    </div>
    <div class="sp_16" />
  </modalDialog>
</template>
<script>
import { VueDaumPostcode } from "vue-daum-postcode";
export default {
  components: { VueDaumPostcode },
  props: {
    dialog: { type: Boolean },
    address: { type: String },
    postcode: { type: String },
  },
  methods: {
    oncomplete: function (result) {
      console.log(result);
      if (result.userSelectedType === "R") {
        this.$emit("update:address", result.roadAddress);
        this.$emit("update:postcode", result.zonecode);
      } else {
        // 지번 주소 선택
        this.$emit("update:address", result.jibunAddress);
        this.$emit("update:postcode", result.zonecode);
      }
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
