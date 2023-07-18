<template>
<div class="write__content">
<section>
<article>
<v-card class="card card-flex-unset">
<v-card-item class="card_p">
  <v-card-title>배경</v-card-title>
</v-card-item>
<v-card-text>
  
<v-tabs v-model="custom.bg_type">
  <v-tab value="solid">색상선택</v-tab>
  <v-tab value="gradient">그라데이션</v-tab>
</v-tabs>
</v-card-text>
  <v-window v-model="custom.bg_type">
<!-- 솔리드 영역 -->
    <v-window-item value="solid">
      <slider_font class="slider_colorcard background" :options="background_items" v-model:selected="custom.bg_color" />

      <div class="sp_24"/>
  <div class="color_wheel__wrap">
  <div class="color_wheel">
    <input v-model="custom.bg_color" class="color-btn" type="color"/>
    <div class="chip_color" :style="{ backgroundColor: custom.bg_color }" />
    <div class="chip_text">색상 직접 설정</div>
    </div>
</div>

  <div class="sp_32"></div>

    </v-window-item>


<!-- 그라디언트 영역 -->
<v-window-item value="gradient">
         
  <slider_font class="slider_colorcard background gradient" :options="gradient_items" v-model:selected="custom.gra_type" />


      <div class="sp_24"/>
  <div class="color_wheel__wrap">
  <div class="color_wheel">
    <input v-model="custom.bg_color" class="color-btn" type="color"/>
    <div class="chip_color" :style="{ backgroundColor: custom.bg_color }" />
    <div class="chip_text">색상1 설정</div>
    </div>
    <div class="color_wheel">
    <input v-model="custom.bg_color2" class="color-btn" type="color"/>
    <div class="chip_color" :style="{ backgroundColor: custom.bg_color2 }" />
    <div class="chip_text">색상2 설정</div>
    </div>
</div>
  <div class="sp_32"></div>





</v-window-item>

  </v-window>
</v-card>



<v-card class="card card-flex-unset font">
<v-card-item>
  <v-card-title>폰트</v-card-title>
</v-card-item>
<slider_font class="slider_colorchip font" :options="primary_items" v-model:selected="custom.font_color" />
<div class="sp_24"/>
  <div class="color_wheel__wrap font">
  <div class="color_wheel">
    <input v-model="custom.font_color" class="color-btn" type="color"/>
    <div class="chip_color" :style="{ backgroundColor: custom.font_color }" />
    <div class="chip_text">색상 직접 설정</div>
    </div>
</div>
<div class="sp_32"/>
<v-card-text>
  <div class="s_title">폰트 선택</div>
  <dropdown_font :options="font_fam_items" v-model:selected="custom.font_fam" />

<div class="sp_24"/>
<div class="s_title">폰트 미리보기</div>
  <div class="test_preview font">

    <div class="v-card-flex">
  <div class="v-card-flex_item">
<!-- // 폰트 컬러 설정 -->


<!-- // 폰트 굵기 설정 -->
<v-btn-toggle v-model="custom.font_type">
  <v-btn class="toggle-btn" value="bold"><icon icon="Bold"><Bold /></icon></v-btn>
</v-btn-toggle>
<v-btn class="icon-btn"><icon icon="Paint"><Paint /></icon><input v-model="custom.font_color" class="color-btn" type="color"/></v-btn>

</div>

<!-- // 폰트 정렬 설정 -->


  </div>  

  <div class="sp_24"/>
  
<div class="font__content">
    <div class="title">
      이경선 ‘봄밤’
    </div>
    <div class="content">
      이토록 아름다운 날에<br>
이토록 어여쁜 너가 있으니<br>
이토록 난 행복할 수 밖에
    </div>
</div>
  </div>
</v-card-text>
  <div class="sp_32"></div>

</v-card>









</article>


<article>
  

  <v-card class="card card-flex-unset primary">
<v-card-item>
  <v-card-title>구성요소</v-card-title>
  <v-card-subtitle>버튼, 모양, 색상을 꾸며주는 요소들 입니다.</v-card-subtitle>
</v-card-item>
<slider_font class="slider_colorchip primary" :options="primary_items" v-model:selected="custom.prim_color" />
<div class="sp_24"/>
  <div class="color_wheel__wrap primary">
  <div class="color_wheel">
    <input v-model="custom.prim_color" class="color-btn" type="color"/>
    <div class="chip_color" :style="{ backgroundColor: custom.prim_color }" />
    <div class="chip_text">색상 직접 설정</div>
    </div>
</div>
<div class="sp_32"/>
<v-card-text>

<div class="sp_32"></div>
<div class="s_title">구성요소 옵션</div>


<div class="group_button primary">



<v-btn-toggle v-model="custom.shadow">
    <v-btn class="group_button__content shadow" value="12px"><icon icon="Shadow"><Shadow /></icon>그림자</v-btn>
</v-btn-toggle>


</div>


</v-card-text>
<div class="sp_32"></div>

</v-card>

<v-card class="card card-flex-unset">
    <v-card-item>
  <v-card-title>순서변경</v-card-title>
  <v-card-subtitle>버튼, 모양, 색상을 꾸며주는 요소들 입니다.</v-card-subtitle>
</v-card-item>

</v-card>
<SlickList axis="y" v-model:list="custom.orders">
  {{ custom.orders }}<br>
    <SlickItem v-for="(item, i) in custom.orders" :key="item.id" :index="i" :accept="accept">
      <v-card class="card card-flex-unset">{{ item.title }}</v-card>
    </SlickItem>
</SlickList>

</article>




</section>

<!-- section // section // section // section // section -->
</div>
</template>



<script>
import dropdown_font from '@/components/dropdown_font.vue'
import slider_font from '@/components/slider_font.vue'
import icon from '@/components/Icons/icon.vue'

import Bold from '@/components/Icons/Bold.vue'
import Paint from '@/components/Icons/Paint.vue'

import FxEffect from '@/components/Icons/FxEffect.vue'
import Shadow from '@/components/Icons/Shadow.vue'
import ShadowFalse from '@/components/Icons/ShadowFalse.vue'
import Check from '@/components/Icons/Check.vue'
import { Background } from 'tsparticles-engine'
import { SlickList, SlickItem } from 'vue-slicksort';

export default {
  components: { SlickList, SlickItem, slider_font, dropdown_font, icon, Bold, Paint, FxEffect, Shadow, ShadowFalse, Check },
  props: {
    custom: { type: Object },
  },
  data: function() {
    return {

      font_fam_items: ['spoqa','diary', 'eulyoo1945','lineseed','modoo','netmarble', 'peace'],
      font_color_items: [
        { value: '#000000', title: '퓨어 블랙', color: '#ffffff', },
        { value: '#d9c7bd', title: '벚꽃쥐색', color: '#262223', },
        { value: '#f5d0bd', title: '복숭아색', color: '#EE4E34', },
        { value: '#f0ede8', title: '클라우드 댄서', color: '#9A161F', },
        { value: '#ff6100', title: '오렌지 레드', color: '#f6ead0', },
        { value: '#f5f3e7', title: '에버닌', color: '#000000', },
      ],
      primary_items: [
        { value: '#ffffff', title: '퓨어 화이트' },
        { value: '#d9c7bd', title: '벚꽃쥐색' },
        { value: '#f5d0bd', title: '복숭아색' },
        { value: '#f0ede8', title: '클라우드 댄서' },
        { value: '#ff6100', title: '오렌지 레드' },
        { value: '#f5f3e7', title: '에버닌' },
        { value: '#8c7040', title: 'Gold' },
        { value: '#f8f2eb', title: 'Chalk' },
        { value: '#e3d1bf', title: 'Blush' },
        { value: '#1f4d57', title: 'Teal' },
        { value: '#171717', title: 'Ash' },
      ],
      background_items: [
        { value: '#ffffff', title: 'Pure White', color: '#000000', },
        { value: '#d9c7bd', title: 'Cherry Blossom Red', color: '#262223', },
        { value: '#f5d0bd', title: 'Peach', color: '#EE4E34', },
        { value: '#f0ede8', title: 'Cloud Dancer', color: '#9A161F', },
        { value: '#ff6100', title: 'Orange Red', color: '#f6ead0', },
        { value: '#8c7040', title: 'Gold', color: '#f7f2ef', },
        { value: '#f8f2eb', title: 'Chalk', color: '#171717', },
        { value: '#e3d1bf', title: 'Blush', color: '#171717', },
        { value: '#1f4d57', title: 'Teal', color: '#f8f2eb', },
        { value: '#171717', title: 'Ash', color: '#f8f2eb', },
        { value: '#8e6549', title: 'Terracotta', color: '#fce7d6' },
        { value: '#edeae5', title: 'Pearl White', color: '#deb3a2' },
        { value: '#d1d3c9', title: 'Lacquer', color: '#faf4f6' },
        { value: '#e8e3d7', title: 'Linen', color: '#1a3840' },
        { value: '#bda09c', title: 'Blossom', color: '#f0dac5' },
        { value: '#e3d0cc', title: 'Champagne Pink', color: '#010000' },
        { value: '#a7a79b', title: 'Olive', color: '#6e6e66' },
        { value: '#efebe0', title: 'Stone', color: '#000000' },
        { value: '#f7af25', title: 'Hot Sun', color: '#9f5518' },
      ],
      gradient_items: [
        { value: '1', bg_color: '#f8cacc', bg_color2: '#8da4d0', color: '#000000', title: '로즈쿼츠 & 세레니티' },
        { value: '2', bg_color: '#ffdde1', bg_color2: '#ee9ca7', color: '#000000', title: '피기 핑키' },
        { value: '3', bg_color: '#ffe259', bg_color2: '#ffa751', color: '#000000', title: '망고' },
      ],
    };
  },
  watch: {
    'custom.gra_type'() {
      this.updateGradient();
    },
  },
  methods: {
    updateTheme(theme) {
      this.selectedTheme = theme;
    },
    updateGradient() {
        if (this.custom.gra_type === '1') {
          this.custom.bg_color = '#f8cacc';
          this.custom.bg_color2 = '#8da4d0';
        }
        if (this.custom.gra_type === '2') {
          this.custom.bg_color = '#ffdde1';
          this.custom.bg_color2 = '#ee9ca7';
        }
        if (this.custom.gra_type === '3') {
          this.custom.bg_color = '#ffe259';
          this.custom.bg_color2 = '#ffa751';
        }
      },
  }
};


</script>
