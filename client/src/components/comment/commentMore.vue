<template>
  <dialogBottom :dialog="dialog" title="더보기" @update:dialog="updateDialog">
    <listItem icon="pencil" label="수정" @click="handleEdit" />
    <listItem icon="trash" label="삭제" @click="handleDelete" />
    <!-- 비밀번호 검증 -->
    <dialogModal :dialog="commentVerify" v-if="commentVerify" @update:dialog="updateDialog">
      <p>댓글을 수정하거나 삭제하려면 청첩장 작성자로 로그인해주세요.</p>
      {{ comment }}
      <formField
        :rules="[required, characterRules]"
        label="비밀번호"
        v-model="password"
        hint="비밀번호는 숫자 4자리여야 합니다."
      />

      <div class="dialog-actions">
        <buttonDefault
          class="width_100"
          variant="filled"
          height="46"
          @click="handleConfirm"
          :disabled="!isValid"
        >
          <span>확인</span>
        </buttonDefault>
      </div>
    </dialogModal>

    <commentForm
      v-if="commentForm"
      :dialog="commentForm"
      :id="comment._id"
      @update:dialog="commentForm = $event"
      @confirm="handleConfirm"
    />
  </dialogBottom>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    commentForm: defineAsyncComponent(() =>
      import("@/components/comment/commentForm.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
    comment: { type: Object },
  },
  data() {
    return {
      commentVerify: false,
      commentForm: false,
      mode: "", // Mode will either be 'edit' or 'delete'
      password: "",
      isValid: false,
    };
  },
  methods: {
    ...mapActions(["handleDeleteAction"]),
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
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
    handleDelete() {
      this.mode = "delete";
      this.commentVerify = true; // Open the password verification dialog
    },
    async handleConfirm() {
      const id = this.$route.params.id;
      const data = {
        id: this.comment._id,
        password: this.password,
      };

      try {
        if (this.mode === "delete") {
          await this.handleDeleteAction(data);
        } else if (this.mode === "edit") {
          await this.handleEditAction(data);
        }
        this.dialog = false; // Close the dialog after successful operation
        this.commentVerify = false; // Close the password dialog
      } catch (error) {
        window.alert(error.response.data.message);
      }
    },
    async confirm() {
      if (this.mode === "delete") {
        const confirmed = window.confirm("정말로 이 댓글을 삭제하시겠습니까?");
        if (!confirmed) return;

        const id = this.$route.params.id;
        const data = {
          id: this.comment.id,
          post_id: id,
          password: this.password,
        };

        try {
          await this.handleDeleteAction(data);
          this.$emit("update:dialog", false); // Close the dialog after successful operation
          this.commentVerify = false; // Close the password dialog
        } catch (error) {
          window.alert(error.response.data.message);
        }
      }
    },
  },
};
</script>
