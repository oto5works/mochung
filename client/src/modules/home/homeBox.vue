<template>
  <cardView icon="home" title="메인화면 스타일" @click="handleClickEvent">
    <span>{{ selectedOption }}</span>
    <homeDialog
      v-if="dialog"
      :dialog="dialog"
      @closeDialog="handleClose"
      @confirmDialog="handleConfirm"
    />
  </cardView>
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
      initialStyle: null, // homeData.style의 초기 상태를 저장할 변수
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
      this.initialStyle = this.homeData.style; // 다이얼로그를 열 때 현재 스타일을 저장
      this.dialog = true;
      this.handleScrollToAction("previewHome");
    },
    handleClose() {
      this.homeData.style = this.initialStyle; // 다이얼로그를 닫을 때 저장해둔 스타일로 복원
      this.dialog = false;
    },
    handleConfirm() {
      // Confirm 버튼 클릭 시 실행할 로직
      console.log("Confirm 버튼이 클릭되었습니다.");
      this.dialog = false;
    },
  },
};
</script>
