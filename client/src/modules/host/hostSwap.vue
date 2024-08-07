<template>
  <div>
  <buttonDefault
    class="height_64 width_100 gap_12 --border-radius_24"
    @click="swapItems"
  >
    <icon><swap /></icon> <span>순서변경</span>
  </buttonDefault>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import swap from "@/components/icon/swap";

export default {
  components: { swap },
  computed: {
    ...mapGetters({
      hostData: "getHostData",
    }),
  },
  methods: {
    swapItems() {
      // Swap the positions of the first and second items in the array
      [this.hostData.info[0], this.hostData.info[1]] = [
        this.hostData.info[1],
        this.hostData.info[0],
      ];
    },
  },
};
</script>
