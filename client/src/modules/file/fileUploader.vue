<!-- fileUploader.vue -->
<template>
  <bottomSheet
    :dialog="dialog"
    title="업로드"
    @update:dialog="updateDialog"
    :config="true"
  >
    <ul>
      <slot></slot>
      <li v-if="!files.url" @click="triggerFileInput">
        <div class="title">
          <icon><upload /></icon>
          <div>
            <span>{{ title }} 업로드</span>
            <div class="sub-title">
              {{
                acceptedTypes.includes("video/*")
                  ? "이미지 또는 비디오"
                  : "이미지"
              }}를 업로드하세요. (최대 {{ getFileSize(maxFileSize) }})
            </div>
          </div>
        </div>
      </li>
      <li v-if="files.url" @click="this.fileViewer = true">
        <div class="title">
          <icon><search /></icon><span>이미지 보기</span>
        </div>
      </li>
      <li v-if="files.url && isImageType" @click="handleFileChange">
        <div class="title">
          <icon><magicwand /></icon><span>이미지 수정</span>
        </div>
      </li>
      <li v-if="files.url" @click="handleDelete">
        <div class="title">
          <icon><trash /></icon><span>삭제</span>
        </div>
      </li>
    </ul>

    <input
      ref="fileInput"
      type="file"
      @change="onFileChange"
      :accept="acceptedTypes.join(',')"
      style="display: none"
    />

    <fileViewer
      :config="true"
      :image="files"
      v-if="fileViewer"
      :dialog="fileViewer"
      @update:dialog="fileViewer = $event"
    />
  </bottomSheet>
</template>

<script>
import { defineAsyncComponent } from "vue";
import upload from "@/components/icon/upload";
import magicwand from "@/components/icon/magicwand";
import search from "@/components/icon/search";
import play from "@/components/icon/play";
import pause from "@/components/icon/pause";
import trash from "@/components/icon/trash";

import { create } from "@/modules/doka/doka.esm.min.js"; // Update with the correct path
import  "@/modules/doka/doka.min.css"; // Update with the correct path


export default {
  components: {
    upload,
    magicwand,
    search,
    play,
    pause,
    trash,
    fileViewer: defineAsyncComponent(() =>
      import("@/modules/file/fileViewer.vue")
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
  computed: {
    isImageType() {
      return this.files.file && this.files.file.type.startsWith("image/");
    },
    isVideoType() {
      return this.files.file && this.files.file.type.startsWith("video/");
    },
  },
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
