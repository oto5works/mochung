<template>
  <section data-sal="slide-up" data-sal-duration="700" >
    <div class="v-hr --display_block-none-block"/>
    <article v-if="hasBankData(info.user1, info.user2)">
      <div class="sp_64"/>

      <div class="title__wrap">
        <div class="title__content">
          <Sticker :sticker="sticker" />
          <h5 class="--text-align">Bank Account</h5>
          <div class="sp_8"/>
          <h1 class="--font-weight">{{ info.bank_title }}</h1>
        </div>
      </div>
      <div class="sp_40"/>
      <div class="pa_16">
        <Deposit_banks :user="info.user1" />
        <Deposit_banks :user="info.user2" />
      </div>
      <div class="sp_64"/>
      <div class="hr-defaulted-line"/>
    </article>
  </section>
</template>

<script>
import icon from "@/components/Icons/icon.vue";
import VExpansionArrow from "@/components/Icons/VExpansionArrow.vue";
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import Deposit_banks from '@/views/Preview/9.Deposit/Deposit_banks.vue'
import sal from "sal.js";

export default {
  components: { icon, Sticker, Deposit_banks, VExpansionArrow },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
  props: {
    info: { type: Object },
    sticker: { type: String },
  },
  methods: {
    hasBankData(user1, user2) {
      return (
        this.checkBankData(user1) || this.checkBankData(user2)
      );
    },
    checkBankData(user) {
      return user.banks.some(
        (item) =>
          item.bank !== '' ||
          item.number !== '' ||
          item.name !== '' ||
          item.kakaopay !== ''
      );
    },

  },
};
</script>
