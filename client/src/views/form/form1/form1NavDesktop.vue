<!-- editorNavigation.vue -->
<template>
  <div class="editorNavigation">
    <!-- PC -->
    <div class="navigation__pc">

      <div class="title-wrap">
        <div class="content">On This Page</div>
        <div class="title">Smart Design</div>
      </div>

      <div class="sp_18" />

      <div class="navigation-content">
        <div
          class="navigation-item"
          v-for="(tab) in form1TabOptions"
          :key="tab.value"
          :value="tab.value"
          @click="handleScrollTo(tab.value)"
          :class="{ active: tab.value === this.section, completed: tab.completed,  }"
        >
          <span>{{ tab.title }}</span>
        </div>
      </div>
      <div class="sp_56" />
    </div>
    <!-- PC -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      section: "getSection",
      form1TabOptions: "getForm1TabOptions",
    }),
    active_tab() {
      return this.section;
    },
  },
  methods: {
    ...mapActions(["updateSection"]),
    handleScrollTo(tab) {
      this.updateSection(tab);
    },
    getStatusClass(tab) {
      if (tab.completed && tab.value !== this.section) {
        return "completed";
      } else if (tab.value === this.section) {
        return "active";
      } else if (tab.completed && tab.value === this.section) {
        return "completed-active";
      } 
      else {
        return "";
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
  top: 14vh;
  width: fit-content;
  min-width: 140px;
  margin: 0;
}
.navigation__pc {
  display: block;
  width: fit-content;
  overflow: visible;
  min-width: 120px;
}

.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
}
.content {
  font-size: 11px;
  line-height: 100%;
}
.navigation-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.navigation-item {
  position: relative;
  opacity: 0.4;
  cursor: pointer;
  font-size: 14px;
  line-height: 140%;
}
.navigation-item.active {
  opacity: 1;
  font-weight: 700;
}
.navigation-item.completed {
  text-decoration:line-through;
}


</style>
