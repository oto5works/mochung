<template>
  <dialogBottom :dialog="dialog" title="연락하기" @update:dialog="updateDialog">
    <introContactItem
      v-for="item in hostContact"
      :key="item.hostName"
      :label="item.name"
      :content="generateContent(item)"
      :tell="item.tell"
    >
    </introContactItem>
  </dialogBottom>
</template>
<script>
import { mapGetters } from "vuex";
import introContactItem from "@/preview/intro/introContactItem.vue";

export default {
  components: {
    introContactItem,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      hostContact: "getHostContact",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    generateContent(item) {
      return `
        <div class="display_flex gap_4">
          ${item.hostName ? `<span>${item.hostName}</span>` : ""}
          <span>${item.title}</span>
        </div>
      `;
    },
  },
};
</script>
