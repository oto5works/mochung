<template>
  <selectorColor
    v-model="homeData.color"
    :options="homeColorOptions"
    title="Main Color Theme"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import selectorColor from "@/components/selector/selectorColor.vue";

export default {
  components: {
    selectorColor,
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      homeColorOptions: "getHomeColorOptions",
    }),
  },
};
</script>
