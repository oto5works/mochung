<template>
  <div class="flex flex-direction_column gap_8">
    <div
      class="font"
      v-for="(option, index) in hostInfo"
      :key="index"
    >
      <span v-if="option.relation">의 {{ option.relation }}</span>
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
