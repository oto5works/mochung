<template>
  <div class="modal comments-modal">
    <div class="modal-background" @click="$emit('commentsModal')"></div>
    <div class="modal-content">
<!-- Any other Bulma elements you want -->
<div class="card-content">
<form @submit="handleSubmit">
<textarea name="writer" placeholder="작성자"></textarea>
<textarea name="content" placeholder="내용"></textarea>
<textarea name="password" placeholder="비번"></textarea>

<button>Send</button>
</form>
<Comment v-for="comment in oderComments" :key="comment.id" :comment="comment"/>
</div>
<!-- Any other Bulma elements you want -->
    </div>
<button class="modal-close is-large" aria-label="close" @click="$emit('commentsModal')"></button>
  </div>
</template>

<script>
import { addComment } from '../services/posts'
import Comment from './Posts/PostComment.vue'

export default {
  inject: ['GStore'],
  props: {
    post: {
      type: Object,
    },
  },
  components: { Comment },
  data() {
    return {
      postArr: this.post,
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      const postId = this.postArr.id
      const writer = e.target.writer.value
      const content = e.target.content.value
      const password = e.target.password.value
      addComment(postId, { content, writer, password }).then((res) => {
        e.target.reset()
        this.postArr = res
      })
    },
  },
  components: { Comment },
  computed: {
    oderComments() {
      return this.postArr.comments.reverse()
    },
  },
}
</script>

<style scoped>
.card-content {
  background-color: #fff;
}
</style>
