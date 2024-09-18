<!-- ParentComponent.vue -->
<template>
  <div class="ui-page">
    <titlePage
      title="Collection"
      content="The simplest way to send big files? That’s us. A platform to empower<br> creatives while using business as a force for good? Also us."
    >
      <buttonDefault variant="filled" height="46"
        ><span>Read stories</span></buttonDefault
      >
    </titlePage>

    <div class="ui-grid">
      <archiveCard
        v-for="(archiveItem, index) in archives"
        :key="index"
        :archive="archiveItem"
        @confirmDelete="confirmDelete(archiveItem.id)"
      />
    </div>
  </div>
</template>

<script>
import { deletePost } from "@/services/posts";
import { getAUser } from "@/services/users";
import { mapGetters } from "vuex";
import archiveCard from "@/views/archive/components/archiveCard.vue";
import "@/views/archive/archive.scss";

export default {
  components: { archiveCard },
  computed: {
    ...mapGetters({ userData: "getUserData" }),
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
      if (!this.userData.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }

      const id = this.userData.userId;
      try {
        const res = await getAUser(id);
        this.archives = res.archive.map((item) => ({
          ...item,
          showActions: false,
        }));
      } catch (error) {
        console.error("Error fetching archives:", error);
      }
    },
    async confirmDelete(id) {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        this.deleteArchive(id);
      }
    },
    async deleteArchive(id) {
      try {
        await deletePost(id);
        this.archives = this.archives.filter((item) => item.id !== id);
      } catch (error) {
        console.error("게시물 삭제 오류:", error);
      }
    },
  },
};
</script>
