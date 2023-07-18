<template>
  <div> 
    히히ID~~~{{ id }}   <br/>

    우히히 {{ errorMessage }}
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
        :imageEditEditor="myDoka"
        @updatefiles="mainUpdate"
        @reorderfiles="mainReorderFiles"
        />
        </div>
</div>
</template>

<script>
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
  components: { FilePond },
  props: {
    id: { type: String },
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
    console.log ('이히히', serverId)
    this.$emit('update:id', serverId); // deselect the option
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
    };
  },
  mounted() {
    setOptions({
      files: [],
    });
  }
};
</script>