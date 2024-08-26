<template>
  <div class="editor-item">
    <titleMain
      step="STEP 1"
      title="내 취향대로<br>모바일 카드를 꾸며보자"
      content="다양한 템플릿을 활용하여 간편하게 디자인하거나, 직접 이미지를 업로드하여 당신만의 개성을 담아 모바일 카드를 제작할 수 있습니다."
    />
    <div class="editor-content">
      <audiosBox />
      <effectBox />
    </div>
  </div>
</template>
<script>
import audiosBox from "@/modules/audios/audiosBox.vue";
import effectBox from "@/modules/effect/effectBox.vue";

export default {
  components: {
    audiosBox,
    effectBox,
  },
};
</script>
