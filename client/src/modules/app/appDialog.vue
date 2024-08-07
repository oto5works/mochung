<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    :config="true"
  >
    <article>
      <formTitle2
        title="배경 음악 설정"
        content="다양한 배경음악 중에서 선택하거나, 직접 원하는 음악을 업로드하여 홈 화면에 나만의 분위기를 조성하세요. 배경음악을 통해 홈 화면을 더욱 특별하게 만들어보세요."
      />
      <appOptions />
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>

<script>
import appOptions from "@/modules/app/appOptions.vue";

export default {
  components: { appOptions },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
