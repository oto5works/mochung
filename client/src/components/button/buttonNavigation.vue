<template>
  <button class="buttonNavigation">
    <div class="overlay" />
    <div class="content" >
      <slot></slot>
    </div>
    <div class="outline" />
    <div class="underlay" />
    <div class="shadow" />
  </button>
</template>

<script>

export default {

};
</script>

<style scoped>
.buttonNavigation {
  color: var(--mio-theme-color-primary);
  font-size: 14px;
  font-weight: 700;
  height: 48px;
  gap: 18px;
  border-radius: 100px;
  width: 100%;

justify-content: flex-start;
padding: 0 16px;
}

.buttonNavigation .overlay {
  background-color: currentColor;
}
.buttonNavigation .underlay {
  color: var(--mio-theme-color-background);
  background-color: currentColor;
}
.buttonNavigation.selected .overlay {
  background-color: var(--mio-theme-color-on-primary);;
}
.buttonNavigation .content {
  color: var(--mio-theme-color-on-background);
}

.buttonNavigation.selected .underlay {
  color: var(--mio-theme-color-primary);
}

.buttonNavigation.selected .content {
  color: var(--mio-theme-color-on-primary);
}
</style>
