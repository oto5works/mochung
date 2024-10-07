<template>
  <div class="deposit">
    <div class="deposit-list">
      <span class="title">BANK</span>
      <div class="content">
        <icon class="icon_18"><component :is="item.bank.value" /></icon>
        <div>
          {{
            item.bank.value === "bankSelf" ? item.bank.title : item.bank.title
          }}
        </div>
      </div>
    </div>

    <div class="deposit-list">
      <span class="title">ACCOUNT</span>
      <span
        class="content letter-spacing_8 cursor_pointer"
        :class="{ 'opacity_20': !item.number, 'text-decoration_underline': item.number }"
        @click="copyAccountNumber(item.number)"
      >
        {{ item.number || "0000000000000" }}
      </span>
    </div>

    <div class="deposit-list">
      <span class="title">DEPOSITOR</span>
      <span class="content">{{ item.name }}</span>
    </div>

    <div v-if="item.files.url" class="deposit-list">
      <span class="title">KAKAO PAY</span>
      <button class="kakaopay" @click="dialog = true">
        <icon><kakaopay /></icon>
      </button>
    </div>

    <fileViewer
      :image="item.files"
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import "@/preview/deposit/deposit.scss";
import compBank from "@/services/compBank.js";

export default {
  components: {
    fileViewer: defineAsyncComponent(() =>
      import("@/components/file/fileViewer.vue")
    ),
    kakaopay: defineAsyncComponent(() => import("@/components/icon/kakaopay")),
    ...compBank
  },
  props: {
    item: { type: Object },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
  copyAccountNumber(accountNumber) {
    if (!accountNumber) {
      alert('복사할 계좌번호가 없습니다.');
      return;
    }

    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        alert(`계좌번호 ${accountNumber}이(가) 복사되었습니다.`);
      })
      .catch((err) => {
        alert(`계좌번호를 복사할 수 없습니다. ${err}`);
      });
  },
},

};
</script>
<style scoped>
.kakaopay {
  height: 28px;
  padding: 0 14px;
  background-color: #FFEB00;
  border-radius: 14px;
}
</style>