<template>
  <div id="preview" class="preview">
    <background />
    <audios v-if="previewFunction.audios" />
    <likeView v-if="previewFunction.like" />
    <downScroll />

    <effect v-if="previewFunction.effect" />
    <div class="preview__content">
      <home />
      <div class="sp_72" />
      <component
        v-for="(option, index) of previewFunction.order"
        :key="index"
        :is="option"
      />
      <footers />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    background: defineAsyncComponent(() =>
      import("@/modules/background/backgroundView.vue")
    ),
    home: defineAsyncComponent(() => import("@/modules/home/homeView.vue")),

    intro: defineAsyncComponent(() => import("@/modules/intro/introView.vue")),
    calendar: defineAsyncComponent(() =>
      import("@/modules/calendar/calendarView.vue")
    ),

    gallery: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryView.vue")
    ),
    audios: defineAsyncComponent(() =>
      import("@/modules/audios/audiosView.vue")
    ),

    effect: defineAsyncComponent(() => import("@/modules/effect/effectView.vue")),
    likeView: defineAsyncComponent(() => import("@/modules/like/likeView.vue")),

    downScroll: defineAsyncComponent(() =>
      import("@/views/preview/downScroll")
    ),

    location: defineAsyncComponent(() =>
      import("@/views/preview/location/location")
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
