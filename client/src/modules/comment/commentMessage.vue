<template>
  <div class="message">
    <div class="sp_8" />

    <div :class="['flex', comment.status]">
      <div class="message__wrap">
        <div class="bubble__wrap" @click="showMore = true">
          <div
            class="comment-profile"
            :style="{
              backgroundImage: `url('https://jwpggit.github.io/storage/image/moInv/${this.randomThumb}.webp')`,
            }"
          />
          <div class="comment-bubble">
            <span v-if="!showMore">
              {{ comment.content.slice(0, 64) }}
              <span
                class="cursor_pointer"
                @click="showMore = true"
                v-if="comment.content.length > 64"
              >
                <span>...</span>
                <span class="opacity_80">자세히 보기</span>
              </span>
            </span>
            <span v-if="showMore">
              {{ comment.content }}
            </span>
          </div>
        </div>

        <div class="comment-writer">
          <div class="font-size_12 opacity_70">
            {{ comment.writer }}{{ timeAgo }}
          </div>
          <button @click="dialog = true">
            <icon><dots /></icon>
          </button>

          <more
            :config="config"
            :comment="comment"
            v-if="dialog"
            :dialog="dialog"
            @update:dialog="dialog = $event"
          />
        </div>
      </div>
    </div>

    <div class="sp_8" />
    <div class="h-hr --display_none-none-block" />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import dots from "@/components/icon/dots.vue";

import moment from "moment";
import "moment/locale/ko";

export default {
  components: {
    dots,
    more: defineAsyncComponent(() =>
      import("@/modules/comment/commentMore.vue")
    ),
  },
  props: {
    config: {
      type: Boolean,
      default: false,
    },
    comment: { type: Object },
  },
  data() {
    return {
      showMore: false,
      dialog: false,
      randomThumb: this.generateRandomThumb(),
    };
  },
  computed: {
    timeAgo() {
      moment.locale("ko");
      moment.updateLocale("ko", {
        relativeTime: {
          future: "ㆍ %s 후",
          past: "ㆍ %s 전",
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
        return ""; // Return an empty string if dateCreate is not available
      }

      const dateCreate = moment(this.comment.dateCreate);
      return dateCreate.fromNow();
    },
  },
  methods: {
    generateRandomThumb() {
      // Generate a random number between 1 and 12
      const randomNum = Math.floor(Math.random() * 12) + 1;
      // Concatenate with 'thumb' to get the final randomThumb value
      return `thumb${randomNum}`;
    },
  },
};
</script>

<style scoped>
.message {
  position: relative;
}
.message .h-hr {
  display: none;
}
.message:nth-last-child(1) .h-hr {
  display: none;
}

/*-- common --*/
.message .message__wrap {
  width: fit-content;
  max-width: 80%;
}
.message .bubble__wrap {
  display: flex;
  gap: 8px;
}
.message .comment-bubble {
  position: relative;
  padding: 12px 16px;
  width: fit-content;
  height: fit-content;
}

.message .comment-bubble::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: var(--mio-theme-color-primary);
}
.message .comment-bubble::after {
  display: none;
}
.message .comment-bubble span {
  font-size: 14px;
}
.message .comment-writer {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 0;
}
.message .comment-writer svg {
  stroke: unset;
  fill: var(--mio-theme-color-primary);
}

/*-- user --*/
.message .user {
  justify-content: flex-end;
}
.message .user .bubble__wrap {
  justify-content: flex-end;
}
.message .user .comment-profile {
  display: none;
}
.message .user .comment-bubble::before {
  opacity: 1;
  border-radius: 24px 24px 0 24px;
}
.message .user .comment-bubble span {
  color: var(--mio-theme-color-on-primary);
}
.message .user .comment-writer {
  flex-direction: row-reverse;
}

/*-- guest --*/
.message .guest {
  justify-content: flex-start;
}
.message .guest .bubble__wrap {
  justify-content: flex-start;
  align-items: flex-end;
}
.message .guest .comment-profile {
  position: relative;
  content: "";
  width: 30px;
  height: 30px;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
}
.message .guest .comment-bubble::before {
  opacity: 0.08;
  border-radius: 24px 24px 24px 0;
}
.message .guest .comment-bubble span {
  color: var(--mio-theme-color-on-background);
}
.message .guest .comment-writer {
  margin-left: 38px;
}

/*-- config --*/
.config .message .h-hr {
  display: var(--none-none-block);
}
.config .message:nth-last-child(1) .h-hr {
  display: none;
}
.config .message .comment-bubble::before {
  background-color: var(--pc-pc-tr);
}
.config .message .comment-bubble::after {
  display: var(--block-block-none);
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: var(--border-radius-24) var(--border-radius-24)
    var(--border-radius-24) 0;
  outline-style: var(--border-style);
  outline-width: 1px;
  outline-color: var(--primary-color);
}
.config .message .comment-bubble span {
  font-size: var(--font-size-14);
}
.config .message .comment-writer svg {
  fill: var(--primary-color);
}

/*-- user --*/
.config .message .user .comment-bubble::before {
  border-radius: var(--border-radius-24) var(--border-radius-24) 0
    var(--border-radius-24);
}
.config .message .user .comment-bubble span {
  color: var(--po-po-pc);
}

/*-- guest --*/
.config .message .guest .comment-bubble::before {
  border-radius: var(--border-radius-24) var(--border-radius-24)
    var(--border-radius-24) 0;
}
.message .guest .comment-bubble span {
  color: var(--font-color);
}
</style>
