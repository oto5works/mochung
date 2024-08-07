<template>
  <div class="home">
    <hero />

    <formTitle3 title="미리보기" />
    <temp />
    <div v-if="userData">
      <h1>Welcome, {{ userData }}!</h1>
    </div>
    <div class="sp_48"/>
    <div class="sp_48"/>

    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <h1>Welcome, {{ userData }}!</h1>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
    <div class="sp_48"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import hero from "@/views/home/hero.vue";
import temp from "@/views/home/temp.vue";

export default {
  components: { hero, temp },
  data() {
    return {
      loading: false,
      test: true,
      dialog: true,
    };
  },
  computed: {
    ...mapGetters({ userData: "getUserData" }),
  },
  methods: {
    toggleTest() {
      this.test = !this.test; // Toggle the value of 'test'
    },
  },
};
</script>

<style scoped></style>
