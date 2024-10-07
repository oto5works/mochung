<template>
    <cardView icon="chat" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="commentData.fnComment"
    ></toggleSwitch>
    <commentDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    commentDialog: defineAsyncComponent(() =>
      import("@/modules/comment/commentDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewComment");
    },
  },
};
</script>
