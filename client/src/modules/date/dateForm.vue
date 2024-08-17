<template>
    <div class="flex gap_24">
      <formField type="date" label="date" v-model="dateData.date" />
      <formField type="time" label="time" v-model="dateData.time" />
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
