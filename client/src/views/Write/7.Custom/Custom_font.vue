<template>
  <section>
    <article class="pa_0">
      <div class="display_flex--block">
      
<div class="width_50--100 pa_32__16 custom-preview__wrap">
  <div class="width_100 max-width_360">

    <div class="flex align-items_center">
      <div class="flex align-items_center gap_8 width_100 --justify-content">
        <div class="font_preview__1 --font-weight">가</div>
        <div class="font_preview__2">가</div>
      </div>
    </div>

    <div class="flex justify-content_center">
        <div class="flex flex-wrap_wrap gap_4 justify-content_space-between width_100">
          <div class="flex flex-wrap_wrap gap_4">
            <v_buttongroup :options="v_buttongroup_items" v-model:selected="custom.align" />
          </div>
          <button 
            class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
            :class="{ 'selected': custom.font_weight === '700' }"
            @click="toggleWeight">
            <p>B</p>
            <span>볼드체</span>
          </button>
        </div>
    </div>
    
  </div>
</div>




        <div class="width_50--100">

        <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">폰트 설정</h1>
      </div>
      <div class="pa_16">
        <v_dropdown_font :options="v_dropdown_items" v-model:selected="custom.font_family" />
      </div>
        <div class="sp_40"/>
  <v_flicking_color class="color size_64" :options="v_flicking_items" v-model:selected="custom.font_color" />
<div class="sp_48"/>
<div class="pa_16">
<button class="button-defaulted width_100 height_40 gap_4 --border-radius_16">
  <icon class="--font-color" icon="Color"><Color /></icon>
  <span>사용자 정의 색상 선택</span>
  <input v-model="custom.font_color" class="button-color" type="color"/>
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
import v_flicking_color from '@/components/v_flicking_color.vue'
import v_dropdown_font from '@/components/v_dropdown_font.vue'
import v_buttongroup from '@/components/v_buttongroup.vue'

import icon from '@/components/Icons/icon.vue'
import Color from '@/components/Icons/Color.vue'
import Copy from '@/components/Icons/Copy.vue'
import CopyFalse from '@/components/Icons/CopyFalse.vue'

export default {
  components: { v_flicking_color, v_dropdown_font, v_buttongroup, icon, Color, Copy, CopyFalse },
  props: {
    custom: { type: Object },
  },
  data() {
    return {
      v_flicking_items: [
        { value: '#ffffff', title: '퓨어 화이트' },
        { value: '#feeeed', title: '체리블라썸' },
        { value: '#f5d0bd', title: '피치' },
        { value: '#f0ede8', title: '클라우드 댄서' },
        { value: '#ff6100', title: '오렌지 레드' },
        { value: '#8c7040', title: '골드' },
        { value: '#f8f2eb', title: '초크' },
        { value: '#e3d1bf', title: '블러쉬' },
        { value: '#1f4d57', title: '틸' },
        { value: '#171717', title: '애쉬' },
        { value: '#8e6549', title: '테라코타' },
        { value: '#edeae5', title: '펄화이트' },
        { value: '#d1d3c9', title: '래커' },
        { value: '#e8e3d7', title: '리넨' },
        { value: '#bda09c', title: '블라섬' },
        { value: '#e3d0cc', title: '샴페인 핑크' },
        { value: '#a7a79b', title: '올리브' },
        { value: '#efebe0', title: '스톤' },
        { value: '#f7af25', title: '핫썬' },
      ],
      v_dropdown_items: [
        { title: '스포카 한 산스 Light', value: 'SpoqaHanSansLight' },
        { title: '스포카 한 산스', value: 'SpoqaHanSans' },
        { title: '순바탕체 Light', value: 'SunBatangLight' },
        { title: '순바탕체', value: 'SunBatang' },
        { title: '둘기마요체', value: 'DoveMayo' },
        { title: '마포꽃섬체', value: 'MapoFlower' },
        { title: '비씨카드체', value: 'BCCard' },
        { title: '강원교육모두체', value: 'GangwonEdu' },
        { title: '김정철 손글씨', value: 'KimjungchulScript' },
        { title: '미미월드체', value: 'MiMiWorld' },
        { title: '평창 평화체', value: 'PyeongchangPeace' },
        { title: '고운바탕체', value: 'GowunBatang' },
        { title: '하남다움체', value: 'HanamDaum' },
        { title: '빙그레체', value: 'Binggrae' },
        { title: 'Y유니버스체', value: 'YUniverse' },
      ],
      v_buttongroup_items: [
        { title: '', value: 'AlignLeft' },
        { title: '', value: 'AlignCenter' },
        { title: '', value: 'AlignRight' },

      ],
    }
  },
  methods: {
    toggleWeight() {
      if (this.custom.font_weight === '400') {
        this.custom.font_weight = '700';
      } else {
        this.custom.font_weight = '400';
      }
    },
},
}
</script>
<style scoped>
.font_preview__1 { font-size: 10vw }
.font_preview__2 { font-size: 6vw }
.custom-preview__wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
button p {
  width: 24px;
  height: 24px;
  line-height: 24px;
  font-weight: var(--font-weight);
  font-size: 18px;
}
@media (max-width: 575px) {
  .custom-preview__wrap {
  padding-top: 48px;
} 
.font_preview__1 { font-size: 120px }
.font_preview__2 { font-size: 72px }
}
</style>