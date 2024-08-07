<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    :title="optionTitle"
    :config="true"
  >
    <article>
      <textField type="text" label="검색" v-model="searchQuery">
        <button>
          <icon><search /></icon>
        </button>
      </textField>
    </article>

    <div style="grid-template-columns: 1fr 1fr" class="grid width_100 pa_16 gap_8">
      <buttonSelect
        class="height_40 gap_4 pa_12 width_100 --border-radius_24"
        v-for="(option, i) in filteredOptions"
        :key="i"
        @click="selectOption(option)"
        :class="{ selected: selected.value === option.value }"
      >
        <icon><component :is="option.value" /></icon>
        <span class="font-size_13 text-overflow_ellipsis">{{
          option.title
        }}</span>
      </buttonSelect>
      <buttonSelect
        class="height_40 gap_4 pa_12 width_100 --border-radius_24"
        @click="openDialog()"
        :class="{ selected: selected.value === 'bankSelf' }"
      >
        <icon><bankSelf /></icon>
        <span class="font-size_13 text-overflow_ellipsis">직접 입력</span>
      </buttonSelect>
    </div>

    <!-- 다이얼로그 추가 -->
    <modalDialog
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="updateDialog"
      title="직접 입력"
      :config="true"
    >
      <article>
        <textField type="text" label="은행 이름" v-model="newBankTitle" />
      </article>
      <div class="dialog-actions">
        <button class="button-select height_36 pa_24" @click="closeDialog">
          <span>취소</span>
        </button>
        <button
          class="button-select selected height_36 pa_24"
          @click="updateBankSelf"
        >
          <span>확인</span>
        </button>
      </div>
    </modalDialog>
    <!-- 다이얼로그 추가 -->
  </modalDialog>
</template>
<script>
import search from "@/components/icon/search";
import bankKb from "@/components/icon/bankKb";
import bankIbk from "@/components/icon/bankIbk";
import bankNh from "@/components/icon/bankNh";
import bankShinhan from "@/components/icon/bankShinhan";
import bankKdb from "@/components/icon/bankKdb";
import bankWoori from "@/components/icon/bankWoori";
import bankCiti from "@/components/icon/bankCiti";
import bankKeb from "@/components/icon/bankKeb";
import bankSc from "@/components/icon/bankSc";
import bankBnk from "@/components/icon/bankBnk";
import bankJb from "@/components/icon/bankJb";
import bankDgb from "@/components/icon/bankDgb";
import bankDb from "@/components/icon/bankDb";
import bankBac from "@/components/icon/bankBac";
import bankSj from "@/components/icon/bankSj";
import bankSb from "@/components/icon/bankSb";
import bankMg from "@/components/icon/bankMg";
import bankSh from "@/components/icon/bankSh";
import bankCu from "@/components/icon/bankCu";
import bankPost from "@/components/icon/bankPost";
import bankKakao from "@/components/icon/bankKakao";
import bankKbank from "@/components/icon/bankKbank";
import bankToss from "@/components/icon/bankToss";
import bankSelf from "@/components/icon/bank";

export default {
  components: {
    search,
    bankKb,
    bankIbk,
    bankNh,
    bankShinhan,
    bankKdb,
    bankWoori,
    bankCiti,
    bankKeb,
    bankSc,
    bankBnk,
    bankJb,
    bankDgb,
    bankDb,
    bankBac,
    bankSj,
    bankSb,
    bankMg,
    bankSh,
    bankCu,
    bankPost,
    bankKakao,
    bankKbank,
    bankToss,
    bankSelf,
  },
  props: {
    dialog: { type: Boolean },
    optionTitle: { type: String },
    options: { type: Array },
    selected: { type: [Object, String, Boolean] },
  },
  data: function () {
    return {
      searchQuery: "", // Add this property for search input
      dialogVisible: false,
      newBankTitle: "",
    };
  },
  computed: {
    filteredOptions() {
      if (!this.searchQuery) {
        return this.options;
      }
      const query = this.searchQuery.toLowerCase();
      return this.options.filter((option) =>
        option.title.toLowerCase().includes(query)
      );
    },
  },
  methods: {
    selectOption(option) {
      this.$emit("update:selected", option);
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    openDialog() {
      this.selected.value = "bankSelf";
      this.dialogVisible = true;
    },
    closeDialog() {
      this.selected.value = "";
      this.selected.title = "";
      this.dialogVisible = false;
    },
    updateBankSelf() {
      this.selected.title = this.newBankTitle;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.buttonSelect {
  justify-content: flex-start
}
</style>