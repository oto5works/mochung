<template>
  <div class="hero">
    <div class="hero-content">
      <div class="hero-title">
        <p
          v-html="currentHero.content"
          :style="{ color: currentHero.color }"
        ></p>
        <h1
          v-html="currentHero.title"
          :style="{ color: currentHero.color }"
        ></h1>
      </div>

      <div class="hero-image" v-if="currentHero.image">
        <component :is="currentHero.image" />
      </div>
    </div>

    <div
      class="hero-overlay"
      :style="{ backgroundColor: currentHero.backgroundColor }"
    ></div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import arrowRight3 from "@/components/icon/arrowRight3";

export default {
  components: {
    arrowRight3,
    homeImage1: defineAsyncComponent(() =>
      import("@/components/illust/home/homeImage1.vue")
    ),
  },
  data() {
    return {
      index: 0,
      appbarHeight: 56, // appbar의 기본 높이
    };
  },
  computed: {
    ...mapGetters({
      homeHero: "getHomeHero",
      appbar: "getAppbar",
    }),
    currentHero() {
      return this.homeHero[this.index]; // 현재 인덱스에 해당하는 홈 히어로 데이터 반환
    },
  },
  created() {
    this.handleUpdateAppbar();
  },
  methods: {
    ...mapActions([
      "updateAppbar",
    ]),
    handleUpdateAppbar() {
      // 컴포넌트가 생성될 때 appbar의 color 및 backgroundColor를 설정
      this.updateAppbar({
        color: this.currentHero.color,
        backgroundColor: this.currentHero.backgroundColor
      });
    },
    handleResetAppbar() {
      // appbar의 color 및 backgroundColor를 초기화
      this.updateAppbar({
        color: null,
        backgroundColor: null
      });
    },
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90vh;
  overflow: visible;
}
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 56%;
  height: 100%;
  gap: 40px;
}
.hero-title {
  position: absolute;
  top: 40%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: unset;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.hero h1 {
  font-size: 72px;
  font-weight: 900;
  line-height: 102%;
  letter-spacing: -3px;
  text-align: center;
  font-family: var(--mio-theme-font-family-2);
}
.hero p {
  font-size: 20px;
  line-height: 140%;
  text-align: center;
}

.hero-image {
  position: absolute;
  top: 66%;
  left: 50%;
  display: flex;
  justify-content: center;
  width: 36%;
  height: auto;
  transform: translate(-50%, -50%);
}
.hero-image svg {
  width: 100%;
  height: 100%;
  stroke: currentColor;
  stroke-width: 1.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
.hero-overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 80%;
  z-index: -1;
}
</style>

<style scoped>
/*-- 태블릿 --*/
@media all and (max-width: 1023px) {
}

/*--- 모바일 ---*/
@media all and (max-width: 479px) {
  .hero {
    height: 100vh;
  }
  .buttonDefault {
    height: 56px;
  }
  .hero-content {
    width: 90%;
    
  }
  .hero-image {
    width: 110%;
  }
  .hero-overlay {
    height: 100%;
  }
}
</style>
