<template>
  <cardView
    :alt="true"
    icon="date"
    title="Wedding Date"
    :content="`${dateData.date} ${dateData.time}`"
    @click="handleClickEvent"
  >
    <dateDialog
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
    dateDialog: defineAsyncComponent(() =>
      import("@/modules/date/dateDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewCalendar");
    },
  },
};
</script>
