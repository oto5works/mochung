<!-- editorNavigation.vue -->
<template>
  <div class="editorNavigation">
    <!-- PC -->
    <div class="navigation__pc">
      <div class="--font-size_11 pa_16">모바일 청첩장</div>
      <div class="sp_8" />
      <div class="--font-size_24 --font-weight pa_16">커스텀 디자인</div>
      <div class="sp_8" />
      <v-tabs class="tab-navigation" v-model="active_tab" direction="vertical">
        <v-tab
          v-for="(tab, index) in form2TabOptions"
          :key="tab.value"
          :value="tab.value"
          @click="handleScrollTo(tab.value)"
        >
          <span>{{ tab.title }}</span>
        </v-tab>
      </v-tabs>

      <div class="sp_120" />

      <buttonDefault class="height_48 width_100 --border-radius_24 gap_8">
        <icon><save /></icon>
        <span>저장</span>
        <saveButton />
      </buttonDefault>
    </div>
    <!-- PC -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import save from "@/components/icon/save.vue";
import saveButton from "@/modules/save/saveButton.vue";

export default {
  components: { save, saveButton },

  computed: {
    ...mapGetters({
      section: "getSection",
      form2TabOptions: "getForm2TabOptions",
    }),
    active_tab: function () {
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

<style scoped>
.editorNavigation {
  position: sticky;
  display: flex;
  justify-content: center;
  top: 136px;
  width: fit-content;
  max-width: 140px;
  margin: 0;
}
.navigation__pc {
  display: block;
  width: fit-content;
  overflow: visible;
  min-width: 120px;
}
</style>
