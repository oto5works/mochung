<template>
  <div>
    <div
      class="flex flex-wrap_wrap gap_4"
      v-for="option in commentTypeOptions"
      :key="option.value"
    >
      <commentCard
        :title="option.title"
        :info="option.info"
        :selected="commentData.commentType === option.value"
        @click="updateCommentType(option.value)"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import commentCard from "@/modules/comment/commentCard.vue";

export default {
  components: { commentCard },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
      commentTypeOptions: "getCommentTypeOptions",
    }),
  },
  methods: {
    updateCommentType(value) {
      console.log ('fefef', value)
      console.log ('fefef2', this.commentData.commentType)
      this.commentData.commentType = value
    },
  },
};
</script>
