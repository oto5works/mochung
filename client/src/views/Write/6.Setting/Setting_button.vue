<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">버튼 설정</h1>
      </div>
      <div class="flex flex-wrap_wrap gap_4 --justify-content">

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': setting.button.copy }"
          @click="toggleCopy">
          <icon icon="Copy"><Copy /></icon>
          <span>주소 복사 버튼</span>
        </button>

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': setting.button.kakaotalk }"
          @click="toggleKakaotalk">
          <icon icon="KakaoTalk"><KakaoTalk /></icon>
          <span>카카오톡 공유 버튼</span>
        </button>

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': setting.button.line }"
          @click="toggleLine">
          <icon icon="Line"><Line /></icon>
          <span>라인 공유 버튼</span>
        </button>

      </div>
    </article>
  <div class="v-hr --display_block-none-block"/>
</section>    
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Copy from '@/components/Icons/Copy.vue'
import KakaoTalk from '@/components/Icons/KakaoTalk.vue'
import Line from '@/components/Icons/Line.vue'

export default {
  components: { icon, Copy, KakaoTalk, Line },
  props: {
    setting: { type: Object },
  },
  methods: {
  toggleCopy() {
    this.setting.button.copy = !this.setting.button.copy;
  },
  toggleKakaotalk() {
    this.setting.button.kakaotalk = !this.setting.button.kakaotalk;
  },
  toggleLine() {
    this.setting.button.line = !this.setting.button.line;
  },
},
};
</script>