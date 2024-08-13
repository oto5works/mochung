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
      :options="{ moveType: 'snap', bound: true, align: 'prev' }"
      :plugins="plugins"
    >
      <buttonFlicking
        class=" fnOption-item"
        v-for="(item, index) in filteredTempOptions"
        :key="index"
        :font1="item.title"
        :font2="item.info"
        :src="item.src"
      >
        <div
          class="fnOption-image"
          :style="{
            backgroundImage: `url('https://jwpggit.github.io/storage/image/moInv/${item.value}.webp')`,
          }"
        ></div>
        <div @click="selectOption(item)" class="fnOption-select"></div>
      </buttonFlicking>

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


export default {
  components: { Flicking, caretLeft, caretRight, arrowUpRight },
  computed: {
    ...mapGetters({
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
    this.reloadFlicking();
  },
  methods: {
    reloadFlicking() {
      this.renderFlicking = false;
      this.$nextTick(() => {
        this.renderFlicking = true;
      });
    },
    selectOption(option) {
      
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
  width: 160px;
  margin-right: 18px;
}
.fnOption-image {
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 8;
  background-position: center;
  background-size: cover;
  z-index: 4;
}

</style>
