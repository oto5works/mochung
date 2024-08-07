<template>
  <button class="buttonCheck" :class="{ selected: selected }">
    <aniCheck v-if="selected" class="icon_16" />
    <div class="slot">
      <slot></slot>
    </div>

    <div class="outline" />
    <div class="overlay" />
    <div class="underlay" />
    <div class="shadow" />
  </button>
</template>

<script>
import aniCheck from "@/components/icon/aniCheck.vue";
export default {
  components: { aniCheck },

  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.buttonCheck {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 13px;
  transition: all 0.4s ease-in-out;
  gap: 8px;
}
.buttonCheck .slot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}
.buttonCheck.selected {
  color: var(--mio-theme-color-primary);
  font-weight: 700;
}
/*-- overlay --*/
.buttonCheck .overlay {
  background-color: var(--mio-theme-color-on-background);
  opacity: 0.02;
}
.buttonCheck:hover .overlay {
  opacity: 0.04;
}
.buttonCheck.selected .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0.12;
}
/*-- underlay --*/
.buttonCheck .underlay {
  background-color: var(--mio-theme-color-background);
}
/*-- outline --*/
.buttonCheck .outline {
  border-style: solid;
  border-width: 1px;
  border-color: var(--mio-theme-color-on-background);
  opacity: 0.12;
}
.buttonCheck:hover .outline {
  opacity: 0.16;
}
.buttonCheck.selected .outline {
  border-width: 2px;
  border-color: var(--mio-theme-color-primary);
  opacity: 1;
}
/*-- shadow --*/
.buttonCheck .shadow {
  box-shadow: 0 0 0 0 var(--mio-theme-color-on-background);
  opacity: 0;
}
.buttonCheck.selected .shadow {
  box-shadow: 0px 7px 29px 0px var(--mio-theme-color-primary);
  opacity: 0.2;
}

/*-- span --*/
.buttonCheck .slot {
  opacity: 0.6;
}
.buttonCheck:hover .slot,
.buttonCheck.selected .slot {
  opacity: 1;
}

span {
  font-size: 12px;
}
</style>

<style scoped>
.config .buttonCheck {
  border-radius: var(--border-radius-12);
}
.config .buttonCheck.selected {
  color: var(--primary-color);
}
/*-- overlay --*/
.config .buttonCheck .overlay {
  background-color: var(--background-on);
}
.config .buttonCheck.selected .overlay {
  background-color: var(--primary-color);
}
/*-- underlay --*/
.config .buttonCheck .underlay {
  background-color: var(--background-color);
}
/*-- outline --*/
.config .buttonCheck .outline {
  border-color: var(--background-on);
}
.config .buttonCheck.selected .outline {
  border-color: var(--primary-color);
}
/*-- shadow --*/
.config .buttonCheck .shadow {
  box-shadow: 0 0 0 0 var(--background-on);
}
.config .buttonCheck.selected .shadow {
  box-shadow: 0px 7px 29px 0px var(--primary-color);
}
</style>
