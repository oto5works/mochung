
<template>
  <swiper
    :spaceBetween="10"
    :pagination="true"
    :navigation="true"
    :watchSlidesVisibility="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper"
  >
  <SwiperSlide v-for="(item, index) in files" :key="index">
    <div class="slideshow-item" :style="{ backgroundImage: `url(${item.url})` }">
          <div class="flex_center absolute_100 overlay_skeleton">
            <icon class="opacity_40"><images/></icon>
          </div>
        </div>
  </SwiperSlide>

  </swiper>

  <swiper
    @swiper="setThumbsSwiper"
    :navigation="true"
    :spaceBetween="10"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesVisibility="true"
    :watchSlidesProgress="true"
    class="thumbswiper-thumb"
  >
  <SwiperSlide v-for="(item, index) in files" :key="index">
    <div class="slideshow-item" :style="{ backgroundImage: `url(${item.url})` }">
          <div class="flex_center absolute_100 overlay_skeleton">
            <icon class="opacity_40"><images/></icon>
          </div>
        </div>
  </SwiperSlide>

  </swiper>
</template>
<script>
import images from '@/components/icon/images.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Thumbs]);

export default {
  props: {
    files: { type: [String, Array, Object] },
  },
  components: {
    images,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  },
};
</script>