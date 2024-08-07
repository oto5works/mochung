<template>
  <fnTitle v-if="commentData.fnComment" option="commentData" />
</template>
<script>
import { mapGetters } from "vuex";
import fnTitle from "@/modules/functions/fnTitle.vue";

export default {
  components: {
    fnTitle,
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
    }),
  },
};
</script>
