<template>
  <div>
   <titleArticle
      title="FIELDS OF EXPRESSION"
      content="Get an official Creative Cloud subscription. When you make a payment"
    >
    <template #slot>
      <toggleSwitch v-model="videoGallery.fnVideo" />
    </template>
    <button
        class="gap_8"
        @click="window.open('https://www.youtube.com', '_blank')"
      >
        <span style="color: rgb(55, 97, 251);" class="font-size_14 text-decoration_underline"
          >Shortcut to YouTube</span
        ><icon><logoYoutube /></icon>
      </button>
    </titleArticle>

    <youtubeForm v-model="videoGallery.url" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import youtubeForm from "@/components/youtube/youtubeForm.vue";
import logoYoutube from "@/components/icon/logoYoutube";

export default {
  components: { youtubeForm, logoYoutube },
  computed: {
    ...mapGetters({
      videoGallery: "getVideoGalleryData",
    }),
  },
};
</script>
