<template>
  <appDialog :dialog="dialog" @update:dialog="updateDialog" :root="true">
    <comment :root="true" />
    <button
      class="button-defaulted --border-radius_32 gap_18"
      @click="dialogVisible = true"
    >
      <icon><paperPlane /></icon>
      <span>제출하기</span>
      <submit
        v-if="dialogVisible"
        :dialog="dialogVisible"
        @update:dialog="dialogVisible = $event"
        :root="true"
      />
    </button>
  </appDialog>
</template>

<script>
import { defineAsyncComponent } from "vue";
import paperPlane from "@/components/icon/paperPlane.vue";

export default {
  components: {
    paperPlane,
    comment: defineAsyncComponent(() =>
      import("@/components/component/comment/comment.vue")
    ),
    submit: defineAsyncComponent(() =>
      import("@/components/component/comment/submit.vue")
    ),
  },
  props: {
    id: { type: String },
    dialog: { type: Boolean },
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
  },
};
</script>
