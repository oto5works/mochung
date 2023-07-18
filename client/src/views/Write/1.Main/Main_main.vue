<template>
  <div class="main_type__wrap width_100 --background-color">
<div class="sp_80"/>
<div class="pa_vw--4"><h2 class="pa_16 --text-align --font-weight">메인 화면의<br/>스타일을 선택해주세요.</h2></div>
  <v_flicking class="main full size_220" :options="v_flicking_items" v-model:selected="main.main_type" />
  <div class="sp_80"/>
  <div class="pa_vw--4"><div class="v-hr --display_block-none-block"/></div>


  </div>
    
</template>

<script>
import v_flicking from '@/components/v_flicking.vue'

export default {
components: { v_flicking },

props: {
main: { type: Object },
},
data: function() {
return {
  v_flicking_items: [
      // 이미지 사이즈 560 * 840 4:6 비율
        { folder: 'main_type', image: 'Untitled-1', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-1', like: false },
        { folder: 'main_type', image: 'Untitled-2', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-2', like: false },
        { folder: 'main_type', image: 'Untitled-3', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-3', like: false },
        { folder: 'main_type', image: 'Untitled-4', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-4', like: false },
        { folder: 'main_type', image: 'Untitled-5', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-5', like: false },
        { folder: 'main_type', image: 'Untitled-6', title: '강남 서초더샵포레 아파트', exp:'추억이 깃든 가구에 맞춰 더욱 멋스러운 내추럴 인테리어를 만나보세요', value: 'Untitled-6', like: false },

    ],
};
},
};
</script>
