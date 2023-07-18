<template>
  <div>
    <div class="sp_72"/>
    <h5 class="text-align_center" style="letter-spacing: 0.4em;">{{ title }}</h5>
    <div v-if="title" class="sp_40"/>
    <Main_image v-if="image.type === 'image'" :url="image.image.url"/>
      <div class="image width_100 flex justify-content_center align-items_center --border-radius_12">
        
        <Main_illust v-if="image.type === 'illust'" :illust="image.illust" />
      </div>
      <div class="sp_40"/>
      <div class="flex align-items_center justify-content_center gap_12">
        <h3 style="letter-spacing: 0.4em;">{{ user1 }}</h3>
        <h5 style="letter-spacing: 0.1em;">&</h5>
        <h3 style="letter-spacing: 0.4em;">{{ user2 }}</h3>
      </div>
    
  
        <div class="sp_72"/>

        <div class="flex align-items_center justify-content_center gap_8">
          <h5>{{ set.date }}</h5>
          <h5>{{ set.time }}</h5>
        </div>
        <div class="sp_4"/>
        <div class="flex align-items_center justify-content_center gap_8">
          <h5>{{ hall }}</h5>
          <h5>{{ info }}</h5>
        </div>

    <div class="sp_24"/>
  </div>
</template>
<script>
import Main_image from "@/views/Preview/1.Main/Main_image.vue";
import Main_illust from "@/views/Preview/1.Main/Main_illust.vue";


export default {
  components: { Main_image, Main_illust },
  data() {
      return {
        set:{
          date: '',
          time: '',
        },
      }
    },
  props: {
    title: { type: String },
    user1: { type: String },
    user2: { type: String },
    date: { type: String },
    time: { type: String },
    hall: { type: String },
    info: { type: String },
    image: { type: Object }
  },
  mounted() {
    this.set_date()
    this.set_time()
  },
  watch: {
    date() {
      this.set_date();
    },
    time() {
      this.set_time();
    },
  },
  methods: {
    set_date() {
        let dateStr = this.date || new Date().toISOString().substring(0, 10);
        let date = new Date(dateStr);
        let daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        let dayOfWeek = daysOfWeek[date.getUTCDay()];
        let set_date = dateStr.replace(/(\d{4})-(\d{2})-(\d{2})/, '$1년 $2월 $3일');
        set_date = `${set_date} ${dayOfWeek}`;
        this.set.date = set_date;
    },
    set_time() {
        let current = new Date();
        let currenthours = current.getHours();
        let currentminutes = current.getMinutes();
        let currentTime = currenthours + ":" + currentminutes
        let timeStr = this.time || currentTime
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
