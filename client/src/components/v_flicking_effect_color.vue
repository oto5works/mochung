<template>
<Flicking :options="{ defaultIndex: 0, circular: false, }" :plugins="plugins">

  <div class="flicking__content">
    <div class="flicking-color__wrap color__wrap --border-radius_32" :style="{ background: selected }">
              
            </div>
    <input :value="selected" @input="updateSelected" class="flicking-color" type="color" />
    <div class="sp_8"/>
    <p>직접 설정</p>
  </div>

    <div class="flicking__content" v-for="(item, index) in options"
            :key="index"
            :class="{ 'active': item.value === selected }"
            @click="selectOption(item)">
            <div class="color__wrap --border-radius_32" :style="gradientStyle(item.value)">
              <div class="check justify-content_center align-items_center --border-radius_16" v-if="item.value === selected">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.13" d="M5 11L11 17L21 7"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/></path></svg>
              </div>
            </div>
            <div class="sp_8"/>
            <p>{{ item.title }}</p>
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
    gradientStyle(colorValue) {
      const gradientColors = colorValue.join(", ");
      return {
        background: `linear-gradient(${gradientColors})`
      }
    },
    selectOption(option) {
      if (option.value === this.selected) {
        this.$emit('update:selected', null); // deselect the option
      } else {
        this.$emit('update:selected', option.value); // select the option
      }
    },
    updateSelected(event) {
      this.$emit('update:selected', event.target.value);
    },
  },
};
</script>
<style scoped>
p {
  font-size: 14px;
  text-align: center;
  padding: 0 4px;
  line-height: 130%;
}
.flicking-color {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
}
.flicking-color__wrap {
  border: 1px solid var(--background-on);
}
</style>