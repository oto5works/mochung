<template>
  <div id="previewGallery" class="flex flex-direction_column align-items_center">
        <div class="sp_176" />
        <div class="previewSubTitle text-align_center">THANKS & SEE YOU SOON</div>
        <div class="sp_48" />
        <div style="gap: 64px;" class="flex">
          <button v-if="functionData.fnCopy" @click="copyPageURL"><icon><copy/></icon></button>
          <button v-if="functionData.fnShare" @click="sharePage"><icon><share/></icon></button>
          <button v-if="functionData.fnKakaotalk"><footersKakaotalk /></button>
        </div>
        <div class="sp_72" />
        <div class="font-size_10">© 2023 Untitled All Rights Reserved.</div>
<div class="sp_12"/>
  </div>
</template>

<script>
import share from '@/components/icon/share'
import copy from '@/components/icon/copy'

import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    share,
    copy,
    footersKakaotalk: defineAsyncComponent(() => import("@/views/preview/footers/footersKakaotalk")),
  },
  computed: {
    ...mapGetters({
      functionData: "getFunctionData",
      stamp: "getStamp",
    }),
  },
  methods: {
    copyPageURL() {
      // Get the current page URL
      const pageURL = window.location.href;

      // Create a temporary input element
      const inputElement = document.createElement("input");
      inputElement.value = pageURL;
      document.body.appendChild(inputElement);

      // Select and copy the text
      inputElement.select();
      document.execCommand("copy");

      // Remove the temporary input element
      document.body.removeChild(inputElement);

      // Optionally, provide feedback to the user
      alert("Page URL copied to clipboard!");
    },
    sharePage() {
      // Check if the Web Share API is supported and is on a mobile device
      if (navigator.share && window.innerWidth <= 768) {
        this.shareMobile();
      } else {
        // Fallback for desktop or browsers that do not support the Web Share API
        this.shareFallback();
      }
    },
    async shareMobile() {
      try {
        // Use the Web Share API to trigger the native sharing dialog
        await navigator.share({
          title: document.title,
          text: 'Check out this page!',
          url: window.location.href,
        });
      } catch (error) {
        // Handle any errors that may occur during sharing
        console.error('Error during sharing:', error);
        // Provide a fallback if necessary
        this.shareFallback();
      }
    },
    shareFallback() {
      // Fallback method for desktop or unsupported browsers
      // You can customize this method to provide an alternative sharing option
      alert('You can copy and share the page link: ' + window.location.href);
    },
  },
};
</script>
