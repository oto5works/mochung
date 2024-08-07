<template>
  <div class="saveHandle" @click="this.titleDialog = true">
    <titleDialog
      v-if="titleDialog"
      :dialog="titleDialog"
      @update:dialog="titleDialog = $event"
      @open-save-dialog="openSaveDialog"
    />
    <saveDialog
      v-if="saveDialog"
      :dialog="saveDialog"
      @update:dialog="saveDialog = $event"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    titleDialog: defineAsyncComponent(() =>
      import("@/modules/title/titleDialog.vue")
    ),
    saveDialog: defineAsyncComponent(() =>
      import("@/modules/save/saveDialog.vue")
    ),
  },
  data() {
    return {
      titleDialog: false,
      saveDialog: false,
    };
  },

  methods: {
    openSaveDialog() {
      // fnTitle 컴포넌트에서 발생한 이벤트로 인해 saveDialog 다이어로그를 보여줍니다.
      this.titleDialog = false;
      this.saveDialog = true;
      // fnTitle 다이어로그를 닫습니다.
      this.dialog = false;
    }

  },
};
</script>

<style scoped>
.saveHandle {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>