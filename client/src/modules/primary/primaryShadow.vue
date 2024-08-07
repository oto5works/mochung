<template>
  <formBox icon="shadow" title="그림자" @click="toggleShadow()">
    <v-switch v-model="customData.shadow" hide-details inset></v-switch>
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
    toggleShadow() {
      this.customData.shadow = !this.customData.shadow;
    },
  },
};
</script>
