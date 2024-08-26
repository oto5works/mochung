<template>
  <cardView
    icon="bank"
    title="계좌 설정"
    content="Use this to set the title for the section where guests can send"
    @click="handleClickEvent"
  >
    <toggleSwitch
      v-model="depositData.fnDeposit"
      :clickEvent="false"
    ></toggleSwitch>
    <bankDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    bankDialog: defineAsyncComponent(() =>
      import("@/modules/bank/bankDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      depositData: "getDepositData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      if (this.depositData.fnDeposit === false) {
        this.dialog = true;
      } else {
        this.depositData.fnDeposit = false;
      }
      this.handleScrollToAction("previewDeposit");
    },
  },
};
</script>
