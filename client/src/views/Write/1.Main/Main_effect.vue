<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">효과 설정</h1>
      </div>
      <h5 class="--font-weight">효과 모양을 선택해 주세요</h5>
      <div class="sp_8"/>
        <v_dropdown :options="v_dropdown_items" v-model:selected="main.effect.config" />
      <div class="sp_40"/>
      <h5 class="--font-weight">효과 모양을 선택해 주세요</h5>
      <div class="sp_8"/>
      <div class="flex flex-wrap_wrap gap_4 --justify-content">
        <v_buttongroup :options="v_buttongroup_items" v-model:selected="main.effect.shape" />
      </div>
      <div class="sp_40"/>
      <h5 class="--font-weight">색상 선택해 주세요</h5>



      <v_flicking_effect_color class="color primary size_64" :options="v_flicking_items" v-model:selected="main.effect.color" />


      <div class="display_block--none" style="height: 170.4px;"/>
    </article>
    <div class="v-hr --display_block-none-block"/>
  </section>    
</template>
<script>
import v_buttongroup from '@/components/v_buttongroup.vue'
import v_dropdown from '@/components/v_dropdown.vue'
import v_flicking_effect_color from '@/components/v_flicking_effect_color.vue'

export default {
  components: { v_buttongroup, v_dropdown, v_flicking_effect_color },
  props: {
    main: { type: Object },
  },
  data: function() {
    return {
      v_buttongroup_items: [
        { folder: 'effect', title: '꽃가루', value: 'confetti' },
        { folder: 'effect', title: '하트', value: 'heart' },
        { folder: 'effect', title: '벚꽃', value: 'sakura' },

      ],
      v_dropdown_items: [
        { folder: 'effect', title: '사용안함', value: 'none' },
        { folder: 'effect', title: '떨어지는', value: 'falling' },
        { folder: 'effect', title: '사이드', value: 'side' },
        { folder: 'effect', title: '폭죽', value: 'explosion' },
      ],
      v_flicking_items: [
        { value: [ '#0079FF', '#00DFA2', '#F6FA70', '#FF0060' ], title: '색상혼합1' },
        { value: [ '#E4A5FF', '#FFAAC9', '#FFCDA8', '#FFE7CE' ], title: '색상혼합15' },
        { value: [ '#bb0000', '#ffffff' ], title: '색상혼합1' },

        { value: [ '#FFC0CB', '#FF69B4', '#FF1493', '#C71585' ], title: '색상혼합5' },
        { value: [ '#A8D8EA', '#AA96DA', '#FCBAD3', '#FFFFD2' ], title: '색상혼합4' },
        { value: [ '#E3FDFD', '#CBF1F5', '#A6E3E9', '#71C9CE' ], title: '색상혼합8' },
        { value: [ '#FF78C4', '#E1AEFF', '#FFBDF7', '#FFECEC' ], title: '색상혼합12' },
        { value: [ '#A0C49D', '#C4D7B2', '#E1ECC8', '#F7FFE5' ], title: '색상혼합14' },

        { value: [ '#F38181', '#FCE38A', '#EAFFD0', '#95E1D3' ], title: '색상혼합6' },
        { value: [ '#FFC7C7', '#FFE2E2', '#F6F6F6', '#8785A2' ], title: '색상혼합7' },
        { value: [ '#F4EEFF', '#DCD6F7', '#A6B1E1', '#424874' ], title: '색상혼합3' },
        { value: [ '#F67280', '#C06C84', '#6C5B7B', '#355C7D' ], title: '색상혼합2' },

        { value: [ '#F1C27B', '#FFD89C', '#A2CDB0', '#85A389' ], title: '색상혼합9' },
        { value: [ '#3AA6B9', '#FFD0D0', '#FF9EAA', '#C1ECE4' ], title: '색상혼합10' },
        { value: [ '#FAF0E4', '#9BCDD2', '#FF8551', '#FFDEDE' ], title: '색상혼합11' },
        { value: [ '#22A699', '#F2BE22', '#F29727', '#F24C3D' ], title: '색상혼합13' },
        { value: [ '#9376E0', '#E893CF', '#F3BCC8', '#F6FFA6' ], title: '색상혼합16' },
        { value: [ '#606C5D', '#FFF4F4', '#F7E6C4', '#F1C376' ], title: '색상혼합17' },
        { value: [ '#C2DEDC', '#ECE5C7', '#CDC2AE', '#116A7B' ], title: '색상혼합18' },
        { value: [ '#F5EFE7', '#D8C4B6', '#4F709C', '#213555' ], title: '색상혼합19' },
        { value: [ '#9BABB8', '#EEE3CB', '#D7C0AE', '#967E76' ], title: '색상혼합20' },
        { value: [ '#A0C49D', '#C4D7B2', '#E1ECC8', '#F7FFE5' ], title: '색상혼합21' },
      ],
    };
  },
};
</script>