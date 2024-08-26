<template>
    <cardView icon="side" title="효과 설정" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="effectData.fnEffect"
    ></toggleSwitch>
    <effectDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
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
