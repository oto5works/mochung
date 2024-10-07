<template>
  <div class="geminiBox" @click="handleClickEvent">
    <div class="body-wrap">
      <div class="title-wrap">
        <span class="title font-size_18">AI로 손쉽게 디자인하기</span>
        <div class="sp_4"/>
        <span class="sub-title font-size_13 opacity_70">
          Gemini AI로 나만의 맞춤형<br>청첩장을 완성해보세요.
        </span>
      </div>

      <div class="font-size_10 opacity_40">Powered by Gemini AI</div>
    </div>
    <geminiLogo class="logo" />
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
  background-color: black;
  color: white;
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
.title {
  font-weight: 600;
  background: linear-gradient(45deg, #579bda 0%, #ca6a61 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease-in-out; /* 텍스트 관련 애니메이션 추가 */
}
.sub-title {
  font-weight: 300;
}
.geminiBox .logo {
  position: absolute;
  width: 40%;
  max-width: 180px;
  right: 24px;
  bottom: 28px;
}
.geminiBox:hover{
  background-color: rgba(0,0,0,0.9);;
  color: white
}
.geminiBox:hover .title {
  background: linear-gradient(90deg, #579bda 20%, #ca6a61 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}
</style>
