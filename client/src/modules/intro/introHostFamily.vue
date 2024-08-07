<template>
  <div
    style="letter-spacing: 0.1em"
    class="flex flex-direction_column gap_8 --font-weight"
  >
    <div
      class="flex align-items_center justify-content_flex-end gap_4"
      v-for="(option1, index1) in hostFamily"
      :key="index1"
    >
      <div
        v-for="(option2, index2) in option1"
        :key="index2"
        class="flex align-items_center gap_4"
      >
        <div v-if="index2 !== 0 && option2.name">·</div>
        <div class="flex align-items_center">
          <icon v-if="option2.info" class="icon_16">
            <component :is="option2.info" />
          </icon>
          <div v-if="option2.name">{{ option2.name }}</div>
        </div>
      </div>
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
    }),
  },
};
</script>
