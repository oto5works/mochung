<template>
  <div class="editor-item">
    <titleMain
      step="STEP 1"
      title="내 취향대로<br>모바일 카드를 꾸며보자"
      content="다양한 템플릿을 활용하여 간편하게 디자인하거나, 직접 이미지를 업로드하여 당신만의 개성을 담아 모바일 카드를 제작할 수 있습니다."
    />
    <titleArticle title="디자인 템플릿 선택" />
    <temp />
    <div class="spacing-editor" />
    <titleArticle title="Article Title" />

    <homeBox />
    <!--
    <section>
      <article>
        <titleArticle title="메인화면 설정" />
        <homeSettings />
      </article>
    </section>
    -->
  </div>
</template>
<script>
import temp from "@/modules/temp/temp";
import homeBox from "@/modules/home/homeBox";
export default {
  components: {
    temp,
    homeBox,
  },
};
</script>
