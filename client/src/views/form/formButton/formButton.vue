<template>
  <div class="formButton">
    <button class="formButton-button button-2" @click="dialog = true">
      <icon><eye /></icon>
    </button>
    <button class="formButton-button button-1" @click="dialog = true">
      <icon><save /></icon>
    </button>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

import { mapGetters, mapActions } from "vuex";
import save from "@/components/icon/save";
import eye from "@/components/icon/eye";

export default {
  components: {
    save,
    eye,
    saveTitle: defineAsyncComponent(() =>
      import("@/modules/save/saveTitle.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      section: "getSection",
      form1TabOptions: "getForm1TabOptions",
    }),
  },
  methods: {
    ...mapActions(["updateSection"]),
  },
};
</script>

<style scoped>
.formButton {
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 12px;
  right: 48px;
  bottom: var(--mio-theme-editor-spacing-top);
}
.formButton-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.button-1 {
  color: rgb(var(--mio-theme-color-on-primary));
  background-color: rgb(var(--mio-theme-color-primary));
  box-shadow: 0 10px 20px -10px rgba(var(--mio-theme-color-primary),.3);
}
.button-2 {
  color: rgb(var(--mio-theme-color-primary));
  border: 1px solid rgb(var(--mio-theme-color-primary));
}
</style>
