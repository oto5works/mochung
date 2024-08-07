<!-- appbar.vue -->
<template>
  <button
    class="navigationButton"
    @click="toggleNavigation"
    :class="{ active: showNavigation }"
  >
    <div class="navigation-icon">
      <navigationIcon />
      <navigationIcon />
      <navigationIcon />
    </div>
  </button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import navigationIcon from "@/components/navigation/navigationIcon.vue";

export default {
  components: { navigationIcon },
  computed: {
    ...mapGetters({ showNavigation: "getNavigation" }),
  },
  methods: {
    ...mapActions(["toggleNavigationAction"]),
    toggleNavigation() {
      this.toggleNavigationAction();
    },
  },
};
</script>

<style scoped>
.navigationButton {
  position: relative;
  width: 24px;
  height: 24px;
}

.navigationButton .navigation-icon {
  position: relative;
  width: 16px;
  height: 16px;
  transform: rotate(0deg);
}

.navigationButton .navigation-icon svg {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  fill: currentColor;
}

.navigationButton .navigation-icon svg:nth-child(2) {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0deg);
}
.navigationButton.active .navigation-icon svg:nth-child(2) {
  transform: translate(-50%, -50%) rotate(90deg);
}

.navigationButton .navigation-icon svg:nth-child(1) {
  left: 50%;
  top: 80%;
  transform: translate(-50%, -50%) rotate(0deg);
}
.navigationButton.active .navigation-icon svg:nth-child(1) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(30deg);
}

.navigationButton .navigation-icon svg:nth-child(3) {
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%) rotate(0deg);
}
.navigationButton.active .navigation-icon svg:nth-child(3) {
  top: 50%;
  transform: translate(-50%, -50%) rotate(-30deg);
}

.navigationButton.active .navigation-icon {
  transform: rotate(180deg);
}
</style>
