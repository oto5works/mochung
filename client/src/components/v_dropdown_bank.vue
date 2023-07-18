<template>
  <div class="v-dropdown flex_1 --border-radius_12" ref="dropdown" :class="{ open: open }">
    <div class="selected flex align-items_center justify-content_space-between height_40" :class="{ open: open }" @click="toggleDropdown">
      <div class="bank__content flex flex align-items_center pa_8 gap_4"><icon :icon="selected.value" ><component :is="selected.value" /></icon><p>{{ selected.title }}</p></div>
      <div class="CaretDown">
      <icon icon="CaretDown"><CaretDown /></icon>
    </div>

      <div class="overlay"/>
    </div>

    <div class="items__wrap" :class="{ selectHide: !open }">
      <div class="items__content height_40" v-for="(option, i) of options" :key="i" @click="selectOption(option)">
        <div class="bank__content flex flex align-items_center height_40 pa_8 gap_4"><icon :icon="option.value"><component :is="option.value" /></icon><p>{{ option.title }}</p></div>
        <div class="items__hr"/>
      </div>
    </div>
  </div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import CaretDown from '@/components/Icons/CaretDown.vue'

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
  components: { icon, CaretDown, 
    Bank_kb, Bank_ibk, Bank_nh, Bank_shinhan, Bank_kdb, Bank_woori, Bank_citi, Bank_keb, Bank_sc, Bank_bnk, Bank_jb,
    Bank_dgb, Bank_db, Bank_bac, Bank_sj, Bank_sb, Bank_mg, Bank_sh, Bank_cu, Bank_post, Bank_kakao, Bank_kbank, Bank_toss, Bank_self
  },
  props: {
    options: Array,
    selected: String
  },
  data() {
    return {
      selected: this.selected
        ? this.selected
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    toggleDropdown() {
      this.open = !this.open;
    },
    selectOption(option) {
      this.selected = option;
      this.open = false;
      this.$emit('update:selected', option);
    },
    handleOutsideClick(event) {
      if (!this.$refs.dropdown.contains(event.target)) {
        this.open = false;
      }
    },
  },
};
</script>