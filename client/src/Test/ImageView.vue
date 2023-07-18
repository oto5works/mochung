<template>
  <div>
    <p>파일폰두두두두</p>
    <FilePond
          @onActivateFileClick="onActivateFileClick"
          @onRemoveFileClick="onRemoveFileClick"
          @setOptionsOnAddFile="setOptionsOnAddFile"
          @FilePondInit="(output) => FilePondInit(output)"          
          v-model:output="output" 
      />
      <p>얘는 왜안나옴???</p>
      <img src="" class="main_img" />
{{ output }}
  </div>
</template>

<script>
import FilePond from '@/Test/FilePond.vue'

export default {
  components: { FilePond },
  
  methods: {
    FilePondInit(output) {
      document.querySelector("img.main_img").src = URL.createObjectURL(output);
      console.log('output', output);
    },
    setOptionsOnAddFile() {
        setOptions({
            server: {
            url: FILE_UPLOAD_SERVER_URL,
            process: {
                url:
                process.env.api.file.uploadFile +
                "?folderName=" +
                this.id +
                "&&id=" +
                this.$store.state.fileId,
                method: "POST",
                headers: {
                Authorization: "Bearer " + cookies.get("x-access-token"),
                },
                onerror: (response) => response.data,
                onload: (response) => {
                response = JSON.parse(response);
                //  this emit is storing value into last component`s v-model in a page.
                this.$store.commit("SET_FILES", response.data.filesUploaded);
                this.$emit("input", [
                    // ...this.value,
                    ...response.data.filesUploaded,
                ]);
                this.$store.commit("SET_FILE_ID", "");
                return response.data.filesUploaded[0];
                },
            },
            },
        });
},
}
};
</script>