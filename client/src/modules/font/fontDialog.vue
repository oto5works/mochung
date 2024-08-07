<template>
  <modalDialog
    :dialog="dialog"
    @update:dialog="updateDialog"
    title="구성요소 설정"
    :config="true"
  >
    <article>
      <fontPreview />
    </article>
    <article>
      <fontFamilyBox />
      <fontColor />
      <fontSize />
      <fontWeight />
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
import fontPreview from "@/modules/font/fontPreview.vue";
import fontFamilyBox from "@/modules/font/fontFamilyBox.vue";
import fontColor from "@/modules/color/fontColor.vue";
import fontSize from "@/modules/font/fontSize.vue";
import fontWeight from "@/modules/font/fontWeight.vue";

export default {
  components: {
    fontPreview,
    fontFamilyBox,
    fontColor,
    fontSize,
    fontWeight,
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
