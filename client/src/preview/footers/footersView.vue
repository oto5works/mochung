<template>
  <div id="previewFooter">
    <div class="previewFooter">
      <div class="previewFooter-button">
        <button v-if="functionData.fnShare" @click="sharePage">
          <icon class="icon_16"><share /></icon><span>Share</span>
        </button>
        <button v-if="functionData.fnCopy" @click="copyPageURL">
          <icon class="icon_16"><copy /></icon><span>copy link</span>
        </button>
      </div>
      <div class="previewFooter-content">
        <div class="agree">
          By continuing, you agree to {{ appName }}
          <span class="text-decoration_underline">Terms of Service</span>
          and <span class="text-decoration_underline">Privacy Policy</span>.
        </div>

        <div class="copyright">
          <icon class="icon_12"><copyright /></icon
          ><span>2024 {{ appName }}.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import share from "@/components/icon/share";
import copy from "@/components/icon/copy";
import copyright from "@/components/icon/copyright";

import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    share,
    copy,
    copyright,
    footersKakaotalk: defineAsyncComponent(() =>
      import("@/views/preview/footers/footersKakaotalk")
    ),
  },
  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME || "DefaultAppName",
    };
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
          text: "Check out this page!",
          url: window.location.href,
        });
      } catch (error) {
        // Handle any errors that may occur during sharing
        console.error("Error during sharing:", error);
        // Provide a fallback if necessary
        this.shareFallback();
      }
    },
    shareFallback() {
      // Fallback method for desktop or unsupported browsers
      // You can customize this method to provide an alternative sharing option
      alert("You can copy and share the page link: " + window.location.href);
    },
  },
};
</script>
<style scoped>
.previewFooter {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size_14);
  line-height: 168%;
  text-align: center;
  gap: 6em;
  padding-top: 12.25em;
  padding-bottom: 0.25em;
}
.previewFooter-button {
  display: flex;
  align-items: center;
  gap: 3em;
}
.previewFooter-button button {
  gap: 0.5em;
  font-size: var(--font-size_13);
}
.previewFooter-button button:hover {
  text-decoration: underline;
}
.previewFooter-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  width: 60%;
}
.agree {
  font-size: var(--font-size_14);
}
.copyright {
  display: flex;
  align-items: center;
  gap: 0.25em;
}
</style>
