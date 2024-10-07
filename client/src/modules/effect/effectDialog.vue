<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_24">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>

    <div class="pa_24 z-index_2">
      <effectSwitch />
      <enableView class="selected"  v-if="!effectData.fnEffect" title="기능 이용 대기 중" content="현재 이 기능은 비활성화되어 있습니다.<br>활성화하여 사용해 보세요." />
    </div>

    <div v-if="effectData.fnEffect" class="pa_24 z-index_2">
      <div class="sp_8"/>
      <div class="display_flex flex-direction_column gap_8">
        <effectColor :effect="effect" />
        <effectConfig :effect="effect" />
        <effectShape :effect="effect" />
      </div>
    </div>
  </dialogModal>
</template>
<script>

import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import tsParticles from "@/components/tsParticles/tsParticles.vue";
import effectConfig from "@/modules/effect/effectConfig.vue";
import effectShape from "@/modules/effect/effectShape.vue";
import effectColor from "@/modules/effect/effectColor.vue";

import enableView from "@/components/enable/enableView.vue";


import effectSwitch from "@/modules/effect/effectSwitch.vue";
export default {
  components: {
    tsParticles,
    effectConfig,
    effectShape,
    effectColor,

    effectSwitch,
    enableView
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      effect: {
        config: "",
        shape: "",
        color: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      effectData: "getEffectData",
    }),
  },
  created() {
    this.effect.config = this.effectData.config;
    this.effect.shape = this.effectData.shape;
    this.effect.color = this.effectData.color;
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.effectData.config = this.effect.config;
      this.effectData.shape = this.effect.shape;
      this.effectData.color = this.effect.color;
      this.effectData.fnEffect = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>