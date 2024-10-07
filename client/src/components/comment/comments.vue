<template>
  <div class="comments">
    <button v-if="totalComments === 0" class="no-comments">
    <span>아직 댓글이 없습니다.</span>  
    </button>
    <div v-else>
      <comment
        v-for="item in displayedComments"
        :key="item.id"
        :comment="item"
      />
      <pagination
        v-if="totalPages > 1"
        :currentPage="currentPage"
        :totalPages="totalPages"
        @prev-page="prevPage"
        @next-page="nextPage"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import comment from "@/components/comment/comment.vue";
import pagination from "@/components/pagination/pagination.vue";

export default {
  components: { comment, pagination },
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
<style scoped>
.no-comments {
  height: 4em;
  width: 100%;

}
</style>


