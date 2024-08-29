<template>
  <div class="position_relative commentWrap" :class="{ config: config }">
    <div class="flex flex-direction_column">
      <message
        v-for="item in displayedComments"
        :key="item.id"
        :comment="item"
        :config="config"
      />
    </div>
    <div class="sp_16" />
    <div class="h-hr --display_none-none-block" />

    <div class="pagination">
      <button class="arrow" @click="prevPage" :disabled="currentPage === 1">
        <icon><caretLeft /></icon>
      </button>

      <div class="page">{{ currentPage }} / {{ totalPages }}</div>

      <button
        class="arrow"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        <icon><caretRight /></icon>
      </button>
    </div>

    <div class="h-hr --display_none-none-block" />
    <div class="sp_48" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import commentMessage from "@/modules/comment/commentMessage.vue";
import caretLeft from "@/components/icon/caretLeft.vue";
import caretRight from "@/components/icon/caretRight.vue";

export default {
  components: { commentMessage, caretLeft, caretRight },
  props: {
    config: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentPage: 1,
      PerPage: 6,
    };
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.fetchCommentsForArchive(id);
    }
  },
  computed: {
    ...mapGetters(["getCommentsForArchive"]),
    comments() {
      const id = this.$route.params.id;
      return id
        ? this.getCommentsForArchive(id)
        : this.getCommentsForArchive("test");
    },
    totalComments() {
      return this.comments.length;
    },
    totalPages() {
      return Math.ceil(this.totalComments / this.PerPage);
    },
    displayedComments() {
      const startIndex = (this.currentPage - 1) * this.PerPage;
      const endIndex = startIndex + this.PerPage;
      const reversedComments = this.comments.slice().reverse();
      return reversedComments.slice(startIndex, endIndex);
    },
  },
  methods: {
    ...mapActions(["fetchComments"]),
    fetchCommentsForArchive(id) {
      this.fetchComments(id);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
  },
};
</script>
