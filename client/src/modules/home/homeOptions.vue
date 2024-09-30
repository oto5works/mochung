<template>
  <div class="fnOption">
    <div
      class="fnOption-item"
      v-for="(item, index) in homeStyleOptions"
      :key="index"
    >
      <div
        class="fnOption-image"
        @click="selectOption(item)"
        :class="{ selected: item.value === homeData.style }"
        :style="{
          backgroundImage: `url('${imageBaseUrl}${item.value}.webp')`,
        }"
      >
        <buttonDefault
          variant="filled"
          height="24"
          class="width_fit-content preview-button"
          :class="{ selected: item.value === homeData.style }"
          @click.stop="openPreview(index)"  
        >
          <span>미리보기</span>
          <icon class="icon_14"><arrowUpRight /></icon>
        </buttonDefault>
      </div>

      <div
        class="display_flex align-items_flex-start flex-direction_column gap_8"
      >
        <div
          class="display_flex align-items_center gap_4"
          @click="selectOption(item)"
        >
          <icon
            v-if="item.value === homeData.style"
            class="icon_12 color_--mio-theme-color-primary"
          >
            <check />
          </icon>
          <div class="font-size_14 font-weight_700 title">{{ item.title }}</div>
        </div>
        <div class="font-size_12">{{ item.hash }}</div>
      </div>
    </div>
    <homePreview
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
      :index="previewIndex"
      @update:index="previewIndex = $event"
      @applyOption="selectOption"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    homePreview: defineAsyncComponent(() =>
      import("@/modules/home/homePreview.vue")
    ),
  },
  data() {
    return {
      dialog: false,
      previewIndex: null, // 추가된 데이터 속성
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeStyleOptions: "getHomeStyleOptions",
    }),
    imageBaseUrl() {
      // 환경 변수를 사용하여 이미지 기본 URL 반환
      return import.meta.env.VITE_IMAGE_BASE_URL || "https://default.url/";
    },
  },
  methods: {
    selectOption(option) {
      this.homeData.style = option.value;
      this.homeData.item = option.item;
    },
    openPreview(index) {
      this.previewIndex = index; // 선택한 스타일 옵션 설정
      this.dialog = true; // 다이얼로그 열기
    },
  },
};
</script>

<style scoped>
.fnOption {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
}
.fnOption-item {
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  padding-bottom: 40px;
}
.fnOption-item .title {
  text-transform: capitalize;
}
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.37;
  background-position: center;
  background-size: cover;
}
.fnOption-image.selected {
  border: 1px solid rgb(var(--mio-theme-color-primary));
}
.fnOption-image .preview-button {
  position: absolute;
  top: 12px;
  right: 12px;
}
</style>
