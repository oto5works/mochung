<template>
  <div class="editor-item">
    <titleMain
      step="STEP 2"
      title="예식 정보"
      content="다양한 템플릿을 활용하여 간편하게 디자인하거나, 직접 이미지를 업로드하여 당신만의 개성을 담아 모바일 카드를 제작할 수 있습니다."
    />
    <titleArticle title="Article Title" />
    <dateBox/>
    <div class="form-spacing" />
    <titleArticle title="Article Title" />
    <locationForm />
    <div class="form-spacing" />
    <titleArticle title="Article Title" content="Get an official Creative Cloud subscription. When you make a payment, specify an expiration date and choose a plan that works." />
    <transportForm />


 
  </div>
</template>
<script>
import dateBox from "@/modules/date/dateBox.vue";
import locationForm from "@/modules/location/locationForm.vue";
import transportForm from "@/modules/transport/transportForm.vue";

export default {
  components: {
    dateBox,
    locationForm,
    transportForm,
  },
};
</script>
