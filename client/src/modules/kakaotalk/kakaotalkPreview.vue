<template>
  <div class="kakaotalk-preview__wrap">
    <div class="flex width_100 gap_12">
      <div class="kakaotalk-preview__thumb">
        <icon><user /></icon>
      </div>
      <div class="kakaotalk-preview__content">
        <div class="position_relative z-index_2">
          <div
            class="kakaotalk-preview__image"
            :style="{
              backgroundImage: 'url(' + kakaotalkData.files.url + ')',
            }"
          >
            <div class="flex_center absolute_100 overlay_skeleton">
              <icon class="opacity_40"><images /></icon>
            </div>
          </div>
          <div class="sp_12" />
          <div class="font-size_14">{{ kakaotalkData.title }}</div>
          <div class="font-size_12 opacity_60">
            {{ kakaotalkData.content }}
          </div>
          <div v-if="kakaotalkData.fnLike || kakaotalkData.fnComment">
            <div class="sp_12" />
            <div class="flex gap_12 opacity_60">
              <div
                v-if="kakaotalkData.fnLike"
                class="flex align-items_center gap_4"
              >
                <icon class="icon_18"><heart /></icon>
                <div class="font-size_12">0</div>
              </div>
              <div
                v-if="kakaotalkData.fnComment"
                class="flex align-items_center gap_4"
              >
                <icon class="icon_18"><chat /></icon>
                <div class="font-size_12">0</div>
              </div>
            </div>
          </div>

          <div class="sp_12" />

          <button
            class="button-defaulted width_100 height_40 --border-radius_12"
          >
            <span>{{ kakaotalkData.shareButton }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="sp_24" />
    <div class="flex width_100 justify-content_flex-end">
      <div class="kakaotalk-preview__kakaotalk">
        <div class="font-size_14">카카오톡 초대장을 직접 바꿔보세요</div>
      </div>
    </div>
    <div class="absolute_100 overlay_pc" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import heart from "@/components/icon/heart";
import chat from "@/components/icon/chat";
import images from "@/components/icon/images";
import user from "@/components/icon/user";

export default {
  components: {
    heart,
    chat,
    images,
    user,
  },
  computed: {
    ...mapGetters({
      kakaotalkData: "getKakaotalkData",
    }),
  },
};
</script>

<style scoped>
.kakaotalk-preview__wrap {
  position: relative;
  width: 100%;
  height: auto;
  padding: 24px 16px;
  border-radius: var(--border-radius-24);
}
.kakaotalk-preview__thumb {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-16);
  background-color: var(--primary-color);
  color: var(--primary-on);
}
.kakaotalk-preview__content {
  position: relative;
  display: block;
  width: 60%;
  height: auto;
  border-radius: 0 var(--border-radius-16) var(--border-radius-16)
    var(--border-radius-16);
  overflow: hidden;
  padding: 8px;
  color: var(--font-color);
}
.kakaotalk-preview__content::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
}
.kakaotalk-preview__image {
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: var(--border-radius-12);
}
.kakaotalk-preview__kakaotalk {
  background-color: var(--primary-color);
  color: var(--primary-on);
  padding: 12px;
  border-radius: var(--border-radius-16) 0 var(--border-radius-16)
    var(--border-radius-16);
}
</style>
