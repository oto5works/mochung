<template>
<section>

<article>
  <div class="title__wrap pa_16">
    <h1 class="--text-align --font-weight">메인 이미지 설정</h1>
  </div>
  <v-tabs class="pa_16" v-model="image.type">
    <v-tab value="image"><span>직접 올리기</span></v-tab>
    <v-tab value="illust"><span>기본 일러스트</span></v-tab>
  </v-tabs>
      <v-window v-model="image.type">
      <v-window-item value="image">
        <v_filepond_single
          :filePond="image.image"
          @update:filePond="image.image = $event"
          :type="`main`" 
          :acceptedFileTypes="`video/*, image/*`" 
          :labelIdle="`<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>이미지 또는 동영상 파일만 가능 (최대 파일 크기 5 MB)</div>`"
        />
      </v-window-item>

      <v-window-item value="illust">
        <v_flicking_svg class="main size_160" :options="v_flicking_items" v-model:selected="image.illust" />
       <div style="height: 17px;"/>
      </v-window-item>
    </v-window>
  </article>
  <div class="v-hr --display_block-none-block"/>
</section>

</template>

<script>
import v_filepond_single from '@/components/v_filepond_single.vue'
import v_flicking_svg from '@/components/v_flicking_svg.vue'

export default {
  components: { v_filepond_single, v_flicking_svg },
  props: {
    image: { type: Object },
  },
  data: function() {
    return {
      v_flicking_items: [
        { title: '로즈', value: 'Main_01' },
        { title: '로즈', value: 'Main_02' },

    ],
    };
  },
};
</script>