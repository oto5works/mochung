<template>
  <div id="previewComment">
    <sectionView v-if="commentData.fnComment">
      <div class="previewComment">
        <div class="previewTitle">{{ commentData.title }}</div>
        writerId = {{ writerId }}<br>
        userId = {{ userId }}
        <buttonCustom @click="dialog = true">
          <span>WRITE</span>
        </buttonCustom>
        <comments />
      </div>
      <commentForm
        v-if="dialog"
        :dialog="dialog"
        @update:dialog="dialog = $event"
      />
    </sectionView>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    comments: defineAsyncComponent(() =>
      import("@/components/comment/comments.vue")
    ),
    commentForm: defineAsyncComponent(() =>
      import("@/components/comment/commentForm.vue")
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
      writerId: "getWriterId",
      userId: "getUserId",
      
    }),
  },
};
</script>
