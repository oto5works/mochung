<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle class="pa_24" title="Wedding Date" />

<form class="pa_24">
  writerId = {{ writerId }}<br>
  userId = {{ userId }}
    <!-- Conditionally render the writer and password fields -->
    <div v-if="!isWriter" class="display_flex gap_24">
      <formField :rules="[required]" label="writer" v-model="writer" :spacing="true" />
      <formField
        :rules="[required, characterRules]"
        label="password"
        type="password"
        v-model="password"
        hint="비밀번호는 숫자 4자리여야 합니다."
        :spacing="true"
      />
    </div>
      <formArea
        :rules="[required]"
        label="방명록을 입력해 주세요."
        v-model="content"
        :spacing="true"
      />
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="saveValue"
        :disabled="!isValid"
      >
        <span>Confirm</span>
      </buttonDefault>
    </form>
  </dialogModal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formArea from "@/components/formField/formArea.vue";

export default {
  components: {formArea},
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      writer: null,
      password: null,
      content: null,
      form: false,
      isValid: false,
    };
  },
  computed: {
    ...mapGetters({
      commentData: "getCommentData",
      writerId: "getWriterId",
      userId: "getUserId",
    }),
    isWriter() {
     
      return this.userId === this.writerId;
    },
  },
  mounted() {
    // 로그를 통해 userId와 writer의 값을 확인
    console.log('Mounted Hook:');
    console.log('userId:', this.userId);
    console.log('writerId:', this.writerId);
    console.log('isWriter:', this.isWriter);
    console.log(typeof this.userId); // 문자열 확인
console.log(typeof this.writerId); // 문자열 확인
console.log(this.userId === this.writerId); // 비교 결과 확인
  },
  methods: {
    ...mapActions(["submitCommentAction"]),
    required(v) {
      const isValid = !!v;
      this.isValid = isValid;
      return isValid || "이 항목은 필수입니다.";
    },
    characterRules(v) {
      const isValid = /^\d{4}$/.test(v);
      this.isValid = isValid;
      return isValid || "비밀번호는 숫자 4자리여야 합니다.";
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    async saveValue() {
      try {
        const id = this.$route.params.id;

        // 데이터 객체 생성
        const data = {
          post_id: id,
          content: this.content,
          writer: this.writer,
          password: this.password,
          isWriter: this.isWriter, // 글쓴이 여부 추가
        };

        // 새로운 액션을 사용하여 저장 로직 처리
        await this.submitCommentAction(data);

        // 폼 필드 초기화 및 다이얼로그 닫기
        this.writer = null;
        this.password = null;
        this.content = null;
        this.$emit("update:dialog", false);
      } catch (error) {
        console.error("폼 데이터 저장 중 에러 발생:", error);
        throw error;
      }
    },
  },
};
</script>

<style scoped>
.textarea {
  position: relative;
  width: 100%;
  height: fit-content;
  border-radius: var(--border-radius-12);
  outline-width: 1px;
  outline-style: var(--border-style);
  outline-color: var(--primary-color);
}
.textarea::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: 0.12;
  border-radius: var(--border-radius-12);
}
.textarea textarea {
  position: relative;
  resize: none;
  width: 100%;
  height: 120px;
  color: var(--font-color);
  padding: 12px;
}
</style>
