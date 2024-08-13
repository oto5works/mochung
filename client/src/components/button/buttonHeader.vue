<template>
  <button class="buttonHeader">
    <slot></slot>
    <div class="underlay"/>
  </button>
</template>

<script>

export default {
  components: {

  },
  props: {
  },
  methods: {
   
  },
};
</script>

<style scoped>
.buttonHeader {
  position: relative;
  height: 32px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  transition: all 0.4s ease-in-out;
  font-size: 14px;
}
.buttonHeader.selected {
  font-weight: 500;
}
.buttonHeader .underlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: calc(100% + 36px);
  height: 100%;
}
.buttonHeader:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.buttonHeader.selected .underlay {
  background-color: rgb(var(--mio-theme-color-primary-20));
}
</style>