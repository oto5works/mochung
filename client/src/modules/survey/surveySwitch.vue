<template>
    <cardView icon="rsvp" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="surveyData.fnSurvey"
    ></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.surveyData.fnSurvey = !this.surveyData.fnSurvey
      this.handleScrollToAction("previewSurvey");
    },
  },
};
</script>
