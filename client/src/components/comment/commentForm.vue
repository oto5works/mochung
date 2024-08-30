<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <titleArticle class="pa_24" title="Wedding Date" />

    <form class="pa_24" @submit.prevent="saveValue">
      <div v-if="!isWriter" class="display_flex gap_24">
        <formField label="writer" v-model="writer" :spacing="true" />
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
        label="방명록을 입력해 주세요."
        v-model="content"
        :spacing="true"
      />
      <buttonDefault class="width_100" variant="filled" height="46">
        <span>Confirm</span>
      </buttonDefault>
    </form>
  </dialogModal>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import formArea from "@/components/formField/formArea.vue";

export default {
  components: { formArea },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      writer: null,
      password: null,
      content: null,
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
  methods: {
    ...mapActions(["submitCommentAction"]),
    required(value) {
      return !!value || "이 항목은 필수입니다.";
    },
    characterRules(value) {
      return /^\d{4}$/.test(value) || "비밀번호는 숫자 4자리여야 합니다.";
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    async saveValue() {
      try {
        // 비밀번호 검증이 필요한 경우에만 검사 수행
        if (!this.isWriter) {
          const passwordError = this.characterRules(this.password);
          if (passwordError !== true) {
            // 비밀번호 검증 실패 시 알림 띄우기
            window.alert(passwordError);
            return;
          }
        }

        const id = this.$route.params.id;

        // 데이터 객체 생성
        const data = {
          post_id: id,
          content: this.content,
          writer: this.writer,
          password: this.password,
          isWriter: this.isWriter,
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
