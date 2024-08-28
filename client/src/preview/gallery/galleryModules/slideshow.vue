<template>
  <swiper 
    :pagination="true"
    :modules="modules"
    class="galleryImageSlideshow">
    <swiper-slide v-for="(item, index) in files" :key="index" >
        <div class="slideshow-item" :style="{ backgroundImage: `url(${item.url})` }">
          <div class="flex_center absolute_100 overlay_skeleton">
            <icon class="opacity_40"><images/></icon>
          </div>
        </div>
      </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper';
import images from '@/components/icon/images.vue'

export default {
  components: { Swiper, SwiperSlide, images },
  props: {
    files: { type: [String, Array, Object] },
},
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>