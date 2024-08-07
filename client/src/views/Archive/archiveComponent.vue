<template>
  <div class="archiveCard">
    <!-- 종류 -->
    <div class="pa_8">
    <div :class="this.archive.type" class="card-type line-height_100">{{ cardType }}</div>
  </div>
    <!-- 종류 -->
<div class="sp_12"/>
    <!-- 타이틀 영역 -->
    <div class="flex align-items_flex-start justify-content_space-between pa_8">
      <div>
        <div class="font-size_24 bold line-height_100">
          {{ archive.formData.data.homeData.title }}
        </div>
        <div class="sp_6" />
        <div
          class="font-size_12 color_mio-primary-color text-decoration_underline line-height_100"
        @click="handlePreview">
          @{{ archive.formData.data.urlData.url || archive.id }}
        </div>
      </div>
      <button @click="dialog.more = true">
        <icon><dots /></icon>
      </button>
    </div>
    <!-- 타이틀 영역 -->

    <div class="sp_32" />

    <!-- 정보 영역 -->

    <div class="flex align-items_flex-end justify-content_space-between pa_8">
      <div style="line-height: 128%" class="font-size_12 width_100">
        <span class="bold"
          >{{ archive.formData.data.hostData.info[0].host.title }}
          {{ archive.formData.data.hostData.info[1].host.title }}</span
        ><br />
        {{ archive.formData.data.hostData.info[0].host.name }}
        {{ archive.formData.data.hostData.info[1].host.name }}
        <div class="sp_8" />
        <div class="text-overflow_ellipsis width_80">
          {{ archive.formData.data.locationData.name }}
          {{ archive.formData.data.locationData.info }}
          <br />
          {{ archive.formData.data.dateData.time }}
        </div>
      </div>

      <div class="font-size_36 line-height_100 bold">
        {{ formatDate(archive.formData.data.dateData.date) }}<br />
        ㅡ{{ formatDate(archive.dateDelete) || "00.00" }}
      </div>
    </div>
    <!-- 정보 영역 -->

    <div class="sp_16" />

    <!-- 이미지 영역 -->
    <div
      class="archiveCard__image animation"
      :style="{ backgroundImage: `url('${getRandomOrHeroImage()}')` }"
    />
    <!-- 이미지 영역 -->
<div class="sp_16"/>
    <!-- 하단 영역 -->
    <div class="flex align-items_center justify-content_space-between">
      <!-- 소셜 영역 -->

      <div class="flex width_100 pa_12 gap_16">
        <button
          v-if="archive.formData.data.functionData.fnLike"
          class="flex align-items_center gap_8"
        >
          <icon class="icon_18"><heart /></icon>
          <div class="line-height_100 font-size_12">
            {{ archive.like >= 1000 ? "999+" : archive.like }}
          </div>
        </button>

        <button
          v-if="archive.formData.data.commentData.fnComment"
          @click="dialog.comment = true"
          class="flex align-items_center gap_8"
        >
          <icon class="icon_18"><chat /></icon>
          <div class="line-height_100 font-size_12">
            {{ archive.comments.length }}
          </div>
        </button>

        <button
          v-if="archive.formData.data.surveyData.fnSurvey"
          @click="dialog.survey = true"
          class="flex align-items_center gap_8"
        >
          <icon class="icon_18"><rsvp /></icon>
          <div class="font-size_12 line-height_100">
            {{ archive.surveys.length }}
          </div>
        </button>
      </div>
      <!-- 소셜 영역 -->

      <!-- 활성화 영역 -->
      <div
        class="sp_28 flex pa_12 border-radius_24 font-family_mio-font-family-2"
        :class="{
          active_true: archive.pay,
          active_false: !archive.pay,
        }"
      >
        <button v-if="archive.pay" class="flex align-items_center gap_4">
          <icon class="icon_18"><sparkle /></icon>
          <span class="font-size_10 line-height_100">ACTIVE</span>
        </button>

        <button
          v-if="!archive.pay"
          class="flex align-items_center gap_4"
          @click="dialog.active = true"
        >
          <icon class="icon_18"><lock /></icon>
          <span class="font-size_10 line-height_100">LOCK</span>
        </button>
      </div>
      <!-- 활성화 영역 -->
    </div>
    <!-- 하단 영역 -->

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
      :input="outlined"
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
    cardType() {
      const type = this.archive.type;
      switch (type) {
        case 'moInvEasy':
          return 'MOBILE INV. EASY';
        case 'moInvCustom':
          return 'MOBILE INV. CUSTOM';
        case 'invEasy':
          return 'INV. EASY';
        case 'invCustom':
          return 'INV. CUSTOM';
        default:
          return 'type'; // Return the type as is if it doesn't match any case
      }
    },
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
      if (dateString) {
        const date = new Date(dateString);
        const month = date.getMonth() + 1; // Months are zero-based, so adding 1
        const day = date.getDate();
        return `${month}.${day}`;
      } else {
        return "00.00";
      }
    },
    handlePreview() {
      const id = this.archive.id; // Get the ID from the props
      this.$router.push({ name: "view", params: { id: id } }); // Navigate to the 'view' route with the ID parameter
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
  border-radius: 24px;
  padding: 32px 16px;
  background-color: var(--mio-theme-color-surface-3);
  cursor: pointer;
}
.archiveCard:hover {
  background-color: var(--mio-theme-color-secondary-container);
}
.archiveCard__image {
  position: relative;
  display: block;
  width: 100%;
  height: 160px;
  border-radius: 16px;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.archiveCard:hover .archiveCard__image{
  background-size: 108%;
}
.active_true {
  background-color: var(--mio-theme-color-primary);
  color: var(--mio-theme-color-on-primary);
}
.active_false {
  background-color: var(--mio-theme-color-ref-neutral-100);
  color: var(--mio-theme-color-on-surface-variant);
}
.card-type {
  width: fit-content;
  font-size: 10px;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  text-transform: uppercase;
  border-radius: 24px;
  font-family: var(--mio-theme-font-family-2);
  background-color: var(--mio-theme-color-ref-neutral-100);
}


@media all and (max-width: 1023px) {
  .archive__wrap {
    grid-template-columns: 1fr;
    padding: 8px 12px;
  }
}
</style>
