<template>
  <div class="youtubeForm">
    <titleArticle
      title="FIELDS OF EXPRESSION"
      content="Get an official Creative Cloud subscription. When you make a payment"
    >
      <button class="youtube-link" @click="openYouTube">
        <span>Shortcut to YouTube</span><icon><logoYoutube /></icon>
      </button>
    </titleArticle>
    <formField
      v-model="url"
      @input="updateUrl"
      label="Enter YouTube URL"
      :spacing="true"
    />
    <youtubePreview v-model="url" />
  </div>
</template>

<script>
import logoYoutube from "@/components/icon/logoYoutube";
import youtubePreview from "@/components/youtube/youtubePreview.vue";

export default {
  components: { logoYoutube, youtubePreview },

  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      url: this.modelValue
    };
  },
  watch: {
    modelValue(newVal) {
      this.url = newVal;
    },
    url(newVal) {
      this.$emit('update:modelValue', newVal);
    }
  },
  methods: {
    updateUrl() {
      this.$emit('update:modelValue', this.url);
    },
    openYouTube() {
      window.open('https://www.youtube.com', '_blank');
    }
  }
};
</script>

<style scoped>
.youtube-link {
  gap: 8px;
}
.youtube-link span {
  font-size: 14px;
  text-decoration: underline;
  color: rgb(var(--mio-theme-color-secondary));
}
</style>
