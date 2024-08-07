<template>
  <formBox icon="side" title="효과 설정" @click="handleClickEvent">
    <v-switch
      style="pointer-events: none"
      v-model="effectData.fnEffect"
      hide-details
      inset
    ></v-switch>
    <effectDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    effectDialog: defineAsyncComponent(() =>
      import("@/modules/effect/effectDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      effectData: "getEffectData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      if (this.effectData.fnEffect === false) {
        this.dialog = true;
      } else {
        this.effectData.fnEffect = false;
      }
      this.handleScrollToAction("previewHome");
    },
  },
};
</script>
