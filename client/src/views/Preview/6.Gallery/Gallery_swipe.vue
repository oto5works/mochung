<template>
  <swiper 
  :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper">
    <SwiperSlide v-for="item in gallery_url" :key="item"><img :src="item" alt="Image"></SwiperSlide>
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import { Pagination, Navigation } from 'swiper';
  
  export default {
    props: {
    gallery_url: { type: Array },
  },
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
</script>
