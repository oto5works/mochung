<!-- formCreate.vue -->
<template>
  <div>
    <div class="ui-page" v-if="!formOption">
      <formOption />
    </div>

    <div class="form-grid">
      <div class="layer-1" v-if="formOption">
        <div class="preview-wrap">
          <!--<div class="form-preview__wrap"></div>-->
          <div class="preview-mobile"><preview /></div>
        </div>
      </div>
      <div class="layer-2" v-if="formOption">
        <component :is="formOption" />
        <formPage />
      </div>

      <div class="layer-3" v-if="formOption">
        <formNav_pc/>
        
      </div>
    </div>
    <formButton />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

/*-- form스타일을 고르는 중 미리 load 하기 --*/
import "@/views/form/form.scss";

export default {
  components: {
    formButton: defineAsyncComponent(() => import("@/views/form/formButton/formButton.vue")),

    preview: defineAsyncComponent(() => import("@/preview/preview.vue")),
    formOption: defineAsyncComponent(() =>
      import("@/views/form/formOption/formOption.vue")
    ),

    // form1
    form1: defineAsyncComponent(() => import("@/views/form/form1/form1.vue")),
    formNav_pc: defineAsyncComponent(() =>
      import("@/views/form/formNav/formNav_pc.vue")
    ),

    // form2
    form2: defineAsyncComponent(() => import("@/views/form/form2/form2.vue")),
    form2NavDesktop: defineAsyncComponent(() =>
      import("@/views/form/form2/form2NavDesktop.vue")
    ),
    form2NavMobile: defineAsyncComponent(() =>
      import("@/views/form/form2/form2NavMobile.vue")
    ),
    formPage: defineAsyncComponent(() =>
      import("@/views/form/formPage/formPage.vue")
    ),
  },
  created() {
    if (this.$route.params.id) {
      console.log("데이터값을 불러옵니다. 여긴 created", this.$route.params.id);
      this.handleFetchFormData(this.$route.params.id);
    } else {
      console.log("데이터 리셋을 실행합니다. 여긴 created");
      this.$store.commit("resetFormData"); // Vue 컴포넌트 내에서 호출
    }
  },
  beforeRouteLeave(to, from, next) {
    // 여기에 실행할 로직을 추가
    console.log("라우터를 벗어나기 전에 실행됩니다.");
    this.handleRouteLeave();
    // 다음 라우트로 이동
    next();
  },
  computed: {
    ...mapGetters({
      //postData: 'getFormData',
      screenWidth: "getScreenWidth",
      showPreview: "getShowPreview",
      formOption: "getFormOption",
    }),
  },
  methods: {
    ...mapActions([
      "updateFormDataAction",
      "fetchFormData",
      "resetFormDataAction",
      "resetFormOptionAction",
    ]),
    handleFetchFormData(id) {
      this.fetchFormData(id);
    },
    handleRouteLeave() {
      this.resetFormOptionAction();
      console.log("formOption의 값:", this.formOption);
    },
  },
};
</script>

<style scoped>
.preview-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(var(--primary-color), 0.04);
}
.preview-mobile {
  position: relative;
  height: 75%;
  aspect-ratio: var(--mio-theme-aspect-ratio);
  border-radius: 2.75em;
  outline: 0.5em solid black;
  
  contain: layout;
  overflow: hidden;
  -webkit-filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.1));
  filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.1));
  -webkit-box-shadow: 0 32px 96px rgba(0, 0, 0, 0.1);
  box-shadow: 0 32px 96px rgba(0, 0, 0, 0.1);
  font-size: 0.75rem;
}
/* transform: scale(0.8); */
</style>
