<template>
  <article id="introView" :class="{ fnAnimation: fnAnimation }">
    <sectionView id="previewIntro">
      <div class="container previewIntro">
        <div class="tiptap-wrap">
          <div
            class="--font-size_22 font-weight_700 line-height_130 width_100"
            :class="['fade-in', { isVisible: isVisible }]"
          >
            {{ introData.title }}
          </div>
          <div
            class="preview-tiptap"
            :class="['fade-in slide-up', { isVisible: isVisible }]"
            v-html="introData.content"
          />
        </div>

        <div class="sp_96" />
        <stampView />
      </div>
    </sectionView>

    <sectionView id="previewHost" :class="design">
      <div class="container previewHost">
        <introFamily v-if="familyExist" />
        <introHost />
        <buttonCustom v-if="hostFunctions.fnContact" @click="dialog = true">
          <span>Contact us</span>
        </buttonCustom>
        <div v-if="shadow" class="shadow" />
        <div class="overlay" />
      </div>
    </sectionView>
    <introContact
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </article>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import "@/preview/animation.scss";

export default {
  components: {
    introFamily: defineAsyncComponent(() =>
      import("@/preview/intro/introFamily.vue")
    ),
    introHost: defineAsyncComponent(() =>
      import("@/preview/intro/introHost.vue")
    ),
    introContact: defineAsyncComponent(() =>
      import("@/preview/intro/introContact.vue")
    ),
    stampView: defineAsyncComponent(() =>
      import("@/preview/stamp/stampView.vue")
    ),
  },
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters({
      introData: "getIntroData",
      hostFunctions: "getHostFunctions",
      familyExist: "getFamilyExist",
      design: "getDesign",
      shadow: "getShadow",
      fnAnimation: "getFnAnimation", // 추가된 getter
    }),
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    closeDialog() {
      this.$emit("update:dialog", false);
    },
  },
};
</script>
