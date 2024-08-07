<template>
  <modalDialog :dialog="dialog" @update:dialog="updateDialog" :config="true">
    <article>
      <formTitle2
        title="지도 표시"
        content="등록한 주소를 지도 상에서 표시하여 방문자가 쉽게 주소를 확인할 수 있습니다. 카카오맵 또는 직접 업로드한 이미지를 사용하여 주소를 표시할 수 있습니다."
      />

      <div class="flex flex-wrap_wrap --justify-content gap_4">
        <buttonCheck
          @click="selectOption('kakaomap')"
          :selected="locationData.map === 'kakaomap'"
          ><span>카카오맵</span></buttonCheck
        >
        <buttonCheck
          @click="selectOption('upload')"
          :selected="locationData.map === 'upload'"
          ><span>이미지 업로드</span></buttonCheck
        >
        <buttonCheck
          @click="selectOption('disabled')"
          :selected="locationData.map === 'disabled'"
          ><span>사용 안함</span></buttonCheck
        >
      </div>
    </article>

    <article v-if="locationData.map === 'kakaomap'">
      <mapsView v-if="locationData.map === 'kakaomap'" />
    </article>

    <article v-if="locationData.map === 'upload'">
      <mapsFile />
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
import { mapGetters } from "vuex";
import aniCheck from "@/components/icon/aniCheck";

export default {
  components: {
    aniCheck,
    mapsView: defineAsyncComponent(() => import("@/modules/maps/mapsView.vue")),
    mapsFile: defineAsyncComponent(() => import("@/modules/maps/mapsFile.vue")),
  },
  props: {
    dialog: { type: Boolean },
  },
  computed: {
    ...mapGetters({
      locationData: "getLocationData",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
    selectOption(value) {
      this.locationData.map = value;
    },
  },
};
</script>

<style scoped>
.buttonSelect {
  max-width: 100%;
  padding: 4px 8px;
  border-radius: var(--border-radius-12);
}
</style>
