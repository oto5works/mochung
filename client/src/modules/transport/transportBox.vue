<template>
  <formBox icon="transport" title="교통수단" :hidden="false" @click="handleClickEvent">
      <buttonSelect
        v-for="item in transportData"
        :key="item.title"
      >
        <span class="font-size_11">{{ item.title }}</span>
      </buttonSelect>
    <transportDialog
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
    transportDialog: defineAsyncComponent(() =>
      import("@/modules/transport/transportDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },

  computed: {
    ...mapGetters({
      transportData: "getTransportData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewTransport");
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
