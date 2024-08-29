<!-- commentMore.vue -->
<template>
  <dialogBottom
    :dialog="dialog"
    title="더보기"
    @update:dialog="updateDialog"
  >
    <listItem
      icon="pencil"
      label="수정"
      @click="handleEdit"
    />
    <listItem
      icon="trash"
      label="삭제"
      @click="handleDelete"
    />
    <!-- 비밀번호 검증 -->
    <commentVerify
      v-if="commentVerify"
      :dialog="commentVerify"
      :mode="mode"
      @update:dialog="commentVerify = $event"
      @confirm="handleConfirm"
    />
  </dialogBottom>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapActions } from "vuex";

export default {
  components: {
    commentVerify: defineAsyncComponent(() =>
      import("@/components/comment/commentVerify.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
    comment: { type: Object },
  },
  data() {
    return {
      commentVerify: false,
      mode: '', // Mode will either be 'edit' or 'delete'
    };
  },
  methods: {
    ...mapActions(["handleDeleteAction", "handleEditAction"]),
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    handleDelete() {
      this.mode = 'delete';
      this.commentVerify = true; // Open the password verification dialog
    },
    handleEdit() {
      this.mode = 'edit';
      this.commentVerify = true; // Open the password verification dialog
    },
    async handleConfirm(password) {
      const id = this.$route.params.id;
      const data = {
        id: this.comment.id,
        post_id: id,
        password: password,
      };

      try {
        if (this.mode === 'delete') {
          await this.handleDeleteAction(data);
        } else if (this.mode === 'edit') {
          await this.handleEditAction(data);
        }
        this.dialog = false; // Close the dialog after successful operation
        this.commentVerify = false; // Close the password dialog
      } catch (error) {
        window.alert(error.response.data.message);
      }
    },
  },
};
</script>
