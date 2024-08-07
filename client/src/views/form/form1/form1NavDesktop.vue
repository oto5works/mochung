<!-- editorNavigation.vue -->
<template>
  <div class="editorNavigation">
    <!-- PC -->
    <div class="navigation__pc">
      <div class="navigation-title">
        <div class="--font-size_11">모바일 청첩장</div>
        <div class="sp_8" />
        <div class="--font-size_24 --font-weight">스마트<br />디자인</div>
      </div>
      <div class="sp_8" />

      <div class="navigation-content">
        <div
          class="navigation-item flex align-items_center gap_8"
          v-for="(tab, index) in form1TabOptions"
          :key="tab.value"
          :value="tab.value"
          @click="handleScrollTo(tab.value)"
          :class="getStatusClass(tab)"
        >
          <div class="spinner">
            <span v-if="!tab.completed">{{ index + 1 }}</span>
            <span v-if="tab.completed && tab.value === section">{{
              index + 1
            }}</span>

            <div class="confirm" v-if="tab.completed && tab.value !== section">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-dasharray="24"
                  stroke-dashoffset="24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 11L11 17L21 7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="24;0"
                  />
                </path>
              </svg>
            </div>
          </div>
          <span class="navigation-text">{{ tab.title }}</span>
        </div>
      </div>
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
      } else {
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
  top: 136px;
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

.navigation-text {
  font-size: 14px;
  color: var(--font-color);
  user-select: none;
}

/*-- normal --*/
.navigation-item {
  position: relative;
  display: flex;
  gap: 8px;
  opacity: 0.4;
  cursor: pointer;
}
.navigation-item .spinner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--font-color);
}
.navigation-item .spinner span {
  font-size: 11px;
  font-weight: 400;
  color: var(--font-color);
  user-select: none;
}

/*-- Active --*/
.navigation-item.active {
  opacity: 1;
  border: unset;
}
.navigation-item.active .spinner {
  background-color: transparent;
  border: unset;
}
.navigation-item.active .spinner::before {
  position: absolute;
  width: 100%;
  height: 100%;
  content: "";
  border-radius: 50%;
  border: 2px solid var(--primary-color);
  border-bottom-color: transparent;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}
.navigation-item.active .spinner span {
  font-weight: 700;
  color: var(--primary-color);
}

/*-- completed --*/
.navigation-item.completed {
  opacity: 1;
}
.navigation-item.completed .spinner {
  background-color: var(--primary-color);
  border: unset;
}
.navigation-item.completed span {
  color: var(--primary-color);
  font-weight: 700;
}
.navigation-item.completed .confirm {
  color: var(--primary-on);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.navigation-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.navigation-text.normal {
}
</style>
