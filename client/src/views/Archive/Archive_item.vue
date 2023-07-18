<template>
  <div>
    {{ post.main.title }}
<div class="url"><a :href="`https://ondo.cards/${set.url}`" target='_blank'>https://ondo.cards/{{ set.url }}</a></div> 
  <div class="icon-text"><icon icon="Lock"><Lock /></icon>결제 미완료</div>
  <div class="icon-text"><icon icon="Eye"><Eye /></icon>미리보기</div>

예식일
<date class="start">{{ set.startDate }}</date>
<hr>
삭제예정일
<date class="end">{{ set.endDate }}</date>




<div><icon icon="Heart"><Heart /></icon>10</div>
<div><icon icon="Comment"><Comment /></icon>20</div>
<div><icon icon="Attend"><Attend /></icon>참석여부 <span>20</span></div>
<hr>
<icon icon="Heart"><Heart /></icon>
활성화 코드를 받아 
청첩장을 활성화해주세요.

</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Eye from '@/components/Icons/Eye.vue'
import Share from '@/components/Icons/Share.vue'
import Pay from '@/components/Icons/Pay.vue'
import Attend from '@/components/Icons/Attend.vue'
import Comment from '@/components/Icons/Comment.vue'
import Heart from '@/components/Icons/Heart.vue'
import moment from 'moment';

export default {
  components: { icon, Eye, Share, Pay, Attend, Comment, Heart },

  data() {
    return {
      set:{
          startDate: '',
          endDate: '',
        },
    }
  },
  props: {
    post: {
      type: Object,
    },
  },
  mounted() {
    this.set_Date()
    this.set_Url()
  },
  methods: {
    set_Date() {
      this.set.startDate = moment(this.post.wedding.date).format('YY.MM.DD');
      this.set.endDate = moment(this.post.wedding.date).add(3, 'months').format('YY.MM.DD');
    },
  }    
}
</script>

