<template>
  <div id="previewComment">
    <div class="position_relative z-index_2" v-if="commentData.fnComment">
      <section class="--pa_0-4-0">
        <article>
          <div class="sp_72" />
          <div class="pa_24">
            <div class="previewSubTitle">COMMENT</div>
            <div class="sp_12" />
            <div class="flex --justify-content width_100">
              <div class="previewTitle">{{ commentData.title }}</div>
            </div>
            <div class="sp_12" />
            <div class="h-hr --display_none-none-block" />
          </div>
          <div class="sp_24" />
          <commentComp class="pa_24" :config="true" />
          <div class="sp_64" />
          <button
            class="button-defaulted --border-radius_32 gap_18"
            @click="dialog = true"
          >
            <span v-if="isSticky">제출하기</span>
            <icon><paperPlane /></icon>
            <commentSubmit
              v-if="dialog"
              :dialog="dialog"
              @update:dialog="dialog = $event"
              :config="true"
            />
          </button>
          <div class="h-hr --display_none-none-block" />
        </article>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

import paperPlane from "@/components/icon/paperPlane.vue";

export default {
  components: {
    paperPlane,
    commentComp: defineAsyncComponent(() =>
      import("@/modules/comment/commentComp.vue")
    ),
    commentSubmit: defineAsyncComponent(() =>
      import("@/modules/comment/commentSubmit.vue")
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
