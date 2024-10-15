<template>
  <dialogModal :dialog="dialog" @update:dialog="updateDialog">
    <div class="pa_modal">
      <titleArticle
        title="폰트 설정"
      />
    </div>

    <div class="pa_modal">
      <fontPreview />
    </div>
    

   

      <fontFamilyBox />
      <fontColor />
      <fontSize />
      <fontWeight />
   

    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateDialog(false)">
        <span>확인</span>
      </buttonDefault>
    </div>
  </dialogModal>
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
