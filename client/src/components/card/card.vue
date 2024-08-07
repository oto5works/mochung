<template>
  <button class="card">
    <slot></slot>
    <div class="overlay" />
    <div class="shadow" />
    <div class="outline" />
  </button>
</template>

<script>
export default {
  components: {},
  props: {},
};
</script>

<style scoped>
.card {
  position: relative;
  min-height: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
  padding: 24px;
  border-radius: 24px;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.card .shadow {
  -webkit-box-shadow: 0 5px 20px 0 var(--mio-theme-color-on-background);
  box-shadow: 0 5px 20px 0 var(--mio-theme-color-on-background);
  opacity: 0.08;
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.card:hover .shadow {
  -webkit-box-shadow: 0 5px 20px 0 var(--mio-theme-color-primary);
  box-shadow: 0 5px 20px 0 var(--mio-theme-color-primary);
  opacity: 0.24;
}

.card .outline {
  outline-width: 1px;
  outline-style: solid;
  outline-color: var(--mio-theme-color-primary);
  -webkit-transition: all 0.4s ease;
  transition: all 0.4s ease;
  opacity: 0.08;
}
.card:hover .outline {
  outline-width: 2px;
  outline-color: var(--mio-theme-color-primary);
  opacity: 1;
}

.card .overlay {
    background-color: var(--mio-theme-color-background);
}
</style>
