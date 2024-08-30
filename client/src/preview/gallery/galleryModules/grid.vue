<template>
  <div class="pa_8">
    <div class="grid-wrap">
      <div
        class="grid-content"
        v-for="(image, index) in galleryData"
        :key="index"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
        @click="openDialog(index)"
      >
        <fileViewer
          :image="files"
          v-if="dialog"
          :dialog="dialog"
          @update:dialog="dialog = $event"
          :current="currentIndex"
        />
        <div class="grid-fake" v-if="image === null"></div>
      </div>
    </div>
    <pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @prev-page="prevPage"
      @next-page="nextPage"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import caretLeft from "@/components/icon/caretLeft";
import caretRight from "@/components/icon/caretRight";
import pagination from "@/components/pagination/pagination.vue";

export default {
  components: {
    caretLeft,
    caretRight,
    pagination,
    fileViewer: defineAsyncComponent(() =>
      import("@/components/file/fileViewer.vue")
    ),
  },
  props: {
    files: { type: [String, Array, Object] },
  },
  data() {
    return {
      dialog: false,
      currentIndex: null,
      perPage: 9,
      currentPage: 1,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.files.length / this.perPage);
    },
    galleryData() {
      if (!this.files || this.files.some((file) => file === null)) {
        return [];
      }
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.files.slice(startIndex, endIndex).map((item) => item.url);
    },
  },
  methods: {
    openDialog(index) {
      this.currentIndex = (this.currentPage - 1) * this.perPage + index;
      this.dialog = true;
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
.grid-wrap {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}

.grid-content {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-size: cover;
  cursor: pointer;
  border-radius: var(--border-radius_12);
  overflow: hidden;
}

.grid-content img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.grid-fake {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--primary-color), 0.1);
}
</style>
