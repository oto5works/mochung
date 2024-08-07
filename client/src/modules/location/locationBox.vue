<template>
  <formBox icon="location" title="예식 장소" @click="handleClickEvent">
    <p>{{ locationData.name }}</p>
    <locationDialog
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
    locationDialog: defineAsyncComponent(() =>
      import("@/modules/location/locationDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  methods: {
    ...mapActions(["handleScrollToAction"]),
    handleClickEvent() {
      this.dialog = true;
      this.handleScrollToAction("previewLocation");
    },
  },
};
</script>
