<template>
  <div>
    <textField type="text" label="제목" v-model="introData.title" />
    <tiptap v-model="introData.content" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import tiptap from "@/modules/tiptap/tiptap.vue";

export default {
  components: { tiptap },
  computed: {
    ...mapGetters({
      introData: "getIntroData",
    }),
  },
};
</script>
