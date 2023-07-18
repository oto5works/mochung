<template>
    <div class="image width_100 pa_16 flex justify-content_center align-items_center --border-radius_12">
    <!-- Image -->
        <img class="width_100 object-fit_cover" :src="set.url" v-if="set.image" />
    <!-- Video -->
        <video class="width_100 object-fit_cover" ref="video" autoplay muted loop v-if="set.video">
            <source :src="set.url" type="video/mp4">
        </video>
    </div>
</template>
<script>
export default {
components: { },
data() {
    return {
      set:{
        url:'',
        image: '',
        video: '',
      },
    }
  },
props: {
  url: '',
},
mounted() {
    this.set_url();
},
watch: {
  url() {
    this.set_url();
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
    const set_url = this.url

    if (this.url) {
      const extension = set_url.split('.').pop();
      const set_image = imageExtensions.includes(`.${extension}`);
      const set_video = videoExtensions.includes(`.${extension}`);
      this.set.url = set_url
      this.set.image = set_image
      this.set.video = set_video
  } else {
    this.set.url = ''
    this.set.image = false
    this.set.video = false
  }

  },
}    
};
</script>
