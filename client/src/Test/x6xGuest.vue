<template>
<div class="write__content">
<section>
<article>
<v-card class="card">
<v-card-item><v-card-title>갤러리 설정</v-card-title></v-card-item>

방명록 사용할게요 안할게요

방명록 관리자 비밀번호


참석여부 사용할게요 안할게요


참석여부
성함 연락처
식사예정 유무
청첩장 수령 유무
주소
  


</v-card>
</article>

</section>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Warning from '@/components/Icons/Warning.vue'
import Swipe from '@/components/Icons/Swipe.vue'
import ThumbSwipe from '@/components/Icons/ThumbSwipe.vue'
import Grid from '@/components/Icons/Grid.vue'

export default {
  components: { icon, Warning, Swipe, ThumbSwipe, Grid },
  props: {
    guest: { type: Array },
  },
  data: function() {
    return { 
     
    };
  },
  methods: {
   
},
  mounted() {
    
  }
};
</script>