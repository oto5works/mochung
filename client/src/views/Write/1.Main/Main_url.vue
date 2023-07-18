<template>
  <section>
    <article class="pa_0">
<div class="display_flex--block">
  <div class="flex-img__wrap width_50--100 --border-radius_24">
  <img src="https://jwpggit.github.io/storage/image/card/url.jpg"/>
  </div>
  <div class="width_50--100 pa_32__16">
  <div class="title__wrap">
        <h1 class="--text-align --font-weight">청첩장 주소 <span class="--primary-color"><icon class="--primary-color" icon="Star"><Star /></icon>url</span> 설정</h1>
        <div class="sp_8"/>
        <h4 class="--text-align">http://4-2.cards/기본주소 뒤에 들어가는 주소입니다.</h4>
      </div>

<div class="flex gap_8" v-if="main.url_check !== 'true'">
  <v-text-field type="text" :variant="input" label="청첩장 주소" v-model="main.url" />
  <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="setUrlDuplicate()" :class="{ disabled: errorMessage !== '' || main.url == '' }"><span>중복 확인</span></button>
</div>
<v_errormessage :errorMessage = "errorMessage"/>


<div v-if="main.url_check === 'true'">
  <div class="sp_32"/>
  <div class="flex gap_8 ma_16 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13" d="M5 11L11 17L21 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path></svg>
        </div>
        <div>
          <h4><strong>주소 등록 완료</strong></h4>
          <h6 class="underline">https://www.behance.net/gallery/{{ main.url }}</h6>
        </div>
  </div>

  <div class="sp_48"/>


    <button class="button-defaulted width_100 height_40 --border-radius_16" @click="setUrlReset()"><icon icon="Refresh"><Refresh /></icon><span>주소 재설정 하기</span></button>
  </div>
<div class="sp_48"/>
</div>

      </div>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>    
</template>
<script>
import { urlDuplicate } from '@/services/posts'
import v_errormessage from '@/components/v_errormessage.vue'
import icon from '@/components/Icons/icon.vue'
import Refresh from '@/components/Icons/Refresh.vue'
import Star from '@/components/Icons/Star.vue'

export default {
  components: { v_errormessage, icon, Refresh, Star },

  props: {
    main: { type: Object },
    input: '',
  },
  data: function() {
    return {
      errorMessage: '',
    }
  },

watch: {
  'main.url'() {
    const url = this.main.url;
    const letterRegex = /^[a-zA-Z0-9]{4,10}$/;

    if (url === '') {
      this.errorMessage = '';
    } else if (!letterRegex.test(url)) {
      this.errorMessage = 'URL은 4자 이상 10자 이하의 영문자 또는 숫자만 가능합니다.';
    } else {
      this.errorMessage = '';
    }
  },
},

  methods: {
    setUrlReset() {
      this.main.url = ''
      this.main.url_check = ''
    },
    setUrlDuplicate() {
      urlDuplicate(this.main.url)
        .then((res) => {
          this.main.url_check = res
          if (res === 'false') {
            this.errorMessage = '중복하는 주소가 있습니다.';
          }
        })
        .catch((error) => {
          // Handle errors that may occur during the duplicate check
          console.error(error)
        })
    },
  },
};
</script>

<style scoped>
.flex-img__wrap {
  position: relative;
  overflow: hidden;
}
.flex-img__wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  
}
</style>