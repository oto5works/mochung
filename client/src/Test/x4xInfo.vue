<template>
<div class="write__content">
<section>
  <article>
    <v-card class="card">
      <v-card-item><v-card-title>기본 정보</v-card-title></v-card-item>
<v-card-text>
  <v-tabs v-model="info_tab">
    <v-tab value="1">{{ info.user1_set }}</v-tab>
    <v-tab value="2">{{ info.user2_set }}</v-tab>
  </v-tabs>
<v-window v-model="info_tab">
<!-- // 인포탭 신랑일때 -->
<v-window-item value="1">
  <div class="sp_48"/>
  <v-text-field type="text" label="호칭" v-model="info.user1_set" />
  <div class="sp_28"/>
  <div class="switch">
    <div class="switch_left">
      <icon v-if="info.user1_tell_use === true" icon="Tell"><Tell /></icon>
      <icon v-if="info.user1_tell_use === false" icon="TellFalse"><TellFalse /></icon>
      <span v-if="info.user1_tell_use === true">{{ info.user1_set }} 연락하기 사용</span>
      <span v-if="info.user1_tell_use === false">{{ info.user1_set }} 연락하기 사용 안 함</span>
    </div>
    <div class="switch_right">
      <v-switch
          v-model="info.user1_tell_use"
          color="primary"
          hide-details
          inset
        ></v-switch>
  </div>
  </div>
  <div class="sp_40"></div>
<!-- // 신랑 정보 -->
  <div class="v-card-flex">
    <v-text-field type="text" :label="`${info.user1_set} 이름`" v-model="info.user1_name" />
    <v-text-field v-if="info.user1_tell_use === true" type="text" :label="`${info.user1_set} 연락처`" v-model="info.user1_tell" />
  </div>
  <hr class="sp_hr"/>
<!-- // 신랑 아버님 정보 -->
  <div class="v-card-flex">
    <v-text-field type="text" :label="`${info.user1_set} 아버님 성함`" v-model="info.user1_h1_name" />
    <v-text-field v-if="info.user1_tell_use === true" type="text" :label="`${info.user1_set} 아버님 연락처`" v-model="info.user1_h1_tell" />
  </div>
  <div class="sp_16"/>
<div class="s_title">{{ info.user1_set }} 아버님 고인표시</div>
<group_button :options="goin_items" v-model:selected="info.user1_h1_goin" />


<hr class="sp_hr"/>
<!-- // 신랑 어머님 정보 -->
  <div class="v-card-flex">
    <v-text-field type="text" :label="`${info.user1_set} 어머님 성함`" v-model="info.user1_h2_name" />
    <v-text-field v-if="info.user1_tell_use === true" type="text" :label="`${info.user1_set} 어머님 연락처`" v-model="info.user1_h2_tell" />
  </div>
  <div class="sp_16"/>
  <div class="s_title">{{ info.user1_set }} 어머님 고인표시</div>
  <group_button :options="goin_items" v-model:selected="info.user1_h2_goin" />

  <hr class="sp_hr"/>
  <v-text-field type="text" :label="`${info.user1_set}과의 관계`" v-model="info.user1_relation" />
  <div class="warning">
          <icon icon="Warning"><Warning /></icon>
          <p>장남, 차남, 기타 등등</p>
  </div>
  <div class="sp_48"></div>
</v-window-item>
<!-- 인포탭 신랑일때 -->

<!-- // 인포탭 신부일때 -->
<v-window-item value="2">
  
</v-window-item>
<!-- 인포탭 신부일때 -->
</v-window>
</v-card-text>
    </v-card>
  </article>



  <article>
    <v-card class="card">
      <v-card-item><v-card-title>계좌 정보</v-card-title></v-card-item>
<v-card-text>
  <v-tabs v-model="info_tab">
    <v-tab value="1">{{ info.user1_set }}</v-tab>
    <v-tab value="2">{{ info.user2_set }}</v-tab>
  </v-tabs>
<v-window v-model="info_tab">
<!-- // 인포탭 신랑일때 -->
<v-window-item value="1">
  <div class="bank_item" v-for="(item, index) in info.user1.banks.user" :key="index">
      <v-text-field type="text" :label="`${info.user1.set} 은행명`" v-model="item.bank" />
      <v-text-field type="text" :label="`${info.user1.set} 예금주명`" v-model="item.account" />
      <v-text-field type="text" :label="`${info.user1.set} 예금주명`" v-model="item.holder" />
  </div>


</v-window-item>
<!-- 인포탭 신랑일때 -->

<!-- // 인포탭 신부일때 -->
<v-window-item value="2">

</v-window-item>
<!-- 인포탭 신부일때 -->
</v-window>
</v-card-text>
    </v-card>
  </article>
</section>
  </div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Goin from '@/components/Icons/Goin.vue'

import Tell from '@/components/Icons/Tell.vue'
import TellFalse from '@/components/Icons/TellFalse.vue'
import BankAccount from '@/components/Icons/BankAccount.vue'
import BankAccountFalse from '@/components/Icons/BankAccountFalse.vue'
import AccordionTrue from '@/components/Icons/AccordionTrue.vue'
import AccordionFalse from '@/components/Icons/AccordionFalse.vue'
import QRcode from '@/components/Icons/QRcode.vue'

import Warning from '@/components/Icons/Warning.vue'
import group_button from '@/components/group_button.vue'

export default {
  components: { group_button, icon, Goin, Tell, TellFalse, Warning, BankAccount, BankAccountFalse, AccordionTrue, AccordionFalse, QRcode },
  props: {
    info: { type: Object },
  },
  data() {
    return {
      info_tab: null,
      goin_items: [
          { title: '故 한자', value: 'kanji' },
          { title: '국화', value: 'flower' },
          { title: '리본', value: 'ribbon' },
        ],
    }
  },
}
</script>