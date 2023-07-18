<template>
<section>
<article class="pa_16">
  <div class="title__wrap">
        <h1 class="--text-align --font-weight">순서 설정</h1>
        <div class="sp_8"/>
        <h3 class="--text-align">모서리의 둥글기와 그림자를 설정할 수 있습니다.</h3>
      </div>
  <SlickList class="flex flex-direction_column gap_4" axis="y" v-model:list="setting.orders">
    <SlickItem class="order__item button-defaulted flex pa_12 align-items_center justify-content_space-between width_100 height_40 --border-radius_16" v-for="(item, i) in setting.orders" :key="item.id" :index="i" :accept="accept">
      <div class="flex align-items_center gap_4">
        <icon :icon="item.value"><component :is="item.value" /></icon>
        <span>{{ item.title }}</span>
      </div>
      <icon icon="Order"><Order /></icon>
    </SlickItem>
</SlickList>
  </article>  
<div class="v-hr --display_block-none-block"/>
</section>

</template>

<script>
import { SlickList, SlickItem } from 'vue-slicksort';
import icon from '@/components/Icons/icon.vue'
import Main from '@/components/Icons/Main.vue'
import Info from '@/components/Icons/Info.vue'
import Map from '@/components/Icons/Map.vue'
import Gallery from '@/components/Icons/Gallery.vue'
import Comment from '@/components/Icons/Comment.vue'
import Survey from '@/components/Icons/Survey.vue'
import Intro from '@/components/Icons/Intro.vue'
import Deposit from '@/components/Icons/Deposit.vue'
import Order from '@/components/Icons/Order.vue'

import Calendar from '@/components/Icons/Calendar.vue'


export default {
  components: { SlickList, SlickItem, icon, Main, Info, Map, Gallery, Comment, Survey, Intro, Calendar, Deposit, Order  },
  props: {
    setting: { type: Object },
  },
  data: function() {
    return {
    };
  },
};
</script>
<style scoped>
.order__item {
  cursor: grab;
  z-index: 1;
}
</style>