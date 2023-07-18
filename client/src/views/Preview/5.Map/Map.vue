<template>
  <div>
<section>
  <div class="v-hr --display_block-none-block"/>
  <article
        data-sal="slide-up"
        data-sal-duration="700"
  >
    <div class="sp_96"/>
    
      <div class="title__wrap">
        <div class="title__content --text-align">
          <Sticker :sticker="sticker" />
          <h5>Location</h5>
          <div class="sp_8"/>
          <h1 class="--font-weight">{{ wedding.hall_title }}</h1>
        </div>
      </div>

      <div class="sp_28"/>
      <div class="pa_32">
      <div class="adress__wrap --text-align">
        <h3 class="--font-weight">{{ wedding.hall_name }} {{ wedding.hall_info }}</h3>
        <div class="sp_8"/>
        <p>{{ wedding.address }}</p>
        <div class="sp_12"/>
        <div class="flex --justify-content width_100">
        <button class="button-modify gap_4" @click="callWeddingHallTell"><span>{{ wedding.hall_tell }}</span></button>
      </div>
      </div>
    </div>

    <div class="sp_32"/>
      <Map_dialog :wedding="wedding" v-if="wedding.navermap || wedding.kakaomap || wedding.kakaonavi || wedding.tmap" />
      <div class="sp_40"/>

<div v-if="wedding.map.use === 'true'">
    <div v-if="wedding.map.type === 'kakao'">
      <div class="pa_16">
        <v_kakaomap class="--border-radius_16" :lat="wedding.map.lat" :lng="wedding.map.lng" style="width: 100%; height: 320px;"/>
      </div>
    </div>

    <div v-if="wedding.map.type === 'upload'">
      <div class="pa_16">
          <img class="--border-radius_16 object-fit_cover" style="width: 100%; height: 320px;" :src="wedding.map.map.url" />
      </div>
    </div>

</div>

    <div class="sp_32"/>
  </article>
</section>




<section 
  class="section__background"
  data-sal="slide-up"
  data-sal-duration="700"
  >
<article>
<div class="sp_32"/>
<div class="tran__wrap">
    <v-tabs class="pa_16" v-model="tab">
      <v-tab v-for="(transport, index) in wedding.transports" :key="index" :value="index"><span>{{ transport.title }}</span></v-tab>
    </v-tabs>
<div class="sp_16"/>
<div class="pa_32">
  <v-window v-model="tab">
        <v-window-item v-for="(transport, index) in wedding.transports" :key="index" :value="index">
          <div class="tiptap__content --text-align" v-html="transport.content"/>
        </v-window-item>
</v-window>
</div>
<div class="sp_32"/>
</div>
<div class="article__overlay"/>
</article>
<div class="section__overlay"/>
</section>


<section
  data-sal="slide-up"
  data-sal-duration="700"
>
<article
    v-if="wedding.guide.use === 'true'"
>
<div class="sp_64"/>
<div class="title__wrap">
  <div class="title__content">
    <h1 class="--text-align --font-weight">{{ wedding.guide.title }}</h1>
  </div>
</div>
<div class="sp_32"/>
  <div class="pa_32">
  <div class="tiptap__content --text-align" v-html="wedding.guide.content"></div>
  </div>
  <div class="sp_64"/>
</article>
</section>

</div>
</template>
<script>

import Map_dialog from "@/views/Preview/5.Map/Map_dialog.vue"
import Sticker from '@/views/Preview/13.Sticker/Sticker.vue'
import sal from "sal.js";
import icon from '@/components/Icons/icon.vue'
import PhoneCall from '@/components/Icons/PhoneCall.vue'
import v_kakaomap from '@/components/v_kakaomap.vue'

export default {
  components: { Sticker, Map_dialog, icon, PhoneCall, v_kakaomap },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
  props: {
    wedding: { type: Object },
    sticker: { type: String },
  },
  data() {
    return {
      tab: null,
    }
  },
  methods: {
    callWeddingHallTell() {
      let phoneNumber = this.wedding.hall_tell;
      phoneNumber = phoneNumber.replace(/\D/g, '');
      window.open(`tel:${phoneNumber}`);
    },
  },
};
</script>

<style scoped>
.adress__wrap p {
  line-height: 143%;
}
</style>