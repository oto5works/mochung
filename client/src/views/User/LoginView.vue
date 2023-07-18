<template>
  <div class="login">
<div class="login__image-wrap">

  <img :src="randomImageUrl" alt="Random Image">


</div>
<div class="login__content-wrap">
  <svg version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
            y="0px" viewBox="0 0 50 10" xml:space="preserve">
            <path class="st0" d="M3.1,3.3C1.4,3.3,0,4.7,0,6.4s1.4,3.1,3.1,3.1s3.1-1.4,3.1-3.1S4.8,3.3,3.1,3.3z M3.1,8.1
	c-0.9,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7C4.8,7.4,3.9,8.1,3.1,8.1z"/>
<path class="st0" d="M9.6,3.3c-1.7,0-3.1,1.4-3.1,3.1v2.4c0,0.3,0.3,0.7,0.7,0.7c0.3,0,0.7-0.3,0.7-0.7V6.4c0-0.9,0.7-1.7,1.7-1.7
	c1,0,1.7,0.7,1.7,1.7v2.4c0,0.3,0.3,0.7,0.7,0.7c0.3,0,0.7-0.3,0.7-0.7V6.4C12.8,4.7,11.3,3.3,9.6,3.3z"/>
<path class="st0" d="M43.3,3.3c-1.7,0-3.1,1.4-3.1,3.1v2.4c0,0.3,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7V6.4c0-0.9,0.7-1.7,1.7-1.7
	C43.7,4.7,44,4.3,44,4S43.7,3.3,43.3,3.3z"/>
<path class="st0" d="M49.3,0.4c-0.3,0-0.7,0.3-0.7,0.7v2.7c-0.5-0.3-1-0.5-1.7-0.5c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1
	S50,8.1,50,6.4V1.1C50,0.7,49.7,0.4,49.3,0.4z M46.9,8.1c-0.9,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7
	C48.6,7.4,47.8,8.1,46.9,8.1z"/>
<path class="st0" d="M18.7,0.4c-0.3,0-0.7,0.3-0.7,0.7v2.7c-0.5-0.3-1-0.5-1.7-0.5c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1
	c1.7,0,3.1-1.4,3.1-3.1V0.9C19.3,0.5,19,0.4,18.7,0.4z M16.3,8.1c-0.9,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7
	C18,7.4,17.1,8.1,16.3,8.1z"/>
<path class="st0" d="M36.6,3.3c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1c0.3,0,0.7-0.3,0.7-0.7c0-0.3-0.3-0.7-0.7-0.7
	c-0.9,0-1.7-0.7-1.7-1.7s0.7-1.7,1.7-1.7c0.9,0,1.7,0.7,1.7,1.7v2.4c0,0.3,0.3,0.7,0.7,0.7c0.3,0,0.7-0.3,0.7-0.7V6.4
	C39.7,4.7,38.4,3.3,36.6,3.3z"/>
<path class="st0" d="M22.9,3.3c-1.7,0-3.1,1.4-3.1,3.1s1.4,3.1,3.1,3.1c1.7,0,3.1-1.4,3.1-3.1S24.7,3.3,22.9,3.3z M22.9,8.1
	c-0.9,0-1.7-0.7-1.7-1.7c0-1,0.7-1.7,1.7-1.7c1,0,1.7,0.7,1.7,1.7C24.7,7.4,23.8,8.1,22.9,8.1z"/>
<path class="st0" d="M30.7,4.8c0.5,0,0.9,0.2,1.2,0.5c0.3,0.3,0.7,0.3,1,0c0.3-0.3,0.3-0.7,0-1c-0.5-0.5-1.4-0.9-2.2-0.9
	c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1c0.9,0,1.5-0.3,2.2-0.9c0.3-0.3,0.3-0.7,0-1c-0.3-0.3-0.7-0.3-1,0
	c-0.3,0.3-0.7,0.5-1.2,0.5c-0.9,0-1.7-0.7-1.7-1.7C29.1,5.5,29.8,4.8,30.7,4.8z"/>
          </svg>
<div class="login__content">
          <h3 class="ani_1" :class="{ 'show': showAni_1 }">환영합니다.</h3>
          <h2 class="ani_2" :class="{ 'show': showAni_2 }">회원가입과 로그인은 네이버로 시작가능합니다.</h2>

  <LoginNaver />
<h1 class="ani_3" :class="{ 'show': showAni_3 }">관리자 로그인</h1>
</div>

</div>

    
  </div>
  
</template>

<script>
import LoginNaver from './LoginNaver.vue'
export default {
  components: { LoginNaver },
  data() {
    return {
      imageCount: 10, // number of images
      imagePath: "/src/assets/image/login/login-", // path to images
      imageExtension: ".jpg", // file extension of images
      showAni_1: false,
      showAni_2: false,
      showAni_3: false,
      showAni_4: false,

    };
  },
  computed: {
    randomImageUrl() {
      const randomIndex = Math.floor(Math.random() * this.imageCount) + 1;
      return `${this.imagePath}${randomIndex}${this.imageExtension}`;
    },
  },
  mounted() {
    setTimeout(() => {
      this.showAni_1 = true
    }, 400)
    setTimeout(() => {
      this.showAni_2 = true
    }, 800)
    setTimeout(() => {
      this.showAni_3 = true
    }, 1200)
    setTimeout(() => {
      this.showAni_4 = true
    }, 2000)
  }
}
</script>