<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="배경 음악 설정"
        content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
      />
      <fnTitle option="noticeData" />
    </article>
    <article>
      <notice />
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="saveValue">
        <span>저장</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>

<script>
import { mapGetters } from "vuex";

import notice from "@/modules/notice/notice.vue";
import fnTitle from "@/modules/functions/fnTitle.vue";

export default {
  components: { notice, fnTitle },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      noticeData: "getNoticeData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.noticeData.fnNotice = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>
