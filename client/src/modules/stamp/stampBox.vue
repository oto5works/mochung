<template>
  <formBox icon="stamp" title="스탬프" @click="dialog = true">
    <p>
      {{ selectedOption }}
    </p>
    <stampDialog
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
    stampDialog: defineAsyncComponent(() =>
      import("@/modules/stamp/stampDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      customData: "getCustomData",
      stampOptions: "getStampOptions",
    }),
    selectedOption() {
      const selectedOption = this.stampOptions.find(
        (option) => option.value === this.customData.stamp
      );
      return selectedOption ? selectedOption.title : this.customData.stamp;
    },
  },
};
</script>
