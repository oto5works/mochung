<template>
  <div id="preview" class="preview">
    <customData />

    <background />

    <div id="audiosView">
      <audios v-if="previewFunction.audios" />
    </div>

    <div id="functionsView">
       <likeView v-if="previewFunction.like" /> 
      <buttonAlt variant="fuctions" @click="handleClickEvent">
        <icon class="icon_20"><caretDown /></icon>
      </buttonAlt>
    </div>
    <!--
    <effect
      v-if="
        previewFunction.effect &&
        (sectionsVisibility.homeView || sectionsVisibility.introView)
      "
      :isVisible="
        previewFunction.effect &&
        (sectionsVisibility.homeView || sectionsVisibility.introView)
      "
    />
-->
    <div class="preview-content">
      <div
        v-for="(option, index) of previewFunction.order"
        :key="index"
        :id="`${option}View`"
        class="section"
        ref="sections"
      >
        <component
          :is="option"
          :isVisible="sectionsVisibility[`${option}View`] || false"
        />
      </div>
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
    customData,
    caretDown,
    buttonAlt,
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
    
    /* 
    effect: defineAsyncComponent(() =>
      import("@/preview/effect/effectView.vue")
    ),
    likeView: defineAsyncComponent(() => import("@/preview/like/likeView.vue")), */
    notice: defineAsyncComponent(() => import("@/views/preview/notice/notice")),
    footer: defineAsyncComponent(() =>
      import("@/preview/footers/footersView.vue")
    ),
  },
  data() {
    return {
      sectionsVisibility: {
        homeView: true,
        introView: false,
        calendarView: false,
        locationView: false,
        galleryView: false,
        surveyView: false,
        commentView: false,
        depositView: false,
        footerView: false,
      },
    };
  },

  computed: {
    ...mapGetters({
      previewFunction: "getPreviewFunction",
    }),
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          this.sectionsVisibility[sectionId] = entry.isIntersecting;

          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    // 모든 섹션에 대해 Observer를 설정합니다.
    this.$refs.sections.forEach((section) => {
      observer.observe(section);
    });
  },
  methods: {
    ...mapActions(["fetchFormData", "handleScrollToAction"]),
    handleFetchFormData(id) {
      this.fetchFormData(id);
    },
    handleClickEvent() {
      this.handleScrollToAction("previewFooter");
    },
  },
};
</script>
