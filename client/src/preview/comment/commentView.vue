<template>
  <div id="previewComment">
    <sectionView v-if="commentData.fnComment">
      <div class="previewComment">
        <div class="title-wrap">
          <div class="width_100 --font-size_24 font-weight_700">
            {{ commentData.title }}
          </div>
          <buttonCustom @click="dialog = true">
            <span>WRITE</span>
          </buttonCustom>
        </div>
        <comments class="pa_16"/>
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
    }),
  },
};
</script>
