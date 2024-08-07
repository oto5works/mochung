<template>
  <formBox
    icon="polygons"
    title="구성요소 설정"
    :arrow="true"
    @click="dialog = true"
  >
    <primaryDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    primaryDialog: defineAsyncComponent(() =>
      import("@/modules/primary/primaryDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
