<!-- fileUploader.vue -->
<template>
  <dialogBottom
    :dialog="dialog"
    title="파일 업로드"
    @update:dialog="updateDialog"
  >
    <slot></slot>

    <listItem
      icon="upload"
      label="이미지 업로드"
      :content="
        '이미지를 업로드하세요. (최대 ' + getFileSize(maxFileSize) + ')'
      "
      v-if="!files.url"
      @click="triggerFileInput"
    />

    <listItem
      icon="search"
      label="이미지 보기"
      v-if="files.url"
      @click="this.fileViewer = true"
    />

    <listItem
      icon="magicwand"
      label="이미지 수정"
      v-if="files.url"
      @click="handleFileChange"
    />

    <listItem
      icon="trash"
      label="이미지 삭제"
      v-if="files.url"
      @click="handleDelete"
    />

    <input
      ref="fileInput"
      type="file"
      @change="onFileChange"
      :accept="acceptedTypes.join(',')"
      style="display: none"
    />

    <fileViewer
      :image="files"
      v-if="fileViewer"
      :dialog="fileViewer"
      @update:dialog="fileViewer = $event"
    />
  </dialogBottom>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { create } from "@/modules/doka/doka.esm.min.js"; // Update with the correct path
import "@/modules/doka/doka.min.css"; // Update with the correct path

export default {
  components: {
    fileViewer: defineAsyncComponent(() =>
      import("@/components/file/fileViewer.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
    title: {
      type: String,
      default: () => "",
    },
    files: { type: Object },
    acceptedTypes: {
      type: Array,
      default: () => ["image/*"],
    },
    maxFileSize: {
      type: Number,
      default: () => 1024 * 1024 * 5, // Default max file size: 5 MB
    },
  },
  data() {
    return {
      fileSizeError: null,
      dokaInstance: null,
      fileViewer: false,
    };
  },
  computed: {},
  methods: {
    handleDelete() {
      const fileObject = {
        file: null,
        url: null,
      };
      this.$emit("update:files", fileObject);
      this.$emit("update:dialog", false);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    /* 이미지 업로드 시 doka 실행 후 저장 */
    async onFileChange(e) {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.size <= this.maxFileSize) {
        this.localFiles = {
          file: selectedFile,
          url: URL.createObjectURL(selectedFile),
        };

        this.fileSizeError = null; // Reset error if file size is within limits

        // 파일이 선택된 후 dokaInstance 실행
        try {
          if (!this.dokaInstance) {
            this.dokaInstance = create();
          }

          const output = await this.dokaInstance.edit(selectedFile);

          // 편집된 이미지로 파일 업데이트
          const fileObject = {
            file: output.file,
            url: URL.createObjectURL(output.file),
          };
          this.$emit("update:files", fileObject);

          console.log("이미지 편집 완료", output);
          this.$emit("update:dialog", false);
        } catch (error) {
          alert("이미지 편집 중 오류");
          console.error("이미지 편집 중 오류", error);
        }
      } else {
        this.localFiles = {
          file: null,
          url: null,
        };
        this.fileSizeError = `파일 크기는 ${this.getFileSize(
          this.maxFileSize
        )}보다 작아야 합니다`;
        alert(this.fileSizeError);
      }
    },

    /* 구 onFileChange 
    onFileChange(e) {
      const selectedFile = e.target.files[0];
      if (selectedFile && selectedFile.size <= this.maxFileSize) {
        const fileObject = {
          file: selectedFile,
          url: URL.createObjectURL(selectedFile),
        };
        console.log("파일정보: ", selectedFile);
        console.log("url정보: ", fileObject.url);

        this.$emit("update:files", fileObject);
        this.fileSizeError = null; // Reset error if file size is within limits
        this.$emit("update:dialog", false);
        
      } else {
        const fileObject = {
          file: null,
          url: null,
        };
        this.$emit("update:files", fileObject);
        this.fileSizeError = `파일 크기는 ${this.getFileSize(
          this.maxFileSize
        )}보다 작아야 합니다`;
        alert(this.fileSizeError);
      }
    },
    */
    getFileSize(size) {
      const units = ["B", "KB", "MB", "GB"];
      let i = 0;
      while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
      }
      return `${size.toFixed(2)} ${units[i]}`;
    },

    async handleFileChange() {
      //e.stopPropagation();
      console.log("handleFileChange");

      try {
        const file = this.files.url; // Ensure this line is correct or replace it with appropriate file retrieval logic.

        if (!this.dokaInstance) {
          this.dokaInstance = create();
        }

        const output = await this.dokaInstance.edit(file);

        const fileObject = {
          file: output.file,
          url: URL.createObjectURL(output.file),
        };

        this.$emit("update:files", fileObject);

        // 편집된 이미지로 파일 업데이트
        console.log("이미지 편집 완료", output);
        this.$emit("update:dialog", false);
      } catch (error) {
        alert("이미지 편집 중 오류");
        console.error("이미지 편집 중 오류", error);
      }
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
