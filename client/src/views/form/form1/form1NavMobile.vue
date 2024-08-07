<template>
  <div
    style="height: 96px"
    class="flex gap_8 justify-content_center form1NavMobile"
  >
    <div
      class="flex align-items_center gap_8"
      v-for="(tab, index) in form1TabOptions"
      :key="tab.value"
      :value="tab.value"
    >
      <div
        class="spinner"
        :class="{
          active: tab.value === section,
          completed: tab.completed && tab.value !== section,
        }"
        @click="handleScrollTo(tab.value)"
      >
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

      <div
        class="progress"
        v-if="index !== form1TabOptions.length - 1 "
        :class="{ active: tab.value === section, completed: tab.completed }"
      >
        <div class="loading-dots" v-if="tab.value === section">
          <div class="loading-dots--dot"></div>
          <div class="loading-dots--dot"></div>
          <div class="loading-dots--dot"></div>
          <div class="loading-dots--dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
  },
};
</script>

<style scoped>
.form1NavMobile {
  display: none;
}
.spinner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--font-color);
  opacity: 0.4;
  cursor: pointer;
}
.spinner span {
  font-size: 11px;
  font-weight: 400;
  color: var(--font-color);
  user-select: none;
}
.spinner.active {
  opacity: 1;
  border: unset;
}
.spinner.completed {
  background-color: var(--primary-color);
  opacity: 1;
  border: unset;
}
.spinner.active::before {
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
.spinner.active span {
  font-weight: 700;
  color: var(--primary-color);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.progress {
  width: 24px;
  height: 1px;
  border-radius: 1px;
  background-color: var(--font-color);
  opacity: 0.4;
}
.progress.completed {
  height: 2px;
  background-color: var(--primary-color);
  opacity: 1;
}
.progress.active {
  background-color: unset;
  opacity: 1;
}

@keyframes dot-keyframes {
  0% {
    opacity: 0.4;
    transform: scale(1, 1);
  }

  50% {
    opacity: 1;
    transform: scale(1.2, 1.2);
  }

  100% {
    opacity: 0.4;
    transform: scale(1, 1);
  }
}

.loading-dots {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.loading-dots--dot {
  animation: dot-keyframes 1.5s infinite ease-in-out;
  background-color: var(--primary-color);
  border-radius: 10px;
  display: inline-block;
  height: 2px;
  width: 2px;
}

.loading-dots--dot:nth-child(2) {
  animation-delay: 0.5s;
}

.loading-dots--dot:nth-child(3) {
  animation-delay: 1s;
}

.loading-dots--dot:nth-child(4) {
  animation-delay: 1.5s; /* 네 번째 도트의 애니메이션 지연 설정 */
}
.confirm {
  color: var(--primary-on);
}
@media all and (max-width: 1023px) {
  .form1NavMobile {
    display: flex;
  }
}
</style>
