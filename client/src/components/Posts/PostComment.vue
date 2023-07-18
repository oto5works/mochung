<template>
  <div class="comment">
    <p>id : {{ comment._id }}</p>
      <p>작성자 : {{ comment.writer }}</p>
      <p>내용 : {{ comment.content }}</p>
      <p>비밀번호 : {{ comment.password }}</p>
      <button @click="handleCommentDelete">deleteItem</button>
  </div>
</template>

<script>
import { deleteComment } from '@/services/posts'
export default {
  props: {
    comment: {
      type: Object,
    },
  },
  methods: {
    handleCommentDelete(e) {
      e.preventDefault()
      this.$el.querySelector('button').classList.add('is-loading')
      if (confirm('삭제하실래용가리?'))
        deleteComment(this.comment.id).then((res) => {
          this.$emit('setDeleteComment', res)
          e.target.reset()
          this.$el.querySelector('button').classList.remove('is-loading')
        })
    
    },
  }
}
</script>

<style scoped>
.comment {
  padding: 2px;
  border: 1px solid #000;
  margin-bottom: 10px;
}
</style>
