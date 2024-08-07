<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="FIELDS OF EXPRESSION"
        content="Get an official Creative Cloud subscription. When you make a payment"
      />
      <kakaotalkPreview />
    </article>

    <article>
      <formTitle3 title="FIELDS OF EXPRESSION" />
      <div>
        <kakaotalkFile />
        <div class="sp_24"/>
        <textField
          type="text"
          label="메시지 제목"
          v-model="kakaotalkData.title"
        />
        <textField
          type="text"
          label="메시지 내용"
          v-model="kakaotalkData.content"
        />
        <textField
          type="text"
          label="공유버튼 내용"
          v-model="kakaotalkData.shareButton"
        />
      </div>
    </article>

    <article>
      <formTitle3 title="FIELDS OF EXPRESSION" />
      <formBox
        icon="heart"
        title="좋아요 수 표시"
        :active="kakaotalkData.fnLike"
        @click="likeSwitch"
      >
        <div class="edit-item__content">
          <v-switch
            style="pointer-events: none"
            v-model="kakaotalkData.fnLike"
            hide-details
            inset
          ></v-switch>
        </div>
      </formBox>

      <formBox
        icon="chat"
        title="댓글수 표시"
        :active="kakaotalkData.fnComment"
        @click="commentSwitch"
      >
        <div class="edit-item__content">
          <v-switch
            style="pointer-events: none"
            v-model="kakaotalkData.fnComment"
            hide-details
            inset
          ></v-switch>
        </div>
      </formBox>
    </article>
    <div class="dialog-actions">
      <buttonText @click="updateDialog(false)">
        <span>취소</span>
      </buttonText>
      <buttonDefault @click="updateValue">
        <span>확인</span>
      </buttonDefault>
    </div>


 
  </modalDialog>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";
import kakaotalkPreview from "@/modules/kakaotalk/kakaotalkPreview.vue";
import kakaotalkFile from "@/modules/file/kakaotalkFile.vue";

export default {
  components: {
    kakaotalkPreview,
    kakaotalkFile,
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      kakaotalkData: "getKakaotalkData",
      functionData: "getFunctionData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    updateValue() {
      this.functionData.fnKakaotalk = true;
      this.$emit("update:dialog", false);
    },
    likeSwitch() {
      this.kakaotalkData.fnLike = !this.kakaotalkData.fnLike;
    },
    commentSwitch() {
      this.kakaotalkData.fnComment = !this.kakaotalkData.fnComment;
    },
  },
};
</script>
