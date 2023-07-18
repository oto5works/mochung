<template>
<div class="write__content">
<section>
<article>
<v-card class="card">
<v-card-item><v-card-title>갤러리 설정</v-card-title></v-card-item>
<file-pond 
        class="file-multi"
        label-idle="<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>이미지 파일만 가능 (최대 파일 크기 3 MB)</div>"
        ref="gallery_pond"
        :allowMultiple= true
        :itemInsertLocation= after
        :allowReorder= true
        :maxFiles="20"
        :server="gallery_server"
        :allowFileSizeValidation="true"
        :labelMaxFileSizeExceeded="'파일이 너무 큽니다'"
        :maxFileSize="30720000"
        :labelMaxFileSize="'최대 파일 크기는 {filesize} 입니다.'"
        accepted-file-types="image/*"
        :imageEditEditor="myDoka"
        @updatefiles="galleryUpdate"
        @reorderfiles="galleryReorderFiles"
        />
<div class="sp_24"></div>
<v-card-text>
    <div class="s_title">갤러리 타입</div>
    <div class="group_button">
<v-btn-toggle mandatory class="v-card-flex_item" v-model="gallery.gallery_type">
  <v-btn class="group_button__content" value="swipe"><icon icon="Swipe"><Swipe /></icon>스와이프</v-btn>
  <v-btn class="group_button__content" value="thumb"><icon icon="ThumbSwipe"><ThumbSwipe /></icon>썸네일</v-btn>
  <v-btn class="group_button__content" value="Grid"><icon icon="Grid"><Grid /></icon>그리드</v-btn>
</v-btn-toggle>
</div>
  
</v-card-text>

<div class="sp_32"/>
</v-card>
</article>

<article>
<v-card class="card">
<v-card-item><v-card-title>동영상</v-card-title></v-card-item>
<v-card-text>
<v-tabs v-model="gallery.video_type">
    <v-tab value="url">링크로 등록하기</v-tab>
    <v-tab value="self">직접 올리기</v-tab>
</v-tabs>
</v-card-text> 
<v-window v-model="gallery.video_type">
  <v-window-item value="url">
    <div class="sp_36"></div>
      <v-card-text>
          <div class="v-card-flex">
                <v-text-field label="링크 주소" type="text" v-model="videoInput" />
                <v-btn class="text-btn" @click="setVideoUrl()">확인</v-btn>
          </div>
          <div class="warning">
              <icon icon="Warning"><Warning /></icon>
              <p><a href="https://www.youtube.com/" target="_blank">유튜브</a> 또는 <a href="https://vimeo.com/ko/" target="_blank">비메오</a> 등 동영상 서비스에 업로드 후 주소를 등록하여 사용 할 수 있습니다.</p>
          </div>
      </v-card-text>
  </v-window-item>
<v-window-item value="self">    
  <file-pond 
        label-idle="<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>동영상 파일만 가능 (최대 파일 크기 5 MB)</div>"
        ref="video_pond"
        :allowReorder= true
        :server="video_server"
        :allowFileSizeValidation="true"
        :labelMaxFileSizeExceeded="'파일이 너무 큽니다'"
        :maxFileSize="5120000"
        :labelMaxFileSize="'최대 파일 크기는 {filesize} 입니다.'"
        accepted-file-types="video/*"
        @updatefiles="videoUpdate"
        @reorderfiles="videoReorderFiles"
        />
</v-window-item>

</v-window>
<div class="sp_24"></div>
<v-card-text>
<div class="switch">
    <div class="switch_left">
      <icon v-if="gallery.video_auto === 'autoplay'" icon="Play"><Play /></icon>
      <icon v-if="gallery.video_auto === false" icon="PlayFalse"><PlayFalse /></icon>
      <span v-if="gallery.video_auto === 'autoplay'">자동 재생 사용</span>
      <span v-if="gallery.video_auto === false">자동 재생 사용 안 함</span>
    </div>
    <div class="switch_right">
      <v-switch
        v-model="gallery.video_auto"
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
</section>
</div>
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Warning from '@/components/Icons/Warning.vue'
import Swipe from '@/components/Icons/Swipe.vue'
import ThumbSwipe from '@/components/Icons/ThumbSwipe.vue'
import Grid from '@/components/Icons/Grid.vue'


import Play from '@/components/Icons/Play.vue'
import PlayFalse from '@/components/Icons/PlayFalse.vue'

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
  components: { FilePond, icon, Warning, Swipe, ThumbSwipe, Grid, Play, PlayFalse },
  props: {
    gallery_id: { type: Array },
    video_id: { type: Array },
    video_url: '',
    gallery: { type: Object },
  },
  data: function() {
    return { 
      videoInput: '',
      myDoka: create({ }),
      gallery_server: {
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
            const filesPromise = this.$refs.gallery_pond.prepareFiles()
              filesPromise.then((PromiseResult) => {
                this.$emit('update:gallery_id', PromiseResult.map(result => result.file.serverId)); 
              });
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
      video_server: {
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
            const filesPromise = this.$refs.video_pond.prepareFiles()
              filesPromise.then((PromiseResult) => {
                this.$emit('update:video_id', PromiseResult.map(result => result.file.serverId)); 
              });
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
    };
  },
  methods: {
    setVideoUrl() {
      this.$emit('update:video_url', this.videoInput); 
    },    
    galleryUpdate(files, origin, target) {
      this.$emit('update:gallery_id', files.map((file) => file.serverId));  
              },
    galleryReorderFiles(files, origin, target) {
      this.$emit('update:gallery_id', files.map((file) => file.serverId)); 
    },
    videoUpdate(files, origin, target) {
      this.$emit('update:video_id', files.map((file) => file.serverId));  
              },
    videoReorderFiles(files, origin, target) {
      this.$emit('update:video_id', files.map((file) => file.serverId)); 
    },
},
  mounted() {
    setOptions({
      files: [],
    });
    this.videoInput = this.video_url
  }
};
</script>