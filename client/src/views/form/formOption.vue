<template>
  <div class="formOption">
    <titlePage
      title="FIELDS OF EXPRESSION"
      content="간편한 템플릿을 활용하거나 자유롭게 디자인하여, 손쉽게 당신만의 스타일로 맞춤형 모바일 청첩장을 만들어보세요!"
    />
    <div class="flicking">
      <Flicking
        ref="flicking"
        class="flicking-item"
        :options="{ moveType: 'snap', bound: true, align: 'prev' }"
        :plugins="plugins"
        @changed="onSlideChanged"
      >
        <cardSelect
          class="cardSelect"
          v-for="(option, index) in formOptions"
          :key="option.value"
          :value="option.value"
          :title="option.title"
          :options="option.options"
          :class="{ selected: selectedIndex === index }"
          @click="handleFormOption(option.value)"
        >
          <component :is="option.value" />
        </cardSelect>

        <template #viewport>
          <span class="flicking-arrow-prev"></span>
          <span class="flicking-arrow-next"></span>
          <div class="flicking-pagination"></div>
        </template>
      </Flicking>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";

import form1 from "@/components/svg/form1.vue";
import form2 from "@/components/svg/form2.vue";
import cardSelect from "@/components/cardView/cardSelect.vue";

export default {
  components: {
    Flicking,
    form1,
    form2,
    cardSelect,
  },
  data() {
    return {
      selectedIndex: 0, // 활성화된 슬라이드의 인덱스
      plugins: [new Arrow(), new Pagination({ type: "bullet" })],
    };
  },
  computed: {
    ...mapGetters({
      formOptions: "getFormOptions",
    }),
  },
  methods: {
    ...mapActions(["updateFormOption"]),
    handleFormOption(option) {
      this.updateFormOption(option);
    },
    onSlideChanged(e) {
      this.selectedIndex = e.index;
    },
  },
};
</script>

<style scoped>
.cardSelect {
  width: 36vh;
  margin-right: 16px;
}

.cardSelect.selected {
  border: 2px solid var(--mio-theme-color-primary); /* 선택된 슬라이드를 강조 */
}

.formOption {
  color: var(--mio-theme-color-on-background);
  margin-top: var(--mio-theme-editor-spacing-top);
}
</style>
