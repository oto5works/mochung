<template>
  <button class="cardView">
    <div class="cardView-wrap">
      <icon class="icon_24"><images /></icon>

      <div class="cardView-content">
        <div class="title-wrap">
          <div class="title">
            <span>{{ title }}</span>
          </div>
          <div v-if="content" class="content">{{ content }}</div>
        </div>

        <div v-if="url" class="display_flex align-items_center gap_16">
          <div
            class="image-preview"
            :style="{ backgroundImage: `url('${url}')` }"
          ></div>
          <div class="display_flex flex-direction_column  text-align_left gap_4">
            <span class="font-size_13 font-weight_500">Upload Completed</span>
            <span class="text-decoration_underline">Settings</span>
          </div>
        </div>

        <div v-else class="display_flex align-items_center  gap_8">
          <buttonDefault variant="filled" height="18" :icon="true"
            ><icon class="icon_12"><upload /></icon
          ></buttonDefault>
          <span class="font-size_18 font-weight_700">Upload Image</span>
        </div>
      </div>
    </div>

    <slot></slot>
    <div class="underlay" />
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";
import images from "@/components/icon/images.vue";
import upload from "@/components/icon/upload.vue";

export default {
  components: {
    images,
    upload,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    url: {
      type: String,
    },
  },
};
</script>

<style scoped>
.cardView {
  justify-content: space-between;
  flex-direction: column;
  min-height: 72px;
  padding: 24px;
  border-radius: 16px;
}
.cardView .underlay {
  background-color: rgb(var(--mio-theme-color-primary-05));
}
.cardView:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.cardView-wrap {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 18px;
  width: 100%;
}
.title-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  align-items: center;
  min-height: 24px;
  font-size: 16px;
  font-weight: 500;
}
.content {
  font-size: 13px;
  line-height: 140%;
  color: rgb(var(--mio-theme-color-on-background-70));
  text-align: left;
}
.cardView-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 13px;
}
.image-preview {
  width: 36%;
  aspect-ratio: 1.78 / 1;
  background-position: center;
  background-size: cover;
  
}
</style>
