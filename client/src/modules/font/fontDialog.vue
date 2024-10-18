<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle title="폰트 설정" />
    </div>

    <div class="font-menu pa_modal">


 <!-- 폰트 색상 -->
 <dropdown>
        <template #selected>
          <buttonDefault variant="text" height="32" :icon="true">
            <div
              class="colorChip"
              :style="{ 'background-color': customData.fontColor }"
            ></div>
          </buttonDefault>
        </template>

        <template #items>
          <div class="fontAlign">
            <selectorColor
              v-model="this.customData.fontColor"
              :options="fontColorOptions"
            ></selectorColor>
          </div>
        </template>
      </dropdown>
      <!-- 폰트 색상 -->

      <!-- 폰트 정렬 -->
      <dropdown>
        <template #selected>
          <buttonDefault variant="text" height="32" :icon="true">
            <icon class="icon_16"
              ><component :is="this.customData.fontAlign"
            /></icon>
          </buttonDefault>
        </template>

        <template #items>
          <div class="fontAlign">
            <buttonDefault
              variant="text"
              height="32"
              :icon="true"
              :class="{ selected: customData.fontAlign === item.value }"
              v-for="(item, index) in fontAlignOptions"
              :key="index"
              @click="selectFontAlignOptions(item.value)"
            >
              <icon class="icon_16"><component :is="item.value" /></icon>
            </buttonDefault>
          </div>
        </template>
      </dropdown>

      <!-- 폰트정렬 -->







      <!-- 폰트 설정 -->

      <dropdown>
        <template #selected>
          <dropdownButton>
            {{ selectedFontFamily || "항목을 선택하세요" }}
          </dropdownButton>
        </template>

        <template #items>
          <li
            v-for="(item, index) in fontFamilyOptions"
            :key="index"
            @click="selectFontFamilyOptions(item.value)"
            :class="item.value"
          >
            {{ item.title }}
          </li>
        </template>
      </dropdown>
      <!-- 폰트 설정 -->

      <!-- 폰트 굵기 -->

      <dropdown>
        <template #selected>
          <dropdownButton>
            {{ selectedFontWeight || "항목을 선택하세요" }}
          </dropdownButton>
        </template>

        <template #items>
          <li
            v-for="(item, index) in fontWeightOptions"
            :key="index"
            @click="selectFontWeightOptions(item.value)"
            :class="item.value"
          >
            {{ item.title }}
          </li>
        </template>
      </dropdown>
      <!-- 폰트 굵기 -->

      <!-- 폰트 사이즈 -->
      <dropdown>
        <template #selected>
          <dropdownButton>
            {{ selectedFontSize || "항목을 선택하세요" }}
          </dropdownButton>
        </template>

        <template #items>
          <li
            v-for="(item, index) in fontSizeOptions"
            :key="index"
            @click="selectFontSizeOptions(item.value)"
            :class="'font-size-' + item.value"
          >
            {{ item.title }}
          </li>
        </template>
      </dropdown>
      <!-- 폰트 사이즈 -->
     
    </div>

    <div class="pa_modal">
      <fontPreview />
    </div>

    <fontFamilyBox />
    <fontColor />
    <fontSize />
    <fontWeight />

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import dropdown from "@/components/dropdown/dropdown.vue";
import dropdownButton from "@/components/dropdown/dropdownButton.vue";
import selectorColor from "@/components/selector/selectorColor.vue";

import fontPreview from "@/modules/font/fontPreview.vue";
import left from "@/components/icon/textAlignLeft.vue";
import center from "@/components/icon/textAlignCenter.vue";
import right from "@/components/icon/textAlignRight.vue";

import fontFamilyBox from "@/modules/font/fontFamilyBox.vue";
import fontColor from "@/modules/color/fontColor.vue";
import fontSize from "@/modules/font/fontSize.vue";
import fontWeight from "@/modules/font/fontWeight.vue";

export default {
  components: {
    dropdown,
    dropdownButton,
    selectorColor,
    fontPreview,
    left,
    center,
    right,

    fontFamilyBox,
    fontColor,
    fontSize,
    fontWeight,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      fontFamilyOptions: "getFontFamilyOptions",
      fontWeightOptions: "getFontWeightOptions",
      fontSizeOptions: "getFontSizeOptions",
      fontAlignOptions: "getFontAlignOptions",
      fontColorOptions: "getFontColorOptions",
    }),
    selectedFontFamily() {
      const selectedOption = this.fontFamilyOptions.find(
        (option) => option.value === this.customData.fontFamily
      );
      return selectedOption ? selectedOption.title : this.customData.fontFamily;
    },
    selectedFontWeight() {
      const selectedOption = this.fontWeightOptions.find(
        (option) => option.value === this.customData.fontWeight
      );
      return selectedOption ? selectedOption.title : this.customData.fontWeight;
    },
    selectedFontSize() {
      const selectedOption = this.fontSizeOptions.find(
        (option) => option.value === this.customData.fontSize
      );
      return selectedOption ? selectedOption.title : this.customData.fontSize;
    },
  },
  methods: {
    selectFontFamilyOptions(value) {
      this.customData.fontFamily = value;
    },
    selectFontWeightOptions(value) {
      this.customData.fontWeight = value;
    },
    selectFontSizeOptions(value) {
      this.customData.fontSize = value;
    },
    selectFontAlignOptions(value) {
      this.customData.fontAlign = value;
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>

<style scoped>
.pretendard {
  font-family: "pretendard";
}
.notoserif {
  font-family: "notoserif";
}
.gmarketsans {
  font-family: "gmarketsans";
}
.light {
  font-weight: 300;
}
.medium {
  font-weight: 500;
}
.bold {
  font-weight: 700;
}
.font-size-1 {
  font-size: 11px;
}
.font-size-2 {
  font-size: 13px;
}
.font-size-3 {
  font-size: 14px;
}
.font-menu {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
}
.fontAlign {
  display: flex;
  gap: 4px;
}
.colorChip {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: conic-gradient(
    from 90deg,
    violet,
    indigo,
    blue,
    green,
    yellow,
    orange,
    red,
    violet
  );
  border: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
