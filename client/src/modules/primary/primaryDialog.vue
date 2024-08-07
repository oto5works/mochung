<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="구성요소 설정"
    :config="true"
  >
    <article>
      <primaryColor />
    </article>

    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <primaryRadius />
      <primaryOutline />
      <primaryShadow />
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
import { mapGetters } from "vuex";
import primaryColor from "@/modules/color/primaryColor.vue";
import primaryRadius from "@/modules/primary/primaryRadius.vue";
import primaryOutline from "@/modules/primary/primaryOutline.vue";
import primaryShadow from "@/modules/primary/primaryShadow.vue";

export default {
  components: {
    primaryColor,
    primaryRadius,
    primaryOutline,
    primaryShadow,
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
