<template>
  <div id="previewNotice">
    <section class="pa_16" v-if="noticeData.fnNotice">
      <article class="pa_24">
        <div class="sp_12" />

        <div class="previewSubTitle">NOTICE</div>
        <div class="sp_12" />
        <div class="flex --justify-content width_100">
  <div class="previewTitle">{{ noticeData.title }}</div>
</div>


      




        <div class="sp_48" />

        <v-tabs class="tab-text" v-model="tab">
          <v-tab
            v-for="(option, index) in noticeData.notices"
            :key="index"
            :value="index"
          >
            <span>{{ option.title }}</span>
          </v-tab>
        </v-tabs>

        <div v-if="tab !== ''">
          <div
            v-for="(option, index) in noticeData.notices"
            :key="index"
            v-show="tab === index"
          >
            <div
              class="tiptap --text-align"
              v-html="option.content"
            />
          </div>
        </div>

        <div class="sp_48" />
        <div class="absolute_100 outline_pc box-shadow_1-bo" />
        <div class="absolute_100 overlay_pc" />
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import previewTitle from "@/views/preview/previewTitle.vue";
import sal from "sal.js";

export default {
  components: { previewTitle },
  computed: {
    ...mapGetters({
      noticeData: "getNoticeData",
    }),
  },
  mounted() {
    this.initializeSal();
  },
  watch: {
    'noticeData.fnNotice': function(newVal, oldVal) {
      if (newVal) {
        // Reload 'sal' when noticeData.fnNotice becomes true
        this.initializeSal();
      }
    }
  },
  data() {
    return {
      tab: "",
    };
  },
  methods: {
    initializeSal() {
      sal({
        threshold: 0.3,
        once: false,
      });
    },
  },
};
</script>
