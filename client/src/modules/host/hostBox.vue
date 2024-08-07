<template>
  <formBox
  :hidden="false"
    icon="heart"
    :title="`${this.hostInfo[0].title} · ${this.hostInfo[1].title} 정보`"
    @click="handleClickEvent"
  >
      <buttonSelect >
        {{ this.hostInfo[0].title }} {{ this.hostInfo[0].name }}
      </buttonSelect>

      <buttonSelect >
        {{ this.hostInfo[1].title }} {{ this.hostInfo[1].name }}
      </buttonSelect>

    <hostDialog
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
    hostDialog: defineAsyncComponent(() =>
      import("@/modules/host/hostDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewIntro");
    },
  },
};
</script>

<style scoped>
.buttonSelect {
  max-width: 100%;
  padding: 4px 8px;
  border-radius: var(--border-radius-12);
  min-height: unset;
}
</style>
