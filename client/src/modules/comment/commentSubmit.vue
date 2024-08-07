<template>
  <appDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    :config="config"
    title="제출하기"
  >
    <article>
      <div class="flex gap_12">

        <textField
          class="flex_1"
          :rules="[required]"
          label="작성자"
          v-model="writer"
        />
        <textField
          class="flex_1"
          :rules="[required, characterRules]"
          label="비밀번호"
          v-model="password"
          hint="비밀번호는 숫자 4자리여야 합니다."
          :type="showPassword ? 'text' : 'password'"
        >
          <button class="button-input" @click="showPassword = !showPassword">
            <icon v-if="showPassword"><eye /></icon>
            <icon v-if="!showPassword"><eyeClosed /></icon>
          </button>
        </textField>
      </div>
<div class="textarea">
  <textarea
        type="text"
        :rules="[required]"
        label="내용"
        v-model="content"
      />
</div>
      

    </article>

    <div class="dialog-actions">
      <button
        class="button-select height_36 pa_24"
        variant="text"
        @click="updateDialog(false)"
      >
        <span>취소</span>
      </button>
      <button
        class="button-select selected height_36 pa_24"
        variant="text"
        @click="saveValue"
        :disabled="!isValid"
      >
        <span>확인</span>
      </button>
    </div>
  </appDialog>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import paperPlane from "@/components/icon/paperPlane.vue";
import eye from "@/components/icon/eye.vue";
import eyeClosed from "@/components/icon/eyeClosed.vue";

export default {
  components: { paperPlane, eye, eyeClosed },
  props: {
    dialog: { type: Boolean },
    config: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      writer: null,
      password: null,
      content: null,
      form: false,
      showPassword: false,
      isValid: false,
    };
  },
  methods: {
    ...mapActions(["handleSaveAction"]),
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
        const data = {
          post_id: id,
          writer: this.writer,
          password: this.password,
          content: this.content,
        };

        // 새로운 액션을 사용하여 저장 로직 처리
        await this.handleSaveAction(data);

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
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  opacity: .12;
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
