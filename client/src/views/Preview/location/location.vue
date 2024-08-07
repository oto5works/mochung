<template>
  <div>
    <section id="previewLocation" class="--pa_0-4-0">
      <article class="pa_24">
        <stampView
        v-if="stamp"
        class="align-items_center --primary-color"
        :stamp="stamp"
        type="2"
      />
      <div class="previewSubTitle">LOCATION</div>
        <div class="sp_12" />
        <div class="flex --justify-content width_100">
  <div class="previewTitle">{{ locationData.title }}</div>
</div>

        <div class="sp_12" />
        <div class="h-hr --display_none-none-block" />
        <div class="sp_24" />
        <div
          style="height: fit-content"
          class="flex justify-content_space-between"
        >
          <div style="width: 40%" class="--font-size_18 line-height_130 --font-weight">
            {{ locationData.name }}<br />{{ locationData.info }}
          </div>
          <div
            style="width: 10%"
            class="flex flex-direction_column justify-content_center align-items_center"
          >
            <div class="v-hr --display_none-none-block" />
          </div>
          <div style="width: 50%">
            <div class="subTitle">ADDRESS</div>
            <div class="sp_4"/>
            <div class="--font-size_13 line-height_130 opacity_70">
              {{ locationData.address }} {{ locationData.detail }}
            </div>
            <div class="sp_18" />
              <div class="subTitle">TELL</div>
              <div class="sp_4"/>
              <button class="--font-size_13 line-height_130 opacity_70 text-decoration_underline" @click="callWeddingHallTell">{{ locationData.tell }}</button>
            <div class="sp_12" />
          </div>
        </div>
        <div class="sp_24" />
        <div class="h-hr --display_none-none-block" />
      </article>
    </section>
    <locationMap
      :map="locationData.map"
      :lat="locationData.lat"
      :lng="locationData.lng"
      :fileUrl="locationData.fileUrl"
    />

    <div class="sp_48" />

    <div class="locationApp">
      <button
        class="button-sticky button-defaulted --border-radius_32 gap_18"
        :class="{ isSticky: isSticky }"
      >
        <span v-if="isSticky">앱으로 보기</span>
        <icon><location /></icon>
      </button>
    </div>

    <locationTransport />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

import location from "@/components/icon/location.vue";

export default {
  components: {
    location,
    locationMap: defineAsyncComponent(() =>
      import("@/views/preview/location/locationMap.vue")
    ),
    locationTransport: defineAsyncComponent(() =>
      import("@/views/preview/location/locationTransport.vue")
    ),
    stampView: defineAsyncComponent(() => import("@/modules/stamp/stampView")),
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
      stamp: "getStamp",
    }),
  },
  mounted() {
    const el = this.$el.querySelector(".locationApp");
    const observer = new IntersectionObserver(
      ([e]) => this.handleIntersectionChange(e.intersectionRatio < 1),
      { threshold: [1] }
    );
    observer.observe(el);
  },
  data() {
    return {
      isSticky: false,
      tab: null,
    };
  },
  methods: {
    callWeddingHallTell() {
      let phoneNumber = this.locationData.tell;
      phoneNumber = phoneNumber.replace(/\D/g, "");
      window.open(`tel:${phoneNumber}`);
    },
    handleIntersectionChange(isIntersecting) {
      this.isSticky = !isIntersecting;
    },
  },
};
</script>
<style scoped>
.subTitle {
  position: relative;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.1px;
  font-family: "archivo";
  line-height: 130%;
}
</style>