<template>
  <div class="background">
    <div class="backgroundOverlay" />
    <backgroundFilter
      v-if="backgroundData.filter"
      :filter="backgroundData.filter"
    />

    <backgroundDefaulted
      v-if="backgroundData.styleBackground === 'defaulted'"
      :backgroundColor="backgroundData.backgroundColor"
    />

    <backgroundGradient
      v-if="backgroundData.styleBackground === 'gradient'"
      :backgroundColor="backgroundData.backgroundColor"
      :gradient1="backgroundData.gradient1"
      :gradient2="backgroundData.gradient2"
      :gradient3="backgroundData.gradient3"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    backgroundFilter: defineAsyncComponent(() =>
      import("@/modules/backgroundFilter/backgroundFilter.vue")
    ),
    backgroundDefaulted: defineAsyncComponent(() =>
      import("@/modules/background/backgroundDefaulted.vue")
    ),
    backgroundGradient: defineAsyncComponent(() =>
      import("@/modules/background/backgroundGradient.vue")
    ),
  },
  computed: {
    ...mapGetters({
      backgroundData: "getBackgroundData",
    }),
  },
};
</script>

<style scoped>
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/*--- Background ---*/
.backgroundOverlay {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: var(--none-block-none);
  background-color: var(--background-on);
  opacity: 0.12;
}

.editorGradient,
.previewGradient {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  --gradient-color-1: var(--background-color);
  --gradient-color-2: var(--gradient-1);
  --gradient-color-3: var(--gradient-3);
  --gradient-color-4: var(--gradient-2);
}
</style>
