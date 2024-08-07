<template>
  <div class="editor-item">
    <formTitle1
    :config="true"
      info="STEP 5"
      title="추가 기능"
      content="한 장당 최대 10MB의 이미지를 업로드할 수 있습니다. 최대 20장의 이미지까지 업로드 가능합니다."
    />
    <section>
      <article>
        <audiosBox />
        <effectBox />
      </article>
    </section>
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
