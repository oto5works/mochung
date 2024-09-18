<template>
  <div class="formPage">
    <buttonDefault variant="filled" height="40" v-if="isLastTab" @click="dialog = true">
      <span>저장하기</span>
    </buttonDefault>

    <div
      class="page-button"
      variant="text"
      height="46"
      v-if="!isLastTab"
      @click="goToNextTab"
    >
      <span>{{ nextTabTitle }}</span
      ><span class="page-arrow">&nbsp;→</span>
    </div>

    <div
      class="page-button"
      variant="text"
      height="46"
      v-if="!isFirstTab"
      @click="goToPreviousTab"
    >
      <span>{{ previousTabTitle }}</span><span class="page-arrow">&nbsp;←</span>
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
import arrowLeft3 from "@/components/icon/arrowLeft3";
import arrowRight3 from "@/components/icon/arrowRight3";

export default {
  components: {
    arrowLeft3,
    arrowRight3,
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
      this.updateTabCompletionStatus(this.section, false); // Set current tab completion status to false
      this.updateSection(previousTab);
      window.scrollTo(0, 0); // Scroll to the top of the window
    },
    goToNextTab() {
      const currentIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === this.section
      );
      const nextTab = this.form1TabOptions[currentIndex + 1].value;
      this.updateTabCompletionStatus(this.section, true); // Set current tab completion status to false
      this.updateSection(nextTab);
      window.scrollTo(0, 0); // Scroll to the top of the window
    },
    updateTabCompletionStatus(tabValue, status) {
      const tabIndex = this.form1TabOptions.findIndex(
        (tab) => tab.value === tabValue
      );
      this.form1TabOptions[tabIndex].completed = status;
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

.page-button {
  position: relative;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-out;
  white-space: nowrap;
  height: fit-content;
}
.page-button:before {
  background: currentColor;
  bottom: -1px;
  content: "";
  height: 1px;
  left: 0;
  position: absolute;
  transition: all 0.3s ease-out;
  width: 100%;
}
.page-button:hover:before {
  width: calc(100% + 4px);
}

.page-button .page-arrow {
  display: block;
  transition: all 0.3s ease-out;
}
.page-button:hover .page-arrow {
  transform: translate(4px);
}
@media all and (max-width: 1023px) {

}
</style>
