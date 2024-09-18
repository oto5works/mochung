<template>
  <cardView
    icon="audios"
    title="배경음악"
    content="Use this to set the title for the section where guests can send"
    @click="handleClickEvent"
  >
    <toggleSwitch
      :clickEvent="false"
      v-model="audiosData.fnAudios"
    ></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      audiosData: "getAudiosData",
    }),
  },
  methods: {
    handleClickEvent() {
      this.audiosData.fnAudios = !this.audiosData.fnAudios;
    },
  },
};
</script>
