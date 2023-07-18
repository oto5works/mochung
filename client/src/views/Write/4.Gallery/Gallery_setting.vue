<template>
  <section>
    <article class="pa_16">
        <div class="title__wrap">
        <h1 class="--text-align --font-weight">갤러리 설정</h1>
      </div>
        <v-text-field type="text" :variant="input" label="갤러리 제목" v-model="gallery.gallery_title" />
        <div class="sp_40"/>
        <h5 class="--font-weight"><strong>갤러리의 스타일을 선택하세요</strong></h5>
        <div class="sp_8"/>
        <div class="flex flex-wrap_wrap gap_4 --justify-content">
          <v_buttongroup :options="v_buttongroup_items" v-model:selected="gallery.gallery_type" />
        </div>

    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>    
</template>
<script>
import v_buttongroup from '@/components/v_buttongroup.vue'

export default {
  components: { v_buttongroup },
  props: {
    gallery: { type: Object },
    input: '',
  },
  data: function() {
    return {
      v_buttongroup_items: [
        { folder: 'gallery', title: '스와이프', value: 'Swipe' },
        { folder: 'gallery', title: '그리드', value: 'Grid' },
      ],
    };
  },
};
</script>