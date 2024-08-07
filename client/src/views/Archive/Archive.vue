<!-- ParentComponent.vue -->
<template>
    <div class="routerView__content">
  <div class="archive__wrap">
      <archiveComponent 
        v-for="(archiveItem, index) in archives" :key="index"
        :archive="archiveItem" 
        @confirmDelete="confirmDelete(archiveItem.id)" 
      />
  </div>
</div>

</template>

<script>
import { deletePost } from "@/services/posts";
import { getAUser } from '@/services/users'
import { mapGetters } from 'vuex';
import archiveComponent from '@/views/archive/archiveComponent.vue';
import archiveStyle from '@/views/archive/archiveStyle.scss';

export default {
  components: { archiveComponent, archiveStyle },
  computed: {
    ...mapGetters({userData: 'getUserData'})
  },
  created() {
    this.fetchArchives();
  },
  data() {
    return {
      archives: [],
      menu: {
        login: true,
        logout: false,
        create: true,
        save: false,
        preview: false,
        createMenu: false,
      },
    };
  },
  methods: {
    async fetchArchives() {
      const id = this.userData.userId;
      const res = await getAUser(id);
      this.archives = res.archive.map(item => ({ ...item, showActions: false }));
    },
    async confirmDelete(id) {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        this.deleteArchive(id);
      }
    },
    async deleteArchive(id) {
      try {
        await deletePost(id);
        this.archives = this.archives.filter(item => item.id !== id);
      } catch (error) {
        console.error("게시물 삭제 오류:", error);
      }
    },
  },
};
</script>

<style scoped>
.archive__wrap {
  position: relative;
  display: grid;
  gap: 8px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  color: var(--mio-theme-color-on-background);
  padding: 8px 140px;
}
@media all and (max-width: 1023px) {
  .archive__wrap {
    grid-template-columns: 1fr;
    padding: 8px 16px;
  }
}
</style>