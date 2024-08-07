<template>
  <formBox icon="audios" title="배경음악" @click="handleClickEvent">
      <v-switch
        style="pointer-events: none"
        v-model="audiosData.fnAudios"
        hide-details
        inset
      ></v-switch>
    <audiosDialog
      v-if="dialog"
      :dialog="dialog"
      @update:dialog="dialog = $event"
    />
  </formBox>
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
      if (this.audiosData.fnAudios === false) {
        this.dialog = true;
      } else {
        this.audiosData.fnAudios = false;
      }
    },
  },
};
</script>
