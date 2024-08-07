<template>
  <formBox icon="textAa" title="볼드체 사용" @click="toggleWeight()">
    <v-switch v-model="customData.fontWeight" hide-details inset></v-switch>
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
  methods: {
    toggleWeight() {
      this.customData.fontWeight = this.computedFontWeight ? "400" : "700";
    },
  },
};
</script>
