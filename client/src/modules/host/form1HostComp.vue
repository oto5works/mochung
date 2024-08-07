<template>
  <div>
    <div v-for="(item, index) in family" :key="index" :value="index">
      <formTitle3 :title="`${hostTitle} ${item.title} 정보`" />
      <div class="flex gap_12">
        <textField
          :label="`${hostTitle} ${item.title} 성함`"
          v-model="item.name"
        />
        <textField
          v-if="hostFunctions.fnContact"
          :label="`${hostTitle} ${item.title} 연락처`"
          v-model="item.tell"
        />

        <div
          class="flex align-items_center justify-content_space-between height_40"
          @click="infoSwitch(index)"
        >
          <v-checkbox
            style="pointer-events: none"
            v-model="infoCheckboxState[index]"
          ></v-checkbox>

          <span class="--font-size_12 --font-weight">고인 표시</span>
        </div>
      </div>
      <div class="flex gap_12">
        <fnOption
          v-if="dialog[index]"
          optionTitle="고인 표시"
          :options="hostFamilyInfoOptions"
          :selected="item.info"
          @update:selected="updateInfo($event, index)"
          :dialog="dialog[index]"
          @update:dialog="dialog[index] = $event"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    fnOption: defineAsyncComponent(() =>
      import("@/modules/functions/fnOption.vue")
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
      dialog: dialogStates
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
