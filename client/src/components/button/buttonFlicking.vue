<template>
  <button class="buttonFlicking">
    <div class="flicking-content">
      <div class="fnOption-checkbox" />

      <buttonDefault>
        <icon><check /></icon>
      </buttonDefault>

      <div class="flicking-image">
        <slot></slot>
        <div class="outline" />
        <div class="overlay" />
        <div class="shadow" />
      </div>

      <div class="flicking-text">
        <div v-if="font1" class="font1">{{ font1 }}</div>
      </div>
    </div>
    <div class="flicking-space" />
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
  },
  methods: {
    handleClickEvent() {
      console.log("클릭");
    },
  },
};
</script>

<style scoped>
.buttonFlicking {
  position: relative;
  display: flex;
  flex: 0 0 176px;
}
.flicking-space {
  flex: 0 0 16px;
  height: 100%;
}
.flicking-content {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0 0 160px;
  height: auto;
  cursor: pointer;
}

.flicking-image {
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

/*-- TEXT --*/
.flicking-text {
  width: 100%;
  text-align: left;
}
.flicking-text .font1 {
  font-size: 14px;
  font-weight: 700;
}


.buttonFlicking.selected {
  color: var(--mio-theme-color-primary);
}

/*-- outline --*/
.buttonFlicking .outline {
  border-style: solid;
  border-width: 1px;
  border-color: var(--mio-theme-color-on-background);
  opacity: 0.08;
}
.buttonFlicking:hover .outline {
  opacity: 0.12;
}
.buttonFlicking.selected .outline {
  border-width: 2px;
  border-color: var(--mio-theme-color-primary);
  opacity: 1;
}

/*-- overlay --*/
.buttonFlicking .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0;
}
.buttonFlicking:hover .overlay {
  opacity: 0.02;
}
.buttonFlicking.selected .overlay {
  opacity: 0.06;
}

/*-- shadow --*/
.buttonFlicking .shadow {
  --box-shadow-defaulted: 0px 0px 0px 1px;
  --box-shadow-selected: 0px 5px 20px 0px;
}
.buttonFlicking .shadow {
  box-shadow: var(--box-shadow-defaulted) var(--mio-theme-color-on-background);
  opacity: 0.08;
}
.buttonFlicking.selected .shadow {
  box-shadow: var(--box-shadow-selected) var(--mio-theme-color-primary);
  opacity: 0.2;
}

.fnOption-text {
  text-align: left;
}

.buttonFlicking.selected .font1{
  color: var(--mio-theme-color-primary);
}
</style>

<style scoped>
.buttonFlicking .fnOption-checkbox {
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
.buttonFlicking .fnOption-checkbox::after {
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
.buttonFlicking:hover .fnOption-checkbox {
  opacity: 1;
}
.buttonFlicking.selected .fnOption-checkbox {
  display: none;
}

.buttonFlicking .buttonDefault {
  position: absolute;
  display: none;
  top: 8px;
  right: 8px;
  width: 22px;
  height: 22px;
  border-radius: 12px;
  z-index: 5;
}
.buttonFlicking.selected .buttonDefault {
  display: flex;
}
.buttonFlicking .buttonDefault svg {
  width: 16px;
  height: 16px;
}

.config .buttonFlicking .fnOption-checkbox {
  background-color: var(--background-color);
}
.config .buttonFlicking .fnOption-checkbox::after {
  border-color: var(--background-on);
}
.config .buttonFlicking .buttonDefault {
  border-radius: var(--border-radius-12);
}
</style>
