<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle class="pa_24" title="은행 선택" />
    <formField class="pa_24" label="은행 검색" v-model="searchQuery">
      <buttonDefault variant="tonal" height="24" :icon="true"
        ><icon class="icon_14"><search /></icon
      ></buttonDefault>
    </formField>

    <div
      style="grid-template-columns: 1fr 1fr"
      class="grid width_100 pa_24 gap_8"
    >
      <buttonDefault
        variant="text"
        height="36"
        v-for="(option, i) in filteredOptions"
        :key="i"
        @click="selectOption(option)"
        :class="{ selected: selected.value === option.value }"
      >
        <icon class="icon_16"><component :is="option.value" /></icon>
        <span>{{ option.title }}</span>
      </buttonDefault>


      


      <buttonDefault
        variant="text"
        height="36"
        @click="openDialog()"
        :class="{ selected: selected.value === 'bankSelf' }"
      >
        <icon class="icon_16"><bankSelf /></icon>
        <span>직접 입력</span>
      </buttonDefault>


    </div>

    <!-- 다이얼로그 추가 -->
    <dialogModal
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="closeDialog"
    >
    <titleArticle class="pa_24" title="직접 입력" />

        <formField class="pa_24" label="은행 이름" v-model="newBankTitle" />
        <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="updateBankSelf"
          ><span>Confirm</span></buttonDefault
        >
      </div>
      
    </dialogModal>
    <!-- 다이얼로그 추가 -->
    <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="updateDialog"
          ><span>Confirm</span></buttonDefault
        >
      </div>
  </dialogModal>
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
  justify-content: flex-start;
}
</style>
