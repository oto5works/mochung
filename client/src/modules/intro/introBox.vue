<template>
  <cardView
    icon="envelope"
    title="인사말 설정"
    content="Use this to set the title for the section where guests can send"
    @click="handleClickEvent"
  >
    <introDialog
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
    introDialog: defineAsyncComponent(() =>
      import("@/modules/intro/introDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      introData: "getIntroData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewIntro");
    },
  },
};
</script>
