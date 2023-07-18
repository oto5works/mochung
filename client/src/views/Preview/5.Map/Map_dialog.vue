<template>
  <v-dialog v-model="dialog" >
    <template v-slot:activator="{ props }">
      <div class="flex --justify-content pa_16">
        <button class="button-defaulted height_40 gap_4 pa_24 --border-radius_32" v-bind="props">
          <span>앱으로 확인하기</span>
          <icon icon="ArrowRight"><ArrowRight /></icon>
        </button>
      </div>
    </template>

    <div class="dialog__wrap">

<div class="dialog__content --border-radius_16">
  <div class="sp_64"/>
<button class="v-dialog__close" @click="dialog = false"><icon icon="Close"><Close /></icon></button>

<div class="pa_24">
    <h1>연결 가능한<br/>지도 앱 목록</h1>
<div class="sp_28"/>

  <div v-if="wedding.navermap === true">
      <a class="flex height_72 pa_12 align-items_center gap_8" target="_blank" :href="`nmap://place?lat=${wedding.lat}&lng=${wedding.lng}&name=${wedding.hall_name}&appname=com.example.myapp:`">
        <button class="navermap width_40 height_40 flex justify-content_center align-items_center --border-radius_8"><icon icon="MapNavermap"><MapNavermap /></icon></button>
        
<div class="flex gap_2">
        <p class="--font-color">네이버맵</p>
        <icon class="--primary-color mapapp__icon" icon="ArrowUpRight"><ArrowUpRight /></icon>
</div>
      </a>
      <div class="v-hr"/>
  </div>

  <div v-if="wedding.kakaomap === true">
      <a class="flex height_72 pa_12 align-items_center gap_8" target="_blank" :href="`kakaomap://look?p=${wedding.lat},${wedding.lng}`">
        <button class="kakao width_40 height_40 flex justify-content_center align-items_center --border-radius_8"><icon icon="MapKakaomap"><MapKakaomap /></icon></button>
        <div class="flex gap_2">
        <p class="--font-color">카카오맵</p>
        <icon class="--primary-color mapapp__icon" icon="ArrowUpRight"><ArrowUpRight /></icon>
</div>

      </a>
      <div class="v-hr"/>
  </div>

  <div v-if="wedding.kakaonavi === true">
      <a class="flex height_72 pa_16 align-items_center gap_8" target="_blank" :href="`kakaonavi://look?p=${wedding.lat},${wedding.lng}`">
        <button class="kakao width_40 height_40 flex justify-content_center align-items_center --border-radius_8"><icon icon="MapKakaonavi"><MapKakaonavi /></icon></button>
        <div class="flex gap_2"><p class="--font-color">카카오네비</p><icon class="--primary-color mapapp__icon" icon="ArrowUpRight"><ArrowUpRight /></icon></div>
      </a>
      <div class="v-hr"/>
  </div>

  <div v-if="wedding.tmap === true">
      <a class="flex height_72 pa_16 align-items_center gap_8" target="_blank" :href="`tmap://?rGoName=${wedding.hall_name}&rGoY=${wedding.lat}&rGoX=${wedding.lng}`">
        <button class="tmap width_40 height_40 flex justify-content_center align-items_center --border-radius_8"><icon icon="MapTmap"><MapTmap /></icon></button>
        <div class="flex gap_2"><p class="--font-color">티맵</p><icon class="--primary-color mapapp__icon" icon="ArrowUpRight"><ArrowUpRight /></icon></div>
      </a>
      <div class="v-hr"/>
  </div>
  <div class="sp_64"/>


</div>


</div>
</div>



</v-dialog>
  
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'

import Close from '@/components/Icons/Close.vue'

import MapKakaomap from '@/components/Icons/MapKakaomap.vue'
import MapKakaonavi from '@/components/Icons/MapKakaonavi.vue'
import MapNavermap from '@/components/Icons/MapNavermap.vue'
import MapTmap from '@/components/Icons/MapTmap.vue'
import ArrowUpRight from '@/components/Icons/ArrowUpRight.vue'

export default {
  components: { icon, ArrowRight, Close, MapKakaomap, MapKakaonavi, MapNavermap, MapTmap, ArrowUpRight },
  props: {
    wedding: { type: Object },
  },
  data() {
      return {
          dialog: false,
      };
  },
  methods: {

}
};
</script>

<style scoped>

</style>