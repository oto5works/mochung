<template>
  <div id="post">
    <div id="bar"><Preview_button/></div>
<div id="write">
<Preview_button/>
 <!-- 1. Main -->
 <div id="write__overlay"/>
 <div id="write__wrap">
  <v-btn @click="handleSubmit">upload</v-btn>

<div id="main">
  <Write_title :title="title.wedding" />
  <Main_main :main="main" />
  <Main_title :main="main" :input="custom.style_input" />
  <Main_url :main="main" :input="custom.style_input" />
  <Main_id v-model:main_id="main_id" />
  <Main_theme :main="main" :custom="custom" />
  <Main_effect :main="main" />
  <Main_audio :main="main" v-model:audio_id="audio_id" />
  <Main_audio_auto :main="main" />
</div>

<div id="wedding">
  <Write_title :title="title.wedding" />
  <Wedding_invite :wedding="wedding" />
  <Wedding_date :wedding="wedding" :input="custom.style_input" />
  <Wedding_calendar :wedding="wedding" />
  <Wedding_d_day :wedding="wedding" />
  <Wedding_hall :wedding="wedding" :input="custom.style_input" />
  <Wedding_app :wedding="wedding" />
  <Wedding_map_use :wedding="wedding" />
  <Wedding_map v-model:map_id="map_id" :wedding="wedding" />
  <Wedding_transport :wedding="wedding" :input="custom.style_input" />
  <Wedding_guide :wedding="wedding" :input="custom.style_input" />
</div>

<div id="info">
  <Write_title :title="title.info" />
  <Info_infos :info="info" :input="custom.style_input" />
  <Info_image :info="info" />
  <Info_banks :info="info" :input="custom.style_input" />
</div>

<div id="gallery">
  <Write_title :title="title.gallery" />
  <Gallery_setting :gallery="gallery" :input="custom.style_input"/>
  <Gallery_image v-model:gallery_id="gallery_id" />
  <Gallery_video v-model:video_id="video_id" v-model:video_url="video_url" :input="custom.style_input" />
  <Gallery_video_auto :gallery="gallery" />
</div>

<div id="guest">
  <Write_title :title="title.guest" />
  <Guest_comment :guest="guest" :input="custom.style_input" />
  <Guest_survey :guest="guest" :input="custom.style_input" />
</div>

<div id="setting">
  <Write_title :title="title.setting" />
  <Setting_button :setting="setting" />
  <Setting_order :setting="setting" />
</div>

<div id="custom">
  <Write_title :title="title.custom" />
  <Custom_style :custom="custom" />
  <Custom_background :custom="custom" />
  <Custom_animation :custom="custom" />
  <Custom_primary :custom="custom" />
  <Custom_option :custom="custom" />
  <Custom_font :custom="custom" />
  <Custom_font_weight :custom="custom" />
  <Custom_sticker :custom="custom" />
  </div>
</div>

<!--
<div class="sp_40"/>
  <div class="write__wrap">
    <x1xMain1
      v-model:main_id="main_id"
      v-model:audio_id="audio_id"
      v-model:main="main"
      v-model:custom="custom"
  />
  </div>


 
  <div class="write__wrap">
    <x1xMain3
      v-model:audio_id="audio_id"
      v-model:main="main"
      v-model:custom="custom"
  />
</div>
</div>


-->
<div class="sp_128"/>

<!-- 2. Custom -->
<!--
<div class="chapter" sticky-container>
  <div class="subTitle" sticky-offset="offset" v-sticky="stickyEnabled" on-stick="onStick">
  <div class="subTitle__wrap">
  <div class="subTitle__content">
    <div class="name">상세한 커스터마이징</div>
    <div class="exp"></div>
  </div>
  </div>
</div>
<div class="sp_64"/>
  <div class="write__wrap">

    <x2xCustom v-model:custom="custom" />
  </div>
</div>

<div class="sp_80"/>
-->
<!-- 3. Wedding -->
<!--
<div class="chapter" sticky-container>
  <div class="subTitle" sticky-offset="offset" v-sticky="stickyEnabled" on-stick="onStick">
  <div class="subTitle__wrap">
  <div class="subTitle__content">
    <div class="name">예식 정보</div>
    <div class="exp"></div>
  </div>
  </div>
</div>
<div class="sp_64"/>
  <div class="write__wrap">
    <x3xWedding v-model:wedding="wedding" />
  </div>
</div>

<div class="sp_80"/>
-->
<!-- 4. Info -->



    <!--<x4xInfo v-model:info="info" /> -->


<!-- 5. Gallery -->
<!--
<div class="chapter" sticky-container>
  <div class="subTitle" sticky-offset="offset" v-sticky="stickyEnabled" on-stick="onStick">
  <div class="subTitle__wrap">
  <div class="subTitle__content">
    <div class="name">갤러리</div>
    <div class="exp"></div>
  </div>
  </div>
</div>
<div class="sp_64"/>
  <div class="write__wrap">
    <x5xGallery
      v-model:gallery_id="gallery_id" 
      v-model:video_id="video_id"
      v-model:video_url="video_url" 
      v-model:gallery="gallery" 
  />
  </div>
</div>

<div class="sp_80"/>
-->
<!-- 6. Guest -->
<!--
<div class="chapter" sticky-container>
  <div class="subTitle" sticky-offset="offset" v-sticky="stickyEnabled" on-stick="onStick">
  <div class="subTitle__wrap">
  <div class="subTitle__content">
    <div class="name">게스트</div>
    <div class="exp"></div>
  </div>
  </div>
</div>
<div class="sp_64"/>
  <div class="write__wrap">
    <x6xGuest
      v-model:guest="guest" 
  />
  </div>
</div>

<div class="sp_80"/>
-->
<!-- 7. Utility -->
<!--
<div class="chapter" sticky-container>
  <div class="subTitle" sticky-offset="offset" v-sticky="stickyEnabled" on-stick="onStick">
  <div class="subTitle__wrap">
  <div class="subTitle__content">
    <div class="name">유틸리티</div>
    <div class="exp"></div>
  </div>
  </div>
</div>
<div class="sp_64"/>
  <div class="write__wrap">
    <x7xUtility
      v-model:utility="utility" 
  />
  </div>

</div>

<div class="sp_80"/>
    -->
</div>



<div id="preview" class="preview">
      <x0xPreview
        :main_url="main_url"
        :audio_url="audio_url"
        :gallery_url="gallery_url"
        :video_url="video_url"
        :mainData="mainData" 
        :main="main" 
        :custom="custom" 
        :wedding="wedding" 
        :info="info"
        :gallery="gallery" 
        :guest="guest"
        :setting="setting"
        @registerComment="onRegisterComment"
      />
    </div>

</div>
</template>

<script>
import '@/components/doka/doka.min.css';
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';

import { mapState, mapMutations } from "vuex";
import { getAImage } from '@/services/images'
import { getImages } from '@/services/images'
import { createPost } from '@/services/posts'
import { getAUser } from '@/services/users'

import x0xPreview from '@/Test/x0xPreview.vue'
import x1xMain1 from '@/Test/x1xMain1.vue'
import x1xMain3 from '@/Test/x1xMain3.vue'

import x2xCustom from '@/Test/x2xCustom.vue'
import x3xWedding from '@/Test/x3xWedding.vue'
import x4xInfo from '@/Test/x4xInfo.vue'
import x5xGallery from '@/Test/x5xGallery.vue'
import x6xGuest from '@/Test/x6xGuest.vue'

import Preview_button from '@/views/Write/Preview_button.vue'
import Write_title from '@/views/Write/Write_title.vue'


import Main_main from '@/views/Write/1.Main/Main_main.vue'
import Main_title from '@/views/Write/1.Main/Main_title.vue'
import Main_url from '@/views/Write/1.Main/Main_url.vue'
import Main_id from '@/views/Write/1.Main/Main_id.vue'
import Main_theme from '@/views/Write/1.Main/Main_theme.vue'
import Main_effect from '@/views/Write/1.Main/Main_effect.vue'
import Main_audio from '@/views/Write/1.Main/Main_audio.vue'
import Main_audio_auto from '@/views/Write/1.Main/Main_audio_auto.vue'

import Wedding_invite from '@/views/Write/2.Wedding/Wedding_invite.vue'
import Wedding_date from '@/views/Write/2.Wedding/Wedding_date.vue'
import Wedding_calendar from '@/views/Write/2.Wedding/Wedding_calendar.vue'
import Wedding_d_day from '@/views/Write/2.Wedding/Wedding_d_day.vue'
import Wedding_hall from '@/views/Write/2.Wedding/Wedding_hall.vue'
import Wedding_map_use from '@/views/Write/2.Wedding/Wedding_map_use.vue'
import Wedding_map from '@/views/Write/2.Wedding/Wedding_map.vue'
import Wedding_app from '@/views/Write/2.Wedding/Wedding_app.vue'
import Wedding_transport from '@/views/Write/2.Wedding/Wedding_transport.vue'
import Wedding_guide from '@/views/Write/2.Wedding/Wedding_guide.vue'

import Info_infos from '@/views/Write/3.Info/Info_infos.vue'
import Info_image from '@/views/Write/3.Info/Info_image.vue'
import Info_banks from '@/views/Write/3.Info/Info_banks.vue'

import Gallery_setting from '@/views/Write/4.Gallery/Gallery_setting.vue'
import Gallery_image from '@/views/Write/4.Gallery/Gallery_image.vue'
import Gallery_video from '@/views/Write/4.Gallery/Gallery_video.vue'
import Gallery_video_auto from '@/views/Write/4.Gallery/Gallery_video_auto.vue'

import Guest_comment from '@/views/Write/5.Guest/Guest_comment.vue'
import Guest_survey from '@/views/Write/5.Guest/Guest_survey.vue'

import Setting_button from '@/views/Write/6.Setting/Setting_button.vue'
import Setting_order from '@/views/Write/6.Setting/Setting_order.vue'

import Custom_style from '@/views/Write/7.Custom/Custom_style.vue'
import Custom_background from '@/views/Write/7.Custom/Custom_background.vue'
import Custom_animation from '@/views/Write/7.Custom/Custom_animation.vue'
import Custom_primary from '@/views/Write/7.Custom/Custom_primary.vue'
import Custom_option from '@/views/Write/7.Custom/Custom_option.vue'
import Custom_font from '@/views/Write/7.Custom/Custom_font.vue'
import Custom_font_weight from '@/views/Write/7.Custom/Custom_font_weight.vue'
import Custom_sticker from '@/views/Write/7.Custom/Custom_sticker.vue'



import StickyDirective from 'vue3-sticky-directive';
import tinycolor from 'tinycolor2'

export default {
  components: { x0xPreview, x1xMain1, x1xMain3, x2xCustom, x3xWedding, x4xInfo, x5xGallery, x6xGuest, 
    Preview_button, Write_title,
    Main_main, Main_title, Main_url, Main_id, Main_theme, Main_effect, Main_audio, Main_audio_auto, 
    Wedding_invite, Wedding_date, Wedding_calendar, Wedding_d_day, Wedding_hall, Wedding_map_use, Wedding_map, Wedding_app, Wedding_transport, Wedding_guide,
    Info_infos, Info_image, Info_banks,
    Gallery_setting, Gallery_image, Gallery_video, Gallery_video_auto,
    Guest_comment, Guest_survey,
    Setting_button, Setting_order,
    Custom_style, Custom_background, Custom_animation, Custom_primary, Custom_option, Custom_font, Custom_font_weight, Custom_sticker
  },
  directives: { StickyDirective },
  inject: ['GStore'],
 
data() {
  return {
    title: {
      main: { 
        title: '메인 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      wedding: { 
        title: '웨딩 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      info: { 
        title: '인포 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      gallery: { 
        title: '갤러리 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      guest: { 
        title: '게스트 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      setting: { 
        title: '설정 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      custom: { 
        title: '커스텀 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
    },
      offset: {
        bottom: 60,
        top: 0,
        sticked: true
      },
      userData: [],
      mainData: { type: Object },
      main_id: { type: Array },
      main_url: 'https://jwpg-bucket.s3.ap-northeast-2.amazonaws.com/1680338687027.mp4',
      audio_id: { type: Array },
      audio_url: '',
      map_id: { type: Array },
      map_url: '',
      user1_id: { type: Array },
      user1_url: '',
      user2_id: { type: Array },
      user2_url: '',
      gallery_id: { type: Array },
      gallery_url: [],
      video_id: { type: Array },
      video_url: '',
      main: {
        title: '내 청첩장',
        url: '',
        url_check: '',
        main_type: 'defaulted',
        theme: '',
        effect_item: '',
        effect_type: 'none',
        audio_auto: 'true',
        sticker: 'flower4',
      },

      custom: {
        background_type: 'defaulted',
        background: '#111c2f',
        background_on: '#ffffff',
        gradient:'#ffffff',
        animation: 'true',
        style: 'card',
        style_input: 'outlined',
        align: 'left',
        primary: '#fef970',
        primary_on: '#000000',
        radius: true,
        border: true,
        shadow: false,
        // 폰트
        font_color: '#ffffff',
        font_family: 'spoqalight',
        font_weight: '700',
        sticker: ''
      }, 
      wedding: {
        invite_content: '<h1><strong>감사의 인사</strong></h1>&nbsp;&nbsp;<p>이제 서로에게 유일한 세계가 되어 작은 일상들을 다정하게 살아가겠습니다.</p>&nbsp;&nbsp;<p>예쁜 가을, 그  시작의 순간에 함께 자리를 빛내주세요.</p>&nbsp;&nbsp;<p><strong>김태오</strong> 그리고 <strong>오은수</strong></p>',
        date: new Date().toISOString().substr(0, 10),
        time: '',
        calendar: 'defaulted',
        d_day: 'true',
        hall_title: '오시는 길',
        hall_name: '라비돌웨딩강남',
        hall_info: '1층 오릴리아홀',
        hall_tell: '02.538.3300',
        address: '서울특별시 강남구 논현로79길 72 (역삼동 828-10)',
        lat: '',
        lng: '',
        map: 'true',
        map_type: 'kakao',
        navermap: true,
        kakaomap: true,
        kakaonavi: true,
        tmap: true,
        transports: [
          { title: '지하철 이용시', content: '<p><strong>지하철 2호선 삼성역 1번출구</strong></p><p>셔틀버스 항시 대기 (1번출구)</p><p>도보(5분 정도 소요)</p>' },
          { title: '버스 이용시', content: '<p><strong>간선버스(파랑색)</strong></p><p>143, 146, 341, 360, 363, 401</p><br/><p><strong>지선버스(녹색)</strong></p><p>2413, 3411, 3422, 4318, 4419, 917, 11-3</p><br/><p><strong>광역버스(빨강색)</strong></p><p>9407, 6900</p>' },
          { title: '자가용 이용 시', content: '<p>올림픽 잠실 방향 / 영동대교 지나 3차선으로 차선 변경</p><p>잠실운동장 조금 못가서 빠져나와 GS칼텍스 주유소 / 강남병원(한국감정원)</p><p>강남경찰서 / 강남운전면허시험장 30M 직진</p>' },
        ],
        guide_title: '추가 안내',
        guide_content: '<p>피로연 장소는 <strong>웨딩홀 5층</strong>에서 진행합니다.</p>',
      },
      
info: {
  image: 'true',
  user1: {
    fold: 'true',
    relation: '',
    example: '장남, 차남, 삼남',
    infos: {
      user: { name: '김철수', tell: '3333-03-8161331', set: '신랑' },
      father: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
      mother: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
    },
    banks: [ { bank: '', number: '', name: '', kakaopay: '', } ],
  },
  user2: {
    fold: 'true',
    relation: '',
    example: '장녀, 차녀, 삼녀',
    infos: {
      user: { name: '김철수', tell: '3333-03-8161331', set: '신부' },
      father: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
      mother: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
    },
    banks: [ { bank: '', number: '', name: '', kakaopay: '', } ],
  },
},
  gallery: {
    gallery_title: '갤러리',
    gallery_type: 'swipe',
    video_title: '',
    video_auto: 'true',
    video_type: 'youtube',
  },
  guest: {
    comment: 'true',
    comment_title: '방명록',

    password: '',
    password_check: 'false',
    comments: [
      { comment_writer: "김하나", comment_password: "1234", comment_content: "국밥이 9천원인 시대 이제 진짜 가성비가 되어버린 맥날 빅맥세트", timestamp: 0 },
      { comment_writer: "김둘둘", comment_password: "5678", comment_content: "외식보단 싸지만 장바구니 물가도 비싼게 함정 1인 가구거나 균형 잡히게 챙겨 먹으려면 더 비쌀 수도 있고 시간까지 들어", timestamp: 0 },
      { comment_writer: "김셋셋", comment_password: "1234", comment_content: "냉면이 만원 후반대라니..ㄷㄷ 끔찍하네요", timestamp: 0 },
      { comment_writer: "김넷넷", comment_password: "1234", comment_content: "호주에 있는 한국기업에서 인턴을 한 경험이 있는데 거의 대부분이 도시락을 들고 오더라구요 ..... 호주의 한끼 가격이 싸게먹으면 15000원 정도니  점점 저희도 그렇게 바뀌어 가지 않을까 싶네요", timestamp: 0 },
      { comment_writer: "이다섯", comment_password: "1234", comment_content: "일본의 도시락 문화는 중고등학교에서 급식을 안하기 때문에 어린시절부터 도시락을 먹는게 큰 듯. 영상중에 무슨 급식율 95% 이러는데 이건 초등학교 얘기고 중고등학교는 급식 없음. 도시락 싸거나 빵같은거 사먹는게 대부분임. 내가 지금 일본에서 10년 사는중인데 급식하는 중고등학교 본적이 없음. 급식이란 이름의 신청제 배달도시락 비슷한거만 함", timestamp: 0 },
      { comment_writer: "최여섯", comment_password: "1234", comment_content: "비싸지는 외식비 때문에 편의점 도시락이나 구내식당의 인기가 올라가네요.", timestamp: 0 },
      { comment_writer: "정일곱", comment_password: "1234", comment_content: "건강이 아닌 지갑 때문에 도시락 싸고 다니게 될 줄이야....", timestamp: 0 },
      { comment_writer: "악플러", comment_password: "1234", comment_content: "현직 일본 유학생입니다. 대학생들도 엄마가 싸준 도시락 들고 다니고 자기가 싸서 들고다닙니다. 학식도 기본 500엔(5000원)이상이라 부담으로 느끼는 친구들도 있고 엄마가 아빠꺼 만드는 김에 다 만든다고 하더라구요...", timestamp: 0 },
      { comment_writer: "경찰관", comment_password: "1234", comment_content: "식비부담이 너무 큽니다..", timestamp: 0 },
      { comment_writer: "구자철", comment_password: "1234", comment_content: "비웃던 한국인들 자기차례되니 오열...", timestamp: 0 },
      { comment_writer: "지하철", comment_password: "1234", comment_content: "생물유튜버인데 경제에 대해 제법 좀 아시네요", timestamp: 0 },
      { comment_writer: "이진주", comment_password: "1234", comment_content: "물가 출산율 등등..진짜 디스토피아 영화같다 요새는", timestamp: 0 },
      { comment_writer: "ㅇㅇ", comment_password: "1234", comment_content: "한국은 마트 물가가 비싸서 직접 도시락을 싸는 메리트가 적다는 점이 차이점이긴 한데...... 외식물가가 미친듯이 오르고 있으니 언젠가는 도시락을 싸는 미래가 찾아올지도...?", timestamp: 0 },
      { comment_writer: "Kim", comment_password: "1234", comment_content: "우리회사도 이미 도시락 먹고 있음 밥값이 장난이 아님", timestamp: 0 },
    ],
    survey: 'true',
    survey_title: '참석여부',
    survey_content: '<p>결혼식 참석여부를</p><p>체크해 주세요.</p>',
    rsvp: true,
    info: true,
    food: true,
    receive: true,
    rsvps: [
      { side: "user1", attend: "참석", name: "문동은", tell: '010-4241-8300', fare: "식사예정", receive: "청첩장수령", zipcode: "00000", address: "경기도 고양시 덕양구 토당로 88-25", detail: "단독주택", agree: "true" },
    ],
  },
  setting: {
    button: {
      copy: true,
      kakaotalk: true,
      line: true
    },
    orders: [
          //{ value: 'Deposit', title: '계좌 정보', accept: false },
          { value: 'Main', title: '메인', accept: false },
          { value: 'Invite', title: '머리말', accept: false },
          { value: 'Info', title: '정보', accept: false },
          { value: 'Calendar', title: '달력', accept: false },
          { value: 'Map', title: '예식장 위치 및 정보', accept: false },
          { value: 'Gallery', title: '갤러리', accept: false },
          { value: 'Comment', title: '방명록', accept: false },
          { value: 'Survey', title: '게스트용 설문조사', accept: false },
      ],
  }
}
  },
  watch: {
    main_id() { 
      console.log ('메인 ID로 URL값을 찾습니다.')
      const id = this.main_id
      getAImage(id).then((res) => { this.main_url = res })
    },
    gallery_id() { 
      const id = this.gallery_id.filter((element) => element !== null);
      getImages(id).then((res) => { this.gallery_url = res })
    },
    video_id() { 
      const id = this.video_id
      getAImage(id).then((res) => { this.video_url = res })
    },
    // 반대 색상 지정
    'custom.background'() { this.setBackgroundOnColor() },
    'custom.primary'() { this.setPrimaryOnColor() },
    'custom.style'(newValue, oldValue) {
      if (newValue === 'line') {
        this.setIfLine();
      } else {
        this.setElseLine();
      }
  },
  },
  created() {
    getAUser().then((res) => {
      this.userData = res
    })
  },
  mounted() {
    this.setDrawer(true);
    // 처음 on 색상 지정... 색상이 확실해 지면 지우자!
    this.setPrimaryOnColor();
    this.setBackgroundOnColor();

  },

  methods: {
    setIfLine() {
      this.custom.border = true
      this.custom.shadow = false
      this.custom.style_input = 'underlined'
    },
    setElseLine() {
      this.custom.style_input = 'outlined'
    },
    // 반대 색상 지정 tiny color
    setBackgroundOnColor() {
      const selectedColor = tinycolor(this.custom.background);
      const oppositeColor = selectedColor.getLuminance() < 0.5 ? tinycolor('#FFFFFF') : tinycolor('#000000');
      this.custom.background_on = oppositeColor.toHexString();
    },
    setPrimaryOnColor() {
      const selectedColor = tinycolor(this.custom.primary);
      const oppositeColor = selectedColor.getLuminance() < 0.5 ? tinycolor('#FFFFFF') : tinycolor('#000000');
      this.custom.primary_on = oppositeColor.toHexString();
    },


    // Comment 등록
    onRegisterComment(comment) {
      comment.timestamp = new Date();
      this.guest.comments.push(comment);
    },
    ...mapMutations("app", ["setDrawer"]),

    getAmainData() {
      const id = this.mainData.id
      getAImage(id).then((res) => {
        this.mainData = res
      })
  },

    handleSubmit(e) {
      e.preventDefault()

      const id = this.userData.id
      const formdata = new FormData()
      //File ID 있을 경우 들어감.
      if (this.main_id) formdata.append("main_id", this.main_id);
      if (this.gallery_id) formdata.append("gallery_id", this.gallery_id);
      if (this.video_id) formdata.append("video_id", this.video_id);
      // 유저 아이디
      formdata.append('user_id', id)
      const main = this.main
      for (const key in main) {
        formdata.append(key, main[key])
      }
      const custom = this.custom
      for (const key in custom) {
        formdata.append(key, custom[key])
      }
      const wedding = this.wedding
      for (const key in wedding) {
        formdata.append(key, wedding[key])
      }
      const info = this.info
      for (const key in info) {
        formdata.append(key, info[key])
      }
   
      this.$el.querySelector('button').classList.add('is-loading')
      createPost(formdata).then((res) => {
        this.$el.querySelector('button').classList.remove('is-loading')
        this.$router.push({path: '/me'})
      })
   
    },
  },
}
</script>

