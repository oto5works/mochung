<template>
  <button class="buttonText">
    <div class="slot">
      <slot></slot>
    </div>
    <div class="overlay" />
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.buttonText {
  position: relative;
  display: flex;
  cursor: pointer;
  padding: 4px 8px;
  font-size: 14px;
  transition: all 0.4s ease-in-out;
  color: var(--mio-theme-color-primary);

}
.buttonText .slot {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}
.buttonText.selected {
  font-weight: 700;
}
/*-- overlay --*/
.buttonText .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0;
}
.buttonText:hover .overlay {
  opacity: 0.04;
}
.buttonText.selected .overlay {
  background-color: var(--mio-theme-color-primary);
  opacity: 0.12;
}
/*-- span --*/
.buttonText span {
  font-size: inherit;
}
</style>

<style scoped>
.config .buttonText {
  color: var(--primary-color);
  font-size: var(--font-size-14);
}
/*-- overlay --*/
.config .buttonText .overlay {
  background-color: var(--pc-pc-tr);
}
.config .buttonText.selected .overlay {
  background-color: var(--pc-pc-tr);
}
</style>
