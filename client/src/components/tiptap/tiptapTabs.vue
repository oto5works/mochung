<template>
  <div>
    <buttonGroup
      :options="options"
      v-model="tab"
      :enableDelete="true"
      @deleteTab="handleDeleteTab"
    />
    <div v-if="tab !== ''">
      <div
        v-for="(option, index) in options"
        :key="index"
        v-show="tab === index"
      >
        <tiptap v-model="option.content" v-if="showTiptap">
          <buttonDefault variant="filled" height="36" @click="openDialog"
            ><icon class="icon_16"><plus /></icon><span>항목 추가</span>
          </buttonDefault>
        </tiptap>
      </div>
    </div>

    <!-- 다이얼로그 추가 -->
    <dialogModal
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="updateDialog"
    >
      <titleArticle class="pa_24" title="Address Search" />
      <formField class="pa_24" label="제목" v-model="newTabTitle" />
      <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="confirmNewTab"
          ><span>Confirm</span></buttonDefault
        >
      </div>
    </dialogModal>
  </div>
</template>

<script>
import plus from "@/components/icon/plus";
import tiptap from "@/components/tiptap/tiptap.vue";
import buttonGroup from "@/components/button/buttonGroup.vue";

export default {
  components: {
    plus,
    tiptap,
    buttonGroup,
  },
  props: {
    options: { type: Array },
  },
  data() {
    return {
      tab: 0,
      dialogVisible: false,
      newTabTitle: "",
      showTiptap: true,
    };
  },
  methods: {
    addTab() {
      const newOption = { title: "", content: "" };
      this.options.push(newOption);
      this.tab = this.options.length - 1;
    },
    handleDeleteTab(index) {
      console.log('handleDeleteTab')
      this.options.splice(index, 1);
      if (this.tab === `tpt${index + 1}`) {
        this.tab = `tpt${index}`;
        
      }
      this.reloadTiptap();  // 함수 호출
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
    reloadTiptap() {
      console.log('reload')
      // 컴포넌트를 제거한 후 새로 추가하기 위해 showTiptap를 false로 설정
      this.showTiptap = false;
      this.$nextTick(() => {
        // 다음 틱에서 컴포넌트를 다시 렌더링
        this.showTiptap = true;
      });
    },
  },
};
</script>