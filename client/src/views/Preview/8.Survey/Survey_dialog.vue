<template>
  <v-dialog v-model="dialog" >
    <template v-slot:activator="{ props }">
      <div class="flex --justify-content pa_16">
        <button class="button-defaulted height_40 gap_4 pa_24 --border-radius_32" v-bind="props">
          <span>응답하기</span>
          <icon icon="ArrowRight"><ArrowRight /></icon>
        </button>
      </div>
    </template>


<div class="dialog__wrap">

<div class="dialog__content --border-radius_16">
  <div class="sp_64"/>
    <button class="v-dialog__close" @click="dialog = false"><icon icon="Close"><Close /></icon></button>
  <div class="pa_24">
    <div class="sp_24"/>
    <h1>{{ guest.survey_title }}<br/>입력 항목</h1>
<div class="sp_28"/>
  <h5>게스트 타입</h5>
      <div class="flex">
        <v-checkbox
          v-model="survey.side"
          :label="`${info.user1.infos.user.set}측`"
          :value="`${info.user1.infos.user.set}`"
        ></v-checkbox>
        <v-checkbox
          v-model="survey.side"
          :label="`${info.user2.infos.user.set}측`"
          :value="`${info.user2.infos.user.set}`"
        ></v-checkbox>
      </div>
      <div class="sp_28"/>



<div v-if="guest.rsvp === true">
  <h5>참석 여부</h5>
      <div class="flex">
        <v-checkbox
          v-model="survey.attend"
          label="참석"
          value="참석"
        ></v-checkbox>
        <v-checkbox
        v-model="survey.attend"
          label="불참석"
          value="불참석"
        ></v-checkbox>
      </div>
      <div class="sp_28"/>
</div>





<div v-if="guest.info === true">
  <h5>참석자 정보</h5>
  <div class="sp_18"/>
  <div class="flex gap_8">
          <v-text-field
              v-model="survey.name"
              label="성함"
              type="text"
              :variant="custom.style_input"
            />
            <v-text-field
              v-model="survey.tell"
              label="연락처"
              type="text"
              :variant="custom.style_input"
            />
</div>
<div class="sp_28"/>
</div>


<div v-if="guest.pal === true">
  <h5>동행인 정보</h5>
  <div class="sp_18"/>
<div class="flex gap_8">
          <v-text-field
              v-model="survey.number"
              label="참석인원 (본인포함)"
              type="text"
              :variant="custom.style_input"
            />
            <v-text-field
              v-model="survey.pal"
              label="동행인 성함"
              type="text"
              :variant="custom.style_input"
            />
</div>
<div class="sp_28"/>
</div>




<div v-if="guest.food === true">
<h5>식사 여부</h5>
<div class="flex">
<v-checkbox
          v-model="survey.fare"
          label="식사 예정"
          value="식사 예정"
        ></v-checkbox>
        <v-checkbox
        v-model="survey.fare"
          label="식사 미예정"
          value="식사 미예정"
        ></v-checkbox>
</div>
<div class="sp_28"/>
</div>
  

<div v-if="guest.receive === true">
<h5>청첩장 수령 여부</h5>
<div class="d-flex">
<v-checkbox
          v-model="survey.receive"
          label='수령'
          value='수령'
        ></v-checkbox>
        <v-checkbox
        v-model="survey.receive"
          label='미수령'
          value='미수령'
        ></v-checkbox>
      </div>
<div class="sp_28"/>
</div>

<div v-if="survey.receive === '수령'">
  <h5>청첩장 수령 주소</h5>
  <div class="sp_18"/>
<div class="flex gap_8">
  <v-text-field type="text" label="우편 번호" v-model="survey.zipcode" :variant="custom.style_input" />
  <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="search"><span>주소검색</span></button>
</div>
<div class="sp_18"/>
<v-text-field type="text" label="청첩장 수령 주소" v-model="survey.address" :variant="custom.style_input"/>
<div class="sp_18"/>
<v-text-field type="text" label="상세주소" v-model="survey.detail" :variant="custom.style_input"/>
</div>
</div>








<div class="sp_32"/>
<div class="pa_16">
<button class="button-defaulted width_100 height_40 --border-radius_16" v-bind="props"><span>제출하기</span></button>
</div>

   


<v-dialog
    v-model="postOpen"
    width="auto"
  >
    <div class="VueDaumPostcode__wrap">
      <!--<button class="v-dialog__close" @click="postOpen = false"><icon icon="Close"><Close /></icon></button>-->
        <VueDaumPostcode @complete="oncomplete" />
      </div>
</v-dialog> 


<div class="sp_48"/>
</div> 
</div>
</v-dialog>
  
</template>
<script>
import { VueDaumPostcode } from "vue-daum-postcode"
import icon from '@/components/Icons/icon.vue'
import XCircle from '@/components/Icons/XCircle.vue'
import ArrowRight from '@/components/Icons/ArrowRight.vue'
import Close from '@/components/Icons/Close.vue'


export default {
  components: { VueDaumPostcode, icon, XCircle, ArrowRight, Close },
  props: {
    guest: { type: Array },
    info: { type: Array },
    custom: { type: Object },
},
  data() {
      return {
          dialog: false,
          address: null,
          postOpen: false,
          survey: {
            side:'',
            attend:'',
            name:'',
            tell:'',
            number:'',
            pal:'',
            fare:'',
            receive:'',
            zipcode:'',
            address:'',
            detail:'',
            agree:'',
          }
      };
  },
  methods: {
    handleSubmit(e) {
    e.preventDefault()
    const survey = this.survey
    for (const key in survey) {
      formdata.append(key, survey[key])
    }
    createPost(postId, formdata).then((res) => {
      survey.reset()
    })
  },
  search:function(){
    this.postOpen = true
  },
  oncomplete:function(result){
    if(result.userSelectedType === 'R'){  // 도로명 주소 선택
      this.survey.address = result.roadAddress;
      this.survey.zipcode = result.zonecode
    }else{  // 지번 주소 선택
      this.survey.address = result.jibunAddress;
      this.survey.zipcode = result.zonecode
    }
    this.postOpen = false
  }
}
};
</script>

<style scoped>

</style>