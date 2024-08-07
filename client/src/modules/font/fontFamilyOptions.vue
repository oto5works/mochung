<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in fontFamilyOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === customData.fontFamily }"
      :font3="item.title"
    >
      <div class="fnOption-image">
        <div class="fnOption-component" :style="{ fontFamily: item.value }">
          <h1>오늘의 날씨</h1>
          <div class="sp_4"/>
          <p>
            두 사람의 앞날에 행복과 축복이 가득하길 기원합니다.
          </p>
        </div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";

export default {
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      fontFamilyOptions: "getFontFamilyOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.customData.fontFamily = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption-image {
  width: 100%;
  overflow: hidden;
}
.fnOption-component {
  text-align: left;
}

.fnOption-component h1 {
  font-weight: 700;
  font-size: 18px;
}
.fnOption-component p {
  font-weight: 400;
  font-size: 13px;
  
}
</style>
