<template>
  <div class="commentWrap">
    <comment
      v-for="item in displayedComments"
      :key="item.id"
      :comment="item"
      :config="config"
    />
    <pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import comment from "@/components/comment/comment.vue";
import pagination from "@/components/pagination/pagination.vue";

export default {
  components: { comment, pagination },
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
