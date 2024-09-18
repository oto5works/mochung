<template>
    <cardView icon="side" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="effectData.fnEffect"
    ></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      effectData: "getEffectData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.effectData.fnEffect = !this.effectData.fnEffect
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>
