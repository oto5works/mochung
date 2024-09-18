<template>
  <div class="layout">
    <div class="layer-5">
      <div class="formSave">
        <titlePage
          :title="
          res.status === 'error'
              ? res.status
              : res.message
          "
          :content="
            res.status === 'error'
              ? res.message
              : 'How was our service? We value your feedback and strive to improve. Your rating would be greatly appreciated.'
          "
        >
          <div class="display_flex flex-direction_column gap_8">
            <buttonDefault
              v-if="res.status === 'error'"
              variant="filled"
              height="46"
              @click="saveFormData"
              ><span>retry</span></buttonDefault
            >
            <buttonDefault
              v-else
              :disabled="res.status !== 'success'"
              variant="filled"
              height="46"
              ><span>{{ res.status }}</span></buttonDefault
            >

            <buttonDefault variant="text" height="46" @click="dialog = true"
              ><span class="text-decoration_underline"
                >Leave Feedback</span
              ></buttonDefault
            >
          </div>
        </titlePage>

        <div class="illust selected">
          <illustMain />
        </div>
      </div>
    </div>
    <saveDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </div>
</template>

<script>
// Import mapActions from Vuex
import { mapActions, mapGetters } from "vuex";
import { defineAsyncComponent } from "vue";
import illustMain from "@/components/illust/illustMain";

export default {
  components: {
    illustMain,
    saveDialog: defineAsyncComponent(() =>
      import("@/modules/save/saveDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  created() {
    this.saveFormData();
  },
  computed: {
    ...mapGetters({
      res: "getRes",
    }),
  },
  methods: {
    ...mapActions(["saveFormData"]),
  },
};
</script>

<style scoped>
.formSave {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: var(--mio-theme-color-on-background);
  margin-top: var(--mio-theme-editor-spacing-top);
}
.illust {
  position: relative;
  width: 90%;
  max-width: 520px;
  height: auto;
}
.error {
  color: var(--mio-theme-color-utility-error);
}
.success {
  color: var(--primary-color);
}
.processing {
  color: var(--font-color);
}
.formSave .title {
  font-size: 6rem;
  letter-spacing: -0.02em;
  line-height: 6.5rem;
  font-weight: 800;
  font-family: "EBGaramond", "pretendard", sans-serif;
}
</style>
