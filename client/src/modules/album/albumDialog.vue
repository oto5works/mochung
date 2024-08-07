<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <fnTitle option="albumData" />
      <tiptap v-model="albumData.content" />
    </article>

   

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="saveValue">
        <span>확인</span>
      </buttonDefault>
    </div>

  </modalDialog>
</template>
<script>
import { mapGetters } from "vuex";
import fnTitle from "@/modules/functions/fnTitle.vue";
import tiptap from "@/modules/functions/tiptap.vue";

export default {
  components: {
    fnTitle,
    tiptap,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      albumData: "getAlbumData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.albumData.fnAlbum = true;
      this.$emit("update:dialog", false);
    },
  },
};
</script>
