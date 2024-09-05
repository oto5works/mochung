<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="z-index_2">
      <titleArticle
        title="메인 효과 설정"
        content="폭죽과 꽃가루 효과로 메인 화면을 특별하게 꾸며보세요. 모바일 초대장이 개성적으로 돋보이게 만들어줍니다."
      />
      <div class="display_flex flex-direction_column gap_8">
        <effectColor :effect="effect" />
        <effectConfig :effect="effect" />
        <effectShape :effect="effect" />
      </div>
    </div>
    <effectComp style="z-index: 1" :effect="effect" />
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import effectComp from "@/modules/effect/effectComp.vue";
import effectConfig from "@/modules/effect/effectConfig.vue";
import effectShape from "@/modules/effect/effectShape.vue";
import effectColor from "@/modules/effect/effectColor.vue";

export default {
  components: {
    effectComp,
    effectConfig,
    effectShape,
    effectColor,
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