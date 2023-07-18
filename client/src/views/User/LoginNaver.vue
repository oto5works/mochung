<template>
  <a :href="naverLoginUrl" class="naver_btn">
    <div class="naver_content"><icon icon="Naver"><Naver /></icon><p>네이버로 시작하기</p></div>
  </a>
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import Naver from '@/components/Icons/Naver.vue'

  export default {
    components: { icon, Naver },
    data () {
      return {
        naverLoginUrl: 'https://nid.naver.com/oauth2.0/authorize?' +
          'client_id=K4zOH6MzWXb5jjEMIQWa' +
          '&response_type=code' +
          '&redirect_uri=http://127.0.0.1:5173/login/naver' +
          '&state=RAMDOM_STATE',
      }
    },
  }
</script>
