<template>
  <article>
    <div class="form1Pagination">
      <buttonDefault v-if="isLastTab" @click="dialog = true">
        <span>
          SAVE<icon><arrowRight3 /></icon>
        </span>
        <p>완료</p>
      </buttonDefault>

      <buttonDefault v-if="!isLastTab" @click="goToNextTab">
        <span>
          UP NEXT<icon><arrowRight3 /></icon>
        </span>
        <p>{{ nextTabTitle }}</p>
      </buttonDefault>

      <buttonDefault v-if="!isFirstTab" @click="goToPreviousTab">
        <span>
          <icon><arrowLeft3 /></icon>PREVIOUS
        </span>
        <p>{{ previousTabTitle }}</p>
      </buttonDefault>
    </div>
    <saveDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </article>
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
    saveDialog: defineAsyncComponent(() =>
      import("@/modules/save/saveDialog.vue")
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
.form1Pagination {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  gap: 8px;
}
.buttonDefault {
  flex: 1;
  min-height: 112px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 0 24px;
  border-radius: var(--border-radius-24);
}
.buttonDefault svg {
  stroke-width: 12;
}
.buttonDefault span {
  display: flex;
  gap: 4px;
  align-items: center;
  font-size: 12px;
  word-spacing: 0.1em;
}
.buttonDefault p {
  font-weight: 700;
  font-size: 24px;
}
@media all and (max-width: 1023px) {
  .form1Pagination {
    flex-direction: column;
  }
}
</style>
