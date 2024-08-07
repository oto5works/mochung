<template>
  <button class="buttonSelect">
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
export default {};
</script>

<style scoped>
.buttonSelect {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 13px;
  transition: all 0.4s ease-in-out;
}
.buttonSelect .slot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}
.buttonSelect.selected {
  color: var(--mio-theme-color-primary);
  font-weight: 700;
}
/*-- overlay --*/
.buttonSelect .overlay {
  background-color: var(--mio-theme-color-on-background);
  opacity: 0.02;
}
.buttonSelect:hover .overlay {
  opacity: 0.04;
}
.buttonSelect.selected .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0.12;
}
/*-- underlay --*/
.buttonSelect .underlay {
  background-color: var(--mio-theme-color-background);
  opacity: 0;
}
/*-- outline --*/
.buttonSelect .outline {
  border-style: solid;
  border-width: 1px;
  border-color: var(--mio-theme-color-on-background);
  opacity: 0.12;
}
.buttonSelect:hover .outline {
  opacity: 0.16;
}
.buttonSelect.selected .outline {
  border-width: 2px;
  border-color: var(--mio-theme-color-primary);
  opacity: 1;
}
/*-- shadow --*/
.buttonSelect .shadow {
  box-shadow: 0 0 0 0 var(--mio-theme-color-on-background);
  opacity: 0;
}
.buttonSelect.selected .shadow {
  box-shadow: 0px 7px 29px 0px var(--mio-theme-color-primary);
  opacity: 0.2;
}

/*-- span --*/
.buttonSelect .slot {
  opacity: 0.6;
}
.buttonSelect:hover .slot,
.buttonSelect.selected .slot {
  opacity: 1;
}

span {
  font-size: 12px;
}
</style>

<style scoped>
.config .buttonSelect.selected {
  color: var(--primary-color);
}
/*-- overlay --*/
.config .buttonSelect .overlay {
  background-color: var(--background-on);
}
.config .buttonSelect.selected .overlay {
  background-color: var(--primary-color);
}
/*-- underlay --*/
.config .buttonSelect .underlay {
  background-color: var(--background-color);
}
/*-- outline --*/
.config .buttonSelect .outline {
  border-color: var(--background-on);
}
.config .buttonSelect.selected .outline {
  border-color: var(--primary-color);
}
/*-- shadow --*/
.config .buttonSelect .shadow {
  box-shadow: 0 0 0 0 var(--background-on);
}
.config .buttonSelect.selected .shadow {
  box-shadow: 0px 7px 29px 0px var(--primary-color);
}
</style>
