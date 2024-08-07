<template>
  <formBox icon="textAa" title="폰트 설정" @click="dialog = true">
    <p>{{ selectedFontFamily }}</p>
    <fontDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    fontDialog: defineAsyncComponent(() =>
      import("@/modules/font/fontDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      fontFamily: "getFontFamily",
      fontFamilyOptions: "getFontFamilyOptions",
    }),
    selectedFontFamily() {
      const fontFamily = this.fontFamilyOptions.find(
        (option) => option.value === this.fontFamily
      );
      return fontFamily.title ? fontFamily.title : "옵션 없음";
    },
  },
};
</script>
