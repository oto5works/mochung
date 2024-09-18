<template>
  <button class="cardViewTitle">
    <div class="cardViewTitle-wrap">
      <icon class="icon_24"><textT /></icon>

      <div class="cardViewTitle-content">
        <div class="title-wrap">
          <div class="title">
            <span>{{ title }}</span>
          </div>
          <div class="content">Use this to set the title for the section where guests can send</div>
        </div>

        <div class="value-wrap">
          <span class="value">{{ modelValue }}</span>
          <buttonDefault variant="filled" height="18" :icon="true"
            ><icon class="icon_12"><pencil /></icon
          ></buttonDefault>
        </div>
      </div>
    </div>

    <slot></slot>
    <div class="underlay" />
  </button>
</template>

<script>
import { defineAsyncComponent } from "vue";
import textT from "@/components/icon/textT.vue";
import pencil from "@/components/icon/pencil.vue";

export default {
  components: {
    textT,
    pencil,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.cardViewTitle {
  justify-content: space-between;
  flex-direction: column;
  min-height: 72px;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
}
.cardViewTitle .underlay {
  background-color: rgb(var(--mio-theme-color-primary-05));
}
.cardViewTitle:hover .underlay {
  background-color: rgb(var(--mio-theme-color-primary-10));
}
.cardViewTitle-wrap {
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
  gap: 4px;
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
.value-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  border-bottom: 1px solid rgb(var(--mio-theme-color-primary));
}
.value {
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  min-height: 18px;
}
.cardViewTitle-content {
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
