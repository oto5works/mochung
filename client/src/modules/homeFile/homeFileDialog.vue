<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_modal">
      <homeFileSwitch />
      <enableView
        class="selected"
        v-if="!homeData.fnFile"
        title="기능 이용 대기 중"
        content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요."
      />
    </div>
    <div v-if="homeData.fnFile" class="pa_modal">
      <div class="form-spacing" />
      <div class="display_flex flex-direction_column gap_8">
        <homeFile />
        <cardView icon="crop" title="이미지 위치 및 크기 조정" content="메인화면에서 이미지의 위치와 크기를 설정하세요." @click="gridstack = true">
          <gridstack
            v-if="gridstack"
            :dialog="gridstack"
            @update:dialog="gridstack = $event"
          />
        </cardView>
      
      </div>
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import selectorTitle from "@/components/selector/selectorTitle.vue";
import enableView from "@/components/enable/enableView.vue";
import homeFileSwitch from "@/modules/homeFile/homeFileSwitch.vue";
import homeFile from "@/modules/homeFile/homeFile.vue";

export default {
  components: {
    selectorTitle,
    enableView,
    homeFileSwitch,
    homeFile,
    gridstack: defineAsyncComponent(() =>
      import("@/modules/gridstack/gridstack.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      gridstack: false,
      fileViewer: false,
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
  },
  methods: {
    handleDelete(index) {
      this.hostData.info[this.tab].bank.account.splice(index, 1);
    },
    handleAdd() {
      const newBankAccount = {
        bank: { value: "bankKb", title: "국민은행" },
        number: "",
        name: "",
        files: {
          file: null,
          fileUrl: null,
        },
      };
      this.hostData.info[this.tab].bank.account.push(newBankAccount);
    },
    toggleSwitch() {
      this.hostData.info[this.tab].bank.fnFold =
        !this.hostData.info[this.tab].bank.fnFold;
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>

<style scoped>
.flex {
  flex-direction: column;
}
</style>
