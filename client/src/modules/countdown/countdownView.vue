<template>
  <div class="width_100">
    <flip v-if="shouldRenderFlip" :date="date" :time="time" />
  </div>
</template>

<script>
import "@/modules/countdown/flip.scss";
import sal from "sal.js";
import flip from "@/modules/countdown/flip.vue";

export default {
  components: { sal, flip },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    });
  },
  props: {
    date: { type: String },
    time: { type: String },
  },
  data() {
    return {
      shouldRenderFlip: true,
    };
  },
  watch: {
    date: function () {
      this.reloadFlip();
    },
    time: function () {
      this.reloadFlip();
    },
  },
  methods: {
    reloadFlip() {
      this.shouldRenderFlip = false;
      this.$nextTick(() => {
        this.shouldRenderFlip = true;
      });
    },
  },
};
</script>
