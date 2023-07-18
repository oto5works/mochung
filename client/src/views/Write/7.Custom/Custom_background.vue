<template>
  <section>
    <article class="pa_0">
      <div class="display_flex--block">
      

<div class="width_50--100 pa_32__16 flex align-items_center justify-content_center">
  <div v-if="custom.background_type === 'defaulted'" class="background-color flex align-items_center justify-content_center --border-radius_16">
    <icon class="background-icon" icon="BackgroundImage"><BackgroundImage /></icon>
  </div>


<div v-if="custom.background_type === 'gradient'" >
  <div class="background-gradient flex align-items_center justify-content_center --border-radius_16">
    <icon class="background-icon" icon="BackgroundImage"><BackgroundImage /></icon>
  </div>
</div>



</div>


<div class="width_50--100">
  
  <div class="title__wrap pa_16">
    <h1 class="--text-align --font-weight">배경 색상 설정</h1>
  </div>
  <v-tabs class="pa_16" v-model="custom.background_type">
    <v-tab value="defaulted" @click="resetColor"><span>기본 색상</span></v-tab>
    <v-tab value="gradient"><span>그라데이션</span></v-tab>
  </v-tabs>

  <div v-if="custom.background_type === 'defaulted'">
  <v_flicking_color class="color size_64" :options="v_flicking_items1" v-model:selected="custom.background" />
<div class="sp_48"/>
<div class="pa_16">
<button class="button-defaulted width_100 height_40 gap_4 --border-radius_16">
  <icon class="--background-color" icon="Color"><Color /></icon>
  <span>사용자 정의 색상 선택</span>
  <input v-model="custom.background" class="button-color" type="color"/>
</button>
</div>
<div class="sp_48"/>
</div>



<div v-if="custom.background_type === 'gradient'">
  <v_flicking_gradient class="color size_64" :options="v_flicking_items2" v-model:selected="gradient" />
  <div class="sp_48"/>
  <div class="pa_16">
<button class="button-defaulted width_100 height_40 gap_4 --border-radius_16">
  <icon class="--background-color" icon="Color"><Color /></icon>
  <span>사용자 정의 색상 선택 1</span>
  <input v-model="custom.background" class="button-color" type="color"/>
</button>
<div class="sp_8"/>
<button class="button-defaulted width_100 height_40 gap_4 --border-radius_16">
  <icon class="--background-gradient" icon="Color"><Color /></icon>
  <span>사용자 정의 색상 선택 2</span>
  <input v-model="custom.gradient" class="button-color" type="color"/>
</button>
</div>
<div class="sp_48"/>
</div>

</div>


</div>
    </article>
  <div class="v-hr --display_block-none-block"/>
</section>
</template>

<script>
import v_flicking_color from '@/components/v_flicking_color.vue'
import v_flicking_gradient from '@/components/v_flicking_gradient.vue'

import icon from '@/components/Icons/icon.vue'
import Color from '@/components/Icons/Color.vue'
import Animation from '@/components/Icons/Animation.vue'
import AnimationFalse from '@/components/Icons/AnimationFalse.vue'
import BackgroundImage from '@/components/Icons/BackgroundImage.vue'


export default {
  components: { v_flicking_color, v_flicking_gradient, icon, Color, Animation, AnimationFalse, BackgroundImage },
  props: {
    custom: { type: Object },
  },
  data() {
    return {
      gradient: '',
      v_flicking_items1: [
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
      v_flicking_items2: [
        { value: 'gradient_1', title: '망고',  color1: '#ffe259', color2: '#ffa751' },
        { value: 'gradient_2', title: '피기 핑크',  color1: '#ee9ca7', color2: '#ffdde1' },
        { value: 'gradient_3', title: '마르고',  color1: '#FFEFBA', color2: '#FFFFFF' },
        { value: 'gradient_4', title: '쉬프티',  color1: '#636363', color2: '#a2ab58' },
        { value: 'gradient_5', title: '문퍼플',  color1: '#4e54c8', color2: '#8f94fb' },
        { value: 'gradient_6', title: '델리케이트',  color1: '#D3CCE3', color2: '#E9E4F0' },
        { value: 'gradient_7', title: '덜',  color1: '#C9D6FF', color2: '#E2E2E2' },
        { value: 'gradient_8', title: '오렌지 코랄',  color1: '#ff9966', color2: '#ff5e62' },
        { value: 'gradient_9', title: '컴페어 나우',  color1: '#EF3B36', color2: '#FFFFFF' },
        { value: 'gradient_10', title: '로제나',  color1: '#FFAFBD', color2: '#ffc3a0' },
        { value: 'gradient_11', title: '주피터',  color1: '#ffd89b', color2: '#19547b' },
        { value: 'gradient_12', title: '퍼플 화이트',  color1: '#BA5370', color2: '#F4E2D8' },
      ],
    }
  },
  watch: {
    gradient() {
      this.updateColor();
    },
  },
  methods: {
    updateColor() {
      const selectedGradient = this.v_flicking_items2.find(item => item.value === this.gradient);
      if (selectedGradient) {
        this.custom.background = selectedGradient.color1;
        this.custom.gradient = selectedGradient.color2;
      }
    },
    resetColor() {
          this.gradient = '';
    },
  },
}
</script>
<style scoped>
.background-width,
.background-color,
.background-gradient {
  width: 16vw;
}
.background-color,
.background-gradient {
  height: 16vw;
  border: 1px solid var(--background-on);
  overflow: hidden;
}
.background-color {
  background-color: var(--background-color);
}
.background-gradient {
  background: linear-gradient(var(--background-color), var(--background-gradient));
}
.background-icon {
  width: 100%;
  height: 100%;
  color: var(--background-on);
}
@media (max-width: 575px) {
  .background-width,
.background-color,
.background-gradient {
  width: 240px;
}

  .background-color,
  .background-gradient {
  height: 240px;
}

}

</style>