<template>
    <div class="P-info-wrap">
      <!--
        <div class="P-info-name">
            <div class="goin" v-if="info.m_Fgoin === 'goin'">故</div>
            <div class="goin" v-if="info.m_Fgoin === 'flower'">人</div>
            <h1>{{ set.user1_h1_name }}
            <span v-if="set.user1_h1_name"><span v-if="set.user1_h2_name">·</span></span>
            {{ set.user1_h2_name }}<span v-if="m_relation">의</span> {{ info.m_relation }}   {{ set.user1_name }}</h1>
        </div>
        <div class="P-info-btn">
          <v-btn class="text-btn" @click="searchCoord"><icon icon="Tell"><Tell /></icon>연락 하기</v-btn>
        </div>
        -->
    </div>
</template>
<script>
import icon from '@/components/Icons/icon.vue'
import Tell from '@/components/Icons/Tell.vue'
import sal from "sal.js";

export default {
  components: { icon, Tell },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    })
  },
  props: {
    info: { type: Object },
    main: { type: Object },
  },
  };
  </script>
