<template>
  <div>
    <titleArticle
      title="FIELDS OF EXPRESSION"
      content="Get an official Creative Cloud subscription. When you make a payment"
    >
      <template #slot>
        <toggleSwitch v-model="imageGallery.fnImage" />
      </template>
      <buttonDefault
        v-if="imageGallery.files.length > 0"
        variant="tonal"
        height="32"
        @click="toggleSwitch"
      >
        <checkbox v-model="handle" :clickEvent="false" />
        <span>순서 변경</span>
      </buttonDefault>
    </titleArticle>
    <enableImage v-if="imageGallery.files.length === 0">
      <buttonDefault variant="filled" height="40" @click="triggerFileInput">
        <span>이미지 업로드</span>
      </buttonDefault>
    </enableImage>

    <input
      ref="fileInput"
      type="file"
      @change="onFileChange"
      accept="image/*"
      style="display: none"
      multiple
    />
    <!-- Display file URL -->

    <SlickList
      v-if="imageGallery.files.length > 0"
      class="slicklist__wrap"
      axis="xy"
      :list="imageGallery.files"
      @update:list="imageGallery.files = $event"
      use-drag-handle
      helper-class="slickitem-active"
    >
      <SlickItem
        class="slickitem"
        v-for="(item, i) in imageGallery.files"
        :key="item.id"
        :index="i"
        :style="{
          backgroundImage: `url('${item.url}')`,
        }"
      >
        <DragHandle v-if="handle" class="slickAction-handle">
          <span>{{ i + 1 }}</span>
        </DragHandle>

        <div v-else class="slickAction-settings">
          <buttonDefault
            variant="tonal"
            :icon="true"
            height="32"
            @click="settingsSwitch(i)"
            label="카카오페이 등록"
            ><icon class="icon_16"><dots /></icon>
          </buttonDefault>
        </div>

        <dialogBottom
          v-if="dialog[i]"
          :dialog="dialog[i]"
          @update:dialog="dialog[i] = $event"
          title="Settings"
        >
          <listItem
            icon="magicWand"
            label="이미지 수정"
            @click="handleFileChange(i)"
          />
          <listItem icon="trash" label="이미지 삭제" @click="deleteFile(i)" />
        </dialogBottom>
      </SlickItem>

      <button v-if="!handle" class="image-upload" @click="triggerFileInput">
        <icon class="icon_16"><plus /></icon><span>이미지 업로드</span>
      </button>
    </SlickList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import plus from "@/components/icon/plus.vue";
import dots from "@/components/icon/dots.vue";
import trash from "@/components/icon/trash.vue";
import magicWand from "@/components/icon/magicWand.vue";
import enableImage from "@/components/enable/enableImage.vue";

import { SlickList, SlickItem, DragHandle } from "vue-slicksort";
import { create } from "@/modules/doka/doka.esm.min.js"; // Update with the correct path
import "@/modules/doka/doka.min.css"; // Update with the correct path

export default {
  components: {
    SlickList,
    SlickItem,
    DragHandle,
    plus,
    dots,
    trash,
    magicWand,
    enableImage,
  },
  computed: {
    ...mapGetters({
      imageGallery: "getImageGalleryData",
    }),
  },
  data() {
    const files =
      this.imageGallery && this.imageGallery.files
        ? this.imageGallery.files
        : [];
    const dialogFiles = files.map(() => false);

    return {
      maxFileSize: 1024 * 1024 * 5,
      fileSizeError: null,
      dokaInstance: null,
      handle: false,
      dialog: dialogFiles,
    };
  },
  methods: {
    toggleSwitch() {
      this.handle = !this.handle; // Use "handle" instead of "handel"
    },
    settingsSwitch(i) {
      this.dialog[i] = true;
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },

    onFileChange(e) {
      const selectedFiles = e.target.files;

      if (selectedFiles.length > 0) {
        const newFiles = Array.from(selectedFiles).map((file) => ({
          file: file,
          url: URL.createObjectURL(file),
        }));

        // Append new files to existing ones
        this.imageGallery.files = [...this.imageGallery.files, ...newFiles];

        this.fileSizeError = null; // Reset error if all file sizes are within limits
        console.log("Selected files:", this.imageGallery.files);
      } else {
        // Handle the case where no files are selected, if needed
        this.fileSizeError = "Please select at least one file.";
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
    deleteFile(index) {
      // Remove the file at the specified index from the imageGallery.files array
      this.imageGallery.files.splice(index, 1);

      // Remove the corresponding dialog entry
      this.dialog.splice(index, 1);
    },
    async handleFileChange(index) {
      console.log("handleFileChange 실행: ", index);
      const inputElement = this.imageGallery.files[index];

      console.log("inputElement && inputElement.files.length 0 보다 많다.");
      const file = inputElement.url;

      try {
        if (!this.dokaInstance) {
          console.log("dokaInstance create 시작");
          this.dokaInstance = create();
        }

        const output = await this.dokaInstance.edit(file);

        // Update the specific file at the given index
        this.imageGallery.files[index] = {
          file: output.file,
          url: URL.createObjectURL(output.file),
        };

        console.log("이미지 편집 완료", output);
      } catch (error) {
        console.error("이미지 편집 중 오류", error);
      }
    },
  },
};
</script>

<style scoped>
.slickitem-active {
  position: relative;
  z-index: 9999;
  background-color: var(--mio-theme-color-background);
  -webkit-box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-on-background), 0.3);
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-on-background), 0.3);
}
.slicklist__wrap {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  width: 100%;
}
.slickitem {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-position: center;
  background-size: cover;
  border: 1px solid rgba(var(--mio-theme-color-on-background), 0.1);
}
.slickitem img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.slickitem-active .slickitem {
  z-index: 10;
  opacity: 0.2;
}
.slickAction-handle {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 32px;
  font-weight: 700;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: rgba(var(--mio-theme-color-primary), 0.4);
  color: rgb(var(--mio-theme-color-on-primary));
}
.slickAction-settings {
  position: absolute;
  right: 4px;
  top: 4px;
}
</style>

<style scoped>
@media all and (max-width: 1023px) {
  .slicklist__wrap {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8px;
  }
}
</style>

<style scoped>
.image-upload {
  flex-direction: column;
  aspect-ratio: 1 / 1;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  gap: 4px;
  color: rgb(var(--mio-theme-color-on-primary));
  background-color: rgb(var(--mio-theme-color-primary));
  border-radius: 12px;
}
</style>
