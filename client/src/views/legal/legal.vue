<template>
  <div class="ui-page">
    <div class="ui-grid">
      <div class="navi">
        <legalNavi />
      </div>

      <div class="content">
        <component :is="currentComponent" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/legal/legal.scss";
import legalNavi from "@/views/legal/legalNavi.vue";
import Terms from "@/views/legal/legalTerms.vue";
import Privacy from "@/views/legal/legalPrivacy.vue";

export default {
  components: {
    legalNavi,
  },
  data() {
    return {
      section: "terms", // 기본값
    };
  },
  computed: {
    currentComponent() {
      return this.section === "privacy" ? Privacy : Terms; // section에 따라 컴포넌트 로드
    },
  },
  watch: {
    "$route.params.section": {
      immediate: true,
      handler(newSection) {
        this.section = newSection || "terms"; // section 값이 없으면 기본값 'terms'
      },
    },
  },
};
</script>

<style scoped>
.navi {
  grid-column-end: 1;
  grid-column-start: 4;
  height: 200px;
  margin: 0;
  display: block;
  position: -webkit-sticky;
  position: sticky;
  padding: 0;
  top: var(--mio-theme-editor-spacing-top);
  z-index: 1;
  overflow: hidden;
}
.content {
  position: relative;

  grid-column-start: 5;
  grid-column-end: 13;
}
</style>
