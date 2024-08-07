<template>
  <formBox icon="outline" title="아웃라인" @click="toggleBorder()">
    <v-switch v-model="customData.border" hide-details inset></v-switch>
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
    toggleBorder() {
      this.customData.border = !this.customData.border;
    },
  },
};
</script>
