<template>
  <formBox icon="home" title="메인화면 스타일" @click="handleClickEvent">
    <p>{{ selectedOption }}</p>
    <homeDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    homeDialog: defineAsyncComponent(() =>
      import("@/modules/home/homeDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeStyleOptions: "getHomeStyleOptions",
    }),
    selectedOption() {
      const selectedOption = this.homeStyleOptions.find(
        (option) => option.value === this.homeData.style
      );
      return selectedOption ? selectedOption.title : this.homeData.style;
    },
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>
