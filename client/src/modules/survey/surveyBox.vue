<template>
    <cardView icon="rsvp" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="surveyData.fnSurvey"
    ></toggleSwitch>
    <surveyDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    surveyDialog: defineAsyncComponent(() =>
      import("@/modules/survey/surveyDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewSurvey");
    },
  },
};
</script>
