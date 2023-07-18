<template>
  <div>
  <section>
    <div class="v-hr --display_block-none-block" />
    <article data-sal="slide-up" data-sal-duration="700">
      <div class="sp_96"/>
      <Calendar_01 v-if="wedding.calendar === 'Calendar_01'" :date="wedding.date" :main="main" />
      <Calendar_02 v-if="wedding.calendar === 'Calendar_02'" :date="wedding.date" :main="main" />
      <Calendar_03 v-if="wedding.calendar === 'Calendar_03'" :date="wedding.date" :main="main" />

      <div class="sp_48"/>
    </article>
  </section>
  <Calendar_countdown v-if="wedding.countdown === 'true'"  :date="wedding.date" :time="wedding.time" :user1="info.user1.infos.user.name" :user2="info.user2.infos.user.name" />


</div>
</template>

<script>
import Calendar_01 from "@/views/Preview/4.Calendar/Calendar_01.vue";
import Calendar_02 from "@/views/Preview/4.Calendar/Calendar_02.vue";
import Calendar_03 from "@/views/Preview/4.Calendar/Calendar_03.vue";


import sal from "sal.js";
import Calendar_countdown from "@/views/Preview/4.Calendar/Calendar_countdown.vue";

export default {
  components: { Calendar_01, Calendar_02, Calendar_03, Calendar_countdown },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    });
  },
  props: {
    main: { type: Object },
    info: { type: Object },
    wedding: { type: Object },
  },

};
</script>
