<template>
  <formBox icon="frame" title="메인 프레임" @click="dialog = true">
    <p>
      {{ selectedOption }}
    </p>
    <frameDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    frameDialog: defineAsyncComponent(() =>
      import("@/modules/frame/frameDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      homeData: "getHomeData",
      frameOptions: "getFrameOptions",
    }),
    selectedOption() {
      const selectedOption = this.frameOptions.find(
        (option) => option.value === this.homeData.frame
      );
      return selectedOption ? selectedOption.title : this.homeData.frame;
    },
  },
};
</script>
