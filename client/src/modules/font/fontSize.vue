<template>
  <formBox icon="textAa" title="폰트 사이즈" :hidden="false">
    <v-slider
      v-model="customData.fontSize"
      :min="1"
      :max="3"
      :step="1"
      thumb-label
    ></v-slider>
  </formBox>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      customData: "getCustomData",
    }),
  },
};
</script>
