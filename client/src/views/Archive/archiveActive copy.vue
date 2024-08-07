<template>
  <v-dialog class="root" v-model="dialog">
    <button class="v-dialog__close" @click="dialog = false">
      <icon icon="close"><close /></icon>
    </button>

    <div class="dialog__wrap --border-radius_16">
          <div class="sp_64" />
          <div class="pa_24">
              <h1>활성화 코드 입력하기</h1>
              <div class="sp_8"/>
              <h5 class="opacity_60">{{ id }}</h5>
              <div class="sp_28" />
                  <v-form v-model="form" @submit.prevent="handleSubmit">
                    <v-text-field
                        class="flex_1" 
                        :rules="[required, passwordRules]"                                        
                        type="text"
                        variant="outlined" 
                        label="비밀번호" 
                        v-model="couponCode" 
                        hint="비밀번호는 숫자와 영문 조합 8자리 이상이어야 합니다."
                    />
                    <button :disabled="!form" class="button-defaulted width_100 height_40 --border-radius_16"><span>삭제하기</span></button>
                  </v-form>
                  <div class="sp_8"/>
                  <button class="button-defaulted width_100 height_40 --border-radius_16"><span>네이버페이로 인증하기</span></button>

              <div class="sp_64" />
          </div>
      </div>
    
  </v-dialog>
</template>

<script>
import { activePost } from '@/services/posts'
import icon from '@/components/icons/icon.vue'
import arrowRight from '@/components/icons/arrowRight.vue'
import close from '@/components/icons/close.vue'

export default {
  components: { icon, arrowRight, close },
  data() {
    return {
      dialog: this.dialogActive,
      couponCode: null,
      form: false,
    };
  },
  props: {
    id: { type: String },
    dialogActive: { type: Boolean },
  },
  watch: {
    dialog(newValue) {
      this.$emit('update:dialogActive', newValue);
    },
    dialogActive(newValue) {
      this.dialog = newValue;
    },
  },
  methods: {
    required (v) { return !!v || '이 항목은 필수입니다.' },
    passwordRules (v) { return /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(v) || '비밀번호는 숫자와 영문 조합 8자리 이상이어야 합니다.' },
    async handleSubmit() {
      try {
            const id = this.id
            const couponCode = this.couponCode
            await activePost(id, couponCode);
          //
          //this.dialog = false; // Close the dialog after successful deletion
      } catch (error) {
          window.alert(error.response.data.message);
      }
    },
  },
};
</script>

<style scoped>
.delete {
  position: absolute;
  right: 4px;
  top: 4px;
  width: 16px;
  height: 16px;
  opacity: 60%;
}
.delete svg {
  width: 12px;
  height: 12px;
}
</style>