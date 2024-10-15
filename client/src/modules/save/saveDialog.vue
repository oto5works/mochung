<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="FIELDS 22OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
    </div>
    <div class="pa_modal">
      <saveRating v-model="rating" :maxStars="5" />
      <formArea
        label="고객님의 의견을 함께 남겨주세요. (선택사항)"
        v-model="content"
      />
    </div>
    <div class="dialog-actions">
      <buttonDefault class="width_100" variant="filled" height="46" @click="updateDialog(false)"
        ><span>Confirm</span></buttonDefault
      >
    </div>
  </dialogModal>
</template>
<script>
import formArea from "@/components/formField/formArea.vue";
import saveRating from "@/modules/save/saveRating.vue";

export default {
  components: {
    formArea,
    saveRating,
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      rating: 0,
      content: "",
    };
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
