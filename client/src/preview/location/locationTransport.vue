<template>
  <div>
    <tabs class="width_100 tabs" :options="transportData" v-model="tab" />
    <div v-if="tab !== ''">
      <div
        v-for="(option, index) in transportData"
        :key="index"
        v-show="tab === index"
      >
        <div class="preview-tiptap" v-html="option.content" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import tabs from "@/preview/components/tabs.vue";

export default {
  components: {
    tabs,
  },
  data() {
    return {
      tab: 0,
    };
  },
  computed: {
    ...mapGetters({
      transportData: "getTransportData",
    }),
  },
};
</script>
