<template>
  <div>

<div class="card">
  <button class="delete --border-radius_16"><icon icon="X"><X /></icon></button>
  <div class="flex align-items_center --font-weight"><h5>{{ comment.comment_writer }}</h5><h6 class="opacity_80">ㆍ {{ timeAgo }}</h6></div>  
<div class="sp_4"/>
    <h5 v-if="!showMore">{{ comment.comment_content.slice(0, 44) }}<span class="cursor_pointer" @click="showMore = true" v-if="comment.comment_content.length > 44">... <span class="opacity_80">자세히 보기</span></span></h5>
    <h5 v-if="showMore">{{ comment.comment_content }}</h5>
    <div class="card__overlay"/>
</div>

<div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>

  </div>
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import X from '@/components/Icons/X.vue'
import moment from 'moment'
import 'moment/locale/ko';

export default {
  components: { icon, X },
  props: {
    comment: { type: Object },
  },
  data() {
    return {
      showMore: false,
    };
  },
  computed: {
    timeAgo() {
  moment.locale('ko')
  moment.updateLocale('ko', {
    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇 초',
      ss: '%d초',
      m: '1분',
      mm: '%d분',
      h: '1시간',
      hh: '%d시간',
      d: '1일',
      dd: '%d일',
      M: '1개월',
      MM: '%d개월',
      y: '1년',
      yy: '%d년'
    }
  })
  return moment(this.comment.timestamp).fromNow()
}
}
}
</script>
<style scoped>
.delete {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  opacity: 60%;
}
.delete svg {
    width: 12px;
    height: 12px;
}

</style>
