<template>
  <div class="formOption">
    <titlePage
      title="Create at"
      content="Our premium space puts brands in front of the world’s most influential audiences, generating more attention than any other digital platform."
    />
    <div class="formOption-content">
      <formOptionCard
        class="formOptionCard"
        v-for="option in formOptions"
        :key="option.value"
        :value="option.value"
        :title="option.title"
        :options="option.options"
        @click="handleFormOption(option.value)"
      >
        <component :is="option.value" />
      </formOptionCard>
    </div>

    <div class="flicking">
      <Flicking
        ref="flicking"
        class="flicking-item"
        :options="{ moveType: 'snap', bound: true, align: 'center' }"
        :plugins="plugins"
        @changed="onSlideChanged"
      >
        <formOptionCard
          class="formOptionCard"
          v-for="(option, index) in formOptions"
          :key="option.value"
          :value="option.value"
          :title="option.title"
          :options="option.options"
          :class="{ selected: selectedIndex === index }"
          @click="handleFormOption(option.value)"
        >
          <component :is="option.value" />
        </formOptionCard>

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
import form3 from "@/components/svg/form3.vue";

import formOptionCard from "@/views/form/formOptionCard.vue";
import "@/views/form/form.scss";

export default {
  components: {
    Flicking,
    form1,
    form2,
    form3,
    formOptionCard,
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
