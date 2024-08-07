<template>
  <formBox icon="backgroundFilter" title="배경 필터" @click="dialog = true">
    <p>{{ selectedOption }}</p>
    <backgroundFilterDialog
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
    backgroundFilterDialog: defineAsyncComponent(() =>
      import("@/modules/backgroundFilter/backgroundFilterDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      filter: "getFilter",
      backgroundFilterOptions: "getBackgroundFilterOptions",
    }),
    selectedOption() {
      const selectedOption = this.backgroundFilterOptions.find(
        (option) => option.value === this.filter
      );
      return selectedOption.title ? selectedOption.title : "옵션 없음";
    },
  },
};
</script>
