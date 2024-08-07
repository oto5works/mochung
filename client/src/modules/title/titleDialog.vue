<!-- checkUrl.vue -->
<template>
  <modalDialog
    title="제목"
    :dialog="dialog"
    @update:dialog="updateDialog"
    :config="true"
  >
    <article>
      <formTitle2
        title="초대장 id 설정"
        content="초대장 id를 이용해서 주소로 사용할수 있습니다."
      />
      <textField
        type="text"
        :variant="input"
        label="카드 제목"
        v-model="title"
      >
      </textField>
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="openSaveDialog">
        <span>저장</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  components: {},
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({
      functionData: "getFunctionData",
    }),
  },
  created() {
    this.title = this.functionData.fnTitle;
  },
  methods: {

    saveValue() {
      this.functionData.fnTitle = this.title;
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    openSaveDialog() {
      this.functionData.fnTitle = this.title;
      // 저장 버튼을 누를 때 saveDialog 다이어로그를 보여주는 이벤트를 발생시킵니다.
      this.$emit('open-save-dialog');
    }
  },
};
</script>
