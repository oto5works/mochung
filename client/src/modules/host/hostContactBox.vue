<template>
  <formBox icon="phone" title="연락처 사용" @click="toggleFunction">
    <div class="formBox__content">
      <v-switch v-model="hostFunctions.fnContact" hide-details inset></v-switch>
    </div>
  </formBox>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      hostFunctions: "getHostFunctions",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    toggleFunction() {
      this.handleScrollToAction("previewIntro");
      this.hostFunctions.fnContact = !this.hostFunctions.fnContact;
    },
  },
};
</script>
