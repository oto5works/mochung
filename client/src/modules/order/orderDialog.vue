<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <slickList />
    </article>
   

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>

  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    slickList: defineAsyncComponent(() =>
      import("@/modules/order/slickList.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
