<template>
<Flicking :options="{ defaultIndex: 0, circular: false, }" :plugins="plugins">
    <div  
      class="flicking__content" 
      v-for="(item, index) in options"
      :key="index"
      :class="{ 'active': item.value === selected }"
      @click="selectOption(item)">

      <div  class="flicking_theme flex align-items_center justify-content_center"
            :style="{ color: item.primary, borderRadius: item.radius ? '16px' : '0' }">
            
            <div class="flex flex-direction_column justify-content_space-between align-items_center width_100 height_100" :style="{ padding: '12px', backgroundColor: item.background, borderRadius: item.radius ? '10px' : '0' }">
              
              <div class="flex flex-direction_column width_100 pa_16">
                <icon :icon="item.sticker" :style="{ color: item.primary }"><component :is="item.sticker" /></icon>
                <div class="sp_8"/>
                <div class="width_100" :style="{ color: item.font_color, 'font-family': item.font_family, 'text-align': item.align }">
                  <h2><strong>{{ item.title }}</strong></h2>
                  <div class="sp_2"/>
                  <h6>{{ item.exp }}</h6>
                </div>
              </div>

              <button v-if="item.style === 'card' || item.style === 'defaulted'" class="width_100 height_36" :style="{ backgroundColor: item.primary, color: item.primary_on, borderRadius: item.radius ? '32px' : '0' }">
                <span>선택하기</span>
              </button>


              
              <button 
                v-if="item.style === 'line'" 
                class="width_100 height_36" 
                :style="{ color: item.primary, 'border-width': '1px', 'border-style': 'solid', 'border-color': item.primary, borderRadius: item.radius ? '32px' : '0' }">
                <span>선택하기</span>
              </button>

            </div>


              <div class="background" :style="{ backgroundColor: item.background }"/>
              <div class="background__overlay" v-if="item.style === 'card'" :style="{ backgroundColor: item.background_on, opacity: 0.4 }"/>
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


export default {
  components: { icon, Check, CaretLeft, CaretRight },

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
