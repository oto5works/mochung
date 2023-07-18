<template>
    <div class="card">
      <div class="flex align-items_center justify-content_space-between">
        <div class="flex align-items_center gap_4">
          <icon class="--primary-color" :icon="item.bank.value"><component :is="item.bank.value" /></icon>
          <p v-if="item.bank.value !== 'Bank_self'" class="--font-weight">{{ item.bank.title }}</p>
          <p v-if="item.bank.value === 'Bank_self'" class="--font-weight">{{ item.bank.self }}</p>
        </div>

        <div class="flex align-items_center gap_4 cursor_pointer" @click="copyAccountNumber(item.number)">
          <p style="line-height: 100%;" class="flex align-items_center gap_4 text-align_right">{{ item.number }}</p>
          <button class="button-icon --primary-color">
            <icon icon="Copy"><Copy /></icon>
          </button>
        </div>

      </div>
<div class="sp_8"/>
<div class="flex align-items_center justify-content_space-between">
  <p class="--font-weight">예금주</p>
  <p style="letter-spacing: 0.08em">{{ item.name }}</p>
</div>        
<div class="sp_20"/>
<div class="flex --justify-content width_100">
<button class="button-defaulted height_40 pa_20 gap_4 --border-radius_32">
<icon icon="KakaoPay"><KakaoPay /></icon>
<span>카카오페이</span></button>
</div>
<div class="card__overlay"/>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Copy from '@/components/Icons/Copy.vue'
import KakaoPay from '@/components/Icons/KakaoPay.vue'

import Bank_kb from '@/components/Icons/Bank_kb.vue'
import Bank_ibk from '@/components/Icons/Bank_ibk.vue'
import Bank_nh from '@/components/Icons/Bank_nh.vue'
import Bank_shinhan from '@/components/Icons/Bank_shinhan.vue'
import Bank_kdb from '@/components/Icons/Bank_kdb.vue'
import Bank_woori from '@/components/Icons/Bank_woori.vue'
import Bank_citi from '@/components/Icons/Bank_citi.vue'
import Bank_keb from '@/components/Icons/Bank_keb.vue'
import Bank_sc from '@/components/Icons/Bank_sc.vue'
import Bank_bnk from '@/components/Icons/Bank_bnk.vue'
import Bank_jb from '@/components/Icons/Bank_jb.vue'
import Bank_dgb from '@/components/Icons/Bank_dgb.vue'
import Bank_db from '@/components/Icons/Bank_db.vue'
import Bank_bac from '@/components/Icons/Bank_bac.vue'
import Bank_sj from '@/components/Icons/Bank_sj.vue'
import Bank_sb from '@/components/Icons/Bank_sb.vue'
import Bank_mg from '@/components/Icons/Bank_mg.vue'
import Bank_sh from '@/components/Icons/Bank_sh.vue'
import Bank_cu from '@/components/Icons/Bank_cu.vue'
import Bank_post from '@/components/Icons/Bank_post.vue'
import Bank_kakao from '@/components/Icons/Bank_kakao.vue'
import Bank_kbank from '@/components/Icons/Bank_kbank.vue'
import Bank_toss from '@/components/Icons/Bank_toss.vue'
import Bank_self from '@/components/Icons/Bank_self.vue'

export default {
  components: { icon, Copy, KakaoPay,
    Bank_kb, Bank_ibk, Bank_nh, Bank_shinhan, Bank_kdb, Bank_woori, Bank_citi, Bank_keb, Bank_sc, Bank_bnk, Bank_jb,
    Bank_dgb, Bank_db, Bank_bac, Bank_sj, Bank_sb, Bank_mg, Bank_sh, Bank_cu, Bank_post, Bank_kakao, Bank_kbank, Bank_toss, Bank_self
  },
  props: {
    item: { type: Object },
  },
  methods: {
    copyAccountNumber(accountNumber) {
      navigator.clipboard.writeText(accountNumber)
        .then(() => {
          alert(`계좌번호 ${accountNumber}이(가) 복사되었습니다.`)
        })
        .catch((err) => {
          alert(`계좌번호를 복사할 수 없습니다. ${err}`)
        })
    },
  },
}
</script>

