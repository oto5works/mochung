<template>
  <div class="position_relative">
    <formBox
      :disabled="effect.shape === 'sakura'"
      icon="background"
      title="배경색상 설정"
      @click="dialog = true"
    >
      <div class="flex align-items_center gap_8">
        <div class="item-color">
          <span
            v-for="(item, index) in colorArray"
            :key="index"
            :style="{ backgroundColor: item }"
          ></span>
        </div>
        <div class="--primary-color --font-weight --font-size_14">
          {{ selectedColor }}
        </div>
      </div>
    </formBox>
    <fnColor
      v-if="dialog"
      :options="effectColorOptions"
      :color="effect.color"
      @update:color="effect.color = $event"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    fnColor: defineAsyncComponent(() =>
      import("@/modules/functions/fnColor.vue")
    ),
  },
  props: {
    effect: { type: Object },
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      effectColorOptions: "getEffectColorOptions",
    }),
    selectedColor() {
      const selectedColorOption = this.effectColorOptions.find((option) =>
        option.value.every((color) => this.effect.color.includes(color))
      );
      return selectedColorOption
        ? selectedColorOption.title
        : this.effect.color;
    },
  },
  watch: {
    "effect.color": {
      immediate: true, // 컴포넌트가 생성될 때도 즉시 감지하도록 설정
      handler(newValue) {
        this.updateColorArray(newValue);
      },
    },
  },
  methods: {
    updateColorArray(value) {
      if (typeof value === "string") {
        // 문자열인 경우 배열로 변환하여 저장
        this.colorArray = [value];
      } else if (Array.isArray(value)) {
        // 배열인 경우 그대로 저장
        this.colorArray = value;
      } else {
        // 다른 형태인 경우 빈 배열로 설정
        this.colorArray = [];
      }
    },
  },
};
</script>
