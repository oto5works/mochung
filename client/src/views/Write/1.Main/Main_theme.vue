<template>
  <div class="main_type__wrap width_100 --background-color">
<div class="sp_80"/>
<div class="pa_vw--4"><h2 class="pa_16 --text-align --font-weight">테마를 선택해서<br/>분위기를 바꿔보세요.</h2></div>
        <!--<v_flicking_theme class="main size_160" :options="v_flicking_items" v-model:selected="theme" />-->
        <v_flicking class="main full size_160" :options="v_flicking_items" v-model:selected="theme" />
        <div class="sp_48"/>

        <div class="pa_vw--4">
<div class="pa_16">
  <div class="flex">
    <icon class="--primary-color" icon="Star"><Star /></icon>
    <h5>내 스타일대로 골라<br/>나만의 청첩장을 만들어 보세요.</h5>
  </div>
  <div class="sp_16"/>
  <button class="button-defaulted height_40 pa_20 gap_4 --border-radius_32">
    <h3 class="--font-weight">커스터 마이징 바로가기</h3>
    <icon icon="ArrowRight"><ArrowRight /></icon>
  </button>
</div>
</div>
  <div class="sp_80"/>
  <div class="pa_vw--4"><div class="v-hr --display_block-none-block"/></div>


  </div>   
</template>
<script>
import v_flicking from '@/components/v_flicking.vue'
import v_flicking_theme from '@/components/v_flicking_theme.vue'
import icon from '@/components/Icons/icon.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'
import Star from '@/components/Icons/Star.vue'

export default {
  components: { v_flicking, v_flicking_theme, icon, ArrowRight, Star },
  props: {
    main: { type: Object },
    custom: { type: Object },
  },
  data: function() {
    return {
      theme: '',
      v_flicking_items: [
        {
          folder: 'theme', 
          image: 'Untitled-1',
          value: 'theme_1',
          title: '기본값',
          exp: '노토 산스 KR',
          background_type: 'defaulted',
          background: '#f0ede8',
          background_on: '#000000',
          gradient:'#ffffff',
          style: 'defaulted',
          align: 'left',
          primary: '#ff6100',
          primary_on: '#ffffff',
          radius: false,
          border: false,
          shadow: false,
          font_color: '#000000',
          font_family: 'eulyoo1945',
          sticker: 'Rose'
        },
        {
          folder: 'theme', 
          image: 'Untitled-1',
          value: 'theme_2',
          title: '카드형',
          exp: '평창평화체',
          background_type: 'defaulted',
          background: '#feeeed',
          background_on: '#000000',
          gradient:'#ffffff',
          style: 'card',
          align: 'center',
          primary: '#ff6100',
          primary_on: '#ffffff',
          radius: true,
          border: false,
          shadow: false,
          font_color: '#000000',
          font_family: 'peace',
          sticker: 'Rose2'
        },
        {
          folder: 'theme', 
          image: 'Untitled-1',
          value: 'theme_3',
          title: '라인',
          exp: '노토 산스 KR',
          background_type: 'defaulted',
          background: '#f5d0bd',
          background_on: '#000000',
          gradient:'#ffffff',
          style: 'line',
          align: 'right',
          primary: '#ff6100',
          primary_on: '#ffffff',
          radius: true,
          border: true,
          shadow: false,
          font_color: '#000000',
          font_family: 'peace',
          sticker: 'Rose2'
        },
      ]
    };
  },
  watch: {
    theme() {
      this.updateTheme();
    },
  },
  methods: {
    updateTheme() {
      const selectedTheme = this.v_flicking_items.find(item => item.value === this.theme);
      if (selectedTheme) {
        this.custom.background = selectedTheme.background;
        this.custom.radius = selectedTheme.radius;
      }
      },    
  },
};
</script>