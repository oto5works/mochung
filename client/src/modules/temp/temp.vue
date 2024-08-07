<template>
  <div class="flicking">
    <button class="flicking-prev button-defaulted" @click="prevButtonClick">
      <icon><caretLeft /></icon>
    </button>
    <button class="flicking-next button-defaulted" @click="nextButtonClick">
      <icon><caretRight /></icon>
    </button>
    <v-tabs class="tab-defaulted pa_16" v-model="tab">
      <v-tab value="all">
        <span>ALL</span>
      </v-tab>
      <v-tab
        v-for="item in tempCategorys"
        :key="item.value"
        :value="item.value"
      >
        <span>{{ item.title }}</span>
      </v-tab>
    </v-tabs>

    <Flicking
      v-if="renderFlicking"
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true }"
      :plugins="plugins"
    >

    <div
    class="fnOption-item"
    v-for="(item, index) in filteredTempOptions"
        :key="index"
    >
      <buttonFlicking :class="{ selected: item.value === customData.temp }">
        <div
          class="fnOption-image"
          :style="{
            backgroundImage: `url('https://jwpggit.github.io/storage/image/moInv/${item.value}.webp')`,
          }"
        ></div>
        <div @click="selectOption(item)" class="fnOption-select"></div>

        
      </buttonFlicking>
      <div class="font-size_14">{{ item.title }}</div>
      <buttonText
          :class="{ selected: item.value === customData.temp }"
          class="more"
          @click="handleClickEvent"
        >
          <span>Preview</span><icon class="icon_16"><arrowUpRight /></icon>
        </buttonText>
    </div>
      

      

      <template #viewport>
        <span class="flicking-arrow-prev"></span>
        <span class="flicking-arrow-next"></span>
        <div class="flicking-pagination"></div>
      </template>
    </Flicking>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import caretLeft from "@/components/icon/caretLeft.vue";
import caretRight from "@/components/icon/caretRight.vue";
import arrowUpRight from "@/components/icon/arrowUpRight.vue";

import "@/modules/functions/fnOption.scss";


export default {
  components: { Flicking, caretLeft, caretRight, arrowUpRight },
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      tempCategorys: "getTempCategorys",
      tempOptions: "getTempOptions",
    }),
    filteredTempOptions() {
      const selectedCategory = this.tab;

      if (selectedCategory === "all") {
        // 'all'이 선택된 경우 모든 옵션을 반환합니다.
        return this.tempOptions;
      } else {
        return this.tempOptions.filter(
          (option) =>
            Array.isArray(option.category) &&
            option.category.includes(selectedCategory)
        );
      }
    },
  },
  data() {
    return {
      plugins: [new Arrow(), new Pagination({ type: "bullet" })],
      tab: "all",
      renderFlicking: false,
    };
  },
  watch: {
    tab() {
      this.reloadFlicking();
    },
  },
  mounted() {
    this.selectedIndex(this.customData.temp);
    this.reloadFlicking();
  },
  methods: {
    reloadFlicking() {
      this.renderFlicking = false;
      this.$nextTick(() => {
        this.renderFlicking = true;
      });
    },
    ...mapActions(["updateFormDataAction"]),
    selectOption(option) {
      const selectedTemp = this.tempOptions.find(
        (item) => item.value === option.value
      );
      const updateData = {
        customData: {
          ...this.customData,
          temp: option.value,
          styleBackground: selectedTemp.styleBackground,
          backgroundColor: selectedTemp.backgroundColor,
          gradient1: selectedTemp.gradient1,
          gradient2: selectedTemp.gradient2,
          gradient3: selectedTemp.gradient3,
          filter: selectedTemp.filter,
          design: selectedTemp.design,
          align: selectedTemp.align,
          primaryColor: selectedTemp.primaryColor,
          radius: selectedTemp.radius,
          border: selectedTemp.border,
          shadow: selectedTemp.shadow,
          fontSize: selectedTemp.fontSize,
          fontColor: selectedTemp.fontColor,
          fontFamily: selectedTemp.fontFamily,
          fontWeight: selectedTemp.fontWeight,
          stamp: selectedTemp.stamp,
        },
      };
      if (selectedTemp) {
        this.updateFormDataAction(updateData);
        this.selectedIndex(option.value);
      }
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
        console.log("selectedIndex 없음");
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

<style scoped>
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 8;
  background-position: center;
  background-size: cover;
  z-index: 4;
}

.fnOption-item .more {
  position: absolute;
  z-index: 5;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: var(--border-radius-12);
}
</style>
