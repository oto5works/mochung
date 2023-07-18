<template>
  <section>
    <div class="v-hr --display_block-none-block"/>
      <article
        data-sal="slide-up"
        data-sal-duration="700"
      >
      <div class="sp_96"/>
      <div class="pa_32 width_100 --text-align">
      <h5>Intro</h5>
      <div class="sp_8"/>
      <h1 class="--font-weight">{{ wedding.intro_title }}</h1>
    </div>
    <div class="sp_28"/>
      <div class="pa_32">
        <div data-sal="slide-up" data-sal-duration="700" data-sal-delay="300" class="tiptap__content --text-align" v-html="wedding.intro_content" />
        <Sticker :main="main" />
      </div>
      <div class="sp_96"/>
    </article>
  </section>
</template>
<script>
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import sal from "sal.js";

export default {
    components: { Sticker },
    mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
    props: {
        wedding: { type: Object },
        main: { type: Object },
    },
  };
  </script>
<style scoped>
.mobile .sticker {
  width: 38px;
  height: 38px;
  opacity: .5;
}
</style>