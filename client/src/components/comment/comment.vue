<template>
  <div :class="['comment', design, { isWriter: comment.isWriter }]">
    <div class="comment-wrap">
      <div class="comment-content">
        <!-- :style="{ backgroundImage: `url('${imageUrl}')` }" -->
        <button
          class="comment-profile"
          
        >
        <icon class="icon_18"><user /></icon>
        </button>
        <div class="comment-bubble" @click="showMore = true">
          <span v-if="!showMore">
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
            <span v-if="comment.writer">{{ comment.writer }}</span
            ><span v-if="comment.writer">ㆍ</span>
            <span>{{ timeAgo }}</span>
          </div>
          <button class="icon_24" @click="dialog = true">
            <icon class="icon_16"><dots /></icon>
          </button>
        </div>
      </div>
    </div>
    <commentMore
      :config="config"
      :comment="comment"
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
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
    ...mapGetters({
      design: "getDesign",
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
        return ""; // Return an empty string if dateCreate is not available
      }

      const dateCreate = moment(this.comment.dateCreate);
      return dateCreate.fromNow();
    },
    imageUrl() {
      console.log("fasdfqwef", import.meta.env.VITE_IMAGE_BASE_URL);
      return `${import.meta.env.VITE_IMAGE_BASE_URL}${this.randomThumb}.webp`;
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
