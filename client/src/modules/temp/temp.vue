<template>
  <div class="flicking">
    <button class="flicking-prev button-defaulted" @click="prevButtonClick">
      <icon><caretLeft /></icon>
    </button>
    <button class="flicking-next button-defaulted" @click="nextButtonClick">
      <icon><caretRight /></icon>
    </button>
    <buttonGroup 
    :items="tempCategorys"  
    v-model="tab" 
    />
<!--
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
-->
    <Flicking
      v-if="renderFlicking"
      ref="flicking"
      class="flicking-item"
      :options="{ moveType: 'snap', bound: true, align: 'prev' }"
      :plugins="plugins"
    >

 
      



    <div class="fnOption-item" v-for="(item, index) in filteredTempOptions"
    :key="index">
      <div
        class="fnOption-image"
        @click="selectOption(item)"
        :class="{ selected: item.value === customData.temp }"
        :style="{
          backgroundImage: `url('https://www.moyo-studio.com/wp-content/uploads/2023/05/product4v8FINAL2WM.jpg')`,
        }"
      ></div>
      <!-- https://jwpggit.github.io/storage/image/moInv/${item.value}.webp -->
      
      <div class="display_flex flex-direction_column gap_16">
        <div class="display_flex align-items_center gap_4" @click="selectOption(item)">
          <icon v-if="item.value === customData.temp" class="icon_12 color_--mio-theme-color-primary"><check/></icon>
          <div class="font-size_14 font-weight_700">{{ item.title }}</div>
        </div>
        <buttonDefault variant="tonal" height="18" :class="{ selected: item.value === customData.temp }"
        ><span>Preview</span><icon class="icon_12"><arrowUpRight/></icon></buttonDefault
      >
      </div>
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

import buttonGroup from "@/components/button/buttonGroup.vue";


export default {
  components: { Flicking, buttonGroup },
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
.fnOption-item {
  position: relative;
  width: 160px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-right: 8px;
  cursor: pointer;
}
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1.6;
  background-position: center;
  background-size: cover;
}
.fnOption-image.selected {
  border: 1px solid rgb(var(--mio-theme-color-primary));
}
</style>
