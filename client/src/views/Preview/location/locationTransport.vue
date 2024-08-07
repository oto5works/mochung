<template>
  <section id="previewTransport">
    <div class="sp_24" />

    <v-tabs class="tab-defaulted pa_16" v-model="tab">
      <v-tab
        v-for="(option, index) in transportData"
        :key="index"
        :value="index"
      >
        <span>{{ option.title }}</span>
      </v-tab>
    </v-tabs>

    <div class="--pa_0-4-0">
      <article class="pa_24">
        <div class="sp_24" />

        <div v-if="tab !== ''">
          <div
            v-for="(option, index) in transportData"
            :key="index"
            v-show="tab === index"
          >
            <div class="tiptap --text-align" v-html="option.content" />
          </div>
        </div>
        <div class="sp_24" />
        <div
          class="absolute_100 outline_bo box-shadow_1-bo --display_none-block-none"
        />
      </article>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    ...mapGetters({
      transportData: "getTransportData",
    }),
  },
};
</script>
