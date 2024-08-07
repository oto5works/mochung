<template>
  <formBox icon="at" title="커스텀 url 생성" @click="urlSwitch">
    <div class="edit-item__content">
      <v-switch
        style="pointer-events: none"
        v-model="urlData.fnUrl"
        hide-details
        inset
      ></v-switch>
    </div>
    <urlDialog
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
    urlDialog: defineAsyncComponent(() =>
      import("@/modules/url/urlDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      urlData: "getUrlData",
    }),
  },
  watch: {
    "urlData.fnUrl": function (newValue) {
      if (!newValue) {
        // When fnUrl becomes false, set url to an empty string
        this.urlData.url = "";
      }
    },
  },
  methods: {
    urlSwitch() {
      if (this.urlData.fnUrl === false) {
        this.dialog = true;
      } else {
        this.urlData.fnUrl = false;
      }
    },
  },
};
</script>
