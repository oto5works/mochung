<template>
  <section>
    <article class="pa_0">
<div class="display_flex--block">

  <div class="illust__wrap flex align-items_center justify-content_center width_50--100">
        <icon icon="Illust_04"><Illust_04 /></icon>
      </div>



<div class="width_50--100 pa_32__16">
  <div class="title__wrap">
        <h1 class="--text-align --font-weight">지도앱 연동 설정</h1>
        <div class="sp_8"/>
        <h4 class="--text-align">링크를 통해 지도앱과 연결되는 기능입니다.</h4>
      </div>
      <div class="flex flex-wrap_wrap gap_4 --justify-content">
        <button 
          class="kakao button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': wedding.kakaomap }"
          @click="toggleKakaomap">
          <icon icon="MapKakaomap"><MapKakaomap /></icon>
          <span>카카오맵</span>
        </button>

        <button 
          class="navermap button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': wedding.navermap }"
          @click="toggleNavermap">
          <icon icon="MapNavermap"><MapNavermap /></icon>
          <span>네이버맵</span>
        </button>

        <button 
          class="kakao button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': wedding.kakaonavi }"
          @click="toggleKakaonavi">
          <icon icon="MapKakaonavi"><MapKakaonavi /></icon>
          <span>카카오네비</span>
        </button>



        <button 
          class="tmap button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': wedding.tmap }"
          @click="toggleTmap">
          <icon icon="MapTmap"><MapTmap /></icon>
          <span>티맵</span>
        </button>

      </div>



<div class="sp_48"/>
</div>
      </div>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>    
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import MapKakaomap from '@/components/Icons/MapKakaomap.vue'
import MapKakaonavi from '@/components/Icons/MapKakaonavi.vue'
import MapNavermap from '@/components/Icons/MapNavermap.vue'
import MapTmap from '@/components/Icons/MapTmap.vue'
import Illust_04 from '@/components/Svg/Illust_04.vue'

export default {
  components: { icon, MapKakaomap, MapKakaonavi, MapNavermap, MapTmap, Illust_04 },

  props: {
    wedding: { type: Object },
  },
  data: function() {
    return {
    };
  },

watch: {

},

  methods: {
    toggleKakaomap() {
      this.wedding.kakaomap = !this.wedding.kakaomap;
    },
    toggleKakaonavi() {
      this.wedding.kakaonavi = !this.wedding.kakaonavi;
    },
    toggleNavermap() {
      this.wedding.navermap = !this.wedding.navermap;
    },
    toggleTmap() {
      this.wedding.tmap = !this.wedding.tmap;
    },
  },
};
</script>