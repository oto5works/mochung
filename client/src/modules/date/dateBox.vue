<template>
  <formBox icon="heart" title="예식일" @click="dialog = true">
      <div class="flex align-items_center gap_8">
        <icon class="icon_16"><calendar /></icon><p>{{ dateData.date }}</p>
      </div>
      <div class="flex align-items_center gap_8">
        <icon class="icon_16"><clock /></icon><p>{{ dateData.time }}</p>
      </div>
    <dateDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import clock from "@/components/icon/clock";
import calendar from "@/components/icon/calendar";

export default {
  components: {
    clock,
    calendar,
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
};
</script>
