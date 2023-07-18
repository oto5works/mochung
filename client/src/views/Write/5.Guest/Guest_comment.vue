<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">방명록 설정</h1>
      </div>
    <div class="flex justify-content_space-between align-items_center">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="guest.comment === 'false'" icon="CommentFalse"><CommentFalse /></icon>
          <icon v-if="guest.comment === 'true'" icon="Comment"><Comment /></icon>
        </div>
          <h5 class="--font-weight">방명록을 사용할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="guest.comment"
    hide-details
    inset
    true-value="true"
    false-value="false"
  ></v-switch>
</div>


<div v-if="guest.comment === 'true'">
  <div class="sp_40"/>
<div v-if="guest.password_check !== 'true'">
  <h5 class="--font-weight">방명록에 사용할 비밀번호를 설정해주세요.</h5>
  <div class="sp_8"/>
<div class="flex gap_8">
  <v-text-field type="text" :variant="input" label="비밀번호" v-model="passwordInput" />
  <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="setPassword()" :class="{ disabled: errorMessage !== '' || passwordInput == '' }"><span>확인</span></button>
</div>
</div>
<v_errormessage :errorMessage = "errorMessage"/>



<div v-if="guest.password_check === 'true'">
<div class="flex justify-content_space-between">
  <div class="flex gap_8 ma_16 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon icon="Lock"><Lock /></icon>
        </div>
        <div>
          <h5 class="--font-weight">비밀번호 등록 완료</h5>
          <h3 class="password">{{ guest.password }}</h3>
        </div>
  </div>
  <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="setPasswordReset()"><span>재설정 하기</span></button>
</div>
</div>
</div>


  </article>





<div class="v-hr --display_block-none-block"/>


  </section>    
</template>
<script>
import v_errormessage from '@/components/v_errormessage.vue'
import icon from '@/components/Icons/icon.vue'
import Comment from '@/components/Icons/Comment.vue'
import CommentFalse from '@/components/Icons/CommentFalse.vue'
import Lock from '@/components/Icons/Lock.vue'

export default {
  components: { v_errormessage, icon, Comment, CommentFalse, Lock },

  props: {
    guest: { type: Object },
    input: '',
  },
  data: function() {
    return {
      errorMessage: '',
      passwordInput: '',
    }
  },

watch: {
  'passwordInput'() {
    const password = this.passwordInput
    const letterRegex = /^[0-9]{4}$/

    if (password === '') {
      this.errorMessage = ''
    } else if (!letterRegex.test(password)) {
      this.errorMessage = '비밀번호는 4자의 숫자만 가능합니다.'
    } else {
      this.errorMessage = ''
    }
  },
},

  methods: {
    setPasswordReset() {
      this.guest.password = ''
      this.guest.password_check = 'false'
      this.passwordInput = ''
    },
    setPassword() {
      //this.$emit('update:password', this.passwordInput);
      this.guest.password_check = 'true'
      this.guest.password = this.passwordInput
    },
  },
};
</script>
<style scoped>
.password {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3em;
}
</style>