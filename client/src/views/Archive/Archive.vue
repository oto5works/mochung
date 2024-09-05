<!-- ParentComponent.vue -->
<template>
  <div class="layout">
    <div class="layer-1"></div>
    <div class="layer-2">
      <div class="archive">
        <titlePage
          title="FIELDS OF EXPRESSION"
          content="간편한 템플릿을 활용하거나 자유롭게 디자인하여, 손쉽게 당신만의 스타일로 맞춤형 모바일 청첩장을 만들어보세요!"
        >
        <buttonDefault variant="filled" height="40"
        ><span>Start</span></buttonDefault
      >
        </titlePage>
        <div class="archives">
          <archiveCard
            v-for="(archiveItem, index) in archives"
            :key="index"
            :archive="archiveItem"
            @confirmDelete="confirmDelete(archiveItem.id)"
          />
        </div>
      </div>
    </div>

    <div class="layer-3">
      <!--
      <sidebar
        title="Components"
        :selected="currentComponent"
        :options="components"
        @update:selected="handleUpdateSelected"
      />

   -->
    </div>

    <!--
      <div
        v-if="formOption"
        class="form-preview"
        ref="previewComponent"
        :class="{ active: showPreview }"
      >
        
      </div>
      -->
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
