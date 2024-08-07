<template>
  <formBox icon="countdown" title="카운트다운" @click="toggleFunction">
    <div class="edit-item__content">
      <v-switch v-model="dateData.fnCountdown" hide-details inset></v-switch>
    </div>
  </formBox>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      dateData: "getDateData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    toggleFunction() {
      this.handleScrollToAction("previewCountdown");
      this.dateData.fnCountdown = !this.dateData.fnCountdown;
    },
  },
};
</script>
