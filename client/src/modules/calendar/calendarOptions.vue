<template>
  <div class="fnOption">
    <buttonOption
      v-for="(item, index) in calendarOptions"
      :key="index"
      @click="selectOption(item)"
      :class="{ selected: item.value === dateData.calendar }"
      :font3="item.title"
    >
      <div class="fnOption-image">
        <div class="fnOption-component">
          <component :is="item.value" date="2024-12-01">
            <calendarDefaulted />
          </component>
        </div>
      </div>
    </buttonOption>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/modules/functions/fnOption.scss";

export default {
  components: {
    calendar1: defineAsyncComponent(() => import("@/modules/calendar/calendar1.vue")),
    calendar2: defineAsyncComponent(() => import("@/modules/calendar/calendar2.vue")),
    calendar3: defineAsyncComponent(() => import("@/modules/calendar/calendar3.vue")),
    calendarDefaulted: defineAsyncComponent(() => import("@/modules/calendar/calendarDefaulted.vue")),
  },
  computed: {
    ...mapGetters({
      dateData: "getDateData",
      calendarOptions: "getCalendarOptions",
    }),
  },
  methods: {
    selectOption(option) {
      this.dateData.calendar = option.value;
      this.$emit("update:dialog", false);
    },
  },
};
</script>

<style scoped>
.fnOption-component {
  position: absolute;
  left: 50%; /* 가운데 정렬을 위해 left 값을 50%로 조정합니다. */
  top: 50%;
  width: 480px;
  height: 480px;
  transform: translate(-50%, -50%) scale(0.35);
}
</style>

<style scoped>
@media all and (max-width:479px) {
  .fnOption-component {
    transform: translate(-50%, -50%) scale(0.28);
  }
}
</style>
 