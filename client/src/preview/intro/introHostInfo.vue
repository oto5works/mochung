<template>
  <div style="letter-spacing: 0.1em" class="flex flex-direction_column gap_8 --font-weight">
    <div
      class="font"
      v-for="(option, index) in hostInfo"
      :key="index"
    >
      {{ option.name }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
    }),
  },
};
</script>
