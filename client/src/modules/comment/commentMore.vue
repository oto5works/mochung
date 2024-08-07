<template>
  <bottomSheet
    :dialog="dialog"
    title="더보기"
    @update:dialog="updateDialog"
    :config="config"
  >
    <ul>
      <li @click="handleDelete">
        <div class="title">
          <icon><trash /></icon><span>삭제</span>
        </div>
      </li>
      <li @click="handleEdit">
        <div class="title">
          <icon><pencil /></icon><span>수정</span>
        </div>
      </li>
    </ul>

    <!-- 다이얼로그 추가 -->
    <modalDialog
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="updateDialog"
      :title="'방명록 ' + dialogTitle"
      :config="config"
    >
      <textField
        class="pa_16"
        :rules="[required, characterRules]"
        label="비밀번호"
        v-model="password"
        hint="비밀번호는 숫자 4자리여야 합니다."
        :type="showPassword ? 'text' : 'password'"
        autocomplete="new-password"
      >
        <button class="button-input" @click="showPassword = !showPassword">
          <icon v-if="showPassword"><eye /></icon>
          <icon v-if="!showPassword"><eyeClosed /></icon>
        </button>
      </textField>

      <div class="sp_16" />
      <div class="dialog-actions position_relative z-index_3">
        <button
          class="button-select height_36 pa_24"
          @click="updateInDialog(false)"
        >
          <span>취소</span>
        </button>
        <button
          v-if="status === 'delete'"
          class="button-select selected height_36 pa_24"
          :disabled="!isValid"
          @click="confirmDelete"
        >
          <span>삭제</span>
        </button>
        <button
          v-if="status === 'edit'"
          class="button-select selected height_36 pa_24"
          :disabled="!isValid"
          @click="confirmEdit"
        >
          <span>수정</span>
        </button>
      </div>
    </modalDialog>
    <!-- 다이얼로그 추가 -->
  </bottomSheet>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

import trash from "@/components/icon/trash";
import pencil from "@/components/icon/pencil";
import eye from "@/components/icon/eye.vue";
import eyeClosed from "@/components/icon/eyeClosed.vue";

export default {
  components: {
    trash,
    pencil,
    eye,
    eyeClosed,
  },
  props: {
    dialog: { type: Boolean },
    config: {
      type: Boolean,
      default: false,
    },
    comment: { type: Object },
  },
  data() {
    return {
      dialogVisible: false,
      isValid: false,
      showPassword: false,
      password: "",
      status: "",
      dialogTitle: "",
    };
  },
  methods: {
    ...mapActions(["handleDeleteAction"]),
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
    updateInDialog(value) {
      this.dialogVisible = value;
    },
    handleDelete() {
      this.dialogVisible = true;
      this.status = "delete";
      this.dialogTitle = "삭제";
    },
    handleEdit() {
      this.dialogVisible = true;
      this.status = "edit";
      this.dialogTitle = "수정";
    },
    async confirmDelete() {
      const id = this.$route.params.id;
      try {
        const data = {
          id: this.comment.id,
          post_id: id,
          password: this.password,
        };
        await this.handleDeleteAction(data);
        //
        this.dialog = false; // Close the dialog after successful deletion
      } catch (error) {
        window.alert(error.response.data.message);
      }
    },
    async confirmEdit() {
      const id = this.$route.params.id;
      try {
        const data = {
          id: this.comment.id,
          post_id: id,
          password: this.password,
        };
        await this.handleEditAction(data);
        //
        this.dialog = false; // Close the dialog after successful deletion
      } catch (error) {
        window.alert(error.response.data.message);
      }
    },
  },
};
</script>
