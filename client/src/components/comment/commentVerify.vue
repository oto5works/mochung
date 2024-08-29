<!-- commentVerify.vue -->
<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <formField
      :rules="[required, characterRules]"
      label="비밀번호"
      v-model="password"
      hint="비밀번호는 숫자 4자리여야 합니다."
    >
    </formField>
    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="confirm"
        :disabled="!isValid"
        ><span>Confirm</span></buttonDefault
      >
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  props: {
    dialog: { type: Boolean },
    comment: { type: Object },
  },
  data() {
    return {
      isValid: false,
      password: "",
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
    confirm() {},
  },
};
</script>
