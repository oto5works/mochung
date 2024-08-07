<template>
  <formBox icon="polygons" title="모서리 둥글기" :hidden="false">
    <v-slider
      v-model="customData.radius"
      :min="0"
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