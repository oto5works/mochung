<template>
<section>

<article>
  <div class="title__wrap pa_16">
        <h1 class="--text-align --font-weight">배경음악 설정</h1>
  </div>

  <v-tabs class="pa_16" v-model="tab">
    <v-tab value="upload"><span>직접 올리기</span></v-tab>
    <v-tab value="defaulted"><span>기본 음악</span></v-tab>
  </v-tabs>


      <v-window v-model="tab">

      <v-window-item value="upload">    
        <v_filepond_single
          :filePond="audio.audio"
          @update:filePond="audio.audio = $event"
          :type="`audio`" 
          :acceptedFileTypes="`audio/*`" 
          :labelIdle="`<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>오디오 파일만 가능 (최대 파일 크기 5 MB)</div>`"
        />
      </v-window-item>

      <v-window-item value="defaulted">
        <v_flicking class="main size_160" :options="v_flicking_items" v-model:selected="audio.audio.url" />
        <div style="height: 3px;"/>
      </v-window-item>
    </v-window>
  </article>
  <div class="v-hr --display_block-none-block"/>
  <div class="sp_8"/>
  <article class="pa_0 article-card">
<div class="sp_16"/>
    <div class="flex justify-content_space-between align-items_center pa_16">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="audio.auto === false" icon="Audio"><Audio /></icon>
          <icon v-if="audio.auto === true" icon="AudioAuto"><AudioAuto /></icon>
        </div>
          <h5 class="--font-weight">음악을 자동재생 할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="audio.auto"
    hide-details
    inset
  ></v-switch>
</div>
<div class="sp_16"/>
<div class="article-card__overlay"/>
  </article>
  <div class="sp_16"/>

<v_errormessage :errorMessage = "errorMessage"/>
</section>
</template>

<script>
import v_errormessage from '@/components/v_errormessage.vue'
import icon from '@/components/Icons/icon.vue'
import Audio from '@/components/Icons/Audio.vue'
import AudioAuto from '@/components/Icons/AudioAuto.vue'
import v_filepond_single from '@/components/v_filepond_single.vue'
import v_flicking from '@/components/v_flicking.vue'


export default {
  components: { icon, Audio, AudioAuto, v_flicking, v_filepond_single, v_errormessage },
  props: {
    audio: { type: Object },
  },
  data: function() {
    return {
      errorMessage: '크롬의 자동재생 정책으로 인해, 크롬에서 오디오를 자동으로 재생하려면 사용자가 터치 동작을 수행해야만 오디오가 자동으로 재생될 수 있습니다.',
      tab: 'defaulted',
      v_flicking_items: [
        // 이미지 사이즈 320 * 320 1:1 비율
        { folder: 'audio', image: 'MusMus-5', value: 'https://jwpggit.github.io/storage/image/card/audio/졸업 - MusMus.mp3', title: '졸업', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-4', value: 'https://jwpggit.github.io/storage/image/card/audio/변하지 않는 것 - MusMus.mp3', title: '변하지 않는 것', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-3', value: 'https://jwpggit.github.io/storage/image/card/audio/Neon - MusMus.mp3', title: 'Neon', exp:'by MusMus', },

        { folder: 'audio', image: 'MusMus-2', value: 'https://jwpggit.github.io/storage/image/card/audio/한여름 레모네이드 - MusMus.mp3', title: '한여름 레모네이드', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-2', value: 'https://jwpggit.github.io/storage/image/card/audio/Honeymoon - MusMus.mp3', title: 'Honeymoon', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-1', value: 'https://jwpggit.github.io/storage/image/card/audio/Sweet vermouth - MusMus.mp3', title: 'Sweet vermouth', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-3', value: 'https://jwpggit.github.io/storage/image/card/audio/비오는날의 거티 - MusMus.mp3', title: '비오는날의 거티', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-4', value: 'https://jwpggit.github.io/storage/image/card/audio/Stable yet - MusMus.mp3', title: 'Stable yet', exp:'by MusMus', },

        { folder: 'audio', image: 'MusMus-1', value: 'https://jwpggit.github.io/storage/image/card/audio/기분 좋게 재즈 - MusMus.mp3', title: '기분 좋게 재즈', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-9', value: 'https://jwpggit.github.io/storage/image/card/audio/Waltzing Ajan - MusMus.mp3', title: 'Waltzing Ajan', exp:'by MusMus', },

        { folder: 'audio', image: 'MusMus-1', value: 'https://jwpggit.github.io/storage/image/card/audio/Light Up Delight - MusMus.mp3', title: 'Light Up Delight', exp:'by MusMus', },
        { folder: 'audio', image: 'musmus', value: 'https://jwpggit.github.io/storage/image/card/audio/마법의 요리 - MusMus.mp3', title: '마법의 요리', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-6', value: 'https://jwpggit.github.io/storage/image/card/audio/Flying Bed Room - MusMus.mp3', title: 'Flying Bed Room', exp:'by MusMus', },
        { folder: 'audio', image: 'musmus', value: 'https://jwpggit.github.io/storage/image/card/audio/별 콜라주 - MusMus.mp3', title: '별 콜라주', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-11', value: 'https://jwpggit.github.io/storage/image/card/audio/아침 이슬의 정원 - MusMus.mp3', title: '아침 이슬의 정원', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-11', value: 'https://jwpggit.github.io/storage/image/card/audio/오래된 좋은 날 - MusMus.mp3', title: '오래된 좋은 날', exp:'by MusMus', },

        { folder: 'audio', image: 'musmus', value: 'https://jwpggit.github.io/storage/image/card/audio/Nice Old Tradition - MusMus.mp3', title: 'Nice Old Tradition', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-10', value: 'https://jwpggit.github.io/storage/image/card/audio/Stormy Abend - MusMus.mp3', title: 'Stormy Abend', exp:'by MusMus', },
        { folder: 'audio', image: 'MusMus-10', value: 'https://jwpggit.github.io/storage/image/card/audio/inherit the Light Trail - MusMus.mp3', title: 'inherit the Light Trail', exp:'by MusMus', },
   
        { folder: 'audio', image: 'MusMus-9', value: 'https://jwpggit.github.io/storage/image/card/audio/Tre tipi di formaggio - MusMus.mp3', title: 'Tre tipi di formaggio', exp:'by MusMus', },

      ],
    };
  },
};
</script>