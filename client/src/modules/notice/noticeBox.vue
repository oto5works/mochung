<template>
  <formBox icon="notice" title="공지사항" @click="handleClickEvent">
    <div class="formBox__content">
      <v-switch
        style="pointer-events: none"
        v-model="noticeData.fnNotice"
        hide-details
        inset
      ></v-switch>
    </div>
    <noticeDialog
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
    noticeDialog: defineAsyncComponent(() =>
      import("@/modules/notice/noticeDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      noticeData: "getNoticeData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      if (this.noticeData.fnNotice === false) {
        this.dialog = true;
      } else {
        this.noticeData.fnNotice = false;
      }
      this.handleScrollToAction("previewNotice");
    },
  },
};
</script>
