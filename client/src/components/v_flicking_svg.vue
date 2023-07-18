<template>
<Flicking :options="{ defaultIndex: 0, circular: false, }" :plugins="plugins">
    <div  
      class="flicking__content" 
      v-for="(item, index) in options"
      :key="index"
      :class="{ 'active': item.value === selected }"
      @click="selectOption(item)">

      <div class="flicking-svg flex align-items_center justify-content_center --border-radius_16">
        <icon :icon="item.value"><component :is="item.value" /></icon>
      <div class="flicking-svg__overlay --border-radius_16"/>
            </div>
            <div class="check justify-content_center align-items_center --border-radius_16" v-if="item.value === selected">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13" d="M5 11L11 17L21 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path></svg>
            </div>
    </div>
    <template #viewport>
        <span class="flicking-arrow-prev"><icon icon="CaretLeft"><CaretLeft /></icon></span>
        <span class="flicking-arrow-next"><icon icon="CaretRight"><CaretRight /></icon></span>
        <div class="flicking-pagination"></div>
    </template>
    
  </Flicking>
</template>

<script>
import { Arrow, Pagination } from "@egjs/flicking-plugins";

import icon from '@/components/Icons/icon.vue'
import Check from '@/components/Icons/Check.vue'
import CaretLeft from '@/components/Icons/CaretLeft.vue'
import CaretRight from '@/components/Icons/CaretRight.vue'

import svg from '@/components/Svg/svg.vue'
import Main_01 from '@/components/Svg/Main_01.vue'
import Main_02 from '@/components/Svg/Main_02.vue'

import Sticker_01 from '@/components/Svg/Sticker_01.vue'
import Sticker_02 from '@/components/Svg/Sticker_02.vue'

import Calendar_01 from '@/components/Svg/Calendar_01.vue'
import Calendar_02 from '@/components/Svg/Calendar_02.vue'
import Calendar_03 from '@/components/Svg/Calendar_03.vue'
import Calendar_04 from '@/components/Svg/Calendar_04.vue'
import Calendar_05 from '@/components/Svg/Calendar_05.vue'
import Calendar_06 from '@/components/Svg/Calendar_06.vue'
import Calendar_07 from '@/components/Svg/Calendar_07.vue'
import Calendar_08 from '@/components/Svg/Calendar_08.vue'
import Calendar_09 from '@/components/Svg/Calendar_09.vue'

export default {
  components: { 
    icon, Check, CaretLeft, CaretRight, 
    svg, 
    Main_01, Main_02,
    Sticker_01, Sticker_02,
    Calendar_01, Calendar_02, Calendar_03, Calendar_04, Calendar_05, Calendar_06, Calendar_07, Calendar_08, Calendar_09
  },

    data() {
    return {
      plugins: [new Arrow(), new Pagination({ type: 'bullet' })]
    }
  },
  props: {
    options: { type: Array },
    selected: { type: String },
  },
  methods: {
    selectOption(option) {
      if (option.value === this.selected) {
        this.$emit('update:selected', null); // deselect the option
      } else {
        this.$emit('update:selected', option.value); // select the option
      }
    }
  }
};
</script>
