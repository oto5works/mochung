<template>
  <div class="editor-item">
    <titleMain
      step="STEP 1"
      title="Beautiful ideas need a beautiful space"
      content="We care about the details, because it’s the little things –– like receiving a beautiful branded email –– that make your audience feel special."
    />
    <titleArticle title="디자인 템플릿 선택" />
    <temp />
    <div class="form-spacing" />
    <div class="editor-content">

    <geminiBox />
    </div>
    <titleArticle title="Article Title" />
    <div class="editor-content">
      <homeBox />
      <homeColor />

      <homeFileBox />
    </div>
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
import homeColor from "@/modules/home/homeColor";
import homeFileBox from "@/modules/homeFile/homeFileBox.vue";
import geminiBox from "@/modules/gemini/geminiBox.vue";

export default {
  components: {
    temp,
    homeBox,
    homeColor,
    homeFileBox,
    geminiBox,
  },
};
</script>
