<template>
  <div v-if="stamp" class="stamp">
    <component :is="stamp" :class="stamp" />
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    stamp: defineAsyncComponent(() => import("@/components/stamp/stamp")),
    leaf1: defineAsyncComponent(() => import("@/preview/stamp/leaf1.vue")),
    lily: defineAsyncComponent(() => import("@/preview/stamp/lily.vue")),
    asterisk: defineAsyncComponent(() => import("@/preview/stamp/asterisk.vue")),

  },
  props: {
    title: { type: String },
    type: { type: String },
  },
  computed: {
    ...mapGetters({
      stamp: "getStamp",
    }),
  },
};
</script>

<style scoped>
.stamp {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
}
.stamp .leaf1 {
  width: 28%;
  height: auto;
}
.stamp .lily {
  width: 28%;
  height: auto;
}
.stamp .asterisk {
  width: 16px;
  height: auto;

}
</style>
