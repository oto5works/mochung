<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">동영상 업로드</h1>
        <!--<div class="sp_8"/>
        <h4 class="--text-align">업로드하지 않으면 동영상은 표시되지 않습니다.</h4>-->
      </div>
<div class="flex gap_8">
  <v-text-field type="text" :variant="input" label="링크 주소" v-model="videoInput" />
  <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="setVideoUrl()"><span>확인</span></button>
</div>
<div class="sp_8"/>
<v_errormessage :errorMessage = "errorMessage"/>
<div class="display_block--none" style="height: 58px;"/>
    </article>
    <div class="v-hr --display_block-none-block"/>
    <div class="sp_8"/>
    <article class="pa_0 article-card">
<div class="sp_16"/>
    <div class="flex justify-content_space-between align-items_center pa_16">
  <div class="flex gap_8 align-items_center">
        <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
          <icon v-if="gallery.video_auto === 'false'" icon="Video"><Video /></icon>
          <icon v-if="gallery.video_auto === 'true'" icon="VideoAuto"><VideoAuto /></icon>
        </div>
          <h5 class="--font-weight">동영상을 자동재생 할까요?</h5>
  </div>
  <v-switch
    class="switch-defaulted"
    v-model="gallery.video_auto"
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
import v_errormessage from '@/components/v_errormessage.vue'
import icon from '@/components/Icons/icon.vue'
import Video from '@/components/Icons/Video.vue'
import VideoAuto from '@/components/Icons/VideoAuto.vue'

export default {
  components: { v_errormessage, icon, Video, VideoAuto },
  props: {
    gallery: { type: Object },
    video_id: '',
    video_url: '',
    input: '',
  },
  data() {
    return {
      tab: 'defaulted',
      videoInput: '',
      errorMessage: '유튜브 또는 비메오 등 동영상 서비스에 업로드한 후 링크를 등록하면 사용 가능합니다.',
    }
  },
  methods: {
    setVideoUrl() {
      this.$emit('update:video_url', this.videoInput); 
    },  
  },
}
</script>


