<template>
  <div class="write__content">
<section>
  <article>
    <v-card class="card card-flex-unset">
      <v-card-item><v-card-title>청첩장 제목</v-card-title></v-card-item>
      <v-card-text>
        <v-text-field type="text" label="제목" v-model="main.title" />
      </v-card-text>
      <div class="sp_48"></div>
    </v-card>
    <v-card class="card card-flex-unset">
      <v-card-item><v-card-title>청첩장 주소 설정</v-card-title></v-card-item>
<v-card-text v-if="main.url_check === 'default'">
  <div class="link__wrap border-radius normal">
    <div class="link__content">
      <icon icon="Link"><Link /></icon>
      <div class="text__wrap">
        <h4 class="bold">ondo.cards/ </h4>
        <div class="sp_8" />
        <h2>입력한 주소가 청첩장 주소로 사용 됩니다.</h2>
      </div>
    </div>
  </div>      
  <div class="sp_32" />
  <div class="v-card-flex">
    <v-text-field 
      type="text" 
      label="주소" 
      v-model="main.url" 
      @input="validateUrl"
      :error-messages="errorMessage"
    />
    <v-btn class="text-btn" @click="setUrlDuplicate()">중복 확인</v-btn>
  </div>   
</v-card-text>

<v-card-text v-if="main.url_check === 'false'">
  <div class="link__wrap border-radius false">
    <div class="link__content">
      <icon icon="FailedAni"><FailedAni /></icon>
      <div class="text__wrap">
        <h4 class="bold">ondo.cards/<span class="underline">{{ main.url }}</span></h4>
        <div class="sp_8" />
        <h2>중복하는 주소가 존재 합니다.</h2>
      </div>
    </div>
  </div>
  <div class="sp_32" />
  <div class="v-card-flex">
    <v-text-field 
      type="text" 
      label="주소" 
      v-model="main.url" 
      @input="validateUrl"
      :error-messages="errorMessage"
    />  
    <v-btn class="text-btn" @click="setUrlDuplicate()">중복 확인</v-btn>
  </div>   
</v-card-text>

<v-card-text v-if="main.url_check === 'true'">
  <div class="link__wrap border-radius true">
    <div class="link__content">
      <icon icon="SuccessAni"><SuccessAni /></icon>
      <div class="text__wrap">
        <h4 class="bold">ondo.cards/{{ main.url }}</h4>
        <div class="sp_8" />
        <h2>주소 등록 완료</h2>
      </div>
    </div>
  </div>
</v-card-text>

<div class="sp_48" />
</v-card>
</article>

<article>
    <v-card class="card">
      <v-card-item><v-card-title>메인 이미지 업로드</v-card-title></v-card-item>
      <v-card-text>
        <v-tabs v-model="main_tab">
          <v-tab value="upload">직접 올리기</v-tab>
          <v-tab value="default">기본 이미지</v-tab>
        </v-tabs>
      </v-card-text>
      <v-window v-model="main_tab">
      <v-window-item value="upload">    
        <div class="main-pond">
          <file-pond 
        label-idle="<span class='filepond--label-action'>업로드 하려면 클릭</span> 또는 드래그 앤 드롭 <div class='filepond--label-text'>동영상 파일만 가능 (최대 파일 크기 5 MB)</div>"
        ref="main_pond"
        :allowReorder= true
        :server="main_server"
        :allowFileSizeValidation="true"
        :labelMaxFileSizeExceeded="'파일이 너무 큽니다'"
        :maxFileSize="5120000"
        :labelMaxFileSize="'최대 파일 크기는 {filesize} 입니다.'"
        accepted-file-types="video/*, image/*"
        @updatefiles="mainUpdate"
        @reorderfiles="mainReorderFiles"
        />
        </div>
      </v-window-item>
      <v-window-item value="default">
        <div class="sp_64"></div>
        <v_flicking class="sizeMedium" :options="main_ids" v-model:selected="main_id" />
      </v-window-item>
    </v-window>
    </v-card>
  </article>  
</section>

</div>
</template>

<script>
import v_flicking from '@/components/v_flicking.vue'

import icon from '@/components/Icons/icon.vue'
import Warning from '@/components/Icons/Warning.vue'
import Link from '@/components/Icons/Link.vue'
import SuccessAni from '@/components/Icons/SuccessAni.vue'
import FailedAni from '@/components/Icons/FailedAni.vue'

import { urlDuplicate } from '@/services/posts'

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
  components: { FilePond, v_flicking, icon, Warning, Link, SuccessAni, FailedAni },
  props: {
    main_id: { type: Array },
    main: { type: Object },
  },
  computed: {
    main_id: {
      get() {
        return this.main_id;
      },
      set(main_id) {
        this.$emit('update:main_id', main_id);
      }
  },
},
  data: function() {
    return {
      errorMessage: '',
      myDoka: create({ }),
      main_server: {
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
            const filesPromise = this.$refs.main_pond.prepareFiles()
              filesPromise.then((PromiseResult) => {
                console.log ('메인 이미지 업로드 완료')
                this.$emit('update:main_id', PromiseResult.map(result => result.file.serverId)); 
              });
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
      main_tab: 'default',
      main_ids: [
      { value: [ "6427eeffedf793bc635a2282" ] },
          { value: [ "64258602c71aed65c1a527c9" ] },
          { value: [ "6425862ec71aed65c1a527cc" ] },
          { value: [ "64258708edf793bc635a224e" ] },
          { value: [ "6425873bedf793bc635a2253" ] },
          { value: [ "100000000000000000000003" ] },
          { value: [ "100000000000000000000004" ] },
          { value: [ "100000000000000000000005" ] },
          { value: [ "100000000000000000000006" ] },
        ],
    };
  },
  methods: {
    validateUrl() {
      // Remove any non-English or non-numeric characters from the input value
      this.main.url = this.main.url.replace(/[^a-zA-Z0-9]/g, '')

      // Limit the input to a maximum of 10 characters
      if (this.main.url.length > 10) {
        this.main.url = this.main.url.substring(0, 10)
        this.errorMessage = '' // Clear any existing error message
          return // Allow the key press to proceed
      }
      this.errorMessage = '영문 또는 숫자만 10자 이내로 입력해주세요.'
    },
    setUrlDuplicate() {
      urlDuplicate(this.main.url)
        .then((res) => {
          this.main.url_check = res
          console.log(res)
        })
        .catch((error) => {
          // Handle errors that may occur during the duplicate check
          console.error(error)
        })
    },
    mainUpdate(files, origin, target) {
      this.$emit('update:main_id', files.map((file) => file.serverId));  
              },
    mainReorderFiles(files, origin, target) {
      this.$emit('update:main_id', files.map((file) => file.serverId)); 
    }, 
  },
  mounted() {
    setOptions({
      files: [],
    });
  }
};
</script>