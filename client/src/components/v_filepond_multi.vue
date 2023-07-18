<template>
<section>

<article>
  <div class="title__wrap pa_16">
    <h1 class="--text-align --font-weight">메인 이미지 설정</h1>
  </div>

  <v-tabs class="pa_16" v-model="main.image_type">
    <v-tab value="image"><span>직접 올리기</span></v-tab>
    <v-tab value="illust"><span>기본 일러스트</span></v-tab>
  </v-tabs>


      <v-window v-model="main.image_type">

      <v-window-item value="image">    
        <div class="main-pond">
          <file-pond 
        label-idle="<div class='filepond-icon__wrap'><div class='filepond-icon__content'></div></div><span class='filepond--label-action'>업로드 하려면 클릭</span><br/>또는 드래그 앤 드롭 <div class='filepond--label-text'>동영상 파일만 가능 (최대 파일 크기 5 MB)</div>"
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

      <v-window-item value="illust">
        <v_flicking class="main size_160" :options="v_flicking_items" v-model:selected="main.illust" />
       <div style="height: 17px;"/>
      </v-window-item>
    </v-window>
  </article>
  <div class="v-hr --display_block-none-block"/>
</section>

</template>

<script>
import v_flicking from '@/components/v_flicking.vue'
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
  components: { FilePond, v_flicking },
  props: {
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
      tab: 'defaulted',
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
      v_flicking_items: [
        // 이미지 사이즈 320 * 400 4:5 비율
        { folder: 'main_image', image: 'Untitled-1', value: 'alive1' },
        { folder: 'main_image', image: 'Untitled-2', value: 'alive2' },
        { folder: 'main_image', image: 'Untitled-3', value: 'alive3' },
        { folder: 'main_image', image: 'Untitled-4', value: 'alive4' },
        { folder: 'main_image', image: 'Untitled-5', value: 'alive5' },
        { folder: 'main_image', image: 'Untitled-6', value: 'alive6' },
      ],
    };
  },
  methods: {
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