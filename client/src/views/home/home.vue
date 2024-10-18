<template>
  <div class="container">
   <div class="sp_88"/>
<dropdownExample />

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dropdownExample from "@/components/dropdown/dropdownExample.vue";

export default {
  components: {
    dropdownExample
  },
  data() {
    return {
      data1: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 1200px;
}
</style>
