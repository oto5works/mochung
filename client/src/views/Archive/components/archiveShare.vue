<template>
  <tooltipMenu :dialog="dialog"
    title="더보기"
    @update:dialog="updateDialog">
      <listItem />
      <listItem icon="trash" label="삭제" @click="handleDelete" />
      <listItem icon="pencil" label="수정" @click="handleEdit" />

      <listItem icon="eye" label="미리보기" @click="handlePreview" />

      <listItem icon="share" label="공유하기" @click="dialogVisible = true" />

    

    </tooltipMenu>

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

