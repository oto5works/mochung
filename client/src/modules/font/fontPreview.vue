<template>
  <div class="fontPreview">
    <div class="title">{{ selectedFontFamily }}</div>
    <div class="sp_12" />
    <div class="content">
      다람쥐 헌 쳇바퀴에 타고파<br />The quick brown fox jumps over the lazy dog
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
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
.fontPreview {
  background-color: rgb(var(--background-color));
  padding: 64px;
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
