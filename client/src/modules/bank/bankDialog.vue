<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_modal">
      <bankSwitch />
      <enableView
        class="selected"
        v-if="!depositData.fnDeposit"
        title="기능 이용 대기 중"
        content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요."
      />
    </div>
    <div v-if="depositData.fnDeposit" class="pa_modal">
      <div class="sp_8"></div>
      <selectorTitle option="depositData" />
      <div class="form-spacing" />
      <titleArticle
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <tabs v-model="tab">
        <tabThumb
          v-for="(item, index) in hostData.info"
          :key="index"
          :value="index"
          :title="item.host.title"
          @click="handleClickEvent"

        >
        </tabThumb>
      </tabs>

      <div
        v-for="(option, index) in hostData.info"
        :key="index"
        v-show="tab === index"
      >
        <bankComponent
          :hostTitle="option.host.title"
          :bank="option.bank"
          @update:bank="option.bank = $event"
          @handleDelete="handleDelete"
        />
        <div class="display_flex gap_12">
          <buttonDefault variant="filled" height="36" @click="handleAdd()"
            ><icon><plus /></icon><span>계좌 추가</span></buttonDefault
          >
          <buttonDefault variant="tonal" height="36" @click="toggleSwitch"
            ><checkbox
              v-model="hostData.info[index].bank.fnFold"
              :clickEvent="false"
            /><span>계좌 열어두기</span></buttonDefault
          >
        </div>
      </div>
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";
import selectorTitle from "@/components/selector/selectorTitle.vue";
import enableView from "@/components/enable/enableView.vue";

import bankSwitch from "@/modules/bank/bankSwitch.vue";
import bankComponent from "@/modules/bank/bankComponent.vue";
import plus from "@/components/icon/plus";
import tabs from "@/components/tab/tabs.vue";
import tabThumb from "@/components/tab/tabThumb.vue";

export default {
  components: {
    selectorTitle,
    enableView,
    bankSwitch,
    tabs,
    tabThumb,
    bankComponent,
    plus,
    fnTitle: defineAsyncComponent(() =>
      import("@/modules/functions/fnTitle.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      tab: 0,
    };
  },
  computed: {
    ...mapGetters({
      hostData: "getHostData",
      depositData: "getDepositData",
      formOption: "getFormOption",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.handleScrollToAction("previewDeposit");
    },
    handleDelete(index) {
      this.hostData.info[this.tab].bank.account.splice(index, 1);
    },
    handleAdd() {
      const newBankAccount = {
        bank: { value: "bankKb", title: "국민은행" },
        number: "",
        name: "",
        files: {
          file: null,
          fileUrl: null,
        },
      };
      this.hostData.info[this.tab].bank.account.push(newBankAccount);
    },
    toggleSwitch() {
      this.hostData.info[this.tab].bank.fnFold =
        !this.hostData.info[this.tab].bank.fnFold;
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>

<style scoped>
.flex {
  flex-direction: column;
}
</style>
