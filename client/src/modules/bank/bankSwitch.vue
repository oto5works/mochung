<template>
  <cardView
    icon="bank"
    title="계좌 설정"
    @click="handleClickEvent"
  >
    <toggleSwitch
      v-model="depositData.fnDeposit"
      :clickEvent="false"
    ></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      depositData: "getDepositData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.depositData.fnDeposit = !this.depositData.fnDeposit;
      this.handleScrollToAction("previewDeposit");
    },
  },
};
</script>
