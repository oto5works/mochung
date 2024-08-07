<template>
  <div id="previewDeposit">
    <section v-if="depositData.fnDeposit">
      <article>
        <div class="sp_72" />
        <div class="pa_24">
          <div class="previewSubTitle">BANK ACCOUNT</div>
          <div class="sp_12" />
          <div class="flex --justify-content width_100">
            <div class="previewTitle">{{ depositData.title }}</div>
          </div>
          <div class="sp_12" />
        </div>

        <stampView
          v-if="stamp"
          class="align-items_center --primary-color"
          :stamp="stamp"
          type="1"
        />
        <div class="h-hr --display_none-none-block" />
        <div class="depositBank__wrap flex flex-direction_column gap_12">
          <depositBank />
        </div>
        <div class="sp_72" />
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import depositStyle from "@/views/preview/deposit/depositStyle.scss";

export default {
  components: {
    depositStyle,
    depositBank: defineAsyncComponent(() =>
      import("@/views/preview/deposit/depositBank")
    ),
    stampView: defineAsyncComponent(() =>
      import("@/modules/stamp/stampView.vue")
    ),
  },

  computed: {
    ...mapGetters({
      depositData: "getDepositData",
      stamp: "getStamp",
    }),
  },
};
</script>
<style scoped>
.preview article {
  border-radius: unset;
}
</style>
