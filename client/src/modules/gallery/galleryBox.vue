<template>
  <formBox icon="images" title="갤러리" @click="handleClickEvent">
    <div class="formBox__content">
      <v-switch
        style="pointer-events: none"
        v-model="galleryData.fnGallery"
        hide-details
        inset
      ></v-switch>
    </div>
    <galleryDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    galleryDialog: defineAsyncComponent(() =>
      import("@/modules/gallery/galleryDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      galleryData: "getGalleryData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      if (this.galleryData.fnGallery === false) {
        this.dialog = true;
      } else {
        this.galleryData.fnGallery = false;
      }
      this.handleScrollToAction("previewGallery");
    },
  },
};
</script>
