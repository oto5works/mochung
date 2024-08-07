<template>
  <div class="previewTitle flex flex-direction_column width_100">
    <div class="stamp text">
      {{ title }}
      <div class="sp_24" />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {
  },
  props: {
    title: { type: String },
  },
};
</script>

<style scoped>
.stamp.text {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-family: "archivo";
}
</style>
