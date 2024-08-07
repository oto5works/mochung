<template>
  <div
    class="position_relative flex flex-direction_column gap_8 width_100 --border-radius_32"
  >
    <div
      class="position_relative last-child_h-hr_display_none --pa_4-4-0 --border-radius_24"
      v-for="(item, index) in family"
      :key="index"
      :value="index"
    >
      <div class="sp_12" />
      <div class="flex align-items_center gap_18">
        <div class="font-size_14 --font-weight">
          {{ hostTitle }}측 혼주 {{ index + 1 }}
        </div>
        <button @click="handleDelete(index)">
          <icon class="icon_16"><x /></icon>
        </button>
      </div>
      <div class="sp_32" />
      <div class="flex gap_12">
        <textField label="호칭" v-model="item.title" />
        <textField
          :label="`${hostTitle} ${item.title} 성함`"
          v-model="item.name"
        />
      </div>
      <div class="flex gap_12">
        <textField
          v-if="hostFunctions.fnContact"
          :label="`${hostTitle} ${item.title} 연락처`"
          v-model="item.tell"
        />
        <div
          class="flex flex_1 align-items_center justify-content_space-between height_40"
          @click="infoSwitch(index)"
        >
          <div class="flex align-items_center gap_4">
            <v-checkbox
              style="pointer-events: none"
              v-model="infoCheckboxState[index]"
            ></v-checkbox>
            <span class="--font-size_12 --font-weight">고인 표시</span>
          </div>
          <fnSelect
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
      <div class="absolute_100 overlay_pc --display_block-none-none" />
      <div
        class="absolute_100 outline_pc box-shadow_3-pc --display_block-none-none"
      />
      <div class="h-hr --display_none-block-block" />
    </div>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

export default {
  components: {
    fnSelect: defineAsyncComponent(() =>
      import("@/modules/functions/fnSelect.vue")
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
    handleDelete(index) {
      // Emit an event with the index to be deleted
      this.$emit("handleDelete", index);
    },
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
