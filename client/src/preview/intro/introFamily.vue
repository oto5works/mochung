<template>
  <div class="display_flex flex-direction_column align-items_inherit gap_8">
    <div
      class="display_flex align-items_center --font-size_11 gap_4"
      v-for="(option1, index1) in hostFamily"
      :key="index1"
    >
      <div
        class="display_flex align-items_center font-weight_500 gap_4"
        v-for="(option2, index2) in option1"
        :key="index2"
      >
        <span v-if="index2 !== 0 && option2.name">·</span>
        <div class="display_flex align-items_center gap_4 letter-spacing_8">
          <icon v-if="option2.info" class="icon_12">
            <component :is="option2.info" />
          </icon>
          <span v-if="option2.name">{{ option2.name }}</span>
        </div>
      </div>
      <span v-if="hostInfo[index1].relation">{{
        hostInfo[index1].relation
      }}</span>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    kanji: defineAsyncComponent(() => import("@/components/icon/kanji.vue")),
    flower: defineAsyncComponent(() => import("@/components/icon/flower.vue")),
    ribbon: defineAsyncComponent(() => import("@/components/icon/ribbon.vue")),
    cross: defineAsyncComponent(() => import("@/components/icon/cross.vue")),
  },
  computed: {
    ...mapGetters({
      hostFamily: "getHostFamily",
      hostInfo: "getHostInfo",
    }),
  },
};
</script>
