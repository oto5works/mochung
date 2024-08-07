<template>
  <button
    class="button-down button-defaulted --border-radius_32"
    id="down"
  >
    <icon><caretDown /></icon>
  </button>
</template>

<script>
import caretDown from "@/components/icon/caretDown.vue";

export default {
  components: { caretDown },
  methods: {
  },
};
</script>

<style scoped>
#down {
  position: fixed;
  bottom: 16px;
  right: 4.2%;
  z-index: 2;
}
.button-down {
  width: 56px;
  height: 56px;
}
</style>
