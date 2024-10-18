<template>
  <div class="dropdown" @click="toggleDialog" :class="{ selected: dialog }">
    <!-- 1번 선택된 항목을 표시하는 슬롯 -->
    <slot name="selected"></slot>

    <!-- 2번 드롭다운 리스트를 표시하는 부분 -->
    <div class="items" v-if="dialog" v-click-outside="handleClickOutside">
      <slot name="items"></slot>
    </div>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
const { bind, unbind } = vClickOutside.directive;
import "@/components/dropdown/dropdown.scss";

export default {
  components: {},
  directives: {
    clickOutside: {
      mounted(el, binding) {
        bind(el, { value: binding.value });
      },
      beforeUnmount(el) {
        unbind(el);
      },
    },
  },
  data() {
    return {
      dialog: false, // 드롭다운 열림/닫힘 상태
    };
  },
  methods: {
    toggleDialog() {
      this.dialog = !this.dialog; // 드롭다운 열고 닫기
    },
    handleClickOutside() {
      this.dialog = false; // 외부 클릭 시 드롭다운 닫기
    },
  },
};
</script>
