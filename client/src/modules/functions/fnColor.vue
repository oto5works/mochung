<template>
  <bubbleDialog :dialog="dialog" @update:dialog="updateDialog">
    <!-- Prev button -->
    <button class="--primary-color" @click="prevButtonClick">
      <icon><caretLeft /></icon>
    </button>
    <!-- Flicking Color -->
    <Flicking
      ref="flicking"
      class="flicking-color"
      :options="{ moveType: 'freeScroll', bound: true }"
      :plugins="plugins"
    >
      <div class="item-color__wrap">
        <div class="item-color umbrella">
          <input class="opacity_0" @input="updateSelected" type="color" />
        </div>
      </div>
      <div
        class="item-color__wrap"
        v-for="(item, index) in options"
        :key="index"
        @click="selectColor(item)"
        :class="{ selected: item.value === color }"
      >
        <div class="item-color">
          <template v-if="isArray(item.value)">
            <!-- 배열인 경우 -->
            <span
              v-for="(color, colorIndex) in item.value"
              :key="colorIndex"
              :style="{ backgroundColor: color }"
            ></span>
          </template>
          <template v-else>
            <!-- 문자열인 경우 -->
            <span :style="{ backgroundColor: item.value }"></span>
          </template>
        </div>
      </div>
      <template #viewport>
        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
        <div class="flicking-pagination"></div>
      </template>
    </Flicking>
    <!-- Next button -->
    <button class="--primary-color" @click="nextButtonClick">
      <icon><caretRight /></icon>
    </button>
  </bubbleDialog>
</template>

<script>
import "@/modules/functions/fnColor.scss";

import bubbleDialog from "@/components/overlay/bubbleDialog.vue";
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import caretLeft from "@/components/icon/caretLeft.vue";
import caretRight from "@/components/icon/caretRight.vue";

export default {
  components: { bubbleDialog, Flicking, caretLeft, caretRight },
  data() {
    return {
      plugins: [new Pagination({ type: "bullet" })],
    };
  },
  props: {
    dialog: { type: Boolean },
    color: { type: [String, Array], default: "#A8D8EA" },
    selected: { type: String },
    options: { type: Array },
  },
  mounted() {
    this.selectedIndex(this.color);
  },
  methods: {
    isArray(value) {
      return Array.isArray(value);
    },
    generateGradient(colors) {
      return colors.slice(0, 4); // Return first 4 colors
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    selectColor(option) {
      this.$emit("update:color", option.value);
      this.selectedIndex(option.value);
    },
    updateSelected(event) {
      this.$emit("update:color", event.target.value);
    },
    async selectedIndex(item) {
      try {
        // 선택한 인덱스로 이동합니다.
        const selectedIndex = this.options.findIndex(
          (option) => option.value === item
        );

        if (selectedIndex !== -1) {
          // Flicking의 moveTo 메서드를 사용하고 프라미스를 처리합니다.
          await this.$refs.flicking.moveTo(selectedIndex);
        } else {
          console.error("Selected index not found. 값이 없습니다.");
          // You can customize this message or take appropriate action.
        }
      } catch (error) {
        if (
          error instanceof FlickingError &&
          error.code === FlickingError.CODE.ANIMATION_INTERRUPTED
        ) {
          // 애니메이션이 사용자 입력에 의해 중단된 경우 여기서 처리합니다.
          console.error("Animation interrupted by user input");
        } else {
          // 다른 예외 처리
          console.error("An error occurred:", error);
        }
      }
    },

    prevButtonClick() {
      this.$el.querySelector(".flicking-arrow-prev").click();
    },
    nextButtonClick() {
      this.$el.querySelector(".flicking-arrow-next").click();
    },
  },
};
</script>
