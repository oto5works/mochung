<template>
<section>
<article>
  <div class="title__wrap">
        <h1 class="--text-align --font-weight">스티커 설정</h1>
        <div class="sp_8"/>
        <h3 class="--text-align">모서리의 둥글기와 그림자를 설정할 수 있습니다.</h3>
      </div>
        <v_flicking_svg class="main size_160" :options="v_flicking_items" v-model:selected="custom.sticker" />
  </article>
<div class="v-hr --display_block-none-block"/>
</section>
</template>

<script>
import v_flicking_svg from '@/components/v_flicking_svg.vue'

export default {
  components: { v_flicking_svg },
  props: {
    custom: { type: Object },
  },
  data: function() {
    return {
      v_flicking_items: [
        { title: '로즈', value: 'Sticker_01' },
        { title: '로즈 2', value: 'Sticker_02' },
    ],
    };
  },
};
</script>