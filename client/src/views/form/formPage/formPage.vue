<template>
  <div class="formPage">
    <buttonDefault
      variant="filled"
      height="40"
      v-if="isLastTab"
      @click="dialog = true"
    >
      <span>저장하기</span>
    </buttonDefault>

    <div
      class="btn-arrow next"
      variant="text"
      height="46"
      v-if="!isLastTab"
      @click="goToNextTab"
    >
      <icon class="arrow-icon left"><arrowRight2 /></icon>
      <span>{{ nextTabTitle }}</span>
      <icon class="arrow-icon right"><arrowRight2 /></icon>
    </div>

    <div
      class="btn-arrow previous"
      variant="text"
      height="46"
      v-if="!isFirstTab"
      @click="goToPreviousTab"
    >
      <icon class="arrow-icon left"><arrowLeft2 /></icon>
      <span>{{ previousTabTitle }}</span>
      <icon class="arrow-icon right"><arrowLeft2 /></icon>
    </div>

    <saveTitle
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { mapGetters, mapActions } from "vuex";
import arrowLeft2 from "@/components/icon/arrowLeft2";
import arrowRight2 from "@/components/icon/arrowRight2";

export default {
  components: {
    arrowLeft2,
    arrowRight2,
    saveTitle: defineAsyncComponent(() =>
      import("@/modules/save/saveTitle.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      section: "getSection",
      form1TabOptions: "getForm1TabOptions",
    }),
    previousTabTitle() {
      const currentIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === this.section
      );
      return this.form1TabOptions[currentIndex - 1].title;
    },
    nextTabTitle() {
      const currentIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === this.section
      );
      return this.form1TabOptions[currentIndex + 1].title;
    },
    isFirstTab() {
      return this.section === this.form1TabOptions[0].value;
    },
    isLastTab() {
      return (
        this.section ===
        this.form1TabOptions[this.form1TabOptions.length - 1].value
      );
    },
  },
  methods: {
    ...mapActions(["updateSection"]),
    goToPreviousTab() {
      const currentIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === this.section
      );
      const previousTab = this.form1TabOptions[currentIndex - 1].value;
      this.updateSection(previousTab);
      window.scrollTo(0, 0); // Scroll to the top of the window
    },
    goToNextTab() {
      const currentIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === this.section
      );
      const nextTab = this.form1TabOptions[currentIndex + 1].value;
      this.updateSection(nextTab);
      window.scrollTo(0, 0); // Scroll to the top of the window
    },
  },
};
</script>

<style scoped>
.formPage {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
  margin-top: 64px;
}

.btn-arrow {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  overflow: hidden;
  max-width: 100%;
  transition: all 0.25s cubic-bezier(0.65, 0, 0.35, 1);
}
.btn-arrow span {
  font-size: 1rem;
  font-weight: 600;
  transition: inherit;
}
.btn-arrow.next:hover span {
  transform: translateX(1.2em);
}
.btn-arrow.previous:hover span {
  transform: translateX(-1.2em);
}
.arrow-icon {
  width: 0.75em;
  height: 0.75em;
  transition: inherit;
}
.btn-arrow.next .arrow-icon.left,
.btn-arrow.previous:hover .arrow-icon.right {
  transform: translateX(-1em);
}
.btn-arrow.previous .arrow-icon.right,
.btn-arrow.next:hover .arrow-icon.left {
  transform: translateX(1em);
}
.btn-arrow.previous:hover .arrow-icon.left {
  transform: translateX(-2em);
}
.btn-arrow.next:hover .arrow-icon.right {
  transform: translateX(2em);
}


@media all and (max-width: 1023px) {
}
</style>
