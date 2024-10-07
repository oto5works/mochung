<template>
  <div class="comment-container">
    <div
      :class="[
        'comment',
        commentData.commentType,
        { isWriter: comment.isWriter },
      ]"
    >
      <div class="comment-wrap">
        <div class="comment-content">
          <button
            class="comment-profile"
            :style="{ backgroundColor: randomBgColor, color: textColor }"
          >
            <span v-if="comment.writer">{{ comment.writer.charAt(0) }}</span>
          </button>
          <div class="comment-bubble" @click="showMore = true">
            <span class="reply-writer" v-if="comment.parent"
                >@{{ comment.parent.writer }}</span
              >
            <span v-if="!showMore"
              >
              {{ comment.content.slice(0, 64) }}
              <span
                class="cursor_pointer"
                @click="showMore = true"
                v-if="comment.content.length > 64"
              >
                <span>...</span>
                <span class="opacity_70">자세히 보기</span>
              </span>
            </span>
            <span v-if="showMore">
              {{ comment.content }}
            </span>
          </div>
        </div>
        <div class="comment-writer">
          <div class="writer-content">
            <div class="writer">
              <span v-if="comment.writer">{{ comment.writer }}</span>
              <span v-if="comment.writer">ㆍ</span>
              <div class="display_flex gap_12">
                <span>{{ timeAgo }}</span>
                <span v-if="commentData.commentType === 'default'" @click="commentForm = true">답글</span>
              </div>
            </div>
            <button class="icon_24" @click="commentMore = true">
              <icon class="icon_16"><dots /></icon>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="reply" v-if="commentData.commentType === 'default'">
      <comment
        v-for="(item, index) in visibleChildren"
        :key="item.id"
        :comment="item"
      />
      <button class="replyMore" v-if="showMoreRepliesButton" @click="showAllReplies = true">
        {{ (comment.children?.length ?? 0) - 2 }}개의 댓글 더보기
      </button>
    </div>

    <commentMore
      :comment="comment"
      v-if="commentMore"
      :dialog="commentMore"
      @update:dialog="commentMore = $event"
    />
    <commentForm
      v-if="commentForm"
      :dialog="commentForm"
      :id="comment._id"
      @update:dialog="commentForm = $event"
      @confirm="handleConfirm"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import dots from "@/components/icon/dots.vue";
import user from "@/components/icon/user.vue";

import moment from "moment";
import "moment/locale/ko";
import "@/components/comment/comment.scss";

export default {
  components: {
    dots,
    user,
    commentMore: defineAsyncComponent(() =>
      import("@/components/comment/commentMore.vue")
    ),
    comment: defineAsyncComponent(() =>
      import("@/components/comment/comment.vue")
    ),
    commentForm: defineAsyncComponent(() =>
      import("@/components/comment/commentForm.vue")
    ),
  },
  props: {
    comment: { type: Object },
  },
  data() {
    return {
      showMore: false,
      commentMore: false,
      commentForm: false,
      randomBgColor: this.generateRandomColor(), // 랜덤 배경색 생성
      randomThumb: this.generateRandomThumb(),
      showAllReplies: false,
    };
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
    }),
    timeAgo() {
      moment.locale("ko");
      moment.updateLocale("ko", {
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          ss: "%d초",
          m: "1분",
          mm: "%d분",
          h: "1시간",
          hh: "%d시간",
          d: "1일",
          dd: "%d일",
          M: "1개월",
          MM: "%d개월",
          y: "1년",
          yy: "%d년",
        },
      });

      if (!this.comment.dateCreate) {
        return ""; // dateCreate가 없으면 빈 문자열 반환
      }

      const dateCreate = moment(this.comment.dateCreate);
      return dateCreate.fromNow();
    },
    imageUrl() {
      return `${import.meta.env.VITE_IMAGE_BASE_URL}${this.randomThumb}.webp`;
    },
    textColor() {
      // 배경색의 밝기에 따라 텍스트 색상 결정
      const rgb = this.hexToRgb(this.randomBgColor);
      const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 255000;
      return brightness > 0.5 ? "black" : "white"; // 밝으면 검정, 어두우면 흰색
    },
    visibleChildren() {
      if ((this.comment.children?.length ?? 0) > 2 && !this.showAllReplies) {
        return this.comment.children.slice(0, 2);
      }
      return this.comment.children ?? [];
    },
    showMoreRepliesButton() {
      return this.comment.children && this.comment.children.length > 2 && !this.showAllReplies;
    },
  },
  methods: {
    handleComment() {
      this.commentForm = true; // Open the password verification dialog
    },
    generateRandomThumb() {
      const randomNum = Math.floor(Math.random() * 12) + 1;
      return `thumb${randomNum}`;
    },
    generateRandomColor() {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      return randomColor;
    },
    hexToRgb(hex) {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return { r, g, b };
    },
  },
};
</script>
