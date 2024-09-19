<template>
  <cardView
    icon="images"
    title="Main Screen Image"
    content="Use this to set the title for the section where guests can send"
    @click="handleClickEvent"
  >
    <toggleSwitch v-model="homeData.fnFile" :clickEvent="false"></toggleSwitch>
    <homeFileDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    homeFileDialog: defineAsyncComponent(() =>
      import("@/modules/homeFile/homeFileDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>
