<template>
  <div class="geminiBox" @click="handleClickEvent">
    <div class="body-wrap">
      <div class="title-wrap">
        <div class="font-size_18 font-weight_500">AI로 손쉽게 디자인하기</div>
        <div class="sp_4"/>
        <div class="font-size_13 opacity_70">
          Gemini AI로 나만의 맞춤형<br>청첩장을 완성해보세요.
        </div>
      </div>

      <div class="font-size_10 opacity_40">Powered by Gemini AI</div>
    </div>
    <geminiLogo class="logo" />
    <div class="arrow">→</div>
    <geminiDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import geminiLogo from "@/modules/gemini/geminiLogo.vue";

export default {
  components: {
    geminiDialog: defineAsyncComponent(() =>
      import("@/modules/gemini/geminiDialog.vue")
    ),
    geminiLogo,
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    handleClickEvent() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.geminiBox {
  position: relative;
  padding: 24px;
  border-radius: 16px;
  background-color: rgb(var(--mio-theme-color-primary));
  color: rgb(var(--mio-theme-color-on-primary));
  width: 100%;
  height: 140px;
  cursor: pointer;
}
.body-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

}
.geminiBox .logo {
  position: absolute;
  width: 40%;
  max-width: 180px;
  right: 24px;
  bottom: 28px;
}
.arrow {
  position: absolute;
  font-size: 28px;
  right: 28px;
  bottom: 18px;
  transform: translateX(0);
  transition: all 0.2s ease-in-out;
}
.geminiBox:hover .arrow {
  transform: translateX(4px);
}
</style>
