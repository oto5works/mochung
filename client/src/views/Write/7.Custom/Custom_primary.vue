<template>
  <section>
    <article class="pa_0">
      <div class="display_flex--block">
      

        <div class="width_50--100 pa_32__16 custom-preview__wrap">
  <div class="width_100 max-width_360">

    <div class="flex align-items_center width_100 justify-content_center">
          <icon v-if="custom.radius === true" class="primary-preview" icon="PrimaryRadius"><PrimaryRadius /></icon>
          <icon v-if="custom.radius === false" class="primary-preview" icon="PrimaryDefaulted"><PrimaryDefaulted /></icon>
    </div>
      <div class="sp_48"/>
        <div class="flex flex-wrap_wrap gap_4 width_100 justify-content_center">
          <button 
            class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
            :class="{ 'selected': custom.radius }"
            @click="toggleRadius">
            <icon v-if="custom.radius === true" icon="Radius"><Radius /></icon>
            <icon v-if="custom.radius === false" icon="RadiusFalse"><RadiusFalse /></icon>
  
            <span>둥근 모서리</span>
          </button>
  
          <button 
            class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
            :class="{ 'selected': custom.border }"
            @click="toggleBorder">
            <icon icon="Border"><Border /></icon>
            <span>테두리</span>
          </button>
  
          <button 
            class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
            :class="{ 'selected': custom.shadow }"
            @click="toggleShadow">
            <icon icon="Shadow"><Shadow /></icon>
            <span>그림자</span>
          </button>
        </div>
    
  </div>
</div>






<div class="width_50--100">
  
  <div class="title__wrap pa_16">
    <h1 class="--text-align --font-weight">포인트 색상 설정</h1>
    <div class="sp_8"/>
    <h4 class="--text-align">포인트 색상을 적용하면 아이콘, 버튼 등 청첩장 전체에 일관된 디자인이 적용됩니다.</h4>
  </div>
<v_flicking_color class="color primary size_64" :options="v_flicking_items" v-model:selected="custom.primary" />
<div class="sp_48"/>
<div class="pa_16">
<button class="button-defaulted width_100 height_40 gap_4 --border-radius_16">
  <icon class="--primary-on" icon="Color"><Color /></icon>
  <span>사용자 정의 색상 선택</span>
  <input v-model="custom.primary" class="button-color" type="color"/>
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
import v_buttongroup from '@/components/v_buttongroup.vue'

import icon from '@/components/Icons/icon.vue'
import Color from '@/components/Icons/Color.vue'
import Radius from '@/components/Icons/Radius.vue'
import RadiusFalse from '@/components/Icons/RadiusFalse.vue'
import Border from '@/components/Icons/Border.vue'
import Shadow from '@/components/Icons/Shadow.vue'
import PrimaryRadius from '@/components/Icons/PrimaryRadius.vue'
import PrimaryDefaulted from '@/components/Icons/PrimaryDefaulted.vue'

export default {
  components: { v_flicking_color, v_buttongroup, icon, Color, Radius, RadiusFalse, Border, Shadow, PrimaryRadius, PrimaryDefaulted },
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
    }
  },
  methods: {
    toggleRadius() {
      this.custom.radius = !this.custom.radius;
    },
    toggleBorder() {
      this.custom.border = !this.custom.border;
    },
    toggleShadow() {
      this.custom.shadow = !this.custom.shadow;
    },
},
}
</script>
<style scoped>
.custom-preview__wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

  .primary-preview__wrap {
    width: 1vw;
    height: 1vw;
  }
  .primary-preview {
    width: 12vw;
    height: 12vw;
  }
  .primary-preview {
  color: var(--pc-pc-tr);
  stroke: var(--po-po-pc);
  stroke-width: 1.5;
  stroke-opacity: var(--border-opacity);
}
@media (max-width: 575px) {
  .custom-preview__wrap {
  padding-top: 48px;
} 
.primary-preview {
    width: 188px;
    height: 188px;
  }
}

</style>