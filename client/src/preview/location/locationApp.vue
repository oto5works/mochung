<template>
  <div class="locationApp">
    <button
      class="button-sticky button-defaulted --border-radius_32 gap_18"
      :class="{ isSticky: isSticky }"
    >
      <icon><location /></icon>
      <span v-if="isSticky">앱으로 보기</span>
    </button>
  </div>
</template>

<script>
import location from "@/components/icon/location.vue";

export default {
  components: {
    location,
  },
  props: {
    isSticky: { type: Boolean },
  },
};
</script>
