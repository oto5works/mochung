<template>
    <div v-for="(item, index) in family" :key="index" :value="index">
      <titleSection :title="`${hostTitle} ${item.title} 정보`" />
      <div class="display_flex gap_24">
        <formField
          :label="`${hostTitle} ${item.title} 성함`"
          v-model="item.name"
        />
        <formField
          v-if="hostFunctions.fnContact"
          :label="`${hostTitle} ${item.title} 연락처`"
          v-model="item.tell"
        />
      </div>

      <checkbox
          :clickEvent="false"
          v-model="infoCheckboxState[index]"
          @click="infoSwitch(index)"
          label="고인표시"
        ></checkbox>

      <selectorOption
        v-if="dialog[index]"
        optionTitle="고인 표시"
        :options="hostFamilyInfoOptions"
        :selected="item.info"
        @update:selected="updateInfo($event, index)"
        :dialog="dialog[index]"
        @update:dialog="dialog[index] = $event"
      />
      <div class="sp_32"/>
    </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    selectorOption: defineAsyncComponent(() =>
      import("@/components/selector/selectorOption.vue")
    ),
  },
  props: {
    hostTitle: { type: String },
    family: { type: Object, Array },
  },
  data() {
    // 초기에 각 가족 항목에 대한 다이얼로그 상태를 false로 초기화합니다.
    const dialogStates = this.family.map(() => false);

    return {
      dialog: dialogStates,
    };
  },
  computed: {
    ...mapGetters({
      hostFunctions: "getHostFunctions",
      hostFamilyInfoOptions: "getHostFamilyInfoOptions",
    }),
    infoCheckboxState() {
      // Create an array to store checkbox states for each family item
      return this.family.map((item) => item.info !== false);
    },
  },
  methods: {
    infoSwitch(index) {
      if (this.family[index].info === false) {
        this.dialog[index] = true;
      } else {
        this.family[index].info = false;
      }
    },
    updateInfo(value, index) {
      this.family[index].info = value;
    },
  },
};
</script>
