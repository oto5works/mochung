<template>
  <cardView icon="images" title="Main Screen Image" @click="handleClickEvent">
    <toggleSwitch v-model="homeData.fnFile" :clickEvent="false"></toggleSwitch>
  </cardView>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.homeData.fnFile = !this.homeData.fnFile;
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>
