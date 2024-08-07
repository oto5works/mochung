<template>
  <formBox icon="bank" title="계좌 설정" @click="handleClickEvent">
    <div class="edit-item__content">
      <v-switch
        style="pointer-events: none"
        v-model="depositData.fnDeposit"
        hide-details
        inset
      ></v-switch>
    </div>
    <bankDialog
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
