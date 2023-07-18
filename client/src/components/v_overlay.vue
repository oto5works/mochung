<template>
  <div id="v-overlay" @click="hideNavigation()">
</div>
</template>

<script>
export default {
  props: {
    menu: { type: Object },
  },
  methods: {
    hideNavigation() {
      const previewDivision = document.getElementById('v-navigation');
      const previewOverlay = document.getElementById('v-overlay');
      previewOverlay.style.opacity = '0';
    previewOverlay.addEventListener('transitionend', () => {
      previewOverlay.style.display = 'none';
    });
      previewDivision.style.transform = 'translateX(-100%)';
    },
  },
};
</script>
<style scoped>
  #v-overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    background-color: var(--background-on);
    z-index: 999;
    opacity: 0;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
  }
</style>