<template>
  <div id="preview" class="preview">
    <customData />

    <background />

    <!--
    <audios v-if="previewFunction.audios" />
    <likeView v-if="previewFunction.like" />
    <downScroll />

    <effect v-if="previewFunction.effect" />
    -->

    <div class="preview__content">
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

export default {
  components: {
    customData,
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
    audios: defineAsyncComponent(() =>
      import("@/modules/audios/audiosView.vue")
    ),

    effect: defineAsyncComponent(() =>
      import("@/modules/effect/effectView.vue")
    ),
    likeView: defineAsyncComponent(() => import("@/modules/like/likeView.vue")),

    downScroll: defineAsyncComponent(() =>
      import("@/views/preview/downScroll")
    ),

   
    notice: defineAsyncComponent(() => import("@/views/preview/notice/notice")),

    comment: defineAsyncComponent(() =>
      import("@/modules/comment/commentView.vue")
    ),
    deposit: defineAsyncComponent(() =>
      import("@/views/preview/deposit/deposit")
    ),
    survey: defineAsyncComponent(() => import("@/views/preview/survey/survey")),
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
