<template>
    <div class="flex gap_12">
      <textField type="date" label="날짜" v-model="dateData.date" />
      <textField type="time" label="시간" v-model="dateData.time" />
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      dateData: "getDateData",
    }),
  },
};
</script>
