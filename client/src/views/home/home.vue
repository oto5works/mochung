<template>
  <div class="container">

    <div class="layer-1">
      <div class="mobile"/>
    </div>

<div class="layer-2">
  <h1>style: tonal</h1>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
  <div class="sp_180"/>
      <buttonDefault variant="tonal" height="18"
        ><span>18-height</span></buttonDefault
      >
      <div class="sp_180"/>
      <buttonDefault variant="tonal" height="24"
        ><span>24-height</span></buttonDefault
      >
      <div class="sp_180"/>
      <buttonDefault variant="tonal" height="32"
        ><span>32-height</span></buttonDefault
      >
      <div class="sp_180"/>
      <buttonDefault variant="tonal" height="36"
        ><span>36-height</span></buttonDefault
      >

      <buttonDefault variant="tonal" height="40"
        ><span>40-height</span></buttonDefault
      >

      <buttonDefault variant="tonal" height="46"
        ><span>46-height</span></buttonDefault
      >

</div>
   <div class="layer-3">
gird 영역 ;;;
   </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import app from "@/components/icon/app.vue";


export default {
  components: { app },
  data() {
    return {
      data1: false,
    };
  },
  computed: {
  },
  methods: {

  },
};
</script>

<style scoped></style>
