<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <!-- wedding Location Title -->
      <fnTitle v-if="formOption === 'form1'" option="depositData" />
      <!-- wedding Location Title -->
    </article>

    <article>
      <v-tabs class="tab-defaulted" v-model="tab">
        <v-tab
          v-for="(item, index) in hostData.info"
          :key="index"
          :value="index"
        >
          <span>{{ item.host.title }} 측 계좌</span>
        </v-tab>
      </v-tabs>

      <div class="z-index_1" v-if="tab !== ''">
        <div
          v-for="(option, index) in hostData.info"
          :key="index"
          v-show="tab === index"
        >
          <div v-if="formOption === 'form1'">
            <formBox icon="bank" title="계좌 열어두기" @click="toggleSwitch">
              <div class="edit-item__content">
                <v-switch
                  style="pointer-events: none"
                  v-model="hostData.info[index].bank.fnFold"
                  hide-details
                  inset
                ></v-switch>
              </div>
            </formBox>
            <div class="sp_12" />
          </div>
          <bankComponent
            :hostTitle="option.host.title"
            :bank="option.bank"
            @update:bank="option.bank = $event"
            @handleDelete="handleDelete"
          />
        </div>
      </div>
    </article>

    <article>
      <buttonDefault
        class="width_100 height_64 gap_18 --border-radius_24"
        @click="handleAdd()"
      >
        <icon><plus /></icon><span>계좌 추가</span>
      </buttonDefault>
    </article>

     <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="saveValue">
        <span>확인</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

import bankComponent from "@/modules/bank/bankComponent.vue";
import plus from "@/components/icon/plus";

export default {
  components: {
    bankComponent,
    plus,
    fnTitle: defineAsyncComponent(() =>
      import("@/modules/functions/fnTitle.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data: function () {
    return {
      tab: "",
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
    saveValue() {
      this.depositData.fnDeposit = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>
