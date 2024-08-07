<template>
  <formBox icon="chat" title="방명록" @click="handleClickEvent">
      <v-switch
        style="pointer-events: none"
        v-model="commentData.fnComment"
        hide-details
        inset
      ></v-switch>
  </formBox>
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
    ...mapActions(['handleScrollToAction']),
    handleClickEvent() {
      this.commentData.fnComment = !this.commentData.fnComment;
      this.handleScrollToAction('previewComment');
    },
  },
};
</script>
