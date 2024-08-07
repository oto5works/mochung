<template>
  <fnTaps :options="noticeData.notices" />
</template>

<script>
import { mapGetters } from "vuex";
import fnTaps from "@/modules/functions/fnTaps.vue";

export default {
  components: { fnTaps },
  computed: {
    ...mapGetters({
      noticeData: "getNoticeData",
    }),
  },
};
</script>
