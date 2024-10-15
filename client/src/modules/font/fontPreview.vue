<template>
  <div class="fontPreview">
    <div class="title">{{ selectedFontFamily }}</div>
    <div class="sp_12" />
    <div class="content">
      다람쥐 헌 쳇바퀴에 타고파<br />The quick brown fox jumps over the lazy dog
    </div>
    <div class="sp_24" />
    <div class="display_flex justify-content_center">
      <div class="fontAlign">
        <buttonDefault
          variant="text"
          height="32"
          :icon="true"
          :class="{ selected: customData.align === 'left' }"
          @click="customData.align = 'left'"
          ><icon class="icon_16"><left /></icon
        ></buttonDefault>
       
        <buttonDefault
          variant="text"
          height="32"
          :icon="true"
          :class="{ selected: customData.align === 'center' }"
          @click="customData.align = 'center'"
          ><icon class="icon_16"><center /></icon
        ></buttonDefault>

        <buttonDefault
          variant="text"
          height="32"
          :icon="true"
          :class="{ selected: customData.align === 'right' }"
          @click="customData.align = 'right'"
          ><icon class="icon_16"><right /></icon
        ></buttonDefault>

      
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
  gap: 8px;
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
.fontPreview {
  background-color: rgb(var(--background-color));
  padding: 24px;
}
.title {
  font-family: var(--font-family);
  font-size: var(--font-size_24);
  font-weight: var(--font-weight_700);
  text-align: var(--text-align);
}
.content {
  font-family: var(--font-family);
  font-size: var(--font-size_13);
  font-weight: var(--font-weight_400);
  text-align: var(--text-align);
}
</style>
