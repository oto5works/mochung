<template>
  <div
    class="position_relative flex flex-direction_column gap_8 width_100 --border-radius_24"
  >
    <div
      class="position_relative last-child_h-hr_display_none --pa_4-4-0 --border-radius_24"
      v-for="(item, index) in bank.account"
      :key="index"
      :value="index"
    >
      <div class="sp_16" />
      <div class="flex align-items_center gap_18">
        <div class="font-size_14 --font-weight">
          {{ hostTitle }} 측 계좌 {{ index + 1 }}
        </div>
        <button @click="handleDelete(index)">
          <icon class="icon_16"><x /></icon>
        </button>
      </div>
      <div class="sp_16" />

      <div class="flex gap_12">
        <!-- 은행 선택 -->
        <buttonSelect
          class="selected flex_1 height_40 pa_20 --border-radius_20"
          @click="bankSwitch(index)"
        >
        <div class="flex justify-content_space-between width_100">
          <span class="flex gap_4">
            <icon><component :is="item.bank.value" /></icon>
            <span>{{ item.bank.title }}</span>
          </span>
          <icon><caretDown /></icon>
        </div>
          
        </buttonSelect>

        <!-- 은행 선택 -->

        <!-- 예금주 -->
        <textField label="예금주" v-model="item.name" />
        <!-- 예금주 -->
      </div>

      <!-- 계좌 번호 -->
      <textField label="계좌 번호" v-model="item.number" />
      <!-- 계좌 번호 -->

      <div class="flex_center flex-direction_column width_100">
        <buttonSelect
          class="kakaopay"
          :class="{ selected: item.files.url }"
          @click="kakaopaySwitch(index)"
        >
          <icon class="icon_16" v-if="!item.files.url"><kakaopay /></icon>
          <aniCheck class="icon_16" v-else />
          <span>카카오페이 등록<span v-if="item.files.url"> 완료</span></span>
        </buttonSelect>
      </div>
      <!-- 카카오페이 -->
      <div class="sp_16" />

      <fileUploader
        v-if="dialog.kakaopay[index]"
        :dialog="dialog.kakaopay[index]"
        @update:dialog="dialog.kakaopay[index] = $event"
        title="카카오페이 업로드"
        :acceptedTypes="['image/*']"
        :maxFileSize="1024 * 1024 * 10"
        :files="item.files"
        @update:files="updateFiles($event, index)"
      >
        <li v-if="!item.files.url" @click="guideSwitch(index)">
          <div class="title">
            <icon><question /></icon><span>카카오페이 설정방법</span>
          </div>
        </li>
        <kakaopayGuide
          v-if="dialog.guide[index]"
          :dialog="dialog.guide[index]"
          @update:dialog="dialog.guide[index] = $event"
        />
      </fileUploader>

      <bankOptions
        v-if="dialog.hostBank[index]"
        optionTitle="은행 선택"
        :options="hostBankOptions"
        :selected="item.bank"
        @update:selected="updateBank($event, index)"
        :dialog="dialog.hostBank[index]"
        @update:dialog="dialog.hostBank[index] = $event"
      />

      <div class="absolute_100 overlay_pc --display_block-none-none" />
      <div
        class="absolute_100 outline_pc box-shadow_3-pc --display_block-none-none"
      />
      <div
        v-if="index !== bank.account.length - 1"
        class="h-hr --display_none-block-block"
      />
    </div>

    <div class="absolute_100 overlay_pc --display_none-block-none" />
    <div
      class="absolute_100 outline_pc box-shadow_3-pc --display_none-block-none"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import aniCheck from "@/components/icon/aniCheck";


export default {
  components: {
    aniCheck,
    bankOptions: defineAsyncComponent(() =>
      import("@/modules/bank/bankOptions.vue")
    ),
    fileUploader: defineAsyncComponent(() =>
      import("@/modules/file/fileUploader.vue")
    ),
    kakaopayGuide: defineAsyncComponent(() =>
      import("@/modules/bank/kakaopayGuide.vue")
    ),
    question: defineAsyncComponent(() => import("@/components/icon/question")),
    caretDown: defineAsyncComponent(() =>
      import("@/components/icon/caretDown")
    ),
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
    bankSelf: defineAsyncComponent(() => import("@/components/icon/bank")),
    kakaopay: defineAsyncComponent(() => import("@/components/icon/kakaopay")),
  },
  props: {
    hostTitle: { type: String },
    bank: { type: Object, Array },
  },
  data() {
    // 초기에 각 가족 항목에 대한 다이얼로그 상태를 false로 초기화합니다.
    const dialogBank = this.bank.account.map(() => false);
    const dialogKakaopay = this.bank.account.map(() => false);
    const dialogGuide = this.bank.account.map(() => false);

    return {
      dialog: {
        hostBank: dialogBank,
        kakaopay: dialogKakaopay,
        guide: dialogGuide,
      },
    };
  },
  computed: {
    ...mapGetters({
      hostBankOptions: "getHostBankOptions",
    }),
  },
  methods: {
    handleDelete(index) {
      // Emit an event with the index to be deleted
      this.$emit("handleDelete", index);
    },
    bankSwitch(index) {
      this.dialog.hostBank[index] = true;
    },
    updateBank(value, index) {
      this.bank.account[index].bank = value;
    },
    kakaopaySwitch(index) {
      this.dialog.kakaopay[index] = true;
    },
    guideSwitch(index) {
      this.dialog.kakaopay[index] = true;
    },
    updateFiles(value, index) {
      this.bank.account[index].files = value;
    },
  },
};
</script>

<style scoped>
.kakaopay {
  max-width: 100%;
    padding: 4px 8px;
    border-radius: var(--border-radius-12);
    min-height: unset;
}
</style>
