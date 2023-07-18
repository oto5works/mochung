<template>
<div class="mobile">
  <Background :background_type="custom.background_type" />
  <Effect :main="main" v-if="main.effect.config !== 'none'" />

<div class="P_content" ref="P_content">
  <Audio :style="childStyle" :url="main.audio.audio.url" :auto="main.audio.auto" v-if="main.audio.audio.url" />
<Main :main="main" :wedding="wedding" :info="info" />

<component 
  v-for="(order, i) of setting.orders" 
  :key="i" :is="order.value" 
  :class="'P_' + order.value" 
  :main_url="main_url" 
  :main="main"
  :sticker="custom.sticker"
  :custom="custom"
  :wedding="wedding"
  :info="info"
  :gallery_url="gallery_url" 
  :gallery="gallery" 
  :guest="guest" 
  @registerComment="onRegisterComment"
 />
 <Footer :setting="setting"/>
</div>
</div>
</template>
<script>
import Main from "@/views/Preview/1.Main/Main.vue";
import Intro from "@/views/Preview/2.Intro/Intro.vue";
import Info from "@/views/Preview/3.Info/Info.vue";
import Calendar from "@/views/Preview/4.Calendar/Calendar.vue";
import Map from "@/views/Preview/5.Map/Map.vue";

import Gallery from "@/views/Preview/6.Gallery/Gallery.vue";
import Comment from "@/views/Preview/7.Comment/Comment.vue";
import Survey from "@/views/Preview/8.Survey/Survey.vue";
import Deposit from "@/views/Preview/9.Deposit/Deposit.vue";

import Footer from "@/views/Preview/10.Footer/Footer.vue";
import Background from "@/views/Preview/11.Background/Background.vue";
import Effect from "@/views/Preview/12.Effect/Effect.vue";
import Audio from "@/views/Preview/14.Audio/Audio.vue";


export default {
  components: { 
    Main, Intro, Info, Calendar, Map, Gallery, Comment, Survey, Deposit, Footer, Background, Effect, Audio
  },
  props: {
    gallery_url: [],
    video_url: '',
    gallery: { type: Array },
    main: { type: Object },
    custom: { type: Object },
    wedding: { type: Object },
    info: { type: Object },
    guest: { type: Object },
    setting: { type: Object },
  },
watch: {
// 2. custom
  // 스타일 // 스타일 // 스타일 // 스타일 // 스타일
  'custom.style'() { this.setStyleTheme() },
  // 배경 // 배경 // 배경 // 배경 // 배경 //
  'custom.background'() { this.setBackgroundTheme() },
  // 구성요소 // 구성요소 // 구성요소 // 구성요소 // 구성요소 //
  'custom.primary'() { this.setPrimaryTheme() },
  'custom.secondary'() { this.setSecondaryTheme() },
  'custom.align'() { this.setAlignTheme() },
  'custom.radius'() { this.setRadiusTheme() },
  'custom.shadow'() { this.setShadowTheme() },
  'custom.border'() { this.setBorderTheme() },
  // 폰트 // 폰트 // 폰트 // 폰트 // 폰트 [ 색상, 종류, 굵기 ]
  'custom.font_color'() { this.setFontTheme() },
  'custom.font_family'() { this.setFontTheme() },
  'custom.font_weight'() { this.setFontTheme() },
  // 배경 // 배경 // 배경 // 배경 // 배경 //
  'custom.background'() { this.setBackgroundTheme() },
  'custom.gradient'() { this.setBackgroundTheme() },



},
  created() {
    // 스타일 // 스타일 // 스타일 // 스타일 // 스타일
    this.setStyleTheme()
    // 배경 // 배경 // 배경 // 배경 // 배경 //
    this.setBackgroundTheme()
   // 구성요소 // 구성요소 // 구성요소 // 구성요소 // 구성요소 // [ 색상, 정렬, 둥글기, 그림자, 테두리 ]
    // 색상
    this.setPrimaryTheme()
    // 색상 2
    this.setSecondaryTheme()
    // 정렬
    this.setAlignTheme()
    // 모서리 둥글기
    this.setRadiusTheme()
        // 그림자
    this.setShadowTheme()
        // 테두리
    this.setBorderTheme()
    // 폰트 // 폰트 // 폰트 // 폰트 // 폰트 [ 색상, 종류, 굵기 ]
    this.setFontTheme()
},
  methods: {
    setFixed() {
      const parent = this.$refs.mobile;
    const parentRect = parent.getBoundingClientRect();

    // Set the child element's position style based on the parent
    this.childStyle = {
      position: 'fixed',
      top: `${parentRect.top}px`,
      left: `${parentRect.left}px`,
      width: `${parentRect.width}px`,
      height: `${parentRect.height}px`
    }
    },
    // 스타일 // 스타일 // 스타일 // 스타일 // 스타일
    setStyleTheme() {
      const themeValue = this.custom.style
      document.documentElement.setAttribute("data-style-theme", themeValue );
    },
    // 배경 // 배경 // 배경 // 배경 // 배경 //
    setBackgroundTheme() {
        let variable = {
          color: this.custom.background,
          on: this.custom.background_on,
          gradient: this.custom.gradient,
      }
      let style = document.documentElement.style;
      for (let key of Object.keys(variable)) {
        style.setProperty("--background-" + key, variable[key]);
      }
    },
    // 구성요소 // 구성요소 // 구성요소 // 구성요소 // 구성요소 // [ 색상, 정렬, 둥글기, 그림자, 테두리 ]
    // 색상
    setPrimaryTheme() {
      let variable = {
        color: this.custom.primary,
        on: this.custom.primary_on,
    }
    let style = document.documentElement.style;
    for (let key of Object.keys(variable)) {
      style.setProperty("--primary-" + key, variable[key]);
    }
    },
    // 색상 2
    setSecondaryTheme() {
      let variable = {
        color: this.custom.secondary,
        on: this.custom.secondary_on,
    }
    let style = document.documentElement.style;
    for (let key of Object.keys(variable)) {
      style.setProperty("--secondary-" + key, variable[key]);
    }
    },
    // 정렬
    setAlignTheme() {
      const themeValue = this.custom.align
      document.documentElement.setAttribute("data-align-theme", themeValue );
    },
    // 모서리 둥글기
    setRadiusTheme() {
      const themeValue = this.custom.radius
      document.documentElement.setAttribute("data-radius-theme", themeValue );
    },
    // 그림자
    setShadowTheme() {
      const themeValue = this.custom.shadow
      document.documentElement.setAttribute("data-shadow-theme", themeValue );
    },
    // 테두리
    setBorderTheme() {
      const themeValue = this.custom.border
      document.documentElement.setAttribute("data-border-theme", themeValue );
    },
    // 폰트 // 폰트 // 폰트 // 폰트 // 폰트 [ 색상, 종류, 굵기 ]
    setFontTheme() {
      let variable = {
        color: this.custom.font_color,
        family: this.custom.font_family,
        weight: this.custom.font_weight,
    }
    let style = document.documentElement.style;
    for (let key of Object.keys(variable)) {
      style.setProperty("--font-" + key, variable[key]);
    }
    const themeValue = this.custom.font_family
      document.documentElement.setAttribute("data-spacing-theme", themeValue )
    },

    
// 스크롤 // 스크롤 // 스크롤 // 스크롤 // 스크롤 
    scrollToMain() {
      const { P_content: parent, P_main: child } = this.$refs;
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest', parent });
    },
    scrollToCalendar() {
      const { P_content: parent, P_Calendar: child } = this.$refs;
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest', parent });
    },
    scrollToMap() {
      const { P_content: parent, P_Map: child } = this.$refs;
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest', parent });
    },
    scrollToInfo() {
      const { P_content: parent, P_info: child } = this.$refs;
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest', parent });
    },
    scrollToInvite() {
      const { P_content: parent, P_invite: child } = this.$refs;
      child.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest', parent });
    },
// 작동 // 작동 // 작동 // 작동 // 작동    
    // 댓글
    onRegisterComment(comment) {
      this.$emit("registerComment", comment);
    },
  },
};
</script>

<style scoped>
.P_content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}


</style>