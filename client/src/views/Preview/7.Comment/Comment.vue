<template>
    <section>
      <div class="v-hr --display_block-none-block"/>
      <article
        data-sal="slide-up"
        data-sal-duration="700"
      >
      <div class="sp_64"/>

      <div class="title__wrap">
        <div class="title__content">
          <Sticker :sticker="sticker" />
          <h5 class="--text-align">Guest Book</h5>
          <div class="sp_8"/>
          <h1 class="--font-weight --text-align">{{ guest.comment_title }}</h1>
        </div>
      </div>
      <div class="sp_24"/>
<div class="pa_16">
  <!-- Dialog -->
  <v-dialog v-model="dialog" >
      <template v-slot:activator="{ props }">
        <div class="flex --justify-content">
          <button class="button-defaulted height_40 gap_4 pa_24 --border-radius_32" v-bind="props">
          <span>작성하기</span>
          <icon icon="ArrowRight"><ArrowRight /></icon>
        </button>
      </div>
      </template>


<div class="dialog__wrap">

<div class="dialog__content --border-radius_16">
  <div class="sp_64"/>
<button class="v-dialog__close" @click="dialog = false"><icon icon="Close"><Close /></icon></button>

<div class="pa_24">
    <h1>방명록<br/>작성하기</h1>
<div class="sp_28"/>
<form @submit.prevent="registerComment">
                <div class="flex gap_8">
                  <v-text-field type="text" :variant="custom.style_input" label="작성자" v-model="commentWriter" required />
                  <v-text-field type="text" :variant="custom.style_input" label="비밀번호" v-model="commentPassword" required />
                </div>
                <div class="sp_18"/>
                <v-text-field type="text" :variant="custom.style_input" label="내용" v-model="commentContent" required />
                <div class="sp_32"/>
                <button class="button-defaulted width_100 height_40 --border-radius_16" @click="dialog = false"><span>제출하기</span></button>
          </form>  
          <div class="sp_64"/>
</div>
</div>
</div>
</v-dialog>

<div class="sp_28"/>
<Comment_comment v-for="comment in displayedComments" :key="comment.id" :comment="comment" />
</div>
<div class="sp_12"/>
<div class="flex justify-content_center">
<div class="flex align-items_center gap_12">
<button class="button-icon opacity_0 --primary-color" @click="prevPage" :class="{ 'opacity_100': currentPage > 1 }"><icon icon="CaretLeft"><CaretLeft /></icon></button>
<div class="flex align-items_center gap_8"><h5>{{ currentPage }}</h5><h4>/</h4><h5>{{ totalPages }}</h5></div>
<button class="button-icon opacity_0 --primary-color" @click="nextPage" :class="{ 'opacity_100': currentPage < totalPages }"><icon icon="CaretRight"><CaretRight /></icon></button>
</div>
</div>

<div class="sp_32"/>


        </article>
   </section>
</template>
<script>
import Comment_comment from '@/views/Preview/7.Comment/Comment_comment.vue'
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import icon from '@/components/Icons/icon.vue'
import CaretLeft from '@/components/Icons/CaretLeft.vue'
import CaretRight from '@/components/Icons/CaretRight.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'
import Close from '@/components/Icons/Close.vue'
import sal from "sal.js";

export default {
  components: { Comment_comment, Sticker, icon, CaretLeft, CaretRight, ArrowRight, Close },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
  props: {
    sticker: { type: String },
    custom: { type: Object },
    guest: { type: Object },
  },
  data() {
    return {
      dialog: false,
      commentWriter: '',
      commentPassword: '',
      commentContent: '',
      currentPage: 1,
      commentsPerPage: 4,
    };
  },
  computed: {
    totalComments() { return this.guest.comments.length },
    totalPages() { return Math.ceil(this.totalComments / this.commentsPerPage) },
    displayedComments() {
      const startIndex = (this.currentPage - 1) * this.commentsPerPage;
      const endIndex = startIndex + this.commentsPerPage;
      const reversedComments = this.guest.comments.slice().reverse();
      return reversedComments.slice(startIndex, endIndex);
    },
  },
  methods: {
    registerComment() {
      const newComment = {
        comment_writer: this.commentWriter,
        comment_password: this.commentPassword,
        comment_content: this.commentContent,
        commentCount: 0
      };

      this.$emit("registerComment", newComment);

      this.commentWriter = "";
      this.commentPassword = "";
      this.commentContent = "";
    },
    nextPage() { this.currentPage++ },
    prevPage() { this.currentPage-- },
  }
};
  </script>


