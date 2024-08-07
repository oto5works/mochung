<template>
  <formBox
    icon="order"
    title="순서 변경"
    :arrow="true"
    @click="dialog = true"
  >
    <orderDialog
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
    orderDialog: defineAsyncComponent(() =>
      import("@/modules/order/orderDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false
    };
  },
};
</script>
