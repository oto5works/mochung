<template>
  <button class="buttonOption">
    <div class="fnOption-checkbox" />

    <buttonDefault>
      <icon><check /></icon>
    </buttonDefault>

    <slot></slot>
    <div class="fnOption-text">
      <div v-if="font1" class="font1">{{ font1 }}</div>
      <div v-if="font2" class="font2">{{ font2 }}</div>
      <div v-if="font3" class="font3">{{ font3 }}</div>
    </div>
    <div v-if="src" class="more" @click="handleClickEvent">
      미리보기 <icon class="icon_12"><arrowUpRight /></icon>
    </div>
    <div class="outline" />
    <div class="overlay" />
    <div class="shadow" />
  </button>
</template>

<script>
import arrowUpRight from "@/components/icon/arrowUpRight";
import check from "@/components/icon/check";

export default {
  components: {
    arrowUpRight,
    check,
  },
  props: {
    font1: {
      type: String,
      default: "",
    },
    font2: {
      type: String,
      default: "",
    },
    font3: {
      type: String,
      default: "",
    },
    src: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleClickEvent() {
      console.log("클릭");
    },
  },
};
</script>

<style scoped>
.buttonOption {
  position: relative;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
  cursor: pointer;
  padding: 12px;
  border-radius: 24px;
  transition: all 0.4s ease-in-out;
  background-color: var(--mio-theme-color-background);
}
.buttonOption.selected {
  color: var(--mio-theme-color-primary);
}

/*-- outline --*/
.buttonOption .outline {
  border-style: solid;
  border-width: 1px;
  border-color: var(--mio-theme-color-on-background);
  opacity: 0;
}
.buttonOption:hover .outline {
  opacity: 0.08;
}
.buttonOption.selected .outline {
  border-width: 2px;
  border-color: var(--mio-theme-color-primary);
  opacity: 1;
}

/*-- overlay --*/
.buttonOption .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0;
}
.buttonOption:hover .overlay {
  opacity: 0.02;
}
.buttonOption.selected .overlay {
  opacity: 0.06;
}

/*-- shadow --*/
.buttonOption .shadow {
  --box-shadow-defaulted: 0px 0px 0px 1px;
  --box-shadow-selected: 0px 5px 20px 0px;
}
.buttonOption .shadow {
  box-shadow: var(--box-shadow-defaulted) var(--mio-theme-color-on-background);
  opacity: 0.08;
}
.buttonOption.selected .shadow {
  box-shadow: var(--box-shadow-selected) var(--mio-theme-color-primary);
  opacity: 0.2;
}

.fnOption-text {
  text-align: center;
}
.fnOption-text .font1 {
  font-size: 14px;
  font-weight: 700;
}
.fnOption-text .font2 {
  font-size: 11px;
  line-height: 130%;
  opacity: 0.6;
}
.fnOption-text .font3 {
  font-size: 12px;
  font-weight: 700;
}
.buttonOption.selected .font1,
.buttonOption.selected .font3 {
  color: var(--mio-theme-color-primary);
}
.buttonOption .more {
  width: 100%;
  font-size: 11px;
  font-weight: 700;
  text-align: left;
  color: var(--mio-theme-color-primary);
}
</style>

<style scoped>
.config .buttonOption {
  background-color: var(--background-color);
}
.config .buttonOption.selected {
  color: var(--primary-color);
}
.config .buttonOption {
  border-radius: var(--border-radius-24);
}
/*-- outline --*/
.config .buttonOption .outline {
  border-color: var(--background-on);
}
.config .buttonOption.selected .outline {
  border-color: var(--primary-color);
}
/*-- overlay --*/
.config .buttonOption .overlay {
  background-color: var(--primary-color);
}
/*-- shadow --*/
.config .buttonOption .shadow {
  box-shadow: var(--box-shadow-defaulted) var(--background-on);
}
.config .buttonOption.selected .shadow {
  box-shadow: var(--box-shadow-selected) var(--primary-color);
}

.config .fnOption-text .font1 {
  font-weight: var(--font-weight);
}
.fnOption-text .font3 {
  font-weight: var(--font-weight);
}
.config .buttonOption.selected .font1,
.config .buttonOption.selected .font3 {
  color: var(--primary-color);
}

.config .more {
  font-weight: var(--font-weight);
  color: var(--primary-color);
  text-align: var(--text-align);
}

</style>

<style scoped>
.buttonOption .fnOption-checkbox {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 12px;
  background-color: var(--mio-theme-color-background);
  z-index: 5;
  opacity: 0;
}
.buttonOption .fnOption-checkbox::after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border-width: 1px;
  border-style: solid;
  border-color: var(--mio-theme-color-on-background);
  opacity: 0.4;
}
.buttonOption:hover .fnOption-checkbox {
  opacity: 1;
}
.buttonOption.selected .fnOption-checkbox {
  display: none;
}

.buttonOption .buttonDefault {
  position: absolute;
  display: none;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 12px;
  z-index: 5;
}
.buttonOption.selected .buttonDefault {
  display: flex;
}
.buttonOption .buttonDefault svg {
  width: 16px;
  height: 16px;
}

.config .buttonOption .fnOption-checkbox {
  background-color: var(--background-color);
}
.config .buttonOption .fnOption-checkbox::after {
  border-color: var(--background-on);
}
.config .buttonOption .buttonDefault {
  border-radius: var(--border-radius-12);
}
</style>
