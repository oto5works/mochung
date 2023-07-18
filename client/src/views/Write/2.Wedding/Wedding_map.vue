<template>
  <section>
    <article v-if="map.use === 'true'">
      <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">지도</h1>
      </div>

      <v-tabs class="pa_16" v-model="map.type">
    <v-tab value="kakao"><span>카카오맵</span></v-tab>
    <v-tab value="upload"><span>직접 업로드</span></v-tab>
  </v-tabs>


<v-window v-model="map.type">
    <v-window-item value="kakao">
      <div class="pa_16">
        <div class="sp_20"/>
        <v_kakaomap class="--border-radius_16" :lat="map.lat" :lng="map.lng" style="width: 100%; height: 280px;"/>
      </div>
</v-window-item>

<v-window-item value="upload">    
  <v_filepond_single
          :filePond="map.map"
          @update:filePond="map.map = $event"
          :type="`map`" 
          :acceptedFileTypes="`image/*`" 
          :labelIdle="`<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>이미지 파일만 가능 (최대 파일 크기 5 MB)</div>`"
        />
</v-window-item>


</v-window>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>
</template>

<script>
import v_filepond_single from '@/components/v_filepond_single.vue'
import v_kakaomap from '@/components/v_kakaomap.vue'


export default {
  components: { v_filepond_single, v_kakaomap },
  props: {
    map: { type: Object },
  },
};
</script>
