<!-- formNav_pc.vue -->
<template>
  <div class="formNav_pc">
    <div class="navigation-wrap">
      <div class="title-wrap">
        <div class="content">Form Data</div>
        <div class="title">스마트 디자인</div>
      </div>

      <div class="navigation-content">
        <div
          class="navigation-item"
          v-for="tab in form1TabOptions"
          :key="tab.value"
          :value="tab.value"
          @click="handleScrollTo(tab.value)"
          :class="{
            selected: tab.value === this.section,
          }"
        >
          <span>{{ tab.title }}</span>
        </div>
      </div>
    </div>
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
  },
  methods: {
    ...mapActions(["updateSection"]),
    handleScrollTo(tab) {
      this.updateSection(tab);
    },
  },
};
</script>

<style scoped>
.formNav_pc {
  position: absolute;
  top: var(--mio-theme-editor-spacing-top);
  width: 100%;
  margin: 0;
  padding-left: 12px;
}
.navigation-wrap {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.title-wrap {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  font-size: 24px;
  font-weight: 600;
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
  font-weight: 300;
}
.navigation-item.selected {
  opacity: 1;
  font-weight: 600;
}
</style>
