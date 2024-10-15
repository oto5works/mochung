<!-- selectorBank.vue -->
<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle class="pa_modal" title="은행 선택" />
    <formField class="pa_modal" label="은행 검색" v-model="searchQuery">
      <buttonDefault variant="tonal" height="24" :icon="true"
        ><icon class="icon_14"><search /></icon
      ></buttonDefault>
    </formField>

    <div
      style="grid-template-columns: 1fr 1fr"
      class="display_grid width_100 pa_modal gap_8"
    >
      <buttonDefault
        variant="text"
        height="36"
        v-for="(option, i) in hostBankOptions"
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
      <titleArticle class="pa_modal" title="직접 입력" />

      <formField class="pa_modal" label="은행 이름" v-model="newBankTitle" />
      <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="updateBankSelf"
          ><span>Conddwdwfirm</span></buttonDefault
        >
      </div>
    </dialogModal>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import search from "@/components/icon/search";
import compBank from "@/services/compBank.js";

export default {
  components: {
    search,
    ...compBank,
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
    ...mapGetters({
      hostBankOptions: "getHostBankOptions",
    }),
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
      this.$emit("update:newBank", this.newBankTitle);
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
