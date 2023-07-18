<template>
<div class="write__content">
  <section>
    <article>
<v-card class="card">
<v-card-item>
  <v-card-title>초대하는 글</v-card-title>
</v-card-item>

  <v-card-text>
<v-tabs v-model="invi_tab">
  <v-tab value="1">인사말</v-tab>
  <v-tab value="2">직접쓰기</v-tab>
</v-tabs>
</v-card-text>
<v-window v-model="invi_tab">
<v-window-item value="1">
<div class="sp_12"></div>
<v-btn-toggle class="invi_wrap" v-model="wedding.invite_content">
<v-btn
  v-for="invi_item in invi_items"
  :key="invi_item"
  :value="invi_item.value"
>
  <div v-html="invi_item.value" />
</v-btn>
</v-btn-toggle>
</v-window-item>
<v-window-item value="2">
  <div class="sp_12"></div>
  <v-card-text>
    <v_tiptap v-model="wedding.invite_content" />
</v-card-text>  
</v-window-item>
</v-window>
<div class="sp_48"></div>


</v-card>
  </article>
<article>
  <v-card class="card">
<v-card-item>
  <v-card-title>예식 날짜</v-card-title>
</v-card-item>
<v-card-text>
  <div class="v-card-flex">
  <v-text-field
    type="date"
    label="날짜"
    v-model="wedding.date"
  />
  <v-text-field
    type="time"
    label="시간"
    v-model="wedding.time"
  />
</div>
<div class="sp_32"/>
<div class="s_title">달력 스타일</div>
</v-card-text>
<v_flicking class="sizeMedium" :options="calendar_items" v-model:selected="wedding.cal_type" />
<div class="sp_32"></div>

</v-card>
</article>
</section>

<section>
  <article>
<v-card class="card">
<v-card-item>
  <v-card-title>예식 장소</v-card-title>
</v-card-item>
<v-card-text>
  <div class="v-card-flex">
  <v-text-field 
    type="text"
    label="웨딩홀 명"
    v-model="wedding.hall_name"
  />
  
  
  <v-text-field 
    type="text"
    label="웨딩홀 정보 (층 또는 홀)"
    v-model="wedding.hall_info"
  />
</div>
<div class="sp_32"></div>
<v-text-field
    type="text"
    label="웨딩홀 전화번호"
    v-model="wedding.hall_tell"
  />

  <div class="sp_32"></div>
  <div class="v-card-flex">
    <v-text-field type="text" v-model="wedding.adress" label="웨딩홀 주소를 입력하세요" />
    <v-btn class="text-btn" @click="searchCoord">확인</v-btn>
  </div>

</v-card-text>
<div class="sp_40"></div>
<v-card-text>
  <div class="switch">
    <div class="switch_left">
      <icon v-if="wedding.map_use === true" icon="Map"><Map /></icon>
      <icon v-if="wedding.map_use === false" icon="MapFalse"><MapFalse /></icon>
      <span>지도 사용</span>
    </div>
    <div class="switch_right">
      <v-switch
          v-model="wedding.map_use"
          color="primary"
          hide-details
          inset
        ></v-switch>
  </div>
  </div>
</v-card-text>

</v-card>
  </article>













<article>
    <v-card class="card">
 <KakaoMap
      v-model:hall_name="wedding.hall_name" 
      v-model:hall_info="wedding.hall_info" 
      v-model:adress="wedding.adress" 
      v-model:lat="wedding.lat"
      v-model:lng="wedding.lng"
      ref="KakaoMap"
    />
<div class="sp_24"></div>
<v-card-text>
  <div class="map_toggle-area">
    <v-btn-toggle v-model="wedding.navermap_use">
      <v-btn class="map_toggle-btn navermap" value='true'><icon icon="MapNavermap"><MapNavermap /></icon></v-btn>
      <p>네이버맵</p>
    </v-btn-toggle>
    <v-btn-toggle v-model="wedding.kakaomap_use">
      <v-btn class="map_toggle-btn kakao" value='true'><icon icon="MapKakaomap"><MapKakaomap /></icon></v-btn>
      <p>카카오맵</p>
    </v-btn-toggle>
    <v-btn-toggle v-model="wedding.kakaonavi_use">
      <v-btn class="map_toggle-btn kakao" value='true'><icon icon="MapKakaonavi"><MapKakaonavi /></icon></v-btn>
      <p>네이버네비</p>
    </v-btn-toggle>
    <v-btn-toggle v-model="wedding.tmap_use">
      <v-btn class="map_toggle-btn tmap" value='true'><icon icon="MapTmap"><MapTmap /></icon></v-btn>
      <p>티맵</p>
    </v-btn-toggle>
  </div>
</v-card-text>
<div class="sp_48"></div>
</v-card>


  


  </article>
</section>
<section>
  <article>
    <v-card class="card">
<v-card-item>
  <v-card-title>교통수단 안내</v-card-title>
</v-card-item>
<v-card-text>
{{ wedding.tran1_cont }}
<v-tabs v-model="tran_tab">
  <v-tab value="tran1">{{ wedding.tran1_title }}</v-tab>
  <v-tab value="tran2">{{ wedding.tran2_title }}</v-tab>
  <v-tab value="tran3">{{ wedding.tran3_title }}</v-tab>
</v-tabs>
<div class="sp_32"></div>
<v-window v-model="tran_tab">
<v-window-item value="tran1">
  <v-text-field type="text" label="교통수단 타이틀" v-model="wedding.tran1_title" />
  <div class="sp_12"></div>
  <div class="s_title">교통수단 내용</div>
  <v_tiptap v-model="wedding.tran1_cont" />
</v-window-item>

<v-window-item value="tran2">
  <v-text-field type="text" label="교통수단 타이틀" v-model="wedding.tran2_title" />
  <div class="sp_12"></div>
  <div class="s_title">교통수단 내용</div>
  <v_tiptap v-model="wedding.tran2_cont" />
</v-window-item>

<v-window-item value="tran3">
  <v-text-field type="text" label="교통수단 타이틀" v-model="wedding.tran3_title" />
  <div class="sp_12"></div>
  <div class="s_title">교통수단 내용</div>
  <v_tiptap v-model="wedding.tran3_cont" />
</v-window-item>

</v-window>

</v-card-text>
<div class="sp_32"/>
</v-card>
  </article>

  <article>
    <v-card class="card">
      <v-card-item>
        <v-card-title>추가 안내</v-card-title>
      </v-card-item>
    <v-card-text>
      <v-text-field type="text" label="제목" v-model="wedding.tran4_title" />
      <div class="sp_12"></div>
  <div class="s_title">내용</div>
  <v_tiptap v-model="wedding.tran4_cont" />
    </v-card-text>
    <div class="sp_32"/>
    </v-card>
  </article>







</section>


</div>
</template>

<script>
import KakaoMap from '@/components/KakaoMap/KakaoMap.vue'
import icon from '@/components/Icons/icon.vue'
import Search from '@/components/Icons/Search.vue'
import Check from '@/components/Icons/Check.vue'
import Calendar from '@/components/Icons/Calendar.vue'
import CalendarFalse from '@/components/Icons/CalendarFalse.vue'
import Map from '@/components/Icons/Map.vue'
import MapFalse from '@/components/Icons/MapFalse.vue'
import MapKakaomap from '@/components/Icons/MapKakaomap.vue'
import MapKakaonavi from '@/components/Icons/MapKakaonavi.vue'
import MapNavermap from '@/components/Icons/MapNavermap.vue'
import MapTmap from '@/components/Icons/MapTmap.vue'

import v_flicking from '@/components/v_flicking.vue'
import v_tiptap from '@/components/v_tiptap.vue'

export default {
  components: {
    v_tiptap, v_flicking, KakaoMap, icon, Search, Check, Calendar, CalendarFalse, Map, MapFalse, MapKakaomap, MapKakaonavi, MapNavermap, MapTmap, 
  },
  props: {
    wedding: { type: Object },
  },
  data() {
    return {
      tran_tab: null,
      invi_tab: null,
      kakaoMap: {},
      calendar_items: [
          { title: '없음', value: 'none' },
          { title: '기본', value: 'default' },
          { title: '달력 2', value: 3 },
          { title: '달력 3', value: 4 },
          { title: '달력 4', value: 5 },
        ],
        invi_items: [
          { value: '<p><strong>각자 서로 다른 길을 걸어온 저희가 이제 부부의 연으</strong>로 한 길을 걸어가고자 합니다. 평생을 좋은 남편,좋은 아내로 살겠습니다. 한 곳을 바라보며 첫발을 떼는 자리에 참석하시어 기쁨의 자리를 축복으로 더욱 빛내 주시길 바랍니다.</p>' },
          { value: '<p>서로 다르지만 닮은 두 사람이 사람들의 축복 아래 결혼식을 하게되었습니다. 새로운 인생을 시작하는 자리에 오셔서 축복해주세요. 귀한 발걸음을 해주신 분들과 후의를 베풀어 주신 분들의 마음을 깊이 간직하겠습니다. 항상 가정에 행복과 건강이 함께 하시길 기원합니다.</p>' },
          { value: '<p>마침내 기다리던 짝을 만나 결혼이라는 결실을 맺으려고 합니다. 서로의 버팀목이 되어주리라 약속했던 저희의 첫 발걸음을 함께 해주세요. 저희의 하나되는 자리에 오셔서 축복의 박수를 보내주세요.</p>' },
          { value: '<p>코로나로 인해 어려운 시기 한 분 한 분 찾아뵙고 연락드리기가 부담으로 느껴지실까 조심스러웠습니다. 여전히 조심스러운 나날의 연속이기에 무리해서 참석해주시지 않으셔도 괜찮습니다. 축하의 마음만으로도 저희의 새로운 시작에 큰 힘이 됩니다. 어려운 시기 귀한 발걸음을 해주시는 하객 여러분들께 미리 감사의 인사를 전합니다.</p>' },
        ],
    }
  },

  methods: {
    searchCoord() {
      const adress = this.wedding.adress
      const that = this
      const geocoder = new kakao.maps.services.Geocoder()
      geocoder.addressSearch(adress, function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
          const coord = new kakao.maps.LatLng(result[0].y, result[0].x)
          const lat = result[0].y
          const lng = result[0].x
          that.wedding.lat = lat
          that.wedding.lng = lng
          that.$refs.KakaoMap.searchLocation(coord)
        }
      });
      
    },
  }
};
</script>
