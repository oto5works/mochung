<template>
  <section id="previewIntro" class="--pa_0-4-0">
    <article>
      <div class="sp_72" />
      <div class="sp_80" v-if="stamp === 'bird'" />
      <div class="pa_48">
        <div class="previewSubTitle">WELCOME</div>
        <div class="sp_24" />

        <div class="flex --justify-content width_100">
          <div class="previewTitle">{{ introData.title }}</div>
        </div>

        <div class="sp_10" />
        <div class="font tiptap --text-align" v-html="introData.content" />
      </div>
      <stampView
        v-if="stamp"
        class="align-items_center --primary-color"
        :stamp="stamp"
        type="1"
      />
      <div v-if="!stamp" class="sp_48" />
      <div class="pa_24 --display_none-none-block">
        <div class="h-hr" />
      </div>
      <div class="sp_16 --display_none-none-block" />
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
          :root="false"
          :dialog="dialog"
          @update:dialog="dialog = $event"
        />
      </buttonDefaulted>

      <div class="h-hr --display_none-none-block" />
    </article>
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
    introHostInfo: defineAsyncComponent(() =>
      import("@/modules/intro/introHostInfo.vue")
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
    stampView: defineAsyncComponent(() => import("@/modules/stamp/stampView")),
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
