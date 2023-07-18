<template>
  <div>
    <div class="flex justify-content_space-between align-items_center">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="user.fold === 'false'" icon="Folder"><Folder /></icon>
          <icon v-if="user.fold === 'true'" icon="FolderOpen"><FolderOpen /></icon>
        </div>
          <h5 class="flex_1 --font-weight">{{ user.infos.user.set }}측 계좌 정보를 열어놓을까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="user.fold"
    hide-details
    inset
    true-value="true"
    false-value="false"
  ></v-switch>
</div>

<div class="sp_20"/>
  
  <div v-for="(item, index) in user.banks" :key="index">
<div class="card">
    <div class="flex align-items_center gap_4">
      <h4 class="--font-weight">{{ user.infos.user.set }}측 계좌 {{ index + 1 }}</h4>
      <button class="button-icon --primary-color" @click="removeContent(index)"><icon icon="XCircle"><XCircle /></icon></button>
    </div>
    <div class="sp_16"/>
<div class="flex gap_8">
  <v_dropdown_bank :options="v_dropdown_items" v-model:selected="item.bank" />
  <v-text-field v-if="item.bank.value === 'Bank_self'" type="text" label="직접입력" v-model="item.bank.self" :variant="input" />
</div>
<div class="sp_18"/>
<v-text-field type="text" :label="`${user.infos.user.set} 계좌번호`" v-model="item.number" :variant="input" />
<div class="sp_18"/>
<div class="flex gap_8">
  <v-text-field type="text" :label="`${user.infos.user.set} 예금주명`" v-model="item.name" :variant="input" />
  <button class="button-defaulted height_40 pa_20 gap_4 --border-radius_16"><icon icon="KakaoPay"><KakaoPay /></icon><span>카카오페이</span></button>
</div>
<div class="card__overlay"/>
</div>

<div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>
</div>
<div class="sp_20"/>
  <button class="button-defaulted width_100 height_40 gap_4 --border-radius_16" @click="addContent"><icon icon="UserPlus"><UserPlus /></icon><span>계좌 정보 추가</span></button>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import KakaoPay from '@/components/Icons/KakaoPay.vue'
import XCircle from '@/components/Icons/XCircle.vue'
import UserPlus from '@/components/Icons/UserPlus.vue'
import Folder from '@/components/Icons/Folder.vue'
import FolderOpen from '@/components/Icons/FolderOpen.vue'
import v_dropdown_bank from '@/components/v_dropdown_bank.vue'

export default {
  components: { icon, KakaoPay, XCircle, UserPlus, Folder, FolderOpen, v_dropdown_bank },
  props: {
    user: { type: Object },
    input: '',
  },
  data() {
    return {
      v_dropdown_items: [
        { title: '국민은행', value: 'Bank_kb' },
        { title: '기업은행', value: 'Bank_ibk' },
        { title: '농협은행', value: 'Bank_nh' },
        { title: '신한은행', value: 'Bank_shinhan' },
        { title: '산업은행', value: 'Bank_kdb' },
        { title: '우리은행', value: 'Bank_woori' },
        { title: '한국씨티은행', value: 'Bank_citi' },
        { title: '하나은행', value: 'Bank_keb' },
        { title: 'SC제일은행', value: 'Bank_sc' },
        //{ title: '경남은행', value: 'Bank_bnk' },
        //{ title: '광주은행', value: 'Bank_jb' },
        //{ title: '대구은행', value: 'Bank_dgb' },
        //{ title: '도이치은행', value: 'Bank_db' },
        //{ title: '뱅크오브아메리카', value: 'Bank_bac' },
        //{ title: '부산은행', value: 'Bank_bnk' },
        //{ title: '산림조합중앙회', value: 'Bank_sj' },
        //{ title: '저축은행', value: 'Bank_sb' },
        //{ title: '새마을금고', value: 'Bank_mg' },
        //{ title: '수협은행', value: 'Bank_sh' },
        //{ title: '신협중앙회', value: 'Bank_cu' },
        //{ title: '우체국', value: 'Bank_post' },
        //{ title: '전북은행', value: 'Bank_jb' },
        //{ title: '제주은행', value: 'Bank_shinhan' },
        { title: '카카오뱅크', value: 'Bank_kakao' },
        { title: '케이뱅크', value: 'Bank_kbank' },
        { title: '토스뱅크', value: 'Bank_toss' },
        { title: '직접입력', value: 'Bank_self' },
      ],
    }
  },
  methods: {
    addContent() {
    const index = this.user.banks.length + 1;
    this.user.banks.push({
      bank: '', 
      self: '', 
      number: '', 
      name: '', 
      kakaopay: '',
    });
},
    removeContent(index) {
      this.user.banks.splice(index, 1)
    },
  },
}
</script>