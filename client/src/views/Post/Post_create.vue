<template>
  <div id="post">
    <v_menu :menu="menu" @tab-changed="changeActiveTab" @handleSubmit="handleSubmit"/>
    <!--
    <v_navigation :menu="menu" @tab-changed="changeActiveTab" @handleSubmit="handleSubmit"/>
    <v_overlay :menu="menu"/>
    <v_appbar :menu="menu" @handleSubmit="handleSubmit"/>
    -->
    <Preview_button :menu="menu"/>
<div id="write">
 <!-- 1. Main -->
 <div id="background__overlay"/>
 <div id="write__wrap">
  <div class="sp_64"/>
<!--<Write_navigation @tab-changed="changeActiveTab"/>-->
<div id="main" class="write__content">
  {{ userData }}


  <button @click="handleSubmit">
      <span>저장</span>
    </button>

  <div class="pa_vw--0"><Write_title :title="title.main" /></div>
  <Main_main :main="main" />
<div class="pa_vw--0">
  <div class="display_flex--block">
      <Main_title class="width_50--100" :main="main" :input="custom.style_input" />
      <!-- Filepond 사용 -->
      <Main_image class="width_50--100" :image="main.image" />
  </div>

  <Main_url :main="main" :input="custom.style_input" />
</div>
  
  <Main_theme :main="main" :custom="custom" />

  <div class="pa_vw--0">
  <div class="display_flex--block">
      <Main_effect class="width_50--100" :main="main" />
      <!-- Filepond 사용 -->
      <Main_audio class="width_50--100" :audio="main.audio" />
  </div>
</div>

</div>
<div class="sp_120"/>
<div id="wedding" class="write__content pa_vw--0">
  <Write_title :title="title.wedding" />
  <Wedding_intro :wedding="wedding" :input="custom.style_input" />
  <div class="display_flex--block">    
    <Wedding_date class="width_50--100" :wedding="wedding" :input="custom.style_input" />
    <Wedding_calendar class="width_50--100" :wedding="wedding" />
  </div>
  <div class="display_flex--block">
    <Wedding_hall class="width_50--100" :wedding="wedding" :input="custom.style_input" />
    <!-- Filepond 사용 -->
    <Wedding_map class="width_50--100" :map="wedding.map" />
  </div>
  <Wedding_app :wedding="wedding" />

  <div class="display_flex--block">
    <Wedding_transport class="width_50--100" :wedding="wedding" :input="custom.style_input" />
    <Wedding_guide class="width_50--100" :guide="wedding.guide" :input="custom.style_input" />
  </div>
</div>
<div class="sp_120"/>
<div id="info" class="write__content pa_vw--0">
  <Write_title :title="title.info" />
  <div class="display_flex--block">
    <Info_infos class="width_50--100" :info="info" :input="custom.style_input" />
    <Info_banks class="width_50--100" :info="info" :input="custom.style_input" />
  </div>
</div>
<div class="sp_120"/>
<div id="gallery" class="write__content pa_vw--0">
  <Write_title :title="title.gallery" />
  <Gallery_image v-model:gallery_id="gallery_id" />

  <div class="display_flex--block">
      <Gallery_setting class="width_50--100" :gallery="gallery" :input="custom.style_input"/>
      <Gallery_video class="width_50--100" :gallery="gallery" :input="custom.style_input" v-model:video_url="video_url" />
  </div>
    
    
      
</div>
<div class="sp_120"/>
<div id="guest" class="write__content pa_vw--0">
  <Write_title :title="title.guest" />
  <div class="display_flex--block">    
    <Guest_comment class="width_50--100" :guest="guest" :input="custom.style_input" />
    <Guest_survey class="width_50--100" :guest="guest" :input="custom.style_input" />
  </div>
</div>
<div class="sp_120"/>
<div id="setting" class="write__content pa_vw--0">
  <Write_title :title="title.setting" />
  <div class="display_flex--block">
    <Setting_button class="width_50--100" :setting="setting" />
    <Setting_order class="width_50--100" :setting="setting" />
  </div>
</div>
<div class="sp_120"/>
<div id="custom" class="write__content">
  <div class="pa_vw--0"><Write_title :title="title.custom" /></div>
  <Custom_style :custom="custom" />

  <div class="pa_vw--0">
    <Custom_background :custom="custom" />
    <Custom_font :custom="custom" />
    <Custom_primary :custom="custom" />
    <Custom_sticker :custom="custom" />
  </div>
  </div>
</div>


<div class="sp_120"/>
</div>

<div id="preview" class="preview">
      <Preview
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
      <div id="background__overlay"/>
    </div>
</div>
</template>

<script>
import '@/components/doka/doka.min.css';
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import 'filepond-plugin-media-preview/dist/filepond-plugin-media-preview.min.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';

import { getAImage } from '@/services/images'
import { getImages } from '@/services/images'
import { createPost } from '@/services/posts'
import { getAUser } from '@/services/users'

import Preview from '@/views/Preview/Preview.vue'

import Preview_button from '@/views/Write/Preview_button.vue'
import Write_title from '@/views/Write/Write_title.vue'
import v_navigation from '@/components/v_navigation.vue'
import v_appbar from '@/components/v_appbar.vue'
import v_overlay from '@/components/v_overlay.vue'
import v_menu from '@/components/v_menu.vue'


import Main_main from '@/views/Write/1.Main/Main_main.vue'
import Main_title from '@/views/Write/1.Main/Main_title.vue'
import Main_url from '@/views/Write/1.Main/Main_url.vue'
import Main_image from '@/views/Write/1.Main/Main_image.vue'
import Main_theme from '@/views/Write/1.Main/Main_theme.vue'
import Main_effect from '@/views/Write/1.Main/Main_effect.vue'
import Main_audio from '@/views/Write/1.Main/Main_audio.vue'

import Wedding_intro from '@/views/Write/2.Wedding/Wedding_intro.vue'
import Wedding_date from '@/views/Write/2.Wedding/Wedding_date.vue'
import Wedding_calendar from '@/views/Write/2.Wedding/Wedding_calendar.vue'
import Wedding_hall from '@/views/Write/2.Wedding/Wedding_hall.vue'
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

import Guest_comment from '@/views/Write/5.Guest/Guest_comment.vue'
import Guest_survey from '@/views/Write/5.Guest/Guest_survey.vue'

import Setting_button from '@/views/Write/6.Setting/Setting_button.vue'
import Setting_order from '@/views/Write/6.Setting/Setting_order.vue'

import Custom_style from '@/views/Write/7.Custom/Custom_style.vue'
import Custom_background from '@/views/Write/7.Custom/Custom_background.vue'
import Custom_primary from '@/views/Write/7.Custom/Custom_primary.vue'
import Custom_font from '@/views/Write/7.Custom/Custom_font.vue'
import Custom_sticker from '@/views/Write/7.Custom/Custom_sticker.vue'

import tinycolor from 'tinycolor2'

export default {
  components: { Preview, 
    Preview_button, Write_title, v_navigation, v_appbar, v_overlay, v_menu,
    Main_main, Main_title, Main_url, Main_image, Main_theme, Main_effect, Main_audio, 
    Wedding_intro, Wedding_date, Wedding_calendar, Wedding_hall, Wedding_map, Wedding_app, Wedding_transport, Wedding_guide,
    Info_infos, Info_image, Info_banks,
    Gallery_setting, Gallery_image, Gallery_video,
    Guest_comment, Guest_survey,
    Setting_button, Setting_order,
    Custom_style, Custom_background, Custom_primary, Custom_font, Custom_sticker
  },
 
data() {
  return {
    // 메뉴 설정
    menu: {
      login: false,
      create: false,
      save: true,
      preview: false,
      createMenu: true,
    },
    // 탭 설정
    activeTab: 'main',
    // 타이틀 설정
    title: {
      main: {
        label: 'main',
        title: '메인 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      wedding: { 
        label: 'wedding',
        title: '예식에 대한 내용을 작성해 주세요.', 
        sub_title: 'Plus X BX 2 : Wedding Information'
      },
      info: { 
        label: 'info',
        title: '인포 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 3 : Wedding Information'
      },
      gallery: { 
        label: 'gallery',
        title: '갤러리 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      guest: { 
        label: 'guest',
        title: '게스트 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      setting: { 
        label: 'setting',
        title: '설정 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
      custom: { 
        label: 'custom',
        title: '커스텀 디자인 프로세스와 디자인 전략 구축', 
        sub_title: 'Plus X BX 1 : Design Strategy'
      },
    },
      userData: [],
      mainData: { type: Object },
      main_id: { type: Array },
      main_url: 'https://jwpg-bucket.s3.ap-northeast-2.amazonaws.com/1680338687027.mp4',
      audio_id: { type: Array },
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
        image: {
            type: 'illust',
            illust: '',
            image: { type: Object },
        },
        theme: '',
        effect: {
          config: 'none',
          shape: 'none',
          color: 'none',
        },
        audio: {
          auto: false,
          audio: { type: Object },
        },
      },
      custom: {
        background_type: 'defaulted',
        background: '#E8DED5',
        background_on: '#000000',
        gradient:'#ffffff',
        style: 'defaulted',
        style_input: 'underlined',
        align: 'AlignLeft',
        primary: '#467351',
        primary_on: '#ffffff',
        radius: true,
        border: true,
        shadow: false,
        // 폰트
        font_color: '#5f544b',
        font_family: 'SpoqaHanSansLight',
        font_weight: '700',
        sticker: ''
      }, 
      wedding: {
        intro_title: '감사의 인사',
        intro_content: '<p>사랑으로 만난 두 사람이 믿음으로 한 길을 걷고자 합니다.</p><p>&nbsp;</p><p>아름다운 동행의 첫날.</p><p>&nbsp;</p><p>사랑을 나누고 실천하는 가정이 될 수 있도록 귀한 걸음 하시어 축복해주시면 더 없는 기쁨이 되겠습니다.</p>',
        date: new Date().toISOString().substr(0, 10),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
        calendar: 'CalendarDefaulted',
        countdown: 'true',
        hall_title: '오시는 길 안내',
        hall_name: '라비돌웨딩강남',
        hall_info: '1층 오릴리아홀',
        hall_tell: '02.538.3300',
        address: '서울특별시 강남구 논현로79길 72 (역삼동 828-10)',

        map: {
          type: 'kakao',
          lat: '37.566826004661',
          lng: '126.978652258309',
          use: 'true',
          map: { type: Object },
        },
        navermap: true,
        kakaomap: true,
        kakaonavi: true,
        tmap: true,
        transports: [
          { title: '지하철 이용시', content: '<h1><strong>[2호선] 을지로 입구역</strong></h1><p></p><p><strong>3번 출구</strong></p>지하 무빙 워크를 통해 약 500m 걸어오시면 예식장 입구와 연결됩니다.</p><p><strong>4번 출구</strong></p>출구 밖으로 나오신 뒤 약 400m 직진하시면 예식장 정문과 연결됩니다.</p><p>&nbsp;</p><h1><strong>[5호선] 여의나루역</strong></h1><p>1번 출구로 나오신 뒤 서울아파트 방면으로 직진하신 후 여의아파트에서 우회전 하여 직진하시면 예식장 후문과 연결됩니다.</p>' },
          { title: '버스 이용시', content: '<h1><strong>[홍대입구역 방면] 서교동(14013)</strong></h1><h2>﹡하차 시 정문과 연결됩니다.</h2><p><strong>일반&nbsp; &nbsp;</strong>88번</p><p><strong>간선&nbsp; &nbsp;</strong>360번, 662번</p><p><strong>지선&nbsp; &nbsp;</strong>6623번, 6628번</p><p>&nbsp;</p><h1><strong>[레드로드입구 방면] 서교동교회 (14876)</strong></h1><h2>﹡하차 후 좌측 방향의 지하도보 이용하시거나 횡단보도를 건너시면 정문과 연결됩니다.</h2><p><strong>일반&nbsp; &nbsp;</strong>11-1번, 11-2번, 83번, 530번</p><p><strong>간선&nbsp; &nbsp;</strong>162번, 261번</p><p><strong>지선&nbsp; &nbsp;</strong>5012번, 5618번, 5623번</p><p><strong>좌석&nbsp; &nbsp;</strong>301번, 320번, 871번</p><p></p><p>&nbsp;</p><h1><strong>[마포역 방면] 우리은행서교동지점 (19-284)</strong></h1><h2>﹡하차 시 정/후문과 연결됩니다.</h2><p><strong>간선&nbsp; &nbsp;</strong>160번, 260번, 262번</p>'},
          { title: '자가용 이용 시', content: '<p>올림픽 잠실 방향 / 영동대교 지나 3차선으로 차선 변경</p><p>잠실운동장 조금 못가서 빠져나와 GS칼텍스 주유소 / 강남병원(한국감정원)</p><p>강남경찰서 / 강남운전면허시험장 30M 직진</p>' },
        ],
        guide: {
          use: 'true',
          title: '예식 안내',
          content: '<h1><strong>본식</strong></h1><p>12시 0분 (접수 11시 30분)</p><p>&nbsp;</p><h1><strong>피로연</strong></h1><p>13시 0분 (접수 12시 30분)</p><p>&nbsp;</p><h2><u><strong>피로연 장소는 본관 5층 입니다.</strong></u></h2>',
        }
      },
info: {
  image: 'true',
  bank_title: '마음을 전하는 곳',
  user1: {
    fold: 'true',
    relation: '',
    example: '장남, 차남, 삼남',
    infos: {
      user: { name: '김철수', tell: '3333-03-8161331', set: '신랑' },
      father: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
      mother: { name: '김철수', tell: '3333-03-8161331', set: 'flower' },
    },
    banks: [ { bank: '', self: '', number: '22', name: '', kakaopay: '33', } ],
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
    banks: [ { bank: '', self: '', number: '22', name: '33', kakaopay: '', } ],
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
    comment_title: '축하의 메세지를 남겨주세요',

    password: '',
    password_check: 'false',
    comments: [
      { comment_writer: "김하나", comment_password: "1234", comment_content: "국밥이 9천원인 시대 이제 진짜 가성비가 되어버린 맥날 빅맥세트", timestamp: 'Wed Jul 01 2023 12:00:00 GMT+0900 (한국 표준시)' },
      { comment_writer: "김둘둘", comment_password: "5678", comment_content: "외식보단 싸지만 장바구니 물가도 비싼게 함정 1인 가구거나 균형 잡히게 챙겨 먹으려면 더 비쌀 수도 있고 시간까지 들어", timestamp: 'Wed Jul 05 2023 21:35:02 GMT+0900 (한국 표준시)' },
      { comment_writer: "김셋셋", comment_password: "1234", comment_content: "냉면이 만원 후반대라니..ㄷㄷ 끔찍하네요", timestamp: 0 },
      { comment_writer: "김넷넷", comment_password: "1234", comment_content: "호주에 있는 한국기업에서 인턴을 한 경험이 있는데 거의 대부분이 도시락을 들고 오더라구요 ..... 호주의 한끼 가격이 싸게먹으면 15000원 정도니  점점 저희도 그렇게 바뀌어 가지 않을까 싶네요", timestamp: 0 },
      { comment_writer: "이다섯", comment_password: "1234", comment_content: "일본의 도시락 문화는 중고등학교에서 급식을 안하기 때문에 어린시절부터 도시락을 먹는게 큰 듯. 영상중에 무슨 급식율 95% 이러는데 이건 초등학교 얘기고 중고등학교는 급식 없음. 도시락 싸거나 빵같은거 사먹는게 대부분임. 내가 지금 일본에서 10년 사는중인데 급식하는 중고등학교 본적이 없음. 급식이란 이름의 신청제 배달도시락 비슷한거만 함", timestamp: 0 },
      { comment_writer: "최여섯", comment_password: "1234", comment_content: "비싸지는 외식비 때문에 편의점 도시락이나 구내식당의 인기가 올라가네요.", timestamp: 0 },
    ],
    survey: 'true',
    survey_title: '게스트 설문조사',
    survey_content: '<p>번거로우시겠지만,</p><p>아래 날짜까지 참석 여부의 응답을 부탁드립니다.</p><p>&nbsp;</p><h1><strong>2023년 07월 29일 (토)</strong></h1><h2></h2><h2>﹡기일까지의 연락이 어려운 경우에는 따로 연락을 전해 주시면 감사하겠습니다.</h2>',
    rsvp: true,
    info: true,
    pal: true,
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
          //{ value: 'Main', title: '메인', accept: false },
          { value: 'Intro', title: '인트로', accept: false },
          { value: 'Info', title: '정보', accept: false },
          { value: 'Calendar', title: '달력', accept: false },
          { value: 'Map', title: '예식장 위치 및 정보', accept: false },
          //{ value: 'Gallery', title: '갤러리', accept: false },
          { value: 'Comment', title: '방명록', accept: false },
          { value: 'Survey', title: '게스트용 설문조사', accept: false },
          { value: 'Deposit', title: '계좌 정보', accept: false },
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
  methods: {
    // 네비게이션 탭 관련 //
    changeActiveTab(tab) {
      this.activeTab = tab;
      this.scrollToSection(tab);
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    // 네비게이션 탭 관련 //
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

    getAmainData() {
      const id = this.mainData.id
      getAImage(id).then((res) => {
        this.mainData = res
      })
  },

    handleSubmit(e) {
      console.log ('hihi')
      e.preventDefault()

      const id = this.userData.id
      const formdata = new FormData()
      // 유저 아이디
      formdata.append('user_id', id)
      const main = this.main
      for (const key in main) {
        formdata.append(key, main[key])
      }
      createPost(formdata).then((res) => {
        this.$router.push({path: '/me'})
      })
   
    },
  },
}
</script>
