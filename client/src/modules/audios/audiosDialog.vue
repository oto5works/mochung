<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">

    <article>
      <formTitle2
        title="배경 음악 설정"
        content="모바일 청첩장에 특별한 분위기를 줄 배경음악을 선택하거나 자신의 음악을 업로드하세요."
      />

      <div class="flex flex-wrap_wrap --justify-content gap_4">
        <buttonCheck
          @click="selectOption('defaulted')"
          :selected="tab === 'defaulted'"
          ><span>기본 음악</span></buttonCheck
        >
        <buttonCheck
          @click="selectOption('youtube')"
          :selected="tab === 'youtube'"
          ><span>유튜브 링크로 올리기</span></buttonCheck
        >
      </div>
    </article>


   
    <div v-if="tab === 'defaulted'">
      <article>
        <formTitle3 title="기본 음악" />
      </article>
      <audiosOptions />
    </div>

    <article v-if="tab === 'youtube'">
      <formTitle3 title="유튜브 링크" />
      <audiosForm />
    </article>

    <article>
      <formBox icon="audioAuto" title="자동 재생 설정" @click="toggleSwitch()">
        <div class="edit-item__content">
          <v-switch
            v-model="audiosData.fnAutoPlay"
            hide-details
            inset
            :true-value="1"
            :false-value="0"
          ></v-switch>
        </div>
      </formBox>
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
import { defineAsyncComponent } from "vue";

export default {
  components: {
    audiosOptions: defineAsyncComponent(() =>
      import("@/modules/audios/audiosOptions.vue")
    ),
    audiosForm: defineAsyncComponent(() =>
      import("@/modules/audios/audiosForm.vue")
    ),
  },
  props: {
    dialog: { type: Boolean },
  },
  data() {
    return {
      tab: "defaulted",
    };
  },
  computed: {
    ...mapGetters({
      audiosData: "getAudiosData",
    }),
  },
  methods: {
    toggleSwitch() {
      this.audiosData.fnAutoPlay = !this.audiosData.fnAutoPlay;
    },
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    saveValue() {
      this.audiosData.fnAudios = true;
      this.$emit("update:dialog", false);
    },
    selectOption(value) {
      this.tab = value;
    },
  },
};
</script>
