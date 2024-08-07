<template>
  <buttonDefault class="saveButton">
    <icon><save /></icon>
    <span>저장</span>
    <saveHandle />
  </buttonDefault>
</template>
<script>
import save from "@/components/icon/save.vue";
import saveHandle from "@/modules/save/saveHandle.vue";

export default {
  components: { save, saveHandle },
};
</script>

<style scoped>
.saveButton {
  position: relative;

  width: 100%;
  border-radius: var(--border-radius-28);
  height: 56px;
  gap: 18px;
}
</style>

<style scoped>
/*-- 태블릿 --*/
@media all and (max-width: 1023px) {
  .saveButton {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: 56px;
    flex-direction: column;
    gap: unset;
  }
  .saveButton span {
    font-size: 12px;
  }
}
</style>
