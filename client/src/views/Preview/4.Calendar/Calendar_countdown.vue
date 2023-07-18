<template>
    <section class="section__background" data-sal="slide-up" data-sal-duration="700">
      

      <article>
        <div class="sp_32"/>

<div class="flex align-items_center justify-content_center gap_4">
<p>{{ user1 }}</p>
<button class="button-icon ">
  <icon class="heart --primary-color" icon="DDayHeartFill"><DDayHeartFill /></icon>
  <icon class="heart --font-color" icon="DDayHeartStroke"><DDayHeartStroke /></icon>
</button>
<p>{{ user2 }}</p><br/>
</div>
<div class="sp_4"/>
<p class="text-align_center">결혼식까지 남은 시간</p>

<div class="sp_32"/>
    <v_flip v-if='shouldRenderFlip' :date="date" :time="time" />
    <div class="sp_32"/>
    <div class="article__overlay"/>
  </article>
<div class="section__overlay"/>


</section>
</template>

<script>
import v_flip from '@/components/v_flip.vue'
import icon from '@/components/Icons/icon.vue'
import DDayHeartStroke from '@/components/Icons/DDayHeartStroke.vue'
import DDayHeartFill from '@/components/Icons/DDayHeartFill.vue'
import sal from "sal.js";

export default {
  components: { v_flip, icon, DDayHeartStroke, DDayHeartFill, sal },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    });
  },
  props: { date: { type: String }, time: { type: String }, user1: { type: String }, user2: { type: String } },
  data() {
    return {
      shouldRenderFlip: true,
    };
  },
  watch: {
  date: function() {
    this.reloadFlip();
  },
  time: function() {
    this.reloadFlip();
  },
},
methods: {
  reloadFlip() {
    this.shouldRenderFlip = false;
    this.$nextTick(() => {
      this.shouldRenderFlip = true;
    });
  },
},
};
</script>

<style scoped>
.heart {
  position: absolute;
  top: 0;
  left: 0;
}

</style>
