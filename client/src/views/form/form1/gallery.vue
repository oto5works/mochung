<template>
  <div class="editor-item">
    <titleMain
      step="STEP 1"
      title="내 취향대로<br>모바일 카드를 꾸며보자"
      content="다양한 템플릿을 활용하여 간편하게 디자인하거나, 직접 이미지를 업로드하여 당신만의 개성을 담아 모바일 카드를 제작할 수 있습니다."
    />
    <galleryImageForm />

    <div class="form-spacing" />
    <galleryVideoForm />
  </div>
</template>
<script>
import galleryImageForm from "@/modules/gallery/galleryImageForm.vue";
import galleryVideoForm from "@/modules/gallery/galleryVideoForm.vue";

export default {
  components: {
    galleryImageForm,
    galleryVideoForm,
  },
};
</script>
