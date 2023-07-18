<template>
  <div class="main-pond">
    <file-pond 
      :label-idle="labelIdle"
      :accepted-file-types="acceptedFileTypes"
      ref="main_pond"
      :server="server"
      :imageEditEditor="myDoka"
      :allowFileSizeValidation="true"
      :labelMaxFileSizeExceeded="'파일이 너무 큽니다'"
      :maxFileSize="5120000"
      :labelMaxFileSize="'최대 파일 크기는 {filesize} 입니다.'"
      @removefile="removeFile"
    />
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
    filePond: { type: Object },
    type: { type: String },
    acceptedFileTypes: { type: String },
    labelIdle: { type: String },
  },
  data: function() {
    return {
      errorMessage: '',
      myDoka: create({ }),
      server: {
        process: (fieldName, file, metadata, load, header, error, progress, abort) => {
          const formData = new FormData()
          formData.append('Image', file, this.type);
          createImage(formData, {
            onUploadProgress: (event) => {
              progress(event.lengthComputable, event.loaded, event.total)
            }
          })
          .then(callback => {
            load(callback)
    this.$emit('update:filePond', callback);
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
    removeFile(files, origin, target) {
      this.$emit('update:filePond', '');
              },
  },
  mounted() {
    setOptions({
      files: [],
    });
  }
};
</script>