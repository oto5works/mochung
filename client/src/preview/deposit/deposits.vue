<template>
  <div>
    <div class="deposit" v-for="(option, index) in depositData" :key="index">
      <div>
        <div @click="toggleFold(index)">
          <div>
            <span class="--font-weight">{{ option.title }} 측에 전달하기</span>
            <button>
              <icon v-if="!option.fnFold"><plus /></icon>
              <icon v-if="option.fnFold"><minus /></icon>
            </button>
          </div>
        </div>

        <div>
          <deposit
            v-for="(item, index) in option.account"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
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
    deposit: defineAsyncComponent(() =>
      import("@/preview/deposit/deposit.vue")
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