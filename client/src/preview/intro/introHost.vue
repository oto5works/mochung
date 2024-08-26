<template>
  <section id="previewIntro" class="--pa_0-4-0">

    
    
      <div
        style="height: 64px"
        class="flex align-items_center justify-content_center gap_16 --font-size_13"
      >
        <div v-if="familyExist" class="flex">
          <introFamily />
          <introRelation />
        </div>
        <div
          v-if="familyExist"
          style="height: 64px"
          class="v-hr --display_none-none-block"
        />
        <introHostInfo />
      </div>
      <div class="sp_16 --display_none-none-block" />
      <div class="pa_24 --display_none-none-block">
        <div class="h-hr" />
      </div>

      <div class="sp_64" />

      <buttonDefaulted
        v-if="hostFunctions.fnContact"
        class="--border-radius_32 gap_18"
        @click="dialog = true"
      >
        <span>All our polos</span>
        <icon class="icon_20"><phone /></icon>
        <introBottomSheet
          v-if="dialog"
          :dialog="dialog"
          @update:dialog="dialog = $event"
        />
      </buttonDefaulted>

 
  </section>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import sal from "sal.js";
import phone from "@/components/icon/phone";

export default {
  components: {
    phone,
    introHost: defineAsyncComponent(() =>
      import("@/preview/intro/introHost.vue")
    ),
    introHostInfo: defineAsyncComponent(() =>
      import("@/preview/intro/introHostInfo.vue")
    ),
    introHostFamily: defineAsyncComponent(() =>
      import("@/modules/intro/introHostFamily.vue")
    ),
    introHostRelation: defineAsyncComponent(() =>
      import("@/modules/intro/introHostRelation.vue")
    ),
    introBottomSheet: defineAsyncComponent(() =>
      import("@/modules/intro/introBottomSheet.vue")
    ),
    stampView: defineAsyncComponent(() => import("@/preview/stamp/stampView")),
  },
  mounted() {
    sal({
      threshold: 0.3,
      once: true,
    });
  },
  computed: {
    ...mapGetters({
      introData: "getIntroData",
      hostFunctions: "getHostFunctions",
      stamp: "getStamp",
      familyExist: "getFamilyExist",
    }),
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
.previewTitle .title {
  max-width: unset;
}
</style>
