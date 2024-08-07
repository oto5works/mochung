<template>
  <fnTaps :options="transportData" />
</template>

<script>
import { mapGetters } from "vuex";
import fnTaps from "@/modules/functions/fnTaps.vue";

export default {
  components: { fnTaps },
  computed: {
    ...mapGetters({
      transportData: "getTransportData",
    }),
  },
};
</script>
