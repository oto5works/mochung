<template>
  <section >
    <div class="v-hr --display_block-none-block"/>
      <article
        data-sal="slide-up"
        data-sal-duration="700"
      >
      <div class="sp_64"/>
      <div class="title__wrap">
        <div class="title__content">
          <Sticker :sticker="sticker" />
          <h5 class="--text-align">Guest</h5>
          <div class="sp_8"/>
          <h1 class="--font-weight --text-align">{{ guest.survey_title }}</h1>
        </div>
      </div>

      <div class="sp_28"/>
      <div class="pa_32">
        <div class="tiptap__content --text-align" v-html="guest.survey_content" />
      </div>
      <div class="sp_40"/>
      <Survey_dialog :custom="custom" :guest="guest" :info="info" />
      <div class="sp_64"/>
    </article>
  </section>
</template>
<script>
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import Survey_dialog from '@/views/Preview/8.Survey/Survey_dialog.vue'
import sal from "sal.js";

export default {
    components: { Sticker, Survey_dialog },
    mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
    props: {
      sticker: { type: String },
      guest: { type: Object },
      info: { type: Object },
      custom: { type: Object },
    },
  };
  </script>
<style scoped>

</style>










