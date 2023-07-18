<template>
  <section v-if="gallery_url.length === 1 || gallery_url.length > 1">
    <article>
      <div class="sp_180"/>
      <div class="title__wrap">
        <div class="title__content">
          <Sticker :sticker="sticker" />
          <span>갤러리</span>
        </div>
      </div>

      <div class="pa_16">
        <Gallery_swipe v-if="gallery.gallery_type === 'swipe'" :gallery_url="gallery_url" />
        <Gallery_thumb v-if="gallery.gallery_type === 'thumb'" :gallery_url="gallery_url" />
      </div>
      <div class="sp_80"/>
    </article>
  </section>
</template>
<script>
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import Gallery_swipe from "@/views/Preview/6.Gallery/Gallery_swipe.vue";
import Gallery_thumb from "@/views/Preview/6.Gallery/Gallery_thumb.vue";

export default {
    components: { Sticker, Gallery_swipe, Gallery_thumb },
    props: {
      gallery_url: [],
      gallery: { type: Array },
      main: { type: Array },
    },
  };
  </script>











