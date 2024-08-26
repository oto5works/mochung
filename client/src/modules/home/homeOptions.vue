<template>
  <div class="fnOption">


    <div class="fnOption-item" v-for="(item, index) in homeStyleOptions"
    :key="index">
      <div
        class="fnOption-image"
        @click="selectOption(item)"
        :class="{ selected: item.value === homeData.style }"
        :style="{
          backgroundImage: `url('https://www.moyo-studio.com/wp-content/uploads/2023/05/product4v8FINAL2WM.jpg')`,
        }"
      ></div>
      <!-- https://jwpggit.github.io/storage/image/moInv/${item.value}.webp -->
      
      <div class="display_flex flex-direction_column gap_16">
        <div class="display_flex align-items_center gap_4" @click="selectOption(item)">
          <icon v-if="item.value === homeData.style" class="icon_12 color_--mio-theme-color-primary"><check/></icon>
          <div class="font-size_14 font-weight_700">{{ item.title }}</div>
        </div>
        <buttonDefault variant="tonal" height="18" class="width_fit-content" :class="{ selected: item.value === homeData.style }"
        ><span>Preview</span><icon class="icon_12"><arrowUpRight/></icon></buttonDefault
      >
      </div>
  </div>

  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeStyleOptions: "getHomeStyleOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.homeData.style = option.value;
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
