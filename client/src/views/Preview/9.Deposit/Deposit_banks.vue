<template>
    <v-expansion-panels v-model="user.fold" v-if="hasBankData">
        <v-expansion-panel value="true">
            <v-expansion-panel-title>
                <div class="expansion-panel-title flex width_100 pa_16 align-items_center --justify-content gap_4">
                    <span class="--font-weight">{{user.infos.user.set}} 측에 전달하기</span>
                    <button class="button-icon"><icon icon="VExpansionArrow"><VExpansionArrow /></icon></button>
                </div>
            </v-expansion-panel-title>
            <div class="v-hr --display_none-none-block"/>
            <div class="sp_4"/>
            <v-expansion-panel-text>
                <div v-for="(item, index) in user.banks" :key="index">
                    <Deposit_bank :item="item" />
                    <div class="--display_block-block-none"><div class="sp_4"/></div>
<div class="--display_none-none-block"><div class="v-hr dashed opacity_40"/></div>
                    

                </div>
                <div class="sp_8"/>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
import icon from "@/components/Icons/icon.vue";
import VExpansionArrow from "@/components/Icons/VExpansionArrow.vue";
import Deposit_bank from '@/views/Preview/9.Deposit/Deposit_bank.vue'

export default {
    components: { icon, Deposit_bank, VExpansionArrow },
    props: {
        user: { type: Object },
    },
    methods: {
        checkBankData() {
      return this.user.banks.some(
        (item) =>
          item.bank !== '' ||
          item.number !== '' ||
          item.name !== '' ||
          item.kakaopay !== ''
      );
    },
    
    },
    computed: {
        hasBankData() {
      return this.checkBankData();
    },
}
  };
  </script>
  
  <style scoped>
  .expansion-panel-title {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
</style>