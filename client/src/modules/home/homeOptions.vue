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
      ></div>

      <div class="display_flex align-items_flex-start flex-direction_column gap_16">
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
          <div class="font-size_14 font-weight_700">{{ item.title }}</div>
        </div>
        <buttonDefault
          variant="tonal"
          height="18"
          class="width_fit-content"
          :class="{ selected: item.value === homeData.style }"
        >
          <span>Preview</span>
          <icon class="icon_12"><arrowUpRight /></icon>
        </buttonDefault>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeStyleOptions: "getHomeStyleOptions",
    }),
    imageBaseUrl() {
      // 환경 변수를 사용하여 이미지 기본 URL 반환
      return import.meta.env.VITE_IMAGE_BASE_URL || 'https://default.url/';
    },
  },
  methods: {
    selectOption(option) {
      this.homeData.style = option.value;
      this.homeData.item = option.item;

      //this.$emit("update:dialog", false);
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
  gap: 24px;
  cursor: pointer;
  padding-bottom: 24px;
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
</style>
