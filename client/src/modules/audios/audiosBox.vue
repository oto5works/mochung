<template>
  <cardView icon="audios" title="배경음악" content="Use this to set the title for the section where guests can send" @click="handleClickEvent">
    <toggleSwitch
      :clickEvent="false"
      v-model="audiosData.fnAudios"
    ></toggleSwitch>
    <audiosDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </cardView>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    audiosDialog: defineAsyncComponent(() =>
      import("@/modules/audios/audiosDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      audiosData: "getAudiosData",
    }),
  },
  methods: {
    handleClickEvent() {
      this.dialog = true;
    },
  },
};
</script>
