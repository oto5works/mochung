<template>
  <div class="editor" ref="editor">
    <home />
    <design />
    <wedding />
    <host />
    <functions />
    <form2SaveButton />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    home: defineAsyncComponent(() => import("@/views/form/form2/home.vue")),
    design: defineAsyncComponent(() => import("@/views/form/form2/design.vue")),
    host: defineAsyncComponent(() => import("@/views/form/form2/host.vue")),
    wedding: defineAsyncComponent(() =>
      import("@/views/form/form2/wedding.vue")
    ),
    functions: defineAsyncComponent(() =>
      import("@/views/form/form2/functions.vue")
    ),
    form2SaveButton: defineAsyncComponent(() =>
      import("@/views/form/form2/form2SaveButton.vue")
    ),
  },
  data() {
    return {
      isHandlingScroll: false, // 상태 변수 추가
    };
  },
  computed: {
    ...mapGetters({
      section: "getSection",
      form2TabOptions: "getForm2TabOptions",
    }),
  },
  created() {
    window.addEventListener("beforeunload", this.handleBeforeUnload);
  },
  beforeUnmount() {
    window.removeEventListener("beforeunload", this.handleBeforeUnload);
  },
  mounted() {
    // 스크롤 이벤트 리스너를 직접 #routerView 엘리먼트에 추가합니다.
    const routerView = document.getElementById("routerView");
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // 컴포넌트가 파괴될 때 이벤트 리스너를 제거합니다.
    const routerView = document.getElementById("routerView");
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    ...mapActions(["updateSection"]),
    handleScroll() {
      if (!this.isHandlingScroll) {
        this.isHandlingScroll = true;

        const editor = this.$refs.editor;
        const sections = editor.querySelectorAll(".editor-item");
        let visibleSection = null;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 800) {
            visibleSection = section.id;
          }
        });

        // Dispatch the Vuex action to update the section
        this.updateSection(visibleSection);

        this.isHandlingScroll = false;
      }
    },
    handleBeforeUnload(event) {
      // 사용자가 페이지를 새로 고침하려고 할 때 확인 메시지 표시
      event.preventDefault();
      event.returnValue = "정말로 이 페이지를 떠나시겠습니까?"; // 이 메시지는 브라우저에 표시됩니다.
    },
  },
};
</script>
