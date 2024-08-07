<template>
  <div class="archiveCard">
    <div
      class="archiveCard__image"
      :style="{ backgroundImage: `url('${getRandomOrHeroImage()}')` }"
    >
      <div class="archiveCard__link" @click="goToPreview" />
      <!-- 소셜 영역 -->
      <div class="archiveCard__social">
        <button
          v-if="archive.formData.data.functionData.fnLike"
          class="flex align-items_center gap_4"
        >
          <icon><heart /></icon>
          <div class="line-height_100 font-size_12">
            {{ archive.like >= 1000 ? "999+" : archive.like }}
          </div>
        </button>

        <button
          v-if="archive.formData.data.commentData.fnComment"
          @click="dialog.comment = true"
          class="flex align-items_center gap_4"
        >
          <icon class="icon_18"><chat /></icon>
          <div class="line-height_100 font-size_12">
            {{ archive.comments.length }}
          </div>
        </button>

        <button
          v-if="archive.formData.data.surveyData.fnSurvey"
          @click="dialog.survey = true"
          class="flex align-items_center gap_4"
        >
          <icon class="icon_18"><rsvp /></icon>
          <div class="font-size_12 line-height_100">
            {{ archive.surveys.length }}
          </div>
        </button>
      </div>
      <!-- 소셜 영역 -->
    </div>
    <div class="archiveCard__content">
      <div class="archiveCard__link" @click="goToPreview" />
      <div class="flex align-items_flex-start justify-content_space-between">
        <div class="archiveCard__title">
          {{ archive.formData.data.homeData.title }}
        </div>
        <button @click="dialog.more = true">
          <icon class="icon_18"><dots /></icon>
        </button>
      </div>

      <h5>예식일 {{ formatDate(archive.formData.data.dateData.date) }}</h5>

      <h6 style="font-style: italic">
        Created at&nbsp;&nbsp;|&nbsp;&nbsp;{{ dateCreate }}
      </h6>
      <div
        class="archiveCard__active"
        :class="{
          active_true: archive.pay,
          active_false: !archive.pay,
        }"
      >
        <button v-if="archive.pay" class="flex align-items_center gap_4">
          <icon class="icon_16"><sparkle /></icon>
          <span class="line-height_100">활성화</span>
        </button>

        <button
          v-if="!archive.pay"
          class="flex align-items_center gap_4"
          @click="dialog.active = true"
        >
          <icon class="icon_16"><lock /></icon>
          <span class="line-height_100">활성화안됨</span>
        </button>
      </div>
    </div>

    <!-- Dialog -->
    <more
      v-if="dialog.more"
      :dialog="dialog.more"
      @update:dialog="dialog.more = $event"
      :root="true"
      :id="archive.id"
      @confirmDelete="confirmDelete"
    />
    <survey
      v-if="dialog.survey"
      :dialog="dialog.survey"
      @update:dialog="dialog.survey = $event"
      :root="true"
      :id="archive.id"
    />
    <comment
      v-if="dialog.comment"
      :dialog="dialog.comment"
      @update:dialog="dialog.comment = $event"
      :root="true"
      :id="archive.id"
    />
    <active
      v-if="dialog.active"
      :dialog="dialog.active"
      @update:dialog="dialog.active = $event"
      :root="true"
      :id="archive.id"
    />
    <!-- Dialog -->
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import eye from "@/components/icon/eye";
import heart from "@/components/icon/heart";
import chat from "@/components/icon/chat";
import sparkle from "@/components/icon/sparkle";
import lock from "@/components/icon/lock";

import rsvp from "@/components/icon/rsvp";
import dots from "@/components/icon/dots";

export default {
  components: {
    eye,
    heart,
    chat,
    sparkle,
    rsvp,
    dots,
    lock,
    more: defineAsyncComponent(() => import("@/views/archive/more.vue")),
    survey: defineAsyncComponent(() => import("@/views/archive/survey.vue")),
    comment: defineAsyncComponent(() => import("@/views/archive/comment.vue")),
    active: defineAsyncComponent(() => import("@/views/archive/active.vue")),
  },
  data() {
    return {
      dialog: {
        more: false,
        survey: false,
        comment: false,
        active: false,
      },
    };
  },
  props: {
    archive: {
      type: Object,
      required: true,
    },
  },
  computed: {
    dateCreate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      const date = new Date(this.archive.dateCreate);
      const monthIndex = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();

      return `${months[monthIndex]} ${day}, ${year}`;
    },
    // ... other computed properties
  },

  methods: {
    getRandomOrHeroImage() {
      const heroImageId = this.archive.formData.data.homeData.files.url;
      const randomImages = [
        "https://design.samsung.com/kr/contents/assets/index_2023/img/news-samsung-recreate.jpg",
        "https://design.samsung.com/kr/contents/assets/index_2023/img/news-mep-exhibition.jpg",
        "https://design.samsung.com/kr/contents/assets/index_2023/img/ourstories-think-2030.jpg",
        "https://design.samsung.com/kr/contents/assets/index_2023/img/ourstories-watch-face-2023.jpg",
      ];

      if (!heroImageId || heroImageId === "") {
        // heroImageId가 없거나 빈 문자열인 경우 랜덤 이미지 선택
        const randomIndex = Math.floor(Math.random() * randomImages.length);
        return randomImages[randomIndex];
      } else {
        return this.archive.formData.data.homeData.files.url;
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear().toString().substr(2); // 뒤의 두 자리만 사용
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}. ${month}. ${day}`;
    },
    updateDialogActive() {
      if (!this.pay) {
        this.dialog.active = true;
      } else {
      }
    },
    confirmDelete() {
      this.$emit("confirmDelete");
    },
  },
};
</script>


<style scoped>
.archiveCard {
  position: relative;
  display: block;
  width: 100%;
  border-radius: 26px;
  background-color: var(--mio-theme-color-surface-1);
  cursor: pointer;
}
.archiveCard:hover {
  background-color: var(--mio-theme-color-secondary-container)
}
.archiveCard__image {
  position: relative;
  display: block;
  width: 100%;
  height: 180px;
  border-radius: 26px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.archiveCard__image::before {
  position: absolute;
  content: "";
  display: block;
  width: 100%;
  height: 80px;
  bottom: 0;
  background: var(--mio-theme-color-on-surface-variant-1);
}
.archiveCard__link {
  position: absolute;
  width: 100%;
  height: 100%;
}
.archiveCard__social {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  bottom: 12px;
  right: 24px;
  color: var(--mio-theme-color-on-primary);
}

.archiveCard__content {
  display: grid;
  position: relative;
  align-self: start;
  padding: 24px;
  grid-gap: 8px;
  gap: 8px;
}
.archiveCard__title {
  font-size: 22px;
  line-height: 122%;
  font-weight: 700;
}
.archiveCard__active {
  position: absolute;
  display: block;
  top: -15px;
  left: 24px;
  padding: 6px 12px;
  border-radius: 80px;
  
}
.active_true {
  background-color: var(--mio-theme-color-primary);
  color: var(--mio-theme-color-on-primary);
}
.active_false {
  background-color: var(--mio-theme-color-utility-error);
  color: var(--mio-theme-color-utility-on-error);
}



.archive__wrap {
    position: relative;
    display: grid;
    gap: 8px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    color: var(--mio-theme-color-on-background);
    padding: 8px 140px;
}


  @media all and (max-width:1023px) {
    .archive__wrap {
      grid-template-columns: 1fr;
      padding: 8px 12px;
    }
  }
</style>