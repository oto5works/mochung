<template>
<div class="write__content">

<section>
  <article>
    <v-card class="card">
      <v-card-item><v-card-title>테마 스타일</v-card-title></v-card-item>
        <v_flicking class="sizeMedium" :options="theme_items" v-model:selected="main.theme" />
      <div class="sp_48"></div>
    </v-card>
  </article>  
  <article>
    <v-card class="card">
      <v-card-item><v-card-title>효과 설정</v-card-title></v-card-item>
      <v-card-text>
        <div class="s_title">효과 스타일</div>
        <dropdown :options="effect_types" v-model:selected="main.effect_type" />
        <div class="sp_32"/>
        <div class="s_title">효과 객체 설정</div>
        <group_button :options="effect_items" v-model:selected="main.effect_item" />
      </v-card-text>
      <div class="sp_48"></div>
    </v-card>
  </article> 
</section>

<section>
  <article>
    <v-card class="card">
      <v-card-item><v-card-title>배경 음악</v-card-title></v-card-item>
<v-card-text>
  <v-tabs v-model="audio_type">
    <v-tab value="default">기본음원</v-tab>
    <v-tab value="upload">직접 올리기</v-tab>
  </v-tabs>
</v-card-text>
<v-window v-model="audio_type">
<v-window-item value="default">
  <v_flicking class="sizeMedium" :options="audio_ids" v-model:selected="audio_id" />
</v-window-item>

<v-window-item value="upload">
  <file-pond 
        label-idle="<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>동영상 파일만 가능 (최대 파일 크기 5 MB)</div>"
        ref="audio_pond"
        :allowReorder= true
        :server="audio_server"
        :allowFileSizeValidation="true"
        :labelMaxFileSizeExceeded="'파일이 너무 큽니다'"
        :maxFileSize="5120000"
        :labelMaxFileSize="'최대 파일 크기는 {filesize} 입니다.'"
        accepted-file-types="audio/*"
        @updatefiles="audioUpdate"
        @reorderfiles="audioReorderFiles"
        />
</v-window-item>
</v-window>

<div class="sp_24"></div>
<v-card-text>
<div class="switch">
    <div class="switch_left">
      <icon v-if="main.audio_auto === 'autoplay'" icon="Music"><Music /></icon>
      <icon v-if="main.audio_auto === false" icon="MusicFalse"><MusicFalse /></icon>
      <span v-if="main.audio_auto === 'autoplay'">자동 재생 사용</span>
      <span v-if="main.audio_auto === false">자동 재생 사용 안 함</span>
    </div>
    <div class="switch_right">
      <v-switch
        v-model="main.audio_auto"
        color="primary"
        hide-details
        inset
        value="autoplay"
      ></v-switch>
  </div>
  </div>
</v-card-text>
<div class="sp_48"></div>

    </v-card>
  </article>

<article>

</article>
</section>




</div>
</template>

<script>
import dropdown from '@/components/dropdown.vue'
import v_flicking from '@/components/v_flicking.vue'
import group_button from '@/components/group_button.vue'

import icon from '@/components/Icons/icon.vue'
import Music from '@/components/Icons/Music.vue'
import MusicFalse from '@/components/Icons/MusicFalse.vue'

import { createImage } from '@/services/images'

  // Import Doka
import { create } from '@/components/doka/doka.esm.min.js';

// Import FilePond
import vueFilePond, { setOptions }  from "vue-filepond";

// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';

const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageEdit, FilePondPluginImageTransform, FilePondPluginMediaPreview, FilePondPluginFileValidateSize );



export default {
  components: { FilePond, dropdown, v_flicking, group_button, icon, Music, MusicFalse },
  props: {
    audio_id: '',
    main: { type: Object },
    custom: { type: Object },
  },
  computed: {
  audio_id: {
      get() {
        return this.audio_id;
      },
      set(audio_id) {
        this.$emit('update:audio_id', audio_id);
      }
  },
},
  data: function() {
    return {
      errorMessage: '',
      myDoka: create({ }),
      audio_server: {
        process: (fieldName, file, metadata, load, header, error, progress, abort) => {
          const formData = new FormData()
          formData.append('Image', file)
          createImage(formData, {
            onUploadProgress: (event) => {
              progress(event.lengthComputable, event.loaded, event.total)
            }
          })
          .then(serverId => {
            load(serverId)
            const filesPromise = this.$refs.audio_pond.prepareFiles()
              filesPromise.then((PromiseResult) => {
                console.log ('오디오 업로드 완료')
                this.$emit('update:audio_id', PromiseResult.map(result => result.file.serverId)); 
              });
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
        audio_ids: [
          { title: 'Happy Morning', value: [ "641c320870831d52e84a4669" ], like: false },
          { title: '미니멀', value: [ "63f600409d303104ef1374e0" ], like: false },
          { title: '만남', value: [ "64008f98d84a679fe6c00602" ], like: false },
          { title: '시작', value: [ "64008f98d84a679fe6c00602" ], like: false },
        ],
      theme_items: [
          { title: '꽃돌이', value: 'theme_1', like: true },
          { title: '프프리리자', value: 'theme_2', like: false },
          { title: 'Gold', value: 'theme_3', like: false },
          { title: 'Sample 4', value: 'theme_4', like: false },
          { title: 'Sample 5', value: 'theme_5', like: false },
          { title: 'Sample 6', value: 'theme_6', like: false },
          { title: 'Sample 7', value: 'theme_7', like: false },
        ],
        effect_types: ['none','falling', 'side', 'explosion' ],
        effect_items: [
          { title: '꽃가루', value: 'confetti' },
          { title: '반짝이', value: 'glitter' },
          { title: '하트', value: 'heart' },
          { title: '벚꽃', value: 'sakura' },
        ],
        audio_type: 'default',
    };
  },
  watch: {
    'main.theme'() {
      this.updateTheme();
    },
  },
  methods: {
    audioUpdate(files, origin, target) {
      this.$emit('update:audio_id', files.map((file) => file.serverId));  
              },
    audioReorderFiles(files, origin, target) {
      this.$emit('update:audio_id', files.map((file) => file.serverId)); 
    },
    updateTheme() {
        if (this.main.theme === 'theme_1') {
          this.custom.bg_color = '#fff';
          this.custom.font_fam = 'netmarble';
          this.custom.font_type = '';
          this.custom.font_align = 'left';
          this.custom.font_color = '#364933';
          this.custom.btn_type = '20px';
          this.custom.btn_shadow = '1';
          this.custom.prim_color = '#d8d0cd';
          this.custom.border = 'false';
        }
        if (this.main.theme === 'theme_2') {
          this.custom.bg_color = '#f0b00a';
          this.custom.font_fam = 'line';
          this.custom.font_type = '';
          this.custom.font_align = 'left';
          this.custom.font_color = '#441507';
          this.custom.btn_type = '12px';
          this.custom.btn_shadow = '1';
          this.custom.prim_color = '#441507';
          this.custom.border = 'false';
        }
        if (this.main.theme === 'theme_3') {
          this.custom.bg_color = '#8c7040';
          this.custom.prim_color = '#8c7040';
          this.custom.font_color = '#f8f2eb';
          this.custom.font_fam = 'eulyoo1945';
          this.custom.font_align = 'left';
          this.custom.font_type = '';
          this.custom.btn_type = '0px';
          this.custom.btn_shadow = '1';
          this.custom.border = '1px';
        }
        if (this.main.theme === 'theme_4') {
          this.custom.bg_type = 'solid'
          this.custom.bg_color = '#ffffff';
          this.custom.prim_color = '#0018bd';
          this.custom.font_color = '#0018bd';
          this.custom.font_fam = 'spoqa';
          this.custom.font_align = 'left';
          this.custom.font_type = '';
          this.custom.btn_type = '0px';
          this.custom.btn_shadow = '0';
          this.custom.border = '0px';
        }
      },    
  },
  mounted() {
    setOptions({
      files: [],
    });
  }
};
</script>