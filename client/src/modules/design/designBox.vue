<template>
  <formBox icon="design" title="디자인 스타일" @click="dialog = true">
    <p>{{ selectedOption }}</p>
    <designDialog
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
    designDialog: defineAsyncComponent(() =>
      import("@/modules/design/designDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      design: "getDesign",
      designStyleOptions: "getDesignStyleOptions",
    }),
    selectedOption() {
      const selectedOption = this.designStyleOptions.find(
        (option) => option.value === this.design
      );
      return selectedOption ? selectedOption.title : this.design;
    },
  },
};
</script>
