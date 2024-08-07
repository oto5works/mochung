<template>
  <formBox icon="images" title="게스트용 앨범" @click="handleClickEvent">
    <div class="formBox__content">
      <v-switch
        style="pointer-events: none"
        v-model="albumData.fnAlbum"
        hide-details
        inset
      ></v-switch>
    </div>
    <albumDialog
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
    albumDialog: defineAsyncComponent(() =>
      import("@/modules/album/albumDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      albumData: "getAlbumData",
      formOption: "getFormOption",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      if (this.formOption === "form1") {
        this.albumData.fnAlbum = !this.albumData.fnAlbum;
      } else {
        if (this.albumData.fnAlbum === false) {
          this.dialog = true;
        } else {
          this.albumData.fnAlbum = false;
        }
      }
      this.handleScrollToAction("previewGallery");
    },
  },
};
</script>
