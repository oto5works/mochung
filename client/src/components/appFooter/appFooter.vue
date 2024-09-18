<template>
  <footer class="appFooter">
    <div class="appFooter-wrap">
      <section class="section1">
        <div class="logo-wrap">
          <appLogo />
          <span class="phrase"
            >Design better digital experiences with {{ appName }}.</span
          >
        </div>
        <div class="lists1">
          <div class="title">About Us</div>
          <div class="list">About</div>
          <div class="list">Naver Store</div>
          <div class="list">Youtube</div>
          <div class="list">Instagram</div>
        </div>
        <div class="lists2">
          <div class="title">Explore</div>
          <div class="list">Collection</div>
          <div class="list">Create at</div>
          <div class="list">Help Center</div>
          <div class="list">Contact</div>
          <div class="list">Ideas Report</div>
        </div>
      </section>

      <section class="section2">
        <span class="copyright">©{{ currentYear }} {{ appName }}</span>

        <div class="terms-wrap">
          <div class="terms">
            <div class="text"><span>Terms</span></div>
            <span class="opacity_40">|</span>
            <div class="text"><span>Privacy</span></div>
          </div>
          <div class="text info"><span>사업자 정보 확인</span></div>
        </div>
      </section>
    </div>
    {{ userData }}
  </footer>
</template>

<script>
import { mapGetters } from "vuex";
import appLogo from "@/components/appLogo/appLogo.vue";

export default {
  components: {
    appLogo,
  },
  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME || "DefaultAppName",
      currentYear: new Date().getFullYear(), // Automatically gets the current year
    };
  },
  computed: {
    ...mapGetters({
      userData: "getUserData",
    }),
  },
  methods: {
    handleCollection() {
      this.$router.push({ name: "collection" });
      this.toggleFold();
    },
    handleForm() {
      this.$router.push({ name: "form" });
      this.toggleFold();
    },
    handleComponents() {
      this.$router.push({ name: "components" });
      this.toggleFold();
    },
  },
};
</script>

<style scoped>
.appFooter {
  position: relative;
  width: 100%;
  background-color: rgb(var(--mio-theme-color-on-background));
  color: rgb(var(--mio-theme-color-background));
  padding: 5rem 0 0;
}
.appFooter-wrap {
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 3rem;
  width: 100%;
}
.section1 {
  position: relative;
  display: grid;
  width: 100%;
  margin: 0 auto 5rem;
  grid-column-gap: 1.5rem;
  grid-template-columns: repeat(12, 1fr);
}
.logo-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  grid-column-start: 1;
  grid-column-end: 4;
}
.phrase {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.25rem;
  opacity: 0.7;
}
.lists1,
.lists2 {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0;
}
.title {
  font-weight: 700;
  padding: 0 0 2rem;
}
.lists1 {
  grid-column-end: 9;
  grid-column-start: 8;
}
.lists2 {
  grid-column-end: 13;
  grid-column-start: 10;
}
.terms-wrap .text,
.list {
  cursor: pointer;
}
.list,
.terms-wrap .text {
  opacity: 0.8;
}
.terms-wrap .text:hover,
.list:hover {
  opacity: 0.6;
}
.section2 {
  position: relative;
  display: grid;
  width: 100%;
  grid-column-gap: 1.5rem;
  grid-template-columns: repeat(12, 1fr);
  padding: 1.5rem 0;
}
.copyright {
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.25rem;
  opacity: 0.6;
  font-size: 0.75rem;
}
.terms-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.25rem;
  grid-column-end: 13;
  grid-column-start: 10;
}
.terms {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>

<style scoped>
@media all and (max-width: 479px) {
  .appFooter-wrap {
    padding: 0 1rem;
  }
  .section1 {
    grid-column-gap: 1rem;
    grid-template-columns: repeat(6, 1fr);
    margin: 0 auto 5rem;
  }
  .logo-wrap {
    grid-column-start: 1;
    grid-column-end: 7;
    margin: 0 0 3.5rem;
  }
  .lists1,
  .lists2 {
    gap: 1rem;
  }
  .lists1 {
    grid-column-end: 1;
    grid-column-start: 4;
  }
  .lists2 {
    grid-column-end: 4;
    grid-column-start: 7;
  }
  .title {
    padding: 0 0 1rem;
  }
  .section2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 5rem;
  }
  .phrase,
  .info {
    display: none;
  }
}
</style>
