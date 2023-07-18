<template>
  <div class="main_type__wrap width_100 --background-color">
<div class="sp_80"/>
<div class="pa_vw--4"><h2 class="pa_16 --text-align --font-weight">메인 화면의<br/>스타일을 선택해주세요.</h2></div>
  <v_flicking class="main full size_220" :options="v_flicking_items" v-model:selected="custom.style" />
  <div class="sp_80"/>
  <div class="pa_vw--4"><div class="v-hr --display_block-none-block"/></div>
  </div>
</template>

<script>
import v_flicking from '@/components/v_flicking.vue'

export default {
components: { v_flicking },

props: {
custom: { type: Object },
},
data: function() {
return {
  v_flicking_items: [
      { folder: 'custom_style', title: '노말', exp:'깔끔하고 현대적인 디자인을 구현하고 있습니다.', value: 'defaulted', like: false },
      { folder: 'custom_style', title: '카드', exp:'라인 스타일은 디자인을 더 간결하고 깔끔하게 만들어 줍니다.', value: 'card', like: false },
      { folder: 'custom_style', title: '라인', exp:'미니멀 모던 유니크 클래식 시크 : 세련되고 멋있다. 사용자 주의 집중과 정보 구조화를 지원하는 디자인 스타일입니다.', value: 'line', like: false },
    ],
};
},
};
</script>
