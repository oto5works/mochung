<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="달력 스타일"
    :config="true"
  >
    <article>
      <calendarOptions @update:dialog="updateDialog" />
    </article>
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    calendarOptions: defineAsyncComponent(() =>
      import("@/modules/calendar/calendarOptions.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    selectOption(option) {
      this.dateData.calendar = option.value;
      this.updateDialog(false);
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>

<style scoped>
.button-option::before {
  z-index: 0;
}
.setOption-image {
  display: flex;
  align-items: center;
  justify-content: center;
}
.calendar-wrap {
  position: relative;
  width: 80%;
  height: 80%;
}
.calendar-item {
  position: absolute;
  content: "";
  top: 0%;
  left: 0%;
  width: 340%;
  height: 340%;
  transform-origin: center;
  transform: scale(0.34) translate(-104%, -100%);
  
}
</style>
