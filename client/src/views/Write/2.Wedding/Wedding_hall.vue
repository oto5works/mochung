<template>
  <section>
    <article class="pa_16">
      <div class="title__wrap">
        <h1 class="--text-align --font-weight">위치 설정</h1>
      </div>
      <v-text-field type="text" :variant="input" label="제목" v-model="wedding.hall_title" />
      <div class="sp_18"/>
      <div class="flex gap_8">
        <v-text-field type="text" :variant="input" label="웨딩홀 명" v-model="wedding.hall_name" />
        <v-text-field type="text" :variant="input" label="웨딩홀 정보(층 또는 홀)" v-model="wedding.hall_info" />
      </div>
      <div class="sp_18"/>
      <v-text-field type="text" :variant="input" label="웨딩홀 전화번호" v-model="wedding.hall_tell" />
      <div class="sp_18"/>
      <div class="flex gap_8">
        <v-text-field type="text" :variant="input" label="웨딩홀 주소" v-model="wedding.address" />
        <button class="button-defaulted height_40 pa_20 --border-radius_16" @click="getCoordinates" ><span>확인</span></button>
      </div>

      <v_errormessage :errorMessage = "errorMessage"/>
      <div class="display_block--none" style="height: 11px;"/>

    </article>
    <div class="v-hr --display_block-none-block"/>
    <div class="sp_8"/>
    <article class="pa_0 article-card">
      <div class="sp_16"/>
      <div class="flex justify-content_space-between align-items_center pa_16">
        <div class="flex gap_8 align-items_center">
          <div class="button-defaulted flex justify-content_center align-items_center width_40 height_40 --border-radius_32">
            <icon v-if="wedding.map.use === 'false'" icon="MapFalse"><MapFalse /></icon>
            <icon v-if="wedding.map.use === 'true'" icon="Map"><Map /></icon>
          </div>
          <h5 class="--font-weight">지도를 사용할까요?</h5>
        </div>
        <v-switch
          class="switch-defaulted"
          v-model="wedding.map.use"
          hide-details
          inset
          true-value="true"
          false-value="false"
        ></v-switch>
      </div>
      <div class="sp_16"/>
      <div class="article-card__overlay"/>
    </article>
  </section>    
</template>

<script>
import icon from '@/components/Icons/icon.vue'
import Map from '@/components/Icons/Map.vue'
import MapFalse from '@/components/Icons/MapFalse.vue'
import v_errormessage from '@/components/v_errormessage.vue'

export default {
  components: { icon, Map, MapFalse, v_errormessage },
  props: {
    wedding: { type: Object },
    input: '',
  },
  data() {
    return {
      apiKey: '5a47656c6e47a887a539a20f1784472f',
      errorMessage: ''
    };
  },
  watch: {
  'wedding.address': function(newAddress) {
    this.wedding.map.lat = '';
    this.wedding.map.lng = '';
    this.errorMessage = '주소를 등록하려면 확인을 클릭하십시오.';
  },
},

  methods: {
    getCoordinates() {
      const url = `https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(
        this.wedding.address
      )}`;
      fetch(url, {
        headers: {
          Authorization: `KakaoAK ${this.apiKey}`
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data.documents.length > 0) {
            const location = data.documents[0].address;
            this.wedding.map.lat = location.y;
            this.wedding.map.lng = location.x;
            this.errorMessage = '주소 등록 완료';
          } else {
            this.errorMessage = '해당 주소를 찾을 수 없습니다.';
          }
        })
        .catch(error => {
          console.log("Error:", error);
        });
    },
  }
};
</script>