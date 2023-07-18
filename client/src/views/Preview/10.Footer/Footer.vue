<template>
  <section>
    <article>
      <div class="sp_180"/>
      <div class="pa_16">
        <div class="sp_40"/>

    
      </div>
<button v-if="setting.copy" class="button-defaulted width_100">
  <span>주소 복사하기</span>
</button>
<div class="sp_8"/>
  <button class="button-defaulted width_100">
    <span>카카오톡 공유하기</span>
  </button>
<div class="sp_8"/>
  <button class="button-defaulted width_100">
    <icon icon="KakaoTalk"><KakaoTalk /></icon>
    <span>라인 공유하기</span>
  </button>
  <div class="sp_48"/>
<h3>4-2.cards</h3>
<h5>© 2023 2-4cards All Rights Reserved.</h5>
<div class="sp_24"/>
    </article>
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
    setting: { type: Array },
  },
  data() {
    return {
      aaa: '',
      selected: '',
    }
  },
}
    
    

  
  </script>
<style scoped>

</style>










