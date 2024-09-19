<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_24">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_24">
      <homeFileSwitch />
      <enableView
        class="selected"
        v-if="!homeData.fnFile"
        title="기능 이용 대기 중"
        content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요."
      />
    </div>
    <div v-if="homeData.fnFile" class="pa_24">
      <div class="sp_8"></div>
      <homeFile />
     

      
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
    homeFile
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
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
