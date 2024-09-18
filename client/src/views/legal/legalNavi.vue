<template>
  <div class="legalNavi">
    <router-link
      to="/legal/terms"
      class="item"
      :class="{ selected: isSelected('terms') }"
    >
      Terms of Service
    </router-link>
    <router-link
      to="/legal/privacy"
      class="item"
      :class="{ selected: isSelected('privacy') }"
    >
      Privacy Policy
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    isSelected(section) {
      return (
        this.$route.params.section === section ||
        (!this.$route.params.section && section === "terms")
      );
      // 기본 경로일 때 'terms'를 선택한 것으로 처리
    },
  },
};
</script>

<style scoped>
.legalNavi {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}
.item {
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.25rem;
    color: rgb(var(--mio-theme-color-on-background-40));
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: .25s cubic-bezier(.4,0,.2,1);
}


.selected {
    color: rgb(var(--mio-theme-color-on-background));
}
</style>
