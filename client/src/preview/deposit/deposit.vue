<template>
  <div class="position_relative --border-radius_24 --pa_4-4-0">
    <div class="sp_12" />
    <!-- 은행 예금주 -->
    <div class="flex align-items_center justify-content_space-between pa_6">
      <div class="flex align-items_center gap_8 flex_1">
        <icon><component :is="item.bank.value" /></icon>
        <div
          v-if="item.bank.value !== 'bankSelf'"
          class="--font-size_14 --font-weight line-height_100 word-break_break-all"
        >
          {{ item.bank.title }}
        </div>
        <div
          v-if="item.bank.value === 'bankSelf'"
          class="--font-size_14 --font-weight line-height_100 word-break_break-all"
        >
          {{ item.bank.self }}
        </div>
      </div>
      <div>
        예금주 : {{ item.name }}
      </div>
    </div>
    <!-- 은행 예금주 -->
    <!-- 계좌번호 -->
    <div
      @click="copyAccountNumber(item.number)"
    >
      <div>
        {{ item.number }}<span class="opacity_40" v-if="!item.number">0000000000000</span>
      </div>
      <button class="--primary-color z-index_2">
        <icon class="icon_18"><copy /></icon>
      </button>
    </div>
    <!-- 계좌번호 -->

    <!-- 카카오페이 -->
    <div
      class="flex_center flex-direction_column width_100"
      v-if="item.files.url"
    >
      <div class="sp_16" />
      <button class="kakaopay" @click="dialog = true">
        <icon><kakaopay /></icon>
      </button>
    </div>
    <!-- 카카오페이 -->
    <div class="sp_16" />
    <div class="absolute_100 overlay_pc --display_block-none-none" />
    <div
      class="absolute_100 outline_pc box-shadow_4-pc --display_block-none-none"
    />
    <div class="h-hr --display_none-block-block" />

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
import copy from "@/components/icon/copy.vue";

export default {
  components: {
    copy,
    fileViewer: defineAsyncComponent(() =>
      import("@/components/file/fileViewer.vue")
    ),
    kakaopay: defineAsyncComponent(() => import("@/components/icon/kakaopay")),
    bankKb: defineAsyncComponent(() => import("@/components/icon/bankKb")),
    bankIbk: defineAsyncComponent(() => import("@/components/icon/bankIbk")),
    bankNh: defineAsyncComponent(() => import("@/components/icon/bankNh")),
    bankShinhan: defineAsyncComponent(() =>
      import("@/components/icon/bankShinhan")
    ),
    bankKdb: defineAsyncComponent(() => import("@/components/icon/bankKdb")),
    bankWoori: defineAsyncComponent(() =>
      import("@/components/icon/bankWoori")
    ),
    bankCiti: defineAsyncComponent(() => import("@/components/icon/bankCiti")),
    bankKeb: defineAsyncComponent(() => import("@/components/icon/bankKeb")),
    bankSc: defineAsyncComponent(() => import("@/components/icon/bankSc")),
    bankBnk: defineAsyncComponent(() => import("@/components/icon/bankBnk")),
    bankJb: defineAsyncComponent(() => import("@/components/icon/bankJb")),
    bankDgb: defineAsyncComponent(() => import("@/components/icon/bankDgb")),
    bankDb: defineAsyncComponent(() => import("@/components/icon/bankDb")),
    bankBac: defineAsyncComponent(() => import("@/components/icon/bankBac")),
    bankSj: defineAsyncComponent(() => import("@/components/icon/bankSj")),
    bankSb: defineAsyncComponent(() => import("@/components/icon/bankSb")),
    bankMg: defineAsyncComponent(() => import("@/components/icon/bankMg")),
    bankSh: defineAsyncComponent(() => import("@/components/icon/bankSh")),
    bankCu: defineAsyncComponent(() => import("@/components/icon/bankCu")),
    bankPost: defineAsyncComponent(() => import("@/components/icon/bankPost")),
    bankKakao: defineAsyncComponent(() =>
      import("@/components/icon/bankKakao")
    ),
    bankKbank: defineAsyncComponent(() =>
      import("@/components/icon/bankKbank")
    ),
    bankToss: defineAsyncComponent(() => import("@/components/icon/bankToss")),
    bankSelf: defineAsyncComponent(() => import("@/components/icon/bankSelf")),
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