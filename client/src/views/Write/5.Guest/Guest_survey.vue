<template>
  <section>


    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">게스트 설문 설정</h1>
      </div>
    <div class="flex justify-content_space-between align-items_center">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="guest.survey === 'false'" icon="SurveyFalse"><SurveyFalse /></icon>
          <icon v-if="guest.survey === 'true'" icon="Survey"><Survey /></icon>
        </div>
          <h5 class="--font-weight flex_1">게스트용 설문조사를 사용할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="guest.survey"
    hide-details
    inset
    true-value="true"
    false-value="false"
  ></v-switch>
</div>

<div v-if="guest.survey === 'true'">
  <div class="sp_40"/>
  <v-text-field type="text" :variant="input" label="설문조사 제목" v-model="guest.survey_title" />
  <v_tiptap v-model="guest.survey_content" />
<div class="sp_40"/>
<h5 class="--font-weight">필요한 설문항목을 선택해주세요.</h5>
<div class="sp_8"/>
<div class="flex flex-wrap_wrap gap_4 --justify-content">
        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': guest.rsvp }"
          @click="toggleRsvp">
          <icon icon="GuestRsvp"><GuestRsvp /></icon>
          <span>참석여부</span>
        </button>

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': guest.info }"
          @click="toggleInfo">
          <icon icon="GuestInfo"><GuestInfo /></icon>
          <span>참석자 정보</span>
        </button>

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': guest.pal }"
          @click="togglePal">
          <icon icon="Info"><Info /></icon>
          <span>동행인 정보</span>
        </button>
        
        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': guest.food }"
          @click="toggleFood">
          <icon icon="GuestFood"><GuestFood /></icon>
          <span>식사유무</span>
        </button>

        <button 
          class="button-defaulted button-unselected gap_2 height_34 pa_12 --border-radius_32" 
          :class="{ 'selected': guest.receive }"
          @click="toggleReceive">
          <icon icon="GuestReceive"><GuestReceive /></icon>
          <span>청첩장 수령유무</span>
        </button>
      </div>
    </div>
  </article>
  <div class="v-hr --display_block-none-block"/>
</section>    
</template>
<script>
import v_tiptap from '@/components/v_tiptap.vue'
import icon from '@/components/Icons/icon.vue'
import Survey from '@/components/Icons/Survey.vue'
import SurveyFalse from '@/components/Icons/SurveyFalse.vue'
import GuestRsvp from '@/components/Icons/GuestRsvp.vue'
import GuestInfo from '@/components/Icons/GuestInfo.vue'
import Info from '@/components/Icons/Info.vue'
import GuestFood from '@/components/Icons/GuestFood.vue'
import GuestReceive from '@/components/Icons/GuestReceive.vue'

export default {
  components: { v_tiptap, icon, Survey, SurveyFalse, GuestRsvp, GuestInfo, Info, GuestFood,GuestReceive  },

  props: {
    guest: { type: Object },
    input: '',
  },
  data: function() {
    return {
    }
  },
  methods: {
  toggleRsvp() {
    this.guest.rsvp = !this.guest.rsvp;
  },
  toggleInfo() {
    this.guest.info = !this.guest.info;
  },
  togglePal() {
    this.guest.pal = !this.guest.pal;
  },
  toggleFood() {
    this.guest.food = !this.guest.food;
  },
  toggleReceive() {
    this.guest.receive = !this.guest.receive;
  },
},
};
</script>