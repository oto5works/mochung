<template>
  <div class="editor" ref="editor">
    <component :is="section" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    design: defineAsyncComponent(() => import("@/views/form/form1/design.vue")),
    wedding: defineAsyncComponent(() =>
      import("@/views/form/form1/wedding.vue")
    ),
    location: defineAsyncComponent(() =>
      import("@/views/form/form1/location.vue")
    ),
    gallery: defineAsyncComponent(() =>
      import("@/views/form/form1/gallery.vue")
    ),
    host: defineAsyncComponent(() => import("@/views/form/form1/host.vue")),
    functions: defineAsyncComponent(() =>
      import("@/views/form/form1/functions.vue")
    ),
  },
  computed: {
    ...mapGetters({ section: "getSection" }),
  },
  created() {
    this.updateSection("design");
  },

  methods: {
    ...mapActions(["updateSection"]),
    handleBeforeUnload(event) {
      // 사용자가 페이지를 새로 고침하려고 할 때 확인 메시지 표시
      event.preventDefault();
      event.returnValue = "정말로 이 페이지를 떠나시겠습니까?"; // 이 메시지는 브라우저에 표시됩니다.
    },
  },
};
</script>
