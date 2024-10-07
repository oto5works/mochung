<!-- bankComponent.vue -->

<template>
  <div
    class="position_relative display_flex flex-direction_column gap_24 width_100"
  >
    <div
      class="position_relative"
      v-for="(item, index) in bank.account"
      :key="index"
      :value="index"
    >
      <titleSection :title="`${hostTitle} 측 계좌 ${index + 1}`">
        <buttonDefault
          variant="tonal"
          height="18"
          :icon="true"
          @click="handleDelete(index)"
          ><icon class="icon_12"><x /></icon
        ></buttonDefault>
      </titleSection>

      <formField v-model="item.number" label="계좌 번호">
        <buttonDefault variant="tonal" height="24" @click="bankSwitch(index)"
          ><icon class="icon_14"><component :is="item.bank.value" /></icon
          ><span>{{ item.bank.title }}</span
          ><icon class="icon_14"><dropdown /></icon
        ></buttonDefault>
      </formField>

      <div class="display_flex gap_24">
        <formField label="예금주" v-model="item.name" />
        <div class="display_flex align-items_center gap_4">
          <checkbox
            :clickEvent="false"
            v-model="item.files.url"
            @click="kakaopaySwitch(index)"
            label="카카오페이 등록"
          >
          </checkbox>
          <buttonDefault
            variant="filled"
            height="18"
            :icon="true"
            @click="this.dialog.guide = true"
            ><icon class="icon_12"><question /></icon
          ></buttonDefault>
        </div>
      </div>

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
      </fileUploader>
      <selectorBank
        v-if="dialog.hostBank[index]"
        :selected="item.bank"
        @update:selected="updateBank($event, index)"
        :dialog="dialog.hostBank[index]"
        @update:dialog="dialog.hostBank[index] = $event"
        @update:newBank="updateBankSelf($event, index)"
      />
    </div>
    <bankKakaopayGuide
      v-if="dialog.guide"
      :dialog="dialog.guide"
      @update:dialog="dialog.guide = $event"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import dropdown from "@/components/icon/dropdown";
import question from "@/components/icon/question";
import compBank from "@/services/compBank.js";

export default {
  components: {
    dropdown,
    question,
    selectorBank: defineAsyncComponent(() =>
      import("@/components/selector/selectorBank.vue")
    ),
    fileUploader: defineAsyncComponent(() =>
      import("@/components/file/fileUploader.vue")
    ),

    bankKakaopayGuide: defineAsyncComponent(() =>
      import("@/modules/bank/bankKakaopayGuide.vue")
    ),
    kakaopay: defineAsyncComponent(() => import("@/components/icon/kakaopay")),
    ...compBank,
  },
  props: {
    hostTitle: { type: String },
    bank: { type: Object, Array },
  },
  data() {
    // 초기에 각 가족 항목에 대한 다이얼로그 상태를 false로 초기화합니다.
    const dialogBank = this.bank.account.map(() => false);
    const dialogKakaopay = this.bank.account.map(() => false);

    return {
      dialog: {
        hostBank: dialogBank,
        kakaopay: dialogKakaopay,
        guide: false,
      },
    };
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
    updateFiles(value, index) {
      this.bank.account[index].files = value;
    },
    updateBankSelf(newBankTitle, index) {
      console.log ('moraemasita:', newBankTitle)
      this.bank.account[index].bank = {
        value: "bankSelf",
        title: newBankTitle,
      };
    },
  },
};
</script>
