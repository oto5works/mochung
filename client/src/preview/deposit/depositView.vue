<template>
  <div id="previewDeposit">
    <sectionView v-if="depositData.fnDeposit">
      <div class="previewDeposit">
        <div class="width_100 --font-size_24 font-weight_700 pa_24">
          {{ depositData.title }}
        </div>
        <deposits />
      </div>
    </sectionView>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import "@/preview/deposit/deposit.scss";

export default {
  components: {
    deposits: defineAsyncComponent(() =>
      import("@/preview/deposit/deposits.vue")
    ),
  },

  computed: {
    ...mapGetters({
      depositData: "getDepositData",
    }),
  },
};
</script>
