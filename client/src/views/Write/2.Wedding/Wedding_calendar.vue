<template>
<section>
<article>
  <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">달력 설정</h1>
    </div>
        <v_flicking_svg class="main size_160" :options="v_flicking_items" v-model:selected="wedding.calendar" />
  </article>
  <div class="v-hr --display_block-none-block"/>


    <div class="sp_8"/>
    <article class="pa_0 article-card">
<div class="sp_16"/>
    <div class="flex justify-content_space-between align-items_center pa_16">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="wedding.countdown === 'false'" icon="DDayFalse"><DDayFalse /></icon>
          <icon v-if="wedding.countdown === 'true'" icon="DDay"><DDay /></icon>
        </div>
          <h5 class="--font-weight">카운트다운을 설정 할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="wedding.countdown"
    hide-details
    inset
    true-value="true"
    false-value="false"
  ></v-switch>
</div>
<div class="sp_16"/>
<div class="article-card__overlay"/>
  </article>



</section>

</template>

<script>
import v_flicking_svg from '@/components/v_flicking_svg.vue'
import icon from '@/components/Icons/icon.vue'
import DDay from '@/components/Icons/DDay.vue'
import DDayFalse from '@/components/Icons/DDayFalse.vue'

export default {
  components: { v_flicking_svg, icon, DDay, DDayFalse },
  props: {
    wedding: { type: Object },
  },
  data: function() {
    return {
      v_flicking_items: [
        { title: 'Defaulted', value: 'Calendar_01' },
        { title: '로즈 2', value: 'Calendar_02' },
        { title: '로즈 2', value: 'Calendar_03' },
        { title: '로즈 2', value: 'Calendar_04' },
        { title: '로즈 2', value: 'Calendar_05' },
        { title: '로즈 2', value: 'Calendar_06' },
        { title: '로즈 2', value: 'Calendar_07' },
        { title: '로즈 2', value: 'Calendar_08' },
        { title: '로즈 2', value: 'Calendar_09' },

        
    ],
    };
  },
};
</script>
