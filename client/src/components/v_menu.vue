<template>
<div>
<div id="v-navigation">
  <div class="navigation__wrap">
    <div class="width_100">
    <div class="navigation__content">
      <button 
      class="button-navigation display_none--flex"
      @click="hideNavigation()">
      <div class="navigation-icon__wrap">
        <icon icon="ListBack"><ListBack /></icon>
      </div>
      <div class="navigation__overlay"/>
    </button>

    <RouterLink class="button-navigation" to="/">
      <div class="navigation-icon__wrap">
        <icon icon="Home"><Home /></icon>
      </div>
      <span>홈</span>
      <div class="navigation__overlay"/>
    </RouterLink>

    <RouterLink v-if="menu.create" class="button-navigation" to="/create">
      <div class="navigation-icon__wrap">
        <icon icon="NotePencil"><NotePencil /></icon>
      </div>
      <span>제작하기</span>
      <div class="navigation__overlay"/>
    </RouterLink>

    <RouterLink class="button-navigation" to="/me">
      <div class="navigation-icon__wrap">
        <icon icon="Archive"><Archive /></icon>
      </div>
      <span>내 보관함</span>
      <div class="navigation__overlay"/>
    </RouterLink>
  </div>
    
    <div class="navigation__content" v-if="menu.createMenu">
      <div></div>
<div class="v-hr"/>

    <button 
      class="button-navigation"
      @click="changeTab('main')" 
      :class="{ active: activeTab === 'main', active: visibleTabs.includes('main') }">
      <div class="navigation-icon__wrap">
        <icon icon="Main"><Main /></icon>
      </div>
      <span>메인</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('wedding')" 
      :class="{ active: activeTab === 'wedding', active: visibleTabs.includes('wedding') }">
      <div class="navigation-icon__wrap">
        <icon icon="Wedding"><Wedding /></icon>
      </div>
      <span>예식정보</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('info')" 
      :class="{ active: activeTab === 'info', active: visibleTabs.includes('info') }">
      <div class="navigation-icon__wrap">
        <icon icon="Info"><Info /></icon>
      </div>
      <span>개인정보</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('gallery')" 
      :class="{ active: activeTab === 'gallery', active: visibleTabs.includes('gallery') }">
      <div class="navigation-icon__wrap">
        <icon icon="Gallery"><Gallery /></icon>
      </div>
      <span>갤러리</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('guest')" 
      :class="{ active: activeTab === 'guest', active: visibleTabs.includes('guest') }">
      <div class="navigation-icon__wrap">
        <icon icon="Survey"><Survey /></icon>
      </div>
      <span>게스트관리</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('setting')" 
      :class="{ active: activeTab === 'setting', active: visibleTabs.includes('setting') }">
      <div class="navigation-icon__wrap">
        <icon icon="Setting"><Setting /></icon>
      </div>
      <span>설정</span>
      <div class="navigation__overlay"/>
    </button>

    <button 
      class="button-navigation"
      @click="changeTab('custom')" 
      :class="{ active: activeTab === 'custom', active: visibleTabs.includes('custom') }">
      <div class="navigation-icon__wrap">
        <icon icon="Color"><Color /></icon>
      </div>
      <span>커스텀</span>
      <div class="navigation__overlay"/>
    </button>
  </div>
</div>

    <div class="navigation__content">
      <RouterLink v-if="menu.login" class="button-navigation special" to="/">
      <div class="navigation-icon__wrap">
        <icon icon="SignIn"><SignIn /></icon>
      </div>
      <span>로그인</span>
      <div class="navigation__overlay"/>
    </RouterLink>

      <button 
        v-if="menu.save"
        class="button-navigation special"
        @click="$emit('handleSubmit')">
      <div class="navigation-icon__wrap">
        <icon icon="Save"><Save /></icon>
      </div>
      <span>저장</span>
      <div class="navigation__overlay"/>
    </button>

    </div>
  </div>
</div>

<div id="v-overlay" @click="hideNavigation()"></div>

  <div id="v-appbar">
  <div class="flex align-items_center justify-content_space-between">
      <button class="button-appbar width_48" @click="showNavigation()">
        <icon icon="List"><List /></icon>
      </button>

      <button v-if="menu.save" class="button-appbar pa_20 gap_8" @click="$emit('handleSubmit')">
          <icon icon="Save"><Save /></icon>
          <span>저장</span>
          <div class="appbar__overlay"/>
      </button>

      <button v-if="menu.preview" class="button-appbar pa_20 gap_8" @click="hidePreview()">
          <icon icon="EyeClosed"><EyeClosed /></icon>
          <span>미리보기 종료</span>
          <div class="appbar__overlay"/>
      </button>

  </div>
</div>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import List from '@/components/Icons/List.vue'
import Save from '@/components/Icons/Save.vue'
import EyeClosed from '@/components/Icons/EyeClosed.vue'
import Home from '@/components/Icons/Home.vue'
import Archive from '@/components/Icons/Archive.vue'
import Main from '@/components/Icons/Main.vue'
import Wedding from '@/components/Icons/Wedding.vue'
import Info from '@/components/Icons/Info.vue'
import Gallery from '@/components/Icons/Gallery.vue'
import Survey from '@/components/Icons/Survey.vue'
import Setting from '@/components/Icons/Setting.vue'
import Color from '@/components/Icons/Color.vue'
import ListBack from '@/components/Icons/ListBack.vue'
import NotePencil from '@/components/Icons/NotePencil.vue'
import SignIn from '@/components/Icons/SignIn.vue'

import { RouterLink } from 'vue-router'


export default {
  components: { RouterLink, icon, List, Save, EyeClosed, Home, Archive, Main, Wedding, Info, Gallery, Survey, Setting, Color, ListBack, NotePencil, SignIn  },
  props: {
    menu: { type: Object },
  },
  data() {
    return {
      activeTab: 'main', // Default active tab is 'main'
      tabs: [
        { label: 'main', value: 'main' },
        { label: 'wedding', value: 'wedding' },
        { label: 'info', value: 'info' },
        { label: 'gallery', value: 'gallery' },
        { label: 'guest', value: 'guest' },
        { label: 'setting', value: 'setting' },
        { label: 'custom', value: 'custom' },
      ],
      visibleTabs: [], // Array to store visible tabs
    };
  },
  mounted() {
    const writeWrap = document.getElementById('write__wrap');
    writeWrap.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // Call the function initially to set the visible tabs
  },
  beforeDestroy() {
    const writeWrap = document.getElementById('write__wrap');
    writeWrap.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
      this.$emit('tab-changed', tab); // Emit an event to parent component
    },
    handleScroll() {
      const writeWrap = document.getElementById('write__wrap');
      const scrollPosition = writeWrap.scrollTop;

      this.visibleTabs = [];

      for (let i = 0; i < this.tabs.length; i++) {
        const tab = this.tabs[i];
        const section = document.getElementById(tab.value);

        if (!section) continue;

        const sectionTop = section.offsetTop - writeWrap.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.visibleTabs.push(tab.value);
        }
      }
    },
    hideNavigation() {
      const previewDivision = document.getElementById('v-navigation');
      const previewOverlay = document.getElementById('v-overlay');
      previewOverlay.style.opacity = '0';
    previewOverlay.addEventListener('transitionend', () => {
      previewOverlay.style.display = 'none';
    });
      previewDivision.style.transform = 'translateX(-100%)';
    },
    showNavigation() {
      const previewDivision = document.getElementById('v-navigation');
      previewDivision.style.transform = 'translateX(0%)';
      const previewOverlay = document.getElementById('v-overlay');
      previewOverlay.style.display = 'block';
      previewOverlay.style.opacity = '0.4';
    },
    hidePreview() {
      const previewDivision = document.getElementById('preview');
      previewDivision.style.transform = 'translateX(100%)';
      this.menu.preview = false;
      this.menu.save = true;
    },
  },
};
</script>

<style scoped>
  #v-overlay {
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    background-color: var(--background-on);
    z-index: 999;
    opacity: 0;
    -webkit-transition: all .25s ease;
    transition: all .25s ease;
  }
</style>