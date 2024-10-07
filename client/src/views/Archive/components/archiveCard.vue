<template>
  <div class="archiveCard">
    <div
      class="image-wrap"
      :style="{ backgroundImage: `url('${getRandomOrHeroImage()}')` }"
      @click="handlePreview"
    />

    <div class="archiveCard-content">
      <div class="title-wrap">
        <div class="title">
          <span>{{ archive.formData.data.functionData.fnTitle || "Untitled" }}</span>

          <buttonDefault
            variant="text"
            height="32"
            :icon="true"
            @click="handleDialogMore"
            :class="{
              selected: dialog.more,
            }"
          >
            <icon class="icon_14" v-if="dialog.more"><x /></icon>

            <icon class="icon_16" v-else><dots /></icon>

            <tooltipMenu
              v-if="dialog.more"
              :dialog="dialog.more"
              @update:dialog="dialog.more = $event"
            >
              <listItem icon="trash" label="삭제" @click="handleDelete" />
              <listItem icon="pencil" label="수정" @click="handleEdit" />
              <listItem icon="eye" label="미리보기" @click="handlePreview" />
              <listItem
                icon="share"
                label="공유하기"
                @click="dialog.share = true"
              />
            </tooltipMenu>
          </buttonDefault>
        </div>

        <span class="creativeAt">
          Creative at
          {{ archive.formData.data.dateData.date }}
          {{ archive.formData.data.dateData.time }}<br />
        </span>
      </div>
      <div class="functions-wrap">
        <buttonDefault
          variant="text"
          height="32"
          v-if="archive.formData.data.functionData.fnLike"
        >
          <icon class="icon_16"><heart /></icon>
          <span>{{ archive.like >= 1000 ? "999+" : archive.like }} </span>
        </buttonDefault>

        <buttonDefault
          variant="text"
          height="32"
          v-if="archive.formData.data.commentData.fnComment"
          @click="dialog.comment = true"
        >
          <icon class="icon_16"><chat /></icon>
          <span>{{ archive.comments.length }}</span>
        </buttonDefault>

        <buttonDefault
          variant="text"
          height="32"
          v-if="archive.formData.data.surveyData.fnSurvey"
          @click="dialog.survey = true"
        >
          <icon class="icon_16"><rsvp /></icon>
          <span>{{ archive.surveys.length }}</span>
        </buttonDefault>
        <buttonDefault variant="text" height="32" @click="handlePreview">
          <icon class="icon_16"><links /></icon>
          <span>LINK</span>
        </buttonDefault>
      </div>
      <div class="footer-wrap">
        <div class="pay-wrap" @click="handlePayment">
          <div
            class="thumb"
            :class="{
              active: archive.pay,
            }"
          >
            <!-- archive.pay가 true일 때 sparkle 아이콘 표시 -->
            <icon class="icon_18" v-if="archive.pay"><sparkle /></icon>

            <!-- archive.pay가 false일 때 lock 아이콘 표시 -->
            <icon class="icon_18" v-else><lock /></icon>
          </div>
          <div class="content">
            <div class="payment">
              {{ archive.pay ? "Payment" : "No Payment" }}
            </div>
            <div class="dateExp">Date Exp: {{ dateExp }}</div>
          </div>
        </div>

        <buttonDefault variant="filled" height="40"
          ><icon class="icon_18"><naver /></icon
          ><span>Naver</span></buttonDefault
        >
      </div>

      <!-- 정보 영역 

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

    </div>
  -->

      <!-- Dialog -->

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
      <archiveActive
        v-if="dialog.active"
        :dialog="dialog.active"
        @update:dialog="dialog.active = $event"
        :id="archive.id"
      />
      <!-- Dialog -->
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import links from "@/components/icon/links";
import naver from "@/components/icon/naver";

import heart from "@/components/icon/heart";
import chat from "@/components/icon/chat";
import sparkle from "@/components/icon/sparkle";
import lock from "@/components/icon/lock";

import rsvp from "@/components/icon/rsvp";
import dots from "@/components/icon/dots";

import tooltipMenu from "@/components/tooltip/tooltipMenu.vue";

export default {
  components: {
    tooltipMenu,
    links,
    naver,
    heart,
    chat,
    sparkle,
    rsvp,
    dots,
    lock,
    survey: defineAsyncComponent(() => import("@/views/archive/survey.vue")),
    comment: defineAsyncComponent(() => import("@/views/archive/comment.vue")),
    archiveActive: defineAsyncComponent(() =>
      import("@/views/archive/components/archiveActive.vue")
    ),
  },
  data() {
    return {
      dialog: {
        more: false,
        survey: false,
        comment: false,
        active: false,
        share: false,
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
    // 날짜를 원하는 형식으로 변환하는 computed property
    dateExp() {
      const date = new Date(this.archive.dateExpiration);

      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = String(date.getFullYear()).slice(2);

      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "pm" : "am";

      const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
      const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

      return `${year}.${month}.${day} - ${formattedTime}`;
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
    handleDialogMore() {
      this.dialog.more = !this.dialog.more; // 현재 상태를 반전시킴
      // this.$emit("confirmDelete");
    },
    handlePreview() {
      const id = this.archive.id; // Get the ID from the props
      const url = this.$router.resolve({
        name: "formView",
        params: { id: id },
      }).href;
      window.open(url, "_blank"); // Open the route in a new tab
    },
    handleDelete() {
      this.dialog.more = !this.dialog.more; // 현재 상태를 반전시킴
      this.$emit("confirmDelete");
    },
    handlePayment() {
      if (!this.archive.pay) {
        this.dialog.active = true;
      }
    },
    handleEdit() {
      const id = this.id; // Get the ID from the props
      this.$router.push({ name: "edit", params: { id: id } }); // Navigate to the 'view' route with the ID parameter
    },
  },
};
</script>
