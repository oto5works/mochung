<template>
  <formBox
    :hidden="false"
    icon="users"
    :title="`혼주 정보`"
    @click="handleClickEvent"
  >
    <buttonSelect>
      {{ this.hostInfo[0].title }}측 {{ familyName0 }}
    </buttonSelect>

    <buttonSelect>
      {{ this.hostInfo[1].title }}측 {{ familyName1 }}
    </buttonSelect>
    <familyDialog
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
    familyDialog: defineAsyncComponent(() =>
      import("@/modules/family/familyDialog.vue")
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
      hostFamily: "getHostFamily",
    }),
    familyName0() {
      const names = this.hostFamily[0].map((member) => member.name);
      return names.join(" · ");
    },
    familyName1() {
      const names = this.hostFamily[1].map((member) => member.name);
      return names.join(" · ");
    },
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
