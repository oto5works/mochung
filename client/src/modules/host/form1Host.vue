<template>
  <div>
    <v-tabs class="tab-defaulted" v-model="tab">
      <v-tab v-for="(item, index) in hostInfo" :key="index" :value="index">
        <span>{{ item.title }} 측 정보</span>
      </v-tab>
    </v-tabs>
    <div
      class="position_relative z-index_1 --border-radius_32"
      v-if="tab !== ''"
    >
      <div
        v-for="(option, index) in hostFamily"
        :key="index"
        v-show="tab === index"
      >
        <formTitle3 :title="`${hostInfo[index].title} 정보`" />

        <div
          class="flex align-items_center justify-content_space-between gap_12"
        >
          <textField
            :label="`${hostInfo[index].title} 성함`"
            v-model="hostInfo[index].name"
          />
          <textField
            :label="`${hostInfo[index].title} 연락처`"
            v-model="hostInfo[index].tell"
          />
        </div>

        <form1HostComp
          :hostTitle="hostInfo[index].title"
          :family="option"
          @update:family="option = $event"
        />
        <formTitle3 :title="`${hostInfo[index].title}과의 관계`" />

        <div
          class="flex align-items_center justify-content_space-between gap_12"
        >
          <textField
            :label="`${hostInfo[index].title}과의 관계`"
            v-model="hostInfo[index].relation"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import form1HostComp from "@/modules/host/form1HostComp.vue";

export default {
  components: { form1HostComp },
  data: function () {
    return {
      tab: "",
    };
  },
  computed: {
    ...mapGetters({
      hostInfo: "getHostInfo",
      hostFamily: "getHostFamily",
    }),
  },
};
</script>
