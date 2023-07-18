<template>
  <div>
    <h1>id : {{ postData.id }}</h1>
    <h1>title : {{ postData.title }}</h1>
    <h1>content : {{ postData.content }}</h1>
    <h1>name : {{ postData.name }}</h1>
    <div class="proimg"><img :src="postImg" /></div> 
    <!--<Comment v-for="comment in oderComments" :key="comment.id" :comment="comment"/>-->
  </div>
</template>

<script>
import Comment from '@/components/Posts/PostComment.vue'

export default {
  components: { Comment },
  props: {
    postData: {
      type: Object,
    }
  },
  computed: {
    postImg() {
      return (
        this.postData.img || 'https://thumbs.gfycat.com/ClassicWholeIndianjackal-mobile.jpg'
      )
    },
    oderComments() {
      return (
        this.postData.comments.reverse()
      )
    },
  },
}
</script>
<style scoped>
h1 {
  font-size: 50px;
}
.proimg {
  width: 100px;
}
</style>
