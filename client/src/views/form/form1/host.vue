<template>
  <div class="editor-item">
    <titleMain
      step="STEP 2"
      title="예식 정보"
      content="다양한 템플릿을 활용하여 간편하게 디자인하거나, 직접 이미지를 업로드하여 당신만의 개성을 담아 모바일 카드를 제작할 수 있습니다."
    />
    <hostForm />
    <div class="form-spacing" />
    <titleArticle title="Article Title" />
    <bankBox />
  </div>
</template>
<script>
import hostForm from "@/modules/host/hostForm.vue";
import bankBox from "@/modules/bank/bankBox.vue";

export default {
  components: {
    hostForm,
    bankBox,
  },
};
</script>
