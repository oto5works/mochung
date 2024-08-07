<!-- appbar.vue -->
<template>
  <buttonSelect
  class="--border-radius_16"
    v-if="$route.name === 'form'"
    @click="togglePreview"
    :class="{ selected: showPreview }"

  >
    <icon class="icon_16" v-if="!showPreview"><eye /></icon>
    <icon class="icon_16" v-if="showPreview"><x /></icon>
    <span>미리보기</span>
  </buttonSelect>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import eye from "@/components/icon/eye";
import x from "@/components/icon/x";

export default {
  components: { eye, x },
  computed: {
    ...mapGetters({
      showPreview: "getShowPreview",
    }),
  },
  methods: {
    ...mapActions(["togglePreviewAction"]),
    togglePreview() {
      this.togglePreviewAction();
    },
  },
};
</script>
