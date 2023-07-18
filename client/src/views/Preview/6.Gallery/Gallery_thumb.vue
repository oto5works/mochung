
<template>
  <swiper
    :spaceBetween="10"
    :navigation="true"
    :watchSlidesVisibility="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="thumbswiper-main"
  >
  <SwiperSlide v-for="item in gallery_url" :key="item"><img :src="item" alt="Image"></SwiperSlide>

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
  <SwiperSlide v-for="item in gallery_url" :key="item"><img :src="item" alt="Image"></SwiperSlide>

  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';



// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export default {
  props: {
    gallery_url: { type: Array },
  },
  components: {
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