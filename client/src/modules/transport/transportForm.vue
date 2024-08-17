<template>
  <tiptapTabs :options="transportData" />
</template>

<script>
import { mapGetters } from "vuex";
import tiptapTabs from "@/components/tiptap/tiptapTabs.vue";

export default {
  components: { tiptapTabs },
  computed: {
    ...mapGetters({
      transportData: "getTransportData",
    }),
  },
};
</script>
