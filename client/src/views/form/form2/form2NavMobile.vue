<!-- editorNavigation.vue -->
<template>
  <div class="form-nav-mobile">
    <v-tabs class="tab-navigation navigation__mobile" v-model="active_tab">
      <v-tab
        v-for="(tab, index) in form2TabOptions"
        :key="tab.value"
        :value="tab.value"
        @click="handleScrollTo(tab.value)"
      >
        <span> {{ tab.title }}</span>
      </v-tab>
    </v-tabs>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      section: "getSection",
      form2TabOptions: "getForm2TabOptions",
    }),
    active_tab() {
      return this.section;
    },
  },
  methods: {
    handleScrollTo(tab) {
      if (tab) {
        const targetSection = document.getElementById(tab);
        if (targetSection) {
          // Scroll to the target section with an offset of 200 pixels
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth",
          });
        }
      }
    },
  },
};
</script>
