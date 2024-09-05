<template>
  <button class="card cardSelect">
    <div class="image">
      <slot></slot>
    </div>
    <div class="list-wrap">
        <span class="title" v-html="title"></span>
        <button
          v-for="(option, index) in visibleOptions"
          :key="index"
          class="gap_8 list-item"
        >
          <icon class="icon_12"><check /></icon
          ><span>{{ option }}</span>
        </button>
        <button
          v-if="options.length > 4"
          @click="handleMoreClick"
          class="gap_8 list-item"
        ><icon class="icon_12"><sparkle /></icon
          >
          <span>MORE ..</span>
        </button>
      </div>
    <buttonDefault class="cardSelect-button" height="40" variant="filled">
      <span>CONFIRM</span>
    </buttonDefault>
    <div class="underlay" />
  </button>
</template>
<script>
import check from "@/components/icon/check";
import sparkle from "@/components/icon/sparkle.vue";

export default {
  components: {
    check, sparkle
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
<style scoped>

</style>
