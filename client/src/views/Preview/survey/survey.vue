<template>







  <div id="previewSurvey">
    <section class="--pa_0-4-0" v-if="surveyData.fnSurvey">
      <article>
        <div class="sp_176" />
        <div class="pa_48">
        <div class="previewSubTitle">SURVEY</div>
        <div class="sp_24" />
        <div class="flex --justify-content width_100">
          <div class="previewTitle">{{ surveyData.title }}</div>
        </div>
        <div class="sp_10" />
        <div class="font tiptap --text-align" v-html="surveyData.content" />

        <div class="sp_24" />
        <div class="flex --justify-content">
          <button
            class="button-inverse height_40 gap_12 --border-radius_32"
            @click="dialog = true"
          >
            <span>All our polos</span>
            <icon class="icon_18"><rsvp /></icon>
          </button>
        </div>
        <surveySubmit
          v-if="dialog"
          :dialog="dialog"
          @update:dialog="dialog = $event"
        />
      </div>
        <div class="sp_176" />
      </article>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import previewTitle from "@/views/preview/previewTitle.vue";
import rsvp from "@/components/icon/rsvp";

export default {
  components: {
    previewTitle,
    rsvp,
    surveySubmit: defineAsyncComponent(() =>
      import("@/views/preview/survey/surveySubmit")
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
};
</script>
<style scoped>
article {
  background-color: var(--primary-color);
  color: var(--primary-on);
}
.previewSubTitle {
  color: var(--primary-on);
}
.font {
  color: var(--primary-on);
}
.survey__wrap {
  background-color: var(--pc-pc-tr);
}
.config .button-inverse {
  padding: 0 24px
}
#previewSurvey {
  background-color: var(--pc-tr-pc);
}
</style>
