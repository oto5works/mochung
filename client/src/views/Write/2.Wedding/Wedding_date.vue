<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">예식일 설정</h1>
      </div>
      <div class="illust__wrap flex align-items_center justify-content_center width_100">
        <icon icon="Illust_03"><Illust_03 /></icon>
      </div>
        <v-text-field type="date" label="날짜" :variant="input" v-model="wedding.date">
          <div class="v-text-field__icon button-defaulted flex align-items_center justify-content_center --border-radius_32"><icon icon="Calendar"><Calendar /></icon></div>
        </v-text-field>
        <div class="sp_18"/>
        <v-text-field type="time" label="시간" :variant="input" v-model="wedding.time">
        <div class="v-text-field__icon button-defaulted flex align-items_center justify-content_center --border-radius_32"><icon icon="Clock"><Clock /></icon></div>
        </v-text-field>
    </article>
    <div class="v-hr --display_block-none-block"/>


  </section>    
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import Clock from '@/components/Icons/Clock.vue'
import Calendar from '@/components/Icons/Calendar.vue'
import Illust_03 from '@/components/Svg/Illust_03.vue'

export default {
  components: { icon, Clock, Calendar, Illust_03 },
  props: {
    wedding: { type: Object },
    input: '',
  },
};
</script>