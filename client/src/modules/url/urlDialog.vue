<!-- checkUrl.vue -->
<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="초대장 id 설정"
        content="초대장 id를 이용해서 주소로 사용할수 있습니다."
      ></formTitle2>

      <urlPreview :url="url" :isValid="isValid" />
    </article>
      <article>
      <textField
        :rules="[required, characterRules, checkDuplicate]"
        ref="urlInput"
        type="text"
        :variant="input"
        label="초대장 id"
        v-model="url"
        hint="id는 4자 이상 10자 이하의 영문자 또는 숫자만 가능합니다."
      >
        <button v-if="isValid" class="button-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="24"
              stroke-dashoffset="24"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.13"
              d="M5 11L11 17L21 7"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.4s"
                values="24;0"
              />
            </path>
          </svg>
        </button>
      </textField>
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault :disabled="!isValid" @click="saveValue">
        <span>저장</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";
import { urlDuplicate } from "@/services/posts";
import urlPreview from "@/modules/url/urlPreview.vue";

export default {
  components: { urlPreview },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      url: "",
      isValid: false,
    };
  },
  computed: {
    ...mapGetters({
      urlData: "getUrlData",
    }),
  },
  created() {
    this.url = this.urlData.url;
  },
  methods: {
    required(v) {
      const isValid = !!v;
      this.isValid = isValid; // 규칙에 통과하지 못하면 버튼을 비활성화
      return isValid || "이 항목은 필수입니다.";
    },
    characterRules(v) {
      const isValid = /^[a-zA-Z0-9]{4,10}$/.test(v);
      this.isValid = isValid; // 규칙에 통과하지 못하면 버튼을 비활성화
      return isValid || "4자 이상 10자 이하의 영문자 또는 숫자만 가능합니다.";
    },

    async checkDuplicate(val) {
      try {
        const res = await urlDuplicate(val);
        if (res == "false") {
          this.isValid = false;
          return "중복된 아이디가 존재합니다.";
        }
        return true; // Input is valid
      } catch (error) {
        console.error(error);
        this.isValid = false;
        return "중복 확인 중 오류가 발생했습니다.";
      }
    },
    saveValue() {
      this.urlData.url = this.url;
      this.urlData.fnUrl = true;
      this.$emit("update:dialog", false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
<style scoped>
.v-list-subheader__text {
  overflow: visible;
}
</style>
