<template>
  <div class="--text-align --font-color">
    <div class="--font-size_28 --font-weight">{{ selectedFontFamily }}</div>
    <div class="--font-size_14">
      다람쥐 헌 쳇바퀴에 타고파<br />The quick brown fox jumps over the lazy dog
    </div>
    <div class="sp_24" />
    <div class="flex justify-content_center">
      <div class="fontAlign">
        <buttonSelect
        class="left"
          :class="{ selected: customData.align === 'left' }"
          @click="customData.align = 'left'"
        >
          <icon><left /></icon>
        </buttonSelect>
        <buttonSelect
        class="center"
          :class="{ selected: customData.align === 'center' }"
          @click="customData.align = 'center'"
        >
          <icon><center /></icon>
        </buttonSelect>
        <buttonSelect
        class="right"
          :class="{ selected: customData.align === 'right' }"
          @click="customData.align = 'right'"
        >
          <icon><right /></icon>
        </buttonSelect>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import left from "@/components/icon/textAlignLeft.vue";
import center from "@/components/icon/textAlignCenter.vue";
import right from "@/components/icon/textAlignRight.vue";

export default {
  components: {
    left,
    center,
    right,
  },
  computed: {
    ...mapGetters({
      fontColorOptions: "getFontColorOptions",
      customData: "getCustomData",
      fontFamilyOptions: "getFontFamilyOptions",
    }),
    selectedFontFamily() {
      const selectedFontFamily = this.fontFamilyOptions.find(
        (option) => option.value === this.customData.fontFamily
      );
      return selectedFontFamily
        ? selectedFontFamily.title
        : this.customData.fontFamily;
    },
  },
};
</script>
<style scoped>
.fontAlign {
  display: flex;
  width: 120px;
}
.fontAlign button {
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: unset;
}
.fontAlign .left {
  border-radius: var(--border-radius-24) 0 0 var(--border-radius-24);
}
.fontAlign .center {
  border-radius: 0;
}
.fontAlign .right {
  border-radius: 0 var(--border-radius-24) var(--border-radius-24) 0;
}
</style>