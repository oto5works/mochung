<template>
  <div>
    <v-expansion-panels
      class="deposit"
      v-for="(option, index) in depositData"
      :key="index"
    >
      <v-expansion-panel class="--border-radius_32">
        <v-expansion-panel-title @click="toggleFold(index)">
          <div class="position_relative pa_24 width_100">
            <!-- 기본값, 라인 일경우 -->
            <div class="--display_block-none-block">
                <div class="sp_20 --display_none-none-block" />
                <div class="sp_12 --display_block-none-none" />

              <div
                class="flex align-items_center justify-content_space-between height_40"
              >
                <span class="--font-weight"
                  >{{ option.title }} 측에 전달하기</span
                >
                <button>
                  <icon v-if="!option.fnFold"
                    ><plus
                  /></icon>
                  <icon v-if="option.fnFold"
                    ><minus
                  /></icon>
                </button>
              </div>
            </div>
            <!-- 카드 일경우 -->
            <div class="--display_none-block-none">
              <div
                class="deposit-bank animation flex align-items_center justify-content_space-between pa_24"
              >
                <span class="--font-weight"
                  >{{ option.title }} 측에 전달하기</span
                >
                <button>
                  <icon v-if="!option.fnFold"
                    ><plus
                  /></icon>
                  <icon v-if="option.fnFold"
                    ><minus
                  /></icon>
                </button>
                <div class="absolute_100 outline_pc box-shadow_3-pc" />
              </div>
            </div>
            <div class="h-hr --display_block-none-none" />
          </div>
        </v-expansion-panel-title>
        <div class="h-hr --display_none-none-block" />

        <v-expansion-panel-text>
          <depositBankComponent
            v-for="(item, index) in option.account"
            :key="index"
            :item="item"
          />
        </v-expansion-panel-text>
        <div class="absolute_100 overlay_pc --display_none-block-none" />
        <div
          class="absolute_100 outline_pc box-shadow_3-pc --display_none-block-none"
        />
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";

import plus from "@/components/icon/plus.vue";
import minus from "@/components/icon/minus.vue";

export default {
  components: {
    plus,
    minus,
    depositBankComponent: defineAsyncComponent(() =>
      import("@/views/preview/deposit/depositBankComponent")
    ),
  },
  computed: {
    ...mapGetters({
      depositData: "getPreviewDepositData",
    }),
  },
  methods: {
    toggleFold(index) {
      this.depositData[index].fnFold = !this.depositData[index].fnFold;
    },
  },
};
</script>
<style scoped>
.v-expansion-panel > .absolute_100 {
  width: 87.7%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
