<template>
  <button class="card formOptionCard">
    
    <div class="formOptionCard-content">
      <div class="title-wrap">
        <span class="title" v-html="title"></span>
        <button class="formOptionCard-arrow">
          <icon class="icon_28"><arrowRight3 /></icon>
        </button>
      </div>
      <div class="list-wrap">
      <button
        v-for="(option, index) in visibleOptions"
        :key="index"
        class="gap_8 list-item"
      >
        <icon class="icon_16"><check /></icon><span class="opacity_70">{{ option }}</span>
      </button>
      <button
        v-if="options.length > 4"
        @click="handleMoreClick"
        class="gap_8 list-item"
      >
        <icon style="transform: rotate(90deg)" class="icon_16"><dots /></icon>
        <span class="text-decoration_underline">MORE</span>
      </button>
    </div>
  </div>


    <div class="image">
      <slot></slot>
    </div>
    <div class="underlay" />
  </button>
</template>
<script>
import check from "@/components/icon/check";
import dots from "@/components/icon/dots.vue";
import arrowRight3 from "@/components/icon/arrowRight3.vue";

export default {
  components: {
    check,
    dots,arrowRight3
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    visibleOptions() {
      return this.options.slice(0, 3);
    },
  },
  methods: {
    handleMoreClick() {
      // 이 함수에 "..." 버튼을 눌렀을 때 실행될 로직을 추가하세요.
      console.log("More options clicked");
    },
  },
};
</script>
<style scoped></style>
