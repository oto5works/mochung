<template>
  <formBox icon="textAa" title="폰트 선택" @click="dialog = true">
    <p>
      {{ selectedOption }}
    </p>
    <fontFamilyDialog
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
    fontFamilyDialog: defineAsyncComponent(() =>
      import("@/modules/font/fontFamilyDialog.vue")
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
    selectedOption() {
      const selectedOption = this.fontFamilyOptions.find(
        (option) => option.value === this.fontFamily
      );
      return selectedOption ? selectedOption.title : this.fontFamily;
    },
  },
};
</script>
