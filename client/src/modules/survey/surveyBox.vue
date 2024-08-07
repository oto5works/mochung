<template>
  <formBox icon="rsvp" title="게스트 정보 수집" @click="handleClickEvent">
    <div class="formBox__content">
      <v-switch
        style="pointer-events: none"
        v-model="surveyData.fnSurvey"
        hide-details
        inset
      ></v-switch>
    </div>
    <surveyDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
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
      if (this.surveyData.fnSurvey === false) {
        this.dialog = true;
      } else {
        this.surveyData.fnSurvey = false;
      }
      this.handleScrollToAction("previewSurvey");
    },
  },
};
</script>
