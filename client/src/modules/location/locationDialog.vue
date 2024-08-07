<template>
  <modalDialog title="예식 장소" :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <locationForm />
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>
  </modalDialog>
</template>

<script>
import locationForm from "@/modules/location/locationForm.vue";
export default {
  components: {
    locationForm,
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
