<template>
  <div id="preview" class="preview">
    <customData />

    <background />

<!--
    <div id="audiosView">
      <audios v-if="previewFunction.audios" />

</div>
-->

<div id="functionsView">
  <!--<likeView v-if="previewFunction.like" />-->

  <buttonAlt variant="fuctions">
    <icon><caretDown /></icon>
</buttonAlt>
</div>
    <!--
    
   

    
    -->
   <!-- <effect v-if="previewFunction.effect" /> -->
    <div class="preview-content">
      <home />
      <component
        v-for="(option, index) of previewFunction.order"
        :key="index"
        :is="option"
      />

      <!-- <footers /> -->
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import customData from "@/preview/customData.vue";
import "@/preview/preview.scss";
import caretDown from "@/components/icon/caretDown.vue";
import buttonAlt from "@/preview/components/buttonAlt.vue";

export default {
  components: {
    customData, caretDown, buttonAlt,
    background: defineAsyncComponent(() =>
      import("@/preview/background/backgroundView.vue")
    ),
    home: defineAsyncComponent(() => import("@/preview/home/homeView.vue")),
    intro: defineAsyncComponent(() => import("@/preview/intro/introView.vue")),
    calendar: defineAsyncComponent(() =>
      import("@/preview/calendar/calendarView.vue")
    ),
    location: defineAsyncComponent(() =>
      import("@/preview/location/locationView")
    ),
    gallery: defineAsyncComponent(() =>
      import("@/preview/gallery/galleryView")
    ),
    survey: defineAsyncComponent(() => import("@/preview/survey/surveyView")),
    comment: defineAsyncComponent(() =>
      import("@/preview/comment/commentView")
    ),
    deposit: defineAsyncComponent(() =>
      import("@/preview/deposit/depositView")
    ),

    audios: defineAsyncComponent(() =>
      import("@/preview/audios/audiosView.vue")
    ),

    effect: defineAsyncComponent(() =>
      import("@/preview/effect/effectView.vue")
    ),
    likeView: defineAsyncComponent(() => import("@/preview/like/likeView.vue")),



    notice: defineAsyncComponent(() => import("@/views/preview/notice/notice")),

    footers: defineAsyncComponent(() =>
      import("@/views/preview/footers/footers")
    ),
  },
  created() {
    if (this.$route.name === "view") {
      this.handleFetchFormData(this.$route.params.id);
    }
  },
  computed: {
    ...mapGetters({
      previewFunction: "getPreviewFunction",
    }),
  },
  methods: {
    ...mapActions(["fetchFormData"]),
    handleFetchFormData(id) {
      this.fetchFormData(id);
    },
  },
};
</script>

