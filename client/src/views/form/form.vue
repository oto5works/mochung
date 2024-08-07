<!-- formCreate.vue -->
<template>
  <div class="form config">
    <backgroundView />
    <fnStyle />
    <!-- form-header 
    <div class="form-header"></div>
-->
    <!-- form-content -->
    <div class="form-content">
      <!-- form-nav-mobile -->

      <form1NavMobile
        v-if="formOption === 'form1' && screenWidth === 'mobile'"
      />
      <form2NavMobile
        v-if="formOption === 'form2' && screenWidth === 'mobile'"
      />

      <!-- form-space -->
      <div class="common-space" />
      <!-- form-preview -->
      <div
        v-if="formOption"
        class="form-preview"
        ref="previewComponent"
        :class="{ active: showPreview }"
      >
        <div class="form-preview__wrap"><preview /></div>
      </div>
      <!-- form-editor -->
      <div class="form-editor">
        <formOption v-if="!formOption" />
        <form1 v-if="formOption === 'form1'" />
        <form2 v-if="formOption === 'form2'" />
        <div class="sp_120" />
      </div>
      <!-- form-nav-desktop -->
      <div class="common-space" v-if="screenWidth === 'desktop'">
        <form1NavDesktop v-if="formOption === 'form1'" />
        <form2NavDesktop v-if="formOption === 'form2'" />
      </div>
    </div>
  </div>
</template>

<script>
import "@/views/form/form.scss";
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

/*-- form스타일을 고르는 중 미리 load 하기 --*/
import backgroundView from "@/modules/background/backgroundView.vue";
import fnStyle from "@/modules/functions/fnStyle.vue";

export default {
  components: {
    fnStyle,
    backgroundView,
    preview: defineAsyncComponent(() => import("@/views/preview/preview.vue")),
    formOption: defineAsyncComponent(() =>
      import("@/views/form/formOption.vue")
    ),

    // form1
    form1: defineAsyncComponent(() => import("@/views/form/form1/form1.vue")),
    form1NavDesktop: defineAsyncComponent(() =>
      import("@/views/form/form1/form1NavDesktop.vue")
    ),
    form1NavMobile: defineAsyncComponent(() =>
      import("@/views/form/form1/form1NavMobile.vue")
    ),

    // form2
    form2: defineAsyncComponent(() => import("@/views/form/form2/form2.vue")),
    form2NavDesktop: defineAsyncComponent(() =>
      import("@/views/form/form2/form2NavDesktop.vue")
    ),
    form2NavMobile: defineAsyncComponent(() =>
      import("@/views/form/form2/form2NavMobile.vue")
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
    ]),
    handleFetchFormData(id) {
      this.fetchFormData(id);
    },
    
  },
};
</script>
