<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>

    <div class="pa_modal">
      <commentSwitch />
      <enableView
        class="selected"
        v-if="!commentData.fnComment"
        title="기능 이용 대기 중"
        content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요."
      />
    </div>

    <div v-if="commentData.fnComment" class="pa_modal">
      <div class="form-spacing" />
      <titleSection title="추천 문구" />
      <selectorTitle option="commentData" />
      <div class="sp_8" />
      <commentOptions />
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import enableView from "@/components/enable/enableView.vue";
import commentSwitch from "@/modules/comment/commentSwitch.vue";
import selectorTitle from "@/components/selector/selectorTitle.vue";
import commentOptions from "@/modules/comment/commentOptions.vue";

export default {
  components: {
    commentSwitch,
    enableView,
    selectorTitle,
    commentOptions,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
