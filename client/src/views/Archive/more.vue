<template>
  <bottomSheet
    :dialog="dialog"
    title="더보기"
    @update:dialog="updateDialog"
    :root="root"
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
      <li @click="handlePreview">
        <div class="title">
          <icon><eye/></icon><span>미리보기</span>
        </div>
      </li>
      <li @click="dialogVisible = true">
        <div class="title">
          <icon><share /></icon><span>공유하기</span>
        </div>
      </li>
    </ul>

    <!-- 다이얼로그 추가 -->
    <inDialog
      v-if="dialogVisible"
      :dialog="dialogVisible"
      @update:dialog="updateInDialog"
      title="공유하기"
      :root="root"
    >


      <div class="sp_16" />
    </inDialog>
    <!-- 다이얼로그 추가 -->
  </bottomSheet>
</template>
<script>
import { defineAsyncComponent } from "vue";
import trash from "@/components/icon/trash";
import pencil from "@/components/icon/pencil";
import eye from "@/components/icon/eye.vue";
import share from "@/components/icon/share.vue";

export default {
  components: {
    trash,
    pencil,
    eye,
    share,
    inDialog: defineAsyncComponent(() =>
      import("@/components/component/inDialog")
    ),
  },
  props: {
    dialog: { type: Boolean },
    root: { type: Boolean },
    id: { type: String },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    updateInDialog(value) {
      this.dialogVisible = value;
    },
    handleDelete() {
      this.$emit("confirmDelete");
      this.$emit("update:dialog", false);
    },
    handlePreview() {
      const id = this.id; // Get the ID from the props
      this.$router.push({ name: "view", params: { id: id } }); // Navigate to the 'view' route with the ID parameter
    },
    handleEdit() {
      const id = this.id; // Get the ID from the props
      this.$router.push({ name: "edit", params: { id: id } }); // Navigate to the 'view' route with the ID parameter
    },
  },
};
</script>

