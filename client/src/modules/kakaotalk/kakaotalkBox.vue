<template>
  <formBox
    icon="kakaotalk"
    title="카카오 메세지 공유"
    :active="functionData.fnKakaotalk"
    @click="openDialog"
  >
    <div class="edit-item__content">
      <v-switch
        style="pointer-events: none"
        v-model="functionData.fnKakaotalk"
        hide-details
        inset
      ></v-switch>
    </div>
    <kakaotalkDialog
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
    kakaotalkDialog: defineAsyncComponent(() =>
      import("@/modules/kakaotalk/kakaotalkDialog.vue")
    ),
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    ...mapGetters({
      functionData: "getFunctionData",
    }),
  },
  methods: {
    openDialog() {
      if (this.functionData.fnKakaotalk === false) {
        this.dialog = true;
      } else {
        this.functionData.fnKakaotalk = false;
      }
    },
  },
};
</script>
