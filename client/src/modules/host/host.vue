<template>
  <div>
    <div v-for="(item, index) in hostInfo" :key="index" :value="index">
      <formTitle3 :title="`${item.title} 정보`" />
      <div class="flex align-items_center justify-content_space-between gap_12">
        <textField :label="`${item.title} 호칭`" v-model="item.title" />
        <textField :label="`${item.title} 성함`" v-model="item.name" />
      </div>
      <textField
        v-if="hostFunctions.fnContact"
        :label="`${item.title} 연락처`"
        v-model="item.tell"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      hostFunctions: "getHostFunctions",
      hostInfo: "getHostInfo",
    }),
  },
  methods: {
    updateDialog(value) {
      this.$emit("update:dialog", value);
    },
  },
};
</script>
