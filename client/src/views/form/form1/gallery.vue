<template>
  <div class="editor-item">
    <formTitle1
    :config="true"
      info="STEP 4"
      title="갤러리"
      content="한 장당 최대 10MB의 이미지를 업로드할 수 있습니다. 최대 20장의 이미지까지 업로드 가능합니다."
    />

    <section>
      <article>
        <formTitle2
          title="이미지 갤러리"
          content="한 장당 최대 10MB의 이미지를 업로드할 수 있습니다. 최대 20장의 이미지까지 업로드 가능합니다."
        />
        <galleryImageForm />
      </article>
    </section>

    <section>
      <article>
        <formTitle2
          title="비디오 갤러리"
          content="메인 이미지를 업로드 하고 위치 조정을 해보아요."
        />
        <galleryVideoForm />
      </article>
    </section>
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
