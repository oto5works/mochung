<template>
  <dialogModal
    :dialog="dialog"
    @update:dialog="updateDialog"
  >
  <titleArticle
      class="pa_24"
      title="Address Search"
    />
    <div class="position_relative width_100 pa_24">
      <VueDaumPostcode @complete="oncomplete" />
    </div>
  </dialogModal>
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
