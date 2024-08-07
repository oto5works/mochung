<template>
  <div>
    <v-tabs class="tab-defaulted" v-model="tab">
      <v-tab v-for="(option, index) in options" :key="index" :value="index">
        <span>{{ option.title }}</span>
        <button class="button-tapdelete" @click="deleteTab(index)">
          <icon><x /></icon>
        </button>
      </v-tab>
    </v-tabs>

    <div v-if="tab !== ''">
      <div
        v-for="(option, index) in options"
        :key="index"
        v-show="tab === index"
      >
        <tiptap v-model="option.content" />
      </div>
    </div>
    <div class="sp_24"/>
    <buttonDefault
      class="height_64 width_100 gap_12 --border-radius_24"
      @click="openDialog"
    >
      <icon class="icon_16"><plus /></icon><span>추가</span>
    </buttonDefault>
    <!-- 다이얼로그 추가 -->
    <modalDialog
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="updateDialog"
      title="항목 추가"
      :config="true"
    >
      <article>
        <textField label="제목" v-model="newTabTitle" />
      </article>
      <div class="dialog-actions">
        <buttonSelect @click="closeDialog">
          <span>취소</span>
        </buttonSelect>
        <buttonDefault @click="confirmNewTab">
          <span>확인</span>
        </buttonDefault>
      </div>
    </modalDialog>
  </div>
</template>

<script>
import plus from "@/components/icon/plus";
import tiptap from "@/modules/functions/tiptap.vue";

export default {
  components: {
    plus,
    tiptap,
  },
  props: {
    options: { type: Array },
  },
  data() {
    return {
      tab: "",
      dialogVisible: false,
      newTabTitle: "",
    };
  },
  methods: {
    addTab() {
      const newOption = { title: "", content: "" };
      this.options.push(newOption);
      this.tab = this.options.length - 1;
    },
    deleteTab(index) {
      this.options.splice(index, 1);
      if (this.tab === `tpt${index + 1}`) {
        this.tab = `tpt${index}`;
      }
    },
    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
      this.newTabTitle = "";
    },
    confirmNewTab() {
      const newOption = { title: this.newTabTitle, content: "" };
      this.options.push(newOption);
      this.tab = this.options.length - 1;
      this.closeDialog();
    },
    updateDialog(value) {
      this.dialogVisible = value;
    },
  },
};
</script>

<style scoped>
.button-tapdelete {
  display: none;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  color: var(--primary-color);
  background-color: var(--primary-on);
  border: 1px solid var(--primary-color);
  border-radius: var(--border-radius-16);
  z-index: 1;
}
.button-tapdelete svg {
  width: 12px;
  height: 12px;
}
.v-slide-group-item--active .button-tapdelete {
  display: flex;
}
</style>
