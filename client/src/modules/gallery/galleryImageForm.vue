<!-- fileUploader.vue -->
<template>
  <div>
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
      class="slicklist__wrap"
      axis="xy"
      :list="imageGallery.files"
      @update:list="imageGallery.files = $event"
      use-drag-handle
      helper-class="slickitem-active"
    >
      <SlickItem
        class="slickitem --border-radius_16"
        v-for="(item, i) in imageGallery.files"
        :key="item.id"
        :index="i"
        :style="{
          backgroundImage: `url('${item.url}')`,
        }"
      >
        <div class="slickAction__wrap">
          <DragHandle class="button-slickAction"
            ><icon><hand /></icon
          ></DragHandle>
          <div class="slickAction__item">
            <button class="button-slickAction" @click="handleFileChange(i)">
              <icon><magicWand /></icon>
            </button>
            <button class="button-slickAction" @click="deleteFile(i)">
              <icon><trash /></icon>
            </button>
          </div>
        </div>
      </SlickItem>
      <buttonDefault
        class="--border-radius_16"
        @click="triggerFileInput"
      >
        <icon><plus /></icon><span>이미지 업로드</span>
      </buttonDefault>
    </SlickList>
    <div class="sp_24" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import plus from "@/components/icon/plus.vue";
import list from "@/components/icon/list.vue";
import hand from "@/components/icon/hand.vue";
import trash from "@/components/icon/trash.vue";
import magicWand from "@/components/icon/magicWand.vue";

import { SlickList, SlickItem, DragHandle } from "vue-slicksort";
import { create } from "@/modules/doka/doka.esm.min.js"; // Update with the correct path
import  "@/modules/doka/doka.min.css"; // Update with the correct path

export default {
  components: {
    SlickList,
    SlickItem,
    DragHandle,
    plus,
    list,
    hand,
    trash,
    magicWand,
  },
  computed: {
    ...mapGetters({
      imageGallery: "getImageGalleryData",
    }),
  },
  data() {
    return {
      maxFileSize: 1024 * 1024 * 5,
      fileSizeError: null,
      dokaInstance: null,
    };
  },
  methods: {
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
  background-color: var(--background-color);
  -webkit-box-shadow: 0 10px 20px -10px var(--background-on);
  box-shadow: 0 10px 20px -10px var(--background-on);
}
.slicklist__wrap {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
  width: 100%;
}
.buttonDefault {
  flex-direction: column;
  aspect-ratio: 1 / 1;
  gap: 6px;
}
.uploading {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  color: var(--primary-color);
}
.uploading::before {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  opacity: 0.15;
}
.slickitem {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background-position: center;
  background-size: cover;
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

/*-- 아이콘 영역 --*/
.slickAction__wrap {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 6px;
}
.slickAction__item {
  position: absolute;
  bottom: 6px;
  right: 6px;
  display: flex;
  gap: 4px;
}
.button-slickAction {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--primary-on);
  cursor: pointer;
  z-index: 1;
}
.button-slickAction svg {
  width: 18px;
  height: 18px;
}

.button-slickAction::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 24px;
  background-color: var(--primary-color);
  z-index: -1;
  opacity: 0.4;
}
.button-slickAction:hover::before {
  opacity: 0.6;
}
.fileuploadMulti__wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 64px;
  overflow: hidden;
  cursor: pointer;
  color: var(--primary-color);
}
.fileuploadMulti__wrap::before {
  position: absolute;
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--primary-color);
  opacity: 0.15;
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
