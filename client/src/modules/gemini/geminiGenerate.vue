<template>
  <div>
    {{ loading }}
    <div class="dialog-actions">
      <buttonDefault
        class="width_100"
        variant="filled"
        height="46"
        @click="handleGenerate()"
        ><span>다음 →</span></buttonDefault
      >
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {},
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    ...mapGetters({
      promptOptions: "getPromptOptions",
    }),
  },
  methods: {
    ...mapActions(["generateAIDesign"]),
    handleGenerate() {
      this.generateAIDesign();
    },
  },
};
</script>
