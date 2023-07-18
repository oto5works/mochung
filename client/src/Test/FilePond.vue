<template>
<file-pond 
        ref="pond"
        :imageEditEditor="myDoka"
        @updatefiles="handleFilePondUpdate"
        @reorderfiles="handleReorderFiles"
        />
</template>

<script>
import { createImage } from '@/services/images'

  // Import Doka
import { create } from '@/components/doka/doka.esm.min.js';
import '@/components/doka/doka.min.css';

// Import FilePond
import vueFilePond, { setOptions }  from "vue-filepond";

// Import plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type/dist/filepond-plugin-file-validate-type.esm.js";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginMediaPreview from 'filepond-plugin-media-preview';

// Import styles
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';

const FilePond = vueFilePond( FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginImageEdit, FilePondPluginImageTransform, FilePondPluginMediaPreview );


export default {
  components: { FilePond },
  props: {
    _id: { type: Array },
    labelIdle: '',
    maxFiles: '',
    allowMultiple: '',
  },
  data: function() {
    return { myDoka: create({ }),
    };
  },
  methods: {
    handleFilePondUpdate(files, origin, target) {
      this.$emit('update:_id', files.map((file) => file.serverId));  
              },
    handleReorderFiles(files, origin, target) {
      this.$emit('update:_id', files.map((file) => file.serverId)); 
    },
},
  mounted() {
    setOptions({
      labelIdle: this.labelIdle,
      allowMultiple: this.allowMultiple,
      maxFiles: this.maxFiles,
      files: [],
      server: {
        process: (fieldName, file, metadata, load, header, error, progress, abort) => {
          const formData = new FormData()
          formData.append('Image', file)
          console.log ('dhodksehoa? 완료?')
          createImage(formData, {
            onUploadProgress: (event) => {
              progress(event.lengthComputable, event.loaded, event.total)
            }
          })
          .then(serverId => {
            console.log ('업로드 완료?')

            load(serverId)
            console.log (serverId)
            const filesPromise = this.$refs.pond.prepareFiles()
              filesPromise.then((PromiseResult) => {
                this.$emit('update:_id', PromiseResult.map(result => result.file.serverId)); 
                console.log (PromiseResult)
              });
          })
          .catch(error => {
            console.log(error)
            error('Error uploading file')
          })
        },
      },
    });
  }
};
</script>