<template>
  <div class="main-joy">
    <div class="image">
  <img :src="set.url" v-if="set.image" />
  <video ref="video" autoplay muted loop v-if="set.video">
    <source :src="set.url" type="video/mp4">
  </video>
    </div>
    <div class="main-joy-wrap">
    <div class="date__content">
      <div class="day">{{ set.day }}</div>
      <div class="monthyear"><div class="month">{{ set.month }}</div><div class="year">{{ set.year }}</div></div>
      </div>
    <div class="name">{{ info.user1_name }}<br>{{ info.user2_name }}</div>
    <div class="info__content">
      <div class="info">{{ wedding.hall_name }} {{ wedding.hall_info }}</div>
      <hr class="stroke">
      <div class="title"></div>
      </div>
    </div>
    <div class="main-joy-blank"/>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
      return {
        set:{
          url:'',
          date:'',
          year:'',
          month:'',
          day:'',
          time: '',
          image: '',
          video: '',
        },
      }
    },
  props: {
    main_url: '',
    wedding: { type: Object },
    info: { type: Object },
  },
  mounted() {
    this.set_date()
    this.set_time()
    this.set_url()
  },
  watch: {
    'main_url'() {
      this.set_url();
    },
    'wedding.date'() {
      this.set_date();
    },
    'wedding.time'() {
      this.set_time();
    },
    'set.url'(newVal, oldVal) {
      if (this.set.video && this.$refs.video) {
        this.$refs.video.load();
        this.$refs.video.play();
      }
    }
  },
  methods: {
    set_url() {
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      const videoExtensions = ['.mp4', '.webm'];
      const set_url = this.main_url || 'https://jwpg-bucket.s3.ap-northeast-2.amazonaws.com/1676014628956.webp'
      const extension = set_url.split('.').pop();
      const set_image = imageExtensions.includes(`.${extension}`);
      const set_video = videoExtensions.includes(`.${extension}`);
      this.set.url = set_url
      this.set.image = set_image
      this.set.video = set_video
    },
    set_date() {
      const dateArray = this.wedding.date.split('-')
      const date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2])
      const formatter = new Intl.DateTimeFormat('en-US', { month: 'long' })
      this.set.year = dateArray[0]
      this.set.month = formatter.format(date)
      this.set.day = dateArray[2]
    },
    set_time() {
        let current = new Date();
        let currenthours = current.getHours();
        let currentminutes = current.getMinutes();
        let currentTime = currenthours + ":" + currentminutes
        let timeStr = this.wedding.time || currentTime
        let [hours, minutes] = timeStr.split(':')
        let set_time;

        if (hours > 12) {
            set_time = `오후 ${hours - 12}시 ${minutes}분`
        } else {
            set_time = `오전 ${hours}시 ${minutes}분`
        }
        this.set.time = set_time
    },
  }    
};
</script>
