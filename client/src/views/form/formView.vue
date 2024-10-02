<template>
  <div class="formView">
    <div class="formView__content">
      <preview />
    </div>
  </div>
</template>

<script>
import preview from "@/preview/preview.vue";
import { mapActions } from "vuex";

export default {
  components: { preview },
  props: {
    big: { type: Boolean },
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
  methods: {
    ...mapActions(["fetchFormData"]),
    handleFetchFormData(id) {
      this.fetchFormData(id);
    },
  },
};
</script>

<style scoped>
.formView {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(var(--background-on));
}
.formView__content {
  position: relative;
  display: block;
  width: 480px;
  height: 100%;
  contain: layout;

}
@media all and (max-width: 479px) {
  .formView__content {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
