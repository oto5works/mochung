<template>
  <div class="editor-item">
    <formTitle1
    :config="true"
      info="STEP 2"
      title="예식 정보"
      content="색상 팔레트 생성기를 사용하여 색상 이론을 기반으로 색상 테마를 디자인하세요. 색상 휠에서 색상 조화를 사용하여 유려한 색상 팔레트를 생성해 보세요."
    />
    <section>
      <article>
        <formTitle3 title="예식일" />
        <dateForm />
        <formTitle3 title="예식장" />
        <locationForm />
      </article>
    </section>
    <section>
      <article>
        <formTitle3 title="교통수단 안내" />
        <transportForm />
      </article>
    </section>
  </div>
</template>
<script>
import dateForm from "@/modules/date/dateForm.vue";
import locationForm from "@/modules/location/locationForm.vue";
import transportForm from "@/modules/transport/transportForm.vue";

export default {
  components: {
    dateForm,
    locationForm,
    transportForm,
  },
};
</script>
