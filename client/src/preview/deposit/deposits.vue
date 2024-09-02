<template>
  <div class="deposits" :class="design">
    <div
      class="deposits-item"
      v-for="(option, index) in depositData"
      :key="index"
      :class="{ selected: isOpenArray[index] }"
    >
      <button
        class="deposits-button"
        @click="toggleFold(index)"
        :class="{ selected: isOpenArray[index] }"
      >
        <span class="--font-size_13 font-weight_700"
          >{{ option.title }} Bank Accounts</span
        >
        <icon class="icon_16"
          ><component :is="isOpenArray[index] ? 'minus' : 'plus'"
        /></icon>
        <div v-if="design === 'design3'" class="deposits-line" />
      </button>

      <div :class="['deposits-panels', { 'is-open': isOpenArray[index] }]">
        <deposit
          v-for="(item, itemIndex) in option.account"
          :key="itemIndex"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

import plus from "@/components/icon/plus.vue";
import minus from "@/components/icon/minus.vue";
import "@/preview/deposit/deposit.scss";

export default {
  components: {
    plus,
    minus,
    deposit: defineAsyncComponent(() =>
      import("@/preview/deposit/deposit.vue")
    ),
  },
  data() {
    return {
      isOpenArray: [], // 각 항목의 열림/닫힘 상태를 담는 배열
    };
  },
  computed: {
    ...mapGetters({
      depositData: "getPreviewDepositData",
      design: "getDesign",
    }),
  },
  watch: {
    depositData: {
      immediate: true,
      handler(newValue) {
        // isOpenArray를 fnFold 값에 따라 초기화
        this.isOpenArray = newValue.map((option) => option.fnFold);
      },
    },
  },
  methods: {
    toggleFold(index) {
      this.isOpenArray[index] = !this.isOpenArray[index];
      console.log("Toggle index:", index, "isOpen:", this.isOpenArray[index]);
    },
  },
};
</script>

<style scoped>
.deposits-panels {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  opacity: 0;
}

.deposits-panels.is-open {
  max-height: 1000px; /* 콘텐츠를 모두 담을 수 있을 만큼 큰 값 */
  opacity: 1;
}
</style>
