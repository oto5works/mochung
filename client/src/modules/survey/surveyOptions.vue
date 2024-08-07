<template>
  <div class="flex flex-wrap_wrap gap_4">
    <buttonCheck
      v-for="(value, key) in surveyData.functions"
      :key="key"
      @click="toggleOption(key)"
      :selected="value"
    >
      <span>{{ functionDescriptions[key] }}</span>
    </buttonCheck>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import aniCheck from "@/components/icon/aniCheck.vue";

export default {
  components: {
    aniCheck,
  },
  data() {
    return {
      functionDescriptions: {
        fnRsvp: "참석 여부",
        fnInfo: "게스트 정보",
        fnPal: "동행인 유무",
        fnFood: "식사 유무",
        fnReceive: "청첩장 수령 여부",
        fnMessage: "요청사항",
      },
    };
  },
  computed: {
    ...mapGetters({
      surveyData: "getSurveyData",
    }),
  },
  methods: {
    toggleOption(functionName) {
      this.surveyData.functions[functionName] =
        !this.surveyData.functions[functionName];
    },
  },
};
</script>
