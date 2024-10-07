<template>
    <cardView icon="chat" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="commentData.fnComment"
    ></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.commentData.fnComment = !this.commentData.fnComment
      this.handleScrollToAction("previewComment");
    },
  },
};
</script>
