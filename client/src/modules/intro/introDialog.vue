<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <selectorTitle option="introData" />
      <div class="sp_8" />
      <tiptap v-model="introData.content" />
      <div class="form-spacing" />
    </div>
  </dialogModal>
</template>
<script>
import { mapGetters } from "vuex";
import tiptap from "@/components/tiptap/tiptap.vue";
import selectorTitle from "@/components/selector/selectorTitle.vue";
export default {
  components: {
    tiptap,
    selectorTitle,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      introData: "getIntroData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
