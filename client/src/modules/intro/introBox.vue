<template>
  <formBox
    icon="envelope"
    title="인사말"
    :arrow="false"
    @click="handleClickEvent"
  >
    <p>{{ title.introData }}</p>
    <introDialog
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
    introDialog: defineAsyncComponent(() =>
      import("@/modules/intro/introDialog.vue")
    ),
  },
  computed: {
    ...mapGetters({
      title: "getTitle",
    }),
  },
  data() {
    return {
      dialog: false,
    };
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
