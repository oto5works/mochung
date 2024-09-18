<template>
  <article>
    <sectionView id="previewLocation">
      <div class="container previewLocation">
        <div class="width_100 --font-size_24 font-weight_700">
          {{ locationData.title }}
        </div>
        <div
          style="height: fit-content"
          class="display_flex justify-content_space-between text-align_left"
        >
          <div
            style="width: 36%"
            class="display_flex flex-direction_column gap_24"
          >
            <span class="--font-size_16 font-weight_700 line-height_130">{{
              locationData.name
            }}</span>
            <span class="--font-size_11 line-height_130"
              >({{ locationData.info }})</span
            >
          </div>
          <div
            style="width: 46%"
            class="display_flex flex-direction_column gap_48 --font-size_13"
          >
            <span class="line-height_130">
              {{ locationData.address }}<br />{{ locationData.detail }}
            </span>
            <div class="tell">
              <div class="font-weight_700">TELL</div>
              <span
                class="line-height_130 text-decoration_underline cursor_pointer"
                @click="callWeddingHallTell"
                >{{ locationData.tell }}</span
              >
            </div>
          </div>
        </div>

        <buttonCustom @click="dialog = true">
          <span>VIEW ON MAP</span>
        </buttonCustom>
        <locationApp
          v-if="dialog"
          :dialog="dialog"
          @update:dialog="dialog = $event"
        />
      </div>
    </sectionView>

    <section id="previewMap" :class="design">
      <div class="container previewMap">
        <locationMap
          :map="locationData.map"
          :lat="locationData.lat"
          :lng="locationData.lng"
          :fileUrl="locationData.fileUrl"
        />
        <div v-if="shadow" class="shadow" />
      </div>
    </section>

    <sectionView id="previewTransport">
      <div class="container previewTransport">
        <locationTransport />
      </div>
    </sectionView>
  </article>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    locationMap: defineAsyncComponent(() =>
      import("@/preview/location/locationMap.vue")
    ),
    locationTransport: defineAsyncComponent(() =>
      import("@/preview/location/locationTransport.vue")
    ),
    locationApp: defineAsyncComponent(() =>
      import("@/preview/location/locationApp.vue")
    ),
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
      design: "getDesign",
      shadow: "getShadow",
    }),
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    callWeddingHallTell() {
      let phoneNumber = this.locationData.tell;
      phoneNumber = phoneNumber.replace(/\D/g, "");
      window.open(`tel:${phoneNumber}`);
    },
  },
};
</script>
