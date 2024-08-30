<template>
  <div
    class="pagination display_flex align-items_center justify-content_center gap_48 width_100"
  >
    <button class="icon_24" @click="prevPage" :disabled="currentPage === 1">
      <icon class="icon_16"><caretLeft /></icon>
    </button>

    <div class="display_flex align-items_center gap_12 --font-size_11">
      <span>{{ currentPage }}</span>
      <icon class="icon_14"><slash /></icon>
      <span>{{ totalPages }}</span>
    </div>

    <button
      class="icon_24"
      @click="nextPage"
      :disabled="currentPage === totalPages"
    >
      <icon class="icon_16"><caretRight /></icon>
    </button>
  </div>
</template>

<script>
import caretLeft from "@/components/icon/caretLeft.vue";
import caretRight from "@/components/icon/caretRight.vue";
import slash from "@/components/icon/slash";

export default {
  components: { caretLeft, caretRight, slash },
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    prevPage() {
      this.$emit("prev-page");
    },
    nextPage() {
      this.$emit("next-page");
    },
  },
};
</script>

<style scoped>
.pagination {
  margin-top: 16px;
}
button:disabled {
  opacity: 0.24;
}
</style>
